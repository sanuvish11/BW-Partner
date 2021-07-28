(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_form-five_form-five_module_ts"], {
    /***/
    96044:
    /*!*******************************************************!*\
      !*** ./src/app/form-five/form-five-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormFivePageRoutingModule": function FormFivePageRoutingModule() {
          return (
            /* binding */
            _FormFivePageRoutingModule
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


      var _form_five_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-five.page */
      13789);

      var routes = [{
        path: '',
        component: _form_five_page__WEBPACK_IMPORTED_MODULE_0__.FormFivePage
      }];

      var _FormFivePageRoutingModule = function FormFivePageRoutingModule() {
        _classCallCheck(this, FormFivePageRoutingModule);
      };

      _FormFivePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FormFivePageRoutingModule);
      /***/
    },

    /***/
    22990:
    /*!***********************************************!*\
      !*** ./src/app/form-five/form-five.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormFivePageModule": function FormFivePageModule() {
          return (
            /* binding */
            _FormFivePageModule
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


      var _form_five_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-five-routing.module */
      96044);
      /* harmony import */


      var _form_five_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-five.page */
      13789);

      var _FormFivePageModule = function FormFivePageModule() {
        _classCallCheck(this, FormFivePageModule);
      };

      _FormFivePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _form_five_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormFivePageRoutingModule],
        declarations: [_form_five_page__WEBPACK_IMPORTED_MODULE_1__.FormFivePage]
      })], _FormFivePageModule);
      /***/
    },

    /***/
    13789:
    /*!*********************************************!*\
      !*** ./src/app/form-five/form-five.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormFivePage": function FormFivePage() {
          return (
            /* binding */
            _FormFivePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_form_five_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./form-five.page.html */
      8250);
      /* harmony import */


      var _form_five_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-five.page.scss */
      71466);
      /* harmony import */


      var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/forms.service */
      76311);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _FormFivePage = /*#__PURE__*/function () {
        function FormFivePage(formService) {
          _classCallCheck(this, FormFivePage);

          this.formService = formService;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            agreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
          });
        }

        _createClass(FormFivePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.formService.getAllData().subscribe(function (data) {
              console.log(data);
              data.formData.forEach(function (data2) {
                _this.id = data2._id;
              });
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log(this.form.value);
            this.formService.updateFormData(this.id, this.form.value).subscribe(function (data) {
              if (data) {}
            });
          }
        }, {
          key: "getCheckedValue",
          value: function getCheckedValue(value) {
            console.log(value);
            this.form.value.agreement = value.detail.value;
          }
        }]);

        return FormFivePage;
      }();

      _FormFivePage.ctorParameters = function () {
        return [{
          type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService
        }];
      };

      _FormFivePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-five',
        template: _raw_loader_form_five_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_form_five_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FormFivePage);
      /***/
    },

    /***/
    76311:
    /*!*******************************************!*\
      !*** ./src/app/services/forms.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormsService": function FormsService() {
          return (
            /* binding */
            _FormsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _FormsService = /*#__PURE__*/function () {
        function FormsService(http, router, _translate, navCtrl) {
          _classCallCheck(this, FormsService);

          this.http = http;
          this.router = router;
          this._translate = _translate;
          this.navCtrl = navCtrl;
          this.baseUrl = 'https://bw-partner-server.herokuapp.com/'; // baseUrl= 'http://localhost:3000/';

          this.language = "hin";
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(FormsService, [{
          key: "saveFormData",
          value: function saveFormData(formData) {
            var _this2 = this;

            this.http.post(this.baseUrl + 'api/forms/save', formData).subscribe(function (data) {
              console.log(data);

              if (data) {
                _this2.router.navigate(['/form-two']);
              }
            });
          }
        }, {
          key: "_translateLanguage",
          value: function _translateLanguage() {
            this._translate.use(this.language);

            this.skill_for_lang = this._translate.instant("formData.skills");
            this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
            this.workExpe_for_lang = this._translate.instant("formData.workExperience");
            this.moNumber_for_lang = this._translate.instant("formData.moNumber");
            this.otp_for_lang = this._translate.instant("formData.otp");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            return this.http.get(this.baseUrl + 'api/forms/get/all', this.httpOptions);
          }
        }, {
          key: "getAllJobs",
          value: function getAllJobs() {
            return this.http.get(this.baseUrl + 'api/jobs/get/all/jobs', this.httpOptions);
          }
        }, {
          key: "updateFormData",
          value: function updateFormData(id, formData) {
            return this.http.post(this.baseUrl + 'api/forms/update/' + id, formData, this.httpOptions);
          }
        }, {
          key: "getCoreSkillsById",
          value: function getCoreSkillsById(id) {
            return this.http.get(this.baseUrl + 'api/jobsWorkArea/' + id, this.httpOptions);
          }
        }, {
          key: "getAllCoreSkills",
          value: function getAllCoreSkills() {
            return this.http.get(this.baseUrl + 'api/jobsWorkArea/get/all/jobsWorkArea', this.httpOptions);
          }
        }, {
          key: "getSkillsById",
          value: function getSkillsById(id) {
            return this.http.get(this.baseUrl + 'api/skills/' + id, this.httpOptions);
          }
        }, {
          key: "saveImages",
          value: function saveImages(adharFront, adharBack, addressProof) {
            var formData = new FormData();
            formData.append('adharFront', adharFront);
            formData.append('adharBack', adharBack);
            formData.append('addressProof', addressProof);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
            this.http.post(this.baseUrl + 'api/forms', formData, {
              headers: headers
            }).subscribe(function (data) {
              console.log(data);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "updateFormDataImages",
          value: function updateFormDataImages(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
            return this.http.put(this.baseUrl + 'api/forms/update/' + id, data, {
              headers: headers
            });
          }
        }]);

        return FormsService;
      }();

      _FormsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }];
      };

      _FormsService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _FormsService);
      /***/
    },

    /***/
    71466:
    /*!***********************************************!*\
      !*** ./src/app/form-five/form-five.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tool {\n  --background: #eb445a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZml2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6ImZvcm0tZml2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHtcbiAgICAtLWJhY2tncm91bmQ6ICNlYjQ0NWE7XG59Il19 */";
      /***/
    },

    /***/
    8250:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-five/form-five.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\" routerLink=\"/form-fourth\">Back</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-item lines=\"none\">\n      <ion-label>Check Term And Condition</ion-label>\n      <ion-checkbox  color=\"danger\" value=\"accepted\"  (ionChange)=\"getCheckedValue($event)\" [checked]=\"isChecked\"> </ion-checkbox>\n    </ion-item>\n\n    <ion-button  \n                class=\"ion-margin-vertical\"\n                type=\"submit\"\n                color=\"danger\"\n                expand=\"block\">Submit</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_form-five_form-five_module_ts-es5.js.map