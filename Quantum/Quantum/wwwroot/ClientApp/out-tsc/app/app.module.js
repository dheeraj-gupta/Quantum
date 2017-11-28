"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="shared/generic-validator.ts" />
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var classes_list_component_1 = require("./classesinfo/classes-list.component");
var classes_add_component_1 = require("./classesinfo/classes-add.component");
var classdetail_add_component_1 = require("./classdetail/classdetail-add.component");
var classdetail_list_component_1 = require("./classdetail/classdetail-list.component");
var DataService_1 = require("./shared/DataService");
var router_1 = require("@angular/router");
var routes = [
    { path: "classes", component: classes_list_component_1.ClassesList },
    { path: "classes/classdetail", component: classdetail_list_component_1.ClassDetailList },
    { path: "classes/classdetail/:classname", component: classdetail_list_component_1.ClassDetailList },
    { path: "classes/addclass", component: classes_add_component_1.AddClasses },
    { path: "classes/addclassdetail", component: classdetail_add_component_1.AddClassDetail },
    { path: "", redirectTo: "classes", pathMatch: "full" },
    { path: "**", redirectTo: "classes", pathMatch: "full" }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            classes_list_component_1.ClassesList,
            classdetail_list_component_1.ClassDetailList,
            classes_add_component_1.AddClasses,
            classdetail_add_component_1.AddClassDetail
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            router_1.RouterModule.forRoot(routes, {
                useHash: true,
                enableTracing: false // for Debugging of the Routes
            }),
            forms_1.ReactiveFormsModule
        ],
        providers: [
            DataService_1.DataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map