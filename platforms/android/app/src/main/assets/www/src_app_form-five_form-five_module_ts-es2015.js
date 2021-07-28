(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_form-five_form-five_module_ts"],{

/***/ 96044:
/*!*******************************************************!*\
  !*** ./src/app/form-five/form-five-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFivePageRoutingModule": function() { return /* binding */ FormFivePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _form_five_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-five.page */ 13789);




const routes = [
    {
        path: '',
        component: _form_five_page__WEBPACK_IMPORTED_MODULE_0__.FormFivePage
    }
];
let FormFivePageRoutingModule = class FormFivePageRoutingModule {
};
FormFivePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormFivePageRoutingModule);



/***/ }),

/***/ 22990:
/*!***********************************************!*\
  !*** ./src/app/form-five/form-five.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFivePageModule": function() { return /* binding */ FormFivePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _form_five_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-five-routing.module */ 96044);
/* harmony import */ var _form_five_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-five.page */ 13789);








let FormFivePageModule = class FormFivePageModule {
};
FormFivePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_five_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormFivePageRoutingModule
        ],
        declarations: [_form_five_page__WEBPACK_IMPORTED_MODULE_1__.FormFivePage]
    })
], FormFivePageModule);



/***/ }),

/***/ 13789:
/*!*********************************************!*\
  !*** ./src/app/form-five/form-five.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFivePage": function() { return /* binding */ FormFivePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_form_five_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-five.page.html */ 8250);
/* harmony import */ var _form_five_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-five.page.scss */ 71466);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/forms.service */ 76311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);






let FormFivePage = class FormFivePage {
    constructor(formService) {
        this.formService = formService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            agreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
        });
    }
    ngOnInit() {
        this.formService.getAllData()
            .subscribe((data) => {
            console.log(data);
            data.formData.forEach((data2) => {
                this.id = data2._id;
            });
        });
    }
    onSubmit() {
        console.log(this.form.value);
        this.formService.updateFormData(this.id, this.form.value)
            .subscribe((data) => {
            if (data) {
            }
        });
    }
    getCheckedValue(value) {
        console.log(value);
        this.form.value.agreement = value.detail.value;
    }
};
FormFivePage.ctorParameters = () => [
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService }
];
FormFivePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-five',
        template: _raw_loader_form_five_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_five_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormFivePage);



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

/***/ 71466:
/*!***********************************************!*\
  !*** ./src/app/form-five/form-five.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tool {\n  --background: #eb445a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZml2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6ImZvcm0tZml2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHtcbiAgICAtLWJhY2tncm91bmQ6ICNlYjQ0NWE7XG59Il19 */");

/***/ }),

/***/ 8250:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-five/form-five.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\" routerLink=\"/form-fourth\">Back</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-item lines=\"none\">\n      <ion-label>Check Term And Condition</ion-label>\n      <ion-checkbox  color=\"danger\" value=\"accepted\"  (ionChange)=\"getCheckedValue($event)\" [checked]=\"isChecked\"> </ion-checkbox>\n    </ion-item>\n\n    <ion-button  \n                class=\"ion-margin-vertical\"\n                type=\"submit\"\n                color=\"danger\"\n                expand=\"block\">Submit</ion-button>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_form-five_form-five_module_ts-es2015.js.map