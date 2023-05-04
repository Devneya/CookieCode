(ns devneya.server
  (:require [devneya.prompt :as prompt]
            [devneya.utils :as utils]
            [failjure.core :as f]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.params :refer [wrap-params]]))

(def config (utils/load-config))

(def greeting-form
  (str
   "<html>"
   "  <form action='' method='post'>"
   "    Enter prompt: <input type='text' name='prompt' required><br/>"
   "    <input type='submit' value='Say Hello'>"
   "  </form>"
   "</html>"))

(defn show-form 
  "Form response"
  [] 
  {:body greeting-form
   :status 200})

(defn show-code
  "Code response"
  []
  (println "The code has been successfully generated")
  {:body (str "Code:\n" (slurp (:CODE_FILENAME config)))
   :status 200})

(defn show-error
  "Error response"
  [err]
  {:body (str "Error: " err)
   :status 200})

(defn handler
  "Form handler"
  [req]
  (let [prompt (get-in req [:form-params "prompt"])]
    (if prompt
      ((f/if-let-failed?
        [fail (prompt/make-prompt-chain config (utils/date-hms) prompt)]
        (show-error (f/message fail))
        (show-code)))
      (show-form))))

(defn -main 
  "Run the server on port 3000"
  []
  (println "server on port 3000: http://localhost:3000")
  (jetty/run-jetty (wrap-params handler) {:port 3000}))