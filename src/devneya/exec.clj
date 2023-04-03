(ns devneya.exec
  (:require [clojure.java.shell :refer [sh]]))

(defn exec-code
  "Execute given file in Deno"
  [deno-token deno-project filename]
  (println (sh "deployctl" "deploy" "--token" deno-token "--project" deno-project filename))
  )
