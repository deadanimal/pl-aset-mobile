(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/core/dashboard\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">Super Admin</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"container\" class=\"background\">\n    <ion-list>\n      <ion-card color=\"primary\" (click)=\"navigateToPage('/core/kewpa8-list')\">\n        <ion-card-content>\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"add-circle-outline\"></ion-icon>\n            <h3>KEW.PS 8</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n      <hr>\n      <ion-card color=\"primary\" (click)=\"navigateToPage('/core/kewpa9-list')\">\n        <ion-card-content>\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"add-circle-outline\"></ion-icon>\n            <h3>KEW.PA 9</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n      <hr>\n      <ion-card color=\"primary\" (click)=\"navigateToPage('/core/kewpa10a-list')\">\n        <ion-card-content>\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"add-circle-outline\"></ion-icon>\n            <h3>KEW.PA 10 A</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n      <hr>\n      <ion-card color=\"primary\" (click)=\"navigateToPage('/core/kewpa10b-list')\">\n        <ion-card-content>\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"add-circle-outline\"></ion-icon>\n            <h3>KEW.PA 10 B</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n\n</ion-content>\n<!--<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"light\" mode=\"ios\">\n    <ion-title>Menu Utama</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-card color=\"light\" href=\"/kewpa8\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col text-left>\n            <ion-label><b>KEW.PA-8</b></ion-label>\n\t\t      </ion-col>\n\n\t\t    </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\" href=\"/kewpa9\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col text-left>\n            <ion-label><b>KEW.PA-9</b></ion-label>\n\t\t      </ion-col>\n\n\t\t    </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\" href=\"/kewpa10a\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col text-left>\n            <ion-label><b>KEW.PA-10 A</b></ion-label>\n\t\t      </ion-col>\n\n\t\t    </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\" href=\"/kewpa10b\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col text-left>\n            <ion-label><b>KEW.PA-10 B</b></ion-label>\n\t\t      </ion-col>\n\n\t\t    </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n\n</ion-content>-->\n");

/***/ }),

/***/ "./src/app/core/dashboard/dashboard-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/core/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/core/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/core/dashboard/dashboard.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/core/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/core/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/core/dashboard/dashboard.page.scss":
/*!****************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\nion-card {\n  border-radius: 20px;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 2px -3px 9px -6px black;\n  padding: 15px auto;\n}\n\nion-list {\n  margin-top: 80px;\n  margin: 80px 30px 10px;\n}\n\nh3 {\n  margin: 0;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FDQUY7O0FES0E7RUFDRSxTQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IC0zcHggOXB4IC02cHggYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHggYXV0bztcblxuXG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luOiA4MHB4IDMwcHggMTBweDtcbn1cblxuXG5cbmgzIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaXRlbS1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbn1cbiIsIi5iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAtM3B4IDlweCAtNnB4IGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4IGF1dG87XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luOiA4MHB4IDMwcHggMTBweDtcbn1cblxuaDMge1xuICBtYXJnaW46IDA7XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/dashboard/dashboard.page.ts":
/*!**************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.page.ts ***!
  \**************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let DashboardPage = class DashboardPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToPage(path) {
        this.router.navigate([path]);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/core/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=core-dashboard-dashboard-module-es2015.js.map