(ns devneya.codeGeneration)

;; (defn generate-code-async
;;   "Get api key, text of the code request, data for logging and the previous context and function to make request.\n
;;    Make request to ChatGPT with output to channel with builded transducer for parsing result. \n
;;    Return async channel with text of ChatGPT API response or fail, if occurs."
;;   ([log-id make-generation-request parse-response log-request code-request]
;;    (make-generation-request
;;     log-id
;;     code-request
;;     (chan 1 (map (comp
;;                   (partial map-not-fail (partial format/remove-triple-back-quote log-id 0))
;;                   (partial map-not-fail (log-request code-request))
;;                   parse-response)))))
;;   ([log-id make-generation-request code-request]
;;    (generate-code-async
;;     log-id
;;     make-generation-request
;;     #(parse-chatgpt-response log-id %)
;;     #(log-chatgpt-request log-id % "user" (:initilal-context ai-config)))))
;;     #(gpt/get-chatgpt-api-async-response % % % "user" (:initilal-context ai-config))
;;     openai-key
;;     code-request