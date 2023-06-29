(ns devneya.utils
  (:require [cljs.core.async :refer [<! go]]
            [clojure.string :as string]
            [failjure.core :as f]
            [taoensso.timbre :as timbre]))

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


(defn classes-of
  "Get the classes of an element as a Clojure keyword vector."
  [e]
  (let [words (-> e (.getAttribute "class") (string/split " "))]
    (mapv keyword words)))

(defn classes->str
  "Change a Clojure keyword seq into an HTML class string."
  [classes]
  (->> classes (mapv name) (string/join " ")))

(defn class-reset!
  "Unconditionally set the classes of an element."
  [e classes]
  (.setAttribute e "class" (classes->str classes))
  e)

(defn class-swap!
  "Update the classes of an element using a fn."
  [e f]
  (class-reset! e (f (classes-of e))))

(defn add-class!
  "Add a class to an element."
  [e class]
  (class-swap! e #(distinct (conj % (keyword class)))))

(defn remove-class!
  "Remove a class from an element."
  [e class]
  (class-swap! e (fn [current] (remove #(= % (keyword class)) current))))

(defn toggle-class!
  "Toggle between 2 classes, one of which is already on the element."
  [e class1 class2]
  (let [toggle-map {(keyword class1) (keyword class2), (keyword class2) (keyword class1)}]
    (class-swap! e #(replace toggle-map %))))

(defn toggle-class [el toggled-class]
  (let [el-classList (.-classList el)]
    (if (.contains el-classList toggled-class)
      (.remove el-classList toggled-class)
      (.add el-classList toggled-class))))