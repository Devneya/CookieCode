(ns devneya.formatters
  (:require [failjure.core :as f]
            [clojure.string :as clstr]
            [devneya.utils :refer [log-with-id]])
  (:require-macros [failjure.core]))

(defn remove-triple-back-quote
  "Removes triple back quote
   ```(\\w+)?(\r)?\n matches line with opening triple back quote and language name
   ([\\s\\S]+?) matches text between quotes (if exists)
   (\r)?\n``` line with closing triple back quote"
  ([log-id merge stri] 
   (log-with-id log-id "remove-triple-back-quote function started")
   (let [matched (re-seq #"(```(\w+)?(\r)?\n([\s\S]*?)(\r)?\n```)" stri)
         index_of_block 4
        ;;  Maybe \n is not fully correct here, need to test this or if some problem occure the following code might be used
         
        ;;  (ns my-app.core
        ;;    (:require [goog.userAgent.platform :as platform]))

        ;;  (defn get-newline-symbol []
        ;;    (cond
        ;;      (= platform/WINDOWS) "\r\n"
        ;;      :else "\n"))
         blocks (map #(str (get %1 index_of_block) "\n") matched)
         result (or (if (= matched nil) stri (reduce str blocks)) "")
         result (clstr/replace result #"(```(\w+)?(\r)?\n```)" "")]
     (if (= merge 1)
       result
       (if (> (count blocks) 1)
         (f/fail "chatGPT splitted the code to multiple blocks, try to simplyfy your request")
         result)))))

(defn remove-colors
  [log-id stri]
  (log-with-id log-id "remove-colors function started")
  (clstr/replace stri #"\[([0,1,2,3,4,5,6,7,8,9]+)m"  ""))

;; Huge problem with / and \, if there is a \, we need to parse them much more carefully or we can just ban them
;; Maybe it's better to think, that output-path is just filename and it cant contain any \ or /
(defn remove-user-path
  "In that version output path should be just a file name"
  [log-id stri output-path]
  (log-with-id log-id "remove-user-path function started")
  (let [output-with-underline (clstr/replace output-path #"." #(str "[_" (if (or (= %1 "\\") (= %1 "/")) "\\/" %1) "]")),
        ;;regexp parsing: "at 'any part of path before output-path entrance' output-path :num1:num2"" num1 and num2 are string and character
        re-bad-string (re-pattern (str "([\\s^]*)at ([_\\S]*)" output-with-underline "[_:]([_\\d]+)[_:]([_\\d]+)"))
        ;;number of group in regexp that matches number of string where error starts
        index-of-string-number 3,
        ;;number of group in regexp that matches position in string where error starts
        index-of-char-number 4]
    ;; TODO: add correct '\r\n' or '\n' according to the platform  
    (clstr/replace stri re-bad-string #(str " Error starts at string " (get %1 index-of-string-number) " char " (get %1 index-of-char-number)))))