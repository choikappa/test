(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js ***!
  \*******************************************************************************/
/*! exports provided: AccordionPanelComponent, AccordionComponent, AccordionModule, AccordionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return AccordionPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return AccordionConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = /** @class */ (function () {
    function AccordionConfig() {
        /**
         * Whether the other panels should be closed when a panel is opened
         */
        this.closeOthers = false;
    }
    AccordionConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return AccordionConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeOtherPanels = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.addGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        this.groups.push(group);
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.removeGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        var /** @type {?} */ index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    host: {
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist',
                        class: 'panel-group',
                        style: 'display: block'
                    }
                }] }
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionConfig, },
    ]; };
    AccordionComponent.propDecorators = {
        "closeOthers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AccordionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
var AccordionPanelComponent = /** @class */ (function () {
    function AccordionPanelComponent(accordion) {
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        get: /**
         * Is accordion group open or closed. This property supports two-way binding
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then(function () {
                    _this.isOpenChange.emit(value);
                })
                    .catch(function (error) {
                    /* tslint:disable: no-console */
                    console.log(error);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.accordion.removeGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.toggleOpen = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\"\n       (click)=\"toggleOpen()\">\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\"\n           [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                    host: {
                        class: 'panel',
                        style: 'display: block'
                    }
                }] }
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: AccordionComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [AccordionComponent,] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        "heading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panelClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpenChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.panel-open',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AccordionPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    /**
     * @return {?}
     */
    AccordionModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AccordionModule, providers: [AccordionConfig] };
    };
    AccordionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]],
                    declarations: [AccordionComponent, AccordionPanelComponent],
                    exports: [AccordionComponent, AccordionPanelComponent]
                },] }
    ];
    return AccordionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1hY2NvcmRpb24uanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uL2FjY29yZGlvbi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2VydmljZSwgcHJvdmlkZXMgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBBY2NvcmRpb25Db21wb25lbnQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db25maWcge1xuICAvKiogV2hldGhlciB0aGUgb3RoZXIgcGFuZWxzIHNob3VsZCBiZSBjbG9zZWQgd2hlbiBhIHBhbmVsIGlzIG9wZW5lZCAqL1xuICBjbG9zZU90aGVyczogQm9vbGVhbiA9IGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29uZmlnIH0gZnJvbSAnLi9hY2NvcmRpb24uY29uZmlnJztcblxuLyoqIERpc3BsYXlzIGNvbGxhcHNpYmxlIGNvbnRlbnQgcGFuZWxzIGZvciBwcmVzZW50aW5nIGluZm9ybWF0aW9uIGluIGEgbGltaXRlZCBhbW91bnQgb2Ygc3BhY2UuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhY2NvcmRpb24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtbXVsdGlzZWxlY3RhYmxlXSc6ICdjbG9zZU90aGVycycsXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxuICAgIGNsYXNzOiAncGFuZWwtZ3JvdXAnLFxuICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2snXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcbiAgLyoqIGlmIGB0cnVlYCBleHBhbmRpbmcgb25lIGl0ZW0gd2lsbCBjbG9zZSBhbGwgb3RoZXJzICovXG4gIEBJbnB1dCgpIGNsb3NlT3RoZXJzOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCBncm91cHM6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IEFjY29yZGlvbkNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIGNsb3NlT3RoZXJQYW5lbHMob3Blbkdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG9zZU90aGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKGdyb3VwICE9PSBvcGVuR3JvdXApIHtcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRHcm91cChncm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgfVxuXG4gIHJlbW92ZUdyb3VwKGdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xuXG4vKipcbiAqICMjIyBBY2NvcmRpb24gaGVhZGluZ1xuICogSW5zdGVhZCBvZiB1c2luZyBgaGVhZGluZ2AgYXR0cmlidXRlIG9uIHRoZSBgYWNjb3JkaW9uLWdyb3VwYCwgeW91IGNhbiB1c2VcbiAqIGFuIGBhY2NvcmRpb24taGVhZGluZ2AgYXR0cmlidXRlIG9uIGBhbnlgIGVsZW1lbnQgaW5zaWRlIG9mIGEgZ3JvdXAgdGhhdFxuICogd2lsbCBiZSB1c2VkIGFzIGdyb3VwJ3MgaGVhZGVyIHRlbXBsYXRlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhY2NvcmRpb24tZ3JvdXAsIGFjY29yZGlvbi1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdwYW5lbCcsXG4gICAgc3R5bGU6ICdkaXNwbGF5OiBibG9jaydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIENsaWNrYWJsZSB0ZXh0IGluIGFjY29yZGlvbidzIGdyb3VwIGhlYWRlciwgY2hlY2sgYGFjY29yZGlvbiBoZWFkaW5nYCBiZWxvdyBmb3IgdXNpbmcgaHRtbCBpbiBoZWFkZXIgKi9cbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICAvKiogUHJvdmlkZXMgYW4gYWJpbGl0eSB0byB1c2UgQm9vdHN0cmFwJ3MgY29udGV4dHVhbCBwYW5lbCBjbGFzc2VzXG4gICAqIChgcGFuZWwtcHJpbWFyeWAsIGBwYW5lbC1zdWNjZXNzYCwgYHBhbmVsLWluZm9gLCBldGMuLi4pLlxuICAgKiBMaXN0IG9mIGFsbCBhdmFpbGFibGUgY2xhc3NlcyBbYXZhaWxhYmxlIGhlcmVdXG4gICAqIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy8zLjMvY29tcG9uZW50cy8jcGFuZWxzLWFsdGVybmF0aXZlcylcbiAgICovXG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3M6IHN0cmluZztcbiAgLyoqIGlmIDxjb2RlPnRydWU8L2NvZGU+IMOiwoDClCBkaXNhYmxlcyBhY2NvcmRpb24gZ3JvdXAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIG9wZW5lZCBzdGF0ZSBjaGFuZ2VzICovXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBRdWVzdGlvbmFibGUsIG1heWJlIC5wYW5lbC1vcGVuIHNob3VsZCBiZSBvbiBjaGlsZCBkaXYucGFuZWwgZWxlbWVudD9cbiAgLyoqIElzIGFjY29yZGlvbiBncm91cCBvcGVuIG9yIGNsb3NlZC4gVGhpcyBwcm9wZXJ0eSBzdXBwb3J0cyB0d28td2F5IGJpbmRpbmcgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYW5lbC1vcGVuJylcbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pc09wZW4pIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbi5jbG9zZU90aGVyUGFuZWxzKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTogbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9pc09wZW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWNjb3JkaW9uQ29tcG9uZW50KSBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudCkge1xuICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbENsYXNzID0gdGhpcy5wYW5lbENsYXNzIHx8ICdwYW5lbC1kZWZhdWx0JztcbiAgICB0aGlzLmFjY29yZGlvbi5hZGRHcm91cCh0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlT3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgfVxuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29uZmlnIH0gZnJvbSAnLi9hY2NvcmRpb24uY29uZmlnJztcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb2xsYXBzZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvbGxhcHNlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQWNjb3JkaW9uQ29tcG9uZW50LCBBY2NvcmRpb25QYW5lbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBY2NvcmRpb25Db21wb25lbnQsIEFjY29yZGlvblBhbmVsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQWNjb3JkaW9uTW9kdWxlLCBwcm92aWRlcnM6IFtBY2NvcmRpb25Db25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7MkJBUXlCLEtBQUs7OztnQkFIN0IsVUFBVTs7MEJBTFg7Ozs7Ozs7QUNBQTs7OztJQXFCRSw0QkFBWSxNQUF1QjtzQkFGVyxFQUFFO1FBRzlDLE1BQU0sQ0FBQyxNQUFN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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js ***!
  \***********************************************************************/
/*! exports provided: AlertComponent, AlertModule, AlertConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return AlertConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return AlertConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(/** @type {?} */ (this.dismissOnTimeout), 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    AlertComponent.prototype.close = /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    AlertComponent.propDecorators = {
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dismissible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dismissOnTimeout": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClosed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    /**
     * @return {?}
     */
    AlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
    AlertModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [AlertComponent],
                    exports: [AlertComponent],
                    entryComponents: [AlertComponent]
                },] }
    ];
    return AlertModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1hbGVydC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9hbGVydC9hbGVydC5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydENvbmZpZyB7XG4gIC8qKiBkZWZhdWx0IGFsZXJ0IHR5cGUgKi9cbiAgdHlwZSA9ICd3YXJuaW5nJztcblxuICAvKiogaXMgYWxlcnRzIGFyZSBkaXNtaXNzaWJsZSBieSBkZWZhdWx0ICovXG4gIGRpc21pc3NpYmxlID0gZmFsc2U7XG5cbiAgLyoqIGRlZmF1bHQgdGltZSBiZWZvcmUgYWxlcnQgd2lsbCBkaXNtaXNzICovXG4gIGRpc21pc3NPblRpbWVvdXQ/OiBudW1iZXIgPSB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydENvbmZpZyB9IGZyb20gJy4vYWxlcnQuY29uZmlnJztcbmltcG9ydCB7IE9uQ2hhbmdlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FsZXJ0LGJzLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiogQWxlcnQgdHlwZS5cbiAgICogUHJvdmlkZXMgb25lIG9mIGZvdXIgYm9vdHN0cmFwIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6XG4gICAqIGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AgYW5kIGBkYW5nZXJgXG4gICAqL1xuICBASW5wdXQoKSB0eXBlID0gJ3dhcm5pbmcnO1xuICAvKiogSWYgc2V0LCBkaXNwbGF5cyBhbiBpbmxpbmUgXCJDbG9zZVwiIGJ1dHRvbiAqL1xuICBAT25DaGFuZ2UoKSAgIEBJbnB1dCgpICAgZGlzbWlzc2libGUgPSBmYWxzZTtcbiAgLyoqIE51bWJlciBpbiBtaWxsaXNlY29uZHMsIGFmdGVyIHdoaWNoIGFsZXJ0IHdpbGwgYmUgY2xvc2VkICovXG4gIEBJbnB1dCgpIGRpc21pc3NPblRpbWVvdXQ6IG51bWJlciB8IHN0cmluZztcblxuICAvKiogSXMgYWxlcnQgdmlzaWJsZSAqL1xuICBASW5wdXQoKSBpc09wZW4gPSB0cnVlO1xuXG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGltbWVkaWF0ZWx5IGFmdGVyIGNsb3NlIGluc3RhbmNlIG1ldGhvZCBpcyBjYWxsZWQsXG4gICAqICRldmVudCBpcyBhbiBpbnN0YW5jZSBvZiBBbGVydCBjb21wb25lbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8QWxlcnRDb21wb25lbnQ+KCk7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gYWxlcnQgY2xvc2VkLCAkZXZlbnQgaXMgYW4gaW5zdGFuY2Ugb2YgQWxlcnQgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBvbkNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QWxlcnRDb21wb25lbnQ+KCk7XG5cblxuICBjbGFzc2VzID0gJyc7XG4gIGRpc21pc3NpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jb25maWc6IEFsZXJ0Q29uZmlnLCBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xuICAgIHRoaXMuZGlzbWlzc2libGVDaGFuZ2Uuc3Vic2NyaWJlKChkaXNtaXNzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5jbGFzc2VzID0gdGhpcy5kaXNtaXNzaWJsZSA/ICdhbGVydC1kaXNtaXNzaWJsZScgOiAnJztcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzbWlzc09uVGltZW91dCkge1xuICAgICAgLy8gaWYgZGlzbWlzc09uVGltZW91dCB1c2VkIGFzIGF0dHIgd2l0aG91dCBiaW5kaW5nLCBpdCB3aWxsIGJlIGEgc3RyaW5nXG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB0aGlzLmNsb3NlKCksXG4gICAgICAgIHBhcnNlSW50KHRoaXMuZGlzbWlzc09uVGltZW91dCBhcyBzdHJpbmcsIDEwKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyB0b2RvOiBhbmltYXRpb24gYCBJZiB0aGUgLmZhZGUgYW5kIC5pbiBjbGFzc2VzIGFyZSBwcmVzZW50IG9uIHRoZSBlbGVtZW50LFxuICAvLyB0aGUgYWxlcnQgd2lsbCBmYWRlIG91dCBiZWZvcmUgaXQgaXMgcmVtb3ZlZGBcbiAgLyoqXG4gICAqIENsb3NlcyBhbiBhbGVydCBieSByZW1vdmluZyBpdCBmcm9tIHRoZSBET00uXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsb3NlLmVtaXQodGhpcyk7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLm9uQ2xvc2VkLmVtaXQodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydENvbmZpZyB9IGZyb20gJy4vYWxlcnQuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FsZXJ0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FsZXJ0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQWxlcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEFsZXJ0TW9kdWxlLCBwcm92aWRlcnM6IFtBbGVydENvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztvQkFLUyxTQUFTOzs7OzJCQUdGLEtBQUs7Ozs7Z0NBR1MsU0FBUzs7O2dCQVR0QyxVQUFVOztzQkFGWDs7Ozs7Ozs7SUMwQ0Usd0JBQVksT0FBb0IsRUFBVSxlQUFrQztRQUE1RSxpQkFNQztRQU55QyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7Ozs7OztvQkFwQjVELFNBQVM7Ozs7MkJBRWMsS0FBSzs7OztzQkFLMUIsSUFBSTs7Ozs7dUJBS0YsSUFBSSxZQUFZLEVBQWtCOzs7O3dCQUVqQyxJQUFJLFlBQVksRUFBa0I7dUJBRzdDLEVBQUU7aUNBQ1EsSUFBSSxZQUFZLEVBQVc7UUFHN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFdBQW9CO1lBQ3BELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7WUFDM0QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQyxDQUFDLENBQUM7S0FDSjs7OztJQUVELGlDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O1lBRXpCLFVBQVUsQ0FDUixjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxHQUFBLEVBQ2xCLFFBQVEsbUJBQUMsSUFBSSxDQUFDLGdCQUEwQixHQUFFLEVBQUUsQ0FBQyxDQUM5QyxDQUFDO1NBQ0g7S0FDRjs7Ozs7Ozs7OztJQU9ELDhCQUFLOzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLCtiQUFxQztvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVBRLFdBQVc7Z0JBUGxCLGlCQUFpQjs7O3lCQW9CaEIsS0FBSztnQ0FFUyxLQUFLO3FDQUVuQixLQUFLOzJCQUdMLEtBQUs7NEJBS0wsTUFBTTs2QkFFTixNQUFNOzs7UUFaTixRQUFRLEVBQUU7Ozt5QkF4QmI7Ozs7Ozs7QUNBQTs7Ozs7O0lBWVMsbUJBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztLQUM1RDs7Z0JBVEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQ3pCLGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDbEM7O3NCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js ***!
  \***************************************************************************/
/*! exports provided: ButtonCheckboxDirective, ButtonRadioGroupDirective, ButtonRadioDirective, ButtonsModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ButtonRadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RADIO_CONTROL_VALUE_ACCESSOR$1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
var /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.propDecorators = {
        "btnCheckboxTrue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "btnCheckboxFalse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonRadioGroupDirective; }),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = /** @class */ (function () {
    function ButtonRadioGroupDirective(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioGroupDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    return ButtonRadioGroupDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        get: /**
         * Current value of radio component or group
         * @return {?}
         */
        function () {
            return this.group ? this.group.value : this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        get: /**
         * If `true` — radio button is disabled
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype._onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: ButtonRadioGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ButtonRadioDirective.propDecorators = {
        "btnRadio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "uncheckable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isActive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    };
    return ButtonRadioDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                },] }
    ];
    return ButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1idXR0b25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy9idXR0b24tcmFkaW8uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFByb3ZpZGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBUT0RPOiBjb25maWc6IGFjdGl2ZUNsYXNzIC0gQ2xhc3MgdG8gYXBwbHkgdG8gdGhlIGNoZWNrZWQgYnV0dG9uc1xuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBBZGQgY2hlY2tib3ggZnVuY3Rpb25hbGl0eSB0byBhbnkgZWxlbWVudFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuQ2hlY2tib3hdJyxcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgLyoqIFRydXRoeSB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gbmdNb2RlbCAqL1xuICBASW5wdXQoKSBidG5DaGVja2JveFRydWUgPSB0cnVlO1xuICAvKiogRmFsc3kgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cbiAgQElucHV0KCkgYnRuQ2hlY2tib3hGYWxzZSA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXG4gIHN0YXRlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nO1xuICBwcm90ZWN0ZWQgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByb3RlY3RlZCBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gdmlldyAtPiBtb2RlbFxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlKCF0aGlzLnN0YXRlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUodGhpcy50cnVlVmFsdWUgPT09IHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB0cnVlVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94VHJ1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5idG5DaGVja2JveFRydWVcbiAgICAgIDogdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmFsc2VWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hGYWxzZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5idG5DaGVja2JveEZhbHNlXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0YXRlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJ1ZVZhbHVlID09PSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyB0aGlzLnRydWVWYWx1ZSA6IHRoaXMuZmFsc2VWYWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBBIGdyb3VwIG9mIHJhZGlvIGJ1dHRvbnMuXG4gKiBBIHZhbHVlIG9mIGEgc2VsZWN0ZWQgYnV0dG9uIGlzIGJvdW5kIHRvIGEgdmFyaWFibGUgc3BlY2lmaWVkIHZpYSBuZ01vZGVsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuUmFkaW9Hcm91cF0nLFxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFByb3ZpZGVyLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tcmFkaW8tZ3JvdXAuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IFJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBDcmVhdGUgcmFkaW8gYnV0dG9ucyBvciBncm91cHMgb2YgYnV0dG9ucy5cbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tidG5SYWRpb10nLFxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0RpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8qKiBSYWRpbyBidXR0b24gdmFsdWUsIHdpbGwgYmUgc2V0IHRvIGBuZ01vZGVsYCAqL1xuICBASW5wdXQoKSBidG5SYWRpbzogc3RyaW5nO1xuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gY2FuIGJlIHVuY2hlY2tlZCAqL1xuICBASW5wdXQoKSB1bmNoZWNrYWJsZTogYm9vbGVhbjtcbiAgLyoqIEN1cnJlbnQgdmFsdWUgb2YgcmFkaW8gY29tcG9uZW50IG9yIGdyb3VwICovXG4gIEBJbnB1dCgpIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cCA/IHRoaXMuZ3JvdXAudmFsdWUgOiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVsbCB8IHN0cmluZykge1xuICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICB0aGlzLmdyb3VwLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gaXMgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlOiAgbnVsbCB8IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBncm91cDogQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZGlzYWJsZWQgfHwgIXRoaXMudW5jaGVja2FibGUgJiYgdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnVuY2hlY2thYmxlICYmIHRoaXMuYnRuUmFkaW8gPT09IHRoaXMudmFsdWUgPyB1bmRlZmluZWQgOiB0aGlzLmJ0blJhZGlvO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51bmNoZWNrYWJsZSA9IHR5cGVvZiB0aGlzLnVuY2hlY2thYmxlICE9PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgX29uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5ncm91cC5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuZ3JvdXAub25DaGFuZ2UodmFsdWUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0J1dHRvbkNoZWNrYm94RGlyZWN0aXZlLCBCdXR0b25SYWRpb0RpcmVjdGl2ZSwgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQnV0dG9uc01vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBWUEscUJBQWEsK0JBQStCLEdBQWE7SUFDdkQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXVCLEdBQUEsQ0FBQztJQUN0RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7Ozs7Ozs7OzsrQkFXMkIsSUFBSTs7OztnQ0FFSCxLQUFLO3FCQUl6QixLQUFLO3dCQUtRLFFBQVEsQ0FBQyxTQUFTO3lCQUNqQixRQUFRLENBQUMsU0FBUzs7Ozs7SUFJeEMseUNBQU87Ozs7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHNUIsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1QztJQUVELHNCQUFjLDhDQUFTOzs7O1FBQXZCO1lBQ0UsT0FBTyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVztrQkFDOUMsSUFBSSxDQUFDLGVBQWU7a0JBQ3BCLElBQUksQ0FBQztTQUNWOzs7T0FBQTtJQUVELHNCQUFjLCtDQUFVOzs7O1FBQXhCO1lBQ0UsT0FBTyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXO2tCQUMvQyxJQUFJLENBQUMsZ0JBQWdCO2tCQUNyQixLQUFLLENBQUM7U0FDWDs7O09BQUE7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLEtBQWM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUM1RDs7Ozs7OztJQUlELDRDQUFVOzs7O0lBQVYsVUFBVyxLQUE4QjtRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN2RDs7Ozs7SUFFRCxrREFBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7O0lBRUQsa0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsbURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7OztvQ0FHRSxLQUFLO3FDQUVMLEtBQUs7MEJBRUwsV0FBVyxTQUFDLGNBQWMsY0FDMUIsV0FBVyxTQUFDLG1CQUFtQjs0QkFVL0IsWUFBWSxTQUFDLE9BQU87O2tDQTVDdkI7Ozs7Ozs7QUNBQSxxQkFHYSw0QkFBNEIsR0FBYTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBeUIsR0FBQSxDQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7Ozs7O0lBdUJBLG1DQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjt3QkFaL0IsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTO0tBV2dCO0lBVDlDLHNCQUFJLDRDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBQ0QsVUFBVSxLQUFvQjtZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7O09BSEE7Ozs7O0lBU0QsOENBQVU7Ozs7SUFBVixVQUFXLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekI7Ozs7O0lBRUQsb0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQscURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQzFDOzs7O2dCQWpCUSxpQkFBaUI7O29DQUExQjs7Ozs7OztBQ0FBLHFCQWdCYUEsOEJBQTRCLEdBQWE7SUFDcEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEdBQUEsQ0FBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7Ozs7OztJQWtEQSw4QkFDVSxJQUNBLEtBQ1ksT0FDWjtRQUhBLE9BQUUsR0FBRixFQUFFO1FBQ0YsUUFBRyxHQUFILEdBQUc7UUFDUyxVQUFLLEdBQUwsS0FBSztRQUNqQixhQUFRLEdBQVIsUUFBUTt3QkEzQ1AsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTO0tBMkMxQjswQkFwQ1MsdUNBQUs7Ozs7OztZQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O1FBR3JELFVBQVUsS0FBb0I7WUFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFFekIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7Ozs7MEJBRVksMENBQVE7Ozs7OztZQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7OztRQUd4QixVQUFhLFFBQWlCO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQzs7OzswQkFJRywwQ0FBUTs7Ozs7WUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7SUFjdEMsc0NBQU87Ozs7UUFDTCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsRyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQUc3Qix1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7S0FDNUQ7Ozs7SUFFRCxxQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDbEI7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUzQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0Qjs7Ozs7OztJQUlELHlDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekI7Ozs7O0lBRUQsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRTFFLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ2xFOztnQkF0R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUUsQ0FBQ0EsOEJBQTRCLENBQUM7aUJBQzFDOzs7O2dCQTNCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFhVix5QkFBeUIsdUJBNEQ3QixRQUFRO2dCQS9EWCxTQUFTOzs7NkJBeUJSLEtBQUs7Z0NBRUwsS0FBSzswQkFFTCxLQUFLOzZCQWFMLEtBQUs7NkJBU0wsV0FBVyxTQUFDLGNBQWMsY0FDMUIsV0FBVyxTQUFDLG1CQUFtQjs0QkFlL0IsWUFBWSxTQUFDLE9BQU87OytCQTlFdkI7Ozs7Ozs7QUNBQTs7Ozs7O0lBV1MscUJBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ25EOztnQkFQRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLENBQUM7b0JBQ3hGLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixDQUFDO2lCQUNwRjs7d0JBVEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js ***!
  \*****************************************************************************/
/*! exports provided: CarouselComponent, CarouselModule, SlideComponent, CarouselConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        /**
         * Show carousel-indicators
         */
        this.showIndicators = true;
    }
    CarouselConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return CarouselConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = "UNKNOWN";
Direction[Direction.NEXT] = "NEXT";
Direction[Direction.PREV] = "PREV";
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        set: /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        get: /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        var _this = this;
        var /** @type {?} */ remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var /** @type {?} */ nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var /** @type {?} */ currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * Starts a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * Stops a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     */
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    function (direction, force) {
        var /** @type {?} */ nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var /** @type {?} */ nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    function () {
        var _this = this;
        this.resetTimer();
        var /** @type {?} */ interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var /** @type {?} */ nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    CarouselComponent.propDecorators = {
        "noWrap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "noPause": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showIndicators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeSlideChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "activeSlide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "interval": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    }
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent, },
    ]; };
    SlideComponent.propDecorators = {
        "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "addClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [SlideComponent, CarouselComponent],
                    exports: [SlideComponent, CarouselComponent],
                    providers: [CarouselConfig]
                },] }
    ];
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jYXJvdXNlbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC9jYXJvdXNlbC5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nhcm91c2VsL3NsaWRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb25maWcge1xuICAvKiogRGVmYXVsdCBpbnRlcnZhbCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlcyAqL1xuICBpbnRlcnZhbCA9IDUwMDA7XG5cbiAgLyoqIElzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgY2FuIGJlIHBhdXNlZCAqL1xuICBub1BhdXNlID0gZmFsc2U7XG5cbiAgLyoqIElzIHNsaWRlcyBjYW4gd3JhcCBmcm9tIHRoZSBsYXN0IHRvIHRoZSBmaXJzdCBzbGlkZSAqL1xuICBub1dyYXAgPSBmYWxzZTtcblxuICAvKiogU2hvdyBjYXJvdXNlbC1pbmRpY2F0b3JzICovXG4gIHNob3dJbmRpY2F0b3JzID0gdHJ1ZTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnRcbi8qKipcbiAqIHBhdXNlIChub3QgeWV0IHN1cHBvcnRlZCkgKD9zdHJpbmc9J2hvdmVyJykgLSBldmVudCBncm91cCBuYW1lIHdoaWNoIHBhdXNlc1xuICogdGhlIGN5Y2xpbmcgb2YgdGhlIGNhcm91c2VsLCBpZiBob3ZlciBwYXVzZXMgb24gbW91c2VlbnRlciBhbmQgcmVzdW1lcyBvblxuICogbW91c2VsZWF2ZSBrZXlib2FyZCAobm90IHlldCBzdXBwb3J0ZWQpICg/Ym9vbGVhbj10cnVlKSAtIGlmIGZhbHNlXG4gKiBjYXJvdXNlbCB3aWxsIG5vdCByZWFjdCB0byBrZXlib2FyZCBldmVudHNcbiAqIG5vdGU6IHN3aXBpbmcgbm90IHlldCBzdXBwb3J0ZWRcbiAqL1xuLyoqKipcbiAqIFByb2JsZW1zOlxuICogMSkgaWYgd2Ugc2V0IGFuIGFjdGl2ZSBzbGlkZSB2aWEgbW9kZWwgY2hhbmdlcywgLmFjdGl2ZSBjbGFzcyByZW1haW5zIG9uIGFcbiAqIGN1cnJlbnQgc2xpZGUuXG4gKiAyKSBpZiB3ZSBoYXZlIG9ubHkgb25lIHNsaWRlLCB3ZSBzaG91bGRuJ3Qgc2hvdyBwcmV2L25leHQgbmF2IGJ1dHRvbnNcbiAqIDMpIGlmIGZpcnN0IG9yIGxhc3Qgc2xpZGUgaXMgYWN0aXZlIGFuZCBub1dyYXAgaXMgdHJ1ZSwgdGhlcmUgc2hvdWxkIGJlXG4gKiBcImRpc2FibGVkXCIgY2xhc3Mgb24gdGhlIG5hdiBidXR0b25zLlxuICogNCkgZGVmYXVsdCBpbnRlcnZhbCBzaG91bGQgYmUgZXF1YWwgNTAwMFxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNCczMsIExpbmtlZExpc3QgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLmNvbmZpZyc7XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG4gIFVOS05PV04sXG4gIE5FWFQsXG4gIFBSRVZcbn1cblxuLyoqXG4gKiBCYXNlIGVsZW1lbnQgdG8gY3JlYXRlIGNhcm91c2VsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBJZiBgdHJ1ZWAgw6LCgMKUIGNhcm91c2VsIHdpbGwgbm90IGN5Y2xlIGNvbnRpbnVvdXNseSBhbmQgd2lsbCBoYXZlIGhhcmQgc3RvcHMgKHByZXZlbnQgbG9vcGluZykgKi9cbiAgQElucHV0KCkgbm9XcmFwOiBib29sZWFuO1xuICAvKiogIElmIGB0cnVlYCDDosKAwpQgd2lsbCBkaXNhYmxlIHBhdXNpbmcgb24gY2Fyb3VzZWwgbW91c2UgaG92ZXIgKi9cbiAgQElucHV0KCkgbm9QYXVzZTogYm9vbGVhbjtcbiAgLyoqICBJZiBgdHJ1ZWAgw6LCgMKUIGNhcm91c2VsLWluZGljYXRvcnMgYXJlIHZpc2libGUgICovXG4gIEBJbnB1dCgpIHNob3dJbmRpY2F0b3JzOiBib29sZWFuO1xuXG4gIC8qKiBXaWxsIGJlIGVtaXR0ZWQgd2hlbiBhY3RpdmUgc2xpZGUgaGFzIGJlZW4gY2hhbmdlZC4gUGFydCBvZiB0d28td2F5LWJpbmRhYmxlIFsoYWN0aXZlU2xpZGUpXSBwcm9wZXJ0eSAqL1xuICBAT3V0cHV0KClcbiAgYWN0aXZlU2xpZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KGZhbHNlKTtcblxuICAvKiogSW5kZXggb2YgY3VycmVudGx5IGRpc3BsYXllZCBzbGlkZShzdGFydGVkIGZvciAwKSAqL1xuICBASW5wdXQoKVxuICBzZXQgYWN0aXZlU2xpZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoICYmIGluZGV4ICE9PSB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFjdGl2ZVNsaWRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxheSBvZiBpdGVtIGN5Y2xpbmcgaW4gbWlsbGlzZWNvbmRzLiBJZiBmYWxzZSwgY2Fyb3VzZWwgd29uJ3QgY3ljbGVcbiAgICogYXV0b21hdGljYWxseS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpbnRlcnZhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgfVxuXG4gIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcbiAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgZ2V0IHNsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzLnRvQXJyYXkoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJvdGVjdGVkIGN1cnJlbnRJbnRlcnZhbDogYW55O1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRBY3RpdmVTbGlkZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX2ludGVydmFsOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfc2xpZGVzOiBMaW5rZWRMaXN0PFNsaWRlQ29tcG9uZW50PiA9IG5ldyBMaW5rZWRMaXN0PFNsaWRlQ29tcG9uZW50PigpO1xuICBwcm90ZWN0ZWQgaXNQbGF5aW5nOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2Fyb3VzZWxDb25maWcsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBuZXcgc2xpZGUuIElmIHRoaXMgc2xpZGUgaXMgZmlyc3QgaW4gY29sbGVjdGlvbiAtIHNldCBpdCBhcyBhY3RpdmVcbiAgICogYW5kIHN0YXJ0cyBhdXRvIGNoYW5naW5nXG4gICAqIEBwYXJhbSBzbGlkZVxuICAgKi9cbiAgYWRkU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc2xpZGVzLmFkZChzbGlkZSk7XG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IHZvaWQgMDtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSAwO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3BlY2lmaWVkIHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGFjdGl2ZSAtIHdpbGwgcm9sbCB0byBhbm90aGVyXG4gICAqIHNsaWRlXG4gICAqIEBwYXJhbSBzbGlkZVxuICAgKi9cbiAgcmVtb3ZlU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmVtSW5kZXggPSB0aGlzLl9zbGlkZXMuaW5kZXhPZihzbGlkZSk7XG5cbiAgICBpZiAodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID09PSByZW1JbmRleCkge1xuICAgICAgLy8gcmVtb3Zpbmcgb2YgYWN0aXZlIHNsaWRlXG4gICAgICBsZXQgbmV4dFNsaWRlSW5kZXg6IG51bWJlciA9IHZvaWQgMDtcbiAgICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBpZiB0aGlzIHNsaWRlIGxhc3QgLSB3aWxsIHJvbGwgdG8gZmlyc3Qgc2xpZGUsIGlmIG5vV3JhcCBmbGFnIGlzXG4gICAgICAgIC8vIEZBTFNFIG9yIHRvIHByZXZpb3VzLCBpZiBub1dyYXAgaXMgVFJVRSBpbiBjYXNlLCBpZiB0aGlzIHNsaWRlIGluXG4gICAgICAgIC8vIG1pZGRsZSBvZiBjb2xsZWN0aW9uLCBpbmRleCBvZiBuZXh0IHNsaWRlIGlzIHNhbWUgdG8gcmVtb3ZlZFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICF0aGlzLmlzTGFzdChyZW1JbmRleClcbiAgICAgICAgICA/IHJlbUluZGV4XG4gICAgICAgICAgOiB0aGlzLm5vV3JhcCA/IHJlbUluZGV4IC0gMSA6IDA7XG4gICAgICB9XG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcblxuICAgICAgLy8gcHJldmVudHMgZXhjZXB0aW9uIHdpdGggY2hhbmdpbmcgc29tZSB2YWx1ZSBhZnRlciBjaGVja2luZ1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbGVjdChuZXh0U2xpZGVJbmRleCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2xpZGVzLnJlbW92ZShyZW1JbmRleCk7XG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFNsaWRlSW5kZXgoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBhZnRlciByZW1vdmluZywgbmVlZCB0byBhY3R1YWxpemUgaW5kZXggb2YgY3VycmVudCBhY3RpdmUgc2xpZGVcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gY3VycmVudFNsaWRlSW5kZXg7XG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJvbGxpbmcgdG8gbmV4dCBzbGlkZVxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiB0cnVlIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWdcbiAgICovXG4gIG5leHRTbGlkZShmb3JjZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IHRoaXMuZmluZE5leHRTbGlkZUluZGV4KERpcmVjdGlvbi5ORVhULCBmb3JjZSk7XG4gIH1cblxuICAvKipcbiAgICogUm9sbGluZyB0byBwcmV2aW91cyBzbGlkZVxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiB0cnVlIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWdcbiAgICovXG4gIHByZXZpb3VzU2xpZGUoZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uUFJFViwgZm9yY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvbGxpbmcgdG8gc3BlY2lmaWVkIHNsaWRlXG4gICAqIEBwYXJhbSBpbmRleDoge251bWJlcn0gaW5kZXggb2Ygc2xpZGUsIHdoaWNoIG11c3QgYmUgc2hvd25cbiAgICovXG4gIHNlbGVjdFNsaWRlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcbiAgICovXG4gIHBsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgYSBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcGF1c2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5vUGF1c2UpIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYW5kIHJldHVybnMgaW5kZXggb2YgY3VycmVudGx5IGRpc3BsYXllZCBzbGlkZVxuICAgKi9cbiAgZ2V0Q3VycmVudFNsaWRlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzLmZpbmRJbmRleCgoc2xpZGU6IFNsaWRlQ29tcG9uZW50KSA9PiBzbGlkZS5hY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMsIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBpbmRleCBpcyBsYXN0IGluIGNvbGxlY3Rpb25cbiAgICogQHBhcmFtIGluZGV4XG4gICAqL1xuICBpc0xhc3QoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbmRleCArIDEgPj0gdGhpcy5fc2xpZGVzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIG5leHQgc2xpZGUgaW5kZXgsIGRlcGVuZGluZyBvZiBkaXJlY3Rpb25cbiAgICogQHBhcmFtIGRpcmVjdGlvbjogRGlyZWN0aW9uKFVOS05PV058UFJFVnxORVhUKVxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiBUUlVFIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWcsIGVsc2Ugd2lsbFxuICAgKiAgIHJldHVybiB1bmRlZmluZWQgaWYgbmV4dCBzbGlkZSByZXF1aXJlIHdyYXBwaW5nXG4gICAqL1xuICBwcml2YXRlIGZpbmROZXh0U2xpZGVJbmRleChkaXJlY3Rpb246IERpcmVjdGlvbiwgZm9yY2U6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCBuZXh0U2xpZGVJbmRleCA9IDA7XG5cbiAgICBpZiAoXG4gICAgICAhZm9yY2UgJiZcbiAgICAgICh0aGlzLmlzTGFzdCh0aGlzLmFjdGl2ZVNsaWRlKSAmJlxuICAgICAgICBkaXJlY3Rpb24gIT09IERpcmVjdGlvbi5QUkVWICYmXG4gICAgICAgIHRoaXMubm9XcmFwKVxuICAgICkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSBEaXJlY3Rpb24uTkVYVDpcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBsYXN0IHNsaWRlLCBub3QgZm9yY2UsIGxvb3BpbmcgaXMgZGlzYWJsZWRcbiAgICAgICAgLy8gYW5kIG5lZWQgdG8gZ29pbmcgZm9yd2FyZCAtIHNlbGVjdCBjdXJyZW50IHNsaWRlLCBhcyBhIG5leHRcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAhdGhpcy5pc0xhc3QodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKVxuICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlICsgMVxuICAgICAgICAgIDogIWZvcmNlICYmIHRoaXMubm9XcmFwID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlIDogMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERpcmVjdGlvbi5QUkVWOlxuICAgICAgICAvLyBpZiB0aGlzIGlzIGZpcnN0IHNsaWRlLCBub3QgZm9yY2UsIGxvb3BpbmcgaXMgZGlzYWJsZWRcbiAgICAgICAgLy8gYW5kIG5lZWQgdG8gZ29pbmcgYmFja3dhcmQgLSBzZWxlY3QgY3VycmVudCBzbGlkZSwgYXMgYSBuZXh0XG4gICAgICAgIG5leHRTbGlkZUluZGV4ID1cbiAgICAgICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPiAwXG4gICAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSAtIDFcbiAgICAgICAgICAgIDogIWZvcmNlICYmIHRoaXMubm9XcmFwXG4gICAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZVxuICAgICAgICAgICAgOiB0aGlzLl9zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZGlyZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTbGlkZUluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzbGlkZSwgd2hpY2ggc3BlY2lmaWVkIHRocm91Z2ggaW5kZXgsIGFzIGFjdGl2ZVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICovXG4gIHByaXZhdGUgX3NlbGVjdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGlzTmFOKGluZGV4KSkge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcbiAgICBpZiAoY3VycmVudFNsaWRlKSB7XG4gICAgICBjdXJyZW50U2xpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG5leHRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQoaW5kZXgpO1xuICAgIGlmIChuZXh0U2xpZGUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGluZGV4O1xuICAgICAgbmV4dFNsaWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcHJpdmF0ZSByZXN0YXJ0VGltZXIoKSB7XG4gICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSArdGhpcy5pbnRlcnZhbDtcbiAgICBpZiAoIWlzTmFOKGludGVydmFsKSAmJiBpbnRlcnZhbCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5JbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nICYmXG4gICAgICAgICAgICAgICFpc05hTih0aGlzLmludGVydmFsKSAmJlxuICAgICAgICAgICAgICBuSW50ZXJ2YWwgPiAwICYmXG4gICAgICAgICAgICAgIHRoaXMuc2xpZGVzLmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAqL1xuICBwcml2YXRlIHJlc2V0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VycmVudEludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY3VycmVudEludGVydmFsKTtcbiAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gdm9pZCAwO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWhpZGRlbl0nOiAnIWFjdGl2ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIElzIGN1cnJlbnQgc2xpZGUgYWN0aXZlICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBXcmFwcyBlbGVtZW50IGJ5IGFwcHJvcHJpYXRlIENTUyBjbGFzc2VzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbScpXG4gIGFkZENsYXNzID0gdHJ1ZTtcblxuICAvKiogTGluayB0byBQYXJlbnQoY29udGFpbmVyLWNvbGxlY3Rpb24pIGNvbXBvbmVudCAqL1xuICBwcm90ZWN0ZWQgY2Fyb3VzZWw6IENhcm91c2VsQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudCkge1xuICAgIHRoaXMuY2Fyb3VzZWwgPSBjYXJvdXNlbDtcbiAgfVxuXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIGFkZGluZyBhIG5ldyBzbGlkZSBpbnN0YW5jZSAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsLmFkZFNsaWRlKHRoaXMpO1xuICB9XG5cbiAgLyoqIEZpcmVzIGNoYW5nZXMgaW4gY29udGFpbmVyIGNvbGxlY3Rpb24gYWZ0ZXIgcmVtb3Zpbmcgb2YgdGhpcyBzbGlkZSBpbnN0YW5jZSAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsLnJlbW92ZVNsaWRlKHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGUuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsQ29uZmlnIH0gZnJvbSAnLi9jYXJvdXNlbC5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2xpZGVDb21wb25lbnQsIENhcm91c2VsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NsaWRlQ29tcG9uZW50LCBDYXJvdXNlbENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0Nhcm91c2VsQ29uZmlnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBDYXJvdXNlbE1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7d0JBS2EsSUFBSTs7Ozt1QkFHTCxLQUFLOzs7O3NCQUdOLEtBQUs7Ozs7OEJBR0csSUFBSTs7O2dCQVp0QixVQUFVOzt5QkFGWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM2RkUsMkJBQVksTUFBc0IsRUFBVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7OztpQ0E1Q2hCLElBQUksWUFBWSxDQUFTLEtBQUssQ0FBQzt1QkFvQ3pCLElBQUksVUFBVSxFQUFrQjt5QkFFMUQsS0FBSztRQU96QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3QjswQkExQ0csMENBQVc7Ozs7UUFNZjtZ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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js ***!
  \*****************************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isExpanded;
        },
        set: /**
         * A flag indicating visibility of content (shown or hidden)
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    CollapseDirective.prototype.toggle = /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = /**
     * allows to manually hide content
     * @return {?}
     */
    function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = /**
     * allows to manually show collapsed content
     * @return {?}
     */
    function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    host: {
                        '[class.collapse]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    CollapseDirective.propDecorators = {
        "collapsed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "expanded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "display": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] },],
        "isExpanded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.in',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] },],
        "isCollapsed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-hidden',] },],
        "isCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.collapse',] },],
        "isCollapsing": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.collapsing',] },],
        "collapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CollapseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [CollapseDirective],
                    exports: [CollapseDirective]
                },] }
    ];
    return CollapseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jb2xsYXBzZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jb2xsYXBzZS9jb2xsYXBzZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY29sbGFwc2UvY29sbGFwc2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IGFkZCBhbmltYXRpb25zIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvOTk0NyBzb2x2ZWRcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJyxcbiAgZXhwb3J0QXM6ICdicy1jb2xsYXBzZScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmNvbGxhcHNlXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIHtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGNvbGxhcHNlcyAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGJlY29tZXMgdmlzaWJsZSAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXk6IHN0cmluZztcbiAgLy8gc2hvd25cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbicpXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcbiAgaXNFeHBhbmRlZCA9IHRydWU7XG4gIC8vIGhpZGRlblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKSBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAvLyBzdGFsZSBzdGF0ZVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNlJykgaXNDb2xsYXBzZSA9IHRydWU7XG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNpbmcnKSBpc0NvbGxhcHNpbmcgPSBmYWxzZTtcblxuICAvKiogQSBmbGFnIGluZGljYXRpbmcgdmlzaWJpbGl0eSBvZiBjb250ZW50IChzaG93biBvciBoaWRkZW4pICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xsYXBzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICBnZXQgY29sbGFwc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHBhbmRlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eSAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgaGlkZSBjb250ZW50ICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbGxhcHNlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgc2hvdyBjb2xsYXBzZWQgY29udGVudCAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuaXNDb2xsYXBzZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAvLyB0aGlzLmhlaWdodCA9ICdhdXRvJztcbiAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ292ZXJmbG93JyxcbiAgICAgICd2aXNpYmxlJ1xuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgdGhpcy5leHBhbmRlZC5lbWl0KHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xsYXBzZURpcmVjdGl2ZSB9IGZyb20gJy4vY29sbGFwc2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29sbGFwc2VEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbQ29sbGFwc2VEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IENvbGxhcHNlTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtJQWlERSwyQkFBb0IsR0FBZSxFQUFVLFNBQW9CO1FBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXOzs7O3lCQTdCeEIsSUFBSSxZQUFZLEVBQUU7Ozs7d0JBR25CLElBQUksWUFBWSxFQUFFOzswQkFPN0MsSUFBSTs7MkJBRThCLEtBQUs7OzBCQUVSLElBQUk7OzRCQUVBLEtBQUs7S0FhZ0I7MEJBVGpFLHVDQUFROzs7O1FBS1o7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7OztrQkFQWSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7OztJQVVoQixrQ0FBTTs7OztJQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtLQUNGOzs7Ozs7SUFHRCxnQ0FBSTs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7Ozs7OztJQUdELGdDQUFJOzs7O0lBQUo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixVQUFVLEVBQ1YsU0FBUyxDQUNWLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7O2dCQXBGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7aUJBQ0Y7Ozs7Z0JBZEMsVUFBVTtnQkFLVixTQUFTOzs7OEJBYVIsTUFBTTs2QkFHTixNQUFNOzRCQUVOLFdBQVcsU0FBQyxlQUFlOytCQUUzQixXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsWUFBWSxjQUN4QixXQUFXLFNBQUMsb0JBQW9CO2dDQUdoQyxXQUFXLFNBQUMsa0JBQWtCOytCQUU5QixXQUFXLFNBQUMsZ0JBQWdCO2lDQUU1QixXQUFXLFNBQUMsa0JBQWtCOzZCQUc5QixLQUFLOzs0QkF4Q1I7Ozs7Ozs7QUNBQTs7Ozs7O0lBU1Msc0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ3BEOztnQkFQRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7eUJBUEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js ***!
  \*****************************************************************************/
