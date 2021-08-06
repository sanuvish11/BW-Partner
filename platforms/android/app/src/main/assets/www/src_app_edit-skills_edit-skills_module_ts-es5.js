(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_edit-skills_edit-skills_module_ts"], {
    /***/
    15142:
    /*!***********************************************************!*\
      !*** ./src/app/edit-skills/edit-skills-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditSkillsPageRoutingModule": function EditSkillsPageRoutingModule() {
          return (
            /* binding */
            _EditSkillsPageRoutingModule
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


      var _edit_skills_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-skills.page */
      18573);

      var routes = [{
        path: '',
        component: _edit_skills_page__WEBPACK_IMPORTED_MODULE_0__.EditSkillsPage
      }];

      var _EditSkillsPageRoutingModule = function EditSkillsPageRoutingModule() {
        _classCallCheck(this, EditSkillsPageRoutingModule);
      };

      _EditSkillsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditSkillsPageRoutingModule);
      /***/
    },

    /***/
    79289:
    /*!***************************************************!*\
      !*** ./src/app/edit-skills/edit-skills.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditSkillsPageModule": function EditSkillsPageModule() {
          return (
            /* binding */
            _EditSkillsPageModule
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


      var _edit_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-skills-routing.module */
      15142);
      /* harmony import */


      var _edit_skills_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-skills.page */
      18573);

      var _EditSkillsPageModule = function EditSkillsPageModule() {
        _classCallCheck(this, EditSkillsPageModule);
      };

      _EditSkillsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _edit_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditSkillsPageRoutingModule],
        declarations: [_edit_skills_page__WEBPACK_IMPORTED_MODULE_1__.EditSkillsPage]
      })], _EditSkillsPageModule);
      /***/
    },

    /***/
    18573:
    /*!*************************************************!*\
      !*** ./src/app/edit-skills/edit-skills.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditSkillsPage": function EditSkillsPage() {
          return (
            /* binding */
            _EditSkillsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_edit_skills_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./edit-skills.page.html */
      5006);
      /* harmony import */


      var _edit_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-skills.page.scss */
      66887);
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


      var _Models_bwUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Models/bwUsers */
      22782);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _services_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/forms.service */
      76311);
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/language.service */
      71155);

      var _EditSkillsPage = /*#__PURE__*/function () {
        function EditSkillsPage(formService, fb, router, apiService, languageService) {
          _classCallCheck(this, EditSkillsPage);

          this.formService = formService;
          this.fb = fb;
          this.router = router;
          this.apiService = apiService;
          this.languageService = languageService;
          this.allSkills = [];
          this.areaOfWork = [];
          this.submitted = false;
          this.mainSkills = [];
          this.coreSkillsData = "";
          this.SKILLS = [];
          this.workExperiece = [];
          this.language = "hin";
          this.id = "";
          this.isChecked = false;
          this.usersData = new _Models_bwUsers__WEBPACK_IMPORTED_MODULE_2__.BwUsers();
          this.showCoreError = true;
          this.showExError = true;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            moNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            adharNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            address3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            SKILLS: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            CORE_SKILLS: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
            WORK_EXPERIENCE: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([])
          });
          this.formService.getAllCoreSkills();
        }

        _createClass(EditSkillsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.moNumber = localStorage.getItem('moNumber');

            this.languageService._translateLanguage();

            this.formService.getAllJobs().subscribe(function (data) {
              console.log(data);
              data.formData.forEach(function (res) {
                _this.allSkills.push(res);
              });
            });
            this.usersData._id = localStorage.getItem('userId');
            this.getUserById();
          }
        }, {
          key: "getUserById",
          value: function getUserById() {
            var _this2 = this;

            this.apiService.getBwUsersById(this.usersData._id).subscribe(function (res) {
              console.log(res);
              _this2.usersData = res.data;
              _this2.form.value.SKILLS = _this2.usersData.SKILLS;
              console.log(_this2.usersData);
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "getCoreSkills",
          value: function getCoreSkills() {
            var skillsData = this.form.get("SKILLS").value;
            console.log(skillsData);
            this.form.value.SKILLS = skillsData.JOB_NAME_HINDI;
            console.log(this.form.value.SKILLS);
            this.getCoreSkillsData(skillsData._id);
          }
        }, {
          key: "getCoreSkillsData",
          value: function getCoreSkillsData(jobId) {
            var _this3 = this;

            this.formService.getCoreSkillsById(jobId).subscribe(function (res) {
              console.log(res);
              _this3.areaOfWork = res;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "onCoreSkillChecked",
          value: function onCoreSkillChecked(checkValue) {
            var _this4 = this;

            console.log(checkValue);

            if (checkValue.detail.checked === true) {
              this.showCoreError = false;
              console.log(this.isChecked);
              this.getWorkExpe(checkValue.detail.value._id);
              this.SKILLS.push(checkValue.detail.value);
              console.log(this.SKILLS);
            } else {
              this.showCoreError = true;
              this.workExperiece = [];
              this.isChecked = false;
              setTimeout(function () {
                _this4.isChecked = undefined;
              });
            }
          }
        }, {
          key: "getWorkExpe",
          value: function getWorkExpe(skillId) {
            var _this5 = this;

            console.log(skillId);
            this.formService.getSkillsById(skillId).subscribe(function (data) {
              console.log(data);
              data.forEach(function (res) {
                _this5.workExperiece.push(res);
              });
            });
          }
        }, {
          key: "onExperienceChecked",
          value: function onExperienceChecked(skillValue) {
            console.log(skillValue);

            if (skillValue.detail.checked === true) {
              this.mainSkills.push(skillValue.detail.value);
              console.log(this.mainSkills);
              this.showExError = false;
            } else {
              this.showExError = true;

              var _iterator = _createForOfIteratorHelper(this.mainSkills.entries()),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _step$value = _slicedToArray(_step.value, 2),
                      index = _step$value[0],
                      expData = _step$value[1];

                  if (expData.CORE_SKILL_ID === skillValue.detail.value.CORE_SKILL_ID) {
                    this.mainSkills.splice(index, 1);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }, {
          key: "f",
          value: function f(controls) {
            return this.form.get(controls);
          }
        }, {
          key: "coreSkills",
          value: function coreSkills() {
            console.log(this.coreSkillsData);
            return this.fb.group({
              SKILLS: this.coreSkillsData
            });
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.value.moNumber = this.moNumber;
            this.form.value.adharNumber = this.usersData.adharNumber, this.form.value.firstName = this.usersData.firstName, this.form.value.middleName = this.usersData.middleName, this.form.value.lastName = this.usersData.lastName, this.form.value.date_of_birth = this.usersData.date_of_birth, this.form.value.fatherName = this.usersData.fatherName, this.form.value.address1 = this.usersData.address1;
            this.form.value.address2 = this.usersData.address2, this.form.value.address3 = this.usersData.address3, this.form.value.area = this.usersData.area, this.form.value.city = this.usersData.city, this.form.value.state = this.usersData.state, this.form.value.pincode = this.usersData.pincode;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
            this.form.value.CORE_SKILLS = this.SKILLS;
            this.form.value.WORK_EXPERIENCE = this.mainSkills;
            console.log(this.form.value);

            if (this.form.invalid) {
              return;
            } else if (this.showCoreError == true) {
              return;
            } else if (this.showExError == true) {
              return;
            }

            this.setFormValues();
            this.form.value.CORE_SKILLS = this.SKILLS;
            this.form.value.WORK_EXPERIENCE = this.mainSkills;
            console.log(this.form.value);
            this.router.navigate(['/dashboard']); // setTimeout(() => {
            //   this.formService.updateFormData(localStorage.getItem('userId'), this.form.value)
            //   .subscribe((data: any) => {
            //     if(data){
            //       this.router.navigate(['/form-fourth']);
            //     }
            //   });
            // }, 500);
          }
        }]);

        return EditSkillsPage;
      }();

      _EditSkillsPage.ctorParameters = function () {
        return [{
          type: _services_forms_service__WEBPACK_IMPORTED_MODULE_4__.FormsService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService
        }];
      };

      _EditSkillsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-skills',
        template: _raw_loader_edit_skills_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditSkillsPage);
      /***/
    },

    /***/
    66887:
    /*!***************************************************!*\
      !*** ./src/app/edit-skills/edit-skills.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".manu_btn {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2tpbGxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXNraWxscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFudV9idG57XG4gICAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    5006:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-skills/edit-skills.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button class=\"manu_btn\" menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Experience </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"px-10\">\n    <form>\n      <ion-grid class=\"form-style\">\n        <ion-row>\n          <ion-col size-sm=\"6\" offset-sm=\"3\">\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n              <ion-list>\n                <ion-item lines=\"none\" class=\"ion-margin-bottom custome-select\">\n                  <ion-label class=\"ion-margin-bottom\" position=\"stacked\"\n                    >{{languageService.skill_for_lang}}</ion-label\n                  >\n                  <select\n                    (change)=\"getCoreSkills()\"\n                    formControlName=\"SKILLS\"\n                    name=\"skill\"\n                    class=\"required\"\n                  >\n                    <option value=\"\" disabled selected>Select Location</option>\n                    <option *ngFor=\"let skills of allSkills\" [ngValue]=\"skills\">\n                      {{skills.JOB_NAME_HINDI}}\n                    </option>\n                  </select>\n                </ion-item>\n                <ion-item\n                  *ngIf=\"submitted && f('SKILLS').hasError('required')\"\n                  lines=\"none\"\n                  class=\"validation\"\n                >\n                  <ion-label\n                    *ngIf=\"f('SKILLS').hasError('required')\"\n                    class=\"validation\"\n                  >\n                    {{languageService.cant_empty_for_lang}}\n                  </ion-label>\n                </ion-item>\n\n                <div *ngIf=\"areaOfWork.length != 0\">\n                  <ion-item lines=\"none\">\n                    <ion-label\n                      class=\"ion-margin-bottom\"\n                      style=\"font-size: 20px\"\n                      position=\"stacked\"\n                      >{{languageService.coreSkill_for_lang}}</ion-label\n                    >\n                  </ion-item>\n\n                  <ion-item lines=\"none\" *ngFor=\"let area of areaOfWork\">\n                    <ion-label>{{area.WORK_AREA_HINDI}}</ion-label>\n                    <ion-checkbox\n                      color=\"danger\"\n                      [value]=\"area\"\n                      (ionChange)=\"onCoreSkillChecked($event)\"\n                      [checked]=\"isChecked\"\n                    >\n                    </ion-checkbox>\n                  </ion-item>\n\n                  <ion-item\n                    *ngIf=\"showCoreError\"\n                    lines=\"none\"\n                    class=\"validation\"\n                  >\n                    <ion-label class=\"validation\">\n                      {{languageService.cant_empty_for_lang}}\n                    </ion-label>\n                  </ion-item>\n                </div>\n\n                <div *ngIf=\"workExperiece.length != 0\">\n                  <ion-item lines=\"none\">\n                    <ion-label\n                      class=\"ion-margin-bottom\"\n                      style=\"font-size: 20px\"\n                      position=\"stacked\"\n                      >{{languageService.workExpe_for_lang}}</ion-label\n                    >\n                  </ion-item>\n\n                  <ion-item lines=\"none\" *ngFor=\"let skills of workExperiece\">\n                    <ion-label>{{skills.WORK_EXPE_HINDI}}</ion-label>\n                    <ion-checkbox\n                      color=\"danger\"\n                      [value]=\"skills\"\n                      (ionChange)=\"onExperienceChecked($event)\"\n                      [checked]=\"isChecked\"\n                    >\n                    </ion-checkbox>\n                  </ion-item>\n\n                  <ion-item *ngIf=\"showExError\" lines=\"none\" class=\"validation\">\n                    <ion-label class=\"validation\">\n                      {{languageService.cant_empty_for_lang}}\n                    </ion-label>\n                  </ion-item>\n                </div>\n\n                <ion-button\n                  class=\"ion-margin-vertical\"\n                  type=\"submit\"\n                  class=\"btn-primary\"\n                  expand=\"block\"\n                  >Continue</ion-button\n                >\n              </ion-list>\n            </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_edit-skills_edit-skills_module_ts-es5.js.map