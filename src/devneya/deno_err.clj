(ns devneya.deno_err
  (:require [clojure.string :as clstr]
            [taoensso.timbre :as timbre]))


;; (defn remove-spaces
;;   [stri]
;;   (clstr/replace (clstr/trim stri) #"([\s]+)" " "))

(defn remove-colors
  [stri]
  (timbre/info "remove-colors function started")
  (clstr/replace stri #"\[([0,1,2,3,4,5,6,7,8,9]+)m"  ""))

;; Huge problem with / and \, if there is a \, we need to parse them much more carefully or we can just ban them
;; Maybe it's better to think, that output-path is just filename and it cant contain any \ or /
(defn remove-user-path
  "In that version output path should be just a file name"
  [stri output-path]
  (timbre/info "remove-user-path function started")
  (let [output-with-underline (clstr/replace output-path #"." #(str "[_" (if (or (= %1 "\\") (= %1 "/")) "\\/" %1) "]")),
        ;;regexp parsing: "at 'any part of path before output-path entrance' output-path :num1:num2"" num1 and num2 are string and character
        re-bad-string (re-pattern (str "([\\s^]*)at ([_\\S]*)" output-with-underline "[_:]([_\\d]+)[_:]([_\\d]+)"))
        ;;number of group in regexp that matches number of string where error starts
        index-of-string-number 3,
        ;;number of group in regexp that matches position in string where error starts
        index-of-char-number 4]
    ;; TODO: add correct '\r\n' or '\n' according to the platform  
    (clstr/replace stri re-bad-string #(str " Error starts at string " (get %1 index-of-string-number) " char " (get %1 index-of-char-number)))))

(defn deno-error-formatter
  ([config]
   (timbre/info "deno-error-formatter function started with file reading mode")
   (remove-user-path (remove-colors (slurp (:DENO_ERROR_FILENAME config))) (:CODE_FILENAME config)))
  ([config error-str]
   (timbre/info "deno-error-formatter function started with incoming string mode")
   (remove-user-path (remove-colors error-str) (:CODE_FILENAME config))))

