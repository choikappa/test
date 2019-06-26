(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/admin/outbound-module/enums/access-key-type.enum.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/outbound-module/enums/access-key-type.enum.ts ***!
  \*********************************************************************/
/*! exports provided: AccessKeyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessKeyType", function() { return AccessKeyType; });
var AccessKeyType;
(function (AccessKeyType) {
    AccessKeyType["oneTimeWirePayment"] = "oneTimeWirePayment";
})(AccessKeyType || (AccessKeyType = {}));


/***/ }),

/***/ "./src/app/admin/outbound-module/enums/bulk-upload-page-type.enum.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/outbound-module/enums/bulk-upload-page-type.enum.ts ***!
  \***************************************************************************/
/*! exports provided: BulkUploadPageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkUploadPageType", function() { return BulkUploadPageType; });
var BulkUploadPageType;
(function (BulkUploadPageType) {
    BulkUploadPageType["initiatePayout"] = "initiatePayout";
    BulkUploadPageType["oneTimeBulkPayout"] = "oneTimeBulkPayout";
})(BulkUploadPageType || (BulkUploadPageType = {}));


/***/ }),

/***/ "./src/app/admin/outbound-module/enums/dispute-page-type.enum.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/outbound-module/enums/dispute-page-type.enum.ts ***!
  \***********************************************************************/
/*! exports provided: DisputePageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisputePageType", function() { return DisputePageType; });
var DisputePageType;
(function (DisputePageType) {
    DisputePageType["createDispute"] = "createDispute";
    DisputePageType["editDispute"] = "editDispute";
})(DisputePageType || (DisputePageType = {}));


/***/ }),

/***/ "./src/app/admin/outbound-module/enums/index.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/outbound-module/enums/index.ts ***!
  \******************************************************/
/*! exports provided: BulkUploadPageType, DisputePageType, PayoutHistoryPageType, UserRoleType, AccessKeyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispute_page_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispute-page-type.enum */ "./src/app/admin/outbound-module/enums/dispute-page-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisputePageType", function() { return _dispute_page_type_enum__WEBPACK_IMPORTED_MODULE_0__["DisputePageType"]; });

/* harmony import */ var _payout_history_page_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payout-history-page-type.enum */ "./src/app/admin/outbound-module/enums/payout-history-page-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayoutHistoryPageType", function() { return _payout_history_page_type_enum__WEBPACK_IMPORTED_MODULE_1__["PayoutHistoryPageType"]; });

/* harmony import */ var _bulk_upload_page_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulk-upload-page-type.enum */ "./src/app/admin/outbound-module/enums/bulk-upload-page-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BulkUploadPageType", function() { return _bulk_upload_page_type_enum__WEBPACK_IMPORTED_MODULE_2__["BulkUploadPageType"]; });

/* harmony import */ var _user_role_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-role-type.enum */ "./src/app/admin/outbound-module/enums/user-role-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRoleType", function() { return _user_role_type_enum__WEBPACK_IMPORTED_MODULE_3__["UserRoleType"]; });

/* harmony import */ var _access_key_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-key-type.enum */ "./src/app/admin/outbound-module/enums/access-key-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessKeyType", function() { return _access_key_type_enum__WEBPACK_IMPORTED_MODULE_4__["AccessKeyType"]; });








/***/ }),

/***/ "./src/app/admin/outbound-module/enums/payout-history-page-type.enum.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/outbound-module/enums/payout-history-page-type.enum.ts ***!
  \******************************************************************************/
/*! exports provided: PayoutHistoryPageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutHistoryPageType", function() { return PayoutHistoryPageType; });
var PayoutHistoryPageType;
(function (PayoutHistoryPageType) {
    PayoutHistoryPageType["payoutHistoryList"] = "payoutHistoryList";
    PayoutHistoryPageType["editDisputePayout"] = "editDisputePayout";
})(PayoutHistoryPageType || (PayoutHistoryPageType = {}));


/***/ }),

/***/ "./src/app/admin/outbound-module/enums/user-role-type.enum.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/outbound-module/enums/user-role-type.enum.ts ***!
  \********************************************************************/
/*! exports provided: UserRoleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleType", function() { return UserRoleType; });
var UserRoleType;
(function (UserRoleType) {
    UserRoleType["cibcSystem"] = "CIBC_SYSTEM";
})(UserRoleType || (UserRoleType = {}));


/***/ }),

/***/ "./src/app/admin/user/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/user/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-dim-success {\r\n    background: #8faa61;\r\n    min-width: 120px;\r\n    color: #fff;\r\n    border-radius: 3px;\r\n    margin: 0 5px;\r\n    border: solid 2px #8faa61;\r\n    text-transform: uppercase;\r\n    letter-spacing: .5px;\r\n}\r\n\r\n.change-from {\r\n    border: 1px solid #ccc;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    color: #93A1AD;\r\n    /* background-color: #374C61; */\r\n    box-shadow: none;\r\n    margin-bottom: 20px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.history_detail_block{\r\n\r\nbackground-color: #f2f2f2;\r\ntext-align: left;\r\nborder-radius: 7px;\r\npadding: 10px 20px;\r\nmargin-bottom: 20px;\r\nmargin-top: 10px;\r\n}\r\n\r\n.span_div {\r\ndisplay: table;\r\nwidth: 100%;\r\nmargin: 2% 0%;\r\ntext-align: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/user/change-password/change-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/user/change-password/change-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form role=\"form\"> -->\r\n  <div class=\"panel-body\">\r\n    <!-- <form name=\"frmForgotPassword\" novalidate> -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"change-pwd\">\r\n            <span class=\"\">{{ 'change_password' | translate }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"changePassword\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label *ngIf=\"data&&!data.update_page\">{{ 'label_old_pwd' | translate }}</label>\r\n            <span *ngIf=\"data&&!data.update_page\">\r\n                <input type=\"password\" placeholder=\"{{ 'label_old_pwd' | translate }}\"   class=\"form-control change-from\" formControlName=\"old_password\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && t.old_password.errors }\"  autocomplete=\"off\">  \r\n                <div *ngIf=\"t.old_password.errors\" class=\"invalid-feedback\">\r\n                    <!-- <div *ngIf=\"(!f.old_password.errors.required) && f.old_password.errors.pattern\" [innerHTML] =\"'student_pwd_required_error' | translate\">\r\n                      </div> -->\r\n                    <div *ngIf=\"submitted && t.old_password.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"t.old_password.errors.required\">{{ 'old_password_error' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n              </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>{{ 'label_newpwd' | translate }}</label>\r\n            <span>\r\n               <input type=\"password\" placeholder=\"{{ 'label_newpwd' | translate }}\"   class=\"form-control change-from\" formControlName=\"new_password\"\r\n               [ngClass]=\"{ 'is-invalid': submitted && t.new_password.errors }\"  autocomplete=\"off\"> \r\n               <div *ngIf=\"t.new_password.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"t.new_password.errors.pattern\">{{'paswd_not_met' | translate}}\r\n                    </div>\r\n                  <div *ngIf=\"submitted  && t.new_password.errors && t.new_password.value==''\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"t.new_password.errors.required\">{{ 'password_error' | translate }}</div>\r\n                  </div>\r\n              </div>\r\n             </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>{{ 'label_conformpwd' | translate }}</label>\r\n            <span>\r\n                <input type=\"password\" placeholder=\"{{ 'label_conformpwd' | translate }}\" class=\"form-control change-from\"\r\n                  formControlName=\"confirm_password\" [ngClass]=\"{ 'is-invalid': submitted && t.confirm_password.errors }\"  autocomplete=\"off\">\r\n                <div *ngIf=\"t.confirm_password.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"t.confirm_password.errors.pattern\">\r\n                      {{'pswd_not_met' | translate}}</div>\r\n                      <div *ngIf=\"submitted && t.confirm_password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"t.confirm_password.errors.required\">{{ 'confirm_password_error' | translate }}</div>\r\n                      </div>\r\n                </div>\r\n              </span>\r\n        </div>\r\n\r\n\r\n      <!-- <div class=\"history_detail_block\">\r\n      \r\n          <label *ngIf=\"data&&!data.update_page\">{{ 'label_old_pwd' | translate }}</label>\r\n          <span *ngIf=\"data&&!data.update_page\">\r\n             <input type=\"password\" placeholder=\"{{ 'label_old_pwd' | translate }}\"   class=\"form-control change-from\" id=\"old_password\"\r\n               name=\"old_password\" required pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}\"  autocomplete=\"off\">  \r\n              <div *ngIf=\"passwordError\" style=\"color:red\" ng-show=\"frmForgotPassword.password.$dirty && frmForgotPassword.password.$invalid\">{{'old_password_error' | translate}}\r\n              </div>\r\n           </span>\r\n     <label>{{ 'label_newpwd' | translate }}</label>\r\n     <span>\r\n        <input type=\"password\" placeholder=\"{{ 'label_newpwd' | translate }}\"   class=\"form-control change-from\" id=\"password\"\r\n          name=\"password\" required pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}\"  autocomplete=\"off\">  \r\n      </span>\r\n      <label>{{ 'label_conformpwd' | translate }}</label>\r\n    <span>\r\n        <input type=\"password\" placeholder=\"{{ 'label_conformpwd' | translate }}\" class=\"form-control change-from\"\r\n          id=\"confirm_password\" name=\"confirm_password\" required pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}\"  autocomplete=\"off\">\r\n      </span>\r\n      <span id='message'></span>\r\n    </div> -->\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div style=\"color:red\" ng-show=\"frmForgotPassword.password.$dirty && frmForgotPassword.password.$invalid\">\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n          <div style=\"color:red\" ng-show=\"frmForgotPassword.confirm_password.$dirty && frmForgotPassword.confirm_password.$invalid\">\r\n            <span></span>\r\n            <span></span>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"span_div\">\r\n            <span class=\"btn btn-dim-success\">\r\n              <button type=\"button\" (click)=\"onSubmit()\">{{'btn_save' | translate }}</button>\r\n            </span>\r\n            <span class=\"btn btn_reject\">\r\n                <button type=\"button\" (click)=\"onCloseCancel()\">{{ 'btn_cancel' | translate }}</button>\r\n            </span>\r\n            <div *ngIf=\"Error\">\r\n                {{Error}}\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-group text-center\">\r\n          <button type=\"submit\" class=\"btn btn-dim-success\">{{ 'btn_save' | translate }}</button>\r\n          <button type=\"submit\" class=\"btn btn_reject\" (click)=\"onCloseCancel()\">{{ 'btn_cancel' | translate }}</button>\r\n        </div>\r\n      </form>\r\n    <!-- </form> -->\r\n  </div>\r\n<!-- </form>   -->\r\n\r\n  \r\n\r\n \r\n  \r\n"