/*! exports provided: BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, BsDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return BsDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
        /**
         * default dropdown auto closing behavior
         */
        this.insideClick = false;
    }
    BsDropdownConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsDropdownConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var /** @type {?} */ dropdown = _this._element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    BsDropdownContainerComponent.prototype._contains = /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return this._element.nativeElement.contains(el);
    };
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return BsDropdownContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        this._state.insideClick = this._config.insideClick;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.autoClose;
        },
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.insideClick;
        },
        set: /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.insideClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) { return value; }))
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                })
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var /** @type {?} */ _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            var /** @type {?} */ _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        })
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    BsDropdownDirective.prototype._contains = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this._elementRef.nativeElement.contains(event.target) ||
            (this._dropdown.instance && this._dropdown.instance._contains(event.target));
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            // clean up subscriptions and destroy dropdown
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._dropdown.dispose();
        var e_1, _c;
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.addBs4Polyfills = /**
     * @return {?}
     */
    function () {
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.addShowClass = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.removeShowClass = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.checkRightAlignment = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            var /** @type {?} */ isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.addDropupStyles = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
        }
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.removeDropupStyles = /**
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
        }
    };
    BsDropdownDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [BsDropdownState],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"], },
        { type: BsDropdownConfig, },
        { type: BsDropdownState, },
    ]; };
    BsDropdownDirective.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dropup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "insideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpenChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    // tslint:disable:no-any
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] }
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return BsDropdownMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element, dropdown) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.dropdown = dropdown;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target) &&
            !(this._state.insideClick && this.dropdown._contains(event))) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = /**
     * @return {?}
     */
    function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    BsDropdownToggleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: BsDropdownDirective, },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.disabled',] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', [],] },],
        "onDocumentClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownModule = /** @class */ (function () {
    function BsDropdownModule() {
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?=} config
     * @return {?}
     */
    BsDropdownModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"],
                ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"],
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    };
    BsDropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownContainerComponent,
                        BsDropdownDirective
                    ],
                    exports: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownDirective
                    ],
                    entryComponents: [BsDropdownContainerComponent]
                },] }
    ];
    return BsDropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kcm9wZG93bi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24uc3RhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogRGVmYXVsdCBkcm9wZG93biBjb25maWd1cmF0aW9uICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkNvbmZpZyB7XG4gIC8qKiBkZWZhdWx0IGRyb3Bkb3duIGF1dG8gY2xvc2luZyBiZWhhdmlvciAqL1xuICBhdXRvQ2xvc2UgPSB0cnVlO1xuICAvKiogZGVmYXVsdCBkcm9wZG93biBhdXRvIGNsb3NpbmcgYmVoYXZpb3IgKi9cbiAgaW5zaWRlQ2xpY2sgPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNDb21wb25lbnRSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93blN0YXRlIHtcbiAgZGlyZWN0aW9uOiAnZG93bicgfCAndXAnID0gJ2Rvd24nO1xuICBhdXRvQ2xvc2U6IGJvb2xlYW47XG4gIGluc2lkZUNsaWNrOiBib29sZWFuO1xuICBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGlzRGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHRvZ2dsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyBwb3BvdmVyLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGRyb3Bkb3duTWVudTogUHJvbWlzZTxCc0NvbXBvbmVudFJlZjxhbnk+PjtcbiAgcmVzb2x2ZURyb3Bkb3duTWVudTogKGNvbXBvbmVudFJlZjogQnNDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRyb3Bkb3duTWVudSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlRHJvcGRvd25NZW51ID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kcm9wZG93bi1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIHN0eWxlOiAnZGlzcGxheTpibG9jaztwb3NpdGlvbjogYWJzb2x1dGU7J1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmRyb3B1cF09XCJkaXJlY3Rpb24gPT09ICd1cCdcIlxuICAgICAgICAgW2NsYXNzLmRyb3Bkb3duXT1cImRpcmVjdGlvbiA9PT0gJ2Rvd24nXCJcbiAgICAgICAgIFtjbGFzcy5zaG93XT1cImlzT3BlblwiXG4gICAgICAgICBbY2xhc3Mub3Blbl09XCJpc09wZW5cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIGdldCBkaXJlY3Rpb24oKTogJ2Rvd24nIHwgJ3VwJyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmRpcmVjdGlvbjtcbiAgfVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IF9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51Jyk7XG4gICAgICBpZiAoZHJvcGRvd24gJiYgIWlzQnMzKCkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZHJvcGRvd24sICdzaG93Jyk7XG4gICAgICAgIGlmIChkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnKSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duLCAnbGVmdCcsICdhdXRvJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICdyaWdodCcsICcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICd0b3AnLCAnYXV0bycpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgZHJvcGRvd24sXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgICd0cmFuc2xhdGVZKC0xMDElKSdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jb250YWlucyhlbDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZWwpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnRcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgQnNDb21wb25lbnRSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29uZmlnIH0gZnJvbSAnLi9icy1kcm9wZG93bi5jb25maWcnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93bl0sW2Ryb3Bkb3duXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24nLFxuICBwcm92aWRlcnM6IFtCc0Ryb3Bkb3duU3RhdGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kcm9wdXBdJzogJ2Ryb3B1cCcsXG4gICAgJ1tjbGFzcy5vcGVuXSc6ICdpc09wZW4nLFxuICAgICdbY2xhc3Muc2hvd10nOiAnaXNPcGVuICYmIGlzQnM0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZCB1cHdhcmRzXG4gICAqL1xuICBASW5wdXQoKSBkcm9wdXA6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGRyb3Bkb3duIHdpbGwgYmUgY2xvc2VkIG9uIGl0ZW0gb3IgZG9jdW1lbnQgY2xpY2ssXG4gICAqIGFuZCBhZnRlciBwcmVzc2luZyBFU0NcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhdXRvQ2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhdXRvQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmF1dG9DbG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkbid0IGNsb3NlIG9uIGluc2lkZSBjbGljayB3aGVuIGF1dG9DbG9zZSBpcyBzZXQgdG8gdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGluc2lkZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2sgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBpbnNpZGVDbGljaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2s7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgZHJvcGRvd24gdG9nZ2xlIGFuZCBoaWRlcyBkcm9wZG93biBtZW51IGlmIG9wZW5lZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNJbmxpbmVPcGVuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bi5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGlzT3BlbiBjaGFuZ2VcbiAgICovXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxuICAgKi9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBoaWRkZW5cbiAgICovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBwcml2YXRlIF9kcm9wZG93bjogQ29tcG9uZW50TG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgZ2V0IF9zaG93SW5saW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5jb250YWluZXI7XG4gIH1cblxuICAvLyB0b2RvOiBtb3ZlIHRvIGNvbXBvbmVudCBsb2FkZXJcbiAgcHJpdmF0ZSBfaXNJbmxpbmVPcGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaW5saW5lZE1lbnU6IEVtYmVkZGVkVmlld1JlZjxCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZT47XG4gIHByaXZhdGUgX2lzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2lzSW5pdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb25maWc6IEJzRHJvcGRvd25Db25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUpIHtcbiAgICAvLyBzZXQgaW5pdGlhbCBkcm9wZG93biBzdGF0ZSBmcm9tIGNvbmZpZ1xuICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHRoaXMuX2NvbmZpZy5hdXRvQ2xvc2U7XG4gICAgdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2sgPSB0aGlzLl9jb25maWcuaW5zaWRlQ2xpY2s7XG5cbiAgICAvLyBjcmVhdGUgZHJvcGRvd24gY29tcG9uZW50IGxvYWRlclxuICAgIHRoaXMuX2Ryb3Bkb3duID0gdGhpcy5fY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0aGlzLl9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRHJvcGRvd25TdGF0ZSwgdXNlVmFsdWU6IHRoaXMuX3N0YXRlfSk7XG5cbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kcm9wZG93bi5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kcm9wZG93bi5vbkhpZGRlbjtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZTtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gZml4OiBzZWVtcyB0aGVyZSBhcmUgYW4gaXNzdWUgd2l0aCBgcm91dGVyTGlua0FjdGl2ZWBcbiAgICAvLyB3aGljaCByZXN1bHQgaW4gZHVwbGljYXRlZCBjYWxsIG5nT25Jbml0IHdpdGhvdXQgY2FsbCB0byBuZ09uRGVzdHJveVxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcbiAgICBpZiAodGhpcy5faXNJbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNJbml0ZWQgPSB0cnVlO1xuXG4gICAgLy8gYXR0YWNoIERPTSBsaXN0ZW5lcnNcbiAgICB0aGlzLl9kcm9wZG93bi5saXN0ZW4oe1xuICAgICAgLy8gYmVjYXVzZSBvZiBkcm9wZG93biBpbmxpbmUgbW9kZVxuICAgICAgb3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IG9uIHRvZ2dsZSBlbGVtZW50IGNsaWNrXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gdGhpcy50b2dnbGUodmFsdWUpKVxuICAgICk7XG5cbiAgICAvLyBoaWRlIGRyb3Bkb3duIGlmIHNldCBkaXNhYmxlZCB3aGlsZSBvcGVuZWRcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigodmFsdWU6IGJvb2xlYW4pID0+IHZhbHVlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB0aGlzLmhpZGUoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcbiAgICAgIGlmICghdGhpcy5faW5saW5lZE1lbnUpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51LnRoZW4oXG4gICAgICAgICAgKGRyb3Bkb3duTWVudTogQnNDb21wb25lbnRSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9kcm9wZG93bi5hdHRhY2hJbmxpbmUoXG4gICAgICAgICAgICAgIGRyb3Bkb3duTWVudS52aWV3Q29udGFpbmVyLFxuICAgICAgICAgICAgICBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9pbmxpbmVkTWVudSA9IHRoaXMuX2Ryb3Bkb3duLl9pbmxpbmVWaWV3UmVmO1xuICAgICAgICAgICAgdGhpcy5hZGRCczRQb2x5ZmlsbHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnNcbiAgICAgICAgICAuY2F0Y2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkQnM0UG9seWZpbGxzKCk7XG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5vblNob3duLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZS5kcm9wZG93bk1lbnUudGhlbihkcm9wZG93bk1lbnUgPT4ge1xuICAgICAgLy8gY2hlY2sgZGlyZWN0aW9uIGluIHdoaWNoIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWRcbiAgICAgIGNvbnN0IF9kcm9wdXAgPVxuICAgICAgICB0aGlzLmRyb3B1cCB8fFxuICAgICAgICAodHlwZW9mIHRoaXMuZHJvcHVwICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmRyb3B1cCk7XG4gICAgICB0aGlzLl9zdGF0ZS5kaXJlY3Rpb24gPSBfZHJvcHVwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgIGNvbnN0IF9wbGFjZW1lbnQgPVxuICAgICAgICB0aGlzLnBsYWNlbWVudCB8fCAoX2Ryb3B1cCA/ICd0b3AgbGVmdCcgOiAnYm90dG9tIGxlZnQnKTtcblxuICAgICAgLy8gc2hvdyBkcm9wZG93blxuICAgICAgdGhpcy5fZHJvcGRvd25cbiAgICAgICAgLmF0dGFjaChCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogX3BsYWNlbWVudH0pXG4gICAgICAgIC5zaG93KHtcbiAgICAgICAgICBjb250ZW50OiBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWYsXG4gICAgICAgICAgcGxhY2VtZW50OiBfcGxhY2VtZW50XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9KVxuICAgIC8vIHN3YWxsb3cgZXJyb3JcbiAgICAgIC5jYXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICB0aGlzLnJlbW92ZVNob3dDbGFzcygpO1xuICAgICAgdGhpcy5yZW1vdmVEcm9wdXBTdHlsZXMoKTtcbiAgICAgIHRoaXMuX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuIFdpdGggcGFyYW1ldGVyIDxjb2RlPnRydWU8L2NvZGU+IGFsbG93cyB0b2dnbGluZywgd2l0aCBwYXJhbWV0ZXIgPGNvZGU+ZmFsc2U8L2NvZGU+XG4gICAqIG9ubHkgaGlkZXMgb3BlbmVkIGRyb3Bkb3duLiBQYXJhbWV0ZXIgdXNhZ2Ugd2lsbCBiZSByZW1vdmVkIGluIG5neC1ib290c3RyYXAgdjNcbiAgICovXG4gIHRvZ2dsZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY29udGFpbnMoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fFxuICAgICAgKHRoaXMuX2Ryb3Bkb3duLmluc3RhbmNlICYmIHRoaXMuX2Ryb3Bkb3duLmluc3RhbmNlLl9jb250YWlucyhldmVudC50YXJnZXQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIGRlc3Ryb3kgZHJvcGRvd25cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZHJvcGRvd24uZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRCczRQb2x5ZmlsbHMoKTogdm9pZCB7XG4gICAgaWYgKCFpc0JzMygpKSB7XG4gICAgICB0aGlzLmFkZFNob3dDbGFzcygpO1xuICAgICAgdGhpcy5jaGVja1JpZ2h0QWxpZ25tZW50KCk7XG4gICAgICB0aGlzLmFkZERyb3B1cFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU2hvd0NsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVNob3dDbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1JpZ2h0QWxpZ25tZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIGNvbnN0IGlzUmlnaHRBbGlnbmVkID0gdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICBpc1JpZ2h0QWxpZ25lZCA/ICdhdXRvJyA6ICcwJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgIGlzUmlnaHRBbGlnbmVkID8gJzAnIDogJ2F1dG8nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRHJvcHVwU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIC8vIGEgbGl0dGxlIGhhY2sgdG8gbm90IGJyZWFrIHN1cHBvcnQgb2YgYm9vdHN0cmFwIDQgYmV0YVxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ2F1dG8nIDogJzEwMCUnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ3RyYW5zbGF0ZVkoLTEwMSUpJyA6ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICdib3R0b20nLFxuICAgICAgICAnYXV0bydcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEcm9wdXBTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lubGluZWRNZW51ICYmIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLCAndG9wJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICd0cmFuc2Zvcm0nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ2JvdHRvbScpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0Ryb3Bkb3duTWVudV0sW2Ryb3Bkb3duTWVudV0nLFxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duLW1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIHtcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLFxuICAgIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PlxuICApIHtcbiAgICBfc3RhdGUucmVzb2x2ZURyb3Bkb3duTWVudSh7XG4gICAgICB0ZW1wbGF0ZVJlZjogX3RlbXBsYXRlUmVmLFxuICAgICAgdmlld0NvbnRhaW5lcjogX3ZpZXdDb250YWluZXJcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93blRvZ2dsZV0sW2Ryb3Bkb3duVG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24tdG9nZ2xlJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWhhc3BvcHVwXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBpc0Rpc2FibGVkOiBib29sZWFuID0gbnVsbDtcblxuICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgaXNPcGVuOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcm9wZG93bjogQnNEcm9wZG93bkRpcmVjdGl2ZSkge1xuICAgIC8vIHN5bmMgaXMgb3BlbiB2YWx1ZSB3aXRoIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZShcbiAgICAgICAgKHZhbHVlOiBib29sZWFuKSA9PiAodGhpcy5pc09wZW4gPSB2YWx1ZSlcbiAgICAgIClcbiAgICApO1xuICAgIC8vIHBvcHVsYXRlIGRpc2FibGVkIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbikgPT4gKHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlIHx8IG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgW10pXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgJiZcbiAgICAgIGV2ZW50LmJ1dHRvbiAhPT0gMiAmJlxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAhKHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrICYmIHRoaXMuZHJvcGRvd24uX2NvbnRhaW5zKGV2ZW50KSlcbiAgICApIHtcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVzYycpXG4gIG9uRXNjKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UpIHtcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRyb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLXRvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vYnMtZHJvcGRvd24uY29uZmlnJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQsXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gICAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBCc0Ryb3Bkb3duRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0JzRHJvcGRvd25Db250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Nb2R1bGUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQnNEcm9wZG93bk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICBQb3NpdGlvbmluZ1NlcnZpY2UsXG4gICAgICAgIEJzRHJvcGRvd25TdGF0ZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEJzRHJvcGRvd25Db25maWcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyA/IGNvbmZpZyA6IHsgYXV0b0Nsb3NlOiB0cnVlLCBpbnNpZGVDbGljazogZmFsc2UgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O3lCQU1jLElBQUk7Ozs7MkJBRUYsS0FBSzs7O2dCQUxwQixVQUFVOzsyQkFIWDs7Ozs7OztBQ0FBO0lBbUJFO1FBQUEsaUJBSUM7eUJBbEIwQixNQUFNOzRCQUdsQixJQUFJLFlBQVksRUFB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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js ***!
  \**********************************************************/
/*! exports provided: listLocales, setTheme, AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent, AlertComponent, AlertConfig, AlertModule, ButtonCheckboxDirective, ButtonRadioDirective, ButtonsModule, CarouselComponent, CarouselConfig, CarouselModule, SlideComponent, CollapseDirective, CollapseModule, DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, BsDatepickerModule, BsDatepickerConfig, BsDaterangepickerConfig, BsLocaleService, BsDaterangepickerDirective, BsDatepickerDirective, ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService, BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, RatingComponent, RatingModule, DraggableItemService, SortableComponent, SortableModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, TimepickerComponent, TimepickerConfig, TimepickerModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, OnChange, document, window, parseTriggers, LinkedList, isBs3, Trigger, warnOnce, Utils, listenToTriggersV2, registerOutsideClick, ComponentLoader, ComponentLoaderFactory, ContentRef, BsComponentRef, Positioning, PositioningService, positionElements, MiniState, MiniStore, defineLocale, getSetGlobalLocale, parseDate, formatDate, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, getLocale, updateLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/ngx-bootstrap/esm5/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["listLocales"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["setTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonCheckboxDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonRadioDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SlideComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CollapseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CollapseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DayPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MonthPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["YearPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsLocaleService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalBackdropOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalBackdropComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownMenuDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PagerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DraggableItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SortableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SortableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgTranscludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabHeadingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["OnChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["parseTriggers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isBs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["warnOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["listenToTriggersV2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["registerOutsideClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ContentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsComponentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Positioning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PositioningService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["positionElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MiniState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MiniStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["parseDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getFullYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isDateValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["shiftDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["setFullDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["endOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["startOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJuZ3gtYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxpM0VBQWMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY19hcGknO1xuIl19

/***/ }),

/***/ "./node_modules/ngx-bootstrap/esm5/public_api.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/esm5/public_api.js ***!
  \*******************************************************/
/*! exports provided: listLocales, setTheme, AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent, AlertComponent, AlertConfig, AlertModule, ButtonCheckboxDirective, ButtonRadioDirective, ButtonsModule, CarouselComponent, CarouselConfig, CarouselModule, SlideComponent, CollapseDirective, CollapseModule, DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, BsDatepickerModule, BsDatepickerConfig, BsDaterangepickerConfig, BsLocaleService, BsDaterangepickerDirective, BsDatepickerDirective, ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService, BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, RatingComponent, RatingModule, DraggableItemService, SortableComponent, SortableModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, TimepickerComponent, TimepickerConfig, TimepickerModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, OnChange, document, window, parseTriggers, LinkedList, isBs3, Trigger, warnOnce, Utils, listenToTriggersV2, registerOutsideClick, ComponentLoader, ComponentLoaderFactory, ContentRef, BsComponentRef, Positioning, PositioningService, positionElements, MiniState, MiniStore, defineLocale, getSetGlobalLocale, parseDate, formatDate, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, getLocale, updateLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["listLocales"]; });

/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["setTheme"]; });

/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionPanelComponent"]; });

/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"]; });

/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonCheckboxDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonRadioDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]; });

/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"]; });

/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"]; });

/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DayPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["MonthPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["YearPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerDirective"]; });

/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBackdropOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBackdropComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]; });

/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownMenuDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownToggleDirective"]; });

/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PagerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"]; });

/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["BarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"]; });

/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/rating/fesm5/ngx-bootstrap-rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingModule"]; });

/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "./node_modules/ngx-bootstrap/sortable/fesm5/ngx-bootstrap-sortable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["DraggableItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["SortableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["SortableModule"]; });

/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["NgTranscludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabHeadingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"]; });

/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerModule"]; });

/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"]; });

/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadModule"]; });

/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"]; });

/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ComponentLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ComponentLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ContentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["BsComponentRef"]; });

/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["Positioning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["PositioningService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["positionElements"]; });

/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__["MiniState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__["MiniStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["parseDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getFullYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isDateValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["shiftDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["setFullDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["endOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["startOf"]; });

/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["zhCnLocale"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


























//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFvQkEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsYUFBYSxFQUNkLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGNBQWMsRUFDZixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRSxPQUFPLEVBQ0wsYUFBYSxFQUNiLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLGVBQWUsRUFDZiwwQkFBMEIsRUFDMUIscUJBQXFCLEVBQ3RCLE1BQU0sMEJBQTBCLENBQUM7QUFFbEMsT0FBTyxFQUNMLGNBQWMsRUFDZCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZiw0QkFBNEIsRUFDNUIsbUJBQW1CLEVBQ25CLHVCQUF1QixFQUN2Qix5QkFBeUIsRUFDMUIsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBRWpCLE1BQU0sMEJBQTBCLENBQUM7QUFFbEMsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNsQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckUsT0FBTyxFQUVMLG9CQUFvQixFQUVwQixpQkFBaUIsRUFDakIsY0FBYyxFQUNmLE1BQU0sd0JBQXdCLENBQUM7QUFFaEMsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLGVBQWUsRUFDZixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2pCLE1BQU0sMEJBQTBCLENBQUM7QUFFbEMsT0FBTyxFQUNMLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDZCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsMkJBQTJCLEVBQzNCLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsZUFBZSxFQUNoQixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFDTCxhQUFhLEVBQ2IseUJBQXlCLEVBQ3pCLGdCQUFnQixFQUNoQixhQUFhLEVBQ2QsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixNQUFNLEVBQ04sYUFBYSxFQUNiLFVBQVUsRUFDVixLQUFLLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixLQUFLLEVBQ0wsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNyQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFDTCxlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixjQUFjLEVBQ2YsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxPQUFPLEVBQ0wsV0FBVyxFQUVYLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDakIsTUFBTSwyQkFBMkIsQ0FBQztBQUVuQyxPQUFPLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFDTCxZQUFZLEVBQ1osa0JBQWtCLEVBRWxCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixTQUFTLEVBQ1QsWUFBWSxFQUNaLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFdBQVcsRUFDWCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsT0FBTyxFQUVSLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IseVhBQWMsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hY2NvcmRpb24nO1xuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FsZXJ0JztcbmltcG9ydCB7IEJ1dHRvbnNNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2J1dHRvbnMnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nhcm91c2VsJztcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb2xsYXBzZSc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyJztcbmltcG9ydCB7IFJhdGluZ01vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcmF0aW5nJztcbmltcG9ydCB7IFNvcnRhYmxlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9zb3J0YWJsZSc7XG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90YWJzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXInO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdG9vbHRpcCc7XG5pbXBvcnQgeyBUeXBlYWhlYWRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZCc7XG5cbmV4cG9ydCB7IGxpc3RMb2NhbGVzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmV4cG9ydCB7IHNldFRoZW1lIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbmV4cG9ydCB7XG4gIEFjY29yZGlvbkNvbXBvbmVudCxcbiAgQWNjb3JkaW9uQ29uZmlnLFxuICBBY2NvcmRpb25Nb2R1bGUsXG4gIEFjY29yZGlvblBhbmVsQ29tcG9uZW50XG59IGZyb20gJ25neC1ib290c3RyYXAvYWNjb3JkaW9uJztcblxuZXhwb3J0IHsgQWxlcnRDb21wb25lbnQsIEFsZXJ0Q29uZmlnLCBBbGVydE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWxlcnQnO1xuXG5leHBvcnQge1xuICBCdXR0b25DaGVja2JveERpcmVjdGl2ZSxcbiAgQnV0dG9uUmFkaW9EaXJlY3RpdmUsXG4gIEJ1dHRvbnNNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9idXR0b25zJztcblxuZXhwb3J0IHtcbiAgQ2Fyb3VzZWxDb21wb25lbnQsXG4gIENhcm91c2VsQ29uZmlnLFxuICBDYXJvdXNlbE1vZHVsZSxcbiAgU2xpZGVDb21wb25lbnRcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jYXJvdXNlbCc7XG5cbmV4cG9ydCB7IENvbGxhcHNlRGlyZWN0aXZlLCBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xuXG5leHBvcnQge1xuICBEYXRlRm9ybWF0dGVyLFxuICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICBEYXRlcGlja2VyQ29uZmlnLFxuICBEYXRlcGlja2VyTW9kdWxlLFxuICBEYXlQaWNrZXJDb21wb25lbnQsXG4gIE1vbnRoUGlja2VyQ29tcG9uZW50LFxuICBZZWFyUGlja2VyQ29tcG9uZW50LFxuICBCc0RhdGVwaWNrZXJNb2R1bGUsXG4gIEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcsXG4gIEJzTG9jYWxlU2VydmljZSxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXG4gIEJzRGF0ZXBpY2tlckRpcmVjdGl2ZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuXG5leHBvcnQge1xuICBNb2RhbERpcmVjdGl2ZSxcbiAgTW9kYWxPcHRpb25zLFxuICBNb2RhbEJhY2tkcm9wT3B0aW9ucyxcbiAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCxcbiAgTW9kYWxNb2R1bGUsXG4gIEJzTW9kYWxSZWYsXG4gIEJzTW9kYWxTZXJ2aWNlXG59IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5leHBvcnQge1xuICBCc0Ryb3Bkb3duTW9kdWxlLFxuICBCc0Ryb3Bkb3duQ29uZmlnLFxuICBCc0Ryb3Bkb3duU3RhdGUsXG4gIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQsXG4gIEJzRHJvcGRvd25EaXJlY3RpdmUsXG4gIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG59IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuXG5leHBvcnQge1xuICBQYWdlckNvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbmZpZyxcbiAgUGFnaW5hdGlvbk1vZHVsZSxcbiAgUGFnZUNoYW5nZWRFdmVudFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24nO1xuXG5leHBvcnQge1xuICBCYXJDb21wb25lbnQsXG4gIFByb2dyZXNzYmFyQ29tcG9uZW50LFxuICBQcm9ncmVzc2JhckNvbmZpZyxcbiAgUHJvZ3Jlc3NiYXJNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhcic7XG5cbmV4cG9ydCB7IFJhdGluZ0NvbXBvbmVudCwgUmF0aW5nTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9yYXRpbmcnO1xuXG5leHBvcnQge1xuICBEcmFnZ2FibGVJdGVtLFxuICBEcmFnZ2FibGVJdGVtU2VydmljZSxcbiAgU29ydGFibGVJdGVtLFxuICBTb3J0YWJsZUNvbXBvbmVudCxcbiAgU29ydGFibGVNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9zb3J0YWJsZSc7XG5cbmV4cG9ydCB7XG4gIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSxcbiAgVGFiRGlyZWN0aXZlLFxuICBUYWJIZWFkaW5nRGlyZWN0aXZlLFxuICBUYWJzZXRDb21wb25lbnQsXG4gIFRhYnNldENvbmZpZyxcbiAgVGFic01vZHVsZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL3RhYnMnO1xuXG5leHBvcnQge1xuICBUaW1lcGlja2VyQ29tcG9uZW50LFxuICBUaW1lcGlja2VyQ29uZmlnLFxuICBUaW1lcGlja2VyTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XG5cbmV4cG9ydCB7XG4gIFRvb2x0aXBDb25maWcsXG4gIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQsXG4gIFRvb2x0aXBEaXJlY3RpdmUsXG4gIFRvb2x0aXBNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC90b29sdGlwJztcblxuZXhwb3J0IHtcbiAgVHlwZWFoZWFkT3B0aW9ucyxcbiAgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50LFxuICBUeXBlYWhlYWREaXJlY3RpdmUsXG4gIFR5cGVhaGVhZE1hdGNoLFxuICBUeXBlYWhlYWRNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQnO1xuXG5leHBvcnQge1xuICBQb3BvdmVyQ29uZmlnLFxuICBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50LFxuICBQb3BvdmVyRGlyZWN0aXZlLFxuICBQb3BvdmVyTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvcG9wb3Zlcic7XG5cbmV4cG9ydCB7XG4gIE9uQ2hhbmdlLFxuICBkb2N1bWVudCxcbiAgd2luZG93LFxuICBwYXJzZVRyaWdnZXJzLFxuICBMaW5rZWRMaXN0LFxuICBpc0JzMyxcbiAgVHJpZ2dlcixcbiAgd2Fybk9uY2UsXG4gIFV0aWxzLFxuICBsaXN0ZW5Ub1RyaWdnZXJzVjIsXG4gIHJlZ2lzdGVyT3V0c2lkZUNsaWNrXG59IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5leHBvcnQge1xuICBDb21wb25lbnRMb2FkZXIsXG4gIENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gIENvbnRlbnRSZWYsXG4gIEJzQ29tcG9uZW50UmVmXG59IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5cbmV4cG9ydCB7XG4gIFBvc2l0aW9uaW5nLFxuICBQb3NpdGlvbmluZ09wdGlvbnMsXG4gIFBvc2l0aW9uaW5nU2VydmljZSxcbiAgcG9zaXRpb25FbGVtZW50c1xufSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuZXhwb3J0IHtcbiAgQWN0aW9uLFxuICBNaW5pU3RhdGUsXG4gIE1pbmlTdG9yZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5cbmV4cG9ydCB7XG4gIGRlZmluZUxvY2FsZSxcbiAgZ2V0U2V0R2xvYmFsTG9jYWxlLFxuICBMb2NhbGVEYXRhLFxuICBwYXJzZURhdGUsXG4gIGZvcm1hdERhdGUsXG4gIGdldERheSxcbiAgaXNGaXJzdERheU9mV2VlayxcbiAgaXNTYW1lWWVhcixcbiAgaXNTYW1lRGF5LFxuICBpc1NhbWVNb250aCxcbiAgZ2V0RnVsbFllYXIsXG4gIGdldEZpcnN0RGF5T2ZNb250aCxcbiAgZ2V0TW9udGgsXG4gIGdldExvY2FsZSxcbiAgdXBkYXRlTG9jYWxlLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZSxcbiAgaXNBcnJheSxcbiAgaXNEYXRlVmFsaWQsXG4gIGlzRGF0ZSxcbiAgc2hpZnREYXRlLFxuICBzZXRGdWxsRGF0ZSxcbiAgZW5kT2YsXG4gIHN0YXJ0T2YsXG4gIFRpbWVVbml0XG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCAqIGZyb20gJ25neC1ib290c3RyYXAvbG9jYWxlJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js ***!
  \*************************************************************************/
