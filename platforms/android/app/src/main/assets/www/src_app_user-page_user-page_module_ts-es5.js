(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_user-page_user-page_module_ts"], {
    /***/
    57871:
    /*!*******************************************************!*\
      !*** ./src/app/user-page/user-page-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserPagePageRoutingModule": function UserPagePageRoutingModule() {
          return (
            /* binding */
            _UserPagePageRoutingModule
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


      var _user_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-page.page */
      6962);

      var routes = [{
        path: '',
        component: _user_page_page__WEBPACK_IMPORTED_MODULE_0__.UserPagePage
      }];

      var _UserPagePageRoutingModule = function UserPagePageRoutingModule() {
        _classCallCheck(this, UserPagePageRoutingModule);
      };

      _UserPagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UserPagePageRoutingModule);
      /***/
    },

    /***/
    10168:
    /*!***********************************************!*\
      !*** ./src/app/user-page/user-page.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserPagePageModule": function UserPagePageModule() {
          return (
            /* binding */
            _UserPagePageModule
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


      var _user_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-page-routing.module */
      57871);
      /* harmony import */


      var _user_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-page.page */
      6962);

      var _UserPagePageModule = function UserPagePageModule() {
        _classCallCheck(this, UserPagePageModule);
      };

      _UserPagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _user_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPagePageRoutingModule],
        declarations: [_user_page_page__WEBPACK_IMPORTED_MODULE_1__.UserPagePage]
      })], _UserPagePageModule);
      /***/
    },

    /***/
    6962:
    /*!*********************************************!*\
      !*** ./src/app/user-page/user-page.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserPagePage": function UserPagePage() {
          return (
            /* binding */
            _UserPagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_user_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./user-page.page.html */
      23375);
      /* harmony import */


      var _user_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-page.page.scss */
      55868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _Models_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Models/Notification */
      80534);

      var _UserPagePage = /*#__PURE__*/function () {
        function UserPagePage(apiService, alertController) {
          _classCallCheck(this, UserPagePage);

          this.apiService = apiService;
          this.alertController = alertController;
          this.notiData = [];
          this.status = "Active";
          this.notiObj = new _Models_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification();
          this.dataValue = {
            id: "610a3030fbf0660d74745dbb",
            NAME: "snxsk",
            COST: 50000,
            NEED: "PLUMBER",
            TOTAL_AMOUNT: "10000",
            MOBILE_NUMBER: "8879879",
            ADDRESS: "7HJ",
            STATUS: 2
          };
          this.dataValueRejected = {
            id: "610a3030fbf0660d74745dbb",
            NAME: "snxsk",
            COST: 50000,
            NEED: "PLUMBER",
            TOTAL_AMOUNT: "10000",
            MOBILE_NUMBER: "8879879",
            ADDRESS: "7HJ",
            STATUS: 3
          };
        }

        _createClass(UserPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getNotifications();
          }
        }, {
          key: "getNotifications",
          value: function getNotifications() {
            var _this = this;

            this.apiService.getUserNotiData().subscribe(function (res) {
              console.log(res);
              res.forEach(function (data) {
                _this.userPageId = data._id;
              });
              _this.notiData = res;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "clickAccpet",
          value: function clickAccpet(id) {
            var _this2 = this;

            console.log(id);
            var notificationId = '610a3030fbf0660d74745dbb';
            console.log(this.notiData);
            this.notiData.forEach(function (data) {
              console.log(data);
              data.STATUS = 2;
              _this2.status = "Approved";
              _this2.notiObj = data;
              console.log(data);
              console.log(_this2.notiObj);
            });
            this.apiService.updateUserNotiData(id, this.notiObj);
            this.apiService.updateNotificationData(notificationId, this.dataValue).subscribe(function (res) {}, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "increaseBid",
          value: function increaseBid(id) {
            console.log(id);
          }
        }, {
          key: "clickReject",
          value: function clickReject(id) {
            var _this3 = this;

            console.log(id);
            var notificationId = '610a3030fbf0660d74745dbb';
            console.log(this.notiData);
            this.notiData.forEach(function (data) {
              console.log(data);
              data.STATUS = 3;
              _this3.status = "Reject";
              _this3.notiObj = data;
              console.log(data);
              console.log(_this3.notiObj);
            });
            this.apiService.updateUserNotiData(id, this.notiObj);
            this.apiService.updateNotificationData(notificationId, this.dataValueRejected).subscribe(function (res) {}, function (err) {
              console.log(err);
            }); // this.apiService.updateNotificationData(id, {STATUS: 3});
          }
        }]);

        return UserPagePage;
      }();

      _UserPagePage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
        }];
      };

      _UserPagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-page',
        template: _raw_loader_user_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_page_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _UserPagePage);
      /***/
    },

    /***/
    55868:
    /*!***********************************************!*\
      !*** ./src/app/user-page/user-page.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBhZ2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    23375:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-page/user-page.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>notification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-grid>\n    <ion-row> \n      <ion-col size=\"3\">Name</ion-col>\n      <ion-col>Need</ion-col>\n      <ion-col>Cost</ion-col>\n      <ion-col>Address</ion-col>\n      <ion-col>Status</ion-col>\n      <ion-col>action</ion-col>\n    </ion-row>\n    <ion-row > \n      <ion-col>S.No</ion-col>\n      <ion-col>Name</ion-col>\n      <ion-col>Gender</ion-col>\n      <ion-col>Country</ion-col>\n      <ion-col>Gender</ion-col>\n      <ion-col>Country</ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid>\n    <ion-row *ngFor=\"let n of notiData\"> \n      <ion-col>\n        <ion-label>\n          Name\n        </ion-label>\n        <div  >\n        {{n.NAME}}\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-label>\n          Work\n        </ion-label>\n        <div>\n          {{n.NEED}}\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-label>\n          Cost\n        </ion-label>\n         <div>\n          {{n.COST}}\n        </div>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-label>\n          Address\n        </ion-label>\n         <div >\n            isjoasd\n        </div>\n      </ion-col> -->\n     \n      <ion-col>\n        <ion-label>\n          Status\n        </ion-label>\n         <div *ngIf=\"n.STATUS === 1\"> \n            Active\n        </div>\n        <div *ngIf=\"n.STATUS === 2\">\n          Approved\n      </div>\n      <div *ngIf=\"n.STATUS === 3\">\n        Rejected\n    </div>\n    \n      </ion-col>\n      <ion-col>\n        <ion-label>\n          Action\n        </ion-label>\n         <div *ngIf=\"n.STATUS === 1\">\n          <ion-button (click)=\"clickAccpet(n._id)\">Accept</ion-button>\n          <ion-button (click)=\"clickReject(n._id)\">Reject</ion-button>\n        </div>\n        \n        <div *ngIf=\"n.STATUS === 3\">\n          <ion-label>Rejected</ion-label>\n        </div>\n      </ion-col>\n      <div>\n        <ion-row>Total Bid Amount By Worker: {{n.TOTAL_AMOUNT}}</ion-row>\n      </div>\n    </ion-row>\n   \n  </ion-grid>\n\n\n    \n    \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_user-page_user-page_module_ts-es5.js.map