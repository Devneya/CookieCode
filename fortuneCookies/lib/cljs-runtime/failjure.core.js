import "./cljs_env.js";
goog.provide('failjure.core');

/**
 * @interface
 */
failjure.core.HasFailed = function(){};

var failjure$core$HasFailed$failed_QMARK_$dyn_11217 = (function (self){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (failjure.core.failed_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5394__auto__.call(null,self));
} else {
var m__5392__auto__ = (failjure.core.failed_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5392__auto__.call(null,self));
} else {
throw cljs.core.missing_protocol("HasFailed.failed?",self);
}
}
});
failjure.core.failed_QMARK_ = (function failjure$core$failed_QMARK_(self){
if((((!((self == null)))) && ((!((self.failjure$core$HasFailed$failed_QMARK_$arity$1 == null)))))){
return self.failjure$core$HasFailed$failed_QMARK_$arity$1(self);
} else {
return failjure$core$HasFailed$failed_QMARK_$dyn_11217(self);
}
});

var failjure$core$HasFailed$message$dyn_11218 = (function (self){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (failjure.core.message[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5394__auto__.call(null,self));
} else {
var m__5392__auto__ = (failjure.core.message["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5392__auto__.call(null,self));
} else {
throw cljs.core.missing_protocol("HasFailed.message",self);
}
}
});
failjure.core.message = (function failjure$core$message(self){
if((((!((self == null)))) && ((!((self.failjure$core$HasFailed$message$arity$1 == null)))))){
return self.failjure$core$HasFailed$message$arity$1(self);
} else {
return failjure$core$HasFailed$message$dyn_11218(self);
}
});

(failjure.core.HasFailed["null"] = true);

(failjure.core.failed_QMARK_["null"] = (function (self){
return false;
}));

(failjure.core.message["null"] = (function (self){
return "nil";
}));

(failjure.core.HasFailed["_"] = true);

(failjure.core.failed_QMARK_["_"] = (function (self){
return false;
}));

(failjure.core.message["_"] = (function (self){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self);
}));

(Error.prototype.failjure$core$HasFailed$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.failjure$core$HasFailed$failed_QMARK_$arity$1 = (function (self){
var self__$1 = this;
return true;
}));

(Error.prototype.failjure$core$HasFailed$message$arity$1 = (function (self){
var self__$1 = this;
return self__$1.message;
}));
failjure.core.ok_QMARK_ = (function failjure$core$ok_QMARK_(v){
return cljs.core.not(failjure.core.failed_QMARK_(v));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {failjure.core.HasFailed}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
failjure.core.Failure = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(failjure.core.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(failjure.core.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k11045,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__11055 = k11045;
var G__11055__$1 = (((G__11055 instanceof cljs.core.Keyword))?G__11055.fqn:null);
switch (G__11055__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11045,else__5346__auto__);

}
}));

(failjure.core.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__11063){
var vec__11064 = p__11063;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11064,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11064,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(failjure.core.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#failjure.core.Failure{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(failjure.core.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11044){
var self__ = this;
var G__11044__$1 = this;
return (new cljs.core.RecordIter((0),G__11044__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(failjure.core.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(failjure.core.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new failjure.core.Failure(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(failjure.core.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(failjure.core.Failure.prototype.failjure$core$HasFailed$ = cljs.core.PROTOCOL_SENTINEL);

(failjure.core.Failure.prototype.failjure$core$HasFailed$failed_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
}));

(failjure.core.Failure.prototype.failjure$core$HasFailed$message$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(self__$1);
}));

(failjure.core.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1535844811 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(failjure.core.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11046,other11047){
var self__ = this;
var this11046__$1 = this;
return (((!((other11047 == null)))) && ((((this11046__$1.constructor === other11047.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11046__$1.message,other11047.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11046__$1.__extmap,other11047.__extmap)))))));
}));

(failjure.core.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new failjure.core.Failure(self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(failjure.core.Failure.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k11045){
var self__ = this;
var this__5350__auto____$1 = this;
var G__11111 = k11045;
var G__11111__$1 = (((G__11111 instanceof cljs.core.Keyword))?G__11111.fqn:null);
switch (G__11111__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11045);

}
}));

(failjure.core.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__11044){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__11114 = cljs.core.keyword_identical_QMARK_;
var expr__11115 = k__5352__auto__;
if(cljs.core.truth_((pred__11114.cljs$core$IFn$_invoke$arity$2 ? pred__11114.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__11115) : pred__11114.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__11115)))){
return (new failjure.core.Failure(G__11044,self__.__meta,self__.__extmap,null));
} else {
return (new failjure.core.Failure(self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__11044),null));
}
}));

(failjure.core.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(failjure.core.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__11044){
var self__ = this;
var this__5342__auto____$1 = this;
return (new failjure.core.Failure(self__.message,G__11044,self__.__extmap,self__.__hash));
}));

