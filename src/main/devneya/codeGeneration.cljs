(ns devneya.codeGeneration
  (:require [taoensso.timbre :as timbre]
            [failjure.core :as f]
            [devneya.gpt :as gpt]
            [cljs.core.async :refer [chan]]
            [devneya.codeFormatter :as cf]
            [devneya.err :refer [map-not-fail]]
            [devneya.utils :refer [ai-config ok-http-status]]))

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
      (str "Model: " (:OPENAI-MODEL ai-config) "\n"
           "Temperature: " (:TEMPERATURE ai-config) "\n")
      (conj context {:role role :content text}))
     (str "Response:\n" parsed-response "\n"))))

(defn log-request 
  [context role text]
  (fn [parsed-response]
    (timbre/info (build-request-info context role text parsed-response))
    parsed-response))

(defn parse-response [response]
  (if (not= (:status response) ok-http-status)
    (f/fail (str "Request failed with status: " (:status response) "and body: " (:body response)))
    (get-in (:body response) [:choices 0 :message :content])))

(defn generate-code-async
  "Get api key, date for logging, text of the message, role for the message and the previous context.\n
   Send request to ChatGPT and get the answer.\n
   Return a async channel with text of ChatGPT API response."
  ([openai-key code-request logdata context]
   (gpt/get-chatgpt-api-async-response
    openai-key
    code-request
    "user"
    context
    (chan 1 (map (comp
                  (partial map-not-fail (partial cf/remove-triple-back-quote 0 logdata))
                  (partial map-not-fail (log-request context "user" code-request))
                  parse-response)))))
  ([openai-key code-request logdata]
   (generate-code-async openai-key code-request logdata (:INITIAL-CONTEXT ai-config)))
  ([openai-key code-request]
   (generate-code-async openai-key code-request "" (:INITIAL-CONTEXT ai-config))))