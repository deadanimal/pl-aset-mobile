function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-kewpa10b-create-create-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10b/create/create.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10b/create/create.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreKewpa10bCreateCreatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navigateToPage('/core/kewpa10b-list')\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">KEW.PA 10 B</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content>\n    <div class=\"card-body\">\n      <ion-content class=\"content\">\n        <br>\n        <br>\n        <div class=\"item-start\">\n          <ion-badge color=\"primary\" style=\"border-radius: 110bpx; padding: 4px;\"> KEWPA 10b </ion-badge>\n        </div>\n\n        <div >\n          <form [formGroup]=\"kewpa10bForm\">\n            <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Nombor Wo</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"no_wo\"></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">No. Plet</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"plet_no_jenis_kenderaan\"></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Pengguna Terakhir</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"pengguna_terakhir\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Tarikh Rosak</ion-label>\n                <ion-datetime class=\"small-font\" value=\"\" display-timezone=\"utc\" formControlName=\"tarikh_rosak\"></ion-datetime>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Bil</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"bil\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Perihal Rosak</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"perihal_rosak\"></ion-input>\n\t\t\t        </ion-item>\n\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Kos Penyelenggaraan Dahulu(RM)</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"kos_penyelenggaraan_dulu\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Anggaran Kos Penyelenggaraan(RM)</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"anggaran_kos_penyelenggaraan\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Syor Ulasan</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"syor_ulasan\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Ulasan</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"ulasan\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Pembaikan Dalaman Luar</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"pembaikan_dalaman_luar\"></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Alat Ganti</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" mode=\"ios\" formControlName=\"alatganti\"></ion-input>\n\t\t\t        </ion-item>\n\n               <br>\n               <div padding>\n                 <div *ngIf=\"updateMode === false\" class=\"card\" style=\"padding: 20px;\">\n                  <ion-button color=\"primary\" size=\"medium\" [disabled]=\"kewpa10bForm.invalid\" (click)=\"submitKewpa10b()\"\n                    expand=\"block\">\n                    Simpan</ion-button>\n                 </div>\n\n                 <div *ngIf=\"updateMode === true\" class=\"card\" style=\"padding: 20px;\">\n                  <ion-button color=\"primary\" size=\"medium\" [disabled]=\"kewpa10bForm.invalid\" (click)=\"submitKewpa10bUpdate()\"\n                    expand=\"block\">\n                    Simpan</ion-button>\n                 </div>\n\n\n               </div>\n            </ion-list>\n          </form>\n        </div>\n      </ion-content>\n    </div>\n\n  </ion-content>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/kewpa10b/create/create-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/kewpa10b/create/create-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CreatePageRoutingModule */

  /***/
  function srcAppCoreKewpa10bCreateCreateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePageRoutingModule", function () {
      return CreatePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create.page */
    "./src/app/core/kewpa10b/create/create.page.ts");

    var routes = [{
      path: '',
      component: _create_page__WEBPACK_IMPORTED_MODULE_3__["CreatePage"]
    }];

    var CreatePageRoutingModule = function CreatePageRoutingModule() {
      _classCallCheck(this, CreatePageRoutingModule);
    };

    CreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/kewpa10b/create/create.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/kewpa10b/create/create.module.ts ***!
    \*******************************************************/

  /*! exports provided: CreatePageModule */

  /***/
  function srcAppCoreKewpa10bCreateCreateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePageModule", function () {
      return CreatePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-routing.module */
    "./src/app/core/kewpa10b/create/create-routing.module.ts");
    /* harmony import */


    var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create.page */
    "./src/app/core/kewpa10b/create/create.page.ts");

    var CreatePageModule = function CreatePageModule() {
      _classCallCheck(this, CreatePageModule);
    };

    CreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePageRoutingModule"]],
      declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
    })], CreatePageModule);
    /***/
  },

  /***/
  "./src/app/core/kewpa10b/create/create.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/core/kewpa10b/create/create.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreKewpa10bCreateCreatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-toolbar {\n  --color: var(--ion-color-primary);\n  position: absolute;\n}\n\n.card-body {\n  height: 90%;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\n.card-body img {\n  border-radius: 18px;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n\nion-content .content {\n  margin: 0;\n  padding: 10px 30px 10px;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n}\n\n.item-start {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n}\n\nion-input, ion-datetime {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGExMGIvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUva2V3cGExMGIvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBRENFO0VBQ0UsbUJBQUE7QUNDSjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FESUU7RUFDRSxTQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9rZXdwYTEwYi9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG5cbiAgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTlweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4O1xuICB9XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxufVxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG59XG4uY2FyZC1ib2R5IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG5cbmlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweDtcbn1cblxuLml0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0tc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/kewpa10b/create/create.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/kewpa10b/create/create.page.ts ***!
    \*****************************************************/

  /*! exports provided: CreatePage */

  /***/
  function srcAppCoreKewpa10bCreateCreatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePage", function () {
      return CreatePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_kewpa10b_kewpa10b_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/kewpa10b/kewpa10b.service */
    "./src/app/shared/services/kewpa10b/kewpa10b.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CreatePage = /*#__PURE__*/function () {
      function CreatePage(router, route, formBuilder, modalCtrl, loadingCtrl, toastCtrl, kewpa10bService, plt, alertController) {
        var _this = this;

        _classCallCheck(this, CreatePage);

        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.kewpa10bService = kewpa10bService;
        this.plt = plt;
        this.alertController = alertController;
        this.count = 0;
        this.productLength = 0;
        this.updateMode = false;
        this.plt.backButton.subscribeWithPriority(10, function () {
          _this.router.navigate(['/core/kewpa10b-list']);
        });
      }

      _createClass(CreatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var params;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    params = this.route.snapshot.params['kewpa10b_id'];

                    if (params !== undefined) {
                      this.updateMode = true;
                      this.getFormValues(params);
                      this.initkewpa10bForm();
                      this.selected_id = params;
                    } else {
                      this.initkewpa10bForm();
                    }

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "initkewpa10bForm",
        value: function initkewpa10bForm() {
          this.kewpa10bForm = this.formBuilder.group({
            no_wo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            plet_no_jenis_kenderaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            pengguna_terakhir: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            tarikh_rosak: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            bil: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            perihal_rosak: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            kos_penyelenggaraan_dulu: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            anggaran_kos_penyelenggaraan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            syor_ulasan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            ulasan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            pembaikan_dalaman_luar: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            alatganti: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
          });
        }
      }, {
        key: "navigateToPage",
        value: function navigateToPage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "submitKewpa10b",
        value: function submitKewpa10b() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.kewpa10bService.create(this.kewpa10bForm.value).subscribe(function (res) {
                      console.log(res);
                    }, function (err) {
                      console.log(err);
                    }, function () {
                      _this2.router.navigate(['/core/kewpa10b-list']);
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "submitKewpa10bUpdate",
        value: function submitKewpa10bUpdate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.kewpa10bService.update(this.selected_id, this.kewpa10bForm.value).subscribe(function (res) {
                      console.log(res);
                    }, function (err) {
                      console.log(err);
                    }, function () {
                      _this3.router.navigate(['/core/kewpa10b-list']);
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getFormValues",
        value: function getFormValues(params) {
          var _this4 = this;

          this.kewpa10bService.getOne(params).subscribe(function (res) {
            _this4.kewpa10bFormValues = res;

            _this4.setFormValues();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "setFormValues",
        value: function setFormValues() {
          console.log("hu", this.kewpa10bFormValues);
          this.kewpa10bForm.setValue({
            no_wo: this.kewpa10bFormValues.no_wo,
            plet_no_jenis_kenderaan: this.kewpa10bFormValues.plet_no_jenis_kenderaan,
            pengguna_terakhir: this.kewpa10bFormValues.pengguna_terakhir,
            tarikh_rosak: this.kewpa10bFormValues.tarikh_rosak,
            bil: this.kewpa10bFormValues.bil,
            perihal_rosak: this.kewpa10bFormValues.perihal_rosak,
            kos_penyelenggaraan_dulu: this.kewpa10bFormValues.kos_penyelenggaraan_dulu,
            anggaran_kos_penyelenggaraan: this.kewpa10bFormValues.anggaran_kos_penyelenggaraan,
            syor_ulasan: this.kewpa10bFormValues.syor_ulasan,
            ulasan: this.kewpa10bFormValues.ulasan,
            pembaikan_dalaman_luar: this.kewpa10bFormValues.pembaikan_dalaman_luar,
            alatganti: this.kewpa10bFormValues.alatganti
          });
        }
      }]);

      return CreatePage;
    }();

    CreatePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: src_app_shared_services_kewpa10b_kewpa10b_service__WEBPACK_IMPORTED_MODULE_3__["Kewpa10bService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    CreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10b/create/create.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create.page.scss */
      "./src/app/core/kewpa10b/create/create.page.scss"))["default"]]
    })], CreatePage);
    /***/
  }
}]);
//# sourceMappingURL=core-kewpa10b-create-create-module-es5.js.map