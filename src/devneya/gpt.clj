(ns devneya.gpt
  (:require [clojure.data.json :as json])
  (:require [babashka.http-client :as http])
  (:require [devneya.utils :as utils]))

(def OPENAI-API-URL "https://api.openai.com/v1/chat/completions")
(def OPENAI-MODEL "gpt-3.5-turbo")
(def TEMPERATURE 0.3)
(def INITIAL-CONTEXT [{:role    "system"
                       :content "You are a system that only generates code in Java Script.
                                 Do not describe or contextualize the code.
                                 Do not apply any formatting or syntax highlighting.
                                 Do not wrap the code in a code block."}])

(defn build-headers [openai-key]
  {:Content-Type "application/json"
   :Authorization (str "Bearer " openai-key)})

(defn build-body [role text context]
  (json/write-str {:model OPENAI-MODEL
                   :temperature TEMPERATURE
                   :messages (concat context [{:role role :content text}])}))

(defn parse-response [response]
  (get-in (json/read-str (:body response)) ["choices" 0 "message" "content"]))

(defn get-chatgpt-api-response
  "Gets api key, text of the message, role for the message and the previous context. \n
   Sends request to ChatGPT and gets the answer. \n
   Returns a string containing the text of the ChatGPT API response.
   Throws"
  ([text openai-key role context log-dir-path]
       (let [body (build-body role text context)
             response (http/post OPENAI-API-URL {:headers (build-headers openai-key)
                                                 :body    body})
             parsed-response (parse-response response)]
         (when (not-empty log-dir-path) 
           ;;(println (str log-dir-path "/" (utils/date-hms)))
           (spit (str log-dir-path "/" (utils/date-hms) ".txt") 
                 (str "Request:\n" body "\nResponse:\n" parsed-response )))
         parsed-response))
  ;;  (parse-response (try
  ;;                    (http/post OPENAI-API-URL {:headers (build-headers openai-key)
  ;;                                               :body    (build-body role text context)})
  ;;                    (catch Throwable e (err/catch-error e)))))
  ([text openai-key role log-dir-path]
   (get-chatgpt-api-response text openai-key role INITIAL-CONTEXT log-dir-path))
  ([text openai-key log-dir-path]
   (get-chatgpt-api-response text openai-key "user" INITIAL-CONTEXT log-dir-path)))