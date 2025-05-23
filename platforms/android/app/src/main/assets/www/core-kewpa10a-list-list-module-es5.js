function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-kewpa10a-list-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10a/list/list.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10a/list/list.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreKewpa10aListListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navigateToPage('/core/dashboard')\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">KEW.PA 10 A</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button> </ion-buttons> </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\" class=\"background\">\n\n    <ion-toolbar>\n      <ion-buttons slot=\"secondary\">\n        <ion-button (click)=\"navigateToPage('/core/kewpa10a-create')\">\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Senarai Borang</ion-title>\n    </ion-toolbar>\n    <ion-list *ngFor=\"let i of kewpa10a\">\n      <ion-item>\n        <ion-label>No Rujukan {{i.id}}</ion-label>\n        <ion-icon class=\"item-right\" (click)=\"viewKewpa10a(i)\" name=\"eye-outline\"></ion-icon>\n        <ion-icon class=\"item-right\" (click)=\"editKewpa10a(i)\" name=\"create\"></ion-icon>\n        <ion-icon class=\"item-right\" (click)=\"deleteKewpa10a(i)\" name=\"trash-bin-outline\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/kewpa10a/list/list-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/kewpa10a/list/list-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ListPageRoutingModule */

  /***/
  function srcAppCoreKewpa10aListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function () {
      return ListPageRoutingModule;
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


    var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/core/kewpa10a/list/list.page.ts");

    var routes = [{
      path: '',
      component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }];

    var ListPageRoutingModule = function ListPageRoutingModule() {
      _classCallCheck(this, ListPageRoutingModule);
    };

    ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/kewpa10a/list/list.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/kewpa10a/list/list.module.ts ***!
    \***************************************************/

  /*! exports provided: ListPageModule */

  /***/
  function srcAppCoreKewpa10aListListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
      return ListPageModule;
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


    var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-routing.module */
    "./src/app/core/kewpa10a/list/list-routing.module.ts");
    /* harmony import */


    var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/core/kewpa10a/list/list.page.ts");

    var ListPageModule = function ListPageModule() {
      _classCallCheck(this, ListPageModule);
    };

    ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]],
      declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })], ListPageModule);
    /***/
  },

  /***/
  "./src/app/core/kewpa10a/list/list.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/core/kewpa10a/list/list.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreKewpa10aListListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUva2V3cGExMGEvbGlzdC9saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/kewpa10a/list/list.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/kewpa10a/list/list.page.ts ***!
    \*************************************************/

  /*! exports provided: ListPage */

  /***/
  function srcAppCoreKewpa10aListListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPage", function () {
      return ListPage;
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


    var src_app_shared_services_kewpa10a_kewpa10a_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/kewpa10a/kewpa10a.service */
    "./src/app/shared/services/kewpa10a/kewpa10a.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _view_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../view/view.page */
    "./src/app/core/kewpa10a/view/view.page.ts");

    var ListPage = /*#__PURE__*/function () {
      function ListPage(router, modalCtrl, kewpa10aService) {
        _classCallCheck(this, ListPage);

        this.router = router;
        this.modalCtrl = modalCtrl;
        this.kewpa10aService = kewpa10aService;
        this.kewpa10a = [];
      }

      _createClass(ListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getKewpa10a();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getKewpa10a();
        }
      }, {
        key: "getKewpa10a",
        value: function getKewpa10a() {
          var _this = this;

          this.kewpa10aService.getAll().subscribe(function (res) {
            console.log(res);
            _this.kewpa10a = res;
          }, function (err) {
            console.log(err);
          }, function () {});
        }
      }, {
        key: "deleteKewpa10a",
        value: function deleteKewpa10a(kewpa10a) {
          var _this2 = this;

          this.kewpa10aService["delete"](kewpa10a.id).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          }, function () {
            _this2.getKewpa10a();
          });
        }
      }, {
        key: "editKewpa10a",
        value: function editKewpa10a(kewpa10a) {
          this.router.navigate(['/core/kewpa10a-edit/' + kewpa10a.id]);
        }
      }, {
        key: "navigateToPage",
        value: function navigateToPage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "viewKewpa10a",
        value: function viewKewpa10a(kewpa10a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _view_view_page__WEBPACK_IMPORTED_MODULE_5__["ViewPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'kewpa10a': kewpa10a
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ListPage;
    }();

    ListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_shared_services_kewpa10a_kewpa10a_service__WEBPACK_IMPORTED_MODULE_3__["Kewpa10aService"]
      }];
    };

    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10a/list/list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list.page.scss */
      "./src/app/core/kewpa10a/list/list.page.scss"))["default"]]
    })], ListPage);
    /***/
  }
}]);
//# sourceMappingURL=core-kewpa10a-list-list-module-es5.js.map