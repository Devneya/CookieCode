(ns devneya.utils
  (:require [clojure.string :as clstr]))

(defn date-hms
  []
  (.toUTCString (js/Date.)))

;; (defn index-of [e coll] (first (keep-indexed #(if (= e %2) %1) coll)))

;; (def endl (System/getProperty "line.separator"))

;; (defn parse-file
;;   "Parse config file
;;    Return config map"
;;   [file]

;;   (let [config-map (merge 
;;                     {:DENO_ERROR_FILENAME "deno_error.txt" :CODE_FILENAME "./code-path/code.js"}
;;                     (yml/parse-string (slurp file)))]
;;     config-map))

;; (defn load-config
;;   "Get environment variables if exist otherwise make config in ~/.config/devneya/keys.yml
   
;;    Return config map"
;;   []
;;   (let [config-file-path (str (System/getProperty "user.home") "/.config/devneya/keys.yml")]
;;        (if (.exists (io/file config-file-path))
;;          (parse-file config-file-path)
;;          (let [config-map {:OPENAI_KEY (System/getenv "OPENAI_KEY")
;;                            :DENO_DEPLOY_TOKEN (System/getenv "DENO_DEPLOY_TOKEN")
;;                            :DENO_PROJECT (System/getenv "DENO_PROJECT")
;;                            :REQUEST_LOG_PATH (System/getenv "REQUEST_LOG_PATH")
;;                            :MAX_REPS (System/getenv "MAX_REPS")
;;                            :DENO_ERROR_FILENAME "deno_error.txt"
;;                            :CODE_FILENAME "./code-path/code.js"}]
;;            config-map))))
