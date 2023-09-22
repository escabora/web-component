/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blue; });\nfunction Blue(props) {\n  return class extends HTMLElement {\n    constructor() {\n      super();\n      const shaddow = this.attachShadow({\n        mode: 'open'\n      });\n      this.render(shaddow, props);\n    }\n\n    render(shaddow, props) {\n      const section = document.createElement('section');\n      section.innerHTML = `<div class='my-component'>\n      ${props.name}\n      </div>`;\n      shaddow.appendChild(section);\n    }\n\n  };\n}\nconst props = {\n  images: [],\n  name: 'Component'\n};\ncustomElements.define('blue-component', Blue(props));\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: no mixin named force-show\\n        on line 3 of src/styles/utils/critical-helpers.scss\\n        from line 1 of src/styles/utils/index.scss\\n        from line 9 of /Users/gescabora/Documents/estudos/web-component/src/styles/index.scss\\n>>     @include force-show;\\n\\n   -------------^\\n\\n    at /Users/gescabora/Documents/estudos/web-component/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /Users/gescabora/Documents/estudos/web-component/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/gescabora/Documents/estudos/web-component/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/gescabora/Documents/estudos/web-component/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.callback (/Users/gescabora/Documents/estudos/web-component/node_modules/sass-loader/dist/index.js:73:7)\\n    at Object.done [as callback] (/Users/gescabora/Documents/estudos/web-component/node_modules/neo-async/async.js:8069:18)\\n    at options.error (/Users/gescabora/Documents/estudos/web-component/node_modules/node-sass/lib/index.js:294:32)\");\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./src/js/index.js ./src/styles/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/gescabora/Documents/estudos/web-component/src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! /Users/gescabora/Documents/estudos/web-component/src/styles/index.scss */\"./src/styles/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/styles/index.scss?");

/***/ })

/******/ });