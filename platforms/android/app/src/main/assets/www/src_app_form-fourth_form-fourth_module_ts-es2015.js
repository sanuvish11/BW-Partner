(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_form-fourth_form-fourth_module_ts"],{

/***/ 90092:
/*!***********************************************************!*\
  !*** ./src/app/form-fourth/form-fourth-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFourthPageRoutingModule": function() { return /* binding */ FormFourthPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _form_fourth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-fourth.page */ 30439);




const routes = [
    {
        path: '',
        component: _form_fourth_page__WEBPACK_IMPORTED_MODULE_0__.FormFourthPage
    }
];
let FormFourthPageRoutingModule = class FormFourthPageRoutingModule {
};
FormFourthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormFourthPageRoutingModule);



/***/ }),

/***/ 10275:
/*!***************************************************!*\
  !*** ./src/app/form-fourth/form-fourth.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFourthPageModule": function() { return /* binding */ FormFourthPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _form_fourth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-fourth-routing.module */ 90092);
/* harmony import */ var _form_fourth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-fourth.page */ 30439);








let FormFourthPageModule = class FormFourthPageModule {
};
FormFourthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_fourth_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormFourthPageRoutingModule
        ],
        declarations: [_form_fourth_page__WEBPACK_IMPORTED_MODULE_1__.FormFourthPage]
    })
], FormFourthPageModule);



/***/ }),

/***/ 30439:
/*!*************************************************!*\
  !*** ./src/app/form-fourth/form-fourth.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFourthPage": function() { return /* binding */ FormFourthPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_form_fourth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-fourth.page.html */ 60959);
/* harmony import */ var _form_fourth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-fourth.page.scss */ 76636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/forms.service */ 76311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/language.service */ 71155);
/* harmony import */ var _Models_bwUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/bwUsers */ 22782);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ 5830);











