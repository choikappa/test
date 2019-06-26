(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/app/admin/forgotpassword/forgotpassword.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/forgotpassword/forgotpassword.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotPassword{\r\n    color: red;\r\n}\r\n.success\r\n{\r\n    color: green;\r\n}\r\n.invalid-feedback{\r\n    color:brown\r\n}"

/***/ }),

/***/ "./src/app/admin/forgotpassword/forgotpassword.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/forgotpassword/forgotpassword.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  \r\n  <div class=\"login_main_container \">\r\n  <div class=\"container_fluid login_container_fluid\">\r\n      <div class=\"container height_100\">\r\n        <div class=\"row height_100\">\r\n          <div class=\"col-md-3 display_table login-logo\">\r\n            <div class=\"top_img_container display_table_cell\">\r\n              <img src=\"assets/image/cibc-logo.png\" class=\"img-responsive\">\r\n  \r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-8 display_table login-language\">\r\n              <a href=\"javascript:void(0)\" type=\"button\" class=\"float-right\" data-toggle=\"modal\" data-target=\"#language_Modal\">\r\n                <img src=\"assets/image/icon_02.png\" alt=\"Language\" />\r\n                <select class=\"bg-content home_menu_top lang-select\" (change)=\"changeLang($event.target.value)\"  [(ngModel)]=\"lang\">\r\n                    <!--<option value='en'>{{ 'label_english' | translate }}</option>\r\n                    <option value='fr'>{{ 'label_french' | translate }}</option>-->\r\n                    <option *ngFor=\"let languageList of languageLists\" [value]='languageList.languageCode'>{{languageList.language| translate}}</option>\r\n    \r\n                </select>\r\n              </a>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      \r\n    <div class=\"container_fluid login_container_bluebody\">\r\n        <div class=\"container display_table width_100\">\r\n          <div class=\"login_container_blue_body display_table_cell\">\r\n            <div class=\"row \">\r\n    \r\n              <div class=\"col-md-3\">\r\n                <div class=\"outer_container\">\r\n                  <div class=\"container_textpage\">\r\n                    <div class=\"panel panel-default itpp_panal\">\r\n    \r\n                      <div class=\"panel-body itpp_panal_body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                            <div class=\"login_text_container\">\r\n                              <span class=\"login_text\">{{ 'label_forgotpwd' | translate }}</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <form [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit()\">\r\n                            <div class=\"form-group\">\r\n                              <input type=\"text\" formControlName=\"email\" class=\"form-control login_input_marginbottom\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\r\n                                placeholder=\"{{ 'email_address' | translate }}\" />\r\n                        \r\n                              <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                <!-- <div *ngIf=\"f.email.errors.required\">Email Address Required</div> -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                              <div class=\"login_forgot_span_div\">\r\n                                <span class=\"login_forgot_span_text_right\">\r\n                                  <span class=\"login_forgot_span_text_right\"><button type=\"submit\" id=\"forgotPassword\">{{ 'btn_submit' | translate }}</button></span>\r\n                                  <!-- <div *ngIf=\"Error\" class=\"forgotPassword\">\r\n                                    {{Error}}\r\n                                  </div>\r\n                                  <div *ngIf=\"success\" class=\"success\">\r\n                                    {{success}}\r\n                                  </div> -->\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                        \r\n                          </form>\r\n                      </div>\r\n    \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\"></div>\r\n              <div class=\"col-md-8 hidden-xs hidden-sm\">\r\n                <div class=\"right_text_container\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"text-right_container\">\r\n                        <div class=\"easy_text_container\">\r\n                          <span class=\"easy_text\">{{ 'forgot_password_text' | translate }}</span>\r\n                        </div> \r\n                        <div class=\"easy_bottom_text_container\">\r\n                          <span class=\"easy_bottom_text\">{{ 'forgot_password_text1' | translate }}</span>\r\n                        </div>\r\n    \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container_fluid login_footer_fluid_container\">\r\n          <div class=\"container height_100\">\r\n            <div class=\"row height_100\">\r\n              <div class=\"col-md-12 display_table\">\r\n                <div class=\"footer_container_cibc display_table_cell\"> </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/forgotpassword/forgotpassword.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/forgotpassword/forgotpassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/apiservice.service */ "./src/app/common/services/apiservice.service.ts");
/* harmony import */ var _admin_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/login/login.service */ "./src/app/admin/login/login.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, objapi, objloginservice, translate) {
        this.formBuilder = formBuilder;
        this.objapi = objapi;
        this.objloginservice = objloginservice;
        this.translate = translate;
        this.submitted = false;
        this.languageLists = [];
        this.lang = 'en';
        this.lang = this.objloginservice.getLocallanguageSetting();
        translate.setDefaultLang(this.lang);
        translate.use(this.lang);
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
        this.objapi.Getmethod(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["EIAdminAPI"].languages).subscribe(function (languageList) {
            _this.languageLists = languageList.data;
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () { return this.forgotForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Error = '';
        this.success = '';
        this.submitted = true;
        if (this.forgotForm.invalid) {
            this.objloginservice.errorMsg(this.translate.instant('valid_email_id'));
            return;
        }
        var objForgot = {
            'email': this.forgotForm.value.email
        };
        if (this.objloginservice.emailValidator(this.forgotForm.value.email.toLowerCase())) {
            this.objapi.PostCall('forgotPassword', objForgot).subscribe(function (res) {
                if (res.status === 1) {
                    _this.objloginservice.successMsg(_this.translate.instant('success_msg'));
                    _this.objloginservice.LoginPath();
                }
                else {
                    // if (res.message.message_type === 2) {
                    //   this.objloginservice.successMsg('Reset password link has been sent to \n' + this.forgotForm.value.email);
                    // } else {
                    _this.objloginservice.errorMsg(_this.translate.instant(res.message.message));
                    // }
                }
            });
        }
        else {
            this.objloginservice.errorMsg(this.translate.instant('valid_email_id'));
        }
    };
    ForgotPasswordComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/admin/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/admin/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            _admin_login_login_service__WEBPACK_IMPORTED_MODULE_3__["loginService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* .loginfailed\r\n  {\r\n    color: brown;\r\n  }\r\n\r\n  .is-invalid\r\n  {\r\n    color: brown;\r\n  }\r\n\r\n  .invalid-feedback{\r\n    color: brown;\r\n  }"

/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header>  -->\r\n<!-- <button (click)=\"onLoggedin()\" value=\"Login\">Login</button> -->\r\n\r\n<!-- <app-footer></app-footer> -->\r\n\r\n\r\n<div class=\"login_main_container \">\r\n  <div class=\"container_fluid login_container_fluid\">\r\n    <div class=\"container height_100\">\r\n      <div class=\"row height_100\">\r\n        <div class=\"col-md-3 display_table login-logo\">\r\n          <div class=\"top_img_container display_table_cell\">\r\n            <img src=\"assets/image/cibc-logo.png\" class=\"img-responsive\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-8 display_table login-language\">\r\n          <a href=\"javascript:void(0)\" type=\"button\" class=\"float-right\" data-toggle=\"modal\" data-target=\"#language_Modal\">\r\n            <img src=\"assets/image/icon_02.png\" alt=\"Language\" />\r\n            <select class=\"bg-content home_menu_top lang-select\" (change)=\"changeLang($event.target.value)\" [(ngModel)]=\"lang\">\r\n              <!--<option value='en'>{{ 'label_english' | translate }}</option>\r\n                  <option value='fr'>{{ 'label_french' | translate }}</option>-->\r\n              <option *ngFor=\"let languageList of languageLists\" [value]='languageList.languageCode'>{{languageList.language| translate}}</option>\r\n\r\n            </select>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container_fluid login_container_bluebody\">\r\n    <div class=\"container display_table width_100\">\r\n      <div class=\"login_container_blue_body display_table_cell\">\r\n        <div class=\"row \">\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"outer_container\">\r\n              <div class=\"container_textpage\">\r\n                <div class=\"panel panel-default itpp_panal\">\r\n\r\n                  <div class=\"panel-body itpp_panal_body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"login_text_container\">\r\n                          <span class=\"login_text\">{{ 'label_login' | translate }}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                      <div class=\"form-group\">\r\n\r\n                        <input type=\"text\" placeholder=\"{{ 'label_user_pwd' | translate }}\" formControlName=\"Username\" class=\"form-control login_input_marginbottom\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.Username.errors }\" autocomplete=\"off\" [readonly]=\"!isIEOrEdge\"\r\n                          (focus)=\"onFocus($event)\" />\r\n                        <div *ngIf=\"submitted && f.Username.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.Username.errors.required\">{{ 'plc_hldr_email_username' | translate }}</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n\r\n                        <input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'label_password' | translate }}\" class=\"form-control login_input_marginbottom\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" autocomplete=\"off\" [readonly]=\"!isIEOrEdge\"\r\n                          (focus)=\"onFocus($event)\" />\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.password.errors.required\">{{'password_required'| translate }}</div>\r\n                          <div *ngIf=\"f.password.errors.minlength\">{{ 'login_password_error' | translate }}</div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- <span><input class=\"form-control login_input_marginbottom\" placeholder=\"Email or Username\" type=\"text\" id=\"studentIdText\" autocomplete=\"off\" name=\"username\"></span>\r\n                <span><input class=\"form-control login_input_marginbottom\" placeholder=\"Password\" type=\"password\" id=\"passwordText\"  autocomplete=\"off\" name=\"password\"></span> -->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"login_forgot_span_div\">\r\n                            <a class=\"login_forgot_span_text_left\" [routerLink]=\"['forgotpassword']\" [routerLinkActive]=\"['active']\">\r\n                              <!-- forgotpassword -->{{ 'label_forgotpwd' | translate }}\r\n                            </a>\r\n                            <span class=\"login_forgot_span_text_right\">\r\n                              <button type=\"submit\" id=\"loginPage\">{{ 'label_login' | translate }}</button>\r\n                            </span>\r\n                            <span class=\"login_forgot_span_text_right\">\r\n                              <div *ngIf=\"Error\" class=\"loginfailed\">\r\n                                {{Error}}\r\n                              </div>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-8 hidden-xs hidden-sm\">\r\n            <div class=\"right_text_container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"text-right_container\">\r\n                    <div class=\"easy_text_container\">\r\n                      <span class=\"easy_text\">{{'EI_login_bannerhead'|translate}}</span>\r\n                    </div>\r\n                    <div class=\"easy_bottom_text_container\">\r\n                      <span class=\"easy_bottom_text\"> {{'EI_login_bannercontent'| translate}}</span>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container_fluid login_footer_fluid_container\">\r\n    <div class=\"container height_100\" >\r\n      <div class=\"row height_100\">\r\n        <div class=\"col-md-12 display_table\">\r\n          <div class=\"footer_container_cibc display_table_cell\"> </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/apiservice.service */ "./src/app/common/services/apiservice.service.ts");
/* harmony import */ var _login_login_encryption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.encryption.service */ "./src/app/admin/login/login.encryption.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/admin/login/login.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _common_config_api_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/config/api.config */ "./src/app/common/config/api.config.ts");
/* harmony import */ var _outbound_module_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../outbound-module/services/data.service */ "./src/app/admin/outbound-module/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ApiserviceService } from '../../common/api/apiservice.service'








var LoginComponent = /** @class */ (function () {
    /**
     *
     * @param formBuilder  Formvalidation
     * @param router
     * @param objapi
     * @param objencrypt Encryption
     */
    function LoginComponent(formBuilder, router, objapi, loginservice, translate, objencrypt, dataService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.objapi = objapi;
        this.loginservice = loginservice;
        this.translate = translate;
        this.objencrypt = objencrypt;
        this.dataService = dataService;
        this.islogin = false;
        this.submitted = false;
        this.languageLists = [];
        this.lang = 'en';
        this.lang = this.loginservice.getLocallanguageSetting();
        translate.setDefaultLang(this.lang);
        translate.use(this.lang);
        //Dash
        translate.setDefaultLang('en');
        translate.use('en');
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isIEOrEdge = /msie\s|trident\//i.test(window.navigator.userAgent);
        // Controls initializing
        this.loginForm = this.formBuilder.group({
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
        this.loginservice.Logout();
        console.log('dashere , login');
        this.objapi.Getmethod(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["EIAdminAPI"].languages).subscribe(function (languageList) {
            console.log('dashere languageList, languageList', languageList);
            _this.languageLists = languageList.data;
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * Submitting the form to server
     *
     */
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        /*if ( this.loginForm.value.Username === '' || this.loginForm.value.password === '')
        {
        this.loginservice.errorMsg('Please Enter Credentials');
        return;
        }*/
        if (this.loginForm.invalid) {
            return;
        }
        // construct the login data
        var objLogin = {
            'password': this.msg = this.objencrypt.encrypt(this.loginForm.value.password),
            'username': this.loginForm.value.Username.toLowerCase()
        };
        /*  const objLogin = {
            'password': 'f2f7d2a4e7c1d1fcc4ef7e7968586c99aade8b5b',
            'username': 'itppuniv001@gmail.com'
          };*/
        this.loginservice.clearData();
        // posting the data
        try {
            if (this.loginservice.emailValidator(this.loginForm.value.Username.toLowerCase())) {
                this.objapi.PostCall(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["EIAdminAPI"].Login, objLogin).subscribe(function (login) {
                    _this.submitted = false;
                    if (login.status === 1) {
                        _this.loginservice.SetGlobalLoginDetails(login.data);
                        _this.objapi.GetmethodWithoutCatch(_common_config_api_config__WEBPACK_IMPORTED_MODULE_8__["adminApi"].modifyUser + "/" + login.data['user_id']).subscribe(function (userDetails) {
                            login.data.user_access = userDetails.access_key;
                            _this.loginservice.setGloballanguageSetting(_this.translate.currentLang);
                            localStorage.setItem('lang', _this.translate.currentLang);
                            if (userDetails.data['access_key'] !== null) {
                                _this.loginservice.setGlobalUserDetails(userDetails.data['access_key']);
                                _this.loginservice.hasPermission1('userList');
                            }
                            if (userDetails.data.is_update_by_someone) {
                                _this.router.navigate(['/loginresetpassword']);
                            }
                            else {
                                _this.dataService.setUser(login);
                                localStorage.setItem('isloggedin', 'true');
                                _this.router.navigate(['/Home']);
                            }
                        });
                    }
                    else {
                        if (login.message.message_type === 2) {
                            _this.loginservice.errorMsg(_this.translate.instant(login.message.message));
                        }
                        else if (login.message.message_type === 4) {
                            _this.loginservice.errorMsg(_this.translate.instant(login.message.message));
                        }
                        else {
                            _this.loginservice.errorMsg(_this.translate.instant('valid_cred'));
                        }
                    }
                });
            }
            else {
                this.loginservice.errorMsg(this.translate.instant('valid_email_id'));
            }
        }
        catch (ex) {
        }
    };
    LoginComponent.prototype.onFocus = function (evt) {
        console.log(evt);
        evt.target.removeAttribute('readonly');
        // evt.target.autofocus = true;
    };
    /**
     *
     *  Need to comment the below method
     */
    LoginComponent.prototype.onLoggedin = function () {
        var _this = this;
        this.msg = this.objencrypt.encrypt('p@$$w0rd');
        var objLogin = {
            'appKey': 'c46dc602-84a9',
            'password': 'ng ',
            'token': 'undefined',
            'univCode': 'GBC1',
            'username': 'itppuniv001@gmail.com1'
        };
        this.objapi.PostCall('ISPEIAdminLogin', objLogin).subscribe(function (login) {
            if (login.status) {
                localStorage.setItem('isloggedin', 'true');
                _this.router.navigate(['/Home']);
            }
            else {
                // console.log(login.status);
            }
        });
    };
    LoginComponent.prototype.forgotpasswordurl = function () {
        this.loginservice.forgotpasswordurl();
    };
    LoginComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/admin/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            _login_service__WEBPACK_IMPORTED_MODULE_5__["loginService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _login_login_encryption_service__WEBPACK_IMPORTED_MODULE_3__["LoginEncryptionService"],
            _outbound_module_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: routes, loginModule, createTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginModule", function() { return loginModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forgotpassword/forgotpassword.component */ "./src/app/admin/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib */ "./src/app/admin/_lib/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
        path: 'forgotpassword',
        component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
    },
];
var loginModule = /** @class */ (function () {
    // tslint:disable-next-line:class-name
    function loginModule() {
    }
    loginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                })
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
        // tslint:disable-next-line:class-name
    ], loginModule);
    return loginModule;
}());

function createTranslateLoader(http) {
    return new _lib__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, '.json');
}


/***/ })

}]);
//# sourceMappingURL=21.js.map