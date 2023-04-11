(ns devneya.gpt
  (:require [clojure.data.json :as json])
  (:require [babashka.http-client :as http])
  (:require [devneya.err :as err]))

(def OPENAI-API-URL "https://api.openai.com/v1/chat/completions")
(def OPENAI-MODEL "gpt-3.5-turbo")
(def TEMPERATURE 0.3)
(def INITIAL-CONTEXT [{:role    "system"
                       :content "You are a system that only generates code in Java Script.
                                 Do not describe or contextualize the code.
                                 Do not apply any formatting or syntax highlighting.
                                 Do not wrap the code in a code block."}])

(defn build-headers [OPENAI_KEY]
  {:Content-Type "application/json"
   :Authorization (str "Bearer " OPENAI_KEY)})

(defn build-body [role text context]
  (json/write-str {:model OPENAI-MODEL
                   :temperature TEMPERATURE
                   :messages (concat context [{:role role :content text}])}))

(defn parse-response [response]
  (get-in (json/read-str (:body response)) ["choices" 0 "message" "content"]))

(defn get-chatgpt-api-response
  "Returns a string containing the text of the ChatGPT API response"
  ([text OPENAI_KEY role context]
   (parse-response (try
                    (http/post OPENAI-API-URL {:headers (build-headers OPENAI_KEY)
                                               :body    (build-body role text context)})
                    (catch Throwable e (err/catch-error e))))) 
  ([text OPENAI_KEY role]
   (get-chatgpt-api-response text OPENAI_KEY role INITIAL-CONTEXT))
  ([text OPENAI_KEY]
   (get-chatgpt-api-response text OPENAI_KEY "user" INITIAL-CONTEXT)))

;; (defn get-chatgpt-api-response
;;   "Returns a string containing the text of the ChatGPT API response"
;;   [text api-key]
;;   (let [url "https://api.openai.com/v1/chat/completions"
;;         role "You are a system that only generates code. Do not describe or contextualize the code. Do not apply any formatting or syntax highlighting. Do not wrap the code in a code block."
;;         params {:model "gpt-3.5-turbo"
;;                 :temperature 0.7
;;                 :messages [{:role "user" :content (str role " " text)}]}

;;         headers {:Content-Type "application/json"
;;                  :Authorization (str "Bearer " api-key)}

;;         response (try
;;                    (http/post url {:headers headers
;;                                    :body (json/write-str params)})
;;                    (catch Throwable e (err/catch-error e)))]
;;     (get-in (json/read-str (:body response)) ["choices" 0 "message" "content"])))