let FormFourthPage = class FormFourthPage {
    constructor(camera, formService, router, apiService, languageService) {
        this.camera = camera;
        this.formService = formService;
        this.router = router;
        this.apiService = apiService;
        this.languageService = languageService;
        this.multipleImageUpload = [];
        this.formData = {};
        this.usersData = new _Models_bwUsers__WEBPACK_IMPORTED_MODULE_5__.BwUsers();
        this.submitted = false;
        this.SKILLS = [];
        this.mainSkills = [];
        this.showError = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            moNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            adharNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            address3: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            SKILLS: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(""),
            CORE_SKILLS: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]),
            WORK_EXPERIENCE: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]),
            adharFront: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            adharBack: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            addressProof: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            agreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
        });
    }
    ngOnInit() {
        this.languageService._translateLanguage();
        this.usersData._id = localStorage.getItem('userId');
        this.multipleImageUpload = [];
        this.getUserById();
        // this.formService.getAllData().subscribe((data: any) => {
        //   this.formData = data;
        //   console.log(this.formData);
        //   this.formData.formData.forEach((data2: any) => {
        //     this.id = data2._id;
        //   });
        // });
    }
    getAdharForntPhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            const date = new Date().valueOf();
            const imageName = date + ".jpeg";
            this.frontAdhar = 'data:image/jpeg;base64,' + imageData;
            const imageBlob = this.dataURItoBlob(imageData);
            const file = new File([imageBlob], imageName, {
                type: "image/jpeg",
            });
            console.log(file);
            this.form.patchValue({ adharFront: file });
            this.form.get("adharFront").updateValueAndValidity();
            console.log(this.form.value.adharFront);
        }, (err) => {
            // Handle error
            console.log("Camera issue:" + err);
        });
        // this.camera.getPicture(this.options).then((imageData) => {
        //   const date = new Date().valueOf();
        //   const imageName = date + ".jpeg";
        //   this.frontAdhar = "data:image/jpeg;base64," + imageData;
        //   // this.frontAdhar = base64Image;
        //   const imageBlob = this.dataURItoBlob(imageData);
        //   const file: File = new File([imageBlob], imageName, {
        //     type: "image/jpeg",
        //   });
        //   this.form.patchValue({ adharFront: file });
        //   this.form.get("adharFront").updateValueAndValidity();
        //   console.log(this.form.value.adharFront);
        // this.formService.saveImages(file);
        // });
    }
    getCheckedValue(value) {
        console.log(value);
        console.log(this.form.value);
        if (value.detail.checked === true) {
            this.showError = false;
            this.form.value.agreement = value.detail.value;
            console.log(this.form.value);
        }
        else {
            this.showError = true;
            this.form.value.agreement = null;
            console.log(this.form.value);
        }
    }
    getUserById() {
        this.apiService.getBwUsersById(this.usersData._id).subscribe((res) => {
            console.log(res);
            this.usersData = res.data;
        }, (err => console.log(err)));
    }
    getAdharBackPhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            const date = new Date().valueOf();
            const imageName = date + ".jpeg";
            this.backAdhar = 'data:image/jpeg;base64,' + imageData;
            const imageBlob = this.dataURItoBlob(imageData);
            const file = new File([imageBlob], imageName, {
                type: "image/jpeg",
            });
            console.log(file);
            this.form.patchValue({ adharBack: file });
            this.form.get("adharBack").updateValueAndValidity();
            console.log(this.form.value.adharBack);
        }, (err) => {
            // Handle error
            console.log("Camera issue:" + err);
        });
        // this.camera.getPicture(this.options).then((imageData) => {
        //   const date = new Date().valueOf();
        //   const imageName = date + ".jpeg";
        //   this.backAdhar = "data:image/jpeg;base64," + imageData;
        //   // this.backAdhar = base64Image;
        //   const imageBlob = this.dataURItoBlob(imageData);
        //   const file: File = new File([imageBlob], imageName, {
        //     type: "image/jpeg",
        //   });
        //   this.form.patchValue({ adharBack: file });
        //   this.form.get("adharBack").updateValueAndValidity();
        //   console.log(this.form.value.adharBack);
        //   // this.formService.saveImages(file);
        // });
    }
    getAddressProofPhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            const date = new Date().valueOf();
            const imageName = date + ".jpeg";
            this.address = 'data:image/jpeg;base64,' + imageData;
            const imageBlob = this.dataURItoBlob(imageData);
            const file = new File([imageBlob], imageName, {
                type: "image/jpeg",
            });
            console.log(file);
            this.form.patchValue({ addressProof: file });
            this.form.get("addressProof").updateValueAndValidity();
            console.log(this.form.value.addressProof);
        }, (err) => {
            // Handle error
            console.log("Camera issue:" + err);
        });
        // this.camera.getPicture(this.options).then((imageData) => {
        //   const date = new Date().valueOf();
        //   const imageName = date + ".jpeg";
        //   this.address = "data:image/jpeg;base64," + imageData;
        //   // this.address = base64Image
        //   const imageBlob = this.dataURItoBlob(imageData);
        //   const file: File = new File([imageBlob], imageName, {
        //     type: "image/jpeg",
        //   });
        //   this.form.patchValue({ addressProof: file });
        //   this.form.get("addressProof").updateValueAndValidity();
        //   console.log(this.form.value.addressProof);
        //   // this.formService.saveImages(file);
        // });
    }
    f(controls) {
        return this.form.get(controls);
    }
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: "image/jpeg" });
        console.log(blob);
        return blob;
    }
    setFormValues() {
        console.log(this.usersData);
        this.multipleImageUpload = [];
        this.form.value.moNumber = localStorage.getItem('moNumber');
        this.form.value.adharNumber = this.usersData.adharNumber,
            this.form.value.firstName = this.usersData.firstName,
            this.form.value.middleName = this.usersData.middleName,
            this.form.value.lastName = this.usersData.lastName,
            this.form.value.date_of_birth = this.usersData.date_of_birth,
            this.form.value.fatherName = this.usersData.fatherName,
            this.form.value.address1 = this.usersData.address1;
        this.form.value.address2 = this.usersData.address2,
            this.form.value.address3 = this.usersData.address3,
            this.form.value.area = this.usersData.area,
            this.form.value.city = this.usersData.city,
            this.form.value.state = this.usersData.state,
            this.form.value.pincode = this.usersData.pincode;
        this.form.value.SKILLS = this.usersData.SKILLS;
        this.form.value.CORE_SKILLS = this.usersData.CORE_SKILLS;
        this.form.value.WORK_EXPERIENCE = this.usersData.WORK_EXPERIENCE;
        this.multipleImageUpload.push(this.form.value.adharFront);
        this.multipleImageUpload.push(this.form.value.adharBack);
        this.multipleImageUpload.push(this.form.value.addressProof);
    }
    onSubmit() {
        this.setFormValues();
        console.log(this.form.invalid);
        console.log(this.showError);
        console.log(this.form.value);
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        else if (this.showError == true) {
            return;
        }
        console.log(this.multipleImageUpload);
        const formData = new FormData();
        for (let img of this.multipleImageUpload) {
            console.log('under array');
            formData.append("images", img);
        }
        this.apiService.updateImagesById(localStorage.getItem('userId'), formData).subscribe((data) => {
            console.log(data);
            if (data) {
                console.log('update imaegs workin');
                this.formService
                    .updateFormData(localStorage.getItem('userId'), this.form.value)
                    .subscribe((data) => {
                    if (data) {
                        console.log("update details working");
                        this.multipleImageUpload = [];
                        this.router.navigate(["/login"]);
                    }
                });
            }
        }, (err) => {
            console.log(err);
        });
    }
};
FormFourthPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService }
];
FormFourthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-form-fourth",
        template: _raw_loader_form_fourth_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_fourth_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormFourthPage);



