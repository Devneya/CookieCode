import "./cljs_env.js";
goog.provide('devneya.exec');
/**
 * Get code to execute.
 * 
 * Execute it with js/eval
 * 
 * Return execution result or fail with compile error, if occurs.
 */
devneya.exec.exec_code = (function devneya$exec$exec_code(log_id,code){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"Evaluation started");

return failjure.core.try_fn((function (){
return eval(code);
}));
});

//# sourceMappingURL=devneya.exec.js.map
