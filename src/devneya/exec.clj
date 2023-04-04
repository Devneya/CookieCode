(ns devneya.exec
  (:require [devneya.utils :as utils]
            [babashka.process :as bp]
            [devneya.err :as err]))

(defn exec-code
  "Execute file in Deno"
  ([deno-token deno-project filename]
    (try
      (let [response (bp/shell {:err "error.txt"} (str "deployctl deploy --token=" deno-token " --project=" deno-project " " filename))]
        (println "Success")
      )
    (catch Throwable e (println "Failed to execute"))
    ) 
  )
  
  ([filename] (let [config (utils/load-config "config.yml")]
    (try
      (let [response (bp/shell {:err "error.txt"} (str "deployctl deploy --token=" (:deno-token config) " --project=" (:deno-project config) " " filename))]
        (println "Success")
      )
      (catch Throwable e (println "Failed to execute"))
    )
  ))
)
