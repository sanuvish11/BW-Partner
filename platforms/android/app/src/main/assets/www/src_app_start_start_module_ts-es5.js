(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_start_start_module_ts"], {
    /***/
    89654:
    /*!***********************************************!*\
      !*** ./src/app/start/start-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StartPageRoutingModule": function StartPageRoutingModule() {
          return (
            /* binding */
            _StartPageRoutingModule
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


      var _start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./start.page */
      95104);

      var routes = [{
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_0__.StartPage
      }];

      var _StartPageRoutingModule = function StartPageRoutingModule() {
        _classCallCheck(this, StartPageRoutingModule);
      };

      _StartPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StartPageRoutingModule);
      /***/
    },

    /***/
    98030:
    /*!***************************************!*\
      !*** ./src/app/start/start.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StartPageModule": function StartPageModule() {
          return (
            /* binding */
            _StartPageModule
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


      var _start_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./start-routing.module */
      89654);
      /* harmony import */


      var _start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./start.page */
      95104);

      var _StartPageModule = function StartPageModule() {
        _classCallCheck(this, StartPageModule);
      };

      _StartPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _start_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartPageRoutingModule],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_1__.StartPage]
      })], _StartPageModule);
      /***/
    },

    /***/
    95104:
    /*!*************************************!*\
      !*** ./src/app/start/start.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StartPage": function StartPage() {
          return (
            /* binding */
            _StartPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./start.page.html */
      44022);
      /* harmony import */


      var _start_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./start.page.scss */
      61234);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _StartPage = /*#__PURE__*/function () {
        function StartPage() {
          _classCallCheck(this, StartPage);
        }

        _createClass(StartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StartPage;
      }();

      _StartPage.ctorParameters = function () {
        return [];
      };

      _StartPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-start',
        template: _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_start_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StartPage);
      /***/
    },

    /***/
    61234:
    /*!***************************************!*\
      !*** ./src/app/start/start.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    44022:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Registration Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n     <ion-button  \n     class=\"ion-margin-vertical\"\n     type=\"submit\"\n     color=\"danger\"  \n     expand=\"block\" routerLink=\"/auth\">Admin Panel</ion-button>\n  \n    <ion-button  \n    class=\"ion-margin-vertical\"\n    type=\"submit\"\n    color=\"danger\"  \n    expand=\"block\" routerLink=\"/login\">User Panel</ion-button>\n \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_start_start_module_ts-es5.js.map