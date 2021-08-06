(self["webpackChunkdemoApp"] = self["webpackChunkdemoApp"] || []).push([["common"],{

/***/ 6633:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createButtonActiveGesture; }
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ 97279);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 77330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ attachComponent; },
/* harmony export */   "d": function() { return /* binding */ detachComponent; }
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 52377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ hapticSelectionStart; },
/* harmony export */   "b": function() { return /* binding */ hapticSelectionChanged; },
/* harmony export */   "c": function() { return /* binding */ hapticSelection; },
/* harmony export */   "d": function() { return /* binding */ hapticImpact; },
/* harmony export */   "h": function() { return /* binding */ hapticSelectionEnd; }
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ SPINNERS; }
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createColorClasses; },
/* harmony export */   "g": function() { return /* binding */ getClassMap; },
/* harmony export */   "h": function() { return /* binding */ hostContext; },
/* harmony export */   "o": function() { return /* binding */ openURL; }
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 80534:
/*!****************************************!*\
  !*** ./src/app/Models/Notification.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": function() { return /* binding */ Notification; }
/* harmony export */ });
class Notification {
    constructor() {
        this.NAME = '';
        this.NEED = '';
        this.COST = '';
        this.ADDRESS = '';
    }
}


/***/ }),

/***/ 22782:
/*!***********************************!*\
  !*** ./src/app/Models/bwUsers.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BwUsers": function() { return /* binding */ BwUsers; }
/* harmony export */ });
class BwUsers {
    constructor() {
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
        this.online_user = null;
        this.WORK_EXPERIENCE = [];
        this.imagePath = [];
    }
}


/***/ }),

/***/ 37048:
/*!************************************!*\
  !*** ./src/app/Models/subUsers.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubUsers": function() { return /* binding */ SubUsers; }
/* harmony export */ });
class SubUsers {
    constructor() {
        this._id = '';
        this.userName = '';
        this.moNumber = '';
        this.status = '';
        this.jobType = '';
    }
}


/***/ }),

/***/ 76311:
/*!*******************************************!*\
  !*** ./src/app/services/forms.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsService": function() { return /* binding */ FormsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 29790);






let FormsService = class FormsService {
    constructor(http, router, _translate, navCtrl) {
        this.http = http;
        this.router = router;
        this._translate = _translate;
        this.navCtrl = navCtrl;
        this.baseUrl = 'https://bw-partner-server.herokuapp.com/';
        // baseUrl= 'http://localhost:3000/';
        this.language = "hin";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }
    saveFormData(formData) {
        this.http.post(this.baseUrl + 'api/forms/save', formData)
            .subscribe((data) => {
            console.log(data);
            if (data) {
                this.router.navigate(['/form-two']);
            }
        });
    }
    _translateLanguage() {
        this._translate.use(this.language);
        this.skill_for_lang = this._translate.instant("formData.skills");
        this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
        this.workExpe_for_lang = this._translate.instant("formData.workExperience");
        this.moNumber_for_lang = this._translate.instant("formData.moNumber");
        this.otp_for_lang = this._translate.instant("formData.otp");
    }
    getAllData() {
        return this.http.get(this.baseUrl + 'api/forms/get/all', this.httpOptions);
    }
    getAllJobs() {
        return this.http.get(this.baseUrl + 'api/jobs/get/all/jobs', this.httpOptions);
    }
    updateFormData(id, formData) {
        return this.http.post(this.baseUrl + 'api/forms/update/' + id, formData, this.httpOptions);
    }
    getCoreSkillsById(id) {
        return this.http.get(this.baseUrl + 'api/jobsWorkArea/' + id, this.httpOptions);
    }
    getAllCoreSkills() {
        return this.http.get(this.baseUrl + 'api/jobsWorkArea/get/all/jobsWorkArea', this.httpOptions);
    }
    getSkillsById(id) {
        return this.http.get(this.baseUrl + 'api/skills/' + id, this.httpOptions);
    }
    saveImages(adharFront, adharBack, addressProof) {
        const formData = new FormData();
        formData.append('adharFront', adharFront);
        formData.append('adharBack', adharBack);
        formData.append('addressProof', addressProof);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
        this.http.post(this.baseUrl + 'api/forms', formData, { headers }).subscribe((data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
        });
    }
    updateFormDataImages(id, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
        return this.http.put(this.baseUrl + 'api/forms/update/' + id, data, { headers });
    }
};
FormsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
FormsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], FormsService);



/***/ }),

/***/ 71155:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": function() { return /* binding */ LanguageService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 29790);




let LanguageService = class LanguageService {
    constructor(_translate, navCtrl) {
        this._translate = _translate;
        this.navCtrl = navCtrl;
        this.language = "hin";
    }
    _translateLanguage() {
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
        this.family_details_lang = this._translate.instant("formData.family_details");
        this.father_name_lang = this._translate.instant("formData.father_name");
        this.mother_name_lang = this._translate.instant("formData.mother_name");
        this.wife_name_lang = this._translate.instant("formData.wife_name");
        this.child_name_lang = this._translate.instant("formData.child_name");
        this.account_details_lang = this._translate.instant("formData.account_details");
        this.account_holder_lang = this._translate.instant("formData.acount_name");
        // this.account_details_lang = this._translate.instant("formData.account_details");
        this.account_number_lang = this._translate.instant("formData.account_number");
        this.re_account_number_lang = this._translate.instant("formData.re_account_number");
        this.ifsc_code_lang = this._translate.instant("formData.ifsc_code");
        this.mobile_number_lang = this._translate.instant("formData.mobile_number");
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController }
];
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], LanguageService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map