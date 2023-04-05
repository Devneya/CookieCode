(ns devneya.utils
  (:require [clj-yaml.core :as yml]))


(defn load-config
  "Parsing config file"
  [file]

  (let [yaml-str (slurp file)
        config-map (yml/parse-string yaml-str)]
    config-map))

(def current-deno-error-path "deno_error.txt")