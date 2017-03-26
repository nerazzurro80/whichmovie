var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Immediate_1 = require('../util/Immediate');
var AsyncAction_1 = require('./AsyncAction');
var AsapScheduler_1 = require('./AsapScheduler');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction() {
        _super.apply(this, arguments);
    }
    return AsapAction;
})(AsyncAction_1.AsyncAction);
exports.AsapAction = AsapAction;
void ;
{
    _super.call(this, scheduler, work);
}
requestAsyncId(scheduler, AsapScheduler_1.AsapScheduler, id ?  : any, delay, number = 0);
any;
{
    // If delay is greater than 0, request as an async action.
    if (delay !== null && delay > 0) {
        return _super.requestAsyncId.call(this, scheduler, id, delay);
    }
    // Push the action to the end of the scheduler queue.
    scheduler.actions.push(this);
    // If a microtask has already been scheduled, don't schedule another
    // one. If a microtask hasn't been scheduled yet, schedule one now. Return
    // the current scheduled microtask id.
    return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
}
recycleAsyncId(scheduler, AsapScheduler_1.AsapScheduler, id ?  : any, delay, number = 0);
any;
{
    // If delay exists and is greater than 0, or if the delay is null (the
    // action wasn't rescheduled) but was originally scheduled as an async
    // action, then recycle as an async action.
    if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
        return _super.recycleAsyncId.call(this, scheduler, id, delay);
    }
    // If the scheduler queue is empty, cancel the requested microtask and
    // set the scheduled flag to undefined so the next AsapAction will schedule
    // its own.
    if (scheduler.actions.length === 0) {
        Immediate_1.Immediate.clearImmediate(id);
        scheduler.scheduled = undefined;
    }
    // Return undefined so the action knows to request a new async id if it's rescheduled.
    return undefined;
}
//# sourceMappingURL=AsapAction.js.map