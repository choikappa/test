(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/app/admin/notification-settings/notification-settings.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/notification-settings/notification-settings.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/notification-settings/notification-settings.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/notification-settings/notification-settings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row breadcrumb_block\">\r\n  <a href=\"\">\r\n    <i class=\"fa fa-wrench\"></i>\r\n    <span class=\"nav-label padlf-10\"> {{ 'label_notofication_setting' | translate }} </span>\r\n  </a>\r\n</div>\r\n<div class=\"wrapper-content wrapper-content-mobile\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 no_padding\">\r\n      <div class=\"panel media_block\">\r\n        <div class=\"panel-body panel-body-mobile\">\r\n          <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <fieldset class=\"scheduler-border\">\r\n              <legend class=\"scheduler-border\">{{ 'lbl_settings_notification' | translate }} </legend>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-7 col-sm-7 mt10\">\r\n                  <label>{{ 'lbl_settings_transactioncreated' | translate }} </label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 mt10\">\r\n                    <input id=\"transaction_created\" [(ngModel)]=\"notificationSettingsList.on_create_transaction\"  (change)=\"notificationSettingsEnable()\"\r\n                    [checked]=\"notificationSettingsList.on_create_transaction\" name=\"is_active\" type=\"checkbox\">\r\n\r\n                  <!-- <input id=\"transaction_created\" (change)=\"notificationSettingsList.on_create_transaction = !notificationSettingsList.on_create_transaction\"\r\n                    [checked]=\"notificationSettingsList.on_create_transaction\" name=\"is_active\" type=\"checkbox\"> -->\r\n                  <label for=\"transaction_created\">\r\n                    <span></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-7 col-sm-7 mt10\">\r\n                  <label for=\"language\">{{ 'lbl_settings_refundinitiated' | translate }} </label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 mt10\">\r\n                   <input id=\"refund_initiated\" [(ngModel)]=\"notificationSettingsList.on_refund_initialization\" (change)=\"notificationSettingsEnable()\"\r\n                    [checked]=\"notificationSettingsList.on_refund_initialization\" name=\"is_active\" type=\"checkbox\"> \r\n                   <!-- <input id=\"refund_initiated\"  (change)=\"notificationSettingsList.on_refund_initialization = !notificationSettingsList.on_refund_initialization\"\r\n                    [checked]=\"notificationSettingsList.on_refund_initialization\" name=\"is_active\" type=\"checkbox\">  -->\r\n                  <label for=\"refund_initiated\">\r\n                    <span></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                  <div class=\"col-md-7 col-sm-7 mt10\">\r\n                    <label for=\"language\">{{ 'lbl_settings_refundinitiatedapprover' | translate }} </label>\r\n                  </div>\r\n                  <div class=\"col-md-5 col-sm-5 mt10\">\r\n                     <input id=\"refund_mail_approver_initiator_isEnable\" [(ngModel)]=\"notificationSettingsList.refund_mail_approver_initiator\" (change)=\"notificationSettingsEnable()\"\r\n                      [checked]=\"notificationSettingsList.refund_mail_approver_initiator\" name=\"is_active\" type=\"checkbox\"> \r\n                     <!-- <input id=\"refund_initiated\"  (change)=\"notificationSettingsList.on_refund_initialization = !notificationSettingsList.on_refund_initialization\"\r\n                      [checked]=\"notificationSettingsList.on_refund_initialization\" name=\"is_active\" type=\"checkbox\">  -->\r\n                    <label for=\"refund_mail_approver_initiator_isEnable\">\r\n                      <span></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n              <!-- <div class=\"form-group row\">\r\n                <div class=\"col-md-7 col-sm-7 mt10\">\r\n                  <label for=\"language\">When A Settlement Report Is Generated</label>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-5 mt10\">\r\n                  <input id=\"report_generated\" (change)=\"notificationSettingsList.on_report_generation = !notificationSettingsList.on_report_generation\"\r\n                    [checked]=\"notificationSettingsList.on_report_generation\" name=\"is_active\" type=\"checkbox\">\r\n                  <label for=\"report_generated\">\r\n                    <span></span>\r\n                  </label>\r\n                </div>\r\n              </div> -->\r\n            </fieldset>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer text-center panel-footer-mobile\">\r\n          <button type=\"submit\" class=\"btn save_btn_settings\" [disabled]=\"btnEnable\" (click)=\"saveNotificationSettings()\">{{ 'btn_save' | translate }}</button>\r\n          <!-- <button type=\"submit\" class=\"btn cancel_btn_settings\">Cancel</button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/notification-settings/notification-settings.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/notification-settings/notification-settings.component.ts ***!
  \********************************************************************************/
/*! exports provided: NotificationsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsettingsComponent", function() { return NotificationsettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/config/api.config */ "./src/app/common/config/api.config.ts");
/* harmony import */ var _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/apiservice.service */ "./src/app/common/services/apiservice.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.service */ "./src/app/admin/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsettingsComponent = /** @class */ (function () {
    function NotificationsettingsComponent(service, translate, login) {
        this.service = service;
        this.translate = translate;
        this.login = login;
        this.btnEnable = true;
        this.notificationSettingsList = {
            'on_create_transaction': false,
            'on_refund_initialization': false,
            'on_report_generation': false,
            'refund_mail_approver_initiator': false
        };
        // translate.setDefaultLang(sessionStorage.getItem('lang'));
        // translate.use(sessionStorage.getItem('lang'));
        this.subscription = login.currentLanguage.subscribe(function () {
            var lang = login.getGloballanguageSetting();
            translate.setDefaultLang(lang);
            translate.use(lang);
        });
    }
    // tslint:disable-next-line:use-life-cycle-interface
    NotificationsettingsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NotificationsettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.Getmethod(_common_config_api_config__WEBPACK_IMPORTED_MODULE_1__["adminApi"].getNotificationSettings).subscribe(function (data) {
            if (Object.keys(data.data).length !== 0) {
                _this.notificationSettingsList = data.data;
            }
        });
    };
    NotificationsettingsComponent.prototype.saveNotificationSettings = function () {
        var _this = this;
        var objNotification = this.notificationSettingsList;
        // objNotification.initiated_by_student = false;
        this.service.PostCall(_common_config_api_config__WEBPACK_IMPORTED_MODULE_1__["adminApi"].saveNotificationSettings, objNotification).subscribe(function (data) {
            if (data.status === 1) {
                _this.btnEnable = true;
                _this.notificationResponse = data;
            }
            else {
                _this.btnEnable = false;
            }
        });
    };
    NotificationsettingsComponent.prototype.notificationSettingsEnable = function () {
        this.btnEnable = false;
    };
    NotificationsettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notificationsettings',
            template: __webpack_require__(/*! ./notification-settings.component.html */ "./src/app/admin/notification-settings/notification-settings.component.html"),
            styles: [__webpack_require__(/*! ./notification-settings.component.css */ "./src/app/admin/notification-settings/notification-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _login_login_service__WEBPACK_IMPORTED_MODULE_4__["loginService"]])
    ], NotificationsettingsComponent);
    return NotificationsettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin/notification-settings/notification-settings.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/notification-settings/notification-settings.module.ts ***!
  \*****************************************************************************/
/*! exports provided: routes, NotificationsettingsModule, createTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsettingsModule", function() { return NotificationsettingsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-settings.component */ "./src/app/admin/notification-settings/notification-settings.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/index */ "./src/app/admin/_lib/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _notification_settings_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsettingsComponent"]
    }
];
var NotificationsettingsModule = /** @class */ (function () {
    function NotificationsettingsModule() {
    }
    NotificationsettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_notification_settings_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsettingsComponent"]]
        })
    ], NotificationsettingsModule);
    return NotificationsettingsModule;
}());

function createTranslateLoader(http) {
    return new _lib_index__WEBPACK_IMPORTED_MODULE_7__["TranslateLayoutHttpLoader"](http, '/cms/translationAdmin');
}


/***/ })

}]);
//# sourceMappingURL=10.js.map