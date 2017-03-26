var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var Subscriber_1 = require('../Subscriber');
var Notification_1 = require('../Notification');
this;
Observable_1.Observable < T > , scheduler;
IScheduler, delay;
number = 0;
Observable_1.Observable < T > {
    return: this.lift(new ObserveOnOperator(scheduler, delay))
};
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
})();
exports.ObserveOnOperator = ObserveOnOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber() {
        _super.apply(this, arguments);
    }
    ObserveOnSubscriber.dispatch = ;
    return ObserveOnSubscriber;
})(Subscriber_1.Subscriber);
exports.ObserveOnSubscriber = ObserveOnSubscriber;
{
    var notification = arg.notification, destination = arg.destination, subscription = arg.subscription;
    notification.observe(destination);
    if (subscription) {
        subscription.unsubscribe();
    }
}
constructor(destination, Subscriber_1.Subscriber < T > , private, scheduler, IScheduler, private, delay, number = 0);
{
    _super.call(this, destination);
}
scheduleMessage(notification, Notification_1.Notification(), void {
    const: message = new ObserveOnMessage(notification, this.destination),
    message: .subscription = this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, message))
}, protected, _next(value, T), void {
    this: .scheduleMessage(Notification_1.Notification.createNext(value))
}, protected, _error(err, any), void {
    this: .scheduleMessage(Notification_1.Notification.createError(err))
}, protected, _complete(), void {
    this: .scheduleMessage(Notification_1.Notification.createComplete())
});
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
})();
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map