(ns devneya.codeGeneration
  (:require [taoensso.timbre :as timbre]
            [failjure.core :as f]
            [devneya.gpt :as gpt]
            [cljs.core.async :refer [chan]]
            [devneya.formatters :as format]
            [devneya.err :refer [map-not-fail]]
            [devneya.utils :refer [ai-config ok-http-status]]))

(defn build-request-info
  "Get body of request to ChatGPT, received response and logging directory path.\n
   Build logging string."
  [text role context parsed-response]
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
      (str "Model: " (:OPENAI-MODEL ai-config) "\n"
           "Temperature: " (:TEMPERATURE ai-config) "\n")
      (conj context {:role role :content text}))
     (str "Response:\n" parsed-response "\n"))))

(defn log-request 
  "Get previous role and text of new request and previous context.\n
   Build logging function, which later can be used as transducer."
  [text role context]
  (fn [parsed-response]
    (timbre/info (build-request-info text role context parsed-response))
    parsed-response))

(defn parse-response 
  "Get ChatGPT response and parse it. Can be used as transducer."
  [response] 
  (if (not= (:status response) ok-http-status)
    (f/fail (str "Request failed with status: " (:status response) " and body: " (:body response)))
    (get-in (:body response) [:choices 0 :message :content])))

(defn generate-code-async
  "Get api key, text of the code request, data for logging and the previous context.\n
   Make request to ChatGPT with output to channel with builded transducer for parsing result. \n
   Return async channel with text of ChatGPT API response or fail, if occurs."
  ([openai-key code-request logdata context]
   (gpt/get-chatgpt-api-async-response
    openai-key
    code-request
    "user"
    context
    (chan 1 (map (comp
                  (partial map-not-fail (partial format/remove-triple-back-quote 0 logdata))
                  (partial map-not-fail (log-request code-request "user" context))
                  parse-response)))))
  ([openai-key code-request logdata]
   (generate-code-async openai-key code-request logdata (:INITIAL-CONTEXT ai-config)))
  ([openai-key code-request]
   (generate-code-async openai-key code-request "" (:INITIAL-CONTEXT ai-config))))