(ns devneya.utils
  (:require [cljs.core.async :refer [<! go]]))

(def ok-http-status 200)

(def ai-config {:OPENAI-API-URL "https://api.openai.com/v1/chat/completions" 
                :OPENAI-MODEL "gpt-3.5-turbo" 
                :TEMPERATURE 0.3
                :INITIAL-CONTEXT [{:role    "system"
                                   :content (str "You are a system that only generates code in JavaScript.\n"
                                                 "Do not describe or contextualize the code.\n"
                                                 "Do not apply any formatting or syntax highlighting.\n"
                                                 "Do not wrap the code in a code block.")}]})

(defn date-hms
  []
  (.toUTCString (js/Date.)))

(defn chan->promise [c]
  (js/Promise.
   (fn [resolve _]
     (go (resolve (<! c))))))

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
