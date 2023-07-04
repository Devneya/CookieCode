(ns devneya.cookieCodeRender
  (:require 
   [devneya.utils :refer [get-element-by-class-name toggle-class]]
   [devneya.cookieCodeForm :refer [cookie-code-form-template]]
   [reagent.core :as r]
   [reagent.dom :as rdom]
   ))



(def cookie-code-container (get-element-by-class-name "cookie-code-container"))
(def cookie-code-popup-button (get-element-by-class-name "cookie-code-popup-button"))

(defn add-popup-toggle-class-listener []
  (let [cookie-code-form (get-element-by-class-name "cookie-code-form")
        cookie-code-form__close-button (get-element-by-class-name "cookie-code-form__close-button")
        cookie-code-form__copy-button (get-element-by-class-name "cookie-code-form__copy-button")]
    (.addEventListener cookie-code-popup-button "click" #(toggle-class cookie-code-form "active"))
    (.addEventListener cookie-code-form__close-button "click" #(toggle-class cookie-code-form "active"))
    (.addEventListener cookie-code-form__copy-button "click" #((. (. js/navigator -clipboard) writeText (.-value (get-element-by-class-name "cookie-code-form__response")))
                                                               (toggle-class cookie-code-form "active")))))

(defn render-cookie-code []
  (rdom/render [cookie-code-form-template] cookie-code-container)
  (add-popup-toggle-class-listener))