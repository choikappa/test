(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row breadcrumb_block\">\r\n  <a href=\"\">\r\n    <img src=\"assets/image/icon_home.png\">\r\n    <span class=\"nav-label padlf-10 main-labels\">{{'nav_home' | translate}}</span>\r\n  </a>\r\n</div>\r\n<div class=\"wrapper-content dashboard-background\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"dashboard_container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"fund-currency-styling\">\r\n              <label class=\"fund_currency_label\">{{'label_add_payout_fund_currency' | translate}}</label>\r\n              <div class=\"form-group width-300\">\r\n                <select (change)=\"onCurrencyChange($event.target.value)\" class=\"form-control drop_down\">\r\n                  <option [value]=\"currency.baseCurrency\" *ngFor=\"let currency of fundCurrencies\">\r\n                    {{currency.baseCurrency}} - {{currency.baseCurrencyName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <app-transaction-status [payoutMonthlyHistory]=\"payoutMonthlyHistory\" [currency]=\"selectedCurrency\">\r\n              </app-transaction-status>\r\n            </div>\r\n            <div class=\"row\">\r\n              <app-highcharts-component [payoutMonthlyHistory]=\"payoutMonthlyHistory\" [revenue]=\"revenue\"\r\n                [countriesData]=\"countriesData\"></app-highcharts-component>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  padding: 10px; }\n\n.align-right {\n  text-align: right; }\n\n.fund-currency-styling {\n  display: flex; }\n\n.fund-currency-styling .fund_currency_label {\n    font-size: 14px;\n    padding: 6px 12px 6px 5px; }\n\n.dashboard_container {\n  margin-top: 0; }\n\n.drop_down {\n  width: 100%; }\n\n.width-300 {\n  width: 100%;\n  max-width: 300px; }\n\n.dashboard-background {\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DashboardLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLayoutComponent", function() { return DashboardLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dashboard.service */ "./src/app/admin/outbound-module/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardLayoutComponent = /** @class */ (function () {
    function DashboardLayoutComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.payoutMonthlyHistory = [];
        this.countriesData = [];
        this.revenue = [];
        this.selectedCurrency = 'CAD';
    }
    DashboardLayoutComponent.prototype.ngOnInit = function () {
        this.getFundCurrencies();
        this.getPayoutMonthlyHistory(this.selectedCurrency);
    };
    DashboardLayoutComponent.prototype.getFundCurrencies = function () {
        var _this = this;
        this.dashboardService.getFundCurrencies().subscribe(function (fundCurrencies) {
            _this.fundCurrencies = fundCurrencies;
        });
    };
    DashboardLayoutComponent.prototype.getPayoutMonthlyHistory = function (baseCurrency) {
        var _this = this;
        this.dashboardService.getPayoutMonthlyHistory(baseCurrency).subscribe(function (payoutHistory) {
            _this.payoutMonthlyHistory = [];
            if (payoutHistory) {
                _this.payoutMonthlyHistory.push(payoutHistory['initiated']);
                _this.payoutMonthlyHistory.push(payoutHistory['processed']);
                _this.payoutMonthlyHistory.push(payoutHistory['returned']);
                _this.payoutMonthlyHistory.push(payoutHistory['failed']);
                _this.formatCountriesData(payoutHistory['countriesData']);
                _this.revenue = payoutHistory['revenue'] ? payoutHistory['revenue'] : [];
            }
        });
    };
    DashboardLayoutComponent.prototype.formatCountriesData = function (countriesData) {
        var _this = this;
        if (countriesData) {
            this.countriesData = [];
            countriesData.forEach(function (element) {
                var country = [];
                country.push(element['name'], element['y']);
                _this.countriesData.push(country);
            });
        }
    };
    DashboardLayoutComponent.prototype.onCurrencyChange = function (value) {
        this.selectedCurrency = value;
        this.getPayoutMonthlyHistory(value);
    };
    DashboardLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-layout',
            template: __webpack_require__(/*! ./dashboard-layout.component.html */ "./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-layout.component.scss */ "./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], DashboardLayoutComponent);
    return DashboardLayoutComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/dashboard.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/dashboard.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-layout/dashboard-layout.component */ "./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.ts");
