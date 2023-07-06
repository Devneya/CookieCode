(ns devneya.cookieCodeRender
  (:require [devneya.cookieCodeForm :refer [cookie-code-form-template]]
            [devneya.utils :refer [get-element-by-class-name toggle-class]]
            [reagent.dom :as rdom]))

(defn add-popup-toggle-class-listener []
  (let [cookie-code-form (get-element-by-class-name "cookie-code-form")
        cookie-code-popup-button (get-element-by-class-name "cookie-code-popup-button")
        cookie-code-form__close (get-element-by-class-name "cookie-code-form__close")
        cookie-code-form__copy-button (get-element-by-class-name "cookie-code-form__copy-button")]
    (for [x [cookie-code-form cookie-code-popup-button cookie-code-form__close cookie-code-form__copy-button]]
      (js/console.log x))
    (.addEventListener cookie-code-popup-button "click" #(toggle-class cookie-code-form "active"))
    (.addEventListener cookie-code-form__close "click" #(toggle-class cookie-code-form "active"))
    (.addEventListener cookie-code-form__copy-button "click" #((. (. js/navigator -clipboard) writeText (.-value (get-element-by-class-name "cookie-code-form__response")))
                                                               (toggle-class cookie-code-form "active")))))

(defn render-cookie-code
  ([]
   (rdom/render [cookie-code-form-template] (get-element-by-class-name "cookie-code-container"))
   (add-popup-toggle-class-listener))
  ([container]
   (rdom/render [cookie-code-form-template] container)
   (add-popup-toggle-class-listener)))