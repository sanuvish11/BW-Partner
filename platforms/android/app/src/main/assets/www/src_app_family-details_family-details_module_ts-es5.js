(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_family-details_family-details_module_ts"], {
    /***/
    92120:
    /*!*****************************************************************!*\
      !*** ./src/app/family-details/family-details-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FamilyDetailsPageRoutingModule": function FamilyDetailsPageRoutingModule() {
          return (
            /* binding */
            _FamilyDetailsPageRoutingModule
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


      var _family_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./family-details.page */
      72930);

      var routes = [{
        path: '',
        component: _family_details_page__WEBPACK_IMPORTED_MODULE_0__.FamilyDetailsPage
      }];

      var _FamilyDetailsPageRoutingModule = function FamilyDetailsPageRoutingModule() {
        _classCallCheck(this, FamilyDetailsPageRoutingModule);
      };

      _FamilyDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FamilyDetailsPageRoutingModule);
      /***/
    },

    /***/
    92746:
    /*!*********************************************************!*\
      !*** ./src/app/family-details/family-details.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FamilyDetailsPageModule": function FamilyDetailsPageModule() {
          return (
            /* binding */
            _FamilyDetailsPageModule
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


      var _family_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./family-details-routing.module */
      92120);
      /* harmony import */


      var _family_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./family-details.page */
      72930);

      var _FamilyDetailsPageModule = function FamilyDetailsPageModule() {
        _classCallCheck(this, FamilyDetailsPageModule);
      };

      _FamilyDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _family_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamilyDetailsPageRoutingModule],
        declarations: [_family_details_page__WEBPACK_IMPORTED_MODULE_1__.FamilyDetailsPage]
      })], _FamilyDetailsPageModule);
      /***/
    },

    /***/
    72930:
    /*!*******************************************************!*\
      !*** ./src/app/family-details/family-details.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FamilyDetailsPage": function FamilyDetailsPage() {
          return (
            /* binding */
            _FamilyDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_family_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./family-details.page.html */
      6234);
      /* harmony import */


      var _family_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./family-details.page.scss */
      12435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/language.service */
      71155);

      var _FamilyDetailsPage = /*#__PURE__*/function () {
        function FamilyDetailsPage(languageService, apiService, fb) {
          _classCallCheck(this, FamilyDetailsPage);

          this.languageService = languageService;
          this.apiService = apiService;
          this.fb = fb;
          this.submitted = false;
          this.CHILD_NAME = '';
          this.showDynamicChilds = false;
          this.numberValue = ["1", "2", "3", "4", "5"];
          this.allChildValue = [];
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            FATHER_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            FATHER_AGE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            MOTHER_AGE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            MOTHER_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            WIFE_AGE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            WIFE_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            CHILD_DETAIL: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([]) // CHILD_NAME: new FormControl('', [Validators.required]),

          });
        }

        _createClass(FamilyDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languageService._translateLanguage();

            this.familyFrom = this.fb.group({
              dataValue: [''],
              childValue: this.fb.array([this.createItems()])
            });
          }
        }, {
          key: "f",
          value: function f(controls) {
            return this.form.get(controls);
          }
        }, {
          key: "createItems",
          value: function createItems() {
            return this.fb.group({
              CHILD_NAME: '',
              CHILD_AGE: ''
            });
          }
        }, {
          key: "addChilds",
          value: function addChilds() {
            var textBox = this.familyFrom.get('dataValue').value;

            if (textBox.length === 1) {
              console.log(textBox);
              this.showDynamicChilds = true;
            }

            this.childDataValue.clear();

            for (var i = 1; i <= textBox; i++) {
              this.showDynamicChilds = true;
              this.childDataValue.push(this.createItems());
              console.log(this.childDataValue.controls);
            }
          }
        }, {
          key: "childDataValue",
          get: function get() {
            return this.familyFrom.get('childValue');
          }
        }, {
          key: "getChildValue",
          value: function getChildValue() {
            var _this = this;

            this.allChildValue = [];
            this.childDataValue.controls.forEach(function (childData) {
              _this.allChildValue.push(childData.value);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true; // if(this.form.invalid){
            //   return;
            // } 

            this.form.value.userId = localStorage.getItem('userId');
            this.form.value.CHILD_DETAIL = this.allChildValue;
            this.apiService.saveFamilyDetails(this.form.value);
          }
        }]);

        return FamilyDetailsPage;
      }();

      _FamilyDetailsPage.ctorParameters = function () {
        return [{
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _FamilyDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-family-details',
        template: _raw_loader_family_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_family_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FamilyDetailsPage);
      /***/
    },

    /***/
    12435:
    /*!*********************************************************!*\
      !*** ./src/app/family-details/family-details.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".manu_btn {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJmYW1pbHktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFudV9idG57XG4gICAgLS1jb2xvcjogd2hpdGU7XG59Il19 */";
      /***/
    },

    /***/
    6234:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/family-details/family-details.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n   <ion-buttons slot=\"start\" >\n      <ion-menu-button class=\"manu_btn\" menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{languageService.family_details_lang}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"px-10\">\n  \n    <ion-grid class=\"form-style\">\n     \n      <ion-row>\n        <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.father_name_lang}}</ion-label>\n              <ion-input\n                name=\"FATHER_NAME\"\n                required\n                formControlName=\"FATHER_NAME\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('FATHER_NAME').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('FATHER_NAME').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Father Age</ion-label>\n                <ion-input\n                  name=\"FATHER_AGE\"\n                  required\n                  formControlName=\"FATHER_AGE\"\n                ></ion-input>\n              </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.mother_name_lang}}</ion-label>\n              <ion-input\n                name=\"MOTHER_NAME\"\n                required\n                formControlName=\"MOTHER_NAME\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Mother Age</ion-label>\n              <ion-input\n                name=\"MOTHER_AGE\"\n                required\n                formControlName=\"MOTHER_AGE\"\n              ></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('MOTHER_NAME').hasError('required')\"\n                lines=\"none\" class=\"validation\">\n                <ion-label *ngIf=\"f('MOTHER_NAME').hasError('required')\"  >\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.wife_name_lang}}</ion-label>\n              <ion-input\n                name=\"WIFE_NAME\"\n                required\n                formControlName=\"WIFE_NAME\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Wife Age</ion-label>\n              <ion-input\n                name=\"WIFE_AGE\"\n                required\n                formControlName=\"WIFE_AGE\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('WIFE_NAME').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('WIFE_NAME').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n\n              <ion-row>\n        \n      \n                <form [formGroup]=\"familyFrom\">\n                  <ion-item lines=\"none\" class=\"ion-margin-bottom custome-select\">\n                    <ion-label class=\"ion-margin-bottom\" position=\"stacked\"\n                      >{{languageService.child_name_lang}}</ion-label\n                    >\n                    <select\n                      (change)=\"addChilds()\"\n                      formControlName=\"dataValue\"\n                      name=\"dataValue\"\n                      class=\"required\"\n                    >\n                      <option value=\"\" disabled selected>Select Location</option>\n                      <option *ngFor=\"let value of numberValue\" [ngValue]=\"value\">\n                        {{value}}\n                      </option>\n                    </select>\n                  </ion-item>\n          \n                  <div formArrayName=\"childValue\">\n                    <div *ngFor=\"let columns of childDataValue.controls; let i = index\">\n                      <div *ngIf=\"showDynamicChilds\" [formGroupName]=\"i\">\n                        <div>\n                          {{i + 1}}\n                        </div>\n                          <ion-item>\n                            <ion-label position=\"floating\">{{languageService.child_name_lang}}</ion-label>\n                            <ion-input formControlName=\"CHILD_NAME\"  (ionChange)=\"getChildValue(i)\"></ion-input>\n                          </ion-item>\n              \n                          <ion-item>\n                            <ion-label position=\"floating\">child age</ion-label>\n                            <ion-input formControlName=\"CHILD_AGE\" (ionChange)=\"getChildValue(i)\"></ion-input>\n                          </ion-item>\n                       \n                      </div>\n                     \n                    </div>\n                  </div>\n                  \n                </form>\n                </ion-row>\n\n              <ion-col size-sm=\"6\" offset-sm=\"3\">\n                <ion-button class=\"ion-margin-vertical\" type=\"submit\" class=\"btn-primary\" expand=\"block\">Submit</ion-button>\n               </ion-col>\n\n            <!-- <ion-item>\n              <ion-label position=\"floating\">{{languageService.child_name_lang}}</ion-label>\n              <ion-input  formControlName=\"CHILD_NAME\"></ion-input>\n            </ion-item> -->\n\n            <!-- <ion-item *ngIf=\"submitted && f('CHILD_NAME').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('CHILD_NAME').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item> -->\n\n          </ion-list>\n        </ion-col>\n      </form>\n      </ion-row>\n    \n      \n    </ion-grid>\n  \n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_family-details_family-details_module_ts-es5.js.map