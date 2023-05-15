(ns devneya.prompt
  (:require [devneya.gpt :as gpt]
            [devneya.codeformatter :as formatter]
            [devneya.exec :as exec]
            [devneya.err :as err]
            [failjure.core :as f]
            [taoensso.timbre :as timbre]
            [devneya.denoerr :as denerr])
  (:require-macros [failjure.core]))

(defn make-prompt 
  "Get code filename and prompt.\n
   Send prompt to write a code to AI and returns formatted response.\n
   Return fail of *get-chatgpt-api-response*, if occurs."
  [openai-key date prompt logdata]
  (f/if-let-ok? ;if gpt/get-chatgpt-api-response doesn't return error, then save respone in file, otherwise return error.
   [response (gpt/get-chatgpt-api-response openai-key date prompt)]
   response
   ;;(formatter/remove-triple-back-quote response 0 logdata)
   (do (timbre/error "Failed to get chat GPT response") 
       response)))

(defn make-initial-prompt
  [openai-key date prompt]
  (timbre/info "Creating initial prompt...") 
  (make-prompt openai-key date (str "Write only code. Do not use ```. " prompt) "Got chat GPT code for initial request"))

(defn make-fix-prompt
  "Generate gpt fix prompt."
  [openai-key date generated-code exec-error attempt]
  (timbre/info "Creating fix prompt...") 
  (make-prompt openai-key date
        (str "Here is a code:\n"
             generated-code
             "\nAn error occurred while executing this code:\n"
             exec-error
             "\nRewrite code to fix it. Write only code. Do not use ```.")
        (str "Got chat GPT fixes for attempt" attempt ".")))

(defn make-fix-prompt-chain
  "Make fix prompt chain: try to execute current code and send fix prompt, if needed, *MAX_REPS* times.\n
   Return fail, if couldn't fix the code or if exception occured on some fix prompt or execution."
  ([openai-key attempt-limit date generated-code attempt]
   ;;ideally rewrite this part once again by returnig from exec exaxct type of fail, if code isn't working
   ;;in this case we can use if-let-fail, which will catch it, and handling would be more straightforward
   (let [exec-result (exec/exec-code generated-code)]
     (when (f/failed? exec-result)
       (timbre/info (str "Evaluation failed on attempt " attempt "! Retrying..."))
       (if (< attempt attempt-limit)
         (f/if-let-ok? ;;get fix prompt result and, if it isn't exception, then continue recursion, otherwise return it
          [fixed-code (err/extend-fix-prompt-fail
                       (make-fix-prompt openai-key date generated-code (denerr/deno-error-formatter exec-result) attempt)
                       attempt)]
          (make-fix-prompt-chain openai-key attempt-limit date fixed-code (inc attempt)))
         (f/fail "Couldn't generate working code for the given request.\n"))))) ;;return fail if there is no more reps available, but code is not working
   ([openai-key attempt-limit date generated-code]
    (make-fix-prompt-chain openai-key attempt-limit date generated-code 1)))

(defn make-prompt-chain
  "Make prompt chain: one initial prompt, then start fix prompt chain.\n
   Return fail, if couldn't generate working code or if it occured on some prompt or execution."
  [openai-key attempt-limit date prompt] 
  (f/if-let-ok? ;;try initial prompt result, if it is not exception start fix prompt, otherwise return it
   [generated-code (err/extend-initial-prompt-fail (make-initial-prompt openai-key date prompt))]
   (make-fix-prompt-chain openai-key attempt-limit date generated-code)))