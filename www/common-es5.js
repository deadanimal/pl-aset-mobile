function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticDa73c8fdJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10a/view/view.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10a/view/view.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreKewpa10aViewViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">KEW.PA 10a No.{{kewpa10a.id}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button> \n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-content>\n    <div class=\"card-body\">\n      <ion-content class=\"content\">\n        <br>\n        <br>\n        <div class=\"item-start\">\n          <ion-badge color=\"primary\" style=\"border-radius: 110apx; padding: 4px;\"> KEWPA 10a </ion-badge>\n        </div>\n\n        <div >\n          <form>\n            <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">No Siri Pendaftaran</ion-label>\n                <ion-input placeholder=\"\" value=\"{{kewpa10a.no_siri_pendaftaran}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Tarikh Kerosakan</ion-label>\n                <ion-datetime class=\"small-font\" value=\"{{kewpa10a.tarikh_kerosakan}}\" display-timezone=\"utc\" readonly></ion-datetime>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Perihal Kerosakan</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" value=\"{{kewpa10a.perihal_kerosakan}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Jumlah Kos Penyelenggaraan (RM)</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" value=\"{{kewpa10a.jumlah_kos_penyelenggaraan}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Anggaran Kos (RM)</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" value=\"{{kewpa10a.anggaran_kos}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Syor Ulasan</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" value=\"{{kewpa10a.syor_ulasan}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Ulasan</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" value=\"{{kewpa10a.ulasan}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Pengguna Terakhir</ion-label>\n\t\t\t    \t    <ion-input placeholder=\"\" value=\"{{kewpa10a.pengguna_terakhir}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n\n                             \n            </ion-list>\n          </form>\n        </div>\n      </ion-content>\n    </div>\n\n  </ion-content>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10b/view/view.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10b/view/view.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreKewpa10bViewViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">KEW.PA 10 B No.{{kewpa10b.id}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button> \n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-content>\n    <div class=\"card-body\">\n      <ion-content class=\"content\">\n        <br>\n        <br>\n        <div class=\"item-start\">\n          <ion-badge color=\"primary\" style=\"border-radius: 110bpx; padding: 4px;\"> KEWPA 10b </ion-badge>\n        </div>\n\n        <div >\n          <form>\n            <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Nombor Wo</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.no_wo}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">No. Plet</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.plet_no_jenis_kenderaan}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Pengguna Terakhir</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.pengguna_terakhir}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Tarikh Rosak</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.tarikh_rosak}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Bil</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.bil}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Perihal Rosak</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.perihal_rosak}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Kos Penyelenggaraan Dahulu(RM)</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.kos_penyelenggaraan_dulu}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Anggaran Kos Penyelenggaraan(RM)</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.anggaran_kos_penyelenggaraan}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Syor Ulasan</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.syor_ulasan}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Ulasan</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.ulasan}}\"readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Pembaikan Dalaman Luar</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.pembaikan_dalaman_luar}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Alat Ganti</ion-label>\n                <ion-input placeholder=\"\" mode=\"ios\" value=\"{{kewpa10b.alatganti}}\" readonly></ion-input>\n\t\t\t        </ion-item>\n            </ion-list>\n          </form>\n        </div>\n      </ion-content>\n    </div>\n\n  </ion-content>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa8/view/view.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa8/view/view.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreKewpa8ViewViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">KEW.PS 8 No.{{kewpa8.id}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button> \n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-content>\n    <div class=\"card-body\">\n      <ion-content class=\"content\">\n        <br>\n        <br>\n        <div class=\"item-start\">\n          <ion-badge color=\"primary\" style=\"border-radius: 18px; padding: 4px;\"> KEWPA 8 </ion-badge>\n        </div>\n\n        <div >\n          <form>\n            <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Kuantiti Dimohon</ion-label>\n                <ion-input value=\"{{kewpa8.kuantiti_dimohon}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n              <ion-item class=\"item-form\" lines=\"none\">\n\t\t\t    \t    <ion-label position=\"stacked\" mode=\"ios\">Catatan Pemohon</ion-label>\n                <ion-input value=\"{{kewpa8.catatan_pemohon}}\" mode=\"ios\" readonly></ion-input>\n\t\t\t        </ion-item>\n               \n            </ion-list>\n          </form>\n        </div>\n      </ion-content>\n    </div>\n\n  </ion-content>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/kewpa10a/view/view.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/core/kewpa10a/view/view.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreKewpa10aViewViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-toolbar {\n  --color: var(--ion-color-primary);\n  position: absolute;\n}\n\n.card-body {\n  height: 90%;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\n.card-body img {\n  border-radius: 18px;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n\nion-content .content {\n  margin: 0;\n  padding: 10px 30px 10px;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n}\n\n.item-start {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n}\n\nion-input, ion-datetime {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGExMGEvdmlldy92aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29yZS9rZXdwYTEwYS92aWV3L3ZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURDRTtFQUNFLG1CQUFBO0FDQ0o7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBRElFO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0FDREo7O0FES0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURNQTtFQUNFLGVBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUva2V3cGExMGEvdmlldy92aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG5cbiAgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTlweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4O1xuICB9XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxufVxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG59XG4uY2FyZC1ib2R5IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG5cbmlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweDtcbn1cblxuLml0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0tc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/kewpa10a/view/view.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/kewpa10a/view/view.page.ts ***!
    \*************************************************/

  /*! exports provided: ViewPage */

  /***/
  function srcAppCoreKewpa10aViewViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewPage", function () {
      return ViewPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ViewPage = /*#__PURE__*/function () {
      function ViewPage(loadingCtrl, modalCtrl, alertController) {
        _classCallCheck(this, ViewPage);

        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
      }

      _createClass(ViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("pass data to modal", this.kewpa10a);
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ViewPage;
    }();

    ViewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewPage.prototype, "kewpa10a", void 0);
    ViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10a/view/view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view.page.scss */
      "./src/app/core/kewpa10a/view/view.page.scss"))["default"]]
    })], ViewPage);
    /***/
  },

  /***/
  "./src/app/core/kewpa10b/view/view.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/core/kewpa10b/view/view.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreKewpa10bViewViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-toolbar {\n  --color: var(--ion-color-primary);\n  position: absolute;\n}\n\n.card-body {\n  height: 90%;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\n.card-body img {\n  border-radius: 18px;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n\nion-content .content {\n  margin: 0;\n  padding: 10px 30px 10px;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n}\n\n.item-start {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n}\n\nion-input, ion-datetime {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGExMGIvdmlldy92aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29yZS9rZXdwYTEwYi92aWV3L3ZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURDRTtFQUNFLG1CQUFBO0FDQ0o7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBRElFO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0FDREo7O0FES0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURNQTtFQUNFLGVBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUva2V3cGExMGIvdmlldy92aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG5cbiAgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTlweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4O1xuICB9XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxufVxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG59XG4uY2FyZC1ib2R5IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG5cbmlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweDtcbn1cblxuLml0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0tc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/kewpa10b/view/view.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/kewpa10b/view/view.page.ts ***!
    \*************************************************/

  /*! exports provided: ViewPage */

  /***/
  function srcAppCoreKewpa10bViewViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewPage", function () {
      return ViewPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ViewPage = /*#__PURE__*/function () {
      function ViewPage(loadingCtrl, modalCtrl, alertController) {
        _classCallCheck(this, ViewPage);

        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
      }

      _createClass(ViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("pass data to modal", this.kewpa10b);
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ViewPage;
    }();

    ViewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewPage.prototype, "kewpa10b", void 0);
    ViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa10b/view/view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view.page.scss */
      "./src/app/core/kewpa10b/view/view.page.scss"))["default"]]
    })], ViewPage);
    /***/
  },

  /***/
  "./src/app/core/kewpa8/view/view.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/core/kewpa8/view/view.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreKewpa8ViewViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-toolbar {\n  --color: var(--ion-color-primary);\n  position: absolute;\n}\n\n.card-body {\n  height: 90%;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\n.card-body img {\n  border-radius: 18px;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n\nion-content .content {\n  margin: 0;\n  padding: 10px 30px 10px;\n}\n\n.item-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n}\n\n.item-start {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n}\n\nion-input {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9wbC1hc2V0LW1vYmlsZS9zcmMvYXBwL2NvcmUva2V3cGE4L3ZpZXcvdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUva2V3cGE4L3ZpZXcvdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBRENFO0VBQ0UsbUJBQUE7QUNDSjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FESUU7RUFDRSxTQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9rZXdwYTgvdmlldy92aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLjdyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyLjVyZW07XG5cbiAgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTlweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4O1xuICB9XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuXG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDEycHg7XG5cbn1cbiIsImlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMi41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMi41cmVtO1xufVxuLmNhcmQtYm9keSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOXB4O1xufVxuXG5pb24tY29udGVudCAuY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHg7XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pdGVtLXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/kewpa8/view/view.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/kewpa8/view/view.page.ts ***!
    \***********************************************/

  /*! exports provided: ViewPage */

  /***/
  function srcAppCoreKewpa8ViewViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewPage", function () {
      return ViewPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ViewPage = /*#__PURE__*/function () {
      function ViewPage(loadingCtrl, modalCtrl, alertController) {
        _classCallCheck(this, ViewPage);

        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
      }

      _createClass(ViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("pass data to modal", this.kewpa8);
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ViewPage;
    }();

    ViewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewPage.prototype, "kewpa8", void 0);
    ViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/kewpa8/view/view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view.page.scss */
      "./src/app/core/kewpa8/view/view.page.scss"))["default"]]
    })], ViewPage);
    /***/
  },

  /***/
  "./src/app/shared/services/kewpa10a/kewpa10a.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/kewpa10a/kewpa10a.service.ts ***!
    \**************************************************************/

  /*! exports provided: Kewpa10aService */

  /***/
  function srcAppSharedServicesKewpa10aKewpa10aServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kewpa10aService", function () {
      return Kewpa10aService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Kewpa10aService = /*#__PURE__*/function () {
      function Kewpa10aService(http) {
        _classCallCheck(this, Kewpa10aService);

        this.http = http; // URL

        this.urlKewpa10a = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/kewpa10a/';
      }

      _createClass(Kewpa10aService, [{
        key: "create",
        value: function create(body) {
          return this.http.post(this.urlKewpa10a, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.urlKewpa10a).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var urlID = this.urlKewpa10a + id + '/';
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "update",
        value: function update(id, body) {
          var urlID = this.urlKewpa10a + id + '/';
          return this.http.put(urlID, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var urlID = this.urlKewpa10a + id + '/';
          return this.http["delete"](urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }]);

      return Kewpa10aService;
    }();

    Kewpa10aService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Kewpa10aService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Kewpa10aService);
    /***/
  },

  /***/
  "./src/app/shared/services/kewpa10b/kewpa10b.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/kewpa10b/kewpa10b.service.ts ***!
    \**************************************************************/

  /*! exports provided: Kewpa10bService */

  /***/
  function srcAppSharedServicesKewpa10bKewpa10bServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kewpa10bService", function () {
      return Kewpa10bService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Kewpa10bService = /*#__PURE__*/function () {
      function Kewpa10bService(http) {
        _classCallCheck(this, Kewpa10bService);

        this.http = http; // URL

        this.urlKewpa10b = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/kewpa10b/';
      }

      _createClass(Kewpa10bService, [{
        key: "create",
        value: function create(body) {
          return this.http.post(this.urlKewpa10b, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.urlKewpa10b).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var urlID = this.urlKewpa10b + id + '/';
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "update",
        value: function update(id, body) {
          var urlID = this.urlKewpa10b + id + '/';
          return this.http.put(urlID, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var urlID = this.urlKewpa10b + id + '/';
          return this.http["delete"](urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }]);

      return Kewpa10bService;
    }();

    Kewpa10bService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Kewpa10bService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Kewpa10bService);
    /***/
  },

  /***/
  "./src/app/shared/services/kewpa8/kewpa8.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/kewpa8/kewpa8.service.ts ***!
    \**********************************************************/

  /*! exports provided: Kewpa8Service */

  /***/
  function srcAppSharedServicesKewpa8Kewpa8ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kewpa8Service", function () {
      return Kewpa8Service;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Kewpa8Service = /*#__PURE__*/function () {
      function Kewpa8Service(http) {
        _classCallCheck(this, Kewpa8Service);

        this.http = http; // URL

        this.urlKewpa8 = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/kewps8/';
      }

      _createClass(Kewpa8Service, [{
        key: "create",
        value: function create(body) {
          return this.http.post(this.urlKewpa8, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.urlKewpa8).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var urlID = this.urlKewpa8 + id + '/';
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "update",
        value: function update(id, body) {
          var urlID = this.urlKewpa8 + id + '/';
          return this.http.put(urlID, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var urlID = this.urlKewpa8 + id + '/';
          return this.http["delete"](urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }]);

      return Kewpa8Service;
    }();

    Kewpa8Service.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Kewpa8Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Kewpa8Service);
    /***/
  },

  /***/
  "./src/app/shared/services/kewpa9/kewpa9.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/kewpa9/kewpa9.service.ts ***!
    \**********************************************************/

  /*! exports provided: Kewpa9Service */

  /***/
  function srcAppSharedServicesKewpa9Kewpa9ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kewpa9Service", function () {
      return Kewpa9Service;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Kewpa9Service = /*#__PURE__*/function () {
      function Kewpa9Service(http) {
        _classCallCheck(this, Kewpa9Service);

        this.http = http; // URL

        this.urlKewpa9 = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/kewpa9/';
      }

      _createClass(Kewpa9Service, [{
        key: "create",
        value: function create(body) {
          return this.http.post(this.urlKewpa9, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.urlKewpa9).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var urlID = this.urlKewpa9 + id + '/';
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "update",
        value: function update(id, body) {
          var urlID = this.urlKewpa9 + id + '/';
          return this.http.put(urlID, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var urlID = this.urlKewpa9 + id + '/';
          return this.http["delete"](urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {}));
        }
      }]);

      return Kewpa9Service;
    }();

    Kewpa9Service.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Kewpa9Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Kewpa9Service);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map