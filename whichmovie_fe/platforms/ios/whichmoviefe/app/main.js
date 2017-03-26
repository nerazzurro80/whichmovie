var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var SocialLogin = require("nativescript-social-login");
var Application = require("application");
console.log('sono qua');
if (Application.android) {
    Application.android.onActivityCreated = function (activity) {
        var result = SocialLogin.init({
            activity: activity
        });
    };
    ;
}
if (Application.ios) {
    var MyDelegate = (function (_super) {
        __extends(MyDelegate, _super);
        function MyDelegate() {
            _super.apply(this, arguments);
        }
        MyDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
            var gglDelegate = false;
            try {
                var errorRef = new interop.Reference();
                GGLContext.sharedInstance().configureWithError(errorRef);
                var signIn = GIDSignIn.sharedInstance();
                gglDelegate = true;
            }
            catch (error) {
                console.log(error);
            }
            var fcbDelegate = FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions); // facebook login delegate
            return gglDelegate || fcbDelegate;
        };
        MyDelegate.prototype.applicationOpenURLSourceApplicationAnnotation = function (application, url, sourceApplication, annotation) {
            var fcbDelegate = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation); // facebook login delegate
            var gglDelegate = GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(url, sourceApplication, annotation); // google login delegate
            return fcbDelegate || gglDelegate;
        };
        MyDelegate.ObjCProtocols = [UIApplicationDelegate];
        return MyDelegate;
    })(UIResponder);
    Application.ios.delegate = MyDelegate;
}
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map