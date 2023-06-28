(ns devneya.codeFormatterTest
  (:require [cljs.test :refer-macros [deftest is testing]]
            [devneya.formatters :as formatter]
            [failjure.core :as f]
            [devneya.testUtils :refer [local-slurp]]))

(deftest remove-triple-back-quote-test
  (testing "Removing quotes from empty file."
    (is (= (formatter/remove-triple-back-quote "" 0 (local-slurp "formatter_test_files/empty.txt"))
           (local-slurp "formatter_test_files/empty.txt"))))

  (testing "Removing quotes from file with no quotes."
    (is (= (formatter/remove-triple-back-quote "" 0 (local-slurp "/formatter_test_files/no_quotes.txt"))
           (local-slurp "/formatter_test_files/no_quotes_ans.txt"))))

  (testing "Removing quotes from file with empty body between quotes."
    (is (= (formatter/remove-triple-back-quote "" 0 (local-slurp "/formatter_test_files/empty_body.txt"))
           (local-slurp "/formatter_test_files/empty_body_ans.txt"))))

  (testing "Removing quotes from file with \\n between quotes."
    (is (= (formatter/remove-triple-back-quote "" 0 (local-slurp "/formatter_test_files/endl.txt"))
           (local-slurp "/formatter_test_files/endl_ans.txt"))))

  (testing "Removing quotes from file with text and block after it."
    (is (= (formatter/remove-triple-back-quote "" 0 (local-slurp "/formatter_test_files/text_before.txt"))
           (local-slurp "/formatter_test_files/text_before_ans.txt"))))

  (testing "Removing quotes from file with text and block before it."
    (is (= (formatter/remove-triple-back-quote "" 0 (local-slurp "/formatter_test_files/text_after.txt"))
           (local-slurp "/formatter_test_files/text_after_ans.txt"))))

  (testing "Removing quotes from 2 blocks."
    (is (= (formatter/remove-triple-back-quote "" 1 (local-slurp "/formatter_test_files/2_blocks.txt"))
           (local-slurp "/formatter_test_files/2_blocks_ans.txt"))))

  (testing "Removing quotes from 2 blocks (no merge flag)."
    (is (f/failed? (formatter/remove-triple-back-quote "" 0 (local-slurp "/formatter_test_files/2_blocks.txt")))))

  (testing "Removing quotes from file with 2 blocks and text between."
    (is (= (formatter/remove-triple-back-quote "" 1 (local-slurp "/formatter_test_files/2_blocks_between.txt"))
           (local-slurp "/formatter_test_files/2_blocks_between_ans.txt"))))

  (testing "Removing quotes from file with 2 blocks and text between (ne merge flag)."
    (is (f/failed? (formatter/remove-triple-back-quote "" 0 (local-slurp "/formatter_test_files/2_blocks_between.txt")))))

  (testing "Removing quotes from file with 2 blocks and text around them."
    (is (= (formatter/remove-triple-back-quote "" 1 (local-slurp "/formatter_test_files/2_blocks_everywhere.txt"))
           (local-slurp "/formatter_test_files/2_blocks_everywhere_ans.txt"))))

  (testing "Removing quotes from file with 2 blocks and text around them (ne merge flag)."
    (is (f/failed? (formatter/remove-triple-back-quote "" 0 (local-slurp "/formatter_test_files/2_blocks_everywhere.txt"))))))