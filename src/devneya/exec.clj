(ns devneya.exec
  (:require [devneya.utils :as utils]
            [devneya.deno_err :as dener]
            [babashka.process :as bp]
            [devneya.err :as err]))

(defn exec-code
  "Execute file in Deno"
  ([deno-token deno-project filename]
    (try 
      (bp/shell {:err utils/current-deno-error-path} (str "deployctl deploy --token=" deno-token " --project=" deno-project " " filename)) 
      (catch Throwable e (err/catch-error e)) 
      (finally (dener/deno-error-formatter filename))
    ) 
  )
  
  ([filename] (let [config (utils/load-config "config.yml")]
    (try 
      (bp/shell {:err utils/current-deno-error-path} (str "deployctl deploy --token=" (:deno-token config) " --project=" (:deno-project config) " " filename))
      (catch Throwable e (err/catch-error e))
      (finally (dener/deno-error-formatter filename))
    )
  ))
)
