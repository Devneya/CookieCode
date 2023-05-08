(ns devneya.react
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [failjure.core :as f]
            [devneya.prompt :as prompt]
            [devneya.utils :as utils]))

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
           :on-click #(reset! response (f/attempt f/message (prompt/make-prompt-chain 
                                                             "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" 
                                                             3
                                                             (utils/date-hms) 
                                                             prompt)))}
          "Submit"]]
        [:input {:type "text"
                 :id "response"
                 :name "response"
                 :value @response}]]])))

(defn run-react []
  (rdom/render
   [request-page]
   (.-body js/document)))