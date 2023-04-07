(ns devneya.exec
  (:require [devneya.utils :as utils]
            [devneya.deno_err :as dener]
            [babashka.process :as bp]
            [devneya.err :as err]
            [devneya.prompt :as prompt]))

(defn handle-error 
  "Generates gpt fix request"
  [filename e]
  (err/show-error e)
  (dener/deno-error-formatter filename)
  (println "Retrying...")
  (prompt/make-gpt-fix-request filename)
  )

(defn exec-code
  "Execute file in Deno"
  ([deno-token deno-project filename]
    (try 
      (bp/shell {:err utils/current-deno-error-path} (str "deployctl deploy --token=" deno-token " --project=" deno-project " " filename)) 
      (catch Throwable e (handle-error filename e)) 
    ;;  (finally (make-gpt-fix-request filename))
    ) 
  )
  
  ([filename] (let [config (utils/load-config "config.yml")]
    (try 
      (bp/shell {:err utils/current-deno-error-path} (str "deployctl deploy --token=" (:deno-token config) " --project=" (:deno-project config) " " filename))
      (catch Throwable e (err/show-error e))
      (finally (dener/deno-error-formatter filename))
    )
  ))
)
