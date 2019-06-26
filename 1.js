(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/admin/transaction/dashboard/dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/transaction/dashboard/dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/transaction/dashboard/dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/transaction/dashboard/dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row breadcrumb_block\">\r\n        <a href=\"\">\r\n          <img src=\"assets/image/icon_home.png\">\r\n          <span class=\"nav-label padlf-10\">{{ 'nav_home' | translate }}</span>\r\n        </a>\r\n      </div>\r\n      <div class=\"wrapper-content\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 no_padding\">\r\n            <div class=\"dashboard_container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n                              <div class=\"four_image_container image_container1 hand_pointer \" (click)=\"goToTransaction('PENDING')\">\r\n                                  <div class=\"division_portion\">\r\n                                      <div class=\"division_portion\">\r\n                                          <div>\r\n                                              <p class=\"division_portion_text_container\">\r\n                                                  <span>{{initiated.total}}<br>\r\n                                                      <span class=\"division_portion_lefttext_container\">{{ userData.fx_settings.base_currency }}</span>\r\n                                                  </span>\r\n                                                  <sub class=\"subscript_text\" style=\" position: relative;top: -5px;font-size: 1.1em;left: 46px;\">\r\n                                                      <label style=\"font-size: 3em;font-weight: lighter!important;color: white!important\">/</label>\r\n                                                      <span style=\"font-size:16px;\">{{initiated.count}}</span>\r\n                                                  </sub>\r\n                                              </p>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"image_portion\"><img class=\"img-responsive\" src=\"assets/image/04.png\"></div>\r\n                                  <div class=\"text_divison_bottom center-block text_divison_bottom1\">\r\n                                      <span> {{ 'label_intiated_payment' | translate }} </span>\r\n                                  </div>\r\n                              </div>\r\n          \r\n                          </div>\r\n                          <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n                              <div class=\"four_image_container image_container2 hand_pointer\" (click)=\"goToTransaction('SUCCESS')\">\r\n                                  <div class=\"division_portion\">\r\n                                      <div class=\"division_portion\">\r\n                                          <div>\r\n                                              <p class=\"division_portion_text_container\">\r\n                                                  <span>{{processed.total}}<br>\r\n                                                      <span class=\"division_portion_lefttext_container\">{{ userData.fx_settings.base_currency }}</span>\r\n                                                  </span>\r\n                                                  <sub class=\"subscript_text\" style=\" position: relative;top: -5px;font-size: 1.1em;left: 46px;\">\r\n                                                      <label style=\"font-size: 3em;font-weight: lighter!important; color: white!important\">/</label>\r\n                                                      <span style=\"font-size:16px;\">{{processed.count}}</span>\r\n                                                  </sub>\r\n                                              </p>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"image_portion\"><img class=\"img-responsive\" src=\"assets/image/03.png\"></div>\r\n                                  <div class=\"text_divison_bottom center-block text_divison_bottom2\">\r\n                                      <span> {{ 'label_transaction' | translate }} </span></div>\r\n                              </div>\r\n                          </div>\r\n          \r\n                          <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n                              <div class=\"four_image_container image_container3 hand_pointer\" (click)=\"goToTransaction('REFUNDED')\">\r\n                                  <div class=\"division_portion\">\r\n                                      <div class=\"division_portion\">\r\n                                          <div>\r\n                                              <p class=\"division_portion_text_container\">\r\n                                                  <span>{{refunded.total}}<br>\r\n                                                      <span class=\"division_portion_lefttext_container\">{{ userData.fx_settings.base_currency }}</span>\r\n                                                  </span>\r\n                                                  <sub class=\"subscript_text\" style=\" position: relative;top: -5px;font-size: 1.1em;left: 46px;\">\r\n                                                      <label style=\"font-size: 3em;font-weight: lighter!important;color: white!important\">/</label>\r\n                                                      <span style=\"font-size:16px;\">{{refunded.count}}</span>\r\n                                                  </sub>\r\n                                              </p>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"image_portion\"><img class=\"img-responsive\" src=\"assets/image/02.png\"></div>\r\n                                  <div class=\"text_divison_bottom center-block text_divison_bottom3\">\r\n                                      <span>{{ 'label_refund_payment' | translate }} </span></div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n                              <div class=\"four_image_container image_container4 hand_pointer\" (click)=\"goToTransaction('FAILED')\">\r\n                                  <div class=\"division_portion\">\r\n                                      <div class=\"division_portion\">\r\n                                          <div>\r\n                                              <p class=\"division_portion_text_container\">\r\n                                                  <span>{{failed.total}}<br>\r\n                                                      <span class=\"division_portion_lefttext_container\">{{ userData.fx_settings.base_currency }}</span>\r\n                                                  </span>\r\n                                                  <sub class=\"subscript_text\" style=\" position: relative;top: -5px;font-size: 1.1em;left: 46px;\">\r\n                                                      <label style=\"font-size: 3em;font-weight: lighter!important;color: white!important\">/</label>\r\n                                                      <span style=\"font-size:16px;\">{{failed.count}}</span>\r\n                                                  </sub>\r\n                                              </p>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"image_portion\"><img class=\"img-responsive\" src=\"assets/image/01.png\"></div>\r\n                                  <div class=\"text_divison_bottom center-block text_divison_bottom4\">\r\n                                      <span> {{ 'label_failed_payment' | translate }} </span></div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n          \r\n                              <div class=\"bar_graph_container\">\r\n                                  <div class=\"graph_heading\"><span> {{ 'label_transaction_status' | translate }} </span></div>\r\n                                  <div id=\"container\" style=\"margin: 0 auto\"></div>\r\n                                  <!-- <div id=\"container\" style=\"margin: 0 auto\"></div> -->\r\n                                  <!-- <div>\r\n                                      <canvas\r\n                                          baseChart\r\n                                          [chartType]=\"'pie'\"\r\n                                          [datasets]=\"pieChartData\"\r\n                                          [labels]=\"pieChartLabels\"\r\n                                          [options]=\"pieChartOptions\"\r\n                                          [legend]=\"true\"\r\n                                          [colors]=\"pieChartColor\"\r\n                                          (chartClick)=\"onChartClick($event)\">\r\n                                      </canvas>\r\n                                    </div> -->\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n          \r\n                              <div class=\"bar_graph_container\">\r\n                                  <div class=\"graph_heading\"><span> {{ 'label_revenue' | translate }} </span><span style=\"padding-left: 15px;\">{{getcurrentmonth}}</span></div>\r\n                                  <!-- <div id=\"container_pie\" style=\"margin: 0 auto\"></div> -->\r\n                                  <!-- <div id=\"chartContainer\" style=\"height: 370px; width: 100%; margin-left:auto;margin-right:auto;\"></div> -->\r\n                                  <!-- <div id='jqxChart' style=\"width:500px; height:400px; position: relative; left: 0px; top: 0px;\"></div>\r\n                                  <input type=\"button\" style=\"margin: 50px;\" id=\"jqxbutton\" value=\"Refresh\" /> -->\r\n                                  <!-- <div>\r\n                                      <canvas\r\n                                          baseChart\r\n                                          [chartType]=\"'bar'\"\r\n                                          [datasets]=\"chartData\"\r\n                                          [labels]=\"labels\"\r\n                                          [options]=\"chartOptions\"\r\n                                          [legend]=\"true\"\r\n                                          [colors]=\"colors\"\r\n                                          (chartClick)=\"onChartClick($event)\">\r\n                                      </canvas>\r\n                                    </div> -->\r\n                                    <!-- <div #container></div> -->\r\n                                    <div id=\"container_pie\" style=\"margin: 0 auto\"></div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/admin/transaction/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/transaction/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/apiservice.service */ "./src/app/common/services/apiservice.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/config/api.config */ "./src/app/common/config/api.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../login/login.service */ "./src/app/admin/login/login.service.ts");
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


__webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js")(highcharts__WEBPACK_IMPORTED_MODULE_1__);







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, router, login, translate) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.login = login;
        this.translate = translate;
        this.initiated = {};
        this.processed = {};
        this.refunded = {};
        this.failed = {};
        this.accessDetails = {};
        this.customColors = ['#b1e0f6', '#f5afaf', '#c6f8c6', '#f8c6f8', '#d2aff5', '#f5aff5',
            '#afaff5', '#f5f5af', '#fbdcdc', '#afd2f5', '#93effb', '#fbd393', '#fb9f93', '#acfa7a',
            '#93fb9f', '#d393fb', '#fcddac', '#fb93bc', '#b0a8fc', '#fcb0a8', '#fdc1ca', '#0997e4',
            '#f77229', '#faa373', '#8cd3fb', '#fdf4bd', '#d4bdfd', '#e4d6fe', '#fee4d6', '#fdc3a4'];
        this.monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.lastSixMonthDataApi = _common_config_api_config__WEBPACK_IMPORTED_MODULE_4__["adminApi"].lastSixMonthData;
        this.statusApi = _common_config_api_config__WEBPACK_IMPORTED_MODULE_4__["adminApi"].status;
        this.countryApi = _common_config_api_config__WEBPACK_IMPORTED_MODULE_4__["adminApi"].country;
        this.refundApi = _common_config_api_config__WEBPACK_IMPORTED_MODULE_4__["adminApi"].refundStatus;
        this.subscription = login.currentLanguage.subscribe(function () {
            translate.setDefaultLang(sessionStorage.getItem('lang'));
            translate.use(sessionStorage.getItem('lang'));
            setTimeout(function (res) {
                _this.showCharts();
            });
        });
        //   translate.setDefaultLang( sessionStorage.getItem('lang'));
        // translate.use( sessionStorage.getItem('lang'));
        // translate.onLangChange.subscribe()((event: LangChangeEvent) => {
        // console.log('data', data);
        // const data = this.translateLayoutHttpLoader.getTranslatedLabels();
        // console.log('fsgsdgfdgghdgg', data);
        // translate.get('data', TranslateLayoutHttpLoader.getTranslatedLabels()).subscribe((res: string) => {
        //   console.log(res);
        // });
        // });
    }
    // tslint:disable-next-line:use-life-cycle-interface
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessDetails = this.login.getGlobalLoginDetails();
        var objDate = new Date(new Date());
        this.userData = this.login.getGlobalLoginDetails();
        this.getcurrentmonth = '(' + objDate.toLocaleString('en', { month: 'long' }) + '-' +
            objDate.toLocaleString('en', { year: 'numeric' }) + ')';
        var objstatus = { 'jwtPayload': { 'university_id': sessionStorage.getItem('university_id') } };
        this.service.Getmethod(this.statusApi).subscribe(function (receivedData) {
            _this.bindStatuses(receivedData.data.results);
            _this.service.Getmethod(_this.refundApi).subscribe(function (refundDataData) {
                var refund = refundDataData.data.results[0];
                if (!refund) {
                    refund = { count: 0, total: 0 };
                }
                _this.refunded.count = refund.count;
                _this.refunded.total = _this.formtaTotalValue(refund.total);
            });
        });
    };
    DashboardComponent.prototype.bindStatuses = function (receivedStatuses) {
        for (var _i = 0, receivedStatuses_1 = receivedStatuses; _i < receivedStatuses_1.length; _i++) {
            var status_1 = receivedStatuses_1[_i];
            if (status_1._id.status === "PENDING") {
                this.initiated.count = status_1.count;
                this.initiated.total = this.formtaTotalValue(status_1.total);
            }
            else if (status_1._id.status === "SUCCESS") {
                this.processed.count = status_1.count;
                this.processed.total = this.formtaTotalValue(status_1.totalAmount);
            }
            else if (status_1._id.status === "FAILED") {
                this.failed.count = status_1.count;
                this.failed.total = this.formtaTotalValue(status_1.total);
            }
        }
        // this.showCharts();
    };
    DashboardComponent.prototype.formtaTotalValue = function (number) {
        var changedValue;
        if (number) {
            var abs = Math.abs(number);
            if (abs >= Math.pow(10, 12)) {
                changedValue = (number / Math.pow(10, 12)).toFixed(2) + " T ";
            }
            else if ((abs < Math.pow(10, 12)) && (abs >= Math.pow(10, 9))) {
                changedValue = (number / Math.pow(10, 9)).toFixed(2) + " B  ";
            }
            else if ((abs < Math.pow(10, 9)) && (abs >= Math.pow(10, 6))) {
                changedValue = (number / Math.pow(10, 6)).toFixed(2) + "  M  ";
            }
            else if ((abs < Math.pow(10, 6)) && (abs >= Math.pow(10, 3))) {
                changedValue = (number / Math.pow(10, 3)).toFixed(2) + "  K  ";
            }
            else {
                changedValue = number;
            }
            return changedValue;
        }
        else {
            return number;
        }
    };
    DashboardComponent.prototype.showCharts = function () {
        this.barChartCalculations();
        this.pieChartCalculations();
    };
    // Required Months 6
    DashboardComponent.prototype.buildRequiredMonthArray = function (currentMonth) {
        var REQUIRED_MONTHS = new Date().getMonth();
        var requiredMonths = [];
        requiredMonths.push(currentMonth);
        var prevMonth = currentMonth;
        for (var i = 0; i < REQUIRED_MONTHS; i++) {
            prevMonth = this.getPreviousMonth(prevMonth);
            requiredMonths.splice(0, 0, prevMonth);
        }
        return requiredMonths;
    };
    DashboardComponent.prototype.getPreviousMonth = function (month) {
        var data = {
            'month': 0,
            'year': '',
            'formattedMonth': ''
        };
        var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        data.month = month.month === 0 ? 11 : (month.month - 1);
        data.year = month.month === 0 ? (month.year - 1) : month.year;
        data.formattedMonth = monthName[data.month];
        return data;
    };
    DashboardComponent.prototype.barChartCalculations = function () {
        var _this = this;
        this.service.Getmethod(this.lastSixMonthDataApi).subscribe(function (receivedData) {
            var lastSixMonthData = receivedData.data;
            var currentDate = moment__WEBPACK_IMPORTED_MODULE_3__["utc"](new Date().getTime());
            var currentMonth = {
                month: currentDate.month(),
                year: currentDate.year(),
                formattedMonth: _this.monthName[currentDate.month()]
            };
            var initiated = [];
            var settled = [];
            var months = [];
            var requiredMonths = _this.buildRequiredMonthArray(currentMonth);
            var isFound = false;
            requiredMonths.forEach(function (month) {
                lastSixMonthData.forEach(function (value) {
                    if (month.month === (value.month - 1) && month.year === value.year) {
                        isFound = true;
                        settled.push(value.transaction_success_amount ? value.transaction_success_amount : 0);
                        initiated.push(value.transaction_pending_amount ? value.transaction_pending_amount : 0);
                        months.push(month.formattedMonth);
                    }
                });
                if (!isFound) {
                    settled.push(0);
                    initiated.push(0);
                    months.push(month.formattedMonth);
                }
            });
            // Show the bar chart based on the calculations
            _this.showBarChart(settled, initiated, months);
        });
    };
    // building bar chart graph
    DashboardComponent.prototype.showBarChart = function (settled, initiated, months) {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container', {
            lang: {
                downloadJPEG: this.translate.instant('downloadJPEG'),
                downloadPDF: this.translate.instant('downloadPDF'),
                downloadPNG: this.translate.instant('downloadPNG'),
                downloadSVG: this.translate.instant('downloadSVG'),
                contextButtonTitle: this.translate.instant('contextButtonTitle'),
                printChart: this.translate.instant('printChart'),
            },
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            credits: { enabled: false },
            xAxis: {
                categories: months
            },
            series: [{
                    name: this.translate.instant("label_intiated_payment"),
                    data: initiated,
                    color: '#b1e0f6'
                }, {
                    name: this.translate.instant("label_transaction"),
                    data: settled,
                    color: '#f5afaf'
                }],
            yAxis: {
                title: {
                    text: this.translate.instant("label_values")
                }
            },
            tooltip: {
                formatter: function () {
                    return this.series.name + ' - ' + highcharts__WEBPACK_IMPORTED_MODULE_1__["numberFormat"](this.y, 2, '.', ',');
                }
            }
        });
    };
    DashboardComponent.prototype.pieChartCalculations = function () {
        var _this = this;
        this.service.Getmethod(this.countryApi).subscribe(function (receivedData) {
            var countries = receivedData.data.results;
            var listOfCountries = [];
            var revenue = [];
            var dummyArray = [];
            countries.forEach(function (value, index) {
                var country = [];
                country['total'] = value.total;
                country['country'] = value._id.country;
                country['count'] = value.count;
                dummyArray.push(country);
            });
            function sortNumber(a, b) {
                return a.total - b.total;
            }
            dummyArray.sort(sortNumber);
            var backUpObj = [];
            dummyArray.forEach(function (obj, keys) { backUpObj.push(obj); });
            listOfCountries = dummyArray.reverse().splice(0, 5);
            if (backUpObj.length - 5 !== 0) {
                var totalData = 0;
                var totalCount = 0;
                for (var list = 0; list <= (backUpObj.length - 5); list++) {
                    // tslint:disable-next-line:radix
                    totalData = totalData + parseInt(backUpObj[list].total);
                    // tslint:disable-next-line:radix
                    totalCount = totalCount + parseInt(backUpObj[list].count);
                }
                var DummyObj = [];
                DummyObj['total'] = totalData;
                DummyObj['count'] = totalCount;
                DummyObj['country'] = 'Others';
                listOfCountries.push(DummyObj);
            }
            listOfCountries.forEach(function (val) {
                var country = [];
                country.push(val.country, val.count);
                revenue.push(country);
            });
            _this.showPieChart(revenue);
        });
    };
    // show pie chart graph
    DashboardComponent.prototype.showPieChart = function (revenue) {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container_pie', {
            lang: {
                downloadJPEG: this.translate.instant('downloadJPEG'),
                downloadPDF: this.translate.instant('downloadPDF'),
                downloadPNG: this.translate.instant('downloadPNG'),
                downloadSVG: this.translate.instant('downloadSVG'),
                contextButtonTitle: this.translate.instant('contextButtonTitle'),
                printChart: this.translate.instant('printChart'),
            },
            chart: {
                type: 'pie',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                marginBottom: 90,
            },
            colors: this.customColors,
            credits: { enabled: false },
            legend: {},
            title: {
                text: ""
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    showInLegend: true,
                    dataLabels: {
                        distance: -35,
                        enabled: true,
                        allowOverlap: true,
                        format: '{point.percentage:.1f}%',
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
                    data: revenue,
                }]
        });
    };
    // ngOnDestroy() {
    // }
    DashboardComponent.prototype.goToTransaction = function (status) {
        if (this.accessDetails.user_access && this.accessDetails.user_access.length > 0) {
            var elementary = lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"](this.accessDetails.user_access, function (json) {
                return json.access_key === 'transactionHistoryElementary';
            });
            var secondary = lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"](this.accessDetails.user_access, function (json) {
                return json.access_key === 'transactionHistorySecondary';
            });
            var transactionHistory = lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"](this.accessDetails.user_access, function (json) {
                return json.access_key === 'transactionHistory';
            });
            if (elementary !== -1) {
                this.router.navigate(["/transactionElementary/" + status]);
            }
            else if (secondary !== -1) {
                this.router.navigate(["/transactionSecondary/" + status]);
            }
            else if (transactionHistory !== -1) {
                this.router.navigate(["/transaction/" + status]);
            }
        }
        else {
            this.router.navigate(["/transaction/" + status]);
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/transaction/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/transaction/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _login_login_service__WEBPACK_IMPORTED_MODULE_7__["loginService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/transaction/dashboard/dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/transaction/dashboard/dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: routes, DashboardModule, createTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/admin/transaction/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_lib/index */ "./src/app/admin/_lib/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
            ],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

function createTranslateLoader(http) {
    return new _lib_index__WEBPACK_IMPORTED_MODULE_6__["TranslateLayoutHttpLoader"](http, '/cms/translationAdmin');
}


/***/ })

}]);
//# sourceMappingURL=1.js.map