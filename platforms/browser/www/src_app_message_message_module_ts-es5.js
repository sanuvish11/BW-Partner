(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_message_message_module_ts"], {
    /***/
    60881:
    /*!***************************************************!*\
      !*** ./src/app/message/message-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagePageRoutingModule": function MessagePageRoutingModule() {
          return (
            /* binding */
            _MessagePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./message.page */
      18070);

      var routes = [{
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_0__.MessagePage
      }];

      var _MessagePageRoutingModule = function MessagePageRoutingModule() {
        _classCallCheck(this, MessagePageRoutingModule);
      };

      _MessagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MessagePageRoutingModule);
      /***/
    },

    /***/
    42770:
    /*!*******************************************!*\
      !*** ./src/app/message/message.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagePageModule": function MessagePageModule() {
          return (
            /* binding */
            _MessagePageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _message_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./message-routing.module */
      60881);
      /* harmony import */


      var _message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./message.page */
      18070);

      var _MessagePageModule = function MessagePageModule() {
        _classCallCheck(this, MessagePageModule);
      };

      _MessagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _message_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessagePageRoutingModule],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_1__.MessagePage]
      })], _MessagePageModule);
      /***/
    },

    /***/
    18070:
    /*!*****************************************!*\
      !*** ./src/app/message/message.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagePage": function MessagePage() {
          return (
            /* binding */
            _MessagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./message.page.html */
      3837);
      /* harmony import */


      var _message_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./message.page.scss */
      72628);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MessagePage = /*#__PURE__*/function () {
        function MessagePage() {
          _classCallCheck(this, MessagePage);
        }

        _createClass(MessagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagePage;
      }();

      _MessagePage.ctorParameters = function () {
        return [];
      };

      _MessagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-message',
        template: _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MessagePage);
      /***/
    },

    /***/
    72628:
    /*!*******************************************!*\
      !*** ./src/app/message/message.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    3837:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>message</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_message_message_module_ts-es5.js.map