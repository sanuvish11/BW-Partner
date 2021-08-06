(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 71674)).then(m => m.AuthPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'otp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_otp_otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./otp/otp.module */ 71599)).then(m => m.OtpPageModule)
    },
    {
        path: 'otp/:status',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_otp_otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./otp/otp.module */ 71599)).then(m => m.OtpPageModule)
    },
    {
        path: 'form-one',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_form-one_form-one_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./form-one/form-one.module */ 39420)).then(m => m.FormOnePageModule)
    },
    {
        path: 'form-two',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_form-two_form-two_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./form-two/form-two.module */ 72624)).then(m => m.FormTwoPageModule)
    },
    {
        path: 'form-three',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_form-three_form-three_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./form-three/form-three.module */ 27603)).then(m => m.FormThreePageModule)
    },
    {
        path: 'form-fourth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_form-fourth_form-fourth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./form-fourth/form-fourth.module */ 10275)).then(m => m.FormFourthPageModule)
    },
    {
        path: 'form-five',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_form-five_form-five_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./form-five/form-five.module */ 22990)).then(m => m.FormFivePageModule)
    },
    {
        path: 'start',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_start_start_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./start/start.module */ 98030)).then(m => m.StartPageModule)
    },
    {
        path: 'admin-create-user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-create-user_admin-create-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-create-user/admin-create-user.module */ 95783)).then(m => m.AdminCreateUserPageModule)
    },
    {
        path: 'admin-create-user/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-create-user_admin-create-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-create-user/admin-create-user.module */ 95783)).then(m => m.AdminCreateUserPageModule)
    },
    {
        path: 'admin-set-skills',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-set-skills_admin-set-skills_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-set-skills/admin-set-skills.module */ 53375)).then(m => m.AdminSetSkillsPageModule)
    },
    {
        path: 'admin-user-reports',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-user-reports_admin-user-reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-user-reports/admin-user-reports.module */ 66049)).then(m => m.AdminUserReportsPageModule)
    },
    {
        path: 'user-login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user-login_user-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user-login/user-login.module */ 71720)).then(m => m.UserLoginPageModule)
    },
    {
        path: 'admin-home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin-home_admin-home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-home/admin-home.module */ 53591)).then(m => m.AdminHomePageModule)
    },
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splash/splash.module */ 89623)).then(m => m.SplashPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_notification_notification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 22154)).then(m => m.NotificationPageModule)
    },
    {
        path: 'message',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_message_message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./message/message.module */ 42770)).then(m => m.MessagePageModule)
    },
    {
        path: 'bank-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_bank-details_bank-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bank-details/bank-details.module */ 38767)).then(m => m.BankDetailsPageModule)
    },
    {
        path: 'bank-details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_bank-details_bank-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bank-details/bank-details.module */ 38767)).then(m => m.BankDetailsPageModule)
    },
    {
        path: 'family-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_family-details_family-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./family-details/family-details.module */ 92746)).then(m => m.FamilyDetailsPageModule)
    },
    {
        path: 'edit-skills',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-skills_edit-skills_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-skills/edit-skills.module */ 79289)).then(m => m.EditSkillsPageModule)
    },
    {
        path: 'edit-address',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-address_edit-address_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-address/edit-address.module */ 48990)).then(m => m.EditAddressPageModule)
    },
    {
        path: 'show-bank-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_show-bank-details_show-bank-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./show-bank-details/show-bank-details.module */ 93651)).then(m => m.ShowBankDetailsPageModule)
    },
    {
        path: 'wallet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_wallet_wallet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/wallet.module */ 49555)).then(m => m.WalletPageModule)
    },
    {
        path: 'show-family-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_show-familiy-details_show-familiy-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./show-familiy-details/show-familiy-details.module */ 60722)).then(m => m.ShowFamiliyDetailsPageModule)
    },
    {
        path: 'edit-family-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-family-details_edit-family-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-family-details/edit-family-details.module */ 25519)).then(m => m.EditFamilyDetailsPageModule)
    },
    {
        path: 'edit-family-details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-family-details_edit-family-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-family-details/edit-family-details.module */ 25519)).then(m => m.EditFamilyDetailsPageModule)
    },
    {
        path: 'user-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user-page_user-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-page/user-page.module */ 10168)).then(m => m.UserPagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/common.service */ 5620);










let AppComponent = class AppComponent {
    constructor(_platform, _translate, menu, socialSharing, platform, router, apiService, commonService) {
        this._platform = _platform;
        this._translate = _translate;
        this.menu = menu;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.router = router;
        this.apiService = apiService;
        this.commonService = commonService;
        this.title = 'socketio-angular';
        this.ref_code = localStorage.getItem('refferalCode');
        this._initTranslate();
        this.backButtonEvent();
    }
    openEnd() {
        this.menu.close();
    }
    share() {
        this.menu.close();
        var appUrl = 'https://play.google.com/store/apps/details?id=com.whatsapp';
        this.socialSharing.share('Install the app and add ' + this.ref_code + ' this refId to get the money', '', '', appUrl)
            .then(() => {
        });
    }
    backButtonEvent() {
        this.platform.backButton.subscribeWithPriority(50, () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.router.url === '/form-one') {
                navigator["app"].exitApp();
            }
            else if (this.router.url === '/dashboard') {
                navigator["app"].exitApp();
            }
            else if (this.routerOutlet && this.routerOutlet.canGoBack()) {
                this.routerOutlet.pop();
            }
        }));
    }
    _initTranslate() {
        // Set the default language for translation strings, and the current language.
        this._translate.setDefaultLang("hin");
        if (this._translate.getBrowserLang() !== undefined) {
            this._translate.use(this._translate.getBrowserLang());
        }
        else {
            this._translate.use("hin"); // Set your language here
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService }
];
AppComponent.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet, { static: false },] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": function() { return /* binding */ HttpLoaderFactory; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);