/*! exports provided: arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]; });



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1sb2NhbGUuanMubWFwIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js ***!
  \*********************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationModule, PaginationConfig, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return PaginationConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = /** @class */ (function () {
    function PagerComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PagerComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PagerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PagerComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return (/** @type {?} */ (this))[key + "Text"] || this.config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PagerComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                var /** @type {?} */ target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PagerComponent.prototype.makePage = /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PagerComponent.prototype.getPages = /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        var /** @type {?} */ pages = [];
        // Default page limits
        var /** @type {?} */ startPage = 1;
        var /** @type {?} */ endPage = totalPages;
        var /** @type {?} */ isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var /** @type {?} */ num = startPage; num <= endPage; num++) {
            var /** @type {?} */ page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var /** @type {?} */ previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var /** @type {?} */ nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    /**
     * @return {?}
     */
    PagerComponent.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: PaginationConfig, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PagerComponent.propDecorators = {
        "align": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundaryLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "directionLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "previousText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nextText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lastText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageBtnClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "numPages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "pageChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "itemsPerPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "totalItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return PagerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PaginationComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PaginationComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return (/** @type {?} */ (this))[key + "Text"] || this.config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PaginationComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                var /** @type {?} */ target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PaginationComponent.prototype.makePage = /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PaginationComponent.prototype.getPages = /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        var /** @type {?} */ pages = [];
        // Default page limits
        var /** @type {?} */ startPage = 1;
        var /** @type {?} */ endPage = totalPages;
        var /** @type {?} */ isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var /** @type {?} */ num = startPage; num <= endPage; num++) {
            var /** @type {?} */ page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var /** @type {?} */ previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var /** @type {?} */ nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    /**
     * @return {?}
     */
    PaginationComponent.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: PaginationConfig, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationComponent.propDecorators = {
        "align": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundaryLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "directionLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "previousText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nextText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lastText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageBtnClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "numPages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "pageChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "itemsPerPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "totalItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    /**
     * @return {?}
     */
    PaginationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    };
    PaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [PagerComponent, PaginationComponent],
                    exports: [PagerComponent, PaginationComponent]
                },] }
    ];
    return PaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IHNwbGl0XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG4vKiogUHJvdmlkZXMgZGVmYXVsdCB2YWx1ZXMgZm9yIFBhZ2luYXRpb24gYW5kIHBhZ2VyIGNvbXBvbmVudHMgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgbWFpbjogQ29uZmlnTW9kZWwgPSB7XG4gICAgbWF4U2l6ZTogdm9pZCAwLFxuICAgIGl0ZW1zUGVyUGFnZTogMTAsXG4gICAgYm91bmRhcnlMaW5rczogZmFsc2UsXG4gICAgZGlyZWN0aW9uTGlua3M6IHRydWUsXG4gICAgZmlyc3RUZXh0OiAnRmlyc3QnLFxuICAgIHByZXZpb3VzVGV4dDogJ1ByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQnLFxuICAgIGxhc3RUZXh0OiAnTGFzdCcsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICByb3RhdGU6IHRydWVcbiAgfTtcbiAgcGFnZXI6IFBhZ2VyTW9kZWwgPSB7XG4gICAgaXRlbXNQZXJQYWdlOiAxNSxcbiAgICBwcmV2aW91c1RleHQ6ICfDgsKrIFByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQgw4LCuycsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICBhbGlnbjogdHJ1ZVxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFByb3ZpZGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlc01vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUEFHRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BBR0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIGNvbmZpZzogQ29uZmlnTW9kZWw7XG4gIC8qKiBpZiBgdHJ1ZWAgYWxpZ25zIGVhY2ggbGluayB0byB0aGUgc2lkZXMgb2YgcGFnZXIgKi9cbiAgQElucHV0KCkgYWxpZ246IGJvb2xlYW47XG4gIC8qKiBsaW1pdCBudW1iZXIgZm9yIHBhZ2UgbGlua3MgaW4gcGFnZXIgKi9cbiAgQElucHV0KCkgbWF4U2l6ZTogbnVtYmVyO1xuICAvKiogaWYgZmFsc2UgZmlyc3QgYW5kIGxhc3QgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBib3VuZGFyeUxpbmtzOiBib29sZWFuO1xuICAvKiogaWYgZmFsc2UgcHJldmlvdXMgYW5kIG5leHQgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbjtcbiAgLy8gbGFiZWxzXG4gIC8qKiBmaXJzdCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBmaXJzdFRleHQ6IHN0cmluZztcbiAgLyoqIHByZXZpb3VzIGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIHByZXZpb3VzVGV4dDogc3RyaW5nO1xuICAvKiogbmV4dCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBuZXh0VGV4dDogc3RyaW5nO1xuICAvKiogbGFzdCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBsYXN0VGV4dDogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSBjdXJyZW50IHBhZ2Ugd2lsbCBpbiB0aGUgbWlkZGxlIG9mIHBhZ2VzIGxpc3QgKi9cbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xuICAvLyBjc3NcbiAgLyoqIGFkZCBjbGFzcyB0byA8Y29kZT48bGlcXD48L2NvZGU+ICovXG4gIEBJbnB1dCgpIHBhZ2VCdG5DbGFzczogc3RyaW5nO1xuXG4gIC8qKiBpZiB0cnVlIHBhZ2luYXRpb24gY29tcG9uZW50IHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIGZpcmVkIHdoZW4gdG90YWwgcGFnZXMgY291bnQgY2hhbmdlcywgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gdG90YWwgcGFnZXMgY291bnQgKi9cbiAgQE91dHB1dCgpIG51bVBhZ2VzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAvKiogZmlyZWQgd2hlbiBwYWdlIHdhcyBjaGFuZ2VkLCAkZXZlbnQ6e3BhZ2UsIGl0ZW1zUGVyUGFnZX0gZXF1YWxzIHRvXG4gICAqIG9iamVjdCB3aXRoIGN1cnJlbnQgcGFnZSBpbmRleCBhbmQgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcblxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zUGVyUGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XG4gIH1cblxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1zUGVyUGFnZSA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICAvKiogdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIGFsbCBwYWdlcyAqL1xuICBASW5wdXQoKVxuICBnZXQgdG90YWxJdGVtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEl0ZW1zO1xuICB9XG5cbiAgc2V0IHRvdGFsSXRlbXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2VzO1xuICB9XG5cbiAgc2V0IHRvdGFsUGFnZXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XG4gICAgdGhpcy5udW1QYWdlcy5lbWl0KHYpO1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IF9wcmV2aW91cyA9IHRoaXMuX3BhZ2U7XG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNsYXNzTWFwOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlc01vZGVsW107XG5cbiAgcHJvdGVjdGVkIF9pdGVtc1BlclBhZ2U6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfdG90YWxQYWdlczogbnVtYmVyO1xuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucyhcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFnaW5hdGlvbkNvbmZpZy5tYWluLCBwYWdpbmF0aW9uQ29uZmlnLnBhZ2VyKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgfVxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXG4gICAgdGhpcy5tYXhTaXplID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXhTaXplIDogdGhpcy5jb25maWcubWF4U2l6ZTtcbiAgICB0aGlzLnJvdGF0ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XG4gICAgdGhpcy5ib3VuZGFyeUxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuYm91bmRhcnlMaW5rcztcbiAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuZGlyZWN0aW9uTGlua3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5kaXJlY3Rpb25MaW5rcztcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XG4gICAgICB0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5wYWdlQnRuQ2xhc3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XG5cbiAgICAvLyBiYXNlIGNsYXNzXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxuICAgICAgdHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIC8vIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgdGhpcy5jb25maWdbYCR7a2V5fVRleHRgXTtcbiAgfVxuXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UobnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGJvb2xlYW4pOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge3RleHQsIG51bWJlcjogbnVtLCBhY3RpdmV9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IFBhZ2VzTW9kZWxbXSB7XG4gICAgY29uc3QgcGFnZXM6IFBhZ2VzTW9kZWxbXSA9IFtdO1xuXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubWF4U2l6ZSA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4U2l6ZVxuICAgIGlmIChpc01heFNpemVkKSB7XG4gICAgICBpZiAodGhpcy5yb3RhdGUpIHtcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpLCAxKTtcbiAgICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFNpemUgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXG4gICAgICAgIHN0YXJ0UGFnZSA9XG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGxhc3QgcGFnZSBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xuICAgIGlmIChpc01heFNpemVkICYmICF0aGlzLnJvdGF0ZSkge1xuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShzdGFydFBhZ2UgLSAxLCAnLi4uJywgZmFsc2UpO1xuICAgICAgICBwYWdlcy51bnNoaWZ0KHByZXZpb3VzUGFnZVNldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRQYWdlIDwgdG90YWxQYWdlcykge1xuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VTZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIC8vIGJhc2UgY2xhc3NcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID1cbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlIDwgMVxuICAgICAgICA/IDFcbiAgICAgICAgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXNNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlQ2hhbmdlZEV2ZW50IHtcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdpbmF0aW9uQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBjb25maWc6IENvbmZpZ01vZGVsO1xuICAvKiogaWYgYHRydWVgIGFsaWducyBlYWNoIGxpbmsgdG8gdGhlIHNpZGVzIG9mIHBhZ2VyICovXG4gIEBJbnB1dCgpIGFsaWduOiBib29sZWFuO1xuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XG4gIC8vIGxhYmVsc1xuICAvKiogZmlyc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgZmlyc3RUZXh0OiBzdHJpbmc7XG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBwcmV2aW91c1RleHQ6IHN0cmluZztcbiAgLyoqIG5leHQgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbGFzdFRleHQ6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcbiAgLy8gY3NzXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3M6IHN0cmluZztcblxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKiBmaXJlZCB3aGVuIHRvdGFsIHBhZ2VzIGNvdW50IGNoYW5nZXMsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHRvdGFsIHBhZ2VzIGNvdW50ICovXG4gIEBPdXRwdXQoKSBudW1QYWdlczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gcGFnZSB3YXMgY2hhbmdlZCwgJGV2ZW50OntwYWdlLCBpdGVtc1BlclBhZ2V9IGVxdWFscyB0byBvYmplY3RcbiAgICogd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PigpO1xuXG4gIC8qKiBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS4gSWYgdmFsdWUgbGVzcyB0aGFuIDEgd2lsbCBkaXNwbGF5IGFsbCBpdGVtcyBvbiBvbmUgcGFnZSAqL1xuICBASW5wdXQoKVxuICBnZXQgaXRlbXNQZXJQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zUGVyUGFnZTtcbiAgfVxuXG4gIHNldCBpdGVtc1BlclBhZ2UodjogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbXNQZXJQYWdlID0gdjtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgfVxuXG4gIC8qKiB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gYWxsIHBhZ2VzICovXG4gIEBJbnB1dCgpXG4gIGdldCB0b3RhbEl0ZW1zKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSXRlbXM7XG4gIH1cblxuICBzZXQgdG90YWxJdGVtcyh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbEl0ZW1zID0gdjtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgfVxuXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUGFnZXM7XG4gIH1cblxuICBzZXQgdG90YWxQYWdlcyh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbFBhZ2VzID0gdjtcbiAgICB0aGlzLm51bVBhZ2VzLmVtaXQodik7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgX3ByZXZpb3VzID0gdGhpcy5fcGFnZTtcbiAgICB0aGlzLl9wYWdlID0gdmFsdWUgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB2YWx1ZSB8fCAxO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgaWYgKF9wcmV2aW91cyA9PT0gdGhpcy5fcGFnZSB8fCB0eXBlb2YgX3ByZXZpb3VzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgY2xhc3NNYXA6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VzTW9kZWxbXTtcblxuICBwcm90ZWN0ZWQgX2l0ZW1zUGVyUGFnZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3RvdGFsSXRlbXM6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHByb3RlY3RlZCBpbml0ZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wYWdlID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMocGFnaW5hdGlvbkNvbmZpZy5tYWluKTtcbiAgICB9XG4gIH1cblxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgfVxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXG4gICAgdGhpcy5tYXhTaXplID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXhTaXplIDogdGhpcy5jb25maWcubWF4U2l6ZTtcbiAgICB0aGlzLnJvdGF0ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XG4gICAgdGhpcy5ib3VuZGFyeUxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuYm91bmRhcnlMaW5rcztcbiAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuZGlyZWN0aW9uTGlua3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5kaXJlY3Rpb25MaW5rcztcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XG4gICAgICB0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5wYWdlQnRuQ2xhc3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XG5cbiAgICAvLyBiYXNlIGNsYXNzXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxuICAgICAgdHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIC8vIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgdGhpcy5jb25maWdbYCR7a2V5fVRleHRgXTtcbiAgfVxuXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UoXG4gICAgbnVtOiBudW1iZXIsXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGFjdGl2ZTogYm9vbGVhblxuICApOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4geyB0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogUGFnZXNNb2RlbFtdIHtcbiAgICBjb25zdCBwYWdlczogUGFnZXNNb2RlbFtdID0gW107XG5cbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPVxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5tYXhTaXplIDwgdG90YWxQYWdlcztcblxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xuICAgICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMiksIDEpO1xuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMTtcblxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4U2l6ZSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFZpc2libGUgcGFnZXMgYXJlIHBhZ2luYXRlZCB3aXRoIG1heFNpemVcbiAgICAgICAgc3RhcnRQYWdlID1cbiAgICAgICAgICAoTWF0aC5jZWlsKGN1cnJlbnRQYWdlIC8gdGhpcy5tYXhTaXplKSAtIDEpICogdGhpcy5tYXhTaXplICsgMTtcblxuICAgICAgICAvLyBBZGp1c3QgbGFzdCBwYWdlIGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGVuZFBhZ2UgPSBNYXRoLm1pbihzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxLCB0b3RhbFBhZ2VzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtLCBudW0udG9TdHJpbmcoKSwgbnVtID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cblxuICAgIC8vIEFkZCBsaW5rcyB0byBtb3ZlIGJldHdlZW4gcGFnZSBzZXRzXG4gICAgaWYgKGlzTWF4U2l6ZWQgJiYgIXRoaXMucm90YXRlKSB7XG4gICAgICBpZiAoc3RhcnRQYWdlID4gMSkge1xuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnVuc2hpZnQocHJldmlvdXNQYWdlU2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGNvbnN0IG5leHRQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShlbmRQYWdlICsgMSwgJy4uLicsIGZhbHNlKTtcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgLy8gYmFzZSBjbGFzc1xuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPVxuICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPCAxXG4gICAgICAgID8gMVxuICAgICAgICA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7IFBhZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFnZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUGFnaW5hdGlvbk1vZHVsZSwgcHJvdmlkZXJzOiBbUGFnaW5hdGlvbkNvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7O29CQU9zQjtZQUNsQixPQUFPLEVBQUUsS0FBSyxDQUFDO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsWUFBWSxFQUFFLFVBQVU7WUFDeEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtxQkFDbUI7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDWjs7O2dCQXBCRixVQUFVOzsyQkFOWDs7Ozs7OztBQ0FBLHFCQWtCYSw0QkFBNEIsR0FBYTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEdBQUEsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0lBNEdBLHdCQUFvQixVQUFzQixFQUM5QixnQkFBa0MsRUFDMUI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLG9CQUFlLEdBQWYsZUFBZTs7Ozt3QkExRVEsSUFBSSxZQUFZLEVBQVU7Ozs7OzJCQUt2QixJQUFJLFlBQVksRUFBb0I7d0JBdUR2RSxRQUFRLENBQUMsU0FBUzt5QkFDakIsUUFBUSxDQUFDLFNBQVM7c0JBUVgsS0FBSztxQkFDTixDQUFDO1FBS2pCLElBQUksQ0FBQyxVQUFVLEdBQUcs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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js ***!
  \***************************************************************************/
/*! exports provided: PopoverDirective, PopoverModule, PopoverConfig, PopoverContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return PopoverConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'popover-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        '[class.bs3]': 'isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig, },
    ]; };
    PopoverContainerComponent.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return PopoverContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (/** @type {?} */ err) {
                    return;
                }
            });
        }
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            return this._popover.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: function () { return _this.show(); }
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] }
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: PopoverConfig, },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], },
    ]; };
    PopoverDirective.propDecorators = {
        "popover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "popoverContext": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "popoverTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "containerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PopoverDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    /**
     * @return {?}
     */
    PopoverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]]
        };
    };
    PopoverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [PopoverDirective, PopoverContainerComponent],
                    exports: [PopoverDirective],
                    entryComponents: [PopoverContainerComponent]
                },] }
    ];
    return PopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3BvdmVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvcG9wb3Zlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9wb3Zlci9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9wb3Zlci9wb3BvdmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyL3BvcG92ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBQb3BvdmVyIGRpcmVjdGl2ZS5cbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemVcbiAqIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW4gb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHRoZVxuICogcG9wb3ZlcnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHBvcG92ZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCIsIFwiYXV0b1wiXG4gICAqL1xuICBwbGFjZW1lbnQgPSAndG9wJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIHRyaWdnZXJzID0gJ2NsaWNrJztcblxuICBvdXRzaWRlQ2xpY2sgPSBmYWxzZTtcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgY29udGFpbmVyOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6XG4gICAgICAnXCJwb3BvdmVyIGluIHBvcG92ZXItXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIFwiYnMtcG9wb3Zlci1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBjb250YWluZXJDbGFzcycsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchaXNCczMnLFxuICAgICdbY2xhc3MuYnMzXSc6ICdpc0JzMycsXG4gICAgcm9sZTogJ3Rvb2x0aXAnLFxuICAgIHN0eWxlOiAnZGlzcGxheTpibG9jazsnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdC5iczMucG9wb3Zlci10b3Age1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLnBvcG92ZXIudG9wPi5hcnJvdyB7XG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLnBvcG92ZXIudG9wIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIDpob3N0LnBvcG92ZXIuYm90dG9tPi5hcnJvdyB7XG4gICAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLmJzLXBvcG92ZXItbGVmdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgIH1cbiAgICA6aG9zdC5iczMuYnMtcG9wb3Zlci1yaWdodCAuYXJyb3csIDpob3N0LmJzMy5icy1wb3BvdmVyLWxlZnQgLmFycm93e1xuICAgICAgbWFyZ2luOiAuM3JlbSAwO1xuICAgIH1cbiAgICBgXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUG9wb3ZlckNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LFxuICBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQSBsaWdodHdlaWdodCwgZXh0ZW5zaWJsZSBkaXJlY3RpdmUgZm9yIGZhbmN5IHBvcG92ZXIgY3JlYXRpb24uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3BvcG92ZXJdJywgZXhwb3J0QXM6ICdicy1wb3BvdmVyJ30pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHBvcG92ZXIuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBASW5wdXQoKSBwb3BvdmVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogQ29udGV4dCB0byBiZSB1c2VkIGlmIHBvcG92ZXIgaXMgYSB0ZW1wbGF0ZS5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBJbnB1dCgpIHBvcG92ZXJDb250ZXh0OiBhbnk7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiBhIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBwb3BvdmVyVGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHBvcG92ZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYXV0byc7XG4gIC8qKlxuICAgKiBDbG9zZSBwb3BvdmVyIG9uIG91dHNpZGUgY2xpY2tcbiAgICovXG4gIEBJbnB1dCgpIG91dHNpZGVDbGljayA9IGZhbHNlO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3IgcG9wb3ZlciBjb250YWluZXJcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wb3BvdmVyLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgc2hvd25cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIHByaXZhdGUgX3BvcG92ZXI6IENvbXBvbmVudExvYWRlcjxQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfaXNJbml0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBfY29uZmlnOiBQb3BvdmVyQ29uZmlnLFxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICB0aGlzLl9wb3BvdmVyID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICBfZWxlbWVudFJlZixcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIF9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFBvcG92ZXJDb25maWcsIHVzZVZhbHVlOiBfY29uZmlnfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9wb3BvdmVyLm9uU2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX3BvcG92ZXIub25IaWRkZW47XG5cbiAgICAvLyBmaXg6IG5vIGZvY3VzIG9uIGJ1dHRvbiBvbiBNYWMgT1MgIzE3OTVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BvcG92ZXIuaXNTaG93biB8fCAhdGhpcy5wb3BvdmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcG9wb3ZlclxuICAgICAgLmF0dGFjaChQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAuc2hvdyh7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMucG9wb3ZlcixcbiAgICAgICAgY29udGV4dDogdGhpcy5wb3BvdmVyQ29udGV4dCxcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgdGl0bGU6IHRoaXMucG9wb3ZlclRpdGxlLFxuICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzc1xuICAgICAgfSk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLl9wb3BvdmVyLmhpZGUoKTtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBmaXg6IHNlZW1zIHRoZXJlIGFyZSBhbiBpc3N1ZSB3aXRoIGByb3V0ZXJMaW5rQWN0aXZlYFxuICAgIC8vIHdoaWNoIHJlc3VsdCBpbiBkdXBsaWNhdGVkIGNhbGwgbmdPbkluaXQgd2l0aG91dCBjYWxsIHRvIG5nT25EZXN0cm95XG4gICAgLy8gcmVhZCBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vdmFsb3Itc29mdHdhcmUvbmd4LWJvb3RzdHJhcC9pc3N1ZXMvMTg4NVxuICAgIGlmICh0aGlzLl9pc0luaXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pc0luaXRlZCA9IHRydWU7XG5cbiAgICB0aGlzLl9wb3BvdmVyLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcG9wb3Zlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vcG9wb3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1BvcG92ZXJEaXJlY3RpdmUsIFBvcG92ZXJDb250YWluZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUG9wb3ZlckRpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BvcG92ZXJDb250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFBvcG92ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtQb3BvdmVyQ29uZmlnLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7eUJBYWMsS0FBSzs7Ozs7d0JBS04sT0FBTzs0QkFFSCxLQUFLOzs7Z0JBWnJC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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js ***!
  \***********************************************************************************/
/*! exports provided: BarComponent, ProgressbarComponent, ProgressbarModule, ProgressbarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return ProgressbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return ProgressbarConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarConfig = /** @class */ (function () {
    function ProgressbarConfig() {
        /**
         * if `true` changing value of progress bar will be animated
         */
        this.animate = false;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return ProgressbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "animate", {
        set: /**
         * if `true` changing value of progress bar will be animated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animate = value;
            this.bars.forEach(function (b) {
                b.animate = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "striped", {
        set: /**
         * If `true`, striped classes are applied
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._striped = value;
            this.bars.forEach(function (b) {
                b.striped = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        set: /**
         * current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         * @param {?} value
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.addBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.removeBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                    styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig, },
    ]; };
    ProgressbarComponent.propDecorators = {
        "animate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "striped": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.max',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "addClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BarComponent = /** @class */ (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        get: /**
         * current value of progress bar
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.progress.addBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.progress.removeBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.recalculatePercentage = /**
     * @return {?}
     */
    function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var /** @type {?} */ totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content>\n",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                }] }
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: ProgressbarComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
    ]; };
    BarComponent.propDecorators = {
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "setBarWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.%',] },],
    };
    return BarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarModule = /** @class */ (function () {
    function ProgressbarModule() {
    }
    /**
     * @return {?}
     */
    ProgressbarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
    };
    ProgressbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [BarComponent, ProgressbarComponent],
                    exports: [BarComponent, ProgressbarComponent]
                },] }
    ];
    return ProgressbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wcm9ncmVzc2Jhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyL2Jhci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29uZmlnIHtcbiAgLyoqIGlmIGB0cnVlYCBjaGFuZ2luZyB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgd2lsbCBiZSBhbmltYXRlZCAqL1xuICBhbmltYXRlOiBCb29sZWFuID0gZmFsc2U7XG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cbiAgbWF4ID0gMTAwO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbXBvbmVudCB7XG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cbiAgQElucHV0KClcbiAgc2V0IGFuaW1hdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbmltYXRlID0gdmFsdWU7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGI6IEJhckNvbXBvbmVudCkgPT4ge1xuICAgICAgYi5hbmltYXRlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqIElmIGB0cnVlYCwgc3RyaXBlZCBjbGFzc2VzIGFyZSBhcHBsaWVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHJpcGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyaXBlZCA9IHZhbHVlO1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGIuc3RyaXBlZCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyLiBDb3VsZCBiZSBhIG51bWJlciBvciBhcnJheSBvZiBvYmplY3RzXG4gICAqIGxpa2Uge1widmFsdWVcIjoxNSxcInR5cGVcIjpcImluZm9cIixcImxhYmVsXCI6XCIxNSAlXCJ9XG4gICAqL1xuICBASW5wdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgYW55W10pIHtcbiAgICB0aGlzLmlzU3RhY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgaXNTdGFja2VkID0gZmFsc2U7XG4gIF9zdHJpcGVkOiBib29sZWFuO1xuICBfYW5pbWF0ZTogYm9vbGVhbjtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBfdmFsdWU6IG51bWJlciB8IGFueVtdO1xuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXgnKVxuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIHNldCBtYXgodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gdjtcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYmFyOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGJhci5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MnKSBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBiYXJzOiBCYXJDb21wb25lbnRbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCBfbWF4ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUHJvZ3Jlc3NiYXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbiAgYWRkQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgYmFyLmFuaW1hdGUgPSB0aGlzLl9hbmltYXRlO1xuICAgIGJhci5zdHJpcGVkID0gdGhpcy5fc3RyaXBlZDtcblxuICAgIHRoaXMuYmFycy5wdXNoKGJhcik7XG4gIH1cblxuICByZW1vdmVCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3QsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuLy8gdG9kbzogbnVtYmVyIHBpcGVcbi8vIHRvZG86IHVzZSBxdWVyeSBmcm9tIHByb2dyZXNzP1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICdhcmlhLXZhbHVlbWluJzogJzAnLFxuICAgICdbY2xhc3NdJzogJ1wicHJvZ3Jlc3MtYmFyIFwiICsgKHR5cGUgPyBcInByb2dyZXNzLWJhci1cIiArIHR5cGUgKyBcIiBiZy1cIiArIHR5cGUgOiBcIlwiKScsXG4gICAgJ1tjbGFzcy5wcm9ncmVzcy1iYXItYW5pbWF0ZWRdJzogJyFpc0JzMyAmJiBhbmltYXRlJyxcbiAgICAnW2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXSc6ICdzdHJpcGVkJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnaXNCczMgJiYgYW5pbWF0ZScsXG4gICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3BlcmNlbnQgPyBwZXJjZW50LnRvRml4ZWQoMCkgKyBcIiVcIiA6IFwiXCInLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdtYXgnLFxuICAgICdbc3R5bGUuaGVpZ2h0LiVdJzogJ1wiMTAwXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBtYXg6IG51bWJlcjtcblxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhciAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodjogbnVtYmVyKSB7XG4gICAgaWYgKCF2ICYmIHYgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIHRoaXMucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLiUnKVxuICBnZXQgc2V0QmFyV2lkdGgoKSB7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcblxuICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XG4gIH1cblxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICBzdHJpcGVkOiBib29sZWFuO1xuICBhbmltYXRlOiBib29sZWFuO1xuICBwZXJjZW50ID0gMDtcbiAgcHJvZ3Jlc3M6IFByb2dyZXNzYmFyQ29tcG9uZW50O1xuXG4gIHByb3RlY3RlZCBfdmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByb2dyZXNzOiBQcm9ncmVzc2JhckNvbXBvbmVudCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZ3Jlc3MuYWRkQmFyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcy5yZW1vdmVCYXIodGhpcyk7XG4gIH1cblxuICByZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5wZXJjZW50ID0gKyh0aGlzLnZhbHVlIC8gdGhpcy5wcm9ncmVzcy5tYXggKiAxMDApLnRvRml4ZWQoMik7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRhZ2UgPSB0aGlzLnByb2dyZXNzLmJhcnNcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsOiBudW1iZXIsIGJhcjogQmFyQ29tcG9uZW50KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgYmFyLnBlcmNlbnQ7XG4gICAgICB9LCAwKTtcblxuICAgIGlmICh0b3RhbFBlcmNlbnRhZ2UgPiAxMDApIHtcbiAgICAgIHRoaXMucGVyY2VudCAtPSB0b3RhbFBlcmNlbnRhZ2UgLSAxMDA7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWcgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtCYXJDb21wb25lbnQsIFByb2dyZXNzYmFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0JhckNvbXBvbmVudCwgUHJvZ3Jlc3NiYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFByb2dyZXNzYmFyTW9kdWxlLCBwcm92aWRlcnM6IFtQcm9ncmVzc2JhckNvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7O3VCQUtxQixLQUFLOzs7O21CQUVsQixHQUFHOzs7Z0JBTFYsVUFBVTs7NEJBRlg7Ozs7Ozs7QUNBQTtJQTRFRSw4QkFBWSxNQUF5Qjt5QkE5QnpCLEtBQUs7d0JBdUJ5QixJQUFJOztvQkFHdkIsRUFBRTtvQkFFUixHQUFHO1FBR2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzdCOzBCQTFERyx5Q0FBTzs7Ozs7O2tCQUFDLEtBQWM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFlO2dCQUNoQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNuQixDQUFDLENBQUM7Ozs7OzBCQUlELHlDQUFPOzs7Ozs7a0JBQUMsS0FBYztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQWU7Z0JBQ2hDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ25CLENBQUMsQ0FBQzs7Ozs7MEJBVUQsdUNBQUs7Ozs7Ozs7O2tCQUFDLEtBQXFCO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FB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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/rating/fesm5/ngx-bootstrap-rating.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/rating/fesm5/ngx-bootstrap-rating.js ***!
  \*************************************************************************/
