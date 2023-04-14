(ns devneya.gpt-test
  (:require [clojure.test :refer :all]
            [devneya.gpt :refer :all :as gpt]))

(deftest get-chatgpt-api-response-test
  (testing "Exception thrown when openai api key is wrong."
    (is (thrown? Exception (gpt/get-chatgpt-api-response "hello" "wrong key!")))))