function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
                }
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);





let ApiService = class ApiService {
    // ahmadAccount = 'https://bw-app-server.herokuapp.com/';
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.otp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.senderid = 'BHWORK';
        this.apikey = '2FOIKXErhyfpHlYT';
        this._OTP = Math.floor(1000 + Math.random() * 9000);
        this.message = "Dear Partner, use OTP " + this._OTP + "to verify your mobile number - Bharat Worker";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        this.baseUrlForLocal = 'http://localhost:3001/';
        this.baseUrl = 'https://bw-app-server.herokuapp.com/';
    }
    createUser(email, password) {
        const authData = { email: email, password: password };
        this.http
            .post("http://localhost:3000/api/user/signup", authData, this.httpOptions)
            .subscribe(response => {
            console.log(response);
        }, (err) => {
            console.log(err);
        });
    }
    logOut() {
        localStorage.removeItem('userId');
        localStorage.removeItem('refferalCode');
        localStorage.removeItem('walletAmount');
        localStorage.removeItem('moNumber');
        this.router.navigate(['/login']);
    }
    login(email, password) {
        const authData = { email: email, password: password };
        this.http
            .post("http://localhost:3000/api/user/login", authData)
            .subscribe(response => {
            console.log(response);
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate);
                this.router.navigate(["/admin-home"]);
            }
        }, (err) => {
            console.log(err);
        });
    }
    saveAuthData(token, expirationDate) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/auth']);
    }
    clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    }
    setAuthTimer(duration) {
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    // http://text.radicaltechsupport.com/V2/http-api.php?senderidsenderid=XXXXXXXXXXXXXXXX&senderid=XXXXXX&number=XXXXXXXXXXX,XXXXXXXXXXX,XXXXXXXXXXX&message=hello there&format=json
    getOtp(number) {
        let _OTP = Math.floor(1000 + Math.random() * 9000);
        let message = "Dear Partner, use OTP " + _OTP + " to verify your mobile number - Bharat Worker";
        console.log(message);
        this.otp.next(_OTP);
        this.router.navigate(['/otp']);
        // const params = new HttpParams()
        // .set('apikey', this.apikey)
        // .set('senderid', this.senderid)
        // .set('number', number)
        // .set('message', message)
        // .set('format', "json");
        // console.log(params.toString());
        // this.http.get("http://text.radicaltechsupport.com/V2/http-api.php", {params}).subscribe((data: any) => {
        //   console.log(data);
        // },(err => {
        //   console.log(err);
        // }))
    }
    saveSubUsers(userData) {
        this.http.post(this.baseUrl + "api" + "/" + "subUsers" + "/" + "save", userData).subscribe((res) => {
            console.log(res);
            if (res) {
                this.router.navigate(['/admin-user-reports']);
            }
        }, (err => {
            console.log(err);
        }));
    }
    getAllSubUsers() {
        return this.http.get(this.baseUrl + "api" + "/" + "subUsers" + "/" + "get" + "/" + "all", this.httpOptions);
    }
    getSubUserById(id) {
        return this.http.get(this.baseUrl + "api" + "/" + "subUsers" + "/" + id, this.httpOptions);
    }
    updateSubUsers(id, userData) {
        this.http.put(this.baseUrl + "api" + "/" + "subUsers" + "/" + "update" + "/" + id, userData, this.httpOptions)
            .subscribe((res) => {
            console.log(res);
            if (res) {
                this.router.navigate(['/admin-user-reports']);
            }
        }, (err => console.log(err)));
    }
    saveSkills(skills) {
        return this.http.post(this.baseUrl + "api/" + "jobs/" + "save/" + "skill", skills, this.httpOptions);
    }
    saveCoreSkills(coreSkills) {
        return this.http.post(this.baseUrl + "api/" + "jobsWorkArea/" + "save/" + "coreSkills", coreSkills, this.httpOptions);
    }
    saveExpe(expeData) {
        return this.http.post(this.baseUrl + "api/" + "skills/" + "save/" + "expe", expeData, this.httpOptions);
    }
    subUserLogin(userValue) {
        return this.http.post(this.baseUrl + "api/" + "subUsers/" + "user/login", userValue);
    }
    getOtpFromMoNumber(mobileNo) {
        return this.http.get(this.baseUrl + "api/forms/getotp/" + mobileNo, this.httpOptions);
    }
    verifyOtp(verify_otp) {
        console.log(verify_otp);
        return this.http.post(this.baseUrl + "api/forms/verify_otp", verify_otp, this.httpOptions);
    }
    updateImagesById(id, photofile) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
        return this.http.post(this.baseUrl + "api/forms/imageupdate/" + id, photofile, { headers });
    }
    getBwUsersById(id) {
        return this.http.get(this.baseUrl + "api/forms/getprofile/" + id, this.httpOptions);
    }
    getValuesFromPincode(pincode) {
        return this.http.get(this.baseUrl + "api/allIndiaPostal/getAllIndiaPin/" + pincode, this.httpOptions);
    }
    getAllNotifications() {
        return this.http.get(this.baseUrl + "api/notification/getAll");
    }
    updateNotificationData(id, notiData) {
        return this.http.post(this.baseUrl + "api/notification/update/" + id, notiData);
    }
    saveBankDetails(bankDetails) {
        this.http.post(this.baseUrl + "api/bankDetails/save", bankDetails)
            .subscribe((res) => {
            console.log(res);
            if (res) {
                this.router.navigate(['/show-bank-details']);
            }
        }, (err => { console.log(err); }));
    }
    updateBankDetailsById(userId, formData) {
        this.http.post(this.baseUrl + "api/bankDetails/update/" + userId, formData)
            .subscribe((data => {
            console.log(data);
            if (data) {
                this.router.navigate(['/show-bank-details']);
            }
        }), (err => { console.log(err); }));
    }
    getBankDetailsById(userId) {
        return this.http.get(this.baseUrl + "api/bankDetails/" + userId);
    }
    saveFamilyDetails(userFamilyDetails) {
        this.http.post("https://bw-partner-server.herokuapp.com/api/familyDetail/save", userFamilyDetails)
            .subscribe((res) => {
            console.log(res);
            if (res) {
                this.router.navigate((['/show-family-details']));
            }
        }, (err => { console.log(err); }));
    }
    getFamilyDetailsById(userId) {
        return this.http.get(this.baseUrl + "api/familyDetail/" + userId);
    }
    verifyRefferalCode(refferalCode) {
        return this.http.get(this.baseUrl + "api/forms/reffral/" + refferalCode);
    }
    saveUserNotification(userData) {
        this.http.post(this.baseUrl + "api/userNotification/save", userData)
            .subscribe((res) => {
            console.log(res);
        }, (err => { console.log(err); }));
    }
    getUserNotiData() {
        return this.http.get(this.baseUrl + "api/userNotification/getAll");
    }
    updateUserNotiData(id, formData) {
        this.http.post(this.baseUrl + "api/userNotification/update/" + id, formData)
            .subscribe((res) => {
            console.log(res);
        }, (err => { console.log(err); }));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": function() { return /* binding */ CommonService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let CommonService = class CommonService {
    constructor() {
        this.familyList = [];
        this.bankList = [];
    }
    getFamilyData() {
        return this.familyList;
    }
    setFamilyData(data) {
        this.familyList = data;
    }
    getBankData() {
        return this.bankList;
    }
    setBankData(data) {
        this.bankList = data;
    }
};
CommonService.ctorParameters = () => [];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu menuId=\"main-menu\" content-id=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Bharat Worker</ion-title>\n          <!-- <div class=\"miline\"><img src=\"./assets/five-star-images/catalog/logo0.png\" id=\"mipics\"></div> -->\n          <!-- <div class=\"miline ion-margin-vertical ion-margin-horizontal\"><img src=\"./assets/five-star-images/catalog/logo0.png\"></div> -->\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n\n    <div class=\"manu_options\">\n      <ion-list lines=\"none\">\n        \n        <ion-item  class=\"ionitomc\" routerLink=\"/dashboard\" (click)=\"openEnd()\" >\n          <ion-icon name=\"home\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label  class=\"alllabel\">HOME</ion-label>\n        </ion-item>\n    \n        <ion-item routerLink=\"/wallet\" class=\"ionitomc\"  (click)=\"openEnd()\" >\n          <ion-icon name=\"cart\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\" >My Wallet</ion-label>\n        </ion-item>\n\n      \n\n        <ion-item class=\"ionitomc\" routerLink=\"/family-details\" (click)=\"openEnd()\">\n          <ion-icon name=\"log-in-sharp\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Add Family Details</ion-label>\n        </ion-item>\n\n        <ion-item class=\"ionitomc\" routerLink=\"/user-page\" (click)=\"openEnd()\">\n          <ion-icon name=\"log-in-sharp\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">User Page</ion-label>\n        </ion-item>\n\n        <ion-item class=\"ionitomc\" routerLink=\"/bank-details\" (click)=\"openEnd()\"  button >\n          <ion-icon name=\"log-in-sharp\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Add Bank Details</ion-label>\n        </ion-item>\n\n        <ion-item class=\"ionitomc\" routerLink=\"/show-family-details\" (click)=\"openEnd()\"  button >\n          <ion-icon name=\"log-in-sharp\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Show Family Details</ion-label>\n        </ion-item>\n\n        <ion-item class=\"ionitomc\"  button (click)=\"share()\" (click)=\"openEnd()\">\n          <ion-icon name=\"share-social-sharp\"  slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Invite</ion-label>\n        </ion-item>\n\n        <ion-item class=\"ionitomc\"  button routerLink=\"/edit-skills\"  (click)=\"openEnd()\">\n          <ion-icon name=\"share-social-sharp\"  slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Edit Skills</ion-label>\n        </ion-item>\n\n        <ion-item class=\"ionitomc\"  button routerLink=\"/show-bank-details\"  (click)=\"openEnd()\">\n          <ion-icon name=\"share-social-sharp\"  slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Show Bank Details</ion-label>\n        </ion-item>\n\n        <ion-item class=\"ionitomc\"  button routerLink=\"/edit-address\"  (click)=\"openEnd()\">\n          <ion-icon name=\"share-social-sharp\"  slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Edit Address</ion-label>\n        </ion-item>\n\n\n        <ion-item  (click)=\"openEnd()\"  class=\"ionitomc\" lines=\"none\" >\n          <ion-icon name=\"notifications\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Settings</ion-label>\n        </ion-item>  \n\n        <ion-item class=\"ionitomc\" button (click)=\"openEnd()\" (click)=\"apiService.logOut()\" >\n          <ion-icon name=\"document-text\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">Logout</ion-label>\n        </ion-item>\n        <!-- <ion-item class=\"ionitomc\">\n          <ion-icon name=\"share-social\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label class=\"alllabel\">SHARE APP</ion-label>\n        </ion-item> -->\n\n        <!-- <ion-item  class=\"ionitomc\" *ngIf=\"userIsAuthenticated\" button  (click)=\"apiService.logout()\" (click)=\"logout()\">\n          <ion-icon  name=\"power\" slot=\"start\" id=\"iicons\"></ion-icon>\n          <ion-label  class=\"alllabel\">LOGOUT</ion-label>\n        </ion-item> -->\n \n\n\n\n        \n \n\n      </ion-list>\n\n    </div>\n     \n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map