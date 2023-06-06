import "./cljs_env.js";
goog.provide('devneya.err');
devneya.err.map_not_fail = (function devneya$err$map_not_fail(fun,result){
if(cljs.core.truth_(failjure.core.failed_QMARK_(result))){
return result;
} else {
return (fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(result) : fun.call(null,result));
}
});
/**
 * Extend initial prompt fail with additional info.
 */
devneya.err.extend_initial_prompt_fail = (function devneya$err$extend_initial_prompt_fail(initial_result){
if(cljs.core.truth_(failjure.core.failed_QMARK_(initial_result))){
return failjure.core.fail.cljs$core$IFn$_invoke$arity$1(["Error occured on initial prompt:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_result)].join(''));
} else {
return initial_result;
}
});
/**
 * Extend fix prompt fail message with attempt number.
 */
devneya.err.extend_fix_prompt_fail = (function devneya$err$extend_fix_prompt_fail(fix_result,attempt){
if(cljs.core.truth_(failjure.core.failed_QMARK_(fix_result))){
return failjure.core.fail.cljs$core$IFn$_invoke$arity$1(["Error occured on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attempt),"-th fix prompt:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fix_result)].join(''));
} else {
return fix_result;
}
});

//# sourceMappingURL=devneya.err.js.map
