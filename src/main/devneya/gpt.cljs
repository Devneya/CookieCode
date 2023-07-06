(ns devneya.gpt
  (:require [failjure.core :as f]
            [cljs-http.client :as http]
            [cljs.core.async :refer [go chan >!]]
            [devneya.utils :refer [ok-http-status chan->promise]]
            [devneya.err :refer [map-not-fail]]
            [devneya.formatters :as format]
            [taoensso.timbre :as log])
  (:require-macros [failjure.core]))

(def openai-config {:openai-api-url "https://api.openai.com/v1/chat/completions"
                    :openai-model "gpt-3.5-turbo"
                    :temperature 0.3
                    :initilal-context (fn [language-name]
                                        [{:role    "system"
                                          :content (str "You are a system that only generates code in " language-name ".\n"
                                                        "Do not describe or contextualize the code.\n"
                                                        "Do not apply any formatting or syntax highlighting.\n"
                                                        "Do not wrap the code in a code block.")}])})

(defn build-headers [openai-key]
  {"Content-Type" "application/json"
   "Authorization" (str "Bearer " openai-key)})

(defn build-body [role text context]
  {:model (:openai-model openai-config)
   :temperature (:temperature openai-config)
   :messages (concat context [{:role role :content text}])})

(defn get-chatgpt-api-response
  "Get api key, text of the message, role for the message, previous context and output channel ((chan) by default).\n
   Send request to ChatGPT.\n
   Return output channel with result."
  ([openai-key text role context output-channel]
   (log/info "Making a request to ChatGPT.")
   (if (some #(> (.charCodeAt % 0) 127) (seq openai-key))
     (go (>! output-channel (f/fail "Non-ascii character in security key.")))
     (http/post (:openai-api-url openai-config) {:headers (build-headers openai-key)
                                                 :json-params (build-body role text context)
                                                 :with-credentials? false
                                                 :channel output-channel}))
   output-channel)
  ([openai-key text role context]
   (get-chatgpt-api-response openai-key text role context (chan))))

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
      (str "Model: " (:openai-model openai-config) "\n"
           "Temperature: " (:temperature openai-config) "\n")
      (conj context {:role role :content text}))
     (str "Response:\n" parsed-response "\n"))))

(defn log-request
  "Get role and text of new request and previous context.\n
   Build logging function, which later can be used as transducer."
  [text role context]
  (fn [parsed-response]
    (log/info "Logging chat GPT request:")
    (log/info (build-request-info text role context parsed-response))
    parsed-response))

(defn parse-response
  "Get ChatGPT response and parse it. Can be used as transducer."
  [response]
  (log/info "Parsing chat GPT response and handling status started")
  (if (not= (:status response) ok-http-status)
    (f/fail (str "Request failed with status: " (:status response) " and body: " (:body response)))
    (get-in (:body response) [:choices 0 :message :content])))

(defn generate-code
  "Get api key, code language name and text of request.\n
   Make request to ChatGPT with output to channel with builded transducer for parsing result 
   and with initial context with given language name. \n
   Return async channel with text of ChatGPT API response or fail, if occurs."
  ([openai-key language-name code-request]
   (let [context ((:initilal-context openai-config) language-name)]
     (get-chatgpt-api-response
      openai-key
      code-request
      "user"
      context
      (chan 1 (map (comp
                    (partial map-not-fail (partial format/remove-triple-back-quote 0))
                    (partial map-not-fail (log-request code-request "user" context))
                    (partial map-not-fail parse-response))))))))

(defn initial-request
  ([openai-key language-name code-request]
   (log/info "Making initial prompt with ChatGPT.")
   (generate-code openai-key
                  language-name
                  (str "Write only code. Do not use ```. " code-request))))

(defn fix-request
  "Get api key, code language name, generated code, and it's check error.\n
   Make generate code request to ChatGPT to fix it.\n
   Return async channel with fixed code or with fail."
  [openai-key language-name generated-code check-error]
  (log/info (str "Making fix prompt."))
  (generate-code openai-key
                 language-name
                 (str "Here is a code:\n"
                      generated-code
                      "\nThere is problem with this code:\n"
                      check-error
                      "\nRewrite code to fix it. Write only code. Do not use ```.")))

(defn test-post
  "testfunc"
  [openai-key prompt]
  (let [out (chan)]
    (http/post
     (:openai-api-url openai-config)
     {:headers (build-headers openai-key)
      :json-params (build-body "user" prompt (:initilal-context openai-config))
      :with-credentials? false
      :channel out})
    (chan->promise out)))
(:export test-post)