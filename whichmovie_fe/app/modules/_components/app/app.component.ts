import { Component } from "@angular/core";
import buttonModule = require("ui/button");
import bindable = require("ui/core/bindable");
import observable = require("data/observable");

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="WhichMovie3"></ActionBar>


    <!-- Your UI components go here -->
    <Button (tap)="goToLogin()" text="Login"></Button>


  `
})
export class AppComponent {
  // Your TypeScript logic goes here

  goToLogin() {
    console.log('____');
  }
}
