(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_show-familiy-details_show-familiy-details_module_ts"], {
    /***/
    14672:
    /*!*****************************************!*\
      !*** ./src/app/Models/familyDetails.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FamilyDetails": function FamilyDetails() {
          return (
            /* binding */
            _FamilyDetails
          );
        }
        /* harmony export */

      });

      var _FamilyDetails = function _FamilyDetails() {
        _classCallCheck(this, _FamilyDetails);

        this.FATHER_NAME = '';
        this.FATHER_AGE = '';
        this.MOTHER_AGE = '';
        this.WIFR_AGE = '';
        this.MOTHER_NAME = '';
        this.WIFE_NAME = '';
        this.CHILD_DETAIL = [];
      };
      /***/

    },

    /***/
    99557:
    /*!*****************************************************************************!*\
      !*** ./src/app/show-familiy-details/show-familiy-details-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowFamiliyDetailsPageRoutingModule": function ShowFamiliyDetailsPageRoutingModule() {
          return (
            /* binding */
            _ShowFamiliyDetailsPageRoutingModule
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


      var _show_familiy_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./show-familiy-details.page */
      26602);

      var routes = [{
        path: '',
        component: _show_familiy_details_page__WEBPACK_IMPORTED_MODULE_0__.ShowFamiliyDetailsPage
      }];

      var _ShowFamiliyDetailsPageRoutingModule = function ShowFamiliyDetailsPageRoutingModule() {
        _classCallCheck(this, ShowFamiliyDetailsPageRoutingModule);
      };

      _ShowFamiliyDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ShowFamiliyDetailsPageRoutingModule);
      /***/
    },

    /***/
    60722:
    /*!*********************************************************************!*\
      !*** ./src/app/show-familiy-details/show-familiy-details.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowFamiliyDetailsPageModule": function ShowFamiliyDetailsPageModule() {
          return (
            /* binding */
            _ShowFamiliyDetailsPageModule
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


      var _show_familiy_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./show-familiy-details-routing.module */
      99557);
      /* harmony import */


      var _show_familiy_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./show-familiy-details.page */
      26602);

      var _ShowFamiliyDetailsPageModule = function ShowFamiliyDetailsPageModule() {
        _classCallCheck(this, ShowFamiliyDetailsPageModule);
      };

      _ShowFamiliyDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _show_familiy_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowFamiliyDetailsPageRoutingModule],
        declarations: [_show_familiy_details_page__WEBPACK_IMPORTED_MODULE_1__.ShowFamiliyDetailsPage]
      })], _ShowFamiliyDetailsPageModule);
      /***/
    },

    /***/
    26602:
    /*!*******************************************************************!*\
      !*** ./src/app/show-familiy-details/show-familiy-details.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowFamiliyDetailsPage": function ShowFamiliyDetailsPage() {
          return (
            /* binding */
            _ShowFamiliyDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_show_familiy_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./show-familiy-details.page.html */
      87688);
      /* harmony import */


      var _show_familiy_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./show-familiy-details.page.scss */
      6458);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Models_familyDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Models/familyDetails */
      14672);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api.service */
      5830);

      var _ShowFamiliyDetailsPage = /*#__PURE__*/function () {
        function ShowFamiliyDetailsPage(apiService) {
          _classCallCheck(this, ShowFamiliyDetailsPage);

          this.apiService = apiService;
          this.familyData = new _Models_familyDetails__WEBPACK_IMPORTED_MODULE_2__.FamilyDetails();
        }

        _createClass(ShowFamiliyDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userId = localStorage.getItem('userId');
            this.apiService.getFamilyDetailsById(this.userId).subscribe(function (res) {
              console.log(res);
              _this.familyData = res.data;
              console.log(_this.familyData);
            }, function (err) {
              return console.log(err);
            });
          }
        }]);

        return ShowFamiliyDetailsPage;
      }();

      _ShowFamiliyDetailsPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }];
      };

      _ShowFamiliyDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-show-familiy-details',
        template: _raw_loader_show_familiy_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_show_familiy_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ShowFamiliyDetailsPage);
      /***/
    },

    /***/
    6458:
    /*!*********************************************************************!*\
      !*** ./src/app/show-familiy-details/show-familiy-details.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: white;\n}\n\n.back {\n  margin-top: -3px;\n  color: black;\n}\n\n.loginr {\n  color: black;\n  font-size: 16px;\n  justify-content: flex-start;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 44px;\n  margin-top: -6px;\n  margin-left: 27px;\n}\n\n.backbutton {\n  color: black;\n  width: 57px;\n  position: absolute;\n  top: 10px;\n  /* margin-top: 6px; */\n  height: 29px;\n}\n\n.new-background-color1 {\n  --background: #ececec !important;\n  height: 40px;\n}\n\n.cprocess {\n  font-size: 14px;\n  color: #222222;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n\n.home {\n  margin-left: 22px;\n  margin-top: 6px;\n  font-size: small;\n  color: grey;\n}\n\n.forward {\n  margin-left: 5px;\n  margin-top: 10px;\n  color: grey;\n}\n\n.loginred {\n  color: #EF3926;\n  font-size: 22px;\n  margin: 10px 0 0;\n  font-weight: 400;\n  margin-top: 30px;\n}\n\n.daddres {\n  font-size: 18px !important;\n  border-bottom: 0px solid #616161;\n  color: #474848 !important;\n  font-weight: 600 !important;\n}\n\n.iconadd {\n  background: #868686;\n  color: #ffffff;\n  font-size: 26px;\n}\n\n.name {\n  padding: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #10739A;\n  text-transform: capitalize;\n  margin: 5px 0px 0px 19px;\n}\n\n.addres {\n  margin: 10px 0px 0px 19px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #7D7D7D;\n  text-align: justify;\n}\n\n.pin {\n  margin: 10px 0px 0px 19px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #7D7D7D;\n  text-align: justify;\n}\n\n.mobile {\n  font-size: 14px;\n  margin: 10px 0;\n  color: #10739A;\n  font-weight: 600;\n  margin: 5px 0px 0px 19px;\n}\n\n.number {\n  margin: 8px 0px 0px 19px;\n  color: #7D7D7D;\n  font-weight: 400;\n  line-height: 1.1;\n  font-size: 14px;\n}\n\n.paymentbbtm {\n  box-shadow: 0 0 10px #E0E0E0;\n  --height: 40px;\n  --border-color:2px solid red ;\n}\n\n.proceedBtn {\n  --border: 1px solid #10739A;\n  /* margin-bottom: 20px; */\n  text-transform: uppercase;\n  --background: red;\n  box-shadow: 0 0 10px #A0A0A0;\n  --border-radius: none;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctZmFtaWxpeS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUNBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBRUE7O0FBQUE7RUFBVSxlQUFBO0VBQWdCLGNBQUE7RUFBYyxnQkFBQTtFQUFnQixnQkFBQTtBQU94RDs7QUFOQTtFQUFNLGlCQUFBO0VBQ0YsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVRBO0VBQVMsZ0JBQUE7RUFDTCxnQkFBQTtFQUNBLFdBQUE7QUFhSjs7QUFaQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBYkE7RUFDSSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQWdCSjs7QUFiQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFnQkY7O0FBZEM7RUFDRyxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFpQko7O0FBZkM7RUFDRyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBb0JKOztBQWxCQTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBcUJKOztBQWxCQTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBcUJKOztBQUpBO0VBQ0ksMkJBQUE7RUFJQSx5QkFBQTtFQUdBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6InNob3ctZmFtaWxpeS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICAuYmFja3tcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gIC5sb2dpbnJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNDRweDtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICAgIH1cbiAgICAuYmFja2J1dHRvbntcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB3aWR0aDogNTdweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDZweDsgKi9cbiAgICAgICAgaGVpZ2h0OiAyOXB4O1xuICAgICAgfVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3Ixe1xuLS1iYWNrZ3JvdW5kOiAjZWNlY2VjICFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDQwcHg7XG59XG4uY3Byb2Nlc3N7Zm9udC1zaXplOiAxNHB4O2NvbG9yOiMyMjIyMjI7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1sZWZ0OjVweDt9XG4uaG9tZXttYXJnaW4tbGVmdDogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogZ3JleTt9XG4uZm9yd2FyZHttYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IGdyZXk7fVxuLmxvZ2lucmVke1xuICAgIGNvbG9yOiAjRUYzOTI2O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5kYWRkcmVze1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjNjE2MTYxO1xuICAgIGNvbG9yOiAjNDc0ODQ4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIC8vIG1hcmdpbjogMjBweDtcbn1cbi5pY29uYWRke1xuICBiYWNrZ3JvdW5kOiAjODY4Njg2O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOjI2cHg7XG4gfVxuIC5uYW1le1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxMDczOUE7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAxOXB4O1xuIH1cbiAuYWRkcmVze1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDE5cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM3RDdEN0Q7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiB9XG4ucGlue1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDE5cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM3RDdEN0Q7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5tb2JpbGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGNvbG9yOiAjMTA3MzlBO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAxOXB4O1xufVxuLm51bWJlcntcbiAgICBtYXJnaW46IDhweCAwcHggMHB4IDE5cHg7XG4gICAgY29sb3I6ICM3RDdEN0Q7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBheW1lbnRiYnRte1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNFMEUwRTA7XG4gICAgLS1oZWlnaHQ6IDQwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6MnB4IHNvbGlkIHJlZCA7XG59XG4vLyBpb24tYnV0dG9ue1xuLy8gICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzEwNzM5QTtcbi8vICAgICAvLyBtYXJnaW46IDEwcHg7XG4vLyAgICAgLy8gbWFyZ2luLXRvcDogNThweDtcbi8vICAgICAvLyB3aWR0aDogMjM1cHg7XG4vLyAgICAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cbi8vICAgICAvLyBtYXJnaW4tbGVmdDogMThweDtcbi8vICAgICBmb250LXNpemU6IDE1cHg7XG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbi8vICAgICAtLWJhY2tncm91bmQ6IHJlZDtcbi8vICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjQTBBMEEwO1xuLy8gICAgIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcbi8vICAgICBoZWlnaHQ6IDUwcHg7XG4vLyB9XG5cbi5wcm9jZWVkQnRue1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzEwNzM5QTtcbiAgICAvLyBtYXJnaW46IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogNThweDtcbiAgICAvLyB3aWR0aDogMjM1cHg7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cbiAgICAvLyBtYXJnaW4tbGVmdDogMThweDtcbiAgICAvLyBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAtLWJhY2tncm91bmQ6IHJlZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjQTBBMEEwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    87688:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-familiy-details/show-familiy-details.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Family Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col col-12 col-xl-2 col-lg-3 col-md-4>\n      <ng-container *ngIf=\"!spinner\">\n        <ion-row>\n          <ion-col size=\"11\">\n            <ion-label class=\"daddres ion-margin-vertical ion-margin-horizontal\">Family Details</ion-label>\n          </ion-col>\n          <ion-col [routerLink]=\"['/edit-family-details/', userId]\" size=\"1\">\n            <ion-icon name=\"pencil\" class=\"iconadd  ion-margin-horizontal ion-float-right\" >\n            </ion-icon>\n          </ion-col>\n          \n          </ion-row>\n\n          <div>\n            <ion-row class=\"name\">Father Name- {{familyData.FATHER_NAME}}</ion-row>\n            <ion-row class=\"name\">Father Age- {{familyData.FATHER_AGE}}</ion-row>\n            <div >\n              <ion-row class=\"addres\">Mother Name - {{familyData.MOTHER_NAME}}</ion-row>\n              <ion-row class=\"addres\">Mother Age - {{familyData.MOTHER_AGE}}</ion-row>\n            </div>\n            <ion-row class=\"pin\">Wife Name - {{familyData.WIFE_NAME}}</ion-row>\n            <ion-row class=\"pin\">Wife Age - {{familyData.WIFE_AGE}}</ion-row>\n            <ion-item>\n              <ion-label>Total Child - <span>{{familyData.CHILD_DETAIL.length}}</span></ion-label>\n            </ion-item>\n           \n            <ion-row style=\"margin-top:10px;\"  *ngFor=\"let c of familyData.CHILD_DETAIL; let i = index\">\n              \n              <ion-label class=\"mobile\">Child Name :</ion-label>\n              <ion-label class=\"number\">{{c.CHILD_NAME}}</ion-label>\n\n              <ion-label class=\"mobile\">Child Age :</ion-label>\n              <ion-label class=\"number\">{{c.CHILD_AGE}}</ion-label>\n            </ion-row>\n          </div>\n    \n     \n      \n       </ng-container>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_show-familiy-details_show-familiy-details_module_ts-es5.js.map