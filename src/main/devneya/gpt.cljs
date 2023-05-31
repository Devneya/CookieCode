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
  "Get api key, text of the message, role for the message, previous context and output channel ((chan) by default).\n
   Send request to ChatGPT.\n
   Return output channel with result."
  ([openai-key text role context output-channel]
   (timbre/info "get-chatgpt-api-response function started")
   (http/post (:OPENAI-API-URL ai-config) {:headers (build-headers openai-key)
                                           :json-params (build-body role text context)
                                           :with-credentials? false
                                           :channel output-channel}))
  ([openai-key text role context]
   (get-chatgpt-api-async-response openai-key text role context (chan))))

(defn test-post
  "testfunc"
  [openai-key prompt]
  (let [out (chan)]
    (http/post 
     (:OPENAI-API-URL ai-config) 
     {:headers (build-headers openai-key)
      :json-params (build-body "user" prompt (:INITIAL-CONTEXT ai-config))
      :with-credentials? false
      :channel out})
    (chan->promise out))
  )
(:export test-post)