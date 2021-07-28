(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_admin-set-skills_admin-set-skills_module_ts"], {
    /***/
    87255:
    /*!*********************************************************************!*\
      !*** ./src/app/admin-set-skills/admin-set-skills-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminSetSkillsPageRoutingModule": function AdminSetSkillsPageRoutingModule() {
          return (
            /* binding */
            _AdminSetSkillsPageRoutingModule
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


      var _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-set-skills.page */
      76727);

      var routes = [{
        path: '',
        component: _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_0__.AdminSetSkillsPage
      }];

      var _AdminSetSkillsPageRoutingModule = function AdminSetSkillsPageRoutingModule() {
        _classCallCheck(this, AdminSetSkillsPageRoutingModule);
      };

      _AdminSetSkillsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AdminSetSkillsPageRoutingModule);
      /***/
    },

    /***/
    53375:
    /*!*************************************************************!*\
      !*** ./src/app/admin-set-skills/admin-set-skills.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminSetSkillsPageModule": function AdminSetSkillsPageModule() {
          return (
            /* binding */
            _AdminSetSkillsPageModule
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


      var _admin_set_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-set-skills-routing.module */
      87255);
      /* harmony import */


      var _admin_set_skills_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-set-skills.page */
      76727);

      var _AdminSetSkillsPageModule = function AdminSetSkillsPageModule() {
        _classCallCheck(this, AdminSetSkillsPageModule);
      };

      _AdminSetSkillsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _admin_set_skills_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminSetSkillsPageRoutingModule],
        declarations: [_admin_set_skills_page__WEBPACK_IMPORTED_MODULE_1__.AdminSetSkillsPage]
      })], _AdminSetSkillsPageModule);
      /***/
    },

    /***/
    76727:
    /*!***********************************************************!*\
      !*** ./src/app/admin-set-skills/admin-set-skills.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminSetSkillsPage": function AdminSetSkillsPage() {
          return (
            /* binding */
            _AdminSetSkillsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_admin_set_skills_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./admin-set-skills.page.html */
      48968);
      /* harmony import */


      var _admin_set_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-set-skills.page.scss */
      58559);
      /* harmony import */


      var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/forms.service */
      76311);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api.service */
      5830);

      var _AdminSetSkillsPage = /*#__PURE__*/function () {
        function AdminSetSkillsPage(formService, apiService) {
          _classCallCheck(this, AdminSetSkillsPage);

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
            WORK_AREA: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
          });
          this.workExpeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            skillID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            CORE_SKILL_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            STATUS: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('1'),
            WORK_EXPE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
          });
        }

        _createClass(AdminSetSkillsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllSkillsData(); // this.getAllCoreSkills();
          }
        }, {
          key: "getAllSkillsData",
          value: function getAllSkillsData() {
            var _this = this;

            this.allSkills = [];
            this.formService.getAllJobs().subscribe(function (data) {
              console.log(data);
              data.formData.forEach(function (res) {
                _this.allSkills.push(res);
              });
              console.log(_this.allSkills);
            });
          } // getAllCoreSkills(){
          //   this.formService.getAllCoreSkills().subscribe((data: any) => {
          //     console.log(data);
          //     this.allCoreSkills = [];
          //     data.formData.forEach((res: any) => {
          //       this.allCoreSkills.push(res);
          //     });
          //     console.log(this.allCoreSkills);
          //   },(err => console.log(err)));
          // }

        }, {
          key: "getSkillsValue",
          value: function getSkillsValue() {
            console.log(this.workExpeForm.value.skillID);
            this.getCoreSkillsData(this.workExpeForm.value.skillID);
          }
        }, {
          key: "getCoreSkillsData",
          value: function getCoreSkillsData(jobId) {
            var _this2 = this;

            this.formService.getCoreSkillsById(jobId).subscribe(function (res) {
              console.log(res);
              _this2.allCoreSkills = [];
              _this2.allCoreSkills = res;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "setSkills",
          value: function setSkills() {
            var _this3 = this;

            this.apiService.saveSkills(this.skillForm.value).subscribe(function (res) {
              if (res) {
                _this3.getAllSkillsData();
              }
            });
            this.skillForm.reset();
          }
        }, {
          key: "setCoreSkills",
          value: function setCoreSkills() {
            this.apiService.saveCoreSkills(this.coreSkillsForm.value).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              return console.log(err);
            });
            this.coreSkillsForm.reset();
          }
        }, {
          key: "setWorkExpe",
          value: function setWorkExpe() {
            this.apiService.saveExpe(this.workExpeForm.value).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              return console.log(err);
            });
            this.workExpeForm.reset();
          }
        }]);

        return AdminSetSkillsPage;
      }();

      _AdminSetSkillsPage.ctorParameters = function () {
        return [{
          type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }];
      };

      _AdminSetSkillsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin-set-skills',
        template: _raw_loader_admin_set_skills_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_set_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AdminSetSkillsPage);
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
            var _this4 = this;

            var authData = {
              email: email,
              password: password
            };
            this.http.post("http://localhost:3000/api/user/login", authData).subscribe(function (response) {
              console.log(response);
              var token = response.token;
              _this4.token = token;

              if (token) {
                var expiresInDuration = response.expiresIn;

                _this4.setAuthTimer(expiresInDuration);

                _this4.isAuthenticated = true;

                _this4.authStatusListener.next(true);

                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);

                _this4.saveAuthData(token, expirationDate);

                _this4.router.navigate(["/admin-home"]);
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
            var _this5 = this;

            console.log("Setting timer: " + duration);
            this.tokenTimer = setTimeout(function () {
              _this5.logout();
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
            var _this6 = this;

            this.http.post(this.baseUrl + "api" + "/" + "subUsers" + "/" + "save", userData).subscribe(function (res) {
              console.log(res);

              if (res) {
                _this6.router.navigate(['/admin-user-reports']);
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
            var _this7 = this;

            this.http.put(this.baseUrl + "api" + "/" + "subUsers" + "/" + "update" + "/" + id, userData, this.httpOptions).subscribe(function (res) {
              console.log(res);

              if (res) {
                _this7.router.navigate(['/admin-user-reports']);
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
            var _this8 = this;

            this.http.post(this.baseUrl + 'api/forms/save', formData).subscribe(function (data) {
              console.log(data);

              if (data) {
                _this8.router.navigate(['/form-two']);
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
    58559:
    /*!*************************************************************!*\
      !*** ./src/app/admin-set-skills/admin-set-skills.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1zZXQtc2tpbGxzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    48968:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-set-skills/admin-set-skills.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-title style=\"color: white;\">Add New Skills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <form [formGroup]=\"skillForm\"  (ngSubmit)=\"setSkills()\">\n              <h2>Set Skills</h2>\n            <ion-item>\n              <ion-label position=\"floating\">Skills</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                required\n                placeholder=\"PLUMBER\"\n                formControlName=\"JOB_NAME\"\n              ></ion-input>\n            </ion-item>\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Skill\n            </ion-button>\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              CHECK SKILLS\n            </ion-button>\n          </form>\n\n          <form [formGroup]=\"coreSkillsForm\"  (ngSubmit)=\"setCoreSkills()\">\n            <h2>Set Core Skills</h2>\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select your skills</ion-label>\n              <select formControlName=\"JOB_UID\"  name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allSkills\"  [ngValue]=\"skills._id\">{{skills.JOB_NAME}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Core Skill</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                placeholder=\"Home work\"\n                formControlName=\"WORK_AREA\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Core Skills\n            </ion-button>\n          </form>\n\n          <form [formGroup]=\"workExpeForm\"  (ngSubmit)=\"setWorkExpe()\">\n           <h2>Set Work Experience</h2>\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select skills</ion-label>\n              <select  (change)=\"getSkillsValue($event)\" formControlName=\"skillID\" name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allSkills\"  [ngValue]=\"skills._id\">{{skills.JOB_NAME}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n              <ion-label class=\"ion-margin-bottom\" position=\"stacked\">Select Core Skill</ion-label>\n              <select  formControlName=\"CORE_SKILL_ID\"  name=\"skill\" class=\"required\">\n                <option value=\"\" disabled selected>Select Location</option>\n                <option *ngFor=\"let skills of allCoreSkills\"  [ngValue]=\"skills._id\">{{skills.WORK_AREA}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Work Experience</ion-label>\n              <ion-input\n                name=\"moNumber\"\n                placeholder=\"Home work\"\n                formControlName=\"WORK_EXPE\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-button\n            class=\"ion-margin-vertical\"\n            type=\"submit\"\n            color=\"danger\"\n            expand=\"block\">\n              Add Work Experience\n            </ion-button>\n          </form>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button  \n         class=\"ion-margin-vertical\"\n         type=\"submit\"\n         color=\"danger\"\n        \n         expand=\"block\" routerLink=\"/form-three\">Next</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin-set-skills_admin-set-skills_module_ts-es5.js.map