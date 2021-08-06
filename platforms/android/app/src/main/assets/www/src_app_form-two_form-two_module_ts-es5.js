(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_form-two_form-two_module_ts"], {
    /***/
    8932:
    /*!*****************************************************!*\
      !*** ./src/app/form-two/form-two-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormTwoPageRoutingModule": function FormTwoPageRoutingModule() {
          return (
            /* binding */
            _FormTwoPageRoutingModule
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


      var _form_two_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-two.page */
      50055);

      var routes = [{
        path: '',
        component: _form_two_page__WEBPACK_IMPORTED_MODULE_0__.FormTwoPage
      }];

      var _FormTwoPageRoutingModule = function FormTwoPageRoutingModule() {
        _classCallCheck(this, FormTwoPageRoutingModule);
      };

      _FormTwoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FormTwoPageRoutingModule);
      /***/
    },

    /***/
    72624:
    /*!*********************************************!*\
      !*** ./src/app/form-two/form-two.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormTwoPageModule": function FormTwoPageModule() {
          return (
            /* binding */
            _FormTwoPageModule
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


      var _form_two_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-two-routing.module */
      8932);
      /* harmony import */


      var _form_two_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-two.page */
      50055);

      var _FormTwoPageModule = function FormTwoPageModule() {
        _classCallCheck(this, FormTwoPageModule);
      };

      _FormTwoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _form_two_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormTwoPageRoutingModule],
        declarations: [_form_two_page__WEBPACK_IMPORTED_MODULE_1__.FormTwoPage]
      })], _FormTwoPageModule);
      /***/
    },

    /***/
    50055:
    /*!*******************************************!*\
      !*** ./src/app/form-two/form-two.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormTwoPage": function FormTwoPage() {
          return (
            /* binding */
            _FormTwoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_form_two_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./form-two.page.html */
      5004);
      /* harmony import */


      var _form_two_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-two.page.scss */
      55544);
      /* harmony import */


      var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/forms.service */
      76311);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

      var _FormTwoPage = /*#__PURE__*/function () {
        function FormTwoPage(router, formService, languageService, apiService) {
          _classCallCheck(this, FormTwoPage);

          this.router = router;
          this.formService = formService;
          this.languageService = languageService;
          this.apiService = apiService;
          this.submitted = false;
          this.pincodeCheck = false;
          this.pincodeCheckONSubmit = false;
          this.moNumber = '';
          this.postalAreas = [];
          this.autoCity = '';
          this.showAreasValues = false;
          this.autoState = '';
          this.usersData = new _Models_bwUsers__WEBPACK_IMPORTED_MODULE_3__.BwUsers();
          this.dateValidation = false;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            moNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            adharNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            address3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            // postal_area: new FormControl('', [Validators.required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[0-9]*$")])
          });
        }

        _createClass(FormTwoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languageService._translateLanguage();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.moNumber = localStorage.getItem('moNumber');
            this.usersData._id = localStorage.getItem('userId');
            console.log(this.usersData._id); // this.getAllUsersData();

            this.getUserById();
          }
        }, {
          key: "dateget",
          value: function dateget(value) {
            console.log(value);
          }
        }, {
          key: "getUserById",
          value: function getUserById() {
            var _this = this;

            console.log(this.usersData);
            this.apiService.getBwUsersById(this.usersData._id).subscribe(function (res) {
              console.log(res.data);
              _this.usersData = res.data;
              console.log(_this.usersData);
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "f",
          value: function f(controls) {
            return this.form.get(controls);
          }
        }, {
          key: "getAllUsersData",
          value: function getAllUsersData() {
            var _this2 = this;

            this.formService.getAllData().subscribe(function (res) {
              res.formData.forEach(function (data) {
                console.log(data);
                _this2.id = data._id;
                _this2.usersData = data;
                console.log(_this2.usersData);
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "updateUserData",
          value: function updateUserData() {
            var _this3 = this;

            this.usersData._id = localStorage.getItem('userId');
            this.formService.updateFormData(localStorage.getItem('userId'), this.form.value).subscribe(function (data) {
              if (data) {
                _this3.router.navigate(['/form-three']);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "callApiForPinCode",
          value: function callApiForPinCode() {
            var _this4 = this;

            this.apiService.getValuesFromPincode(this.form.get('pincode').value).subscribe(function (res) {
              if (res.length != 0) {
                _this4.pincodeCheck = false;
                res.forEach(function (data) {
                  _this4.autoCity = data.divisionname;
                  _this4.autoState = data.circlename;

                  _this4.postalAreas.push(data.officename);
                });
              } else {
                _this4.pincodeCheck = true;
                _this4.postalAreas = [];
                _this4.autoState = '';
                _this4.autoCity = ''; // this.usersData = new BwUsers();
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas() {
            console.log('working');
            this.showAreasValues = true;
            console.log(this.form.value.area);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
            this.form.value.moNumber = this.moNumber;
            this.form.value.adharNumber = this.usersData.adharNumber, this.form.value.firstName = this.usersData.firstName, this.form.value.middleName = this.usersData.middleName, this.form.value.lastName = this.usersData.lastName, this.form.value.date_of_birth = this.usersData.date_of_birth, this.form.value.fatherName = this.usersData.fatherName;

            if (this.form.invalid) {
              return;
            } else if (this.pincodeCheck == true) {
              return;
            }

            console.log(this.form.value);
            this.updateUserData();
          }
        }]);

        return FormTwoPage;
      }();

      _FormTwoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService
        }, {
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }];
      };

      _FormTwoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-form-two',
        template: _raw_loader_form_two_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_form_two_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FormTwoPage);
      /***/
    },

    /***/
    55544:
    /*!*********************************************!*\
      !*** ./src/app/form-two/form-two.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXR3by5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    5004:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-two/form-two.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{languageService.perInform_for_lang}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"px-10\">\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid class=\"form-style\">\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.pincode_for_lang}} </ion-label>\n              <ion-input\n                name=\"pinCode\"\n                required\n                 (ionChange)=\"callApiForPinCode()\"\n                [ngModel]=\"usersData.pincode\"\n                formControlName=\"pincode\"\n              ></ion-input>\n            </ion-item>\n          \n            <ion-item class=\"validation\" *ngIf=\"submitted && f('pincode').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('pincode').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n    \n              <ion-item class=\"validation\" *ngIf=\"f('pincode').hasError('pattern')\" \n              lines=\"none\">\n              <ion-label >\n                Input must be a number!\n              </ion-label>\n            </ion-item>\n            <div  style=\"margin-bottom: 16px; margin-left: 15px;\"  *ngIf=\"form.get('pincode').touched && pincodeCheck\" [style.color]=\"'red'\">\n              <span>पिनकोड सही नहीं है</span>\n            </div>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.city_for_lang}}</ion-label>\n              <ion-input\n                name=\"city\"\n                required\n                [ngModel]=\"autoCity\"\n                disabled=\"true\"\n                formControlName=\"city\"\n              ></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('city').hasError('required')\"\n                lines=\"none\" class=\"validation\">\n                <ion-label *ngIf=\"f('city').hasError('required')\"  >\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.state_for_lang}} </ion-label>\n              <ion-input\n                name=\"State\"\n                required\n                disabled=\"true\"\n                [ngModel]=\"autoState\"\n                formControlName=\"state\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('state').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('state').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item *ngIf=\"usersData.area == null\" lines=\"none\" class=\"ion-margin-bottom custome-select\">\n                <ion-label class=\"ion-margin-bottom\" position=\"stacked\">डाक क्षेत्र </ion-label>\n                <select (change)=\"getAreas()\"  formControlName=\"area\"  name=\"skill\" class=\"required\">\n                  <option    value=\"\" disabled selected>Select Area</option>\n                  <option  *ngFor=\"let areas of postalAreas\"  [ngValue]=\"areas\">{{areas}}</option>\n                </select>\n              </ion-item>\n\n              <ion-item *ngIf=\"usersData.area != null\" lines=\"none\" class=\"ion-margin-bottom custome-select\">\n                <ion-label class=\"ion-margin-bottom\" position=\"stacked\">डाक क्षेत्र </ion-label>\n                <select (change)=\"getAreas()\" [ngModel]=\"usersData.area\"  formControlName=\"area\"  name=\"skill\" class=\"required\">\n                  <option  *ngFor=\"let areas of postalAreas\"  [ngValue]=\"areas\">{{areas}}</option>\n                </select>\n              </ion-item>\n\n              <ion-item *ngIf=\"submitted && f('area').hasError('required')\"\n          lines=\"none\" class=\"validation\">\n          <ion-label *ngIf=\"f('area').hasError('required')\"  class=\"validation\">\n            {{languageService.cant_empty_for_lang}}\n          </ion-label>\n        </ion-item>\n    \n           \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.address1_for_lang}}</ion-label>\n              <ion-input [ngModel]=\"usersData.address1\" formControlName=\"address1\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('address1').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('address1').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.address2_for_lang}}</ion-label>\n              <ion-input [ngModel]=\"usersData.address2\" formControlName=\"address2\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('address2').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('address2').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.address3_for_lang}}</ion-label>\n              <ion-input [ngModel]=\"usersData.address3\" formControlName=\"address3\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('address3').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('address3').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item>\n\n            <!-- <ion-item>\n              <ion-label position=\"floating\">{{languageService.area_for_lang}}</ion-label>\n              <ion-input [ngModel]=\"usersData.area\" name=\"area\" required formControlName=\"area\"></ion-input>\n            </ion-item>\n\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('area').hasError('required')\"\n            lines=\"none\">\n            <ion-label *ngIf=\"f('area').hasError('required')\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item> -->\n\n        \n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button class=\"ion-margin-vertical\" type=\"submit\" class=\"btn-primary\" expand=\"block\">Continue</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_form-two_form-two_module_ts-es5.js.map