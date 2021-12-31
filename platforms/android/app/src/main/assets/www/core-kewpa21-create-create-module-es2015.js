(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-kewpa21-create-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa21/create/create.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa21/create/create.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("      <ion-content class=\"content\">\n      <div class=\"custom-figma-header ion-text-center\">\n    <div class=\"custom-figma-title\">\n      BORANG PELUPUSAN <br />ASET ALIH<br />\n      KE.WPA-21\n    </div>\n  </div>\n\n  <br />\n\n        <div >\n          <form [formGroup]=\"kewpa21Form\">\n            <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">No Siri Pendaftaran</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.no_siri_pendaftaran}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Kaedah Aset</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.keadaan_aset}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Syor Kaedah Pelupusan</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.kaedah_pelupusan}}\" formControlName=\"kaedah_pelupusan\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Justifikasi</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.justifikasi}}\" formControlName=\"justifikasi\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Catatan</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.catatan}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n               <br>\n               <div padding>\n          <div *ngIf=\"updateMode === false\" class=\"card\" style=\"padding: 20px\">\n            <ion-button\n              color=\"primary\"\n              size=\"medium\"\n              [disabled]=\"kewpa21Form.invalid\"\n              (click)=\"submitKewpa21()\"\n              expand=\"block\"\n            >\n              Simpan</ion-button\n            >\n          </div>\n\n          <div *ngIf=\"updateMode === true\" class=\"card\" style=\"padding: 20px\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-button\n                  color=\"primary\"\n                  size=\"medium\"\n                  [disabled]=\"kewpa21Form.invalid\"\n                  (click)=\"submitKewpa21Update()\"\n                  expand=\"block\"\n                >\n                  Simpan</ion-button\n                >\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button\n                  color=\"primary\"\n                  size=\"medium\"\n                  [disabled]=\"kewpa21Form.invalid\"\n                  (click)=\"submitKewpa21UpdateSubmit()\"\n                  expand=\"block\"\n                >\n                  Simpan & Hantar</ion-button\n                >\n              </ion-col>\n            </ion-row>\n            <br />\n          </div>\n        </div>\n            </ion-list>\n          </form>\n        </div>\n<div\n    (click)=\"navigateToPage('/core/kewpa21-list')\"\n    class=\"custom-figma-right\"\n  ></div>\n  <ion-icon\n    (click)=\"navigateToPage('/core/kewpa21-list')\"\n    class=\"custom-figma-fab-right\"\n    name=\"close-outline\"\n  ></ion-icon>\n\n      </ion-content>\n");

/***/ }),

/***/ "./src/app/core/kewpa21/create/create-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/kewpa21/create/create-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageRoutingModule", function() { return CreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.page */ "./src/app/core/kewpa21/create/create.page.ts");




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_3__["CreatePage"]
    }
];
let CreatePageRoutingModule = class CreatePageRoutingModule {
};
CreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatePageRoutingModule);



/***/ }),

/***/ "./src/app/core/kewpa21/create/create.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/kewpa21/create/create.module.ts ***!
  \******************************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-routing.module */ "./src/app/core/kewpa21/create/create-routing.module.ts");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/core/kewpa21/create/create.page.ts");







let CreatePageModule = class CreatePageModule {
};
CreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePageRoutingModule"]
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
    })
], CreatePageModule);



/***/ }),

