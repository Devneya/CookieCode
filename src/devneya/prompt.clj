(ns devneya.prompt
  (:require [devneya.gpt :as gpt])
  (:require [devneya.utils :as utils])
  (:require [devneya.exec :as exec])
  (:require [devneya.err :as err]))

(defn make-prompt 
  "Send prompt to write a code to AI and saves result in *output-filename* file"
  [config prompt]
  (let [response (gpt/get-chatgpt-api-response config prompt)]
    (spit (:CODE_FILENAME config) (utils/remove-triple-back-quote response))))

(defn make-initial-prompt
  [config prompt] 
  (make-prompt config (str "Write only code. Do not use ```. " prompt)))

(defn make-fix-prompt
  "Generate gpt fix request"
  [config]
  (make-prompt config 
        (str "Here is a code:\n" 
        (slurp (:CODE_FILENAME config)) 
        "\nAn error occurred while executing this code:\n" (slurp "deno_error.txt")
        "Rewrite code to fix it. Write only code. Do not use ```.")))

(defn make-prompt-chain
  "Make prompt chain\n"
  [config prompt]
  (try
    (loop [i 0]
      (if (= i 0)
        (make-initial-prompt config prompt)
        (make-fix-prompt config))
      (exec/exec-code config)
      (if (and (not= (slurp (:DENO_ERROR_FILENAME config)) "") (< i (:MAX_REPS config)))
        (recur (inc i))
        (println "Code generated successfully.\nPath:" (:CODE_FILENAME config))))
    (catch Throwable e (err/catch-error e))))