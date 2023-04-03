(ns devneya.exec
  (:require [devneya.utils :as utils]
            [babashka.process :as bp]))

(defn exec-code
  "Execute file in Deno"
  ([deno-token deno-project filename] 
   (println (bp/shell (str "deployctl deploy --token=" deno-token " --project=" deno-project " " filename)))
   )
  
  ;; ([filename] (let [config (utils/load-config "config.yml")]
  ;;       (println (bp/shell "deployctl deploy --token=" (:deno-token config) " --project" (:deno-project config) filename)))
  ;;  )
  )