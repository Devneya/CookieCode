(ns devneya.prompt
  (:require [devneya.gpt :as gpt]))

(defn make-prompt 
  "Send prompt to write a code to AI and saves result in *output-filename* file"
  [config prompt]
  (let [response (gpt/get-chatgpt-api-response config prompt)]
    (spit (:CODE_FILENAME config) response)
    (println "The code saved in" (:CODE_FILENAME config))))

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