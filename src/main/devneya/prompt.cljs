(ns devneya.prompt
  (:require [devneya.exec :as exec]
            [failjure.core :as f]
            [cljs.core.async :refer [chan <! >!]]
            [devneya.prompt :as prompt]
            [devneya.utils :refer [chan->promise]]
            [devneya.gpt :as gpt]
            [taoensso.timbre :as log])
  (:require-macros [failjure.core]
                   [cljs.core.async.macros :refer [go]])
  (:refer-clojure :exclude [parse-double]))

(defn make-fix-prompt-chain
  "Get api key, request attempt limit, current code generation channel and attempt number.\n
   Make fix prompt chain: try to execute current code and send fix prompt, if needed, *MAX_REPS* times.\n
   Return async channel with fail if couldn't fix the code and if it occured on some generation request, or fixed code otherwise."
  ([make-fix-request attempt-limit check-code generated-code-channel attempt]
   (log/info "Fix prompt chain started.")
   (let [out-chan (chan)]
     (go (>! out-chan (f/if-let-failed?
                       [generated-code-or-fail (<! generated-code-channel)]
                       generated-code-or-fail
                       (f/if-let-failed?
                        [check-result (<! (check-code generated-code-or-fail))]
                        (do (log/info (str "Code check failed on attempt " attempt "! Retrying..."))
                            (if (< attempt attempt-limit)
                              (<! (make-fix-prompt-chain
                                   make-fix-request
                                   attempt-limit
                                   check-code
                                   (make-fix-request generated-code-or-fail check-result)
                                   (inc attempt)))
                              (f/fail "Couldn't generate working code for the given request.\n")))
                        generated-code-or-fail))))
     out-chan))
  ([make-fix-request attempt-limit generated-code-channel]
   (make-fix-prompt-chain make-fix-request attempt-limit exec/exec-code generated-code-channel 1)))

(defn make-prompt-chain
  "Get api key, request attempt limit and prompt.\n
   Make prompt chain: one initial prompt, then start fix prompt chain.\n
   Return async channel with fail, if couldn't generate working code and if it occured on some prompt or with working code."
  ([make-initial-generation-request make-fix-request attempt-limit code-request]
   (make-fix-prompt-chain
    make-fix-request
    attempt-limit
    (make-initial-generation-request code-request)))
  ([openai-key attempt-limit code-request]
   (make-prompt-chain (partial gpt/initial-request openai-key) (partial gpt/fix-request openai-key) attempt-limit code-request)))

(defn make-prompt-promise
  [openai-key attempt-limit code-request]
  (chan->promise (make-prompt-chain openai-key attempt-limit code-request)))

(defn make-request
  [openai-key code-request]
  (chan->promise (gpt/initial-request openai-key code-request)))

(:export make-prompt-promise)
(:export make-request)