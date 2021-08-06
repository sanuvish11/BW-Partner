(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_form-fourth_form-fourth_module_ts"], {
    /***/
    90092:
    /*!***********************************************************!*\
      !*** ./src/app/form-fourth/form-fourth-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormFourthPageRoutingModule": function FormFourthPageRoutingModule() {
          return (
            /* binding */
            _FormFourthPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _form_fourth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-fourth.page */
      30439);

      var routes = [{
        path: '',
        component: _form_fourth_page__WEBPACK_IMPORTED_MODULE_0__.FormFourthPage
      }];

      var _FormFourthPageRoutingModule = function FormFourthPageRoutingModule() {
        _classCallCheck(this, FormFourthPageRoutingModule);
      };

      _FormFourthPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FormFourthPageRoutingModule);
      /***/
    },

    /***/
    10275:
    /*!***************************************************!*\
      !*** ./src/app/form-fourth/form-fourth.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormFourthPageModule": function FormFourthPageModule() {
          return (
            /* binding */
            _FormFourthPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _form_fourth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-fourth-routing.module */
      90092);
      /* harmony import */


      var _form_fourth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-fourth.page */
      30439);

      var _FormFourthPageModule = function FormFourthPageModule() {
        _classCallCheck(this, FormFourthPageModule);
      };

      _FormFourthPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _form_fourth_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormFourthPageRoutingModule],
        declarations: [_form_fourth_page__WEBPACK_IMPORTED_MODULE_1__.FormFourthPage]
      })], _FormFourthPageModule);
      /***/
    },

    /***/
    30439:
    /*!*************************************************!*\
      !*** ./src/app/form-fourth/form-fourth.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormFourthPage": function FormFourthPage() {
          return (
            /* binding */
            _FormFourthPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_form_fourth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./form-fourth.page.html */
      60959);
      /* harmony import */


      var _form_fourth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-fourth.page.scss */
      76636);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/forms.service */
      76311);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/language.service */
      71155);
      /* harmony import */


      var _Models_bwUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Models/bwUsers */
      22782);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/api.service */
      5830);

      var _FormFourthPage = /*#__PURE__*/function () {
        function FormFourthPage(camera, formService, router, apiService, languageService) {
          _classCallCheck(this, FormFourthPage);

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
            agreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
          });
        }

        _createClass(FormFourthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languageService._translateLanguage();

            this.usersData._id = localStorage.getItem('userId');
            this.multipleImageUpload = [];
            this.getUserById(); // this.formService.getAllData().subscribe((data: any) => {
            //   this.formData = data;
            //   console.log(this.formData);
            //   this.formData.formData.forEach((data2: any) => {
            //     this.id = data2._id;
            //   });
            // });
          }
        }, {
          key: "getAdharForntPhoto",
          value: function getAdharForntPhoto() {
            var _this = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              var date = new Date().valueOf();
              var imageName = date + ".jpeg";
              _this.frontAdhar = 'data:image/jpeg;base64,' + imageData;

              var imageBlob = _this.dataURItoBlob(imageData);

              var file = new File([imageBlob], imageName, {
                type: "image/jpeg"
              });
              console.log(file);

              _this.form.patchValue({
                adharFront: file
              });

              _this.form.get("adharFront").updateValueAndValidity();

              console.log(_this.form.value.adharFront);
            }, function (err) {
              // Handle error
              console.log("Camera issue:" + err);
            }); // this.camera.getPicture(this.options).then((imageData) => {
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
        }, {
          key: "getCheckedValue",
          value: function getCheckedValue(value) {
            console.log(value);
            console.log(this.form.value);

            if (value.detail.checked === true) {
              this.showError = false;
              this.form.value.agreement = value.detail.value;
              console.log(this.form.value);
            } else {
              this.showError = true;
              this.form.value.agreement = null;
              console.log(this.form.value);
            }
          }
        }, {
          key: "getUserById",
          value: function getUserById() {
            var _this2 = this;

            this.apiService.getBwUsersById(this.usersData._id).subscribe(function (res) {
              console.log(res);
              _this2.usersData = res.data;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "getAdharBackPhoto",
          value: function getAdharBackPhoto() {
            var _this3 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              var date = new Date().valueOf();
              var imageName = date + ".jpeg";
              _this3.backAdhar = 'data:image/jpeg;base64,' + imageData;

              var imageBlob = _this3.dataURItoBlob(imageData);

              var file = new File([imageBlob], imageName, {
                type: "image/jpeg"
              });
              console.log(file);

              _this3.form.patchValue({
                adharBack: file
              });

              _this3.form.get("adharBack").updateValueAndValidity();

              console.log(_this3.form.value.adharBack);
            }, function (err) {
              // Handle error
              console.log("Camera issue:" + err);
            }); // this.camera.getPicture(this.options).then((imageData) => {
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
        }, {
          key: "getAddressProofPhoto",
          value: function getAddressProofPhoto() {
            var _this4 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              var date = new Date().valueOf();
              var imageName = date + ".jpeg";
              _this4.address = 'data:image/jpeg;base64,' + imageData;

              var imageBlob = _this4.dataURItoBlob(imageData);

              var file = new File([imageBlob], imageName, {
                type: "image/jpeg"
              });
              console.log(file);

              _this4.form.patchValue({
                addressProof: file
              });

              _this4.form.get("addressProof").updateValueAndValidity();

              console.log(_this4.form.value.addressProof);
            }, function (err) {
              // Handle error
              console.log("Camera issue:" + err);
            }); // this.camera.getPicture(this.options).then((imageData) => {
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
        }, {
          key: "f",
          value: function f(controls) {
            return this.form.get(controls);
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            var byteString = window.atob(dataURI);
            var arrayBuffer = new ArrayBuffer(byteString.length);
            var int8Array = new Uint8Array(arrayBuffer);

            for (var i = 0; i < byteString.length; i++) {
              int8Array[i] = byteString.charCodeAt(i);
            }

            var blob = new Blob([int8Array], {
              type: "image/jpeg"
            });
            console.log(blob);
            return blob;
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            console.log(this.usersData);
            this.multipleImageUpload = [];
            this.form.value.moNumber = localStorage.getItem('moNumber');
            this.form.value.adharNumber = this.usersData.adharNumber, this.form.value.firstName = this.usersData.firstName, this.form.value.middleName = this.usersData.middleName, this.form.value.lastName = this.usersData.lastName, this.form.value.date_of_birth = this.usersData.date_of_birth, this.form.value.fatherName = this.usersData.fatherName, this.form.value.address1 = this.usersData.address1;
            this.form.value.address2 = this.usersData.address2, this.form.value.address3 = this.usersData.address3, this.form.value.area = this.usersData.area, this.form.value.city = this.usersData.city, this.form.value.state = this.usersData.state, this.form.value.pincode = this.usersData.pincode;
            this.form.value.SKILLS = this.usersData.SKILLS;
            this.form.value.CORE_SKILLS = this.usersData.CORE_SKILLS;
            this.form.value.WORK_EXPERIENCE = this.usersData.WORK_EXPERIENCE;
            this.multipleImageUpload.push(this.form.value.adharFront);
            this.multipleImageUpload.push(this.form.value.adharBack);
            this.multipleImageUpload.push(this.form.value.addressProof);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            this.setFormValues();
            console.log(this.form.invalid);
            console.log(this.showError);
            console.log(this.form.value);
            this.submitted = true;

            if (this.form.invalid) {
              return;
            } else if (this.showError == true) {
              return;
            }

            console.log(this.multipleImageUpload);
            var formData = new FormData();

            var _iterator = _createForOfIteratorHelper(this.multipleImageUpload),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var img = _step.value;
                console.log('under array');
                formData.append("images", img);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            console.log(this.form.value);
            this.apiService.updateImagesById(localStorage.getItem('userId'), formData).subscribe(function (data) {
              console.log(data);

              if (data) {
                console.log('update imaegs workin');

                _this5.formService.updateFormData(localStorage.getItem('userId'), _this5.form.value).subscribe(function (data) {
                  if (data) {
                    _this5.multipleImageUpload = [];

                    _this5.router.navigate(["/dashboard"]);
                  }
                });
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return FormFourthPage;
      }();

      _FormFourthPage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera
        }, {
          type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
        }, {
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
        }];
      };

      _FormFourthPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-form-fourth",
        template: _raw_loader_form_fourth_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_form_fourth_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FormFourthPage);
      /***/
    },

    /***/
    76636:
    /*!***************************************************!*\
      !*** ./src/app/form-fourth/form-fourth.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".head_Col {\n  color: #3B63FF;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZm91cnRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0FBSzlEIiwiZmlsZSI6ImZvcm0tZm91cnRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkX0NvbCB7Y29sb3I6ICMzQjYzRkY7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luOiAyMHB4IDA7fSJdfQ== */";
      /***/
    },

    /***/
    60959:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-fourth/form-fourth.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{languageService.uploadPhoto}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"px-16 form-style\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <h5 class=\"head_Col\" >\n      {{languageService.upload_photo_document}}\n    </h5>\n    <ion-list class=\"uploadphoto\">\n      <ion-item lines=\"none\">\n        <ion-label class=\"lab_Weight\">{{languageService.adhar_front}}</ion-label>\n        <ion-button (click)=\"getAdharForntPhoto()\">फोटो लो</ion-button>\n      </ion-item>\n\n      <img class=\"ion-margin-start\" [src]=\"frontAdhar\" alt=\"\">\n      <ion-item *ngIf=\"submitted && f('adharFront').hasError('required')\"\n      lines=\"none\" class=\"validation\">\n      <ion-label *ngIf=\"f('adharFront').hasError('required')\"  class=\"validation\">\n        {{languageService.cant_empty_for_lang}}\n      </ion-label>\n    </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label class=\"lab_Weight\">{{languageService.andhar_back}}</ion-label>\n        <ion-button (click)=\"getAdharBackPhoto()\">\n          फोटो लो\n        </ion-button>\n      </ion-item>\n      <img class=\"ion-margin-start\" [src]=\"backAdhar\" alt=\"\">\n\n      <ion-item *ngIf=\"submitted && f('adharBack').hasError('required')\"\n      lines=\"none\" class=\"validation\">\n      <ion-label *ngIf=\"f('adharBack').hasError('required')\"  class=\"validation\">\n        {{languageService.cant_empty_for_lang}}\n      </ion-label>\n    </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label class=\"lab_Weight\">{{languageService.address_proof}}</ion-label>\n        <ion-button\n         (click)=\"getAddressProofPhoto()\">\n         फोटो लो\n        </ion-button>\n      </ion-item>\n      <img class=\"ion-margin-start\" [src]=\"address\" alt=\"\"> \n\n      <ion-item *ngIf=\"submitted && f('addressProof').hasError('required')\"\n      lines=\"none\" class=\"validation\">\n      <ion-label *ngIf=\"f('addressProof').hasError('required')\"  class=\"validation\">\n        {{languageService.cant_empty_for_lang}}\n      </ion-label>\n    </ion-item>\n    </ion-list>\n\n    <ion-item lines=\"none\" class=\"terms\">\n      <ion-checkbox  color=\"primary\" formControlName=\"agreement\"  value=\"accepted\"  (ionChange)=\"getCheckedValue($event)\"> </ion-checkbox> \n      <ion-label>जांच अवधि और शर्त</ion-label>\n    </ion-item>\n    \n    <ion-item *ngIf=\"submitted && f('agreement').hasError('required')\"\n    lines=\"none\" class=\"validation\">\n    <ion-label *ngIf=\"f('agreement').hasError('required')\"  class=\"validation\">\n      {{languageService.cant_empty_for_lang}}\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"showError\"\n  lines=\"none\" class=\"validation\">\n  <ion-label  class=\"validation\">\n    {{languageService.cant_empty_for_lang}}\n  </ion-label>\n</ion-item>\n\n    <ion-button \n    class=\"ion-margin-vertical\"\n    class=\"btn-primary\"\n    expand=\"block\" \n    type=\"submit\">\n      जमा करें\n    </ion-button>\n  </form>\n</div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_form-fourth_form-fourth_module_ts-es5.js.map