#!/usr/bin/env bb
(ns devneya.core
  (:require [devneya.utils :as utils]
            [devneya.cli :as cli])
  (:gen-class :main true))

(def config (utils/load-config))

(defn -main [& args] 
  (cli/run-cli config args))
