(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_admin-user-reports_admin-user-reports_module_ts"],{

/***/ 13680:
/*!*************************************************************************!*\
  !*** ./src/app/admin-user-reports/admin-user-reports-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserReportsPageRoutingModule": function() { return /* binding */ AdminUserReportsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _admin_user_reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user-reports.page */ 63556);




const routes = [
    {
        path: '',
        component: _admin_user_reports_page__WEBPACK_IMPORTED_MODULE_0__.AdminUserReportsPage
    }
];
let AdminUserReportsPageRoutingModule = class AdminUserReportsPageRoutingModule {
};
AdminUserReportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminUserReportsPageRoutingModule);



/***/ }),

/***/ 66049:
/*!*****************************************************************!*\
  !*** ./src/app/admin-user-reports/admin-user-reports.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserReportsPageModule": function() { return /* binding */ AdminUserReportsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _admin_user_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user-reports-routing.module */ 13680);
/* harmony import */ var _admin_user_reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-user-reports.page */ 63556);







let AdminUserReportsPageModule = class AdminUserReportsPageModule {
};
AdminUserReportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_user_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUserReportsPageRoutingModule
        ],
        declarations: [_admin_user_reports_page__WEBPACK_IMPORTED_MODULE_1__.AdminUserReportsPage]
    })
], AdminUserReportsPageModule);



/***/ }),

/***/ 63556:
/*!***************************************************************!*\
  !*** ./src/app/admin-user-reports/admin-user-reports.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserReportsPage": function() { return /* binding */ AdminUserReportsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_admin_user_reports_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./admin-user-reports.page.html */ 76194);
/* harmony import */ var _admin_user_reports_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-user-reports.page.scss */ 53185);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Models_subUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Models/subUsers */ 37048);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);







let AdminUserReportsPage = class AdminUserReportsPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.subUserData = new _Models_subUsers__WEBPACK_IMPORTED_MODULE_2__.SubUsers();
    }
    ngOnInit() {
        this.apiService.getAllSubUsers().subscribe((res) => {
            this.subUserData = res;
            console.log(this.subUserData);
        });
    }
};
AdminUserReportsPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AdminUserReportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin-user-reports',
        template: _raw_loader_admin_user_reports_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admin_user_reports_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdminUserReportsPage);



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

/***/ 53185:
/*!*****************************************************************!*\
  !*** ./src/app/admin-user-reports/admin-user-reports.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLXJlcG9ydHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 76194:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user-reports/admin-user-reports.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Users Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"margin-top: 12%;\">\n    <ion-row >\n      <ion-col >\n        Name\n      </ion-col>\n      \n      <ion-col >\n         Number\n      </ion-col>\n\n      <ion-col>\n        status\n      </ion-col>\n      <ion-col>\n        Job type\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let data of subUserData.formData\">\n      <ion-col>\n        {{data.userName}}\n      </ion-col>\n      <ion-col>\n        {{data.moNumber}}\n      </ion-col>\n      <ion-col>\n        {{data.status}}\n      </ion-col>\n      <ion-col>\n        {{data.jobType}}\n      </ion-col>\n      <ion-col>\n        <ion-button  \n        color=\"danger\" [routerLink]=\"['/admin-create-user', data._id]\">Edit Users</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n       <ion-button  \n       class=\"ion-margin-vertical\"\n       type=\"submit\"\n       color=\"danger\"\n      \n       expand=\"block\" >Edit Users</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>     \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_admin-user-reports_admin-user-reports_module_ts-es2015.js.map