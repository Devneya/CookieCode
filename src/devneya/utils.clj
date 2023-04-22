(ns devneya.utils
  (:require [clj-yaml.core :as yml] 
            [clojure.java.io :as io]
            [clojure.string :as clstr]))

(def current-deno-error-path "deno_error.txt")

(defn date-hms
  []
  (-> (java.time.LocalDateTime/now)
      (.format (java.time.format.DateTimeFormatter/ofPattern "yyyy-MM-dd---kk-mm-ss"))))

(defn remove-triple-back-quote
  [stri]
  (clstr/replace stri #"```js|```ts|```|```javascript|```typescript"  ""))

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
                           :REQUSET_LOG_PATH (System/getenv "REQUSET_LOG_PATH")}]
           config-map))))