import "./cljs_env.js";
goog.provide('devneya.formatters');
/**
 * Removes triple back quote
 * ```(\w+)?()?
 *  matches line with opening triple back quote and language name
 * ([\s\S]+?) matches text between quotes (if exists)
 * ()?
 * ``` line with closing triple back quote
 */
devneya.formatters.remove_triple_back_quote = (function devneya$formatters$remove_triple_back_quote(log_id,merge,stri){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"remove-triple-back-quote function started");

var matched = cljs.core.re_seq(/(```(\w+)?(\r)?\n([\s\S]*?)(\r)?\n```)/,stri);
var index_of_block = (4);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18936_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__18936_SHARP_,index_of_block)),"\n"].join('');
}),matched);
var result = (function (){var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matched,null))?stri:cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,blocks));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})();
var result__$1 = clojure.string.replace(result,/(```(\w+)?(\r)?\n```)/,"");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(merge,(1))){
return result__$1;
} else {
if((cljs.core.count(blocks) > (1))){
return failjure.core.fail.cljs$core$IFn$_invoke$arity$1("chatGPT splitted the code to multiple blocks, try to simplyfy your request");
} else {
return result__$1;
}
}
});
devneya.formatters.remove_colors = (function devneya$formatters$remove_colors(log_id,stri){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"remove-colors function started");

return clojure.string.replace(stri,/\[([0,1,2,3,4,5,6,7,8,9]+)m/,"");
});
/**
 * In that version output path should be just a file name
 */
devneya.formatters.remove_user_path = (function devneya$formatters$remove_user_path(log_id,stri,output_path){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"remove-user-path function started");

var output_with_underline = clojure.string.replace(output_path,/./,(function (p1__18947_SHARP_){
return ["[_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18947_SHARP_,"\\")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18947_SHARP_,"/"))))?"\\/":p1__18947_SHARP_)),"]"].join('');
}));
var re_bad_string = cljs.core.re_pattern(["([\\s^]*)at ([_\\S]*)",output_with_underline,"[_:]([_\\d]+)[_:]([_\\d]+)"].join(''));
var index_of_string_number = (3);
var index_of_char_number = (4);
return clojure.string.replace(stri,re_bad_string,(function (p1__18949_SHARP_){
return [" Error starts at string ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__18949_SHARP_,index_of_string_number))," char ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__18949_SHARP_,index_of_char_number))].join('');
}));
});

//# sourceMappingURL=devneya.formatters.js.map
