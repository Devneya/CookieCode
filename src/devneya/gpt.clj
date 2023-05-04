(ns devneya.gpt
  (:require [babashka.curl :as curl]
            [clojure.data.json :as json]
            [failjure.core :as f]))

(def OPENAI-API-URL "https://api.openai.com/v1/chat/completions") 
(def OPENAI-MODEL "gpt-3.5-turbo")
(def TEMPERATURE 0.3)
(def INITIAL-CONTEXT [{:role    "system"
                       :content (str "You are a system that only generates code in JavaScript for Deno Deploy.\n"
                                     "Do not describe or contextualize the code.\n" 
                                     "Do not apply any formatting or syntax highlighting.\n"
                                     "Do not wrap the code in a code block.")}])

(defn build-headers [openai-key]
  {:Content-Type "application/json"
   :Authorization (str "Bearer " openai-key)})

(defn build-body [role text context]
  (json/write-str {:model OPENAI-MODEL
                   :temperature TEMPERATURE
                   :messages (concat context [{:role role :content text}])}))

(defn parse-response [response]
  (get-in (json/read-str (:body response)) ["choices" 0 "message" "content"]))

(defn save-request
  "Gets body of request to AI, received response and logging directory path.
   Writes it into a new file in the given path."
  [date context role text parsed-response log-dir-path]
  (let [file-path (str log-dir-path "/" date ".txt")]
    (spit file-path (str "Model: " OPENAI-MODEL "\n"
                         "Temperature: " TEMPERATURE "\n") :append true)
    (doseq [message (conj context {:role role :content text})]
      (spit file-path (str "---------------------\n"
                           "role: "     (:role message) "\n"
                           "content:\n" (:content message) "\n")
            :append true))
    (spit file-path (str "Response:\n" parsed-response "\n\n\n/////////////////////////////////////////\n") :append true)))

(defn get-chatgpt-api-response
  "Gets api key, text of the message, role for the message and the previous context. \n
   Sends request to ChatGPT and gets the answer. \n
   Returns a string containing the text of the ChatGPT API response or wrapped exception from http/post, if occurs."
  ([config date text role context]
   (let [body (build-body role text context)]
     ;;if post led to exception, wrap and return it
     ;;otherwise save request in log and return response 
     (f/when-let-ok? 
      [response (f/try* (parse-response
                         (curl/post OPENAI-API-URL {:headers (build-headers (:OPENAI_KEY config))
                                                    :body    body})))]
      (when (not-empty (:REQUEST_LOG_PATH config))
        (save-request date context role text response (:REQUEST_LOG_PATH config))) 
      response)))
  ([config date text role]
   (get-chatgpt-api-response config date text role INITIAL-CONTEXT))
  ([config date text]
   (get-chatgpt-api-response config date text "user" INITIAL-CONTEXT)))

