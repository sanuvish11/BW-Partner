(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_edit-family-details_edit-family-details_module_ts"],{

/***/ 81059:
/*!***************************************************************************!*\
  !*** ./src/app/edit-family-details/edit-family-details-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFamilyDetailsPageRoutingModule": function() { return /* binding */ EditFamilyDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_family_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-family-details.page */ 67232);




const routes = [
    {
        path: '',
        component: _edit_family_details_page__WEBPACK_IMPORTED_MODULE_0__.EditFamilyDetailsPage
    }
];
let EditFamilyDetailsPageRoutingModule = class EditFamilyDetailsPageRoutingModule {
};
EditFamilyDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditFamilyDetailsPageRoutingModule);



/***/ }),

/***/ 25519:
/*!*******************************************************************!*\
  !*** ./src/app/edit-family-details/edit-family-details.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFamilyDetailsPageModule": function() { return /* binding */ EditFamilyDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_family_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-family-details-routing.module */ 81059);
/* harmony import */ var _edit_family_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-family-details.page */ 67232);








let EditFamilyDetailsPageModule = class EditFamilyDetailsPageModule {
};
EditFamilyDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_family_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditFamilyDetailsPageRoutingModule
        ],
        declarations: [_edit_family_details_page__WEBPACK_IMPORTED_MODULE_1__.EditFamilyDetailsPage]
    })
], EditFamilyDetailsPageModule);



/***/ }),

/***/ 67232:
/*!*****************************************************************!*\
  !*** ./src/app/edit-family-details/edit-family-details.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFamilyDetailsPage": function() { return /* binding */ EditFamilyDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_family_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-family-details.page.html */ 10838);
/* harmony import */ var _edit_family_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-family-details.page.scss */ 46094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/language.service */ 71155);






// import { ApiService } from 'src/src/app/services/api.service';

let EditFamilyDetailsPage = class EditFamilyDetailsPage {
    constructor(languageService, apiService, fb) {
        this.languageService = languageService;
        this.apiService = apiService;
        this.fb = fb;
        this.submitted = false;
        this.CHILD_NAME = '';
        this.showDynamicChilds = false;
        this.numberValue = ["1", "2", "3", "4", "5"];
        this.allChildName = [];
        this.allChildAge = [];
        this.allChildValue = [];
        this.familyData = {};
        this.finalValue = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            FATHER_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            FATHER_AGE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            MOTHER_AGE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            MOTHER_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            WIFE_AGE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            WIFE_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            CHILD_DETAIL: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([]),
            // CHILD_NAME: new FormControl('', [Validators.required]),
        });
    }
    ngOnInit() {
        this.languageService._translateLanguage();
        this.familyFrom = this.fb.group({
            dataValue: [''],
            childValue: this.fb.array([this.createItems()]),
        });
        this.getFamily();
    }
    getFamily() {
        this.apiService.getFamilyDetailsById(localStorage.getItem('userId'))
            .subscribe((res) => {
            console.log(res);
            // this.familyData = res.data;
            // console.log(this.familyData)
            res.data.CHILD_DETAIL.forEach((data) => {
                this.familyFrom.get("childValue").push(data);
            });
            console.log(this.familyFrom);
        }, (err => { console.log(err); }));
    }
    f(controls) {
        return this.form.get(controls);
    }
    createItems() {
        return this.fb.group({
            CHILD_NAME: '',
            CHILD_AGE: '',
        });
    }
    addChilds() {
        let textBox = this.familyFrom.get('dataValue').value;
        if (textBox.length === 1) {
            console.log(textBox);
            this.showDynamicChilds = true;
        }
        this.childDataValue.clear();
        for (let i = 1; i <= textBox; i++) {
            this.showDynamicChilds = true;
            this.childDataValue.push(this.createItems());
            console.log(this.childDataValue.controls);
        }
    }
    get childDataValue() {
        return this.familyFrom.get('childValue');
    }
    getChildName(childName) {
        console.log(childName);
        this.allChildName = [];
        this.allChildName.push(childName);
    }
    getChildAge(chidAge) {
        console.log(chidAge);
        this.allChildAge = [];
        this.allChildAge.push(chidAge);
        // this.childDataValue.value.forEach((data: any) => {
        //   this.allChildAge.push(data);
        // })
    }
    onSubmit() {
        this.submitted = true;
        // if(this.form.invalid){
        //   return;pap
        // } 
        console.log(this.allChildName);
        console.log(this.allChildAge);
        this.allChildName.forEach((data) => {
            this.finalValue.push(data);
        });
        this.allChildAge.forEach((data) => {
            this.finalValue.push(data);
        });
        console.log(this.finalValue);
        console.log(this.familyFrom.value);
        // console.log(this.allChildValue);
        // this.form.value.userId = localStorage.getItem('userId');
        // this.form.value.CHILD_DETAIL = this.allChildValue;
        // // this.apiService.saveFamilyDetails(this.form.value);
    }
};
EditFamilyDetailsPage.ctorParameters = () => [
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
EditFamilyDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-family-details',
        template: _raw_loader_edit_family_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_family_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditFamilyDetailsPage);



