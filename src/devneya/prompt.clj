(ns devneya.prompt
  (:require [devneya.gpt :as gpt]))

(defn make-prompt
  "Send prompt to write a code to AI and saves result in *output-filename* file"
  [config prompt output-filename]
  (spit output-filename (gpt/get-chatgpt-api-response prompt (:api-key config))))