(ns devneya.testUtils
  (:require [clojure.string :as str]))

(defn local-slurp [path]
  (let [fs (js/require "fs")
        content (.readFileSync fs (str js/__dirname "/" path) "utf8")]
    (str/replace content #"\r\n" "\n")))