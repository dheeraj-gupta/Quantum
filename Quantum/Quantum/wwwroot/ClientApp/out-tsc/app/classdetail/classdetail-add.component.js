"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var DataService_1 = require("../shared/DataService");
//import { NumberValidators } from '../shared/number.validator';
var generic_validator_1 = require("../shared/generic-validator");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var Observable_1 = require("rxjs/Observable");
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
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    AddClassDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.classDetailForm = this.fb.group({
            className: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            studentFirstName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            studentLastName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            age: ['', [forms_1.Validators.required,
                ]],
            gpa: ['', [forms_1.Validators.required,
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
            .map(function (formControl) { return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        Observable_1.Observable.merge.apply(Observable_1.Observable, [this.classDetailForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
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
    return AddClassDetail;
}());
__decorate([
    core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }),
    __metadata("design:type", Array)
], AddClassDetail.prototype, "formInputElements", void 0);
AddClassDetail = __decorate([
    core_1.Component({
        //selector: "classes-add",
        templateUrl: "classdetail-add.component.html",
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        DataService_1.DataService])
], AddClassDetail);
exports.AddClassDetail = AddClassDetail;
//# sourceMappingURL=classdetail-add.component.js.map