/***/ }),

/***/ "./src/app/admin/user/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/user/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/config/api.config */ "./src/app/common/config/api.config.ts");
/* harmony import */ var _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/apiservice.service */ "./src/app/common/services/apiservice.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../login/login.service */ "./src/app/admin/login/login.service.ts");
/* harmony import */ var _login_login_encryption_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login/login.encryption.service */ "./src/app/admin/login/login.encryption.service.ts");
/* harmony import */ var _common_DTO_user_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/DTO/user-details */ "./src/app/common/DTO/user-details.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formbuilder, thisDialogRef, data, service, objencrypt, login) {
        this.formbuilder = formbuilder;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.service = service;
        this.objencrypt = objencrypt;
        this.login = login;
        this.submitted = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        // console.log(this.data);
        this.changePassword = this.formbuilder.group({
            old_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)])],
            new_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)])],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)])]
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "t", {
        get: function () { return this.changePassword.controls; },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.Error = '';
        // if(this.changePassword.invalid){
        //   this.login.errorMsg('password mismatch');
        // }
        var userDetails = this.login.getGlobalLoginDetails();
        var args = {
            user_id: this.data.student_id,
            is_update_by_someone: this.data.update_page,
            password: this.objencrypt.encrypt(this.changePassword.value.new_password),
        };
        if (!this.data.update_page) {
            args.old_password = this.objencrypt.encrypt(this.changePassword.value.old_password);
        }
        if (this.changePassword.value.new_password && this.changePassword.value.new_password !== this.changePassword.value.confirm_password) {
            this.changePassword.value.confirm_password = '';
            this.login.errorMsg('Password does not match');
            // tslint:disable-next-line:max-line-length
        }
        else if (this.changePassword.value.old_password && this.changePassword.value.old_password === this.changePassword.value.new_password) {
            this.login.errorMsg('Old password and new password are equal');
        }
        else {
            this.service.putCall(_common_config_api_config__WEBPACK_IMPORTED_MODULE_2__["adminApi"].ispupdateOwnPassword, args).subscribe(function (response) {
                if (response.status === 1) {
                    _this.login.successMsg('Profile Updated Successfully');
                    _this.thisDialogRef.close('Cancel');
                }
                else {
                    if (!_this.isCancel && response && response.message && response.message) {
                        _this.login.errorMsg(response.message.message);
                    }
                }
            });
        }
        // this.login.successMsg('password missmatch');
    };
    ChangePasswordComponent.prototype.onCloseCancel = function () {
        this.isCancel = true;
        this.thisDialogRef.close('Cancel');
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/admin/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/admin/user/change-password/change-password.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _common_DTO_user_details__WEBPACK_IMPORTED_MODULE_6__["UserDetail"],
            _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"],
            _login_login_encryption_service__WEBPACK_IMPORTED_MODULE_5__["LoginEncryptionService"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_4__["loginService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/create-user/create-user.component.css":
/*!******************************************************************!*\
  !*** ./src/app/admin/user/create-user/create-user.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-backdrop {\r\n  z-index: -1;\r\n}\r\n.btn-success{\r\n \r\n  width: 100px;\r\n}\r\n.btn-danger{\r\n margin-left: 50px;\r\n width: 100px;\r\n}\r\n.modal {\r\n  text-align: center;\r\n  padding: 0!important;\r\n}\r\n.modal:before {\r\n  content: '';\r\n  display: inline-block;\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  margin-right: -4px; /* Adjusts for spacing */\r\n}\r\n.modal-dialog {\r\n  display: inline-block;\r\n  text-align: left;\r\n  vertical-align: middle;\r\n}\r\n.btn-dim-success {\r\n  background: #8faa61;\r\n  min-width: 120px;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  margin: 0 5px;\r\n  border: solid 2px #8faa61;\r\n  text-transform: uppercase;\r\n  letter-spacing: .5px;\r\n}\r\n.btn_reject {\r\n  background: #dd5b45;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  margin: 0 5px;\r\n  min-width: 120px;\r\n  border: solid 2px #dd5b45;\r\n  text-transform: uppercase;\r\n  letter-spacing: .5px;\r\n}\r\n.user-error-message{\r\n  float: right;\r\n}\r\n.body{\r\n  font-size: 15px;\r\n}\r\n#campus[multiple], #campus[size] {\r\n  max-height: 82px !important;\r\n}"

/***/ }),

/***/ "./src/app/admin/user/create-user/create-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/user/create-user/create-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row breadcrumb_block\">\r\n  \r\n    <a [routerLink]=\"['/viewuser']\" [routerLinkActive]=\"['active']\">\r\n  <!-- <a href=\"/viewuser\"> -->\r\n    <img src=\"assets/image/user_icon.png\">\r\n    <span class=\"nav-label padlf-10\"> {{ 'nav_users' | translate }} </span>\r\n  </a>\r\n  <a href=\"\">\r\n    <img src=\"assets/image/nxtarrw.png\">\r\n    <span class=\"\"></span>\r\n  </a>\r\n  <a [routerLink]=\"['/createUser']\" [routerLinkActive]=\"['active']\">\r\n  <!-- <a href=\"/createUser\"> -->\r\n    <img src=\"\">\r\n    <span *ngIf=\"modifyUser != true && updateUserProfile != true\" class=\"nav-label\"> {{ 'lbl_usercreation' | translate }} </span>\r\n  </a>\r\n  <a [routerLink]=\"['/modifyUser']\" [routerLinkActive]=\"['active']\">\r\n  <!-- <a href=\"/modifyUser\"> -->\r\n    <img src=\"\">\r\n    <span class=\"nav-label\" *ngIf=\"modifyUser == true\"> {{ 'label_update_user' | translate }} </span>\r\n  </a>\r\n  <a [routerLink]=\"['/updateUserProfile']\" [routerLinkActive]=\"['active']\">\r\n  <!-- <a href=\"/updateUserProfile\"> -->\r\n    <img src=\"\">\r\n    <span class=\"nav-label\" *ngIf=\"updateUserProfile == true\"> {{ 'label_profile_update' | translate }} </span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"wrapper-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 no_padding\">\r\n      <div class=\"panel panel-default edit_user_block\">\r\n        <div class=\"panel-heading\" *ngIf=\"modifyUser != true && updateUserProfile != true\">\r\n          <span> {{ 'lbl_usercreation' | translate }} </span>\r\n        </div>\r\n        <!-- <div class=\"panel-heading\" *ngIf=\"modifyUser == true\">\r\n            <span>Edit User</span>\r\n          </div> -->\r\n          <div class=\"panel-heading\" *ngIf=\"modifyUser == true\">\r\n            <span> {{ 'label_edit_user' | translate }} </span>\r\n            <!-- <button class=\"btn del_btn\" data-toggle=\"modal\" data-target=\"#deleteModal\"  *ngIf=\"hasPermission('userDelete')\" data-hover=\"tooltip\" title=\"Delete User\">\r\n              <img src=\"assets/image/delete_icon.svg\">\r\n            </button> -->\r\n            <button class=\"btn del_btn\" data-hover=\"tooltip\" title=\"Delete User\" [disabled]=\"!userDetails.active\" *ngIf=\"hasPermission('userDelete')\"  data-toggle=\"modal\" data-target=\"#deleteModal\">\r\n              <img src=\"assets/image/delete_icon.svg\">\r\n            </button>\r\n            <button class=\"btn recycle_btn\" data-toggle=\"modal\" data-target=\"#changePasswordModal\"  *ngIf=\"hasPermission('updatePassword')\" data-hover=\"tooltip\" title=\"Change Password\" (click)=\"openDialog()\">\r\n              <img src=\"assets/image/recycle_icon.svg\">\r\n            </button>\r\n          </div>\r\n        <div class=\"panel-heading\" *ngIf=\"updateUserProfile == true\">\r\n          <span> {{ 'label_profile_edit' | translate }} </span>\r\n          \r\n          <button class=\"btn recycle_btn\" data-toggle=\"modal\" data-target=\"#changePasswordModal\" data-hover=\"tooltip\" title=\"Change Password\" (click)=\"openDialog()\">\r\n            <img src=\"assets/image/recycle_icon.svg\">\r\n          </button>\r\n        </div>\r\n        <div class=\"panel-body\" *ngIf=\"userDetails\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-10 center-block no-float\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-5 col-md-5 col-sm-5\">\r\n                    <h1> {{ 'label_personal_information' | translate }} </h1>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"firstName\" class=\"mandatory\"> {{ 'label_first_name' | translate }} </label>\r\n                      <span class=\"user-error-message\" *ngIf=\"firstNameError\" style=\"color: red\"> {{ 'label_valid_first_name' | translate }} </span>\r\n                      <input type=\"text\" name=\"firstname\" class=\"form-control common-text-feild\" id=\"firstName\" [(ngModel)]=\"userDetails.first_name\"\r\n                        (focusout)=\"validate($event.target.value, 'first_name')\" validation=\"required\" maxlength=\"32\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"lastName\" class=\"mandatory\"> {{ 'label_last_name' | translate }} </label>\r\n                      <span class=\"user-error-message\" *ngIf=\"lastNameError\" style=\"color: red\"> {{ 'label_valid_last_name' | translate }} </span>\r\n                      <input type=\"text\" name=\"lastname\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"userDetails.last_name\"\r\n                      validation=\"required\" maxlength=\"32\" (focusout)=\"validate($event.target.value, 'last_name')\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"phone_no\" class=\"mandatory\"> {{ 'label_phone_number' | translate }} </label>\r\n                      <span class=\"user-error-message\" *ngIf=\"phoneNoError\" style=\"color: red\"> {{ 'label_valid_phone_number' | translate }} </span>\r\n                      <input type=\"text\" name=\"phoneno\" class=\"form-control\" id=\"phone_no\" [(ngModel)]=\"userDetails.phone_no\"\r\n                      validation=\"required|phone_num|min_len:3\" maxlength=\"15\" (focusout)=\"validate($event.target.value, 'phone_no')\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-2 col-md-2 col-sm-1 text-center hidden-xs\">\r\n                    <div class=\"separator\"></div>\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-5 col-md-5 col-sm-5 \" [ngClass]=\"{'create_user': !campusList || campusList.length===0}\">\r\n                    <h1> {{ 'label_account_information' | translate }} </h1>\r\n                    <label class=\"mandatory\" for=\"email\" translate>{{ 'label_email_id' | translate }}</label>\r\n                    <span class=\"user-error-message\" *ngIf=\"emailError\" style=\"color: red\"> {{ 'label_valid_email_id' | translate }} </span>\r\n                    <div *ngIf=\"!modifyUser && !updateUserProfile\" class=\"input-group form-group\">\r\n                      <input validation=\"required|email_prefix|max_len:40\" type=\"text\" name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"\"\r\n                        [(ngModel)]=\"userDetails.email\" maxlength=\"40\" (focusout)=\"validate($event.target.value, 'email')\">\r\n\r\n                      <!-- <span class=\"input-group-addon\" id=\"basic-addon2\">@\r\n                        <select class=\"select_no_border\"  name=\"emailDomain\" [(ngModel)]=\"domain_selected\" validation=\"required\">\r\n                          <option *ngFor=\"let d of domain\" value=\"{{d}}\">{{d}}</option>\r\n                        </select>\r\n                      </span> -->\r\n\r\n                    </div>\r\n                    <div *ngIf=\"modifyUser || updateUserProfile\" class=\"input-group form-group\">\r\n                      <input validation=\"required|email_prefix|max_len:40\" type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\r\n                        [(ngModel)]=\"userDetails.email\" maxlength=\"40\" disabled>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"! modifyUser && ! updateUserProfile\" class=\"form-group\">\r\n                      <label for=\"role_type\" class=\"mandatory\"> {{ 'label_user_role' | translate }} </label>\r\n                      <select class=\"form-control drop_down\" id=\"role_type\" name=\"role_type\" [(ngModel)]=\"userDetails.role_type\"  validation=\"required\" (change)=\"roleChange($event.target.value)\">\r\n                        <option >{{'label_select_option' | translate}}</option>\r\n                        <option *ngFor=\"let user of userList\" [value]=\"user.role_type\">{{user.display_name | translate}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div *ngIf=\"updateUserProfile\" class=\"form-group\">\r\n                      <label for=\"role_type\" class=\"mandatory\"> {{ 'label_user_role' | translate }} </label>\r\n                      <select disabled class=\"form-control drop_down\" id=\"role_type\" name=\"role_type\" validation=\"required\" (change)=\"roleChange($event.target.value)\">\r\n                        <option *ngFor=\"let user of userList\" [value]=\"user.role_type\" [selected]=\"user.role_type == userDetails.role_type\" >{{user.display_name | translate}}</option>\r\n                      </select>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"modifyUser\" class=\"form-group\">\r\n                      <label for=\"role_type\" class=\"mandatory\"> {{ 'label_user_role' | translate }} </label>\r\n                      <select class=\"form-control drop_down\" id=\"role_type\" name=\"role_type\" validation=\"required\" (change)=\"roleChange($event.target.value)\">\r\n                        <option *ngFor=\"let user of userList\" [value]=\"user.role_type\" [selected]=\"user.role_type == userDetails.role_type\" >{{user.display_name | translate}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"userDetails && userDetails.role_type &&userDetails.role_type=='FEE_ADMIN' && accessDetails && accessDetails.multipleLevelApproval\">\r\n                        <label for=\"role_type\" class=\"mandatory\" translate>label_second_role</label>\r\n                        <select [disabled]=\"updateUserProfile\"class=\"form-control drop_down\" name=\"subRole\" [(ngModel)]=\"userDetails.subRole\" validation=\"required\">\r\n                            <option [disabled]=\"updateUserProfile\" value=''>--Select--</option>\r\n                          <option *ngFor=\"let subRoleItem of subRoles\" [ngValue]=\"subRoleItem\" >{{subRoleItem.display_name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div *ngIf=\"! modifyUser  && ! updateUserProfile\" class=\"form-group\">\r\n                      <label for=\"language\" class=\"mandatory\"> {{ 'lbl_language' | translate }} </label>\r\n                      <select class=\"form-control drop_down\" id=\"language\" name=\"language\" validation=\"required\" [(ngModel)]=\"userDetails.user_language_code\" (change)=\"onLangChange($event)\" >\r\n                       <option *ngFor=\"let lang of universitySupportLanguages\" value=\"{{ lang }}\">{{getLanguageTitle(lang)}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div  *ngIf=\"modifyUser || updateUserProfile\" class=\"form-group\">\r\n                      <label for=\"language\" class=\"mandatory\"> {{ 'lbl_language' | translate }} </label>\r\n                      <select class=\"form-control drop_down\" id=\"language\" name=\"language\" validation=\"required\" (change)=\"onLangChange($event)\" [(ngModel)]=\"userDetails.user_language_code\" >\r\n                       <option *ngFor=\"let lang of universitySupportLanguages\" value=\"{{ lang }}\">{{getLanguageTitle(lang)}}</option>\r\n                      </select>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"campusList.length > 0 \" class=\"form-group campus_class\">\r\n                      <label for=\"campusList\" class=\"mandatory\"> {{ 'campus_list' | translate }} </label>\r\n                      <!--select multiple class=\"form-control drop_down\" id=\"campus\" name=\"campus\" validation=\"required\" [(ngModel)]=\"userDetails.campus\">\r\n                       <option *ngFor=\"let campus of campusList\" value=\"{{ campus.campusName }}\">{{ campus.campusName }}</option>\r\n                      </select-->\r\n                      <div class=\"form-group\" >\r\n                         <div class=\"form-control\" *ngFor=\"let campus of campusList\">\r\n                        <input id=\"{{campus.id}}\" name=\"is_active\" type=\"checkbox\" [checked]=\"campus.checked\" [(ngModel)]=\"campus.checked\"  [disabled]=\"campus.disabled\" value=\"false\" (change)=\"updateCampus(campus.campusName,campus.checked)\">\r\n                        <label for=\"{{campus.id}}\" class=\"pull-left\">\r\n                          <span></span>\r\n                        </label>\r\n                        <span class=\"pull-left ng-binding\">{{campus.campusName | translate}}</span>\r\n                      </div>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" style=\"display: flex;align-items: center; margin-top: 20px;\" *ngIf=\"profiledisable\" >\r\n\r\n                      <label for=\"language\"> {{ 'label_disabled_caps' | translate }} </label>\r\n                      <input id=\"is_active\" name=\"is_active\" type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"userDetails.active\" [checked]=\"userDetails.active\">\r\n                      <label for=\"is_active\">\r\n                        <span style=\"margin-left: 10px;\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"!updateUserProfile\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\" *ngIf=\"defaultRoles\">\r\n                    <fieldset class=\"scheduler-border\">\r\n                      <legend class=\"scheduler-border\" translate=\"\">\r\n                        <span> {{ 'label_functions' | translate }} </span>\r\n                      </legend>\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                        <div class=\"form-group\" *ngFor=\"let role of defaultRoles\">\r\n                          <ng-container *ngIf=\"role.access_key !== AccessKeyType.oneTimeWirePayment\">\r\n                            <input id=\"{{role._id}}\" name=\"is_active\" type=\"checkbox\" [checked]=\"role.checked\"\r\n                                   [(ngModel)]=\"role.checked\" [disabled]=\"role.disabled\" value=\"false\"\r\n                                   (change)=\"updateRoles(role.access_key,role.checked)\">\r\n                            <label for=\"{{role._id}}\" class=\"pull-left\">\r\n                              <span></span>\r\n                            </label>\r\n                          <span class=\"pull-left ng-binding\">{{role.displayName | translate}}</span>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"this.userRoles.length>0\">\r\n                        <div class=\"form-group \">\r\n                          <b> {{ 'nav_users' | translate }} </b>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngFor=\"let role of userRoles\">\r\n                          <input id=\"{{role._id}}\" name=\"is_active\" type=\"checkbox\" [checked]=\"role.checked\" [(ngModel)]=\"role.checked\" value=\"false\"  [disabled]=\"role.disabled\"  (change)=\"updateRoles(role.access_key,role.checked)\">\r\n\r\n                          <ng-container *ngIf=\"role.access_key !== AccessKeyType.oneTimeWirePayment\">\r\n                            <input id=\"{{role._id}}\" name=\"is_active\" type=\"checkbox\" [checked]=\"role.checked\"\r\n                                   [(ngModel)]=\"role.checked\" value=\"false\"\r\n                                   (change)=\"updateRoles(role.access_key,role.checked)\">\r\n                            <label for=\"{{role._id}}\" class=\"pull-left\">\r\n                              <span></span>\r\n                            </label>\r\n                          <span class=\"pull-left ng-binding\">{{role.displayName | translate}}</span>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"this.tranRoles.length>0\">\r\n                        <div class=\"form-group\">\r\n                          <b> {{ 'transaction_label' | translate }} </b>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngFor=\"let role of tranRoles\">\r\n                          <ng-container *ngIf=\"role.access_key !== AccessKeyType.oneTimeWirePayment\">\r\n                            <input id=\"{{role._id}}\" name=\"is_active\" type=\"checkbox\" [checked]=\"role.checked\"\r\n                                   [(ngModel)]=\"role.checked\" value=\"false\"\r\n                                   (change)=\"updateRoles(role.access_key,role.checked)\">\r\n                            <label for=\"{{role._id}}\" class=\"pull-left\">\r\n                              <span></span>\r\n                            </label>\r\n                          <span class=\"pull-left ng-binding\">{{role.displayName | translate}}</span>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"this.outboundTranRoles.length>0\">\r\n                        <div class=\"form-group\">\r\n                          <b>Transaction - Outbound</b>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngFor=\"let role of outboundTranRoles | outboundFunctionFilter :  AccessKeyType.oneTimeWirePayment\">\r\n                          <input id=\"{{role._id}}\" name=\"is_active\" type=\"checkbox\" [checked]=\"role.checked\"\r\n                                   [(ngModel)]=\"role.checked\" value=\"false\"\r\n                                   (change)=\"updateRoles(role.access_key,role.checked)\">\r\n                            <label for=\"{{role._id}}\" class=\"pull-left\">\r\n                              <span></span>\r\n                            </label>\r\n                            <span class=\"pull-left ng-binding\">{{role.displayName}}</span>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"this.otherRoles.length>0\">\r\n                        <div class=\"form-group\">\r\n                          <b> {{ 'label_others' | translate }} </b>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngFor=\"let role of otherRoles\">\r\n                          <ng-container *ngIf=\"role.access_key !== AccessKeyType.oneTimeWirePayment\">\r\n                            <input id=\"{{role._id}}\" name=\"is_active\" type=\"checkbox\" [checked]=\"role.checked\"\r\n                                   [(ngModel)]=\"role.checked\" value=\"false\"\r\n                                   (change)=\"updateRoles(role.access_key,role.checked)\">\r\n                            <label for=\"{{role._id}}\" class=\"pull-left\">\r\n                              <span></span>\r\n                            </label>\r\n                          <span class=\"pull-left ng-binding\">{{role.displayName | translate}}</span>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"this.reportRoles.length>0\">\r\n                        <div class=\"form-group\">\r\n                          <b> {{ 'nav_reports' | translate }} </b>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngFor=\"let role of reportRoles\">\r\n                          <ng-container *ngIf=\"role.access_key !== AccessKeyType.oneTimeWirePayment\">\r\n                            <input id=\"{{role._id}}\" name=\"is_active\" type=\"checkbox\" [checked]=\"role.checked\"\r\n                                   [(ngModel)]=\"role.checked\" value=\"false\"\r\n                                   (change)=\"updateRoles(role.access_key,role.checked)\">\r\n                            <label for=\"{{role._id}}\" class=\"pull-left\">\r\n                              <span></span>\r\n                            </label>\r\n                          <span class=\"pull-left ng-binding\">{{role.displayName | translate}}</span>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </fieldset>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer text-center\">\r\n          <button type=\"submit\" class=\"btn save_btn\" (click)=\"onSubmit()\"> {{ 'btn_save' | translate }}  </button>\r\n          <button type=\"submit\" class=\"btn cancel_btn\" data-toggle=\"modal\" data-target=\"#confirmationModal\" > {{ 'btn_cancel' | translate }} </button>\r\n          <!-- (click)=\"onClear()\" -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Delete User  Modal -->\r\n<div class=\"modal fade\" id=\"deleteModal\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\r\n        <h4 class=\"modal-title\">\r\n          <strong>\r\n            <p> {{ 'label_delete_user' | translate }} </p>\r\n          </strong>\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p class=\"text-center\"> {{ 'delete_user' | translate }} </p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-dim-success text-center\" (click)=\"deleteUser()\"> {{ 'btn_yes' | translate }} </button>\r\n        <button type=\"button\" class=\"btn btn_reject text-center\" data-dismiss=\"modal\"> {{ 'btn_no' | translate }} </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Discard Changes Modal -->\r\n\r\n<div class=\"modal fade\" id=\"confirmationModal\" role=\"dialog\" data-backdrop=\"false\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\r\n          <h4 class=\"modal-title\">\r\n              <strong>\r\n                  <p> {{ 'btn_confirm' | translate }}  </p>\r\n               </strong>\r\n          </h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <p class=\"text-center body\"> {{ 'sure_discard_changes' | translate }}  </p>\r\n        </div>\r\n        <div class=\"modal-footer\" >\r\n                <a type=\"button\" class=\"btn btn-dim-success text-center btn-success\" (click)=\"onClear()\"> {{ 'btn_yes' | translate }}  </a>\r\n          <!-- <button type=\"button\" class=\"btn btn-dim-success text-center\" (click)=\"logout()\"> YES </button> -->\r\n          <a type=\"button\" class=\"btn btn_reject text-center btn-danger\" data-dismiss=\"modal\"> {{ 'btn_no' | translate }} </a></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/admin/user/create-user/create-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/user/create-user/create-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserComponent", function() { return CreateuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_DTO_user_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/DTO/user-details */ "./src/app/common/DTO/user-details.ts");
/* harmony import */ var _common_services_user_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/user-details.service */ "./src/app/common/services/user-details.service.ts");
/* harmony import */ var _common_services_user_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/user-validation.service */ "./src/app/common/services/user-validation.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login/login.service */ "./src/app/admin/login/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../change-password/change-password.component */ "./src/app/admin/user/change-password/change-password.component.ts");
/* harmony import */ var _common_config_api_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/config/api.config */ "./src/app/common/config/api.config.ts");
/* harmony import */ var _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/services/apiservice.service */ "./src/app/common/services/apiservice.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _outbound_module_enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../outbound-module/enums */ "./src/app/admin/outbound-module/enums/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { _ } from 'underscore';


