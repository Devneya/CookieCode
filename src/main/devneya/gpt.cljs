(ns devneya.gpt
  (:require [failjure.core :as f]
            [cljs-http.client :as http]
            [cljs.core.async :refer [chan]]
            [devneya.utils :refer [chan->promise ai-config log-with-id]])
  (:require-macros [failjure.core]))

(defn build-headers [openai-key]
  {"Content-Type" "application/json"
   "Authorization" (str "Bearer " openai-key)})

(defn build-body [role text context]
  {:model (:openai-model ai-config)
   :temperature (:temperature ai-config)
   :messages (concat context [{:role role :content text}])})

(defn get-chatgpt-api-async-response
  "Get api key, text of the message, role for the message, previous context and output channel ((chan) by default).\n
   Send request to ChatGPT.\n
   Return output channel with result."
  ([log-id openai-key text role context output-channel]
   (log-with-id log-id "get-chatgpt-api-response function started")
   (http/post (:openai-api-url ai-config) {:headers (build-headers openai-key)
                                           :json-params (build-body role text context)
                                           :with-credentials? false
                                           :channel output-channel}))
  ([log-id openai-key text role context]
   (get-chatgpt-api-async-response log-id openai-key text role context (chan))))

(defn test-post
  "testfunc"
  [openai-key prompt]
  (let [out (chan)]
    (http/post 
     (:openai-api-url ai-config) 
     {:headers (build-headers openai-key)
      :json-params (build-body "user" prompt (:initilal-context ai-config))
      :with-credentials? false
      :channel out})
    (chan->promise out))
  )
(:export test-post)