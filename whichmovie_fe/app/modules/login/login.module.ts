import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent }  from './components/login/login.component';

@NgModule({
    imports:      [ CommonModule ],
    exports:      [ LoginComponent ],
    declarations: [ LoginComponent ],
    bootstrap:    [ LoginComponent ]
})
export class LoginModule {

}