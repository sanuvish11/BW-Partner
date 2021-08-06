(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_admin-create-user_admin-create-user_module_ts"], {
    /***/
    70410:
    /*!***********************************************************************!*\
      !*** ./src/app/admin-create-user/admin-create-user-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminCreateUserPageRoutingModule": function AdminCreateUserPageRoutingModule() {
          return (
            /* binding */
            _AdminCreateUserPageRoutingModule
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


      var _admin_create_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-create-user.page */
      22634);

      var routes = [{
        path: '',
        component: _admin_create_user_page__WEBPACK_IMPORTED_MODULE_0__.AdminCreateUserPage
      }];

      var _AdminCreateUserPageRoutingModule = function AdminCreateUserPageRoutingModule() {
        _classCallCheck(this, AdminCreateUserPageRoutingModule);
      };

      _AdminCreateUserPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AdminCreateUserPageRoutingModule);
      /***/
    },

    /***/
    95783:
    /*!***************************************************************!*\
      !*** ./src/app/admin-create-user/admin-create-user.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminCreateUserPageModule": function AdminCreateUserPageModule() {
          return (
            /* binding */
            _AdminCreateUserPageModule
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


      var _admin_create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-create-user-routing.module */
      70410);
      /* harmony import */


      var _admin_create_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-create-user.page */
      22634);

      var _AdminCreateUserPageModule = function AdminCreateUserPageModule() {
        _classCallCheck(this, AdminCreateUserPageModule);
      };

      _AdminCreateUserPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _admin_create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminCreateUserPageRoutingModule],
        declarations: [_admin_create_user_page__WEBPACK_IMPORTED_MODULE_1__.AdminCreateUserPage]
      })], _AdminCreateUserPageModule);
      /***/
    },

    /***/
    22634:
    /*!*************************************************************!*\
      !*** ./src/app/admin-create-user/admin-create-user.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminCreateUserPage": function AdminCreateUserPage() {
          return (
            /* binding */
            _AdminCreateUserPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_admin_create_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./admin-create-user.page.html */
      43681);
      /* harmony import */


      var _admin_create_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-create-user.page.scss */
      94099);
      /* harmony import */


      var _Models_subUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../Models/subUsers */
      37048);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/api.service */
      5830);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AdminCreateUserPage = /*#__PURE__*/function () {
        function AdminCreateUserPage(apiService, _Activatedroute) {
          _classCallCheck(this, AdminCreateUserPage);

          this.apiService = apiService;
          this._Activatedroute = _Activatedroute;
          this.typeOfJob = ["Manager", "Clerk", "Data Manager", "Doctor", "Software Developer"];
          this.mode = "create";
          this.id = '';
          this.userData = new _Models_subUsers__WEBPACK_IMPORTED_MODULE_2__.SubUsers();
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            moNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
          });
        }

        _createClass(AdminCreateUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.id = this._Activatedroute.snapshot.paramMap.get("id");

            this._Activatedroute.paramMap.subscribe(function (paramMap) {
              if (paramMap.has("id")) {
                _this.mode = "edit";
                _this.id = paramMap.get("id");

                _this.apiService.getSubUserById(_this.id).subscribe(function (res) {
                  console.log(res);
                  _this.userData = res;
                }, function (err) {
                  console.log(err);
                });
              } else {
                _this.mode = "create";
                _this.id = null;
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log(this.form.value);

            if (this.mode === "create") {
              this.apiService.saveSubUsers(this.form.value);
            } else {
              this.apiService.updateSubUsers(this.id, this.form.value);
            }

            this.form.reset();
          }
        }, {
          key: "getJobValue",
          value: function getJobValue() {
            console.log(this.form.value.jobType);
          }
        }, {
          key: "getRadioValue",
          value: function getRadioValue(radioValue) {
            console.log(radioValue);
          }
        }]);

        return AdminCreateUserPage;
      }();

      _AdminCreateUserPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }];
      };

      _AdminCreateUserPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-admin-create-user',
        template: _raw_loader_admin_create_user_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_create_user_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AdminCreateUserPage);
      /***/
    },

    /***/
    94099:
    /*!***************************************************************!*\
      !*** ./src/app/admin-create-user/admin-create-user.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jcmVhdGUtdXNlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    43681:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-create-user/admin-create-user.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Add Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list >\n            <ion-item>\n              <ion-label position=\"floating\">Name</ion-label>\n              <ion-input\n                name=\"userName\"\n                required\n                [ngModel]=\"userData.userName\"\n                formControlName=\"userName\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Mobile Number</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                required\n                [ngModel]=\"userData.moNumber\"\n                formControlName=\"moNumber\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">email</ion-label>\n              <ion-input\n                name=\"email\"\n                required\n                [ngModel]=\"userData.email\"\n                formControlName=\"email\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">password</ion-label>\n              <ion-input\n                name=\"password\"\n                required\n                [ngModel]=\"userData.password\"\n                formControlName=\"password\"\n              ></ion-input>\n            </ion-item>\n\n\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Job Type</ion-label>\n              <select [ngModel]=\"userData.jobType\" (change)=\"getJobValue()\" formControlName=\"jobType\"  name=\"jobType\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let job of typeOfJob\"  [ngValue]=\"job\">{{job}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n              <!-- <ion-label>Job Status</ion-label> -->\n              <ion-list>\n                <ion-radio-group [ngModel]=\"userData.status\" value=\"Active\" formControlName=\"status\" (ionChange)=\"getRadioValue($event)\">\n                  <ion-list-header>\n                    <ion-label>Job Status</ion-label>\n                  </ion-list-header>\n              \n                  <ion-item>\n                    <ion-label>Active</ion-label>\n                    <ion-radio slot=\"start\" value=\"Active\"></ion-radio>\n                  </ion-item>\n              \n                  <ion-item>\n                    <ion-label>InActive</ion-label>\n                    <ion-radio slot=\"start\" value=\"inActive\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            </ion-item>\n\n      \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button  \n         class=\"ion-margin-vertical\"\n         type=\"submit\"\n         color=\"danger\"\n         expand=\"block\">ADD USER</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button  \n         class=\"ion-margin-vertical\"\n         color=\"danger\"\n         expand=\"block\" routerLink=\"/admin-user-reports\">Check user list</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin-create-user_admin-create-user_module_ts-es5.js.map