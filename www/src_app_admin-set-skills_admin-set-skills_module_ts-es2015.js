(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_admin-set-skills_admin-set-skills_module_ts"],{

/***/ 87255:
/*!*********************************************************************!*\
  !*** ./src/app/admin-set-skills/admin-set-skills-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSetSkillsPageRoutingModule": function() { return /* binding */ AdminSetSkillsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-set-skills.page */ 76727);




const routes = [
    {
        path: '',
        component: _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_0__.AdminSetSkillsPage
    }
];
let AdminSetSkillsPageRoutingModule = class AdminSetSkillsPageRoutingModule {
};
AdminSetSkillsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminSetSkillsPageRoutingModule);



/***/ }),

/***/ 53375:
/*!*************************************************************!*\
  !*** ./src/app/admin-set-skills/admin-set-skills.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSetSkillsPageModule": function() { return /* binding */ AdminSetSkillsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _admin_set_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-set-skills-routing.module */ 87255);
/* harmony import */ var _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-set-skills.page */ 76727);








let AdminSetSkillsPageModule = class AdminSetSkillsPageModule {
};
AdminSetSkillsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_set_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminSetSkillsPageRoutingModule
        ],
        declarations: [_admin_set_skills_page__WEBPACK_IMPORTED_MODULE_1__.AdminSetSkillsPage]
    })
], AdminSetSkillsPageModule);



/***/ }),

/***/ 76727:
/*!***********************************************************!*\
  !*** ./src/app/admin-set-skills/admin-set-skills.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSetSkillsPage": function() { return /* binding */ AdminSetSkillsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_admin_set_skills_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./admin-set-skills.page.html */ 48968);
/* harmony import */ var _admin_set_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-set-skills.page.scss */ 58559);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/forms.service */ 76311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);







let AdminSetSkillsPage = class AdminSetSkillsPage {
    constructor(formService, apiService) {
        this.formService = formService;
        this.apiService = apiService;
        this.allSkills = [];
        this.allCoreSkills = [];
        this.areaOfWork = [];
        this.skillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            JOB_NAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            STATUS: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("1")
        });
        this.coreSkillsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            JOB_UID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            STATUS: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("1"),
            WORK_AREA: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
        this.workExpeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            skillID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            CORE_SKILL_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            STATUS: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('1'),
            WORK_EXPE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
    }
    ngOnInit() {
        this.getAllSkillsData();
        // this.getAllCoreSkills();
    }
    getAllSkillsData() {
        this.allSkills = [];
        this.formService.getAllJobs().subscribe((data) => {
            console.log(data);
            data.formData.forEach((res) => {
                this.allSkills.push(res);
            });
            console.log(this.allSkills);
        });
    }
    // getAllCoreSkills(){
    //   this.formService.getAllCoreSkills().subscribe((data: any) => {
    //     console.log(data);
    //     this.allCoreSkills = [];
    //     data.formData.forEach((res: any) => {
    //       this.allCoreSkills.push(res);
    //     });
    //     console.log(this.allCoreSkills);
    //   },(err => console.log(err)));
    // }
    getSkillsValue() {
        console.log(this.workExpeForm.value.skillID);
        this.getCoreSkillsData(this.workExpeForm.value.skillID);
    }
    getCoreSkillsData(jobId) {
        this.formService.getCoreSkillsById(jobId).subscribe((res) => {
            console.log(res);
            this.allCoreSkills = [];
            this.allCoreSkills = res;
        }, (err) => {
            console.log(err);
        });
    }
    setSkills() {
        this.apiService.saveSkills(this.skillForm.value).subscribe((res) => {
            if (res) {
                this.getAllSkillsData();
            }
        });
        this.skillForm.reset();
    }
    setCoreSkills() {
        this.apiService.saveCoreSkills(this.coreSkillsForm.value).subscribe((res) => {
            console.log(res);
        }, (err => console.log(err)));
        this.coreSkillsForm.reset();
    }
    setWorkExpe() {
        this.apiService.saveExpe(this.workExpeForm.value).subscribe((res) => {
            console.log(res);
        }, (err => console.log(err)));
        this.workExpeForm.reset();
    }
};
AdminSetSkillsPage.ctorParameters = () => [
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
AdminSetSkillsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin-set-skills',
        template: _raw_loader_admin_set_skills_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admin_set_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdminSetSkillsPage);



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

/***/ 76311:
/*!*******************************************!*\
  !*** ./src/app/services/forms.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsService": function() { return /* binding */ FormsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 29790);






