(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_otp_otp_module_ts"], {
    /***/
    77227:
    /*!*******************************************!*\
      !*** ./src/app/otp/otp-routing.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpPageRoutingModule": function OtpPageRoutingModule() {
          return (
            /* binding */
            _OtpPageRoutingModule
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


      var _otp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otp.page */
      36076);

      var routes = [{
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_0__.OtpPage
      }];

      var _OtpPageRoutingModule = function OtpPageRoutingModule() {
        _classCallCheck(this, OtpPageRoutingModule);
      };

      _OtpPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OtpPageRoutingModule);
      /***/
    },

    /***/
    71599:
    /*!***********************************!*\
      !*** ./src/app/otp/otp.module.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpPageModule": function OtpPageModule() {
          return (
            /* binding */
            _OtpPageModule
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


      var _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otp-routing.module */
      77227);
      /* harmony import */


      var _otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otp.page */
      36076);

      var _OtpPageModule = function OtpPageModule() {
        _classCallCheck(this, OtpPageModule);
      };

      _OtpPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpPageRoutingModule],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_1__.OtpPage]
      })], _OtpPageModule);
      /***/
    },

    /***/
    36076:
    /*!*********************************!*\
      !*** ./src/app/otp/otp.page.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpPage": function OtpPage() {
          return (
            /* binding */
            _OtpPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./otp.page.html */
      49062);
      /* harmony import */


      var _otp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otp.page.scss */
      27562);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _services_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/forms.service */
      76311);
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/language.service */
      71155);

      var _OtpPage = /*#__PURE__*/function () {
        function OtpPage(router, apiService, languageService, formService, alertController, route) {
          _classCallCheck(this, OtpPage);

          this.router = router;
          this.apiService = apiService;
          this.languageService = languageService;
          this.formService = formService;
          this.alertController = alertController;
          this.route = route;
          this.submitted = false;
          this.showError = false;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$")])
          });
        }

        _createClass(OtpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languageService._translateLanguage();

            this.moNumber = localStorage.getItem('moNumber');
            console.log(this.moNumber);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              if (paramMap.has("status")) {
                _this.status = paramMap.get("status");
              }
            });
          }
        }, {
          key: "f",
          value: function f(controls) {
            return this.form.get(controls);
          }
        }, {
          key: "otpResenet",
          value: function otpResenet() {
            this.apiService.getOtpFromMoNumber(localStorage.getItem("moNumber")).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
            this.form.reset();
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        message: 'ओटीपी मेल नहीं खाता, कृपया पुनः प्रयास करें!',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlert2",
          value: function presentAlert2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        message: 'नंबर पहले से रजिस्टर है',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                      _context2.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis2 = _context2.sent;
                      role = _yield$alert$onDidDis2.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.submitted = true;

            if (this.form.invalid) {
              return;
            }

            console.log(this.form.get("otp").value);
            this.apiService.verifyOtp({
              "mobileNo": this.moNumber,
              "otp": this.form.get('otp').value
            }).subscribe(function (res) {
              console.log(res);
              localStorage.setItem('userId', res.data._id);

              if (res.status === 200) {
                _this2.router.navigate(["/form-one"]);
              } else {
                _this2.presentAlert2();
              }
            }, function (err) {
              console.log(err);

              if (err.status === 404) {
                _this2.presentAlert();
              }
            });
          }
        }]);

        return OtpPage;
      }();

      _OtpPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
        }, {
          type: _services_forms_service__WEBPACK_IMPORTED_MODULE_3__.FormsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }];
      };

      _OtpPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-otp",
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OtpPage);
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
            var _this3 = this;

            var authData = {
              email: email,
              password: password
            };
            this.http.post("http://localhost:3000/api/user/login", authData).subscribe(function (response) {
              console.log(response);
              var token = response.token;
              _this3.token = token;

              if (token) {
                var expiresInDuration = response.expiresIn;

                _this3.setAuthTimer(expiresInDuration);

                _this3.isAuthenticated = true;

                _this3.authStatusListener.next(true);

                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);

                _this3.saveAuthData(token, expirationDate);

                _this3.router.navigate(["/admin-home"]);
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
            var _this4 = this;

            console.log("Setting timer: " + duration);
            this.tokenTimer = setTimeout(function () {
              _this4.logout();
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
            var _this5 = this;

            this.http.post(this.baseUrl + "api" + "/" + "subUsers" + "/" + "save", userData).subscribe(function (res) {
              console.log(res);

              if (res) {
                _this5.router.navigate(['/admin-user-reports']);
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
            var _this6 = this;

            this.http.put(this.baseUrl + "api" + "/" + "subUsers" + "/" + "update" + "/" + id, userData, this.httpOptions).subscribe(function (res) {
              console.log(res);

              if (res) {
                _this6.router.navigate(['/admin-user-reports']);
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
            var _this7 = this;

            this.http.post(this.baseUrl + 'api/forms/save', formData).subscribe(function (data) {
              console.log(data);

              if (data) {
                _this7.router.navigate(['/form-two']);
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
    },

    /***/
    27562:
    /*!***********************************!*\
      !*** ./src/app/otp/otp.page.scss ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tool {\n  --background: #eb445a;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n\n.codeResend {\n  --inner-padding-end:0px;\n  --padding-start:0px;\n}\n\n.codeResend label {\n  font-size: 14px;\n  color: #ff0000;\n}\n\n.codeResend button {\n  background: transparent;\n  color: #3B63FF;\n  font-weight: 600;\n}\n\n.login-container ion-button {\n  margin-top: 0px;\n}\n\n.validation {\n  color: red;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUFPLGVBQUE7RUFBZ0IsY0FBQTtBQUkzQjs7QUFISTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBS1I7O0FBQUk7RUFBWSxlQUFBO0FBSWhCOztBQURBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFJSiIsImZpbGUiOiJvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWI0NDVhO1xufVxuXG5pb24tbGlzdCB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvZGVSZXNlbmQge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDowcHg7XG4gICAgbGFiZWwge2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogI2ZmMDAwMDt9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjM0I2M0ZGO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgaW9uLWJ1dHRvbiB7bWFyZ2luLXRvcDogMHB4O31cbn1cblxuLnZhbGlkYXRpb257XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
      /***/
    },

    /***/
    49062:
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"login-container\">\n    <div class=\"logo\"><img src=\"./assets/images/logo.png\"/></div>\n    <div class=\"login-con\">\n      <h1>{{languageService.otp_for_lang}}</h1>\n\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <div class=\"mobileno\">\n              <ion-input name=\"otp\" type=\"password\" required formControlName=\"otp\" placeholder=\"OTP\"></ion-input>\n            </div>\n\n            <ion-item lines=\"none\" class=\"codeResend\">\n              <button ion-button (click)=\"otpResenet()\" slot=\"end\">{{languageService.resend_otp_for_lang}}</button>\n            </ion-item>\n\n            <div  *ngIf=\"submitted && f('otp').hasError('required')\"\n            lines=\"none\">\n            <ion-label *ngIf=\"f('otp').hasError('required')\" class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </div>\n\n          <div class=\"error\" *ngIf=\"f('otp').hasError('pattern')\" \n          lines=\"none\">\n          <ion-label   class=\"validation\">\n            {{languageService.mo_must_number}}\n          </ion-label>\n        </div>\n\n          <div *ngIf=\"submitted && showError\"\n          lines=\"none\">\n          <ion-label class=\"validation\">\n            password do not match!\n          </ion-label>\n        </div>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button class=\"ion-margin-vertical\" type=\"submit\" expand=\"block\">{{languageService.otp_verify_for_lang}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_otp_otp_module_ts-es5.js.map