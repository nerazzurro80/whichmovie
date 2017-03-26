var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Action_1 = require('./Action');
var Subscription_1 = require('../Subscription');
var AsyncScheduler_1 = require('./AsyncScheduler');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction() {
        _super.apply(this, arguments);
        this.pending = false;
    }
    return AsyncAction;
})(Action_1.Action);
exports.AsyncAction = AsyncAction;
void ;
{
    _super.call(this, scheduler, work);
}
schedule(state ?  : T, delay, number = 0);
Subscription_1.Subscription;
{
    if (this.closed) {
        return this;
    }
    // Always replace the current state with the new state.
    this.state = state;
    // Set the pending flag indicating that this action has been scheduled, or
    // has recursively rescheduled itself.
    this.pending = true;
    var id = this.id;
    var scheduler = this.scheduler;
    //
    // Important implementation note:
    //
    // Actions only execute once by default, unless rescheduled from within the
    // scheduled callback. This allows us to implement single and repeat
    // actions via the same code path, without adding API surface area, as well
    // as mimic traditional recursion but across asynchronous boundaries.
    //
    // However, JS runtimes and timers distinguish between intervals achieved by
    // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
    // serial `setTimeout` calls can be individually delayed, which delays
    // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
    // guarantee the interval callback will be invoked more precisely to the
    // interval period, regardless of load.
    //
    // Therefore, we use `setInterval` to schedule single and repeat actions.
    // If the action reschedules itself with the same delay, the interval is not
    // canceled. If the action doesn't reschedule, or reschedules with a
    // different delay, the interval will be canceled after scheduled callback
    // execution.
    //
    if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.delay = delay;
    // If this action has already an async Id, don't request a new one.
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
}
requestAsyncId(scheduler, AsyncScheduler_1.AsyncScheduler, id ?  : any, delay, number = 0);
any;
{
    return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
}
recycleAsyncId(scheduler, AsyncScheduler_1.AsyncScheduler, id, any, delay, number = 0);
any;
{
    // If this action is rescheduled with the same delay time, don't clear the interval id.
    if (delay !== null && this.delay === delay) {
        return id;
    }
    // Otherwise, if the action's delay time is different from the current delay,
    // clear the interval id
    return root_1.root.clearInterval(id) && undefined || undefined;
}
execute(state, T, delay, number);
any;
{
    if (this.closed) {
        return new Error('executing a cancelled action');
    }
    this.pending = false;
    var error = this._execute(state, delay);
    if (error) {
        return error;
    }
    else if (this.pending === false && this.id != null) {
        // Dequeue if the action didn't reschedule itself. Don't call
        // unsubscribe(), because the action could reschedule later.
        // For example:
        // ```
        // scheduler.schedule(function doWork(counter) {
        //   /* ... I'm a busy worker bee ... */
        //   var originalAction = this;
        //   /* wait 100ms before rescheduling the action */
        //   setTimeout(function () {
        //     originalAction.schedule(counter + 1);
        //   }, 100);
        // }, 1000);
        // ```
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
}
_execute(state, T, delay, number);
any;
{
    var errored = false;
    var errorValue = undefined;
    try {
        this.work(state);
    }
    catch (e) {
        errored = true;
        errorValue = !!e && e || new Error(e);
    }
    if (errored) {
        this.unsubscribe();
        return errorValue;
    }
}
_unsubscribe();
{
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index_1 = actions.indexOf(this);
    this.work = null;
    this.delay = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;
    if (index_1 !== -1) {
        actions.splice(index_1, 1);
    }
    if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
    }
}
//# sourceMappingURL=AsyncAction.js.map