let FormsService = class FormsService {
    constructor(http, router, _translate, navCtrl) {
        this.http = http;
        this.router = router;
        this._translate = _translate;
        this.navCtrl = navCtrl;
        this.baseUrl = 'https://bw-partner-server.herokuapp.com/';
        // baseUrl= 'http://localhost:3000/';
        this.language = "hin";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }
    saveFormData(formData) {
        this.http.post(this.baseUrl + 'api/forms/save', formData)
            .subscribe((data) => {
            console.log(data);
            if (data) {
                this.router.navigate(['/form-two']);
            }
        });
    }
    _translateLanguage() {
        this._translate.use(this.language);
        this.skill_for_lang = this._translate.instant("formData.skills");
        this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
        this.workExpe_for_lang = this._translate.instant("formData.workExperience");
        this.moNumber_for_lang = this._translate.instant("formData.moNumber");
        this.otp_for_lang = this._translate.instant("formData.otp");
    }
    getAllData() {
        return this.http.get(this.baseUrl + 'api/forms/get/all', this.httpOptions);
    }
    getAllJobs() {
        return this.http.get(this.baseUrl + 'api/jobs/get/all/jobs', this.httpOptions);
    }
    updateFormData(id, formData) {
        return this.http.post(this.baseUrl + 'api/forms/update/' + id, formData, this.httpOptions);
    }
    getCoreSkillsById(id) {
        return this.http.get(this.baseUrl + 'api/jobsWorkArea/' + id, this.httpOptions);
    }
    getAllCoreSkills() {
        return this.http.get(this.baseUrl + 'api/jobsWorkArea/get/all/jobsWorkArea', this.httpOptions);
    }
    getSkillsById(id) {
        return this.http.get(this.baseUrl + 'api/skills/' + id, this.httpOptions);
    }
    saveImages(adharFront, adharBack, addressProof) {
        const formData = new FormData();
        formData.append('adharFront', adharFront);
        formData.append('adharBack', adharBack);
        formData.append('addressProof', addressProof);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
        this.http.post(this.baseUrl + 'api/forms', formData, { headers }).subscribe((data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
        });
    }
    updateFormDataImages(id, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
        return this.http.put(this.baseUrl + 'api/forms/update/' + id, data, { headers });
    }
};
FormsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
FormsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], FormsService);



/***/ }),

/***/ 58559:
/*!*************************************************************!*\
  !*** ./src/app/admin-set-skills/admin-set-skills.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1zZXQtc2tpbGxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 48968:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-set-skills/admin-set-skills.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Add New Skills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <form [formGroup]=\"skillForm\"  (ngSubmit)=\"setSkills()\">\n              <h2>Set Skills</h2>\n            <ion-item>\n              <ion-label position=\"floating\">Skills</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                required\n                placeholder=\"PLUMBER\"\n                formControlName=\"JOB_NAME\"\n              ></ion-input>\n            </ion-item>\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Skill\n            </ion-button>\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              CHECK SKILLS\n            </ion-button>\n          </form>\n\n          <form [formGroup]=\"coreSkillsForm\"  (ngSubmit)=\"setCoreSkills()\">\n            <h2>Set Core Skills</h2>\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select your skills</ion-label>\n              <select formControlName=\"JOB_UID\"  name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allSkills\"  [ngValue]=\"skills._id\">{{skills.JOB_NAME}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Core Skill</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                placeholder=\"Home work\"\n                formControlName=\"WORK_AREA\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Core Skills\n            </ion-button>\n          </form>\n\n          <form [formGroup]=\"workExpeForm\"  (ngSubmit)=\"setWorkExpe()\">\n           <h2>Set Work Experience</h2>\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select skills</ion-label>\n              <select  (change)=\"getSkillsValue($event)\" formControlName=\"skillID\" name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allSkills\"  [ngValue]=\"skills._id\">{{skills.JOB_NAME}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select Core Skill</ion-label>\n              <select  formControlName=\"CORE_SKILL_ID\"  name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allCoreSkills\"  [ngValue]=\"skills._id\">{{skills.WORK_AREA}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Work Experience</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                placeholder=\"Home work\"\n                formControlName=\"WORK_EXPE\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Work Experience\n            </ion-button>\n          </form>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button  \n         class=\"ion-margin-vertical\"\n         type=\"submit\"\n         color=\"danger\"\n        \n         expand=\"block\" routerLink=\"/form-three\">Next</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_admin-set-skills_admin-set-skills_module_ts-es2015.js.map