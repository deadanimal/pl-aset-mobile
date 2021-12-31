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


    __webpack_exports__["default"] = "<!-- <ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navigateToPage('/core/dashboard')\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">KEW.PS 10a</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button> </ion-buttons> </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"custom-figma-header ion-text-center\">\n    <div class=\"custom-figma-title\">\n      BORANG ADUAN KEROSAKAN <br />ASET ALIH<br />\n      KEW.PA-10 A\n    </div>\n  </div>\n\n  <br />\n  <div id=\"container\" class=\"background\">\n    <div class=\"custom-figma-item\"></div>\n    <ion-list *ngFor=\"let i of kewpa10a\">\n      <ion-item class=\"item-form\">\n        <ion-input\n          (click)=\"viewKewpa10a(i)\"\n          placeholder=\"\"\n          mode=\"ios\"\n          value=\"No Rujukan {{i.id}}\"\n          readonly\n        ></ion-input>\n        <div class=\"custom-figma-button ion-text-center\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\" (click)=\"editKewpa10a(i)\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"6\" (click)=\"deleteKewpa10a(i)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-item>\n    </ion-list>\n\n\n\n  </div>\n  <div class=\"custom-figma-bottom\"></div>\n  <div (click)=\"navigateToPage('/core/kewpa10a-create')\" class=\"custom-figma-left\">\n  </div>\n  <ion-icon (click)=\"navigateToPage('/core/kewpa10a-create')\" class=\"custom-figma-fab-left\" name=\"add-outline\"></ion-icon>\n  <div\n    (click)=\"navigateToPage('/core/dashboard')\"\n    class=\"custom-figma-right\"\n  ></div>\n  <ion-icon (click)=\"navigateToPage('/core/dashboard')\" class=\"custom-figma-fab-right\" name=\"close-outline\"></ion-icon>\n\n\n</ion-content>\n";
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


    __webpack_exports__["default"] = "ion-icon {\n  font-size: 30px;\n  color: #d99558;\n}\n\nion-col {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.h-200 {\n  height: 200px;\n}\n\n.custom-figma-header {\n  width: 100%;\n  height: 150px;\n  left: 0px;\n  top: 50px;\n  background: #141e56;\n  border-bottom-left-radius: 31px;\n  border-bottom-right-radius: 31px;\n}\n\n.custom-figma-title {\n  padding-top: 30px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.015em;\n  color: #ffffff;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.custom-figma-bottom {\n  position: absolute;\n  left: 32%;\n  right: 32%;\n  top: 98.4%;\n  bottom: 0.99%;\n  background: #000000;\n  border-radius: 10px;\n}\n\n.custom-figma-left {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 8%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-right {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 80%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-button {\n  background: #141E56;\n  border: 1px solid rgba(255, 253, 253, 0.1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 5px;\n  width: 81px;\n  height: 45px;\n}\n\n.custom-figma-fab-left {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  left: 11%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\n.custom-figma-fab-right {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  left: 83%;\n  top: 91.5%;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGExMGEvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29yZS9rZXdwYTEwYS9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDSSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHNEQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9rZXdwYTEwYS9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG4gICAgY29sb3I6IHJnYmEoMjE3LCAxNDksIDg4LCk7XG59XG5cbmlvbi1jb2wge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaC0yMDAge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgYmFja2dyb3VuZDogIzE0MWU1NjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMxcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDE1ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jdXN0b20tZmlnbWEtYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMiU7XG4gIHJpZ2h0OiAzMiU7XG4gIHRvcDogOTguNCU7XG4gIGJvdHRvbTogMC45OSU7XG5cbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmN1c3RvbS1maWdtYS1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiA4JTtcbiAgdG9wOiA5MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMxNzI3NjE7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG59XG5cbi5jdXN0b20tZmlnbWEtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDgwJTtcbiAgdG9wOiA5MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMxNzI3NjE7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG59XG5cbi5jdXN0b20tZmlnbWEtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQxRTU2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTMsIDI1MywgMC4xKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gICAgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA4MXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBcbiAgICB9XG5cbi5jdXN0b20tZmlnbWEtZmFiLWxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbGVmdDogMTElO1xuICAgIHRvcDogOTEuNSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIFxuICB9XG5cbi5jdXN0b20tZmlnbWEtZmFiLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGxlZnQ6IDgzJTtcbiAgICB0b3A6IDkxLjUlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gIH0iLCJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNkOTk1NTg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmgtMjAwIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmN1c3RvbS1maWdtYS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDFlNTY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMxcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzIlO1xuICByaWdodDogMzIlO1xuICB0b3A6IDk4LjQlO1xuICBib3R0b206IDAuOTklO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxRTU2O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDgxcHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1mYWItbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTElO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmN1c3RvbS1maWdtYS1mYWItcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDgzJTtcbiAgdG9wOiA5MS41JTtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */";
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