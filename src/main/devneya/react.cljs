(ns devneya.react
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [failjure.core :as f]
            [devneya.prompt :as prompt]
            [devneya.utils :as utils]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn- request-page []
  (let [prompt (r/atom "")
        response (r/atom "")
        openai-key (r/atom "")]
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
         [:label {:for "api-key"} "OpenAI api key:"]
         [:input {:type "text"
                  :id "openai-key"
                  :name "openai key"
                  :value @openai-key
                  :on-change #(reset! openai-key (-> % .-target .-value))}]
         [:br]
         [:button
          {:type "submit-prompt"
           :on-click #(go (reset! response (f/attempt f/message (<! (prompt/make-prompt-chain 
                                                                   @openai-key 
                                                                   3
                                                                   "utils/date-hms"
                                                                   @prompt)))))}
          "Submit"]]
        [:input {:type "text"
                 :id "response"
                 :name "response"
                 :value @response}]]])))

(defn run-react []
  (rdom/render
   [request-page]
   (.-body js/document)))