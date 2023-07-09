(ns devneya.prompt
  (:require [failjure.core :as f]
            [cljs.core.async :refer [chan <! >!]]
            [devneya.utils :refer [chan->promise]]
            [devneya.gpt :refer [gpt-generator-builder]]
            [taoensso.timbre :as log]
            [devneya.promptSpec :as p-spec] 
            [cljs.spec.alpha :as spec])
  (:require-macros [failjure.core]
                   [cljs.core.async.macros :refer [go]])
  (:refer-clojure :exclude [parse-double]))

(defn make-fix-prompt-chain
  "Get the way to make fix request, code check method, request attempt limit, channel with generated code or fail and current attempt.\n
   Make fix prompt chain: try to execute current code and send fix prompt, if check isn't passed, max *attempt-limit* times.\n
   Return async channel with fail if couldn't generate checked code and if it occured on some generation request, or fixed code otherwise."
  ([make-fix-request code-check attempt-limit generated-code-channel attempt]
   (log/info "Fix prompt chain started.")
   (let [out-chan (chan)]
     (go (>! out-chan (f/if-let-failed?
                       [generated-code-or-fail (<! generated-code-channel)]
                       generated-code-or-fail
                       (f/if-let-failed?
                        [check-result (<! (code-check generated-code-or-fail))]
                        (do (log/info (str "Code check failed on attempt " attempt "! Retrying..."))
                            (if (< attempt attempt-limit)
                              (<! (make-fix-prompt-chain
                                   make-fix-request
                                   code-check
                                   attempt-limit
                                   (make-fix-request generated-code-or-fail check-result)
                                   (inc attempt)))
                              (f/fail "Couldn't generate working code for the given request.\n")))
                        generated-code-or-fail))))
     out-chan))
  ([make-fix-request language-description attempt-limit generated-code-channel]
   (make-fix-prompt-chain make-fix-request language-description attempt-limit generated-code-channel 1)))

(defn generate-code
  "Get code generator api, implementing interface Icode-generator, 
   language description as langauage-description-spec or just name of the language (in this case no check will be made), 
   request attempt limit and text of the request.\n
   By default language is set to JavaScript with evaluation and model is set to ChatGPT.
   Make prompt chain: one initial prompt, then start fix prompt chain.\n
   Return async channel with fail, if couldn't generate checked code and if it occured on some prompt, or with working code."
  ([code-generator code-language attempt-limit code-request]
   (let [language-description
         (if (spec/valid? p-spec/langauage-description-spec code-language)
           code-language
           {:language-name code-language :code-check p-spec/no-check})]
     (make-fix-prompt-chain
      (partial p-spec/request-fix code-generator (:language-name language-description))
      (:code-check language-description)
      attempt-limit
      (p-spec/request-initial code-generator (:language-name language-description) code-request))))
  ([openai-key attempt-limit code-request]
   (generate-code
    (gpt-generator-builder openai-key)
    p-spec/js-eval-description
    attempt-limit
    code-request)))

(defn generate-code-promise
  ([openai-key attempt-limit code-request]
   (chan->promise (generate-code openai-key attempt-limit code-request))))

(defn make-js-request
  [openai-key code-request]
  (chan->promise (p-spec/request-initial (gpt-generator-builder openai-key) "JavaScript" code-request)))

(:export generate-code-promise)
(:export make-js-request)