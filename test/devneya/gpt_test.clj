(ns devneya.gpt-test
  (:require [clojure.test :refer :all]
            [devneya.gpt :as gpt]
            [devneya.core :as core]))

(deftest get-chatgpt-api-response-test
  (testing "Exception thrown when openai api key is wrong."
    (is (thrown? Exception (gpt/get-chatgpt-api-response "hello" "wrong key!"))))
  (testing "Correct querry to openai api shouldn't lead to exception."
    (gpt/get-chatgpt-api-response "write hello world" (:OPENAI_KEY core/config)))
  )