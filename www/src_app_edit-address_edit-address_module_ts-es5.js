(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_edit-address_edit-address_module_ts"], {
    /***/
    25804:
    /*!*************************************************************!*\
      !*** ./src/app/edit-address/edit-address-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditAddressPageRoutingModule": function EditAddressPageRoutingModule() {
          return (
            /* binding */
            _EditAddressPageRoutingModule
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


      var _edit_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-address.page */
      39703);

      var routes = [{
        path: '',
        component: _edit_address_page__WEBPACK_IMPORTED_MODULE_0__.EditAddressPage
      }];

      var _EditAddressPageRoutingModule = function EditAddressPageRoutingModule() {
        _classCallCheck(this, EditAddressPageRoutingModule);
      };

      _EditAddressPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditAddressPageRoutingModule);
      /***/
    },

    /***/
    48990:
    /*!*****************************************************!*\
      !*** ./src/app/edit-address/edit-address.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditAddressPageModule": function EditAddressPageModule() {
          return (
            /* binding */
            _EditAddressPageModule
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


      var _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-address-routing.module */
      25804);
      /* harmony import */


      var _edit_address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-address.page */
      39703);

      var _EditAddressPageModule = function EditAddressPageModule() {
        _classCallCheck(this, EditAddressPageModule);
      };

      _EditAddressPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditAddressPageRoutingModule],
        declarations: [_edit_address_page__WEBPACK_IMPORTED_MODULE_1__.EditAddressPage]
      })], _EditAddressPageModule);
      /***/
    },

    /***/
    39703:
    /*!***************************************************!*\
      !*** ./src/app/edit-address/edit-address.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditAddressPage": function EditAddressPage() {
          return (
            /* binding */
            _EditAddressPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_edit_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./edit-address.page.html */
      44012);
      /* harmony import */


      var _edit_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-address.page.scss */
      41591);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/language.service */
      71155); // import { LanguageService } from 'src/src/app/services/language.service';


      var _EditAddressPage = /*#__PURE__*/function () {
        function EditAddressPage(languageService, apiService) {
          _classCallCheck(this, EditAddressPage);

          this.languageService = languageService;
          this.apiService = apiService;
          this.submitted = false;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            address3: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
          });
        }

        _createClass(EditAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languageService._translateLanguage();

            this.apiService.getFamilyDetailsById(localStorage.getItem('userId')).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "f",
          value: function f(controls) {
            return this.form.get(controls);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;

            if (this.form.invalid) {
              return;
            }

            console.log(this.form.value);
          }
        }]);

        return EditAddressPage;
      }();

      _EditAddressPage.ctorParameters = function () {
        return [{
          type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }];
      };

      _EditAddressPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-address',
        template: _raw_loader_edit_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_address_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditAddressPage);
      /***/
    },

    /***/
    41591:
    /*!*****************************************************!*\
      !*** ./src/app/edit-address/edit-address.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".manu_btn {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW51X2J0bntcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    44012:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-address/edit-address.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button class=\"manu_btn\" menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{languageService.perInform_for_lang}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"px-10\">\n  <form [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <ion-grid class=\"form-style\">\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n             <ion-item>\n              <ion-label position=\"floating\">{{languageService.address1_for_lang}}</ion-label>\n              <ion-input formControlName=\"address1\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('address1').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('address1').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.address2_for_lang}}</ion-label>\n              <ion-input formControlName=\"address2\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('address2').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('address2').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">{{languageService.address3_for_lang}}</ion-label>\n              <ion-input formControlName=\"address3\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"submitted && f('address3').hasError('required')\"\n            lines=\"none\" class=\"validation\">\n            <ion-label *ngIf=\"f('address3').hasError('required')\"  class=\"validation\">\n              {{languageService.cant_empty_for_lang}}\n            </ion-label>\n          </ion-item>\n\n         \n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n         <ion-button class=\"ion-margin-vertical\" type=\"submit\" class=\"btn-primary\" expand=\"block\">Continue</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_edit-address_edit-address_module_ts-es5.js.map