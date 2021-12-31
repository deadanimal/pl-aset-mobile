(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-kewpa21-view-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa21/view/view.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa21/view/view.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n      <ion-content class=\"content\">\n        <div class=\"custom-figma-header ion-text-center\">\n    <div class=\"custom-figma-title\">\n      BORANG PELUPUSAN <br />ASET ALIH<br />\n      KE.WPA-21\n    </div>\n  </div>\n\n  <br />\n\n        <div>\n          <form>\n            <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">No Siri Pendaftaran</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.no_siri_pendaftaran}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Kaedah Aset</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.keadaan_aset}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Syor Kaedah Pelupusan</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.kaedah_pelupusan}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Justifikasi</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.justifikasi}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Catatan</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa21.catatan}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <br>\n               <div  padding> \n          <div style=\"padding: 20px; width: 60%; margin-left: 20%;\">\n            <ion-button\n            \n              *ngIf=\"kewpa21.scan_status == 'scanned'\"\n              color=\"primary\"\n              size=\"medium\"\n              (click)=\"editKewpa21()\"\n              expand=\"block\"\n            >\n              Kemaskini</ion-button\n            >\n          </div>\n        </div>\n\n            </ion-list>\n          </form>\n        </div>\n  <div\n    (click)=\"navigateToPage('/core/dashboard')\"\n    class=\"custom-figma-right\"\n  ></div>\n  <ion-icon (click)=\"navigateToPage('/core/kewpa21-list')\" class=\"custom-figma-fab-right\" name=\"close-outline\"></ion-icon>\n\n\n      </ion-content>\n");

/***/ }),

/***/ "./src/app/core/kewpa21/view/view-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/kewpa21/view/view-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageRoutingModule", function() { return ViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.page */ "./src/app/core/kewpa21/view/view.page.ts");




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_3__["ViewPage"]
    }
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewPageRoutingModule);



/***/ }),

/***/ "./src/app/core/kewpa21/view/view.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/kewpa21/view/view.module.ts ***!
  \**************************************************/
/*! exports provided: ViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/core/kewpa21/view/view-routing.module.ts");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view.page */ "./src/app/core/kewpa21/view/view.page.ts");







let ViewPageModule = class ViewPageModule {
};
ViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewPageRoutingModule"]
        ],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_6__["ViewPage"]]
    })
], ViewPageModule);



/***/ }),

/***/ "./src/app/core/kewpa21/view/view.page.scss":
/*!**************************************************!*\
  !*** ./src/app/core/kewpa21/view/view.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-toolbar {\n  --color: var(--ion-color-primary);\n  position: absolute;\n}\n\n.card-body {\n  height: 90%;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\n.card-body img {\n  border-radius: 18px;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n\nion-content .content {\n  margin: 0;\n  padding: 10px 30px 10px;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n}\n\n.item-start {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n}\n\nion-input,\nion-datetime {\n  font-size: 12px;\n}\n\nion-icon {\n  font-size: 30px;\n  color: #d99558;\n}\n\nion-col {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.h-200 {\n  height: 200px;\n}\n\n.custom-figma-header {\n  width: 100%;\n  height: 150px;\n  left: 0px;\n  top: 50px;\n  background: #141e56;\n  border-bottom-left-radius: 31px;\n  border-bottom-right-radius: 31px;\n}\n\n.custom-figma-title {\n  padding-top: 30px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.015em;\n  color: #ffffff;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.custom-figma-bottom {\n  position: fixed;\n  left: 32%;\n  right: 32%;\n  top: 98.4%;\n  bottom: 0.99%;\n  background: #000000;\n  border-radius: 10px;\n}\n\n.custom-figma-left {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 8%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-right {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 80%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-button {\n  background: #141e56;\n  border: 1px solid rgba(255, 253, 253, 0.1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 5px;\n  width: 81px;\n  height: 45px;\n}\n\n.custom-figma-fab-left {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 11%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\n.custom-figma-fab-right {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 83%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\nion-item, ion-input {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGEyMS92aWV3L3ZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9jb3JlL2tld3BhMjEvdmlldy92aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURJRTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREtBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7O0VBRUUsZUFBQTtBQ0ZGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURLQTtFQUNFLGFBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHNEQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUva2V3cGEyMS92aWV3L3ZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweDtcbiAgfVxufVxuXG4uaXRlbS1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pdGVtLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbmlvbi1pbnB1dCxcbmlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLy9maWdtYSBzdHlsaW5nIHN0YXJ0cyBoZXJlXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG4gIGNvbG9yOiByZ2JhKDIxNywgMTQ5LCA4OCk7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5oLTIwMCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzFweDtcbn1cblxuLmN1c3RvbS1maWdtYS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTVlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDMyJTtcbiAgcmlnaHQ6IDMyJTtcbiAgdG9wOiA5OC40JTtcbiAgYm90dG9tOiAwLjk5JTtcblxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG5cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogODFweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1sZWZ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMSU7XG4gIHRvcDogOTEuNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogODMlO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0sIGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG59XG4uY2FyZC1ib2R5IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG5cbmlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweDtcbn1cblxuLml0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0tc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24taW5wdXQsXG5pb24tZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2Q5OTU1ODtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaC0yMDAge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgYmFja2dyb3VuZDogIzE0MWU1NjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMxcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDE1ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jdXN0b20tZmlnbWEtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAzMiU7XG4gIHJpZ2h0OiAzMiU7XG4gIHRvcDogOTguNCU7XG4gIGJvdHRvbTogMC45OSU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtbGVmdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogOCU7XG4gIHRvcDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTcyNzYxO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xufVxuXG4uY3VzdG9tLWZpZ21hLXJpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiA4MCU7XG4gIHRvcDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTcyNzYxO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xufVxuXG4uY3VzdG9tLWZpZ21hLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxNDFlNTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTMsIDI1MywgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogODFweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1sZWZ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMSU7XG4gIHRvcDogOTEuNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogODMlO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0sIGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/kewpa21/view/view.page.ts":
/*!************************************************!*\
  !*** ./src/app/core/kewpa21/view/view.page.ts ***!
  \************************************************/
/*! exports provided: ViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPage", function() { return ViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_kewpa21_kewpa21_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/kewpa21/kewpa21.service */ "./src/app/shared/services/kewpa21/kewpa21.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ViewPage = class ViewPage {
    constructor(router, route, loadingCtrl, modalCtrl, alertController, kewpa21Service) {
        this.router = router;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.kewpa21Service = kewpa21Service;
        this.kewpa21 = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        let kewpa21_id = this.route.snapshot.params['kewpa21_id'];
        this.getKewpa21(kewpa21_id);
    }
    getKewpa21(kewpa21_id) {
        this.kewpa21Service.getOne(kewpa21_id).subscribe((res) => {
            this.kewpa21 = res;
            console.log(this.kewpa21);
        }, (err) => {
            console.log(err);
        }, () => {
        });
    }
    editKewpa21() {
        this.navigateToPage('/core/kewpa21-edit/' + this.kewpa21.id);
    }
    navigateToPage(path) {
        this.router.navigate([path]);
    }
};
ViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_shared_services_kewpa21_kewpa21_service__WEBPACK_IMPORTED_MODULE_3__["Kewpa21Service"] }
];
ViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa21/view/view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view.page.scss */ "./src/app/core/kewpa21/view/view.page.scss")).default]
    })
], ViewPage);



/***/ })

}]);
//# sourceMappingURL=core-kewpa21-view-view-module-es2015.js.map