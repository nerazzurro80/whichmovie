var _this = this;
var Subscriber_1 = require('./Subscriber');
var Subscription_1 = require('./Subscription');
var root_1 = require('./util/root');
var toSubscriber_1 = require('./util/toSubscriber');
var IfObservable_1 = require('./observable/IfObservable');
var ErrorObservable_1 = require('./observable/ErrorObservable');
var observable_1 = require('./symbol/observable');
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    function Observable() {
        this._isScalar = false;
    }
    return Observable;
})();
exports.Observable = Observable;
{
    if (subscribe) {
        this._subscribe = subscribe;
    }
}
create: Function = function (subscribe) {
    return new Observable(subscribe);
};
/**
 * Creates a new Observable, with this Observable as the source, and the passed
 * operator defined as the new observable's operator.
 * @method lift
 * @param {Operator} operator the operator defining the operation to take on the observable
 * @return {Observable} a new observable with the Operator applied
 */
lift(operator, Operator(), Observable < R > {
    const: observable = new Observable(),
    observable: .source = this,
    observable: .operator = operator,
    return: observable
}, 
/**
 * Registers handlers for handling emitted values, error and completions from the observable, and
 *  executes the observable's subscriber function, which will take action to set up the underlying data stream
 * @method subscribe
 * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
 *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
 * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
 *  the error will be thrown as unhandled
 * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
 * @return {ISubscription} a subscription reference to the registered handlers
 */
subscribe(), Subscription_1.Subscription);
subscribe(observer, PartialObserver(), Subscription_1.Subscription);
subscribe(next ?  : function (value) { return void ; }, error ?  : function (error) { return void ; }, complete ?  : function () { return void ; });
Subscription_1.Subscription;
subscribe(observerOrNext ?  : PartialObserver( | (function (value) { return void ; }), error ?  : function (error) { return void ; }, complete ?  : function () { return void ; }), Subscription_1.Subscription, {
    const: (_a = this, operator = _a.operator, _a),
    const: sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete),
    if: function (operator) {
        operator.call(sink, this.source);
    }, else: {
        sink: .add(this._subscribe(sink))
    },
    if: function (sink, syncErrorThrowable) {
        sink.syncErrorThrowable = false;
        if (sink.syncErrorThrown) {
            throw sink.syncErrorValue;
        }
    },
    return: sink
}, 
/**
 * @method forEach
 * @param {Function} next a handler for each value emitted by the observable
 * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
 * @return {Promise} a promise that either resolves on observable completion or
 *  rejects with the handled error
 */
forEach(next, function (value) { return void ; }, PromiseCtor ?  : typeof Promise), Promise < void  > {
    if: function () { } }, !PromiseCtor);
{
    if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
        PromiseCtor = root_1.root.Rx.config.Promise;
    }
    else if (root_1.root.Promise) {
        PromiseCtor = root_1.root.Promise;
    }
}
if (!PromiseCtor) {
    throw new Error('no Promise impl found');
}
return new PromiseCtor(function (resolve, reject) {
    var subscription = _this.subscribe(function (value) {
        if (subscription) {
            // if there is a subscription, then we can surmise
            // the next handling is asynchronous. Any errors thrown
            // need to be rejected explicitly and unsubscribe must be
            // called manually
            try {
                next(value);
            }
            catch (err) {
                reject(err);
                subscription.unsubscribe();
            }
        }
        else {
            // if there is NO subscription, then we're getting a nexted
            // value synchronously during subscription. We can just call it.
            // If it errors, Observable's `subscribe` will ensure the
            // unsubscription logic is called, then synchronously rethrow the error.
            // After that, Promise will trap the error and send it
            // down the rejection path.
            next(value);
        }
    }, reject, resolve);
});
_subscribe(subscriber, Subscriber_1.Subscriber(), TeardownLogic, {
    return: this.source.subscribe(subscriber)
}, 
// `if` and `throw` are special snow flakes, the compiler sees them as reserved words
static);
if ()
    : typeof IfObservable_1.IfObservable.create;
throw ;
typeof ErrorObservable_1.ErrorObservable.create;
/**
 * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
 * @method Symbol.observable
 * @return {Observable} this instance of the observable
 */
[observable_1.$$observable]();
{
    return this;
}
var _a;
//# sourceMappingURL=Observable.js.map