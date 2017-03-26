var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = require('./AsyncAction');
var Subscription_1 = require('../Subscription');
var QueueScheduler_1 = require('./QueueScheduler');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction() {
        _super.apply(this, arguments);
    }
    return QueueAction;
})(AsyncAction_1.AsyncAction);
exports.QueueAction = QueueAction;
void ;
{
    _super.call(this, scheduler, work);
}
schedule(state ?  : T, delay, number = 0);
Subscription_1.Subscription;
{
    if (delay > 0) {
        return _super.schedule.call(this, state, delay);
    }
    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
}
execute(state, T, delay, number);
any;
{
    return (delay > 0 || this.closed) ?
        _super.execute.call(this, state, delay) :
        this._execute(state, delay);
}
requestAsyncId(scheduler, QueueScheduler_1.QueueScheduler, id ?  : any, delay, number = 0);
any;
{
    // If delay exists and is greater than 0, or if the delay is null (the
    // action wasn't rescheduled) but was originally scheduled as an async
    // action, then recycle as an async action.
    if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
        return _super.requestAsyncId.call(this, scheduler, id, delay);
    }
    // Otherwise flush the scheduler starting with this action.
    return scheduler.flush(this);
}
//# sourceMappingURL=QueueAction.js.map