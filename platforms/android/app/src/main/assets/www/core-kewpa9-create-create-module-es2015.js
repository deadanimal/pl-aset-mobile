(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-kewpa9-create-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/create/create.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/create/create.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navigateToPage('/core/kewpa9-list')\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">KEW.PA 9 A</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content>\n    <div class=\"card-body\">\n      <ion-content class=\"content\">\n        <br>\n        <br>\n        <div class=\"item-start\">\n          <ion-badge color=\"primary\" style=\"border-radius: 19px; padding: 4px;\"> KEWPA 9 </ion-badge>\n        </div>\n\n        <div >\n          <form [formGroup]=\"kewpa9Form\">\n            <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Tujuan</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"tujuan\"></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Tempat Digunakan</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"tempat_digunakan\"></ion-input>\n\t\t\t        </ion-item>\n\n              <div formArrayName=\"info_kewpa9\">\n                  <div *ngFor=\"let info_kewpa9 of getInfoArray.controls; let i=index\" [formGroupName]=\"i\">\n                    <br>\n                    <div class=\"item-start\">\n                      <ion-badge  color=\"primary\">INFO KEWPA ({{i+1}})</ion-badge>\n                    </div>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">No Siri Pendaftaran</ion-label>\n\t\t\t    \t          <ion-input class=\"small-font\" placeholder=\"\" mode=\"ios\" formControlName=\"no_siri_pendaftaran\"></ion-input>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Catatan</ion-label>\n\t\t\t    \t          <ion-input class=\"small-font\" placeholder=\"\" mode=\"ios\" formControlName=\"catatan\"></ion-input>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Status</ion-label>\n\t\t\t    \t          <ion-input class=\"small-font\" placeholder=\"\" mode=\"ios\" formControlName=\"status\"></ion-input>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Pinjam</ion-label>\n                      <ion-datetime class=\"small-font\" value=\"\" display-timezone=\"utc\" formControlName=\"tarikh_dipinjam\"></ion-datetime>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Dijangka Pulang</ion-label>\n                      <ion-datetime value=\"\" display-timezone=\"utc\" formControlName=\"tarikh_dijangka\"></ion-datetime>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Dipulangkan</ion-label>\n                      <ion-datetime value=\"\" display-timezone=\"utc\" formControlName=\"tarikh_dipulangkan\"></ion-datetime>\n\t\t\t              </ion-item>\n\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Diterima</ion-label>\n                      <ion-datetime value=\"\" display-timezone=\"utc\" formControlName=\"tarikh_diterima\"></ion-datetime>\n\t\t\t              </ion-item>\n\n\n                    <!-- paste to kewpa8 form\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">No Siri Pendaftaran</ion-label>\n\t\t\t    \t          <ion-input class=\"small-font\" placeholder=\"\" mode=\"ios\" formControlName=\"no_siri_pendaftaran\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Kerosakan</ion-label>\n                      <ion-datetime value=\"\" display-timezone=\"utc\" name=\"tarikh_kerosakan\"></ion-datetime>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Perihal Kerosakan</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"perihal_kerosakan\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Jumlah Kos Penyelenggaraan</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"jumlah_kos_penyelenggaraan\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Anggaran Kos</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"anggaran_kos\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Syor Ulasan</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"syor_ulasan\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Ulasan</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"ulasan\"></ion-input>\n\t\t\t              </ion-item>\n                    -->\n                    <div style=\"display: flex; justify-content: end; margin-right: 20px;\">\n                       <ion-icon *ngIf=\"i == (productLength-1)\" style=\"margin-right: 20px;\" (click)=\"tambahInfoKewpa9()\" color=\"primary\" slot=\"icon-only\" name=\"add\"></ion-icon>\n                       <ion-icon style=\"margin-right: 20px;\" (click)=\"deleteInfo(i)\" color=\"primary\" slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                     </div>\n\n\n                  </div>\n               </div>\n\n               \n               <br>\n               <div padding>\n                 <div *ngIf=\"updateMode === false\" class=\"card\" style=\"padding: 20px;\">\n                  <ion-button color=\"primary\" size=\"medium\" [disabled]=\"kewpa9Form.invalid\" (click)=\"submitKewpa9()\"\n                    expand=\"block\">\n                    Simpan</ion-button>\n                 </div>\n\n                 <div *ngIf=\"updateMode === true\" class=\"card\" style=\"padding: 20px;\">\n                  <ion-button color=\"primary\" size=\"medium\" [disabled]=\"kewpa9Form.invalid\" (click)=\"submitKewpa9Update()\"\n                    expand=\"block\">\n                    Simpan</ion-button>\n                 </div>\n\n               </div>\n            </ion-list>\n          </form>\n        </div>\n      </ion-content>\n    </div>\n\n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/kewpa9/create/create-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/kewpa9/create/create-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageRoutingModule", function() { return CreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.page */ "./src/app/core/kewpa9/create/create.page.ts");




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

/***/ "./src/app/core/kewpa9/create/create.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/kewpa9/create/create.module.ts ***!
  \*****************************************************/
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
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-routing.module */ "./src/app/core/kewpa9/create/create-routing.module.ts");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/core/kewpa9/create/create.page.ts");







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

