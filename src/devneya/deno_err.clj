(ns devneya.deno_err
  (:require [clojure.string :as clstr] 
            [devneya.utils :as utils])
  )


(defn remove-spaces
  [stri]
  (clstr/replace (clstr/trim stri) #"([\s]+)" " "))

(defn remove-colors
  [stri]
  (clstr/replace stri #"\[([0,1,2,3,4,5,6,7,8,9]+)m"  ""))

;; Huge problem with / and \, if there is a \, we need to parse them much more carefully or we can just ban them
;; Maybe it's better to think, that output-path is just filename and it cant contain any \ or /
(defn remove-user-path
  "In that version output path should be just a file name"
  [stri output-path]
  (let [output-with-underline (clstr/replace output-path #"." #(str "[_" %1 "]")),
        ;;regexp parsing: "at 'any part of path before output-path entrance' output-path :num1:num2"" num1 and num2 are string and character
        re-bad-string (re-pattern (str "([\\s^]*)at ([_\\S]*)" output-with-underline "[_:]([_\\d]+)[_:]([_\\d]+)")),
        data-to-update (re-find re-bad-string stri)]
    (clstr/replace stri re-bad-string  (str " Error starts at string " (get data-to-update 3) " char " (get data-to-update 4)))))

(defn deno-error-formatter
  [file-path]
  (remove-user-path (remove-colors (remove-spaces (slurp utils/current-deno-error-path))) file-path)
  )

