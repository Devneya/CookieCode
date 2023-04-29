(ns devneya.code-formatter-test
  (:require [clojure.test :refer :all]
            [devneya.code_formatter :as formatter]))

;; (deftest get-chatgpt-api-response-test
;;   (testing "Correct querry to openai api shouldn't lead to exception."
;;     (gpt/get-chatgpt-api-response core/config "write hello world")))

(deftest quotes-empty-test
  (testing "Removing quotes from empty file."
    (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/empty.txt") 0)
           (slurp "test/devneya/formatter_test_files/empty_ans.txt")))))

(deftest quotes-file-with-no-quotes-test
  (testing "Removing quotes from file with no quotes."
        (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/no_quotes.txt") 0)
           (slurp "test/devneya/formatter_test_files/no_quotes_ans.txt")))))

(deftest quotes-empty-body-test
  (testing "Removing quotes from file with empty body between quotes."
        (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/empty_body.txt") 0)
           (slurp "test/devneya/formatter_test_files/empty_body_ans.txt")))))

(deftest quotes-endl-in-body-test
  (testing "Removing quotes from file with \\n between quotes."
        (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/endl.txt") 0)
           (slurp "test/devneya/formatter_test_files/endl_ans.txt")))))

(deftest quotes-text-before-block-test
  (testing "Removing quotes from file with text and block after it."
        (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/text_before.txt") 0)
           (slurp "test/devneya/formatter_test_files/text_before_ans.txt")))))

(deftest quotes-text-after-block-test
  (testing "Removing quotes from file with text and block before it."
        (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/text_after.txt") 0)
           (slurp "test/devneya/formatter_test_files/text_after_ans.txt")))))

(deftest quotes-2-blocks-test
  (testing "Removing quotes from 2 blocks."
        (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks.txt") 1)
           (slurp "test/devneya/formatter_test_files/2_blocks_ans.txt")))))

(deftest quotes-2-blocks-no-merge-test
  (testing "Removing quotes from 2 blocks (no merge flag)."
        (is (= (str (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks.txt") 0))
           (slurp "test/devneya/formatter_test_files/2_blocks_no_merge_ans.txt")))))

(deftest quotes-2-blocks-with-text-between-test
  (testing "Removing quotes from file with 2 blocks and text between."
        (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks_between.txt") 1)
           (slurp "test/devneya/formatter_test_files/2_blocks_between_ans.txt")))))

(deftest quotes-2-blocks-with-text-between-no-merge-test
  (testing "Removing quotes from file with 2 blocks and text between (ne merge flag)."
        (is (= (str (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks_between.txt") 0))
           (slurp "test/devneya/formatter_test_files/2_blocks_between_no_merge_ans.txt")))))

(deftest quotes-2-blocks-with-text-everywhere-test
  (testing "Removing quotes from file with 2 blocks and text around them."
        (is (= (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks_everywhere.txt") 1)
           (slurp "test/devneya/formatter_test_files/2_blocks_everywhere_ans.txt")))))

(deftest quotes-2-blocks-with-text-everywhere-no-merge-test
  (testing "Removing quotes from file with 2 blocks and text around them (ne merge flag)."
        (is (= (str (formatter/remove-triple-back-quote (slurp "test/devneya/formatter_test_files/2_blocks_everywhere.txt") 0))
           (slurp "test/devneya/formatter_test_files/2_blocks_everywhere_no_merge_ans.txt")))))