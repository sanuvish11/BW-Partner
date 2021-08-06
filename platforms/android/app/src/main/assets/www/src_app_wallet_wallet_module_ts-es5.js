(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_wallet_wallet_module_ts"], {
    /***/
    42576:
    /*!*************************************************!*\
      !*** ./src/app/wallet/wallet-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WalletPageRoutingModule": function WalletPageRoutingModule() {
          return (
            /* binding */
            _WalletPageRoutingModule
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


      var _wallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./wallet.page */
      5911);

      var routes = [{
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_0__.WalletPage
      }];

      var _WalletPageRoutingModule = function WalletPageRoutingModule() {
        _classCallCheck(this, WalletPageRoutingModule);
      };

      _WalletPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WalletPageRoutingModule);
      /***/
    },

    /***/
    49555:
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WalletPageModule": function WalletPageModule() {
          return (
            /* binding */
            _WalletPageModule
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


      var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./wallet-routing.module */
      42576);
      /* harmony import */


      var _wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wallet.page */
      5911);

      var _WalletPageModule = function WalletPageModule() {
        _classCallCheck(this, WalletPageModule);
      };

      _WalletPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletPageRoutingModule],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_1__.WalletPage]
      })], _WalletPageModule);
      /***/
    },

    /***/
    5911:
    /*!***************************************!*\
      !*** ./src/app/wallet/wallet.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WalletPage": function WalletPage() {
          return (
            /* binding */
            _WalletPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./wallet.page.html */
      46368);
      /* harmony import */


      var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wallet.page.scss */
      12228);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _WalletPage = /*#__PURE__*/function () {
        function WalletPage() {
          _classCallCheck(this, WalletPage);

          this.walletAmount = '';
          this.refferalCode = '';
        }

        _createClass(WalletPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.refferalCode = localStorage.getItem('refferalCode');
            this.walletAmount = localStorage.getItem('walletAmount');
          }
        }]);

        return WalletPage;
      }();

      _WalletPage.ctorParameters = function () {
        return [];
      };

      _WalletPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-wallet',
        template: _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WalletPage);
      /***/
    },

    /***/
    12228:
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    46368:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Refferal Code</ion-label>\n    <ion-label style=\"text-align: center;\">{{refferalCode}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Wallet Amount</ion-label>\n    <ion-label style=\"text-align: center;\">{{walletAmount}}</ion-label>\n  </ion-item>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_wallet_wallet_module_ts-es5.js.map