function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-homepage-homepage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/homepage/homepage.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/homepage/homepage.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreHomepageHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div id=\"container\" class=\"background\">\n<div class=\"custom-figma-header ion-text-center\">\n    <div class=\"custom-figma-title ion-text-center\">\n      <ion-icon style=\"font-size: 40px; color: white\" name=\"person-circle-outline\"></ion-icon>\n      <h4 style=\"margin: 0px; !important\">Nama User <br/>SELAMAT DATANG <br/>Tarikh</h4>\n    </div>\n\n    <h3 style=\"color: white; margin-left: 20px; font-size: 15px;\"  align=\"start\">PENGUMUMAN TERKINI</h3>\n    <div class=\"custom-figma-subheader\">\n      <h5 align=\"center\" style=\"color: black;\"><b>{{pengumuman.tajuk}}</b> <br/> {{pengumuman.tarikh_pengumuman}}</h5>\n         <div class=\"pengumuman-text\" align=\"justify\">\n           <b>{{pengumuman.info_pengumuman}}</b>\n         </div>\n    </div>\n  </div>\n  <br>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card color=\"primary\" (click)=\"navigateToPage('/core/dashboard')\">\n          <ion-card-content class=\"ion-text-center\">\n            <ion-text color=\"light\">\n              <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n              <h3 style=\"color: white;\">PERMOHONAN & ADUAN</h3>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-card color=\"primary\" (click)=\"navigateToPage('/core/pengumuman')\">\n          <ion-card-content class=\"ion-text-center\">\n            <ion-text color=\"light\">\n              <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n              <h3 style=\"color: white;\">SENARAI <br/> PENGUMUMAN</h3>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/homepage/homepage-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/homepage/homepage-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: HomepagePageRoutingModule */

  /***/
  function srcAppCoreHomepageHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePageRoutingModule", function () {
      return HomepagePageRoutingModule;
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


    var _homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homepage.page */
    "./src/app/core/homepage/homepage.page.ts");

    var routes = [{
      path: '',
      component: _homepage_page__WEBPACK_IMPORTED_MODULE_3__["HomepagePage"]
    }];

    var HomepagePageRoutingModule = function HomepagePageRoutingModule() {
      _classCallCheck(this, HomepagePageRoutingModule);
    };

    HomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomepagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/homepage/homepage.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/homepage/homepage.module.ts ***!
    \**************************************************/

  /*! exports provided: HomepagePageModule */

  /***/
  function srcAppCoreHomepageHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function () {
      return HomepagePageModule;
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


    var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./homepage-routing.module */
    "./src/app/core/homepage/homepage-routing.module.ts");
    /* harmony import */


    var _homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homepage.page */
    "./src/app/core/homepage/homepage.page.ts");

    var HomepagePageModule = function HomepagePageModule() {
      _classCallCheck(this, HomepagePageModule);
    };

    HomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomepagePageRoutingModule"]],
      declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_6__["HomepagePage"]]
    })], HomepagePageModule);
    /***/
  },

  /***/
  "./src/app/core/homepage/homepage.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/core/homepage/homepage.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreHomepageHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  font-weight: bold;\n}\n\nion-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nion-icon {\n  font-size: 30px;\n  color: #d99558;\n}\n\nion-col {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.h-200 {\n  height: 200px;\n}\n\n.custom-figma-header {\n  width: 100%;\n  height: 450px;\n  left: 0px;\n  top: 50px;\n  background: #141e56;\n  border-bottom-left-radius: 31px;\n  border-bottom-right-radius: 31px;\n}\n\n.custom-figma-subheader {\n  position: fixed;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 15px;\n  margin: 0px 20px 20px 20px;\n  padding: 0px 10px 10px 10px;\n  height: 240px;\n}\n\n.pengumuman-text {\n  height: 75%;\n  overflow: scroll;\n}\n\n.custom-figma-title {\n  padding-top: 30px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.015em;\n  color: #ffffff;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.custom-figma-bottom {\n  position: fixed;\n  left: 32%;\n  right: 32%;\n  top: 98.4%;\n  bottom: 0.99%;\n  background: #000000;\n  border-radius: 10px;\n}\n\n.custom-figma-left {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 8%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-right {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  left: 80%;\n  top: 90%;\n  border-radius: 10px;\n  background: #172761;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: rotate(-40deg);\n}\n\n.custom-figma-button {\n  background: #141e56;\n  border: 0px solid rgba(255, 253, 253, 0.1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 5px;\n  width: 70px;\n  height: 75px;\n}\n\n.custom-figma-fab-left {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 11%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\n.custom-figma-fab-right {\n  position: fixed;\n  width: 25px;\n  height: 25px;\n  left: 83%;\n  top: 91.5%;\n  color: #ffffff;\n}\n\nion-item, ion-input {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.custom-figma-person {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  left: 40%;\n  top: 3%;\n  border-radius: 60%;\n  background: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUvaG9tZXBhZ2UvaG9tZXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9jb3JlL2hvbWVwYWdlL2hvbWVwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDRUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FDRkY7O0FES0E7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDSEEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hvbWVwYWdlL2hvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZmlnbWEgc3R5bGluZyBzdGFydHMgaGVyZVxuaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXRleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4OyAvL1ByZWZlcnJlZCBzaXplIGhlcmVcbiAgY29sb3I6IHJnYmEoMjE3LCAxNDksIDg4KTtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLmgtMjAwIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmN1c3RvbS1maWdtYS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDFlNTY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMxcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLXN1YmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDBweCAyMHB4IDIwcHggMjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xuICBoZWlnaHQ6MjQwcHg7XG59XG5cbi5wZW5ndW11bWFuLXRleHQge1xuICBoZWlnaHQ6IDc1JTtcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xuXG59XG5cblxuLmN1c3RvbS1maWdtYS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTVlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmN1c3RvbS1maWdtYS1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDMyJTtcbiAgcmlnaHQ6IDMyJTtcbiAgdG9wOiA5OC40JTtcbiAgYm90dG9tOiAwLjk5JTtcblxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWxlZnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDglO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogODAlO1xuICB0b3A6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzE3Mjc2MTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbn1cblxuLmN1c3RvbS1maWdtYS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQxZTU2O1xuICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1sZWZ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMSU7XG4gIHRvcDogOTEuNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogODMlO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0sIGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWZpZ21hLXBlcnNvbiB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG53aWR0aDogNjBweDtcbmhlaWdodDogNjBweDtcbmxlZnQ6IDQwJTtcbnRvcDogMyU7XG5ib3JkZXItcmFkaXVzOiA2MCU7XG5cbmJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4iLCJoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNkOTk1NTg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmgtMjAwIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmN1c3RvbS1maWdtYS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDFlNTY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMxcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLXN1YmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDBweCAyMHB4IDIwcHggMjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xuICBoZWlnaHQ6IDI0MHB4O1xufVxuXG4ucGVuZ3VtdW1hbi10ZXh0IHtcbiAgaGVpZ2h0OiA3NSU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5jdXN0b20tZmlnbWEtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDE1ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jdXN0b20tZmlnbWEtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAzMiU7XG4gIHJpZ2h0OiAzMiU7XG4gIHRvcDogOTguNCU7XG4gIGJvdHRvbTogMC45OSU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jdXN0b20tZmlnbWEtbGVmdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogOCU7XG4gIHRvcDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTcyNzYxO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xufVxuXG4uY3VzdG9tLWZpZ21hLXJpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiA4MCU7XG4gIHRvcDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTcyNzYxO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xufVxuXG4uY3VzdG9tLWZpZ21hLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxNDFlNTY7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTMsIDI1MywgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1sZWZ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMSU7XG4gIHRvcDogOTEuNSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY3VzdG9tLWZpZ21hLWZhYi1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogODMlO1xuICB0b3A6IDkxLjUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0sIGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWZpZ21hLXBlcnNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbGVmdDogNDAlO1xuICB0b3A6IDMlO1xuICBib3JkZXItcmFkaXVzOiA2MCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/homepage/homepage.page.ts":
  /*!************************************************!*\
    !*** ./src/app/core/homepage/homepage.page.ts ***!
    \************************************************/

  /*! exports provided: HomepagePage */

  /***/
  function srcAppCoreHomepageHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePage", function () {
      return HomepagePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomepagePage = /*#__PURE__*/function () {
      function HomepagePage(router, pengumumanService) {
        _classCallCheck(this, HomepagePage);

        this.router = router;
        this.pengumumanService = pengumumanService;
        this.pengumuman = {};
      }

      _createClass(HomepagePage, [{
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
            _this.pengumuman = res[0];
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

      return HomepagePage;
    }();

    HomepagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_services_pengumuman_pengumuman_service__WEBPACK_IMPORTED_MODULE_2__["PengumumanService"]
      }];
    };

    HomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homepage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/homepage/homepage.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homepage.page.scss */
      "./src/app/core/homepage/homepage.page.scss"))["default"]]
    })], HomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=core-homepage-homepage-module-es5.js.map