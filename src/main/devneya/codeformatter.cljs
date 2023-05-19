(ns devneya.codeformatter
  (:require [failjure.core :as f]
            [clojure.string :as clstr]
            [taoensso.timbre :as timbre]
            [devneya.utils :as utils])
  (:require-macros [failjure.core]))

(defn remove-triple-back-quote
  "Removes triple back quote
   ```(\\w+)?(\r)?\n matches line with opening triple back quote and language name
   ([\\s\\S]+?) matches text between quotes (if exists)
   (\r)?\n``` line with closing triple back quote"
  ([merge stri]
   (let [matched (re-seq #"(```(\w+)?(\r)?\n([\s\S]*?)(\r)?\n```)" stri)
         index_of_block 4
         blocks (map #(str (get %1 index_of_block) utils/endl) matched)
         result (or (if (= matched nil) stri (reduce str blocks)) "")
         result (clstr/replace result #"(```(\w+)?(\r)?\n```)" "")]
     (if (= merge 1)
       result
       (if (> (count blocks) 1)
         (f/fail "chatGPT splitted the code to multiple blocks, try to simplyfy your request")
         result))))

  ([merge logdata stri]
   (timbre/info logdata)
   (remove-triple-back-quote merge stri)))

;; (defn find-first-block
;;   "Function uses regexp to find first block in triple back quotes"
;;   [stri]
;;   (let [re-match-block (re-pattern "```(\\w+)?(\\r)?\\n([\\s\\S]+?)(\\r)?\\n```"),
;;         matched-data (re-find re-match-block stri),
;;         index-of-matched-block 0,
;;         index-of-block-inner-part 2]
;;     ;; (print matched-data) ;; used to know required indexes
;;     (get matched-data index-of-block-inner-part)))

;; (defn filter-by-index-parity [lst parity]
;;   (->> lst
;;        (map #(vector %1 %2) (range))
;;        (filter #(= (mod (first %) 2) parity))
;;        (map second)))

;; (defn remove-triple-back-quote
;;   "Function uses regexp to find first block in triple back quotes"
;;   [stri merge]
;;   (let [re-match-quotes (re-pattern "(```(\\w+)?(\\r)?\\n)")
;;         re-match-quotes-end (re-pattern "(```(\\w+)?)")
;;         ;; Splitting by triple quotes with \n after them
;;         splitted-stri (clstr/split stri re-match-quotes)
;;         ;; Splitting by triple quotes with \n before them
;;         splitted-stri-final (flatten (map #(clstr/split % re-match-quotes-end) splitted-stri))
;;         ;; If we have at least one pair of ```, index of first block inside them after split is 1
;;         ;; If we do not have any ```, index of only block is 0
;;         blocks (if (> (count splitted-stri-final) 1) (filter-by-index-parity splitted-stri-final 1) splitted-stri-final)]
;;     ;; Numbe of elements in splitted-stri-final should be odd, otherwise we have one ``` without pair
;;     ;; I am not shure that it is a good idea to check it
;;     (if (= merge 1)
;;       (clstr/join blocks)
;;       (if (> (count blocks) 1)
;;         (f/fail "chatGPT splitted the code to multiple blocks, try to simplyfy your request")
;;         (clstr/join blocks)))))