(failjure.core.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(failjure.core.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(failjure.core.Failure.cljs$lang$type = true);

(failjure.core.Failure.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"failjure.core/Failure",null,(1),null));
}));

(failjure.core.Failure.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"failjure.core/Failure");
}));

/**
 * Positional factory function for failjure.core/Failure.
 */
failjure.core.__GT_Failure = (function failjure$core$__GT_Failure(message){
return (new failjure.core.Failure(message,null,null,null));
});

/**
 * Factory function for failjure.core/Failure, taking a map of keywords to field values.
 */
failjure.core.map__GT_Failure = (function failjure$core$map__GT_Failure(G__11049){
var extmap__5385__auto__ = (function (){var G__11131 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__11049,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_(G__11049)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11131);
} else {
return G__11131;
}
})();
return (new failjure.core.Failure(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__11049),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

failjure.core.fail = (function failjure$core$fail(var_args){
var G__11144 = arguments.length;
switch (G__11144) {
case 1:
return failjure.core.fail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___11241 = arguments.length;
var i__5770__auto___11242 = (0);
while(true){
if((i__5770__auto___11242 < len__5769__auto___11241)){
args_arr__5794__auto__.push((arguments[i__5770__auto___11242]));

var G__11243 = (i__5770__auto___11242 + (1));
i__5770__auto___11242 = G__11243;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return failjure.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(failjure.core.fail.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return failjure.core.__GT_Failure(msg);
}));

(failjure.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (msg,fmt_parts){
return failjure.core.__GT_Failure(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,msg,fmt_parts));
}));

/** @this {Function} */
(failjure.core.fail.cljs$lang$applyTo = (function (seq11137){
var G__11138 = cljs.core.first(seq11137);
var seq11137__$1 = cljs.core.next(seq11137);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11138,seq11137__$1);
}));

(failjure.core.fail.cljs$lang$maxFixedArity = (1));

/**
 * Accepts an error-handling function and a (possibly failed) value
 */
failjure.core.attempt = (function failjure$core$attempt(handle_fn,val_or_failed){
if(cljs.core.truth_(failjure.core.failed_QMARK_(val_or_failed))){
return (handle_fn.cljs$core$IFn$_invoke$arity$1 ? handle_fn.cljs$core$IFn$_invoke$arity$1(val_or_failed) : handle_fn.call(null,val_or_failed));
} else {
return val_or_failed;
}
});
failjure.core.try_fn = (function failjure$core$try_fn(body_fn){
try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e11152){var e_SHARP_ = e11152;
return e_SHARP_;
}});
failjure.core.else_STAR_ = (function failjure$core$else_STAR_(else_part,result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else-fn?","else-fn?",1034079944).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(else_part)))){
return (else_part.cljs$core$IFn$_invoke$arity$1 ? else_part.cljs$core$IFn$_invoke$arity$1(result) : else_part.call(null,result));
} else {
return else_part;
}
});
/**
 * Rearrange the bindings into a pyramid of `if-let-failed?` calls
 */
failjure.core.attempt_all_STAR_ = (function failjure$core$attempt_all_STAR_(bindings,body){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (inner,p__11175){
var vec__11176 = p__11175;
var bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11176,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11176,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"result__11170__auto__","result__11170__auto__",-1638998708,null),null,(1),null)),(new cljs.core.List(null,body__$1,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("failjure.core","if-let-failed?","failjure.core/if-let-failed?",1621567250,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__11170__auto__","result__11170__auto__",-1638998708,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result__11170__auto__","result__11170__auto__",-1638998708,null),null,(1),null)),(new cljs.core.List(null,inner,null,(1),null))], 0)))),null,(1),null))], 0))));
}),body,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
});
failjure.core.try_wrap = (function failjure$core$try_wrap(bindings){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__11186_SHARP_,p2__11187_SHARP_){
if(cljs.core.odd_QMARK_(p1__11186_SHARP_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("failjure.core","try-fn","failjure.core/try-fn",1232281049,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,p2__11187_SHARP_,null,(1),null))], 0)))),null,(1),null)))));
} else {
return p2__11187_SHARP_;
}
}),bindings);
});
/**
 * If (pred v) is true, return v
 * otherwise, return (f/fail msg)
 */
failjure.core.assert_with = (function failjure$core$assert_with(pred,v,msg){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return v;
} else {
return failjure.core.fail.cljs$core$IFn$_invoke$arity$1(msg);
}
});
failjure.core.assert_some_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(failjure.core.assert_with,cljs.core.some_QMARK_);
failjure.core.assert_nil_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(failjure.core.assert_with,cljs.core.nil_QMARK_);
failjure.core.assert_not_nil_QMARK_ = failjure.core.assert_some_QMARK_;
failjure.core.assert_not_empty_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(failjure.core.assert_with,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.empty_QMARK_));
failjure.core.assert_number_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(failjure.core.assert_with,cljs.core.number_QMARK_);

//# sourceMappingURL=failjure.core.js.map
