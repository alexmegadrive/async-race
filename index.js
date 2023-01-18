/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/code-tag/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/code-tag/dist/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

// Prettier supports these languages:
// https://github.com/prettier/prettier/blob/e46aba0ab279c764dc26e0f41f15c55122440c51/src/language-js/embed.js#L13
var concatenateTemplateLiteralTag = function concatenateTemplateLiteralTag(raw) {
  return String.raw.apply(String, [{
    raw: raw
  }].concat([].slice.call(arguments, 1)));
};
/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/


var any = concatenateTemplateLiteralTag;

exports.any = any;
exports.css = any;
exports.gql = any;
exports.graphql = any;
exports.html = any;
exports.markdown = any;
exports.md = any;
exports.sql = any;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/red-flag.png */ "./src/assets/img/red-flag.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/car.svg */ "./src/assets/img/car.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.garage-controls {\n  display: flex;\n  flex-direction: column;\n  padding: 30px 0;\n  gap: 10px;\n}\n\n.garage-btn {\n  width: 120px;\n  height: 30px;\n}\n\n.garage-controls_line {\n  display: flex;\n  gap: 5px;\n}\n\n.garage-race {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 20px;\n}\n\n.car-box {\n  width: 100%;\n  border-bottom: 2px dotted red;\n}\n.car-box__car-controls {\n  display: flex;\n  height: 30px;\n  gap: 5px;\n}\n.car-box__track-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  width: 90%;\n}\n.car-box__track-container::after {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 50px;\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  content: \"\";\n}\n.car-box__track-controls {\n  display: flex;\n  margin-right: 10px;\n  gap: 5px;\n}\n.car-box__car-track {\n  width: 100%;\n}\n\n.track-control-btn {\n  position: relative;\n  width: 50px;\n  height: 30px;\n  border-radius: 5px;\n}\n.track-control-btn:before {\n  position: absolute;\n  transform: translate(-50%, -50%);\n}\n\n.track-control-btn--start {\n  color: green;\n}\n.track-control-btn--start:before {\n  content: \"🚀\";\n}\n\n.track-control-btn--stop {\n  color: red;\n}\n.track-control-btn--stop:before {\n  content: \"🛑\";\n}\n\n.car-controls__name {\n  height: 100%;\n  color: orange;\n}\n\n#update-id-input {\n  display: none;\n}\n\n.parking {\n  left: 0 !important;\n}\n\n.pagination__button {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 5px;\n  background: none;\n  color: black;\n  text-decoration: none;\n}\n.pagination__button:hover:not(.pagination__button--active) {\n  background-color: #ddd;\n}\n.pagination__button--active {\n  border-radius: 5px;\n  background-color: #4caf50;\n  color: white;\n}\n\n.modal {\n  display: flex;\n  z-index: -1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 30px;\n  transform: translate(-50%, -50%);\n  border-radius: 30px;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 2rem;\n  text-align: center;\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.modal--active {\n  z-index: 2000;\n  opacity: 1;\n}\n\n.win-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 500px;\n  height: 400px;\n  border: radius 10px;\n  background: rgb(241, 241, 241);\n  color: black;\n}\n\ntable.GeneratedTable {\n  width: 100%;\n  background-color: #ffffff;\n  border-collapse: collapse;\n  border-width: 2px;\n  border-color: #ffcc00;\n  border-style: solid;\n  color: #000000;\n}\n\ntable.GeneratedTable td,\ntable.GeneratedTable th {\n  border-width: 2px;\n  border-color: #ffcc00;\n  border-style: solid;\n  padding: 3px;\n}\n\ntable.GeneratedTable thead {\n  background-color: #ffcc00;\n}\n\n#app {\n  width: 100%;\n  margin: 0;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.btn {\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn:hover {\n  background: darkorange;\n}\n.btn--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn--disabled:hover {\n  background: none;\n}\n\n.car {\n  position: relative;\n  background-size: contain;\n  width: 100px;\n  height: 50px;\n  -webkit-mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n  mask-size: contain;\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.car--looser {\n  background: linear-gradient(0deg, red 0%, transparent 50%, transparent);\n}\n.car--flame::before {\n  position: absolute;\n  background-size: contain;\n  content: \"\";\n  width: 25px;\n  height: 25px;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/styles/garage.scss","webpack://./src/styles/winners.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,SAAA;ADEF;;ACAA;EACE,YAAA;EACA,YAAA;ADGF;;ACDA;EACE,aAAA;EACA,QAAA;ADIF;;ACDA;EACE,aAAA;EACA,sBAAA;EAEA,WAAA;EACA,SAAA;ADGF;;ACDA;EAEE,WAAA;EACA,6BAAA;ADGF;ACCE;EACE,aAAA;EACA,YAAA;EACA,QAAA;ADCJ;ACEE;EACE,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;ADAJ;ACEI;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EAEA,mDAAA;EACA,4BAAA;EACA,wBAAA;EACA,WAAA;ADDN;ACKE;EACE,aAAA;EACA,kBAAA;EACA,QAAA;ADHJ;ACKE;EACE,WAAA;ADHJ;;ACMA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ADHF;ACKE;EACE,kBAAA;EACA,gCAAA;ADHJ;;ACMA;EACE,YAAA;ADHF;ACIE;EACE,aAAA;ADFJ;;ACKA;EACE,UAAA;ADFF;ACGE;EACE,aAAA;ADDJ;;ACWA;EACE,YAAA;EACA,aAAA;ADRF;;ACWA;EACE,aAAA;ADRF;;ACWA;EACE,kBAAA;ADRF;;ACWA;EAEE,iBAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,qBAAA;ADTF;ACUE;EACE,sBAAA;ADRJ;ACUE;EACE,kBAAA;EACA,yBAAA;EACA,YAAA;ADRJ;;ACYA;EACE,aAAA;EACA,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,2BAAA;EAAA,wBAAA;EAAA,mBAAA;EACA,aAAA;EACA,gCAAA;EACA,mBAAA;EACA,8BAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,wBAAA;ADTF;ACUE;EACE,aAAA;EACA,UAAA;ADRJ;;ACYA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,YAAA;ADTF;;AEtJA;EACE,WAAA;EACA,yBAAA;EACA,yBAAA;EACA,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,cAAA;AFyJF;;AEtJA;;EAEE,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,YAAA;AFyJF;;AEtJA;EACE,yBAAA;AFyJF;;AAvKA;EACE,WAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;AA0KF;;AAvKA;EACE,kBAAA;EACA,eAAA;EACA,2BAAA;AA0KF;AAzKE;EACE,sBAAA;AA2KJ;AAzKE;EACE,YAAA;EACA,mBAAA;AA2KJ;AA1KI;EACE,gBAAA;AA4KN;;AAvKA;EACE,kBAAA;EAGA,wBAAA;EACA,YAAA;EACA,YAAA;EAGA,0BAAA;EACA,8BAAA;EAEA,kBAAA;EACA,2DAAA;EACA,mDAAA;AAqKF;AAlKE;EACE,uEAAA;AAoKJ;AAjKI;EACE,kBAAA;EACA,wBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;AAmKN","sourcesContent":["@import './styles/garage.scss';\r\n@import './styles/controls.scss';\r\n@import './styles/header.scss';\r\n@import './styles/winners.scss';\r\n\r\n#app {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.btn {\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n  &:hover {\r\n    background: darkorange;\r\n  }\r\n  &--disabled {\r\n    opacity: 0.5;\r\n    cursor: not-allowed;\r\n    &:hover {\r\n      background: none;\r\n    }\r\n  }\r\n}\r\n\r\n.car {\r\n  position: relative;\r\n  // width: 150px;\r\n  // height: 150px;\r\n  background-size: contain;\r\n  width: 100px;\r\n  height: 50px;\r\n  // background-repeat: no-repeat;\r\n  // background: url(http://localhost:3001/assets/img/car.svg);\r\n  -webkit-mask-size: contain;\r\n  -webkit-mask-repeat: no-repeat;\r\n  // -webkit-mask-size: cover;\r\n  mask-size: contain;\r\n  -webkit-mask-image: url('./assets/img/car.svg');\r\n  mask-image: url('./assets/img/car.svg');\r\n  // background-color: blue; /* Or any color of your choice. */\r\n\r\n  &--looser {\r\n    background: linear-gradient(0deg, red 0%, transparent 50%, transparent);\r\n  }\r\n  &--flame {\r\n    &::before {\r\n      position: absolute;\r\n      background-size: contain;\r\n      content: '';\r\n      width: 25px;\r\n      height: 25px;\r\n    }\r\n  }\r\n}\r\n",".garage-controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 30px 0;\r\n  gap: 10px;\r\n}\r\n.garage-btn {\r\n  width: 120px;\r\n  height: 30px;\r\n}\r\n.garage-controls_line {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.garage-race {\r\n  display: flex;\r\n  flex-direction: column;\r\n  // margin-top: 50px;\r\n  width: 100%;\r\n  gap: 20px;\r\n}\r\n.car-box {\r\n  // margin-top: 20px;\r\n  width: 100%;\r\n  border-bottom: 2px dotted red;\r\n\r\n  // .car-box__car-controls\r\n\r\n  &__car-controls {\r\n    display: flex;\r\n    height: 30px;\r\n    gap: 5px;\r\n  }\r\n\r\n  &__track-container {\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center;\r\n    width: 90%;\r\n\r\n    &::after {\r\n      position: absolute;\r\n      right: 0;\r\n      bottom: 0;\r\n      width: 50px;\r\n      height: 100%;\r\n\r\n      background: url('./assets/img/red-flag.png');\r\n      background-repeat: no-repeat;\r\n      background-size: contain;\r\n      content: '';\r\n    }\r\n  }\r\n\r\n  &__track-controls {\r\n    display: flex;\r\n    margin-right: 10px;\r\n    gap: 5px;\r\n  }\r\n  &__car-track {\r\n    width: 100%;\r\n  }\r\n}\r\n.track-control-btn {\r\n  position: relative;\r\n  width: 50px;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n\r\n  &:before {\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n}\r\n.track-control-btn--start {\r\n  color: green;\r\n  &:before {\r\n    content: '🚀';\r\n  }\r\n}\r\n.track-control-btn--stop {\r\n  color: red;\r\n  &:before {\r\n    content: '🛑';\r\n    // width: 20px;\r\n    // height: 20px;\r\n    // background: red;\r\n    // border-radius: 50%;\r\n  }\r\n}\r\n\r\n.car-controls__btn {\r\n}\r\n.car-controls__name {\r\n  height: 100%;\r\n  color: orange;\r\n}\r\n\r\n#update-id-input {\r\n  display: none;\r\n}\r\n\r\n.parking {\r\n  left: 0 !important;\r\n}\r\n\r\n.pagination__button {\r\n  // float: left;\r\n  padding: 8px 16px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background: none;\r\n  color: black;\r\n  text-decoration: none;\r\n  &:hover:not(.pagination__button--active) {\r\n    background-color: #ddd;\r\n  }\r\n  &--active {\r\n    border-radius: 5px;\r\n    background-color: #4caf50;\r\n    color: white;\r\n  }\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: fit-content;\r\n  height: fit-content;\r\n  padding: 30px;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 30px;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  opacity: 0;\r\n  transition: 0.1s ease-in;\r\n  &--active {\r\n    z-index: 2000;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.win-message {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 500px;\r\n  height: 400px;\r\n  border: radius 10px;\r\n  background: rgb(241, 241, 241);\r\n  color: black;\r\n}\r\n","table.GeneratedTable {\r\n  width: 100%;\r\n  background-color: #ffffff;\r\n  border-collapse: collapse;\r\n  border-width: 2px;\r\n  border-color: #ffcc00;\r\n  border-style: solid;\r\n  color: #000000;\r\n}\r\n\r\ntable.GeneratedTable td,\r\ntable.GeneratedTable th {\r\n  border-width: 2px;\r\n  border-color: #ffcc00;\r\n  border-style: solid;\r\n  padding: 3px;\r\n}\r\n\r\ntable.GeneratedTable thead {\r\n  background-color: #ffcc00;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/api.ts":
/*!*******************************!*\
  !*** ./src/components/api.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Model = exports.WinSortOrder = exports.WinSort = void 0;
const cars_1 = __webpack_require__(/*! ../data/cars */ "./src/data/cars.ts");
var WinSort;
(function (WinSort) {
    WinSort["id"] = "id";
    WinSort["wins"] = "wins";
    WinSort["time"] = "time";
})(WinSort = exports.WinSort || (exports.WinSort = {}));
var WinSortOrder;
(function (WinSortOrder) {
    WinSortOrder["asc"] = "ASC";
    WinSortOrder["desc"] = "DESC";
})(WinSortOrder = exports.WinSortOrder || (exports.WinSortOrder = {}));
class Model {
    constructor() {
        this.garageCars = [];
        this.winnerCars = [];
        this.baseUrl = 'http://localhost:3000';
    }
    generateQueryString(queryParams = []) {
        return `?${queryParams.map((x) => `${x.key}=${x.value}`).join('&')}`;
    }
    generateCars() {
        const count = 100;
        for (let i = 0; i < count; i++) {
            const brand = cars_1.carBrands[Math.floor(Math.random() * cars_1.carBrands.length)];
            const model = cars_1.carModels[Math.floor(Math.random() * cars_1.carModels.length)];
            const name = brand + ' ' + model;
            let color = Math.floor(Math.random() * 16777215).toString(16);
            const colorStr = '#' + (color.length === 5 ? '0' + color : color);
            this.API_createCar(name, colorStr);
        }
    }
    async API_controlEngine(id, action) {
        const response = await fetch(`${this.baseUrl}/engine${this.generateQueryString([
            { key: 'id', value: id.toString() },
            { key: 'status', value: action },
        ])}`, { method: 'PATCH' });
        return await response.json();
    }
    async API_getCars(page) {
        const perPage = 7;
        let cars = [];
        let totalCount = 0;
        if (!page && !perPage) {
            const response = await fetch(`${this.baseUrl}/garage`);
            cars = await response.json();
        }
        else {
            const response = await fetch(`${this.baseUrl}/garage${this.generateQueryString([
                { key: '_page', value: page.toString() },
                { key: '_limit', value: perPage.toString() },
            ])}`);
            cars = await response.json();
            totalCount = Number(response.headers.get('X-Total-Count'));
        }
        return { cars, totalCount };
    }
    async API_getWinners(page, sort, order) {
        const perPage = 10;
        let cars = [];
        let totalCount = 0;
        if (!page && !perPage) {
            const response = await fetch(`${this.baseUrl}/winners`);
            cars = await response.json();
        }
        else {
            const response = await fetch(`${this.baseUrl}/winners${this.generateQueryString([
                { key: '_page', value: page.toString() },
                { key: '_limit', value: perPage.toString() },
                { key: '_sort', value: sort },
                { key: '_order', value: order },
            ])}`);
            cars = await response.json();
            totalCount = Number(response.headers.get('X-Total-Count'));
        }
        return { cars, totalCount };
    }
    async API_getCar(id) {
        const response = await fetch(`${this.baseUrl}/garage/${id}`, {
            method: 'GET',
        });
        const result = await response.json();
        console.log('result :', result);
        return result;
    }
    async API_createCar(name, color) {
        const response = await fetch(`${this.baseUrl}/garage`, {
            method: 'POST',
            body: JSON.stringify({ name, color }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
    }
    async API_updateCar(id, name, color) {
        const response = await fetch(`${this.baseUrl}/garage/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, color }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        console.log(result);
    }
    async API_removeCar_Garage(id) {
        const response = await fetch(`${this.baseUrl}/garage/${id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        console.log(result);
        return response;
    }
    async API_removeCar_Winners(id) {
        const response = await fetch(`${this.baseUrl}/winners/${id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        return response;
    }
    async API_handleWinner(winner) {
        const { id, time, name, color } = winner;
        this.API_getWinner(id).then(async (response) => {
            if (response.ok) {
                const result = await response.json();
                console.log('найден winner, проводим update :', result);
                let bestTime = time < Number(result.time) ? time : Number(result.time);
                const updatedWinner = { id, time: bestTime, color, name, wins: (result.wins += 1) };
                await this.API_updateWinner(updatedWinner);
            }
            else {
                console.log('winner не найден, проводим create :', response);
                await this.API_createWinner(winner);
            }
        });
    }
    async API_getWinner(id) {
        const response = await fetch(`${this.baseUrl}/winners/${id}`, {
            method: 'GET',
        });
        return response;
    }
    async API_createWinner(winner) {
        const { id, time, color, name } = winner;
        const response = await fetch(`${this.baseUrl}/winners`, {
            method: 'POST',
            body: JSON.stringify({ id, wins: 1, time, color, name }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        return result;
    }
    async API_updateWinner(updatedWinner) {
        const { id, time, color, name, wins } = updatedWinner;
        const response = await fetch(`${this.baseUrl}/winners/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ wins, time, name, color }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        console.log('result patch Update Winner  :', result);
        return result;
    }
}
exports.Model = Model;


/***/ }),

/***/ "./src/components/view.ts":
/*!********************************!*\
  !*** ./src/components/view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.View = void 0;
const code_tag_1 = __webpack_require__(/*! code-tag */ "./node_modules/code-tag/dist/index.js");
const api_1 = __webpack_require__(/*! ./api */ "./src/components/api.ts");
const navHTML_1 = __webpack_require__(/*! ../templates/navHTML */ "./src/templates/navHTML.ts");
const garageHTML_1 = __webpack_require__(/*! ../templates/garageHTML */ "./src/templates/garageHTML.ts");
const winnersHTML_1 = __webpack_require__(/*! ../templates/winnersHTML */ "./src/templates/winnersHTML.ts");
const api_2 = __webpack_require__(/*! ./api */ "./src/components/api.ts");
var WinnersSort;
(function (WinnersSort) {
    WinnersSort["time"] = "time";
    WinnersSort["wins"] = "wins";
})(WinnersSort || (WinnersSort = {}));
class View {
    constructor() {
        this.model = new api_1.Model();
        this.app = document.querySelector('#app');
        this.currentPageGarage = 1;
        this.currentPageWinners = 1;
        this.raceIsActive = false;
        this.winnersSort = api_2.WinSort.time;
        this.winnersSortOrder = api_2.WinSortOrder.asc;
    }
    renderUI() {
        if (this.app) {
            this.app.insertAdjacentHTML('beforeend', navHTML_1.UISwitch);
            this.app.insertAdjacentHTML('beforeend', garageHTML_1.garage);
            this.app.insertAdjacentHTML('beforeend', winnersHTML_1.winners);
        }
        this.renderGarageCars(this.currentPageGarage);
        this.addControlListeners();
        this.addCarControlListeners();
        this.addSortWinnersListeners();
        this.renderGaragePaginationBtns();
    }
    async renderWinners(page, sort = api_2.WinSort.time, order = api_2.WinSortOrder.desc) {
        const winnersList = document.querySelector('#winners-list');
        const winners = (await this.model.API_getWinners(page, sort, this.winnersSortOrder)).cars;
        const winnersTemplate = (0, code_tag_1.html) `<table class="GeneratedTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        *
      </tbody>
    </table>`;
        const index = winnersTemplate.indexOf('*');
        let winnerRows = '';
        if (winnersList) {
            winnersList.innerHTML = '';
        }
        winners.forEach((winner) => {
            winnerRows += `<tr>
      <th>${winner.id}</th>
      <th><div class="car" style="background: ${winner.color}"></div></th>
      <th>${winner.name}</th>
      <th>${winner.wins}</th>
      <th>${winner.time}</th>
      </tr>`;
        });
        let winnersTable = winnersTemplate.substring(0, index - 1) + winnerRows + winnersTemplate.substring(index);
        winnersList?.insertAdjacentHTML('beforeend', winnersTable);
    }
    addSortWinnersListeners() {
        const sortSelector = document.querySelector('#winners-sort');
        sortSelector.addEventListener('change', (e) => {
            const sortType = e.target.value;
            if (sortType === 'time-asc') {
                this.winnersSort = api_2.WinSort.time;
                this.winnersSortOrder = api_2.WinSortOrder.asc;
            }
            if (sortType === 'wins-desc') {
                this.winnersSort = api_2.WinSort.wins;
                this.winnersSortOrder = api_2.WinSortOrder.desc;
            }
            if (sortType === 'time-desc') {
                this.winnersSort = api_2.WinSort.time;
                this.winnersSortOrder = api_2.WinSortOrder.desc;
            }
            if (sortType === 'wins-asc') {
                this.winnersSort = api_2.WinSort.wins;
                this.winnersSortOrder = api_2.WinSortOrder.asc;
            }
            this.renderWinners(1, this.winnersSort, this.winnersSortOrder);
        });
    }
    async renderGarageCars(page) {
        const response = await this.model.API_getCars(page);
        const garage = document.querySelector('#garage-list');
        if (garage)
            garage.innerHTML = '';
        response.cars.forEach((car) => {
            const carHtml = this.renderGarageCar(car);
            garage?.insertAdjacentHTML('beforeend', carHtml);
        });
    }
    async pureRenderWinners(winners, sort = WinnersSort.time) {
        const winnersList = document.querySelector('#winners-list');
        const winnersTemplate = (0, code_tag_1.html) `<table class="GeneratedTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        *
      </tbody>
    </table>`;
        const index = winnersTemplate.indexOf('*');
        const sortFunc = sort === WinnersSort.time
            ? (a, b) => a.time - b.time
            : (a, b) => b.wins - a.wins;
        let winnerRows = '';
        if (winnersList) {
            winnersList.innerHTML = '';
        }
        winners.sort(sortFunc).forEach((winner) => {
            winnerRows += `<tr>
      <th>${winner.id}</th>
      <th><div class="car" style="background: ${winner.color}"></div></th>
      <th>${winner.name}</th>
      <th>${winner.wins}</th>
      <th>${winner.time}</th>
      </tr>`;
        });
        let winnersTable = winnersTemplate.substring(0, index - 1) + winnerRows + winnersTemplate.substring(index + 1);
        winnersList?.insertAdjacentHTML('beforeend', winnersTable);
    }
    pureRenderGarageCars(cars) {
        const garage = document.querySelector('#garage-list');
        if (garage)
            garage.innerHTML = '';
        cars.forEach((car) => {
            const carHtml = this.renderGarageCar(car);
            garage?.insertAdjacentHTML('beforeend', carHtml);
        });
    }
    async renderGaragePaginationBtns() {
        const paginationContainer = document.querySelector('#garage-pagination');
        const response = await this.model.API_getCars(0);
        const totalCount = response.totalCount;
        const totalPages = Math.ceil(totalCount / 7);
        if (!paginationContainer)
            return;
        paginationContainer.innerHTML = '';
        if (totalPages > 1) {
            paginationContainer.innerHTML = (0, code_tag_1.html) `
        <div style="display: flex; flex-direction:column">
          <div>Entries: ${totalCount.toString()}</div>
          <div>Page:</div>
        </div>
      `;
            for (let i = 1; i <= totalPages; i++) {
                const pagBtn = document.createElement('button');
                pagBtn.classList.add('pagination__button');
                pagBtn.setAttribute('data-page', i.toString());
                pagBtn.innerText = i.toString();
                pagBtn.onclick = () => {
                    if (!paginationContainer)
                        return;
                    const pagBtns = paginationContainer.querySelectorAll('.pagination__button');
                    pagBtns.forEach((btn) => btn.classList.remove('pagination__button--active'));
                    pagBtn.classList.add('pagination__button--active');
                    this.currentPageGarage = i;
                    this.renderGarageCars(this.currentPageGarage);
                };
                if (paginationContainer)
                    paginationContainer.append(pagBtn);
            }
            paginationContainer
                .querySelector(`[data-page="${this.currentPageGarage}"]`)
                ?.classList.add('pagination__button--active');
        }
    }
    async renderWinnersPaginationBtns() {
        const paginationContainer = document.querySelector('#winners-pagination');
        const response = await this.model.API_getWinners(0, api_2.WinSort.time, api_2.WinSortOrder.asc);
        const totalCount = response.totalCount;
        const totalPages = Math.ceil(totalCount / 10);
        if (!paginationContainer)
            return;
        paginationContainer.innerHTML = '';
        if (totalPages > 1) {
            paginationContainer.innerHTML = (0, code_tag_1.html) ` <div style="display: flex; flex-direction:column">
        <div>Entries: ${totalCount.toString()}</div>
        <div>Page:</div>
      </div>`;
            for (let i = 1; i <= totalPages; i++) {
                const pagBtn = document.createElement('button');
                pagBtn.classList.add('pagination__button');
                pagBtn.setAttribute('data-page', i.toString());
                pagBtn.innerText = i.toString();
                pagBtn.onclick = () => {
                    if (!paginationContainer)
                        return;
                    const pagBtns = paginationContainer.querySelectorAll('.pagination__button');
                    pagBtns.forEach((btn) => btn.classList.remove('pagination__button--active'));
                    pagBtn.classList.add('pagination__button--active');
                    this.currentPageWinners = i;
                    this.renderWinners(i, this.winnersSort, this.winnersSortOrder);
                };
                if (paginationContainer)
                    paginationContainer.append(pagBtn);
            }
            paginationContainer
                .querySelector(`[data-page="${this.currentPageWinners}"]`)
                ?.classList.add('pagination__button--active');
        }
    }
    renderGarageCar(car) {
        const carHtml = (0, code_tag_1.html) `<div class="car-box" data-car-id="${car.id.toString()}" data-car-color="${car.color}">
      <div class="car-box__car-controls">
        <button class="btn car-controls__btn" data-car-id="${car.id.toString()}" data-car-action="select">
          Select
        </button>
        <button class="btn car-controls__btn" data-car-id="${car.id.toString()}" data-car-action="remove">
          Remove
        </button>
        <button class="btn car-controls__btn" data-car-id="${car.id.toString()}" data-car-action="test-create-winner">
          <i>[test] create winner</i>
        </button>
        <div class="car-controls__name">${car.name}</div>
      </div>
      <div class="car-box__track-container">
        <div class="car-box__track-controls">
          <button
            class="btn track-control-btn track-control-btn--start"
            data-car-action="start"
            data-car-id="${car.id.toString()}"
          ></button>
          <button
            class="btn btn--disabled track-control-btn track-control-btn--stop"
            data-car-action="stop"
            data-car-id="${car.id.toString()}"
          ></button>
        </div>
        <div class="car-box__car-track">
          <div class="car" style="background: ${car.color}"></div>
        </div>
      </div>
    </div>`;
        return carHtml;
    }
    addControlListeners() {
        const garageControls = document.querySelector('#garage-controls');
        const garageView = document.querySelector('#garage-view');
        const winnersView = document.querySelector('#winners-view');
        const navigateGarage = document.querySelector('#switch-garage');
        const navigateWinners = document.querySelector('#switch-winners');
        navigateGarage?.addEventListener('click', () => {
            if (garageView)
                garageView.hidden = false;
            if (winnersView)
                winnersView.hidden = true;
        });
        navigateWinners?.addEventListener('click', () => {
            if (garageView)
                garageView.hidden = true;
            if (winnersView)
                winnersView.hidden = false;
            this.renderWinnersPaginationBtns();
            this.renderWinners(this.currentPageWinners, this.winnersSort, this.winnersSortOrder);
        });
        garageControls?.addEventListener('click', async (e) => {
            const target = e.target;
            const action = target?.dataset?.garageAction;
            switch (action) {
                case 'create':
                    this.handleCreateCar();
                    break;
                case 'update':
                    this.handleUpdateCar();
                    break;
                case 'race':
                    this.handleStartRace();
                    break;
                case 'reset':
                    this.handleResetCars();
                    break;
                case 'generate':
                    this.handleGenerateCars();
                    break;
                default:
                    break;
            }
        });
    }
    handleResetCars() {
        const cars = document.querySelectorAll('.car');
        const startBtns = document.querySelectorAll('[data-car-action="start"]');
        const stopBtns = document.querySelectorAll('[data-car-action="stop"]');
        startBtns.forEach((btn) => btn.classList.remove('btn--disabled'));
        stopBtns.forEach((btn) => btn.classList.add('btn--disabled'));
        cars.forEach((car) => {
            car.style.left = '0';
            car.classList.add('parking');
        });
    }
    handleCreateCar() {
        const nameInput = document.querySelector('#new-name-input');
        const colorInput = document.querySelector('#new-color-input');
        const name = nameInput.value;
        const color = colorInput.value;
        if (name) {
            this.model.API_createCar(name, color);
            this.renderGaragePaginationBtns();
            this.renderGarageCars(this.currentPageGarage);
            nameInput.value = '';
        }
        else
            alert('Please type name');
    }
    async handleUpdateCar() {
        const nameInput = document.querySelector('#update-name-input');
        const colorInput = document.querySelector('#update-color-input');
        const idInput = document.querySelector('#update-id-input');
        const name = nameInput.value;
        const id = Number(idInput.value);
        const color = colorInput.value;
        await this.model.API_updateCar(id, name, color);
        this.renderGarageCars(this.currentPageGarage);
        nameInput.value = '';
        idInput.value = '';
    }
    handleGenerateCars() {
        this.model.generateCars();
        setTimeout(() => {
            this.renderGarageCars(this.currentPageGarage);
            this.renderGaragePaginationBtns();
        }, 1000);
    }
    handleStartRace() {
        this.raceIsActive = true;
        const startBtns = document.querySelectorAll('[data-car-action="start"]');
        startBtns.forEach((el) => el.click());
    }
    addCarControlListeners() {
        const garageList = document.querySelector('#garage-list');
        let currentWinnerId;
        garageList?.addEventListener('click', async (e) => {
            const target = e.target;
            const box = target.closest('.car-box');
            if (!box)
                return;
            const action = target.getAttribute('data-car-action') || 'stopped';
            const carId = Number(box.getAttribute('data-car-id'));
            const carColor = box.getAttribute('data-car-color') || '';
            const carNameBox = box.querySelector('.car-controls__name');
            const startBtn = box.querySelector('[data-car-action="start"]');
            const stopBtn = box.querySelector('[data-car-action="stop"]');
            const carName = carNameBox.innerText || '';
            const carFigure = box?.querySelector('.car');
            const handleStartCar = async () => {
                const startTime = new Date().getTime();
                if (startBtn.classList.contains('btn--disabled'))
                    return;
                let carMovingProgress;
                startBtn.classList.add('btn--disabled');
                stopBtn.classList.remove('btn--disabled');
                box.classList.remove('car--looser');
                carFigure.classList.remove('parking');
                carFigure.style.left = '0';
                this.model
                    .API_controlEngine(carId, 'started')
                    .then((result) => {
                    const finishMilliSeconds = result.distance / result.velocity;
                    const step = 100 / finishMilliSeconds;
                    let currentProgress = 0;
                    carMovingProgress = setInterval(() => {
                        currentProgress += step;
                        if (carFigure && startBtn.classList.contains('btn--disabled')) {
                            carFigure.style.left = `${currentProgress <= 1 ? currentProgress * 100 : 100}%`;
                        }
                        stopBtn.addEventListener('click', () => {
                            clearInterval(carMovingProgress);
                            return;
                        });
                    }, 100);
                    return this.model.API_controlEngine(carId, 'drive');
                })
                    .then((result) => {
                    if (this.raceIsActive) {
                        if (!currentWinnerId) {
                            this.raceIsActive = false;
                            currentWinnerId = carId;
                            const finishTime = new Date().getTime();
                            const winnerTime = (finishTime - startTime) / 1000;
                            const winner = { id: carId, time: winnerTime, color: carColor, name: carName };
                            this.model.API_handleWinner(winner);
                            this.renderWinnerMessage(winner);
                            currentWinnerId = null;
                        }
                    }
                })
                    .catch((error) => {
                    console.log(error);
                    startBtn.classList.remove('btn--disabled');
                    stopBtn.classList.add('btn--disabled');
                    box.classList.add('car--looser');
                    setTimeout(() => {
                        box.classList.remove('car--looser');
                    }, 5000);
                })
                    .finally(() => {
                    clearInterval(carMovingProgress);
                    startBtn.classList.remove('btn--disabled');
                    stopBtn.classList.add('btn--disabled');
                });
            };
            const handleStopCar = async () => {
                const result = await this.model.API_controlEngine(carId, 'stopped');
                stopBtn.classList.add('btn--disabled');
                startBtn.classList.remove('btn--disabled');
                carFigure.style.left = '0';
                carFigure.classList.add('parking');
            };
            const handleRemoveCar = async (id) => {
                await this.model.API_removeCar_Garage(id);
                await this.model.API_removeCar_Winners(id);
                this.renderGarageCars(this.currentPageGarage);
                this.renderGaragePaginationBtns();
            };
            const handleSelectCar = (id) => {
                const nameInput = document.querySelector('#update-name-input');
                const colorInput = document.querySelector('#update-color-input');
                const idInput = document.querySelector('#update-id-input');
                nameInput.value = carNameBox?.textContent || '';
                colorInput.value = carColor || '';
                idInput.value = carId.toString() || '';
            };
            switch (action) {
                case 'start':
                    handleStartCar();
                    break;
                case 'stop':
                    handleStopCar();
                    break;
                case 'select':
                    handleSelectCar(carId);
                    break;
                case 'remove':
                    handleRemoveCar(carId);
                    break;
                case 'test-create-winner':
                    const time = Math.random() * 10;
                    this.model.API_handleWinner({ id: carId, time: time, color: carColor, name: carName });
                    break;
                default:
                    break;
            }
        });
    }
    renderWinnerMessage(winner) {
        const message = document.createElement('div');
        message.innerHTML = (0, code_tag_1.html) `<div class="modal modal--active" id="modal">
      <div>${winner.name.toUpperCase()} IS WINNER!</div>
      <div>TIME: ${winner.time.toString()}</div>
      <div>ID: ${winner.id.toString()}</div>
    </div>`;
        this.app?.append(message);
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}
exports.View = View;


/***/ }),

/***/ "./src/data/cars.ts":
/*!**************************!*\
  !*** ./src/data/cars.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.carModels = exports.carBrands = void 0;
exports.carBrands = [
    'Abarth',
    'Alfa Romeo',
    'Aston Martin',
    'Audi',
    'Bentley',
    'BMW',
    'Bugatti',
    'Cadillac',
    'Chevrolet',
    'Chrysler',
    'Citroën',
    'Dacia',
    'Daewoo',
    'Daihatsu',
    'Dodge',
    'Donkervoort',
    'DS',
    'Ferrari',
    'Fiat',
    'Fisker',
    'Ford',
    'Honda',
    'Hummer',
    'Hyundai',
    'Infiniti',
    'Iveco',
    'Jaguar',
    'Jeep',
    'Kia',
    'KTM',
    'Lada',
    'Lamborghini',
    'Lancia',
    'Land Rover',
    'Landwind',
    'Lexus',
    'Lotus',
    'Maserati',
    'Maybach',
    'Mazda',
    'McLaren',
    'Mercedes-Benz',
    'MG',
    'Mini',
    'Mitsubishi',
    'Morgan',
    'Nissan',
    'Opel',
    'Peugeot',
    'Porsche',
    'Renault',
    'Rolls-Royce',
    'Rover',
    'Saab',
    'Seat',
    'Skoda',
    'Smart',
    'SsangYong',
    'Subaru',
    'Suzuki',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo',
];
exports.carModels = [
    'Discovery',
    'Corolla',
    'Camvry',
    'XC90',
    'A3',
    'A4',
    'Primera',
    'Impreza',
    'Cayenne',
    'Turbo',
    'Super',
    'Mega',
    '9000',
];


/***/ }),

