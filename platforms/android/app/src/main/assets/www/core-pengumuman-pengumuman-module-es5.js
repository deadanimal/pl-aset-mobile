function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-pengumuman-pengumuman-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/pengumuman/pengumuman.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pengumuman/pengumuman.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCorePengumumanPengumumanPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div id=\"container\" class=\"background\">\n<div class=\"custom-figma-header ion-text-center\">\n    <div class=\"custom-figma-title ion-text-center\">\n      <ion-icon style=\"font-size: 40px; color: white\" name=\"person-circle-outline\"></ion-icon>\n      <h4 style=\"margin: 0px; !important\">Nama User <br/>PENGUMUMAN</h4>\n    </div>\n  </div>\n  <br />\n\n    <div class=\"custom-figma-item\"></div>\n    <ion-list>\n\n      <ion-card *ngFor=\"let pengumuman of pengumumans\" color=\"white\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-text align=\"justify\" color=\"light\">\n            <ion-icon size=\"large\" name=\"megaphone-outline\"></ion-icon>\n            <h3 align=\"center\" style=\"color: black;\"><b>{{pengumuman.tajuk}}</b></h3>\n            <h3 align=\"center\" style=\"color: black;\"><b>{{pengumuman.tarikh_pengumuman}}</b></h3>\n            <br>\n            <img\n              src=\"{{pengumuman.gambar}}\"\n              style=\"display: block; width: 100%; height: 200px\"\n            />\n            <br>\n            <h4 style=\"color: black;\"><b>{{pengumuman.info_pengumuman}}</b></h4>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n      <hr>\n    </ion-list>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/pengumuman/pengumuman-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/pengumuman/pengumuman-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: PengumumanPageRoutingModule */

  /***/
  function srcAppCorePengumumanPengumumanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengumumanPageRoutingModule", function () {
      return PengumumanPageRoutingModule;
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


    var _pengumuman_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pengumuman.page */
    "./src/app/core/pengumuman/pengumuman.page.ts");

    var routes = [{
      path: '',
      component: _pengumuman_page__WEBPACK_IMPORTED_MODULE_3__["PengumumanPage"]
    }];

    var PengumumanPageRoutingModule = function PengumumanPageRoutingModule() {
      _classCallCheck(this, PengumumanPageRoutingModule);
    };

    PengumumanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PengumumanPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/pengumuman/pengumuman.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/pengumuman/pengumuman.module.ts ***!
    \******************************************************/

  /*! exports provided: PengumumanPageModule */

  /***/
  function srcAppCorePengumumanPengumumanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengumumanPageModule", function () {
      return PengumumanPageModule;
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


    var _pengumuman_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pengumuman-routing.module */
    "./src/app/core/pengumuman/pengumuman-routing.module.ts");
    /* harmony import */


    var _pengumuman_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pengumuman.page */
    "./src/app/core/pengumuman/pengumuman.page.ts");

    var PengumumanPageModule = function PengumumanPageModule() {
      _classCallCheck(this, PengumumanPageModule);
    };

    PengumumanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pengumuman_routing_module__WEBPACK_IMPORTED_MODULE_5__["PengumumanPageRoutingModule"]],
      declarations: [_pengumuman_page__WEBPACK_IMPORTED_MODULE_6__["PengumumanPage"]]
    })], PengumumanPageModule);
    /***/
  },

  /***/
  "./src/app/core/pengumuman/pengumuman.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/core/pengumuman/pengumuman.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCorePengumumanPengumumanPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: 30px;\n  color: #d99558;\n}\n\nion-col {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.h-200 {\n  height: 200px;\n}\n\n.custom-figma-header {\n  width: 100%;\n  height: 150px;\n  left: 0px;\n  top: 50px;\n  background: #141e56;\n  border-bottom-left-radius: 31px;\n  border-bottom-right-radius: 31px;\n}\n\n.custom-figma-title {\n  padding-top: 30px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.015em;\n  color: #ffffff;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.custom-figma-bottom {\n  position: fixed;\n  left: 32%;\n  right: 32%;\n  top: 98.4%;\n  bottom: 0.99%;\n  background: #000000;\n  border-radius: 10px;\n}\n\n.custom-figma-left {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 8%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-right {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 80%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-button {\n  background: #141e56;\n  border: 0px solid rgba(255, 253, 253, 0.1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 5px;\n  width: 70px;\n  height: 75px;\n}\n\n.custom-figma-fab-left {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 11%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\n.custom-figma-fab-right {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 83%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\nion-item, ion-input {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.custom-figma-person {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  left: 40%;\n  top: 3%;\n  border-radius: 60%;\n  background: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUvcGVuZ3VtdW1hbi9wZW5ndW11bWFuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29yZS9wZW5ndW11bWFuL3Blbmd1bXVtYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDREEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Blbmd1bXVtYW4vcGVuZ3VtdW1hbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZpZ21hIHN0eWxpbmcgc3RhcnRzIGhlcmVcbmgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG4gIGNvbG9yOiByZ2JhKDIxNywgMTQ5LCA4OCk7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5oLTIwMCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzFweDtcbn1cblxuLmN1c3RvbS1maWdtYS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTVlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDMyJTtcbiAgcmlnaHQ6IDMyJTtcbiAgdG9wOiA5OC40JTtcbiAgYm90dG9tOiAwLjk5JTtcblxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1sZWZ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMSU7XG4gIHRvcDogOTEuNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogODMlO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0sIGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWZpZ21hLXBlcnNvbiB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG53aWR0aDogNjBweDtcbmhlaWdodDogNjBweDtcbmxlZnQ6IDQwJTtcbnRvcDogMyU7XG5ib3JkZXItcmFkaXVzOiA2MCU7XG5cbmJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4iLCJoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNkOTk1NTg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmgtMjAwIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmN1c3RvbS1maWdtYS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDFlNTY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMxcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMzIlO1xuICByaWdodDogMzIlO1xuICB0b3A6IDk4LjQlO1xuICBib3R0b206IDAuOTklO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1mYWItbGVmdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTElO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmN1c3RvbS1maWdtYS1mYWItcmlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDgzJTtcbiAgdG9wOiA5MS41JTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1pdGVtLCBpb24taW5wdXQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1maWdtYS1wZXJzb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxlZnQ6IDQwJTtcbiAgdG9wOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/pengumuman/pengumuman.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/pengumuman/pengumuman.page.ts ***!
    \****************************************************/

  /*! exports provided: PengumumanPage */

  /***/
  function srcAppCorePengumumanPengumumanPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengumumanPage", function () {
      return PengumumanPage;
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


    var src_app_shared_services_pengumuman_pengumuman_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/pengumuman/pengumuman.service */
    "./src/app/shared/services/pengumuman/pengumuman.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PengumumanPage = /*#__PURE__*/function () {
      function PengumumanPage(router, pengumumanService) {
        _classCallCheck(this, PengumumanPage);

        this.router = router;
        this.pengumumanService = pengumumanService;
        this.pengumumans = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(PengumumanPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getPengumuman();
        }
      }, {
        key: "getPengumuman",
        value: function getPengumuman() {
          var _this = this;

          this.pengumumanService.getAll().subscribe(function (res) {
            _this.pengumumans = res;

            for (var i = 0; i < res.length; i++) {
              _this.pengumumans[i].gambar = _this.baseUrl + "storage/" + res[i].gambar_pengumuman;
            }

            console.log(_this.pengumumans);
          }, function (err) {
            console.log("error on calling pengumuman data from API", err);
          });
        }
      }, {
        key: "navigateToPage",
        value: function navigateToPage(path) {
          this.router.navigate([path]);
        }
      }]);

      return PengumumanPage;
    }();

    PengumumanPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_shared_services_pengumuman_pengumuman_service__WEBPACK_IMPORTED_MODULE_2__["PengumumanService"]
      }];
    };

    PengumumanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pengumuman',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pengumuman.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/pengumuman/pengumuman.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pengumuman.page.scss */
      "./src/app/core/pengumuman/pengumuman.page.scss"))["default"]]
    })], PengumumanPage);
    /***/
  }
}]);
//# sourceMappingURL=core-pengumuman-pengumuman-module-es5.js.map