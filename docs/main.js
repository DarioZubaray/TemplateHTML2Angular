(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var APP_ROUTES = [
    { path: 'home', component: _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_2__["PortafolioComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'item/:id', component: _pages_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"] },
    { path: 'search/:termino', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<section class=\"ae-container-fluid rk-main\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/productos.service */ "./src/app/services/productos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(infoPagina, productosService) {
        this.infoPagina = infoPagina;
        this.productosService = productosService;
        this.title = 'portafolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"], _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_7__["PortafolioComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _pages_item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"],
                _pages_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-grid au-xs-ta-center au-mb-4\">\r\n\r\n    <div *ngFor=\"let persona of _is.equipo\"  class=\"animated fadeIn ae-grid__item item-lg-4 ae-kappa au-mb-3\">\r\n        <img [src]=\"persona.url\" alt=\"\" class=\"au-mb-3\">\r\n        <h5 class=\"ae-u-bolder au-mt-2\">{{persona.nombre}}</h5>\r\n        <p class=\"ae-u-bolder au-mb-3\">{{persona.subtitulo}}</p>\r\n        <p class=\"au-lg-ta-left au-mb-3 au-pl-4 au-pr-4\">{{persona.frase}}</p>\r\n        <a target=\"_blank\" href=\"https://twitter.com{{ persona.twitter }}\" class=\"ae-u-bolder au-underline\">{{persona.twitter}}</a>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"ae-grid au-pt-2\">\r\n    <div class=\"ae-grid__item item-lg-8 item-lg--offset-2\">\r\n        <h4 class=\"ae-u-bolder\">Title example</h4>\r\n        <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>\r\n    </div>\r\n</div>\r\n<div class=\"ae-grid ae-grid--alt au-xs-ptp-1\">\r\n    <div class=\"ae-grid__item--alt item-lg-4\">\r\n        <h6 class=\"ae-u-boldest\">About Us</h6>\r\n        <p class=\"au-lh-3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n    </div>\r\n    <div class=\"ae-grid__item--alt item-lg-4\">\r\n        <h6 class=\"ae-u-boldest\">Our Mission</h6>\r\n        <p class=\"au-lh-3\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n    </div>\r\n    <div class=\"ae-grid__item--alt item-lg-4\">\r\n        <h6 class=\"ae-u-boldest\">Our Clients</h6>\r\n        <p class=\"au-lh-3\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>\r\n        <p class=\"au-lh-3\">Nemo enim ipsam voluptatem quia voluptas</p>\r\n    </div>\r\n</div>\r\n<p class=\"au-flex au-pt-4 group-buttons\">\r\n    <a href=\"portfolio.html\" class=\"au-mt-4 arrow-button arrow-button--right arrow-button--out\">View Our Portfolio\r\n    <span class=\"arrow-cont\">\r\n      <svg>\r\n        <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\r\n      </svg>\r\n    </span>\r\n  </a>\r\n</p>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(_is) {
        this._is = _is;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html")
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/item/item.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/item/item.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"producto\">\r\n    <header [ngStyle]=\"{'background-image': 'url(assets/productos/'+id+'/main.jpg)'}\" \r\n            class=\"rk-portfolio-cover  item-inside-1\">\r\n        <div class=\"item-inside__meta\">\r\n            <h1 class=\"ae-u-bolder rk-portfolio-title \">{{ producto.producto }}</h1>\r\n            <p class=\"ae-theta rk-portfolio-category \">{{ producto.categoria }}</p>\r\n        </div>\r\n    </header>\r\n    <div class=\"ae-container-fluid\">\r\n        <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\r\n            <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\r\n                <h2 class=\"rk-portfolio-inner-title \">{{ producto.subtitulo1 }}</h2>\r\n            </div>\r\n            <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\r\n                <p class=\"rk-portfolio-inner-client \"><span class=\"ae-lambda\">Client: </span><span class=\"ae-u-bolder\">Agency Design Studio</span></p>\r\n                <p class=\"au-underline rk-portfolio-inner-website \"><a href=\"#0\" class=\"ae-kappa\">www.agencydesign.com</a></p>\r\n                <p class=\"ae-kappa ae-u-bold rk-portfolio-inner-date \">12 August, 2015</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\r\n        <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\r\n            <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\r\n                <h4 class=\"ae-u-bolder\">{{ producto.subtitulo1 }}</h4>\r\n                <p class=\"ae-eta\">{{ producto.desc1 }}</p>\r\n            </div>\r\n            <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\r\n                <img src=\"assets/productos/{{id}}/pic-1.jpg\" alt=\"Urku Portfolio\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ae-grid ae-grid--collapse\">\r\n            <div class=\"ae-grid__item item-lg-8\">\r\n                <img src=\"assets/productos/{{id}}/pic-2.jpg\" alt=\"Urku Portfolio\">\r\n            </div>\r\n            <div class=\"ae-grid__item item-lg-3 item-lg--offset-1 au-lg-ptp-1\">\r\n                <p>{{ producto.desc2 }}</p>\r\n                <p class=\"ae-u-bolder\">{{ producto.subtitulo2 }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = /** @class */ (function () {
    function ItemComponent(router, _ps) {
        this.router = router;
        this._ps = _ps;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (parametros) {
            _this.id = parametros['id'];
            _this._ps.getProducto(_this.id)
                .subscribe(function (producto) {
                console.log(producto);
                _this.producto = producto;
            });
        });
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/pages/item/item.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio\">\r\n\r\n    <div align=\"center\" *ngIf=\"productoService.cargando\">\r\n        <h2>Cargando ...</h2>\r\n        <div  class=\"loader loader--style1\" title=\"0\">\r\n            <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\r\n                <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n                    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n                    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n                    <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\" dur=\"0.5s\" repeatCount=\"indefinite\"/>\r\n                </path>\r\n            </svg>\r\n        </div>\r\n        <p>Espere por favor</p>\r\n    </div>\r\n\r\n    <div *ngIf=\"!productoService.cargando\" class=\"animated fadeIn ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n        <a *ngFor=\"let producto of productoService.producto\" [routerLink]=\"['/item', producto.cod]\" class=\"rk-item ae-masonry__item\">\r\n            <img [routerLink]=\"['/item', producto.cod]\" src=\"assets/productos/{{producto.url}}.jpg\" alt=\"\">\r\n            <div class=\"item-meta\">\r\n                <h2>{{producto.titulo}}</h2>\r\n                <p>{{producto.categoria}}</p>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortafolioComponent = /** @class */ (function () {
    function PortafolioComponent(productoService) {
        this.productoService = productoService;
    }
    PortafolioComponent.prototype.ngOnInit = function () {
    };
    PortafolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portafolio',
            template: __webpack_require__(/*! ./portafolio.component.html */ "./src/app/pages/portafolio/portafolio.component.html")
        }),
        __metadata("design:paramtypes", [_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"]])
    ], PortafolioComponent);
    return PortafolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"animated fadeIn ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n    <a *ngFor=\"let producto of _ps.productosFiltrados\" [routerLink]=\"['/item', producto.cod]\" class=\"rk-item ae-masonry__item\">\r\n        <img [routerLink]=\"['/item', producto.cod]\" src=\"assets/productos/{{producto.url}}.jpg\" alt=\"\">\r\n        <div class=\"item-meta\">\r\n            <h2>{{producto.titulo}}</h2>\r\n            <p>{{producto.categoria}}</p>\r\n        </div>\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, _ps) {
        this.route = route;
        this._ps = _ps;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params['termino']);
            _this._ps.buscarProducto(params['termino']);
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/info-pagina.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/info-pagina.service.ts ***!
  \*************************************************/
/*! exports provided: InfoPaginaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPaginaService", function() { return InfoPaginaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPaginaService = /** @class */ (function () {
    function InfoPaginaService(http) {
        this.http = http;
        this.info = {};
        this.cargando = false;
        this.equipo = [];
        console.log('Info Servicio inicializado');
        this.cargarInfo();
        this.cargarEquipo();
        this.cargando = true;
    }
    InfoPaginaService.prototype.cargarInfo = function () {
        var _this = this;
        this.http.get('assets/data/data-pagina.json')
            .subscribe(function (resp) {
            _this.info = resp;
        });
    };
    InfoPaginaService.prototype.cargarEquipo = function () {
        var _this = this;
        var urlFirebase = 'https://angular-templatehtml.firebaseio.com/equipo.json';
        this.http.get(urlFirebase)
            .subscribe(function (resp) {
            _this.equipo = resp;
        });
    };
    InfoPaginaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InfoPaginaService);
    return InfoPaginaService;
}());