/*! exports provided: RatingComponent, RatingModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RATING_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RATING_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * number of icons
         */
        this.max = 5;
        /**
         * fired when icon selected, $event:number equals to selected rating
         */
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when icon selected, $event:number equals to previous rating value
         */
        this.onLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RatingComponent.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: deprecation */
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        /* tslint:disable-next-line: deprecation */
        var /** @type {?} */ sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    };
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.enter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.rate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    /**
     * @param {?} max
     * @return {?}
     */
    RatingComponent.prototype.buildTemplateObjects = /**
     * @param {?} max
     * @return {?}
     */
    function (max) {
        var /** @type {?} */ result = [];
        for (var /** @type {?} */ i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    };
    RatingComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'rating',
                    template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    RatingComponent.propDecorators = {
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "readonly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "titles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onHover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onLeave": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onKeydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return RatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    /**
     * @return {?}
     */
    RatingModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: RatingModule,
            providers: []
        };
    };
    RatingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [RatingComponent],
                    exports: [RatingComponent]
                },] }
    ];
    return RatingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1yYXRpbmcuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvcmF0aW5nL3JhdGluZy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcmF0aW5nL3JhdGluZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBmb3J3YXJkUmVmLCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWNjZXNzb3JDb250ZW50LCBSYXRpbmdSZXN1bHRzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUkFUSU5HX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IEFjY2Vzc29yQ29udGVudCA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGluZ0NvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUkFUSU5HX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgLyoqIG51bWJlciBvZiBpY29ucyAqL1xuICBASW5wdXQoKSBtYXggPSA1O1xuICAvKiogaWYgdHJ1ZSB3aWxsIG5vdCByZWFjdCBvbiBhbnkgdXNlciBldmVudHMgKi9cbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG4gIC8qKiBhcnJheSBvZiBpY29ucyB0aXRsZXMsIGRlZmF1bHQ6IChbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdKSAqL1xuICBASW5wdXQoKSB0aXRsZXM6IHN0cmluZ1tdO1xuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBpY29ucyAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogZmlyZWQgd2hlbiBpY29uIHNlbGVjdGVkLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byBzZWxlY3RlZCByYXRpbmcgKi9cbiAgQE91dHB1dCgpIG9uSG92ZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgd2hlbiBpY29uIHNlbGVjdGVkLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byBwcmV2aW91cyByYXRpbmcgdmFsdWUgKi9cbiAgQE91dHB1dCgpIG9uTGVhdmU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICByYW5nZTogUmF0aW5nUmVzdWx0c1tdO1xuICB2YWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgcHJlVmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBpZiAoWzM3LCAzOCwgMzksIDQwXS5pbmRleE9mKGV2ZW50LndoaWNoKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBjb25zdCBzaWduID0gZXZlbnQud2hpY2ggPT09IDM4IHx8IGV2ZW50LndoaWNoID09PSAzOSA/IDEgOiAtMTtcbiAgICB0aGlzLnJhdGUodGhpcy52YWx1ZSArIHNpZ24pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXggPSB0eXBlb2YgdGhpcy5tYXggIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXggOiA1O1xuICAgIHRoaXMudGl0bGVzID1cbiAgICAgIHR5cGVvZiB0aGlzLnRpdGxlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy50aXRsZXMubGVuZ3RoID4gMFxuICAgICAgICA/IHRoaXMudGl0bGVzXG4gICAgICAgIDogW107XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHModGhpcy5tYXgpO1xuICB9XG5cbiAgLy8gbW9kZWwgLT4gdmlld1xuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgJSAxICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgdGhpcy5wcmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZVZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZW50ZXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFkb25seSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLm9uSG92ZXIuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucHJlVmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkxlYXZlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICByYXRlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSB0aGlzLnJhbmdlLmxlbmd0aCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZFRlbXBsYXRlT2JqZWN0cyhtYXg6IG51bWJlcik6IFJhdGluZ1Jlc3VsdHNbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBSYXRpbmdSZXN1bHRzW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVzW2ldIHx8IGkgKyAxXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9yYXRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1JhdGluZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSYXRpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmF0aW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHFCQVlhLDZCQUE2QixHQUFvQjtJQUM1RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEdBQUEsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENB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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/sortable/fesm5/ngx-bootstrap-sortable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/sortable/fesm5/ngx-bootstrap-sortable.js ***!
  \*****************************************************************************/
/*! exports provided: SortableModule, SortableComponent, DraggableItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return SortableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return DraggableItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DraggableItemService = /** @class */ (function () {
    function DraggableItemService() {
        this.onCapture = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DraggableItemService.prototype.dragStart = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.draggableItem = item;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.getItem = /**
     * @return {?}
     */
    function () {
        return this.draggableItem;
    };
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    DraggableItemService.prototype.captureItem = /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.onCaptureItem = /**
     * @return {?}
     */
    function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return DraggableItemService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableComponent = /** @class */ (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /**
         * class name for items wrapper
         */
        this.wrapperClass = '';
        /**
         * style object for items wrapper
         */
        this.wrapperStyle = {};
        /**
         * class name for item
         */
        this.itemClass = '';
        /**
         * style object for item
         */
        this.itemStyle = {};
        /**
         * class name for active item
         */
        this.itemActiveClass = '';
        /**
         * style object for active item
         */
        this.itemActiveStyle = {};
        /**
         * class name for placeholder
         */
        this.placeholderClass = '';
        /**
         * style object for placeholder
         */
        this.placeholderStyle = {};
        /**
         * placeholder item which will be shown if collection is empty
         */
        this.placeholderItem = '';
        /**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPlaceholder = false;
        this.activeItem = -1;
        /* tslint:disable-next-line: no-any */
        this.onTouched = Function.prototype;
        /* tslint:disable-next-line: no-any */
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe(function (item) { return _this.onDrop(item); });
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._items = value;
            var /** @type {?} */ out = this.items.map(function (x) { return x.initData; });
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragstart = /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragover = /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        var /** @type {?} */ dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        var /** @type {?} */ newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this.items.slice(0, i), [
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            // this.draggedItem.i < i
            newArray = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this.items.slice(0, dragItem.i), this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.cancelEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SortableComponent.prototype.onDrop = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter(function (x, i) { return i !== item.i; });
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.resetActiveItem = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnChange = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onChanged = callback;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnTouched = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onTouched = callback;
    };
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    SortableComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map(function (x, i) {
                return ({
                    id: i,
                    initData: x,
                    value: _this.fieldName ? x[_this.fieldName] : x
                });
            });
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    /**
     * @return {?}
     */
    SortableComponent.prototype.updatePlaceholderState = /**
     * @return {?}
     */
    function () {
        this.showPlaceholder = !this._items.length;
    };
    /**
     * @param {?} isActive
     * @return {?}
     */
    SortableComponent.prototype.getItemStyle = /**
     * @param {?} isActive
     * @return {?}
     */
    function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.initDragstartEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SortableComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: DraggableItemService, },
    ]; };
    SortableComponent.propDecorators = {
        "fieldName": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "wrapperClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "wrapperStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "itemClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "itemStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "itemActiveClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "itemActiveStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholderClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholderStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholderItem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "itemTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return SortableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableModule = /** @class */ (function () {
    function SortableModule() {
    }
    /**
     * @return {?}
     */
    SortableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    };
    SortableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [SortableComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                    exports: [SortableComponent]
                },] }
    ];
    return SortableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1zb3J0YWJsZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3NvcnRhYmxlL3NvcnRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS9zb3J0YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSXRlbVNlcnZpY2Uge1xuICBwcml2YXRlIGRyYWdnYWJsZUl0ZW06IERyYWdnYWJsZUl0ZW07XG5cbiAgcHJpdmF0ZSBvbkNhcHR1cmU6IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4gPSBuZXcgU3ViamVjdDxEcmFnZ2FibGVJdGVtPigpO1xuXG4gIGRyYWdTdGFydChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5kcmFnZ2FibGVJdGVtID0gaXRlbTtcbiAgfVxuXG4gIGdldEl0ZW0oKTogRHJhZ2dhYmxlSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcbiAgfVxuXG4gIGNhcHR1cmVJdGVtKG92ZXJab25lSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcik6IERyYWdnYWJsZUl0ZW0ge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gb3ZlclpvbmVJbmRleCkge1xuICAgICAgdGhpcy5kcmFnZ2FibGVJdGVtLmxhc3Rab25lSW5kZXggPSB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleDtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4ID0gb3ZlclpvbmVJbmRleDtcbiAgICAgIHRoaXMub25DYXB0dXJlLm5leHQodGhpcy5kcmFnZ2FibGVJdGVtKTtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZHJhZ2dhYmxlSXRlbSwge1xuICAgICAgICBvdmVyWm9uZUluZGV4LFxuICAgICAgICBpOiBuZXdJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcbiAgfVxuXG4gIG9uQ2FwdHVyZUl0ZW0oKTogU3ViamVjdDxEcmFnZ2FibGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMub25DYXB0dXJlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtU2VydmljZSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0uc2VydmljZSc7XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1zb3J0YWJsZScsXG4gIGV4cG9ydEFzOiAnYnMtc29ydGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuPGRpdlxuICAgIFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc1wiXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcbiAgICBbbmdTdHlsZV09XCJ3cmFwcGVyU3R5bGVcIlxuICAgIChkcmFnb3Zlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgIChkcm9wKT1cInJlc2V0QWN0aXZlSXRlbSgkZXZlbnQpXCJcbiAgICAobW91c2VsZWF2ZSk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiPlxuICA8ZGl2XG4gICAgICAgICpuZ0lmPVwic2hvd1BsYWNlaG9sZGVyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwicGxhY2Vob2xkZXJDbGFzc1wiXG4gICAgICAgIFtuZ1N0eWxlXT1cInBsYWNlaG9sZGVyU3R5bGVcIlxuICAgICAgICAoZHJhZ292ZXIpPVwib25JdGVtRHJhZ292ZXIoJGV2ZW50LCAwKVwiXG4gICAgICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXG4gICAgPnt7cGxhY2Vob2xkZXJJdGVtfX08L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaT1pbmRleDtcIlxuICAgICAgICBbbmdDbGFzc109XCJbIGl0ZW1DbGFzcywgaSA9PT0gYWN0aXZlSXRlbSA/IGl0ZW1BY3RpdmVDbGFzcyA6ICcnIF1cIlxuICAgICAgICBbbmdTdHlsZV09XCJnZXRJdGVtU3R5bGUoaSA9PT0gYWN0aXZlSXRlbSlcIlxuICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgKGRyYWdzdGFydCk9XCJvbkl0ZW1EcmFnc3RhcnQoJGV2ZW50LCBpdGVtLCBpKVwiXG4gICAgICAgIChkcmFnZW5kKT1cInJlc2V0QWN0aXZlSXRlbSgkZXZlbnQpXCJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgaSlcIlxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgICAgICBhcmlhLWRyb3BlZmZlY3Q9XCJtb3ZlXCJcbiAgICAgICAgW2F0dHIuYXJpYS1ncmFiYmVkXT1cImkgPT09IGFjdGl2ZUl0ZW1cIlxuICAgID48bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVRlbXBsYXRlIHx8IGRlZkl0ZW1UZW1wbGF0ZVwiXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7aXRlbTppdGVtLCBpbmRleDogaX1cIj48L25nLXRlbXBsYXRlPjwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmSXRlbVRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPnt7aXRlbS52YWx1ZX19PC9uZy10ZW1wbGF0ZT4gIFxuYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3J0YWJsZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgZ2xvYmFsWm9uZUluZGV4ID0gMDtcbiAgLyoqIGZpZWxkIG5hbWUgaWYgaW5wdXQgYXJyYXkgY29uc2lzdHMgb2Ygb2JqZWN0cyAqL1xuICBASW5wdXQoKSBmaWVsZE5hbWU6IHN0cmluZztcblxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbXMgd3JhcHBlciAqL1xuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3MgPSAnJztcblxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtcyB3cmFwcGVyICovXG4gIEBJbnB1dCgpIHdyYXBwZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1DbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGl0ZW0gKi9cbiAgQElucHV0KCkgaXRlbVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGFjdGl2ZSBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVDbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGFjdGl2ZSBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBwbGFjZWhvbGRlciAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzID0gJyc7XG5cbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBwbGFjZWhvbGRlciBpdGVtIHdoaWNoIHdpbGwgYmUgc2hvd24gaWYgY29sbGVjdGlvbiBpcyBlbXB0eSAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckl0ZW0gPSAnJztcblxuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuIFRlbXBsYXRlIHZhcmlhYmxlczogaXRlbSBhbmQgaW5kZXg7ICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiogZmlyZWQgb24gYXJyYXkgY2hhbmdlIChyZW9yZGVyaW5nLCBpbnNlcnQsIHJlbW92ZSksIHNhbWUgYXMgPGNvZGU+bmdNb2RlbENoYW5nZTwvY29kZT4uXG4gICAqICBSZXR1cm5zIG5ldyBpdGVtcyBjb2xsZWN0aW9uIGFzIGEgcGF5bG9hZC5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgc2hvd1BsYWNlaG9sZGVyID0gZmFsc2U7XG4gIGFjdGl2ZUl0ZW0gPSAtMTtcblxuICBnZXQgaXRlbXMoKTogU29ydGFibGVJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIHNldCBpdGVtcyh2YWx1ZTogU29ydGFibGVJdGVtW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICAgIGNvbnN0IG91dCA9IHRoaXMuaXRlbXMubWFwKCh4OiBTb3J0YWJsZUl0ZW0pID0+IHguaW5pdERhdGEpO1xuICAgIHRoaXMub25DaGFuZ2VkKG91dCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG91dCk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgb25DaGFuZ2VkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgcHJpdmF0ZSB0cmFuc2ZlcjogRHJhZ2dhYmxlSXRlbVNlcnZpY2U7XG4gIHByaXZhdGUgY3VycmVudFpvbmVJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9pdGVtczogU29ydGFibGVJdGVtW107XG5cbiAgY29uc3RydWN0b3IodHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlKSB7XG4gICAgdGhpcy50cmFuc2ZlciA9IHRyYW5zZmVyO1xuICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCA9IFNvcnRhYmxlQ29tcG9uZW50Lmdsb2JhbFpvbmVJbmRleCsrO1xuICAgIHRoaXMudHJhbnNmZXJcbiAgICAgIC5vbkNhcHR1cmVJdGVtKClcbiAgICAgIC5zdWJzY3JpYmUoKGl0ZW06IERyYWdnYWJsZUl0ZW0pID0+IHRoaXMub25Ecm9wKGl0ZW0pKTtcbiAgfVxuXG4gIG9uSXRlbURyYWdzdGFydChcbiAgICBldmVudDogRHJhZ0V2ZW50LFxuICAgIGl0ZW06IFNvcnRhYmxlSXRlbSxcbiAgICBpOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy50cmFuc2Zlci5kcmFnU3RhcnQoe1xuICAgICAgZXZlbnQsXG4gICAgICBpdGVtLFxuICAgICAgaSxcbiAgICAgIGluaXRpYWxJbmRleDogaSxcbiAgICAgIGxhc3Rab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleCxcbiAgICAgIG92ZXJab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgb25JdGVtRHJhZ292ZXIoZXZlbnQ6IERyYWdFdmVudCwgaTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyYWdJdGVtID0gdGhpcy50cmFuc2Zlci5jYXB0dXJlSXRlbShcbiAgICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCxcbiAgICAgIHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgKTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgbGV0IG5ld0FycmF5OiBhbnlbXSA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgbmV3QXJyYXkgPSBbZHJhZ0l0ZW0uaXRlbV07XG4gICAgfSBlbHNlIGlmIChkcmFnSXRlbS5pID4gaSkge1xuICAgICAgbmV3QXJyYXkgPSBbXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgaSksXG4gICAgICAgIGRyYWdJdGVtLml0ZW0sXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoaSwgZHJhZ0l0ZW0uaSksXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEpXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLmRyYWdnZWRJdGVtLmkgPCBpXG4gICAgICBuZXdBcnJheSA9IFtcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZSgwLCBkcmFnSXRlbS5pKSxcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShkcmFnSXRlbS5pICsgMSwgaSArIDEpLFxuICAgICAgICBkcmFnSXRlbS5pdGVtLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGkgKyAxKVxuICAgICAgXTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcyA9IG5ld0FycmF5O1xuICAgIGRyYWdJdGVtLmkgPSBpO1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IGk7XG4gICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XG4gIH1cblxuICBjYW5jZWxFdmVudChldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSB8fCAhZXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uRHJvcChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgaXRlbSAmJlxuICAgICAgaXRlbS5vdmVyWm9uZUluZGV4ICE9PSB0aGlzLmN1cnJlbnRab25lSW5kZXggJiZcbiAgICAgIGl0ZW0ubGFzdFpvbmVJbmRleCA9PT0gdGhpcy5jdXJyZW50Wm9uZUluZGV4XG4gICAgKSB7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoXG4gICAgICAgICh4OiBTb3J0YWJsZUl0ZW0sIGk6IG51bWJlcikgPT4gaSAhPT0gaXRlbS5pXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XG4gICAgfVxuICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKHVuZGVmaW5lZCk7XG4gIH1cblxuICByZXNldEFjdGl2ZUl0ZW0oZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IC0xO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VkID0gY2FsbGJhY2s7XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gY2FsbGJhY2s7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgIHRoaXMuaXRlbXMgPSB2YWx1ZS5tYXAoKHg6IGFueSwgaTogbnVtYmVyKSA9PiAoe1xuICAgICAgICBpZDogaSxcbiAgICAgICAgaW5pdERhdGE6IHgsXG4gICAgICAgIHZhbHVlOiB0aGlzLmZpZWxkTmFtZSA/IHhbdGhpcy5maWVsZE5hbWVdIDogeFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dQbGFjZWhvbGRlciA9ICF0aGlzLl9pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBnZXRJdGVtU3R5bGUoaXNBY3RpdmU6IGJvb2xlYW4pOiB7fSB7XG4gICAgcmV0dXJuIGlzQWN0aXZlXG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbVN0eWxlLCB0aGlzLml0ZW1BY3RpdmVTdHlsZSlcbiAgICAgIDogdGhpcy5pdGVtU3R5bGU7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHJpdmF0ZSBpbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIC8vIGl0IGlzIG5lY2Vzc2FyeSBmb3IgbW96aWxsYVxuICAgIC8vIGRhdGEgdHlwZSBzaG91bGQgYmUgJ1RleHQnIGluc3RlYWQgb2YgJ3RleHQvcGxhaW4nIHRvIGtlZXAgY29tcGF0aWJpbGl0eVxuICAgIC8vIHdpdGggSUVcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsICdwbGFjZWhvbGRlcicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTb3J0YWJsZUl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBpbml0RGF0YTogYW55O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNvcnRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbVNlcnZpY2UgfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTb3J0YWJsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbU29ydGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNvcnRhYmxlTW9kdWxlLCBwcm92aWRlcnM6IFtEcmFnZ2FibGVJdGVtU2VydmljZV0gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7eUJBUThDLElBQUksT0FBTyxFQUFpQjs7Ozs7O0lBRXhFLHdDQUFTOzs7O0lBQVQsVUFBVSxJQUFtQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztLQUMzQjs7OztJQUVELHNDQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7Ozs7O0lBRUQsMENBQVc7Ozs7O0lBQVgsVUFBWSxhQUFxQixFQUFFLFFBQWdCO1FBQ2pELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEtBQUssYUFBYSxFQUFFO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN6RCxhQUFhLGVBQUE7Z0JBQ2IsQ0FBQyxFQUFFLFFBQVE7YUFDWixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Z0JBOUJGLFVBQVU7OytCQUpYOzs7Ozs7OztJQzJIRSwyQkFBWSxRQUE4QjtRQUExQyxpQkFNQzs7Ozs0QkFqRXVCLEVBQUU7Ozs7NEJBR3lCLEVBQUU7Ozs7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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js ***!
  \*********************************************************************/
/*! exports provided: NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return NgTranscludeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return TabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return TabHeadingDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return TabsetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        /* tslint:disable-next-line:no-any */
        get: /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    NgTranscludeDirective.propDecorators = {
        "ngTransclude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgTranscludeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return TabsetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        get: /**
         * if true tabs will be placed vertically
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        var /** @type {?} */ index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            var /** @type {?} */ newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var /** @type {?} */ step = 1; step <= tabsLength; step += 1) {
            var /** @type {?} */ prevIndex = index - step;
            var /** @type {?} */ nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var /** @type {?} */ i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
        var _a;
    };
    TabsetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n  <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    TabsetComponent.propDecorators = {
        "vertical": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "justified": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clazz": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        get: /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */
        function () {
            return this._customClass;
        },
        set: /**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                });
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'tab, [tab]' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    TabDirective.propDecorators = {
        "heading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "customClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "deselect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "removed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "addClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Should be used to mark <ng-template> element as a template for tab heading
 */
var TabHeadingDirective = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[tabHeading]' },] }
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
        { type: TabDirective, },
    ]; };
    return TabHeadingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    /**
     * @return {?}
     */
    TabsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
    TabsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        NgTranscludeDirective,
                        TabDirective,
                        TabsetComponent,
                        TabHeadingDirective
                    ],
                    exports: [
                        TabDirective,
                        TabsetComponent,
                        TabHeadingDirective,
                        NgTranscludeDirective
                    ]
                },] }
    ];
    return TabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10YWJzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvbmctdHJhbnNjbHVkZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWJzZXQuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFic2V0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90YWJzL3RhYi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWItaGVhZGluZy5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlRGlyZWN0aXZlIHtcbiAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBwcm90ZWN0ZWQgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHJvdGVjdGVkIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICB9XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLnZpZXdSZWYgPSB2aWV3UmVmO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb25maWcge1xuICAvKiogcHJvdmlkZXMgZGVmYXVsdCBuYXZpZ2F0aW9uIGNvbnRleHQgY2xhc3M6ICd0YWJzJyBvciAncGlsbHMnICovXG4gIHR5cGUgPSAndGFicyc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYnNldENvbmZpZyB9IGZyb20gJy4vdGFic2V0LmNvbmZpZyc7XG4vLyB0b2RvOiBhZGQgYWN0aXZlIGV2ZW50IHRvIHRhYlxuLy8gdG9kbzogZml4PyBtaXhpbmcgc3RhdGljIGFuZCBkeW5hbWljIHRhYnMgcG9zaXRpb24gdGFicyBpbiBvcmRlciBvZiBjcmVhdGlvblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFic2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnNldC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFic2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXG4gIEBJbnB1dCgpXG4gIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgc2V0IHZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvKiogaWYgdHJ1ZSB0YWJzIGZpbGwgdGhlIGNvbnRhaW5lciBhbmQgaGF2ZSBhIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmaWVkO1xuICB9XG4gIHNldCBqdXN0aWZpZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9qdXN0aWZpZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvKiogbmF2aWdhdGlvbiBjb250ZXh0IGNsYXNzOiAndGFicycgb3IgJ3BpbGxzJyAqL1xuICBASW5wdXQoKVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgY2xhenogPSB0cnVlO1xuXG4gIHRhYnM6IFRhYkRpcmVjdGl2ZVtdID0gW107XG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gIHByb3RlY3RlZCBpc0Rlc3Ryb3llZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9qdXN0aWZpZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogVGFic2V0Q29uZmlnLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgdGFiLmFjdGl2ZSA9IHRoaXMudGFicy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHRhYi5hY3RpdmUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgcmVtb3ZlVGFiKFxuICAgIHRhYjogVGFiRGlyZWN0aXZlLFxuICAgIG9wdGlvbnMgPSB7IHJlc2VsZWN0OiB0cnVlLCBlbWl0OiB0cnVlIH1cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEgfHwgdGhpcy5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZWxlY3QgYSBuZXcgdGFiIGlmIHRoZSB0YWIgdG8gYmUgcmVtb3ZlZCBpcyBzZWxlY3RlZCBhbmQgbm90IGRlc3Ryb3llZFxuICAgIGlmIChvcHRpb25zLnJlc2VsZWN0ICYmIHRhYi5hY3RpdmUgJiYgdGhpcy5oYXNBdmFpbGFibGVUYWJzKGluZGV4KSkge1xuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XG4gICAgICB0aGlzLnRhYnNbbmV3QWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVtaXQpIHtcbiAgICAgIHRhYi5yZW1vdmVkLmVtaXQodGFiKTtcbiAgICB9XG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICB0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGFic0xlbmd0aCA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIHN0ZXA7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBpbmRleCArIHN0ZXA7XG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBwcmV2SW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc0F2YWlsYWJsZVRhYnMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIGlmICghdGFic0xlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgICduYXYtc3RhY2tlZCc6IHRoaXMudmVydGljYWwsXG4gICAgICAnZmxleC1jb2x1bW4nOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcbiAgICAgIFtgbmF2LSR7dGhpcy50eXBlfWBdOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ3RhYiwgW3RhYl0nIH0pXG5leHBvcnQgY2xhc3MgVGFiRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogdGFiIGhlYWRlciB0ZXh0ICovXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcbiAgLyoqIHRhYiBpZC4gVGhlIHNhbWUgaWQgd2l0aCBzdWZmaXggJy1saW5rJyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nICZsdDtsaSZndDsgZWxlbWVudCAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBub3QgYmUgYWN0aXZhdGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIGJlIHJlbW92YWJsZSwgYWRkaXRpb25hbCBidXR0b24gd2lsbCBhcHBlYXIgKi9cbiAgQElucHV0KCkgcmVtb3ZhYmxlOiBib29sZWFuO1xuICAvKiogaWYgc2V0LCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0YWIncyBjbGFzcyBhdHRyaWJ1dGUuIE11bHRpcGxlIGNsYXNzZXMgYXJlIHN1cHBvcnRlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGN1c3RvbUNsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUNsYXNzO1xuICB9XG5cbiAgc2V0IGN1c3RvbUNsYXNzKGN1c3RvbUNsYXNzOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jdXN0b21DbGFzcykge1xuICAgICAgdGhpcy5jdXN0b21DbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNzc0NsYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzcyA/IGN1c3RvbUNsYXNzLnRyaW0oKSA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5jdXN0b21DbGFzcykge1xuICAgICAgdGhpcy5jdXN0b21DbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNzc0NsYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIHRhYiBhY3RpdmUgc3RhdGUgdG9nZ2xlICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlID09PSBhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCh0aGlzLmRpc2FibGVkICYmIGFjdGl2ZSkgfHwgIWFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiAhYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3QuZW1pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcyk7XG4gICAgdGhpcy50YWJzZXQudGFicy5mb3JFYWNoKCh0YWI6IFRhYkRpcmVjdGl2ZSkgPT4ge1xuICAgICAgaWYgKHRhYiAhPT0gdGhpcykge1xuICAgICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBpbmFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gZGVzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBmaXJlZCBiZWZvcmUgdGFiIHdpbGwgYmUgcmVtb3ZlZCwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gaW5zdGFuY2Ugb2YgcmVtb3ZlZCB0YWIgKi9cbiAgQE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLXBhbmUnKSBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudDtcbiAgcHJvdGVjdGVkIF9hY3RpdmU6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfY3VzdG9tQ2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudCxcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92YWJsZSA9IHRoaXMucmVtb3ZhYmxlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWJzZXQucmVtb3ZlVGFiKHRoaXMsIHsgcmVzZWxlY3Q6IGZhbHNlLCBlbWl0OiBmYWxzZSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xuXG4vKiogU2hvdWxkIGJlIHVzZWQgdG8gbWFyayA8bmctdGVtcGxhdGU+IGVsZW1lbnQgYXMgYSB0ZW1wbGF0ZSBmb3IgdGFiIGhlYWRpbmcgKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t0YWJIZWFkaW5nXScgfSlcbmV4cG9ydCBjbGFzcyBUYWJIZWFkaW5nRGlyZWN0aXZlIHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB0YWI6IFRhYkRpcmVjdGl2ZSkge1xuICAgIHRhYi5oZWFkaW5nUmVmID0gdGVtcGxhdGVSZWY7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgfSBmcm9tICcuL25nLXRyYW5zY2x1ZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYkhlYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1oZWFkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJzZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYnNldENvbmZpZyB9IGZyb20gJy4vdGFic2V0LmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUsXG4gICAgVGFiRGlyZWN0aXZlLFxuICAgIFRhYnNldENvbXBvbmVudCxcbiAgICBUYWJIZWFkaW5nRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJEaXJlY3RpdmUsXG4gICAgVGFic2V0Q29tcG9uZW50LFxuICAgIFRhYkhlYWRpbmdEaXJlY3RpdmUsXG4gICAgTmdUcmFuc2NsdWRlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGFic01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RhYnNldENvbmZpZ11cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBMEJFLCtCQUFZLE9BQXlCO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzBCQWRHLCtDQUFZOzs7OztRQVFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjs7Ozs7O2tCQVZnQixXQUE2QjtZQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlDOzs7Ozs7Z0JBaEJKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFKdUMsZ0JBQWdCOzs7aUNBWXJELEtBQUs7O2dDQVpSOzs7Ozs7O0FDQUE7Ozs7O29CQUtTLE1BQU07OztnQkFIZCxVQUFVOzt1QkFGWDs7Ozs7OztBQ0FBO0lBbURFLHlCQUFZLE1BQW9CLEVBQVUsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQkFWakIsSUFBSTtvQkFFekIsRUFBRTt3QkFDYyxFQUFFO1FBUXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzdCOzBCQXhDRyxxQ0FBUTs7Ozs7O1lBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js ***!
  \*********************************************************************************/
