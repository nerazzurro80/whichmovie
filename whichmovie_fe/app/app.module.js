"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("@angular/router");
// modules
var login_module_1 = require("./modules/login/login.module");
// import
var login_component_1 = require("./modules/login/components/login/login.component");
var app_component_1 = require("./modules/_components/app/app.component");
router_1.RouterModule.forRoot([
    {
        path: '/login',
        component: login_component_1.LoginComponent
    },
]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            login_module_1.LoginModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDBDQUFpRDtBQUVqRCxVQUFVO0FBQ1YsNkRBQTJEO0FBRTNELFNBQVM7QUFDVCxvRkFBa0Y7QUFDbEYseUVBQXVFO0FBR3ZFLHFCQUFZLENBQUMsT0FBTyxDQUFDO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7Q0FLRixDQUFDLENBQUE7QUFnQkYsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBYnJCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiwwQkFBVztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBtb2R1bGVzXG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9sb2dpbi9sb2dpbi5tb2R1bGUnO1xuXG4vLyBpbXBvcnRcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9tb2R1bGVzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vbW9kdWxlcy9fY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCc7XG5cblxuUm91dGVyTW9kdWxlLmZvclJvb3QoW1xuICB7XG4gICAgcGF0aDogJy9sb2dpbicsXG4gICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICB9LFxuICAvL3tcbiAgLy8gIHBhdGg6ICcvaG9tZScsXG4gIC8vICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgLy99LFxuXSlcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBMb2dpbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==