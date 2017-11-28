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
var router_1 = require("@angular/router");
var DataService_1 = require("../shared/DataService");
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
    return ClassDetailList;
}());
ClassDetailList = __decorate([
    core_1.Component({
        selector: "classdetail-list",
        templateUrl: "classdetail-list.component.html",
        styleUrls: []
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        DataService_1.DataService])
], ClassDetailList);
exports.ClassDetailList = ClassDetailList;
//# sourceMappingURL=classdetail-list.component.js.map