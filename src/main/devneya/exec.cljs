(ns devneya.exec
  (:require [devneya.utils :refer [log-with-id]]
            [failjure.core :as f]
            [cljs.core.async :refer [chan <! >! timeout]])
  (:require-macros [failjure.core]
                   [cljs.core.async.macros :refer [go]]))

(def execution-timeout 1000)

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


(defn exec-code
  "Get code to execute.\n
   Execute it with js/eval\n
   Return execution result or fail with compile error, if occurs."
  [log-id code]
  (log-with-id log-id "Evaluation started")
  (f/try* (js/eval code)))