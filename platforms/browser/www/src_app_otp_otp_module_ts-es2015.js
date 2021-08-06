(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_otp_otp_module_ts"],{

/***/ 77227:
/*!*******************************************!*\
  !*** ./src/app/otp/otp-routing.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPageRoutingModule": function() { return /* binding */ OtpPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.page */ 36076);




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_0__.OtpPage
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpPageRoutingModule);



/***/ }),

/***/ 71599:
/*!***********************************!*\
  !*** ./src/app/otp/otp.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPageModule": function() { return /* binding */ OtpPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-routing.module */ 77227);
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.page */ 36076);








let OtpPageModule = class OtpPageModule {
};
OtpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpPageRoutingModule
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_1__.OtpPage]
    })
], OtpPageModule);



/***/ }),

/***/ 36076:
/*!*********************************!*\
  !*** ./src/app/otp/otp.page.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPage": function() { return /* binding */ OtpPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./otp.page.html */ 49062);
/* harmony import */ var _otp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.page.scss */ 27562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/forms.service */ 76311);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/language.service */ 71155);










let OtpPage = class OtpPage {
    constructor(router, apiService, languageService, formService, alertController, route, loadingController) {
        this.router = router;
        this.apiService = apiService;
        this.languageService = languageService;
        this.formService = formService;
        this.alertController = alertController;
        this.route = route;
        this.loadingController = loadingController;
        this.submitted = false;
        this.showError = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"),
            ]),
        });
    }
    getLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait for the otp...',
                duration: 3000
            });
            yield loading.present();
        });
    }
    ngOnInit() {
        this.languageService._translateLanguage();
        this.moNumber = localStorage.getItem('moNumber');
        this.refferal_code = localStorage.getItem('refferalCode');
        console.log(this.moNumber);
        setTimeout(() => {
            this.getLoader();
            this.otpValue = localStorage.getItem('otp');
            this.form.value.otp = this.otpValue;
        }, 50);
    }
    ionViewWillEnter() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("status")) {
                this.status = paramMap.get("status");
            }
        });
    }
    f(controls) {
        return this.form.get(controls);
    }
    otpResenet() {
        this.apiService.getOtpFromMoNumber(localStorage.getItem("moNumber"))
            .subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        this.form.reset();
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: 'ओटीपी मेल नहीं खाता, कृपया पुनः प्रयास करें!',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: 'नंबर पहले से रजिस्टर है',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.get("otp").value);
        console.log(localStorage.getItem('refferalCode'));
        this.apiService.verifyOtp({
            "mobileNo": this.moNumber,
            "otp": this.form.get('otp').value,
            referral_code: localStorage.getItem('refferalCode')
        }).subscribe((res) => {
            console.log(res);
            localStorage.setItem('refferalCode', res.data.referral_code);
            localStorage.setItem('walletAmount', res.data.wallet_amount);
            localStorage.setItem('userId', res.data._id);
            if (this.status === "201") {
                this.router.navigate(["/dashboard"]);
            }
            else {
                this.router.navigate(["/form-one"]);
            }
        }, (err) => {
            console.log(err);
            if (err.status === 404) {
                this.presentAlert();
            }
        });
    }
};
OtpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService },
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_3__.FormsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
OtpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-otp",
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtpPage);

// 7897987987


/***/ }),

/***/ 27562:
/*!***********************************!*\
  !*** ./src/app/otp/otp.page.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tool {\n  --background: #eb445a;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n\n.codeResend {\n  --inner-padding-end:0px;\n  --padding-start:0px;\n}\n\n.codeResend label {\n  font-size: 14px;\n  color: #ff0000;\n}\n\n.codeResend button {\n  background: transparent;\n  color: #3B63FF;\n  font-weight: 600;\n}\n\n.login-container ion-button {\n  margin-top: 0px;\n}\n\n.validation {\n  color: red;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUFPLGVBQUE7RUFBZ0IsY0FBQTtBQUkzQjs7QUFISTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBS1I7O0FBQUk7RUFBWSxlQUFBO0FBSWhCOztBQURBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFJSiIsImZpbGUiOiJvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWI0NDVhO1xufVxuXG5pb24tbGlzdCB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvZGVSZXNlbmQge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDowcHg7XG4gICAgbGFiZWwge2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogI2ZmMDAwMDt9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjM0I2M0ZGO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgaW9uLWJ1dHRvbiB7bWFyZ2luLXRvcDogMHB4O31cbn1cblxuLnZhbGlkYXRpb257XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ 49062:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"login-container\">\n    <div class=\"logo\"><img src=\"./assets/images/logo.png\"/></div>\n    <div class=\"login-con\">\n      <h1>{{languageService.otp_for_lang}}</h1>\n\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <div class=\"mobileno\">\n              <ion-input name=\"otp\"  [value]=\"otpValue\" required formControlName=\"otp\" placeholder=\"OTP\"></ion-input>\n            </div>\n\n            <ion-item lines=\"none\" class=\"codeResend\">\n              <button ion-button (click)=\"otpResenet()\" slot=\"end\">{{languageService.resend_otp_for_lang}}</button>\n            </ion-item>\n\n            <div  *ngIf=\"submitted && f('otp').hasError('required')\"\n            lines=\"none\">\n            <ion-label *ngIf=\"f('otp').hasError('required')\" class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </div>\n\n          <div class=\"error\" *ngIf=\"f('otp').hasError('pattern')\" \n          lines=\"none\">\n          <ion-label   class=\"validation\">\n            {{languageService.mo_must_number}}\n          </ion-label>\n        </div>\n\n          <div *ngIf=\"submitted && showError\"\n          lines=\"none\">\n          <ion-label class=\"validation\">\n            password do not match!\n          </ion-label>\n        </div>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button class=\"ion-margin-vertical\" type=\"submit\" expand=\"block\">{{languageService.otp_verify_for_lang}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_otp_otp_module_ts-es2015.js.map