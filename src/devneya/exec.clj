(ns devneya.exec
  (:require [devneya.utils :as utils]
            [devneya.deno_err :as dener]
            [babashka.process :as bp]
            [devneya.err :as err]
            [devneya.prompt :as prompt]))

(defn handle-error 
  "Generates gpt fix request"
  [openai-key filename e]
  (err/show-error e)
  (dener/deno-error-formatter filename)
  (println "Retrying...")
  (prompt/make-fix-prompt openai-key filename)
  )

(defn exec-code
  "Execute file in Deno"
  ([config filename]
   (try
     (bp/shell {:err utils/current-deno-error-path} (str "deployctl deploy --token=" (:DENO_DEPLOY_TOKEN config) " --project=" (:DENO_PROJECT config) " " filename))
     (catch Throwable e (handle-error (:OPENAI_KEY config) filename e))
      ;; (finally (make-gpt-fix-request filename))) 
      ;; (finally (dener/deno-error-formatter filename))
     )))