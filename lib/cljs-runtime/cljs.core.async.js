import "./cljs_env.js";
goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13799 = (function (f,blockable,meta13800){
this.f = f;
this.blockable = blockable;
this.meta13800 = meta13800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13801,meta13800__$1){
var self__ = this;
var _13801__$1 = this;
return (new cljs.core.async.t_cljs$core$async13799(self__.f,self__.blockable,meta13800__$1));
}));

(cljs.core.async.t_cljs$core$async13799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13801){
var self__ = this;
var _13801__$1 = this;
return self__.meta13800;
}));

(cljs.core.async.t_cljs$core$async13799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13800","meta13800",1864343540,null)], null);
}));

(cljs.core.async.t_cljs$core$async13799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13799");

(cljs.core.async.t_cljs$core$async13799.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13799.
 */
cljs.core.async.__GT_t_cljs$core$async13799 = (function cljs$core$async$__GT_t_cljs$core$async13799(f,blockable,meta13800){
return (new cljs.core.async.t_cljs$core$async13799(f,blockable,meta13800));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13796 = arguments.length;
switch (G__13796) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13799(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13816 = arguments.length;
switch (G__13816) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13821 = arguments.length;
switch (G__13821) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13830 = arguments.length;
switch (G__13830) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15803 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15803) : fn1.call(null,val_15803));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15803) : fn1.call(null,val_15803));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13834 = arguments.length;
switch (G__13834) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___15806 = n;
var x_15807 = (0);
while(true){
if((x_15807 < n__5636__auto___15806)){
(a[x_15807] = x_15807);

var G__15808 = (x_15807 + (1));
x_15807 = G__15808;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13853 = (function (flag,meta13854){
this.flag = flag;
this.meta13854 = meta13854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13855,meta13854__$1){
var self__ = this;
var _13855__$1 = this;
return (new cljs.core.async.t_cljs$core$async13853(self__.flag,meta13854__$1));
}));

(cljs.core.async.t_cljs$core$async13853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13855){
var self__ = this;
var _13855__$1 = this;
return self__.meta13854;
}));

(cljs.core.async.t_cljs$core$async13853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13854","meta13854",-1976456723,null)], null);
}));

(cljs.core.async.t_cljs$core$async13853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13853");

(cljs.core.async.t_cljs$core$async13853.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13853.
 */
cljs.core.async.__GT_t_cljs$core$async13853 = (function cljs$core$async$__GT_t_cljs$core$async13853(flag,meta13854){
return (new cljs.core.async.t_cljs$core$async13853(flag,meta13854));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13853(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13861 = (function (flag,cb,meta13862){
this.flag = flag;
this.cb = cb;
this.meta13862 = meta13862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13863,meta13862__$1){
var self__ = this;
var _13863__$1 = this;
return (new cljs.core.async.t_cljs$core$async13861(self__.flag,self__.cb,meta13862__$1));
}));

(cljs.core.async.t_cljs$core$async13861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13863){
var self__ = this;
var _13863__$1 = this;
return self__.meta13862;
}));

(cljs.core.async.t_cljs$core$async13861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13862","meta13862",-596318302,null)], null);
}));

