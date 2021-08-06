(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_edit-skills_edit-skills_module_ts"],{

/***/ 15142:
/*!***********************************************************!*\
  !*** ./src/app/edit-skills/edit-skills-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSkillsPageRoutingModule": function() { return /* binding */ EditSkillsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_skills_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-skills.page */ 18573);




const routes = [
    {
        path: '',
        component: _edit_skills_page__WEBPACK_IMPORTED_MODULE_0__.EditSkillsPage
    }
];
let EditSkillsPageRoutingModule = class EditSkillsPageRoutingModule {
};
EditSkillsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditSkillsPageRoutingModule);



/***/ }),

/***/ 79289:
/*!***************************************************!*\
  !*** ./src/app/edit-skills/edit-skills.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSkillsPageModule": function() { return /* binding */ EditSkillsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-skills-routing.module */ 15142);
/* harmony import */ var _edit_skills_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-skills.page */ 18573);








let EditSkillsPageModule = class EditSkillsPageModule {
};
EditSkillsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditSkillsPageRoutingModule
        ],
        declarations: [_edit_skills_page__WEBPACK_IMPORTED_MODULE_1__.EditSkillsPage]
    })
], EditSkillsPageModule);



/***/ }),

/***/ 18573:
/*!*************************************************!*\
  !*** ./src/app/edit-skills/edit-skills.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSkillsPage": function() { return /* binding */ EditSkillsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_skills_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-skills.page.html */ 5006);
/* harmony import */ var _edit_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-skills.page.scss */ 66887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Models_bwUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/bwUsers */ 22782);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/forms.service */ 76311);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/language.service */ 71155);










let EditSkillsPage = class EditSkillsPage {
    constructor(formService, fb, router, apiService, languageService) {
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
            WORK_EXPERIENCE: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
        });
        this.formService.getAllCoreSkills();
    }
    ngOnInit() {
        this.moNumber = localStorage.getItem('moNumber');
        this.languageService._translateLanguage();
        this.formService.getAllJobs().subscribe((data) => {
            console.log(data);
            data.formData.forEach((res) => {
                this.allSkills.push(res);
            });
        });
        this.usersData._id = localStorage.getItem('userId');
        this.getUserById();
    }
    getUserById() {
        this.apiService.getBwUsersById(this.usersData._id).subscribe((res) => {
            console.log(res);
            this.usersData = res.data;
            this.form.value.SKILLS = this.usersData.SKILLS;
            console.log(this.usersData);
        }, (err => console.log(err)));
    }
    getCoreSkills() {
        let skillsData = this.form.get("SKILLS").value;
        console.log(skillsData);
        this.form.value.SKILLS = skillsData.JOB_NAME_HINDI;
        console.log(this.form.value.SKILLS);
        this.getCoreSkillsData(skillsData._id);
    }
    getCoreSkillsData(jobId) {
        this.formService.getCoreSkillsById(jobId).subscribe((res) => {
            console.log(res);
            this.areaOfWork = res;
        }, (err) => {
            console.log(err);
        });
    }
    onCoreSkillChecked(checkValue) {
        console.log(checkValue);
        if (checkValue.detail.checked === true) {
            this.showCoreError = false;
            console.log(this.isChecked);
            this.getWorkExpe(checkValue.detail.value._id);
            this.SKILLS.push(checkValue.detail.value);
            console.log(this.SKILLS);
        }
        else {
            this.showCoreError = true;
            this.workExperiece = [];
            this.isChecked = false;
            setTimeout(() => {
                this.isChecked = undefined;
            });
        }
    }
    getWorkExpe(skillId) {
        console.log(skillId);
        this.formService.getSkillsById(skillId).subscribe((data) => {
            console.log(data);
            data.forEach((res) => {
                this.workExperiece.push(res);
            });
        });
    }
    onExperienceChecked(skillValue) {
        console.log(skillValue);
        if (skillValue.detail.checked === true) {
            this.mainSkills.push(skillValue.detail.value);
            console.log(this.mainSkills);
            this.showExError = false;
        }
        else {
            this.showExError = true;
            for (let [index, expData] of this.mainSkills.entries()) {
                if (expData.CORE_SKILL_ID === skillValue.detail.value.CORE_SKILL_ID) {
                    this.mainSkills.splice(index, 1);
                }
            }
        }
    }
    f(controls) {
        return this.form.get(controls);
    }
    coreSkills() {
        console.log(this.coreSkillsData);
        return this.fb.group({
            SKILLS: this.coreSkillsData,
        });
    }
    setFormValues() {
        this.form.value.moNumber = this.moNumber;
        this.form.value.adharNumber = this.usersData.adharNumber,
            this.form.value.firstName = this.usersData.firstName,
            this.form.value.middleName = this.usersData.middleName,
            this.form.value.lastName = this.usersData.lastName,
            this.form.value.date_of_birth = this.usersData.date_of_birth,
            this.form.value.fatherName = this.usersData.fatherName,
            this.form.value.address1 = this.usersData.address1;
        this.form.value.address2 = this.usersData.address2,
            this.form.value.address3 = this.usersData.address3,
            this.form.value.area = this.usersData.area,
            this.form.value.city = this.usersData.city,
            this.form.value.state = this.usersData.state,
            this.form.value.pincode = this.usersData.pincode;
    }
    onSubmit() {
        this.submitted = true;
        this.form.value.CORE_SKILLS = this.SKILLS;
        this.form.value.WORK_EXPERIENCE = this.mainSkills;
        console.log(this.form.value);
        if (this.form.invalid) {
            return;
        }
        else if (this.showCoreError == true) {
            return;
        }
        else if (this.showExError == true) {
            return;
        }
        this.setFormValues();
        this.form.value.CORE_SKILLS = this.SKILLS;
        this.form.value.WORK_EXPERIENCE = this.mainSkills;
        console.log(this.form.value);
        this.router.navigate(['/dashboard']);
        // setTimeout(() => {
        //   this.formService.updateFormData(localStorage.getItem('userId'), this.form.value)
        //   .subscribe((data: any) => {
        //     if(data){
        //       this.router.navigate(['/form-fourth']);
        //     }
        //   });
        // }, 500);
    }
};
EditSkillsPage.ctorParameters = () => [
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_4__.FormsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService }
];
EditSkillsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-skills',
        template: _raw_loader_edit_skills_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSkillsPage);