/*! exports provided: TimepickerComponent, TimepickerActions, TimepickerStore, TimepickerConfig, TimepickerModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerActions", function() { return TimepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerStore", function() { return TimepickerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return TimepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return TimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TIMEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimepickerActions = /** @class */ (function () {
    function TimepickerActions() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeHours = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeMinutes = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeSeconds = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.setTime = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.updateControls = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    };
    TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
    TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
    TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
    TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
    TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
    TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
    TimepickerActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return TimepickerActions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ dex = 10;
var /** @type {?} */ hoursPerDay = 24;
var /** @type {?} */ hoursPerDayHalf = 12;
var /** @type {?} */ minutesPerHour = 60;
var /** @type {?} */ secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
function parseHours(value, isPM) {
    if (isPM === void 0) { isPM = false; }
    var /** @type {?} */ hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseMinutes(value) {
    var /** @type {?} */ minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseSeconds(value) {
    var /** @type {?} */ seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    var /** @type {?} */ hour = value.getHours();
    var /** @type {?} */ minutes = value.getMinutes();
    var /** @type {?} */ seconds = value.getSeconds();
    if (diff.hour) {
        hour = (hour + toNumber(diff.hour)) % hoursPerDay;
        if (hour < 0) {
            hour += hoursPerDay;
        }
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
function setTime(value, opts) {
    var /** @type {?} */ hour = parseHours(opts.hour);
    var /** @type {?} */ minute = parseMinutes(opts.minute);
    var /** @type {?} */ seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
function createDate(value, hours, minutes, seconds) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    var /** @type {?} */ _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return "0" + _value;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function isInputLimitValid(diff, max, min) {
    var /** @type {?} */ newDate = changeTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
function isInputValid(hours, minutes, seconds, isPM) {
    if (minutes === void 0) { minutes = '0'; }
    if (seconds === void 0) { seconds = '0'; }
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
function getControlsValue(state) {
    var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
    return {
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondsStep: secondsStep,
        readonlyInput: readonlyInput,
        disabled: disabled,
        mousewheel: mousewheel,
        arrowkeys: arrowkeys,
        showSpinners: showSpinners,
        showMeridian: showMeridian,
        showSeconds: showSeconds,
        meridians: meridians,
        min: min,
        max: max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
function timepickerControls(value, state) {
    var /** @type {?} */ hoursPerDayHalf = 12;
    var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
    var /** @type {?} */ res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        var /** @type {?} */ _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            var /** @type {?} */ _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            var /** @type {?} */ _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        var /** @type {?} */ _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            var /** @type {?} */ _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            var /** @type {?} */ _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Provides default configuration values for timepicker
 */
var TimepickerConfig = /** @class */ (function () {
    function TimepickerConfig() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
    }
    TimepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return TimepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function timepickerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            var /** @type {?} */ _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            var /** @type {?} */ _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            var /** @type {?} */ _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            var /** @type {?} */ _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            var /** @type {?} */ _newControlsState = timepickerControls(state.value, action.payload);
            var /** @type {?} */ _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimepickerStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        var /** @type {?} */ _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            type: '[mini-ngrx] dispatcher init'
        });
        var /** @type {?} */ state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniState"](initialState, _dispatcher, timepickerReducer);
        _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
        return _this;
    }
    TimepickerStore.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
    return TimepickerStore;
}(ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniStore"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TimepickerComponent; }),
    multi: true
};
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
        var _this = this;
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select(function (state) { return state.value; })
            .subscribe(function (value) {
            // update UI values if date changed
            // update UI values if date changed
            _this._renderTime(value);
            _this.onChange(value);
            _this._store.dispatch(_this._timepickerActions.updateControls(getControlsValue(_this)));
        });
        _store
            .select(function (state) { return state.controls; })
            .subscribe(function (controlsState) {
            _this.isValid.emit(isInputValid(_this.hours, _this.minutes, _this.seconds, _this.isPM()));
            Object.assign(_this, controlsState);
            _cd.markForCheck();
        });
    }
    Object.defineProperty(TimepickerComponent.prototype, "isSpinnersVisible", {
        /** @deprecated - please use `isEditable` instead */
        get: /**
         * @deprecated - please use `isEditable` instead
         * @return {?}
         */
        function () {
            return this.showSpinners && !this.readonlyInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerComponent.prototype, "isEditable", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.readonlyInput || this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.resetValidation = /**
     * @return {?}
     */
    function () {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.isPM = /**
     * @return {?}
     */
    function () {
        return this.showMeridian && this.meridian === this.meridians[1];
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TimepickerComponent.prototype.prevDef = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TimepickerComponent.prototype.wheelSign = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return Math.sign($event.deltaY) * -1;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeHours = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeMinutes = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step: step, source: source }));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeSeconds = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step: step, source: source }));
    };
    /**
     * @param {?} hours
     * @return {?}
     */
    TimepickerComponent.prototype.updateHours = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        this.resetValidation();
        this.hours = hours;
        var /** @type {?} */ isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @param {?} minutes
     * @return {?}
     */
    TimepickerComponent.prototype.updateMinutes = /**
     * @param {?} minutes
     * @return {?}
     */
    function (minutes) {
        this.resetValidation();
        this.minutes = minutes;
        var /** @type {?} */ isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    TimepickerComponent.prototype.updateSeconds = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        this.resetValidation();
        this.seconds = seconds;
        var /** @type {?} */ isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.isValidLimit = /**
     * @return {?}
     */
    function () {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype._updateTime = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ _seconds = this.showSeconds ? this.seconds : void 0;
        var /** @type {?} */ _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.toggleMeridian = /**
     * @return {?}
     */
    function () {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        var /** @type {?} */ _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    };
    /**
     * Write a new value to the element.
     */
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    TimepickerComponent.prototype.writeValue = /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    };
    /**
     * Set the function to be called when the control receives a change event.
     */
    // tslint:disable-next-line:no-any
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    TimepickerComponent.prototype.registerOnChange = /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * Set the function to be called when the control receives a touch event.
     */
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    TimepickerComponent.prototype.registerOnTouched = /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    TimepickerComponent.prototype.setDisabledState = /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.timepickerSub.unsubscribe();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerComponent.prototype._renderTime = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        var /** @type {?} */ _value = parseTime(value);
        var /** @type {?} */ _hoursPerDayHalf = 12;
        var /** @type {?} */ _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    };
    TimepickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'timepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                    template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"HH\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"MM\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"SS\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: TimepickerConfig, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: TimepickerStore, },
        { type: TimepickerActions, },
    ]; };
    TimepickerComponent.propDecorators = {
        "hourStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minuteStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "secondsStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "readonlyInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mousewheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "arrowkeys": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showSpinners": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showMeridian": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showMinutes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showSeconds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "meridians": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "min": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isValid": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return TimepickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimepickerModule = /** @class */ (function () {
    function TimepickerModule() {
    }
    /**
     * @return {?}
     */
    TimepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
        };
    };
    TimepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [TimepickerComponent],
                    exports: [TimepickerComponent]
                },] }
    ];
    return TimepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10aW1lcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLnV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci1jb250cm9scy51dGlsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci9yZWR1Y2VyL3RpbWVwaWNrZXIucmVkdWNlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3JlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHtcbiAgVGltZUNoYW5nZUV2ZW50LFxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIFRpbWVcbn0gZnJvbSAnLi4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckFjdGlvbnMge1xuICBzdGF0aWMgcmVhZG9ubHkgV1JJVEVfVkFMVUUgPSAnW3RpbWVwaWNrZXJdIHdyaXRlIHZhbHVlIGZyb20gbmcgbW9kZWwnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0hPVVJTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2UgaG91cnMnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX01JTlVURVMgPSAnW3RpbWVwaWNrZXJdIGNoYW5nZSBtaW51dGVzJztcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9TRUNPTkRTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2Ugc2Vjb25kcyc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfVElNRV9VTklUID0gJ1t0aW1lcGlja2VyXSBzZXQgdGltZSB1bml0JztcbiAgc3RhdGljIHJlYWRvbmx5IFVQREFURV9DT05UUk9MUyA9ICdbdGltZXBpY2tlcl0gdXBkYXRlIGNvbnRyb2xzJztcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLldSSVRFX1ZBTFVFLFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlSG91cnMoZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfSE9VUlMsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VNaW51dGVzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX01JTlVURVMsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VTZWNvbmRzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfU0VDT05EUyxcbiAgICAgIHBheWxvYWQ6IGV2ZW50XG4gICAgfTtcbiAgfVxuXG4gIHNldFRpbWUodmFsdWU6IFRpbWUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5TRVRfVElNRV9VTklULFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ29udHJvbHModmFsdWU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLlVQREFURV9DT05UUk9MUyxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGltZSwgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlIH0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbmNvbnN0IGRleCA9IDEwO1xuY29uc3QgaG91cnNQZXJEYXkgPSAyNDtcbmNvbnN0IGhvdXJzUGVyRGF5SGFsZiA9IDEyO1xuY29uc3QgbWludXRlc1BlckhvdXIgPSA2MDtcbmNvbnN0IHNlY29uZHNQZXJNaW51dGUgPSA2MDtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlPzogc3RyaW5nIHwgRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiBpc05hTih2YWx1ZS5nZXRIb3VycygpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGlzVmFsaWREYXRlKG5ldyBEYXRlKHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRMaW1pdChjb250cm9sczogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLCBuZXdEYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gIGlmIChjb250cm9scy5taW4gJiYgbmV3RGF0ZSA8IGNvbnRyb2xzLm1pbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb250cm9scy5tYXggJiYgbmV3RGF0ZSA+IGNvbnRyb2xzLm1heCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCBkZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHZhbHVlIGlzIG51bWJlciB7XG4gIHJldHVybiAhaXNOYU4odG9OdW1iZXIodmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSG91cnMoXG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsXG4gIGlzUE0gPSBmYWxzZVxuKTogbnVtYmVyIHtcbiAgY29uc3QgaG91ciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKFxuICAgIGlzTmFOKGhvdXIpIHx8XG4gICAgaG91ciA8IDAgfHxcbiAgICBob3VyID4gKGlzUE0gPyBob3Vyc1BlckRheUhhbGYgOiBob3Vyc1BlckRheSlcbiAgKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNaW51dGVzKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBtaW51dGUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmIChpc05hTihtaW51dGUpIHx8IG1pbnV0ZSA8IDAgfHwgbWludXRlID4gbWludXRlc1BlckhvdXIpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIG1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2Vjb25kcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgc2Vjb25kcyA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKGlzTmFOKHNlY29uZHMpIHx8IHNlY29uZHMgPCAwIHx8IHNlY29uZHMgPiBzZWNvbmRzUGVyTWludXRlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lKHZhbHVlOiBzdHJpbmcgfCBEYXRlKTogRGF0ZSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpbWUodmFsdWU6IERhdGUsIGRpZmY6IFRpbWUpOiBEYXRlIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBjaGFuZ2VUaW1lKGNyZWF0ZURhdGUobmV3IERhdGUoKSwgMCwgMCwgMCksIGRpZmYpO1xuICB9XG5cbiAgbGV0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xuICBsZXQgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgbGV0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYuaG91cikge1xuICAgIGhvdXIgPSAoaG91ciArIHRvTnVtYmVyKGRpZmYuaG91cikpICUgaG91cnNQZXJEYXk7XG4gICAgaWYgKGhvdXIgPCAwKSB7XG4gICAgICBob3VyICs9IGhvdXJzUGVyRGF5O1xuICAgIH1cbiAgfVxuXG4gIGlmIChkaWZmLm1pbnV0ZSkge1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzICsgdG9OdW1iZXIoZGlmZi5taW51dGUpO1xuICB9XG5cbiAgaWYgKGRpZmYuc2Vjb25kcykge1xuICAgIHNlY29uZHMgPSBzZWNvbmRzICsgdG9OdW1iZXIoZGlmZi5zZWNvbmRzKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVEYXRlKHZhbHVlLCBob3VyLCBtaW51dGVzLCBzZWNvbmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRpbWUodmFsdWU6IERhdGUsIG9wdHM6IFRpbWUpOiBEYXRlIHtcbiAgbGV0IGhvdXIgPSBwYXJzZUhvdXJzKG9wdHMuaG91cik7XG4gIGNvbnN0IG1pbnV0ZSA9IHBhcnNlTWludXRlcyhvcHRzLm1pbnV0ZSk7XG4gIGNvbnN0IHNlY29uZHMgPSBwYXJzZVNlY29uZHMob3B0cy5zZWNvbmRzKSB8fCAwO1xuXG4gIGlmIChvcHRzLmlzUE0pIHtcbiAgICBob3VyICs9IGhvdXJzUGVyRGF5SGFsZjtcbiAgfVxuXG4gIGlmICghdmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKGhvdXIpICYmICFpc05hTihtaW51dGUpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGF0ZShuZXcgRGF0ZSgpLCBob3VyLCBtaW51dGUsIHNlY29uZHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc05hTihob3VyKSB8fCBpc05hTihtaW51dGUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZURhdGUodmFsdWUsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRlKFxuICB2YWx1ZTogRGF0ZSxcbiAgaG91cnM6IG51bWJlcixcbiAgbWludXRlczogbnVtYmVyLFxuICBzZWNvbmRzOiBudW1iZXJcbik6IERhdGUge1xuICByZXR1cm4gbmV3IERhdGUoXG4gICAgdmFsdWUuZ2V0RnVsbFllYXIoKSxcbiAgICB2YWx1ZS5nZXRNb250aCgpLFxuICAgIHZhbHVlLmdldERhdGUoKSxcbiAgICBob3VycyxcbiAgICBtaW51dGVzLFxuICAgIHNlY29uZHMsXG4gICAgdmFsdWUuZ2V0TWlsbGlzZWNvbmRzKClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZE51bWJlcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgX3ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgaWYgKF92YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIF92YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBgMCR7X3ZhbHVlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hvdXJJbnB1dFZhbGlkKGhvdXJzOiBzdHJpbmcsIGlzUE06IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUhvdXJzKGhvdXJzLCBpc1BNKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01pbnV0ZUlucHV0VmFsaWQobWludXRlczogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VNaW51dGVzKG1pbnV0ZXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2Vjb25kSW5wdXRWYWxpZChzZWNvbmRzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZVNlY29uZHMoc2Vjb25kcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dExpbWl0VmFsaWQoZGlmZjogVGltZSwgbWF4OiBEYXRlLCBtaW46IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbmV3RGF0ZSA9IGNoYW5nZVRpbWUobmV3IERhdGUoKSwgZGlmZik7XG5cbiAgaWYgKG1heCAmJiBuZXdEYXRlID4gbWF4KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1pbiAmJiBuZXdEYXRlIDwgbWluKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lucHV0VmFsaWQoXG4gIGhvdXJzOiBzdHJpbmcsXG4gIG1pbnV0ZXMgPSAnMCcsXG4gIHNlY29uZHMgPSAnMCcsXG4gIGlzUE06IGJvb2xlYW5cbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNIb3VySW5wdXRWYWxpZChob3VycywgaXNQTSlcbiAgICAmJiBpc01pbnV0ZUlucHV0VmFsaWQobWludXRlcylcbiAgICAmJiBpc1NlY29uZElucHV0VmFsaWQoc2Vjb25kcyk7XG59XG4iLCJpbXBvcnQgeyBjaGFuZ2VUaW1lIH0gZnJvbSAnLi90aW1lcGlja2VyLnV0aWxzJztcbmltcG9ydCB7XG4gIFRpbWVDaGFuZ2VFdmVudCxcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICBUaW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VWYWx1ZShcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgZXZlbnQ/OiBUaW1lQ2hhbmdlRXZlbnRcbik6IGJvb2xlYW4ge1xuICBpZiAoc3RhdGUucmVhZG9ubHlJbnB1dCB8fCBzdGF0ZS5kaXNhYmxlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChldmVudCkge1xuICAgIGlmIChldmVudC5zb3VyY2UgPT09ICd3aGVlbCcgJiYgIXN0YXRlLm1vdXNld2hlZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuc291cmNlID09PSAna2V5JyAmJiAhc3RhdGUuYXJyb3drZXlzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VIb3VycyhcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xuKTogYm9vbGVhbiB7XG4gIGlmICghZXZlbnQuc3RlcCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50SG91cnMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudEhvdXJzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VNaW51dGVzKFxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXG4pOiBib29sZWFuIHtcbiAgaWYgKCFldmVudC5zdGVwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50TWludXRlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudE1pbnV0ZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZVNlY29uZHMoXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcbik6IGJvb2xlYW4ge1xuICBpZiAoIWV2ZW50LnN0ZXApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGV2ZW50LnN0ZXAgPiAwICYmICFjb250cm9scy5jYW5JbmNyZW1lbnRTZWNvbmRzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwIDwgMCAmJiAhY29udHJvbHMuY2FuRGVjcmVtZW50U2Vjb25kcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbHNWYWx1ZShcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZVxuKTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlIHtcbiAgY29uc3Qge1xuICAgIGhvdXJTdGVwLFxuICAgIG1pbnV0ZVN0ZXAsXG4gICAgc2Vjb25kc1N0ZXAsXG4gICAgcmVhZG9ubHlJbnB1dCxcbiAgICBkaXNhYmxlZCxcbiAgICBtb3VzZXdoZWVsLFxuICAgIGFycm93a2V5cyxcbiAgICBzaG93U3Bpbm5lcnMsXG4gICAgc2hvd01lcmlkaWFuLFxuICAgIHNob3dTZWNvbmRzLFxuICAgIG1lcmlkaWFucyxcbiAgICBtaW4sXG4gICAgbWF4XG4gIH0gPSBzdGF0ZTtcblxuICByZXR1cm4ge1xuICAgIGhvdXJTdGVwLFxuICAgIG1pbnV0ZVN0ZXAsXG4gICAgc2Vjb25kc1N0ZXAsXG4gICAgcmVhZG9ubHlJbnB1dCxcbiAgICBkaXNhYmxlZCxcbiAgICBtb3VzZXdoZWVsLFxuICAgIGFycm93a2V5cyxcbiAgICBzaG93U3Bpbm5lcnMsXG4gICAgc2hvd01lcmlkaWFuLFxuICAgIHNob3dTZWNvbmRzLFxuICAgIG1lcmlkaWFucyxcbiAgICBtaW4sXG4gICAgbWF4XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcGlja2VyQ29udHJvbHMoXG4gIHZhbHVlOiBEYXRlLFxuICBzdGF0ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlXG4pOiBUaW1lcGlja2VyQ29udHJvbHMge1xuICBjb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgY29uc3QgeyBtaW4sIG1heCwgaG91clN0ZXAsIG1pbnV0ZVN0ZXAsIHNlY29uZHNTdGVwLCBzaG93U2Vjb25kcyB9ID0gc3RhdGU7XG4gIGNvbnN0IHJlczogVGltZXBpY2tlckNvbnRyb2xzID0ge1xuICAgIGNhbkluY3JlbWVudEhvdXJzOiB0cnVlLFxuICAgIGNhbkluY3JlbWVudE1pbnV0ZXM6IHRydWUsXG4gICAgY2FuSW5jcmVtZW50U2Vjb25kczogdHJ1ZSxcblxuICAgIGNhbkRlY3JlbWVudEhvdXJzOiB0cnVlLFxuICAgIGNhbkRlY3JlbWVudE1pbnV0ZXM6IHRydWUsXG4gICAgY2FuRGVjcmVtZW50U2Vjb25kczogdHJ1ZSxcblxuICAgIGNhblRvZ2dsZU1lcmlkaWFuOiB0cnVlXG4gIH07XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBjb21wYXJlIGRhdGVzXG4gIGlmIChtYXgpIHtcbiAgICBjb25zdCBfbmV3SG91ciA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogaG91clN0ZXAgfSk7XG4gICAgcmVzLmNhbkluY3JlbWVudEhvdXJzID0gbWF4ID4gX25ld0hvdXI7XG5cbiAgICBpZiAoIXJlcy5jYW5JbmNyZW1lbnRIb3Vycykge1xuICAgICAgY29uc3QgX25ld01pbnV0ZXMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IG1pbnV0ZTogbWludXRlU3RlcCB9KTtcbiAgICAgIHJlcy5jYW5JbmNyZW1lbnRNaW51dGVzID0gc2hvd1NlY29uZHNcbiAgICAgICAgPyBtYXggPiBfbmV3TWludXRlc1xuICAgICAgICA6IG1heCA+PSBfbmV3TWludXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5jYW5JbmNyZW1lbnRNaW51dGVzKSB7XG4gICAgICBjb25zdCBfbmV3U2Vjb25kcyA9IGNoYW5nZVRpbWUodmFsdWUsIHsgc2Vjb25kczogc2Vjb25kc1N0ZXAgfSk7XG4gICAgICByZXMuY2FuSW5jcmVtZW50U2Vjb25kcyA9IG1heCA+PSBfbmV3U2Vjb25kcztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuZ2V0SG91cnMoKSA8IGhvdXJzUGVyRGF5SGFsZikge1xuICAgICAgcmVzLmNhblRvZ2dsZU1lcmlkaWFuID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiBob3Vyc1BlckRheUhhbGYgfSkgPCBtYXg7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1pbikge1xuICAgIGNvbnN0IF9uZXdIb3VyID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiAtaG91clN0ZXAgfSk7XG4gICAgcmVzLmNhbkRlY3JlbWVudEhvdXJzID0gbWluIDwgX25ld0hvdXI7XG5cbiAgICBpZiAoIXJlcy5jYW5EZWNyZW1lbnRIb3Vycykge1xuICAgICAgY29uc3QgX25ld01pbnV0ZXMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IG1pbnV0ZTogLW1pbnV0ZVN0ZXAgfSk7XG4gICAgICByZXMuY2FuRGVjcmVtZW50TWludXRlcyA9IHNob3dTZWNvbmRzXG4gICAgICAgID8gbWluIDwgX25ld01pbnV0ZXNcbiAgICAgICAgOiBtaW4gPD0gX25ld01pbnV0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMuY2FuRGVjcmVtZW50TWludXRlcykge1xuICAgICAgY29uc3QgX25ld1NlY29uZHMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IHNlY29uZHM6IC1zZWNvbmRzU3RlcCB9KTtcbiAgICAgIHJlcy5jYW5EZWNyZW1lbnRTZWNvbmRzID0gbWluIDw9IF9uZXdTZWNvbmRzO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5nZXRIb3VycygpID49IGhvdXJzUGVyRGF5SGFsZikge1xuICAgICAgcmVzLmNhblRvZ2dsZU1lcmlkaWFuID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiAtaG91cnNQZXJEYXlIYWxmIH0pID4gbWluO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBQcm92aWRlcyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciB0aW1lcGlja2VyICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbmZpZyB7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBob3VyU3RlcCA9IDE7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBtaW51dGVTdGVwID0gNTtcbiAgLyoqIHNlY29uZHMgY2hhbmdlcyBzdGVwICovXG4gIHNlY29uZHNTdGVwID0gMTA7XG4gIC8qKiBpZiB0cnVlIHdvcmtzIGluIDEySCBtb2RlIGFuZCBkaXNwbGF5cyBBTS9QTS4gSWYgZmFsc2Ugd29ya3MgaW4gMjRIIG1vZGUgYW5kIGhpZGVzIEFNL1BNICovXG4gIHNob3dNZXJpZGlhbiA9IHRydWU7XG4gIC8qKiBtZXJpZGlhbiBsYWJlbHMgYmFzZWQgb24gbG9jYWxlICovXG4gIG1lcmlkaWFucyA9IFsnQU0nLCAnUE0nXTtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgcmVhZG9ubHkgKi9cbiAgcmVhZG9ubHlJbnB1dCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSBob3VycyBhbmQgbWludXRlcyBmaWVsZHMgd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXG4gIG1vdXNld2hlZWwgPSB0cnVlO1xuICAvKiogaWYgdHJ1ZSB0aGUgdmFsdWVzIG9mIGhvdXJzIGFuZCBtaW51dGVzIGNhbiBiZSBjaGFuZ2VkIHVzaW5nIHRoZSB1cC9kb3duIGFycm93IGtleXMgb24gdGhlIGtleWJvYXJkICovXG4gIGFycm93a2V5cyA9IHRydWU7XG4gIC8qKiBpZiB0cnVlIHNwaW5uZXIgYXJyb3dzIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5wdXRzIHdpbGwgYmUgc2hvd24gKi9cbiAgc2hvd1NwaW5uZXJzID0gdHJ1ZTtcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXG4gIHNob3dTZWNvbmRzID0gZmFsc2U7XG4gIC8qKiBzaG93IG1pbnV0ZXMgaW4gdGltZXBpY2tlciAqL1xuICBzaG93TWludXRlcyA9IHRydWU7XG4gIC8qKiBtaW5pbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXG4gIG1pbjogRGF0ZTtcbiAgLyoqIG1heGltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cbiAgbWF4OiBEYXRlO1xufVxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHtcbiAgY2FuQ2hhbmdlSG91cnMsXG4gIGNhbkNoYW5nZU1pbnV0ZXMsXG4gIGNhbkNoYW5nZVNlY29uZHMsXG4gIGNhbkNoYW5nZVZhbHVlLFxuICB0aW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi4vdGltZXBpY2tlci1jb250cm9scy51dGlsJztcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuLi90aW1lcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQge1xuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIFRpbWVwaWNrZXJDb250cm9sc1xufSBmcm9tICcuLi90aW1lcGlja2VyLm1vZGVscyc7XG5pbXBvcnQgeyBjaGFuZ2VUaW1lLCBzZXRUaW1lLCBpc1ZhbGlkTGltaXQgfSBmcm9tICcuLi90aW1lcGlja2VyLnV0aWxzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi90aW1lcGlja2VyLmFjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlclN0YXRlIHtcbiAgdmFsdWU6IERhdGU7XG4gIGNvbmZpZzogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlO1xuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBUaW1lcGlja2VyU3RhdGUgPSB7XG4gIHZhbHVlOiBudWxsLFxuICBjb25maWc6IG5ldyBUaW1lcGlja2VyQ29uZmlnKCksXG4gIGNvbnRyb2xzOiB7XG4gICAgY2FuSW5jcmVtZW50SG91cnM6IHRydWUsXG4gICAgY2FuSW5jcmVtZW50TWludXRlczogdHJ1ZSxcbiAgICBjYW5JbmNyZW1lbnRTZWNvbmRzOiB0cnVlLFxuXG4gICAgY2FuRGVjcmVtZW50SG91cnM6IHRydWUsXG4gICAgY2FuRGVjcmVtZW50TWludXRlczogdHJ1ZSxcbiAgICBjYW5EZWNyZW1lbnRTZWNvbmRzOiB0cnVlLFxuXG4gICAgY2FuVG9nZ2xlTWVyaWRpYW46IHRydWVcbiAgfVxufTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVwaWNrZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5XUklURV9WQUxVRToge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBhY3Rpb24ucGF5bG9hZCB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9IT1VSUzoge1xuICAgICAgaWYgKFxuICAgICAgICAhY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnLCBhY3Rpb24ucGF5bG9hZCkgfHxcbiAgICAgICAgIWNhbkNoYW5nZUhvdXJzKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5jb250cm9scylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gY2hhbmdlVGltZShzdGF0ZS52YWx1ZSwgeyBob3VyOiBhY3Rpb24ucGF5bG9hZC5zdGVwIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9NSU5VVEVTOiB7XG4gICAgICBpZiAoXG4gICAgICAgICFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcsIGFjdGlvbi5wYXlsb2FkKSB8fFxuICAgICAgICAhY2FuQ2hhbmdlTWludXRlcyhhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY29udHJvbHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbmV3VGltZSA9IGNoYW5nZVRpbWUoc3RhdGUudmFsdWUsIHsgbWludXRlOiBhY3Rpb24ucGF5bG9hZC5zdGVwIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfU0VDT05EUzoge1xuICAgICAgaWYgKFxuICAgICAgICAhY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnLCBhY3Rpb24ucGF5bG9hZCkgfHxcbiAgICAgICAgIWNhbkNoYW5nZVNlY29uZHMoYWN0aW9uLnBheWxvYWQsIHN0YXRlLmNvbnRyb2xzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX25ld1RpbWUgPSBjaGFuZ2VUaW1lKHN0YXRlLnZhbHVlLCB7XG4gICAgICAgIHNlY29uZHM6IGFjdGlvbi5wYXlsb2FkLnN0ZXBcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5TRVRfVElNRV9VTklUOiB7XG4gICAgICBpZiAoIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbmV3VGltZSA9IHNldFRpbWUoc3RhdGUudmFsdWUsIGFjdGlvbi5wYXlsb2FkKTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLlVQREFURV9DT05UUk9MUzoge1xuICAgICAgY29uc3QgX25ld0NvbnRyb2xzU3RhdGUgPSB0aW1lcGlja2VyQ29udHJvbHMoc3RhdGUudmFsdWUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGNvbnN0IF9uZXdTdGF0ZTogVGltZXBpY2tlclN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUsXG4gICAgICAgIGNvbmZpZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGNvbnRyb2xzOiBfbmV3Q29udHJvbHNTdGF0ZVxuICAgICAgfTtcblxuICAgICAgaWYgKHN0YXRlLmNvbmZpZy5zaG93TWVyaWRpYW4gIT09IF9uZXdTdGF0ZS5jb25maWcuc2hvd01lcmlkaWFuKSB7XG4gICAgICAgIGlmIChzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgIF9uZXdTdGF0ZS52YWx1ZSA9IG5ldyBEYXRlKHN0YXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIF9uZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgdGltZXBpY2tlclJlZHVjZXIsXG4gIFRpbWVwaWNrZXJTdGF0ZSxcbiAgaW5pdGlhbFN0YXRlXG59IGZyb20gJy4vdGltZXBpY2tlci5yZWR1Y2VyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBY3Rpb24sIE1pbmlTdG9yZSwgTWluaVN0YXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlclN0b3JlIGV4dGVuZHMgTWluaVN0b3JlPFRpbWVwaWNrZXJTdGF0ZT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBfZGlzcGF0Y2hlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWN0aW9uPih7XG4gICAgICB0eXBlOiAnW21pbmktbmdyeF0gZGlzcGF0Y2hlciBpbml0J1xuICAgIH0pO1xuICAgIGNvbnN0IHN0YXRlID0gbmV3IE1pbmlTdGF0ZTxUaW1lcGlja2VyU3RhdGU+KFxuICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgX2Rpc3BhdGNoZXIsXG4gICAgICB0aW1lcGlja2VyUmVkdWNlclxuICAgICk7XG4gICAgc3VwZXIoX2Rpc3BhdGNoZXIsIHRpbWVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOm5vLWZvcndhcmQtcmVmIG1heC1maWxlLWxpbmUtY291bnQgKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUaW1lcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgVGltZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9yZWR1Y2VyL3RpbWVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgZ2V0Q29udHJvbHNWYWx1ZSB9IGZyb20gJy4vdGltZXBpY2tlci1jb250cm9scy51dGlsJztcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29uZmlnJztcblxuaW1wb3J0IHtcbiAgVGltZUNoYW5nZVNvdXJjZSxcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICBUaW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbmltcG9ydCB7XG4gIGlzVmFsaWREYXRlLFxuICBwYWROdW1iZXIsXG4gIHBhcnNlVGltZSxcbiAgaXNJbnB1dFZhbGlkLFxuICBpc0hvdXJJbnB1dFZhbGlkLFxuICBpc01pbnV0ZUlucHV0VmFsaWQsXG4gIGlzU2Vjb25kSW5wdXRWYWxpZCxcbiAgaXNJbnB1dExpbWl0VmFsaWRcbn0gZnJvbSAnLi90aW1lcGlja2VyLnV0aWxzJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBUSU1FUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yTW9kZWwgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaW1lcGlja2VyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RpbWVwaWNrZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbVElNRVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLCBUaW1lcGlja2VyU3RvcmVdLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuYnMtY2hldnJvbiB7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogOXB4O1xuICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItd2lkdGg6IDNweCAwcHggMCAzcHg7XG4gICAgfVxuXG4gICAgLmJzLWNoZXZyb24tdXAge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0b3A6IDJweDtcbiAgICB9XG5cbiAgICAuYnMtY2hldnJvbi1kb3duIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAgIHRvcDogLTJweDtcbiAgICB9XG5cbiAgICAuYnMtdGltZXBpY2tlci1maWVsZCB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG4gIGBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gICAgVGltZXBpY2tlckNvbnRyb2xzLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3kge1xuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cbiAgQElucHV0KCkgaG91clN0ZXA6IG51bWJlcjtcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXG4gIEBJbnB1dCgpIG1pbnV0ZVN0ZXA6IG51bWJlcjtcbiAgLyoqIHNlY29uZHMgY2hhbmdlIHN0ZXAgKi9cbiAgQElucHV0KCkgc2Vjb25kc1N0ZXA6IG51bWJlcjtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgcmVhZG9ubHkgKi9cbiAgQElucHV0KCkgcmVhZG9ubHlJbnB1dDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHNjcm9sbCBpbnNpZGUgaG91cnMgYW5kIG1pbnV0ZXMgaW5wdXRzIHdpbGwgY2hhbmdlIHRpbWUgKi9cbiAgQElucHV0KCkgbW91c2V3aGVlbDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xuICBASW5wdXQoKSBhcnJvd2tleXM6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHNwaW5uZXIgYXJyb3dzIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5wdXRzIHdpbGwgYmUgc2hvd24gKi9cbiAgQElucHV0KCkgc2hvd1NwaW5uZXJzOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBtZXJpZGlhbiBidXR0b24gd2lsbCBiZSBzaG93biAqL1xuICBASW5wdXQoKSBzaG93TWVyaWRpYW46IGJvb2xlYW47XG4gIC8qKiBzaG93IG1pbnV0ZXMgaW4gdGltZXBpY2tlciAqL1xuICBASW5wdXQoKSBzaG93TWludXRlczogYm9vbGVhbjtcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXG4gIEBJbnB1dCgpIHNob3dTZWNvbmRzOiBib29sZWFuO1xuICAvKiogbWVyaWRpYW4gbGFiZWxzIGJhc2VkIG9uIGxvY2FsZSAqL1xuICBASW5wdXQoKSBtZXJpZGlhbnM6IHN0cmluZ1tdO1xuICAvKiogbWluaW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xuICBASW5wdXQoKSBtaW46IERhdGU7XG4gIC8qKiBtYXhpbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXG4gIEBJbnB1dCgpIG1heDogRGF0ZTtcblxuICAvKiogZW1pdHMgdHJ1ZSBpZiB2YWx1ZSBpcyBhIHZhbGlkIGRhdGUgKi9cbiAgQE91dHB1dCgpIGlzVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLy8gdWkgdmFyaWFibGVzXG4gIGhvdXJzOiBzdHJpbmc7XG4gIG1pbnV0ZXM6IHN0cmluZztcbiAgc2Vjb25kczogc3RyaW5nO1xuICBtZXJpZGlhbjogc3RyaW5nO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRWRpdGFibGVgIGluc3RlYWQgKi9cbiAgZ2V0IGlzU3Bpbm5lcnNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dTcGlubmVycyAmJiAhdGhpcy5yZWFkb25seUlucHV0O1xuICB9XG5cbiAgZ2V0IGlzRWRpdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5yZWFkb25seUlucHV0IHx8IHRoaXMuZGlzYWJsZWQpO1xuICB9XG5cbiAgLy8gbWluXFxtYXggdmFsaWRhdGlvbiBmb3IgaW5wdXQgZmllbGRzXG4gIGludmFsaWRIb3VycyA9IGZhbHNlO1xuICBpbnZhbGlkTWludXRlcyA9IGZhbHNlO1xuICBpbnZhbGlkU2Vjb25kcyA9IGZhbHNlO1xuXG4gIC8vIHRpbWUgcGlja2VyIGNvbnRyb2xzIHN0YXRlXG4gIGNhbkluY3JlbWVudEhvdXJzOiBib29sZWFuO1xuICBjYW5JbmNyZW1lbnRNaW51dGVzOiBib29sZWFuO1xuICBjYW5JbmNyZW1lbnRTZWNvbmRzOiBib29sZWFuO1xuXG4gIGNhbkRlY3JlbWVudEhvdXJzOiBib29sZWFuO1xuICBjYW5EZWNyZW1lbnRNaW51dGVzOiBib29sZWFuO1xuICBjYW5EZWNyZW1lbnRTZWNvbmRzOiBib29sZWFuO1xuXG4gIGNhblRvZ2dsZU1lcmlkaWFuOiBib29sZWFuO1xuXG4gIC8vIGNvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICB0aW1lcGlja2VyU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2NvbmZpZzogVGltZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFRpbWVwaWNrZXJTdG9yZSxcbiAgICBwcml2YXRlIF90aW1lcGlja2VyQWN0aW9uczogVGltZXBpY2tlckFjdGlvbnNcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcblxuICAgIHRoaXMudGltZXBpY2tlclN1YiA9IF9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSBVSSB2YWx1ZXMgaWYgZGF0ZSBjaGFuZ2VkXG4gICAgICAgIHRoaXMuX3JlbmRlclRpbWUodmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy51cGRhdGVDb250cm9scyhnZXRDb250cm9sc1ZhbHVlKHRoaXMpKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICBfc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuY29udHJvbHMpXG4gICAgICAuc3Vic2NyaWJlKChjb250cm9sc1N0YXRlOiBUaW1lcGlja2VyQ29udHJvbHMpID0+IHtcbiAgICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoaXNJbnB1dFZhbGlkKHRoaXMuaG91cnMsIHRoaXMubWludXRlcywgdGhpcy5zZWNvbmRzLCB0aGlzLmlzUE0oKSkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbnRyb2xzU3RhdGUpO1xuICAgICAgICBfY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmludmFsaWRIb3VycyA9IGZhbHNlO1xuICAgIHRoaXMuaW52YWxpZE1pbnV0ZXMgPSBmYWxzZTtcbiAgICB0aGlzLmludmFsaWRTZWNvbmRzID0gZmFsc2U7XG4gIH1cblxuICBpc1BNKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dNZXJpZGlhbiAmJiB0aGlzLm1lcmlkaWFuID09PSB0aGlzLm1lcmlkaWFuc1sxXTtcbiAgfVxuXG4gIHByZXZEZWYoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgd2hlZWxTaWduKCRldmVudDogV2hlZWxFdmVudEluaXQpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNpZ24oJGV2ZW50LmRlbHRhWSkgKiAtMTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnVwZGF0ZUNvbnRyb2xzKGdldENvbnRyb2xzVmFsdWUodGhpcykpXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZUhvdXJzKHN0ZXA6IG51bWJlciwgc291cmNlOiBUaW1lQ2hhbmdlU291cmNlID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHsgc3RlcCwgc291cmNlIH0pKTtcbiAgfVxuXG4gIGNoYW5nZU1pbnV0ZXMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VNaW51dGVzKHsgc3RlcCwgc291cmNlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZVNlY29uZHMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VTZWNvbmRzKHsgc3RlcCwgc291cmNlIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUhvdXJzKGhvdXJzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcblxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc0hvdXJJbnB1dFZhbGlkKHRoaXMuaG91cnMsIHRoaXMuaXNQTSgpKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmludmFsaWRIb3VycyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgdXBkYXRlTWludXRlcyhtaW51dGVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gaXNNaW51dGVJbnB1dFZhbGlkKHRoaXMubWludXRlcykgJiYgdGhpcy5pc1ZhbGlkTGltaXQoKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhpcy5pbnZhbGlkTWludXRlcyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgdXBkYXRlU2Vjb25kcyhzZWNvbmRzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuc2Vjb25kcyA9IHNlY29uZHM7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gaXNTZWNvbmRJbnB1dFZhbGlkKHRoaXMuc2Vjb25kcykgJiYgdGhpcy5pc1ZhbGlkTGltaXQoKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhpcy5pbnZhbGlkU2Vjb25kcyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgaXNWYWxpZExpbWl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0lucHV0TGltaXRWYWxpZCh7XG4gICAgICBob3VyOiB0aGlzLmhvdXJzLFxuICAgICAgbWludXRlOiB0aGlzLm1pbnV0ZXMsXG4gICAgICBzZWNvbmRzOiB0aGlzLnNlY29uZHMsXG4gICAgICBpc1BNOiB0aGlzLmlzUE0oKVxuICAgIH0sIHRoaXMubWF4LCB0aGlzLm1pbik7XG4gIH1cblxuICBfdXBkYXRlVGltZSgpIHtcbiAgICBjb25zdCBfc2Vjb25kcyA9IHRoaXMuc2hvd1NlY29uZHMgPyB0aGlzLnNlY29uZHMgOiB2b2lkIDA7XG4gICAgY29uc3QgX21pbnV0ZXMgPSB0aGlzLnNob3dNaW51dGVzID8gdGhpcy5taW51dGVzIDogdm9pZCAwO1xuICAgIGlmICghaXNJbnB1dFZhbGlkKHRoaXMuaG91cnMsIF9taW51dGVzLCBfc2Vjb25kcywgdGhpcy5pc1BNKCkpKSB7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5zZXRUaW1lKHtcbiAgICAgICAgaG91cjogdGhpcy5ob3VycyxcbiAgICAgICAgbWludXRlOiB0aGlzLm1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHM6IHRoaXMuc2Vjb25kcyxcbiAgICAgICAgaXNQTTogdGhpcy5pc1BNKClcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZU1lcmlkaWFuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zaG93TWVyaWRpYW4gfHwgIXRoaXMuaXNFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF9ob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHtcbiAgICAgICAgc3RlcDogX2hvdXJzUGVyRGF5SGFsZixcbiAgICAgICAgc291cmNlOiAnJ1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IHZhbHVlIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgfCBEYXRlKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWREYXRlKG9iaikpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLndyaXRlVmFsdWUocGFyc2VUaW1lKG9iaikpKTtcbiAgICB9IGVsc2UgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl90aW1lcGlja2VyQWN0aW9ucy53cml0ZVZhbHVlKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIGNoYW5nZSBldmVudC5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHN0YXR1cyBjaGFuZ2VzIHRvIG9yIGZyb20gXCJkaXNhYmxlZFwiLlxuICAgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlLCBpdCB3aWxsIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhcHByb3ByaWF0ZSBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50aW1lcGlja2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJUaW1lKHZhbHVlOiBzdHJpbmcgfCBEYXRlKTogdm9pZCB7XG4gICAgaWYgKCFpc1ZhbGlkRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaG91cnMgPSAnJztcbiAgICAgIHRoaXMubWludXRlcyA9ICcnO1xuICAgICAgdGhpcy5zZWNvbmRzID0gJyc7XG4gICAgICB0aGlzLm1lcmlkaWFuID0gdGhpcy5tZXJpZGlhbnNbMF07XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBfdmFsdWUgPSBwYXJzZVRpbWUodmFsdWUpO1xuICAgIGNvbnN0IF9ob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgICBsZXQgX2hvdXJzID0gX3ZhbHVlLmdldEhvdXJzKCk7XG5cbiAgICBpZiAodGhpcy5zaG93TWVyaWRpYW4pIHtcbiAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLm1lcmlkaWFuc1tfaG91cnMgPj0gX2hvdXJzUGVyRGF5SGFsZiA/IDEgOiAwXTtcbiAgICAgIF9ob3VycyA9IF9ob3VycyAlIF9ob3Vyc1BlckRheUhhbGY7XG4gICAgICAvLyBzaG91bGQgYmUgMTIgUE0sIG5vdCAwMCBQTVxuICAgICAgaWYgKF9ob3VycyA9PT0gMCkge1xuICAgICAgICBfaG91cnMgPSBfaG91cnNQZXJEYXlIYWxmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG91cnMgPSBwYWROdW1iZXIoX2hvdXJzKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBwYWROdW1iZXIoX3ZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gICAgdGhpcy5zZWNvbmRzID0gcGFkTnVtYmVyKF92YWx1ZS5nZXRVVENTZWNvbmRzKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGltZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvdGltZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IFRpbWVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLnN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RpbWVwaWNrZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGltZXBpY2tlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGltZXBpY2tlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RpbWVwaWNrZXJDb25maWcsIFRpbWVwaWNrZXJBY3Rpb25zLCBUaW1lcGlja2VyU3RvcmVdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0lBaUJFLHNDQUFVOzs7O0lBQVYsVUFBVyxLQUFvQjtRQUM3QixP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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js ***!
  \***************************************************************************/
