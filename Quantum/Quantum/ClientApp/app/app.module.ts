/// <reference path="shared/generic-validator.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassesList } from "./classesinfo/classes-list.component";
import { AddClasses } from "./classesinfo/classes-add.component";
import { AddClassDetail } from "./classdetail/classdetail-add.component";
import { ClassDetailList } from "./classdetail/classdetail-list.component";

import { DataService } from "./shared/DataService";

import { RouterModule } from '@angular/router';



let routes = [
        { path: "classes", component: ClassesList },
        { path: "classes/classdetail", component: ClassDetailList },
        { path: "classes/classdetail/:classname", component: ClassDetailList },
        { path: "classes/addclass", component: AddClasses },
        { path: "classes/addclassdetail", component: AddClassDetail },
        { path: "", redirectTo: "classes", pathMatch: "full"},
        { path: "**", redirectTo: "classes", pathMatch: "full"}
    ];

@NgModule({
  declarations: [
      AppComponent, 
      ClassesList,
      ClassDetailList,
      AddClasses,
      AddClassDetail
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false // for Debugging of the Routes
    }),
    ReactiveFormsModule
  ],
  providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
