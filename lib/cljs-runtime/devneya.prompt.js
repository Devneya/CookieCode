import "./cljs_env.js";
goog.provide('devneya.prompt');
devneya.prompt.make_initial_prompt = (function devneya$prompt$make_initial_prompt(log_id,openai_key,prompt){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"Making initial prompt");

return devneya.codeGeneration.generate_code_async.cljs$core$IFn$_invoke$arity$3(log_id,openai_key,["Write only code. Do not use ```. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prompt)].join(''));
});
/**
 * Get api key, generated code, its execution error and attempt number.
 * 
 * Make generate code request to fix.
 * 
 * Return async channel with fixed code or with fail.
 */
devneya.prompt.make_fix_prompt = (function devneya$prompt$make_fix_prompt(log_id,openai_key,generated_code,exec_error,attempt){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,["Making fix prompt number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attempt)].join(''));

return devneya.codeGeneration.generate_code_async.cljs$core$IFn$_invoke$arity$3(log_id,openai_key,["Here is a code:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(generated_code),"\nAn error occurred while executing this code:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exec_error),"\nRewrite code to fix it. Write only code. Do not use ```."].join(''));
});
/**
 * Get api key, request attempt limit, current code generation channel and attempt number.
 * 
 * Make fix prompt chain: try to execute current code and send fix prompt, if needed, *MAX_REPS* times.
 * 
 * Return async channel with fail if couldn't fix the code and if it occured on some generation request, or fixed code otherwise.
 */
devneya.prompt.make_fix_prompt_chain = (function devneya$prompt$make_fix_prompt_chain(var_args){
var G__18968 = arguments.length;
switch (G__18968) {
case 5:
return devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$5 = (function (log_id,openai_key,attempt_limit,generated_code_channel,attempt){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"Fix prompt chain started");

var out_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__13712__auto___19027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_19002){
var state_val_19003 = (state_19002[(1)]);
if((state_val_19003 === (7))){
var inst_18979 = ["Evaluation failed on attempt ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attempt),"! Retrying..."].join('');
var inst_18980 = devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,inst_18979);
var inst_18981 = (attempt < attempt_limit);
var state_19002__$1 = (function (){var statearr_19004 = state_19002;
(statearr_19004[(7)] = inst_18980);

return statearr_19004;
})();
if(cljs.core.truth_(inst_18981)){
var statearr_19005_19028 = state_19002__$1;
(statearr_19005_19028[(1)] = (11));

} else {
var statearr_19006_19029 = state_19002__$1;
(statearr_19006_19029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (1))){
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19002__$1,(2),generated_code_channel);
} else {
if((state_val_19003 === (4))){
var inst_18970 = (state_19002[(8)]);
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19002__$1,(15),out_chan,inst_18970);
} else {
if((state_val_19003 === (15))){
var inst_18998 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
var statearr_19007_19030 = state_19002__$1;
(statearr_19007_19030[(2)] = inst_18998);

(statearr_19007_19030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (13))){
var inst_18991 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19002__$1,(10),out_chan,inst_18991);
} else {
if((state_val_19003 === (6))){
var inst_18970 = (state_19002[(8)]);
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19002__$1,(9),out_chan,inst_18970);
} else {
if((state_val_19003 === (3))){
var inst_18970 = (state_19002[(8)]);
var inst_18973 = (state_19002[(9)]);
var inst_18973__$1 = devneya.exec.exec_code(log_id,inst_18970);
var inst_18974 = failjure.core.ok_QMARK_(inst_18973__$1);
var state_19002__$1 = (function (){var statearr_19008 = state_19002;
(statearr_19008[(9)] = inst_18973__$1);

return statearr_19008;
})();
if(inst_18974){
var statearr_19009_19031 = state_19002__$1;
(statearr_19009_19031[(1)] = (6));

} else {
var statearr_19010_19032 = state_19002__$1;
(statearr_19010_19032[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (12))){
var inst_18989 = failjure.core.fail.cljs$core$IFn$_invoke$arity$1("Couldn't generate working code for the given request.\n");
var state_19002__$1 = state_19002;
var statearr_19011_19033 = state_19002__$1;
(statearr_19011_19033[(2)] = inst_18989);

(statearr_19011_19033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (2))){
var inst_18970 = (state_19002[(8)]);
var inst_18970__$1 = (state_19002[(2)]);
var inst_18971 = failjure.core.ok_QMARK_(inst_18970__$1);
var state_19002__$1 = (function (){var statearr_19012 = state_19002;
(statearr_19012[(8)] = inst_18970__$1);

return statearr_19012;
})();
if(inst_18971){
var statearr_19013_19034 = state_19002__$1;
(statearr_19013_19034[(1)] = (3));

} else {
var statearr_19014_19035 = state_19002__$1;
(statearr_19014_19035[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (11))){
var inst_18970 = (state_19002[(8)]);
var inst_18973 = (state_19002[(9)]);
var inst_18983 = devneya.prompt.make_fix_prompt(log_id,openai_key,inst_18970,inst_18973,attempt);
var inst_18984 = (attempt + (1));
var inst_18985 = devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$5(log_id,openai_key,attempt_limit,inst_18983,inst_18984);
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19002__$1,(14),inst_18985);
} else {
if((state_val_19003 === (9))){
var inst_18977 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
var statearr_19015_19036 = state_19002__$1;
(statearr_19015_19036[(2)] = inst_18977);

(statearr_19015_19036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (5))){
var inst_19000 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19002__$1,inst_19000);
} else {
if((state_val_19003 === (14))){
var inst_18987 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
var statearr_19016_19037 = state_19002__$1;
(statearr_19016_19037[(2)] = inst_18987);

(statearr_19016_19037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (10))){
var inst_18993 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
var statearr_19017_19038 = state_19002__$1;
(statearr_19017_19038[(2)] = inst_18993);

(statearr_19017_19038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (8))){
var inst_18995 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
var statearr_19018_19039 = state_19002__$1;
(statearr_19018_19039[(2)] = inst_18995);

(statearr_19018_19039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var devneya$prompt$state_machine__10984__auto__ = null;
var devneya$prompt$state_machine__10984__auto____0 = (function (){
var statearr_19019 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19019[(0)] = devneya$prompt$state_machine__10984__auto__);

(statearr_19019[(1)] = (1));

return statearr_19019;
});
var devneya$prompt$state_machine__10984__auto____1 = (function (state_19002){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_19002);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e19020){var ex__10987__auto__ = e19020;
var statearr_19021_19040 = state_19002;
(statearr_19021_19040[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_19002[(4)]))){
var statearr_19022_19041 = state_19002;
(statearr_19022_19041[(1)] = cljs.core.first((state_19002[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19042 = state_19002;
state_19002 = G__19042;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
devneya$prompt$state_machine__10984__auto__ = function(state_19002){
switch(arguments.length){
case 0:
return devneya$prompt$state_machine__10984__auto____0.call(this);
case 1:
return devneya$prompt$state_machine__10984__auto____1.call(this,state_19002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devneya$prompt$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = devneya$prompt$state_machine__10984__auto____0;
devneya$prompt$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = devneya$prompt$state_machine__10984__auto____1;
return devneya$prompt$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_19023 = f__13713__auto__();
(statearr_19023[(6)] = c__13712__auto___19027);

return statearr_19023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return out_chan;
}));

(devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$4 = (function (log_id,openai_key,attempt_limit,generated_code_channel){
return devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$5(log_id,openai_key,attempt_limit,generated_code_channel,(1));
}));

(devneya.prompt.make_fix_prompt_chain.cljs$lang$maxFixedArity = 5);

/**
 * Get api key, request attempt limit and prompt.
 * 
 * Make prompt chain: one initial prompt, then start fix prompt chain.
 * 
 * Return async channel with fail, if couldn't generate working code and if it occured on some prompt or with working code.
 */
devneya.prompt.make_prompt_chain = (function devneya$prompt$make_prompt_chain(log_id,openai_key,attempt_limit,prompt){
return devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$4(log_id,openai_key,attempt_limit,devneya.prompt.make_initial_prompt(log_id,openai_key,prompt));
});
devneya.prompt.make_prompt_promise = (function devneya$prompt$make_prompt_promise(var_args){
var G__19025 = arguments.length;
switch (G__19025) {
case 4:
return devneya.prompt.make_prompt_promise.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return devneya.prompt.make_prompt_promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devneya.prompt.make_prompt_promise.cljs$core$IFn$_invoke$arity$4 = (function (log_id,openai_key,attempt_limit,prompt){
return devneya.utils.chan__GT_promise(devneya.prompt.make_prompt_chain(log_id,openai_key,attempt_limit,prompt));
}));

(devneya.prompt.make_prompt_promise.cljs$core$IFn$_invoke$arity$3 = (function (openai_key,attempt_limit,prompt){
return devneya.utils.chan__GT_promise(devneya.prompt.make_prompt_chain(devneya.utils.date_hms(),openai_key,attempt_limit,prompt));
}));

(devneya.prompt.make_prompt_promise.cljs$lang$maxFixedArity = 4);

new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(devneya.prompt.make_prompt_promise);

//# sourceMappingURL=devneya.prompt.js.map
