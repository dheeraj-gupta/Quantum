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
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    AddClasses.prototype.ngOnInit = function () {
        var _this = this;
        this.classesForm = this.fb.group({
            className: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            location: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            teacherName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]]
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
            .map(function (formControl) { return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        Observable_1.Observable.merge.apply(Observable_1.Observable, [this.classesForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
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
    return AddClasses;
}());
__decorate([
    core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }),
    __metadata("design:type", Array)
], AddClasses.prototype, "formInputElements", void 0);
AddClasses = __decorate([
    core_1.Component({
        //selector: "classes-add",
        templateUrl: "classes-add.component.html",
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        DataService_1.DataService])
], AddClasses);
exports.AddClasses = AddClasses;
//# sourceMappingURL=classes-add.component.js.map