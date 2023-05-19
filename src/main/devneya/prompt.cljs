(ns devneya.prompt
  (:require [devneya.gpt :as gpt]
            [devneya.codeformatter :as formatter]
            [devneya.exec :as exec]
            [devneya.err :as err]
            [failjure.core :as f]
            [taoensso.timbre :as timbre]
            [devneya.denoerr :as denerr]
            [cljs.core.async :refer [<!]])
  (:require-macros [failjure.core]
                   [cljs.core.async.macros :refer [go]]))

(defn safe-handle-response-channel
  [response-channel handler] 
  (go (let [response (<! response-channel)]
        (when (not (f/failed? response))
          (handler response)))))

(defn make-prompt-channel
  "Get code filename and prompt.\n
   Send prompt to write a code to AI and returns formatted response.\n
   Return fail of *get-chatgpt-api-response*, if occurs."
  [openai-key date prompt logdata]
   (safe-handle-response-channel (gpt/get-chatgpt-api-async-response openai-key date prompt) (partial formatter/remove-triple-back-quote 0 logdata))
  )

(defn make-initial-prompt
  [openai-key date prompt]
  (timbre/info "Creating initial prompt...") 
  (make-prompt-channel openai-key date (str "Write only code. Do not use ```. " prompt) "Got chat GPT code for initial request"))

(defn make-fix-prompt
  "Generate gpt fix prompt."
  [openai-key date generated-code exec-error attempt]
  (timbre/info "Creating fix prompt...") 
  (make-prompt-channel openai-key date
        (str "Here is a code:\n"
             generated-code
             "\nAn error occurred while executing this code:\n"
             exec-error
             "\nRewrite code to fix it. Write only code. Do not use ```.")
        (str "Got chat GPT fixes for attempt" attempt ".")))

(defn make-fix-prompt-chain
  "Make fix prompt chain: try to execute current code and send fix prompt, if needed, *MAX_REPS* times.\n
   Return fail, if couldn't fix the code or if exception occured on some fix prompt or execution."
  ([openai-key attempt-limit date generated-code-channel attempt]
   ;;ideally rewrite this part once again by returnig from exec exaxct type of fail, if code isn't working
   ;;in this case we can use if-let-fail, which will catch it, and handling would be more straightforward
   (safe-handle-response-channel
    generated-code-channel
    (fn [response]
      (let [exec-result (exec/exec-code response)]
        (if (f/failed? exec-result)
          (do (timbre/info (str "Evaluation failed on attempt " attempt "! Retrying..."))
              (if (< attempt attempt-limit)
                (make-fix-prompt-chain 
                 openai-key 
                 attempt-limit
                 date 
                 (make-fix-prompt openai-key date response (denerr/deno-error-formatter exec-result) attempt) 
                 (inc attempt))
                (f/fail "Couldn't generate working code for the given request.\n"))) ;;return fail if there is no more reps available, but code is not working
          response))))) 
  
  ([openai-key attempt-limit date generated-code-channel]
   (make-fix-prompt-chain openai-key attempt-limit date generated-code-channel 1)))

(defn make-prompt-chain
  "Make prompt chain: one initial prompt, then start fix prompt chain.\n
   Return fail, if couldn't generate working code or if it occured on some prompt or execution."
  [openai-key attempt-limit date prompt]
  (make-fix-prompt-chain
   openai-key
   attempt-limit
   date
   (make-initial-prompt openai-key date prompt)))

(:export make-prompt-chain)