/*! exports provided: TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
    TooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return TooltipConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap["in"] = true;
        if (this.animation) {
            this.classMap["fade"] = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        '[class.bs3]': 'isBs3',
                        '[attr.id]': 'this.id',
                        role: 'tooltip'
                    },
                    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
                    styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig, },
    ]; };
    return TooltipContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ id = 0;
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * @deprecated - removed, will be added to configuration
         */
        this.tooltipAnimation = true;
        /**
         * @deprecated
         */
        this.tooltipFadeDuration = 150;
        this.ariaDescribedby = "tooltip-" + this.tooltipId;
        /**
         * @deprecated
         */
        this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        function () {
            return this._tooltip.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        set: /**
         * @deprecated - please use `tooltip` instead
         * @param {?} value
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        set: /**
         * @deprecated - please use `placement` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        set: /**
         * @deprecated - please use `isOpen` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: /**
         * @return {?}
         */
        function () {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        set: /**
         * @deprecated - please use `isDisabled` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = !value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: /**
         * @return {?}
         */
        function () {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        set: /**
         * @deprecated - please use `container="body"` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        set: /**
         * @deprecated - will replaced with customClass
         * @param {?} value
         * @return {?}
         */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        set: /**
         * @deprecated - removed
         * @param {?} value
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        get: /**
         * @deprecated -  please use `triggers` instead
         * @return {?}
         */
        function () {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        var /** @type {?} */ showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(TooltipContainerComponent)
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass,
                id: _this.ariaDescribedby
            });
        };
        var /** @type {?} */ cancelDelayedTooltipShowing = function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            var /** @type {?} */ _timer_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var /** @type {?} */ triggers = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"])(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                    _timer_1.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap["in"] = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.tooltipFadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], },
        { type: TooltipConfig, },
    ]; };
    TooltipDirective.propDecorators = {
        "tooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "tooltipChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "containerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "delay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "htmlContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipHtml',] },],
        "_placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPlacement',] },],
        "_isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipIsOpen',] },],
        "_enable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipEnable',] },],
        "_appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAppendToBody',] },],
        "tooltipAnimation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "_popupClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipClass',] },],
        "_tooltipContext": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipContext',] },],
        "_tooltipPopupDelay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPopupDelay',] },],
        "tooltipFadeDuration": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "_tooltipTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipTrigger',] },],
        "ariaDescribedby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-describedby',] },],
        "tooltipStateChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @return {?}
     */
    TooltipModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]]
        };
    };
    TooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [TooltipDirective, TooltipContainerComponent],
                    exports: [TooltipDirective],
                    entryComponents: [TooltipContainerComponent]
                },] }
    ];
    return TooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10b29sdGlwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvdG9vbHRpcC90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0b29sdGlwICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbmZpZyB7XG4gIC8qKiB0b29sdGlwIHBsYWNlbWVudCwgc3VwcG9ydGVkIHBvc2l0aW9uczogJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcgKi9cbiAgcGxhY2VtZW50ID0gJ3RvcCc7XG4gIC8qKiBhcnJheSBvZiBldmVudCBuYW1lcyB3aGljaCB0cmlnZ2VycyB0b29sdGlwIG9wZW5pbmcgKi9cbiAgdHJpZ2dlcnMgPSAnaG92ZXIgZm9jdXMnO1xuICAvKiogYSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIgKi9cbiAgY29udGFpbmVyOiBzdHJpbmc7XG4gIC8qKiBkZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcCAqL1xuICBkZWxheSA9IDA7XG59XG4iLCJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtdG9vbHRpcC1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6XG4gICAgICAnXCJ0b29sdGlwIGluIHRvb2x0aXAtXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIFwiYnMtdG9vbHRpcC1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBjb250YWluZXJDbGFzcycsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchaXNCczMnLFxuICAgICdbY2xhc3MuYnMzXSc6ICdpc0JzMycsXG4gICAgJ1thdHRyLmlkXSc6ICd0aGlzLmlkJyxcbiAgICByb2xlOiAndG9vbHRpcCdcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0LnRvb2x0aXAge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgOmhvc3QuYnMzLnRvb2x0aXAudG9wPi5hcnJvdyB7XG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLnRvb2x0aXAuYm90dG9tIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLmJzLXRvb2x0aXAtbGVmdCwgOmhvc3QuYnMzLmJzLXRvb2x0aXAtcmlnaHR7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLmJzLXRvb2x0aXAtcmlnaHQgLmFycm93LCA6aG9zdC5iczMuYnMtdG9vbHRpcC1sZWZ0IC5hcnJvdyB7XG4gICAgICBtYXJnaW46IC4zcmVtIDA7XG4gICAgfVxuICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3cgYXJyb3dcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY2xhc3NNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xuICBwbGFjZW1lbnQ6IHN0cmluZztcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogVG9vbHRpcENvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0geyBpbjogZmFsc2UsIGZhZGU6IGZhbHNlIH07XG4gICAgdGhpcy5jbGFzc01hcFt0aGlzLnBsYWNlbWVudF0gPSB0cnVlO1xuICAgIHRoaXMuY2xhc3NNYXBbYHRvb2x0aXAtJHt0aGlzLnBsYWNlbWVudH1gXSA9IHRydWU7XG5cbiAgICB0aGlzLmNsYXNzTWFwLmluID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAuZmFkZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5jb250YWluZXJDbGFzc10gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGU6IG1heC1maWxlLWxpbmUtY291bnQgZGVwcmVjYXRpb24gKi9cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IE9uQ2hhbmdlLCB3YXJuT25jZSwgcGFyc2VUcmlnZ2VycyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcblxubGV0IGlkID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Rvb2x0aXBdLCBbdG9vbHRpcEh0bWxdJyxcbiAgZXhwb3J0QXM6ICdicy10b29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0b29sdGlwSWQgPSBpZCsrO1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cbiAgICovXG4gIEBPbkNoYW5nZSgpXG4gIEBJbnB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIEZpcmVkIHdoZW4gdG9vbHRpcCBjb250ZW50IGNoYW5nZXMgKi9cbiAgQE91dHB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdG9vbHRpcENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSB0b29sdGlwLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciB0b29sdGlwIGNvbnRhaW5lclxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRvb2x0aXAgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBkaXNhYmxlIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlbGF5IGJlZm9yZSBzaG93aW5nIHRoZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBkZWxheTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIHNob3duXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgdG9vbHRpcGAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBIdG1sJylcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgaHRtbENvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEh0bWwgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQnKTtcbiAgICB0aGlzLnRvb2x0aXAgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHBsYWNlbWVudGAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBQbGFjZW1lbnQnKVxuICBzZXQgX3BsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBQbGFjZW1lbnQgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHBsYWNlbWVudGAgaW5zdGVhZCcpO1xuICAgIHRoaXMucGxhY2VtZW50ID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwSXNPcGVuJylcbiAgc2V0IF9pc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBfaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwSXNPcGVuIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQnKTtcblxuICAgIHJldHVybiB0aGlzLmlzT3BlbjtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwRW5hYmxlJylcbiAgc2V0IF9lbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9ICF2YWx1ZTtcbiAgfVxuXG4gIGdldCBfZW5hYmxlKCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwRW5hYmxlIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcEFwcGVuZFRvQm9keScpXG4gIHNldCBfYXBwZW5kVG9Cb2R5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xuICAgICk7XG4gICAgdGhpcy5jb250YWluZXIgPSB2YWx1ZSA/ICdib2R5JyA6IHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IF9hcHBlbmRUb0JvZHkoKTogYm9vbGVhbiB7XG4gICAgd2Fybk9uY2UoXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgPT09ICdib2R5JztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHJlbW92ZWQsIHdpbGwgYmUgYWRkZWQgdG8gY29uZmlndXJhdGlvbiAqL1xuICBASW5wdXQoKSB0b29sdGlwQW5pbWF0aW9uID0gdHJ1ZTtcblxuICAvKiogQGRlcHJlY2F0ZWQgLSB3aWxsIHJlcGxhY2VkIHdpdGggY3VzdG9tQ2xhc3MgKi9cbiAgQElucHV0KCd0b29sdGlwQ2xhc3MnKVxuICBzZXQgX3BvcHVwQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwQ2xhc3MgZGVwcmVjYXRlZCcpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBDb250ZXh0JylcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgX3Rvb2x0aXBDb250ZXh0KHZhbHVlOiBhbnkpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcENvbnRleHQgZGVwcmVjYXRlZCcpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgndG9vbHRpcFBvcHVwRGVsYXknKVxuICBzZXQgX3Rvb2x0aXBQb3B1cERlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFBvcHVwRGVsYXkgaXMgZGVwcmVjYXRlZCwgdXNlIGBkZWxheWAgaW5zdGVhZCcpO1xuICAgIHRoaXMuZGVsYXkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoKSB0b29sdGlwRmFkZUR1cmF0aW9uID0gMTUwO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtICBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBUcmlnZ2VyJylcbiAgZ2V0IF90b29sdGlwVHJpZ2dlcigpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBUcmlnZ2VyIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCcpO1xuXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlcnM7XG4gIH1cblxuICBzZXQgX3Rvb2x0aXBUcmlnZ2VyKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcbiAgICB0aGlzLnRyaWdnZXJzID0gKHZhbHVlIHx8ICcnKS50b1N0cmluZygpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnkgPSBgdG9vbHRpcC0ke3RoaXMudG9vbHRpcElkfWA7XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBPdXRwdXQoKVxuICB0b29sdGlwU3RhdGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHJvdGVjdGVkIF9kZWxheVRpbWVvdXRJZDogbnVtYmVyIHwgYW55O1xuICBwcm90ZWN0ZWQgX3Rvb2x0aXBDYW5jZWxTaG93Rm46IEZ1bmN0aW9uO1xuXG4gIHByaXZhdGUgX3Rvb2x0aXA6IENvbXBvbmVudExvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgY29uc3RydWN0b3IoXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBjb25maWc6IFRvb2x0aXBDb25maWdcbiAgKSB7XG5cbiAgICB0aGlzLl90b29sdGlwID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgdGhpcy5fcmVuZGVyZXJcbiAgICAgIClcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBUb29sdGlwQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fdG9vbHRpcC5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl90b29sdGlwLm9uSGlkZGVuO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fdG9vbHRpcC5saXN0ZW4oe1xuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxuICAgIH0pO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgICB0aGlzLnRvb2x0aXBDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudMOiwoDCmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNPcGVuIHx8XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgfHxcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkIHx8XG4gICAgICAhdGhpcy50b29sdGlwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1Rvb2x0aXAgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Rvb2x0aXBcbiAgICAgICAgLmF0dGFjaChUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxuICAgICAgICAuc2hvdyh7XG4gICAgICAgICAgY29udGVudDogdGhpcy50b29sdGlwLFxuICAgICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M6IHRoaXMuY29udGFpbmVyQ2xhc3MsXG4gICAgICAgICAgaWQ6IHRoaXMuYXJpYURlc2NyaWJlZGJ5XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4pIHtcbiAgICAgICAgdGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5kZWxheSkge1xuICAgICAgY29uc3QgX3RpbWVyID0gdGltZXIodGhpcy5kZWxheSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMudHJpZ2dlcnMpIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRoaXMudHJpZ2dlcnMpO1xuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJpZ2dlcnNbMF0uY2xvc2UsICgpID0+IHtcbiAgICAgICAgICBfdGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXlUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90b29sdGlwLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmNsYXNzTWFwLmluID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICB9LCB0aGlzLnRvb2x0aXBGYWRlRHVyYXRpb24pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fdG9vbHRpcC5kaXNwb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuY29uZmlnJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUb29sdGlwRGlyZWN0aXZlLCBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Rvb2x0aXBEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb29sdGlwTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbVG9vbHRpcENvbmZpZywgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgUG9zaXRpb25pbmdTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7eUJBTWMsS0FBSzs7Ozt3QkFFTixhQUFhOzs7O3FCQUloQixDQUFDOzs7Z0JBVFYsVUFBVTs7d0JBSFg7Ozs7Ozs7QUNBQTtJQXdERSxtQ0FBWSxNQUFxQjtRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3QjtJQU5ELHNCQUFJLDRDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLEtBQUssRUFBRSxDQUFDO1NBQ2hCOzs7T0FBQTs7OztJQU1ELG1EQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxT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

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js ***!
  \*******************************************************************************/
/*! exports provided: latinMap, TypeaheadOptions, TypeaheadMatch, escapeRegexp, getValueFromObject, tokenize, latinize, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadModule, TypeaheadConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinMap", function() { return latinMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return TypeaheadOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return TypeaheadMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegexp", function() { return escapeRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromObject", function() { return getValueFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinize", function() { return latinize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return TypeaheadContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return TypeaheadDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return TypeaheadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadConfig", function() { return TypeaheadConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable */
var /** @type {?} */ latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TypeaheadOptions = /** @class */ (function () {
    function TypeaheadOptions(options) {
        Object.assign(this, options);
    }
    return TypeaheadOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TypeaheadMatch = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) { value = item; }
        if (header === void 0) { header = false; }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    /**
     * @return {?}
     */
    TypeaheadMatch.prototype.isHeader = /**
     * @return {?}
     */
    function () {
        return this.header;
    };
    /**
     * @return {?}
     */
    TypeaheadMatch.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    return TypeaheadMatch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return latinMap[a] || a;
    });
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */
function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @return {?}
 */
function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    var /** @type {?} */ regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    var /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
    var /** @type {?} */ result = [];
    var /** @type {?} */ preTokenizedLength = preTokenized.length;
    var /** @type {?} */ token;
    var /** @type {?} */ replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */
function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        var /** @type {?} */ functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    var /** @type {?} */ properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    var /** @type {?} */ propertiesArray = properties.split('.');
    try {
        for (var propertiesArray_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
            var property = propertiesArray_1_1.value;
            if (property in object) {
                // tslint:disable-next-line
                object = object[property];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return)) _a.call(propertiesArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!object) {
        return '';
    }
    return object.toString();
    var e_1, _a;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TypeaheadContainerComponent = /** @class */ (function () {
    function TypeaheadContainerComponent(element, renderer) {
        this.renderer = renderer;
        this.isFocused = false;
        this._matches = [];
        this.isScrolledIntoView = function (elem) {
            var /** @type {?} */ containerViewTop = this.ulElement.nativeElement.scrollTop;
            var /** @type {?} */ containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            var /** @type {?} */ elemTop = elem.offsetTop;
            var /** @type {?} */ elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._matches;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._matches = value;
            this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
            if (this.typeaheadScrollable) {
                setTimeout(function () {
                    _this.setScrollableMode();
                });
            }
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadScrollable : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectActiveMatch = /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    function (isActiveItemChanged) {
        if (this._active && this.parent.typeaheadSelectFirstItem) {
            this.selectMatch(this._active);
        }
        if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
            this.selectMatch(this._active);
        }
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.prevActiveMatch = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.nextActiveMatch = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectActive = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isFocused = true;
        this._active = value;
    };
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.highlight = /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    function (match, query) {
        var /** @type {?} */ itemStr = match.value;
        var /** @type {?} */ itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        var /** @type {?} */ startIdx;
        var /** @type {?} */ tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var /** @type {?} */ queryLen = query.length;
            for (var /** @type {?} */ i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                            ("" + itemStr.substring(startIdx + tokenLen));
                    itemStrHelper =
                        itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                            ("" + itemStrHelper.substring(startIdx + tokenLen));
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                        ("" + itemStr.substring(startIdx + tokenLen));
            }
        }
        return itemStr;
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.focusLost = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.isActive = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._active === value;
    };
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectMatch = /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () { return _this.parent.typeaheadOnSelect.emit(value); }, 0);
        return false;
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.setScrollableMode = /**
     * @return {?}
     */
    function () {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            var /** @type {?} */ ulStyles = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getStyles(this.ulElement.nativeElement);
            var /** @type {?} */ liStyles = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getStyles(this.liElements.first.nativeElement);
            var /** @type {?} */ ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                .replace('px', ''));
            var /** @type {?} */ ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                .replace('px', ''));
            var /** @type {?} */ optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                .replace('px', ''));
            var /** @type {?} */ height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollPrevious = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            var /** @type {?} */ liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollNext = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            var /** @type {?} */ liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        Number(this.ulElement.nativeElement.offsetHeight) +
                        Number(liElement.nativeElement.offsetHeight);
            }
        }
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollToTop = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.scrollTop = 0;
    };
    TypeaheadContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                    host: {
                        class: 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        '[style.overflow-y]': "isBs4 && needScrollbar ? 'scroll': 'visible'",
                        '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                        '[style.visibility]': "typeaheadScrollable ? 'hidden' : 'visible'",
                        '[class.dropup]': 'dropup',
                        style: 'position: absolute;display: block;'
                    },
                    styles: ["\n    :host.dropdown {\n      z-index: 1000;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        "ulElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ulElement',] },],
        "liElements": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['liElements',] },],
        "focusLost": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseleave',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values provider for typeahead
 */
