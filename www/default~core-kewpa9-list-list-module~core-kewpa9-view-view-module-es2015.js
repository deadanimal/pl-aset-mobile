(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~core-kewpa9-list-list-module~core-kewpa9-view-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/view/view.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/view/view.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">KEW.PA 9 No.{{kewpa9.id}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button> \n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-content>\n    <div class=\"card-body\">\n      <ion-content class=\"content\">\n        <br>\n        <br>\n        <div class=\"item-start\">\n          <ion-badge color=\"primary\" style=\"border-radius: 19px; padding: 4px;\"> KEWPA 9 </ion-badge>\n        </div>\n\n        <div >\n          <form>\n            <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Tujuan</ion-label>\n                <ion-input value=\"{{kewpa9.tujuan}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Tempat Digunakan</ion-label>\n                <ion-input value=\"{{kewpa9.tempat_digunakan}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <div>\n                  <div *ngFor=\"let k9 of kewpa9.info_kewpa9; let i=index\">\n                    <br>\n                    <div class=\"item-start\">\n                      <ion-badge  color=\"primary\">INFO KEWPA ({{i+1}})</ion-badge>\n                    </div>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">No Siri Pendaftaran</ion-label>\n                      <ion-input class=\"small-font\" value=\"{{k9.no_siri_pendaftaran}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Catatan</ion-label>\n                      <ion-input class=\"small-font\" value=\"{{k9.no_siri_pendaftaran}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Status</ion-label>\n                      <ion-input class=\"small-font\" value=\"{{k9.status}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Pinjam</ion-label>\n                      <ion-input class=\"small-font\" value=\"{{k9.tarikh_dipinjam.slice(0,10)}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Dijangka Pulang</ion-label>\n                      <ion-input class=\"small-font\" value=\"{{k9.tarikh_dijangka.slice(0,10)}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t              </ion-item>\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Dipulangkan</ion-label>\n                      <ion-input class=\"small-font\" value=\"{{k9.tarikh_dipulangkan.slice(0,10)}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t              </ion-item>\n\n\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Diterima</ion-label>\n                      <ion-input class=\"small-font\" value=\"{{k9.tarikh_diterima.slice(0,10)}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t              </ion-item>\n\n\n                    <!-- paste to kewpa8 form\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">No Siri Pendaftaran</ion-label>\n\t\t\t    \t          <ion-input class=\"small-font\" placeholder=\"\" mode=\"ios\" formControlName=\"no_siri_pendaftaran\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Tarikh Kerosakan</ion-label>\n                      <ion-datetime value=\"\" display-timezone=\"utc\" name=\"tarikh_kerosakan\"></ion-datetime>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Perihal Kerosakan</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"perihal_kerosakan\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Jumlah Kos Penyelenggaraan</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"jumlah_kos_penyelenggaraan\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Anggaran Kos</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"anggaran_kos\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Syor Ulasan</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"syor_ulasan\"></ion-input>\n\t\t\t              </ion-item>\n                    <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t          <ion-label position=\"stacked\" mode=\"ios\">Ulasan</ion-label>\n\t\t\t    \t          <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"ulasan\"></ion-input>\n\t\t\t              </ion-item>\n                    -->\n\n                  </div>\n               </div>\n\n               \n            </ion-list>\n          </form>\n        </div>\n      </ion-content>\n    </div>\n\n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/kewpa9/view/view.page.scss":
/*!*************************************************!*\
  !*** ./src/app/core/kewpa9/view/view.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-toolbar {\n  --color: var(--ion-color-primary);\n  position: absolute;\n}\n\n.card-body {\n  height: 90%;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\n.card-body img {\n  border-radius: 18px;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n\nion-content .content {\n  margin: 0;\n  padding: 10px 30px 10px;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n}\n\n.item-start {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n}\n\nion-input {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGE5L3ZpZXcvdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUva2V3cGE5L3ZpZXcvdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBRENFO0VBQ0UsbUJBQUE7QUNDSjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FESUU7RUFDRSxTQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9rZXdwYTkvdmlldy92aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG5cbiAgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTlweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4O1xuICB9XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuXG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDEycHg7XG5cbn1cbiIsImlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMi41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMi41cmVtO1xufVxuLmNhcmQtYm9keSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOXB4O1xufVxuXG5pb24tY29udGVudCAuY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHg7XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/kewpa9/view/view.page.ts":
/*!***********************************************!*\
  !*** ./src/app/core/kewpa9/view/view.page.ts ***!
  \***********************************************/
/*! exports provided: ViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPage", function() { return ViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ViewPage = class ViewPage {
    constructor(loadingCtrl, modalCtrl, alertController) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
    }
    ngOnInit() {
        console.log("pass data to modal", this.kewpa9);
    }
    dismissModal() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
ViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewPage.prototype, "kewpa9", void 0);
ViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/view/view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view.page.scss */ "./src/app/core/kewpa9/view/view.page.scss")).default]
    })
], ViewPage);



/***/ })

}]);
//# sourceMappingURL=default~core-kewpa9-list-list-module~core-kewpa9-view-view-module-es2015.js.map