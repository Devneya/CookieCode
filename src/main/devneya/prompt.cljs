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
  "Get the way to make fix request, code check method, request attempt limit, channel with generated code or fail and current attempt.\n
   Make fix prompt chain: try to execute current code and send fix prompt, if check isn't passed, max *attempt-limit* times.\n
   Return async channel with fail if couldn't generate checked code and if it occured on some generation request, or fixed code otherwise."
  ([make-fix-request make-code-check attempt-limit generated-code-channel attempt]
   (log/info "Fix prompt chain started.")
   (let [out-chan (chan)]
     (go (>! out-chan (f/if-let-failed?
                       [generated-code-or-fail (<! generated-code-channel)]
                       generated-code-or-fail
                       (f/if-let-failed?
                        [check-result (<! (make-code-check generated-code-or-fail))]
                        (do (log/info (str "Code check failed on attempt " attempt "! Retrying..."))
                            (if (< attempt attempt-limit)
                              (<! (make-fix-prompt-chain
                                   make-fix-request
                                   make-code-check
                                   attempt-limit
                                   (make-fix-request generated-code-or-fail check-result)
                                   (inc attempt)))
                              (f/fail "Couldn't generate working code for the given request.\n")))
                        generated-code-or-fail))))
     out-chan))
  ([make-fix-request make-code-check attempt-limit generated-code-channel]
   (make-fix-prompt-chain make-fix-request make-code-check attempt-limit generated-code-channel 1))
  ([make-fix-request attempt-limit generated-code-channel]
   (make-fix-prompt-chain make-fix-request any? attempt-limit generated-code-channel 1)))

(defn make-prompt-chain
  "Get generation model api (function, which get request text and make initial generation request, 
   and function, which get generated code and error and make fix request), 
   language description (name and check method, which code should pass to be correct), 
   request attempt limit and text of the request.\n
   By default language is set to JavaScript with evaluation and model is set to ChatGPT.
   Make prompt chain: one initial prompt, then start fix prompt chain.\n
   Return async channel with fail, if couldn't generate checked code and if it occured on some prompt, or with working code."
  ([make-initial-generation-request make-fix-request language-name make-code-check attempt-limit code-request]
   (make-fix-prompt-chain
    make-fix-request
    make-code-check
    attempt-limit
    (make-initial-generation-request language-name code-request)))
  ([openai-key language-name make-code-check attempt-limit code-request]
   (make-prompt-chain
    (partial gpt/initial-request openai-key)
    (partial gpt/fix-request openai-key)
    language-name
    make-code-check
    attempt-limit
    code-request))
  ([openai-key attempt-limit code-request]
   (make-prompt-chain
    (partial gpt/initial-request openai-key)
    (partial gpt/fix-request openai-key)
    "JavaScript"
    exec/exec-code
    attempt-limit
    code-request)))

(defn make-prompt-promise
  ([make-initial-generation-request make-fix-request language-name make-code-check attempt-limit code-request]
   (chan->promise (make-prompt-chain
                   make-initial-generation-request
                   make-fix-request
                   language-name
                   make-code-check
                   attempt-limit
                   code-request)))
  ([openai-key language-name make-code-check attempt-limit code-request]
   (chan->promise (make-prompt-chain
                   openai-key
                   language-name
                   make-code-check
                   attempt-limit
                   code-request)))
  ([openai-key attempt-limit code-request]
   (chan->promise (make-prompt-chain openai-key attempt-limit code-request))))

(defn make-js-request
  [openai-key code-request]
  (chan->promise (gpt/initial-request openai-key "JavaScript" code-request)))

(:export make-prompt-promise)
(:export make-js-request)