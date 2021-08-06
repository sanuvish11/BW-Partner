(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/language.service */ 71155);









let LoginPage = class LoginPage {
    constructor(router, camera, languageService, apiService) {
        this.router = router;
        this.camera = camera;
        this.languageService = languageService;
        this.apiService = apiService;
        this.submitted = false;
        this.showTextBox = false;
        this.showError = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"),
            ]),
            REFERAL_CODE: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("")
        });
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
    }
    ngOnInit() {
        this.languageService._translateLanguage();
        this.form.reset();
        localStorage.clear();
        this.showTextBox = false;
        this.submitted = false;
    }
    f(controls) {
        return this.form.get(controls);
    }
    getCheckedValue(checkValue) {
        if (checkValue.detail.checked == true) {
            this.showTextBox = true;
            console.log(this.showTextBox);
        }
        else {
            this.showTextBox = false;
            this.showError = false;
            console.log(this.showTextBox);
        }
    }
    // "bhF38QHK"
    // 2312312312
    getOtpOfUsers() {
        this.apiService.getOtpFromMoNumber(this.form.get("number").value).subscribe((res) => {
            console.log(res);
            if (res) {
                localStorage.setItem('otp', res.otp);
                this.form.reset();
                this.router.navigate(["/otp", res.status]);
            }
        }, (err) => {
            console.log(err);
        });
    }
    onSubmit() {
        this.submitted = true;
        localStorage.setItem("moNumber", this.form.get("number").value);
        console.log(this.form.invalid);
        if (this.form.invalid) {
            return;
        }
        // snks
        console.log(this.form.value.REFERAL_CODE);
        // this.form.value.REFERAL_CODE = "pvSJxrR8";
        console.log(this.showTextBox);
        if (this.showTextBox) {
            console.log('under if');
            this.apiService.verifyRefferalCode(this.form.value.REFERAL_CODE).subscribe((res) => {
                if (res.status === 200) {
                    localStorage.setItem('refferalCode', this.form.value.REFERAL_CODE);
                    this.getOtpOfUsers();
                }
                else {
                }
            }, (err => {
                console.log(err);
                if (err.status === 404) {
                    this.showError = true;
                    return;
                }
            }));
        }
        else {
            console.log('under else');
            this.getOtpOfUsers();
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tool {\n  --background: #eb445a;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtBQUNKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29se1xuICAgIC0tYmFja2dyb3VuZDogI2ViNDQ1YTtcbn1cblxuaW9uLWxpc3Qge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Login</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n<ion-content>\n  \n  <div class=\"login-container\">\n    <div class=\"logo\"><img src=\"./assets/images/logo.png\"/></div>\n    <div class=\"login-con\">\n    <h1>{{languageService.moNumber_for_lang}}</h1>\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <div class=\"mobileno\">\n              <ion-input name=\"number\" required formControlName=\"number\" maxlength=\"10\" minlength=\"10\" type=\"tel\" placeholder=\"Enter Mobile Number\"></ion-input>\n            </div>\n\n            <div class=\"error\" *ngIf=\"submitted && f('number').hasError('required')\"\n            lines=\"none\">\n            <ion-label *ngIf=\"f('number').hasError('required')\"  style=\"color: red;\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </div>\n\n        <div class=\"error\" *ngIf=\"submitted && f('number').hasError('minlength')\"  \n          lines=\"none\">\n          <ion-label  *ngIf=\"form.get('number').errors.minlength\"  style=\"color: red;\">\n            {{languageService.moValidation}}\n          </ion-label>\n        </div>\n\n        <div class=\"error\" *ngIf=\"f('number').hasError('pattern')\" \n          lines=\"none\">\n          <ion-label   style=\"color: red;\">\n            {{languageService.mo_must_number}}\n          </ion-label>\n        </div>\n\n\n        <ion-item lines=\"none\" class=\"terms\">\n          <ion-checkbox  color=\"primary\"  value=\"\"  (ionChange)=\"getCheckedValue($event)\"> </ion-checkbox> \n          <ion-label>Referal Code</ion-label>\n        </ion-item>\n\n\n        <div class=\"mobileno\" *ngIf=\"showTextBox\" >\n          <h1>Enter Referal code</h1>\n          <ion-input name=\"REFERAL_CODE\" formControlName=\"REFERAL_CODE\" placeholder=\"123456\"></ion-input>\n        </div>\n\n        <div class=\"error\" *ngIf=\"showError && onSubmit\" \n          lines=\"none\">\n          <ion-label   style=\"color: red;\">\n            Refferal code is not correct!\n          </ion-label>\n        </div>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button class=\"ion-margin-vertical\" type=\"submit\" expand=\"block\">{{languageService.otp_for_lang}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map