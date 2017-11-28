webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class='container'>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.name = 'dheeraj';
        this.surname = 'Gupta';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classesinfo_classes_list_component__ = __webpack_require__("../../../../../ClientApp/app/classesinfo/classes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classesinfo_classes_add_component__ = __webpack_require__("../../../../../ClientApp/app/classesinfo/classes-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classdetail_classdetail_add_component__ = __webpack_require__("../../../../../ClientApp/app/classdetail/classdetail-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classdetail_classdetail_list_component__ = __webpack_require__("../../../../../ClientApp/app/classdetail/classdetail-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_DataService__ = __webpack_require__("../../../../../ClientApp/app/shared/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="shared/generic-validator.ts" />











var routes = [
    { path: "classes", component: __WEBPACK_IMPORTED_MODULE_5__classesinfo_classes_list_component__["a" /* ClassesList */] },
    { path: "classes/classdetail", component: __WEBPACK_IMPORTED_MODULE_8__classdetail_classdetail_list_component__["a" /* ClassDetailList */] },
    { path: "classes/classdetail/:classname", component: __WEBPACK_IMPORTED_MODULE_8__classdetail_classdetail_list_component__["a" /* ClassDetailList */] },
    { path: "classes/addclass", component: __WEBPACK_IMPORTED_MODULE_6__classesinfo_classes_add_component__["a" /* AddClasses */] },
    { path: "classes/addclassdetail", component: __WEBPACK_IMPORTED_MODULE_7__classdetail_classdetail_add_component__["a" /* AddClassDetail */] },
    { path: "", redirectTo: "classes", pathMatch: "full" },
    { path: "**", redirectTo: "classes", pathMatch: "full" }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__classesinfo_classes_list_component__["a" /* ClassesList */],
                __WEBPACK_IMPORTED_MODULE_8__classdetail_classdetail_list_component__["a" /* ClassDetailList */],
                __WEBPACK_IMPORTED_MODULE_6__classesinfo_classes_add_component__["a" /* AddClasses */],
                __WEBPACK_IMPORTED_MODULE_7__classdetail_classdetail_add_component__["a" /* AddClassDetail */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_DataService__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/classdetail/classdetail-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n        {{pageTitle}}\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\"\r\n              novalidate\r\n              (ngSubmit)=\"saveClassDetail()\"\r\n              [formGroup]=\"classDetailForm\">\r\n            <fieldset>\r\n                <div class=\"form-group\"\r\n                     [ngClass]=\"{'has-error': displayMessage.className }\">\r\n                    <label class=\"col-md-2 control-label\" for=\"classNameId\">Class Name</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\"\r\n                               id=\"classNameId\"\r\n                               type=\"text\"\r\n                               placeholder=\"className (required)\"\r\n                               formControlName=\"className\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.className\">\r\n                            {{displayMessage.className}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\"\r\n                     [ngClass]=\"{'has-error': displayMessage.studentFirstName}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"studentFirstNameId\">FirstName</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\"\r\n                               id=\"studentFirstNameId\"\r\n                               type=\"text\"\r\n                               placeholder=\"studentFirstName (required)\"\r\n                               formControlName=\"studentFirstName\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.studentFirstName\">\r\n                            {{displayMessage.studentFirstName}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': displayMessage.studentLastName}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"studentLastNameId\">LastName</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\"\r\n                               id=\"studentLastNameId\"\r\n                               type=\"text\"\r\n                               placeholder=\"studentLastName\"\r\n                               formControlName=\"studentLastName\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.studentLastName\">\r\n                            {{displayMessage.studentLastName}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': displayMessage.age}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"ageId\">Age</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\"\r\n                               id=\"ageId\"\r\n                               type=\"text\"\r\n                               placeholder=\"age\"\r\n                               formControlName=\"age\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.age\">\r\n                            {{displayMessage.age}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': displayMessage.gpa}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"gpaId\">GPA</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\"\r\n                               id=\"gpaId\"\r\n                               type=\"text\"\r\n                               placeholder=\"gpa\"\r\n                               formControlName=\"gpa\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.gpa\">\r\n                            {{displayMessage.age}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-4 col-md-offset-2\">\r\n                        <span>\r\n                            <button class=\"btn btn-primary\"\r\n                                    type=\"submit\"\r\n                                    style=\"width:80px;margin-right:10px\"\r\n                                    [disabled]='!classDetailForm.valid'>\r\n                                Save\r\n                            </button>\r\n                        </span>\r\n                        <span>\r\n                            <a class=\"btn btn-default\"\r\n                               style=\"width:80px\"\r\n                               [routerLink]=\"['classes/classdetail']\">\r\n                                Cancel\r\n                            </a>\r\n                        </span>\r\n\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n        <div class=\"has-error\">{{errorMessage}}</div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/classdetail/classdetail-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_DataService__ = __webpack_require__("../../../../../ClientApp/app/shared/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_generic_validator__ = __webpack_require__("../../../../../ClientApp/app/shared/generic-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { NumberValidators } from '../shared/number.validator';





var AddClassDetail = (function () {
    function AddClassDetail(fb, _route, _router, dataService) {
        //this.classes = data.classes[0];
        this.fb = fb;
        this._route = _route;
        this._router = _router;
        this.dataService = dataService;
        this.pageTitle = 'Add Classdetail';
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            className: {
                required: 'className is required.',
                minlength: 'className must be at least three characters.',
                maxlength: 'className cannot exceed 50 characters.'
            },
            studentFirstName: {
                required: 'FirstName is required.',
                minlength: 'FirstName must be at least three characters.',
                maxlength: 'FirstName cannot exceed 50 characters.'
            },
            studentLastName: {
                required: 'LastName is required.',
                minlength: 'LastName must be at least three characters.',
                maxlength: 'LastName cannot exceed 50 characters.'
            },
            age: {
                required: 'age is required.',
            },
            gpa: {
                required: 'gpa is required.',
            }
        };
        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new __WEBPACK_IMPORTED_MODULE_4__shared_generic_validator__["a" /* GenericValidator */](this.validationMessages);
    }
    AddClassDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.classDetailForm = this.fb.group({
            className: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]],
            studentFirstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]],
            studentLastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]],
            age: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                ]],
            gpa: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                ]]
        });
        this.sub = this._route.params.subscribe(function () { return _this.getClassDetail(); });
    };
    AddClassDetail.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AddClassDetail.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */], [this.classDetailForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.classDetailForm);
        });
    };
    AddClassDetail.prototype.getClassDetail = function () {
        var _this = this;
        this.dataService.getClassDetail()
            .subscribe(function (classdetail) { return _this.onClassesRetrieved(classdetail); }, function (error) { return _this.errorMessage = error; });
    };
    AddClassDetail.prototype.onClassesRetrieved = function (classdetail) {
        if (this.classDetailForm) {
            this.classDetailForm.reset();
        }
        this.classdetail = classdetail;
        this.pageTitle = 'Add ClassDetail';
        // Update the data on the form
        this.classDetailForm.patchValue({
            className: this.classdetail.className,
            studentFirstName: this.classdetail.studentFirstName,
            studentLastName: this.classdetail.studentLastName,
            age: this.classdetail.age,
            gpa: this.classdetail.gpa
        });
    };
    AddClassDetail.prototype.saveClassDetail = function () {
        var _this = this;
        if (this.classDetailForm.dirty && this.classDetailForm.valid) {
            // Copy the form values over the product object values
            var p = Object.assign({}, this.classdetail, this.classDetailForm.value);
            this.dataService.saveClassDetail(p)
                .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error.error; });
        }
        else if (!this.classDetailForm.dirty) {
            this.onSaveComplete();
        }
    };
    AddClassDetail.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.classDetailForm.reset();
        this._router.navigate(['classes/classdetail']);
    };
    AddClassDetail.prototype.onBack = function () {
        this._router.navigate(['classes/classdetail']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControlName */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Array)
    ], AddClassDetail.prototype, "formInputElements", void 0);
    AddClassDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../ClientApp/app/classdetail/classdetail-add.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_DataService__["a" /* DataService */]])
    ], AddClassDetail);
    return AddClassDetail;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/classdetail/classdetail-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ClassesView\" id=\"\">\r\n    <table class=\"table table-bordered table-hover\">\r\n        <thead >\r\n            <tr>\r\n                <th>\r\n                    ClassName\r\n                </th>\r\n                <th>\r\n                    StudentFirstName\r\n                </th>\r\n                <th>\r\n                    StudentLastName\r\n                </th>\r\n                <th>\r\n                    GPA\r\n                </th>\r\n                <th>\r\n                    Age\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody >\r\n\r\n\r\n            <tr *ngFor=\"let c of classDetail\">\r\n                <td>\r\n                    {{c.className}}\r\n                </td>\r\n                <td>\r\n                    {{c.studentFirstName}}\r\n                </td>\r\n                <td>\r\n                    {{c.studentLastName}}\r\n                </td>\r\n                <td>\r\n                    {{c.gpa}}\r\n                </td>\r\n                <td>\r\n                    {{c.age}}\r\n                </td>\r\n            </tr>\r\n\r\n        <tbody>\r\n    </table>\r\n    <div class='row'>\r\n        <div class=\"col-md-4 col-md-offset-2\">\r\n            <a class='btn btn-default' (click)='onBack()' style='width:80px'>\r\n                <i class='glyphicon glyphicon-chevron-left'></i> Back\r\n            </a>\r\n        </div>\r\n       <div class=\"col-md-4 col-md-offset-2\">\r\n           <a class='btn btn-default' (click)='addClassDetail()'>\r\n               <i class='glyphicon glyphicon-save'></i> Add ClassDetail\r\n           </a>\r\n       </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/classdetail/classdetail-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassDetailList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_DataService__ = __webpack_require__("../../../../../ClientApp/app/shared/DataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassDetailList = (function () {
    function ClassDetailList(_route, _router, data) {
        this._route = _route;
        this._router = _router;
        this.data = data;
        this.classDetail = data.classdetail;
    }
    ClassDetailList.prototype.ngOnInit = function () {
        var _this = this;
        var param = this._route.snapshot.paramMap.get('classname');
        this.data.loadClassDetail(param)
            .subscribe(function (success) {
            if (success) {
                _this.classDetail = _this.data.classdetail;
            }
        });
    };
    ClassDetailList.prototype.onBack = function () {
        this._router.navigate(['classes']);
    };
    ClassDetailList.prototype.addClassDetail = function () {
        this._router.navigate(['classes/addclassdetail']);
    };
    ClassDetailList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "classdetail-list",
            template: __webpack_require__("../../../../../ClientApp/app/classdetail/classdetail-list.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_DataService__["a" /* DataService */]])
    ], ClassDetailList);
    return ClassDetailList;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/classesinfo/classes-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n        {{pageTitle}}\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\"\r\n              novalidate\r\n              (ngSubmit)=\"saveClasses()\"\r\n              [formGroup]=\"classesForm\">\r\n            <fieldset>\r\n                <div class=\"form-group\"\r\n                     [ngClass]=\"{'has-error': displayMessage.className }\">\r\n                    <label class=\"col-md-2 control-label\" for=\"classNameId\">Class Name</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\"\r\n                               id=\"classNameId\"\r\n                               type=\"text\"\r\n                               placeholder=\"className (required)\"\r\n                               formControlName=\"className\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.className\">\r\n                            {{displayMessage.className}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\"\r\n                     [ngClass]=\"{'has-error': displayMessage.location}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"locationId\">location</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\"\r\n                               id=\"locationId\"\r\n                               type=\"text\"\r\n                               placeholder=\"location (required)\"\r\n                               formControlName=\"location\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.location\">\r\n                            {{displayMessage.location}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': displayMessage.teacherName}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"teacherNameId\">Teacher Name</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\"\r\n                               id=\"teacherNameId\"\r\n                               type=\"text\"\r\n                               placeholder=\"Teacher Name\"\r\n                               formControlName=\"teacherName\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.teacherName\">\r\n                            {{displayMessage.teacherName}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n               \r\n              \r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-4 col-md-offset-2\">\r\n                        <span>\r\n                            <button class=\"btn btn-primary\"\r\n                                    type=\"submit\"\r\n                                    style=\"width:80px;margin-right:10px\"\r\n                                    [disabled]='!classesForm.valid'>\r\n                                Save\r\n                            </button>\r\n                        </span>\r\n                        <span>\r\n                            <a class=\"btn btn-default\"\r\n                               style=\"width:80px\"\r\n                               [routerLink]=\"['classes']\">\r\n                                Cancel\r\n                            </a>\r\n                        </span>\r\n                       \r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/classesinfo/classes-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClasses; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_DataService__ = __webpack_require__("../../../../../ClientApp/app/shared/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_generic_validator__ = __webpack_require__("../../../../../ClientApp/app/shared/generic-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { NumberValidators } from '../shared/number.validator';





var AddClasses = (function () {
    function AddClasses(fb, _route, _router, dataService) {
        //this.classes = data.classes[0];
        this.fb = fb;
        this._route = _route;
        this._router = _router;
        this.dataService = dataService;
        this.pageTitle = 'Add Classes';
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            className: {
                required: 'class name is required.',
                minlength: 'class name must be at least three characters.',
                maxlength: 'class name cannot exceed 50 characters.'
            },
            location: {
                required: 'location is required.',
                minlength: 'location must be at least three characters.',
                maxlength: 'location cannot exceed 50 characters.'
            },
            teacherName: {
                required: 'teacherName is required.',
                minlength: 'teacherName must be at least three characters.',
                maxlength: 'teacherName cannot exceed 50 characters.'
            }
        };
        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new __WEBPACK_IMPORTED_MODULE_4__shared_generic_validator__["a" /* GenericValidator */](this.validationMessages);
    }
    AddClasses.prototype.ngOnInit = function () {
        var _this = this;
        this.classesForm = this.fb.group({
            className: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]],
            location: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]],
            teacherName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]]
        });
        this.sub = this._route.params.subscribe(function () { return _this.getClasses(); });
    };
    AddClasses.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AddClasses.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */], [this.classesForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.classesForm);
        });
    };
    AddClasses.prototype.getClasses = function () {
        var _this = this;
        this.dataService.getClasses()
            .subscribe(function (classes) { return _this.onClassesRetrieved(classes); }, function (error) { return _this.errorMessage = error; });
    };
    AddClasses.prototype.onClassesRetrieved = function (classes) {
        if (this.classesForm) {
            this.classesForm.reset();
        }
        this.classes = classes;
        this.pageTitle = 'Add classes';
        // Update the data on the form
        this.classesForm.patchValue({
            className: this.classes.className,
            location: this.classes.location,
            teacherName: this.classes.teacherName
        });
    };
    AddClasses.prototype.saveClasses = function () {
        var _this = this;
        if (this.classesForm.dirty && this.classesForm.valid) {
            // Copy the form values over the product object values
            var p = Object.assign({}, this.classes, this.classesForm.value);
            this.dataService.saveClasses(p)
                .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
        }
        else if (!this.classesForm.dirty) {
            this.onSaveComplete();
        }
    };
    AddClasses.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.classesForm.reset();
        this._router.navigate(['classes']);
    };
    AddClasses.prototype.onBack = function () {
        this._router.navigate(['classes']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControlName */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Array)
    ], AddClasses.prototype, "formInputElements", void 0);
    AddClasses = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../ClientApp/app/classesinfo/classes-add.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_DataService__["a" /* DataService */]])
    ], AddClasses);
    return AddClasses;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/classesinfo/classes-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ClassesView\" id=\"\">\r\n    <table class=\"table table-condensed table-hover\">\r\n        <thead >\r\n            <tr>\r\n                <th>\r\n                    ClassName\r\n                </th>\r\n                <th>\r\n                    Location\r\n                </th>\r\n                <th>\r\n                    TeacherName\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody >\r\n            <tr *ngFor=\"let c of classes\">\r\n                <td>\r\n                   <a [routerLink]=\"['classdetail', c.className]\">{{c.className}}</a> \r\n                </td>\r\n                <td>\r\n                    {{c.location}}\r\n                </td>\r\n                <td>\r\n                    {{c.teacherName}}\r\n                </td>\r\n            </tr>\r\n           \r\n        <tbody>\r\n    </table>\r\n    <div class=''>\r\n        <a class='btn btn-default' (click)='addClasses()'>\r\n            <i class='glyphicon glyphicon-save'></i> Add Classes\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/classesinfo/classes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_DataService__ = __webpack_require__("../../../../../ClientApp/app/shared/DataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassesList = (function () {
    function ClassesList(_route, _router, data) {
        this._route = _route;
        this._router = _router;
        this.data = data;
        this.classes = data.classes;
    }
    ClassesList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadClasses()
            .subscribe(function (success) {
            if (success) {
                _this.classes = _this.data.classes;
            }
        });
    };
    ClassesList.prototype.addClasses = function () {
        this._router.navigate(['classes/addclass']);
    };
    ClassesList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "classes-list",
            template: __webpack_require__("../../../../../ClientApp/app/classesinfo/classes-list.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_DataService__["a" /* DataService */]])
    ], ClassesList);
    return ClassesList;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/shared/DataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.classes = [];
        this.classdetail = [];
    }
    DataService.prototype.loadClasses = function () {
        var _this = this;
        return this.http.get("/api/classes")
            .map(function (data) {
            _this.classes = data;
            return true;
        });
    };
    DataService.prototype.loadClassDetail = function (classname) {
        var _this = this;
        return this.http.get("/api/classdetail" + "/" + classname)
            .map(function (data) {
            _this.classdetail = data;
            return true;
        });
    };
    DataService.prototype.getClasses = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.initializeClasses());
    };
    DataService.prototype.getClassDetail = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.initializeClassDetail());
    };
    DataService.prototype.initializeClasses = function () {
        // Return an initialized object
        return {
            className: null,
            location: null,
            teacherName: null
        };
    };
    DataService.prototype.initializeClassDetail = function () {
        // Return an initialized object
        return {
            className: null,
            studentFirstName: null,
            studentLastName: null,
            gpa: 0.0,
            age: 0
        };
    };
    DataService.prototype.saveClasses = function (classes) {
        var _this = this;
        return this.http.post("/api/classes", classes).map(function (data) {
            _this.classes = data;
            return true;
        });
    };
    DataService.prototype.saveClassDetail = function (classDetail) {
        var _this = this;
        return this.http.post("/api/classdetail", classDetail).map(function (data) {
            _this.classdetail = data;
            return true;
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/shared/generic-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
var GenericValidator = (function () {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    GenericValidator.prototype.getErrorCount = function (container) {
        var errorCount = 0;
        for (var controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                if (container.controls[controlKey].errors) {
                    errorCount += Object.keys(container.controls[controlKey].errors).length;
                    console.log(errorCount);
                }
            }
        }
        return errorCount;
    };
    return GenericValidator;
}());



/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map