var CreateuserComponent = /** @class */ (function () {
    function CreateuserComponent(router, userDetailsService, validation, loginDataProvider, service, dialog, login, route, translate) {
        this.router = router;
        this.userDetailsService = userDetailsService;
        this.validation = validation;
        this.loginDataProvider = loginDataProvider;
        this.service = service;
        this.dialog = dialog;
        this.login = login;
        this.route = route;
        this.translate = translate;
        // adminLangList: any = {};
        this.modifyUser = false;
        this.firstNameError = false;
        this.lastNameError = false;
        this.phoneNoError = false;
        this.emailError = false;
        this.roleDetails = [];
        this.userRoles = [];
        this.tranRoles = [];
        this.otherRoles = [];
        this.reportRoles = [];
        this.selectedUserRole = "";
        this.domain_selected = "georgebrown.ca";
        this.updateUserProfile = false;
        this.subRoles = [];
        this.campusList = [];
        this.outboundTranRoles = [];
        this.AccessKeyType = _outbound_module_enums__WEBPACK_IMPORTED_MODULE_11__["AccessKeyType"];
        this.subscription = login.currentLanguage.subscribe(function () {
            var lang = login.getGloballanguageSetting();
            translate.setDefaultLang(lang);
            translate.use(lang);
        });
        // translate.setDefaultLang( sessionStorage.getItem('lang'));
        // translate.use( sessionStorage.getItem('lang'));
    }
    // tslint:disable-next-line:use-life-cycle-interface
    CreateuserComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CreateuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profiledisable = true;
        var currentUrl = this.router.url;
        this.userDetails = new _common_DTO_user_details__WEBPACK_IMPORTED_MODULE_2__["UserDetail"]();
        // this.activeState = false;
        this.userDetails.active = false;
        this.accessDetails = this.loginDataProvider.getGlobalLoginDetails();
        this.universitySupportLanguages = this.accessDetails.univ_supported_lang;
        this.active = false;
        this.service.Getmethod(_common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].getSubRoles + this.accessDetails.university_id).subscribe(function (result) {
            _this.subRoles = result.data;
            // this.getUserRoles();
            _this.service.putCall(_common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].getAccess, { 'id': 'getaccess' }).subscribe(function (data) {
                _this.filterCibcSystemRoleType(data.data);
                var roleType = [];
                if (data.data && data.data.length !== 0) {
                    data.data.forEach(function (val) {
                        val.role_key = val.role_type;
                        roleType.push(val);
                    });
                }
                _this.roleType = roleType;
                var user_id = _this.route.snapshot.params['user_id'] || "";
                if (currentUrl === "/modifyUser/" + user_id) {
                    _this.modifyUser = true;
                    _this.bindUserDetails(_common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].modifyUser + "/" + user_id);
                    setTimeout(function () {
                        // this.roleChange(this.userDetails.role_type);
                    }, 1000);
                }
                else if (currentUrl === "/updateUserProfile/" + user_id) {
                    _this.profiledisable = false;
                    _this.updateUserProfile = true;
                    _this.bindUserDetails(_common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].modifyUser + "/" + user_id);
                }
                else {
                    _this.userDetailsService.clearData();
                    _this.getUserRoles();
                    _this.getCampusList();
                }
            });
            // this.adminLangList = this.translateLayoutHttpLoader.getTranslation(this.userDetails.user_language_code).data.languageCode;
            // console.log(this.adminLangList);
        });
    };
    CreateuserComponent.prototype.onLangChange = function (event) {
        // console.log(event, 'event');
        // this.selectedLang = event.target.selectedOptions[0].innerText;
        this.selectedLang = this.getLanguageTitle(event.target.value);
        if (this.selectedLang) {
            this.selectedLang = this.selectedLang.toString().trim();
        }
        // console.log(this.getLanguageTitle(event.target.value), this.selectedLang );
    };
    CreateuserComponent.prototype.bindUserDetails = function (url) {
        var _this = this;
        var userRoles = [];
        var otherRoles = [];
        var tranRoles = [];
        var reportRoles = [];
        this.service.GetmethodWithoutCatch(url).subscribe(function (modifyData) {
            var userProfile = modifyData.data;
            console.log(userProfile);
            _this.modifyAccesKeys = userProfile.access_key;
            _this.userDetails.first_name = userProfile.first_name;
            _this.userDetails.last_name = userProfile.last_name;
            _this.userDetails.phone_no = userProfile.phone_no;
            _this.userDetails.role_type = userProfile.role_type;
            _this.userDetails.email = userProfile.email;
            _this.userDetails.student_id = userProfile.user_id || userProfile.student_id;
            _this.userDetails.user_language = userProfile.language;
            _this.userDetails.user_language_code = userProfile.languageCode;
            _this.userDetails.active = !userProfile.active;
            _this.selectedLang = _this.userDetails.user_language;
            _this.userDetails.approve_role = userProfile.approve_role;
            _this.userDetails.campus = userProfile.campus ? userProfile.campus : [];
            // console.log( this.userDetails.campus);
            // tslint:disable-next-line:max-line-length
            var sub_role = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](_this.subRoles, function (json) { return userProfile && userProfile.approve_role && userProfile.approve_role[0] && userProfile.approve_role[0].display_name && json.display_name === userProfile.approve_role[0].display_name; });
            _this.userDetails.subRole = sub_role && sub_role[0] ? sub_role[0] : {};
            _this.getUserRoles();
            _this.getCampusList();
        });
    };
    CreateuserComponent.prototype.getUserRoles = function () {
        var _this = this;
        this.domain = this.accessDetails.domain;
        this.service.putCall(_common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].getRoles, { 'id': 'getrole' }).subscribe(function (data) {
            _this.roles = _this.roleList = data.data;
            //this.roleChange(null);
            _this.roleChange(_this.userDetails.role_type);
            if (data.data && data.data.length !== 0) {
                _this.bindRoles(data.data);
            }
        });
    };
    CreateuserComponent.prototype.bindRoles = function (roles) {
        var userRoles = [];
        var otherRoles = [];
        var tranRoles = [];
        var outboundTranRoles = [];
        var reportRoles = [];
        var roleDetails = this.accessDetails.university_id;
        var userDetails = this.userDetails;
        var accessDetails = this.accessDetails;
        var selectedRoleDetails = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.userList, function (json) {
            return json.role_key === userDetails.role_type;
        });
        // tslint:disable-next-line:no-shadowed-variable
        if (roles !== undefined) {
            roles.forEach(function (data) {
                // console.log('+' roleDetails);
                // data.forEach(function (v) {
                // if (this.accessDetails.university_id === roleDetails) {
                if (data.group === 'Users') {
                    data.disabled = true;
                    // tslint:disable-next-line:max-line-length
                    // if (!data.is_super_access || !(selectedRoleDetails  && selectedRoleDetails[0] && selectedRoleDetails[0].is_super_role)  || data.is_super_access && selectedRoleDetails  && selectedRoleDetails[0] && selectedRoleDetails[0].is_super_role) {
                    // tslint:disable-next-line:max-line-length
                    if ((!data.is_super_access && !(selectedRoleDetails && selectedRoleDetails[0] && selectedRoleDetails[0].is_super_role)) || data.is_super_access && selectedRoleDetails && selectedRoleDetails[0] && selectedRoleDetails[0].is_super_role) {
                        data.disabled = false;
                    }
                    userRoles.push(data);
                }
                else if (data.group === 'Transaction') {
                    if (data.access_key === 'transactionHistorySecondary' || data.access_key === 'transactionHistoryElementary'
                        || data.access_key === 'transactionHistory') {
                        if (data.access_key === 'transactionHistorySecondary' && accessDetails.is_secondary_transaction) {
                            tranRoles.push(data);
                        }
                        else if (data.access_key === 'transactionHistoryElementary' && accessDetails.is_elementary_transaction) {
                            tranRoles.push(data);
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (data.access_key === 'transactionHistory' && !accessDetails.is_secondary_transaction && !accessDetails.is_elementary_transaction) {
                            tranRoles.push(data);
                        }
                    }
                    else {
                        tranRoles.push(data);
                    }
                }
                else if (data.group === 'Others') {
                    otherRoles.push(data);
                }
                else if (data.group === 'Reports') {
                    reportRoles.push(data);
                }
                else if (data.group === 'Outbound Transaction') {
                    outboundTranRoles.push(data);
                }
                // }
                // });
                /* data.university.forEach(function (v) {
        
                   if (v.university_id === roleDetails) {
                     if (data.group === 'Users') {
                       userRoles.push(data);
                     } else if (data.group === 'Transaction') {
                       tranRoles.push(data);
                     } else if (data.group === 'Others') {
                       otherRoles.push(data);
                     } else if (data.group === 'Reports') {
                       if (data.access_key !== 'viewMonthlyManagementReport'
                         && data.access_key !== 'viewProfitabilityReport') {
                         reportRoles.push(data);
                       }
                     }
                }
              });*/
            });
        }
        this.userRoles = userRoles;
        this.tranRoles = tranRoles;
        this.otherRoles = otherRoles;
        this.reportRoles = reportRoles;
        this.outboundTranRoles = outboundTranRoles;
        if (this.modifyUser || this.updateUserProfile) {
            var modifyUserRoles_1 = [];
            var modifyOtherRoles_1 = [];
            var modifyTranRoles_1 = [];
            var modifyReportRoles_1 = [];
            // tslint:disable-next-line:no-shadowed-variable
            var userDetails_1 = this.userDetails;
            // tslint:disable-next-line:no-shadowed-variable
            var selectedRoleDetails_1 = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.userList, function (json) {
                return json.role_key === userDetails_1.role_type;
            });
            // console.log(selectedRoleDetails,'selectedRoleDetails')
            var modifyOutboundTranRoles_1 = [];
            if (this.modifyAccesKeys) {
                this.modifyAccesKeys.forEach(function (data) {
                    if (data.group === 'Users') {
                        data.disabled = true;
                        // tslint:disable-next-line:max-line-length
                        if ((!data.is_super_access && !(selectedRoleDetails_1 && selectedRoleDetails_1[0] && selectedRoleDetails_1[0].is_super_role)) || data.is_super_access && selectedRoleDetails_1 && selectedRoleDetails_1[0] && selectedRoleDetails_1[0].is_super_role) {
                            // tslint:disable-next-line:max-line-length
                            // if (!data.is_super_access || !(selectedRoleDetails  && selectedRoleDetails[0] && selectedRoleDetails[0].is_super_role)  || data.is_super_access && selectedRoleDetails  && selectedRoleDetails[0] && selectedRoleDetails[0].is_super_role) {
                            data.disabled = false;
                        }
                        modifyUserRoles_1.push(data);
                    }
                    else if (data.group === 'Transaction') {
                        // modifyTranRoles.push(data);
                        if (data.access_key === 'transactionHistorySecondary' || data.access_key === 'transactionHistoryElementary'
                            || data.access_key === 'transactionHistory') {
                            if (data.access_key === 'transactionHistorySecondary' && accessDetails.is_secondary_transaction) {
                                modifyTranRoles_1.push(data);
                            }
                            else if (data.access_key === 'transactionHistoryElementary' && accessDetails.is_elementary_transaction) {
                                modifyTranRoles_1.push(data);
                                // tslint:disable-next-line:max-line-length
                            }
                            else if (data.access_key === 'transactionHistory' && !accessDetails.is_secondary_transaction && !accessDetails.is_elementary_transaction) {
                                modifyTranRoles_1.push(data);
                            }
                        }
                        else {
                            modifyTranRoles_1.push(data);
                        }
                    }
                    else if (data.group === 'Outbound Transaction') {
                        modifyOutboundTranRoles_1.push(data);
                    }
                    else if (data.group === 'Others') {
                        modifyOtherRoles_1.push(data);
                    }
                    else if (data.group === 'Reports') {
                        modifyReportRoles_1.push(data);
                    }
                });
                this.validateModifyAccessKeys(this.userRoles, modifyUserRoles_1);
                this.validateModifyAccessKeys(this.tranRoles, modifyTranRoles_1);
                this.validateModifyAccessKeys(this.otherRoles, modifyOtherRoles_1);
                this.validateModifyAccessKeys(this.reportRoles, modifyReportRoles_1);
                this.validateModifyAccessKeys(this.outboundTranRoles, modifyOutboundTranRoles_1);
            }
        }
    };
    CreateuserComponent.prototype.validateModifyAccessKeys = function (globalRoles, receivedRoles) {
        var userDetails = this.userDetails;
        var selectedRoleDetails = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.userList, function (json) {
            return json.role_key === userDetails.role_type;
        });
        for (var i = 0; i < globalRoles.length; i++) {
            globalRoles[i].checked = false;
            for (var j = 0; j < receivedRoles.length; j++) {
                if (globalRoles[i]._id === receivedRoles[j]._id) {
                    globalRoles[i].checked = true;
                }
                if ((globalRoles[i].is_super_access && selectedRoleDetails && selectedRoleDetails[0]
                    && !selectedRoleDetails[0].is_super_role) && globalRoles[i].group === 'Users') {
                    globalRoles[i].checked = false;
                }
            }
        }
    };
    CreateuserComponent.prototype.validate = function (inputText, field) {
        if (field === "email") {
            //return (this.emailError = this.validation.commonValidations(field, `${inputText}@${this.domain_selected}`));
            return (this.emailError = this.validation.commonValidations(field, inputText));
        }
        else if (field === "phone_no") {
            this.phoneNoError = this.validation.commonValidations("number", inputText);
            return this.phoneNoError;
        }
        else if (field === "first_name") {
            this.firstNameError = this.validation.commonValidations("string", inputText);
            return this.firstNameError;
        }
        else if (field === "last_name") {
            this.lastNameError = this.validation.commonValidations("string", inputText);
            return this.lastNameError;
        }
    };
    CreateuserComponent.prototype.roleChange = function (selectedRole) {
        this.userDetails.role_type = selectedRole || this.userDetails.role_type;
        var userDetails = this.userDetails;
        this.defaultRoles = [];
        var defaultRoles = [];
        var roles = this.roles;
        var selectedRoleDetails = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.userList, function (json) {
            return json.role_key === userDetails.role_type;
        });
        console.log(this.roles, ' this.roles', 'selectedRole', selectedRole, 'userList', this.userList, selectedRoleDetails);
        if (selectedRole == null) {
            for (var i = 0; i < this.roles.length; i++) {
                this.roles[i].checked = false;
            }
            return;
        }
        this.roleType.forEach(function (val) {
            if (val.role_key === selectedRole) {
                defaultRoles = defaultRoles.concat(val.default_key);
                defaultRoles.forEach(function (value) {
                    value.checked = true;
                    value.disabled = true;
                });
                for (var i = 0; i < roles.length; i++) {
                    roles[i].checked = false;
                    for (var j = 0; j < val.access_key.length; j++) {
                        if (val.access_key[j].group !== '' && val.access_key[j].access_key === roles[i].access_key) {
                            // console.log(val.access_key[j].access_key);
                            roles[i].checked = true;
                        }
                        // console.log( roles[i],' roles[i]')
                        if ((roles[i].is_super_access && selectedRoleDetails && selectedRoleDetails[0]
                            && !selectedRoleDetails[0].is_super_role && roles[i].group === 'Users')) {
                            roles[i].checked = false;
                            roles[i].disabled = true;
                        }
                        // console.log(roles[i],'roles[i]',val)
                        if ((roles[i].is_super_access && selectedRoleDetails && selectedRoleDetails[0]
                            && selectedRoleDetails[0].is_super_role && roles[i].group === 'Users')) {
                            // roles[i].checked = false;
                            // console.log(roles[i])
                            roles[i].disabled = false;
                        }
                    }
                }
            }
        });
        this.roles = roles;
        this.defaultRoles = defaultRoles;
    };
    CreateuserComponent.prototype.updateCampus = function (campus, flag) {
        console.log(campus, flag);
        if (!this.userDetails.campus) {
            this.userDetails.campus = [];
        }
        if (flag) {
            this.userDetails.campus.push(campus);
        }
        else {
            var compusIndex = this.userDetails.campus.indexOf(campus);
            if (compusIndex !== -1) {
                this.userDetails.campus.splice(compusIndex, 1);
            }
        }
        console.log(this.userDetails.campus, 'this.userDetails.campus');
    };
    CreateuserComponent.prototype.updateRoles = function (sel, flag) {
        var roles = this.roles;
        this.roles.forEach(function (val, i) {
            if (sel === val.access_key && flag === true) {
                roles[i].checked = true;
            }
            else if (sel === val.access_key && !flag) {
                roles[i].checked = false;
            }
            if ((sel.indexOf('Password') !== -1 || sel.indexOf('User') !== -1) && val.access_key === 'userList' && flag === true) {
                roles[i].checked = true;
            }
            else if (sel.indexOf('Report') !== -1 && val.access_key === 'getReports' && flag === true) {
                roles[i].checked = true;
            }
        });
        this.roles = roles;
    };
    CreateuserComponent.prototype.getRoles = function () {
        var selectedRoles = [];
        this.defaultRoles.forEach(function (val) {
            if (true === val.checked) {
                selectedRoles.push(val._id);
            }
        });
        this.roles.forEach(function (val, i) {
            if (true === val.checked) {
                if (val.includedFunction) {
                    selectedRoles.push(val.includedFunction.includedFunction);
                }
                selectedRoles.push(val._id);
            }
        });
        return selectedRoles;
    };
    CreateuserComponent.prototype.getupdatedUserRoles = function () {
        var selectedRoles = [];
        this.defaultRoles.forEach(function (val) {
            if (true === val.checked) {
                selectedRoles.push(val._id);
            }
        });
        var sample = [this.userRoles, this.tranRoles, this.otherRoles, this.reportRoles, this.outboundTranRoles];
        for (var i = 0; i < sample.length; i++) {
            sample[i].forEach(function (val) {
                if (val.checked) {
                    selectedRoles.push(val._id);
                }
            });
        }
        return selectedRoles;
    };
    CreateuserComponent.prototype.onSubmit = function () {
        var apiCall;
        var new_email;
        if (this.modifyUser || this.updateUserProfile) {
            apiCall = _common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].updateUser;
            new_email = this.userDetails.email;
        }
        else {
            apiCall = _common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].createUser;
            //new_email = this.userDetails.email + '@' + this.domain_selected;
            new_email = this.userDetails.email.toLowerCase();
        }
        this.validateFields(apiCall, new_email);
    };
    CreateuserComponent.prototype.openDialog = function () {
        this.userDetails.update_page = !this.updateUserProfile;
        var dialogRef = this.dialog.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"], {
            width: '600px',
            data: this.userDetails,
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    CreateuserComponent.prototype.validateFields = function (apiCall, new_email) {
        var _this = this;
        this.university_id = this.accessDetails.university_id;
        // console.log(this.accessDetails.university_id);
        var obj = {
            email: new_email,
            active: !this.userDetails.active,
            language: this.selectedLang ? this.selectedLang : '',
            languageCode: this.userDetails.user_language_code,
            first_name: this.userDetails.first_name,
            last_name: this.userDetails.last_name,
            phone_no: this.userDetails.phone_no,
            role_type: this.userDetails.role_type,
            university_id: this.university_id,
            access_key: this.modifyUser ? this.getupdatedUserRoles() : this.getRoles(),
            student_id: this.userDetails.student_id,
            campus: this.userDetails.campus,
            newuser: true,
            approve_role: []
        };
        if (this.accessDetails.multipleLevelApproval) {
            obj.approve_role.push(this.userDetails.subRole);
        }
        // console.log(this.userDetails.active);
        // tslint:disable-next-line:max-line-length
        if (this.userDetails.email && obj.language && obj.first_name && obj.last_name && obj.phone_no && obj.role_type && !this.firstNameError
            && !this.lastNameError && !this.phoneNoError && !this.emailError) {
            if (this.campusList && this.campusList.length > 0 && (!obj.campus || obj.campus.length === 0)) {
                this.login.errorMsg(this.translate.instant('pls_fill_mandat'));
            }
            else {
                this.service.putCall(apiCall, obj).subscribe(function (response) {
                    if (response.status === 1 && !_this.updateUserProfile && !_this.modifyUser) {
                        _this.router.navigate(['/viewuser']);
                        _this.login.successMsg(_this.translate.instant('check_mail_pls'));
                    }
                    else if (response.status === 1 && (_this.updateUserProfile || _this.modifyUser)) {
                        _this.router.navigate(['/viewuser']);
                        _this.login.successMsg(_this.translate.instant('prfl_updated'));
                    }
                    else if (response.status === -1) {
                        _this.login.errorMsg(_this.translate.instant('prvd_crct_details'));
                    }
                });
            }
        }
        else {
            this.login.errorMsg(this.translate.instant('pls_fill_mandat'));
        }
    };
    CreateuserComponent.prototype.onClear = function () {
        if (this.updateUserProfile) {
            this.router.navigate(['/Home']);
        }
        else {
            this.router.navigate(['/viewuser']);
        }
    };
    CreateuserComponent.prototype.hasPermission = function (key) {
        return this.loginDataProvider.hasPermission(key);
    };
    CreateuserComponent.prototype.deleteUser = function () {
        var _this = this;
        var user_id = this.route.snapshot.params['user_id'] || "";
        var args = {
            user_id: user_id,
        };
        this.service.putCall(_common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].deleteUser + "/" + user_id, args).subscribe(function (response) {
            if (response.status === 1) {
                _this.router.navigate(['/viewuser']);
                _this.login.successMsg(_this.translate.instant('user_deleted'));
            }
            else {
                _this.router.navigate(['/viewuser']);
                _this.login.errorMsg(_this.translate.instant('deletion_error'));
            }
        });
    };
    CreateuserComponent.prototype.getLanguageTitle = function (lancode) {
        var _this = this;
        this.langList = this.userDetailsService.getLanguageList();
        this.languageOptions = lodash__WEBPACK_IMPORTED_MODULE_12__["uniq"](this.langList, 'languageCode');
        this.languageOptions.forEach(function (lang) {
            if (lang.languageCode === lancode) {
                _this.langTitle = lang.language;
            }
        });
        return this.langTitle ? this.langTitle.charAt(0).toUpperCase() + this.langTitle.substr(1).toLowerCase() : '';
    };
    CreateuserComponent.prototype.getCampusList = function () {
        var _this = this;
        var obj = {
            university_id: this.accessDetails.university_id
        };
        this.service.PostCall(_common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].campusLists, obj).subscribe(function (campusLists) {
            var campusListFinal = campusLists;
            if (campusListFinal && campusListFinal.data && campusListFinal.data.length > 0) {
                for (var i = 0; i < campusListFinal.data.length; i++) {
                    var dataToPost = {
                        campusKey: campusListFinal.data[i].campusKey,
                        campusName: campusListFinal.data[i].campusName,
                        id: i,
                        // tslint:disable-next-line:max-line-length
                        checked: (_this.userDetails && _this.userDetails.campus && _this.userDetails.campus.indexOf(campusListFinal.data[i].campusName) !== -1)
                    };
                    _this.campusList.push(dataToPost);
                }
            }
            else {
                _this.campusList = [];
            }
        });
    };
    CreateuserComponent.prototype.filterCibcSystemRoleType = function (roles) {
        var result = [];
        lodash__WEBPACK_IMPORTED_MODULE_12__["forEach"](roles, function (role) {
            if (role.role_type !== _outbound_module_enums__WEBPACK_IMPORTED_MODULE_11__["UserRoleType"].cibcSystem) {
                result.push(role);
            }
        });
        this.userList = result;
    };
    CreateuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createuser',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/admin/user/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/admin/user/create-user/create-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_user_details_service__WEBPACK_IMPORTED_MODULE_3__["UserDetailsService"],
            _common_services_user_validation_service__WEBPACK_IMPORTED_MODULE_4__["UserValidationService"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_5__["loginService"],
            _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_9__["ApiserviceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_5__["loginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], CreateuserComponent);
    return CreateuserComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/create-user/create-user.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/user/create-user/create-user.module.ts ***!
  \**************************************************************/
