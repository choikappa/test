(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/app/admin/outbound-module/dispute-management/dispute-management.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dispute-management/dispute-management.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DisputeManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisputeManagementModule", function() { return DisputeManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/admin/outbound-module/dispute-management/index.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_dispute_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dispute-management.service */ "./src/app/admin/outbound-module/services/dispute-management.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/admin/outbound-module/services/shared.service.ts");
/* harmony import */ var _services_payout_history_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/payout-history.service */ "./src/app/admin/outbound-module/services/payout-history.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _layout_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layout/shared.module */ "./src/app/admin/layout/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DisputeManagementModule = /** @class */ (function () {
    function DisputeManagementModule() {
    }
    DisputeManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _layout_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["PaginatorModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderModule"],
                ___WEBPACK_IMPORTED_MODULE_2__["DisputeRouterModule"],
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_2__["DisputeManagementLayoutComponent"]
            ],
            providers: [
                _services_dispute_management_service__WEBPACK_IMPORTED_MODULE_4__["DisputeManagementService"],
                _services_payout_history_service__WEBPACK_IMPORTED_MODULE_10__["PayoutHistoryService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
            ],
            entryComponents: [___WEBPACK_IMPORTED_MODULE_2__["DisputeEditComponent"]]
        })
    ], DisputeManagementModule);
    return DisputeManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=18.js.map