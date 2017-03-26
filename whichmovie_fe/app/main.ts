import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import SocialLogin = require("nativescript-social-login");
import Application = require("application");

if (Application.android) {
    Application.android.onActivityCreated = (activity) => {
        var result = SocialLogin.init({
            activity: activity
        });
    });
}

if (Application.ios) {

    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
            let gglDelegate = false;

            try {
                const errorRef = new interop.Reference();
                GGLContext.sharedInstance().configureWithError(errorRef);

                const signIn = GIDSignIn.sharedInstance();
                gglDelegate = true;
            } catch (error) {
                console.log(error);
            }

            const fcbDelegate = FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions); // facebook login delegate

            return gglDelegate || fcbDelegate;
        }

        applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {
            const fcbDelegate = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation); // facebook login delegate
            const gglDelegate = GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(url, sourceApplication, annotation); // google login delegate

            return fcbDelegate || gglDelegate;
        }
    }

    Application.ios.delegate = MyDelegate;
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
