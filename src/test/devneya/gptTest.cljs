(ns devneya.gptTest
  (:require [cljs.test :refer-macros [deftest is testing async]]
            [devneya.gpt :as gpt]
            [failjure.core :as f]
            [cljs.core.async :refer [go <!]]))

(deftest get-chatgpt-api-async-response-test
  (testing "Non-ascii character in security key."
    (let [res-chan (gpt/get-chatgpt-api-async-response "" "русский текст" "" "" [])]
      (async done
             (go (is (= (f/fail "Non-ascii character in security key.") (<! res-chan))))
             (done)))))