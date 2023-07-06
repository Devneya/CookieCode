(ns devneya.exec
  (:require [failjure.core :as f]
            [cljs.core.async :refer [chan >!]]
            [taoensso.timbre :as log])
  (:require-macros [failjure.core]
                   [cljs.core.async.macros :refer [go]]))

;; (def execution-timeout 1000)

;; (defn exec-code
;;   "Get code to execute.\n
;;    Execute it with js/eval\n
;;    Return execution result or fail with compile error, if occurs."
;;   [log-id code]
;;   (log-with-id log-id "Evaluation started")
;;   (let [result-channel (chan 1)
;;         executed (atom false)
;;         worker (js/Worker. "./lib/execWorker.js")]

;;     (.postMessage worker code)
;;     (go (set!
;;          (.-onmessage worker)
;;          (fn [result]
;;            (>! result-channel result)
;;            (reset! executed true))))
;;     (go (<! (timeout execution-timeout))
;;         (log-with-id log-id "timeout passed")
;;         (when (not executed)
;;           (.terminate worker)
;;           (log-with-id log-id "worker teriminated")
;;           (>! result-channel (f/fail (str "Execution takes more then " execution-timeout " milliseconds.")))))
;;     result-channel))

(def ok-exec-result "")

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