(ns devneya.prompt
  (:require [devneya.gpt :as gpt]
            [devneya.code_formatter :as formatter]
            [devneya.exec :as exec]
            [devneya.err :as err]
            [failjure.core :as f]
            [taoensso.timbre :as timbre]
            [devneya.deno_err :as denerr]))

(defn make-prompt 
  "Get code filename and prompt.\n
   Send prompt to write a code to AI and save result in *CODE_FILENAME from config* file.\n
   Return fail of *get-chatgpt-api-response*, if occurs."
  [config date prompt logdata]
  (f/if-let-ok? ;if gpt/get-chatgpt-api-response doesn't return error, then save respone in file, otherwise return error.
   [response (gpt/get-chatgpt-api-response config date prompt)]
   (spit (:CODE_FILENAME config) (formatter/remove-triple-back-quote response 0 logdata))
   (do (timbre/error "Failed to get chat GPT response") 
       response)))

(defn make-initial-prompt
  [config date prompt]
  (timbre/info "Creating initial prompt...") 
  (make-prompt config date (str "Write only code. Do not use ```. " prompt) "Got chat GPT code for initial request"))

(defn make-fix-prompt
  "Generate gpt fix prompt."
  [config date exec-error attempt]
  (timbre/info "Creating fix prompt...") 
  (make-prompt config date
        (str "Here is a code:\n"
             (slurp (:CODE_FILENAME config))
             "\nAn error occurred while executing this code:\n"
             exec-error
             "\nRewrite code to fix it. Write only code. Do not use ```.")
        (str "Got chat GPT fixes for attempt" attempt ".")))

(defn make-fix-prompt-chain
  "Make fix prompt chain: try to execute current code and send fix prompt, if needed, *MAX_REPS* times.\n
   Return fail, if couldn't fix the code or if exception occured on some fix prompt or execution."
  ([config date attempt]
   ;;ideally rewrite this part once again by returnig from exec exaxct type of fail, if code isn't working
   ;;in this case we can use if-let-fail, which will catch it, and handling would be more straightforward
   (f/if-let-ok? ;;get execution error and if it isn't exception, process it, otherwise return it
    [exec-error (err/extend-execution-fail (exec/exec-code config))]
    (when (not-empty exec-error)
      (timbre/info (str "Deno deployment failed on attempt " attempt "! Retrying..."))
      (if (< attempt (:MAX_REPS config))
        (f/if-let-ok? ;;get fix prompt result and, if it isn't exception, then continue recursion, otherwise return it
         [_ (err/extend-fix-prompt-fail (make-fix-prompt config date (denerr/deno-error-formatter config exec-error) attempt) attempt)]
         (make-fix-prompt-chain config date (inc attempt)))
        (f/fail "Couldn't generate working code for the given request.\n"))))) ;;return fail if there is no more reps available, but code is not working
  ([config date]
   (make-fix-prompt-chain config date 1)))

(defn make-prompt-chain
  "Make prompt chain: one initial prompt, then start fix prompt chain.\n
   Return fail, if couldn't generate working code or if it occured on some prompt or execution."
  [config date prompt] 
  (f/if-let-ok? ;;try initial prompt result, if it is not exception start fix prompt, otherwise return it
   [_ (err/extend-initial-prompt-fail (make-initial-prompt config date prompt))]
   (make-fix-prompt-chain config date)))