(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["src_app_notification_notification_module_ts"],{

/***/ 89753:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": function() { return /* binding */ NotificationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 13320);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 22154:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": function() { return /* binding */ NotificationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 89753);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 13320);







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 13320:
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": function() { return /* binding */ NotificationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.page.html */ 89034);
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss */ 31435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _Models_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Notification */ 80534);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let NotificationPage = class NotificationPage {
    constructor(apiService, alertController) {
        this.apiService = apiService;
        this.alertController = alertController;
        this.notiData = [];
        this.status = "Active";
        this.notiObj = new _Models_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification();
    }
    ngOnInit() {
        this.getNotifications();
    }
    getNotifications() {
        this.apiService.getAllNotifications().subscribe((res) => {
            console.log(res);
            this.notiData = res;
        }, (err => { console.log(err); }));
    }
    presentAlert(id, userAmount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Increase Bid amount!',
                inputs: [
                    {
                        name: 'Old Value',
                        type: 'text',
                        value: userAmount,
                        placeholder: 'Placeholder 1'
                    },
                    {
                        name: 'new_bid_amount',
                        type: 'text',
                        placeholder: 'Placeholder 2'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: (data) => {
                            console.log('Confirm Ok');
                            console.log(data);
                            // this.bidAmount = parseInt(userAmount) + parseInt(data.new_bid_amount);
                            this.bidAmount = data.new_bid_amount;
                            console.log(data.new_bid_amount);
                            console.log(this.bidAmount);
                            console.log(userAmount);
                            this.apiService.saveUserNotification({
                                "NAME": "hello",
                                "NEED": "plu",
                                "COST": userAmount,
                                "TOTAL_AMOUNT": this.bidAmount,
                                "MOBILE_NUMBER": 12345678,
                                "ADDRESS": "TT",
                                "STATUS": 1
                            });
                            this.notiData.forEach((res) => {
                                console.log(res);
                                res.NAME = "Ahmad";
                                res.TOTAL_AMOUNT = this.bidAmount.toString();
                                console.log(res);
                                this.apiService.updateNotificationData(id, res)
                                    .subscribe((res) => {
                                    console.log(res);
                                    if (res) {
                                        this.getNotifications();
                                    }
                                }, (err => { console.log(err); }));
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    clickAccpet(id) {
        console.log(id);
        this.notiData.forEach((data) => {
            if (data._id === id) {
                data.STATUS = 2;
                this.notiObj = data;
                this.status = "Approved";
                console.log(this.notiObj);
                this.apiService.updateNotificationData(id, this.notiObj)
                    .subscribe((res) => { }, (err => { console.log(err); }));
            }
        });
    }
    increaseBid(id) {
        console.log(id);
    }
    clickReject(id) {
        console.log(id);
        this.notiData.forEach((data) => {
            if (data._id === id) {
                data.STATUS = 3;
                this.notiObj = data;
                this.status = "Rejected";
                console.log(this.notiObj);
                this.apiService.updateNotificationData(id, this.notiObj)
                    .subscribe((res) => { }, (err => { console.log(err); }));
            }
        });
        // this.apiService.updateNotificationData(id, {STATUS: 3});
    }
};
NotificationPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationPage);



/***/ }),

/***/ 31435:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 89034:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>notification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-grid>\n    <ion-row> \n      <ion-col size=\"3\">Name</ion-col>\n      <ion-col>Need</ion-col>\n      <ion-col>Cost</ion-col>\n      <ion-col>Address</ion-col>\n      <ion-col>Status</ion-col>\n      <ion-col>action</ion-col>\n    </ion-row>\n    <ion-row > \n      <ion-col>S.No</ion-col>\n      <ion-col>Name</ion-col>\n      <ion-col>Gender</ion-col>\n      <ion-col>Country</ion-col>\n      <ion-col>Gender</ion-col>\n      <ion-col>Country</ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid>\n    <ion-row *ngFor=\"let n of notiData\"> \n      <ion-col>\n        <ion-label>\n          Name\n        </ion-label>\n        <div  >\n        {{n.NAME}}\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-label>\n          Need\n        </ion-label>\n        <div>\n          {{n.NEED}}\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-label>\n          Cost\n        </ion-label>\n         <div>\n          {{n.COST}}\n        </div>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-label>\n          Address\n        </ion-label>\n         <div >\n            isjoasd\n        </div>\n      </ion-col> -->\n     \n      <ion-col>\n        <ion-label>\n          Status\n        </ion-label>\n         <div *ngIf=\"n.STATUS === 1\">\n            Active\n        </div>\n        <div *ngIf=\"n.STATUS === 2\">\n          Approved\n      </div>\n      <div *ngIf=\"n.STATUS === 3\">\n        Rejected\n    </div>\n    \n      </ion-col>\n      <ion-col>\n        <ion-label>\n          Action\n        </ion-label>\n         <div *ngIf=\"n.STATUS === 1\">\n          <ion-button (click)=\"clickAccpet(n._id)\">Accept</ion-button>\n          <ion-button (click)=\"clickReject(n._id)\">Reject</ion-button>\n          <ion-button (click)=\"presentAlert(n._id, n.COST)\">Increase Bid Amount</ion-button>\n        </div>\n        \n        <div *ngIf=\"n.STATUS === 3\">\n          <ion-label>Rejected</ion-label>\n        </div>\n      </ion-col>\n      <div>\n        <ion-row>Your Bid Amount: {{n.TOTAL_AMOUNT}}</ion-row>\n      </div>\n    </ion-row>\n   \n  </ion-grid>\n\n\n    \n    \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_notification_notification_module_ts-es2015.js.map