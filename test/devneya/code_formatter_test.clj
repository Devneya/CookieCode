(ns devneya.code-formatter-test
  (:require [clojure.test :refer :all]
            [devneya.code_formatter :as formatter]
            [failjure.core :as f]))

;; (deftest get-chatgpt-api-response-test
;;   (testing "Correct querry to openai api shouldn't lead to exception."
;;     (gpt/get-chatgpt-api-response core/config "write hello world")))

(deftest remove-triple-back-quote-test
  (testing "Removing quotes from empty file."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/empty.txt") 0)
           (slurp "test/devneya/formatter_test_files/empty_ans.txt"))))

  (testing "Removing quotes from file with no quotes."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/no_quotes.txt") 0)
           (slurp "test/devneya/formatter_test_files/no_quotes_ans.txt"))))

  (testing "Removing quotes from file with empty body between quotes."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/empty_body.txt") 0)
           (slurp "test/devneya/formatter_test_files/empty_body_ans.txt"))))

  (testing "Removing quotes from file with \\n between quotes."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/endl.txt") 0)
           (slurp "test/devneya/formatter_test_files/endl_ans.txt"))))

  (testing "Removing quotes from file with text and block after it."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/text_before.txt") 0)
           (slurp "test/devneya/formatter_test_files/text_before_ans.txt"))))

  (testing "Removing quotes from file with text and block before it."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/text_after.txt") 0)
           (slurp "test/devneya/formatter_test_files/text_after_ans.txt"))))

  (testing "Removing quotes from 2 blocks."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks.txt") 1)
           (slurp "test/devneya/formatter_test_files/2_blocks_ans.txt"))))

  (testing "Removing quotes from 2 blocks (no merge flag)."
    (is (f/failed? (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks.txt") 0))))

  (testing "Removing quotes from file with 2 blocks and text between."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks_between.txt") 1)
           (slurp "test/devneya/formatter_test_files/2_blocks_between_ans.txt"))))

  (testing "Removing quotes from file with 2 blocks and text between (ne merge flag)."
    (is (f/failed? (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks_between.txt") 0))))

  (testing "Removing quotes from file with 2 blocks and text around them."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks_everywhere.txt") 1)
           (slurp "test/devneya/formatter_test_files/2_blocks_everywhere_ans.txt"))))

  (testing "Removing quotes from file with 2 blocks and text around them (ne merge flag)."
    (is (f/failed? (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks_everywhere.txt") 0)))))