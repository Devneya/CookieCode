(ns devneya.codeGenerationTest
  (:require [cljs.test :refer-macros [deftest is testing async]]
            [devneya.prompt :as prompt]
            [failjure.core :as f]
            [cljs.core.async :refer [go >! <!]]
            [devneya.utils :refer [ok-http-status]]))

(defn build-correct-plain-request [req]
  {:status ok-http-status :body {:choices [{:message {:content req}}]}})

(def hello-world-returner
  (let [n (atom 0)]
    (with-meta
      (fn [log-id openai-key text role context output-channel]
        (swap! n inc)
        (go (>! output-channel (build-correct-plain-request "console.log(\"Hello, world!\");")))
        output-channel)
      {::call-count (fn [] @n)})))

(def wrong-returner
  (let [n (atom 0)]
    (with-meta
      (fn [log-id openai-key text role context output-channel]
        (swap! n inc)
        (go (>! output-channel (build-correct-plain-request "There is no code!")))
        output-channel)
      {::call-count (fn [] @n)})))

(deftest make-correct-prompt-test
  (testing "Got correct code from the first call."
    (let [res-chan (prompt/make-prompt-chain "" hello-world-returner "" 3 "")]
      (async done
             (go
               (is (= (<! res-chan) "console.log(\"Hello, world!\");"))
               (is (= ((::call-count (meta hello-world-returner))) 1))
               (done))))))
  
(deftest make-incorrect-prompt-test
  (testing "Never got correct code."
    (let [res-chan (prompt/make-prompt-chain "" wrong-returner "" 3 "")]
      (async done
             (go
               (is (f/failed? (<! res-chan)))
               (is (= ((::call-count (meta wrong-returner))) 3))
               (done))))))