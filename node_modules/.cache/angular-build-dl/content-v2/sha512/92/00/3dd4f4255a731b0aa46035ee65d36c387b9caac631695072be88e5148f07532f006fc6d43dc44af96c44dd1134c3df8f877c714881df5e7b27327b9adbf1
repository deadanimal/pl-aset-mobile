function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-kewpa9-list-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/list/list.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/list/list.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreKewpa9ListListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"custom-figma-header ion-text-center\">\n    <div class=\"custom-figma-title\">\n      BORANG PERMOHONAN PERGERAKAN/PINJAMAN <br />\n      KEW.PA-9\n    </div>\n  </div>\n\n  <br />\n  <div id=\"container\" class=\"background\">\n    <div class=\"custom-figma-item\"></div>\n    <ion-list *ngFor=\"let i of kewpa9\">\n      <ion-item class=\"item-form\">\n        <ion-input\n          (click)=\"viewKewpa9(i)\"\n          placeholder=\"\"\n          mode=\"ios\"\n          value=\"No Rujukan {{i.id}}\"\n          readonly\n        ></ion-input>\n        <div class=\"custom-figma-button ion-text-center\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\" (click)=\"editKewpa9(i)\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"6\" (click)=\"deleteKewpa9(i)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-item>\n    </ion-list>\n\n\n\n  </div>\n  <div class=\"custom-figma-bottom\"></div>\n  <div (click)=\"navigateToPage('/core/kewpa9-create')\" class=\"custom-figma-left\">\n  </div>\n  <ion-icon (click)=\"navigateToPage('/core/kewpa9-create')\" class=\"custom-figma-fab-left\" name=\"add-outline\"></ion-icon>\n  <div\n    (click)=\"navigateToPage('/core/dashboard')\"\n    class=\"custom-figma-right\"\n  ></div>\n  <ion-icon (click)=\"navigateToPage('/core/dashboard')\" class=\"custom-figma-fab-right\" name=\"close-outline\"></ion-icon>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/core/kewpa9/list/list-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/kewpa9/list/list-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ListPageRoutingModule */

  /***/
  function srcAppCoreKewpa9ListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/core/kewpa9/list/list.page.ts");

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
  "./src/app/core/kewpa9/list/list.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/kewpa9/list/list.module.ts ***!
    \*************************************************/

  /*! exports provided: ListPageModule */

  /***/
  function srcAppCoreKewpa9ListListModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/core/kewpa9/list/list-routing.module.ts");
    /* harmony import */


    var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/core/kewpa9/list/list.page.ts");

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
  "./src/app/core/kewpa9/list/list.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/core/kewpa9/list/list.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreKewpa9ListListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  font-size: 30px;\n  color: #d99558;\n}\n\nion-col {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.h-200 {\n  height: 200px;\n}\n\n.custom-figma-header {\n  width: 100%;\n  height: 150px;\n  left: 0px;\n  top: 50px;\n  background: #141e56;\n  border-bottom-left-radius: 31px;\n  border-bottom-right-radius: 31px;\n}\n\n.custom-figma-title {\n  padding-top: 30px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.015em;\n  color: #ffffff;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.custom-figma-bottom {\n  position: absolute;\n  left: 32%;\n  right: 32%;\n  top: 98.4%;\n  bottom: 0.99%;\n  background: #000000;\n  border-radius: 10px;\n}\n\n.custom-figma-left {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 8%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-right {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 80%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-button {\n  background: #141E56;\n  border: 1px solid rgba(255, 253, 253, 0.1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 5px;\n  width: 81px;\n  height: 45px;\n}\n\n.custom-figma-fab-left {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  left: 11%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\n.custom-figma-fab-right {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  left: 83%;\n  top: 91.5%;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGE5L2xpc3QvbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUva2V3cGE5L2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esc0RBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDRko7O0FETUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2tld3BhOS9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4OyAvL1ByZWZlcnJlZCBzaXplIGhlcmVcbiAgICBjb2xvcjogcmdiYSgyMTcsIDE0OSwgODgsKTtcbn1cblxuaW9uLWNvbCB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5oLTIwMCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzFweDtcbn1cblxuLmN1c3RvbS1maWdtYS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTVlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMyJTtcbiAgcmlnaHQ6IDMyJTtcbiAgdG9wOiA5OC40JTtcbiAgYm90dG9tOiAwLjk5JTtcblxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMxNDFFNTY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1MywgMjUzLCAwLjEpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDgxcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIFxuICAgIH1cblxuLmN1c3RvbS1maWdtYS1mYWItbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiAxMSU7XG4gICAgdG9wOiA5MS41JTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgXG4gIH1cblxuLmN1c3RvbS1maWdtYS1mYWItcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbGVmdDogODMlO1xuICAgIHRvcDogOTEuNSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgfSIsImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2Q5OTU1ODtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaC0yMDAge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgYmFja2dyb3VuZDogIzE0MWU1NjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMxcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDE1ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jdXN0b20tZmlnbWEtYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMiU7XG4gIHJpZ2h0OiAzMiU7XG4gIHRvcDogOTguNCU7XG4gIGJvdHRvbTogMC45OSU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogOCU7XG4gIHRvcDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTcyNzYxO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xufVxuXG4uY3VzdG9tLWZpZ21hLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiA4MCU7XG4gIHRvcDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTcyNzYxO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xufVxuXG4uY3VzdG9tLWZpZ21hLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxNDFFNTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTMsIDI1MywgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogODFweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMSU7XG4gIHRvcDogOTEuNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogODMlO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/kewpa9/list/list.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/kewpa9/list/list.page.ts ***!
    \***********************************************/

  /*! exports provided: ListPage */

  /***/
  function srcAppCoreKewpa9ListListPageTs(module, __webpack_exports__, __webpack_require__) {
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


    var src_app_shared_services_kewpa9_kewpa9_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/kewpa9/kewpa9.service */
    "./src/app/shared/services/kewpa9/kewpa9.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _view_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../view/view.page */
    "./src/app/core/kewpa9/view/view.page.ts");

    var ListPage = /*#__PURE__*/function () {
      function ListPage(router, modalCtrl, kewpa9Service) {
        _classCallCheck(this, ListPage);

        this.router = router;
        this.modalCtrl = modalCtrl;
        this.kewpa9Service = kewpa9Service;
        this.kewpa9 = [];
      }

      _createClass(ListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.getKewpa9();

                  case 1:
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
          this.getKewpa9();
        }
      }, {
        key: "getKewpa9",
        value: function getKewpa9() {
          var _this = this;

          this.kewpa9Service.getAll().subscribe(function (res) {
            console.log(res);
            _this.kewpa9 = res;
          }, function (err) {
            console.log(err);
          }, function () {});
        }
      }, {
        key: "deleteKewpa9",
        value: function deleteKewpa9(kewpa9) {
          var _this2 = this;

          this.kewpa9Service["delete"](kewpa9.id).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          }, function () {
            _this2.getKewpa9();
          });
        }
      }, {
        key: "editKewpa9",
        value: function editKewpa9(kewpa9) {
          this.router.navigate(['/core/kewpa9-edit/' + kewpa9.id]);
        }
      }, {
        key: "navigateToPage",
        value: function navigateToPage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "viewKewpa9",
        value: function viewKewpa9(kewpa9) {
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
                        'kewpa9': kewpa9
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
        type: src_app_shared_services_kewpa9_kewpa9_service__WEBPACK_IMPORTED_MODULE_3__["Kewpa9Service"]
      }];
    };

    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa9/list/list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list.page.scss */
      "./src/app/core/kewpa9/list/list.page.scss"))["default"]]
    })], ListPage);
    /***/
  }
}]);
//# sourceMappingURL=core-kewpa9-list-list-module-es5.js.map