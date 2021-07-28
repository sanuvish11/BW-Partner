(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_admin-home_admin-home_module_ts"], {
    /***/
    84827:
    /*!*********************************************************!*\
      !*** ./src/app/admin-home/admin-home-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminHomePageRoutingModule": function AdminHomePageRoutingModule() {
          return (
            /* binding */
            _AdminHomePageRoutingModule
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


      var _admin_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-home.page */
      38153);

      var routes = [{
        path: '',
        component: _admin_home_page__WEBPACK_IMPORTED_MODULE_0__.AdminHomePage
      }];

      var _AdminHomePageRoutingModule = function AdminHomePageRoutingModule() {
        _classCallCheck(this, AdminHomePageRoutingModule);
      };

      _AdminHomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AdminHomePageRoutingModule);
      /***/
    },

    /***/
    53591:
    /*!*************************************************!*\
      !*** ./src/app/admin-home/admin-home.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminHomePageModule": function AdminHomePageModule() {
          return (
            /* binding */
            _AdminHomePageModule
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


      var _admin_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-home-routing.module */
      84827);
      /* harmony import */


      var _admin_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-home.page */
      38153);

      var _AdminHomePageModule = function AdminHomePageModule() {
        _classCallCheck(this, AdminHomePageModule);
      };

      _AdminHomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _admin_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminHomePageRoutingModule],
        declarations: [_admin_home_page__WEBPACK_IMPORTED_MODULE_1__.AdminHomePage]
      })], _AdminHomePageModule);
      /***/
    },

    /***/
    38153:
    /*!***********************************************!*\
      !*** ./src/app/admin-home/admin-home.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminHomePage": function AdminHomePage() {
          return (
            /* binding */
            _AdminHomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_admin_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./admin-home.page.html */
      29220);
      /* harmony import */


      var _admin_home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-home.page.scss */
      46311);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AdminHomePage = /*#__PURE__*/function () {
        function AdminHomePage() {
          _classCallCheck(this, AdminHomePage);
        }

        _createClass(AdminHomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminHomePage;
      }();

      _AdminHomePage.ctorParameters = function () {
        return [];
      };

      _AdminHomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin-home',
        template: _raw_loader_admin_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AdminHomePage);
      /***/
    },

    /***/
    46311:
    /*!*************************************************!*\
      !*** ./src/app/admin-home/admin-home.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1ob21lLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    29220:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-home/admin-home.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>admin-home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin-home_admin-home_module_ts-es5.js.map