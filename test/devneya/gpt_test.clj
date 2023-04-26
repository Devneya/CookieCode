(ns devneya.gpt-test
  (:require [clojure.test :refer :all]
            [devneya.gpt :as gpt]
            [devneya.core :as core]))

(deftest get-chatgpt-api-response-test
  (testing "Correct querry to openai api shouldn't lead to exception."
    (gpt/get-chatgpt-api-response core/config "write hello world")))