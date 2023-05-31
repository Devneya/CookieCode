(ns devneya.exec
  (:require [devneya.utils :refer [log-with-id]]
            [failjure.core :as f])
  (:require-macros [failjure.core]))

(defn exec-code
  "Get code to execute.\n
   Execute it with js/eval\n
   Return execution result or fail with compile error, if occurs."
  [log-id code]
  (log-with-id log-id "Evaluation started")
  (f/try* (js/eval code)))