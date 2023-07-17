(ns devneya.lint
  (:require ["eslint/lib/linter/" :refer (Linter)]
            [cljs.core.async :refer [go chan >!]]))

(defn lint-check [code]
  (let [res-chan (chan)
        linter (Linter.)
        lint-res (js->clj (.verify linter code))]
    (go >! res-chan (if (:fatal lint-res)
                      (:message lint-res)
                      true))
    res-chan))