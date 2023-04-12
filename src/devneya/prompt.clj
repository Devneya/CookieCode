(ns devneya.prompt
  (:require [devneya.gpt :as gpt]))

(defn make-prompt
  "Send prompt to write a code to AI and saves result in *output-filename* file"
  [OPENAI_KEY prompt output-filename]
  (let [response (gpt/get-chatgpt-api-response (str prompt " Write only code. Do not use ```.") OPENAI_KEY)]
    (spit output-filename response)))

(defn make-initial-prompt
  [OPENAI_KEY prompt output-filename]
  (make-prompt OPENAI_KEY (str prompt " Write only code. Do not use ```.") output-filename))

(defn make-fix-prompt
  "Generates gpt fix request"
  [OPENAI_KEY filename]
  (make-prompt
   OPENAI_KEY 
   (str "Here is a code:\n" (slurp filename) "\nAn error occurred while executing this code:\n" (slurp "deno_error.txt")
                          "Rewrite code to fix it. Write only code. Do not use ```.")
   filename))