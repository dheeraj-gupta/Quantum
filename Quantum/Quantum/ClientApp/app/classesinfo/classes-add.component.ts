import { Component,OnInit, OnDestroy, ViewChildren, ElementRef  } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../shared/DataService";
import {IClasses} from "../shared/classes";

//import { NumberValidators } from '../shared/number.validator';
import { GenericValidator } from '../shared/generic-validator';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    //selector: "classes-add",
    templateUrl: "classes-add.component.html",
    //styleUrls:[]    
})
export class AddClasses implements OnInit {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
    public classes : IClasses;
    pageTitle: string = 'Add Classes';
    errorMessage: string;
    classesForm: FormGroup;
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
        this.genericValidator = new GenericValidator(this.validationMessages);
    }
    

    ngOnInit():void{
        
         this.classesForm = this.fb.group({
            className: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            location: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            teacherName: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]]
        });

        this.sub = this._route.params.subscribe(
            () =>this.getClasses()
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
        Observable.merge(this.classesForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.classesForm);
        });
    }

    getClasses(): void {
        this.dataService.getClasses()
            .subscribe(
                (classes: IClasses) => this.onClassesRetrieved(classes),
                (error: any) => this.errorMessage = <any>error
            );
    }

     onClassesRetrieved(classes: IClasses): void {
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
    }

    saveClasses(): void {
        if (this.classesForm.dirty && this.classesForm.valid) {
            // Copy the form values over the product object values
            let p = Object.assign({}, this.classes, this.classesForm.value);

            this.dataService.saveClasses(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.classesForm.dirty) {
            this.onSaveComplete();
        }
    }
    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.classesForm.reset();
        this._router.navigate(['classes']);
    }
     onBack(): void {
    this._router.navigate(['classes']);
  }
}