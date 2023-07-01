(ns devneya.codeGeneration
  (:require [failjure.core :as f]
            [cljs.core.async :refer [chan]]
            [devneya.formatters :as format]
            [devneya.err :refer [map-not-fail]]
            [devneya.utils :refer [ai-config ok-http-status log-with-id]]
            [devneya.gpt :as gpt]))

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
      (str "Model: " (:openai-model ai-config) "\n"
           "Temperature: " (:temperature ai-config) "\n")
      (conj context {:role role :content text}))
     (str "Response:\n" parsed-response "\n"))))

(defn log-request 
  "Get previous role and text of new request and previous context.\n
   Build logging function, which later can be used as transducer."
  [log-id text role context]
  (fn [parsed-response]
     (log-with-id log-id "Logging chat GPT request:")
     (log-with-id log-id (build-request-info text role context parsed-response))
     parsed-response))

(defn parse-response 
  "Get ChatGPT response and parse it. Can be used as transducer."
  [log-id response] 
  (log-with-id log-id "Parsing chat GPT response and handling status started")
  (if (not= (:status response) ok-http-status)
    (f/fail (str "Request failed with status: " (:status response) " and body: " (:body response)))
    (get-in (:body response) [:choices 0 :message :content])))

(defn generate-code-async
  "Get api key, text of the code request, data for logging and the previous context and function to make request.\n
   Make request to ChatGPT with output to channel with builded transducer for parsing result. \n
   Return async channel with text of ChatGPT API response or fail, if occurs."
  ([log-id make-api-request security-key code-request context] 
   (make-api-request
    log-id
    security-key
    code-request
    "user"
    context
    (chan 1 (map (comp
                  (partial map-not-fail (partial format/remove-triple-back-quote log-id 0))
                  (partial map-not-fail (log-request log-id code-request "user" context))
                  (partial parse-response log-id))))))
  ([log-id make-api-request openai-key code-request]
   (generate-code-async
    log-id
    make-api-request
    openai-key
    code-request
    (:initilal-context ai-config))))

;; This is the way to make this function 'pure'. May be usefull in the future.
;; (defn generate-code-async
;;   "Get api key, text of the code request, data for logging and the previous context and function to make request.\n
;;    Make request to ChatGPT with output to channel with builded transducer for parsing result. \n
;;    Return async channel with text of ChatGPT API response or fail, if occurs."
;;   ([log-id make-api-request security-key code-request parse-response log-request]
;;    (make-api-request
;;     log-id
;;     security-key
;;     code-request
;;     (chan 1 (map (comp
;;                   (partial map-not-fail (partial format/remove-triple-back-quote log-id 0))
;;                   (partial map-not-fail (log-request log-id code-request))
;;                   (partial parse-response log-id))))))
;;   ([log-id openai-key code-request]
;;    (generate-code-async
;;     log-id
;;     #(gpt/get-chatgpt-api-async-response % % % "user" (:initilal-context ai-config))
;;     openai-key
;;     code-request
;;     #(log-chatgpt-request % % "user" (:initilal-context ai-config)))))