/***/ "./src/app/core/kewpa21/create/create.page.scss":
/*!******************************************************!*\
  !*** ./src/app/core/kewpa21/create/create.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-select {\n  font-size: 12px !important;\n}\n\nion-toolbar {\n  --color: var(--ion-color-primary);\n  position: absolute;\n}\n\n.card-body {\n  height: 90%;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\n.card-body img {\n  border-radius: 18px;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n\nion-content .content {\n  margin: 0;\n  padding: 10px 30px 10px;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n}\n\n.item-start {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n}\n\nion-input, ion-datetime {\n  font-size: 12px;\n}\n\nion-icon {\n  font-size: 30px;\n  color: #d99558;\n}\n\nion-col {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.h-200 {\n  height: 200px;\n}\n\n.custom-figma-header {\n  width: 100%;\n  height: 150px;\n  left: 0px;\n  top: 50px;\n  background: #141e56;\n  border-bottom-left-radius: 31px;\n  border-bottom-right-radius: 31px;\n}\n\n.custom-figma-title {\n  padding-top: 30px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.015em;\n  color: #ffffff;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.custom-figma-bottom {\n  position: fixed;\n  left: 32%;\n  right: 32%;\n  top: 98.4%;\n  bottom: 0.99%;\n  background: #000000;\n  border-radius: 10px;\n}\n\n.custom-figma-left {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 8%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-right {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 80%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-button {\n  background: #141e56;\n  border: 1px solid rgba(255, 253, 253, 0.1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 5px;\n  width: 81px;\n  height: 45px;\n}\n\n.custom-figma-fab-left {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 11%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\n.custom-figma-fab-right {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 83%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\nion-item, ion-input {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGEyMS9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29yZS9rZXdwYTIxL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURJRTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREtBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0xGOztBRE9BO0VBQ0UsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0pGOztBRE9BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esc0RBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ05GOztBRFNBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvY29yZS9rZXdwYTIxL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAuN3JlbTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMi41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMi41cmVtO1xuXG4gIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweDtcbiAgfVxufVxuXG4uaXRlbS1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pdGVtLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cblxuaW9uLWlucHV0LCBpb24tZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG5cbn1cblxuLy9maWdtYSBzdHlsaW5nIHN0YXJ0cyBoZXJlXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG4gIGNvbG9yOiByZ2JhKDIxNywgMTQ5LCA4OCk7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5oLTIwMCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzFweDtcbn1cblxuLmN1c3RvbS1maWdtYS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTVlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDMyJTtcbiAgcmlnaHQ6IDMyJTtcbiAgdG9wOiA5OC40JTtcbiAgYm90dG9tOiAwLjk5JTtcblxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG5cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogODFweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1sZWZ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMSU7XG4gIHRvcDogOTEuNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogODMlO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0sIGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbmlvbi1zZWxlY3Qge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIuNXJlbTtcbn1cbi5jYXJkLWJvZHkgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTlweDtcbn1cblxuaW9uLWNvbnRlbnQgLmNvbnRlbnQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4O1xufVxuXG4uaXRlbS1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pdGVtLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbmlvbi1pbnB1dCwgaW9uLWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNkOTk1NTg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmgtMjAwIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmN1c3RvbS1maWdtYS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDFlNTY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMxcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMzIlO1xuICByaWdodDogMzIlO1xuICB0b3A6IDk4LjQlO1xuICBib3R0b206IDAuOTklO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDgxcHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1mYWItbGVmdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTElO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmN1c3RvbS1maWdtYS1mYWItcmlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDgzJTtcbiAgdG9wOiA5MS41JTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1pdGVtLCBpb24taW5wdXQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/kewpa21/create/create.page.ts":
/*!****************************************************!*\
  !*** ./src/app/core/kewpa21/create/create.page.ts ***!
  \****************************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_kewpa21_kewpa21_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/kewpa21/kewpa21.service */ "./src/app/shared/services/kewpa21/kewpa21.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let CreatePage = class CreatePage {
    constructor(router, route, formBuilder, modalCtrl, loadingCtrl, toastCtrl, kewpa21Service, plt, alertController) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.kewpa21Service = kewpa21Service;
        this.plt = plt;
        this.alertController = alertController;
        this.kewpa21 = {};
        this.count = 0;
        this.productLength = 0;
        this.updateMode = false;
        this.plt.backButton.subscribeWithPriority(10, () => {
            this.router.navigate(['/core/kewpa21-list']);
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = this.route.snapshot.params['kewpa21_id'];
            if (params !== undefined) {
                this.updateMode = true;
                this.getFormValues(params);
                this.initkewpa21Form();
                this.selected_id = params;
            }
            else {
                this.initkewpa21Form();
            }
        });
    }
    initkewpa21Form() {
        this.kewpa21Form = this.formBuilder.group({
            kaedah_pelupusan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            justifikasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            scan_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
    }
    navigateToPage(path) {
        this.router.navigate([path]);
    }
    submitKewpa21() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.kewpa21Service.create(this.kewpa21Form.value).subscribe((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            }, () => {
                this.router.navigate(['/core/kewpa21-list']);
            });
        });
    }
    submitKewpa21Update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.kewpa21Service.update(this.selected_id, this.kewpa21Form.value).subscribe((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            }, () => {
                this.router.navigate(['/core/kewpa21-list']);
            });
        });
    }
    submitKewpa21UpdateSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.kewpa21Form.patchValue({ 'scan_status': 'diperiksa' });
            yield this.kewpa21Service.update(this.selected_id, this.kewpa21Form.value).subscribe((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            }, () => {
                this.router.navigate(['/core/kewpa21-list']);
            });
        });
    }
    getFormValues(params) {
        this.kewpa21Service.getOne(params).subscribe((res) => {
            this.kewpa21 = res;
            this.kewpa21FormValues = res;
            this.setFormValues();
        }, (err) => {
            console.log(err);
        });
    }
    setFormValues() {
        this.kewpa21Form.setValue({
            kaedah_pelupusan: this.kewpa21FormValues.kaedah_pelupusan,
            justifikasi: this.kewpa21FormValues.justifikasi,
            scan_status: this.kewpa21FormValues.scan_status,
        });
    }
};
CreatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_shared_services_kewpa21_kewpa21_service__WEBPACK_IMPORTED_MODULE_3__["Kewpa21Service"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa21/create/create.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create.page.scss */ "./src/app/core/kewpa21/create/create.page.scss")).default]
    })
], CreatePage);



/***/ })

}]);
//# sourceMappingURL=core-kewpa21-create-create-module-es2015.js.map