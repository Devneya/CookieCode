(ns devneya.prompt
  (:require [devneya.gpt :as gpt]))

(defn make-prompt 
  "Send prompt to write a code to AI and saves result in *output-filename* file"
  [openai-key prompt output-filename]
  (let [response (gpt/get-chatgpt-api-response prompt openai-key)]
    (spit output-filename response)))
    ;; (if (prom/thrown? response)
    ;;   (response)
    ;;   (spit output-filename response))))

(defn make-initial-prompt
  [openai-key prompt output-filename] 
  (make-prompt
   openai-key
   (str prompt " Write only code. Do not use ```.")
   output-filename))

(defn make-fix-prompt
  "Generates gpt fix request"
  [openai-key filename]
  (make-prompt
   openai-key
   (str "Here is a code:\n" (slurp filename) "\nAn error occurred while executing this code:\n" (slurp "deno_error.txt")
        "Rewrite code to fix it. Write only code. Do not use ```.")
   filename))