var TypeaheadConfig = /** @class */ (function () {
    function TypeaheadConfig() {
        /**
         * used to hide results on blur
         */
        this.hideResultsOnBlur = true;
        /**
         * used to choose the first item in typeahead container
         */
        this.selectFirstItem = true;
        /**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         */
        this.minLength = 1;
    }
    TypeaheadConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return TypeaheadConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TypeaheadDirective = /** @class */ (function () {
    function TypeaheadDirective(ngControl, element, viewContainerRef, renderer, config, cis, changeDetection) {
        this.ngControl = ngControl;
        this.element = element;
        this.renderer = renderer;
        this.changeDetection = changeDetection;
        /**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /**
         * should be used only in case of typeahead attribute is array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /**
         * match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /**
         * specifies if typeahead is scrollable
         */
        this.typeaheadScrollable = false;
        /**
         * specifies number of options to show in scroll view
         */
        this.typeaheadOptionsInScrollableView = 5;
        /**
         * fired when an options list was opened and the user clicked Tab
         * If a value equal true, it will be chosen first or active item in the list
         * If value equal false, it will be chosen an active item in the list or nothing
         */
        this.typeaheadSelectFirstItem = true;
        /**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * fired when blur event occurs. returns the active item
         */
        this.typeaheadOnBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isActiveItemChanged = false;
        this.isTypeaheadOptionsListActive = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
            .provide({ provide: TypeaheadConfig, useValue: config });
        Object.assign(this, { typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
            typeaheadSelectFirstItem: config.selectFirstItem,
            typeaheadMinLength: config.minLength
        });
    }
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["isObservable"])(this.typeahead))) {
            this.typeaheadAsync = false;
        }
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["isObservable"])(this.typeahead)) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    TypeaheadDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        var /** @type {?} */ value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._container) {
            // esc
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 27 || event.key === 'Escape') {
                this.hide();
                return;
            }
            // up
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 38 || event.key === 'ArrowUp') {
                this.isActiveItemChanged = true;
                this._container.prevActiveMatch();
                return;
            }
            // down
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 40 || event.key === 'ArrowDown') {
                this.isActiveItemChanged = true;
                this._container.nextActiveMatch();
                return;
            }
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadDirective.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
            event.preventDefault();
            if (this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch();
                return;
            }
            if (!this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch(this.isActiveItemChanged);
                this.isActiveItemChanged = false;
                this.hide();
            }
        }
    };
    /**
     * @param {?} match
     * @return {?}
     */
    TypeaheadDirective.prototype.changeModel = /**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        var /** @type {?} */ valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', function (e) {
            if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            if (!_this.typeaheadHideResultsOnBlur || _this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            _this.onOutsideClick();
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        var /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onOutsideClick = /**
     * @return {?}
     */
    function () {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            // clean up subscriptions
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._typeahead.dispose();
        var e_1, _c;
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.asyncActions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(this.typeaheadWaitMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return _this.typeahead; }))
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }));
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.syncActions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(this.typeaheadWaitMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (value) {
            var /** @type {?} */ normalizedQuery = _this.normalizeQuery(value);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.typeahead)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (option) {
                return (option &&
                    _this.testMatch(_this.normalizeOption(option), normalizedQuery));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])());
        }))
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }));
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    TypeaheadDirective.prototype.normalizeOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var /** @type {?} */ optionValue = getValueFromObject(option, this.typeaheadOptionField);
        var /** @type {?} */ normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TypeaheadDirective.prototype.normalizeQuery = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    };
    /**
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    TypeaheadDirective.prototype.testMatch = /**
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    function (match, test) {
        var /** @type {?} */ spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var /** @type {?} */ i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    };
    /**
     * @param {?} matches
     * @return {?}
     */
    TypeaheadDirective.prototype.finalizeAsyncCall = /**
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        this.prepareMatches(matches || []);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            var /** @type {?} */ _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            var /** @type {?} */ normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    TypeaheadDirective.prototype.prepareMatches = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        var /** @type {?} */ limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            var /** @type {?} */ matches_1 = [];
            // extract all group names
            var /** @type {?} */ groups = limited
                .map(function (option) {
                return getValueFromObject(option, _this.typeaheadGroupField);
            })
                .filter(function (v, i, a) { return a.indexOf(v) === i; });
            groups.forEach(function (group) {
                // add group header to array of matches
                // add group header to array of matches
                matches_1.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter(
                // tslint:disable-next-line:no-any
                // tslint:disable-next-line:no-any
                function (option) {
                    return getValueFromObject(option, _this.typeaheadGroupField) === group;
                })
                    .map(
                // tslint:disable-next-line:no-any
                // tslint:disable-next-line:no-any
                function (option) {
                    return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                }));
            });
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map(
            // tslint:disable-next-line:no-any
            // tslint:disable-next-line:no-any
            function (option) {
                return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
            });
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.hasMatches = /**
     * @return {?}
     */
    function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
        { type: TypeaheadConfig, },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    ]; };
    TypeaheadDirective.propDecorators = {
        "typeahead": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadMinLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadWaitMs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadOptionsLimit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadOptionField": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadGroupField": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadAsync": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadLatinize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadSingleWords": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadWordDelimiters": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadPhraseDelimiters": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadItemTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "optionsListTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadScrollable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadOptionsInScrollableView": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadHideResultsOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadSelectFirstItem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "typeaheadLoading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "typeaheadNoResults": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "typeaheadOnSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "typeaheadOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "dropup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "onInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input', ['$event'],] },],
        "onChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keyup', ['$event'],] },],
        "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focus',] },],
        "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] },],
        "onKeydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return TypeaheadDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TypeaheadModule = /** @class */ (function () {
    function TypeaheadModule() {
    }
    /**
     * @return {?}
     */
    TypeaheadModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TypeaheadModule,
            providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_8__["PositioningService"], TypeaheadConfig]
        };
    };
    TypeaheadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
                    declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                    exports: [TypeaheadContainerComponent, TypeaheadDirective],
                    entryComponents: [TypeaheadContainerComponent]
                },] }
    ];
    return TypeaheadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10eXBlYWhlYWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL2xhdGluLW1hcC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLW9wdGlvbnMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IGxhdGluTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICfDg8KBJzogJ0EnLFxuICAgICfDhMKCJzogJ0EnLFxuICAgICfDocK6wq4nOiAnQScsXG4gICAgJ8OhwrrCtic6ICdBJyxcbiAgICAnw6HCusKwJzogJ0EnLFxuICAgICfDocK6wrInOiAnQScsXG4gICAgJ8OhwrrCtCc6ICdBJyxcbiAgICAnw4fCjSc6ICdBJyxcbiAgICAnw4PCgic6ICdBJyxcbiAgICAnw6HCusKkJzogJ0EnLFxuICAgICfDocK6wqwnOiAnQScsXG4gICAgJ8OhwrrCpic6ICdBJyxcbiAgICAnw6HCusKoJzogJ0EnLFxuICAgICfDocK6wqonOiAnQScsXG4gICAgJ8ODwoQnOiAnQScsXG4gICAgJ8OHwp4nOiAnQScsXG4gICAgJ8OIwqYnOiAnQScsXG4gICAgJ8OHwqAnOiAnQScsXG4gICAgJ8OhwrrCoCc6ICdBJyxcbiAgICAnw4jCgCc6ICdBJyxcbiAgICAnw4PCgCc6ICdBJyxcbiAgICAnw6HCusKiJzogJ0EnLFxuICAgICfDiMKCJzogJ0EnLFxuICAgICfDhMKAJzogJ0EnLFxuICAgICfDhMKEJzogJ0EnLFxuICAgICfDg8KFJzogJ0EnLFxuICAgICfDh8K6JzogJ0EnLFxuICAgICfDocK4woAnOiAnQScsXG4gICAgJ8OIwronOiAnQScsXG4gICAgJ8ODwoMnOiAnQScsXG4gICAgJ8OqwpzCsic6ICdBQScsXG4gICAgJ8ODwoYnOiAnQUUnLFxuICAgICfDh8K8JzogJ0FFJyxcbiAgICAnw4fCoic6ICdBRScsXG4gICAgJ8OqwpzCtCc6ICdBTycsXG4gICAgJ8OqwpzCtic6ICdBVScsXG4gICAgJ8OqwpzCuCc6ICdBVicsXG4gICAgJ8OqwpzCuic6ICdBVicsXG4gICAgJ8OqwpzCvCc6ICdBWScsXG4gICAgJ8OhwrjCgic6ICdCJyxcbiAgICAnw6HCuMKEJzogJ0InLFxuICAgICfDhsKBJzogJ0InLFxuICAgICfDocK4woYnOiAnQicsXG4gICAgJ8OJwoMnOiAnQicsXG4gICAgJ8OGwoInOiAnQicsXG4gICAgJ8OEwoYnOiAnQycsXG4gICAgJ8OEwownOiAnQycsXG4gICAgJ8ODwocnOiAnQycsXG4gICAgJ8OhwrjCiCc6ICdDJyxcbiAgICAnw4TCiCc6ICdDJyxcbiAgICAnw4TCiic6ICdDJyxcbiAgICAnw4bChyc6ICdDJyxcbiAgICAnw4jCuyc6ICdDJyxcbiAgICAnw4TCjic6ICdEJyxcbiAgICAnw6HCuMKQJzogJ0QnLFxuICAgICfDocK4wpInOiAnRCcsXG4gICAgJ8OhwrjCiic6ICdEJyxcbiAgICAnw6HCuMKMJzogJ0QnLFxuICAgICfDhsKKJzogJ0QnLFxuICAgICfDocK4wo4nOiAnRCcsXG4gICAgJ8OHwrInOiAnRCcsXG4gICAgJ8OHwoUnOiAnRCcsXG4gICAgJ8OEwpAnOiAnRCcsXG4gICAgJ8OGwosnOiAnRCcsXG4gICAgJ8OHwrEnOiAnRFonLFxuICAgICfDh8KEJzogJ0RaJyxcbiAgICAnw4PCiSc6ICdFJyxcbiAgICAnw4TClCc6ICdFJyxcbiAgICAnw4TCmic6ICdFJyxcbiAgICAnw4jCqCc6ICdFJyxcbiAgICAnw6HCuMKcJzogJ0UnLFxuICAgICfDg8KKJzogJ0UnLFxuICAgICfDocK6wr4nOiAnRScsXG4gICAgJ8OhwrvChic6ICdFJyxcbiAgICAnw6HCu8KAJzogJ0UnLFxuICAgICfDocK7woInOiAnRScsXG4gICAgJ8OhwrvChCc6ICdFJyxcbiAgICAnw6HCuMKYJzogJ0UnLFxuICAgICfDg8KLJzogJ0UnLFxuICAgICfDhMKWJzogJ0UnLFxuICAgICfDocK6wrgnOiAnRScsXG4gICAgJ8OIwoQnOiAnRScsXG4gICAgJ8ODwognOiAnRScsXG4gICAgJ8OhwrrCuic6ICdFJyxcbiAgICAnw4jChic6ICdFJyxcbiAgICAnw4TCkic6ICdFJyxcbiAgICAnw6HCuMKWJzogJ0UnLFxuICAgICfDocK4wpQnOiAnRScsXG4gICAgJ8OEwpgnOiAnRScsXG4gICAgJ8OJwoYnOiAnRScsXG4gICAgJ8OhwrrCvCc6ICdFJyxcbiAgICAnw6HCuMKaJzogJ0UnLFxuICAgICfDqsKdwqonOiAnRVQnLFxuICAgICfDocK4wp4nOiAnRicsXG4gICAgJ8OGwpEnOiAnRicsXG4gICAgJ8OHwrQnOiAnRycsXG4gICAgJ8OEwp4nOiAnRycsXG4gICAgJ8OHwqYnOiAnRycsXG4gICAgJ8OEwqInOiAnRycsXG4gICAgJ8OEwpwnOiAnRycsXG4gICAgJ8OEwqAnOiAnRycsXG4gICAgJ8OGwpMnOiAnRycsXG4gICAgJ8OhwrjCoCc6ICdHJyxcbiAgICAnw4fCpCc6ICdHJyxcbiAgICAnw6HCuMKqJzogJ0gnLFxuICAgICfDiMKeJzogJ0gnLFxuICAgICfDocK4wqgnOiAnSCcsXG4gICAgJ8OEwqQnOiAnSCcsXG4gICAgJ8OiwrHCpyc6ICdIJyxcbiAgICAnw6HCuMKmJzogJ0gnLFxuICAgICfDocK4wqInOiAnSCcsXG4gICAgJ8OhwrjCpCc6ICdIJyxcbiAgICAnw4TCpic6ICdIJyxcbiAgICAnw4PCjSc6ICdJJyxcbiAgICAnw4TCrCc6ICdJJyxcbiAgICAnw4fCjyc6ICdJJyxcbiAgICAnw4PCjic6ICdJJyxcbiAgICAnw4PCjyc6ICdJJyxcbiAgICAnw6HCuMKuJzogJ0knLFxuICAgICfDhMKwJzogJ0knLFxuICAgICfDocK7woonOiAnSScsXG4gICAgJ8OIwognOiAnSScsXG4gICAgJ8ODwownOiAnSScsXG4gICAgJ8OhwrvCiCc6ICdJJyxcbiAgICAnw4jCiic6ICdJJyxcbiAgICAnw4TCqic6ICdJJyxcbiAgICAnw4TCric6ICdJJyxcbiAgICAnw4bClyc6ICdJJyxcbiAgICAnw4TCqCc6ICdJJyxcbiAgICAnw6HCuMKsJzogJ0knLFxuICAgICfDqsKdwrknOiAnRCcsXG4gICAgJ8Oqwp3Cuyc6ICdGJyxcbiAgICAnw6rCncK9JzogJ0cnLFxuICAgICfDqsKewoInOiAnUicsXG4gICAgJ8Oqwp7ChCc6ICdTJyxcbiAgICAnw6rCnsKGJzogJ1QnLFxuICAgICfDqsKdwqwnOiAnSVMnLFxuICAgICfDhMK0JzogJ0onLFxuICAgICfDicKIJzogJ0onLFxuICAgICfDocK4wrAnOiAnSycsXG4gICAgJ8OHwqgnOiAnSycsXG4gICAgJ8OEwrYnOiAnSycsXG4gICAgJ8OiwrHCqSc6ICdLJyxcbiAgICAnw6rCncKCJzogJ0snLFxuICAgICfDocK4wrInOiAnSycsXG4gICAgJ8OGwpgnOiAnSycsXG4gICAgJ8OhwrjCtCc6ICdLJyxcbiAgICAnw6rCncKAJzogJ0snLFxuICAgICfDqsKdwoQnOiAnSycsXG4gICAgJ8OEwrknOiAnTCcsXG4gICAgJ8OIwr0nOiAnTCcsXG4gICAgJ8OEwr0nOiAnTCcsXG4gICAgJ8OEwrsnOiAnTCcsXG4gICAgJ8OhwrjCvCc6ICdMJyxcbiAgICAnw6HCuMK2JzogJ0wnLFxuICAgICfDocK4wrgnOiAnTCcsXG4gICAgJ8OiwrHCoCc6ICdMJyxcbiAgICAnw6rCncKIJzogJ0wnLFxuICAgICfDocK4wronOiAnTCcsXG4gICAgJ8OEwr8nOiAnTCcsXG4gICAgJ8OiwrHCoic6ICdMJyxcbiAgICAnw4fCiCc6ICdMJyxcbiAgICAnw4XCgSc6ICdMJyxcbiAgICAnw4fChyc6ICdMSicsXG4gICAgJ8OhwrjCvic6ICdNJyxcbiAgICAnw6HCucKAJzogJ00nLFxuICAgICfDocK5woInOiAnTScsXG4gICAgJ8OiwrHCric6ICdNJyxcbiAgICAnw4XCgyc6ICdOJyxcbiAgICAnw4XChyc6ICdOJyxcbiAgICAnw4XChSc6ICdOJyxcbiAgICAnw6HCucKKJzogJ04nLFxuICAgICfDocK5woQnOiAnTicsXG4gICAgJ8OhwrnChic6ICdOJyxcbiAgICAnw4fCuCc6ICdOJyxcbiAgICAnw4bCnSc6ICdOJyxcbiAgICAnw6HCucKIJzogJ04nLFxuICAgICfDiMKgJzogJ04nLFxuICAgICfDh8KLJzogJ04nLFxuICAgICfDg8KRJzogJ04nLFxuICAgICfDh8KKJzogJ05KJyxcbiAgICAnw4PCkyc6ICdPJyxcbiAgICAnw4XCjic6ICdPJyxcbiAgICAnw4fCkSc6ICdPJyxcbiAgICAnw4PClCc6ICdPJyxcbiAgICAnw6HCu8KQJzogJ08nLFxuICAgICfDocK7wpgnOiAnTycsXG4gICAgJ8OhwrvCkic6ICdPJyxcbiAgICAnw6HCu8KUJzogJ08nLFxuICAgICfDocK7wpYnOiAnTycsXG4gICAgJ8ODwpYnOiAnTycsXG4gICAgJ8OIwqonOiAnTycsXG4gICAgJ8OIwq4nOiAnTycsXG4gICAgJ8OIwrAnOiAnTycsXG4gICAgJ8OhwrvCjCc6ICdPJyxcbiAgICAnw4XCkCc6ICdPJyxcbiAgICAnw4jCjCc6ICdPJyxcbiAgICAnw4PCkic6ICdPJyxcbiAgICAnw6HCu8KOJzogJ08nLFxuICAgICfDhsKgJzogJ08nLFxuICAgICfDocK7wponOiAnTycsXG4gICAgJ8OhwrvCoic6ICdPJyxcbiAgICAnw6HCu8KcJzogJ08nLFxuICAgICfDocK7wp4nOiAnTycsXG4gICAgJ8OhwrvCoCc6ICdPJyxcbiAgICAnw4jCjic6ICdPJyxcbiAgICAnw6rCncKKJzogJ08nLFxuICAgICfDqsKdwownOiAnTycsXG4gICAgJ8OFwownOiAnTycsXG4gICAgJ8OhwrnCkic6ICdPJyxcbiAgICAnw6HCucKQJzogJ08nLFxuICAgICfDhsKfJzogJ08nLFxuICAgICfDh8KqJzogJ08nLFxuICAgICfDh8KsJzogJ08nLFxuICAgICfDg8KYJzogJ08nLFxuICAgICfDh8K+JzogJ08nLFxuICAgICfDg8KVJzogJ08nLFxuICAgICfDocK5wownOiAnTycsXG4gICAgJ8OhwrnCjic6ICdPJyxcbiAgICAnw4jCrCc6ICdPJyxcbiAgICAnw4bCoic6ICdPSScsXG4gICAgJ8Oqwp3Cjic6ICdPTycsXG4gICAgJ8OGwpAnOiAnRScsXG4gICAgJ8OGwoYnOiAnTycsXG4gICAgJ8OIwqInOiAnT1UnLFxuICAgICfDocK5wpQnOiAnUCcsXG4gICAgJ8OhwrnClic6ICdQJyxcbiAgICAnw6rCncKSJzogJ1AnLFxuICAgICfDhsKkJzogJ1AnLFxuICAgICfDqsKdwpQnOiAnUCcsXG4gICAgJ8OiwrHCoyc6ICdQJyxcbiAgICAnw6rCncKQJzogJ1AnLFxuICAgICfDqsKdwpgnOiAnUScsXG4gICAgJ8Oqwp3Clic6ICdRJyxcbiAgICAnw4XClCc6ICdSJyxcbiAgICAnw4XCmCc6ICdSJyxcbiAgICAnw4XClic6ICdSJyxcbiAgICAnw6HCucKYJzogJ1InLFxuICAgICfDocK5wponOiAnUicsXG4gICAgJ8OhwrnCnCc6ICdSJyxcbiAgICAnw4jCkCc6ICdSJyxcbiAgICAnw4jCkic6ICdSJyxcbiAgICAnw6HCucKeJzogJ1InLFxuICAgICfDicKMJzogJ1InLFxuICAgICfDosKxwqQnOiAnUicsXG4gICAgJ8OqwpzCvic6ICdDJyxcbiAgICAnw4bCjic6ICdFJyxcbiAgICAnw4XCmic6ICdTJyxcbiAgICAnw6HCucKkJzogJ1MnLFxuICAgICfDhcKgJzogJ1MnLFxuICAgICfDocK5wqYnOiAnUycsXG4gICAgJ8OFwp4nOiAnUycsXG4gICAgJ8OFwpwnOiAnUycsXG4gICAgJ8OIwpgnOiAnUycsXG4gICAgJ8OhwrnCoCc6ICdTJyxcbiAgICAnw6HCucKiJzogJ1MnLFxuICAgICfDocK5wqgnOiAnUycsXG4gICAgJ8OFwqQnOiAnVCcsXG4gICAgJ8OFwqInOiAnVCcsXG4gICAgJ8OhwrnCsCc6ICdUJyxcbiAgICAnw4jCmic6ICdUJyxcbiAgICAnw4jCvic6ICdUJyxcbiAgICAnw6HCucKqJzogJ1QnLFxuICAgICfDocK5wqwnOiAnVCcsXG4gICAgJ8OGwqwnOiAnVCcsXG4gICAgJ8OhwrnCric6ICdUJyxcbiAgICAnw4bCric6ICdUJyxcbiAgICAnw4XCpic6ICdUJyxcbiAgICAnw6LCscKvJzogJ0EnLFxuICAgICfDqsKewoAnOiAnTCcsXG4gICAgJ8OGwpwnOiAnTScsXG4gICAgJ8OJwoUnOiAnVicsXG4gICAgJ8OqwpzCqCc6ICdUWicsXG4gICAgJ8ODwponOiAnVScsXG4gICAgJ8OFwqwnOiAnVScsXG4gICAgJ8OHwpMnOiAnVScsXG4gICAgJ8ODwpsnOiAnVScsXG4gICAgJ8OhwrnCtic6ICdVJyxcbiAgICAnw4PCnCc6ICdVJyxcbiAgICAnw4fClyc6ICdVJyxcbiAgICAnw4fCmSc6ICdVJyxcbiAgICAnw4fCmyc6ICdVJyxcbiAgICAnw4fClSc6ICdVJyxcbiAgICAnw6HCucKyJzogJ1UnLFxuICAgICfDocK7wqQnOiAnVScsXG4gICAgJ8OFwrAnOiAnVScsXG4gICAgJ8OIwpQnOiAnVScsXG4gICAgJ8ODwpknOiAnVScsXG4gICAgJ8OhwrvCpic6ICdVJyxcbiAgICAnw4bCryc6ICdVJyxcbiAgICAnw6HCu8KoJzogJ1UnLFxuICAgICfDocK7wrAnOiAnVScsXG4gICAgJ8OhwrvCqic6ICdVJyxcbiAgICAnw6HCu8KsJzogJ1UnLFxuICAgICfDocK7wq4nOiAnVScsXG4gICAgJ8OIwpYnOiAnVScsXG4gICAgJ8OFwqonOiAnVScsXG4gICAgJ8OhwrnCuic6ICdVJyxcbiAgICAnw4XCsic6ICdVJyxcbiAgICAnw4XCric6ICdVJyxcbiAgICAnw4XCqCc6ICdVJyxcbiAgICAnw6HCucK4JzogJ1UnLFxuICAgICfDocK5wrQnOiAnVScsXG4gICAgJ8Oqwp3Cnic6ICdWJyxcbiAgICAnw6HCucK+JzogJ1YnLFxuICAgICfDhsKyJzogJ1YnLFxuICAgICfDocK5wrwnOiAnVicsXG4gICAgJ8Oqwp3CoCc6ICdWWScsXG4gICAgJ8OhwrrCgic6ICdXJyxcbiAgICAnw4XCtCc6ICdXJyxcbiAgICAnw6HCusKEJzogJ1cnLFxuICAgICfDocK6woYnOiAnVycsXG4gICAgJ8OhwrrCiCc6ICdXJyxcbiAgICAnw6HCusKAJzogJ1cnLFxuICAgICfDosKxwrInOiAnVycsXG4gICAgJ8OhwrrCjCc6ICdYJyxcbiAgICAnw6HCusKKJzogJ1gnLFxuICAgICfDg8KdJzogJ1knLFxuICAgICfDhcK2JzogJ1knLFxuICAgICfDhcK4JzogJ1knLFxuICAgICfDocK6wo4nOiAnWScsXG4gICAgJ8OhwrvCtCc6ICdZJyxcbiAgICAnw6HCu8KyJzogJ1knLFxuICAgICfDhsKzJzogJ1knLFxuICAgICfDocK7wrYnOiAnWScsXG4gICAgJ8OhwrvCvic6ICdZJyxcbiAgICAnw4jCsic6ICdZJyxcbiAgICAnw4nCjic6ICdZJyxcbiAgICAnw6HCu8K4JzogJ1knLFxuICAgICfDhcK5JzogJ1onLFxuICAgICfDhcK9JzogJ1onLFxuICAgICfDocK6wpAnOiAnWicsXG4gICAgJ8OiwrHCqyc6ICdaJyxcbiAgICAnw4XCuyc6ICdaJyxcbiAgICAnw6HCusKSJzogJ1onLFxuICAgICfDiMKkJzogJ1onLFxuICAgICfDocK6wpQnOiAnWicsXG4gICAgJ8OGwrUnOiAnWicsXG4gICAgJ8OEwrInOiAnSUonLFxuICAgICfDhcKSJzogJ09FJyxcbiAgICAnw6HCtMKAJzogJ0EnLFxuICAgICfDocK0woEnOiAnQUUnLFxuICAgICfDisKZJzogJ0InLFxuICAgICfDocK0woMnOiAnQicsXG4gICAgJ8OhwrTChCc6ICdDJyxcbiAgICAnw6HCtMKFJzogJ0QnLFxuICAgICfDocK0wocnOiAnRScsXG4gICAgJ8OqwpzCsCc6ICdGJyxcbiAgICAnw4nCoic6ICdHJyxcbiAgICAnw4rCmyc6ICdHJyxcbiAgICAnw4rCnCc6ICdIJyxcbiAgICAnw4nCqic6ICdJJyxcbiAgICAnw4rCgSc6ICdSJyxcbiAgICAnw6HCtMKKJzogJ0onLFxuICAgICfDocK0wosnOiAnSycsXG4gICAgJ8OKwp8nOiAnTCcsXG4gICAgJ8OhwrTCjCc6ICdMJyxcbiAgICAnw6HCtMKNJzogJ00nLFxuICAgICfDicK0JzogJ04nLFxuICAgICfDocK0wo8nOiAnTycsXG4gICAgJ8OJwrYnOiAnT0UnLFxuICAgICfDocK0wpAnOiAnTycsXG4gICAgJ8OhwrTClSc6ICdPVScsXG4gICAgJ8OhwrTCmCc6ICdQJyxcbiAgICAnw4rCgCc6ICdSJyxcbiAgICAnw6HCtMKOJzogJ04nLFxuICAgICfDocK0wpknOiAnUicsXG4gICAgJ8OqwpzCsSc6ICdTJyxcbiAgICAnw6HCtMKbJzogJ1QnLFxuICAgICfDosKxwrsnOiAnRScsXG4gICAgJ8OhwrTCmic6ICdSJyxcbiAgICAnw6HCtMKcJzogJ1UnLFxuICAgICfDocK0wqAnOiAnVicsXG4gICAgJ8OhwrTCoSc6ICdXJyxcbiAgICAnw4rCjyc6ICdZJyxcbiAgICAnw6HCtMKiJzogJ1onLFxuICAgICfDg8KhJzogJ2EnLFxuICAgICfDhMKDJzogJ2EnLFxuICAgICfDocK6wq8nOiAnYScsXG4gICAgJ8OhwrrCtyc6ICdhJyxcbiAgICAnw6HCusKxJzogJ2EnLFxuICAgICfDocK6wrMnOiAnYScsXG4gICAgJ8OhwrrCtSc6ICdhJyxcbiAgICAnw4fCjic6ICdhJyxcbiAgICAnw4PCoic6ICdhJyxcbiAgICAnw6HCusKlJzogJ2EnLFxuICAgICfDocK6wq0nOiAnYScsXG4gICAgJ8OhwrrCpyc6ICdhJyxcbiAgICAnw6HCusKpJzogJ2EnLFxuICAgICfDocK6wqsnOiAnYScsXG4gICAgJ8ODwqQnOiAnYScsXG4gICAgJ8OHwp8nOiAnYScsXG4gICAgJ8OIwqcnOiAnYScsXG4gICAgJ8OHwqEnOiAnYScsXG4gICAgJ8OhwrrCoSc6ICdhJyxcbiAgICAnw4jCgSc6ICdhJyxcbiAgICAnw4PCoCc6ICdhJyxcbiAgICAnw6HCusKjJzogJ2EnLFxuICAgICfDiMKDJzogJ2EnLFxuICAgICfDhMKBJzogJ2EnLFxuICAgICfDhMKFJzogJ2EnLFxuICAgICfDocK2wo8nOiAnYScsXG4gICAgJ8OhwrrCmic6ICdhJyxcbiAgICAnw4PCpSc6ICdhJyxcbiAgICAnw4fCuyc6ICdhJyxcbiAgICAnw6HCuMKBJzogJ2EnLFxuICAgICfDosKxwqUnOiAnYScsXG4gICAgJ8ODwqMnOiAnYScsXG4gICAgJ8OqwpzCsyc6ICdhYScsXG4gICAgJ8ODwqYnOiAnYWUnLFxuICAgICfDh8K9JzogJ2FlJyxcbiAgICAnw4fCoyc6ICdhZScsXG4gICAgJ8OqwpzCtSc6ICdhbycsXG4gICAgJ8OqwpzCtyc6ICdhdScsXG4gICAgJ8OqwpzCuSc6ICdhdicsXG4gICAgJ8OqwpzCuyc6ICdhdicsXG4gICAgJ8OqwpzCvSc6ICdheScsXG4gICAgJ8OhwrjCgyc6ICdiJyxcbiAgICAnw6HCuMKFJzogJ2InLFxuICAgICfDicKTJzogJ2InLFxuICAgICfDocK4wocnOiAnYicsXG4gICAgJ8OhwrXCrCc6ICdiJyxcbiAgICAnw6HCtsKAJzogJ2InLFxuICAgICfDhsKAJzogJ2InLFxuICAgICfDhsKDJzogJ2InLFxuICAgICfDicK1JzogJ28nLFxuICAgICfDhMKHJzogJ2MnLFxuICAgICfDhMKNJzogJ2MnLFxuICAgICfDg8KnJzogJ2MnLFxuICAgICfDocK4woknOiAnYycsXG4gICAgJ8OEwoknOiAnYycsXG4gICAgJ8OJwpUnOiAnYycsXG4gICAgJ8OEwosnOiAnYycsXG4gICAgJ8OGwognOiAnYycsXG4gICAgJ8OIwrwnOiAnYycsXG4gICAgJ8OEwo8nOiAnZCcsXG4gICAgJ8OhwrjCkSc6ICdkJyxcbiAgICAnw6HCuMKTJzogJ2QnLFxuICAgICfDiMKhJzogJ2QnLFxuICAgICfDocK4wosnOiAnZCcsXG4gICAgJ8OhwrjCjSc6ICdkJyxcbiAgICAnw4nClyc6ICdkJyxcbiAgICAnw6HCtsKRJzogJ2QnLFxuICAgICfDocK4wo8nOiAnZCcsXG4gICAgJ8OhwrXCrSc6ICdkJyxcbiAgICAnw6HCtsKBJzogJ2QnLFxuICAgICfDhMKRJzogJ2QnLFxuICAgICfDicKWJzogJ2QnLFxuICAgICfDhsKMJzogJ2QnLFxuICAgICfDhMKxJzogJ2knLFxuICAgICfDiMK3JzogJ2onLFxuICAgICfDicKfJzogJ2onLFxuICAgICfDisKEJzogJ2onLFxuICAgICfDh8KzJzogJ2R6JyxcbiAgICAnw4fChic6ICdkeicsXG4gICAgJ8ODwqknOiAnZScsXG4gICAgJ8OEwpUnOiAnZScsXG4gICAgJ8OEwpsnOiAnZScsXG4gICAgJ8OIwqknOiAnZScsXG4gICAgJ8OhwrjCnSc6ICdlJyxcbiAgICAnw4PCqic6ICdlJyxcbiAgICAnw6HCusK/JzogJ2UnLFxuICAgICfDocK7wocnOiAnZScsXG4gICAgJ8OhwrvCgSc6ICdlJyxcbiAgICAnw6HCu8KDJzogJ2UnLFxuICAgICfDocK7woUnOiAnZScsXG4gICAgJ8OhwrjCmSc6ICdlJyxcbiAgICAnw4PCqyc6ICdlJyxcbiAgICAnw4TClyc6ICdlJyxcbiAgICAnw6HCusK5JzogJ2UnLFxuICAgICfDiMKFJzogJ2UnLFxuICAgICfDg8KoJzogJ2UnLFxuICAgICfDocK6wrsnOiAnZScsXG4gICAgJ8OIwocnOiAnZScsXG4gICAgJ8OEwpMnOiAnZScsXG4gICAgJ8OhwrjClyc6ICdlJyxcbiAgICAnw6HCuMKVJzogJ2UnLFxuICAgICfDosKxwrgnOiAnZScsXG4gICAgJ8OEwpknOiAnZScsXG4gICAgJ8OhwrbCkic6ICdlJyxcbiAgICAnw4nChyc6ICdlJyxcbiAgICAnw6HCusK9JzogJ2UnLFxuICAgICfDocK4wpsnOiAnZScsXG4gICAgJ8Oqwp3Cqyc6ICdldCcsXG4gICAgJ8OhwrjCnyc6ICdmJyxcbiAgICAnw4bCkic6ICdmJyxcbiAgICAnw6HCtcKuJzogJ2YnLFxuICAgICfDocK2woInOiAnZicsXG4gICAgJ8OHwrUnOiAnZycsXG4gICAgJ8OEwp8nOiAnZycsXG4gICAgJ8OHwqcnOiAnZycsXG4gICAgJ8OEwqMnOiAnZycsXG4gICAgJ8OEwp0nOiAnZycsXG4gICAgJ8OEwqEnOiAnZycsXG4gICAgJ8OJwqAnOiAnZycsXG4gICAgJ8OhwrjCoSc6ICdnJyxcbiAgICAnw6HCtsKDJzogJ2cnLFxuICAgICfDh8KlJzogJ2cnLFxuICAgICfDocK4wqsnOiAnaCcsXG4gICAgJ8OIwp8nOiAnaCcsXG4gICAgJ8OhwrjCqSc6ICdoJyxcbiAgICAnw4TCpSc6ICdoJyxcbiAgICAnw6LCscKoJzogJ2gnLFxuICAgICfDocK4wqcnOiAnaCcsXG4gICAgJ8OhwrjCoyc6ICdoJyxcbiAgICAnw6HCuMKlJzogJ2gnLFxuICAgICfDicKmJzogJ2gnLFxuICAgICfDocK6wpYnOiAnaCcsXG4gICAgJ8OEwqcnOiAnaCcsXG4gICAgJ8OGwpUnOiAnaHYnLFxuICAgICfDg8KtJzogJ2knLFxuICAgICfDhMKtJzogJ2knLFxuICAgICfDh8KQJzogJ2knLFxuICAgICfDg8KuJzogJ2knLFxuICAgICfDg8KvJzogJ2knLFxuICAgICfDocK4wq8nOiAnaScsXG4gICAgJ8OhwrvCiyc6ICdpJyxcbiAgICAnw4jCiSc6ICdpJyxcbiAgICAnw4PCrCc6ICdpJyxcbiAgICAnw6HCu8KJJzogJ2knLFxuICAgICfDiMKLJzogJ2knLFxuICAgICfDhMKrJzogJ2knLFxuICAgICfDhMKvJzogJ2knLFxuICAgICfDocK2wpYnOiAnaScsXG4gICAgJ8OJwqgnOiAnaScsXG4gICAgJ8OEwqknOiAnaScsXG4gICAgJ8OhwrjCrSc6ICdpJyxcbiAgICAnw6rCncK6JzogJ2QnLFxuICAgICfDqsKdwrwnOiAnZicsXG4gICAgJ8OhwrXCuSc6ICdnJyxcbiAgICAnw6rCnsKDJzogJ3InLFxuICAgICfDqsKewoUnOiAncycsXG4gICAgJ8Oqwp7Chyc6ICd0JyxcbiAgICAnw6rCncKtJzogJ2lzJyxcbiAgICAnw4fCsCc6ICdqJyxcbiAgICAnw4TCtSc6ICdqJyxcbiAgICAnw4rCnSc6ICdqJyxcbiAgICAnw4nCiSc6ICdqJyxcbiAgICAnw6HCuMKxJzogJ2snLFxuICAgICfDh8KpJzogJ2snLFxuICAgICfDhMK3JzogJ2snLFxuICAgICfDosKxwqonOiAnaycsXG4gICAgJ8Oqwp3Cgyc6ICdrJyxcbiAgICAnw6HCuMKzJzogJ2snLFxuICAgICfDhsKZJzogJ2snLFxuICAgICfDocK4wrUnOiAnaycsXG4gICAgJ8OhwrbChCc6ICdrJyxcbiAgICAnw6rCncKBJzogJ2snLFxuICAgICfDqsKdwoUnOiAnaycsXG4gICAgJ8OEwronOiAnbCcsXG4gICAgJ8OGwponOiAnbCcsXG4gICAgJ8OJwqwnOiAnbCcsXG4gICAgJ8OEwr4nOiAnbCcsXG4gICAgJ8OEwrwnOiAnbCcsXG4gICAgJ8OhwrjCvSc6ICdsJyxcbiAgICAnw4jCtCc6ICdsJyxcbiAgICAnw6HCuMK3JzogJ2wnLFxuICAgICfDocK4wrknOiAnbCcsXG4gICAgJ8OiwrHCoSc6ICdsJyxcbiAgICAnw6rCncKJJzogJ2wnLFxuICAgICfDocK4wrsnOiAnbCcsXG4gICAgJ8OFwoAnOiAnbCcsXG4gICAgJ8OJwqsnOiAnbCcsXG4gICAgJ8OhwrbChSc6ICdsJyxcbiAgICAnw4nCrSc6ICdsJyxcbiAgICAnw4XCgic6ICdsJyxcbiAgICAnw4fCiSc6ICdsaicsXG4gICAgJ8OFwr8nOiAncycsXG4gICAgJ8OhwrrCnCc6ICdzJyxcbiAgICAnw6HCusKbJzogJ3MnLFxuICAgICfDocK6wp0nOiAncycsXG4gICAgJ8OhwrjCvyc6ICdtJyxcbiAgICAnw6HCucKBJzogJ20nLFxuICAgICfDocK5woMnOiAnbScsXG4gICAgJ8OJwrEnOiAnbScsXG4gICAgJ8OhwrXCryc6ICdtJyxcbiAgICAnw6HCtsKGJzogJ20nLFxuICAgICfDhcKEJzogJ24nLFxuICAgICfDhcKIJzogJ24nLFxuICAgICfDhcKGJzogJ24nLFxuICAgICfDocK5wosnOiAnbicsXG4gICAgJ8OIwrUnOiAnbicsXG4gICAgJ8OhwrnChSc6ICduJyxcbiAgICAnw6HCucKHJzogJ24nLFxuICAgICfDh8K5JzogJ24nLFxuICAgICfDicKyJzogJ24nLFxuICAgICfDocK5woknOiAnbicsXG4gICAgJ8OGwp4nOiAnbicsXG4gICAgJ8OhwrXCsCc6ICduJyxcbiAgICAnw6HCtsKHJzogJ24nLFxuICAgICfDicKzJzogJ24nLFxuICAgICfDg8KxJzogJ24nLFxuICAgICfDh8KMJzogJ25qJyxcbiAgICAnw4PCsyc6ICdvJyxcbiAgICAnw4XCjyc6ICdvJyxcbiAgICAnw4fCkic6ICdvJyxcbiAgICAnw4PCtCc6ICdvJyxcbiAgICAnw6HCu8KRJzogJ28nLFxuICAgICfDocK7wpknOiAnbycsXG4gICAgJ8OhwrvCkyc6ICdvJyxcbiAgICAnw6HCu8KVJzogJ28nLFxuICAgICfDocK7wpcnOiAnbycsXG4gICAgJ8ODwrYnOiAnbycsXG4gICAgJ8OIwqsnOiAnbycsXG4gICAgJ8OIwq8nOiAnbycsXG4gICAgJ8OIwrEnOiAnbycsXG4gICAgJ8OhwrvCjSc6ICdvJyxcbiAgICAnw4XCkSc6ICdvJyxcbiAgICAnw4jCjSc6ICdvJyxcbiAgICAnw4PCsic6ICdvJyxcbiAgICAnw6HCu8KPJzogJ28nLFxuICAgICfDhsKhJzogJ28nLFxuICAgICfDocK7wpsnOiAnbycsXG4gICAgJ8OhwrvCoyc6ICdvJyxcbiAgICAnw6HCu8KdJzogJ28nLFxuICAgICfDocK7wp8nOiAnbycsXG4gICAgJ8OhwrvCoSc6ICdvJyxcbiAgICAnw4jCjyc6ICdvJyxcbiAgICAnw6rCncKLJzogJ28nLFxuICAgICfDqsKdwo0nOiAnbycsXG4gICAgJ8OiwrHCuic6ICdvJyxcbiAgICAnw4XCjSc6ICdvJyxcbiAgICAnw6HCucKTJzogJ28nLFxuICAgICfDocK5wpEnOiAnbycsXG4gICAgJ8OHwqsnOiAnbycsXG4gICAgJ8OHwq0nOiAnbycsXG4gICAgJ8ODwrgnOiAnbycsXG4gICAgJ8OHwr8nOiAnbycsXG4gICAgJ8ODwrUnOiAnbycsXG4gICAgJ8OhwrnCjSc6ICdvJyxcbiAgICAnw6HCucKPJzogJ28nLFxuICAgICfDiMKtJzogJ28nLFxuICAgICfDhsKjJzogJ29pJyxcbiAgICAnw6rCncKPJzogJ29vJyxcbiAgICAnw4nCmyc6ICdlJyxcbiAgICAnw6HCtsKTJzogJ2UnLFxuICAgICfDicKUJzogJ28nLFxuICAgICfDocK2wpcnOiAnbycsXG4gICAgJ8OIwqMnOiAnb3UnLFxuICAgICfDocK5wpUnOiAncCcsXG4gICAgJ8OhwrnClyc6ICdwJyxcbiAgICAnw6rCncKTJzogJ3AnLFxuICAgICfDhsKlJzogJ3AnLFxuICAgICfDocK1wrEnOiAncCcsXG4gICAgJ8OhwrbCiCc6ICdwJyxcbiAgICAnw6rCncKVJzogJ3AnLFxuICAgICfDocK1wr0nOiAncCcsXG4gICAgJ8Oqwp3CkSc6ICdwJyxcbiAgICAnw6rCncKZJzogJ3EnLFxuICAgICfDisKgJzogJ3EnLFxuICAgICfDicKLJzogJ3EnLFxuICAgICfDqsKdwpcnOiAncScsXG4gICAgJ8OFwpUnOiAncicsXG4gICAgJ8OFwpknOiAncicsXG4gICAgJ8OFwpcnOiAncicsXG4gICAgJ8OhwrnCmSc6ICdyJyxcbiAgICAnw6HCucKbJzogJ3InLFxuICAgICfDocK5wp0nOiAncicsXG4gICAgJ8OIwpEnOiAncicsXG4gICAgJ8OJwr4nOiAncicsXG4gICAgJ8OhwrXCsyc6ICdyJyxcbiAgICAnw4jCkyc6ICdyJyxcbiAgICAnw6HCucKfJzogJ3InLFxuICAgICfDicK8JzogJ3InLFxuICAgICfDocK1wrInOiAncicsXG4gICAgJ8OhwrbCiSc6ICdyJyxcbiAgICAnw4nCjSc6ICdyJyxcbiAgICAnw4nCvSc6ICdyJyxcbiAgICAnw6LChsKEJzogJ2MnLFxuICAgICfDqsKcwr8nOiAnYycsXG4gICAgJ8OJwpgnOiAnZScsXG4gICAgJ8OJwr8nOiAncicsXG4gICAgJ8OFwpsnOiAncycsXG4gICAgJ8OhwrnCpSc6ICdzJyxcbiAgICAnw4XCoSc6ICdzJyxcbiAgICAnw6HCucKnJzogJ3MnLFxuICAgICfDhcKfJzogJ3MnLFxuICAgICfDhcKdJzogJ3MnLFxuICAgICfDiMKZJzogJ3MnLFxuICAgICfDocK5wqEnOiAncycsXG4gICAgJ8OhwrnCoyc6ICdzJyxcbiAgICAnw6HCucKpJzogJ3MnLFxuICAgICfDisKCJzogJ3MnLFxuICAgICfDocK1wrQnOiAncycsXG4gICAgJ8OhwrbCiic6ICdzJyxcbiAgICAnw4jCvyc6ICdzJyxcbiAgICAnw4nCoSc6ICdnJyxcbiAgICAnw6HCtMKRJzogJ28nLFxuICAgICfDocK0wpMnOiAnbycsXG4gICAgJ8OhwrTCnSc6ICd1JyxcbiAgICAnw4XCpSc6ICd0JyxcbiAgICAnw4XCoyc6ICd0JyxcbiAgICAnw6HCucKxJzogJ3QnLFxuICAgICfDiMKbJzogJ3QnLFxuICAgICfDiMK2JzogJ3QnLFxuICAgICfDocK6wpcnOiAndCcsXG4gICAgJ8OiwrHCpic6ICd0JyxcbiAgICAnw6HCucKrJzogJ3QnLFxuICAgICfDocK5wq0nOiAndCcsXG4gICAgJ8OGwq0nOiAndCcsXG4gICAgJ8OhwrnCryc6ICd0JyxcbiAgICAnw6HCtcK1JzogJ3QnLFxuICAgICfDhsKrJzogJ3QnLFxuICAgICfDisKIJzogJ3QnLFxuICAgICfDhcKnJzogJ3QnLFxuICAgICfDocK1wronOiAndGgnLFxuICAgICfDicKQJzogJ2EnLFxuICAgICfDocK0woInOiAnYWUnLFxuICAgICfDh8KdJzogJ2UnLFxuICAgICfDocK1wrcnOiAnZycsXG4gICAgJ8OJwqUnOiAnaCcsXG4gICAgJ8OKwq4nOiAnaCcsXG4gICAgJ8OKwq8nOiAnaCcsXG4gICAgJ8OhwrTCiSc6ICdpJyxcbiAgICAnw4rCnic6ICdrJyxcbiAgICAnw6rCnsKBJzogJ2wnLFxuICAgICfDicKvJzogJ20nLFxuICAgICfDicKwJzogJ20nLFxuICAgICfDocK0wpQnOiAnb2UnLFxuICAgICfDicK5JzogJ3InLFxuICAgICfDicK7JzogJ3InLFxuICAgICfDicK6JzogJ3InLFxuICAgICfDosKxwrknOiAncicsXG4gICAgJ8OKwocnOiAndCcsXG4gICAgJ8OKwownOiAndicsXG4gICAgJ8OKwo0nOiAndycsXG4gICAgJ8OKwo4nOiAneScsXG4gICAgJ8OqwpzCqSc6ICd0eicsXG4gICAgJ8ODwronOiAndScsXG4gICAgJ8OFwq0nOiAndScsXG4gICAgJ8OHwpQnOiAndScsXG4gICAgJ8ODwrsnOiAndScsXG4gICAgJ8OhwrnCtyc6ICd1JyxcbiAgICAnw4PCvCc6ICd1JyxcbiAgICAnw4fCmCc6ICd1JyxcbiAgICAnw4fCmic6ICd1JyxcbiAgICAnw4fCnCc6ICd1JyxcbiAgICAnw4fClic6ICd1JyxcbiAgICAnw6HCucKzJzogJ3UnLFxuICAgICfDocK7wqUnOiAndScsXG4gICAgJ8OFwrEnOiAndScsXG4gICAgJ8OIwpUnOiAndScsXG4gICAgJ8ODwrknOiAndScsXG4gICAgJ8OhwrvCpyc6ICd1JyxcbiAgICAnw4bCsCc6ICd1JyxcbiAgICAnw6HCu8KpJzogJ3UnLFxuICAgICfDocK7wrEnOiAndScsXG4gICAgJ8OhwrvCqyc6ICd1JyxcbiAgICAnw6HCu8KtJzogJ3UnLFxuICAgICfDocK7wq8nOiAndScsXG4gICAgJ8OIwpcnOiAndScsXG4gICAgJ8OFwqsnOiAndScsXG4gICAgJ8OhwrnCuyc6ICd1JyxcbiAgICAnw4XCsyc6ICd1JyxcbiAgICAnw6HCtsKZJzogJ3UnLFxuICAgICfDhcKvJzogJ3UnLFxuICAgICfDhcKpJzogJ3UnLFxuICAgICfDocK5wrknOiAndScsXG4gICAgJ8OhwrnCtSc6ICd1JyxcbiAgICAnw6HCtcKrJzogJ3VlJyxcbiAgICAnw6rCncK4JzogJ3VtJyxcbiAgICAnw6LCscK0JzogJ3YnLFxuICAgICfDqsKdwp8nOiAndicsXG4gICAgJ8OhwrnCvyc6ICd2JyxcbiAgICAnw4rCiyc6ICd2JyxcbiAgICAnw6HCtsKMJzogJ3YnLFxuICAgICfDosKxwrEnOiAndicsXG4gICAgJ8OhwrnCvSc6ICd2JyxcbiAgICAnw6rCncKhJzogJ3Z5JyxcbiAgICAnw6HCusKDJzogJ3cnLFxuICAgICfDhcK1JzogJ3cnLFxuICAgICfDocK6woUnOiAndycsXG4gICAgJ8OhwrrChyc6ICd3JyxcbiAgICAnw6HCusKJJzogJ3cnLFxuICAgICfDocK6woEnOiAndycsXG4gICAgJ8OiwrHCsyc6ICd3JyxcbiAgICAnw6HCusKYJzogJ3cnLFxuICAgICfDocK6wo0nOiAneCcsXG4gICAgJ8OhwrrCiyc6ICd4JyxcbiAgICAnw6HCtsKNJzogJ3gnLFxuICAgICfDg8K9JzogJ3knLFxuICAgICfDhcK3JzogJ3knLFxuICAgICfDg8K/JzogJ3knLFxuICAgICfDocK6wo8nOiAneScsXG4gICAgJ8OhwrvCtSc6ICd5JyxcbiAgICAnw6HCu8KzJzogJ3knLFxuICAgICfDhsK0JzogJ3knLFxuICAgICfDocK7wrcnOiAneScsXG4gICAgJ8OhwrvCvyc6ICd5JyxcbiAgICAnw4jCsyc6ICd5JyxcbiAgICAnw6HCusKZJzogJ3knLFxuICAgICfDicKPJzogJ3knLFxuICAgICfDocK7wrknOiAneScsXG4gICAgJ8OFwronOiAneicsXG4gICAgJ8OFwr4nOiAneicsXG4gICAgJ8OhwrrCkSc6ICd6JyxcbiAgICAnw4rCkSc6ICd6JyxcbiAgICAnw6LCscKsJzogJ3onLFxuICAgICfDhcK8JzogJ3onLFxuICAgICfDocK6wpMnOiAneicsXG4gICAgJ8OIwqUnOiAneicsXG4gICAgJ8OhwrrClSc6ICd6JyxcbiAgICAnw6HCtcK2JzogJ3onLFxuICAgICfDocK2wo4nOiAneicsXG4gICAgJ8OKwpAnOiAneicsXG4gICAgJ8OGwrYnOiAneicsXG4gICAgJ8OJwoAnOiAneicsXG4gICAgJ8OvwqzCgCc6ICdmZicsXG4gICAgJ8OvwqzCgyc6ICdmZmknLFxuICAgICfDr8KswoQnOiAnZmZsJyxcbiAgICAnw6/CrMKBJzogJ2ZpJyxcbiAgICAnw6/CrMKCJzogJ2ZsJyxcbiAgICAnw4TCsyc6ICdpaicsXG4gICAgJ8OFwpMnOiAnb2UnLFxuICAgICfDr8KswoYnOiAnc3QnLFxuICAgICfDosKCwpAnOiAnYScsXG4gICAgJ8OiwoLCkSc6ICdlJyxcbiAgICAnw6HCtcKiJzogJ2knLFxuICAgICfDosKxwrwnOiAnaicsXG4gICAgJ8OiwoLCkic6ICdvJyxcbiAgICAnw6HCtcKjJzogJ3InLFxuICAgICfDocK1wqQnOiAndScsXG4gICAgJ8OhwrXCpSc6ICd2JyxcbiAgICAnw6LCgsKTJzogJ3gnXG59O1xuIiwiaW1wb3J0IHsgVHlwZWFoZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi90eXBlYWhlYWQuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE9wdGlvbnMge1xuICBwbGFjZW1lbnQ6IHN0cmluZztcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xuICB0eXBlYWhlYWRSZWY6IFR5cGVhaGVhZERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUeXBlYWhlYWRPcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE1hdGNoIHtcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZWFkb25seSBpdGVtOiBhbnk7XG4gIHByb3RlY3RlZCBoZWFkZXI6IGJvb2xlYW47XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29uc3RydWN0b3IoaXRlbTogYW55LCB2YWx1ZTogc3RyaW5nID0gaXRlbSwgaGVhZGVyID0gZmFsc2UpIHtcbiAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIGlzSGVhZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhlYWRlcjtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGxhdGluTWFwIH0gZnJvbSAnLi9sYXRpbi1tYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGF0aW5pemUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvW15BLVphLXowLTlcXFtcXF0gXS9nLCBmdW5jdGlvbiAoYTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbGF0aW5NYXBbYV0gfHwgYTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gUmVnZXg6IGNhcHR1cmUgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmdcbiAgLy8gdGhhdCB3aWxsIGJlIHVzZWQgdG8gbWF0Y2ggdGhlIHJlc3VsdHMsIGZvciBleGFtcGxlIGlmIHRoZSBjYXB0dXJlIGlzXG4gIC8vICdhJyB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG59XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3RyOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgd29yZFJlZ2V4RGVsaW1pdGVycyA9ICcgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBwaHJhc2VSZWdleERlbGltaXRlcnMgPSAnJyk6IEFycmF5PHN0cmluZz4ge1xuICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gIGNvbnN0IHJlZ2V4U3RyID0gYCg/Olske3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKShbXiR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rKWAgK1xuICAgIGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSl8KFteJHt3b3JkUmVnZXhEZWxpbWl0ZXJzfV0rKWA7XG4gIGNvbnN0IHByZVRva2VuaXplZDogc3RyaW5nW10gPSBzdHIuc3BsaXQobmV3IFJlZ0V4cChyZWdleFN0ciwgJ2cnKSk7XG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgcHJlVG9rZW5pemVkTGVuZ3RoOiBudW1iZXIgPSBwcmVUb2tlbml6ZWQubGVuZ3RoO1xuICBsZXQgdG9rZW46IHN0cmluZztcbiAgY29uc3QgcmVwbGFjZVBocmFzZURlbGltaXRlcnMgPSBuZXcgUmVnRXhwKGBbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XStgLCAnZycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlVG9rZW5pemVkTGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0b2tlbiA9IHByZVRva2VuaXplZFtpXTtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoICYmIHRva2VuICE9PSB3b3JkUmVnZXhEZWxpbWl0ZXJzKSB7XG4gICAgICByZXN1bHQucHVzaCh0b2tlbi5yZXBsYWNlKHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzLCAnJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZyb21PYmplY3Qob2JqZWN0OiBhbnksIG9wdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFvcHRpb24gfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XG4gIH1cblxuICBpZiAob3B0aW9uLmVuZHNXaXRoKCcoKScpKSB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gb3B0aW9uLnNsaWNlKDAsIG9wdGlvbi5sZW5ndGggLSAyKTtcblxuICAgIHJldHVybiBvYmplY3RbZnVuY3Rpb25OYW1lXSgpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBjb25zdCBwcm9wZXJ0aWVzOiBzdHJpbmcgPSBvcHRpb25cbiAgICAucmVwbGFjZSgvXFxbKFxcdyspXFxdL2csICcuJDEnKVxuICAgIC5yZXBsYWNlKC9eXFwuLywgJycpO1xuICBjb25zdCBwcm9wZXJ0aWVzQXJyYXk6IHN0cmluZ1tdID0gcHJvcGVydGllcy5zcGxpdCgnLicpO1xuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydGllc0FycmF5KSB7XG4gICAgaWYgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBvYmplY3QgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICBpZiAoIW9iamVjdCkge3JldHVybiAnJzsgfVxuXG4gIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0JzMywgVXRpbHMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IGxhdGluaXplIH0gZnJvbSAnLi90eXBlYWhlYWQtdXRpbHMnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0eXBlYWhlYWQtY29udGFpbmVyJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZHJvcGRvd24gb3BlbicsXG4gICAgJ1tjbGFzcy5kcm9wZG93bi1tZW51XSc6ICdpc0JzNCcsXG4gICAgJ1tzdHlsZS5vdmVyZmxvdy15XScgOiBgaXNCczQgJiYgbmVlZFNjcm9sbGJhciA/ICdzY3JvbGwnOiAndmlzaWJsZSdgLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6IGBpc0JzNCAmJiBuZWVkU2Nyb2xsYmFyID8gZ3VpSGVpZ2h0OiAnYXV0bydgLFxuICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiBgdHlwZWFoZWFkU2Nyb2xsYWJsZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnYCxcbiAgICAnW2NsYXNzLmRyb3B1cF0nOiAnZHJvcHVwJyxcbiAgICBzdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTtkaXNwbGF5OiBibG9jazsnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdC5kcm9wZG93biB7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB7XG4gIHBhcmVudDogVHlwZWFoZWFkRGlyZWN0aXZlO1xuICBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmc7XG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICB0b3A6IHN0cmluZztcbiAgbGVmdDogc3RyaW5nO1xuICBkaXNwbGF5OiBzdHJpbmc7XG4gIHBsYWNlbWVudDogc3RyaW5nO1xuICBkcm9wdXA6IGJvb2xlYW47XG4gIGd1aUhlaWdodDogc3RyaW5nO1xuICBuZWVkU2Nyb2xsYmFyOiBib29sZWFuO1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2FjdGl2ZTogVHlwZWFoZWFkTWF0Y2g7XG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcpXG4gIHByaXZhdGUgdWxFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2xpRWxlbWVudHMnKVxuICBwcml2YXRlIGxpRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpOiBUeXBlYWhlYWRNYXRjaCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2V0IG1hdGNoZXModmFsdWU6IFR5cGVhaGVhZE1hdGNoW10pIHtcbiAgICB0aGlzLl9tYXRjaGVzID0gdmFsdWU7XG4gICAgdGhpcy5uZWVkU2Nyb2xsYmFyID0gdGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlICYmIHRoaXMudHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPCB0aGlzLm1hdGNoZXMubGVuZ3RoO1xuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFNjcm9sbGFibGVNb2RlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9tYXRjaGVzWzBdO1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XG4gICAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldCBvcHRpb25zTGlzdFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9wdGlvbnNMaXN0VGVtcGxhdGUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgdHlwZWFoZWFkU2Nyb2xsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC50eXBlYWhlYWRTY3JvbGxhYmxlIDogZmFsc2U7XG4gIH1cblxuXG4gIGdldCB0eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3IDogNTtcbiAgfVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQgaXRlbVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZEl0ZW1UZW1wbGF0ZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHNlbGVjdEFjdGl2ZU1hdGNoKGlzQWN0aXZlSXRlbUNoYW5nZWQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiB0aGlzLnBhcmVudC50eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0TWF0Y2godGhpcy5fYWN0aXZlKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucGFyZW50LnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSAmJiBpc0FjdGl2ZUl0ZW1DaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdE1hdGNoKHRoaXMuX2FjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJldkFjdGl2ZU1hdGNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5fYWN0aXZlKTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLm1hdGNoZXNbXG4gICAgICBpbmRleCAtIDEgPCAwID8gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFcbiAgICAgIF07XG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XG4gICAgICB0aGlzLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XG4gICAgICB0aGlzLnNjcm9sbFByZXZpb3VzKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBuZXh0QWN0aXZlTWF0Y2goKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLl9hY3RpdmUpO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMubWF0Y2hlc1tcbiAgICAgIGluZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMVxuICAgICAgXTtcbiAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcbiAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTmV4dChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgfVxuXG4gIGhpZ2hsaWdodChtYXRjaDogVHlwZWFoZWFkTWF0Y2gsIHF1ZXJ5OiBzdHJpbmdbXSB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGl0ZW1TdHI6IHN0cmluZyA9IG1hdGNoLnZhbHVlO1xuICAgIGxldCBpdGVtU3RySGVscGVyOiBzdHJpbmcgPSAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUoaXRlbVN0cilcbiAgICAgIDogaXRlbVN0cikudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc3RhcnRJZHg6IG51bWJlcjtcbiAgICBsZXQgdG9rZW5MZW46IG51bWJlcjtcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgcXVlcnlMZW46IG51bWJlciA9IHF1ZXJ5Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlMZW47IGkgKz0gMSkge1xuICAgICAgICAvLyBxdWVyeVtpXSBpcyBhbHJlYWR5IGxhdGluaXplZCBhbmQgbG93ZXIgY2FzZVxuICAgICAgICBzdGFydElkeCA9IGl0ZW1TdHJIZWxwZXIuaW5kZXhPZihxdWVyeVtpXSk7XG4gICAgICAgIHRva2VuTGVuID0gcXVlcnlbaV0ubGVuZ3RoO1xuICAgICAgICBpZiAoc3RhcnRJZHggPj0gMCAmJiB0b2tlbkxlbiA+IDApIHtcbiAgICAgICAgICBpdGVtU3RyID1cbiAgICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX08c3Ryb25nPiR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHgsIHN0YXJ0SWR4ICsgdG9rZW5MZW4pfTwvc3Ryb25nPmAgK1xuICAgICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHggKyB0b2tlbkxlbil9YDtcbiAgICAgICAgICBpdGVtU3RySGVscGVyID1cbiAgICAgICAgICAgIGAke2l0ZW1TdHJIZWxwZXIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX0gICAgICAgICR7JyAnLnJlcGVhdCh0b2tlbkxlbil9ICAgICAgICAgYCArXG4gICAgICAgICAgICBgJHtpdGVtU3RySGVscGVyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChxdWVyeSkge1xuICAgICAgLy8gcXVlcnkgaXMgYWxyZWFkeSBsYXRpbml6ZWQgYW5kIGxvd2VyIGNhc2VcbiAgICAgIHN0YXJ0SWR4ID0gaXRlbVN0ckhlbHBlci5pbmRleE9mKHF1ZXJ5KTtcbiAgICAgIHRva2VuTGVuID0gcXVlcnkubGVuZ3RoO1xuICAgICAgaWYgKHN0YXJ0SWR4ID49IDAgJiYgdG9rZW5MZW4gPiAwKSB7XG4gICAgICAgIGl0ZW1TdHIgPVxuICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX08c3Ryb25nPiR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHgsIHN0YXJ0SWR4ICsgdG9rZW5MZW4pfTwvc3Ryb25nPmAgK1xuICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1TdHI7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIGZvY3VzTG9zdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgaXNBY3RpdmUodmFsdWU6IFR5cGVhaGVhZE1hdGNoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZSA9PT0gdmFsdWU7XG4gIH1cblxuICBzZWxlY3RNYXRjaCh2YWx1ZTogVHlwZWFoZWFkTWF0Y2gsIGU6IEV2ZW50ID0gdm9pZCAwKTogYm9vbGVhbiB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50LmNoYW5nZU1vZGVsKHZhbHVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucGFyZW50LnR5cGVhaGVhZE9uU2VsZWN0LmVtaXQodmFsdWUpLCAwKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNldFNjcm9sbGFibGVNb2RlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy51bEVsZW1lbnQpIHtcbiAgICAgIHRoaXMudWxFbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5saUVsZW1lbnRzLmZpcnN0KSB7XG4gICAgICBjb25zdCB1bFN0eWxlcyA9IFV0aWxzLmdldFN0eWxlcyh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IGxpU3R5bGVzID0gVXRpbHMuZ2V0U3R5bGVzKHRoaXMubGlFbGVtZW50cy5maXJzdC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IHVsUGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoKHVsU3R5bGVzWydwYWRkaW5nLWJvdHRvbSddID8gdWxTdHlsZXNbJ3BhZGRpbmctYm90dG9tJ10gOiAnJylcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgIGNvbnN0IHVsUGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoKHVsU3R5bGVzWydwYWRkaW5nLXRvcCddID8gdWxTdHlsZXNbJ3BhZGRpbmctdG9wJ10gOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICBjb25zdCBvcHRpb25IZWlnaHQgPSBwYXJzZUZsb2F0KChsaVN0eWxlcy5oZWlnaHQgPyBsaVN0eWxlcy5oZWlnaHQgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3ICogb3B0aW9uSGVpZ2h0O1xuICAgICAgdGhpcy5ndWlIZWlnaHQgPSBgJHtoZWlnaHQgKyB1bFBhZGRpbmdUb3AgKyB1bFBhZGRpbmdCb3R0b219cHhgO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gIH1cblxuICBzY3JvbGxQcmV2aW91cyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlFbGVtZW50cykge1xuICAgICAgY29uc3QgbGlFbGVtZW50ID0gdGhpcy5saUVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleCAtIDFdO1xuICAgICAgaWYgKGxpRWxlbWVudCAmJiAhdGhpcy5pc1Njcm9sbGVkSW50b1ZpZXcobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gbGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNjcm9sbE5leHQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGxpRWxlbWVudCA9IHRoaXMubGlFbGVtZW50cy50b0FycmF5KClbaW5kZXggKyAxXTtcbiAgICAgIGlmIChsaUVsZW1lbnQgJiYgIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGxpRWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9XG4gICAgICAgICAgbGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC1cbiAgICAgICAgICBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpICtcbiAgICAgICAgICBOdW1iZXIobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgaXNTY3JvbGxlZEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyVmlld1RvcDogbnVtYmVyID0gdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgY29udGFpbmVyVmlld0JvdHRvbSA9IGNvbnRhaW5lclZpZXdUb3AgKyBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuICAgIGNvbnN0IGVsZW1Ub3AgPSBlbGVtLm9mZnNldFRvcDtcbiAgICBjb25zdCBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBjb250YWluZXJWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBjb250YWluZXJWaWV3VG9wKSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb1RvcCgpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0eXBlYWhlYWQgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRDb25maWcge1xuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdHMgb24gYmx1ciAqL1xuICBoaWRlUmVzdWx0c09uQmx1ciA9IHRydWU7XG4gIC8qKiB1c2VkIHRvIGNob29zZSB0aGUgZmlyc3QgaXRlbSBpbiB0eXBlYWhlYWQgY29udGFpbmVyICovXG4gIHNlbGVjdEZpcnN0SXRlbSA9IHRydWU7XG4gIC8qKiB1c2VkIHRvIGNob29zZSBzZXQgbWluaW1hbCBubyBvZiBjaGFyYWN0ZXJzIHRoYXQgbmVlZHMgdG9cbiAgICogYmUgZW50ZXJlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluXG4gICAqL1xuICBtaW5MZW5ndGggPSAxO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBmcm9tLCBTdWJzY3JpcHRpb24sIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRDb25maWcgfSBmcm9tICcuL3R5cGVhaGVhZC5jb25maWcnO1xuaW1wb3J0IHsgZ2V0VmFsdWVGcm9tT2JqZWN0LCBsYXRpbml6ZSwgdG9rZW5pemUgfSBmcm9tICcuL3R5cGVhaGVhZC11dGlscyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWVyZ2VNYXAsIHN3aXRjaE1hcCwgdG9BcnJheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbdHlwZWFoZWFkXScsIGV4cG9ydEFzOiAnYnMtdHlwZWFoZWFkJ30pXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogb3B0aW9ucyBzb3VyY2UsIGNhbiBiZSBBcnJheSBvZiBzdHJpbmdzLCBvYmplY3RzIG9yXG4gICAqIGFuIE9ic2VydmFibGUgZm9yIGV4dGVybmFsIG1hdGNoaW5nIHByb2Nlc3NcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSB0eXBlYWhlYWQ6IGFueTtcbiAgLyoqIG1pbmltYWwgbm8gb2YgY2hhcmFjdGVycyB0aGF0IG5lZWRzIHRvIGJlIGVudGVyZWQgYmVmb3JlXG4gICAqIHR5cGVhaGVhZCBraWNrcy1pbi4gV2hlbiBzZXQgdG8gMCwgdHlwZWFoZWFkIHNob3dzIG9uIGZvY3VzIHdpdGggZnVsbFxuICAgKiBsaXN0IG9mIG9wdGlvbnMgKGxpbWl0ZWQgYXMgbm9ybWFsIGJ5IHR5cGVhaGVhZE9wdGlvbnNMaW1pdClcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE1pbkxlbmd0aDogbnVtYmVyID0gdm9pZCAwO1xuICAvKiogbWluaW1hbCB3YWl0IHRpbWUgYWZ0ZXIgbGFzdCBjaGFyYWN0ZXIgdHlwZWQgYmVmb3JlIHR5cGVhaGVhZCBraWNrcy1pbiAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRXYWl0TXM6IG51bWJlcjtcbiAgLyoqIG1heGltdW0gbGVuZ3RoIG9mIG9wdGlvbnMgaXRlbXMgbGlzdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0xpbWl0OiBudW1iZXI7XG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkXG4gICAqIHRoYXQgY29udGFpbnMgdGhlIG9wdGlvbnMgdmFsdWUsIHdlIHVzZSBhcnJheSBpdGVtIGFzIG9wdGlvbiBpbiBjYXNlXG4gICAqIG9mIHRoaXMgZmllbGQgaXMgbWlzc2luZy4gU3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25GaWVsZDogc3RyaW5nO1xuICAvKiogd2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGUgbmFtZSBvZiBmaWVsZCB0aGF0XG4gICAqIGNvbnRhaW5zIHRoZSBncm91cCB2YWx1ZSwgbWF0Y2hlcyBhcmUgZ3JvdXBlZCBieSB0aGlzIGZpZWxkIHdoZW4gc2V0LlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkR3JvdXBGaWVsZDogc3RyaW5nO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIG9mIHR5cGVhaGVhZCBhdHRyaWJ1dGUgaXMgYXJyYXkuXG4gICAqIElmIHRydWUgLSBsb2FkaW5nIG9mIG9wdGlvbnMgd2lsbCBiZSBhc3luYywgb3RoZXJ3aXNlIC0gc3luYy5cbiAgICogdHJ1ZSBtYWtlIHNlbnNlIGlmIG9wdGlvbnMgYXJyYXkgaXMgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRBc3luYzogYm9vbGVhbiA9IHZvaWQgMDtcbiAgLyoqIG1hdGNoIGxhdGluIHN5bWJvbHMuXG4gICAqIElmIHRydWUgdGhlIHdvcmQgc8ODwrpwZXIgd291bGQgbWF0Y2ggc3VwZXIgYW5kIHZpY2UgdmVyc2EuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRMYXRpbml6ZSA9IHRydWU7XG4gIC8qKiBDYW4gYmUgdXNlIHRvIHNlYXJjaCB3b3JkcyBieSBpbnNlcnRpbmcgYSBzaW5nbGUgd2hpdGUgc3BhY2UgYmV0d2VlbiBlYWNoIGNoYXJhY3RlcnNcbiAgICogIGZvciBleGFtcGxlICdDIGEgbCBpIGYgbyByIG4gaSBhJyB3aWxsIG1hdGNoICdDYWxpZm9ybmlhJy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFNpbmdsZVdvcmRzID0gdHJ1ZTtcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICogU2V0cyB0aGUgd29yZCBkZWxpbWl0ZXIgdG8gYnJlYWsgd29yZHMuIERlZmF1bHRzIHRvIHNwYWNlLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkV29yZERlbGltaXRlcnMgPSAnICc7XG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2UgdHlwZWFoZWFkU2luZ2xlV29yZHMgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIG1hdGNoIGV4YWN0IHBocmFzZS5cbiAgICogRGVmYXVsdHMgdG8gc2ltcGxlIGFuZCBkb3VibGUgcXVvdGVzLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVycyA9ICdcXCdcIic7XG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gaXRlbSB0ZW1wbGF0ZS5cbiAgICogVGVtcGxhdGUgdmFyaWFibGVzIGV4cG9zZWQgYXJlIGNhbGxlZCBpdGVtIGFuZCBpbmRleDtcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSB0eXBlYWhlYWRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gb3B0aW9ucyBsaXN0IHRlbXBsYXRlLlxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXM6IG1hdGNoZXMsIGl0ZW1UZW1wbGF0ZSwgcXVlcnlcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBvcHRpb25zTGlzdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogc3BlY2lmaWVzIGlmIHR5cGVhaGVhZCBpcyBzY3JvbGxhYmxlICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTY3JvbGxhYmxlID0gZmFsc2U7XG4gIC8qKiBzcGVjaWZpZXMgbnVtYmVyIG9mIG9wdGlvbnMgdG8gc2hvdyBpbiBzY3JvbGwgdmlldyAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPSA1O1xuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdCBvbiBibHVyICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyOiBib29sZWFuO1xuICAvKiogZmlyZWQgd2hlbiBhbiBvcHRpb25zIGxpc3Qgd2FzIG9wZW5lZCBhbmQgdGhlIHVzZXIgY2xpY2tlZCBUYWJcbiAgICogSWYgYSB2YWx1ZSBlcXVhbCB0cnVlLCBpdCB3aWxsIGJlIGNob3NlbiBmaXJzdCBvciBhY3RpdmUgaXRlbSBpbiB0aGUgbGlzdFxuICAgKiBJZiB2YWx1ZSBlcXVhbCBmYWxzZSwgaXQgd2lsbCBiZSBjaG9zZW4gYW4gYWN0aXZlIGl0ZW0gaW4gdGhlIGxpc3Qgb3Igbm90aGluZ1xuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtID0gdHJ1ZTtcbiAgLyoqIGZpcmVkIHdoZW4gJ2J1c3knIHN0YXRlIG9mIHRoaXMgY29tcG9uZW50IHdhcyBjaGFuZ2VkLFxuICAgKiBmaXJlZCBvbiBhc3luYyBtb2RlIG9ubHksIHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZExvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qKiBmaXJlZCBvbiBldmVyeSBrZXkgZXZlbnQgYW5kIHJldHVybnMgdHJ1ZVxuICAgKiBpbiBjYXNlIG9mIG1hdGNoZXMgYXJlIG5vdCBkZXRlY3RlZFxuICAgKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZE5vUmVzdWx0cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gb3B0aW9uIHdhcyBzZWxlY3RlZCwgcmV0dXJuIG9iamVjdCB3aXRoIGRhdGEgb2YgdGhpcyBvcHRpb24gKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZE9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxUeXBlYWhlYWRNYXRjaD4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gYmx1ciBldmVudCBvY2N1cnMuIHJldHVybnMgdGhlIGFjdGl2ZSBpdGVtICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdHlwZWFoZWFkIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcblxuICAvKiogVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWQgdXB3YXJkcyAqL1xuICBASW5wdXQoKSBkcm9wdXAgPSBmYWxzZTtcblxuICAvLyBub3QgeWV0IGltcGxlbWVudGVkXG4gIC8qKiBpZiBmYWxzZSByZXN0cmljdCBtb2RlbCB2YWx1ZXMgdG8gdGhlIG9uZXMgc2VsZWN0ZWQgZnJvbSB0aGUgcG9wdXAgb25seSB3aWxsIGJlIHByb3ZpZGVkICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRFZGl0YWJsZTpib29sZWFuO1xuICAvKiogaWYgZmFsc2UgdGhlIGZpcnN0IG1hdGNoIGF1dG9tYXRpY2FsbHkgd2lsbCBub3QgYmUgZm9jdXNlZCBhcyB5b3UgdHlwZSAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRm9jdXNGaXJzdDpib29sZWFuO1xuICAvKiogZm9ybWF0IHRoZSBuZy1tb2RlbCByZXN1bHQgYWZ0ZXIgc2VsZWN0aW9uICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRJbnB1dEZvcm1hdHRlcjphbnk7XG4gIC8qKiBpZiB0cnVlIGF1dG9tYXRpY2FsbHkgc2VsZWN0IGFuIGl0ZW0gd2hlbiB0aGVyZSBpcyBvbmUgb3B0aW9uIHRoYXQgZXhhY3RseSBtYXRjaGVzIHRoZSB1c2VyIGlucHV0ICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRTZWxlY3RPbkV4YWN0OmJvb2xlYW47XG4gIC8qKiAgaWYgdHJ1ZSBzZWxlY3QgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXRjaCBvbiBibHVyICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRTZWxlY3RPbkJsdXI6Ym9vbGVhbjtcbiAgLyoqICBpZiBmYWxzZSBkb24ndCBmb2N1cyB0aGUgaW5wdXQgZWxlbWVudCB0aGUgdHlwZWFoZWFkIGRpcmVjdGl2ZSBpcyBhc3NvY2lhdGVkIHdpdGggb24gc2VsZWN0aW9uICovXG4gICAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEZvY3VzT25TZWxlY3Q6Ym9vbGVhbjtcblxuICBfY29udGFpbmVyOiBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ7XG4gIGlzQWN0aXZlSXRlbUNoYW5nZWQgPSBmYWxzZTtcbiAgaXNUeXBlYWhlYWRPcHRpb25zTGlzdEFjdGl2ZSA9IGZhbHNlO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJvdGVjdGVkIGtleVVwRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJvdGVjdGVkIF9tYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdO1xuICBwcm90ZWN0ZWQgcGxhY2VtZW50ID0gJ2JvdHRvbS1sZWZ0JztcbiAgLy8gcHJvdGVjdGVkIHBvcHVwOkNvbXBvbmVudFJlZjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgX3R5cGVhaGVhZDogQ29tcG9uZW50TG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX291dHNpZGVDbGlja0xpc3RlbmVyOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgY29uZmlnOiBUeXBlYWhlYWRDb25maWcsXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB0aGlzLl90eXBlYWhlYWQgPSBjaXMuY3JlYXRlTG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBlbGVtZW50LFxuICAgICAgdmlld0NvbnRhaW5lclJlZixcbiAgICAgIHJlbmRlcmVyXG4gICAgKVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBUeXBlYWhlYWRDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsXG4gICAgICB7IHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyOiBjb25maWcuaGlkZVJlc3VsdHNPbkJsdXIsXG4gICAgICAgICAgICAgICB0eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW06IGNvbmZpZy5zZWxlY3RGaXJzdEl0ZW0sXG4gICAgICAgICAgICAgICB0eXBlYWhlYWRNaW5MZW5ndGg6IGNvbmZpZy5taW5MZW5ndGhcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQgPSB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCB8fCAyMDtcblxuICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID1cbiAgICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSB2b2lkIDAgPyAxIDogdGhpcy50eXBlYWhlYWRNaW5MZW5ndGg7XG5cbiAgICB0aGlzLnR5cGVhaGVhZFdhaXRNcyA9IHRoaXMudHlwZWFoZWFkV2FpdE1zIHx8IDA7XG5cbiAgICAvLyBhc3luYyBzaG91bGQgYmUgZmFsc2UgaW4gY2FzZSBvZiBhcnJheVxuICAgIGlmIChcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgIShpc09ic2VydmFibGUodGhpcy50eXBlYWhlYWQpKVxuICAgICkge1xuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc09ic2VydmFibGUodGhpcy50eXBlYWhlYWQpKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRBc3luYykge1xuICAgICAgdGhpcy5hc3luY0FjdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zeW5jQWN0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbklucHV0KGU6IGFueSk6IHZvaWQge1xuICAgIC8vIEZvciBgPGlucHV0PmBzLCB1c2UgdGhlIGB2YWx1ZWAgcHJvcGVydHkuIEZvciBvdGhlcnMgdGhhdCBkb24ndCBoYXZlIGFcbiAgICAvLyBgdmFsdWVgIChzdWNoIGFzIGA8c3BhbiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+YCksIHVzZSBlaXRoZXJcbiAgICAvLyBgdGV4dENvbnRlbnRgIG9yIGBpbm5lclRleHRgIChkZXBlbmRpbmcgb24gd2hpY2ggb25lIGlzIHN1cHBvcnRlZCwgaS5lLlxuICAgIC8vIEZpcmVmb3ggb3IgSUUpLlxuICAgIGNvbnN0IHZhbHVlID1cbiAgICAgIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBlLnRhcmdldC52YWx1ZVxuICAgICAgICA6IGUudGFyZ2V0LnRleHRDb250ZW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICA6IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID49IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBvbkNoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIC8vIGVzY1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB1cFxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmV2QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGRvd25cbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0MCB8fCBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5uZXh0QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZE9uQmx1ci5lbWl0KHRoaXMuX2NvbnRhaW5lci5hY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBubyBjb250YWluZXIgLSBubyBwcm9ibGVtc1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2godGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1vZGVsKG1hdGNoOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlU3RyOiBzdHJpbmcgPSBtYXRjaC52YWx1ZTtcbiAgICB0aGlzLm5nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh2YWx1ZVN0cik7XG4gICAgKHRoaXMubmdDb250cm9sLmNvbnRyb2wpLnNldFZhbHVlKHZhbHVlU3RyKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl90eXBlYWhlYWRcbiAgICAgIC5hdHRhY2goVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLy8gdG9kbzogYWRkIGFwcGVuZCB0byBib2R5LCBhZnRlciB1cGRhdGluZyBwb3NpdGlvbmluZyBzZXJ2aWNlXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IGAke3RoaXMuZHJvcHVwID8gJ3RvcCcgOiAnYm90dG9tJ30gbGVmdGB9KVxuICAgICAgLnNob3coe1xuICAgICAgICB0eXBlYWhlYWRSZWY6IHRoaXMsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgIGRyb3B1cDogdGhpcy5kcm9wdXBcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSAwICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyIHx8IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdGhpcy5vbk91dHNpZGVDbGljaygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5fdHlwZWFoZWFkLmluc3RhbmNlO1xuICAgIHRoaXMuX2NvbnRhaW5lci5wYXJlbnQgPSB0aGlzO1xuICAgIC8vIFRoaXMgaW1wcm92ZXMgdGhlIHNwZWVkIGFzIGl0IHdvbid0IGhhdmUgdG8gYmUgZG9uZSBmb3IgZWFjaCBsaXN0IGl0ZW1cbiAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgID8gdG9rZW5pemUoXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICApXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcbiAgICB0aGlzLl9jb250YWluZXIubWF0Y2hlcyA9IHRoaXMuX21hdGNoZXM7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3R5cGVhaGVhZC5pc1Nob3duKSB7XG4gICAgICB0aGlzLl90eXBlYWhlYWQuaGlkZSgpO1xuICAgICAgdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25PdXRzaWRlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiAhdGhpcy5fY29udGFpbmVyLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY2xlYW4gdXAgc3Vic2NyaXB0aW9uc1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl90eXBlYWhlYWQuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jQWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnR5cGVhaGVhZFdhaXRNcyksXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudHlwZWFoZWFkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3luY0FjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy50eXBlYWhlYWRXYWl0TXMpLFxuICAgICAgICAgIG1lcmdlTWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSB0aGlzLm5vcm1hbGl6ZVF1ZXJ5KHZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZyb20odGhpcy50eXBlYWhlYWQpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcigob3B0aW9uOiBUeXBlYWhlYWRNYXRjaCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBvcHRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0TWF0Y2godGhpcy5ub3JtYWxpemVPcHRpb24ob3B0aW9uKSwgbm9ybWFsaXplZFF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0b0FycmF5KClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBub3JtYWxpemVPcHRpb24ob3B0aW9uOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlOiBzdHJpbmcgPSBnZXRWYWx1ZUZyb21PYmplY3QoXG4gICAgICBvcHRpb24sXG4gICAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkXG4gICAgKTtcbiAgICBjb25zdCBub3JtYWxpemVkT3B0aW9uID0gdGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZShvcHRpb25WYWx1ZSlcbiAgICAgIDogb3B0aW9uVmFsdWU7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZE9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZVF1ZXJ5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgLy8gSWYgc2luZ2xlV29yZHMsIGJyZWFrIG1vZGVsIGhlcmUgdG8gbm90IGJlIGRvaW5nIGV4dHJhIHdvcmsgb24gZWFjaFxuICAgIC8vIGl0ZXJhdGlvblxuICAgIGxldCBub3JtYWxpemVkUXVlcnk6IHN0cmluZyB8IHN0cmluZ1tdID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUodmFsdWUpXG4gICAgICA6IHZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgID8gdG9rZW5pemUoXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICApXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcblxuICAgIHJldHVybiBub3JtYWxpemVkUXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVzdE1hdGNoKG1hdGNoOiBzdHJpbmcsIHRlc3Q6IHN0cmluZ1tdIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHNwYWNlTGVuZ3RoOiBudW1iZXI7XG5cbiAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBzcGFjZUxlbmd0aCA9IHRlc3QubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFjZUxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0ZXN0W2ldLmxlbmd0aCA+IDAgJiYgbWF0Y2guaW5kZXhPZih0ZXN0W2ldKSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoLmluZGV4T2YodGVzdCkgPj0gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdKTogdm9pZCB7XG4gICAgdGhpcy5wcmVwYXJlTWF0Y2hlcyhtYXRjaGVzIHx8IFtdKTtcblxuICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KCF0aGlzLmhhc01hdGNoZXMoKSk7XG5cbiAgICBpZiAoIXRoaXMuaGFzTWF0Y2hlcygpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIC8vIGZpeDogcmVtb3ZlIHVzYWdlIG9mIG5nQ29udHJvbCBpbnRlcm5hbHNcbiAgICAgIGNvbnN0IF9jb250cm9sVmFsdWUgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgICA/IGxhdGluaXplKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXG4gICAgICAgIDogdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSkgfHwgJyc7XG4gICAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXG4gICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBfY29udHJvbFZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgICBub3JtYWxpemVkUXVlcnksXG4gICAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgICAgKVxuICAgICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHByZXBhcmVNYXRjaGVzKG9wdGlvbnM6IFR5cGVhaGVhZE1hdGNoW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaW1pdGVkOiBUeXBlYWhlYWRNYXRjaFtdID0gb3B0aW9ucy5zbGljZSgwLCB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCk7XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSB7XG4gICAgICBsZXQgbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuXG4gICAgICAvLyBleHRyYWN0IGFsbCBncm91cCBuYW1lc1xuICAgICAgY29uc3QgZ3JvdXBzID0gbGltaXRlZFxuICAgICAgICAubWFwKChvcHRpb246IFR5cGVhaGVhZE1hdGNoKSA9PlxuICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZClcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKCh2OiBzdHJpbmcsIGk6IG51bWJlciwgYTogc3RyaW5nW10pID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG5cbiAgICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cDogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIGFkZCBncm91cCBoZWFkZXIgdG8gYXJyYXkgb2YgbWF0Y2hlc1xuICAgICAgICBtYXRjaGVzLnB1c2gobmV3IFR5cGVhaGVhZE1hdGNoKGdyb3VwLCBncm91cCwgdHJ1ZSkpO1xuXG4gICAgICAgIC8vIGFkZCBlYWNoIGl0ZW0gb2YgZ3JvdXAgdG8gYXJyYXkgb2YgbWF0Y2hlc1xuICAgICAgICBtYXRjaGVzID0gbWF0Y2hlcy5jb25jYXQoXG4gICAgICAgICAgbGltaXRlZFxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgICAob3B0aW9uOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSA9PT0gZ3JvdXBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgKG9wdGlvbjogYW55KSA9PlxuICAgICAgICAgICAgICAgIG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXRjaGVzID0gbGltaXRlZC5tYXAoXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKG9wdGlvbjogYW55KSA9PlxuICAgICAgICAgIG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGQpXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFzTWF0Y2hlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IFR5cGVhaGVhZENvbmZpZyB9IGZyb20gJy4vdHlwZWFoZWFkLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQsIFR5cGVhaGVhZERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQsIFR5cGVhaGVhZERpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUeXBlYWhlYWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2UsIFR5cGVhaGVhZENvbmZpZ11cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUJBQWEsUUFBUSxHQUE4QjtJQUMvQyxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxH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

/***/ })

}]);
//# sourceMappingURL=27.js.map