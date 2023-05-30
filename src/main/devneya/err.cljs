(ns devneya.err
  (:require [failjure.core :as f])
  (:require-macros [failjure.core]))

(defn map-not-fail
  [fun result]
  (if (f/failed? result)
    result
    (fun result)))

(defn extend-initial-prompt-fail
  "Extend initial prompt fail with additional info."
  [initial-result]
  (if (f/failed? initial-result)
    (f/fail (str "Error occured on initial prompt:\n"  initial-result))
    initial-result))

(defn extend-fix-prompt-fail
  "Extend fix prompt fail message with attempt number."
  [fix-result attempt]
  (if (f/failed? fix-result)
    (f/fail (str "Error occured on " attempt "-th fix prompt:\n"  fix-result))
    fix-result))