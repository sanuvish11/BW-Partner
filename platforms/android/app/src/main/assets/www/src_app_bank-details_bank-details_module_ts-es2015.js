(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_bank-details_bank-details_module_ts"],{

/***/ 7891:
/*!*******************************************!*\
  !*** ./src/app/Models/userBankDetails.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBankDetails": function() { return /* binding */ UserBankDetails; }
/* harmony export */ });
class UserBankDetails {
    constructor() {
        this.ACCOUNT_NUMBER = '';
        this.userId = '';
        this.IFSC = '';
        this.ACCOUNT_HOLDER_NAME = '';
        this.PHONE_NUMBER = '';
    }
}


/***/ }),

/***/ 59042:
/*!*************************************************************!*\
  !*** ./src/app/bank-details/bank-details-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailsPageRoutingModule": function() { return /* binding */ BankDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _bank_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-details.page */ 44508);




const routes = [
    {
        path: '',
        component: _bank_details_page__WEBPACK_IMPORTED_MODULE_0__.BankDetailsPage
    }
];
let BankDetailsPageRoutingModule = class BankDetailsPageRoutingModule {
};
BankDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BankDetailsPageRoutingModule);



/***/ }),

/***/ 38767:
/*!*****************************************************!*\
  !*** ./src/app/bank-details/bank-details.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailsPageModule": function() { return /* binding */ BankDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _bank_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-details-routing.module */ 59042);
/* harmony import */ var _bank_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-details.page */ 44508);








let BankDetailsPageModule = class BankDetailsPageModule {
};
BankDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bank_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankDetailsPageRoutingModule
        ],
        declarations: [_bank_details_page__WEBPACK_IMPORTED_MODULE_1__.BankDetailsPage]
    })
], BankDetailsPageModule);



/***/ }),

/***/ 44508:
/*!***************************************************!*\
  !*** ./src/app/bank-details/bank-details.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailsPage": function() { return /* binding */ BankDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_bank_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bank-details.page.html */ 55471);
/* harmony import */ var _bank_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-details.page.scss */ 45025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Models_userBankDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/userBankDetails */ 7891);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/language.service */ 71155);









// import { LanguageService } from '../services/language.service';
let BankDetailsPage = class BankDetailsPage {
    constructor(apiService, languageService, _Activatedroute) {
        this.apiService = apiService;
        this.languageService = languageService;
        this._Activatedroute = _Activatedroute;
        this.submitted = false;
        this.mode = 'create';
        this.id = '';
        this.bankDetails = new _Models_userBankDetails__WEBPACK_IMPORTED_MODULE_2__.UserBankDetails();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            ACOOUNT_NUMBER: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$")]),
            IFSC: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            ACCOUNT_HOLDER_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            PHONE_NUMBER: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$")]),
        });
    }
    ngOnInit() {
        this.languageService._translateLanguage();
        this._Activatedroute.paramMap.subscribe((paramMap) => {
            if (paramMap.has("id")) {
                this.mode = "edit";
                this.id = paramMap.get("id");
                this.getBankDetails();
            }
            else {
                this.mode = "create";
                this.id = null;
            }
        });
    }
    f(controls) {
        return this.form.get(controls);
    }
    getBankDetails() {
        this.apiService.getBankDetailsById(localStorage.getItem('userId'))
            .subscribe((data) => {
            console.log(data);
            data.forEach(((res) => {
                this.bankId = res._id;
                this.bankDetails = res;
                console.log(this.bankDetails);
            }));
        }, (err => { console.log(err); }));
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
        this.form.value.userId = localStorage.getItem('userId');
        if (this.mode === "create") {
            console.log('if works');
            this.apiService.saveBankDetails(this.form.value);
            this.form.reset();
        }
        else {
            console.log('else works');
            console.log(this.form.value.userId);
            this.apiService.updateBankDetailsById(this.bankId, this.form.value);
            this.form.reset();
        }
    }
};
BankDetailsPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
BankDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-bank-details',
        template: _raw_loader_bank_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bank_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BankDetailsPage);



