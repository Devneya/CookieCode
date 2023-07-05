(ns devneya.cookieCodeExtension
  (:require
   [devneya.utils :refer [get-element-by-class-name]]
   [devneya.cookieCodeRender :refer  [render-cookie-code]]
   [goog.dom :as gdom]

   [reagent.core :as r]
   [reagent.dom :as rdom]))


(defn cookie-code-extension []
  (let [cookie-code-container (gdom/createElement "div")
        cookie-code-popup-button (gdom/createElement "button") 
        body (.querySelector js/document "body")]
    (gdom/setProperties cookie-code-container #js {"class" "cookie-code-container"})
    (gdom/setProperties cookie-code-popup-button #js {"class" "cookie-code-popup-button cookie-code-btn"})
    (set! (.-innerText cookie-code-popup-button) "Cookie Code")
    (gdom/appendChild body cookie-code-container) 
    (gdom/appendChild body cookie-code-popup-button)
    (render-cookie-code cookie-code-container)))