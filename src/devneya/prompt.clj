(ns devneya.prompt
  (:require [devneya.gpt :as gpt] 
            [devneya.utils :as utils]))

(defn make-prompt 
  "Send prompt to write a code to AI and saves result in *output-filename* file"
  [openai-key prompt output-filename log-dir-path]
  (let [response (gpt/get-chatgpt-api-response prompt openai-key log-dir-path)]
    (spit output-filename (utils/remove-triple-back-quote response))
    (println "The code saved in" output-filename)))
    ;; (if (prom/thrown? response)
    ;;   (response)
    ;;   (spit output-filename response))))

(defn make-initial-prompt
  [openai-key prompt output-filename log-dir-path] 
  (make-prompt
   openai-key
   (str "Write only code. Do not use ```. " prompt)
   output-filename
   log-dir-path))

(defn make-fix-prompt
  "Generates gpt fix request"
  [openai-key filename log-dir-path]
  (make-prompt
   openai-key
   (str "Here is a code:\n" (slurp filename) "\nAn error occurred while executing this code:\n" (slurp "deno_error.txt")
        "Rewrite code to fix it. Write only code. Do not use ```.")
   filename
   log-dir-path))