/* harmony import */ var _transaction_status_transaction_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-status/transaction-status.component */ "./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.ts");
/* harmony import */ var _highcharts_component_highcharts_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highcharts-component/highcharts-component.component */ "./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/admin/outbound-module/dashboard/dashboard.routing.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            declarations: [_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__["DashboardLayoutComponent"], _transaction_status_transaction_status_component__WEBPACK_IMPORTED_MODULE_3__["TransactionStatusComponent"], _highcharts_component_highcharts_component_component__WEBPACK_IMPORTED_MODULE_4__["HighchartsComponentComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/dashboard.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/dashboard.routing.ts ***!
  \**********************************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-layout/dashboard-layout.component */ "./src/app/admin/outbound-module/dashboard/dashboard-layout/dashboard-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_auth_privilege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/auth.privilege.service */ "./src/app/common/services/auth.privilege.service.ts");
/* harmony import */ var _utils_permission_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/permission.constants */ "./src/app/admin/outbound-module/utils/permission.constants.ts");




var routes = [
    {
        path: '',
        component: _dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_0__["DashboardLayoutComponent"],
        canActivate: [_common_services_auth_privilege_service__WEBPACK_IMPORTED_MODULE_2__["AuthPrivilegeService"]],
        data: {
            requiredPermissions: [
                _utils_permission_constants__WEBPACK_IMPORTED_MODULE_3__["PERMISSIONS"].OUTBOUND.DASHBOARD
            ]
        }
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 bar-graph-wrapper\">\r\n      \r\n    <div class=\"bar_graph_container\">\r\n        <div class=\"graph_heading\"><span>{{'label_previous_six_months' | translate}}</span></div>\r\n        <div id=\"barChartContainer\" class=\"bar-chart\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-6 bar-graph-wrapper\">\r\n\r\n    <div class=\"bar_graph_container\">\r\n        <div class=\"graph_heading\"><span>{{'label_revenue' | translate}}</span><span class=\"date-label\">({{currentMonth}} - {{currentYear}})</span></div>\r\n        <!-- commented beacause unable to get data for pei chart -->\r\n            <div class=\"other-countries-tooltip\" [hidden]=\"!showToolTip\" id=\"tooltipchart\">\r\n                <div class=\"other-countries row\">\r\n                    <p class=\"others-label\">Others</p>\r\n                </div>\r\n                <div *ngFor=\"let country of others\" class=\"other-countries row\">\r\n                    <p class=\"col-md-6 graph-countries-popup\">{{country.countryName}}</p>\r\n                    <p class=\"col-md-6 country-percentage\">{{country.percentage}}%</p>\r\n                </div>\r\n                <div class=\"row\">\r\n                <p class=\"col-md-6 graph-countries-popup total-label\">Total</p>\r\n                <p class=\"col-md-6 total-percentage\">{{totalPercentage}}%</p>\r\n                </div>\r\n            </div>\r\n            <div id=\"pieChartContainer\" class=\"pie-chart\"></div>     \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-graph-wrapper {\n  padding: 0 4px !important; }\n\n.bar-chart {\n  min-width: 310px;\n  height: 400px;\n  margin: 0 auto; }\n\n.pie-chart {\n  margin: 0 auto; }\n\n.date-label {\n  padding-left: 15px; }\n\n.others-label {\n  font-weight: bold;\n  padding-left: 3px;\n  margin-bottom: 0px; }\n\n.other-countries {\n  padding: 0; }\n\n.country-percentage {\n  float: right;\n  padding-right: 0;\n  margin-bottom: 0px; }\n\n.total-label {\n  font-weight: bold; }\n\n.total-percentage {\n  float: right;\n  padding-right: 0;\n  font-weight: bold; }\n\n.other-countries-tooltip {\n  position: absolute;\n  background: #ffffff;\n  border-radius: .4em;\n  z-index: 9999;\n  border: black;\n  border-style: solid;\n  border-width: 1px;\n  padding: 0 20px;\n  left: 0;\n  right: 0;\n  bottom: 435px;\n  margin: auto;\n  width: 30%; }\n\n.other-countries-tooltip:after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 100%;\n    width: 0;\n    height: 0;\n    border: 20px solid transparent;\n    border-right-color: #ffffff;\n    border-left: 0;\n    margin-top: -20px;\n    margin-left: -20px; }\n\n.other-countries-tooltip .others-label {\n    font-weight: bold;\n    padding-left: 8px;\n    margin-bottom: 0px; }\n\n.other-countries-tooltip .other-countries {\n    padding: 0; }\n\n.other-countries-tooltip .other-countries .graph-countries-popup {\n      padding: 0 4px; }\n\n.other-countries-tooltip .other-countries .country-percentage {\n      float: right;\n      padding-right: 0;\n      margin-bottom: 0px; }\n\n.graph-countries-popup {\n  padding: 0 4px !important;\n  margin-bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: HighchartsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighchartsComponentComponent", function() { return HighchartsComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


__webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js")(highcharts__WEBPACK_IMPORTED_MODULE_1__);



var HighchartsComponentComponent = /** @class */ (function () {
    function HighchartsComponentComponent(ref, translateService) {
        this.ref = ref;
        this.translateService = translateService;
        this.payoutMonthlyHistory = [];
        this.countriesData = [];
        this.revenue = [];
        this.showToolTip = false;
        this.others = [];
        this.currentMonth = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().format('MMMM');
        this.currentYear = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().format('YYYY');
        this.lastSixMonths = [];
        this.customColors = ['#b1e0f6', '#f5afaf', '#c6f8c6', '#f8c6f8', '#d2aff5', '#f5aff5',
            '#afaff5', '#f5f5af', '#fbdcdc', '#afd2f5', '#93effb', '#fbd393', '#fb9f93', '#acfa7a',
            '#93fb9f', '#d393fb', '#fcddac', '#fb93bc', '#b0a8fc', '#fcb0a8', '#fdc1ca', '#0997e4',
            '#f77229', '#faa373', '#8cd3fb', '#fdf4bd', '#d4bdfd', '#e4d6fe', '#fee4d6', '#fdc3a4'];
    }
    HighchartsComponentComponent.prototype.ngOnInit = function () {
        this.createLastSixMonths();
        this.loadBarChart();
    };
    HighchartsComponentComponent.prototype.ngOnChanges = function () {
        this.loadBarChart();
        this.calculatePieChart();
        this.loadPieChart();
    };
    HighchartsComponentComponent.prototype.calculatePieChart = function () {
        var _this = this;
        this.others = [];
        this.showToolTip = false;
        var totalValue = lodash__WEBPACK_IMPORTED_MODULE_4__["sumBy"](this.countriesData, function (o) { return o[1]; });
        var tempObj = this.countriesData.find(function (obj) { return (obj[0] == 'Others'); });
        if (tempObj && this.revenue) {
            this.totalPercentage = ((tempObj[1] / totalValue) * 100).toFixed(2);
            this.revenue.forEach(function (obj) {
                if (_this.countriesData.findIndex(function (obj1) { return (obj1[0] == obj[0]); }) == -1) {
                    _this.others.push({ 'countryName': obj[0], 'percentage': ((obj[1] / totalValue) * 100).toFixed(2) });
                }
            });
        }
    };
    HighchartsComponentComponent.prototype.createLastSixMonths = function () {
        for (var i = 5; i >= 0; i--) {
            this.lastSixMonths.push(moment_timezone__WEBPACK_IMPORTED_MODULE_3__().subtract(i, 'months').format('MMM'));
        }
    };
    HighchartsComponentComponent.prototype.loadBarChart = function () {
        var cart = this;
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('barChartContainer', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            credits: { enabled: false },
            xAxis: {
                categories: this.lastSixMonths,
                crosshair: true
            },
            yAxis: {
                title: {
                    text: 'Values($)'
                },
                formatter: function () {
                    return highcharts__WEBPACK_IMPORTED_MODULE_1__["numberFormat"](this.value, 0);
                }
            },
            legend: {
                labelFormatter: function () {
                    return cart.translateService.instant(this.userOptions.name);
                }
            },
            tooltip: {
                formatter: function () {
                    return cart.translateService.instant(this.series.name) + ' - ' + highcharts__WEBPACK_IMPORTED_MODULE_1__["numberFormat"](this.y, 2, '.', ',');
                }
            },
            plotOptions: {
                series: {
                    minPointLength: 2
                }
            },
            series: this.payoutMonthlyHistory
        });
    };
    HighchartsComponentComponent.prototype.loadPieChart = function () {
        var _this = this;
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('pieChartContainer', {
            chart: {
                type: 'pie',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                marginBottom: 90,
            },
            colors: this.customColors,
            credits: { enabled: false },
            legend: {
                enabled: true,
                layout: 'horizontal',
                verticalAlign: 'bottom',
            },
            title: {
                text: ""
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
            },
            plotOptions: {
                pie: {
                    startAngle: 1,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    showInLegend: true,
                    dataLabels: {
                        distance: -35,
                        enabled: true,
                        allowOverlap: false,
                        format: '{point.percentage:.2f}%',
                        style: {
                            color: 'black'
                        },
                        connectorColor: 'silver'
                    }
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Country share',
                    showInLegend: true,
                    data: this.countriesData,
                    point: {
                        events: {
                            legendItemClick: function () {
                                return false; // <== returning false will cancel the default action
                            },
                            click: function (e) {
                                if (e.point.name === 'Others' && !e.point.selected) {
                                    _this.showToolTip = true;
                                    _this.ref.detectChanges();
                                }
                                else {
                                    _this.showToolTip = false;
                                    _this.ref.detectChanges();
                                }
                            }
                        }
                    }
                }]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HighchartsComponentComponent.prototype, "payoutMonthlyHistory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HighchartsComponentComponent.prototype, "countriesData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HighchartsComponentComponent.prototype, "revenue", void 0);
    HighchartsComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-highcharts-component',
            template: __webpack_require__(/*! ./highcharts-component.component.html */ "./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.html"),
            styles: [__webpack_require__(/*! ./highcharts-component.component.scss */ "./src/app/admin/outbound-module/dashboard/highcharts-component/highcharts-component.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], HighchartsComponentComponent);
    return HighchartsComponentComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"col-md-12 heading-holder\">\r\n    <div class=\"graph_heading\">\r\n      <span>{{'label_transaction_overview_by_status' | translate}} </span>\r\n      ({{currentMonth}} - {{currentYear}})\r\n    </div>\r\n    <div id=\"\" style=\"margin: 0 auto\"></div>\r\n  </div>\r\n  <div class=\"col-md-3 col-sm-6 col-xs-12 notification-card-holder \" *ngFor=\"let payoutHistory of payoutMonthlyHistory ; let i = index\">\r\n    <div class=\"four-image-container hand-pointer image_container1 payoutHistory\">\r\n      <div class=\"outbound_dashboard_tiles col-md-12 col-xs-12 col-sm-12 margin-top-1rem\" [style.background-color]=\"payoutHistory.color\">\r\n          <div class=\"values-holder margin-top-2rem\">\r\n              <span class=\"left-value\">\r\n                <span class=\"portion_amount\">${{payoutHistory.totalAmount}}</span>\r\n                <span class=\"division_portion_left text_container\">{{currency}}</span>\r\n              </span>\r\n              <span class=\"middle-divider\"></span>\r\n              <div class=\"subscript_text right-value\">\r\n                <span>{{payoutHistory.numberOfTransactions}}\r\n                    {{ payoutHistory.numberOfTransactions === 1 ? \"Txn\" : \"Txns\" }}</span>\r\n              </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"text_divison_bottom center-block\" [ngClass]=\"'label-'+i\">\r\n        <span>{{payoutHistory.name | translate}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-0 {\n  background-color: #1CB0DE; }\n\n.label-1 {\n  background-color: #009656; }\n\n.label-2 {\n  background-color: #D78A32; }\n\n.label-3 {\n  background-color: #D95E4E; }\n\n.outbound_dashboard_tiles {\n  height: 105px;\n  color: #fff;\n  width: 100%; }\n\n.values-holder {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  justify-content: center; }\n\n.values-holder .left-value {\n  font-size: 21px;\n  text-align: center;\n  font-weight: 300;\n  padding: 0 10px 0 0; }\n\n.values-holder .left-value .portion_amount {\n  display: block;\n  margin: 0 -10px;\n  line-height: 23px; }\n\n.values-holder .left-value .division_portion_left {\n  font-size: 70%;\n  font-weight: 400;\n  display: block; }\n\n.values-holder .middle-divider {\n  height: 54px;\n  background-color: #fff;\n  width: 5px;\n  -webkit-transform: skew(-15deg);\n  transform: skew(-15deg);\n  margin: 0 6px 0 8px; }\n\n.values-holder div.right-value {\n  align-self: flex-end;\n  font-size: 16px;\n  line-height: 1.2; }\n\n.margin-top-1rem {\n  margin-top: 1rem; }\n\n.margin-top-2rem {\n  margin-top: 2rem; }\n\n.heading-holder {\n  padding: 0 4px; }\n\n.heading-holder .graph_heading {\n    padding: 5px 12px; }\n\n.notification-card-holder {\n  padding: 0 4px !important; }\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TransactionStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionStatusComponent", function() { return TransactionStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionStatusComponent = /** @class */ (function () {
    function TransactionStatusComponent() {
        this.currentMonth = moment_timezone__WEBPACK_IMPORTED_MODULE_1__().format('MMMM');
        this.currentYear = moment_timezone__WEBPACK_IMPORTED_MODULE_1__().format('YYYY');
    }
    TransactionStatusComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionStatusComponent.prototype, "payoutMonthlyHistory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionStatusComponent.prototype, "currency", void 0);
    TransactionStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-status',
            template: __webpack_require__(/*! ./transaction-status.component.html */ "./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.html"),
            styles: [__webpack_require__(/*! ./transaction-status.component.scss */ "./src/app/admin/outbound-module/dashboard/transaction-status/transaction-status.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionStatusComponent);
    return TransactionStatusComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/utils/permission.constants.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/outbound-module/utils/permission.constants.ts ***!
  \*********************************************************************/
/*! exports provided: PERMISSIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMISSIONS", function() { return PERMISSIONS; });
var PERMISSIONS = {
    OUTBOUND: {
        DASHBOARD: 'outboundDashboard',
        NOTIFICATION_SETTINGS: 'getOutboundNotificationSettings',
        PAYOUT_HISTORY: 'payoutHistory',
        BENEFICIARY_MANAGEMENT: 'beneficiaryManagement',
        VIEW_DISPUTE: 'viewDispute',
        PAYOUT_INITIATE: 'payoutInitiate',
        PAYOUT_APPROVAL: 'payoutApproval'
    }
};


/***/ }),

/***/ "./src/app/common/services/auth.privilege.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/services/auth.privilege.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthPrivilegeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPrivilegeService", function() { return AuthPrivilegeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/login/login.service */ "./src/app/admin/login/login.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthPrivilegeService = /** @class */ (function () {
    function AuthPrivilegeService(router, authService, activatedRoute) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
    }
    AuthPrivilegeService.prototype.canActivate = function (route, state) {
        var _this = this;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(route, 'data.requiredPermissions')) {
            var result = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(route.data['requiredPermissions'], function (o) {
                return _this.authService.hasPermission(o);
            });
            if (!result) {
                this.router.navigate(['']);
                return false;
            }
            return true;
        }
    };
    AuthPrivilegeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _admin_login_login_service__WEBPACK_IMPORTED_MODULE_2__["loginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AuthPrivilegeService);
    return AuthPrivilegeService;
}());



/***/ })

}]);
//# sourceMappingURL=12.js.map