/***/ }),

/***/ 76636:
/*!***************************************************!*\
  !*** ./src/app/form-fourth/form-fourth.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head_Col {\n  color: #3B63FF;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZm91cnRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0FBSzlEIiwiZmlsZSI6ImZvcm0tZm91cnRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkX0NvbCB7Y29sb3I6ICMzQjYzRkY7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luOiAyMHB4IDA7fSJdfQ== */");

/***/ }),

/***/ 60959:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-fourth/form-fourth.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{languageService.uploadPhoto}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"px-16 form-style\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <h5 class=\"head_Col\" >\n      {{languageService.upload_photo_document}}\n    </h5>\n    <ion-list class=\"uploadphoto\">\n      <ion-item lines=\"none\">\n        <ion-label class=\"lab_Weight\">{{languageService.adhar_front}}</ion-label>\n        <ion-button (click)=\"getAdharForntPhoto()\">फोटो लो</ion-button>\n      </ion-item>\n\n      <img class=\"ion-margin-start\" [src]=\"frontAdhar\" alt=\"\">\n      <ion-item *ngIf=\"submitted && f('adharFront').hasError('required')\"\n      lines=\"none\" class=\"validation\">\n      <ion-label *ngIf=\"f('adharFront').hasError('required')\"  class=\"validation\">\n        {{languageService.cant_empty_for_lang}}\n      </ion-label>\n    </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label class=\"lab_Weight\">{{languageService.andhar_back}}</ion-label>\n        <ion-button (click)=\"getAdharBackPhoto()\">\n          फोटो लो\n        </ion-button>\n      </ion-item>\n      <img class=\"ion-margin-start\" [src]=\"backAdhar\" alt=\"\">\n\n      <ion-item *ngIf=\"submitted && f('adharBack').hasError('required')\"\n      lines=\"none\" class=\"validation\">\n      <ion-label *ngIf=\"f('adharBack').hasError('required')\"  class=\"validation\">\n        {{languageService.cant_empty_for_lang}}\n      </ion-label>\n    </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label class=\"lab_Weight\">{{languageService.address_proof}}</ion-label>\n        <ion-button\n         (click)=\"getAddressProofPhoto()\">\n         फोटो लो\n        </ion-button>\n      </ion-item>\n      <img class=\"ion-margin-start\" [src]=\"address\" alt=\"\"> \n\n      <ion-item *ngIf=\"submitted && f('addressProof').hasError('required')\"\n      lines=\"none\" class=\"validation\">\n      <ion-label *ngIf=\"f('addressProof').hasError('required')\"  class=\"validation\">\n        {{languageService.cant_empty_for_lang}}\n      </ion-label>\n    </ion-item>\n    </ion-list>\n\n    <ion-item lines=\"none\" class=\"terms\">\n      <ion-checkbox  color=\"primary\" formControlName=\"agreement\"  value=\"accepted\"  (ionChange)=\"getCheckedValue($event)\"> </ion-checkbox> \n      <ion-label>जांच अवधि और शर्त</ion-label>\n    </ion-item>\n    \n    <ion-item *ngIf=\"submitted && f('agreement').hasError('required')\"\n    lines=\"none\" class=\"validation\">\n    <ion-label *ngIf=\"f('agreement').hasError('required')\"  class=\"validation\">\n      {{languageService.cant_empty_for_lang}}\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"showError\"\n  lines=\"none\" class=\"validation\">\n  <ion-label  class=\"validation\">\n    {{languageService.cant_empty_for_lang}}\n  </ion-label>\n</ion-item>\n\n    <ion-button \n    class=\"ion-margin-vertical\"\n    class=\"btn-primary\"\n    expand=\"block\" \n    type=\"submit\">\n      जमा करें\n    </ion-button>\n  </form>\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_form-fourth_form-fourth_module_ts-es2015.js.map