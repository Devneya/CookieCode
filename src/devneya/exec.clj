(ns devneya.exec
  (:require [babashka.process :as bp]))

(defn exec-code
  "Execute file in Deno"
  ([config]
   (try
     (bp/shell {:DENO_ERROR_FILENAME config} (str "deployctl deploy --token=" (:DENO_DEPLOY_TOKEN config) " --project=" (:DENO_PROJECT config) " " (:CODE_FILENAME config)))
     (catch Throwable e (spit (:DENO_ERROR_FILENAME config) e)))))