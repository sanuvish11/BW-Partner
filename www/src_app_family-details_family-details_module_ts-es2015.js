(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_family-details_family-details_module_ts"],{

/***/ 92120:
/*!*****************************************************************!*\
  !*** ./src/app/family-details/family-details-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyDetailsPageRoutingModule": function() { return /* binding */ FamilyDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _family_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family-details.page */ 72930);




const routes = [
    {
        path: '',
        component: _family_details_page__WEBPACK_IMPORTED_MODULE_0__.FamilyDetailsPage
    }
];
let FamilyDetailsPageRoutingModule = class FamilyDetailsPageRoutingModule {
};
FamilyDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamilyDetailsPageRoutingModule);



/***/ }),

/***/ 92746:
/*!*********************************************************!*\
  !*** ./src/app/family-details/family-details.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyDetailsPageModule": function() { return /* binding */ FamilyDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _family_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family-details-routing.module */ 92120);
/* harmony import */ var _family_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./family-details.page */ 72930);








let FamilyDetailsPageModule = class FamilyDetailsPageModule {
};
FamilyDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _family_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamilyDetailsPageRoutingModule
        ],
        declarations: [_family_details_page__WEBPACK_IMPORTED_MODULE_1__.FamilyDetailsPage]
    })
], FamilyDetailsPageModule);



/***/ }),

/***/ 72930:
/*!*******************************************************!*\
  !*** ./src/app/family-details/family-details.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyDetailsPage": function() { return /* binding */ FamilyDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_family_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./family-details.page.html */ 6234);
/* harmony import */ var _family_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./family-details.page.scss */ 12435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/language.service */ 71155);







let FamilyDetailsPage = class FamilyDetailsPage {
    constructor(languageService, apiService, fb) {
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
    getChildValue() {
        this.allChildValue = [];
        this.childDataValue.controls.forEach((childData) => {
            this.allChildValue.push(childData.value);
        });
    }
    onSubmit() {
        this.submitted = true;
        // if(this.form.invalid){
        //   return;
        // } 
        this.form.value.userId = localStorage.getItem('userId');
        this.form.value.CHILD_DETAIL = this.allChildValue;
        this.apiService.saveFamilyDetails(this.form.value);
    }
};
FamilyDetailsPage.ctorParameters = () => [
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
FamilyDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-family-details',
        template: _raw_loader_family_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_family_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FamilyDetailsPage);



/***/ }),

/***/ 12435:
/*!*********************************************************!*\
  !*** ./src/app/family-details/family-details.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".manu_btn {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJmYW1pbHktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFudV9idG57XG4gICAgLS1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ 6234:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/family-details/family-details.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n   <ion-buttons slot=\"start\" >\n      <ion-menu-button class=\"manu_btn\" menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{languageService.family_details_lang}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"px-10\">\n  \n    <ion-grid class=\"form-style\">\n     \n      <ion-row>\n        <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.father_name_lang}}</ion-label>\n              <ion-input\n                name=\"FATHER_NAME\"\n                required\n                formControlName=\"FATHER_NAME\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('FATHER_NAME').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('FATHER_NAME').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Father Age</ion-label>\n                <ion-input\n                  name=\"FATHER_AGE\"\n                  required\n                  formControlName=\"FATHER_AGE\"\n                ></ion-input>\n              </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.mother_name_lang}}</ion-label>\n              <ion-input\n                name=\"MOTHER_NAME\"\n                required\n                formControlName=\"MOTHER_NAME\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Mother Age</ion-label>\n              <ion-input\n                name=\"MOTHER_AGE\"\n                required\n                formControlName=\"MOTHER_AGE\"\n              ></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('MOTHER_NAME').hasError('required')\"\n                lines=\"none\" class=\"validation\">\n                <ion-label *ngIf=\"f('MOTHER_NAME').hasError('required')\"  >\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.wife_name_lang}}</ion-label>\n              <ion-input\n                name=\"WIFE_NAME\"\n                required\n                formControlName=\"WIFE_NAME\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Wife Age</ion-label>\n              <ion-input\n                name=\"WIFE_AGE\"\n                required\n                formControlName=\"WIFE_AGE\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('WIFE_NAME').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('WIFE_NAME').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n\n              <ion-row>\n        \n      \n                <form [formGroup]=\"familyFrom\">\n                  <ion-item lines=\"none\" class=\"ion-margin-bottom custome-select\">\n                    <ion-label class=\"ion-margin-bottom\" position=\"stacked\"\n                      >{{languageService.child_name_lang}}</ion-label\n                    >\n                    <select\n                      (change)=\"addChilds()\"\n                      formControlName=\"dataValue\"\n                      name=\"dataValue\"\n                      class=\"required\"\n                    >\n                      <option value=\"\" disabled selected>Select Location</option>\n                      <option *ngFor=\"let value of numberValue\" [ngValue]=\"value\">\n                        {{value}}\n                      </option>\n                    </select>\n                  </ion-item>\n          \n                  <div formArrayName=\"childValue\">\n                    <div *ngFor=\"let columns of childDataValue.controls; let i = index\">\n                      <div *ngIf=\"showDynamicChilds\" [formGroupName]=\"i\">\n                        <div>\n                          {{i + 1}}\n                        </div>\n                          <ion-item>\n                            <ion-label position=\"floating\">{{languageService.child_name_lang}}</ion-label>\n                            <ion-input formControlName=\"CHILD_NAME\"  (ionChange)=\"getChildValue(i)\"></ion-input>\n                          </ion-item>\n              \n                          <ion-item>\n                            <ion-label position=\"floating\">child age</ion-label>\n                            <ion-input formControlName=\"CHILD_AGE\" (ionChange)=\"getChildValue(i)\"></ion-input>\n                          </ion-item>\n                       \n                      </div>\n                     \n                    </div>\n                  </div>\n                  \n                </form>\n                </ion-row>\n\n              <ion-col size-sm=\"6\" offset-sm=\"3\">\n                <ion-button class=\"ion-margin-vertical\" type=\"submit\" class=\"btn-primary\" expand=\"block\">Submit</ion-button>\n               </ion-col>\n\n            <!-- <ion-item>\n              <ion-label position=\"floating\">{{languageService.child_name_lang}}</ion-label>\n              <ion-input  formControlName=\"CHILD_NAME\"></ion-input>\n            </ion-item> -->\n\n            <!-- <ion-item *ngIf=\"submitted && f('CHILD_NAME').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('CHILD_NAME').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item> -->\n\n          </ion-list>\n        </ion-col>\n      </form>\n      </ion-row>\n    \n      \n    </ion-grid>\n  \n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_family-details_family-details_module_ts-es2015.js.map