(ns devneya.cli
  (:require [clojure.string :as str]
            [clojure.tools.cli :refer [parse-opts]]
            [devneya.exec :as exec]
            [devneya.err :as err]
            [devneya.prompt :as prompt]
            [devneya.utils :as utils]
            [failjure.core :as f]))

(defn usage
  "Composes the summary string"
  [options-summary]
  (->> ["Usage: program-name [options] prompt"
        ""
        "Options:"
        options-summary
        ""
        "Prompt:"
        "Text request to ChatGPT"
        ""
        "Please refer to the manual page for more information."]
       (str/join \newline)))

(defn error-msg [errors]
  (str "The following errors occurred while parsing your command:\n\n"
       (str/join \newline errors)))

(defn validate-args
  "Validate command line arguments."
  [args]
  (let [cli-options
        [["-g" "--[no-]gen" "Generate the code" :default true]
         ["-x" "--[no-]exec" "Execute the code" :default false]
         ["-a" "--all" "Repeat code generation and execution" :default false]
         ["-h" "--help"]]
        {:keys [options arguments summary errors]} (parse-opts args cli-options)
        prompt (str/join " " arguments)]

    (cond
      (:help options) ; help => exit OK with usage summary
      {:exit-message (usage summary) :ok? true}
      errors ; errors => exit with description of errors
      {:exit-message (error-msg errors)}
      ;; custom validation on arguments

      (not (str/blank? prompt))
      {:prompt prompt :options options}
      :else ; failed custom validation => exit with usage summary
      {:exit-message (usage summary)})))

(defn run-cli [config args]
  (let [{:keys [prompt options exit-message ok?]} (validate-args args)
        date (utils/date-hms)]
    (when exit-message (err/exit (if ok? 0 1) exit-message))
    (if (= (:all options) true)
          ;;perform prompt chain and if it wasn't successfull, then plrint error in console
          ;;otherwise print successfull message
      (f/if-let-failed?
       [fail (prompt/make-prompt-chain config date prompt)]
       (print (f/message fail))
       (print "Code generated successfully."))
      ;;perform one prompt and execute, if required
      ;;if error occured anywhere print it in console
      ;;otherwise print successfull message
      (f/attempt-all
       [_ (when (= (:gen options) true)
            (prompt/make-initial-prompt config date prompt))
        _ (when (= (:exec options) true)
            (exec/exec-code config))]
       (print "Code generated.")
       (f/when-failed [fail] (print (f/message fail)))))))