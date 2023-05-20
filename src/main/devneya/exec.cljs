(ns devneya.exec
  (:require [taoensso.timbre :as timbre]
            [failjure.core :as f])
  (:require-macros [failjure.core]))

(defn exec-code
  "Get code to execute.\n
   Execute it with js/eval\n
   Return execution result or fail with compile error, if occurs."
  [code]
  ;;try to execute deployctl, if deployment successful return nothing
  ;;otherwise check if compile error file is not empty, then return error as string
  ;;if not, returns wrapped api exception
  (timbre/info "evaluation started")
  (f/try* (js/eval code)))