/***/ }),

/***/ 66887:
/*!***************************************************!*\
  !*** ./src/app/edit-skills/edit-skills.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".manu_btn {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2tpbGxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXNraWxscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFudV9idG57XG4gICAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 5006:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-skills/edit-skills.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button class=\"manu_btn\" menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Experience </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"px-10\">\n    <form>\n      <ion-grid class=\"form-style\">\n        <ion-row>\n          <ion-col size-sm=\"6\" offset-sm=\"3\">\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n              <ion-list>\n                <ion-item lines=\"none\" class=\"ion-margin-bottom custome-select\">\n                  <ion-label class=\"ion-margin-bottom\" position=\"stacked\"\n                    >{{languageService.skill_for_lang}}</ion-label\n                  >\n                  <select\n                    (change)=\"getCoreSkills()\"\n                    formControlName=\"SKILLS\"\n                    name=\"skill\"\n                    class=\"required\"\n                  >\n                    <option value=\"\" disabled selected>Select Location</option>\n                    <option *ngFor=\"let skills of allSkills\" [ngValue]=\"skills\">\n                      {{skills.JOB_NAME_HINDI}}\n                    </option>\n                  </select>\n                </ion-item>\n                <ion-item\n                  *ngIf=\"submitted && f('SKILLS').hasError('required')\"\n                  lines=\"none\"\n                  class=\"validation\"\n                >\n                  <ion-label\n                    *ngIf=\"f('SKILLS').hasError('required')\"\n                    class=\"validation\"\n                  >\n                    {{languageService.cant_empty_for_lang}}\n                  </ion-label>\n                </ion-item>\n\n                <div *ngIf=\"areaOfWork.length != 0\">\n                  <ion-item lines=\"none\">\n                    <ion-label\n                      class=\"ion-margin-bottom\"\n                      style=\"font-size: 20px\"\n                      position=\"stacked\"\n                      >{{languageService.coreSkill_for_lang}}</ion-label\n                    >\n                  </ion-item>\n\n                  <ion-item lines=\"none\" *ngFor=\"let area of areaOfWork\">\n                    <ion-label>{{area.WORK_AREA_HINDI}}</ion-label>\n                    <ion-checkbox\n                      color=\"danger\"\n                      [value]=\"area\"\n                      (ionChange)=\"onCoreSkillChecked($event)\"\n                      [checked]=\"isChecked\"\n                    >\n                    </ion-checkbox>\n                  </ion-item>\n\n                  <ion-item\n                    *ngIf=\"showCoreError\"\n                    lines=\"none\"\n                    class=\"validation\"\n                  >\n                    <ion-label class=\"validation\">\n                      {{languageService.cant_empty_for_lang}}\n                    </ion-label>\n                  </ion-item>\n                </div>\n\n                <div *ngIf=\"workExperiece.length != 0\">\n                  <ion-item lines=\"none\">\n                    <ion-label\n                      class=\"ion-margin-bottom\"\n                      style=\"font-size: 20px\"\n                      position=\"stacked\"\n                      >{{languageService.workExpe_for_lang}}</ion-label\n                    >\n                  </ion-item>\n\n                  <ion-item lines=\"none\" *ngFor=\"let skills of workExperiece\">\n                    <ion-label>{{skills.WORK_EXPE_HINDI}}</ion-label>\n                    <ion-checkbox\n                      color=\"danger\"\n                      [value]=\"skills\"\n                      (ionChange)=\"onExperienceChecked($event)\"\n                      [checked]=\"isChecked\"\n                    >\n                    </ion-checkbox>\n                  </ion-item>\n\n                  <ion-item *ngIf=\"showExError\" lines=\"none\" class=\"validation\">\n                    <ion-label class=\"validation\">\n                      {{languageService.cant_empty_for_lang}}\n                    </ion-label>\n                  </ion-item>\n                </div>\n\n                <ion-button\n                  class=\"ion-margin-vertical\"\n                  type=\"submit\"\n                  class=\"btn-primary\"\n                  expand=\"block\"\n                  >Continue</ion-button\n                >\n              </ion-list>\n            </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_edit-skills_edit-skills_module_ts-es2015.js.map