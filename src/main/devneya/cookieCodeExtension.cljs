(ns devneya.cookieCodeExtension
  (:require
   [devneya.utils :refer [get-element-by-class-name toggle-class]]
   [devneya.cookieCodeRender :refer  [render-cookie-code]]
   [goog.dom :as gdom]

   [reagent.core :as r]
   [reagent.dom :as rdom]))


(defn cookie-code-extension [] 
  
(let [cookie-code-container (gdom/createElement "div")
      cookie-code-popup-button (gdom/createElement "button")
      body (.querySelector js/document "body") 
      observer (js/MutationObserver. #(when (and (not (get-element-by-class-name "cookie-code-popup-button"))
                                                 (.querySelector js/document "button[title='Add context variable']"))
                                        (gdom/appendChild (.-parentElement (.-parentElement (.querySelector js/document "button[title='Add context variable']"))) cookie-code-popup-button)))]
  (gdom/setProperties cookie-code-container #js {"class" "cookie-code-container"})
  (gdom/setProperties cookie-code-popup-button #js {"class" "cookie-code-popup-button cookie-code-btn"})
  (set! (.-innerText cookie-code-popup-button) "Cookie Code")
  (gdom/appendChild body cookie-code-container)
  (.observe observer body #js {"childList" true "subtree" true})
  (render-cookie-code cookie-code-container)
  ))

  