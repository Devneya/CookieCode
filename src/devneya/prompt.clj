(ns devneya.prompt
  (:require [devneya.gpt :as gpt]))

(defn make-prompt
  "Send prompt to write a code to AI and saves result in *output-filename* file"
  [api-key prompt output-filename]
  (let [response (gpt/get-chatgpt-api-response prompt api-key)]
    (spit output-filename response)))