/***/ "./src/app/core/kewpa9/create/create.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/kewpa9/create/create.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-toolbar {\n  --color: var(--ion-color-primary);\n  position: absolute;\n}\n\n.card-body {\n  height: 90%;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\n.card-body img {\n  border-radius: 18px;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n\nion-content .content {\n  margin: 0;\n  padding: 10px 30px 10px;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n}\n\n.item-start {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n}\n\nion-input, ion-datetime {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGE5L2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9jb3JlL2tld3BhOS9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURJRTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREtBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FETUE7RUFDRSxlQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2tld3BhOS9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG5cbiAgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTlweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4O1xuICB9XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxufVxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG59XG4uY2FyZC1ib2R5IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG5cbmlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweDtcbn1cblxuLml0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0tc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/kewpa9/create/create.page.ts":
/*!***************************************************!*\
  !*** ./src/app/core/kewpa9/create/create.page.ts ***!
  \***************************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_kewpa9_kewpa9_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/kewpa9/kewpa9.service */ "./src/app/shared/services/kewpa9/kewpa9.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let CreatePage = class CreatePage {
    constructor(router, route, formBuilder, modalCtrl, loadingCtrl, toastCtrl, kewpa9Service, plt, alertController) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.kewpa9Service = kewpa9Service;
        this.plt = plt;
        this.alertController = alertController;
        this.count = 0;
        this.productLength = 0;
        this.updateMode = false;
        this.plt.backButton.subscribeWithPriority(10, () => {
            this.router.navigate(['/core/kewpa9-list']);
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = this.route.snapshot.params['kewpa9_id'];
            if (params !== undefined) {
                this.updateMode = true;
                this.getFormValues(params);
                this.initkewpa9Form();
                this.selected_id = params;
            }
            else {
                this.initkewpa9Form();
                this.tambahInfoKewpa9();
            }
        });
    }
    initkewpa9Form() {
        this.kewpa9Form = this.formBuilder.group({
            tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            tempat_digunakan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            info_kewpa9: this.formBuilder.array([]),
        });
    }
    navigateToPage(path) {
        this.router.navigate([path]);
    }
    tambahInfoKewpa9() {
        const info_kewpa9 = this.formBuilder.group({
            no_siri_pendaftaran: [''],
            catatan: [''],
            tarikh_dipinjam: [new Date()],
            tarikh_dijangka: [new Date()],
            status: [''],
            tarikh_dipulangkan: [new Date()],
            tarikh_diterima: [new Date()],
        });
        this.getInfoArray.push(info_kewpa9);
        this.count++;
        this.productLength = this.getInfoArray.length;
    }
    deleteInfo(i) {
        this.getInfoArray.removeAt(i);
        this.count--;
        this.productLength = this.getInfoArray.length;
    }
    get getInfoArray() {
        return this.kewpa9Form.get('info_kewpa9');
    }
    submitKewpa9() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.kewpa9Service.create(this.kewpa9Form.value).subscribe((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            }, () => {
                this.router.navigate(['/core/kewpa9-list']);
            });
        });
    }
    submitKewpa9Update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.kewpa9Service.update(this.selected_id, this.kewpa9Form.value).subscribe((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            }, () => {
                this.router.navigate(['/core/kewpa9-list/']);
            });
        });
    }
    getFormValues(params) {
        this.kewpa9Service.getOne(params).subscribe((res) => {
            this.kewpa9FormValues = res;
            this.setFormValues();
        }, (err) => {
            console.log(err);
        });
    }
    setFormValues() {
        this.kewpa9Form.setValue({
            tujuan: this.kewpa9FormValues.tujuan,
            tempat_digunakan: this.kewpa9FormValues.tempat_digunakan,
            info_kewpa9: [],
        });
        this.kewpa9FormValues.info_kewpa9.forEach(element => {
            const info = this.formBuilder.group({
                id: element.id,
                no_siri_pendaftaran: element.no_siri_pendaftaran,
                catatan: element.catatan,
                tarikh_dipinjam: element.tarikh_dipinjam,
                tarikh_dijangka: element.tarikh_dijangka,
                status: element.status,
                tarikh_dipulangkan: element.tarikh_dipulangkan,
                tarikh_diterima: element.tarikh_diterima,
            });
            this.getInfoArray.push(info);
            this.count++;
            this.productLength = this.getInfoArray.length;
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
    { type: src_app_shared_services_kewpa9_kewpa9_service__WEBPACK_IMPORTED_MODULE_3__["Kewpa9Service"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/create/create.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create.page.scss */ "./src/app/core/kewpa9/create/create.page.scss")).default]
    })
], CreatePage);



/***/ })

}]);
//# sourceMappingURL=core-kewpa9-create-create-module-es2015.js.map