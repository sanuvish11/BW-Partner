(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_auth_auth_module_ts"], {
    /***/
    40431:
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPageRoutingModule": function AuthPageRoutingModule() {
          return (
            /* binding */
            _AuthPageRoutingModule
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


      var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.page */
      13561);

      var routes = [{
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
      }];

      var _AuthPageRoutingModule = function AuthPageRoutingModule() {
        _classCallCheck(this, AuthPageRoutingModule);
      };

      _AuthPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AuthPageRoutingModule);
      /***/
    },

    /***/
    71674:
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPageModule": function AuthPageModule() {
          return (
            /* binding */
            _AuthPageModule
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


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-routing.module */
      40431);
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.page */
      13561);

      var _AuthPageModule = function AuthPageModule() {
        _classCallCheck(this, AuthPageModule);
      };

      _AuthPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
      })], _AuthPageModule);
      /***/
    },

    /***/
    13561:
    /*!***********************************!*\
      !*** ./src/app/auth/auth.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPage": function AuthPage() {
          return (
            /* binding */
            _AuthPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./auth.page.html */
      21643);
      /* harmony import */


      var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.page.scss */
      90957);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/api.service */
      5830);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _AuthPage = /*#__PURE__*/function () {
        function AuthPage(authService) {
          _classCallCheck(this, AuthPage);

          this.authService = authService;
          this.isLoading = false;
          this.isLogin = true;
          this.submitted = false;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
          });
        }

        _createClass(AuthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSwitchAuthMode",
          value: function onSwitchAuthMode() {
            this.isLogin = !this.isLogin;
          }
        }, {
          key: "f",
          value: function f(controls) {
            return this.form.get(controls);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
            var email = this.form.get('email').value;
            var password = this.form.get('password').value;

            if (this.form.invalid) {
              return;
            }

            console.log(email);
            console.log(password);

            if (this.isLogin) {
              this.authService.login(email, password);
            } else {
              this.authService.createUser(email, password);
            }
          }
        }]);

        return AuthPage;
      }();

      _AuthPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _AuthPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AuthPage);
      /***/
    },

    /***/
    90957:
    /*!*************************************!*\
      !*** ./src/app/auth/auth.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tool {\n  --background: #eb445a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29se1xuICAgIC0tYmFja2dyb3VuZDogI2ViNDQ1YTtcbn0iXX0= */";
      /***/
    },

    /***/
    21643:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\" routerLink=\"/start\" >Back</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  \n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-item lines='none'>\n          <ion-label style=\"font-size: larger;\">\n            {{ isLogin ? 'Login' : 'Signup' }}\n          </ion-label>\n        </ion-item>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Mobile Number</ion-label>\n              <ion-input\n                name=\"email\"\n                required\n                formControlName=\"email\"\n                maxlength=\"10\" \n                minlength=\"10\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item *ngIf=\"submitted && f('email').hasError('required')\"\n            lines=\"none\">\n            <ion-label *ngIf=\"f('email').hasError('required')\"  style=\"color: red;\">\n              Can't be empty!\n            </ion-label>\n          </ion-item>\n\n        <ion-item *ngIf=\"submitted && f('email').hasError('minlength')\"  \n          lines=\"none\">\n          <ion-label  *ngIf=\"form.get('email').errors.minlength\"  style=\"color: red;\">\n            Must be 10 characters long!\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"f('email').hasError('pattern')\" \n          lines=\"none\">\n          <ion-label   style=\"color: red;\">\n            Input must be a number!\n          </ion-label>\n        </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input\n                type=\"password\"\n                formControlName=\"password\"\n                name=\"password\"\n                required\n              ></ion-input>\n            </ion-item>\n         \n            <ion-item *ngIf=\"submitted && f('password').hasError('required')\"\n            lines=\"none\">\n            <ion-label *ngIf=\"f('password').hasError('required')\"  style=\"color: red;\">\n              Can't be empty!\n            </ion-label>\n          </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button\n            color=\"danger\"\n            fill=\"clear\"\n            expand=\"block\"\n            (click)=\"onSwitchAuthMode()\"\n          >\n            Switch to {{ isLogin ? 'Signup' : 'Login' }}\n          </ion-button>\n          <ion-button\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\"\n          >\n            {{ isLogin ? 'Login' : 'Signup' }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <!-- <div class=\"ion-text-center\">\n    <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  </div> -->\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_auth_module_ts-es5.js.map