import "./cljs_env.js";
goog.provide('devneya.utils');
devneya.utils.ok_http_status = (200);
devneya.utils.ai_config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"OPENAI-API-URL","OPENAI-API-URL",1412355410),"https://api.openai.com/v1/chat/completions",new cljs.core.Keyword(null,"OPENAI-MODEL","OPENAI-MODEL",568559685),"gpt-3.5-turbo",new cljs.core.Keyword(null,"TEMPERATURE","TEMPERATURE",-2011178859),0.3,new cljs.core.Keyword(null,"INITIAL-CONTEXT","INITIAL-CONTEXT",435427501),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"system",new cljs.core.Keyword(null,"content","content",15833224),["You are a system that only generates code in JavaScript.\n","Do not describe or contextualize the code.\n","Do not apply any formatting or syntax highlighting.\n","Do not wrap the code in a code block."].join('')], null)], null)], null);
/**
 * Get current time and dater
 */
devneya.utils.date_hms = (function devneya$utils$date_hms(){
return (new Date()).toUTCString();
});
/**
 * Log data for specified log-id using logger function
 * 
 * log-level-flags:
 * 0 - error
 * 1 - info
 */
devneya.utils.log_with_id = (function devneya$utils$log_with_id(var_args){
var G__18909 = arguments.length;
switch (G__18909) {
case 3:
return devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$3 = (function (log_level_flag,log_id,log_string){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(log_level_flag,(0))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"devneya.utils",null,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(log_id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(log_string)].join('')], null);
}),null)),null,(1),null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"devneya.utils",null,29,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(log_id)," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(log_string)].join('')], null);
}),null)),null,(2),null);

}
}));

(devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2 = (function (log_id,log_string){
return devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$3((1),log_id,log_string);
}));

(devneya.utils.log_with_id.cljs$lang$maxFixedArity = 3);

/**
 * Get channel. 
 * 
 * Return js promise where data from channel is redirected.
 */
devneya.utils.chan__GT_promise = (function devneya$utils$chan__GT_promise(c){
return (new Promise((function (resolve,_){
var c__13712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_18920){
var state_val_18921 = (state_18920[(1)]);
if((state_val_18921 === (1))){
var state_18920__$1 = state_18920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18920__$1,(2),c);
} else {
if((state_val_18921 === (2))){
var inst_18917 = (state_18920[(2)]);
var inst_18918 = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(inst_18917) : resolve.call(null,inst_18917));
var state_18920__$1 = state_18920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18920__$1,inst_18918);
} else {
return null;
}
}
});
return (function() {
var devneya$utils$chan__GT_promise_$_state_machine__10984__auto__ = null;
var devneya$utils$chan__GT_promise_$_state_machine__10984__auto____0 = (function (){
var statearr_18922 = [null,null,null,null,null,null,null];
(statearr_18922[(0)] = devneya$utils$chan__GT_promise_$_state_machine__10984__auto__);

(statearr_18922[(1)] = (1));

return statearr_18922;
});
var devneya$utils$chan__GT_promise_$_state_machine__10984__auto____1 = (function (state_18920){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_18920);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e18923){var ex__10987__auto__ = e18923;
var statearr_18924_18930 = state_18920;
(statearr_18924_18930[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_18920[(4)]))){
var statearr_18925_18931 = state_18920;
(statearr_18925_18931[(1)] = cljs.core.first((state_18920[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18932 = state_18920;
state_18920 = G__18932;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
devneya$utils$chan__GT_promise_$_state_machine__10984__auto__ = function(state_18920){
switch(arguments.length){
case 0:
return devneya$utils$chan__GT_promise_$_state_machine__10984__auto____0.call(this);
case 1:
return devneya$utils$chan__GT_promise_$_state_machine__10984__auto____1.call(this,state_18920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devneya$utils$chan__GT_promise_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = devneya$utils$chan__GT_promise_$_state_machine__10984__auto____0;
devneya$utils$chan__GT_promise_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = devneya$utils$chan__GT_promise_$_state_machine__10984__auto____1;
return devneya$utils$chan__GT_promise_$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_18927 = f__13713__auto__();
(statearr_18927[(6)] = c__13712__auto__);

return statearr_18927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));

return c__13712__auto__;
})));
});

//# sourceMappingURL=devneya.utils.js.map
