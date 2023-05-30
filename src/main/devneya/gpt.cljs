(ns devneya.gpt
  (:require [taoensso.timbre :as timbre]
            [failjure.core :as f]
            [cljs-http.client :as http]
            [cljs.core.async :refer [chan]]
            [devneya.utils :refer [chan->promise ai-config]])
  (:require-macros [failjure.core]))

(defn build-headers [openai-key]
  {"Content-Type" "application/json"
   "Authorization" (str "Bearer " openai-key)})

(defn build-body [role text context]
  {:model (:OPENAI-MODEL ai-config)
   :temperature (:TEMPERATURE ai-config)
   :messages (concat context [{:role role :content text}])})

(defn get-chatgpt-api-async-response
  "Get api key, date for logging, text of the message, role for the message and the previous context.\n
   Send request to ChatGPT and get the answer.\n
   Return a async channel with text of ChatGPT API response."
  ([openai-key text role context output-channel]
   (timbre/info "get-chatgpt-api-response function started")
   (http/post (:OPENAI-API-URL ai-config) {:headers (build-headers openai-key)
                                           :json-params (build-body role text context)
                                           :with-credentials? false
                                           :channel output-channel}))
  ([openai-key text role context]
   (get-chatgpt-api-async-response openai-key text role context (chan))))

(defn testfunc
  "testfunc"
  [openai-key prompt]
  (chan->promise (http/post
                  (:OPENAI-API-URL ai-config)
                  {:headers (build-headers openai-key)
                   :body (build-body "user" prompt (:INITIAL-CONTEXT ai-config))
                   :content-type :json})))
(:export testfunc)