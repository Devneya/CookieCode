(ns devneya.exec
  (:require [babashka.process :as bp]
            [clojure.java.io :as io] 
            [devneya.deno_err :as dener]))

(defn get-deployctl-command
  "Define the kind of command deployctl.\n
   Return string."
  []
  (if (.exists (io/file (str (System/getProperty "user.home") "/snap/deno/105/.deno/bin/deployctl")))
    (str (System/getProperty "user.home") "/snap/deno/105/.deno/bin/deployctl")
    "deployctl"))

(defn handle-error
  "Generates gpt fix request"
  [config]
  (dener/deno-error-formatter config)
)

(defn exec-code
  "Execute file in Deno"
  ([config] 
   (when (.exists (io/file (:DENO_ERROR_FILENAME config))) (io/delete-file (:DENO_ERROR_FILENAME config))) 
   (try 
     (bp/shell {:err (:DENO_ERROR_FILENAME config)}
               (str (get-deployctl-command) " deploy --token=" (:DENO_DEPLOY_TOKEN config) " --project=" (:DENO_PROJECT config) " " (:CODE_FILENAME config)))
     (catch Throwable _ (handle-error config)))))
