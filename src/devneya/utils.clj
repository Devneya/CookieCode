(ns devneya.utils
  (:require [clj-yaml.core :as yml] 
            [clojure.java.io :as io]))

(defn date-hms
  []
  (-> (java.time.LocalDateTime/now)
      (.format (java.time.format.DateTimeFormatter/ofPattern "yyyy-MM-dd---kk-mm-ss"))))


(defn parse-file
  "Parse config file
   Return config map"
  [file]

  (let [yaml-str (slurp file)
        config-map (yml/parse-string yaml-str)]
    config-map))

(defn load-config
  "Get environment variables if exist otherwise make config in ~/.config/devneya/keys.yml
   
   Return config map"
  []
  (let [config-file-path (str (System/getProperty "user.home") "/.config/devneya/keys.yml")]
       (if (.exists (io/file config-file-path))
         (parse-file config-file-path)
         (let [config-map {:OPENAI_KEY (System/getenv "OPENAI_KEY")
                           :DENO_DEPLOY_TOKEN (System/getenv "DENO_DEPLOY_TOKEN")
                           :DENO_PROJECT (System/getenv "DENO_PROJECT")
                           :REQUEST_LOG_PATH (System/getenv "REQUEST_LOG_PATH")
                           :MAX_REPS (System/getenv "MAX_REPS")
                           :DENO_ERROR_FILENAME "deno_error.txt"
                           :CODE_FILENAME "./code-path/code.js"}]
           config-map))))