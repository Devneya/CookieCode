(ns devneya.execWorker
  (:require [failjure.core :as f])
  (:require-macros [failjure.core]))

(defn exec-code
  [code]
  (prn "worker started")
  (.postMessage
   js/self
   (f/try* (js/eval code))))

(set! (.-onmessage js/self) exec-code)