/*! exports provided: CreateuserModule, createTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserModule", function() { return CreateuserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-user/create-user.component */ "./src/app/admin/user/create-user/create-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../change-password/change-password.component */ "./src/app/admin/user/change-password/change-password.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_lib/index */ "./src/app/admin/_lib/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipe_outbound_function_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe/outbound-function-filter.pipe */ "./src/app/admin/user/create-user/pipe/outbound-function-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var routes = [
    {
        path: '',
        component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateuserComponent"]
    }
];
var CreateuserModule = /** @class */ (function () {
    function CreateuserModule() {
    }
    CreateuserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            ],
            declarations: [_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateuserComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"], _pipe_outbound_function_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["OutboundFunctionFilterPipe"]],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]],
            entryComponents: [_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"]]
        })
    ], CreateuserModule);
    return CreateuserModule;
}());

function createTranslateLoader(http) {
    return new _lib_index__WEBPACK_IMPORTED_MODULE_9__["TranslateLayoutHttpLoader"](http, '/cms/translationAdmin');
}


/***/ }),

/***/ "./src/app/admin/user/create-user/pipe/outbound-function-filter.pipe.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/user/create-user/pipe/outbound-function-filter.pipe.ts ***!
  \******************************************************************************/
/*! exports provided: OutboundFunctionFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundFunctionFilterPipe", function() { return OutboundFunctionFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OutboundFunctionFilterPipe = /** @class */ (function () {
    function OutboundFunctionFilterPipe() {
    }
    OutboundFunctionFilterPipe.prototype.transform = function (roles, roleOneTimeWirePayment) {
        return roles.filter(function (role) { return role.access_key !== roleOneTimeWirePayment; });
    };
    OutboundFunctionFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'outboundFunctionFilter'
        })
    ], OutboundFunctionFilterPipe);
    return OutboundFunctionFilterPipe;
}());



/***/ }),

/***/ "./src/app/common/services/user-validation.service.ts":
/*!************************************************************!*\
  !*** ./src/app/common/services/user-validation.service.ts ***!
  \************************************************************/
/*! exports provided: UserValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserValidationService", function() { return UserValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserValidationService = /** @class */ (function () {
    function UserValidationService() {
    }
    UserValidationService.prototype.commonValidations = function (type, data, length, isNumeric) {
        if (type === "email") {
            var isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data);
            return !isEmail;
        }
        else if (type === "number") {
            // tslint:disable-next-line:no-shadowed-variable
            var isNumeric_1 = /^\+?(0|[1-9]\d*)$/.test(data);
            return !isNumeric_1;
        }
        else if (type === "string") {
            var isString = /^([^0-9]*)$/.test(data);
            return !isString;
        }
    };
    UserValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserValidationService);
    return UserValidationService;
}());



/***/ })

}]);
//# sourceMappingURL=8.js.map