/***/ }),

/***/ 46094:
/*!*******************************************************************!*\
  !*** ./src/app/edit-family-details/edit-family-details.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".manu_btn {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZmFtaWx5LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImVkaXQtZmFtaWx5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbnVfYnRue1xuICAgIC0tY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ 10838:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-family-details/edit-family-details.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n   <ion-buttons slot=\"start\" >\n      <ion-menu-button class=\"manu_btn\" menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{languageService.family_details_lang}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"px-10\">\n  \n    <ion-grid class=\"form-style\">\n     \n      <ion-row>\n        <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.father_name_lang}}</ion-label>\n              <ion-input\n                name=\"FATHER_NAME\"\n                required\n                formControlName=\"FATHER_NAME\"\n                [ngModel]=\"familyData.FATHER_NAME\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('FATHER_NAME').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('FATHER_NAME').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Father Age</ion-label>\n                <ion-input\n                  name=\"FATHER_AGE\"\n                  required\n                  [ngModel]=\"familyData.FATHER_AGE\"\n                  formControlName=\"FATHER_AGE\"\n                ></ion-input>\n              </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.mother_name_lang}}</ion-label>\n              <ion-input\n                name=\"MOTHER_NAME\"\n                required\n                [ngModel]=\"familyData.MOTHER_NAME\"\n                formControlName=\"MOTHER_NAME\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Mother Age</ion-label>\n              <ion-input\n                name=\"MOTHER_AGE\"\n                required\n                [ngModel]=\"familyData.MOTHER_AGE\"\n                formControlName=\"MOTHER_AGE\"\n              ></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('MOTHER_NAME').hasError('required')\"\n                lines=\"none\" class=\"validation\">\n                <ion-label *ngIf=\"f('MOTHER_NAME').hasError('required')\"  >\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.wife_name_lang}}</ion-label>\n              <ion-input\n                name=\"WIFE_NAME\"\n                required\n                [ngModel]=\"familyData.WIFE_NAME\"\n                formControlName=\"WIFE_NAME\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Wife Age</ion-label>\n              <ion-input\n                name=\"WIFE_AGE\"\n                required\n                [ngModel]=\"familyData.WIFE_AGE\"\n                formControlName=\"WIFE_AGE\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('WIFE_NAME').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('WIFE_NAME').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n\n              <form [formGroup]=\"familyFrom\">\n                <div formArrayName=\"childValue\" *ngFor=\"let columns of childDataValue.controls; let i = index\">\n                  <div>\n                    <ion-row style=\"margin-top:10px;\" [formGroupName]=\"i\">\n                      <div *ngFor=\"let c of familyData.CHILD_DETAIL; let i = index\">\n                        <ion-label class=\"mobile\">Child Name :</ion-label>\n                        <ion-input   formControlName=\"CHILD_NAME\" [ngModel]=\"c.CHILD_NAME\"  (ionChange)=\"getChildName(i)\"></ion-input>\n                       \n          \n                        <ion-label class=\"mobile\">Child Age :</ion-label>\n                        <ion-input   formControlName=\"CHILD_AGE\" [ngModel]=\"c.CHILD_AGE\"  (ionChange)=\"getChildAge(i)\"></ion-input>\n                        \n                      </div>\n                    </ion-row>\n                  </div>\n                </div>\n              </form>\n\n                     \n\n              \n             \n             \n\n              <ion-col size-sm=\"6\" offset-sm=\"3\">\n                <ion-button class=\"ion-margin-vertical\" type=\"submit\" class=\"btn-primary\" expand=\"block\">Submit</ion-button>\n               </ion-col>\n          </ion-list>\n        </ion-col>\n      </form>\n      <!-- <div *ngFor=\"let c of allChildValue; let i = index\">\n        <ion-label class=\"mobile\">Child Name :</ion-label>\n        <ion-input name=\"CHILD_NAME\"  [(ngModel)]=\"c.CHILD_NAME\"  (ionChange)=\"getChildName(c)\"></ion-input>\n        \n\n        <ion-label class=\"mobile\">Child Age :</ion-label>\n        <ion-input name=\"CHILD_AGE\"   [(ngModel)]=\"c.CHILD_AGE\"  (ionChange)=\"getChildAge(c)\"></ion-input>\n        \n      </div> -->\n      </ion-row>\n    \n      \n    </ion-grid>\n  \n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_edit-family-details_edit-family-details_module_ts-es2015.js.map