(ns devneya.react
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]))

(defn- request-page []
  (let [prompt (r/atom "")
        response (r/atom "")]
    (fn []
      [:div
       [:header
        [:h1 "Devneya"]]
       [:main
        [:section
         [:h2 "Enter prompt"]
         [:label {:for "prompt"} "Prompt:"]
         [:input {:type "text"
                  :id "prompt"
                  :name "prompt"
                  :value @prompt
                  :on-change #(reset! prompt (-> % .-target .-value))}]
         [:br]
         [:button
          {:type "submit"
           :on-click #(reset! response @prompt)}
          "Submit"]]
        [:input {:type "text"
                 :id "response"
                 :name "response"
                 :value @response}]]])))

(defn run-react []
  (rdom/render
   [request-page]
   (.-body js/document)))