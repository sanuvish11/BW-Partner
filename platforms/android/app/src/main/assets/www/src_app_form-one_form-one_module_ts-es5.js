(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_form-one_form-one_module_ts"], {
    /***/
    97776:
    /*!*****************************************************!*\
      !*** ./src/app/custum-validation/age-validation.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AgeValidators": function AgeValidators() {
          return (
            /* binding */
            _AgeValidators
          );
        }
        /* harmony export */

      });

      var _AgeValidators = /*#__PURE__*/function () {
        function _AgeValidators() {
          _classCallCheck(this, _AgeValidators);
        }

        _createClass(_AgeValidators, null, [{
          key: "restrictAge",
          value: function restrictAge(control) {
            var validateAge = 18;
            var dateString = control.value;
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
              age--;
            }

            if (age < validateAge) {
              return {
                restrictAge: true
              };
            } else {
              null;
            }
          }
        }]);

        return _AgeValidators;
      }();
      /***/

    },

    /***/
    34348:
    /*!*****************************************************!*\
      !*** ./src/app/form-one/form-one-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormOnePageRoutingModule": function FormOnePageRoutingModule() {
          return (
            /* binding */
            _FormOnePageRoutingModule
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


      var _form_one_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-one.page */
      7250);

      var routes = [{
        path: '',
        component: _form_one_page__WEBPACK_IMPORTED_MODULE_0__.FormOnePage
      }];

      var _FormOnePageRoutingModule = function FormOnePageRoutingModule() {
        _classCallCheck(this, FormOnePageRoutingModule);
      };

      _FormOnePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FormOnePageRoutingModule);
      /***/
    },

    /***/
    39420:
    /*!*********************************************!*\
      !*** ./src/app/form-one/form-one.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormOnePageModule": function FormOnePageModule() {
          return (
            /* binding */
            _FormOnePageModule
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


      var _form_one_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-one-routing.module */
      34348);
      /* harmony import */


      var _form_one_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-one.page */
      7250);

      var _FormOnePageModule = function FormOnePageModule() {
        _classCallCheck(this, FormOnePageModule);
      };

      _FormOnePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _form_one_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormOnePageRoutingModule],
        declarations: [_form_one_page__WEBPACK_IMPORTED_MODULE_1__.FormOnePage]
      })], _FormOnePageModule);
      /***/
    },

    /***/
    7250:
    /*!*******************************************!*\
      !*** ./src/app/form-one/form-one.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormOnePage": function FormOnePage() {
          return (
            /* binding */
            _FormOnePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_form_one_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./form-one.page.html */
      98770);
      /* harmony import */


      var _form_one_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-one.page.scss */
      26304);
      /* harmony import */


      var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/forms.service */
      76311);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _Models_bwUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Models/bwUsers */
      22782);
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/language.service */
      71155);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _custum_validation_age_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../custum-validation/age-validation */
      97776);

      var _FormOnePage = /*#__PURE__*/function () {
        function FormOnePage(router, formService, languageService, apiService) {
          _classCallCheck(this, FormOnePage);

          this.router = router;
          this.formService = formService;
          this.languageService = languageService;
          this.apiService = apiService;
          this.submitted = false;
          this.usersData = new _Models_bwUsers__WEBPACK_IMPORTED_MODULE_3__.BwUsers();
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            moNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("^[0-9]*$")]),
            adharNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("^[0-9]*$")]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _custum_validation_age_validation__WEBPACK_IMPORTED_MODULE_6__.AgeValidators.restrictAge]),
            fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            address3: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            SKILLS: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(""),
            CORE_SKILLS: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]),
            WORK_EXPERIENCE: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]),
            adharFront: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
            adharBack: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
            addressProof: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
            agreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null)
          });
        }

        _createClass(FormOnePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.moNumber = localStorage.getItem('moNumber'); // this.getAllUsersData();

            this.usersData._id = localStorage.getItem('userId');
            console.log(this.usersData._id);

            this.languageService._translateLanguage();

            this.getUserById();
          }
        }, {
          key: "f",
          value: function f(controls) {
            return this.form.get(controls);
          }
        }, {
          key: "getUserById",
          value: function getUserById() {
            var _this = this;

            this.apiService.getBwUsersById(this.usersData._id).subscribe(function (res) {
              console.log(res);
              _this.usersData = res.data;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "getAllUsersData",
          value: function getAllUsersData() {
            var _this2 = this;

            this.formService.getAllData().subscribe(function (res) {
              res.formData.forEach(function (data) {
                console.log(data);
                _this2.usersData = data;
                console.log(_this2.usersData);
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.value.moNumber = localStorage.getItem('moNumber');
            this.form.value.address1 = this.usersData.address1;
            this.form.value.address2 = this.usersData.address2, this.form.value.address3 = this.usersData.address3, this.form.value.area = this.usersData.area, this.form.value.city = this.usersData.city, this.form.value.state = this.usersData.state, this.form.value.pincode = this.usersData.pincode;
            this.form.value.CORE_SKILLS = this.usersData.CORE_SKILLS;
            this.form.value.WORK_EXPERIENCE = this.usersData.WORK_EXPERIENCE;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.submitted = true;

            if (this.form.invalid) {
              return;
            }

            this.setFormValues();
            this.formService.updateFormData(localStorage.getItem('userId'), this.form.value).subscribe(function (data) {
              if (data) {
                _this3.router.navigate(['/form-two']);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return FormOnePage;
      }();

      _FormOnePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService
        }, {
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }];
      };

      _FormOnePage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-form-one',
        template: _raw_loader_form_one_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_form_one_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FormOnePage);
      /***/
    },

    /***/
    26304:
    /*!*********************************************!*\
      !*** ./src/app/form-one/form-one.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLW9uZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    98770:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-one/form-one.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title>{{languageService.perInform_for_lang}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"px-10\">\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid class=\"form-style\">\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.enter_moNumber_for_lang}}</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                required\n                maxlength=\"10\" \n                minlength=\"10\"\n                [ngModel]=\"moNumber\"\n                formControlName=\"moNumber\"\n                [value]=\"moNumber\"\n                disabled=\"true\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item *ngIf=\"submitted && f('moNumber').hasError('required')\"\n            lines=\"none\">\n            <ion-label *ngIf=\"f('moNumber').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item>\n\n        <ion-item *ngIf=\"submitted && f('moNumber').hasError('minlength')\"  \n          lines=\"none\">\n          <ion-label  *ngIf=\"form.get('moNumber').errors.minlength\"  style=\"color: red;\">\n            {{languageService.moValidation}}\n          </ion-label>\n        </ion-item>\n\n        \n\n        <ion-item *ngIf=\"f('moNumber').hasError('pattern')\" \n          lines=\"none\">\n          <ion-label class=\"validation\">\n            {{languageService.mo_must_number}}\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">{{languageService.andhar_for_lang}}</ion-label>\n            <ion-input\n            name=\"adharNumber\"\n            required\n            formControlName=\"adharNumber\"\n            maxlength=\"12\" minlength=\"12\" \n            [ngModel]=\"usersData.adharNumber\"\n           \n          ></ion-input>\n        </ion-item>\n        <ion-item class=\"validation\" *ngIf=\"submitted && f('adharNumber').hasError('minlength')\"  \n          lines=\"none\">\n          <ion-label  *ngIf=\"form.get('adharNumber').errors.minlength\">\n            12 ????????? ???????????? ???????????? ???????????????\n          </ion-label>\n        </ion-item>\n\n        <ion-item class=\"validation\" *ngIf=\"f('adharNumber').hasError('pattern')\" \n          lines=\"none\">\n          <ion-label >\n            {{languageService.mo_must_number}}\n          </ion-label>\n        </ion-item>\n\n        <div  *ngIf=\"submitted && f('adharNumber').hasError('required')\"\n        lines=\"none\">\n        <ion-label *ngIf=\"f('adharNumber').hasError('required')\" class=\"validation\">\n          {{languageService.cant_empty_for_lang}}\n        </ion-label>\n      </div>\n      \n        <ion-item>\n          <ion-label position=\"floating\">{{languageService.name_for_lang}}</ion-label>\n          <ion-input\n            name=\"firstName\"\n            required\n            formControlName=\"firstName\"\n            [ngModel]=\"usersData.firstName\"\n          ></ion-input>\n        </ion-item>\n\n        <div  *ngIf=\"submitted && f('firstName').hasError('required')\"\n        lines=\"none\">\n        <ion-label *ngIf=\"f('firstName').hasError('required')\" class=\"validation\">\n          {{languageService.cant_empty_for_lang}}\n        </ion-label>\n      </div>\n\n        <ion-item>\n          <ion-label position=\"floating\">{{languageService.middleName_for_lang}}</ion-label>\n          <ion-input\n            name=\"middleName\"\n            formControlName=\"middleName\"\n            [ngModel]=\"usersData.middleName\"\n          ></ion-input>\n        </ion-item>\n\n\n        <ion-item class=\"ion-margin-bottom\">\n          <ion-label position=\"floating\">{{languageService.lastName_for_lang}}</ion-label>\n          <ion-input\n            name=\"lastName\"\n            required\n            formControlName=\"lastName\"\n            [ngModel]=\"usersData.lastName\"\n          ></ion-input>\n        </ion-item>\n\n        <div  *ngIf=\"submitted && f('lastName').hasError('required')\"\n        lines=\"none\">\n        <ion-label *ngIf=\"f('lastName').hasError('required')\" class=\"validation\">\n          {{languageService.cant_empty_for_lang}}\n        </ion-label>\n      </div>\n        \n\n        <ion-item class=\"ion-margin-top\">\n          <ion-label>{{languageService.dob_for_lang}}</ion-label>\n          <ion-datetime [ngModel]=\"usersData.date_of_birth\" displayFormat=\"DD-MMM-YYYY\" formControlName=\"date_of_birth\"  placeholder=\"06/05/1998\"></ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"validation\"\n        lines=\"none\"  *ngIf=\"f('date_of_birth').hasError('restrictAge')\">\n        <ion-label  class=\"validation\">\n          Age Must be greater than 18\n        </ion-label>\n      </ion-item>\n\n        <div  *ngIf=\"submitted && f('date_of_birth').hasError('required')\"\n        lines=\"none\">\n        <ion-label *ngIf=\"f('date_of_birth').hasError('required')\" class=\"validation\">\n          {{languageService.cant_empty_for_lang}}\n        </ion-label>\n      </div>\n\n        <ion-item>\n          <ion-label position=\"floating\">{{languageService.fatherName_for_lang}}</ion-label>\n          <ion-input\n            name=\"fatherName\"\n            required\n            formControlName=\"fatherName\"\n            [ngModel]=\"usersData.fatherName\"\n          ></ion-input>\n        </ion-item>\n\n        <div  *ngIf=\"submitted && f('fatherName').hasError('required')\"\n        lines=\"none\">\n        <ion-label *ngIf=\"f('fatherName').hasError('required')\" class=\"validation\">\n          {{languageService.cant_empty_for_lang}}\n        </ion-label>\n      </div>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button class=\"ion-margin-vertical\" type=\"submit\" class=\"btn-primary\" expand=\"block\">Continue</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_form-one_form-one_module_ts-es5.js.map