/***/ "./src/templates/garageHTML.ts":
/*!*************************************!*\
  !*** ./src/templates/garageHTML.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.garage = void 0;
const code_tag_1 = __webpack_require__(/*! code-tag */ "./node_modules/code-tag/dist/index.js");
exports.garage = (0, code_tag_1.html) `
  <div class="garage" id="garage-view">
    <div class="garage-controls" id="garage-controls">
      <div class="garage-controls_line">
        <input type="text" id="new-name-input" placeholder="New car's name" />
        <input type="color" id="new-color-input" />
        <button class="btn garage-btn" data-garage-action="create">Create</button>
      </div>
      <div class="garage-controls_line">
        <input type="text" id="update-name-input" placeholder="Select a car firstly..." />
        <input type="color" id="update-color-input" />
        <input type="text" id="update-id-input" />
        <button class="btn garage-btn" data-garage-action="update">Update</button>
      </div>
      <div class="garage-controls_line">
        <button class="btn garage-btn" data-garage-action="race">Race</button>
        <button class="btn garage-btn" data-garage-action="reset">Reset</button>
        <button class="btn garage-btn" data-garage-action="generate">Generate cars</button>
      </div>
      <div class="garage-pagination" id="garage-pagination"></div>
    </div>

    <div class="garage-race" id="garage-list"></div>
  </div>
`;