/***/ }),

/***/ "./src/app/services/productos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductosService = /** @class */ (function () {
    function ProductosService(http) {
        var _this = this;
        this.http = http;
        this.cargando = true;
        this.producto = [];
        this.productosFiltrados = [];
        this.cargarProductos();
        setTimeout(function () {
            _this.cargando = false;
        }, 3000);
    }
    ProductosService.prototype.cargarProductos = function () {
        var _this = this;
        var urlFirebase = 'https://angular-templatehtml.firebaseio.com/productos_idx.json';
        return new Promise(function (resolve, reject) {
            _this.http.get(urlFirebase)
                .subscribe(function (resp) {
                console.log(resp);
                _this.producto = resp;
                resolve();
            });
        });
    };
    ProductosService.prototype.getProducto = function (id) {
        return this.http.get("https://angular-templatehtml.firebaseio.com/productos/" + id + ".json");
    };
    ProductosService.prototype.buscarProducto = function (termino) {
        var _this = this;
        if (this.producto.length === 0) {
            this.cargarProductos().then(function () {
                _this.filtrarProductos(termino);
            });
        }
        else {
            this.filtrarProductos(termino);
        }
        console.log(this.productosFiltrados);
    };
    ProductosService.prototype.filtrarProductos = function (termino) {
        var _this = this;
        this.productosFiltrados = [];
        termino = termino.toLowerCase();
        this.producto.forEach(function (p) {
            var titulo = p.titulo.toLowerCase();
            var categoria = p.categoria.toLowerCase();
            if (categoria.indexOf(termino) >= 0
                || titulo.indexOf(termino) >= 0) {
                _this.productosFiltrados.push(p);
            }
        });
    };
    ProductosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductosService);
    return ProductosService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"ae-container-fluid rk-footer \">\r\n    <div class=\"ae-grid ae-grid--collapse\">\r\n        <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left\">\r\n            <ul class=\"rk-menu rk-footer-menu\">\r\n                <li class=\"rk-menu__item\">\r\n                    <a routerLink=\"home\" class=\"rk-menu__link\">Home</a>\r\n                </li>\r\n                <li class=\"rk-menu__item\">\r\n                    <a routerLink=\"About\" class=\"rk-menu__link\">About</a>\r\n                </li>\r\n            </ul>\r\n            <p class=\"rk-footer__text rk-footer__copy \">\r\n                <span class=\"ae-u-bold\">© </span><span class=\"ae-u-bolder\">{{ anio }} URKU PORTFOLIO </span> All Right Reserved.\r\n            </p>\r\n        </div>\r\n        <div class=\"ae-grid__item item-lg-4 au-xs-ta-center\">\r\n            <a target=\"_blank\" [href]=\"infoPagina.info.facebook\" class=\"rk-social-btn \">\r\n                <svg><use xlink:href=\"assets/img/symbols.svg#icon-facebook\"></use></svg>\r\n            </a>\r\n            <a target=\"_blank\" [href]=\"infoPagina.info.twitter\" class=\"rk-social-btn \">\r\n                <svg><use xlink:href=\"assets/img/symbols.svg#icon-twitter\"></use></svg>\r\n            </a>\r\n            <a target=\"_blank\" [href]=\"infoPagina.info.instagram\" class=\"rk-social-btn \">\r\n                <svg><use xlink:href=\"assets/img/symbols.svg#icon-pinterest\"></use></svg>\r\n            </a>\r\n            <a target=\"_blank\" [href]=\"infoPagina.info.tumblr\" class=\"rk-social-btn \">\r\n                <svg><use xlink:href=\"assets/img/symbols.svg#icon-tumblr\"></use></svg>\r\n            </a>\r\n        </div>\r\n        <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right\">\r\n            <p class=\"rk-footer__text rk-footer__contact \">\r\n                <span class=\"ae-u-bold\">Email: </span>\r\n                <span class=\"ae-u-bolder\">\r\n                    <a href=\"mailTo:{{infoPagina.info.email}}\" class=\"rk-dark-color \">{{infoPagina.info.email}} </a>\r\n                </span>\r\n            </p>\r\n            <p class=\"rk-footer__text rk-footer__by\">Theme by <a href=\"http://pixeden.com\" class=\"ae-u-bolder\">Pixeden.</a></p>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(infoPagina) {
        this.infoPagina = infoPagina;
        this.anio = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"ae-container-fluid ae-container-fluid--full rk-header \">\r\n    <input type=\"checkbox\" id=\"mobile-menu\" class=\"rk-mobile-menu\">\r\n    <label for=\"mobile-menu\">\r\n    <svg>\r\n      <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\r\n    </svg>\r\n    <svg>\r\n      <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\r\n    </svg>\r\n    <svg>\r\n      <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\r\n    </svg>\r\n  </label>\r\n    <div class=\"ae-container-fluid rk-topbar\">\r\n        <h1 class=\"rk-logo\">\r\n            <a routerLink=\"home\">{{infoPagina.info.titulo}}<sup>tm</sup>\r\n      </a>\r\n        </h1>\r\n        <nav class=\"rk-navigation\">\r\n\r\n            <ul class=\"rk-menu\">\r\n                <li routerLinkActive=\"active\" class=\"rk-menu__item\">\r\n                    <a routerLink=\"home\" class=\"rk-menu__link\">Home</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\" class=\"rk-menu__item\">\r\n                    <a routerLink=\"about\" class=\"rk-menu__link\">About</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"rk-search\">\r\n                <input (keyup.enter)=\"this.buscarProducto(txtBuscar.value)\"\r\n                        type=\"text\" placeholder=\"Buscar...\" \r\n                        id=\"urku-search\" class=\"rk-search-field\"\r\n                        #txtBuscar>\r\n                <label for=\"urku-search\">\r\n                <svg>\r\n                    <use xlink:href=\"assets/img/symbols.svg#icon-search\"></use>\r\n                </svg>\r\n                </label>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(infoPagina, router) {
        this.infoPagina = infoPagina;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.buscarProducto = function (termino) {
        console.log(termino);
        if (termino.length < 1) {
            return;
        }
        this.router.navigate(['/search', termino]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\angular\fernando herrera\TemplateHTML2Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map