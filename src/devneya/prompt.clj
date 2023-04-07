(ns devneya.prompt
  (:require [devneya.gpt :as gpt]
            [devneya.utils :as utils]))

(defn make-prompt
  "Send prompt to write a code to AI and saves result in *output-filename* file"
  [api-key prompt output-filename]
  (let [response (gpt/get-chatgpt-api-response prompt api-key)]
    (spit output-filename response)))

(defn make-gpt-fix-request 
  "Generates gpt fix request"
  [filename]
  (def prompt (str "Here is a code:\n" (slurp filename) "\nAn error occurred while executing this code:\n" (slurp "deno_error.txt") 
  "Rewrite code to fix it. Write only code. Do not use ```."))
  (def config (utils/load-config "config.yml"))
  (let [response (gpt/get-chatgpt-api-response prompt (:api-key config))]
       (spit filename response))
  )