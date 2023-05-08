(ns devneya.err
  (:require [failjure.core :as f]))

(defn exit [status msg] 
  (println msg)
  (System/exit status))

(defn parse-exception
  "Parse Throwable exception, return error message"
  [e]
  (let  [data (get-in (Throwable->map e) [:via 0])] 
    (str "Type:     "(:type data) "\nMessage:  " (:message data))))

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

(defn extend-execution-fail
  "Extend execution fail message with additional info."
  [exec-result]
  (if (f/failed? exec-result)
    (f/fail (str "Error occured on generated code execution:\n"  exec-result))
    exec-result))