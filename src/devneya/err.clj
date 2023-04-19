(ns devneya.err)

(defn exit [status msg] 
  (println msg)
  (System/exit status))

(defn parse-err 
  "Parse Throwable exception, return error message"
  [e]
  (let  [data (get-in (Throwable->map e) [:via 0])] 
    (str "Type:     "(:type data) "\nMessage:  " (:message data))))

(defn catch-error
  "Main func for catching errors"
  [e]
  (let [msg (parse-err e)]
  (exit 1 msg)))

(defn parse-clojure-err 
  "Parse Throwable exception and return cmd and type"
  [e]
  (let  [data (get-in (Throwable->map e) [:via 0 :data])]
    {:err-cmd (:cmd data) :err-type (:type data)}))

(defn show-error
  "Show error"
  [e]
  (let [{:keys [err-cmd err-type]} (parse-clojure-err e)]
  (println err-type)
  (println err-cmd)))