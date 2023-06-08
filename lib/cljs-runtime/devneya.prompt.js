import "./cljs_env.js";
goog.provide('devneya.prompt');
devneya.prompt.make_initial_prompt = (function devneya$prompt$make_initial_prompt(var_args){
var G__11899 = arguments.length;
switch (G__11899) {
case 3:
return devneya.prompt.make_initial_prompt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return devneya.prompt.make_initial_prompt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devneya.prompt.make_initial_prompt.cljs$core$IFn$_invoke$arity$3 = (function (log_id,openai_key,prompt){
devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,"Making initial prompt");

return devneya.codeGeneration.generate_code_async.cljs$core$IFn$_invoke$arity$3(log_id,openai_key,["Write only code. Do not use ```. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prompt)].join(''));
}));

(devneya.prompt.make_initial_prompt.cljs$core$IFn$_invoke$arity$2 = (function (openai_key,prompt){
return devneya.prompt.make_initial_prompt.cljs$core$IFn$_invoke$arity$3(devneya.utils.date_hms(),openai_key,prompt);
}));

(devneya.prompt.make_initial_prompt.cljs$lang$maxFixedArity = 3);

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
var G__11901 = arguments.length;
switch (G__11901) {
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
var c__7862__auto___11961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7863__auto__ = (function (){var switch__7803__auto__ = (function (state_11935){
var state_val_11936 = (state_11935[(1)]);
if((state_val_11936 === (7))){
var inst_11912 = ["Evaluation failed on attempt ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attempt),"! Retrying..."].join('');
var inst_11913 = devneya.utils.log_with_id.cljs$core$IFn$_invoke$arity$2(log_id,inst_11912);
var inst_11914 = (attempt < attempt_limit);
var state_11935__$1 = (function (){var statearr_11937 = state_11935;
(statearr_11937[(7)] = inst_11913);

return statearr_11937;
})();
if(cljs.core.truth_(inst_11914)){
var statearr_11938_11962 = state_11935__$1;
(statearr_11938_11962[(1)] = (11));

} else {
var statearr_11939_11963 = state_11935__$1;
(statearr_11939_11963[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11936 === (1))){
var state_11935__$1 = state_11935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11935__$1,(2),generated_code_channel);
} else {
if((state_val_11936 === (4))){
var inst_11903 = (state_11935[(8)]);
var state_11935__$1 = state_11935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11935__$1,(15),out_chan,inst_11903);
} else {
if((state_val_11936 === (15))){
var inst_11931 = (state_11935[(2)]);
var state_11935__$1 = state_11935;
var statearr_11940_11964 = state_11935__$1;
(statearr_11940_11964[(2)] = inst_11931);

(statearr_11940_11964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11936 === (13))){
var inst_11924 = (state_11935[(2)]);
var state_11935__$1 = state_11935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11935__$1,(10),out_chan,inst_11924);
} else {
if((state_val_11936 === (6))){
var inst_11903 = (state_11935[(8)]);
var state_11935__$1 = state_11935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11935__$1,(9),out_chan,inst_11903);
} else {
if((state_val_11936 === (3))){
var inst_11903 = (state_11935[(8)]);
var inst_11906 = (state_11935[(9)]);
var inst_11906__$1 = devneya.exec.exec_code(log_id,inst_11903);
var inst_11907 = failjure.core.ok_QMARK_(inst_11906__$1);
var state_11935__$1 = (function (){var statearr_11941 = state_11935;
(statearr_11941[(9)] = inst_11906__$1);

return statearr_11941;
})();
if(inst_11907){
var statearr_11942_11965 = state_11935__$1;
(statearr_11942_11965[(1)] = (6));

} else {
var statearr_11943_11966 = state_11935__$1;
(statearr_11943_11966[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11936 === (12))){
var inst_11922 = failjure.core.fail.cljs$core$IFn$_invoke$arity$1("Couldn't generate working code for the given request.\n");
var state_11935__$1 = state_11935;
var statearr_11944_11967 = state_11935__$1;
(statearr_11944_11967[(2)] = inst_11922);

(statearr_11944_11967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11936 === (2))){
var inst_11903 = (state_11935[(8)]);
var inst_11903__$1 = (state_11935[(2)]);
var inst_11904 = failjure.core.ok_QMARK_(inst_11903__$1);
var state_11935__$1 = (function (){var statearr_11945 = state_11935;
(statearr_11945[(8)] = inst_11903__$1);

return statearr_11945;
})();
if(inst_11904){
var statearr_11946_11968 = state_11935__$1;
(statearr_11946_11968[(1)] = (3));

} else {
var statearr_11947_11969 = state_11935__$1;
(statearr_11947_11969[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11936 === (11))){
var inst_11903 = (state_11935[(8)]);
var inst_11906 = (state_11935[(9)]);
var inst_11916 = devneya.prompt.make_fix_prompt(log_id,openai_key,inst_11903,inst_11906,attempt);
var inst_11917 = (attempt + (1));
var inst_11918 = devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$5(log_id,openai_key,attempt_limit,inst_11916,inst_11917);
var state_11935__$1 = state_11935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11935__$1,(14),inst_11918);
} else {
if((state_val_11936 === (9))){
var inst_11910 = (state_11935[(2)]);
var state_11935__$1 = state_11935;
var statearr_11948_11970 = state_11935__$1;
(statearr_11948_11970[(2)] = inst_11910);

(statearr_11948_11970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11936 === (5))){
var inst_11933 = (state_11935[(2)]);
var state_11935__$1 = state_11935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11935__$1,inst_11933);
} else {
if((state_val_11936 === (14))){
var inst_11920 = (state_11935[(2)]);
var state_11935__$1 = state_11935;
var statearr_11949_11971 = state_11935__$1;
(statearr_11949_11971[(2)] = inst_11920);

(statearr_11949_11971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11936 === (10))){
var inst_11926 = (state_11935[(2)]);
var state_11935__$1 = state_11935;
var statearr_11950_11972 = state_11935__$1;
(statearr_11950_11972[(2)] = inst_11926);

(statearr_11950_11972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11936 === (8))){
var inst_11928 = (state_11935[(2)]);
var state_11935__$1 = state_11935;
var statearr_11951_11973 = state_11935__$1;
(statearr_11951_11973[(2)] = inst_11928);

(statearr_11951_11973[(1)] = (5));


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
var devneya$prompt$state_machine__7804__auto__ = null;
var devneya$prompt$state_machine__7804__auto____0 = (function (){
var statearr_11952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11952[(0)] = devneya$prompt$state_machine__7804__auto__);

(statearr_11952[(1)] = (1));

return statearr_11952;
});
var devneya$prompt$state_machine__7804__auto____1 = (function (state_11935){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_11935);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e11953){var ex__7807__auto__ = e11953;
var statearr_11954_11974 = state_11935;
(statearr_11954_11974[(2)] = ex__7807__auto__);


if(cljs.core.seq((state_11935[(4)]))){
var statearr_11955_11975 = state_11935;
(statearr_11955_11975[(1)] = cljs.core.first((state_11935[(4)])));

} else {
throw ex__7807__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11976 = state_11935;
state_11935 = G__11976;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
devneya$prompt$state_machine__7804__auto__ = function(state_11935){
switch(arguments.length){
case 0:
return devneya$prompt$state_machine__7804__auto____0.call(this);
case 1:
return devneya$prompt$state_machine__7804__auto____1.call(this,state_11935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devneya$prompt$state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = devneya$prompt$state_machine__7804__auto____0;
devneya$prompt$state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = devneya$prompt$state_machine__7804__auto____1;
return devneya$prompt$state_machine__7804__auto__;
})()
})();
var state__7864__auto__ = (function (){var statearr_11956 = f__7863__auto__();
(statearr_11956[(6)] = c__7862__auto___11961);

return statearr_11956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7864__auto__);
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
return devneya.prompt.make_fix_prompt_chain.cljs$core$IFn$_invoke$arity$4(log_id,openai_key,attempt_limit,devneya.prompt.make_initial_prompt.cljs$core$IFn$_invoke$arity$3(log_id,openai_key,prompt));
});
devneya.prompt.make_prompt_promise = (function devneya$prompt$make_prompt_promise(var_args){
var G__11958 = arguments.length;
switch (G__11958) {
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

devneya.prompt.make_request = (function devneya$prompt$make_request(openai_key,prompt){
return devneya.utils.chan__GT_promise(devneya.prompt.make_initial_prompt.cljs$core$IFn$_invoke$arity$2(openai_key,prompt));
});
new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(devneya.prompt.make_prompt_promise);
new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(devneya.prompt.make_request);

//# sourceMappingURL=devneya.prompt.js.map