/***/ }),

/***/ "./src/templates/navHTML.ts":
/*!**********************************!*\
  !*** ./src/templates/navHTML.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UISwitch = void 0;
const code_tag_1 = __webpack_require__(/*! code-tag */ "./node_modules/code-tag/dist/index.js");
exports.UISwitch = (0, code_tag_1.html) `
  <div class="ui-switch">
    <button class="btn" id="switch-garage">To Garage</button>
    <button class="btn" id="switch-winners">To Winners</button>
  </div>
`;
// export const controls = html` <div class="garage-controls" id="garage-controls">
//   <div class="garage-controls_line">
//     <input type="text" id="new-name-input" placeholder="New car name" />
//     <input type="color" id="new-color-input" />
//     <button class="btn garage-btn" data-garage-action="create">Create</button>
//   </div>
//   <div class="garage-controls_line">
//     <input type="text" id="update-name-input" placeholder="Selected car name" />
//     <input type="color" id="update-color-input" />
//     <input type="text" id="update-id-input" />
//     <button class="btn garage-btn" data-garage-action="update">Update</button>
//   </div>
//   <div class="garage-controls_line">
//     <button class="btn garage-btn" data-garage-action="race">Race</button>
//     <button class="btn garage-btn" data-garage-action="reset">Reset</button>
//     <button class="btn garage-btn" data-garage-action="generate">Generate cars</button>
//   </div>
//   <div class="garage-pagination" id="garage-pagination"></div>
// </div>`;