(cljs.core.async.t_cljs$core$async13861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13861");

(cljs.core.async.t_cljs$core$async13861.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13861.
 */
cljs.core.async.__GT_t_cljs$core$async13861 = (function cljs$core$async$__GT_t_cljs$core$async13861(flag,cb,meta13862){
return (new cljs.core.async.t_cljs$core$async13861(flag,cb,meta13862));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13861(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13868_SHARP_){
var G__13873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13868_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13873) : fret.call(null,G__13873));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13869_SHARP_){
var G__13874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13869_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13874) : fret.call(null,G__13874));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15817 = (i + (1));
i = G__15817;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15818 = arguments.length;
var i__5770__auto___15819 = (0);
while(true){
if((i__5770__auto___15819 < len__5769__auto___15818)){
args__5775__auto__.push((arguments[i__5770__auto___15819]));

var G__15821 = (i__5770__auto___15819 + (1));
i__5770__auto___15819 = G__15821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13884){
var map__13885 = p__13884;
var map__13885__$1 = cljs.core.__destructure_map(map__13885);
var opts = map__13885__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13881){
var G__13882 = cljs.core.first(seq13881);
var seq13881__$1 = cljs.core.next(seq13881);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13882,seq13881__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13900 = arguments.length;
switch (G__13900) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13712__auto___15823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_13926){
var state_val_13927 = (state_13926[(1)]);
if((state_val_13927 === (7))){
var inst_13922 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
var statearr_13928_15826 = state_13926__$1;
(statearr_13928_15826[(2)] = inst_13922);

(statearr_13928_15826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (1))){
var state_13926__$1 = state_13926;
var statearr_13929_15827 = state_13926__$1;
(statearr_13929_15827[(2)] = null);

(statearr_13929_15827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (4))){
var inst_13905 = (state_13926[(7)]);
var inst_13905__$1 = (state_13926[(2)]);
var inst_13906 = (inst_13905__$1 == null);
var state_13926__$1 = (function (){var statearr_13930 = state_13926;
(statearr_13930[(7)] = inst_13905__$1);

return statearr_13930;
})();
if(cljs.core.truth_(inst_13906)){
var statearr_13931_15828 = state_13926__$1;
(statearr_13931_15828[(1)] = (5));

} else {
var statearr_13932_15829 = state_13926__$1;
(statearr_13932_15829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (13))){
var state_13926__$1 = state_13926;
var statearr_13933_15830 = state_13926__$1;
(statearr_13933_15830[(2)] = null);

(statearr_13933_15830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (6))){
var inst_13905 = (state_13926[(7)]);
var state_13926__$1 = state_13926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13926__$1,(11),to,inst_13905);
} else {
if((state_val_13927 === (3))){
var inst_13924 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13926__$1,inst_13924);
} else {
if((state_val_13927 === (12))){
var state_13926__$1 = state_13926;
var statearr_13934_15831 = state_13926__$1;
(statearr_13934_15831[(2)] = null);

(statearr_13934_15831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (2))){
var state_13926__$1 = state_13926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13926__$1,(4),from);
} else {
if((state_val_13927 === (11))){
var inst_13915 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
if(cljs.core.truth_(inst_13915)){
var statearr_13937_15832 = state_13926__$1;
(statearr_13937_15832[(1)] = (12));

} else {
var statearr_13938_15833 = state_13926__$1;
(statearr_13938_15833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (9))){
var state_13926__$1 = state_13926;
var statearr_13939_15834 = state_13926__$1;
(statearr_13939_15834[(2)] = null);

(statearr_13939_15834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (5))){
var state_13926__$1 = state_13926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13940_15836 = state_13926__$1;
(statearr_13940_15836[(1)] = (8));

} else {
var statearr_13941_15837 = state_13926__$1;
(statearr_13941_15837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (14))){
var inst_13920 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
var statearr_13942_15838 = state_13926__$1;
(statearr_13942_15838[(2)] = inst_13920);

(statearr_13942_15838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (10))){
var inst_13912 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
var statearr_13943_15839 = state_13926__$1;
(statearr_13943_15839[(2)] = inst_13912);

(statearr_13943_15839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (8))){
var inst_13909 = cljs.core.async.close_BANG_(to);
var state_13926__$1 = state_13926;
var statearr_13944_15840 = state_13926__$1;
(statearr_13944_15840[(2)] = inst_13909);

(statearr_13944_15840[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_13945 = [null,null,null,null,null,null,null,null];
(statearr_13945[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_13945[(1)] = (1));

return statearr_13945;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_13926){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_13926);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e13946){var ex__10987__auto__ = e13946;
var statearr_13947_15841 = state_13926;
(statearr_13947_15841[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_13926[(4)]))){
var statearr_13948_15845 = state_13926;
(statearr_13948_15845[(1)] = cljs.core.first((state_13926[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15847 = state_13926;
state_13926 = G__15847;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_13926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_13926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_13951 = f__13713__auto__();
(statearr_13951[(6)] = c__13712__auto___15823);

return statearr_13951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13968){
var vec__13971 = p__13968;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(1),null);
var job = vec__13971;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13712__auto___15862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_13981){
var state_val_13982 = (state_13981[(1)]);
if((state_val_13982 === (1))){
var state_13981__$1 = state_13981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13981__$1,(2),res,v);
} else {
if((state_val_13982 === (2))){
var inst_13978 = (state_13981[(2)]);
var inst_13979 = cljs.core.async.close_BANG_(res);
var state_13981__$1 = (function (){var statearr_13986 = state_13981;
(statearr_13986[(7)] = inst_13978);

return statearr_13986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13981__$1,inst_13979);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0 = (function (){
var statearr_13987 = [null,null,null,null,null,null,null,null];
(statearr_13987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__);

(statearr_13987[(1)] = (1));

return statearr_13987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1 = (function (state_13981){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_13981);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e13988){var ex__10987__auto__ = e13988;
var statearr_13989_15867 = state_13981;
(statearr_13989_15867[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_13981[(4)]))){
var statearr_13990_15868 = state_13981;
(statearr_13990_15868[(1)] = cljs.core.first((state_13981[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15870 = state_13981;
state_13981 = G__15870;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = function(state_13981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1.call(this,state_13981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_13991 = f__13713__auto__();
(statearr_13991[(6)] = c__13712__auto___15862);

return statearr_13991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13992){
var vec__13993 = p__13992;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13993,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13993,(1),null);
var job = vec__13993;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___15873 = n;
var __15874 = (0);
while(true){
if((__15874 < n__5636__auto___15873)){
var G__14005_15875 = type;
var G__14005_15876__$1 = (((G__14005_15875 instanceof cljs.core.Keyword))?G__14005_15875.fqn:null);
switch (G__14005_15876__$1) {
case "compute":
var c__13712__auto___15879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15874,c__13712__auto___15879,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async){
return (function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = ((function (__15874,c__13712__auto___15879,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async){
return (function (state_14023){
var state_val_14024 = (state_14023[(1)]);
if((state_val_14024 === (1))){
var state_14023__$1 = state_14023;
var statearr_14025_15889 = state_14023__$1;
(statearr_14025_15889[(2)] = null);

(statearr_14025_15889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14024 === (2))){
var state_14023__$1 = state_14023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14023__$1,(4),jobs);
} else {
if((state_val_14024 === (3))){
var inst_14021 = (state_14023[(2)]);
var state_14023__$1 = state_14023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14023__$1,inst_14021);
} else {
if((state_val_14024 === (4))){
var inst_14011 = (state_14023[(2)]);
var inst_14013 = process__$1(inst_14011);
var state_14023__$1 = state_14023;
if(cljs.core.truth_(inst_14013)){
var statearr_14026_15892 = state_14023__$1;
(statearr_14026_15892[(1)] = (5));

} else {
var statearr_14027_15893 = state_14023__$1;
(statearr_14027_15893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14024 === (5))){
var state_14023__$1 = state_14023;
var statearr_14028_15894 = state_14023__$1;
(statearr_14028_15894[(2)] = null);

(statearr_14028_15894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14024 === (6))){
var state_14023__$1 = state_14023;
var statearr_14029_15896 = state_14023__$1;
(statearr_14029_15896[(2)] = null);

(statearr_14029_15896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14024 === (7))){
var inst_14019 = (state_14023[(2)]);
var state_14023__$1 = state_14023;
var statearr_14030_15899 = state_14023__$1;
(statearr_14030_15899[(2)] = inst_14019);

(statearr_14030_15899[(1)] = (3));


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
});})(__15874,c__13712__auto___15879,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async))
;
return ((function (__15874,switch__10983__auto__,c__13712__auto___15879,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0 = (function (){
var statearr_14031 = [null,null,null,null,null,null,null];
(statearr_14031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__);

(statearr_14031[(1)] = (1));

return statearr_14031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1 = (function (state_14023){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14023);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14032){var ex__10987__auto__ = e14032;
var statearr_14033_15900 = state_14023;
(statearr_14033_15900[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14023[(4)]))){
var statearr_14034_15902 = state_14023;
(statearr_14034_15902[(1)] = cljs.core.first((state_14023[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15903 = state_14023;
state_14023 = G__15903;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = function(state_14023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1.call(this,state_14023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__;
})()
;})(__15874,switch__10983__auto__,c__13712__auto___15879,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async))
})();
var state__13714__auto__ = (function (){var statearr_14035 = f__13713__auto__();
(statearr_14035[(6)] = c__13712__auto___15879);

return statearr_14035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
});})(__15874,c__13712__auto___15879,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async))
);


break;
case "async":
var c__13712__auto___15905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15874,c__13712__auto___15905,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async){
return (function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = ((function (__15874,c__13712__auto___15905,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async){
return (function (state_14048){
var state_val_14049 = (state_14048[(1)]);
if((state_val_14049 === (1))){
var state_14048__$1 = state_14048;
var statearr_14050_15910 = state_14048__$1;
(statearr_14050_15910[(2)] = null);

(statearr_14050_15910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (2))){
var state_14048__$1 = state_14048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14048__$1,(4),jobs);
} else {
if((state_val_14049 === (3))){
var inst_14046 = (state_14048[(2)]);
var state_14048__$1 = state_14048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14048__$1,inst_14046);
} else {
if((state_val_14049 === (4))){
var inst_14038 = (state_14048[(2)]);
var inst_14039 = async(inst_14038);
var state_14048__$1 = state_14048;
if(cljs.core.truth_(inst_14039)){
var statearr_14051_15913 = state_14048__$1;
(statearr_14051_15913[(1)] = (5));

} else {
var statearr_14052_15914 = state_14048__$1;
(statearr_14052_15914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (5))){
var state_14048__$1 = state_14048;
var statearr_14053_15925 = state_14048__$1;
(statearr_14053_15925[(2)] = null);

(statearr_14053_15925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (6))){
var state_14048__$1 = state_14048;
var statearr_14054_15926 = state_14048__$1;
(statearr_14054_15926[(2)] = null);

(statearr_14054_15926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14049 === (7))){
var inst_14044 = (state_14048[(2)]);
var state_14048__$1 = state_14048;
var statearr_14055_15927 = state_14048__$1;
(statearr_14055_15927[(2)] = inst_14044);

(statearr_14055_15927[(1)] = (3));


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
});})(__15874,c__13712__auto___15905,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async))
;
return ((function (__15874,switch__10983__auto__,c__13712__auto___15905,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0 = (function (){
var statearr_14056 = [null,null,null,null,null,null,null];
(statearr_14056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__);

(statearr_14056[(1)] = (1));

return statearr_14056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1 = (function (state_14048){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14048);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14057){var ex__10987__auto__ = e14057;
var statearr_14058_15928 = state_14048;
(statearr_14058_15928[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14048[(4)]))){
var statearr_14059_15929 = state_14048;
(statearr_14059_15929[(1)] = cljs.core.first((state_14048[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15931 = state_14048;
state_14048 = G__15931;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = function(state_14048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1.call(this,state_14048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__;
})()
;})(__15874,switch__10983__auto__,c__13712__auto___15905,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async))
})();
var state__13714__auto__ = (function (){var statearr_14060 = f__13713__auto__();
(statearr_14060[(6)] = c__13712__auto___15905);

return statearr_14060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
});})(__15874,c__13712__auto___15905,G__14005_15875,G__14005_15876__$1,n__5636__auto___15873,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14005_15876__$1)].join('')));

}

var G__15933 = (__15874 + (1));
__15874 = G__15933;
continue;
} else {
}
break;
}

var c__13712__auto___15934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_14084){
var state_val_14085 = (state_14084[(1)]);
if((state_val_14085 === (7))){
var inst_14080 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
var statearr_14089_15935 = state_14084__$1;
(statearr_14089_15935[(2)] = inst_14080);

(statearr_14089_15935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (1))){
var state_14084__$1 = state_14084;
var statearr_14090_15936 = state_14084__$1;
(statearr_14090_15936[(2)] = null);

(statearr_14090_15936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (4))){
var inst_14065 = (state_14084[(7)]);
var inst_14065__$1 = (state_14084[(2)]);
var inst_14066 = (inst_14065__$1 == null);
var state_14084__$1 = (function (){var statearr_14091 = state_14084;
(statearr_14091[(7)] = inst_14065__$1);

return statearr_14091;
})();
if(cljs.core.truth_(inst_14066)){
var statearr_14092_15937 = state_14084__$1;
(statearr_14092_15937[(1)] = (5));

} else {
var statearr_14093_15938 = state_14084__$1;
(statearr_14093_15938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (6))){
var inst_14065 = (state_14084[(7)]);
var inst_14070 = (state_14084[(8)]);
var inst_14070__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14072 = [inst_14065,inst_14070__$1];
var inst_14073 = (new cljs.core.PersistentVector(null,2,(5),inst_14071,inst_14072,null));
var state_14084__$1 = (function (){var statearr_14095 = state_14084;
(statearr_14095[(8)] = inst_14070__$1);

return statearr_14095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14084__$1,(8),jobs,inst_14073);
} else {
if((state_val_14085 === (3))){
var inst_14082 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14084__$1,inst_14082);
} else {
if((state_val_14085 === (2))){
var state_14084__$1 = state_14084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14084__$1,(4),from);
} else {
if((state_val_14085 === (9))){
var inst_14077 = (state_14084[(2)]);
var state_14084__$1 = (function (){var statearr_14099 = state_14084;
(statearr_14099[(9)] = inst_14077);

return statearr_14099;
})();
var statearr_14100_15939 = state_14084__$1;
(statearr_14100_15939[(2)] = null);

(statearr_14100_15939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (5))){
var inst_14068 = cljs.core.async.close_BANG_(jobs);
var state_14084__$1 = state_14084;
var statearr_14103_15940 = state_14084__$1;
(statearr_14103_15940[(2)] = inst_14068);

(statearr_14103_15940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14085 === (8))){
var inst_14070 = (state_14084[(8)]);
var inst_14075 = (state_14084[(2)]);
var state_14084__$1 = (function (){var statearr_14106 = state_14084;
(statearr_14106[(10)] = inst_14075);

return statearr_14106;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14084__$1,(9),results,inst_14070);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0 = (function (){
var statearr_14108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__);

(statearr_14108[(1)] = (1));

return statearr_14108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1 = (function (state_14084){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14084);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14109){var ex__10987__auto__ = e14109;
var statearr_14110_15942 = state_14084;
(statearr_14110_15942[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14084[(4)]))){
var statearr_14112_15944 = state_14084;
(statearr_14112_15944[(1)] = cljs.core.first((state_14084[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15946 = state_14084;
state_14084 = G__15946;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = function(state_14084){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1.call(this,state_14084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_14116 = f__13713__auto__();
(statearr_14116[(6)] = c__13712__auto___15934);

return statearr_14116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


var c__13712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_14154){
var state_val_14155 = (state_14154[(1)]);
if((state_val_14155 === (7))){
var inst_14150 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
var statearr_14156_15951 = state_14154__$1;
(statearr_14156_15951[(2)] = inst_14150);

(statearr_14156_15951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (20))){
var state_14154__$1 = state_14154;
var statearr_14157_15953 = state_14154__$1;
(statearr_14157_15953[(2)] = null);

(statearr_14157_15953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (1))){
var state_14154__$1 = state_14154;
var statearr_14158_15965 = state_14154__$1;
(statearr_14158_15965[(2)] = null);

(statearr_14158_15965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (4))){
var inst_14119 = (state_14154[(7)]);
var inst_14119__$1 = (state_14154[(2)]);
var inst_14120 = (inst_14119__$1 == null);
var state_14154__$1 = (function (){var statearr_14159 = state_14154;
(statearr_14159[(7)] = inst_14119__$1);

return statearr_14159;
})();
if(cljs.core.truth_(inst_14120)){
var statearr_14160_15983 = state_14154__$1;
(statearr_14160_15983[(1)] = (5));

} else {
var statearr_14165_15984 = state_14154__$1;
(statearr_14165_15984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (15))){
var inst_14132 = (state_14154[(8)]);
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14154__$1,(18),to,inst_14132);
} else {
if((state_val_14155 === (21))){
var inst_14145 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
var statearr_14175_15986 = state_14154__$1;
(statearr_14175_15986[(2)] = inst_14145);

(statearr_14175_15986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (13))){
var inst_14147 = (state_14154[(2)]);
var state_14154__$1 = (function (){var statearr_14176 = state_14154;
(statearr_14176[(9)] = inst_14147);

return statearr_14176;
})();
var statearr_14177_15991 = state_14154__$1;
(statearr_14177_15991[(2)] = null);

(statearr_14177_15991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (6))){
var inst_14119 = (state_14154[(7)]);
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14154__$1,(11),inst_14119);
} else {
if((state_val_14155 === (17))){
var inst_14140 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
if(cljs.core.truth_(inst_14140)){
var statearr_14178_15992 = state_14154__$1;
(statearr_14178_15992[(1)] = (19));

} else {
var statearr_14179_15993 = state_14154__$1;
(statearr_14179_15993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (3))){
var inst_14152 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14154__$1,inst_14152);
} else {
if((state_val_14155 === (12))){
var inst_14129 = (state_14154[(10)]);
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14154__$1,(14),inst_14129);
} else {
if((state_val_14155 === (2))){
var state_14154__$1 = state_14154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14154__$1,(4),results);
} else {
if((state_val_14155 === (19))){
var state_14154__$1 = state_14154;
var statearr_14190_15995 = state_14154__$1;
(statearr_14190_15995[(2)] = null);

(statearr_14190_15995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (11))){
var inst_14129 = (state_14154[(2)]);
var state_14154__$1 = (function (){var statearr_14191 = state_14154;
(statearr_14191[(10)] = inst_14129);

return statearr_14191;
})();
var statearr_14192_16015 = state_14154__$1;
(statearr_14192_16015[(2)] = null);

(statearr_14192_16015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (9))){
var state_14154__$1 = state_14154;
var statearr_14195_16017 = state_14154__$1;
(statearr_14195_16017[(2)] = null);

(statearr_14195_16017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (5))){
var state_14154__$1 = state_14154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14196_16018 = state_14154__$1;
(statearr_14196_16018[(1)] = (8));

} else {
var statearr_14197_16019 = state_14154__$1;
(statearr_14197_16019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (14))){
var inst_14134 = (state_14154[(11)]);
var inst_14132 = (state_14154[(8)]);
var inst_14132__$1 = (state_14154[(2)]);
var inst_14133 = (inst_14132__$1 == null);
var inst_14134__$1 = cljs.core.not(inst_14133);
var state_14154__$1 = (function (){var statearr_14198 = state_14154;
(statearr_14198[(11)] = inst_14134__$1);

(statearr_14198[(8)] = inst_14132__$1);

return statearr_14198;
})();
if(inst_14134__$1){
var statearr_14199_16024 = state_14154__$1;
(statearr_14199_16024[(1)] = (15));

} else {
var statearr_14200_16025 = state_14154__$1;
(statearr_14200_16025[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (16))){
var inst_14134 = (state_14154[(11)]);
var state_14154__$1 = state_14154;
var statearr_14202_16026 = state_14154__$1;
(statearr_14202_16026[(2)] = inst_14134);

(statearr_14202_16026[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (10))){
var inst_14126 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
var statearr_14204_16030 = state_14154__$1;
(statearr_14204_16030[(2)] = inst_14126);

(statearr_14204_16030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (18))){
var inst_14137 = (state_14154[(2)]);
var state_14154__$1 = state_14154;
var statearr_14205_16036 = state_14154__$1;
(statearr_14205_16036[(2)] = inst_14137);

(statearr_14205_16036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14155 === (8))){
var inst_14123 = cljs.core.async.close_BANG_(to);
var state_14154__$1 = state_14154;
var statearr_14208_16037 = state_14154__$1;
(statearr_14208_16037[(2)] = inst_14123);

(statearr_14208_16037[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0 = (function (){
var statearr_14209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14209[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__);

(statearr_14209[(1)] = (1));

return statearr_14209;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1 = (function (state_14154){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14154);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14213){var ex__10987__auto__ = e14213;
var statearr_14214_16038 = state_14154;
(statearr_14214_16038[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14154[(4)]))){
var statearr_14215_16039 = state_14154;
(statearr_14215_16039[(1)] = cljs.core.first((state_14154[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16041 = state_14154;
state_14154 = G__16041;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__ = function(state_14154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1.call(this,state_14154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_14216 = f__13713__auto__();
(statearr_14216[(6)] = c__13712__auto__);

return statearr_14216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));

return c__13712__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14219 = arguments.length;
switch (G__14219) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14223 = arguments.length;
switch (G__14223) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14242 = arguments.length;
switch (G__14242) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13712__auto___16049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_14272){
var state_val_14273 = (state_14272[(1)]);
if((state_val_14273 === (7))){
var inst_14268 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
var statearr_14279_16050 = state_14272__$1;
(statearr_14279_16050[(2)] = inst_14268);

(statearr_14279_16050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (1))){
var state_14272__$1 = state_14272;
var statearr_14291_16051 = state_14272__$1;
(statearr_14291_16051[(2)] = null);

(statearr_14291_16051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (4))){
var inst_14249 = (state_14272[(7)]);
var inst_14249__$1 = (state_14272[(2)]);
var inst_14250 = (inst_14249__$1 == null);
var state_14272__$1 = (function (){var statearr_14297 = state_14272;
(statearr_14297[(7)] = inst_14249__$1);

return statearr_14297;
})();
if(cljs.core.truth_(inst_14250)){
var statearr_14298_16080 = state_14272__$1;
(statearr_14298_16080[(1)] = (5));

} else {
var statearr_14299_16081 = state_14272__$1;
(statearr_14299_16081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (13))){
var state_14272__$1 = state_14272;
var statearr_14304_16082 = state_14272__$1;
(statearr_14304_16082[(2)] = null);

(statearr_14304_16082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (6))){
var inst_14249 = (state_14272[(7)]);
var inst_14255 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14249) : p.call(null,inst_14249));
var state_14272__$1 = state_14272;
if(cljs.core.truth_(inst_14255)){
var statearr_14305_16083 = state_14272__$1;
(statearr_14305_16083[(1)] = (9));

} else {
var statearr_14308_16084 = state_14272__$1;
(statearr_14308_16084[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (3))){
var inst_14270 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14272__$1,inst_14270);
} else {
if((state_val_14273 === (12))){
var state_14272__$1 = state_14272;
var statearr_14326_16088 = state_14272__$1;
(statearr_14326_16088[(2)] = null);

(statearr_14326_16088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (2))){
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14272__$1,(4),ch);
} else {
if((state_val_14273 === (11))){
var inst_14249 = (state_14272[(7)]);
var inst_14259 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14272__$1,(8),inst_14259,inst_14249);
} else {
if((state_val_14273 === (9))){
var state_14272__$1 = state_14272;
var statearr_14328_16089 = state_14272__$1;
(statearr_14328_16089[(2)] = tc);

(statearr_14328_16089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (5))){
var inst_14252 = cljs.core.async.close_BANG_(tc);
var inst_14253 = cljs.core.async.close_BANG_(fc);
var state_14272__$1 = (function (){var statearr_14329 = state_14272;
(statearr_14329[(8)] = inst_14252);

return statearr_14329;
})();
var statearr_14331_16090 = state_14272__$1;
(statearr_14331_16090[(2)] = inst_14253);

(statearr_14331_16090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (14))){
var inst_14266 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
var statearr_14333_16092 = state_14272__$1;
(statearr_14333_16092[(2)] = inst_14266);

(statearr_14333_16092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (10))){
var state_14272__$1 = state_14272;
var statearr_14335_16094 = state_14272__$1;
(statearr_14335_16094[(2)] = fc);

(statearr_14335_16094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (8))){
var inst_14261 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
if(cljs.core.truth_(inst_14261)){
var statearr_14336_16095 = state_14272__$1;
(statearr_14336_16095[(1)] = (12));

} else {
var statearr_14337_16097 = state_14272__$1;
(statearr_14337_16097[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_14338 = [null,null,null,null,null,null,null,null,null];
(statearr_14338[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_14338[(1)] = (1));

return statearr_14338;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_14272){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14272);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14339){var ex__10987__auto__ = e14339;
var statearr_14340_16099 = state_14272;
(statearr_14340_16099[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14272[(4)]))){
var statearr_14341_16100 = state_14272;
(statearr_14341_16100[(1)] = cljs.core.first((state_14272[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16101 = state_14272;
state_14272 = G__16101;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_14272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_14272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_14342 = f__13713__auto__();
(statearr_14342[(6)] = c__13712__auto___16049);

return statearr_14342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_14376){
var state_val_14377 = (state_14376[(1)]);
if((state_val_14377 === (7))){
var inst_14372 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14378_16106 = state_14376__$1;
(statearr_14378_16106[(2)] = inst_14372);

(statearr_14378_16106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (1))){
var inst_14347 = init;
var inst_14348 = inst_14347;
var state_14376__$1 = (function (){var statearr_14379 = state_14376;
(statearr_14379[(7)] = inst_14348);

return statearr_14379;
})();
var statearr_14380_16107 = state_14376__$1;
(statearr_14380_16107[(2)] = null);

(statearr_14380_16107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (4))){
var inst_14355 = (state_14376[(8)]);
var inst_14355__$1 = (state_14376[(2)]);
var inst_14356 = (inst_14355__$1 == null);
var state_14376__$1 = (function (){var statearr_14382 = state_14376;
(statearr_14382[(8)] = inst_14355__$1);

return statearr_14382;
})();
if(cljs.core.truth_(inst_14356)){
var statearr_14387_16113 = state_14376__$1;
(statearr_14387_16113[(1)] = (5));

} else {
var statearr_14388_16114 = state_14376__$1;
(statearr_14388_16114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (6))){
var inst_14355 = (state_14376[(8)]);
var inst_14363 = (state_14376[(9)]);
var inst_14348 = (state_14376[(7)]);
var inst_14363__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14348,inst_14355) : f.call(null,inst_14348,inst_14355));
var inst_14364 = cljs.core.reduced_QMARK_(inst_14363__$1);
var state_14376__$1 = (function (){var statearr_14389 = state_14376;
(statearr_14389[(9)] = inst_14363__$1);

return statearr_14389;
})();
if(inst_14364){
var statearr_14391_16120 = state_14376__$1;
(statearr_14391_16120[(1)] = (8));

} else {
var statearr_14392_16122 = state_14376__$1;
(statearr_14392_16122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (3))){
var inst_14374 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14376__$1,inst_14374);
} else {
if((state_val_14377 === (2))){
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14376__$1,(4),ch);
} else {
if((state_val_14377 === (9))){
var inst_14363 = (state_14376[(9)]);
var inst_14348 = inst_14363;
var state_14376__$1 = (function (){var statearr_14394 = state_14376;
(statearr_14394[(7)] = inst_14348);

return statearr_14394;
})();
var statearr_14395_16126 = state_14376__$1;
(statearr_14395_16126[(2)] = null);

(statearr_14395_16126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (5))){
var inst_14348 = (state_14376[(7)]);
var state_14376__$1 = state_14376;
var statearr_14396_16127 = state_14376__$1;
(statearr_14396_16127[(2)] = inst_14348);

(statearr_14396_16127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (10))){
var inst_14370 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14397_16133 = state_14376__$1;
(statearr_14397_16133[(2)] = inst_14370);

(statearr_14397_16133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (8))){
var inst_14363 = (state_14376[(9)]);
var inst_14366 = cljs.core.deref(inst_14363);
var state_14376__$1 = state_14376;
var statearr_14398_16134 = state_14376__$1;
(statearr_14398_16134[(2)] = inst_14366);

(statearr_14398_16134[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__10984__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10984__auto____0 = (function (){
var statearr_14399 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14399[(0)] = cljs$core$async$reduce_$_state_machine__10984__auto__);

(statearr_14399[(1)] = (1));

return statearr_14399;
});
var cljs$core$async$reduce_$_state_machine__10984__auto____1 = (function (state_14376){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14376);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14403){var ex__10987__auto__ = e14403;
var statearr_14404_16138 = state_14376;
(statearr_14404_16138[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14376[(4)]))){
var statearr_14405_16140 = state_14376;
(statearr_14405_16140[(1)] = cljs.core.first((state_14376[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16144 = state_14376;
state_14376 = G__16144;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10984__auto__ = function(state_14376){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10984__auto____1.call(this,state_14376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10984__auto____0;
cljs$core$async$reduce_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10984__auto____1;
return cljs$core$async$reduce_$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_14406 = f__13713__auto__();
(statearr_14406[(6)] = c__13712__auto__);

return statearr_14406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));

return c__13712__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_14426){
var state_val_14427 = (state_14426[(1)]);
if((state_val_14427 === (1))){
var inst_14421 = cljs.core.async.reduce(f__$1,init,ch);
var state_14426__$1 = state_14426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14426__$1,(2),inst_14421);
} else {
if((state_val_14427 === (2))){
var inst_14423 = (state_14426[(2)]);
var inst_14424 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14423) : f__$1.call(null,inst_14423));
var state_14426__$1 = state_14426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14426__$1,inst_14424);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10984__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10984__auto____0 = (function (){
var statearr_14428 = [null,null,null,null,null,null,null];
(statearr_14428[(0)] = cljs$core$async$transduce_$_state_machine__10984__auto__);

(statearr_14428[(1)] = (1));

return statearr_14428;
});
var cljs$core$async$transduce_$_state_machine__10984__auto____1 = (function (state_14426){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14426);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14429){var ex__10987__auto__ = e14429;
var statearr_14430_16151 = state_14426;
(statearr_14430_16151[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14426[(4)]))){
var statearr_14431_16152 = state_14426;
(statearr_14431_16152[(1)] = cljs.core.first((state_14426[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16153 = state_14426;
state_14426 = G__16153;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10984__auto__ = function(state_14426){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10984__auto____1.call(this,state_14426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10984__auto____0;
cljs$core$async$transduce_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10984__auto____1;
return cljs$core$async$transduce_$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_14434 = f__13713__auto__();
(statearr_14434[(6)] = c__13712__auto__);

return statearr_14434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));

return c__13712__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14436 = arguments.length;
switch (G__14436) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_14465){
var state_val_14466 = (state_14465[(1)]);
if((state_val_14466 === (7))){
var inst_14447 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
var statearr_14469_16156 = state_14465__$1;
(statearr_14469_16156[(2)] = inst_14447);

(statearr_14469_16156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (1))){
var inst_14438 = cljs.core.seq(coll);
var inst_14442 = inst_14438;
var state_14465__$1 = (function (){var statearr_14470 = state_14465;
(statearr_14470[(7)] = inst_14442);

return statearr_14470;
})();
var statearr_14471_16158 = state_14465__$1;
(statearr_14471_16158[(2)] = null);

(statearr_14471_16158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (4))){
var inst_14442 = (state_14465[(7)]);
var inst_14445 = cljs.core.first(inst_14442);
var state_14465__$1 = state_14465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14465__$1,(7),ch,inst_14445);
} else {
if((state_val_14466 === (13))){
var inst_14459 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
var statearr_14472_16164 = state_14465__$1;
(statearr_14472_16164[(2)] = inst_14459);

(statearr_14472_16164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (6))){
var inst_14450 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
if(cljs.core.truth_(inst_14450)){
var statearr_14473_16165 = state_14465__$1;
(statearr_14473_16165[(1)] = (8));

} else {
var statearr_14474_16166 = state_14465__$1;
(statearr_14474_16166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (3))){
var inst_14463 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14465__$1,inst_14463);
} else {
if((state_val_14466 === (12))){
var state_14465__$1 = state_14465;
var statearr_14479_16168 = state_14465__$1;
(statearr_14479_16168[(2)] = null);

(statearr_14479_16168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (2))){
var inst_14442 = (state_14465[(7)]);
var state_14465__$1 = state_14465;
if(cljs.core.truth_(inst_14442)){
var statearr_14480_16169 = state_14465__$1;
(statearr_14480_16169[(1)] = (4));

} else {
var statearr_14481_16170 = state_14465__$1;
(statearr_14481_16170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (11))){
var inst_14456 = cljs.core.async.close_BANG_(ch);
var state_14465__$1 = state_14465;
var statearr_14482_16175 = state_14465__$1;
(statearr_14482_16175[(2)] = inst_14456);

(statearr_14482_16175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (9))){
var state_14465__$1 = state_14465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14483_16176 = state_14465__$1;
(statearr_14483_16176[(1)] = (11));

} else {
var statearr_14485_16177 = state_14465__$1;
(statearr_14485_16177[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (5))){
var inst_14442 = (state_14465[(7)]);
var state_14465__$1 = state_14465;
var statearr_14487_16178 = state_14465__$1;
(statearr_14487_16178[(2)] = inst_14442);

(statearr_14487_16178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (10))){
var inst_14461 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
var statearr_14488_16179 = state_14465__$1;
(statearr_14488_16179[(2)] = inst_14461);

(statearr_14488_16179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14466 === (8))){
var inst_14442 = (state_14465[(7)]);
var inst_14452 = cljs.core.next(inst_14442);
var inst_14442__$1 = inst_14452;
var state_14465__$1 = (function (){var statearr_14489 = state_14465;
(statearr_14489[(7)] = inst_14442__$1);

return statearr_14489;
})();
var statearr_14490_16180 = state_14465__$1;
(statearr_14490_16180[(2)] = null);

(statearr_14490_16180[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_14491 = [null,null,null,null,null,null,null,null];
(statearr_14491[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_14491[(1)] = (1));

return statearr_14491;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_14465){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14465);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14492){var ex__10987__auto__ = e14492;
var statearr_14493_16184 = state_14465;
(statearr_14493_16184[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14465[(4)]))){
var statearr_14495_16185 = state_14465;
(statearr_14495_16185[(1)] = cljs.core.first((state_14465[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16186 = state_14465;
state_14465 = G__16186;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_14465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_14465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_14499 = f__13713__auto__();
(statearr_14499[(6)] = c__13712__auto__);

return statearr_14499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));

return c__13712__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14506 = arguments.length;
switch (G__14506) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16196 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16196(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16199 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16199(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16202 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16202(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16208 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16208(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14526 = (function (ch,cs,meta14527){
this.ch = ch;
this.cs = cs;
this.meta14527 = meta14527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14528,meta14527__$1){
var self__ = this;
var _14528__$1 = this;
return (new cljs.core.async.t_cljs$core$async14526(self__.ch,self__.cs,meta14527__$1));
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14528){
var self__ = this;
var _14528__$1 = this;
return self__.meta14527;
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14527","meta14527",516970538,null)], null);
}));

(cljs.core.async.t_cljs$core$async14526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14526");

(cljs.core.async.t_cljs$core$async14526.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14526.
 */
cljs.core.async.__GT_t_cljs$core$async14526 = (function cljs$core$async$__GT_t_cljs$core$async14526(ch,cs,meta14527){
return (new cljs.core.async.t_cljs$core$async14526(ch,cs,meta14527));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14526(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13712__auto___16216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_14679){
var state_val_14680 = (state_14679[(1)]);
if((state_val_14680 === (7))){
var inst_14675 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14681_16217 = state_14679__$1;
(statearr_14681_16217[(2)] = inst_14675);

(statearr_14681_16217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (20))){
var inst_14568 = (state_14679[(7)]);
var inst_14580 = cljs.core.first(inst_14568);
var inst_14582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14580,(0),null);
var inst_14583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14580,(1),null);
var state_14679__$1 = (function (){var statearr_14685 = state_14679;
(statearr_14685[(8)] = inst_14582);

return statearr_14685;
})();
if(cljs.core.truth_(inst_14583)){
var statearr_14686_16218 = state_14679__$1;
(statearr_14686_16218[(1)] = (22));

} else {
var statearr_14687_16219 = state_14679__$1;
(statearr_14687_16219[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (27))){
var inst_14623 = (state_14679[(9)]);
var inst_14618 = (state_14679[(10)]);
var inst_14535 = (state_14679[(11)]);
var inst_14616 = (state_14679[(12)]);
var inst_14623__$1 = cljs.core._nth(inst_14616,inst_14618);
var inst_14624 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14623__$1,inst_14535,done);
var state_14679__$1 = (function (){var statearr_14688 = state_14679;
(statearr_14688[(9)] = inst_14623__$1);

return statearr_14688;
})();
if(cljs.core.truth_(inst_14624)){
var statearr_14689_16224 = state_14679__$1;
(statearr_14689_16224[(1)] = (30));

} else {
var statearr_14690_16225 = state_14679__$1;
(statearr_14690_16225[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (1))){
var state_14679__$1 = state_14679;
var statearr_14692_16226 = state_14679__$1;
(statearr_14692_16226[(2)] = null);

(statearr_14692_16226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (24))){
var inst_14568 = (state_14679[(7)]);
var inst_14588 = (state_14679[(2)]);
var inst_14591 = cljs.core.next(inst_14568);
var inst_14544 = inst_14591;
var inst_14545 = null;
var inst_14546 = (0);
var inst_14547 = (0);
var state_14679__$1 = (function (){var statearr_14693 = state_14679;
(statearr_14693[(13)] = inst_14545);

(statearr_14693[(14)] = inst_14588);

(statearr_14693[(15)] = inst_14544);

(statearr_14693[(16)] = inst_14547);

(statearr_14693[(17)] = inst_14546);

return statearr_14693;
})();
var statearr_14703_16227 = state_14679__$1;
(statearr_14703_16227[(2)] = null);

(statearr_14703_16227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (39))){
var state_14679__$1 = state_14679;
var statearr_14707_16230 = state_14679__$1;
(statearr_14707_16230[(2)] = null);

(statearr_14707_16230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (4))){
var inst_14535 = (state_14679[(11)]);
var inst_14535__$1 = (state_14679[(2)]);
var inst_14536 = (inst_14535__$1 == null);
var state_14679__$1 = (function (){var statearr_14708 = state_14679;
(statearr_14708[(11)] = inst_14535__$1);

return statearr_14708;
})();
if(cljs.core.truth_(inst_14536)){
var statearr_14709_16237 = state_14679__$1;
(statearr_14709_16237[(1)] = (5));

} else {
var statearr_14710_16238 = state_14679__$1;
(statearr_14710_16238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (15))){
var inst_14545 = (state_14679[(13)]);
var inst_14544 = (state_14679[(15)]);
var inst_14547 = (state_14679[(16)]);
var inst_14546 = (state_14679[(17)]);
var inst_14562 = (state_14679[(2)]);
var inst_14563 = (inst_14547 + (1));
var tmp14704 = inst_14545;
var tmp14705 = inst_14544;
var tmp14706 = inst_14546;
var inst_14544__$1 = tmp14705;
var inst_14545__$1 = tmp14704;
var inst_14546__$1 = tmp14706;
var inst_14547__$1 = inst_14563;
var state_14679__$1 = (function (){var statearr_14711 = state_14679;
(statearr_14711[(18)] = inst_14562);

(statearr_14711[(13)] = inst_14545__$1);

(statearr_14711[(15)] = inst_14544__$1);

(statearr_14711[(16)] = inst_14547__$1);

(statearr_14711[(17)] = inst_14546__$1);

return statearr_14711;
})();
var statearr_14712_16239 = state_14679__$1;
(statearr_14712_16239[(2)] = null);

(statearr_14712_16239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (21))){
var inst_14596 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14717_16242 = state_14679__$1;
(statearr_14717_16242[(2)] = inst_14596);

(statearr_14717_16242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (31))){
var inst_14623 = (state_14679[(9)]);
var inst_14627 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14623);
var state_14679__$1 = state_14679;
var statearr_14719_16243 = state_14679__$1;
(statearr_14719_16243[(2)] = inst_14627);

(statearr_14719_16243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (32))){
var inst_14618 = (state_14679[(10)]);
var inst_14617 = (state_14679[(19)]);
var inst_14615 = (state_14679[(20)]);
var inst_14616 = (state_14679[(12)]);
var inst_14629 = (state_14679[(2)]);
var inst_14630 = (inst_14618 + (1));
var tmp14713 = inst_14617;
var tmp14714 = inst_14615;
var tmp14715 = inst_14616;
var inst_14615__$1 = tmp14714;
var inst_14616__$1 = tmp14715;
var inst_14617__$1 = tmp14713;
var inst_14618__$1 = inst_14630;
var state_14679__$1 = (function (){var statearr_14720 = state_14679;
(statearr_14720[(10)] = inst_14618__$1);

(statearr_14720[(21)] = inst_14629);

(statearr_14720[(19)] = inst_14617__$1);

(statearr_14720[(20)] = inst_14615__$1);

(statearr_14720[(12)] = inst_14616__$1);

return statearr_14720;
})();
var statearr_14721_16244 = state_14679__$1;
(statearr_14721_16244[(2)] = null);

(statearr_14721_16244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (40))){
var inst_14648 = (state_14679[(22)]);
var inst_14652 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14648);
var state_14679__$1 = state_14679;
var statearr_14723_16251 = state_14679__$1;
(statearr_14723_16251[(2)] = inst_14652);

(statearr_14723_16251[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (33))){
var inst_14633 = (state_14679[(23)]);
var inst_14635 = cljs.core.chunked_seq_QMARK_(inst_14633);
var state_14679__$1 = state_14679;
if(inst_14635){
var statearr_14724_16254 = state_14679__$1;
(statearr_14724_16254[(1)] = (36));

} else {
var statearr_14725_16255 = state_14679__$1;
(statearr_14725_16255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (13))){
var inst_14556 = (state_14679[(24)]);
var inst_14559 = cljs.core.async.close_BANG_(inst_14556);
var state_14679__$1 = state_14679;
var statearr_14726_16256 = state_14679__$1;
(statearr_14726_16256[(2)] = inst_14559);

(statearr_14726_16256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (22))){
var inst_14582 = (state_14679[(8)]);
var inst_14585 = cljs.core.async.close_BANG_(inst_14582);
var state_14679__$1 = state_14679;
var statearr_14727_16257 = state_14679__$1;
(statearr_14727_16257[(2)] = inst_14585);

(statearr_14727_16257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (36))){
var inst_14633 = (state_14679[(23)]);
var inst_14637 = cljs.core.chunk_first(inst_14633);
var inst_14638 = cljs.core.chunk_rest(inst_14633);
var inst_14639 = cljs.core.count(inst_14637);
var inst_14615 = inst_14638;
var inst_14616 = inst_14637;
var inst_14617 = inst_14639;
var inst_14618 = (0);
var state_14679__$1 = (function (){var statearr_14728 = state_14679;
(statearr_14728[(10)] = inst_14618);

(statearr_14728[(19)] = inst_14617);

(statearr_14728[(20)] = inst_14615);

(statearr_14728[(12)] = inst_14616);

return statearr_14728;
})();
var statearr_14729_16263 = state_14679__$1;
(statearr_14729_16263[(2)] = null);

(statearr_14729_16263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (41))){
var inst_14633 = (state_14679[(23)]);
var inst_14654 = (state_14679[(2)]);
var inst_14655 = cljs.core.next(inst_14633);
var inst_14615 = inst_14655;
var inst_14616 = null;
var inst_14617 = (0);
var inst_14618 = (0);
var state_14679__$1 = (function (){var statearr_14732 = state_14679;
(statearr_14732[(10)] = inst_14618);

(statearr_14732[(19)] = inst_14617);

(statearr_14732[(20)] = inst_14615);

(statearr_14732[(25)] = inst_14654);

(statearr_14732[(12)] = inst_14616);

return statearr_14732;
})();
var statearr_14733_16267 = state_14679__$1;
(statearr_14733_16267[(2)] = null);

(statearr_14733_16267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (43))){
var state_14679__$1 = state_14679;
var statearr_14736_16269 = state_14679__$1;
(statearr_14736_16269[(2)] = null);

(statearr_14736_16269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (29))){
var inst_14663 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14739_16273 = state_14679__$1;
(statearr_14739_16273[(2)] = inst_14663);

(statearr_14739_16273[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (44))){
var inst_14672 = (state_14679[(2)]);
var state_14679__$1 = (function (){var statearr_14742 = state_14679;
(statearr_14742[(26)] = inst_14672);

return statearr_14742;
})();
var statearr_14743_16274 = state_14679__$1;
(statearr_14743_16274[(2)] = null);

(statearr_14743_16274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (6))){
var inst_14607 = (state_14679[(27)]);
var inst_14605 = cljs.core.deref(cs);
var inst_14607__$1 = cljs.core.keys(inst_14605);
var inst_14608 = cljs.core.count(inst_14607__$1);
var inst_14609 = cljs.core.reset_BANG_(dctr,inst_14608);
var inst_14614 = cljs.core.seq(inst_14607__$1);
var inst_14615 = inst_14614;
var inst_14616 = null;
var inst_14617 = (0);
var inst_14618 = (0);
var state_14679__$1 = (function (){var statearr_14746 = state_14679;
(statearr_14746[(27)] = inst_14607__$1);

(statearr_14746[(10)] = inst_14618);

(statearr_14746[(19)] = inst_14617);

(statearr_14746[(20)] = inst_14615);

(statearr_14746[(28)] = inst_14609);

(statearr_14746[(12)] = inst_14616);

return statearr_14746;
})();
var statearr_14747_16277 = state_14679__$1;
(statearr_14747_16277[(2)] = null);

(statearr_14747_16277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (28))){
var inst_14633 = (state_14679[(23)]);
var inst_14615 = (state_14679[(20)]);
var inst_14633__$1 = cljs.core.seq(inst_14615);
var state_14679__$1 = (function (){var statearr_14748 = state_14679;
(statearr_14748[(23)] = inst_14633__$1);

return statearr_14748;
})();
if(inst_14633__$1){
var statearr_14749_16278 = state_14679__$1;
(statearr_14749_16278[(1)] = (33));

} else {
var statearr_14750_16279 = state_14679__$1;
(statearr_14750_16279[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (25))){
var inst_14618 = (state_14679[(10)]);
var inst_14617 = (state_14679[(19)]);
var inst_14620 = (inst_14618 < inst_14617);
var inst_14621 = inst_14620;
var state_14679__$1 = state_14679;
if(cljs.core.truth_(inst_14621)){
var statearr_14752_16280 = state_14679__$1;
(statearr_14752_16280[(1)] = (27));

} else {
var statearr_14753_16281 = state_14679__$1;
(statearr_14753_16281[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (34))){
var state_14679__$1 = state_14679;
var statearr_14755_16282 = state_14679__$1;
(statearr_14755_16282[(2)] = null);

(statearr_14755_16282[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (17))){
var state_14679__$1 = state_14679;
var statearr_14756_16283 = state_14679__$1;
(statearr_14756_16283[(2)] = null);

(statearr_14756_16283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (3))){
var inst_14677 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14679__$1,inst_14677);
} else {
if((state_val_14680 === (12))){
var inst_14601 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14757_16285 = state_14679__$1;
(statearr_14757_16285[(2)] = inst_14601);

(statearr_14757_16285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (2))){
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14679__$1,(4),ch);
} else {
if((state_val_14680 === (23))){
var state_14679__$1 = state_14679;
var statearr_14758_16286 = state_14679__$1;
(statearr_14758_16286[(2)] = null);

(statearr_14758_16286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (35))){
var inst_14661 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14761_16287 = state_14679__$1;
(statearr_14761_16287[(2)] = inst_14661);

(statearr_14761_16287[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (19))){
var inst_14568 = (state_14679[(7)]);
var inst_14572 = cljs.core.chunk_first(inst_14568);
var inst_14573 = cljs.core.chunk_rest(inst_14568);
var inst_14574 = cljs.core.count(inst_14572);
var inst_14544 = inst_14573;
var inst_14545 = inst_14572;
var inst_14546 = inst_14574;
var inst_14547 = (0);
var state_14679__$1 = (function (){var statearr_14764 = state_14679;
(statearr_14764[(13)] = inst_14545);

(statearr_14764[(15)] = inst_14544);

(statearr_14764[(16)] = inst_14547);

(statearr_14764[(17)] = inst_14546);

return statearr_14764;
})();
var statearr_14765_16292 = state_14679__$1;
(statearr_14765_16292[(2)] = null);

(statearr_14765_16292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (11))){
var inst_14568 = (state_14679[(7)]);
var inst_14544 = (state_14679[(15)]);
var inst_14568__$1 = cljs.core.seq(inst_14544);
var state_14679__$1 = (function (){var statearr_14766 = state_14679;
(statearr_14766[(7)] = inst_14568__$1);

return statearr_14766;
})();
if(inst_14568__$1){
var statearr_14767_16294 = state_14679__$1;
(statearr_14767_16294[(1)] = (16));

} else {
var statearr_14768_16295 = state_14679__$1;
(statearr_14768_16295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (9))){
var inst_14603 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14769_16296 = state_14679__$1;
(statearr_14769_16296[(2)] = inst_14603);

(statearr_14769_16296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (5))){
var inst_14542 = cljs.core.deref(cs);
var inst_14543 = cljs.core.seq(inst_14542);
var inst_14544 = inst_14543;
var inst_14545 = null;
var inst_14546 = (0);
var inst_14547 = (0);
var state_14679__$1 = (function (){var statearr_14770 = state_14679;
(statearr_14770[(13)] = inst_14545);

(statearr_14770[(15)] = inst_14544);

(statearr_14770[(16)] = inst_14547);

(statearr_14770[(17)] = inst_14546);

return statearr_14770;
})();
var statearr_14771_16299 = state_14679__$1;
(statearr_14771_16299[(2)] = null);

(statearr_14771_16299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (14))){
var state_14679__$1 = state_14679;
var statearr_14776_16301 = state_14679__$1;
(statearr_14776_16301[(2)] = null);

(statearr_14776_16301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (45))){
var inst_14669 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14778_16305 = state_14679__$1;
(statearr_14778_16305[(2)] = inst_14669);

(statearr_14778_16305[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (26))){
var inst_14607 = (state_14679[(27)]);
var inst_14665 = (state_14679[(2)]);
var inst_14666 = cljs.core.seq(inst_14607);
var state_14679__$1 = (function (){var statearr_14779 = state_14679;
(statearr_14779[(29)] = inst_14665);

return statearr_14779;
})();
if(inst_14666){
var statearr_14780_16306 = state_14679__$1;
(statearr_14780_16306[(1)] = (42));

} else {
var statearr_14781_16307 = state_14679__$1;
(statearr_14781_16307[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (16))){
var inst_14568 = (state_14679[(7)]);
var inst_14570 = cljs.core.chunked_seq_QMARK_(inst_14568);
var state_14679__$1 = state_14679;
if(inst_14570){
var statearr_14782_16309 = state_14679__$1;
(statearr_14782_16309[(1)] = (19));

} else {
var statearr_14783_16313 = state_14679__$1;
(statearr_14783_16313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (38))){
var inst_14658 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14784_16314 = state_14679__$1;
(statearr_14784_16314[(2)] = inst_14658);

(statearr_14784_16314[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (30))){
var state_14679__$1 = state_14679;
var statearr_14785_16318 = state_14679__$1;
(statearr_14785_16318[(2)] = null);

(statearr_14785_16318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (10))){
var inst_14545 = (state_14679[(13)]);
var inst_14547 = (state_14679[(16)]);
var inst_14555 = cljs.core._nth(inst_14545,inst_14547);
var inst_14556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14555,(0),null);
var inst_14557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14555,(1),null);
var state_14679__$1 = (function (){var statearr_14786 = state_14679;
(statearr_14786[(24)] = inst_14556);

return statearr_14786;
})();
if(cljs.core.truth_(inst_14557)){
var statearr_14787_16319 = state_14679__$1;
(statearr_14787_16319[(1)] = (13));

} else {
var statearr_14788_16320 = state_14679__$1;
(statearr_14788_16320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (18))){
var inst_14599 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14793_16321 = state_14679__$1;
(statearr_14793_16321[(2)] = inst_14599);

(statearr_14793_16321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (42))){
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14679__$1,(45),dchan);
} else {
if((state_val_14680 === (37))){
var inst_14633 = (state_14679[(23)]);
var inst_14535 = (state_14679[(11)]);
var inst_14648 = (state_14679[(22)]);
var inst_14648__$1 = cljs.core.first(inst_14633);
var inst_14649 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14648__$1,inst_14535,done);
var state_14679__$1 = (function (){var statearr_14795 = state_14679;
(statearr_14795[(22)] = inst_14648__$1);

return statearr_14795;
})();
if(cljs.core.truth_(inst_14649)){
var statearr_14796_16322 = state_14679__$1;
(statearr_14796_16322[(1)] = (39));

} else {
var statearr_14797_16326 = state_14679__$1;
(statearr_14797_16326[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (8))){
var inst_14547 = (state_14679[(16)]);
var inst_14546 = (state_14679[(17)]);
var inst_14549 = (inst_14547 < inst_14546);
var inst_14550 = inst_14549;
var state_14679__$1 = state_14679;
if(cljs.core.truth_(inst_14550)){
var statearr_14798_16327 = state_14679__$1;
(statearr_14798_16327[(1)] = (10));

} else {
var statearr_14799_16328 = state_14679__$1;
(statearr_14799_16328[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__10984__auto__ = null;
var cljs$core$async$mult_$_state_machine__10984__auto____0 = (function (){
var statearr_14800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14800[(0)] = cljs$core$async$mult_$_state_machine__10984__auto__);

(statearr_14800[(1)] = (1));

return statearr_14800;
});
var cljs$core$async$mult_$_state_machine__10984__auto____1 = (function (state_14679){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14679);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14801){var ex__10987__auto__ = e14801;
var statearr_14802_16329 = state_14679;
(statearr_14802_16329[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14679[(4)]))){
var statearr_14803_16330 = state_14679;
(statearr_14803_16330[(1)] = cljs.core.first((state_14679[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16331 = state_14679;
state_14679 = G__16331;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10984__auto__ = function(state_14679){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10984__auto____1.call(this,state_14679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10984__auto____0;
cljs$core$async$mult_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10984__auto____1;
return cljs$core$async$mult_$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_14806 = f__13713__auto__();
(statearr_14806[(6)] = c__13712__auto___16216);

return statearr_14806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14812 = arguments.length;
switch (G__14812) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16336 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16336(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16337 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16337(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16338 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16338(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16340 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16340(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16342 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16342(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16343 = arguments.length;
var i__5770__auto___16344 = (0);
while(true){
if((i__5770__auto___16344 < len__5769__auto___16343)){
args__5775__auto__.push((arguments[i__5770__auto___16344]));

var G__16345 = (i__5770__auto___16344 + (1));
i__5770__auto___16344 = G__16345;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14829){
var map__14830 = p__14829;
var map__14830__$1 = cljs.core.__destructure_map(map__14830);
var opts = map__14830__$1;
var statearr_14833_16348 = state;
(statearr_14833_16348[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14838_16349 = state;
(statearr_14838_16349[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14839_16350 = state;
(statearr_14839_16350[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14825){
var G__14826 = cljs.core.first(seq14825);
var seq14825__$1 = cljs.core.next(seq14825);
var G__14827 = cljs.core.first(seq14825__$1);
var seq14825__$2 = cljs.core.next(seq14825__$1);
var G__14828 = cljs.core.first(seq14825__$2);
var seq14825__$3 = cljs.core.next(seq14825__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14826,G__14827,G__14828,seq14825__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14841 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14842){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14842 = meta14842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14843,meta14842__$1){
var self__ = this;
var _14843__$1 = this;
return (new cljs.core.async.t_cljs$core$async14841(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14842__$1));
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14843){
var self__ = this;
var _14843__$1 = this;
return self__.meta14842;
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14842","meta14842",711924406,null)], null);
}));

(cljs.core.async.t_cljs$core$async14841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14841");

(cljs.core.async.t_cljs$core$async14841.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14841.
 */
cljs.core.async.__GT_t_cljs$core$async14841 = (function cljs$core$async$__GT_t_cljs$core$async14841(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14842){
return (new cljs.core.async.t_cljs$core$async14841(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14842));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14841(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13712__auto___16368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_14917){
var state_val_14918 = (state_14917[(1)]);
if((state_val_14918 === (7))){
var inst_14874 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
if(cljs.core.truth_(inst_14874)){
var statearr_14922_16369 = state_14917__$1;
(statearr_14922_16369[(1)] = (8));

} else {
var statearr_14923_16370 = state_14917__$1;
(statearr_14923_16370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (20))){
var inst_14867 = (state_14917[(7)]);
var state_14917__$1 = state_14917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14917__$1,(23),out,inst_14867);
} else {
if((state_val_14918 === (1))){
var inst_14850 = calc_state();
var inst_14851 = cljs.core.__destructure_map(inst_14850);
var inst_14852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14851,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14851,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14851,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14855 = inst_14850;
var state_14917__$1 = (function (){var statearr_14930 = state_14917;
(statearr_14930[(8)] = inst_14855);

(statearr_14930[(9)] = inst_14853);

(statearr_14930[(10)] = inst_14854);

(statearr_14930[(11)] = inst_14852);

return statearr_14930;
})();
var statearr_14931_16371 = state_14917__$1;
(statearr_14931_16371[(2)] = null);

(statearr_14931_16371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (24))){
var inst_14858 = (state_14917[(12)]);
var inst_14855 = inst_14858;
var state_14917__$1 = (function (){var statearr_14932 = state_14917;
(statearr_14932[(8)] = inst_14855);

return statearr_14932;
})();
var statearr_14933_16372 = state_14917__$1;
(statearr_14933_16372[(2)] = null);

(statearr_14933_16372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (4))){
var inst_14867 = (state_14917[(7)]);
var inst_14869 = (state_14917[(13)]);
var inst_14866 = (state_14917[(2)]);
var inst_14867__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14866,(0),null);
var inst_14868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14866,(1),null);
var inst_14869__$1 = (inst_14867__$1 == null);
var state_14917__$1 = (function (){var statearr_14934 = state_14917;
(statearr_14934[(7)] = inst_14867__$1);

(statearr_14934[(14)] = inst_14868);

(statearr_14934[(13)] = inst_14869__$1);

return statearr_14934;
})();
if(cljs.core.truth_(inst_14869__$1)){
var statearr_14935_16373 = state_14917__$1;
(statearr_14935_16373[(1)] = (5));

} else {
var statearr_14936_16374 = state_14917__$1;
(statearr_14936_16374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (15))){
var inst_14888 = (state_14917[(15)]);
var inst_14859 = (state_14917[(16)]);
var inst_14888__$1 = cljs.core.empty_QMARK_(inst_14859);
var state_14917__$1 = (function (){var statearr_14937 = state_14917;
(statearr_14937[(15)] = inst_14888__$1);

return statearr_14937;
})();
if(inst_14888__$1){
var statearr_14939_16375 = state_14917__$1;
(statearr_14939_16375[(1)] = (17));

} else {
var statearr_14941_16376 = state_14917__$1;
(statearr_14941_16376[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (21))){
var inst_14858 = (state_14917[(12)]);
var inst_14855 = inst_14858;
var state_14917__$1 = (function (){var statearr_14942 = state_14917;
(statearr_14942[(8)] = inst_14855);

return statearr_14942;
})();
var statearr_14943_16377 = state_14917__$1;
(statearr_14943_16377[(2)] = null);

(statearr_14943_16377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (13))){
var inst_14881 = (state_14917[(2)]);
var inst_14882 = calc_state();
var inst_14855 = inst_14882;
var state_14917__$1 = (function (){var statearr_14944 = state_14917;
(statearr_14944[(8)] = inst_14855);

(statearr_14944[(17)] = inst_14881);

return statearr_14944;
})();
var statearr_14945_16378 = state_14917__$1;
(statearr_14945_16378[(2)] = null);

(statearr_14945_16378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (22))){
var inst_14908 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
var statearr_14946_16379 = state_14917__$1;
(statearr_14946_16379[(2)] = inst_14908);

(statearr_14946_16379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (6))){
var inst_14868 = (state_14917[(14)]);
var inst_14872 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14868,change);
var state_14917__$1 = state_14917;
var statearr_14947_16385 = state_14917__$1;
(statearr_14947_16385[(2)] = inst_14872);

(statearr_14947_16385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (25))){
var state_14917__$1 = state_14917;
var statearr_14948_16389 = state_14917__$1;
(statearr_14948_16389[(2)] = null);

(statearr_14948_16389[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (17))){
var inst_14868 = (state_14917[(14)]);
var inst_14860 = (state_14917[(18)]);
var inst_14890 = (inst_14860.cljs$core$IFn$_invoke$arity$1 ? inst_14860.cljs$core$IFn$_invoke$arity$1(inst_14868) : inst_14860.call(null,inst_14868));
var inst_14891 = cljs.core.not(inst_14890);
var state_14917__$1 = state_14917;
var statearr_14949_16397 = state_14917__$1;
(statearr_14949_16397[(2)] = inst_14891);

(statearr_14949_16397[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (3))){
var inst_14912 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14917__$1,inst_14912);
} else {
if((state_val_14918 === (12))){
var state_14917__$1 = state_14917;
var statearr_14955_16406 = state_14917__$1;
(statearr_14955_16406[(2)] = null);

(statearr_14955_16406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (2))){
var inst_14855 = (state_14917[(8)]);
var inst_14858 = (state_14917[(12)]);
var inst_14858__$1 = cljs.core.__destructure_map(inst_14855);
var inst_14859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14858__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14858__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14858__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14917__$1 = (function (){var statearr_14956 = state_14917;
(statearr_14956[(12)] = inst_14858__$1);

(statearr_14956[(18)] = inst_14860);

(statearr_14956[(16)] = inst_14859);

return statearr_14956;
})();
return cljs.core.async.ioc_alts_BANG_(state_14917__$1,(4),inst_14861);
} else {
if((state_val_14918 === (23))){
var inst_14899 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
if(cljs.core.truth_(inst_14899)){
var statearr_14957_16407 = state_14917__$1;
(statearr_14957_16407[(1)] = (24));

} else {
var statearr_14958_16408 = state_14917__$1;
(statearr_14958_16408[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (19))){
var inst_14894 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
var statearr_14959_16409 = state_14917__$1;
(statearr_14959_16409[(2)] = inst_14894);

(statearr_14959_16409[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (11))){
var inst_14868 = (state_14917[(14)]);
var inst_14878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14868);
var state_14917__$1 = state_14917;
var statearr_14960_16410 = state_14917__$1;
(statearr_14960_16410[(2)] = inst_14878);

(statearr_14960_16410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (9))){
var inst_14868 = (state_14917[(14)]);
var inst_14885 = (state_14917[(19)]);
var inst_14859 = (state_14917[(16)]);
var inst_14885__$1 = (inst_14859.cljs$core$IFn$_invoke$arity$1 ? inst_14859.cljs$core$IFn$_invoke$arity$1(inst_14868) : inst_14859.call(null,inst_14868));
var state_14917__$1 = (function (){var statearr_14961 = state_14917;
(statearr_14961[(19)] = inst_14885__$1);

return statearr_14961;
})();
if(cljs.core.truth_(inst_14885__$1)){
var statearr_14962_16415 = state_14917__$1;
(statearr_14962_16415[(1)] = (14));

} else {
var statearr_14963_16416 = state_14917__$1;
(statearr_14963_16416[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (5))){
var inst_14869 = (state_14917[(13)]);
var state_14917__$1 = state_14917;
var statearr_14964_16417 = state_14917__$1;
(statearr_14964_16417[(2)] = inst_14869);

(statearr_14964_16417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (14))){
var inst_14885 = (state_14917[(19)]);
var state_14917__$1 = state_14917;
var statearr_14965_16418 = state_14917__$1;
(statearr_14965_16418[(2)] = inst_14885);

(statearr_14965_16418[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (26))){
var inst_14904 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
var statearr_14966_16419 = state_14917__$1;
(statearr_14966_16419[(2)] = inst_14904);

(statearr_14966_16419[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (16))){
var inst_14896 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
if(cljs.core.truth_(inst_14896)){
var statearr_14967_16420 = state_14917__$1;
(statearr_14967_16420[(1)] = (20));

} else {
var statearr_14968_16421 = state_14917__$1;
(statearr_14968_16421[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (10))){
var inst_14910 = (state_14917[(2)]);
var state_14917__$1 = state_14917;
var statearr_14970_16422 = state_14917__$1;
(statearr_14970_16422[(2)] = inst_14910);

(statearr_14970_16422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (18))){
var inst_14888 = (state_14917[(15)]);
var state_14917__$1 = state_14917;
var statearr_14972_16423 = state_14917__$1;
(statearr_14972_16423[(2)] = inst_14888);

(statearr_14972_16423[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14918 === (8))){
var inst_14867 = (state_14917[(7)]);
var inst_14876 = (inst_14867 == null);
var state_14917__$1 = state_14917;
if(cljs.core.truth_(inst_14876)){
var statearr_14973_16424 = state_14917__$1;
(statearr_14973_16424[(1)] = (11));

} else {
var statearr_14974_16425 = state_14917__$1;
(statearr_14974_16425[(1)] = (12));

}

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
var cljs$core$async$mix_$_state_machine__10984__auto__ = null;
var cljs$core$async$mix_$_state_machine__10984__auto____0 = (function (){
var statearr_14975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14975[(0)] = cljs$core$async$mix_$_state_machine__10984__auto__);

(statearr_14975[(1)] = (1));

return statearr_14975;
});
var cljs$core$async$mix_$_state_machine__10984__auto____1 = (function (state_14917){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_14917);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e14976){var ex__10987__auto__ = e14976;
var statearr_14978_16426 = state_14917;
(statearr_14978_16426[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_14917[(4)]))){
var statearr_14979_16427 = state_14917;
(statearr_14979_16427[(1)] = cljs.core.first((state_14917[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16431 = state_14917;
state_14917 = G__16431;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10984__auto__ = function(state_14917){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10984__auto____1.call(this,state_14917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10984__auto____0;
cljs$core$async$mix_$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10984__auto____1;
return cljs$core$async$mix_$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_14981 = f__13713__auto__();
(statearr_14981[(6)] = c__13712__auto___16368);

return statearr_14981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16432 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16432(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16433 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16433(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16437 = (function() {
var G__16438 = null;
var G__16438__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16438__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16438 = function(p,v){
switch(arguments.length){
case 1:
return G__16438__1.call(this,p);
case 2:
return G__16438__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16438.cljs$core$IFn$_invoke$arity$1 = G__16438__1;
G__16438.cljs$core$IFn$_invoke$arity$2 = G__16438__2;
return G__16438;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14992 = arguments.length;
switch (G__14992) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16437(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16437(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14997 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14998){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14998 = meta14998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14999,meta14998__$1){
var self__ = this;
var _14999__$1 = this;
return (new cljs.core.async.t_cljs$core$async14997(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14998__$1));
}));

(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14999){
var self__ = this;
var _14999__$1 = this;
return self__.meta14998;
}));

(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14998","meta14998",884678235,null)], null);
}));

(cljs.core.async.t_cljs$core$async14997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14997");

(cljs.core.async.t_cljs$core$async14997.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14997.
 */
cljs.core.async.__GT_t_cljs$core$async14997 = (function cljs$core$async$__GT_t_cljs$core$async14997(ch,topic_fn,buf_fn,mults,ensure_mult,meta14998){
return (new cljs.core.async.t_cljs$core$async14997(ch,topic_fn,buf_fn,mults,ensure_mult,meta14998));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14995 = arguments.length;
switch (G__14995) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14993_SHARP_){
if(cljs.core.truth_((p1__14993_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14993_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14993_SHARP_.call(null,topic)))){
return p1__14993_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14993_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14997(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13712__auto___16459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15082){
var state_val_15083 = (state_15082[(1)]);
if((state_val_15083 === (7))){
var inst_15077 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
var statearr_15084_16461 = state_15082__$1;
(statearr_15084_16461[(2)] = inst_15077);

(statearr_15084_16461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (20))){
var state_15082__$1 = state_15082;
var statearr_15085_16462 = state_15082__$1;
(statearr_15085_16462[(2)] = null);

(statearr_15085_16462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (1))){
var state_15082__$1 = state_15082;
var statearr_15086_16463 = state_15082__$1;
(statearr_15086_16463[(2)] = null);

(statearr_15086_16463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (24))){
var inst_15060 = (state_15082[(7)]);
var inst_15069 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15060);
var state_15082__$1 = state_15082;
var statearr_15087_16466 = state_15082__$1;
(statearr_15087_16466[(2)] = inst_15069);

(statearr_15087_16466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (4))){
var inst_15007 = (state_15082[(8)]);
var inst_15007__$1 = (state_15082[(2)]);
var inst_15008 = (inst_15007__$1 == null);
var state_15082__$1 = (function (){var statearr_15088 = state_15082;
(statearr_15088[(8)] = inst_15007__$1);

return statearr_15088;
})();
if(cljs.core.truth_(inst_15008)){
var statearr_15089_16468 = state_15082__$1;
(statearr_15089_16468[(1)] = (5));

} else {
var statearr_15090_16469 = state_15082__$1;
(statearr_15090_16469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (15))){
var inst_15049 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
var statearr_15092_16470 = state_15082__$1;
(statearr_15092_16470[(2)] = inst_15049);

(statearr_15092_16470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (21))){
var inst_15074 = (state_15082[(2)]);
var state_15082__$1 = (function (){var statearr_15094 = state_15082;
(statearr_15094[(9)] = inst_15074);

return statearr_15094;
})();
var statearr_15095_16471 = state_15082__$1;
(statearr_15095_16471[(2)] = null);

(statearr_15095_16471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (13))){
var inst_15031 = (state_15082[(10)]);
var inst_15033 = cljs.core.chunked_seq_QMARK_(inst_15031);
var state_15082__$1 = state_15082;
if(inst_15033){
var statearr_15096_16472 = state_15082__$1;
(statearr_15096_16472[(1)] = (16));

} else {
var statearr_15097_16474 = state_15082__$1;
(statearr_15097_16474[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (22))){
var inst_15066 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
if(cljs.core.truth_(inst_15066)){
var statearr_15098_16477 = state_15082__$1;
(statearr_15098_16477[(1)] = (23));

} else {
var statearr_15099_16478 = state_15082__$1;
(statearr_15099_16478[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (6))){
var inst_15060 = (state_15082[(7)]);
var inst_15062 = (state_15082[(11)]);
var inst_15007 = (state_15082[(8)]);
var inst_15060__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15007) : topic_fn.call(null,inst_15007));
var inst_15061 = cljs.core.deref(mults);
var inst_15062__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15061,inst_15060__$1);
var state_15082__$1 = (function (){var statearr_15100 = state_15082;
(statearr_15100[(7)] = inst_15060__$1);

(statearr_15100[(11)] = inst_15062__$1);

return statearr_15100;
})();
if(cljs.core.truth_(inst_15062__$1)){
var statearr_15101_16479 = state_15082__$1;
(statearr_15101_16479[(1)] = (19));

} else {
var statearr_15102_16480 = state_15082__$1;
(statearr_15102_16480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (25))){
var inst_15071 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
var statearr_15107_16484 = state_15082__$1;
(statearr_15107_16484[(2)] = inst_15071);

(statearr_15107_16484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (17))){
var inst_15031 = (state_15082[(10)]);
var inst_15040 = cljs.core.first(inst_15031);
var inst_15041 = cljs.core.async.muxch_STAR_(inst_15040);
var inst_15042 = cljs.core.async.close_BANG_(inst_15041);
var inst_15043 = cljs.core.next(inst_15031);
var inst_15017 = inst_15043;
var inst_15018 = null;
var inst_15019 = (0);
var inst_15020 = (0);
var state_15082__$1 = (function (){var statearr_15109 = state_15082;
(statearr_15109[(12)] = inst_15019);

(statearr_15109[(13)] = inst_15042);

(statearr_15109[(14)] = inst_15020);

(statearr_15109[(15)] = inst_15017);

(statearr_15109[(16)] = inst_15018);

return statearr_15109;
})();
var statearr_15110_16485 = state_15082__$1;
(statearr_15110_16485[(2)] = null);

(statearr_15110_16485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (3))){
var inst_15079 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15082__$1,inst_15079);
} else {
if((state_val_15083 === (12))){
var inst_15052 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
var statearr_15111_16486 = state_15082__$1;
(statearr_15111_16486[(2)] = inst_15052);

(statearr_15111_16486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (2))){
var state_15082__$1 = state_15082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15082__$1,(4),ch);
} else {
if((state_val_15083 === (23))){
var state_15082__$1 = state_15082;
var statearr_15112_16487 = state_15082__$1;
(statearr_15112_16487[(2)] = null);

(statearr_15112_16487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (19))){
var inst_15062 = (state_15082[(11)]);
var inst_15007 = (state_15082[(8)]);
var inst_15064 = cljs.core.async.muxch_STAR_(inst_15062);
var state_15082__$1 = state_15082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15082__$1,(22),inst_15064,inst_15007);
} else {
if((state_val_15083 === (11))){
var inst_15017 = (state_15082[(15)]);
var inst_15031 = (state_15082[(10)]);
var inst_15031__$1 = cljs.core.seq(inst_15017);
var state_15082__$1 = (function (){var statearr_15113 = state_15082;
(statearr_15113[(10)] = inst_15031__$1);

return statearr_15113;
})();
if(inst_15031__$1){
var statearr_15114_16488 = state_15082__$1;
(statearr_15114_16488[(1)] = (13));

} else {
var statearr_15115_16489 = state_15082__$1;
(statearr_15115_16489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (9))){
var inst_15054 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
var statearr_15116_16490 = state_15082__$1;
(statearr_15116_16490[(2)] = inst_15054);

(statearr_15116_16490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (5))){
var inst_15014 = cljs.core.deref(mults);
var inst_15015 = cljs.core.vals(inst_15014);
var inst_15016 = cljs.core.seq(inst_15015);
var inst_15017 = inst_15016;
var inst_15018 = null;
var inst_15019 = (0);
var inst_15020 = (0);
var state_15082__$1 = (function (){var statearr_15117 = state_15082;
(statearr_15117[(12)] = inst_15019);

(statearr_15117[(14)] = inst_15020);

(statearr_15117[(15)] = inst_15017);

(statearr_15117[(16)] = inst_15018);

return statearr_15117;
})();
var statearr_15118_16491 = state_15082__$1;
(statearr_15118_16491[(2)] = null);

(statearr_15118_16491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (14))){
var state_15082__$1 = state_15082;
var statearr_15122_16492 = state_15082__$1;
(statearr_15122_16492[(2)] = null);

(statearr_15122_16492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (16))){
var inst_15031 = (state_15082[(10)]);
var inst_15035 = cljs.core.chunk_first(inst_15031);
var inst_15036 = cljs.core.chunk_rest(inst_15031);
var inst_15037 = cljs.core.count(inst_15035);
var inst_15017 = inst_15036;
var inst_15018 = inst_15035;
var inst_15019 = inst_15037;
var inst_15020 = (0);
var state_15082__$1 = (function (){var statearr_15123 = state_15082;
(statearr_15123[(12)] = inst_15019);

(statearr_15123[(14)] = inst_15020);

(statearr_15123[(15)] = inst_15017);

(statearr_15123[(16)] = inst_15018);

return statearr_15123;
})();
var statearr_15126_16493 = state_15082__$1;
(statearr_15126_16493[(2)] = null);

(statearr_15126_16493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (10))){
var inst_15019 = (state_15082[(12)]);
var inst_15020 = (state_15082[(14)]);
var inst_15017 = (state_15082[(15)]);
var inst_15018 = (state_15082[(16)]);
var inst_15025 = cljs.core._nth(inst_15018,inst_15020);
var inst_15026 = cljs.core.async.muxch_STAR_(inst_15025);
var inst_15027 = cljs.core.async.close_BANG_(inst_15026);
var inst_15028 = (inst_15020 + (1));
var tmp15119 = inst_15019;
var tmp15120 = inst_15017;
var tmp15121 = inst_15018;
var inst_15017__$1 = tmp15120;
var inst_15018__$1 = tmp15121;
var inst_15019__$1 = tmp15119;
var inst_15020__$1 = inst_15028;
var state_15082__$1 = (function (){var statearr_15127 = state_15082;
(statearr_15127[(12)] = inst_15019__$1);

(statearr_15127[(17)] = inst_15027);

(statearr_15127[(14)] = inst_15020__$1);

(statearr_15127[(15)] = inst_15017__$1);

(statearr_15127[(16)] = inst_15018__$1);

return statearr_15127;
})();
var statearr_15128_16494 = state_15082__$1;
(statearr_15128_16494[(2)] = null);

(statearr_15128_16494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (18))){
var inst_15046 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
var statearr_15129_16495 = state_15082__$1;
(statearr_15129_16495[(2)] = inst_15046);

(statearr_15129_16495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (8))){
var inst_15019 = (state_15082[(12)]);
var inst_15020 = (state_15082[(14)]);
var inst_15022 = (inst_15020 < inst_15019);
var inst_15023 = inst_15022;
var state_15082__$1 = state_15082;
if(cljs.core.truth_(inst_15023)){
var statearr_15130_16496 = state_15082__$1;
(statearr_15130_16496[(1)] = (10));

} else {
var statearr_15131_16497 = state_15082__$1;
(statearr_15131_16497[(1)] = (11));

}

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
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_15133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15133[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_15133[(1)] = (1));

return statearr_15133;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_15082){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15082);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15134){var ex__10987__auto__ = e15134;
var statearr_15135_16498 = state_15082;
(statearr_15135_16498[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15082[(4)]))){
var statearr_15136_16499 = state_15082;
(statearr_15136_16499[(1)] = cljs.core.first((state_15082[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16500 = state_15082;
state_15082 = G__16500;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_15082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_15082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15137 = f__13713__auto__();
(statearr_15137[(6)] = c__13712__auto___16459);

return statearr_15137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15139 = arguments.length;
switch (G__15139) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15144 = arguments.length;
switch (G__15144) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15146 = arguments.length;
switch (G__15146) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13712__auto___16504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15191){
var state_val_15192 = (state_15191[(1)]);
if((state_val_15192 === (7))){
var state_15191__$1 = state_15191;
var statearr_15193_16507 = state_15191__$1;
(statearr_15193_16507[(2)] = null);

(statearr_15193_16507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (1))){
var state_15191__$1 = state_15191;
var statearr_15194_16508 = state_15191__$1;
(statearr_15194_16508[(2)] = null);

(statearr_15194_16508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (4))){
var inst_15151 = (state_15191[(7)]);
var inst_15152 = (state_15191[(8)]);
var inst_15154 = (inst_15152 < inst_15151);
var state_15191__$1 = state_15191;
if(cljs.core.truth_(inst_15154)){
var statearr_15195_16511 = state_15191__$1;
(statearr_15195_16511[(1)] = (6));

} else {
var statearr_15196_16512 = state_15191__$1;
(statearr_15196_16512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (15))){
var inst_15177 = (state_15191[(9)]);
var inst_15182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15177);
var state_15191__$1 = state_15191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15191__$1,(17),out,inst_15182);
} else {
if((state_val_15192 === (13))){
var inst_15177 = (state_15191[(9)]);
var inst_15177__$1 = (state_15191[(2)]);
var inst_15178 = cljs.core.some(cljs.core.nil_QMARK_,inst_15177__$1);
var state_15191__$1 = (function (){var statearr_15197 = state_15191;
(statearr_15197[(9)] = inst_15177__$1);

return statearr_15197;
})();
if(cljs.core.truth_(inst_15178)){
var statearr_15198_16513 = state_15191__$1;
(statearr_15198_16513[(1)] = (14));

} else {
var statearr_15199_16516 = state_15191__$1;
(statearr_15199_16516[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (6))){
var state_15191__$1 = state_15191;
var statearr_15200_16517 = state_15191__$1;
(statearr_15200_16517[(2)] = null);

(statearr_15200_16517[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (17))){
var inst_15184 = (state_15191[(2)]);
var state_15191__$1 = (function (){var statearr_15206 = state_15191;
(statearr_15206[(10)] = inst_15184);

return statearr_15206;
})();
var statearr_15207_16518 = state_15191__$1;
(statearr_15207_16518[(2)] = null);

(statearr_15207_16518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (3))){
var inst_15189 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15191__$1,inst_15189);
} else {
if((state_val_15192 === (12))){
var _ = (function (){var statearr_15208 = state_15191;
(statearr_15208[(4)] = cljs.core.rest((state_15191[(4)])));

return statearr_15208;
})();
var state_15191__$1 = state_15191;
var ex15201 = (state_15191__$1[(2)]);
var statearr_15209_16519 = state_15191__$1;
(statearr_15209_16519[(5)] = ex15201);


if((ex15201 instanceof Object)){
var statearr_15210_16520 = state_15191__$1;
(statearr_15210_16520[(1)] = (11));

(statearr_15210_16520[(5)] = null);

} else {
throw ex15201;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (2))){
var inst_15150 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15151 = cnt;
var inst_15152 = (0);
var state_15191__$1 = (function (){var statearr_15215 = state_15191;
(statearr_15215[(7)] = inst_15151);

(statearr_15215[(11)] = inst_15150);

(statearr_15215[(8)] = inst_15152);

return statearr_15215;
})();
var statearr_15216_16521 = state_15191__$1;
(statearr_15216_16521[(2)] = null);

(statearr_15216_16521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (11))){
var inst_15156 = (state_15191[(2)]);
var inst_15157 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15191__$1 = (function (){var statearr_15219 = state_15191;
(statearr_15219[(12)] = inst_15156);

return statearr_15219;
})();
var statearr_15220_16522 = state_15191__$1;
(statearr_15220_16522[(2)] = inst_15157);

(statearr_15220_16522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (9))){
var inst_15152 = (state_15191[(8)]);
var _ = (function (){var statearr_15221 = state_15191;
(statearr_15221[(4)] = cljs.core.cons((12),(state_15191[(4)])));

return statearr_15221;
})();
var inst_15163 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15152) : chs__$1.call(null,inst_15152));
var inst_15164 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15152) : done.call(null,inst_15152));
var inst_15165 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15163,inst_15164);
var ___$1 = (function (){var statearr_15222 = state_15191;
(statearr_15222[(4)] = cljs.core.rest((state_15191[(4)])));

return statearr_15222;
})();
var state_15191__$1 = state_15191;
var statearr_15223_16523 = state_15191__$1;
(statearr_15223_16523[(2)] = inst_15165);

(statearr_15223_16523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (5))){
var inst_15175 = (state_15191[(2)]);
var state_15191__$1 = (function (){var statearr_15224 = state_15191;
(statearr_15224[(13)] = inst_15175);

return statearr_15224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15191__$1,(13),dchan);
} else {
if((state_val_15192 === (14))){
var inst_15180 = cljs.core.async.close_BANG_(out);
var state_15191__$1 = state_15191;
var statearr_15227_16524 = state_15191__$1;
(statearr_15227_16524[(2)] = inst_15180);

(statearr_15227_16524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (16))){
var inst_15187 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15228_16525 = state_15191__$1;
(statearr_15228_16525[(2)] = inst_15187);

(statearr_15228_16525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (10))){
var inst_15152 = (state_15191[(8)]);
var inst_15168 = (state_15191[(2)]);
var inst_15169 = (inst_15152 + (1));
var inst_15152__$1 = inst_15169;
var state_15191__$1 = (function (){var statearr_15229 = state_15191;
(statearr_15229[(14)] = inst_15168);

(statearr_15229[(8)] = inst_15152__$1);

return statearr_15229;
})();
var statearr_15230_16526 = state_15191__$1;
(statearr_15230_16526[(2)] = null);

(statearr_15230_16526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (8))){
var inst_15173 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15231_16527 = state_15191__$1;
(statearr_15231_16527[(2)] = inst_15173);

(statearr_15231_16527[(1)] = (5));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_15234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15234[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_15234[(1)] = (1));

return statearr_15234;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_15191){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15191);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15236){var ex__10987__auto__ = e15236;
var statearr_15237_16528 = state_15191;
(statearr_15237_16528[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15191[(4)]))){
var statearr_15239_16529 = state_15191;
(statearr_15239_16529[(1)] = cljs.core.first((state_15191[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16530 = state_15191;
state_15191 = G__16530;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_15191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_15191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15240 = f__13713__auto__();
(statearr_15240[(6)] = c__13712__auto___16504);

return statearr_15240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15243 = arguments.length;
switch (G__15243) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13712__auto___16533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15275){
var state_val_15276 = (state_15275[(1)]);
if((state_val_15276 === (7))){
var inst_15255 = (state_15275[(7)]);
var inst_15254 = (state_15275[(8)]);
var inst_15254__$1 = (state_15275[(2)]);
var inst_15255__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15254__$1,(0),null);
var inst_15256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15254__$1,(1),null);
var inst_15257 = (inst_15255__$1 == null);
var state_15275__$1 = (function (){var statearr_15277 = state_15275;
(statearr_15277[(9)] = inst_15256);

(statearr_15277[(7)] = inst_15255__$1);

(statearr_15277[(8)] = inst_15254__$1);

return statearr_15277;
})();
if(cljs.core.truth_(inst_15257)){
var statearr_15278_16535 = state_15275__$1;
(statearr_15278_16535[(1)] = (8));

} else {
var statearr_15279_16536 = state_15275__$1;
(statearr_15279_16536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (1))){
var inst_15244 = cljs.core.vec(chs);
var inst_15245 = inst_15244;
var state_15275__$1 = (function (){var statearr_15280 = state_15275;
(statearr_15280[(10)] = inst_15245);

return statearr_15280;
})();
var statearr_15281_16537 = state_15275__$1;
(statearr_15281_16537[(2)] = null);

(statearr_15281_16537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (4))){
var inst_15245 = (state_15275[(10)]);
var state_15275__$1 = state_15275;
return cljs.core.async.ioc_alts_BANG_(state_15275__$1,(7),inst_15245);
} else {
if((state_val_15276 === (6))){
var inst_15271 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
var statearr_15282_16538 = state_15275__$1;
(statearr_15282_16538[(2)] = inst_15271);

(statearr_15282_16538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (3))){
var inst_15273 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15275__$1,inst_15273);
} else {
if((state_val_15276 === (2))){
var inst_15245 = (state_15275[(10)]);
var inst_15247 = cljs.core.count(inst_15245);
var inst_15248 = (inst_15247 > (0));
var state_15275__$1 = state_15275;
if(cljs.core.truth_(inst_15248)){
var statearr_15285_16539 = state_15275__$1;
(statearr_15285_16539[(1)] = (4));

} else {
var statearr_15286_16540 = state_15275__$1;
(statearr_15286_16540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (11))){
var inst_15245 = (state_15275[(10)]);
var inst_15264 = (state_15275[(2)]);
var tmp15284 = inst_15245;
var inst_15245__$1 = tmp15284;
var state_15275__$1 = (function (){var statearr_15287 = state_15275;
(statearr_15287[(11)] = inst_15264);

(statearr_15287[(10)] = inst_15245__$1);

return statearr_15287;
})();
var statearr_15288_16541 = state_15275__$1;
(statearr_15288_16541[(2)] = null);

(statearr_15288_16541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (9))){
var inst_15255 = (state_15275[(7)]);
var state_15275__$1 = state_15275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15275__$1,(11),out,inst_15255);
} else {
if((state_val_15276 === (5))){
var inst_15269 = cljs.core.async.close_BANG_(out);
var state_15275__$1 = state_15275;
var statearr_15289_16542 = state_15275__$1;
(statearr_15289_16542[(2)] = inst_15269);

(statearr_15289_16542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (10))){
var inst_15267 = (state_15275[(2)]);
var state_15275__$1 = state_15275;
var statearr_15294_16543 = state_15275__$1;
(statearr_15294_16543[(2)] = inst_15267);

(statearr_15294_16543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15276 === (8))){
var inst_15256 = (state_15275[(9)]);
var inst_15255 = (state_15275[(7)]);
var inst_15254 = (state_15275[(8)]);
var inst_15245 = (state_15275[(10)]);
var inst_15259 = (function (){var cs = inst_15245;
var vec__15250 = inst_15254;
var v = inst_15255;
var c = inst_15256;
return (function (p1__15241_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15241_SHARP_);
});
})();
var inst_15260 = cljs.core.filterv(inst_15259,inst_15245);
var inst_15245__$1 = inst_15260;
var state_15275__$1 = (function (){var statearr_15295 = state_15275;
(statearr_15295[(10)] = inst_15245__$1);

return statearr_15295;
})();
var statearr_15296_16544 = state_15275__$1;
(statearr_15296_16544[(2)] = null);

(statearr_15296_16544[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_15297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15297[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_15297[(1)] = (1));

return statearr_15297;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_15275){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15275);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15298){var ex__10987__auto__ = e15298;
var statearr_15299_16545 = state_15275;
(statearr_15299_16545[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15275[(4)]))){
var statearr_15304_16546 = state_15275;
(statearr_15304_16546[(1)] = cljs.core.first((state_15275[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16547 = state_15275;
state_15275 = G__16547;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_15275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_15275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15305 = f__13713__auto__();
(statearr_15305[(6)] = c__13712__auto___16533);

return statearr_15305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15309 = arguments.length;
switch (G__15309) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13712__auto___16550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15334){
var state_val_15336 = (state_15334[(1)]);
if((state_val_15336 === (7))){
var inst_15315 = (state_15334[(7)]);
var inst_15315__$1 = (state_15334[(2)]);
var inst_15316 = (inst_15315__$1 == null);
var inst_15317 = cljs.core.not(inst_15316);
var state_15334__$1 = (function (){var statearr_15337 = state_15334;
(statearr_15337[(7)] = inst_15315__$1);

return statearr_15337;
})();
if(inst_15317){
var statearr_15338_16551 = state_15334__$1;
(statearr_15338_16551[(1)] = (8));

} else {
var statearr_15339_16552 = state_15334__$1;
(statearr_15339_16552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15336 === (1))){
var inst_15310 = (0);
var state_15334__$1 = (function (){var statearr_15340 = state_15334;
(statearr_15340[(8)] = inst_15310);

return statearr_15340;
})();
var statearr_15341_16554 = state_15334__$1;
(statearr_15341_16554[(2)] = null);

(statearr_15341_16554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15336 === (4))){
var state_15334__$1 = state_15334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15334__$1,(7),ch);
} else {
if((state_val_15336 === (6))){
var inst_15329 = (state_15334[(2)]);
var state_15334__$1 = state_15334;
var statearr_15344_16555 = state_15334__$1;
(statearr_15344_16555[(2)] = inst_15329);

(statearr_15344_16555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15336 === (3))){
var inst_15331 = (state_15334[(2)]);
var inst_15332 = cljs.core.async.close_BANG_(out);
var state_15334__$1 = (function (){var statearr_15345 = state_15334;
(statearr_15345[(9)] = inst_15331);

return statearr_15345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15334__$1,inst_15332);
} else {
if((state_val_15336 === (2))){
var inst_15310 = (state_15334[(8)]);
var inst_15312 = (inst_15310 < n);
var state_15334__$1 = state_15334;
if(cljs.core.truth_(inst_15312)){
var statearr_15346_16556 = state_15334__$1;
(statearr_15346_16556[(1)] = (4));

} else {
var statearr_15347_16557 = state_15334__$1;
(statearr_15347_16557[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15336 === (11))){
var inst_15310 = (state_15334[(8)]);
var inst_15321 = (state_15334[(2)]);
var inst_15322 = (inst_15310 + (1));
var inst_15310__$1 = inst_15322;
var state_15334__$1 = (function (){var statearr_15348 = state_15334;
(statearr_15348[(10)] = inst_15321);

(statearr_15348[(8)] = inst_15310__$1);

return statearr_15348;
})();
var statearr_15349_16562 = state_15334__$1;
(statearr_15349_16562[(2)] = null);

(statearr_15349_16562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15336 === (9))){
var state_15334__$1 = state_15334;
var statearr_15350_16563 = state_15334__$1;
(statearr_15350_16563[(2)] = null);

(statearr_15350_16563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15336 === (5))){
var state_15334__$1 = state_15334;
var statearr_15351_16564 = state_15334__$1;
(statearr_15351_16564[(2)] = null);

(statearr_15351_16564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15336 === (10))){
var inst_15326 = (state_15334[(2)]);
var state_15334__$1 = state_15334;
var statearr_15352_16565 = state_15334__$1;
(statearr_15352_16565[(2)] = inst_15326);

(statearr_15352_16565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15336 === (8))){
var inst_15315 = (state_15334[(7)]);
var state_15334__$1 = state_15334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15334__$1,(11),out,inst_15315);
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
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_15353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15353[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_15353[(1)] = (1));

return statearr_15353;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_15334){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15334);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15354){var ex__10987__auto__ = e15354;
var statearr_15355_16566 = state_15334;
(statearr_15355_16566[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15334[(4)]))){
var statearr_15356_16567 = state_15334;
(statearr_15356_16567[(1)] = cljs.core.first((state_15334[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16568 = state_15334;
state_15334 = G__16568;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_15334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_15334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15357 = f__13713__auto__();
(statearr_15357[(6)] = c__13712__auto___16550);

return statearr_15357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15362 = (function (f,ch,meta15360,_,fn1,meta15363){
this.f = f;
this.ch = ch;
this.meta15360 = meta15360;
this._ = _;
this.fn1 = fn1;
this.meta15363 = meta15363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15364,meta15363__$1){
var self__ = this;
var _15364__$1 = this;
return (new cljs.core.async.t_cljs$core$async15362(self__.f,self__.ch,self__.meta15360,self__._,self__.fn1,meta15363__$1));
}));

(cljs.core.async.t_cljs$core$async15362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15364){
var self__ = this;
var _15364__$1 = this;
return self__.meta15363;
}));

(cljs.core.async.t_cljs$core$async15362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15358_SHARP_){
var G__15365 = (((p1__15358_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15358_SHARP_) : self__.f.call(null,p1__15358_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15365) : f1.call(null,G__15365));
});
}));

(cljs.core.async.t_cljs$core$async15362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15360","meta15360",1073284424,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15359","cljs.core.async/t_cljs$core$async15359",2055911384,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15363","meta15363",1550140676,null)], null);
}));

(cljs.core.async.t_cljs$core$async15362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15362");

(cljs.core.async.t_cljs$core$async15362.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15362.
 */
cljs.core.async.__GT_t_cljs$core$async15362 = (function cljs$core$async$__GT_t_cljs$core$async15362(f,ch,meta15360,_,fn1,meta15363){
return (new cljs.core.async.t_cljs$core$async15362(f,ch,meta15360,_,fn1,meta15363));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15359 = (function (f,ch,meta15360){
this.f = f;
this.ch = ch;
this.meta15360 = meta15360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15361,meta15360__$1){
var self__ = this;
var _15361__$1 = this;
return (new cljs.core.async.t_cljs$core$async15359(self__.f,self__.ch,meta15360__$1));
}));

(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15361){
var self__ = this;
var _15361__$1 = this;
return self__.meta15360;
}));

(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15362(self__.f,self__.ch,self__.meta15360,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15367 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15367) : self__.f.call(null,G__15367));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15360","meta15360",1073284424,null)], null);
}));

(cljs.core.async.t_cljs$core$async15359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15359");

(cljs.core.async.t_cljs$core$async15359.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15359.
 */
cljs.core.async.__GT_t_cljs$core$async15359 = (function cljs$core$async$__GT_t_cljs$core$async15359(f,ch,meta15360){
return (new cljs.core.async.t_cljs$core$async15359(f,ch,meta15360));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15359(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15370 = (function (f,ch,meta15371){
this.f = f;
this.ch = ch;
this.meta15371 = meta15371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15372,meta15371__$1){
var self__ = this;
var _15372__$1 = this;
return (new cljs.core.async.t_cljs$core$async15370(self__.f,self__.ch,meta15371__$1));
}));

(cljs.core.async.t_cljs$core$async15370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15372){
var self__ = this;
var _15372__$1 = this;
return self__.meta15371;
}));

(cljs.core.async.t_cljs$core$async15370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15371","meta15371",-333541539,null)], null);
}));

(cljs.core.async.t_cljs$core$async15370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15370");

(cljs.core.async.t_cljs$core$async15370.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15370.
 */
cljs.core.async.__GT_t_cljs$core$async15370 = (function cljs$core$async$__GT_t_cljs$core$async15370(f,ch,meta15371){
return (new cljs.core.async.t_cljs$core$async15370(f,ch,meta15371));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15378 = (function (p,ch,meta15379){
this.p = p;
this.ch = ch;
this.meta15379 = meta15379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15380,meta15379__$1){
var self__ = this;
var _15380__$1 = this;
return (new cljs.core.async.t_cljs$core$async15378(self__.p,self__.ch,meta15379__$1));
}));

(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15380){
var self__ = this;
var _15380__$1 = this;
return self__.meta15379;
}));

(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15379","meta15379",1914710632,null)], null);
}));

(cljs.core.async.t_cljs$core$async15378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15378");

(cljs.core.async.t_cljs$core$async15378.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15378.
 */
cljs.core.async.__GT_t_cljs$core$async15378 = (function cljs$core$async$__GT_t_cljs$core$async15378(p,ch,meta15379){
return (new cljs.core.async.t_cljs$core$async15378(p,ch,meta15379));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15378(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15385 = arguments.length;
switch (G__15385) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13712__auto___16572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15406){
var state_val_15407 = (state_15406[(1)]);
if((state_val_15407 === (7))){
var inst_15402 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
var statearr_15408_16573 = state_15406__$1;
(statearr_15408_16573[(2)] = inst_15402);

(statearr_15408_16573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (1))){
var state_15406__$1 = state_15406;
var statearr_15409_16574 = state_15406__$1;
(statearr_15409_16574[(2)] = null);

(statearr_15409_16574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (4))){
var inst_15388 = (state_15406[(7)]);
var inst_15388__$1 = (state_15406[(2)]);
var inst_15389 = (inst_15388__$1 == null);
var state_15406__$1 = (function (){var statearr_15410 = state_15406;
(statearr_15410[(7)] = inst_15388__$1);

return statearr_15410;
})();
if(cljs.core.truth_(inst_15389)){
var statearr_15411_16575 = state_15406__$1;
(statearr_15411_16575[(1)] = (5));

} else {
var statearr_15412_16576 = state_15406__$1;
(statearr_15412_16576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (6))){
var inst_15388 = (state_15406[(7)]);
var inst_15393 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15388) : p.call(null,inst_15388));
var state_15406__$1 = state_15406;
if(cljs.core.truth_(inst_15393)){
var statearr_15413_16577 = state_15406__$1;
(statearr_15413_16577[(1)] = (8));

} else {
var statearr_15414_16578 = state_15406__$1;
(statearr_15414_16578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (3))){
var inst_15404 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15406__$1,inst_15404);
} else {
if((state_val_15407 === (2))){
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15406__$1,(4),ch);
} else {
if((state_val_15407 === (11))){
var inst_15396 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
var statearr_15416_16580 = state_15406__$1;
(statearr_15416_16580[(2)] = inst_15396);

(statearr_15416_16580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (9))){
var state_15406__$1 = state_15406;
var statearr_15418_16581 = state_15406__$1;
(statearr_15418_16581[(2)] = null);

(statearr_15418_16581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (5))){
var inst_15391 = cljs.core.async.close_BANG_(out);
var state_15406__$1 = state_15406;
var statearr_15419_16583 = state_15406__$1;
(statearr_15419_16583[(2)] = inst_15391);

(statearr_15419_16583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (10))){
var inst_15399 = (state_15406[(2)]);
var state_15406__$1 = (function (){var statearr_15420 = state_15406;
(statearr_15420[(8)] = inst_15399);

return statearr_15420;
})();
var statearr_15421_16584 = state_15406__$1;
(statearr_15421_16584[(2)] = null);

(statearr_15421_16584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (8))){
var inst_15388 = (state_15406[(7)]);
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15406__$1,(11),out,inst_15388);
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
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_15422 = [null,null,null,null,null,null,null,null,null];
(statearr_15422[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_15422[(1)] = (1));

return statearr_15422;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_15406){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15406);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15423){var ex__10987__auto__ = e15423;
var statearr_15424_16585 = state_15406;
(statearr_15424_16585[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15406[(4)]))){
var statearr_15425_16586 = state_15406;
(statearr_15425_16586[(1)] = cljs.core.first((state_15406[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16587 = state_15406;
state_15406 = G__16587;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_15406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_15406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15426 = f__13713__auto__();
(statearr_15426[(6)] = c__13712__auto___16572);

return statearr_15426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15428 = arguments.length;
switch (G__15428) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15496){
var state_val_15497 = (state_15496[(1)]);
if((state_val_15497 === (7))){
var inst_15489 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15502_16589 = state_15496__$1;
(statearr_15502_16589[(2)] = inst_15489);

(statearr_15502_16589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (20))){
var inst_15457 = (state_15496[(7)]);
var inst_15469 = (state_15496[(2)]);
var inst_15470 = cljs.core.next(inst_15457);
var inst_15442 = inst_15470;
var inst_15443 = null;
var inst_15444 = (0);
var inst_15445 = (0);
var state_15496__$1 = (function (){var statearr_15503 = state_15496;
(statearr_15503[(8)] = inst_15442);

(statearr_15503[(9)] = inst_15444);

(statearr_15503[(10)] = inst_15445);

(statearr_15503[(11)] = inst_15469);

(statearr_15503[(12)] = inst_15443);

return statearr_15503;
})();
var statearr_15504_16592 = state_15496__$1;
(statearr_15504_16592[(2)] = null);

(statearr_15504_16592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (1))){
var state_15496__$1 = state_15496;
var statearr_15505_16593 = state_15496__$1;
(statearr_15505_16593[(2)] = null);

(statearr_15505_16593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (4))){
var inst_15431 = (state_15496[(13)]);
var inst_15431__$1 = (state_15496[(2)]);
var inst_15432 = (inst_15431__$1 == null);
var state_15496__$1 = (function (){var statearr_15507 = state_15496;
(statearr_15507[(13)] = inst_15431__$1);

return statearr_15507;
})();
if(cljs.core.truth_(inst_15432)){
var statearr_15508_16594 = state_15496__$1;
(statearr_15508_16594[(1)] = (5));

} else {
var statearr_15510_16595 = state_15496__$1;
(statearr_15510_16595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (15))){
var state_15496__$1 = state_15496;
var statearr_15514_16596 = state_15496__$1;
(statearr_15514_16596[(2)] = null);

(statearr_15514_16596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (21))){
var state_15496__$1 = state_15496;
var statearr_15515_16597 = state_15496__$1;
(statearr_15515_16597[(2)] = null);

(statearr_15515_16597[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (13))){
var inst_15442 = (state_15496[(8)]);
var inst_15444 = (state_15496[(9)]);
var inst_15445 = (state_15496[(10)]);
var inst_15443 = (state_15496[(12)]);
var inst_15453 = (state_15496[(2)]);
var inst_15454 = (inst_15445 + (1));
var tmp15511 = inst_15442;
var tmp15512 = inst_15444;
var tmp15513 = inst_15443;
var inst_15442__$1 = tmp15511;
var inst_15443__$1 = tmp15513;
var inst_15444__$1 = tmp15512;
var inst_15445__$1 = inst_15454;
var state_15496__$1 = (function (){var statearr_15517 = state_15496;
(statearr_15517[(14)] = inst_15453);

(statearr_15517[(8)] = inst_15442__$1);

(statearr_15517[(9)] = inst_15444__$1);

(statearr_15517[(10)] = inst_15445__$1);

(statearr_15517[(12)] = inst_15443__$1);

return statearr_15517;
})();
var statearr_15518_16598 = state_15496__$1;
(statearr_15518_16598[(2)] = null);

(statearr_15518_16598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (22))){
var state_15496__$1 = state_15496;
var statearr_15519_16599 = state_15496__$1;
(statearr_15519_16599[(2)] = null);

(statearr_15519_16599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (6))){
var inst_15431 = (state_15496[(13)]);
var inst_15440 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15431) : f.call(null,inst_15431));
var inst_15441 = cljs.core.seq(inst_15440);
var inst_15442 = inst_15441;
var inst_15443 = null;
var inst_15444 = (0);
var inst_15445 = (0);
var state_15496__$1 = (function (){var statearr_15520 = state_15496;
(statearr_15520[(8)] = inst_15442);

(statearr_15520[(9)] = inst_15444);

(statearr_15520[(10)] = inst_15445);

(statearr_15520[(12)] = inst_15443);

return statearr_15520;
})();
var statearr_15521_16600 = state_15496__$1;
(statearr_15521_16600[(2)] = null);

(statearr_15521_16600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (17))){
var inst_15457 = (state_15496[(7)]);
var inst_15462 = cljs.core.chunk_first(inst_15457);
var inst_15463 = cljs.core.chunk_rest(inst_15457);
var inst_15464 = cljs.core.count(inst_15462);
var inst_15442 = inst_15463;
var inst_15443 = inst_15462;
var inst_15444 = inst_15464;
var inst_15445 = (0);
var state_15496__$1 = (function (){var statearr_15522 = state_15496;
(statearr_15522[(8)] = inst_15442);

(statearr_15522[(9)] = inst_15444);

(statearr_15522[(10)] = inst_15445);

(statearr_15522[(12)] = inst_15443);

return statearr_15522;
})();
var statearr_15523_16601 = state_15496__$1;
(statearr_15523_16601[(2)] = null);

(statearr_15523_16601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (3))){
var inst_15491 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15496__$1,inst_15491);
} else {
if((state_val_15497 === (12))){
var inst_15478 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15524_16604 = state_15496__$1;
(statearr_15524_16604[(2)] = inst_15478);

(statearr_15524_16604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (2))){
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15496__$1,(4),in$);
} else {
if((state_val_15497 === (23))){
var inst_15486 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15525_16605 = state_15496__$1;
(statearr_15525_16605[(2)] = inst_15486);

(statearr_15525_16605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (19))){
var inst_15473 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15526_16606 = state_15496__$1;
(statearr_15526_16606[(2)] = inst_15473);

(statearr_15526_16606[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (11))){
var inst_15442 = (state_15496[(8)]);
var inst_15457 = (state_15496[(7)]);
var inst_15457__$1 = cljs.core.seq(inst_15442);
var state_15496__$1 = (function (){var statearr_15527 = state_15496;
(statearr_15527[(7)] = inst_15457__$1);

return statearr_15527;
})();
if(inst_15457__$1){
var statearr_15528_16607 = state_15496__$1;
(statearr_15528_16607[(1)] = (14));

} else {
var statearr_15529_16608 = state_15496__$1;
(statearr_15529_16608[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (9))){
var inst_15480 = (state_15496[(2)]);
var inst_15481 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15496__$1 = (function (){var statearr_15530 = state_15496;
(statearr_15530[(15)] = inst_15480);

return statearr_15530;
})();
if(cljs.core.truth_(inst_15481)){
var statearr_15531_16610 = state_15496__$1;
(statearr_15531_16610[(1)] = (21));

} else {
var statearr_15532_16614 = state_15496__$1;
(statearr_15532_16614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (5))){
var inst_15434 = cljs.core.async.close_BANG_(out);
var state_15496__$1 = state_15496;
var statearr_15533_16615 = state_15496__$1;
(statearr_15533_16615[(2)] = inst_15434);

(statearr_15533_16615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (14))){
var inst_15457 = (state_15496[(7)]);
var inst_15460 = cljs.core.chunked_seq_QMARK_(inst_15457);
var state_15496__$1 = state_15496;
if(inst_15460){
var statearr_15534_16616 = state_15496__$1;
(statearr_15534_16616[(1)] = (17));

} else {
var statearr_15535_16617 = state_15496__$1;
(statearr_15535_16617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (16))){
var inst_15476 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15536_16618 = state_15496__$1;
(statearr_15536_16618[(2)] = inst_15476);

(statearr_15536_16618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (10))){
var inst_15445 = (state_15496[(10)]);
var inst_15443 = (state_15496[(12)]);
var inst_15451 = cljs.core._nth(inst_15443,inst_15445);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15496__$1,(13),out,inst_15451);
} else {
if((state_val_15497 === (18))){
var inst_15457 = (state_15496[(7)]);
var inst_15467 = cljs.core.first(inst_15457);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15496__$1,(20),out,inst_15467);
} else {
if((state_val_15497 === (8))){
var inst_15444 = (state_15496[(9)]);
var inst_15445 = (state_15496[(10)]);
var inst_15448 = (inst_15445 < inst_15444);
var inst_15449 = inst_15448;
var state_15496__$1 = state_15496;
if(cljs.core.truth_(inst_15449)){
var statearr_15537_16619 = state_15496__$1;
(statearr_15537_16619[(1)] = (10));

} else {
var statearr_15538_16620 = state_15496__$1;
(statearr_15538_16620[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__10984__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10984__auto____0 = (function (){
var statearr_15541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15541[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10984__auto__);

(statearr_15541[(1)] = (1));

return statearr_15541;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10984__auto____1 = (function (state_15496){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15496);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15542){var ex__10987__auto__ = e15542;
var statearr_15546_16623 = state_15496;
(statearr_15546_16623[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15496[(4)]))){
var statearr_15547_16624 = state_15496;
(statearr_15547_16624[(1)] = cljs.core.first((state_15496[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16625 = state_15496;
state_15496 = G__16625;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10984__auto__ = function(state_15496){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10984__auto____1.call(this,state_15496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10984__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10984__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15548 = f__13713__auto__();
(statearr_15548[(6)] = c__13712__auto__);

return statearr_15548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));

return c__13712__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15551 = arguments.length;
switch (G__15551) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15554 = arguments.length;
switch (G__15554) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15557 = arguments.length;
switch (G__15557) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13712__auto___16631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15583){
var state_val_15584 = (state_15583[(1)]);
if((state_val_15584 === (7))){
var inst_15578 = (state_15583[(2)]);
var state_15583__$1 = state_15583;
var statearr_15585_16632 = state_15583__$1;
(statearr_15585_16632[(2)] = inst_15578);

(statearr_15585_16632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15584 === (1))){
var inst_15560 = null;
var state_15583__$1 = (function (){var statearr_15586 = state_15583;
(statearr_15586[(7)] = inst_15560);

return statearr_15586;
})();
var statearr_15587_16633 = state_15583__$1;
(statearr_15587_16633[(2)] = null);

(statearr_15587_16633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15584 === (4))){
var inst_15563 = (state_15583[(8)]);
var inst_15563__$1 = (state_15583[(2)]);
var inst_15564 = (inst_15563__$1 == null);
var inst_15565 = cljs.core.not(inst_15564);
var state_15583__$1 = (function (){var statearr_15590 = state_15583;
(statearr_15590[(8)] = inst_15563__$1);

return statearr_15590;
})();
if(inst_15565){
var statearr_15591_16634 = state_15583__$1;
(statearr_15591_16634[(1)] = (5));

} else {
var statearr_15592_16635 = state_15583__$1;
(statearr_15592_16635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15584 === (6))){
var state_15583__$1 = state_15583;
var statearr_15593_16636 = state_15583__$1;
(statearr_15593_16636[(2)] = null);

(statearr_15593_16636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15584 === (3))){
var inst_15580 = (state_15583[(2)]);
var inst_15581 = cljs.core.async.close_BANG_(out);
var state_15583__$1 = (function (){var statearr_15594 = state_15583;
(statearr_15594[(9)] = inst_15580);

return statearr_15594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15583__$1,inst_15581);
} else {
if((state_val_15584 === (2))){
var state_15583__$1 = state_15583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15583__$1,(4),ch);
} else {
if((state_val_15584 === (11))){
var inst_15563 = (state_15583[(8)]);
var inst_15572 = (state_15583[(2)]);
var inst_15560 = inst_15563;
var state_15583__$1 = (function (){var statearr_15595 = state_15583;
(statearr_15595[(7)] = inst_15560);

(statearr_15595[(10)] = inst_15572);

return statearr_15595;
})();
var statearr_15596_16637 = state_15583__$1;
(statearr_15596_16637[(2)] = null);

(statearr_15596_16637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15584 === (9))){
var inst_15563 = (state_15583[(8)]);
var state_15583__$1 = state_15583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15583__$1,(11),out,inst_15563);
} else {
if((state_val_15584 === (5))){
var inst_15560 = (state_15583[(7)]);
var inst_15563 = (state_15583[(8)]);
var inst_15567 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15563,inst_15560);
var state_15583__$1 = state_15583;
if(inst_15567){
var statearr_15598_16638 = state_15583__$1;
(statearr_15598_16638[(1)] = (8));

} else {
var statearr_15599_16639 = state_15583__$1;
(statearr_15599_16639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15584 === (10))){
var inst_15575 = (state_15583[(2)]);
var state_15583__$1 = state_15583;
var statearr_15600_16640 = state_15583__$1;
(statearr_15600_16640[(2)] = inst_15575);

(statearr_15600_16640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15584 === (8))){
var inst_15560 = (state_15583[(7)]);
var tmp15597 = inst_15560;
var inst_15560__$1 = tmp15597;
var state_15583__$1 = (function (){var statearr_15601 = state_15583;
(statearr_15601[(7)] = inst_15560__$1);

return statearr_15601;
})();
var statearr_15603_16641 = state_15583__$1;
(statearr_15603_16641[(2)] = null);

(statearr_15603_16641[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_15604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15604[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_15604[(1)] = (1));

return statearr_15604;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_15583){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15583);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15605){var ex__10987__auto__ = e15605;
var statearr_15606_16642 = state_15583;
(statearr_15606_16642[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15583[(4)]))){
var statearr_15607_16643 = state_15583;
(statearr_15607_16643[(1)] = cljs.core.first((state_15583[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16644 = state_15583;
state_15583 = G__16644;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_15583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_15583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15609 = f__13713__auto__();
(statearr_15609[(6)] = c__13712__auto___16631);

return statearr_15609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15614 = arguments.length;
switch (G__15614) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13712__auto___16646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15652){
var state_val_15653 = (state_15652[(1)]);
if((state_val_15653 === (7))){
var inst_15648 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15654_16648 = state_15652__$1;
(statearr_15654_16648[(2)] = inst_15648);

(statearr_15654_16648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (1))){
var inst_15615 = (new Array(n));
var inst_15616 = inst_15615;
var inst_15617 = (0);
var state_15652__$1 = (function (){var statearr_15660 = state_15652;
(statearr_15660[(7)] = inst_15616);

(statearr_15660[(8)] = inst_15617);

return statearr_15660;
})();
var statearr_15661_16652 = state_15652__$1;
(statearr_15661_16652[(2)] = null);

(statearr_15661_16652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (4))){
var inst_15620 = (state_15652[(9)]);
var inst_15620__$1 = (state_15652[(2)]);
var inst_15621 = (inst_15620__$1 == null);
var inst_15622 = cljs.core.not(inst_15621);
var state_15652__$1 = (function (){var statearr_15662 = state_15652;
(statearr_15662[(9)] = inst_15620__$1);

return statearr_15662;
})();
if(inst_15622){
var statearr_15663_16653 = state_15652__$1;
(statearr_15663_16653[(1)] = (5));

} else {
var statearr_15664_16654 = state_15652__$1;
(statearr_15664_16654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (15))){
var inst_15642 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15666_16655 = state_15652__$1;
(statearr_15666_16655[(2)] = inst_15642);

(statearr_15666_16655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (13))){
var state_15652__$1 = state_15652;
var statearr_15668_16659 = state_15652__$1;
(statearr_15668_16659[(2)] = null);

(statearr_15668_16659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (6))){
var inst_15617 = (state_15652[(8)]);
var inst_15638 = (inst_15617 > (0));
var state_15652__$1 = state_15652;
if(cljs.core.truth_(inst_15638)){
var statearr_15669_16660 = state_15652__$1;
(statearr_15669_16660[(1)] = (12));

} else {
var statearr_15670_16661 = state_15652__$1;
(statearr_15670_16661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (3))){
var inst_15650 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15652__$1,inst_15650);
} else {
if((state_val_15653 === (12))){
var inst_15616 = (state_15652[(7)]);
var inst_15640 = cljs.core.vec(inst_15616);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15652__$1,(15),out,inst_15640);
} else {
if((state_val_15653 === (2))){
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15652__$1,(4),ch);
} else {
if((state_val_15653 === (11))){
var inst_15632 = (state_15652[(2)]);
var inst_15633 = (new Array(n));
var inst_15616 = inst_15633;
var inst_15617 = (0);
var state_15652__$1 = (function (){var statearr_15671 = state_15652;
(statearr_15671[(7)] = inst_15616);

(statearr_15671[(8)] = inst_15617);

(statearr_15671[(10)] = inst_15632);

return statearr_15671;
})();
var statearr_15672_16662 = state_15652__$1;
(statearr_15672_16662[(2)] = null);

(statearr_15672_16662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (9))){
var inst_15616 = (state_15652[(7)]);
var inst_15630 = cljs.core.vec(inst_15616);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15652__$1,(11),out,inst_15630);
} else {
if((state_val_15653 === (5))){
var inst_15616 = (state_15652[(7)]);
var inst_15617 = (state_15652[(8)]);
var inst_15620 = (state_15652[(9)]);
var inst_15625 = (state_15652[(11)]);
var inst_15624 = (inst_15616[inst_15617] = inst_15620);
var inst_15625__$1 = (inst_15617 + (1));
var inst_15626 = (inst_15625__$1 < n);
var state_15652__$1 = (function (){var statearr_15673 = state_15652;
(statearr_15673[(11)] = inst_15625__$1);

(statearr_15673[(12)] = inst_15624);

return statearr_15673;
})();
if(cljs.core.truth_(inst_15626)){
var statearr_15674_16663 = state_15652__$1;
(statearr_15674_16663[(1)] = (8));

} else {
var statearr_15675_16664 = state_15652__$1;
(statearr_15675_16664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (14))){
var inst_15645 = (state_15652[(2)]);
var inst_15646 = cljs.core.async.close_BANG_(out);
var state_15652__$1 = (function (){var statearr_15677 = state_15652;
(statearr_15677[(13)] = inst_15645);

return statearr_15677;
})();
var statearr_15678_16665 = state_15652__$1;
(statearr_15678_16665[(2)] = inst_15646);

(statearr_15678_16665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (10))){
var inst_15636 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15679_16666 = state_15652__$1;
(statearr_15679_16666[(2)] = inst_15636);

(statearr_15679_16666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (8))){
var inst_15616 = (state_15652[(7)]);
var inst_15625 = (state_15652[(11)]);
var tmp15676 = inst_15616;
var inst_15616__$1 = tmp15676;
var inst_15617 = inst_15625;
var state_15652__$1 = (function (){var statearr_15680 = state_15652;
(statearr_15680[(7)] = inst_15616__$1);

(statearr_15680[(8)] = inst_15617);

return statearr_15680;
})();
var statearr_15681_16667 = state_15652__$1;
(statearr_15681_16667[(2)] = null);

(statearr_15681_16667[(1)] = (2));


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
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_15682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15682[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_15682[(1)] = (1));

return statearr_15682;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_15652){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15652);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15683){var ex__10987__auto__ = e15683;
var statearr_15684_16668 = state_15652;
(statearr_15684_16668[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15652[(4)]))){
var statearr_15685_16671 = state_15652;
(statearr_15685_16671[(1)] = cljs.core.first((state_15652[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16672 = state_15652;
state_15652 = G__16672;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15687 = f__13713__auto__();
(statearr_15687[(6)] = c__13712__auto___16646);

return statearr_15687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15689 = arguments.length;
switch (G__15689) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13712__auto___16674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13713__auto__ = (function (){var switch__10983__auto__ = (function (state_15736){
var state_val_15737 = (state_15736[(1)]);
if((state_val_15737 === (7))){
var inst_15731 = (state_15736[(2)]);
var state_15736__$1 = state_15736;
var statearr_15739_16676 = state_15736__$1;
(statearr_15739_16676[(2)] = inst_15731);

(statearr_15739_16676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (1))){
var inst_15691 = [];
var inst_15692 = inst_15691;
var inst_15693 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15736__$1 = (function (){var statearr_15740 = state_15736;
(statearr_15740[(7)] = inst_15692);

(statearr_15740[(8)] = inst_15693);

return statearr_15740;
})();
var statearr_15741_16680 = state_15736__$1;
(statearr_15741_16680[(2)] = null);

(statearr_15741_16680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (4))){
var inst_15696 = (state_15736[(9)]);
var inst_15696__$1 = (state_15736[(2)]);
var inst_15697 = (inst_15696__$1 == null);
var inst_15698 = cljs.core.not(inst_15697);
var state_15736__$1 = (function (){var statearr_15742 = state_15736;
(statearr_15742[(9)] = inst_15696__$1);

return statearr_15742;
})();
if(inst_15698){
var statearr_15743_16681 = state_15736__$1;
(statearr_15743_16681[(1)] = (5));

} else {
var statearr_15744_16682 = state_15736__$1;
(statearr_15744_16682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (15))){
var inst_15692 = (state_15736[(7)]);
var inst_15723 = cljs.core.vec(inst_15692);
var state_15736__$1 = state_15736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15736__$1,(18),out,inst_15723);
} else {
if((state_val_15737 === (13))){
var inst_15718 = (state_15736[(2)]);
var state_15736__$1 = state_15736;
var statearr_15745_16683 = state_15736__$1;
(statearr_15745_16683[(2)] = inst_15718);

(statearr_15745_16683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (6))){
var inst_15692 = (state_15736[(7)]);
var inst_15720 = inst_15692.length;
var inst_15721 = (inst_15720 > (0));
var state_15736__$1 = state_15736;
if(cljs.core.truth_(inst_15721)){
var statearr_15747_16684 = state_15736__$1;
(statearr_15747_16684[(1)] = (15));

} else {
var statearr_15749_16685 = state_15736__$1;
(statearr_15749_16685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (17))){
var inst_15728 = (state_15736[(2)]);
var inst_15729 = cljs.core.async.close_BANG_(out);
var state_15736__$1 = (function (){var statearr_15750 = state_15736;
(statearr_15750[(10)] = inst_15728);

return statearr_15750;
})();
var statearr_15751_16686 = state_15736__$1;
(statearr_15751_16686[(2)] = inst_15729);

(statearr_15751_16686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (3))){
var inst_15733 = (state_15736[(2)]);
var state_15736__$1 = state_15736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15736__$1,inst_15733);
} else {
if((state_val_15737 === (12))){
var inst_15692 = (state_15736[(7)]);
var inst_15711 = cljs.core.vec(inst_15692);
var state_15736__$1 = state_15736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15736__$1,(14),out,inst_15711);
} else {
if((state_val_15737 === (2))){
var state_15736__$1 = state_15736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15736__$1,(4),ch);
} else {
if((state_val_15737 === (11))){
var inst_15700 = (state_15736[(11)]);
var inst_15692 = (state_15736[(7)]);
var inst_15696 = (state_15736[(9)]);
var inst_15708 = inst_15692.push(inst_15696);
var tmp15752 = inst_15692;
var inst_15692__$1 = tmp15752;
var inst_15693 = inst_15700;
var state_15736__$1 = (function (){var statearr_15753 = state_15736;
(statearr_15753[(12)] = inst_15708);

(statearr_15753[(7)] = inst_15692__$1);

(statearr_15753[(8)] = inst_15693);

return statearr_15753;
})();
var statearr_15754_16687 = state_15736__$1;
(statearr_15754_16687[(2)] = null);

(statearr_15754_16687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (9))){
var inst_15693 = (state_15736[(8)]);
var inst_15704 = cljs.core.keyword_identical_QMARK_(inst_15693,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15736__$1 = state_15736;
var statearr_15755_16690 = state_15736__$1;
(statearr_15755_16690[(2)] = inst_15704);

(statearr_15755_16690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (5))){
var inst_15701 = (state_15736[(13)]);
var inst_15700 = (state_15736[(11)]);
var inst_15693 = (state_15736[(8)]);
var inst_15696 = (state_15736[(9)]);
var inst_15700__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15696) : f.call(null,inst_15696));
var inst_15701__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15700__$1,inst_15693);
var state_15736__$1 = (function (){var statearr_15756 = state_15736;
(statearr_15756[(13)] = inst_15701__$1);

(statearr_15756[(11)] = inst_15700__$1);

return statearr_15756;
})();
if(inst_15701__$1){
var statearr_15757_16691 = state_15736__$1;
(statearr_15757_16691[(1)] = (8));

} else {
var statearr_15758_16692 = state_15736__$1;
(statearr_15758_16692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (14))){
var inst_15700 = (state_15736[(11)]);
var inst_15696 = (state_15736[(9)]);
var inst_15713 = (state_15736[(2)]);
var inst_15714 = [];
var inst_15715 = inst_15714.push(inst_15696);
var inst_15692 = inst_15714;
var inst_15693 = inst_15700;
var state_15736__$1 = (function (){var statearr_15759 = state_15736;
(statearr_15759[(14)] = inst_15715);

(statearr_15759[(7)] = inst_15692);

(statearr_15759[(8)] = inst_15693);

(statearr_15759[(15)] = inst_15713);

return statearr_15759;
})();
var statearr_15760_16693 = state_15736__$1;
(statearr_15760_16693[(2)] = null);

(statearr_15760_16693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (16))){
var state_15736__$1 = state_15736;
var statearr_15761_16694 = state_15736__$1;
(statearr_15761_16694[(2)] = null);

(statearr_15761_16694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (10))){
var inst_15706 = (state_15736[(2)]);
var state_15736__$1 = state_15736;
if(cljs.core.truth_(inst_15706)){
var statearr_15762_16695 = state_15736__$1;
(statearr_15762_16695[(1)] = (11));

} else {
var statearr_15763_16696 = state_15736__$1;
(statearr_15763_16696[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (18))){
var inst_15725 = (state_15736[(2)]);
var state_15736__$1 = state_15736;
var statearr_15764_16697 = state_15736__$1;
(statearr_15764_16697[(2)] = inst_15725);

(statearr_15764_16697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (8))){
var inst_15701 = (state_15736[(13)]);
var state_15736__$1 = state_15736;
var statearr_15765_16698 = state_15736__$1;
(statearr_15765_16698[(2)] = inst_15701);

(statearr_15765_16698[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10984__auto__ = null;
var cljs$core$async$state_machine__10984__auto____0 = (function (){
var statearr_15767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15767[(0)] = cljs$core$async$state_machine__10984__auto__);

(statearr_15767[(1)] = (1));

return statearr_15767;
});
var cljs$core$async$state_machine__10984__auto____1 = (function (state_15736){
while(true){
var ret_value__10985__auto__ = (function (){try{while(true){
var result__10986__auto__ = switch__10983__auto__(state_15736);
if(cljs.core.keyword_identical_QMARK_(result__10986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10986__auto__;
}
break;
}
}catch (e15768){var ex__10987__auto__ = e15768;
var statearr_15769_16701 = state_15736;
(statearr_15769_16701[(2)] = ex__10987__auto__);


if(cljs.core.seq((state_15736[(4)]))){
var statearr_15770_16702 = state_15736;
(statearr_15770_16702[(1)] = cljs.core.first((state_15736[(4)])));

} else {
throw ex__10987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16703 = state_15736;
state_15736 = G__16703;
continue;
} else {
return ret_value__10985__auto__;
}
break;
}
});
cljs$core$async$state_machine__10984__auto__ = function(state_15736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10984__auto____1.call(this,state_15736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10984__auto____0;
cljs$core$async$state_machine__10984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10984__auto____1;
return cljs$core$async$state_machine__10984__auto__;
})()
})();
var state__13714__auto__ = (function (){var statearr_15771 = f__13713__auto__();
(statearr_15771[(6)] = c__13712__auto___16674);

return statearr_15771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13714__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
