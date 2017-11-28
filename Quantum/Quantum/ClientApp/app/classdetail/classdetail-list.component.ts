import {Component,OnInit}  from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from "../shared/DataService";
import{ IClassDetail } from "../shared/classdetail";
@Component({
    selector : "classdetail-list",
    templateUrl:"classdetail-list.component.html",
    styleUrls:[]
})

export class ClassDetailList implements OnInit {
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private data: DataService) {
       this.classDetail = data.classdetail;
    }
    public classDetail : IClassDetail[];

    ngOnInit():void{
        const param = this._route.snapshot.paramMap.get('classname');
    this.data.loadClassDetail(param)
        .subscribe(success => {
      if (success) {
        this.classDetail = this.data.classdetail;
      }
    });
    }

    onBack(): void {
    this._router.navigate(['classes']);
  }

     addClassDetail(): void {
    this._router.navigate(['classes/addclassdetail']);
  }
}