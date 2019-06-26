(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ "./src/app/admin/user/view-user/view-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/user/view-user/view-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th{\r\n  font-weight: 600 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/user/view-user/view-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/user/view-user/view-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row breadcrumb_block\">\r\n  <a href=\"/viewuser\">\r\n    <img src=\"assets/image/user_icon.png\">\r\n    <span class=\"nav-label padlf-10\"> {{ 'nav_users' | translate }} </span>\r\n  </a>\r\n  <button  class=\"btn export_report_btn\" *ngIf = \"hasPermission('createUser')\" (click)=\"createUser()\">\r\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n    <span> {{ 'lbl_usercreation' | translate }} </span>\r\n  </button>\r\n</div>\r\n<div class=\"wrapper-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 table-container table-responsive\">\r\n      <table class=\"table table-hover dash_table\">\r\n        <thead>\r\n          <tr class=\"dash_det_maintr\" height=\"60\">\r\n\r\n            <th>\r\n              <div class=\"left\"> {{ 'label_fname_small' | translate }} </div>\r\n              <div class=\"left sort-container\">\r\n                <img class=\"sort_up\" src=\"assets/image/Sort_up_0.png\" (click)=\"sortGrid('first_name',1)\" />\r\n                <img class=\"right sort_down\" src=\"assets/image/Sort_down_0.png\" (click)=\"sortGrid('first_name',-1)\" />\r\n              </div>\r\n            </th>\r\n            <th>\r\n              <div class=\"left\"> {{ 'label_lname_small' | translate }} </div>\r\n              <div class=\"left sort-container\">\r\n                <img class=\"sort_up\" src=\"assets/image/Sort_up_0.png\" (click)=\"sortGrid('last_name',1)\" />\r\n                <img class=\"right sort_down\" src=\"assets/image/Sort_down_0.png\" (click)=\"sortGrid('last_name',-1)\" />\r\n              </div>\r\n            </th>\r\n            <th>\r\n              <div class=\"left\"> {{ 'label_email_small' | translate }} </div>\r\n              <div class=\"left sort-container\">\r\n                <img class=\"sort_up\" src=\"assets/image/Sort_up_0.png\" (click)=\"sortGrid('email',1)\" />\r\n                <img class=\"right sort_down\" src=\"assets/image/Sort_down_0.png\" (click)=\"sortGrid('email',-1)\" />\r\n              </div>\r\n            </th>\r\n            <th>\r\n              <div class=\"left\"> {{ 'label_phone_num_small' | translate }} </div>\r\n              <div class=\"left sort-container\">\r\n                <img class=\"sort_up\" src=\"assets/image/Sort_up_0.png\" (click)=\"sortGrid('phone_no',1)\" />\r\n                <img class=\"right sort_down\" src=\"assets/image/Sort_down_0.png\" (click)=\"sortGrid('phone_no',-1)\" />\r\n              </div>\r\n            </th>\r\n            <th>\r\n              <div class=\"left\"> {{ 'label_role' | translate }} </div>\r\n              <div class=\"left sort-container\">\r\n                <img class=\"sort_up\" src=\"assets/image/Sort_up_0.png\" (click)=\"sortGrid('role_type',1)\" />\r\n                <img class=\"right sort_down\" src=\"assets/image/Sort_down_0.png\" (click)=\"sortGrid('role_type',-1)\" />\r\n              </div>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"userList \">\r\n          <tr class=\"dash_tr user_tr\" *ngFor=\"let user of userList\" (click)=\" hasPermission('updateUser') && modifyUser(user)\">\r\n            <td> {{user.first_name}} </td>\r\n            <td> {{user.last_name}} </td>\r\n            <td> {{user.email}} </td>\r\n            <td> {{user.phone_no}} </td>\r\n            <td> {{user.display_name}} </td>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"col-md-p5\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/user/view-user/view-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/user/view-user/view-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewuserComponent", function() { return ViewuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/user-details.service */ "./src/app/common/services/user-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/config/api.config */ "./src/app/common/config/api.config.ts");
/* harmony import */ var _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/apiservice.service */ "./src/app/common/services/apiservice.service.ts");
/* harmony import */ var _admin_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/login/login.service */ "./src/app/admin/login/login.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _outbound_module_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../outbound-module/enums */ "./src/app/admin/outbound-module/enums/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewuserComponent = /** @class */ (function () {
    function ViewuserComponent(router, service, translate, loginservice, userDetailsProvider) {
        this.router = router;
        this.service = service;
        this.translate = translate;
        this.loginservice = loginservice;
        this.userDetailsProvider = userDetailsProvider;
        this.sortfield = 'first_name1';
        this.apiCall = _common_config_api_config__WEBPACK_IMPORTED_MODULE_3__["adminApi"].adminList + "?sort_order={1}&sort_field={0}&num_results=1000&page_number=1";
        this.subscription = loginservice.currentLanguage.subscribe(function () {
            var lang = loginservice.getGloballanguageSetting();
            translate.setDefaultLang(lang);
            translate.use(lang);
        });
        // translate.setDefaultLang( sessionStorage.getItem('lang'));
        // translate.use( sessionStorage.getItem('lang'));
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ViewuserComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ViewuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(JSON.parse(sessionStorage.getItem('userData')));
        var url = this.apiCall.replace('{0}', 'first_name').replace('{1}', '1');
        url = url + '&buster=' + new Date().getTime();
        this.service.Getmethod(url).subscribe(function (data) {
            _this.filterCibcSystemRoleTypeFromUsers(data.data.users);
            _this.service.putCall(_common_config_api_config__WEBPACK_IMPORTED_MODULE_3__["adminApi"].getAccess, { 'id': 'getaccess' }).subscribe(function (accessData) {
                _this.accessList = accessData.data;
                _this.displayRoleType();
            });
        });
    };
    ViewuserComponent.prototype.displayRoleType = function () {
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var users = _a[_i];
            for (var _b = 0, _c = this.accessList; _b < _c.length; _b++) {
                var access = _c[_b];
                if (users.role_type === access.role_type) {
                    users.display_name = access.display_name;
                }
            }
        }
    };
    ViewuserComponent.prototype.hasPermission = function (key) {
        return this.loginservice.hasPermission(key);
    };
    ViewuserComponent.prototype.createUser = function () {
        this.router.navigate(['/createUser']);
    };
    ViewuserComponent.prototype.modifyUser = function (selectedRow) {
        this.userDetailsProvider.bindData(selectedRow);
        this.router.navigate(["/modifyUser/" + selectedRow.student_id]);
    };
    ViewuserComponent.prototype.sortGrid = function (fieldName, fieldType) {
        var _this = this;
        var url = this.apiCall.replace('{0}', fieldName).replace('{1}', fieldType);
        url = url + '&buster=' + new Date().getTime();
        this.service.Getmethod(url).subscribe(function (data) {
            _this.userList = data.data.users;
            _this.displayRoleType();
        });
    };
    ViewuserComponent.prototype.filterCibcSystemRoleTypeFromUsers = function (users) {
        var result = [];
        lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](users, function (user) {
            if (user.role_type !== _outbound_module_enums__WEBPACK_IMPORTED_MODULE_7__["UserRoleType"].cibcSystem) {
                result.push(user);
            }
        });
        this.userList = result;
    };
    ViewuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewuser',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/admin/user/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.css */ "./src/app/admin/user/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _admin_login_login_service__WEBPACK_IMPORTED_MODULE_5__["loginService"],
            _common_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"]])
    ], ViewuserComponent);
    return ViewuserComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/view-user/view-user.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/user/view-user/view-user.module.ts ***!
  \**********************************************************/
/*! exports provided: routes, ViewuserModule, createTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewuserModule", function() { return ViewuserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-user/view-user.component */ "./src/app/admin/user/view-user/view-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_lib/index */ "./src/app/admin/_lib/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_3__["ViewuserComponent"]
    }
];
var ViewuserModule = /** @class */ (function () {
    function ViewuserModule() {
    }
    ViewuserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_3__["ViewuserComponent"]]
        })
    ], ViewuserModule);
    return ViewuserModule;
}());

function createTranslateLoader(http) {
    return new _lib_index__WEBPACK_IMPORTED_MODULE_6__["TranslateLayoutHttpLoader"](http, '/cms/translationAdmin');
}


/***/ })

}]);
//# sourceMappingURL=7.js.map