/***/ }),

/***/ "./src/templates/winnersHTML.ts":
/*!**************************************!*\
  !*** ./src/templates/winnersHTML.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.winners = void 0;
const code_tag_1 = __webpack_require__(/*! code-tag */ "./node_modules/code-tag/dist/index.js");
exports.winners = (0, code_tag_1.html) `
  <div id="winners-view" hidden>
    <div id="winners-pagination"></div>
    <select class="" name="" id="winners-sort" value="">
      <option class="" value="time-asc">Time (best to worst)</option>
      <option class="" value="time-desc">Time (worst to best)</option>
      <option class="" value="wins-desc">Wins (best to worst</option>
      <option class="" value="wins-asc">Wins (worst to best</option>
      <!-- <option class="" value="id">ID</option> -->
    </select>
    <div class="winners-list" id="winners-list"></div>
  </div>
`;


/***/ }),

/***/ "./src/assets/img/car.svg":
/*!********************************!*\
  !*** ./src/assets/img/car.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/car.svg";

/***/ }),

/***/ "./src/assets/img/red-flag.png":
/*!*************************************!*\
  !*** ./src/assets/img/red-flag.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/red-flag.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
const view_1 = __webpack_require__(/*! ./components/view */ "./src/components/view.ts");
const view = new view_1.View();
// const model = new Model();
// model.getGarageCars();
view.renderUI();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map