import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterModule }   from '@angular/router';

// modules
import { LoginModule } from './modules/login/login.module';

// import
import { LoginComponent } from './modules/login/components/login/login.component';
import { AppComponent } from './modules/_components/app/app.component';


RouterModule.forRoot([
  {
    path: '/login',
    component: LoginComponent
  },
  //{
  //  path: '/home',
  //  component: HomeComponent
  //},
])


@NgModule({
    imports: [
        NativeScriptModule,
        LoginModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
