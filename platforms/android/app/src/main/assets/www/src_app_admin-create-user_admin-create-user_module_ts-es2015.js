(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_admin-create-user_admin-create-user_module_ts"],{

/***/ 70410:
/*!***********************************************************************!*\
  !*** ./src/app/admin-create-user/admin-create-user-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCreateUserPageRoutingModule": function() { return /* binding */ AdminCreateUserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _admin_create_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-create-user.page */ 22634);




const routes = [
    {
        path: '',
        component: _admin_create_user_page__WEBPACK_IMPORTED_MODULE_0__.AdminCreateUserPage
    }
];
let AdminCreateUserPageRoutingModule = class AdminCreateUserPageRoutingModule {
};
AdminCreateUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminCreateUserPageRoutingModule);



/***/ }),

/***/ 95783:
/*!***************************************************************!*\
  !*** ./src/app/admin-create-user/admin-create-user.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCreateUserPageModule": function() { return /* binding */ AdminCreateUserPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _admin_create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-create-user-routing.module */ 70410);
/* harmony import */ var _admin_create_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-create-user.page */ 22634);








let AdminCreateUserPageModule = class AdminCreateUserPageModule {
};
AdminCreateUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminCreateUserPageRoutingModule
        ],
        declarations: [_admin_create_user_page__WEBPACK_IMPORTED_MODULE_1__.AdminCreateUserPage]
    })
], AdminCreateUserPageModule);



/***/ }),

/***/ 22634:
/*!*************************************************************!*\
  !*** ./src/app/admin-create-user/admin-create-user.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCreateUserPage": function() { return /* binding */ AdminCreateUserPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_admin_create_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./admin-create-user.page.html */ 43681);
/* harmony import */ var _admin_create_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-create-user.page.scss */ 94099);
/* harmony import */ var _Models_subUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Models/subUsers */ 37048);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








let AdminCreateUserPage = class AdminCreateUserPage {
    constructor(apiService, _Activatedroute) {
        this.apiService = apiService;
        this._Activatedroute = _Activatedroute;
        this.typeOfJob = ["Manager",
            "Clerk",
            "Data Manager",
            "Doctor",
            "Software Developer"
        ];
        this.mode = "create";
        this.id = '';
        this.userData = new _Models_subUsers__WEBPACK_IMPORTED_MODULE_2__.SubUsers();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            moNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
    }
    ngOnInit() {
        this.id = this._Activatedroute.snapshot.paramMap.get("id");
        this._Activatedroute.paramMap.subscribe((paramMap) => {
            if (paramMap.has("id")) {
                this.mode = "edit";
                this.id = paramMap.get("id");
                this.apiService.getSubUserById(this.id).subscribe((res) => {
                    console.log(res);
                    this.userData = res;
                }, (err) => {
                    console.log(err);
                });
            }
            else {
                this.mode = "create";
                this.id = null;
            }
        });
    }
    onSubmit() {
        console.log(this.form.value);
        if (this.mode === "create") {
            this.apiService.saveSubUsers(this.form.value);
        }
        else {
            this.apiService.updateSubUsers(this.id, this.form.value);
        }
        this.form.reset();
    }
    getJobValue() {
        console.log(this.form.value.jobType);
    }
    getRadioValue(radioValue) {
        console.log(radioValue);
    }
};
AdminCreateUserPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
AdminCreateUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-admin-create-user',
        template: _raw_loader_admin_create_user_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admin_create_user_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdminCreateUserPage);



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
        // baseUrl= 'http://localhost:3000/';
        this.baseUrl = 'https://bw-partner-server.herokuapp.com/';
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
        return this.http.post(this.baseUrl + "api/forms/verify_otp", verify_otp, this.httpOptions);
    }
    updateImagesById(id, photofile) {
        return this.http.post(this.baseUrl + "api/forms/imageupdate/" + id, photofile, this.httpOptions);
    }
    getBwUsersById(id) {
        return this.http.get(this.baseUrl + "api/forms/getprofile/" + id, this.httpOptions);
    }
    getValuesFromPincode(pincode) {
        return this.http.get(this.baseUrl + "api/allIndiaPostal/getAllIndiaPin/" + pincode, this.httpOptions);
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

/***/ 94099:
/*!***************************************************************!*\
  !*** ./src/app/admin-create-user/admin-create-user.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jcmVhdGUtdXNlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 43681:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-create-user/admin-create-user.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Add Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list >\n            <ion-item>\n              <ion-label position=\"floating\">Name</ion-label>\n              <ion-input\n                name=\"userName\"\n                required\n                [ngModel]=\"userData.userName\"\n                formControlName=\"userName\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Mobile Number</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                required\n                [ngModel]=\"userData.moNumber\"\n                formControlName=\"moNumber\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">email</ion-label>\n              <ion-input\n                name=\"email\"\n                required\n                [ngModel]=\"userData.email\"\n                formControlName=\"email\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">password</ion-label>\n              <ion-input\n                name=\"password\"\n                required\n                [ngModel]=\"userData.password\"\n                formControlName=\"password\"\n              ></ion-input>\n            </ion-item>\n\n\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Job Type</ion-label>\n              <select [ngModel]=\"userData.jobType\" (change)=\"getJobValue()\" formControlName=\"jobType\"  name=\"jobType\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let job of typeOfJob\"  [ngValue]=\"job\">{{job}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n              <!-- <ion-label>Job Status</ion-label> -->\n              <ion-list>\n                <ion-radio-group [ngModel]=\"userData.status\" value=\"Active\" formControlName=\"status\" (ionChange)=\"getRadioValue($event)\">\n                  <ion-list-header>\n                    <ion-label>Job Status</ion-label>\n                  </ion-list-header>\n              \n                  <ion-item>\n                    <ion-label>Active</ion-label>\n                    <ion-radio slot=\"start\" value=\"Active\"></ion-radio>\n                  </ion-item>\n              \n                  <ion-item>\n                    <ion-label>InActive</ion-label>\n                    <ion-radio slot=\"start\" value=\"inActive\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-list>\n            </ion-item>\n\n      \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button  \n         class=\"ion-margin-vertical\"\n         type=\"submit\"\n         color=\"danger\"\n         expand=\"block\">ADD USER</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button  \n         class=\"ion-margin-vertical\"\n         color=\"danger\"\n         expand=\"block\" routerLink=\"/admin-user-reports\">Check user list</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_admin-create-user_admin-create-user_module_ts-es2015.js.map