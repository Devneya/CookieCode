(ns devneya.exec
  (:require [failjure.core :as f]
            [cljs.core.async :refer [chan >!]]
            [taoensso.timbre :as log])
  (:require-macros [failjure.core]
                   [cljs.core.async.macros :refer [go]]))

(def ok-exec-result true)

(defn assert-nil [exec-result]
  (if (not exec-result)
    ok-exec-result
    exec-result))

(defn exec-code
  "Get code to execute.\n
   Execute it with js/eval\n
   Return execution result or fail with compile error, if occurs."
  [code]
  (log/info "Evaluation started")
  (let [exec-chan (chan)]
    (go (>! exec-chan (assert-nil (f/try* (js/eval code)))))
    exec-chan))