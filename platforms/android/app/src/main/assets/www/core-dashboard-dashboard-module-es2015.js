(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div id=\"container\" class=\"background\">\n<div class=\"custom-figma-header ion-text-center\">\n    <div class=\"custom-figma-title ion-text-center\">\n      <ion-icon style=\"font-size: 40px; color: white\" name=\"person-circle-outline\"></ion-icon>\n      <h4 style=\"margin: 0px; !important\">Nama User <br/>PERMOHONAN & ADUAN</h4>\n    </div>\n  </div>\n  <br />\n\n    <div class=\"custom-figma-item\"></div>\n    <ion-list>\n\n      <ion-card color=\"white\" (click)=\"navigateToPage('/core/kewpa8-list')\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n            <h3 style=\"color: black;\">PERMOHONAN STOK (INDIVIDU KEPADA STOR) KEW.PS 8</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-card color=\"white\" (click)=\"navigateToPage('/core/kewpa9-list')\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n            <h3 style=\"color: black;\">PERMOHONAN PERGERAKAN/PINJAMAN ASET ALIH KEW.PA 9</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-card color=\"white\" (click)=\"navigateToPage('/core/kewpa10a-list')\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n            <h3 style=\"color: black;\">ADUAN KEROSAKAN ASET ALIH KEW.PA 10 A</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-card color=\"white\" (click)=\"navigateToPage('/core/kewpa10b-list')\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n            <h3 style=\"color: black;\">ADUAN KEROSAKAN KENDERAAN KEW.PA 10 B</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card color=\"white\" (click)=\"navigateToPage('/core/kewpa11-list')\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n            <h3 style=\"color: black;\">BORANG PEMERIKSAAN ASET ALIH KEW.PA 11</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n\n\n      <ion-card color=\"white\" (click)=\"navigateToPage('/core/kewpa21-list')\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n            <h3 style=\"color: black;\">BORANG PELUPUSAN ASET ALIH KEW.PA 21</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card color=\"white\" (click)=\"scanBarcode()\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text color=\"light\">\n            <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n            <h3 style=\"color: black;\">SCAN QR TEST</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n\n</ion-content>\n<!--<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"light\" mode=\"ios\">\n    <ion-title>Menu Utama</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-card color=\"light\" href=\"/kewpa8\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col text-left>\n            <ion-label><b>KEW.PA-8</b></ion-label>\n\t\t      </ion-col>\n\n\t\t    </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\" href=\"/kewpa9\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col text-left>\n            <ion-label><b>KEW.PA-9</b></ion-label>\n\t\t      </ion-col>\n\n\t\t    </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\" href=\"/kewpa10a\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col text-left>\n            <ion-label><b>KEW.PA-10 A</b></ion-label>\n\t\t      </ion-col>\n\n\t\t    </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"light\" href=\"/kewpa10b\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col text-left>\n            <ion-label><b>KEW.PA-10 B</b></ion-label>\n\t\t      </ion-col>\n\n\t\t    </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n\n</ion-content>-->\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: 30px;\n  color: #d99558;\n}\n\nion-col {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.h-200 {\n  height: 200px;\n}\n\n.custom-figma-header {\n  width: 100%;\n  height: 150px;\n  left: 0px;\n  top: 50px;\n  background: #141e56;\n  border-bottom-left-radius: 31px;\n  border-bottom-right-radius: 31px;\n}\n\n.custom-figma-title {\n  padding-top: 30px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.015em;\n  color: #ffffff;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.custom-figma-bottom {\n  position: fixed;\n  left: 32%;\n  right: 32%;\n  top: 98.4%;\n  bottom: 0.99%;\n  background: #000000;\n  border-radius: 10px;\n}\n\n.custom-figma-left {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 8%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-right {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 80%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-button {\n  background: #141e56;\n  border: 0px solid rgba(255, 253, 253, 0.1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 5px;\n  width: 70px;\n  height: 75px;\n}\n\n.custom-figma-fab-left {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 11%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\n.custom-figma-fab-right {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 83%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\nion-item, ion-input {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.custom-figma-person {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  left: 40%;\n  top: 3%;\n  border-radius: 60%;\n  background: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUNEQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZpZ21hIHN0eWxpbmcgc3RhcnRzIGhlcmVcbmgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG4gIGNvbG9yOiByZ2JhKDIxNywgMTQ5LCA4OCk7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5oLTIwMCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzFweDtcbn1cblxuLmN1c3RvbS1maWdtYS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTVlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDMyJTtcbiAgcmlnaHQ6IDMyJTtcbiAgdG9wOiA5OC40JTtcbiAgYm90dG9tOiAwLjk5JTtcblxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1sZWZ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMSU7XG4gIHRvcDogOTEuNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogODMlO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0sIGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWZpZ21hLXBlcnNvbiB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG53aWR0aDogNjBweDtcbmhlaWdodDogNjBweDtcbmxlZnQ6IDQwJTtcbnRvcDogMyU7XG5ib3JkZXItcmFkaXVzOiA2MCU7XG5cbmJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4iLCJoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNkOTk1NTg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmgtMjAwIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmN1c3RvbS1maWdtYS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDFlNTY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMxcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMzIlO1xuICByaWdodDogMzIlO1xuICB0b3A6IDk4LjQlO1xuICBib3R0b206IDAuOTklO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1mYWItbGVmdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTElO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmN1c3RvbS1maWdtYS1mYWItcmlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDgzJTtcbiAgdG9wOiA5MS41JTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1pdGVtLCBpb24taW5wdXQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1maWdtYS1wZXJzb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxlZnQ6IDQwJTtcbiAgdG9wOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufSJdfQ== */");

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
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");




let DashboardPage = class DashboardPage {
    constructor(router, barcodeScanner) {
        this.router = router;
        this.barcodeScanner = barcodeScanner;
    }
    ngOnInit() {
    }
    navigateToPage(path) {
        this.router.navigate([path]);
    }
    scanBarcode() {
        const options = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Place a barcode inside the scan area',
            resultDisplayDuration: 500,
            formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
            orientation: 'portrait',
        };
        console.log(this.barcodeScanner);
        this.barcodeScanner.scan(options).then(barcodeData => {
            console.log('Barcode data', barcodeData);
            this.scannedData = barcodeData;
            alert(barcodeData);
        }).catch(err => {
            console.log('Error', err);
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] }
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