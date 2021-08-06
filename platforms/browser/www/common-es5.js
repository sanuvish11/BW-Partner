(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["common"], {
    /***/
    6633:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      23150);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      52954);
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      97279);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    77330:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      52377);

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
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return (0, _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
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
    52954:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

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
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
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
    60408:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

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
    61269:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
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

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    80534:
    /*!****************************************!*\
      !*** ./src/app/Models/Notification.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Notification": function Notification() {
          return (
            /* binding */
            _Notification
          );
        }
        /* harmony export */

      });

      var _Notification = function _Notification() {
        _classCallCheck(this, _Notification);

        this.NAME = '';
        this.NEED = '';
        this.COST = '';
        this.ADDRESS = '';
      };
      /***/

    },

    /***/
    22782:
    /*!***********************************!*\
      !*** ./src/app/Models/bwUsers.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BwUsers": function BwUsers() {
          return (
            /* binding */
            _BwUsers
          );
        }
        /* harmony export */

      });

      var _BwUsers = function _BwUsers() {
        _classCallCheck(this, _BwUsers);

        this._id = '';
        this.moNumber = '';
        this.adharNumber = '';
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.fatherName = '';
        this.address1 = '';
        this.address2 = '';
        this.address3 = '';
        this.area = null;
        this.city = '';
        this.date_of_birth = '';
        this.state = '';
        this.pincode = '';
        this.SKILLS = '';
        this.CORE_SKILLS = [];
        this.postal_area = '';
        this.online_user = null;
        this.WORK_EXPERIENCE = [];
        this.imagePath = [];
      };
      /***/

    },

    /***/
    37048:
    /*!************************************!*\
      !*** ./src/app/Models/subUsers.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubUsers": function SubUsers() {
          return (
            /* binding */
            _SubUsers
          );
        }
        /* harmony export */

      });

      var _SubUsers = function _SubUsers() {
        _classCallCheck(this, _SubUsers);

        this._id = '';
        this.userName = '';
        this.moNumber = '';
        this.status = '';
        this.jobType = '';
      };
      /***/

    },

    /***/
    76311:
    /*!*******************************************!*\
      !*** ./src/app/services/forms.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormsService": function FormsService() {
          return (
            /* binding */
            _FormsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _FormsService = /*#__PURE__*/function () {
        function FormsService(http, router, _translate, navCtrl) {
          _classCallCheck(this, FormsService);

          this.http = http;
          this.router = router;
          this._translate = _translate;
          this.navCtrl = navCtrl;
          this.baseUrl = 'https://bw-partner-server.herokuapp.com/'; // baseUrl= 'http://localhost:3000/';

          this.language = "hin";
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(FormsService, [{
          key: "saveFormData",
          value: function saveFormData(formData) {
            var _this = this;

            this.http.post(this.baseUrl + 'api/forms/save', formData).subscribe(function (data) {
              console.log(data);

              if (data) {
                _this.router.navigate(['/form-two']);
              }
            });
          }
        }, {
          key: "_translateLanguage",
          value: function _translateLanguage() {
            this._translate.use(this.language);

            this.skill_for_lang = this._translate.instant("formData.skills");
            this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
            this.workExpe_for_lang = this._translate.instant("formData.workExperience");
            this.moNumber_for_lang = this._translate.instant("formData.moNumber");
            this.otp_for_lang = this._translate.instant("formData.otp");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            return this.http.get(this.baseUrl + 'api/forms/get/all', this.httpOptions);
          }
        }, {
          key: "getAllJobs",
          value: function getAllJobs() {
            return this.http.get(this.baseUrl + 'api/jobs/get/all/jobs', this.httpOptions);
          }
        }, {
          key: "updateFormData",
          value: function updateFormData(id, formData) {
            return this.http.post(this.baseUrl + 'api/forms/update/' + id, formData, this.httpOptions);
          }
        }, {
          key: "getCoreSkillsById",
          value: function getCoreSkillsById(id) {
            return this.http.get(this.baseUrl + 'api/jobsWorkArea/' + id, this.httpOptions);
          }
        }, {
          key: "getAllCoreSkills",
          value: function getAllCoreSkills() {
            return this.http.get(this.baseUrl + 'api/jobsWorkArea/get/all/jobsWorkArea', this.httpOptions);
          }
        }, {
          key: "getSkillsById",
          value: function getSkillsById(id) {
            return this.http.get(this.baseUrl + 'api/skills/' + id, this.httpOptions);
          }
        }, {
          key: "saveImages",
          value: function saveImages(adharFront, adharBack, addressProof) {
            var formData = new FormData();
            formData.append('adharFront', adharFront);
            formData.append('adharBack', adharBack);
            formData.append('addressProof', addressProof);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
            this.http.post(this.baseUrl + 'api/forms', formData, {
              headers: headers
            }).subscribe(function (data) {
              console.log(data);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "updateFormDataImages",
          value: function updateFormDataImages(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
            return this.http.put(this.baseUrl + 'api/forms/update/' + id, data, {
              headers: headers
            });
          }
        }]);

        return FormsService;
      }();

      _FormsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }];
      };

      _FormsService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _FormsService);
      /***/
    },

    /***/
    71155:
    /*!**********************************************!*\
      !*** ./src/app/services/language.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguageService": function LanguageService() {
          return (
            /* binding */
            _LanguageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _LanguageService = /*#__PURE__*/function () {
        function LanguageService(_translate, navCtrl) {
          _classCallCheck(this, LanguageService);

          this._translate = _translate;
          this.navCtrl = navCtrl;
          this.language = "hin";
        }

        _createClass(LanguageService, [{
          key: "_translateLanguage",
          value: function _translateLanguage() {
            this._translate.use(this.language);

            this.skill_for_lang = this._translate.instant("formData.skills");
            this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
            this.workExpe_for_lang = this._translate.instant("formData.workExperience");
            this.moNumber_for_lang = this._translate.instant("formData.moNumber");
            this.otp_for_lang = this._translate.instant("formData.otp");
            this.otp_verify_for_lang = this._translate.instant("formData.otpVerify");
            this.resend_otp_for_lang = this._translate.instant("formData.resendOtp");
            this.perInform_for_lang = this._translate.instant("formData.personalInformation");
            this.enter_moNumber_for_lang = this._translate.instant("formData.enter_moNumber");
            this.andhar_for_lang = this._translate.instant("formData.enter_adhar");
            this.name_for_lang = this._translate.instant("formData.enter_name");
            this.middleName_for_lang = this._translate.instant("formData.enter_middleName");
            this.lastName_for_lang = this._translate.instant("formData.enter_lastNamer");
            this.dob_for_lang = this._translate.instant("formData.enter_dob");
            this.fatherName_for_lang = this._translate.instant("formData.enter_fatherName");
            this.address1_for_lang = this._translate.instant("formData.enter_address1");
            this.address2_for_lang = this._translate.instant("formData.enter_address2");
            this.address3_for_lang = this._translate.instant("formData.enter_address3");
            this.area_for_lang = this._translate.instant("formData.enter_area");
            this.city_for_lang = this._translate.instant("formData.enter_city");
            this.state_for_lang = this._translate.instant("formData.enter_state");
            this.pincode_for_lang = this._translate.instant("formData.enter_pinCode");
            this.uploadPhoto = this._translate.instant("formData.uploadPhoto");
            this.upload_photo_document = this._translate.instant("formData.uploadPhotoDocument");
            this.adhar_front = this._translate.instant("formData.adhar_Front");
            this.andhar_back = this._translate.instant("formData.adhar_Back");
            this.address_proof = this._translate.instant("formData.address_proof");
            this.cant_empty_for_lang = this._translate.instant("formData.cant_empty");
            this.moValidation = this._translate.instant("formData.moValidation");
            this.mo_must_number = this._translate.instant("formData.mo_only_number");
            this.family_details_lang = this._translate.instant("formData.family_details");
            this.father_name_lang = this._translate.instant("formData.father_name");
            this.mother_name_lang = this._translate.instant("formData.mother_name");
            this.wife_name_lang = this._translate.instant("formData.wife_name");
            this.child_name_lang = this._translate.instant("formData.child_name");
            this.account_details_lang = this._translate.instant("formData.account_details");
            this.account_holder_lang = this._translate.instant("formData.acount_name"); // this.account_details_lang = this._translate.instant("formData.account_details");

            this.account_number_lang = this._translate.instant("formData.account_number");
            this.re_account_number_lang = this._translate.instant("formData.re_account_number");
            this.ifsc_code_lang = this._translate.instant("formData.ifsc_code");
            this.mobile_number_lang = this._translate.instant("formData.mobile_number");
          }
        }]);

        return LanguageService;
      }();

      _LanguageService.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController
        }];
      };

      _LanguageService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
      })], _LanguageService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map