import "./cljs_env.js";
goog.provide('devneya.codeGeneration');
/**
 * Get body of request to ChatGPT, received response and logging directory path.
 * 
 * Build logging string.
 */
devneya.codeGeneration.build_request_info = (function devneya$codeGeneration$build_request_info(text,role,context,parsed_response){
if(cljs.core.truth_(failjure.core.failed_QMARK_(parsed_response))){
return parsed_response;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (log,message){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(log),"---------------------\n","role: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(message)),"\n","content:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(message)),"\n"].join('');
}),["Model: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"OPENAI-MODEL","OPENAI-MODEL",568559685).cljs$core$IFn$_invoke$arity$1(devneya.utils.ai_config)),"\n","Temperature: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"TEMPERATURE","TEMPERATURE",-2011178859).cljs$core$IFn$_invoke$arity$1(devneya.utils.ai_config)),"\n"].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"content","content",15833224),text], null)))),["Response:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parsed_response),"\n"].join('')].join('');
}
});
/**
 * Get previous role and text of new request and previous context.
 * 
 * Build logging function, which later can be used as transducer.
 */
devneya.codeGeneration.log_request = (function devneya$codeGeneration$log_request(log_id,text,role,context){
return (function (parsed_response){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"Logging chat GPT request:");

devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,devneya.codeGeneration.build_request_info(text,role,context,parsed_response));

return parsed_response;
});
});
/**
 * Get ChatGPT response and parse it. Can be used as transducer.
 */
devneya.codeGeneration.parse_response = (function devneya$codeGeneration$parse_response(log_id,response){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"Parsing chat GPT response and handling status started");

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),devneya.utils.ok_http_status)){
return failjure.core.fail.cljs$core$IFn$_invoke$arity$1(["Request failed with status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))," and body: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))].join(''));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"choices","choices",1385611597),(0),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"content","content",15833224)], null));
}
});
/**
 * Get api key, text of the code request, data for logging and the previous context.
 * 
 * Make request to ChatGPT with output to channel with builded transducer for parsing result. 
 * 
 * Return async channel with text of ChatGPT API response or fail, if occurs.
 */
devneya.codeGeneration.generate_code_async = (function devneya$codeGeneration$generate_code_async(var_args){
var G__18965 = arguments.length;
switch (G__18965) {
case 4:
return devneya.codeGeneration.generate_code_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return devneya.codeGeneration.generate_code_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devneya.codeGeneration.generate_code_async.cljs$core$IFn$_invoke$arity$4 = (function (log_id,openai_key,code_request,context){
return devneya.gpt.get_chatgpt_api_async_response.cljs$core$IFn$_invoke$arity$6(log_id,openai_key,code_request,"user",context,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devneya.err.map_not_fail,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(devneya.formatters.remove_triple_back_quote,log_id,(0))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devneya.err.map_not_fail,devneya.codeGeneration.log_request(log_id,code_request,"user",context)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devneya.codeGeneration.parse_response,log_id)))));
}));

(devneya.codeGeneration.generate_code_async.cljs$core$IFn$_invoke$arity$3 = (function (log_id,openai_key,code_request){
return devneya.codeGeneration.generate_code_async.cljs$core$IFn$_invoke$arity$4(log_id,openai_key,code_request,new cljs.core.Keyword(null,"INITIAL-CONTEXT","INITIAL-CONTEXT",435427501).cljs$core$IFn$_invoke$arity$1(devneya.utils.ai_config));
}));

(devneya.codeGeneration.generate_code_async.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=devneya.codeGeneration.js.map
