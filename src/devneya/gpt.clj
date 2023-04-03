(ns devneya.gpt 
  (:require [clojure.data.json :as json])
  (:require [babashka.curl :as curl]))

(defn get-chatgpt-api-response
  "Returns a string containing the text of the ChatGPT API response" 
  [text api-key]
  (let [url "https://api.openai.com/v1/chat/completions"
        role "You are a system that only generates code. Do not describe or contextualize the code. Do not apply any formatting or syntax highlighting. Do not wrap the code in a code block."
        params {:model "gpt-3.5-turbo"
                :temperature 0.7
                :messages [{:role "user" :content (str role " " text)}]}

        headers {:Content-Type "application/json"
                 :Authorization (str "Bearer " api-key)}
        response (curl/post url {:headers headers
                                 :body (json/write-str params)})]
    (get-in (json/read-str (:body response)) ["choices" 0 "message" "content"])) 
  )

