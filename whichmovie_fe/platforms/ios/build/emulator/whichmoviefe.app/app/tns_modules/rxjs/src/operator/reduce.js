var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var Subscriber_1 = require('../Subscriber');
this;
Observable_1.Observable < T > , accumulator;
function (acc, value, index) { return T; }, seed ?  : T;
Observable_1.Observable();
this;
Observable_1.Observable < T > , accumulator;
function (acc, value, index) { return T[]; }, seed ?  : T[];
Observable_1.Observable();
this;
Observable_1.Observable < T > , accumulator;
function (acc, value, index) { return R; }, seed ?  : R;
Observable_1.Observable();
this;
Observable_1.Observable < T > , accumulator;
function (acc, value) { return R; }, seed ?  : R;
Observable_1.Observable < R > {
    let: hasSeed = false,
    // providing a seed of `undefined` *should* be valid and trigger
    // hasSeed! so don't use `seed !== undefined` checks!
    // For this reason, we have to check it here at the original call site
    // otherwise inside Operator/Subscriber we won't know if `undefined`
    // means they didn't provide anything or if they literally provided `undefined`
    if: function (arguments, length) {
        if (length === void 0) { length =  >= 2; }
        hasSeed = true;
    },
    return: this.lift(new ReduceOperator(accumulator, seed, hasSeed))
};
var ReduceOperator = (function () {
    function ReduceOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ReduceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ReduceSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ReduceOperator;
})();
exports.ReduceOperator = ReduceOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ReduceSubscriber = (function (_super) {
    __extends(ReduceSubscriber, _super);
    function ReduceSubscriber(destination, accumulator, seed, hasSeed) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this.hasSeed = hasSeed;
        this.hasValue = false;
        this.acc = seed;
    }
    ReduceSubscriber.prototype._next = function (value) {
        if (this.hasValue || (this.hasValue = this.hasSeed)) {
            this._tryReduce(value);
        }
        else {
            this.acc = value;
            this.hasValue = true;
        }
    };
    ReduceSubscriber.prototype._tryReduce = function (value) {
        var result;
        try {
            result = this.accumulator(this.acc, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.acc = result;
    };
    ReduceSubscriber.prototype._complete = function () {
        if (this.hasValue || this.hasSeed) {
            this.destination.next(this.acc);
        }
        this.destination.complete();
    };
    return ReduceSubscriber;
})(Subscriber_1.Subscriber);
exports.ReduceSubscriber = ReduceSubscriber;
//# sourceMappingURL=reduce.js.map