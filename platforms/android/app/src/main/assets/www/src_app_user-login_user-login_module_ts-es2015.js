(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_user-login_user-login_module_ts"],{

/***/ 30230:
/*!*********************************************************!*\
  !*** ./src/app/user-login/user-login-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginPageRoutingModule": function() { return /* binding */ UserLoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-login.page */ 92624);




const routes = [
    {
        path: '',
        component: _user_login_page__WEBPACK_IMPORTED_MODULE_0__.UserLoginPage
    }
];
let UserLoginPageRoutingModule = class UserLoginPageRoutingModule {
};
UserLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserLoginPageRoutingModule);



/***/ }),

/***/ 71720:
/*!*************************************************!*\
  !*** ./src/app/user-login/user-login.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginPageModule": function() { return /* binding */ UserLoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-login-routing.module */ 30230);
/* harmony import */ var _user_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-login.page */ 92624);








let UserLoginPageModule = class UserLoginPageModule {
};
UserLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _user_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserLoginPageRoutingModule
        ],
        declarations: [_user_login_page__WEBPACK_IMPORTED_MODULE_1__.UserLoginPage]
    })
], UserLoginPageModule);



/***/ }),

/***/ 92624:
/*!***********************************************!*\
  !*** ./src/app/user-login/user-login.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginPage": function() { return /* binding */ UserLoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-login.page.html */ 55460);
/* harmony import */ var _user_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-login.page.scss */ 73326);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);







let UserLoginPage = class UserLoginPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.typeOfJob = ["Manager",
            "Clerk",
            "Data Manager",
            "Doctor",
            "Software Developer"
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            MOBILE_NUMBER: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            PASSWORD: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            JOB_TYPE: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.form.value);
        this.apiService.subUserLogin(this.form.value)
            .subscribe((data) => {
            console.log(data);
            if (data.STATUS === 200) {
                this.router.navigate(['/home']);
            }
        }, (err => { console.log(err); }));
    }
};
UserLoginPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
UserLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-login',
        template: _raw_loader_user_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserLoginPage);



/***/ }),

/***/ 73326:
/*!*************************************************!*\
  !*** ./src/app/user-login/user-login.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 55460:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-login/user-login.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">MOBILE NUMBER</ion-label>\n              <ion-input\n                name=\"mobileNUmber\"\n                required\n                formControlName=\"MOBILE_NUMBER\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">PASSWORD</ion-label>\n              <ion-input\n                type=\"password\"\n                formControlName=\"PASSWORD\"\n                name=\"password\"\n                required\n              ></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">SELECT JOB TYPE</ion-label>\n              <select  formControlName=\"JOB_TYPE\" (change)=\"getJobValue()\"  name=\"jobType\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let job of typeOfJob\"  [ngValue]=\"job\">{{job}}</option>\n              </select>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\"\n          >\n            LOGIN\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user-login_user-login_module_ts-es2015.js.map