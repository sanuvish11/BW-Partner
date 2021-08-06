(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_admin-set-skills_admin-set-skills_module_ts"], {
    /***/
    87255:
    /*!*********************************************************************!*\
      !*** ./src/app/admin-set-skills/admin-set-skills-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminSetSkillsPageRoutingModule": function AdminSetSkillsPageRoutingModule() {
          return (
            /* binding */
            _AdminSetSkillsPageRoutingModule
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


      var _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-set-skills.page */
      76727);

      var routes = [{
        path: '',
        component: _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_0__.AdminSetSkillsPage
      }];

      var _AdminSetSkillsPageRoutingModule = function AdminSetSkillsPageRoutingModule() {
        _classCallCheck(this, AdminSetSkillsPageRoutingModule);
      };

      _AdminSetSkillsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AdminSetSkillsPageRoutingModule);
      /***/
    },

    /***/
    53375:
    /*!*************************************************************!*\
      !*** ./src/app/admin-set-skills/admin-set-skills.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminSetSkillsPageModule": function AdminSetSkillsPageModule() {
          return (
            /* binding */
            _AdminSetSkillsPageModule
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


      var _admin_set_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-set-skills-routing.module */
      87255);
      /* harmony import */


      var _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-set-skills.page */
      76727);

      var _AdminSetSkillsPageModule = function AdminSetSkillsPageModule() {
        _classCallCheck(this, AdminSetSkillsPageModule);
      };

      _AdminSetSkillsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _admin_set_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminSetSkillsPageRoutingModule],
        declarations: [_admin_set_skills_page__WEBPACK_IMPORTED_MODULE_1__.AdminSetSkillsPage]
      })], _AdminSetSkillsPageModule);
      /***/
    },

    /***/
    76727:
    /*!***********************************************************!*\
      !*** ./src/app/admin-set-skills/admin-set-skills.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminSetSkillsPage": function AdminSetSkillsPage() {
          return (
            /* binding */
            _AdminSetSkillsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_admin_set_skills_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./admin-set-skills.page.html */
      48968);
      /* harmony import */


      var _admin_set_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-set-skills.page.scss */
      58559);
      /* harmony import */


      var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/forms.service */
      76311);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api.service */
      5830);

      var _AdminSetSkillsPage = /*#__PURE__*/function () {
        function AdminSetSkillsPage(formService, apiService) {
          _classCallCheck(this, AdminSetSkillsPage);

          this.formService = formService;
          this.apiService = apiService;
          this.allSkills = [];
          this.allCoreSkills = [];
          this.areaOfWork = [];
          this.skillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            JOB_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            STATUS: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("1")
          });
          this.coreSkillsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            JOB_UID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            STATUS: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("1"),
            WORK_AREA: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
          });
          this.workExpeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            skillID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            CORE_SKILL_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            STATUS: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('1'),
            WORK_EXPE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
          });
        }

        _createClass(AdminSetSkillsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllSkillsData(); // this.getAllCoreSkills();
          }
        }, {
          key: "getAllSkillsData",
          value: function getAllSkillsData() {
            var _this = this;

            this.allSkills = [];
            this.formService.getAllJobs().subscribe(function (data) {
              console.log(data);
              data.formData.forEach(function (res) {
                _this.allSkills.push(res);
              });
              console.log(_this.allSkills);
            });
          } // getAllCoreSkills(){
          //   this.formService.getAllCoreSkills().subscribe((data: any) => {
          //     console.log(data);
          //     this.allCoreSkills = [];
          //     data.formData.forEach((res: any) => {
          //       this.allCoreSkills.push(res);
          //     });
          //     console.log(this.allCoreSkills);
          //   },(err => console.log(err)));
          // }

        }, {
          key: "getSkillsValue",
          value: function getSkillsValue() {
            console.log(this.workExpeForm.value.skillID);
            this.getCoreSkillsData(this.workExpeForm.value.skillID);
          }
        }, {
          key: "getCoreSkillsData",
          value: function getCoreSkillsData(jobId) {
            var _this2 = this;

            this.formService.getCoreSkillsById(jobId).subscribe(function (res) {
              console.log(res);
              _this2.allCoreSkills = [];
              _this2.allCoreSkills = res;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "setSkills",
          value: function setSkills() {
            var _this3 = this;

            this.apiService.saveSkills(this.skillForm.value).subscribe(function (res) {
              if (res) {
                _this3.getAllSkillsData();
              }
            });
            this.skillForm.reset();
          }
        }, {
          key: "setCoreSkills",
          value: function setCoreSkills() {
            this.apiService.saveCoreSkills(this.coreSkillsForm.value).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              return console.log(err);
            });
            this.coreSkillsForm.reset();
          }
        }, {
          key: "setWorkExpe",
          value: function setWorkExpe() {
            this.apiService.saveExpe(this.workExpeForm.value).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              return console.log(err);
            });
            this.workExpeForm.reset();
          }
        }]);

        return AdminSetSkillsPage;
      }();

      _AdminSetSkillsPage.ctorParameters = function () {
        return [{
          type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }];
      };

      _AdminSetSkillsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin-set-skills',
        template: _raw_loader_admin_set_skills_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_set_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AdminSetSkillsPage);
      /***/
    },

    /***/
    58559:
    /*!*************************************************************!*\
      !*** ./src/app/admin-set-skills/admin-set-skills.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1zZXQtc2tpbGxzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    48968:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-set-skills/admin-set-skills.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Add New Skills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <form [formGroup]=\"skillForm\"  (ngSubmit)=\"setSkills()\">\n              <h2>Set Skills</h2>\n            <ion-item>\n              <ion-label position=\"floating\">Skills</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                required\n                placeholder=\"PLUMBER\"\n                formControlName=\"JOB_NAME\"\n              ></ion-input>\n            </ion-item>\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Skill\n            </ion-button>\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              CHECK SKILLS\n            </ion-button>\n          </form>\n\n          <form [formGroup]=\"coreSkillsForm\"  (ngSubmit)=\"setCoreSkills()\">\n            <h2>Set Core Skills</h2>\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select your skills</ion-label>\n              <select formControlName=\"JOB_UID\"  name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allSkills\"  [ngValue]=\"skills._id\">{{skills.JOB_NAME}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Core Skill</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                placeholder=\"Home work\"\n                formControlName=\"WORK_AREA\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Core Skills\n            </ion-button>\n          </form>\n\n          <form [formGroup]=\"workExpeForm\"  (ngSubmit)=\"setWorkExpe()\">\n           <h2>Set Work Experience</h2>\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select skills</ion-label>\n              <select  (change)=\"getSkillsValue($event)\" formControlName=\"skillID\" name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allSkills\"  [ngValue]=\"skills._id\">{{skills.JOB_NAME}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select Core Skill</ion-label>\n              <select  formControlName=\"CORE_SKILL_ID\"  name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allCoreSkills\"  [ngValue]=\"skills._id\">{{skills.WORK_AREA}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Work Experience</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                placeholder=\"Home work\"\n                formControlName=\"WORK_EXPE\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Work Experience\n            </ion-button>\n          </form>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button  \n         class=\"ion-margin-vertical\"\n         type=\"submit\"\n         color=\"danger\"\n        \n         expand=\"block\" routerLink=\"/form-three\">Next</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin-set-skills_admin-set-skills_module_ts-es5.js.map