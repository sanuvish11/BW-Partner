(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["default-src_app_Models_bwUsers_ts-src_app_services_api_service_ts-src_app_services_forms_serv-9c6a87"], {
    /***/
    22782:
    /*!***********************************!*\
      !*** ./src/app/Models/bwUsers.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BwUsers": function BwUsers() {
          return (
            /* binding */
            _BwUsers
          );
        }
        /* harmony export */

      });

      var _BwUsers = function _BwUsers() {
        _classCallCheck(this, _BwUsers);

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
      };
      /***/

    },

    /***/
    5830:
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ApiService = /*#__PURE__*/function () {
        function ApiService(http, router) {
          _classCallCheck(this, ApiService);

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
              'Content-Type': 'application/json'
            })
          }; // baseUrl= 'http://localhost:3000/';

          this.baseUrl = 'https://bw-partner-server.herokuapp.com/';
        }

        _createClass(ApiService, [{
          key: "createUser",
          value: function createUser(email, password) {
            var authData = {
              email: email,
              password: password
            };
            this.http.post("http://localhost:3000/api/user/signup", authData, this.httpOptions).subscribe(function (response) {
              console.log(response);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this = this;

            var authData = {
              email: email,
              password: password
            };
            this.http.post("http://localhost:3000/api/user/login", authData).subscribe(function (response) {
              console.log(response);
              var token = response.token;
              _this.token = token;

              if (token) {
                var expiresInDuration = response.expiresIn;

                _this.setAuthTimer(expiresInDuration);

                _this.isAuthenticated = true;

                _this.authStatusListener.next(true);

                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);

                _this.saveAuthData(token, expirationDate);

                _this.router.navigate(["/admin-home"]);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "saveAuthData",
          value: function saveAuthData(token, expirationDate) {
            localStorage.setItem("token", token);
            localStorage.setItem("expiration", expirationDate.toISOString());
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token = null;
            this.isAuthenticated = false;
            this.authStatusListener.next(false);
            clearTimeout(this.tokenTimer);
            this.clearAuthData();
            this.router.navigate(['/auth']);
          }
        }, {
          key: "clearAuthData",
          value: function clearAuthData() {
            localStorage.removeItem("token");
            localStorage.removeItem("expiration");
          }
        }, {
          key: "setAuthTimer",
          value: function setAuthTimer(duration) {
            var _this2 = this;

            console.log("Setting timer: " + duration);
            this.tokenTimer = setTimeout(function () {
              _this2.logout();
            }, duration * 1000);
          } // http://text.radicaltechsupport.com/V2/http-api.php?senderidsenderid=XXXXXXXXXXXXXXXX&senderid=XXXXXX&number=XXXXXXXXXXX,XXXXXXXXXXX,XXXXXXXXXXX&message=hello there&format=json

        }, {
          key: "getOtp",
          value: function getOtp(number) {
            var _OTP = Math.floor(1000 + Math.random() * 9000);

            var message = "Dear Partner, use OTP " + _OTP + " to verify your mobile number - Bharat Worker";
            console.log(message);
            this.otp.next(_OTP);
            this.router.navigate(['/otp']); // const params = new HttpParams()
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
        }, {
          key: "saveSubUsers",
          value: function saveSubUsers(userData) {
            var _this3 = this;

            this.http.post(this.baseUrl + "api" + "/" + "subUsers" + "/" + "save", userData).subscribe(function (res) {
              console.log(res);

              if (res) {
                _this3.router.navigate(['/admin-user-reports']);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getAllSubUsers",
          value: function getAllSubUsers() {
            return this.http.get(this.baseUrl + "api" + "/" + "subUsers" + "/" + "get" + "/" + "all", this.httpOptions);
          }
        }, {
          key: "getSubUserById",
          value: function getSubUserById(id) {
            return this.http.get(this.baseUrl + "api" + "/" + "subUsers" + "/" + id, this.httpOptions);
          }
        }, {
          key: "updateSubUsers",
          value: function updateSubUsers(id, userData) {
            var _this4 = this;

            this.http.put(this.baseUrl + "api" + "/" + "subUsers" + "/" + "update" + "/" + id, userData, this.httpOptions).subscribe(function (res) {
              console.log(res);

              if (res) {
                _this4.router.navigate(['/admin-user-reports']);
              }
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "saveSkills",
          value: function saveSkills(skills) {
            return this.http.post(this.baseUrl + "api/" + "jobs/" + "save/" + "skill", skills, this.httpOptions);
          }
        }, {
          key: "saveCoreSkills",
          value: function saveCoreSkills(coreSkills) {
            return this.http.post(this.baseUrl + "api/" + "jobsWorkArea/" + "save/" + "coreSkills", coreSkills, this.httpOptions);
          }
        }, {
          key: "saveExpe",
          value: function saveExpe(expeData) {
            return this.http.post(this.baseUrl + "api/" + "skills/" + "save/" + "expe", expeData, this.httpOptions);
          }
        }, {
          key: "subUserLogin",
          value: function subUserLogin(userValue) {
            return this.http.post(this.baseUrl + "api/" + "subUsers/" + "user/login", userValue);
          }
        }, {
          key: "getOtpFromMoNumber",
          value: function getOtpFromMoNumber(mobileNo) {
            return this.http.get(this.baseUrl + "api/forms/getotp/" + mobileNo, this.httpOptions);
          }
        }, {
          key: "verifyOtp",
          value: function verifyOtp(verify_otp) {
            return this.http.post(this.baseUrl + "api/forms/verify_otp", verify_otp, this.httpOptions);
          }
        }, {
          key: "updateImagesById",
          value: function updateImagesById(id, photofile) {
            return this.http.post(this.baseUrl + "api/forms/imageupdate/" + id, photofile, this.httpOptions);
          }
        }, {
          key: "getBwUsersById",
          value: function getBwUsersById(id) {
            return this.http.get(this.baseUrl + "api/forms/getprofile/" + id, this.httpOptions);
          }
        }, {
          key: "getValuesFromPincode",
          value: function getValuesFromPincode(pincode) {
            return this.http.get(this.baseUrl + "api/allIndiaPostal/getAllIndiaPin/" + pincode, this.httpOptions);
          }
        }]);

        return ApiService;
      }();

      _ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _ApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _ApiService);
      /***/
    },

    /***/
    76311:
    /*!*******************************************!*\
      !*** ./src/app/services/forms.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormsService": function FormsService() {
          return (
            /* binding */
            _FormsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _FormsService = /*#__PURE__*/function () {
        function FormsService(http, router, _translate, navCtrl) {
          _classCallCheck(this, FormsService);

          this.http = http;
          this.router = router;
          this._translate = _translate;
          this.navCtrl = navCtrl;
          this.baseUrl = 'https://bw-partner-server.herokuapp.com/'; // baseUrl= 'http://localhost:3000/';

          this.language = "hin";
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(FormsService, [{
          key: "saveFormData",
          value: function saveFormData(formData) {
            var _this5 = this;

            this.http.post(this.baseUrl + 'api/forms/save', formData).subscribe(function (data) {
              console.log(data);

              if (data) {
                _this5.router.navigate(['/form-two']);
              }
            });
          }
        }, {
          key: "_translateLanguage",
          value: function _translateLanguage() {
            this._translate.use(this.language);

            this.skill_for_lang = this._translate.instant("formData.skills");
            this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
            this.workExpe_for_lang = this._translate.instant("formData.workExperience");
            this.moNumber_for_lang = this._translate.instant("formData.moNumber");
            this.otp_for_lang = this._translate.instant("formData.otp");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            return this.http.get(this.baseUrl + 'api/forms/get/all', this.httpOptions);
          }
        }, {
          key: "getAllJobs",
          value: function getAllJobs() {
            return this.http.get(this.baseUrl + 'api/jobs/get/all/jobs', this.httpOptions);
          }
        }, {
          key: "updateFormData",
          value: function updateFormData(id, formData) {
            return this.http.post(this.baseUrl + 'api/forms/update/' + id, formData, this.httpOptions);
          }
        }, {
          key: "getCoreSkillsById",
          value: function getCoreSkillsById(id) {
            return this.http.get(this.baseUrl + 'api/jobsWorkArea/' + id, this.httpOptions);
          }
        }, {
          key: "getAllCoreSkills",
          value: function getAllCoreSkills() {
            return this.http.get(this.baseUrl + 'api/jobsWorkArea/get/all/jobsWorkArea', this.httpOptions);
          }
        }, {
          key: "getSkillsById",
          value: function getSkillsById(id) {
            return this.http.get(this.baseUrl + 'api/skills/' + id, this.httpOptions);
          }
        }, {
          key: "saveImages",
          value: function saveImages(adharFront, adharBack, addressProof) {
            var formData = new FormData();
            formData.append('adharFront', adharFront);
            formData.append('adharBack', adharBack);
            formData.append('addressProof', addressProof);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
            this.http.post(this.baseUrl + 'api/forms', formData, {
              headers: headers
            }).subscribe(function (data) {
              console.log(data);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "updateFormDataImages",
          value: function updateFormDataImages(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
            return this.http.put(this.baseUrl + 'api/forms/update/' + id, data, {
              headers: headers
            });
          }
        }]);

        return FormsService;
      }();

      _FormsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }];
      };

      _FormsService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _FormsService);
      /***/
    },

    /***/
    71155:
    /*!**********************************************!*\
      !*** ./src/app/services/language.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguageService": function LanguageService() {
          return (
            /* binding */
            _LanguageService
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _LanguageService = /*#__PURE__*/function () {
        function LanguageService(_translate, navCtrl) {
          _classCallCheck(this, LanguageService);

          this._translate = _translate;
          this.navCtrl = navCtrl;
          this.language = "hin";
        }

        _createClass(LanguageService, [{
          key: "_translateLanguage",
          value: function _translateLanguage() {
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
        }]);

        return LanguageService;
      }();

      _LanguageService.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController
        }];
      };

      _LanguageService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
      })], _LanguageService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_Models_bwUsers_ts-src_app_services_api_service_ts-src_app_services_forms_serv-9c6a87-es5.js.map