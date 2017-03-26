var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = require('./AsyncAction');
var Subscription_1 = require('../Subscription');
var AsyncScheduler_1 = require('./AsyncScheduler');
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
})(AsyncScheduler_1.AsyncScheduler);
exports.VirtualTimeScheduler = VirtualTimeScheduler;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction() {
        _super.apply(this, arguments);
    }
    return VirtualAction;
})(AsyncAction_1.AsyncAction);
exports.VirtualAction = VirtualAction;
void ,
    protected;
index: number = scheduler.index += 1;
{
    _super.call(this, scheduler, work);
    this.index = scheduler.index = index;
}
schedule(state ?  : T, delay, number = 0);
Subscription_1.Subscription;
{
    if (!this.id) {
        return _super.schedule.call(this, state, delay);
    }
    // If an action is rescheduled, we save allocations by mutating its state,
    // pushing it to the end of the scheduler queue, and recycling the action.
    // But since the VirtualTimeScheduler is used for testing, VirtualActions
    // must be immutable so they can be inspected later.
    var action = new VirtualAction(this.scheduler, this.work);
    this.add(action);
    return action.schedule(state, delay);
}
requestAsyncId(scheduler, VirtualTimeScheduler, id ?  : any, delay, number = 0);
any;
{
    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
}
recycleAsyncId(scheduler, VirtualTimeScheduler, id ?  : any, delay, number = 0);
any;
{
    return undefined;
}
sortActions(a, VirtualAction < T > , b, VirtualAction(), {
    if: function (a, delay) {
        if (delay === void 0) { delay =  === b.delay; }
        if (a.index === b.index) {
            return 0;
        }
        else if (a.index > b.index) {
            return 1;
        }
        else {
            return -1;
        }
    }, else: , if: function (a, delay) {
        if (delay === void 0) { delay =  > b.delay; }
        return 1;
    }, else: {
        return: -1
    }
});
//# sourceMappingURL=VirtualTimeScheduler.js.map