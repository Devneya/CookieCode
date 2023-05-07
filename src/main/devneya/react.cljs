(ns devneya.react
  (:require [reagent.dom :as rdom]))

(defn- request-page []
  [:div
   [:header
    [:h1 "Devneya"]]
   [:main
    [:section
     [:h2 "Enter prompt"]
     [:form {:action "" :method "post"}
      [:label {:for "prompt"} "Prompt:"]
      [:input {:type "text" :id "prompt" :name "prompt" :required true}]
      [:br]
      [:input {:type "submit" :value "Submit"}]]]]])

(defn run-react []
  (rdom/render
   [request-page]
   (.-body js/document)))