(ns devneya.utils
  (:require [cljs.core.async :refer [<! go]]
            [failjure.core :as f]))

(def ok-http-status 200)

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
  (-> js/document
      (.getElementsByClassName class-name)
      (.item 0)))