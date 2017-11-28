import { Component,OnInit, OnDestroy, ViewChildren, ElementRef  } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../shared/DataService";
import {IClassDetail} from "../shared/classdetail";

//import { NumberValidators } from '../shared/number.validator';
import { GenericValidator } from '../shared/generic-validator';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    //selector: "classes-add",
    templateUrl: "classdetail-add.component.html",
    //styleUrls:[]    
})
export class AddClassDetail implements OnInit {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
    public classdetail : IClassDetail;
    pageTitle: string = 'Add Classdetail';
    errorMessage: string;
    classDetailForm: FormGroup;
    private sub: Subscription;
     // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;


    constructor(private fb: FormBuilder,
                private _route: ActivatedRoute,
                private _router: Router,
                private dataService: DataService) {
       //this.classes = data.classes[0];

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
        this.genericValidator = new GenericValidator(this.validationMessages);
    }
    

    ngOnInit():void{
        
         this.classDetailForm = this.fb.group({
            className: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            studentFirstName: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            studentLastName: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            age: ['', [Validators.required,
                               ]],
            gpa: ['', [Validators.required,
                               ]]
        });

        this.sub = this._route.params.subscribe(
            () =>this.getClassDetail()
        );
    }

     ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.classDetailForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.classDetailForm);
        });
    }

    getClassDetail(): void {
        this.dataService.getClassDetail()
            .subscribe(
                (classdetail: IClassDetail) => this.onClassesRetrieved(classdetail),
                (error: string) => this.errorMessage = error
            );
    }

     onClassesRetrieved(classdetail: IClassDetail): void {
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
    }

    saveClassDetail(): void {
        if (this.classDetailForm.dirty && this.classDetailForm.valid) {
            // Copy the form values over the product object values
            let p = Object.assign({}, this.classdetail, this.classDetailForm.value);

            this.dataService.saveClassDetail(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = error.error
                );
        } else if (!this.classDetailForm.dirty) {
            this.onSaveComplete();
        }
    }
    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.classDetailForm.reset();
        this._router.navigate(['classes/classdetail']);
    }
     onBack(): void {
    this._router.navigate(['classes/classdetail']);
  }
}