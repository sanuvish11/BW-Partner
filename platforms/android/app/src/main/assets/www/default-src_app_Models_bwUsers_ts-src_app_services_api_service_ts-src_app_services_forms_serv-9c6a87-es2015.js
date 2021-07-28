(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["default-src_app_Models_bwUsers_ts-src_app_services_api_service_ts-src_app_services_forms_serv-9c6a87"],{

/***/ 22782:
/*!***********************************!*\
  !*** ./src/app/Models/bwUsers.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BwUsers": function() { return /* binding */ BwUsers; }
/* harmony export */ });
class BwUsers {
    constructor() {
        this._id = '';
        this.moNumber = '';
        this.adharNumber = '';
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.fatherName = '';
        this.address1 = '';
        this.address2 = '';
        this.address3 = '';
        this.area = null;
        this.city = '';
        this.date_of_birth = '';
        this.state = '';
        this.pincode = '';
        this.SKILLS = '';
        this.CORE_SKILLS = [];
        this.postal_area = '';
        this.WORK_EXPERIENCE = [];
        this.imagePath = [];
    }
}


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

/***/ 71155:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": function() { return /* binding */ LanguageService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 29790);




let LanguageService = class LanguageService {
    constructor(_translate, navCtrl) {
        this._translate = _translate;
        this.navCtrl = navCtrl;
        this.language = "hin";
    }
    _translateLanguage() {
        this._translate.use(this.language);
        this.skill_for_lang = this._translate.instant("formData.skills");
        this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
        this.workExpe_for_lang = this._translate.instant("formData.workExperience");
        this.moNumber_for_lang = this._translate.instant("formData.moNumber");
        this.otp_for_lang = this._translate.instant("formData.otp");
        this.otp_verify_for_lang = this._translate.instant("formData.otpVerify");
        this.resend_otp_for_lang = this._translate.instant("formData.resendOtp");
        this.perInform_for_lang = this._translate.instant("formData.personalInformation");
        this.enter_moNumber_for_lang = this._translate.instant("formData.enter_moNumber");
        this.andhar_for_lang = this._translate.instant("formData.enter_adhar");
        this.name_for_lang = this._translate.instant("formData.enter_name");
        this.middleName_for_lang = this._translate.instant("formData.enter_middleName");
        this.lastName_for_lang = this._translate.instant("formData.enter_lastNamer");
        this.dob_for_lang = this._translate.instant("formData.enter_dob");
        this.fatherName_for_lang = this._translate.instant("formData.enter_fatherName");
        this.address1_for_lang = this._translate.instant("formData.enter_address1");
        this.address2_for_lang = this._translate.instant("formData.enter_address2");
        this.address3_for_lang = this._translate.instant("formData.enter_address3");
        this.area_for_lang = this._translate.instant("formData.enter_area");
        this.city_for_lang = this._translate.instant("formData.enter_city");
        this.state_for_lang = this._translate.instant("formData.enter_state");
        this.pincode_for_lang = this._translate.instant("formData.enter_pinCode");
        this.uploadPhoto = this._translate.instant("formData.uploadPhoto");
        this.upload_photo_document = this._translate.instant("formData.uploadPhotoDocument");
        this.adhar_front = this._translate.instant("formData.adhar_Front");
        this.andhar_back = this._translate.instant("formData.adhar_Back");
        this.address_proof = this._translate.instant("formData.address_proof");
        this.cant_empty_for_lang = this._translate.instant("formData.cant_empty");
        this.moValidation = this._translate.instant("formData.moValidation");
        this.mo_must_number = this._translate.instant("formData.mo_only_number");
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController }
];
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], LanguageService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_Models_bwUsers_ts-src_app_services_api_service_ts-src_app_services_forms_serv-9c6a87-es2015.js.map