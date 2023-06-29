(ns devneya.codeGenerationTest
  (:require [cljs.test :refer-macros [deftest is testing]]
            [devneya.prompt :as prompt]
            [failjure.core :as f]
            [devneya.gpt :as gpt]
            [cljs.core.async :refer [go >! <! chan]]))

(def hello-world-returner
  (let [n (atom 0)]
    (with-meta
      (fn [log-id openai-key text role context output-channel]
        (swap! n inc)
        (go (>! output-channel "console.log(\"Hello, world!\");")))
      {::call-count (fn [] @n)})))

(def wrong-returner
  (let [n (atom 0)]
    (with-meta
      (fn [log-id openai-key text role context output-channel]
        (swap! n inc)
        (go (>! output-channel "There is no code!")))
      {::call-count (fn [] @n)})))

(deftest make-prompt-chain-test
  (testing "Got correct code from the first call."
    (with-redefs [gpt/get-chatgpt-api-async-response hello-world-returner]
      (go (let [res (<! (prompt/make-prompt-chain "" "" 3 ""))]
            (is (= res "console.log(\"Hello, world!\");")))
          (is (= ((::call-count (meta hello-world-returner))) 1)))))
  
  (testing "Never got correct code."
    (with-redefs [gpt/get-chatgpt-api-async-response wrong-returner]
      (go (let [res (<! (prompt/make-prompt-chain "" "" 3 ""))]
            (is (f/failed? res)))
          (is (= ((::call-count (meta wrong-returner))) 3))))))