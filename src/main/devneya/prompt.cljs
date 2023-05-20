(ns devneya.prompt
  (:require [devneya.gpt :as gpt]
            [devneya.codeformatter :as formatter]
            [devneya.exec :as exec]
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
  "Get api key, date for logging and prompt.\n
   Send prompt to write a code to AI.\n
   Return async channel with fotmatted code or with fail, if prompt returned error."
  ([openai-key date prompt logdata]
   (safe-handle-response-channel
    (gpt/get-chatgpt-api-async-response openai-key date prompt)
    (partial formatter/remove-triple-back-quote 0 logdata)))
  ([openai-key date prompt]
   (make-prompt-channel openai-key date prompt "")))


(defn make-initial-prompt
  [openai-key date prompt]
  (timbre/info "Creating initial prompt...")
  (make-prompt-channel openai-key date (str "Write only code. Do not use ```. " prompt) "Got chat GPT code for initial request"))

(defn make-fix-prompt
  "Get api key, date for logging, code, its execution error and attempt number.\n
   Send fix prompt.\n
   Return async channel with fotmatted code or with fail."
  [openai-key date generated-code exec-error attempt]
  (timbre/info "Making fix prompt...")
  (make-prompt-channel openai-key date
                       (str "Here is a code:\n"
                            generated-code
                            "\nAn error occurred while executing this code:\n"
                            exec-error
                            "\nRewrite code to fix it. Write only code. Do not use ```.")
                       (str "Got chat GPT fixes for attempt" attempt ".")))

(defn make-fix-prompt-chain
  "Get api key, request attempt limit, date for logging, code generation channel and attempt number.\n
   Make fix prompt chain: try to execute current code and send fix prompt, if needed, *MAX_REPS* times.\n
   Return async channel with fail if couldn't fix the code and if it occured on some prompt, or fixed code otherwise."
  ([openai-key attempt-limit date generated-code-channel attempt]
   (safe-handle-response-channel
    generated-code-channel
    (fn [response]
      (f/if-let-failed?
       [exec-result (exec/exec-code response)]
       (do (timbre/info (str "Evaluation failed on attempt " attempt "! Retrying..."))
           (if (< attempt attempt-limit)
             (make-fix-prompt-chain
              openai-key
              attempt-limit
              date
              (make-fix-prompt openai-key date response (denerr/deno-error-formatter exec-result) attempt)
              (inc attempt))
             (f/fail "Couldn't generate working code for the given request.\n"))) ;;return fail if there is no more reps available, but code is not working
       response))))
  ([openai-key attempt-limit date generated-code-channel]
   (make-fix-prompt-chain openai-key attempt-limit date generated-code-channel 1)))

(defn make-prompt-chain
  "Get api key, request attempt limit, date for logging and prompt.\n
   Make prompt chain: one initial prompt, then start fix prompt chain.\n
   Return async channel with fail, if couldn't generate working code and if it occured on some prompt."
  [openai-key attempt-limit date prompt]
  (make-fix-prompt-chain
   openai-key
   attempt-limit
   date
   (make-initial-prompt openai-key date prompt)))

(:export make-prompt-chain)