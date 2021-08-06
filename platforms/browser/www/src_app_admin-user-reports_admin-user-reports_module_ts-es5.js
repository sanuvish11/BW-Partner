(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_admin-user-reports_admin-user-reports_module_ts"], {
    /***/
    13680:
    /*!*************************************************************************!*\
      !*** ./src/app/admin-user-reports/admin-user-reports-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminUserReportsPageRoutingModule": function AdminUserReportsPageRoutingModule() {
          return (
            /* binding */
            _AdminUserReportsPageRoutingModule
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


      var _admin_user_reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-user-reports.page */
      63556);

      var routes = [{
        path: '',
        component: _admin_user_reports_page__WEBPACK_IMPORTED_MODULE_0__.AdminUserReportsPage
      }];

      var _AdminUserReportsPageRoutingModule = function AdminUserReportsPageRoutingModule() {
        _classCallCheck(this, AdminUserReportsPageRoutingModule);
      };

      _AdminUserReportsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AdminUserReportsPageRoutingModule);
      /***/
    },

    /***/
    66049:
    /*!*****************************************************************!*\
      !*** ./src/app/admin-user-reports/admin-user-reports.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminUserReportsPageModule": function AdminUserReportsPageModule() {
          return (
            /* binding */
            _AdminUserReportsPageModule
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


      var _admin_user_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-user-reports-routing.module */
      13680);
      /* harmony import */


      var _admin_user_reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-user-reports.page */
      63556);

      var _AdminUserReportsPageModule = function AdminUserReportsPageModule() {
        _classCallCheck(this, AdminUserReportsPageModule);
      };

      _AdminUserReportsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _admin_user_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUserReportsPageRoutingModule],
        declarations: [_admin_user_reports_page__WEBPACK_IMPORTED_MODULE_1__.AdminUserReportsPage]
      })], _AdminUserReportsPageModule);
      /***/
    },

    /***/
    63556:
    /*!***************************************************************!*\
      !*** ./src/app/admin-user-reports/admin-user-reports.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminUserReportsPage": function AdminUserReportsPage() {
          return (
            /* binding */
            _AdminUserReportsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_admin_user_reports_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./admin-user-reports.page.html */
      76194);
      /* harmony import */


      var _admin_user_reports_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-user-reports.page.scss */
      53185);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _Models_subUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../Models/subUsers */
      37048);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/api.service */
      5830);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AdminUserReportsPage = /*#__PURE__*/function () {
        function AdminUserReportsPage(apiService, router) {
          _classCallCheck(this, AdminUserReportsPage);

          this.apiService = apiService;
          this.router = router;
          this.subUserData = new _Models_subUsers__WEBPACK_IMPORTED_MODULE_2__.SubUsers();
        }

        _createClass(AdminUserReportsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.apiService.getAllSubUsers().subscribe(function (res) {
              _this.subUserData = res;
              console.log(_this.subUserData);
            });
          }
        }]);

        return AdminUserReportsPage;
      }();

      _AdminUserReportsPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _AdminUserReportsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin-user-reports',
        template: _raw_loader_admin_user_reports_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_user_reports_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AdminUserReportsPage);
      /***/
    },

    /***/
    53185:
    /*!*****************************************************************!*\
      !*** ./src/app/admin-user-reports/admin-user-reports.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLXJlcG9ydHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    76194:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user-reports/admin-user-reports.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Users Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"margin-top: 12%;\">\n    <ion-row >\n      <ion-col >\n        Name\n      </ion-col>\n      \n      <ion-col >\n         Number\n      </ion-col>\n\n      <ion-col>\n        status\n      </ion-col>\n      <ion-col>\n        Job type\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let data of subUserData.formData\">\n      <ion-col>\n        {{data.userName}}\n      </ion-col>\n      <ion-col>\n        {{data.moNumber}}\n      </ion-col>\n      <ion-col>\n        {{data.status}}\n      </ion-col>\n      <ion-col>\n        {{data.jobType}}\n      </ion-col>\n      <ion-col>\n        <ion-button  \n        color=\"danger\" [routerLink]=\"['/admin-create-user', data._id]\">Edit Users</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n       <ion-button  \n       class=\"ion-margin-vertical\"\n       type=\"submit\"\n       color=\"danger\"\n      \n       expand=\"block\" >Edit Users</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>     \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin-user-reports_admin-user-reports_module_ts-es5.js.map