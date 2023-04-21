(ns devneya.cli
  (:require [clojure.string :as str]
            [clojure.tools.cli :refer [parse-opts]]
            [devneya.exec :as exec]
            [devneya.err :as err]
            [devneya.prompt :as prompt]))

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
  (let [{:keys [prompt options exit-message ok?]} (validate-args args)]
    (when exit-message (err/exit (if ok? 0 1) exit-message))
    (if (= (:all options) true)
      (try
      (loop [i 0]
        (if (= i 0)
          (prompt/make-initial-prompt config prompt)
          (prompt/make-fix-prompt config))
        (exec/exec-code config)
        (if (and (not= (slurp (:DENO_ERROR_FILENAME config)) "") (< i (:MAX_REPS config)))
          (recur (inc i))
          (println "Code generated successfully.\nPath:" (:CODE_FILENAME config))))
        (catch Throwable e (err/catch-error e)))
      (try
        (when (= (:gen options) true) (prompt/make-initial-prompt config prompt))
        (when (= (:exec options) true) (exec/exec-code config))
        (catch Throwable e (err/catch-error e))))))

  