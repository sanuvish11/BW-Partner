(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 65935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 65935);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 65935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 52836);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 38043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Models_bwUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/bwUsers */ 22782);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/forms.service */ 76311);





// import { BwUsers } from 'src/src/app/Models/bwUsers';



let DashboardPage = class DashboardPage {
    constructor(apiService, formService, commonService) {
        this.apiService = apiService;
        this.formService = formService;
        this.commonService = commonService;
        this.showStatus = "Offline";
        this.usersData = new _Models_bwUsers__WEBPACK_IMPORTED_MODULE_2__.BwUsers();
        this.isChecked = false;
    }
    ngOnInit() {
        this.usersData._id = localStorage.getItem('userId');
        this.getUserById();
        this.getBankDetails();
        this.getFamilyDetails();
    }
    getBankDetails() {
        this.apiService.getBankDetailsById(localStorage.getItem('userId'))
            .subscribe((res) => {
            console.log(res);
            this.commonService.setBankData(res);
        }, (err => { console.log(err); }));
    }
    getFamilyDetails() {
        this.apiService.getFamilyDetailsById(localStorage.getItem('userId'))
            .subscribe((res) => {
            console.log(res);
        }, (err => { console.log(err); }));
    }
    getUserById() {
        this.apiService.getBwUsersById(this.usersData._id).subscribe((res) => {
            console.log(res.data);
            this.usersData = res.data;
            console.log(this.usersData);
        }, (err => console.log(err)));
    }
    updateUserData() {
        this.usersData._id = localStorage.getItem('userId');
        this.formService.updateFormData(localStorage.getItem('userId'), this.usersData)
            .subscribe((data) => {
            console.log(data);
        }, (err => { console.log(err); }));
    }
    changeStatusValue(values) {
        if (values.detail.checked === true) {
            this.showStatus = "Online";
            this.usersData.online_user = 1;
            this.updateUserData();
        }
        else {
            this.showStatus = "Offline";
            this.usersData.online_user = 0;
            this.updateUserData();
        }
    }
};
DashboardPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_5__.FormsService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 38043:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".manu_btn {\n  --color: white;\n}\n\n.togg {\n  text-align: end;\n}\n\n.show_head {\n  text-align: center;\n  color: white;\n}\n\n.make_color {\n  --background: auto;\n}\n\nion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUoiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW51X2J0bntcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG4udG9nZ3tcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5zaG93X2hlYWR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1ha2VfY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiBhdXRvO1xufVxuXG5pb24taWNvbntcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ 52836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button class=\"manu_btn\" menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n      <div>\n       <h5 class=\"show_head\"> {{showStatus}}</h5>\n      </div>\n\n      <ion-item class=\"make_color\">\n        <ion-icon routerLink=\"/notification\" name=\"notifications-sharp\" class=\"ion-margin-start\"></ion-icon>\n        <ion-icon routerLink=\"/message\" name=\"chatbox-ellipses-sharp\" class=\"ion-margin-start\"></ion-icon>\n      </ion-item>\n      \n    <ion-buttons slot=\"end\" >\n      <ion-toggle (ionChange)=\"changeStatusValue($event)\" ></ion-toggle>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts-es2015.js.map