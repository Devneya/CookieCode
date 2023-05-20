(ns devneya.gpt
  (:require [taoensso.timbre :as timbre]
            [failjure.core :as f]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require-macros [failjure.core]
                   [cljs.core.async.macros :refer [go]]))

(def OPENAI-API-URL "https://api.openai.com/v1/chat/completions")
(def OPENAI-MODEL "gpt-3.5-turbo")
(def TEMPERATURE 0.3)
(def INITIAL-CONTEXT [{:role    "system"
                       :content (str "You are a system that only generates code in JavaScript.\n"
                                     "Do not describe or contextualize the code.\n"
                                     "Do not apply any formatting or syntax highlighting.\n"
                                     "Do not wrap the code in a code block.")}])

(defn build-headers [openai-key]
  {"Content-Type" "application/json"
   "Authorization" (str "Bearer " openai-key)})

(defn build-body [role text context]
  {:model OPENAI-MODEL
   :temperature TEMPERATURE
   :messages (concat context [{:role role :content text}])})

(def ok-http-status 200)

(defn parse-response [response]
  (if (not= (:status response) ok-http-status)
    (f/fail (str "Request failed with status: " (:status response) "and body: " (:body response)))
    (get-in (:body response) [:choices 0 :message :content])))

(defn build-request-info
  "Gets body of request to AI, received response and logging directory path.
   Writes it into a new file in the given path."
  [context role text parsed-response]
  (if (f/failed? parsed-response)
    parsed-response
    (str
     (reduce
      (fn [log message]
        (str
         log
         "---------------------\n"
         "role: "     (:role message) "\n"
         "content:\n" (:content message) "\n"))
      (str "Model: " OPENAI-MODEL "\n"
           "Temperature: " TEMPERATURE "\n")
      (conj context {:role role :content text}))
     (str "Response:\n" parsed-response "\n"))))

(defn get-chatgpt-api-async-response
  "Get api key, date for logging, text of the message, role for the message and the previous context.\n
   Send request to ChatGPT and get the answer.\n
   Return a async channel with text of ChatGPT API response."
  ([openai-key date text role context]
   (timbre/info "get-chatgpt-api-response function started")
     ;;if post led to exception, wrap and return it
     ;;otherwise save request in log and return response 
   (go (let [response (parse-response (<! (http/post OPENAI-API-URL {:headers (build-headers openai-key)
                                                                     :json-params (build-body role text context)
                                                                     :with-credentials? false})))]
         (timbre/info (build-request-info context role text response))
         response)))
  ([openai-key date text role]
   (get-chatgpt-api-async-response openai-key date text role INITIAL-CONTEXT))
  ([openai-key date text]
   (timbre/info "Creating request with default (user) role ...")
   (get-chatgpt-api-async-response openai-key date text "user" INITIAL-CONTEXT)))

