import { Component,OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../shared/DataService";
import {IClasses} from "../shared/classes";
@Component({
    selector: "classes-list",
    templateUrl: "classes-list.component.html",
    styleUrls:[]    
})

export class ClassesList implements OnInit {
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private data: DataService) {
       this.classes = data.classes;
    }
    public classes : IClasses[];

    ngOnInit():void{
    this.data.loadClasses()
        .subscribe(success => {
      if (success) {
        this.classes = this.data.classes;
      }
    });
    }

     addClasses(): void {
    this._router.navigate(['classes/addclass']);
  }
}
