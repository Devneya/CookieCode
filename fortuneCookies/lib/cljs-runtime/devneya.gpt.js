import "./cljs_env.js";
goog.provide('devneya.gpt');
devneya.gpt.build_headers = (function devneya$gpt$build_headers(openai_key){
return new cljs.core.PersistentArrayMap(null, 2, ["Content-Type","application/json","Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(openai_key)].join('')], null);
});
devneya.gpt.build_body = (function devneya$gpt$build_body(role,text,context){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"OPENAI-MODEL","OPENAI-MODEL",568559685).cljs$core$IFn$_invoke$arity$1(devneya.utils.ai_config),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"TEMPERATURE","TEMPERATURE",-2011178859).cljs$core$IFn$_invoke$arity$1(devneya.utils.ai_config),new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"content","content",15833224),text], null)], null))], null);
});
/**
 * Get api key, text of the message, role for the message, previous context and output channel ((chan) by default).
 * 
 * Send request to ChatGPT.
 * 
 * Return output channel with result.
 */
devneya.gpt.get_chatgpt_api_async_response = (function devneya$gpt$get_chatgpt_api_async_response(var_args){
var G__18934 = arguments.length;
switch (G__18934) {
case 6:
return devneya.gpt.get_chatgpt_api_async_response.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return devneya.gpt.get_chatgpt_api_async_response.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devneya.gpt.get_chatgpt_api_async_response.cljs$core$IFn$_invoke$arity$6 = (function (log_id,openai_key,text,role,context,output_channel){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"get-chatgpt-api-response function started");

return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"OPENAI-API-URL","OPENAI-API-URL",1412355410).cljs$core$IFn$_invoke$arity$1(devneya.utils.ai_config),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),devneya.gpt.build_headers(openai_key),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),devneya.gpt.build_body(role,text,context),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"channel","channel",734187692),output_channel], null)], 0));
}));

(devneya.gpt.get_chatgpt_api_async_response.cljs$core$IFn$_invoke$arity$5 = (function (log_id,openai_key,text,role,context){
return devneya.gpt.get_chatgpt_api_async_response.cljs$core$IFn$_invoke$arity$6(log_id,openai_key,text,role,context,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
}));

(devneya.gpt.get_chatgpt_api_async_response.cljs$lang$maxFixedArity = 6);

/**
 * testfunc
 */
devneya.gpt.test_post = (function devneya$gpt$test_post(openai_key,prompt){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"OPENAI-API-URL","OPENAI-API-URL",1412355410).cljs$core$IFn$_invoke$arity$1(devneya.utils.ai_config),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),devneya.gpt.build_headers(openai_key),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),devneya.gpt.build_body("user",prompt,new cljs.core.Keyword(null,"INITIAL-CONTEXT","INITIAL-CONTEXT",435427501).cljs$core$IFn$_invoke$arity$1(devneya.utils.ai_config)),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"channel","channel",734187692),out], null)], 0));

return devneya.utils.chan__GT_promise(out);
});
new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(devneya.gpt.test_post);

//# sourceMappingURL=devneya.gpt.js.map
