(ns devneya.promptSpec
  (:require [cljs.spec.alpha :as s]
            [devneya.exec :refer [exec-code]]
            [devneya.lint :refer [lint-check]]
            [cljs.core.async :refer [chan >!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defprotocol Icode-generator
  (request-initial 
    [this language-name code-request] 
    "Get code request as string. \n
     Generate and return requested code or fail.")
  (request-fix 
    [this language-name generated-code check-error] 
    "Get code language name, code itself and check error on it as strings. \n
     Tries to fix error and return new code."))

(def langauage-description-spec (s/keys :req-un [::name ::code-check]))

(defn no-check [_]
  (let [output-channel (chan)]
    (go (>! output-channel true))
    output-channel))

(def js-eval-description
  {:name "JavaScript" :code-check exec-code})

(def js-lint-description
  {:name "JavaScript" :code-check lint-check})

(:export js-eval-description) 
(:export js-lint-description) 