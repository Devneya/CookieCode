(ns devneya.err)

(defn exit [status msg] 
  (println msg)
  (System/exit status))

(defn parse-err 
  "Parses Throwable exception and returns status and message"
  [e]
  (let  [data (get-in (Throwable->map e) [:via 0 :data])]
    {:err-status (:status data) :err-body (:body data)}
    )
  )

(defn catch-error
  "Main func for catching errors"
  [e]
  (let [{:keys [err-status err-body]} (parse-err e)]
  (exit err-status err-body))
  )