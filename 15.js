(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"bankInfoForm\">\r\n    <div class=\"row beneficiary-sub-section\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <hr />\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <div class=\"form-group info-form\">\r\n                <h4>{{'label_beneficiary_bank_information' | translate }}</h4>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"dynamicFields.bankName.isVisible\" class=\"col-lg-4 col-md-4 col-sm-12\" style=\"position: relative\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('bankName', 'BankDetails') }\">\r\n                <label for=\"bankName\" [ngClass]=\"{'mandatory': dynamicFields.bankName.isMandatory}\">\r\n                    {{ dynamicFields.bankName.label }}\r\n                </label>\r\n                <div class=\"mass-autocomplete\">\r\n                    <ng-select [searchable]=\"true\" placeholder=\"{{dynamicFields.bankName.description}}\" formControlName=\"bankName\" id=\"bankName\"\r\n                        name=\"bankName\" (change)=\"onSelectBankName($event)\" (search)=\"bankNamekeyUp.next($event)\"\r\n                        [loading]=\"bankNameLoading\">\r\n                        <ng-option *ngFor=\"let bank of bankNames\" [value]=\"bank.value\">{{bank.value}}</ng-option>\r\n                    </ng-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountName.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('accountName', 'BankDetails') }\">\r\n                <label for=\"accountName\" [ngClass]=\"{'mandatory': dynamicFields.accountName.isMandatory}\">\r\n                    {{ dynamicFields.accountName.label }}\r\n                </label>\r\n                <input id=\"accountName\" placeholder=\"{{dynamicFields.accountName.description}}\" name=\"accountName\"\r\n                    type=\"text\" class=\"form-control\" formControlName=\"accountName\"\r\n                    maxlength=\"{{dynamicFields.accountName.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"dynamicFields.bankCode.isVisible\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('bankCode', 'BankDetails') }\">\r\n                <label for=\"bankCode\" [ngClass]=\"{'mandatory': dynamicFields.bankCode.isMandatory}\">\r\n                    {{ dynamicFields.bankCode.label }}\r\n                </label>\r\n                <ng-select [searchable]=\"true\" placeholder=\"{{dynamicFields.bankCode.description}}\" formControlName=\"bankCode\" id=\"bankCode\"\r\n                    name=\"bankCode\" [(ngModel)]=\"bankCode\" (clear)=\"onSelectBankCode($event)\" (close)=\"onSelectBankCode(bankCode)\" (search)=\"bankCodeKeyUp.next($event)\"\r\n                    [loading]=\"bankCodeLoading\">\r\n                    <ng-option *ngFor=\"let bank of bankCodes\" [value]=\"bank.value\">{{bank.value}}</ng-option>\r\n                </ng-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountType.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\">\r\n                <label for=\"accountType\" [ngClass]=\"{'mandatory': dynamicFields.accountType.isMandatory}\">\r\n                    {{ dynamicFields.accountType.label }}\r\n                </label>\r\n                <select id=\"accountType\" name=\"accountType\" class=\"form-control drop_down\"\r\n                    formControlName=\"accountType\">\r\n                    <option [value]=\"null\" disabled>-- Select --</option>\r\n                    <option [value]=\"item.value\" *ngFor=\"let item of dynamicFieldOptions.accountType\">{{item.label}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.idType.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"identification\">\r\n                <label for=\"idType\" class=\"mandatory\">\r\n                    {{'label_id_identification_type' | translate }}\r\n                </label>\r\n                <select id=\"idType\" name=\"idType\" class=\"form-control drop_down\" validation=\"required\"\r\n                    formControlName=\"idType\">\r\n                    <option [value]=\"null\" disabled>{{'label_select_option' | translate }}</option>\r\n                    <option [value]=\"item.value\" *ngFor=\"let item of dynamicFieldOptions.idType\">{{item.label}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.identificationNumber.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"identification\">\r\n                <label for=\"identificationNumber\" class=\"mandatory\">\r\n                    {{'label_id_identification_number' | translate }}\r\n                </label>\r\n                <input id=\"identificationNumber\" name=\"identificationNumber\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"identificationNumber\"\r\n                    maxlength=\"{{dynamicFields.identificationNumber.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.identificationCountry.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"identification\">\r\n                <label for=\"identificationCountry\" class=\"mandatory\">\r\n                    {{'label_identification_country' | translate }}\r\n                </label>\r\n                <select id=\"identificationCountry\" name=\"identificationCountry\" class=\"form-control drop_down\"\r\n                    formControlName=\"identificationCountry\">\r\n                    <option [value]=\"null\">{{'label_select_option' | translate }}</option>\r\n                    <option *ngFor=\"let country of isoCountries\" [value]=\"country.code\">{{country.countryName}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.validFromDate.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"identification\">\r\n                <label for=\"validFromDate\" class=\"mandatory\">\r\n                    {{'label_valid_from_date' | translate }}\r\n                </label>\r\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" bsDatepicker\r\n                    formControlName=\"validFromDate\" [bsConfig]=\"{ dateInputFormat: 'MM/DD/YYYY' }\"\r\n                    onkeydown=\"return false\">\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"dynamicFields.validToDate.isVisible\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"identification\">\r\n                <label for=\"validToDate\" class=\"mandatory\">\r\n                    {{'label_valid_to_date' | translate }}\r\n                </label>\r\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" bsDatepicker\r\n                    formControlName=\"validToDate\" [bsConfig]=\"{ dateInputFormat: 'MM/DD/YYYY' }\"\r\n                    onkeydown=\"return false\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.holdingBranchName.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('holdingBranchName', 'BankDetails') }\">\r\n                <label for=\"holdingBranchName\" [ngClass]=\"{'mandatory': dynamicFields.holdingBranchName.isMandatory}\">\r\n                    {{ dynamicFields.holdingBranchName.label }}\r\n                </label>\r\n                <input id=\"holdingBranchName\" name=\"holdingBranchName\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"holdingBranchName\" maxlength=\"{{dynamicFields.holdingBranchName.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountNumberPrefix.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('accountNumberPrefix', 'BankDetails') }\">\r\n                <label for=\"accountNumberPrefix\"\r\n                    [ngClass]=\"{'mandatory': dynamicFields.accountNumberPrefix.isMandatory}\">\r\n                    {{ dynamicFields.accountNumberPrefix.label }}\r\n                </label>\r\n                <input id=\"accountNumberPrefix\" name=\"accountNumberPrefix\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"accountNumberPrefix\" maxlength=\"{{dynamicFields.accountNumberPrefix.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountNumberSuffix.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('accountNumberSuffix', 'BankDetails') }\">\r\n                <label for=\"accountNumberSuffix\"\r\n                    [ngClass]=\"{'mandatory': dynamicFields.accountNumberSuffix.isMandatory}\">\r\n                    {{ dynamicFields.accountNumberSuffix.label }}\r\n                </label>\r\n                <input id=\"accountNumberSuffix\" placeholder=\"{{dynamicFields.accountNumberSuffix.description}}\"\r\n                    name=\"accountNumberSuffix\" type=\"text\" class=\"form-control\" formControlName=\"accountNumberSuffix\"\r\n                    maxlength=\"{{dynamicFields.accountNumberSuffix.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.transitCode.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('transitCode', 'BankDetails') }\">\r\n                <label for=\"transitCode\" [ngClass]=\"{'mandatory': dynamicFields.transitCode.isMandatory}\">\r\n                    {{ dynamicFields.transitCode.label }}\r\n                </label>\r\n                <input id=\"transitCode\" name=\"transitCode\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"transitCode\" maxlength=\"{{dynamicFields.transitCode.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.bic.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('bic', 'BankDetails') }\">\r\n                <label for=\"bic\" [ngClass]=\"{'mandatory': dynamicFields.bic.isMandatory}\">\r\n                    {{ dynamicFields.bic.label }}\r\n                </label>\r\n                <ng-select [searchable]=\"true\" placeholder=\"{{dynamicFields.bic.description}}\" formControlName=\"bic\"\r\n                    id=\"bic\" name=\"bic\" (search)=\"bicKeyUp.next($event)\" [loading]=\"bicLoading\">\r\n                    <ng-option *ngFor=\"let bic of bicArr\" [value]=\"bic.value\">{{bic.value}}</ng-option>\r\n                </ng-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.iban.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('iban', 'BankDetails') }\">\r\n                <label for=\"iban\" [ngClass]=\"{'mandatory': dynamicFields.iban.isMandatory}\">\r\n                    {{ dynamicFields.iban.label }}\r\n                </label>\r\n                <input id=\"iban\" name=\"iban\" placeholder=\"{{dynamicFields.iban.description}}\" type=\"text\"\r\n                    class=\"form-control\" formControlName=\"iban\" maxlength=\"{{dynamicFields.iban.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"dynamicFields.swiftBic.isVisible\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('swiftBic', 'BankDetails') }\">\r\n                <label for=\"swiftBic\" [ngClass]=\"{'mandatory': dynamicFields.swiftBic.isMandatory}\">\r\n                    {{ dynamicFields.swiftBic.label }}\r\n                </label>\r\n                <ng-select [searchable]=\"true\" placeholder=\"{{dynamicFields.swiftBic.description}}\"\r\n                    formControlName=\"swiftBic\" id=\"swiftBic\" name=\"swiftBic\" (search)=\"swiftBicKeyUp.next($event)\"\r\n                    [loading]=\"swiftBicLoading\">\r\n                    <ng-option *ngFor=\"let bic of swiftBicArr\" [value]=\"bic.value\">{{bic.value}}</ng-option>\r\n                </ng-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"dynamicFields.abaRoutingNumber.isVisible\" class=\"col-lg-4 col-md-4 col-sm-12\"\r\n            formGroupName=\"BankDetails\">\r\n            <div class=\"form-group\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('abaRoutingNumber', 'BankDetails') }\">\r\n                <label for=\"abaRoutingNumber\" [ngClass]=\"{'mandatory': dynamicFields.abaRoutingNumber.isMandatory}\">\r\n                    {{ dynamicFields.abaRoutingNumber.label }}\r\n                </label>\r\n                <ng-select [searchable]=\"true\" placeholder=\"{{dynamicFields.abaRoutingNumber.description}}\"\r\n                    formControlName=\"abaRoutingNumber\" id=\"abaRoutingNumber\" name=\"abaRoutingNumber\"\r\n                    (search)=\"abaRoutingNumberKeyUp.next($event)\" [loading]=\"abaRoutingNumberLoading\">\r\n                    <ng-option *ngFor=\"let num of abaRoutingNumberArr\" [value]=\"num.value\">{{num.value}}</ng-option>\r\n                </ng-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"dynamicFields.sortCode.isVisible\" class=\"col-lg-4 col-md-4 col-sm-12\" style=\"position: relative\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('sortCode', 'BankDetails') }\">\r\n                <label for=\"sortCode\" [ngClass]=\"{'mandatory': dynamicFields.sortCode.isMandatory}\">\r\n                    {{ dynamicFields.sortCode.label }}\r\n                </label>\r\n                <ng-select [searchable]=\"true\" placeholder=\"{{dynamicFields.sortCode.description}}\"\r\n                    formControlName=\"sortCode\" id=\"sortCode\" name=\"sortCode\" (search)=\"sortCodeKeyUp.next($event)\"\r\n                    [loading]=\"sortCodeLoading\">\r\n                    <ng-option *ngFor=\"let sCode of sortCodeArr\" [value]=\"sCode.value\">{{sCode.value}}</ng-option>\r\n                </ng-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountHolderName.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('accountHolderName', 'BankDetails') }\">\r\n                <label for=\"accountHolderName\" [ngClass]=\"{'mandatory': dynamicFields.accountHolderName.isMandatory}\">\r\n                    {{ dynamicFields.accountHolderName.label }}\r\n                </label>\r\n                <input id=\"accountHolderName\" placeholder=\"{{dynamicFields.accountHolderName.description}}\"\r\n                    name=\"accountHolderName\" type=\"text\" class=\"form-control\" formControlName=\"accountHolderName\"\r\n                    maxlength=\"{{dynamicFields.accountHolderName.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.taxIdentifier.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('taxIdentifier', 'BankDetails') }\">\r\n                <label for=\"taxIdentifier\" [ngClass]=\"{'mandatory': dynamicFields.taxIdentifier.isMandatory}\">\r\n                    {{ dynamicFields.taxIdentifier.label }}\r\n                </label>\r\n                <input id=\"taxIdentifier\" name=\"taxIdentifier\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"taxIdentifier\" maxlength=\"{{dynamicFields.taxIdentifier.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"dynamicFields.countryCode.isVisible\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('countryCode', 'BankDetails') }\">\r\n                <label for=\"countryCode\" [ngClass]=\"{'mandatory': dynamicFields.countryCode.isMandatory}\">\r\n                    {{ dynamicFields.countryCode.label }}\r\n                </label>\r\n                <input id=\"countryCode\" name=\"countryCode\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"countryCode\" maxlength=\"{{dynamicFields.countryCode.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.currencyCode.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('currencyCode', 'BankDetails') }\">\r\n                <label for=\"currencyCode\" class=\"mandatory\">\r\n                    {{ dynamicFields.currencyCode.label }}\r\n                </label>\r\n                <input id=\"currencyCode\" name=\"currencyCode\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"currencyCode\" maxlength=\"{{dynamicFields.currencyCode.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.clabe.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('clabe', 'BankDetails') }\">\r\n                <label for=\"clabe\" class=\"mandatory\">\r\n                    {{ dynamicFields.clabe.label }}\r\n                </label>\r\n                <input id=\"clabe\" name=\"clabe\" type=\"text\" class=\"form-control\" formControlName=\"clabe\"\r\n                    maxlength=\"{{dynamicFields.clabe.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.streetAddress.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('streetAddress', 'BankDetails') }\">\r\n                <label for=\"streetAddress\" class=\"mandatory\">\r\n                    {{ dynamicFields.streetAddress.label }}\r\n                </label>\r\n                <input id=\"streetAddress\" name=\"streetAddress\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"streetAddress\" maxlength=\"{{dynamicFields.streetAddress.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.destinationCurrency.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('destinationCurrency', 'BankDetails') }\">\r\n                <label for=\"destinationCurrency\" class=\"mandatory\">\r\n                    {{ dynamicFields.destinationCurrency.label }}\r\n                </label>\r\n                <input id=\"destinationCurrency\" name=\"destinationCurrency\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"destinationCurrency\" maxlength=\"{{dynamicFields.destinationCurrency.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"dynamicFields.ifsc.isVisible\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('ifsc', 'BankDetails') }\">\r\n                <label for=\"ifsc\" [ngClass]=\"{'mandatory': dynamicFields.ifsc.isMandatory}\">\r\n                    {{ dynamicFields.ifsc.label }}\r\n                </label>\r\n                <ng-select [searchable]=\"true\" placeholder=\"{{dynamicFields.ifsc.description}}\" formControlName=\"ifsc\"\r\n                    id=\"ifsc\" name=\"ifsc\" (search)=\"ifscKeyUp.next($event)\" [loading]=\"ifscLoading\">\r\n                    <ng-option *ngFor=\"let item of ifscArr\" [value]=\"item.value\">{{item.value}}</ng-option>\r\n                </ng-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.branchCode.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\">\r\n                <label for=\"branchCode\" [ngClass]=\"{'mandatory': dynamicFields.branchCode.isMandatory}\">\r\n                    {{ dynamicFields.branchCode.label }}\r\n                </label>\r\n                <ng-select [searchable]=\"true\" placeholder=\"{{dynamicFields.branchCode.description}}\"\r\n                    formControlName=\"branchCode\" id=\"branchCode\" name=\"branchCode\"\r\n                    (search)=\"branchCodeKeyUp.next($event)\" [loading]=\"branchCodeLoading\">\r\n                    <ng-option *ngFor=\"let item of branchCodeArr\" [value]=\"item.value\">{{item.value}}</ng-option>\r\n                </ng-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountNumber.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('accountNumber', 'BankDetails') }\">\r\n                <label for=\"accountNumber\" [ngClass]=\"{'mandatory': dynamicFields.accountNumber.isMandatory}\">\r\n                    {{ dynamicFields.accountNumber.label }}\r\n                </label>\r\n                <input id=\"accountNumber\" placeholder=\"{{dynamicFields.accountNumber.description}}\" name=\"accountNumber\"\r\n                    type=\"text\" class=\"form-control\" formControlName=\"accountNumber\"\r\n                    maxlength=\"{{dynamicFields.accountNumber.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountFirstName.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\">\r\n                <label for=\"accountFirstName\" [ngClass]=\"{'mandatory': dynamicFields.accountFirstName.isMandatory}\">\r\n                    {{ dynamicFields.accountFirstName.label }}\r\n                </label>\r\n                <input id=\"accountFirstName\" placeholder=\"{{dynamicFields.accountFirstName.description}}\"\r\n                    name=\"accountFirstName\" type=\"text\" class=\"form-control\" formControlName=\"accountFirstName\"\r\n                    maxlength=\"{{dynamicFields.accountFirstName.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountMiddleName.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\">\r\n                <label for=\"accountMiddleName\" [ngClass]=\"{'mandatory': dynamicFields.accountMiddleName.isMandatory}\">\r\n                    {{ dynamicFields.accountMiddleName.label }}\r\n                </label>\r\n                <input id=\"accountMiddleName\" placeholder=\"{{dynamicFields.accountMiddleName.description}}\"\r\n                    name=\"accountMiddleName\" type=\"text\" class=\"form-control\" formControlName=\"accountMiddleName\"\r\n                    maxlength=\"{{dynamicFields.accountMiddleName.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngIf=\"dynamicFields.accountLastName.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"BankDetails\">\r\n                <label for=\"accountLastName\" [ngClass]=\"{'mandatory': dynamicFields.accountLastName.isMandatory}\">\r\n                    {{ dynamicFields.accountLastName.label }}\r\n                </label>\r\n                <input id=\"accountLastName\" placeholder=\"{{dynamicFields.accountLastName.description}}\"\r\n                    name=\"accountLastName\" type=\"text\" class=\"form-control\" formControlName=\"accountLastName\"\r\n                    maxlength=\"{{dynamicFields.accountLastName.maxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  height: 55px !important; }\n\n.info-form {\n  height: auto !important; }\n\n::ng-deep .ng-placeholder {\n  font-style: italic !important;\n  font-weight: 400 !important; }\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: BeneficiaryBankInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryBankInfoComponent", function() { return BeneficiaryBankInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/beneficiary.service */ "./src/app/admin/outbound-module/services/beneficiary.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BeneficiaryBankInfoComponent = /** @class */ (function () {
    function BeneficiaryBankInfoComponent(fb, beneficiaryService, toastrService) {
        this.fb = fb;
        this.beneficiaryService = beneficiaryService;
        this.toastrService = toastrService;
        this.formUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.debouneTime = 500;
        // Observables for async typeaheads
        this.bankNames = [];
        this.bankNamekeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.bankNameLoading = false;
        this.bankCodeKeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.bankCodes = [];
        this.bankCodeLoading = false;
        this.bankCode = null;
        this.bicKeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.bicArr = [];
        this.bicLoading = false;
        this.swiftBicKeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.swiftBicArr = [];
        this.swiftBicLoading = false;
        this.abaRoutingNumberKeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.abaRoutingNumberArr = [];
        this.abaRoutingNumberLoading = false;
        this.sortCodeKeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.sortCodeArr = [];
        this.sortCodeLoading = false;
        this.ifscKeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.ifscArr = [];
        this.ifscLoading = false;
        this.branchCodeKeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.branchCodeArr = [];
        this.branchCodeLoading = false;
    }
    BeneficiaryBankInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.BankDetails = this.fb.group({});
        this.identification = this.fb.group({});
        this.bankInfoForm = this.fb.group({
            BankDetails: this.BankDetails,
            identification: this.identification
        });
        this.initializeForm();
        if (this.isEdit) {
            this.onSelectBankName(this.editObject.bankDetails.bankName);
            if (this.editObject.bankDetails.bankCode) {
                this.getBankCodes(this.editObject.bankDetails.bankCode);
                this.onSelectBankCode(this.editObject.bankDetails.bankCode);
            }
            this.setFormValues(this.BankDetails, 'bankDetails');
            if (this.editObject.individual && this.editObject.individual.identificationList &&
                this.editObject.individual.identificationList.length) {
                this.setIdentificationForm(this.editObject.individual.identificationList);
            }
            if (this.editObject.business && this.editObject.business.identificationList &&
                this.editObject.business.identificationList.length) {
                this.setIdentificationForm(this.editObject.business.identificationList);
            }
            this.setFormValues(this.identification, 'bankDetails');
            this.formUpdate.emit({
                value: this.bankInfoForm.value,
                valid: this.bankInfoForm.valid
            });
        }
        this.bankInfoForm.valueChanges.subscribe(function (val) {
            _this.formUpdate.emit({
                value: _this.bankInfoForm.value,
                valid: _this.bankInfoForm.valid
            });
        });
        this.initializeSubscribers();
    };
    BeneficiaryBankInfoComponent.prototype.setIdentificationForm = function (identificationList) {
        var identificationObj = lodash__WEBPACK_IMPORTED_MODULE_3__["first"](identificationList);
        if (identificationObj.type) {
            this.identification['controls'].idType.setValue(identificationObj.type);
        }
        if (identificationObj.number) {
            this.identification['controls'].identificationNumber.setValue(identificationObj.number);
        }
        if (identificationObj.country) {
            this.identification['controls'].identificationCountry.setValue(identificationObj.country);
        }
        if (identificationObj.validFromDate) {
            var tempDate = new Date(identificationObj.validFromDate);
            this.identification['controls'].validFromDate.setValue(tempDate);
        }
        if (identificationObj.validToDate) {
            var tempDate = new Date(identificationObj.validToDate);
            this.identification['controls'].validToDate.setValue(tempDate);
        }
    };
    BeneficiaryBankInfoComponent.prototype.setFormValues = function (formGroup, formGroupName) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                var val = void 0;
                if (field === 'validFromDate' || field === 'validToDate') {
                    val = new Date(lodash__WEBPACK_IMPORTED_MODULE_3__["get"](_this.editObject, formGroupName + "." + field));
                }
                else {
                    val = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](_this.editObject, formGroupName + "." + field);
                }
                if (val) {
                    control.markAsDirty({ onlySelf: true });
                    control.setValue(val);
                }
            }
        });
    };
    BeneficiaryBankInfoComponent.prototype.initializeSubscribers = function () {
        var _this = this;
        this.bankNameSubscription = this.bankNamekeyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)); })).subscribe(function (res) {
            _this.getBankNames(res['term']);
        });
        this.bankCodeSubscription = this.bankCodeKeyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)); })).subscribe(function (res) {
            _this.getBankCodes(res['term']);
        });
        this.bicSubscription = this.bicKeyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)); })).subscribe(function (res) {
            _this.getBIC(res['term']);
        });
        this.swiftBicSubscription = this.swiftBicKeyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)); })).subscribe(function (res) {
            _this.getSwiftBIC(res['term']);
        });
        this.abaRoutingSubscription = this.abaRoutingNumberKeyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)); })).subscribe(function (res) {
            _this.getAbaRoutingNums(res['term']);
        });
        this.sortCodeSubscription = this.sortCodeKeyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)); })).subscribe(function (res) {
            _this.getSortCodes(res['term']);
        });
        this.ifscSubscription = this.ifscKeyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)); })).subscribe(function (res) {
            _this.getIFSC(res['term']);
        });
        this.branchCodeSubscription = this.branchCodeKeyUp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (search) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)); })).subscribe(function (res) {
            _this.getBranchCodes(res['term']);
        });
    };
    BeneficiaryBankInfoComponent.prototype.showErrorToast = function () {
        this.toastrService.error('Service is temporarily unavailable', '', {
            timeOut: 4000,
            enableHtml: true
        });
    };
    BeneficiaryBankInfoComponent.prototype.getBankNames = function (term) {
        var _this = this;
        this.bankNameLoading = true;
        this.beneficiaryService.getBankFields({
            countryCode: this.countryCode,
            activeField: 'bankName',
            bankName: term
        }).subscribe(function (res) {
            _this.setBankNamesResponse(res['searchResult']['results']['result']);
            _this.bankNameLoading = false;
        }, function (err) {
            _this.showErrorToast();
            _this.bankNameLoading = false;
        });
    };
    BeneficiaryBankInfoComponent.prototype.setBankNamesResponse = function (result) {
        var tempBanks = [];
        result.forEach(function (item) {
            tempBanks.push(item['fields'][0]['field']);
        });
        this.bankNames = tempBanks;
    };
    BeneficiaryBankInfoComponent.prototype.getBankCodes = function (term) {
        var _this = this;
        this.bankCodeLoading = true;
        var bankName = this.bankInfoForm.value['BankDetails']['bankName'];
        this.beneficiaryService.getBankFields({
            countryCode: this.countryCode,
            activeField: 'bankCode',
            bankCode: term,
            bankName: bankName ? bankName : (this.isEdit ? this.editObject.bankDetails.bankName : '')
        }).subscribe(function (res) {
            _this.setBankCodesResponse(res['searchResult']['results']['result']);
            _this.bankCodeLoading = false;
        }, function (err) {
            _this.showErrorToast();
            _this.bankCodeLoading = false;
        });
    };
    BeneficiaryBankInfoComponent.prototype.setBankCodesResponse = function (result) {
        var _this = this;
        var tempBanks = [];
        result.forEach(function (item) {
            tempBanks.push(item['fields'][0]['field']);
        });
        this.bankCodes = tempBanks;
        this.bankCodes.map(function (bank, i) {
            if (bank['value'] === '') {
                _this.bankCodes.splice(i, 1);
            }
        });
        if (this.bankCodes.length === 1) {
            this.bankCode = this.bankCodes[0].value;
        }
    };
    BeneficiaryBankInfoComponent.prototype.getBIC = function (term) {
        var _this = this;
        this.bicLoading = true;
        this.beneficiaryService.getBankFields({
            countryCode: this.countryCode,
            activeField: 'bic',
            bic: term,
            bankName: this.bankInfoForm.value['BankDetails']['bankName']
        }).subscribe(function (res) {
            _this.setBICResponse(res['searchResult']['results']['result']);
            _this.bicLoading = false;
        }, function (err) {
            _this.showErrorToast();
            _this.bicLoading = false;
        });
    };
    BeneficiaryBankInfoComponent.prototype.setBICResponse = function (result) {
        var tempBanks = [];
        result.forEach(function (item) {
            tempBanks.push(item['fields'][0]['field']);
        });
        this.bicArr = tempBanks;
    };
    BeneficiaryBankInfoComponent.prototype.getSwiftBIC = function (term) {
        var _this = this;
        this.swiftBicLoading = true;
        this.beneficiaryService.getBankFields({
            countryCode: this.countryCode,
            activeField: 'swiftBic',
            swiftBic: term,
            bankName: this.bankInfoForm.value['BankDetails']['bankName']
        }).subscribe(function (res) {
            _this.setSwiftBICResponse(res['searchResult']['results']['result']);
            _this.swiftBicLoading = false;
        }, function (err) {
            _this.showErrorToast();
            _this.swiftBicLoading = false;
        });
    };
    BeneficiaryBankInfoComponent.prototype.setSwiftBICResponse = function (result) {
        var tempBanks = [];
        result.forEach(function (item) {
            tempBanks.push(item['fields'][0]['field']);
        });
        this.swiftBicArr = tempBanks;
    };
    BeneficiaryBankInfoComponent.prototype.getAbaRoutingNums = function (term) {
        var _this = this;
        this.abaRoutingNumberLoading = true;
        this.beneficiaryService.getBankFields({
            countryCode: this.countryCode,
            activeField: 'abaRoutingNumber',
            abaRoutingNumber: term,
            bankName: this.bankInfoForm.value['BankDetails']['bankName']
        }).subscribe(function (res) {
            _this.setAbaResponse(res['searchResult']['results']['result']);
            _this.abaRoutingNumberLoading = false;
        }, function (err) {
            _this.showErrorToast();
            _this.abaRoutingNumberLoading = false;
        });
    };
    BeneficiaryBankInfoComponent.prototype.setAbaResponse = function (result) {
        var tempBanks = [];
        result.forEach(function (item) {
            tempBanks.push(item['fields'][0]['field']);
        });
        this.abaRoutingNumberArr = tempBanks;
    };
    BeneficiaryBankInfoComponent.prototype.getSortCodes = function (term) {
        var _this = this;
        this.sortCodeLoading = true;
        this.beneficiaryService.getBankFields({
            countryCode: this.countryCode,
            activeField: 'sortCode',
            sortCode: term,
            bankName: this.bankInfoForm.value['BankDetails']['bankName']
        }).subscribe(function (res) {
            _this.setSortCodeResponse(res['searchResult']['results']['result']);
            _this.sortCodeLoading = false;
        }, function (err) {
            _this.showErrorToast();
            _this.sortCodeLoading = false;
        });
    };
    BeneficiaryBankInfoComponent.prototype.setSortCodeResponse = function (result) {
        var tempBanks = [];
        result.forEach(function (item) {
            tempBanks.push(item['fields'][0]['field']);
        });
        this.sortCodeArr = tempBanks;
    };
    BeneficiaryBankInfoComponent.prototype.getIFSC = function (term) {
        var _this = this;
        this.ifscLoading = true;
        this.beneficiaryService.getBankFields({
            countryCode: this.countryCode,
            activeField: 'ifsc',
            ifsc: term,
            bankName: this.bankInfoForm.value['BankDetails']['bankName']
        }).subscribe(function (res) {
            _this.setIFSCResponse(res['searchResult']['results']['result']);
            _this.ifscLoading = false;
        }, function (err) {
            _this.showErrorToast();
            _this.ifscLoading = false;
        });
    };
    BeneficiaryBankInfoComponent.prototype.setIFSCResponse = function (result) {
        var tempBanks = [];
        result.forEach(function (item) {
            tempBanks.push(item['fields'][0]['field']);
        });
        this.ifscArr = tempBanks;
    };
    BeneficiaryBankInfoComponent.prototype.getBranchCodes = function (term) {
        var _this = this;
        this.branchCodeLoading = true;
        var bankFieldData = {
            countryCode: this.countryCode,
            activeField: 'branchCode',
            bankCode: this.bankCode,
            branchCode: term,
            bankName: this.bankInfoForm.value['BankDetails']['bankName']
        };
        if (!this.bankCode) {
            delete bankFieldData['bankCode'];
        }
        this.beneficiaryService.getBankFields(bankFieldData).subscribe(function (res) {
            _this.setBranchCodeResponse(res['searchResult']['results']['result']);
            _this.branchCodeLoading = false;
        }, function (err) {
            _this.showErrorToast();
            _this.branchCodeLoading = false;
        });
    };
    BeneficiaryBankInfoComponent.prototype.setBranchCodeResponse = function (result) {
        var tempBanks = [];
        result.forEach(function (item) {
            tempBanks.push(item['fields'][0]['field']);
        });
        this.branchCodeArr = tempBanks;
    };
    BeneficiaryBankInfoComponent.prototype.onSelectBankName = function (selectedBank) {
        this.resetBankArrays();
        this.resetBankControls();
        if (!selectedBank) {
            this.disableBankControls();
        }
        else {
            this.getBankCodes('');
            this.BankDetails.controls['bankCode'] ? this.BankDetails.controls['bankCode'].enable() : function () { return null; };
            this.BankDetails.controls['branchCode'] ? this.BankDetails.controls['branchCode'].enable() : function () { return null; };
            this.BankDetails.controls['bic'] ? this.BankDetails.controls['bic'].enable() : function () { return null; };
            this.BankDetails.controls['swiftBic'] ? this.BankDetails.controls['swiftBic'].enable() : function () { return null; };
            this.BankDetails.controls['abaRoutingNumber'] ? this.BankDetails.controls['abaRoutingNumber'].enable() : function () { return null; };
            this.BankDetails.controls['sortCode'] ? this.BankDetails.controls['sortCode'].enable() : function () { return null; };
            this.BankDetails.controls['ifsc'] ? this.BankDetails.controls['ifsc'].enable() : function () { return null; };
            // IF NO BANK CODE TO ENABLE BRANCH CODE
            if (!this.dynamicFields['bankCode']['isVisible']) {
                this.BankDetails.controls['branchCode'] ? this.BankDetails.controls['branchCode'].enable() : function () { return null; };
            }
        }
    };
    BeneficiaryBankInfoComponent.prototype.onSelectBankCode = function (selectedBankCode) {
        this.branchCodeArr = [];
        this.BankDetails.controls['branchCode'] ? this.BankDetails.controls['branchCode'].setValue(undefined) : function () { return null; };
        if (!selectedBankCode) {
            this.BankDetails.controls['branchCode'] ? this.BankDetails.controls['branchCode'].disable() : function () { return null; };
        }
        else {
            this.BankDetails.controls['branchCode'] ? this.BankDetails.controls['branchCode'].enable() : function () { return null; };
        }
    };
    BeneficiaryBankInfoComponent.prototype.resetBankArrays = function () {
        this.bankCodes = [];
        this.branchCodeArr = [];
        this.bicArr = [];
        this.swiftBicArr = [];
        this.abaRoutingNumberArr = [];
        this.sortCodeArr = [];
        this.ifscArr = [];
    };
    BeneficiaryBankInfoComponent.prototype.resetBankControls = function () {
        this.BankDetails.controls['bankCode'] ? this.BankDetails.controls['bankCode'].setValue(undefined) : function () { return null; };
        this.BankDetails.controls['branchCode'] ? this.BankDetails.controls['branchCode'].setValue(undefined) : function () { return null; };
        this.BankDetails.controls['bic'] ? this.BankDetails.controls['bic'].setValue(undefined) : function () { return null; };
        this.BankDetails.controls['swiftBic'] ? this.BankDetails.controls['swiftBic'].setValue(undefined) : function () { return null; };
        this.BankDetails.controls['abaRoutingNumber'] ? this.BankDetails.controls['abaRoutingNumber'].setValue(undefined) : function () { return null; };
        this.BankDetails.controls['sortCode'] ? this.BankDetails.controls['sortCode'].setValue(undefined) : function () { return null; };
        this.BankDetails.controls['ifsc'] ? this.BankDetails.controls['ifsc'].setValue(undefined) : function () { return null; };
    };
    BeneficiaryBankInfoComponent.prototype.disableBankControls = function () {
        this.BankDetails.controls['bankCode'] ? this.BankDetails.controls['bankCode'].disable() : function () { return null; };
        this.BankDetails.controls['branchCode'] ? this.BankDetails.controls['branchCode'].disable() : function () { return null; };
        this.BankDetails.controls['bic'] ? this.BankDetails.controls['bic'].disable() : function () { return null; };
        this.BankDetails.controls['swiftBic'] ? this.BankDetails.controls['swiftBic'].disable() : function () { return null; };
        this.BankDetails.controls['abaRoutingNumber'] ? this.BankDetails.controls['abaRoutingNumber'].disable() : function () { return null; };
        this.BankDetails.controls['sortCode'] ? this.BankDetails.controls['sortCode'].disable() : function () { return null; };
        this.BankDetails.controls['ifsc'] ? this.BankDetails.controls['ifsc'].disable() : function () { return null; };
    };
    BeneficiaryBankInfoComponent.prototype.initializeForm = function () {
        for (var key in this.dynamicFields) {
            // Add bank Details
            if (this.dynamicFields[key]['type'] === 'BankDetails' && this.dynamicFields[key]['isVisible']) {
                this.BankDetails.addControl(key, this.fb.control(undefined, this.dynamicFields[key]['isMandatory'] ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : null));
            }
            else if (this.dynamicFields[key]['type'] === 'identification' && this.dynamicFields[key]['isVisible']) {
                this.identification.addControl(key, this.fb.control(undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            }
        }
        // DISABLE ALL DEPENDENT TYPEAHEADS
        this.disableBankControls();
    };
    BeneficiaryBankInfoComponent.prototype.getErrorClassWithKeys = function (selector, formName) {
        return (!this.bankInfoForm['controls'][formName]['controls'][selector].pristine &&
            this.bankInfoForm['controls'][formName]['controls'][selector].invalid);
    };
    BeneficiaryBankInfoComponent.prototype.validateForm = function () {
        this.validateAllFormFields(this.bankInfoForm);
    };
    BeneficiaryBankInfoComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    BeneficiaryBankInfoComponent.prototype.ngOnDestroy = function () {
        this.bankNameSubscription.unsubscribe();
        this.bankCodeSubscription.unsubscribe();
        this.bicSubscription.unsubscribe();
        this.swiftBicSubscription.unsubscribe();
        this.abaRoutingSubscription.unsubscribe();
        this.sortCodeSubscription.unsubscribe();
        this.ifscSubscription.unsubscribe();
        this.branchCodeSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "countryCode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "dynamicFieldsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "formUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "dynamicFields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "dynamicFieldOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "editObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryBankInfoComponent.prototype, "isoCountries", void 0);
    BeneficiaryBankInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-bank-info',
            template: __webpack_require__(/*! ./beneficiary-bank-info.component.html */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.html"),
            styles: [__webpack_require__(/*! ./beneficiary-bank-info.component.scss */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_2__["BeneficiaryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], BeneficiaryBankInfoComponent);
    return BeneficiaryBankInfoComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"businessForm\">\r\n    <div class=\"row beneficiary-sub-section\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"organizationDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('legalEntityName', 'organizationDetails') }\">\r\n                <label for=\"legalEntityName\" class=\"mandatory\">\r\n                    {{'label_beneficiary_organization_business_name' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"legalEntityName\" name=\"legalEntityName\"\r\n                    validation=\"required\" formControlName=\"legalEntityName\"  maxlength=\"{{beneficiaryNameMaxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\"\r\n                [ngClass]=\"{ 'has-error':  (businessForm.controls.externalBeneficiaryId.invalid && !businessForm.controls.externalBeneficiaryId.pristine) }\">\r\n                <label for=\"externalBeneficiaryId\" class=\"mandatory\">\r\n                    {{'label_beneficiary_organization_beneficiary_id' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"externalBeneficiaryId\" name=\"externalBeneficiaryId\"  maxlength=\"{{beneficiaryIdMaxLength}}\"\r\n                    validation=\"required\" formControlName=\"externalBeneficiaryId\" [attr.disabled]=\"isEdit ? '' : null\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"address\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('legalEntityCountry', 'address') }\">\r\n                <label for=\"legalEntityCountry\" class=\"mandatory\">\r\n                    {{'label_destination_country_currency' | translate }}\r\n                </label>\r\n                <select id=\"legalEntityCountry\" name=\"legalEntityCountry\" class=\"form-control drop_down\"\r\n                    validation=\"required\" formControlName=\"legalEntityCountry\" (change)=\"countryChange($event)\" [attr.disabled]=\"isEdit ? '' : null\">\r\n                    <option value=\"\" translate>{{'label_select_option' | translate }}</option>\r\n                    <option *ngFor=\"let country of countries | orderBy : 'countryNameEn'\" [value]=\"country.countryCode\">{{country.countryNameEn}} -\r\n                        {{country.currencyCode}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"organizationDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('legalEntityRegistrationNumber', 'organizationDetails') }\">\r\n                <label for=\"legalEntityRegistrationNumber\" class=\"mandatory\">\r\n                    {{'label_beneficiary_registration_number' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"legalEntityRegistrationNumber\"\r\n                    name=\"legalEntityRegistrationNumber\" validation=\"required\"\r\n                    formControlName=\"legalEntityRegistrationNumber\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"organizationDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('legalEntityRegistrationCountry', 'organizationDetails') }\">\r\n                <label for=\"legalEntityRegistrationCountry\" class=\"mandatory\">\r\n                    {{'label_beneficiary_registration_country' | translate }}\r\n                </label>\r\n                <select id=\"legalEntityRegistrationCountry\" name=\"legalEntityRegistrationCountry\"\r\n                    class=\"form-control drop_down\" validation=\"required\"\r\n                    formControlName=\"legalEntityRegistrationCountry\">\r\n                    <option value=\"\">{{'label_select_option' | translate }}</option>\r\n                    <option *ngFor=\"let country of isoCountries\" [value]=\"country.code\">{{country.countryName}}</option>\r\n\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"organizationDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('legalEntityRegistrationProvince', 'organizationDetails') }\">\r\n                <label for=\"legalEntityRegistrationProvince\">\r\n                    {{'label_beneficiary_registration_province' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"legalEntityRegistrationProvince\"\r\n                    name=\"legalEntityRegistrationProvince\" formControlName=\"legalEntityRegistrationProvince\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"organizationDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('legalEntityEmail', 'organizationDetails') }\">\r\n                <label for=\"legalEntityEmail\">\r\n                    {{'label_beneficiary_email' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"legalEntityEmail\" name=\"legalEntityEmail\"\r\n                    formControlName=\"legalEntityEmail\" />\r\n                <p *ngIf=\"businessForm?.controls.organizationDetails.controls.legalEntityEmail?.errors?.inValidEmail\"\r\n                    class=\"error_msg\">\r\n                    {{'beneficiary_valid_email' | translate }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n                <div class=\"form-group\" formGroupName=\"address\"\r\n                    [ngClass]=\"{ 'has-error': getErrorClassWithKeys('legalEntityAddressLine1', 'address') }\">\r\n                    <label for=\"legalEntityAddressLine1\" class=\"mandatory\">\r\n                        {{'label_beneficiary_address_line_1' | translate }}\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"legalEntityAddressLine1\" name=\"legalEntityAddressLine1\"\r\n                        validation=\"required\" formControlName=\"legalEntityAddressLine1\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"form-group\" formGroupName=\"address\">\r\n                    <label for=\"legalEntityAddressLine2\">\r\n                        {{'label_beneficiary_address_line_2' | translate }}\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"legalEntityAddressLine2\" name=\"legalEntityAddressLine2\"\r\n                        formControlName=\"legalEntityAddressLine2\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"form-group\" formGroupName=\"address\"\r\n                    [ngClass]=\"{ 'has-error': getErrorClassWithKeys('legalEntityCity', 'address') }\">\r\n                    <label for=\"legalEntityCity\" class=\"mandatory\">\r\n                        {{'label_beneficiary_city' | translate }}\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"legalEntityCity\" name=\"legalEntityCity\"\r\n                        validation=\"required\" formControlName=\"legalEntityCity\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"form-group\" formGroupName=\"address\" *ngIf=\"!provinceDropdown\">\r\n                    <label for=\"legalEntityProvince\">\r\n                        {{'label_beneficiary_province' | translate }}\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"legalEntityProvince\" name=\"legalEntityProvince\"\r\n                        formControlName=\"legalEntityProvince\" />\r\n                </div>\r\n                <div class=\"form-group\" formGroupName=\"address\" *ngIf=\"provinceDropdown\">\r\n                    <label for=\"individualBeneficiaryProvince\">\r\n                        {{'label_beneficiary_province' | translate }}\r\n                    </label>\r\n                    <select id=\"individualBeneficiaryProvince\" name=\"individualBeneficiaryProvince\"\r\n                        class=\"form-control drop_down\" formControlName=\"legalEntityProvince\">\r\n                        <option value=\"\">{{'label_select_option' | translate }}</option>\r\n                        <option *ngFor=\"let province of provinces\" [value]=\"province.provinceCode\">\r\n                            {{province.provinceName}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"form-group\" formGroupName=\"address\">\r\n                    <label for=\"legalEntityPostcode\">\r\n                        {{'label_beneficiary_post_code' | translate }}\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"legalEntityPostcode\" name=\"legalEntityPostcode\"\r\n                        formControlName=\"legalEntityPostcode\" />\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: BeneficiaryCreateBusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryCreateBusinessComponent", function() { return BeneficiaryCreateBusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/app/admin/outbound-module/utils/index.ts");
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/beneficiary.service */ "./src/app/admin/outbound-module/services/beneficiary.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/app/admin/outbound-module/constants/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BeneficiaryCreateBusinessComponent = /** @class */ (function () {
    function BeneficiaryCreateBusinessComponent(fb, beneficiaryService) {
        this.fb = fb;
        this.beneficiaryService = beneficiaryService;
        this.formUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countryUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.beneficiaryIdMaxLength = 70;
        this.beneficiaryNameMaxLength = 69;
        this.provinceDropdown = false;
        this.provinces = [];
        this.countryInputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    BeneficiaryCreateBusinessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeBusinessForm();
        if (this.isEdit) {
            this.setEditForm(this.editObject);
        }
        this.formUpdated.emit({ value: this.businessForm.value, valid: this.businessForm.valid });
        this.businessForm.valueChanges.subscribe(function (val) {
            _this.formUpdated.emit({ value: val, valid: _this.businessForm.valid });
        });
        this.beneficiaryService.resetForm.subscribe(function (data) {
            if (data) {
                _this.initializeBusinessForm();
                _this.beneficiaryService.resetForm.next(false);
            }
        });
        this.countryInputSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (value) {
            _this.updateViewForCountryChange();
        });
    };
    BeneficiaryCreateBusinessComponent.prototype.initializeBusinessForm = function () {
        this.organizationDetailsForm = this.fb.group({
            legalEntityName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            legalEntityRegistrationNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            legalEntityRegistrationCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            legalEntityRegistrationProvince: [''],
            legalEntityEmail: ['', [_utils__WEBPACK_IMPORTED_MODULE_2__["ValidateEmail"]]]
        });
        this.addressForm = this.fb.group({
            legalEntityCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            legalEntityAddressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            legalEntityAddressLine2: [''],
            legalEntityCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            legalEntityProvince: [''],
            legalEntityPostcode: ['']
        });
        this.businessForm = this.fb.group({
            organizationDetails: this.organizationDetailsForm,
            address: this.addressForm,
            externalBeneficiaryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BeneficiaryCreateBusinessComponent.prototype.setEditForm = function (editObj) {
        this.setFields(this.organizationDetailsForm);
        this.setFields(this.addressForm);
        // US OR CANADA  CASE
        if (this.businessForm.value.address.legalEntityCountry === _constants__WEBPACK_IMPORTED_MODULE_4__["PROVINCE_COUNTRIES"].CANADA ||
            this.businessForm.value.address.legalEntityCountry === _constants__WEBPACK_IMPORTED_MODULE_4__["PROVINCE_COUNTRIES"].US) {
            this.provinceDropdown = true;
            this.getProvinces();
        }
        this.businessForm['controls'].externalBeneficiaryId.setValue(this.editObject.externalBeneficiaryId);
    };
    BeneficiaryCreateBusinessComponent.prototype.setFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                var val = lodash__WEBPACK_IMPORTED_MODULE_5__["get"](_this.editObject, _this.getFromParams(field));
                if (val) {
                    control.setValue(val);
                }
            }
        });
    };
    BeneficiaryCreateBusinessComponent.prototype.getFromParams = function (field) {
        var editKey = '';
        _constants__WEBPACK_IMPORTED_MODULE_4__["CREATE_BENEFICIARY_BUSINESS_PARAMS"].forEach(function (param) {
            if (param.add === field) {
                editKey = param.edit;
            }
        });
        return editKey;
    };
    BeneficiaryCreateBusinessComponent.prototype.countryChange = function (event) {
        this.countryInputSubject.next(event);
    };
    BeneficiaryCreateBusinessComponent.prototype.updateViewForCountryChange = function () {
        if (this.businessForm.value.address.legalEntityCountry === _constants__WEBPACK_IMPORTED_MODULE_4__["PROVINCE_COUNTRIES"].CANADA ||
            this.businessForm.value.address.legalEntityCountry === _constants__WEBPACK_IMPORTED_MODULE_4__["PROVINCE_COUNTRIES"].US) {
            this.provinceDropdown = true;
            this.getProvinces();
        }
        else {
            this.provinceDropdown = false;
            this.provinces = [];
        }
        this.countryUpdate.emit(this.businessForm.value.address.legalEntityCountry);
    };
    BeneficiaryCreateBusinessComponent.prototype.getProvinces = function () {
        var _this = this;
        this.beneficiaryService.getProvinces().subscribe(function (res) {
            _this.provinces = res;
        });
    };
    BeneficiaryCreateBusinessComponent.prototype.getErrorClassWithKeys = function (selector, formName) {
        return (!this.businessForm['controls'][formName]['controls'][selector].pristine &&
            this.businessForm['controls'][formName]['controls'][selector].invalid);
    };
    BeneficiaryCreateBusinessComponent.prototype.validateForm = function () {
        this.validateAllFormFields(this.businessForm);
    };
    BeneficiaryCreateBusinessComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    BeneficiaryCreateBusinessComponent.prototype.ngOnDestroy = function () {
        this.beneficiaryService.resetForm.next(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateBusinessComponent.prototype, "formUpdated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateBusinessComponent.prototype, "countryUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateBusinessComponent.prototype, "countries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateBusinessComponent.prototype, "isoCountries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateBusinessComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateBusinessComponent.prototype, "editObject", void 0);
    BeneficiaryCreateBusinessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-create-business',
            template: __webpack_require__(/*! ./beneficiary-create-business.component.html */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.html"),
            styles: [__webpack_require__(/*! ./beneficiary-create-business.component.scss */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_3__["BeneficiaryService"]])
    ], BeneficiaryCreateBusinessComponent);
    return BeneficiaryCreateBusinessComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"individualForm\">\r\n    <div class=\"row beneficiary-sub-section\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"personalDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('givenNames', 'personalDetails') }\">\r\n                <label for=\"givenNames\" class=\"mandatory\">\r\n                    {{'label_beneficiary_individual_first_name' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"givenNames\" name=\"givenNames\" validation=\"required\"\r\n                    formControlName=\"givenNames\" maxlength=\"{{beneficiaryNameMaxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"personalDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('familyName', 'personalDetails') }\">\r\n                <label for=\"familyName\" class=\"mandatory\">\r\n                    {{'label_beneficiary_individual_last_name' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"familyName\" name=\"familyName\" validation=\"required\"\r\n                    formControlName=\"familyName\" maxlength=\"{{beneficiaryNameMaxLength}}\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\"\r\n                [ngClass]=\"{ 'has-error':  (individualForm.controls.externalBeneficiaryId.invalid && !individualForm.controls.externalBeneficiaryId.pristine) }\">\r\n                <label for=\"externalBeneficiaryId\" class=\"mandatory\">\r\n                    {{'label_beneficiary_individual_beneficiary_id' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"externalBeneficiaryId\" name=\"externalBeneficiaryId\"\r\n                    validation=\"required\" formControlName=\"externalBeneficiaryId\" maxlength=\"{{beneficiaryIdMaxLength}}\"\r\n                    [attr.disabled]=\"isEdit ? '' : null\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"personalDetails\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('email', 'personalDetails') }\">\r\n                <label for=\"email\">\r\n                    {{'label_beneficiary_email' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\" />\r\n                <p class=\"error_msg\"\r\n                    *ngIf=\"individualForm?.controls.personalDetails.controls.email?.errors?.inValidEmail\">\r\n                    {{'beneficiary_valid_email' | translate }}\r\n                </p>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"address\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('individualBeneficiaryCountry', 'address') }\">\r\n                <label for=\"individualBeneficiaryCountry\" class=\"mandatory\">\r\n                    {{'label_destination_country_currency' | translate }}\r\n                </label>\r\n                <select id=\"individualBeneficiaryCountry\" name=\"individualBeneficiaryCountry\"\r\n                    class=\"form-control drop_down\" validation=\"required\" formControlName=\"individualBeneficiaryCountry\"\r\n                    (change)=\"countryChange($event)\" [attr.disabled]=\"isEdit ? '' : null\">\r\n                    <option value=\"\">{{'label_select_option' | translate }}</option>\r\n                    <option *ngFor=\"let country of countries | orderBy : 'countryNameEn'\" [value]=\"country.countryCode\">\r\n                        {{country.countryNameEn}} -\r\n                        {{country.currencyCode}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\"\r\n            *ngIf=\"birthInfoSet && dynamicFields && dynamicFields.cityOfBirth.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"birthInformation\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('cityOfBirth', 'birthInformation') }\">\r\n                <label for=\"cityOfBirth\" [ngClass]=\"{'mandatory': dynamicFields.cityOfBirth.isMandatory}\">\r\n                    {{'label_city_of_birth' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"cityOfBirth\" name=\"cityOfBirth\" validation=\"required\"\r\n                    formControlName=\"cityOfBirth\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\"\r\n            *ngIf=\"birthInfoSet && dynamicFields && dynamicFields.countryOfBirth.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"birthInformation\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('countryOfBirth', 'birthInformation') }\">\r\n                <label for=\"countryOfBirth\" [ngClass]=\"{'mandatory': dynamicFields.countryOfBirth.isMandatory}\">\r\n                    {{'label_country_of_birth' | translate }}\r\n                </label>\r\n                <select id=\"countryOfBirth\" name=\"countryOfBirth\" class=\"form-control drop_down\" validation=\"required\"\r\n                    formControlName=\"countryOfBirth\">\r\n                    <option value=\"\">{{'label_select_option' | translate }}</option>\r\n                    <option *ngFor=\"let country of isoCountries\" [value]=\"country.code\">{{country.countryName}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\"\r\n            *ngIf=\"birthInfoSet && dynamicFields && dynamicFields.dateOfBirth.isVisible\">\r\n            <div class=\"form-group\" formGroupName=\"birthInformation\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('dateOfBirth', 'birthInformation') }\">\r\n                <label for=\"dateOfBirth\" [ngClass]=\"{'mandatory': dynamicFields.dateOfBirth.isMandatory}\">\r\n                    {{'label_date_of_birth' | translate }}\r\n                </label>\r\n                <div class=\"input-group\" dropdown>\r\n                    <input type=\"text\" class=\"form-control\" bsDatepicker onkeydown=\"return false\"\r\n                        formControlName=\"dateOfBirth\"\r\n                        [bsConfig]=\"{ dateInputFormat: 'MM/DD/YYYY'}\"\r\n                        [maxDate]=\"maxDate\" #dpYMD=\"bsDatepicker\">\r\n\r\n                    <div class=\"input-group-addon calendar-point\" (click)=\"dpYMD.toggle()\" dropdownToggle> <span\r\n                            class=\"icon-calendar\"><img src=\"assets/image/datepicker.png\" alt=\"User\"></span> </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"address\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('individualBeneficiaryAddressLine1', 'address') }\">\r\n                <label for=\"individualBeneficiaryAddressLine1\" class=\"mandatory\">\r\n                    {{'label_beneficiary_address_line_1' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"individualBeneficiaryAddressLine1\"\r\n                    name=\"individualBeneficiaryAddressLine1\" validation=\"required\"\r\n                    formControlName=\"individualBeneficiaryAddressLine1\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"address\">\r\n                <label for=\"individualBeneficiaryAddressLine2\">\r\n                    {{'label_beneficiary_address_line_2' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"individualBeneficiaryAddressLine2\"\r\n                    name=\"individualBeneficiaryAddressLine2\" placeholder=\"\"\r\n                    formControlName=\"individualBeneficiaryAddressLine2\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"address\"\r\n                [ngClass]=\"{ 'has-error': getErrorClassWithKeys('individualBeneficiaryCity', 'address') }\">\r\n                <label for=\"individualBeneficiaryCity\" class=\"mandatory\">\r\n                    {{'label_beneficiary_city' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"individualBeneficiaryCity\" name=\"individualBeneficiaryCity\"\r\n                    validation=\"required\" formControlName=\"individualBeneficiaryCity\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"address\" *ngIf=\"!provinceDropdown\">\r\n                <label for=\"individualBeneficiaryProvince\">\r\n                    {{'label_beneficiary_province' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"individualBeneficiaryProvince\"\r\n                    name=\"individualBeneficiaryProvince\" formControlName=\"individualBeneficiaryProvince\" />\r\n            </div>\r\n            <div class=\"form-group\" formGroupName=\"address\" *ngIf=\"provinceDropdown\">\r\n                <label for=\"individualBeneficiaryProvince\">\r\n                    {{'label_beneficiary_province' | translate }}\r\n                </label>\r\n                <select id=\"individualBeneficiaryProvince\" name=\"individualBeneficiaryProvince\"\r\n                    class=\"form-control drop_down\" formControlName=\"individualBeneficiaryProvince\">\r\n                    <option value=\"\">{{'label_select_option' | translate }}</option>\r\n                    <option *ngFor=\"let province of provinces\" [value]=\"province.provinceCode\">{{province.provinceName}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div class=\"form-group\" formGroupName=\"address\">\r\n                <label for=\"individualBeneficiaryPostcode\">\r\n                    {{'label_beneficiary_post_code' | translate }}\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"individualBeneficiaryPostcode\"\r\n                    name=\"individualBeneficiaryPostcode\" formControlName=\"individualBeneficiaryPostcode\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row:after {\n  clear: both;\n  padding-top: 15px; }\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: BeneficiaryCreateIndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryCreateIndividualComponent", function() { return BeneficiaryCreateIndividualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/app/admin/outbound-module/utils/index.ts");
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/beneficiary.service */ "./src/app/admin/outbound-module/services/beneficiary.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/app/admin/outbound-module/constants/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BeneficiaryCreateIndividualComponent = /** @class */ (function () {
    function BeneficiaryCreateIndividualComponent(fb, beneficiaryService) {
        this.fb = fb;
        this.beneficiaryService = beneficiaryService;
        this.formUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countryUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.provinces = [];
        this.provinceDropdown = false;
        this.birthInfoSet = true;
        this.beneficiaryIdMaxLength = 70;
        this.beneficiaryNameMaxLength = 69;
        this.countryInputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.maxDate = new Date();
    }
    BeneficiaryCreateIndividualComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeIndividualForm();
        if (this.isEdit) {
            this.setEditForm(this.editObject);
        }
        this.formUpdated.emit({ value: this.individualForm.value, valid: this.individualForm.valid });
        this.individualForm.valueChanges.subscribe(function (val) {
            _this.formUpdated.emit({ value: val, valid: _this.individualForm.valid });
        });
        this.countryInputSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (value) {
            _this.updateViewForCountryChange();
        });
    };
    BeneficiaryCreateIndividualComponent.prototype.initializeIndividualForm = function () {
        this.birthInfoForm = this.fb.group({});
        this.personalDetailsForm = this.fb.group({
            givenNames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            familyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _utils__WEBPACK_IMPORTED_MODULE_2__["ValidateEmail"]],
        });
        this.addressForm = this.fb.group({
            individualBeneficiaryCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            individualBeneficiaryAddressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            individualBeneficiaryAddressLine2: [''],
            individualBeneficiaryCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            individualBeneficiaryProvince: [''],
            individualBeneficiaryPostcode: ['']
        });
        this.individualForm = this.fb.group({
            personalDetails: this.personalDetailsForm,
            address: this.addressForm,
            birthInformation: this.birthInfoForm,
            externalBeneficiaryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BeneficiaryCreateIndividualComponent.prototype.setEditForm = function (editObject) {
        this.setBirthInfo();
        this.setFields(this.birthInfoForm);
        this.setFields(this.personalDetailsForm);
        this.setFields(this.addressForm);
        this.individualForm['controls'].externalBeneficiaryId.setValue(this.editObject.externalBeneficiaryId);
        // US OR CANADA  CASE
        if (this.individualForm.value.address.individualBeneficiaryCountry === 'CA' ||
            this.individualForm.value.address.individualBeneficiaryCountry === 'US') {
            this.provinceDropdown = true;
            this.getProvinces();
        }
    };
    BeneficiaryCreateIndividualComponent.prototype.setFields = function (formGroup) {
        var _this = this;
        if (formGroup.controls) {
            Object.keys(formGroup.controls).forEach(function (field) {
                var control = formGroup.get(field);
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                    var val = void 0;
                    if (field === 'dateOfBirth') {
                        val = new Date(lodash__WEBPACK_IMPORTED_MODULE_4__["get"](_this.editObject, _this.getFromParams(field)));
                    }
                    else {
                        val = lodash__WEBPACK_IMPORTED_MODULE_4__["get"](_this.editObject, _this.getFromParams(field));
                    }
                    if (val) {
                        control.setValue(val);
                    }
                }
            });
        }
    };
    BeneficiaryCreateIndividualComponent.prototype.getFromParams = function (field) {
        var editKey = '';
        _constants__WEBPACK_IMPORTED_MODULE_5__["CREATE_BENEFICIARY_INDIVIDUAL_PARAMS"].forEach(function (param) {
            if (param.add === field) {
                editKey = param.edit;
            }
        });
        return editKey;
    };
    BeneficiaryCreateIndividualComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.beneficiaryService.resetForm.subscribe(function (data) {
            if (data) {
                _this.initializeIndividualForm();
                _this.beneficiaryService.resetForm.next(false);
            }
        });
        this.setBirthInfo();
    };
    BeneficiaryCreateIndividualComponent.prototype.setBirthInfo = function () {
        if (this.birthInfoForm) {
            this.birthInfoForm.removeControl('cityOfBirth');
            this.birthInfoForm.removeControl('countryOfBirth');
            this.birthInfoForm.removeControl('dateOfBirth');
        }
        for (var key in this.dynamicFields) {
            // Add bank Details
            if (this.dynamicFields[key]['type'] === 'birthInformation' && this.dynamicFields[key]['isVisible']) {
                this.birthInfoForm.addControl(key, this.fb.control('', this.dynamicFields[key]['isMandatory'] ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : null));
            }
        }
        if (this.isEdit) {
            this.setFields(this.birthInfoForm);
        }
        this.birthInfoSet = true;
    };
    BeneficiaryCreateIndividualComponent.prototype.countryChange = function (event) {
        this.countryInputSubject.next(event);
    };
    BeneficiaryCreateIndividualComponent.prototype.updateViewForCountryChange = function () {
        if (this.individualForm.value.address.individualBeneficiaryCountry === 'CA' ||
            this.individualForm.value.address.individualBeneficiaryCountry === 'US') {
            this.provinceDropdown = true;
            this.individualForm['controls'].address['controls'].individualBeneficiaryProvince.setValue('');
            this.getProvinces();
        }
        else {
            this.individualForm['controls'].address['controls'].individualBeneficiaryProvince.setValue('');
            this.provinceDropdown = false;
            this.provinces = [];
        }
        this.birthInfoSet = false; // Have to reset birth info since its dynamic based on country
        this.countryUpdate.emit(this.individualForm.value.address.individualBeneficiaryCountry);
    };
    BeneficiaryCreateIndividualComponent.prototype.getProvinces = function () {
        var _this = this;
        this.beneficiaryService.getProvinces().subscribe(function (res) {
            _this.provinces = res;
        });
    };
    BeneficiaryCreateIndividualComponent.prototype.getErrorClassWithKeys = function (selector, formName) {
        return (!this.individualForm['controls'][formName]['controls'][selector].pristine &&
            this.individualForm['controls'][formName]['controls'][selector].invalid);
    };
    BeneficiaryCreateIndividualComponent.prototype.validateForm = function () {
        this.validateAllFormFields(this.individualForm);
    };
    BeneficiaryCreateIndividualComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    BeneficiaryCreateIndividualComponent.prototype.ngOnDestroy = function () {
        this.beneficiaryService.resetForm.next(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateIndividualComponent.prototype, "formUpdated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateIndividualComponent.prototype, "countryUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateIndividualComponent.prototype, "countries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateIndividualComponent.prototype, "isoCountries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateIndividualComponent.prototype, "dynamicFields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateIndividualComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BeneficiaryCreateIndividualComponent.prototype, "editObject", void 0);
    BeneficiaryCreateIndividualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-create-individual',
            template: __webpack_require__(/*! ./beneficiary-create-individual.component.html */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.html"),
            styles: [__webpack_require__(/*! ./beneficiary-create-individual.component.scss */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_3__["BeneficiaryService"]])
    ], BeneficiaryCreateIndividualComponent);
    return BeneficiaryCreateIndividualComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row breadcrumb_block\">\r\n    <a href=\"javascript:void(0)\">\r\n        <img src=\"assets/image/user_icon.png\" alt=\"Approve\" />\r\n        <span class=\"nav-label padlf-10\">{{ 'label_beneficiary_management' | translate }}</span>\r\n    </a>\r\n</div>\r\n<div class=\"wrapper-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-10 no_padding\" *ngIf=\"isLoaded\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 beneficiary-header\">\r\n                    <h3 class=\"pull-left\">{{isEdit ? ('label_edit_beneficiary' | translate) : 'label_add_new_beneficiary' | translate }}</h3>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"col-lg-11 col-md-11 center-block no-float\">\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"row beneficiary-sub-heading\">\r\n                                <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                    <h4>{{'label_sending_money' | translate }}</h4>\r\n                                    {{ 'sending_money_description_gmp' | translate }}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row beneficiary-type-section\">\r\n                                <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <h4>{{ 'label_beneficiary_details' | translate }}</h4>\r\n                                        <div class=\"btn-group\" role=\"group\" aria-label=\"\">\r\n                                            <button type=\"button\" class=\"btn\"\r\n                                                [ngClass]=\"{ 'btn-primary': beneficiaryType === 'Individual'}\"\r\n                                                (click)=\"changeBeneficiaryType('Individual')\"\r\n                                                [attr.disabled]=\"isEdit ? '' : null\">\r\n                                                {{ 'label_beneficiary_individual_type' | translate }}\r\n                                            </button>\r\n                                            <button type=\"button\" class=\"btn\"\r\n                                                [ngClass]=\"{ 'btn-primary': beneficiaryType === 'Business'}\"\r\n                                                (click)=\"changeBeneficiaryType('Business')\"\r\n                                                [attr.disabled]=\"isEdit ? '' : null\">\r\n                                                {{ 'label_beneficiary_organization_type' | translate }}\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- INDIVIDUAL BENEFICIARY START -->\r\n                            <ng-container *ngIf=\"beneficiaryType === 'Individual'\">\r\n                                <app-beneficiary-create-individual (formUpdated)=\"individualFormUpdated($event)\"\r\n                                    [countries]=\"countries\" [isoCountries]=\"isoCountries\"\r\n                                    [dynamicFields]=\"dynamicFields\" (countryUpdate)=\"onCountryUpdate($event)\"\r\n                                    [isEdit]=\"isEdit\" [editObject]=\"editBeneficiaryObject\">\r\n                                </app-beneficiary-create-individual>\r\n                            </ng-container>\r\n                            <!-- INDIVIDUAL BENEFICIARY END -->\r\n\r\n                            <!-- BUSINESS BENEFICIARY START -->\r\n                            <ng-container class=\"row beneficiary-sub-section\" *ngIf=\"beneficiaryType === 'Business'\">\r\n                                <app-beneficiary-create-business (formUpdated)=\"businessFormUpdated($event)\"\r\n                                    [countries]=\"countries\" [isoCountries]=\"isoCountries\"\r\n                                    (countryUpdate)=\"onCountryUpdate($event)\" [isEdit]=\"isEdit\"\r\n                                    [editObject]=\"editBeneficiaryObject\">\r\n                                </app-beneficiary-create-business>\r\n                            </ng-container>\r\n                            <!-- BUSINESS BENEFICIARY END -->\r\n\r\n                            <!-- BENEFICIARY BANK INFO START -->\r\n                            <ng-container *ngIf=\"dynamicFieldsTemplateLoaded\">\r\n                                <app-beneficiary-bank-info [type]=\"beneficiaryType\" [countryCode]=\"selectedCountry\"\r\n                                    [dynamicFieldsTemplate]=\"dynamicFieldsTemplate\" [dynamicFields]=\"dynamicFields\"\r\n                                    [dynamicFieldOptions]=\"dynamicFieldOptions\" [isoCountries]=\"isoCountries\"\r\n                                    (formUpdate)=\"onBeneficiaryUpdate($event)\" [isEdit]=\"isEdit\"\r\n                                    [editObject]=\"editBeneficiaryObject\"></app-beneficiary-bank-info>\r\n                            </ng-container>\r\n                            <!-- BENEFICIARY BANK INFO END -->\r\n\r\n                        </div>\r\n\r\n                        <div class=\"panel-footer add-beneficiary-footer\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                    <button type=\"submit\" class=\"btn cancel_btn pull-left\" (click)=\"cancelCreateBeneficiary()\">\r\n                                        <span class=\"ng-scope\">Cancel</span>\r\n                                    </button>\r\n                                    <button type=\"submit\" class=\"btn save_btn pull-right\" (click)=\"submitBeneficiary()\">\r\n                                        <span class=\"ng-scope\">\r\n                                            {{ isEdit ? ('label_edit_beneficiary_button' | translate) : 'label_beneficiary_create_button' | translate }}\r\n                                        </span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-beneficiary-footer {\n  padding: 10px 15px 10px 15px !important;\n  background-color: white !important; }\n\n::ng-deep .nav-label {\n  color: white !important; }\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BeneficiaryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryCreateComponent", function() { return BeneficiaryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/beneficiary.service */ "./src/app/admin/outbound-module/services/beneficiary.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _beneficiary_create_business_beneficiary_create_business_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../beneficiary-create-business/beneficiary-create-business.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.ts");
/* harmony import */ var _beneficiary_create_individual_beneficiary_create_individual_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../beneficiary-create-individual/beneficiary-create-individual.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.ts");
/* harmony import */ var _beneficiary_bank_info_beneficiary_bank_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../beneficiary-bank-info/beneficiary-bank-info.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/app/admin/outbound-module/constants/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/admin/outbound-module/services/data.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BeneficiaryCreateComponent = /** @class */ (function () {
    function BeneficiaryCreateComponent(beneficiaryService, toastr, router, dataService) {
        this.beneficiaryService = beneficiaryService;
        this.toastr = toastr;
        this.router = router;
        this.dataService = dataService;
        this.beneficiaryType = _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].INDIVIDUAL;
        this.countries = [];
        this.isoCountries = [];
        this.isLoaded = false;
        this.beneficiaryForm = { value: {}, valid: false };
        this.isEdit = false;
        this.basicFormErrors = false;
        this.editTemplateLoaded = false;
    }
    BeneficiaryCreateComponent.prototype.ngOnInit = function () {
        this.getInitialData();
        // this.handleEditCase();
    };
    BeneficiaryCreateComponent.prototype.handleEditCase = function () {
        if (this.router.url.includes('edit')) {
            this.isEdit = true;
            this.editBeneficiaryObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.dataService.getBeneficiary());
            this.dataService.unsetBeneficiary();
            if (!this.editBeneficiaryObject) {
                this.router.navigate(['beneficiaryManagement']);
            }
            if (this.editBeneficiaryObject) {
                if (this.editBeneficiaryObject.organization) {
                    this.beneficiaryType = _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].BUSINESS;
                    this.onCountryUpdate(this.editBeneficiaryObject.organization.address.country);
                }
                else {
                    this.onCountryUpdate(this.editBeneficiaryObject.individual.address.country);
                }
            }
        }
    };
    BeneficiaryCreateComponent.prototype.getInitialData = function () {
        var _this = this;
        var observables = [
            this.beneficiaryService.getCountries(),
            this.beneficiaryService.getISOCountries()
        ];
        rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"].apply(void 0, observables).subscribe(function (result) {
            _this.countries = result[0];
            _this.isoCountries = result[1];
        }, function (error) {
            _this.raiseToastError('Unable to load countries');
        })
            .add(function () {
            // Called when operation is complete (both success and error)
            _this.isLoaded = true;
            _this.handleEditCase();
        });
    };
    BeneficiaryCreateComponent.prototype.changeBeneficiaryType = function (type) {
        this.beneficiaryType = type;
        this.beneficiaryService.resetForm.next(true);
        this.beneficiaryForm = { value: {}, valid: false };
        this.dynamicFieldsTemplateLoaded = false;
        this.dynamicFieldsTemplate = this.dynamicFields = this.dynamicFieldOptions = undefined;
    };
    BeneficiaryCreateComponent.prototype.individualFormUpdated = function (value) {
        this.individualForm = value;
    };
    BeneficiaryCreateComponent.prototype.businessFormUpdated = function (value) {
        this.businessForm = value;
    };
    BeneficiaryCreateComponent.prototype.onCountryUpdate = function (country) {
        var _this = this;
        this.dynamicFieldsTemplate = null;
        this.dynamicFieldsTemplateLoaded = false;
        this.selectedCountry = country;
        this.beneficiaryForm = null;
        this.dynamicFields = undefined;
        this.dynamicFieldOptions = undefined;
        this.beneficiaryService.getDynamicTemplate(country, this.getCurrencyCode(country)).subscribe(function (res) {
            _this.dynamicFieldsTemplate = res['template'];
            _this.updateDynamicFields();
            _this.dynamicFieldsTemplateLoaded = true;
            _this.editTemplateLoaded = true;
        }, function (err) {
            _this.raiseToastError('Service temporarily unavailable');
        });
    };
    BeneficiaryCreateComponent.prototype.getCurrencyCode = function (countryCode) {
        var currencyCode;
        this.countries.forEach(function (country) {
            if (country.countryCode === countryCode) {
                currencyCode = country.currencyCode;
            }
        });
        return currencyCode;
    };
    BeneficiaryCreateComponent.prototype.onBeneficiaryUpdate = function (form) {
        this.beneficiaryForm = form;
    };
    BeneficiaryCreateComponent.prototype.getBirthInformationField = function (fieldName, context) {
        return context.beneficiaryType === _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].INDIVIDUAL
            && lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.dynamicFieldsTemplate, 'beneficiaryIdentityFieldGroupsList' +
                '.fieldGroupChoice[0]' +
                '.fieldGroupsList[0]' +
                '.fieldGroups[3].mandatory') === 'true'
            && context.dynamicFieldsTemplate
                .beneficiaryIdentityFieldGroupsList
                .fieldGroupChoice[0]
                .fieldGroupsList[0]
                .fieldGroups
                .find(function (fieldGroup) { return fieldGroup.elementName === 'birthInformation'; })
                .fieldsList
                .fields
                .find(function (field) { return field.elementName === fieldName; });
    };
    BeneficiaryCreateComponent.prototype.getIdentificationGroupField = function (context) {
        return context.beneficiaryType === _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].INDIVIDUAL
            && lodash__WEBPACK_IMPORTED_MODULE_3__["get"](this.dynamicFieldsTemplate, 'beneficiaryIdentityFieldGroupsList'
                + '.fieldGroupChoice[0]'
                + '.fieldGroupsList[0]'
                + '.fieldGroups[2]'
                + '.mandatory') === 'true';
    };
    BeneficiaryCreateComponent.prototype.getIdentificationField = function (fieldName, context) {
        return context.getIdentificationGroupField(context)
            && context.dynamicFieldsTemplate
                .beneficiaryIdentityFieldGroupsList
                .fieldGroupChoice[0]
                .fieldGroupsList[0]
                .fieldGroups
                .find(function (fieldGroup) { return fieldGroup.elementName === 'identificationList'; })
                .fieldsList
                .fields
                .find(function (field) { return field.elementName === fieldName; });
    };
    BeneficiaryCreateComponent.prototype.getBankDetailsFieldGroup = function (fieldName, context) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.dynamicFieldsTemplate, 'beneficiaryBankAccountFieldGroupsList.fieldGroups')
            .find(function (fieldGroup) {
            return !!context.findBankDetailsFieldInFieldGroup(fieldGroup, fieldName);
        });
    };
    BeneficiaryCreateComponent.prototype.isBirthInformationFieldVisible = function (fieldName, context) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.getBirthInformationField(fieldName, context), 'mandatory') === 'true';
    };
    BeneficiaryCreateComponent.prototype.isIdentificationFieldVisible = function (fieldName, context) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.getIdentificationField(fieldName, context), 'mandatory') === 'true';
    };
    BeneficiaryCreateComponent.prototype.getIdentificationFieldMaxLength = function (fieldName, context) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.getIdentificationField(fieldName, context), 'maxSize');
    };
    BeneficiaryCreateComponent.prototype.getIdentificationFieldDescription = function (fieldName, context) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.getIdentificationField(fieldName, context), 'description');
    };
    BeneficiaryCreateComponent.prototype.findBankDetailsFieldInFieldGroup = function (fieldGroup, fieldName) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["find"](lodash__WEBPACK_IMPORTED_MODULE_3__["get"](fieldGroup, 'fieldsList.fields'), function (field) {
            return field.parameterName.toLowerCase() === fieldName.toLowerCase();
        });
    };
    BeneficiaryCreateComponent.prototype.getBankDetailsField = function (fieldName, context) {
        return context.findBankDetailsFieldInFieldGroup(context.getBankDetailsFieldGroup(fieldName, context), fieldName);
    };
    BeneficiaryCreateComponent.prototype.isBankDetailsFieldMandatory = function (fieldName, context) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.getBankDetailsFieldGroup(fieldName, context), 'mandatory') === 'true';
    };
    BeneficiaryCreateComponent.prototype.getBankDetailsFieldMaxLength = function (fieldName, context) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.getBankDetailsField(fieldName, context), 'maxSize');
    };
    BeneficiaryCreateComponent.prototype.getBankDetailsFieldDescription = function (fieldName, context) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.getBankDetailsField(fieldName, context), 'description');
    };
    BeneficiaryCreateComponent.prototype.getBankDetailsFieldLabel = function (fieldName, context) {
        var label = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](context.getBankDetailsField(fieldName, context), 'subTitle');
        if (label) {
            label = label.trim();
        }
        return label;
    };
    BeneficiaryCreateComponent.prototype.getDynamicField = function (fieldName) {
        var isVisibleFn;
        var isMandatoryFn;
        var maxLengthFn;
        var fieldDescriptionFn;
        var fieldLabelFn;
        var context = this;
        if ([
            'cityOfBirth',
            'countryOfBirth',
            'dateOfBirth'
        ].indexOf(fieldName) >= 0) {
            isVisibleFn = this.isBirthInformationFieldVisible;
            maxLengthFn = fieldDescriptionFn = fieldLabelFn = isMandatoryFn =
                function () { return null; };
        }
        else if ([
            'idType',
            'identificationNumber',
            'identificationCountry',
            'validFromDate',
            'validToDate',
        ].indexOf(fieldName) >= 0) {
            isVisibleFn = this.isIdentificationFieldVisible;
            maxLengthFn = this.getIdentificationFieldMaxLength;
            fieldDescriptionFn = this.getIdentificationFieldDescription;
            fieldLabelFn = isMandatoryFn = function () { return null; };
        }
        else {
            isVisibleFn = this.getBankDetailsField;
            isMandatoryFn = this.isBankDetailsFieldMandatory,
                maxLengthFn = this.getBankDetailsFieldMaxLength;
            fieldDescriptionFn = this.getBankDetailsFieldDescription;
            fieldLabelFn = this.getBankDetailsFieldLabel;
        }
        return {
            isVisible: isVisibleFn(fieldName, context),
            isMandatory: isMandatoryFn(fieldName, context),
            maxLength: maxLengthFn(fieldName, context),
            description: fieldDescriptionFn(fieldName, context),
            label: fieldLabelFn(fieldName, context)
        };
    };
    BeneficiaryCreateComponent.prototype.updateDynamicFields = function () {
        if (!this.selectedCountry) {
            return;
        }
        this.dynamicFields = _constants__WEBPACK_IMPORTED_MODULE_7__["DYNAMIC_FIELDS"];
        for (var fieldName in this.dynamicFields) {
            if (this.dynamicFields.hasOwnProperty(fieldName)) {
                var tempObj = this.dynamicFields[fieldName];
                this.dynamicFields[fieldName] = __assign({}, tempObj, this.getDynamicField(fieldName));
            }
        }
        var accountTypeFieldGroup = this.getBankDetailsFieldGroup('accountType', this);
        var idTypeField = this.getIdentificationField('idType', this);
        this.dynamicFieldOptions = {
            accountType: accountTypeFieldGroup
                ? accountTypeFieldGroup.fieldsList.fields[0].listItems.fields
                : null,
            idType: idTypeField
                ? this.getIdentificationField('idType', this).listItems.fields
                : null
        };
    };
    BeneficiaryCreateComponent.prototype.isValidForm = function () {
        if (this.beneficiaryForm && this.beneficiaryForm.valid) {
            if (this.beneficiaryType === _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].INDIVIDUAL && this.individualForm['valid']) {
                return true;
            }
            else if (this.beneficiaryType === _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].BUSINESS && this.businessForm['valid']) {
                return true;
            }
        }
        if ((this.individualForm && !this.individualForm['valid']) || (this.businessForm && !this.businessForm['valid'])) {
            this.raiseToastError('Fill required beneficiary details');
            this.basicFormErrors = true;
        }
        return false;
    };
    BeneficiaryCreateComponent.prototype.submitBeneficiary = function () {
        var submitData = {};
        if (this.beneficiaryType === _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].INDIVIDUAL) {
            var extId = this.individualForm.value.externalBeneficiaryId;
            submitData = __assign({ externalBeneficiaryId: extId }, { individual: lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.individualForm.value) }, this.beneficiaryForm ? this.beneficiaryForm.value : null);
            delete submitData['individual']['externalBeneficiaryId'];
            if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](submitData['individual']['birthInformation'])) {
                delete submitData['individual']['birthInformation'];
            }
            else {
                submitData['birthInformation'] = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](submitData['individual']['birthInformation']);
                submitData['birthInformation']['dateOfBirth'] =
                    moment__WEBPACK_IMPORTED_MODULE_11__(submitData['birthInformation']['dateOfBirth'], 'MM-DD-YYYY').format('MM-DD-YYYY');
                delete submitData['individual']['birthInformation'];
            }
            this.individualComponent.validateForm();
        }
        else {
            var extId = this.businessForm.value.externalBeneficiaryId;
            submitData = __assign({ externalBeneficiaryId: extId }, { organization: lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.businessForm.value) }, this.beneficiaryForm ? this.beneficiaryForm.value : null);
            delete submitData['organization']['externalBeneficiaryId'];
            this.businessComponent.validateForm();
        }
        if (this.bankInfoComponent) {
            this.bankInfoComponent.validateForm();
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](submitData['identification'])) {
            delete submitData['identification'];
        }
        this.basicFormErrors = false;
        if (this.isValidForm()) {
            this.checkTypeAheadsValidation(submitData);
            // ADD BANK DETAILS EXTRA INFO
            submitData['BankDetails'].countryCode = this.selectedCountry;
            submitData['BankDetails'].currencyCode = this.getCurrencyCode(this.selectedCountry);
            submitData['BankDetails'].destinationCurrency = this.getCurrencyCode(this.selectedCountry);
            // ADD BANK DETAILS EXTRA INFO END
            if (this.isEdit) {
                this.editBeneficiary(submitData);
            }
            else {
                this.createBeneficiary(submitData);
            }
        }
        else {
            this.checkTypeAheadsValidation(submitData);
            console.log('Create Beneficiary form has errors!');
        }
    };
    BeneficiaryCreateComponent.prototype.createBeneficiary = function (data) {
        var _this = this;
        this.beneficiaryService.createBeneficiary({
            beneficiaryDetails: data,
            beneficiaryType: (this.beneficiaryType === _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].INDIVIDUAL) ? this.beneficiaryType.toUpperCase() : 'ORGANIZATION',
            phId: this.dataService.getPhID()
        }).subscribe(function (res) {
            if (res['fail'] && res['fail'].length) {
                _this.pushErrors(res['fail']);
            }
            else if (res['status'] && res['status'] == 400) {
                _this.raiseToastError(lodash__WEBPACK_IMPORTED_MODULE_3__["first"](res['message'].details).message);
            }
            else {
                _this.raiseToastSuccess('Beneficiary Succesfully Added');
                _this.router.navigate(['beneficiaryManagement']);
            }
        }, function (err) {
            _this.checkErrorResponse(err);
        });
    };
    BeneficiaryCreateComponent.prototype.editBeneficiary = function (data) {
        var _this = this;
        this.beneficiaryService.editBeneficiary({
            beneficiaryDetails: data,
            beneficiaryType: (this.beneficiaryType === _constants__WEBPACK_IMPORTED_MODULE_7__["BENEFICIARY_TYPES"].INDIVIDUAL) ? this.beneficiaryType.toUpperCase() : 'ORGANIZATION',
            id: this.editBeneficiaryObject.beneficiaryId,
            phId: this.dataService.getPhID()
        }, this.editBeneficiaryObject.beneficiaryId).subscribe(function (res) {
            if (res['fail'] && res['fail'].length) {
                _this.pushErrors(res['fail']);
            }
            else if (res['status'] && res['status'] == 400) {
                _this.raiseToastError(lodash__WEBPACK_IMPORTED_MODULE_3__["first"](res['message'].details).message);
            }
            else {
                _this.raiseToastSuccess('Beneficiary Succesfully Updated');
                _this.router.navigate(['beneficiaryManagement']);
            }
        }, function (err) {
            var errorMsg = err['error'].message.details
                ? lodash__WEBPACK_IMPORTED_MODULE_3__["first"](err['error'].message.details).message
                : err['error'].message;
            _this.raiseToastError(errorMsg);
        });
    };
    BeneficiaryCreateComponent.prototype.checkErrorResponse = function (err) {
        if (err && err.status === 400 && err.error.message) {
            this.raiseToastError(err.error.message);
        }
        else {
            this.raiseToastError('Service is temporarily unavailable');
        }
    };
    BeneficiaryCreateComponent.prototype.cancelCreateBeneficiary = function () {
        this.router.navigate(['beneficiaryManagement']);
    };
    BeneficiaryCreateComponent.prototype.pushErrors = function (errorArr) {
        var errMsg = '';
        errorArr.forEach(function (err) {
            errMsg += err.message[0].errorMessage + " <br>";
        });
        this.raiseToastError(errMsg, 'Validation Errors!');
    };
    BeneficiaryCreateComponent.prototype.checkTypeAheadsValidation = function (submitData) {
        var isValid = true;
        var errMsg = '';
        for (var key in this.dynamicFields) {
            if (this.dynamicFields[key]['isVisible'] && this.dynamicFields[key]['isMandatory'] && this.isTypeAhead(key)) {
                if (!submitData['BankDetails']) {
                    isValid = false;
                    errMsg += lodash__WEBPACK_IMPORTED_MODULE_3__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"](key)) + " is missing.<br>";
                }
                if (submitData['BankDetails'] && !submitData['BankDetails'][key]) {
                    isValid = false;
                    errMsg += lodash__WEBPACK_IMPORTED_MODULE_3__["startCase"](lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"](key)) + " is missing.<br>";
                }
            }
        }
        if (!isValid && !this.basicFormErrors) {
            this.basicFormErrors = true;
            this.raiseToastError(errMsg, 'Validation Errors!');
        }
        return isValid;
    };
    BeneficiaryCreateComponent.prototype.isTypeAhead = function (fieldName) {
        for (var key in _constants__WEBPACK_IMPORTED_MODULE_7__["DYNAMIC_TYPEAHEADS"]) {
            if (_constants__WEBPACK_IMPORTED_MODULE_7__["DYNAMIC_TYPEAHEADS"][key] === fieldName) {
                return true;
            }
        }
        return false;
    };
    BeneficiaryCreateComponent.prototype.raiseToastError = function (errorMsg, title) {
        if (title === void 0) { title = ''; }
        this.toastr.error(errorMsg, title, {
            timeOut: 0,
            extendedTimeOut: 0,
            closeButton: true,
            enableHtml: true
        });
    };
    BeneficiaryCreateComponent.prototype.raiseToastSuccess = function (successMsg, title) {
        if (title === void 0) { title = ''; }
        this.toastr.success(successMsg, title, {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_beneficiary_create_business_beneficiary_create_business_component__WEBPACK_IMPORTED_MODULE_4__["BeneficiaryCreateBusinessComponent"]),
        __metadata("design:type", _beneficiary_create_business_beneficiary_create_business_component__WEBPACK_IMPORTED_MODULE_4__["BeneficiaryCreateBusinessComponent"])
    ], BeneficiaryCreateComponent.prototype, "businessComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_beneficiary_create_individual_beneficiary_create_individual_component__WEBPACK_IMPORTED_MODULE_5__["BeneficiaryCreateIndividualComponent"]),
        __metadata("design:type", _beneficiary_create_individual_beneficiary_create_individual_component__WEBPACK_IMPORTED_MODULE_5__["BeneficiaryCreateIndividualComponent"])
    ], BeneficiaryCreateComponent.prototype, "individualComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_beneficiary_bank_info_beneficiary_bank_info_component__WEBPACK_IMPORTED_MODULE_6__["BeneficiaryBankInfoComponent"]),
        __metadata("design:type", _beneficiary_bank_info_beneficiary_bank_info_component__WEBPACK_IMPORTED_MODULE_6__["BeneficiaryBankInfoComponent"])
    ], BeneficiaryCreateComponent.prototype, "bankInfoComponent", void 0);
    BeneficiaryCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-create',
            template: __webpack_require__(/*! ./beneficiary-create.component.html */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.html"),
            styles: [__webpack_require__(/*! ./beneficiary-create.component.scss */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_beneficiary_service__WEBPACK_IMPORTED_MODULE_1__["BeneficiaryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]])
    ], BeneficiaryCreateComponent);
    return BeneficiaryCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  beneficiary-delete works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BeneficiaryDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryDeleteComponent", function() { return BeneficiaryDeleteComponent; });
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

var BeneficiaryDeleteComponent = /** @class */ (function () {
    function BeneficiaryDeleteComponent() {
    }
    BeneficiaryDeleteComponent.prototype.ngOnInit = function () {
    };
    BeneficiaryDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-delete',
            template: __webpack_require__(/*! ./beneficiary-delete.component.html */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.html"),
            styles: [__webpack_require__(/*! ./beneficiary-delete.component.scss */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BeneficiaryDeleteComponent);
    return BeneficiaryDeleteComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  beneficiary-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BeneficiaryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryEditComponent", function() { return BeneficiaryEditComponent; });
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

var BeneficiaryEditComponent = /** @class */ (function () {
    function BeneficiaryEditComponent() {
    }
    BeneficiaryEditComponent.prototype.ngOnInit = function () {
    };
    BeneficiaryEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-edit',
            template: __webpack_require__(/*! ./beneficiary-edit.component.html */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.html"),
            styles: [__webpack_require__(/*! ./beneficiary-edit.component.scss */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BeneficiaryEditComponent);
    return BeneficiaryEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  beneficiary-filter works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BeneficiaryFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryFilterComponent", function() { return BeneficiaryFilterComponent; });
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

var BeneficiaryFilterComponent = /** @class */ (function () {
    function BeneficiaryFilterComponent() {
    }
    BeneficiaryFilterComponent.prototype.ngOnInit = function () {
    };
    BeneficiaryFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-filter',
            template: __webpack_require__(/*! ./beneficiary-filter.component.html */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.html"),
            styles: [__webpack_require__(/*! ./beneficiary-filter.component.scss */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BeneficiaryFilterComponent);
    return BeneficiaryFilterComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.css":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------------Input box clear icon ------------------ */\r\n\r\n.search-box,.close-icon,.search-wrapper {\r\n          position: relative;\r\n}\r\n\r\n.search-box:not(:valid) ~ .close-icon {\r\n          display: none;\r\n}\r\n\r\n.close-icon {\r\n          border:1px solid transparent;\r\n          background-color: transparent;\r\n          display: inline-block;\r\n          vertical-align: middle;\r\n          outline: 0;\r\n          cursor: pointer;\r\n}\r\n\r\n.close-icon:after {\r\n          content: \"X\";\r\n          display: block;\r\n          width: 15px;\r\n          height: 15px;\r\n          position: absolute;\r\n          background-color: #FA9595;\r\n          z-index:1;\r\n          right: 35px;\r\n          top: 0;\r\n          bottom: 0;\r\n          margin: auto;\r\n          padding: 2px;\r\n          border-radius: 50%;\r\n          text-align: center;\r\n          color: white;\r\n          font-weight: normal;\r\n          font-size: 12px;\r\n          box-shadow: 0 0 2px #E50F0F;\r\n          cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row breadcrumb_block\">\r\n  <a href=\"javascript:void(0)\">\r\n    <img src=\"assets/image/user_icon.png\">\r\n    <span class=\"nav-label padlf-10\">\r\n      {{'label_beneficiary_management' | translate }}\r\n    </span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"wrapper-content\">\r\n  <div class=\"row\">\r\n    <div class=\"beneficiary-header\">\r\n      <h3 class=\"pull-left\">{{'label_beneficiary_management' | translate }}</h3>\r\n      <button class=\"btn btn-info pull-right\" (click)=\"routeToCreate()\">{{'label_create_new_beneficiary' | translate }}</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row content-section implementation ui-fluid\">\r\n    <div class=\"beneficiary-table\">\r\n      <p-table class=\"p-table-list\" #dt [columns]=\"cols\" [value]=\"beneficiaries\" [responsive]=\"true\" [paginator]=\"showPagination(dt)\" [rows]=\"10\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th class=\"ui-p-4\" *ngFor=\"let col of cols\" [pSortableColumn]=\"col.field === 'externalBeneficiaryId' ? 'externalBeneficiaryId' : ''\">\r\n              {{ col.labelKey | translate }}\r\n              <p-sortIcon [field]=\"col.field\" *ngIf=\"col.field === 'externalBeneficiaryId'\" [field]=\"col.field\" ariaLabel=\"Activate to sort\"\r\n                ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n            </th>\r\n          </tr>\r\n          <tr>\r\n            <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" class=\"input-holder\">\r\n            <div>\r\n              <input class=\"inputFilter\" [(ngModel)]=\"beneficiaryIDClearValue\" #externalBeneficiaryId placeholder=\"Beneficiary ID\" *ngSwitchCase=\"'externalBeneficiaryId'\" type=\"text\"  (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n              <ng-container *ngIf=\"beneficiaryIDClearValue\">\r\n                <span class=\"iconBtn\" (click)=\"inputClearBeneficiaryID(externalBeneficiaryId, dt);\" *ngSwitchCase=\"'externalBeneficiaryId'\">\r\n                <i class=\"ui-input-clear-icon pi pi-times\"></i>\r\n                </span>\r\n              </ng-container>\r\n            </div>\r\n            <div>\r\n              <input class=\"inputFilter\" [(ngModel)]=\"beneficiaryNameClearValue\" #beneficiaryName placeholder=\"Beneficiary Name\" *ngSwitchCase=\"'beneficiaryName'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\" >\r\n              <ng-container *ngIf=\"beneficiaryNameClearValue\">\r\n                <span class=\"iconBtn\" (click)=\"inputClearBeneficiaryName(beneficiaryName, col.field, dt);\" *ngSwitchCase=\"'beneficiaryName'\">\r\n                <i class=\"ui-input-clear-icon pi pi-times\"></i>\r\n                </span>\r\n              </ng-container>\r\n            </div>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template let-rowData let-columns=\"cols\" pTemplate=\"body\">\r\n          <tr>\r\n            <td *ngFor=\"let col of cols ; let i = index;\">\r\n              <ng-container [ngTemplateOutlet]=\"col.name == 'Action' ? editDeleteTemplate : rowDataTemplate\" [ngTemplateOutletContext]=\"{col: col, i: i, rowData: rowData}\"></ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </div>\r\n    <div *ngIf=\"showNoRecordFound(dt)\">\r\n      <p style=\"text-align: center\">{{'label_list_payout_no_records' | translate }}</p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #rowDataTemplate let-col='col' let-rowData='rowData'>\r\n  {{rowData[col.field]}}\r\n</ng-template>\r\n\r\n<ng-template #editDeleteTemplate let-rowData='rowData' let-i='i'>\r\n  <button pButton class=\"btn btn-default btn-sm btn-shift-up\" (click)=\"selectBeneficiary(rowData, i)\">\r\n    {{'label_beneficiary_edit_button' | translate }}\r\n  </button>\r\n  <button pButton class=\"btn btn-default btn-sm btn-shift-up\" (click)=\"showDeleteModal(rowData)\">\r\n    {{'delete_beneficiary_button' | translate }}\r\n  </button>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.p-paginator-footer {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: auto; }\n.ui-input-clear-icon {\n  right: 3px !important;\n  color: #848484;\n  position: absolute;\n  right: 1em;\n  top: 35%;\n  font-size: 1.45em;\n  height: 1em;\n  margin-top: -.25em; }\n.iconSpan {\n  margin-left: -25px;\n  margin-top: 10px;\n  position: relative; }\n.iconBtn {\n  border: none;\n  outline: none;\n  position: relative;\n  width: 0;\n  background-color: #fff; }\n::ng-deep .disputetable {\n  overflow: auto !important; }\n::ng-deep .disputetable .ui-table .ui-table-thead > tr > th {\n    width: 175px !important; }\n::ng-deep .disputetable .ui-table-wrapper {\n    overflow: auto;\n    padding-bottom: 54px;\n    min-height: 350px; }\n::ng-deep .ui-sortable-column.ui-state-highlight a {\n  color: #333 !important; }\n::ng-deep .dispute-management-layout-table {\n  /* --------------- Start of Pagination css change ---------------------- */\n  /* ------------------End of Pagination css change ------------------ */ }\n::ng-deep .dispute-management-layout-table .ui-paginator {\n    height: 67px;\n    padding: 10px;\n    background-color: #dddddd; }\n::ng-deep .dispute-management-layout-table .p-table-list tbody tr {\n    background-color: #f4f4f5 !important; }\n::ng-deep .dispute-management-layout-table .p-table-list tbody tr:nth-child(even) {\n    background-color: #f9f9f9 !important; }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-pages .ui-paginator-page {\n    color: black;\n    margin: 5px !important;\n    border-radius:  5px !important; }\n::ng-deep .dispute-management-layout-table .ui-corner-all {\n    border-radius: 5px; }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-pages .ui-paginator-page:not(.ui-state-active):hover {\n    background-color: #ededed;\n    color: #333333; }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-pages .ui-paginator-page.ui-state-active {\n    background: #fff !important;\n    color: #909090 !important;\n    border-color: #ddd;\n    margin: 5px;\n    border-radius: 5px; }\n::ng-deep .dispute-management-layout-table .ui-paginator a.ui-state-disabled {\n    background-color: #fff;\n    margin: 5px;\n    border-radius: 5px;\n    opacity: 1; }\n::ng-deep .dispute-management-layout-table .ui-state-disabled, ::ng-deep .dispute-management-layout-table body .ui-widget:disabled {\n    opacity: 1;\n    filter: alpha(opacity=50); }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-prev:not(.ui-state-disabled):not(.ui-state-active) {\n    background-color: #ededed;\n    margin: 5px;\n    border-radius: 5px; }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-next:not(.ui-state-disabled):not(.ui-state-active) {\n    background-color: #ededed;\n    margin: 5px;\n    border-radius: 5px; }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-prev, ::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-next {\n    color: black; }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-next:not(.ui-state-disabled):not(.ui-state-active):hover {\n    background-color: #ededed;\n    color: black; }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-prev:not(.ui-state-disabled):not(.ui-state-active):hover {\n    background-color: #ededed;\n    color: black; }\n::ng-deep .dispute-management-layout-table .ui-paginator .ui-paginator-pages .ui-paginator-page:not(.ui-state-active) {\n    background-color: #ededed;\n    border-radius: 5px; }\n::ng-deep .dispute-management-layout-table .ui-paginator-first, ::ng-deep .dispute-management-layout-table .pi-step-backward, ::ng-deep .dispute-management-layout-table .ui-paginator-last, ::ng-deep .dispute-management-layout-table .pi-step-forward {\n    content: '';\n    display: none; }\n::ng-deep .dispute-management-layout-table .pi-caret-right:before,\n  ::ng-deep .dispute-management-layout-table .pi-caret-left:before {\n    display: none !important; }\n::ng-deep .dispute-management-layout-table .pi-caret-right,\n  ::ng-deep .dispute-management-layout-table .pi-caret-left {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; }\n::ng-deep .dispute-management-layout-table .pi-caret-left:after {\n    content: '' !important;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 6px 8px 6px 0;\n    border-color: transparent #000 transparent transparent;\n    display: block !important;\n    position: relative;\n    left: -1px; }\n::ng-deep .dispute-management-layout-table .pi-caret-right:after {\n    content: '' !important;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 6px 0 6px 8px;\n    border-color: transparent transparent transparent #000;\n    display: block !important;\n    position: relative;\n    right: -1px; }\n::ng-deep .p-table-list .pi-sort, ::ng-deep .p-table-list .pi-sort-up, ::ng-deep .p-table-list .pi-sort-down {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-weight: 900; }\n::ng-deep .p-table-list .pi-sort:before {\n  content: \"\\f0dc\" !important; }\n::ng-deep .p-table-list .pi-sort-up:before {\n  content: \"\\f0de\" !important; }\n::ng-deep .p-table-list .pi-sort-down:before {\n  content: \"\\f0dd\" !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th {\n  font-size: 13px !important;\n  line-height: 1.5 !important;\n  background: #e2e2e2 !important;\n  border: 0;\n  color: #333333 !important; }\n@media (max-width: 1200px) {\n    ::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th {\n      font-size: 10px !important;\n      line-height: 2 !important;\n      padding: 7px 3px; } }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th .input-filter {\n    width: 100% !important;\n    padding: 4px !important;\n    font-size: 11px !important;\n    white-space: nowrap !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    padding-right: 25px !important;\n    font-weight: 400 !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th:last-child {\n    padding: 7.4px 4px !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th p-dropdown.p-dropdown-beneficiary label {\n    white-space: nowrap !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    max-width: 85% !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th p-dropdown.p-dropdown-beneficiary .ui-dropdown .ui-dropdown-panel {\n    width: 175px !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th p-dropdown.p-dropdown-beneficiary .ui-dropdown .ui-dropdown-panel .ui-dropdown-filter-container {\n      padding: 7px !important;\n      border-radius: inherit !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th p-dropdown.p-dropdown-beneficiary .ui-dropdown .ui-dropdown-panel .ui-dropdown-filter-container .ui-dropdown-filter-icon {\n        right: 15px !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th p-dropdown.p-dropdown-beneficiary .ui-dropdown .ui-dropdown-panel .ui-dropdown-item {\n      padding: 7px !important;\n      word-break: break-word !important;\n      font-size: 11px !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th p-dropdown.p-dropdown-beneficiary .ui-dropdown-items-wrapper {\n    text-align: center !important;\n    margin: 0 auto !important; }\n::ng-deep .p-table-list .ui-table .ui-table-thead > tr > th p-dropdown label {\n    font-size: 11px !important; }\n::ng-deep .p-table-list tbody tr {\n  background: #f9f9f9 !important; }\n::ng-deep .p-table-list tbody tr:hover {\n    background-color: #f5f5f5 !important;\n    cursor: pointer; }\n::ng-deep .p-table-list tbody tr td {\n    font-size: 14px !important;\n    word-break: break-all !important;\n    border: 0 !important;\n    border-top: 2px solid #ddd !important;\n    padding-top: 15px !important;\n    padding-bottom: 15px !important;\n    color: #757575 !important; }\n::ng-deep .p-table-list tbody tr td span.custom-status {\n      line-height: 1;\n      display: inline-block;\n      vertical-align: middle;\n      padding: 4px 5px;\n      text-align: center;\n      min-width: 85px;\n      text-transform: capitalize;\n      border-radius: 5px; }\n::ng-deep .p-table-list tbody tr td span.custom-status.new {\n        background: #b9e88b;\n        border: 1px solid #b9e88b; }\n::ng-deep .p-table-list tbody tr td span.custom-status.closed {\n        color: #a8aab7;\n        border: 1px solid #a8aab7; }\n::ng-deep .p-table-list tbody tr td span.custom-status.reopened {\n        border: 1px solid #2593e8;\n        color: #2593e8; }\n::ng-deep .p-table-list tbody tr td span.custom-status.open {\n        color: #2593e8;\n        border: 1px solid #2593e8; }\n.center {\n  text-align: center; }\n::ng-deep .dialog-box {\n  display: inline-block !important;\n  width: 50% !important;\n  vertical-align: middle !important;\n  letter-spacing: normal !important;\n  text-align: center !important;\n  position: absolute !important;\n  top: 50% !important;\n  left: 50% !important;\n  -webkit-transform: translate(-50%, -50%) !important;\n          transform: translate(-50%, -50%) !important;\n  min-width: 300px !important; }\n::ng-deep .dialog-box mat-dialog-container {\n    padding: 7px 0 0 !important; }\n::ng-deep .dialog-box .model-header {\n    background-color: #fff !important;\n    position: relative;\n    border: none !important;\n    margin: 0 0 10px !important;\n    padding: 30px 30px 10px !important; }\n::ng-deep .dialog-box h5 {\n    font-weight: 600 !important;\n    margin-left: 2% !important;\n    line-height: 1.42857 !important; }\n::ng-deep .dialog-box .close {\n    background: url(/admin/assets/image/close.png) no-repeat 0 0 !important;\n    width: 17px !important;\n    height: 17px !important;\n    display: inline-block !important;\n    outline: 0 !important;\n    opacity: 1 !important;\n    position: absolute;\n    right: 30px;\n    top: 20px;\n    margin: 5px 2px 0 !important; }\n::ng-deep .dialog-box span {\n    opacity: 0 !important; }\n::ng-deep .dialog-box .modal-body {\n    background-color: #eaeaea;\n    padding: 10px 15px 0; }\n::ng-deep .dialog-box .modal-footer {\n    background-color: #eaeaea;\n    border-top: none;\n    padding: 15px;\n    text-align: center !important; }\n::ng-deep .dialog-box .modal-footer .btn {\n      background: #8faa61;\n      min-width: 120px;\n      color: #fff;\n      border-radius: 3px;\n      margin: 0 5px;\n      border: solid 2px #8faa61;\n      text-transform: uppercase;\n      letter-spacing: .5px; }\n::ng-deep .dialog-box .modal-footer .btn.btn-primary {\n        background: #dd5b45;\n        border: solid 2px #dd5b45; }\n::ng-deep .beneficiary-table {\n  /* --------------- Start of Pagination css change ---------------------- */\n  /* ------------------End of Pagination css change ------------------ */ }\n::ng-deep .beneficiary-table .ui-table .ui-paginator-bottom {\n    height: 67px;\n    padding: 10px;\n    background-color: #dddddd; }\n::ng-deep .beneficiary-table .p-table-list tbody tr {\n    background-color: #f4f4f5 !important; }\n::ng-deep .beneficiary-table .p-table-list tbody tr:nth-child(even) {\n    background-color: #f9f9f9 !important; }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-pages .ui-paginator-page {\n    color: black;\n    margin: 5px !important;\n    border-radius:  5px !important; }\n::ng-deep .beneficiary-table .ui-corner-all {\n    border-radius: 5px; }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-pages .ui-paginator-page:not(.ui-state-active):hover {\n    background-color: #ededed;\n    color: #333333; }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-pages .ui-paginator-page.ui-state-active {\n    background: #fff !important;\n    color: #909090 !important;\n    border-color: #ddd;\n    margin: 5px;\n    border-radius:  5px; }\n::ng-deep .beneficiary-table .ui-paginator a.ui-state-disabled {\n    background-color: #fff;\n    margin: 5px;\n    border-radius: 5px;\n    opacity: 1px; }\n::ng-deep .beneficiary-table .ui-state-disabled, ::ng-deep .beneficiary-table body .ui-widget:disabled {\n    opacity: 1;\n    filter: alpha(opacity=50); }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-prev:not(.ui-state-disabled):not(.ui-state-active) {\n    background-color: #ededed;\n    margin: 5px;\n    border-radius: 5px; }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-next:not(.ui-state-disabled):not(.ui-state-active) {\n    background-color: #ededed;\n    margin: 5px;\n    border-radius: 5px; }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-prev, ::ng-deep .beneficiary-table .ui-paginator .ui-paginator-next {\n    color: black; }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-next:not(.ui-state-disabled):not(.ui-state-active):hover {\n    background-color: #ededed;\n    color: black; }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-prev:not(.ui-state-disabled):not(.ui-state-active):hover {\n    background-color: #ededed;\n    color: black; }\n::ng-deep .beneficiary-table .ui-paginator .ui-paginator-pages .ui-paginator-page:not(.ui-state-active) {\n    background-color: #ededed;\n    border-radius: 5px; }\n::ng-deep .beneficiary-table .ui-paginator-first, ::ng-deep .beneficiary-table .pi-step-backward, ::ng-deep .beneficiary-table .ui-paginator-last, ::ng-deep .beneficiary-table .pi-step-forward {\n    content: '';\n    display: none; }\n::ng-deep .beneficiary-table .ui-table .ui-table-tbody > tr > td {\n    word-break: break-word !important; }\n::ng-deep .beneficiary-table .ui-table .input-holder input {\n    width: 165px !important;\n    font-weight: 300 !important;\n    font-size: 12px !important;\n    white-space: nowrap !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    padding-right: 10px !important; }\n::ng-deep .beneficiary-table .ui-table button {\n    margin: 5px; }\n::ng-deep .pi-caret-right:before,\n::ng-deep .pi-caret-left:before {\n  display: none !important; }\n::ng-deep .pi-caret-right,\n::ng-deep .pi-caret-left {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n::ng-deep .pi-caret-left:after {\n  content: '' !important;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 6px 8px 6px 0;\n  border-color: transparent #000 transparent transparent;\n  display: block !important;\n  position: relative;\n  left: 4px;\n  top: 3px; }\n::ng-deep .pi-caret-right:after {\n  content: '' !important;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 6px 0 6px 8px;\n  border-color: transparent transparent transparent #000;\n  display: block !important;\n  position: relative;\n  right: -4px;\n  top: 3px; }\n"

/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: BeneficiaryMainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryMainLayoutComponent", function() { return BeneficiaryMainLayoutComponent; });
/* harmony import */ var _table_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../table-helper */ "./src/app/admin/outbound-module/beneficiary-management/table-helper.ts");
/* harmony import */ var _services_payout_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/payout-approval.service */ "./src/app/admin/outbound-module/services/payout-approval.service.ts");
/* harmony import */ var _services_payout_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/payout-history.service */ "./src/app/admin/outbound-module/services/payout-history.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/admin/outbound-module/services/data.service.ts");
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/beneficiary.service */ "./src/app/admin/outbound-module/services/beneficiary.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _notification_confirm_box_confirm_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../notification/confirm-box/confirm-box.component */ "./src/app/admin/outbound-module/notification/confirm-box/confirm-box.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BeneficiaryMainLayoutComponent = /** @class */ (function () {
    function BeneficiaryMainLayoutComponent(beneficoryService, payoutService, router, payoutApprovalService, toastr, dialog, dataService) {
        this.beneficoryService = beneficoryService;
        this.payoutService = payoutService;
        this.router = router;
        this.payoutApprovalService = payoutApprovalService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.dataService = dataService;
        this.submittedByList = [];
        this.beneficiaries = [];
        this.beneficiariesCopy = [];
        this.beneficiaryParam = {};
        this.isFilterCollapased = true;
        this.isLoaded = false;
        this.universityId = '';
        this.cols = [];
    }
    BeneficiaryMainLayoutComponent.prototype.ngOnInit = function () {
        this.getBeneficiary();
        this.cols = _table_helper__WEBPACK_IMPORTED_MODULE_0__["Columns"];
    };
    BeneficiaryMainLayoutComponent.prototype.inputClearBeneficiaryID = function (externalBeneficiaryId, dt) {
        externalBeneficiaryId.nativeElement.value = '';
        this.beneficiaryIDClearValue = '';
        dt.reset();
        dt.filter(this.beneficiaryNameClearValue, 'externalBeneficiaryId', 'contains');
    };
    BeneficiaryMainLayoutComponent.prototype.inputClearBeneficiaryName = function (beneficiaryName, filterfield, dt) {
        beneficiaryName.nativeElement.value = '';
        this.beneficiaryNameClearValue = '';
        dt.reset();
        dt.filter(this.beneficiaryIDClearValue, 'beneficiaryName', 'contains');
    };
    BeneficiaryMainLayoutComponent.prototype.showSort = function (name) {
        if (name === _table_helper__WEBPACK_IMPORTED_MODULE_0__["colNames"].beneficioryId) {
            return false;
        }
        else {
            return false;
        }
    };
    BeneficiaryMainLayoutComponent.prototype.getBeneficiary = function () {
        var _this = this;
        this.beneficiaryParam = {
            num_results: 10000,
            page_number: 0,
        };
        this.beneficoryService.getBeneficiary(this.beneficiaryParam).subscribe(function (res) {
            _this.beneficiaries = res['results'];
            _this.beneficiariesCopy = res['results'];
            _this.beneficiaries.map(function (beneficiary) {
                if (beneficiary['individual']) {
                    beneficiary['beneficiaryEmail'] = beneficiary['individual']['email'];
                    beneficiary['beneficiaryType'] = 'Individual';
                    beneficiary['countryName'] = beneficiary['individual']['address']['countryName'];
                    beneficiary['beneficiaryName'] =
                        _this.getFullName(beneficiary['individual']['givenName'], beneficiary['individual']['familyName']);
                }
                else {
                    beneficiary['beneficiaryName'] = beneficiary['organization']['name'];
                    beneficiary['beneficiaryType'] = 'Business';
                    beneficiary['beneficiaryEmail'] = beneficiary['organization']['email'];
                    beneficiary['countryName'] = beneficiary['organization']['address']['countryName'];
                }
            });
        }, function (err) {
            console.log('err', err);
        });
    };
    BeneficiaryMainLayoutComponent.prototype.getFullName = function (firstName, lastName) {
        var result = ' ' + firstName;
        if (lastName) {
            result += (result ? ' ' : ' ') + lastName;
        }
        return result;
    };
    BeneficiaryMainLayoutComponent.prototype.showPagination = function (table) {
        if (Object.keys(table.filters).length === 0) {
            return this.beneficiaries.length > 10 ? true : false;
        }
        else {
            return (table.filteredValue && table.filteredValue.length > 10 ? true : false);
        }
    };
    BeneficiaryMainLayoutComponent.prototype.searchItems = function (filter) {
        // TODO: Search Items as per filter
        console.log('search items', filter);
        this.payoutApprovalService.getApprovePayouts(filter);
    };
    BeneficiaryMainLayoutComponent.prototype.toggleFn = function () {
        this.isFilterCollapased = !this.isFilterCollapased;
    };
    BeneficiaryMainLayoutComponent.prototype.routeToCreate = function () {
        this.router.navigate(['beneficiaryManagement/create']);
    };
    BeneficiaryMainLayoutComponent.prototype.selectBeneficiary = function (beneficiary, index) {
        this.dataService.setBeneficiary(beneficiary);
        this.router.navigate(['beneficiaryManagement/edit']);
    };
    BeneficiaryMainLayoutComponent.prototype.showDeleteModal = function (beneficiary) {
        var _this = this;
        this.confirmBoxDialog = this.dialog.open(_notification_confirm_box_confirm_box_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmBoxComponent"], {
            panelClass: 'dialog-box'
        });
        this.confirmBoxDialog.componentInstance.header = 'Delete Beneficiary';
        this.confirmBoxDialog.componentInstance.message =
            'Are you sure you want to delete ' + (beneficiary.individual ?
                beneficiary.individual.givenName : beneficiary.organization.name) + ' contact?';
        this.confirmBoxDialog.componentInstance.modalType = 'delete';
        this.confirmBoxDialog.componentInstance.closeDialog.subscribe(function (res) {
            if (res.confirm) {
                _this.deleteBeneficiary(beneficiary.beneficiaryId);
            }
            _this.confirmBoxDialog.close();
        });
        return false;
    };
    BeneficiaryMainLayoutComponent.prototype.deleteBeneficiary = function (beneficiaryId) {
        var _this = this;
        this.beneficoryService.deleteBeneficiary(beneficiaryId).subscribe(function (res) {
            _this.toastr.success('Beneficiary Deleted Successfully.');
            _this.getBeneficiary();
        });
    };
    BeneficiaryMainLayoutComponent.prototype.showNoRecordFound = function (table) {
        if ((this.beneficiaries.length === 0) || (table.filteredValue && table.filteredValue.length === 0)) {
            return true;
        }
        return false;
    };
    BeneficiaryMainLayoutComponent.prototype.searchBeneficiartName = function (value, obj) {
        var found = false;
        var searchKey = value.toLowerCase().split(' ');
        searchKey.forEach(function (key) {
            if (obj.beneficiaryName.toLowerCase().indexOf(key.toLowerCase()) > -1) {
                found = true;
            }
        });
        if (found) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('externalBeneficiaryId'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], BeneficiaryMainLayoutComponent.prototype, "externalBeneficiaryId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('beneficiaryName'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], BeneficiaryMainLayoutComponent.prototype, "beneficiaryName", void 0);
    BeneficiaryMainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-beneficiary-main-layout',
            template: __webpack_require__(/*! ./beneficiary-main-layout.component.html */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.html"),
            styles: [__webpack_require__(/*! ./beneficiary-main-layout.component.scss */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.scss"), __webpack_require__(/*! ./beneficiary-main-layout.component.css */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_beneficiary_service__WEBPACK_IMPORTED_MODULE_6__["BeneficiaryService"],
            _services_payout_history_service__WEBPACK_IMPORTED_MODULE_2__["PayoutHistoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_payout_approval_service__WEBPACK_IMPORTED_MODULE_1__["PayoutApprovalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], BeneficiaryMainLayoutComponent);
    return BeneficiaryMainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-management.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-management.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: BeneficiaryManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryManagementModule", function() { return BeneficiaryManagementModule; });
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/beneficiary.service */ "./src/app/admin/outbound-module/services/beneficiary.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _beneficiary_main_layout_beneficiary_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beneficiary-main-layout/beneficiary-main-layout.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.ts");
/* harmony import */ var _beneficiary_edit_beneficiary_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beneficiary-edit/beneficiary-edit.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-edit/beneficiary-edit.component.ts");
/* harmony import */ var _beneficiary_create_beneficiary_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beneficiary-create/beneficiary-create.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.ts");
/* harmony import */ var _beneficiary_filter_beneficiary_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./beneficiary-filter/beneficiary-filter.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-filter/beneficiary-filter.component.ts");
/* harmony import */ var _beneficiary_delete_beneficiary_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beneficiary-delete/beneficiary-delete.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-delete/beneficiary-delete.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _beneficiary_create_individual_beneficiary_create_individual_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beneficiary-create-individual/beneficiary-create-individual.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-individual/beneficiary-create-individual.component.ts");
/* harmony import */ var _beneficiary_create_business_beneficiary_create_business_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beneficiary-create-business/beneficiary-create-business.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create-business/beneficiary-create-business.component.ts");
/* harmony import */ var _beneficiary_bank_info_beneficiary_bank_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./beneficiary-bank-info/beneficiary-bank-info.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-bank-info/beneficiary-bank-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _beneficiary_management_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./beneficiary-management.routing */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-management.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var BeneficiaryManagementModule = /** @class */ (function () {
    function BeneficiaryManagementModule() {
    }
    BeneficiaryManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_18__["OrderModule"],
                _beneficiary_management_routing__WEBPACK_IMPORTED_MODULE_19__["routing"]
            ],
            declarations: [
                _beneficiary_main_layout_beneficiary_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["BeneficiaryMainLayoutComponent"],
                _beneficiary_edit_beneficiary_edit_component__WEBPACK_IMPORTED_MODULE_4__["BeneficiaryEditComponent"],
                _beneficiary_create_beneficiary_create_component__WEBPACK_IMPORTED_MODULE_5__["BeneficiaryCreateComponent"],
                _beneficiary_create_business_beneficiary_create_business_component__WEBPACK_IMPORTED_MODULE_12__["BeneficiaryCreateBusinessComponent"],
                _beneficiary_bank_info_beneficiary_bank_info_component__WEBPACK_IMPORTED_MODULE_13__["BeneficiaryBankInfoComponent"],
                _beneficiary_create_individual_beneficiary_create_individual_component__WEBPACK_IMPORTED_MODULE_11__["BeneficiaryCreateIndividualComponent"],
                _beneficiary_filter_beneficiary_filter_component__WEBPACK_IMPORTED_MODULE_6__["BeneficiaryFilterComponent"],
                _beneficiary_delete_beneficiary_delete_component__WEBPACK_IMPORTED_MODULE_7__["BeneficiaryDeleteComponent"]
            ],
            providers: [_services_beneficiary_service__WEBPACK_IMPORTED_MODULE_0__["BeneficiaryService"]]
        })
    ], BeneficiaryManagementModule);
    return BeneficiaryManagementModule;
}());



/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-management.routing.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/beneficiary-management.routing.ts ***!
  \************************************************************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_auth_privilege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/auth.privilege.service */ "./src/app/common/services/auth.privilege.service.ts");
/* harmony import */ var _utils_permission_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/permission.constants */ "./src/app/admin/outbound-module/utils/permission.constants.ts");
/* harmony import */ var _beneficiary_main_layout_beneficiary_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beneficiary-main-layout/beneficiary-main-layout.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-main-layout/beneficiary-main-layout.component.ts");
/* harmony import */ var _beneficiary_create_beneficiary_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beneficiary-create/beneficiary-create.component */ "./src/app/admin/outbound-module/beneficiary-management/beneficiary-create/beneficiary-create.component.ts");





var routes = [
    {
        path: '',
        component: _beneficiary_main_layout_beneficiary_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["BeneficiaryMainLayoutComponent"],
        canActivate: [_common_services_auth_privilege_service__WEBPACK_IMPORTED_MODULE_1__["AuthPrivilegeService"]],
        data: {
            requiredPermissions: [
                _utils_permission_constants__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS"].OUTBOUND.BENEFICIARY_MANAGEMENT
            ]
        }
    },
    {
        path: 'create',
        component: _beneficiary_create_beneficiary_create_component__WEBPACK_IMPORTED_MODULE_4__["BeneficiaryCreateComponent"],
        data: {
            requiredPermissions: [
                _utils_permission_constants__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS"].OUTBOUND.BENEFICIARY_MANAGEMENT
            ]
        }
    },
    {
        path: 'edit',
        component: _beneficiary_create_beneficiary_create_component__WEBPACK_IMPORTED_MODULE_4__["BeneficiaryCreateComponent"],
        data: {
            requiredPermissions: [
                _utils_permission_constants__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS"].OUTBOUND.BENEFICIARY_MANAGEMENT
            ]
        }
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/admin/outbound-module/beneficiary-management/table-helper.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/outbound-module/beneficiary-management/table-helper.ts ***!
  \******************************************************************************/
/*! exports provided: Columns, colNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return Columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colNames", function() { return colNames; });
var Columns = [
    {
        name: 'Beneficiary ID',
        field: 'externalBeneficiaryId',
        labelKey: 'label_external_beneficiary_id'
    },
    {
        name: 'Beneficiary Name',
        field: 'beneficiaryName',
        labelKey: 'label_beneficiary_name'
    },
    {
        name: 'Beneficiary Type',
        field: 'beneficiaryType',
        labelKey: 'label_beneficiary_type'
    },
    {
        name: 'Email Address',
        field: 'beneficiaryEmail',
        labelKey: 'label_beneficiary_list_email'
    },
    {
        name: 'country Name',
        field: 'countryName',
        labelKey: 'label_country'
    },
    {
        name: 'Action',
        field: 'action',
        labelKey: 'label_beneficiay_action'
    }
];
var colNames = {
    beneficioryId: 'Beneficiary ID'
};


/***/ })

}]);
//# sourceMappingURL=15.js.map