/***/ }),

/***/ 45025:
/*!*****************************************************!*\
  !*** ./src/app/bank-details/bank-details.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".manu_btn {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmstZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoiYmFuay1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW51X2J0bntcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ 55471:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bank-details/bank-details.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button class=\"manu_btn\" menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{languageService.account_details_lang}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"px-10\">\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid class=\"form-style\">\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.account_number_lang}}</ion-label>\n              <ion-input\n                name=\"ACOOUNT_NUMBER\"\n                required\n                maxlength=\"16\" \n                minlength=\"16\"\n                [ngModel]=\"bankDetails.ACOOUNT_NUMBER\"\n                formControlName=\"ACOOUNT_NUMBER\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('ACOOUNT_NUMBER').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('ACOOUNT_NUMBER').hasError('required')\"  class=\"validation\">\n                  {{languageService.account_details_lang}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item class=\"validation\" *ngIf=\"submitted && f('ACOOUNT_NUMBER').hasError('minlength')\"  \n                lines=\"none\">\n                <ion-label  *ngIf=\"form.get('ACOOUNT_NUMBER').errors.minlength\">\n                  16 अंक लंबा होना चाहिए\n                </ion-label>\n              </ion-item>\n    \n              <ion-item class=\"validation\" *ngIf=\"f('ACOOUNT_NUMBER').hasError('pattern')\" \n              lines=\"none\">\n              <ion-label >\n                {{languageService.mo_must_number}}\n              </ion-label>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.ifsc_code_lang}}</ion-label>\n              <ion-input\n                name=\"IFSC\"\n                required\n                [ngModel]=\"bankDetails.IFSC\"\n                formControlName=\"IFSC\"\n              ></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('IFSC').hasError('required')\"\n                lines=\"none\" class=\"validation\">\n                <ion-label *ngIf=\"f('IFSC').hasError('required')\"  >\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n    \n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.account_holder_lang}}</ion-label>\n              <ion-input\n                name=\"State\"\n                required\n                [ngModel]=\"bankDetails.ACCOUNT_HOLDER_NAME\"\n                formControlName=\"ACCOUNT_HOLDER_NAME\"\n              ></ion-input>\n            </ion-item>\n            <ion-item class=\"validation\" *ngIf=\"submitted && f('ACCOUNT_HOLDER_NAME').hasError('required')\"\n                lines=\"none\">\n                <ion-label *ngIf=\"f('ACCOUNT_HOLDER_NAME').hasError('required')\"  class=\"validation\">\n                  {{languageService.cant_empty_for_lang}}\n                </ion-label>\n              </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.mobile_number_lang}}</ion-label>\n              <ion-input \n               formControlName=\"PHONE_NUMBER\"\n               maxlength=\"10\" \n               [ngModel]=\"bankDetails.PHONE_NUMBER\"\n               minlength=\"10\"\n               ></ion-input>\n            </ion-item>\n\n            <ion-item *ngIf=\"submitted && f('PHONE_NUMBER').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('PHONE_NUMBER').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item class=\"validation\" *ngIf=\"f('PHONE_NUMBER').hasError('pattern')\" \n          lines=\"none\">\n          <ion-label >\n            {{languageService.mo_must_number}}\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"submitted && f('PHONE_NUMBER').hasError('minlength')\"  \n        lines=\"none\">\n        <ion-label  *ngIf=\"form.get('PHONE_NUMBER').errors.minlength\"  style=\"color: red;\">\n          {{languageService.moValidation}}\n        </ion-label>\n      </ion-item>\n\n\n           \n        \n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button class=\"ion-margin-vertical\" type=\"submit\" class=\"btn-primary\" expand=\"block\">{{languageService.account_details_lang}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bank-details_bank-details_module_ts-es2015.js.map