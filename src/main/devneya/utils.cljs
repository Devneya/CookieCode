(ns devneya.utils
  (:require [taoensso.timbre :as timbre]
            [cljs.core.async :refer [<! go]]))

(def ok-http-status 200)

(def ai-config {:OPENAI-API-URL "https://api.openai.com/v1/chat/completions" 
                :OPENAI-MODEL "gpt-3.5-turbo" 
                :TEMPERATURE 0.3
                :INITIAL-CONTEXT [{:role    "system"
                                   :content (str "You are a system that only generates code in JavaScript.\n"
                                                 "Do not describe or contextualize the code.\n"
                                                 "Do not apply any formatting or syntax highlighting.\n"
                                                 "Do not wrap the code in a code block.")}]})

(defn date-hms
  "Get current time and dater"
  []
  (.toUTCString (js/Date.)))

(defn log-with-id
  "Log data for specified log-id using logger function\n
   log-level-flags:
   0 - error
   1+ - custom"
  ([log-level-flag log-id log-string]
  (cond 
    (= log-level-flag 0) (timbre/error(str log-id " " log-string))
    :else  (timbre/info (str log-id " " log-string))))
  ([log-id log-string]
   (timbre/info (str log-id " " log-string))))

(defn chan->promise 
  "Get channel. \n
   Return js promise where data from channel is redirected."
  [c] 
  (js/Promise.
   (fn [resolve _]
     (go (resolve (<! c))))))