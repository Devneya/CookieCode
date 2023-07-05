(ns devneya.utils
  (:require [cljs.core.async :refer [<! go]]
            [clojure.string :as string]
            [failjure.core :as f]
            [taoensso.timbre :as timbre]))

(def ok-http-status 200)

(def ai-config {:openai-api-url "https://api.openai.com/v1/chat/completions" 
                :openai-model "gpt-3.5-turbo" 
                :temperature 0.3
                :initilal-context [{:role    "system"
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
   1 - info"
  ([log-level-flag log-id log-string]
  (cond 
    (= log-level-flag 0) (timbre/error(str log-id " " log-string))
    :else  (timbre/info (str log-id " | " log-string))))
  ([log-id log-string]
   (log-with-id 1 log-id log-string)))

(defn chan->promise 
  "Get channel. \n
   Return js promise where data from channel is redirected."
  [c] 
  (js/Promise.
   (fn [resolve _]
     (go (resolve (f/attempt f/message (<! c)))))))

(defn toggle-class [el toggled-class]
  (let [el-classList (.-classList el)]
    (if (.contains el-classList toggled-class)
      (.remove el-classList toggled-class)
      (.add el-classList toggled-class))))

(defn get-element-by-class-name
  "Get the first DOM element with *class-name* class"
  [class-name]
  (js/console.log (.item (.getElementsByClassName js/document class-name) 0))
  (-> js/document
      (.getElementsByClassName class-name)
      (.item 0)))