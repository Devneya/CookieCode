(ns devneya.exec
  (:require [babashka.process :as bp]
            [clojure.java.io :as io] 
            [taoensso.timbre :as timbre]
            [failjure.core :as f]))

(defn get-deployctl-command
  "Define the kind of command deployctl.\n
   Return string."
  []
  (timbre/info "Getting user deployctl path...") 
  (if (.exists (io/file (str (System/getProperty "user.home") "/snap/deno/105/.deno/bin/deployctl")))
    (str (System/getProperty "user.home") "/snap/deno/105/.deno/bin/deployctl")
    "deployctl"))

(defn exec-code
  "Get config with path to executable\n
   Execute it in Deno\n
   Return compile error as string, or api error as wrapped exception. If none of them occured returen nothing."
  [config]
  ;;try to execute deployctl, if deployment successful return nothing
  ;;otherwise check if compile error file is not empty, then return error as string
  ;;if not, returns wrapped api exception
   (timbre/info "Deno deployment started") 
   (let [deno-result (bp/shell {:continue true :err (:DENO_ERROR_FILENAME config)}
                               (str (get-deployctl-command)
                                    " deploy --token=" (:DENO_DEPLOY_TOKEN config)
                                    " --project=" (:DENO_PROJECT config)
                                    " " (:CODE_FILENAME config)))
         exec-error (slurp (:DENO_ERROR_FILENAME config))]
     (if (not= (:exit deno-result) 0)
       (if (not-empty exec-error)
         exec-error
         deno-result)
        (timbre/info "Deno deployment success!"))))