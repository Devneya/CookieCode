(ns devneya.exec
  (:require [babashka.process :as bp]
            [clojure.java.io :as io]))

(defn get-deployctl-command
  "Define the kind of command deployctl.\n
   Return string."
  []
  (if (.exists (io/file (str (System/getProperty "user.home") "/snap/deno/105/.deno/bin/deployctl")))
    (str (System/getProperty "user.home") "/snap/deno/105/.deno/bin/deployctl")
    "deployctl"))

(defn exec-code
  "Execute file in Deno"
  ([config]
   
   (when (.exists (io/file (:DENO_ERROR_FILENAME config))) (io/delete-file (:DENO_ERROR_FILENAME config)))
   (println (str (get-deployctl-command) " deploy --token=" (:DENO_DEPLOY_TOKEN config) " --project=" (:DENO_PROJECT config) " " (:CODE_FILENAME config)))
   (try
     
     (bp/shell {:DENO_ERROR_FILENAME config} (str (get-deployctl-command) " deploy --token=" (:DENO_DEPLOY_TOKEN config) " --project=" (:DENO_PROJECT config) " " (:CODE_FILENAME config)))
     (catch Throwable e (spit (:DENO_ERROR_FILENAME config) e)))))
