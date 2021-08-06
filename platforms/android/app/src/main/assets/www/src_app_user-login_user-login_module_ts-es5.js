(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_user-login_user-login_module_ts"], {
    /***/
    30230:
    /*!*********************************************************!*\
      !*** ./src/app/user-login/user-login-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserLoginPageRoutingModule": function UserLoginPageRoutingModule() {
          return (
            /* binding */
            _UserLoginPageRoutingModule
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


      var _user_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-login.page */
      92624);

      var routes = [{
        path: '',
        component: _user_login_page__WEBPACK_IMPORTED_MODULE_0__.UserLoginPage
      }];

      var _UserLoginPageRoutingModule = function UserLoginPageRoutingModule() {
        _classCallCheck(this, UserLoginPageRoutingModule);
      };

      _UserLoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UserLoginPageRoutingModule);
      /***/
    },

    /***/
    71720:
    /*!*************************************************!*\
      !*** ./src/app/user-login/user-login.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserLoginPageModule": function UserLoginPageModule() {
          return (
            /* binding */
            _UserLoginPageModule
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


      var _user_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-login-routing.module */
      30230);
      /* harmony import */


      var _user_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-login.page */
      92624);

      var _UserLoginPageModule = function UserLoginPageModule() {
        _classCallCheck(this, UserLoginPageModule);
      };

      _UserLoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _user_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserLoginPageRoutingModule],
        declarations: [_user_login_page__WEBPACK_IMPORTED_MODULE_1__.UserLoginPage]
      })], _UserLoginPageModule);
      /***/
    },

    /***/
    92624:
    /*!***********************************************!*\
      !*** ./src/app/user-login/user-login.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserLoginPage": function UserLoginPage() {
          return (
            /* binding */
            _UserLoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_user_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./user-login.page.html */
      55460);
      /* harmony import */


      var _user_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-login.page.scss */
      73326);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/api.service */
      5830);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _UserLoginPage = /*#__PURE__*/function () {
        function UserLoginPage(apiService, router) {
          _classCallCheck(this, UserLoginPage);

          this.apiService = apiService;
          this.router = router;
          this.typeOfJob = ["Manager", "Clerk", "Data Manager", "Doctor", "Software Developer"];
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            MOBILE_NUMBER: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PASSWORD: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            JOB_TYPE: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
          });
        }

        _createClass(UserLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            console.log(this.form.value);
            this.apiService.subUserLogin(this.form.value).subscribe(function (data) {
              console.log(data);

              if (data.STATUS === 200) {
                _this.router.navigate(['/home']);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return UserLoginPage;
      }();

      _UserLoginPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _UserLoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-login',
        template: _raw_loader_user_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _UserLoginPage);
      /***/
    },

    /***/
    73326:
    /*!*************************************************!*\
      !*** ./src/app/user-login/user-login.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxvZ2luLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    55460:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-login/user-login.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">MOBILE NUMBER</ion-label>\n              <ion-input\n                name=\"mobileNUmber\"\n                required\n                formControlName=\"MOBILE_NUMBER\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">PASSWORD</ion-label>\n              <ion-input\n                type=\"password\"\n                formControlName=\"PASSWORD\"\n                name=\"password\"\n                required\n              ></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">SELECT JOB TYPE</ion-label>\n              <select  formControlName=\"JOB_TYPE\" (change)=\"getJobValue()\"  name=\"jobType\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let job of typeOfJob\"  [ngValue]=\"job\">{{job}}</option>\n              </select>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\"\n          >\n            LOGIN\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_user-login_user-login_module_ts-es5.js.map