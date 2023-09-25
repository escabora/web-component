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

/***/ "./src/js/components/CardPlaceholder/index.js":
/*!****************************************************!*\
  !*** ./src/js/components/CardPlaceholder/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CardPlaceholder = () => {\n  return `<div class='proposal__container'>\n  </div>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPlaceholder);\n\n//# sourceURL=webpack:///./src/js/components/CardPlaceholder/index.js?");

/***/ }),

/***/ "./src/js/components/Form/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Form/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Progress */ \"./src/js/components/Progress/index.js\");\n/* harmony import */ var _CardPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CardPlaceholder */ \"./src/js/components/CardPlaceholder/index.js\");\n\n\n\nconst Form = props => {\n  return `\n  ${Object(_CardPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}\n  <div class='proposal__container'>\n  ${Object(_Progress__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props)}\n  <form>\n  <div class=\"col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper\"><div class=\"ds-input\"><label class=\"ds-input__label\" for=\"ds-field-cpf\" id=\"ds-label-cpf\" aria-label=\"CPF\" aria-hidden=\"true\">CPF</label><div class=\"ds-input__field\"><input id=\"ds-field-cpf\" type=\"text\" aria-labelledby=\"ds-label-cpf\" aria-required=\"true\" aria-invalid=\"false\" autocomplete=\"on\" placeholder=\"000.000.000-00\" inputmode=\"numeric\" pattern=\"[0-9.-]*\" name=\"cpf\" value=\"429.144.368-40\"><div class=\"ds-input__icon ds-input__icon--right\" aria-hidden=\"true\"></div></div></div></div>\n\n  <div class=\"col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper\"><div class=\"ds-input\"><label class=\"ds-input__label\" for=\"ds-field-lead_name\" id=\"ds-label-lead_name\" aria-label=\"Nome completo\" aria-hidden=\"true\">Nome completo</label><div class=\"ds-input__field\"><input id=\"ds-field-lead_name\" type=\"text\" aria-labelledby=\"ds-label-lead_name\" aria-required=\"true\" aria-invalid=\"false\" autocomplete=\"on\" placeholder=\"Antonio Coutinho\" name=\"lead_name\" value=\"\"><div class=\"ds-input__icon ds-input__icon--right\" aria-hidden=\"true\"></div></div></div></div>\n\n  <div class=\"col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper\"><div class=\"ds-email\"><div class=\"ds-email__field\"><div class=\"ds-input\"><label class=\"ds-input__label\" for=\"ds-field-email\" id=\"ds-label-email\" aria-label=\"Email\" aria-hidden=\"true\">Email</label><div class=\"ds-input__field\"><input id=\"ds-field-email\" type=\"email\" aria-labelledby=\"ds-label-email\" aria-required=\"true\" aria-invalid=\"false\" autocomplete=\"off\" name=\"email\" control=\"[object Object]\" placeholder=\"Coloque seu email aqui\" required=\"\" validators=\"[object Object]\" spellcheck=\"false\" value=\"\"><div class=\"ds-input__icon ds-input__icon--right\" aria-hidden=\"true\"></div></div></div></div></div></div>\n\n  <div class=\"col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper\"><div class=\"ds-input\"><label class=\"ds-input__label\" for=\"ds-field-cellphone_number\" id=\"ds-label-cellphone_number\" aria-label=\"Celular\" aria-hidden=\"true\">Celular</label><div class=\"ds-input__field\"><input id=\"ds-field-cellphone_number\" type=\"tel\" aria-labelledby=\"ds-label-cellphone_number\" aria-required=\"true\" aria-invalid=\"false\" autocomplete=\"mobile tel-national\" name=\"cellphone_number\" placeholder=\"(00) 00000 0000\" value=\"\"><div class=\"ds-input__icon ds-input__icon--right\" aria-hidden=\"true\"></div></div></div></div>\n\n  <div class=\"sender\"><button class=\"ds-button custom sender__next ds-button--primary ds-button--disabled\" type=\"submit\" data-type=\"next\" disabled=\"\">Próximo</button></div>\n  </form></div>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./src/js/components/Form/index.js?");

/***/ }),

/***/ "./src/js/components/Progress/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/Progress/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Progress = props => {\n  return `<div>\n    <h2>Progress ${props.name}</h2>\n  </div>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Progress);\n\n//# sourceURL=webpack:///./src/js/components/Progress/index.js?");

/***/ }),

/***/ "./src/js/core/index.js":
/*!******************************!*\
  !*** ./src/js/core/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blue; });\n/* harmony import */ var _layout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/index */ \"./src/js/layout/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/js/core/styled.js\");\n\n\nfunction Blue(props) {\n  return class extends HTMLElement {\n    constructor() {\n      super();\n      const shaddow = this.attachShadow({\n        mode: 'open'\n      });\n      const styleHead = document.createElement('style');\n      styleHead.textContent = _styled__WEBPACK_IMPORTED_MODULE_1__[\"slylePage\"];\n      shaddow.appendChild(styleHead);\n      this.render(shaddow, props);\n    }\n\n    render(shaddow, props) {\n      const section = document.createElement('section');\n      section.setAttribute('class', 'proposal');\n      section.innerHTML = Object(_layout_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props);\n      shaddow.appendChild(section);\n    }\n\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/index.js?");

/***/ }),

/***/ "./src/js/core/styled.js":
/*!*******************************!*\
  !*** ./src/js/core/styled.js ***!
  \*******************************/
/*! exports provided: slylePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slylePage\", function() { return slylePage; });\nconst slylePage = `.ds-text-message{color:var(--color-error-pure);display:flex;font-family:var(--font-family-02);font-size:var(--font-size-xxs);left:0;line-height:var(--line-height-xs);margin:0;margin-top:var(--spacing-nano);position:relative}.ds-text-message>svg{fill:var(--color-error-pure);flex-shrink:0;margin-right:8px;position:relative;top:2px}.ds-input{display:flex;flex-direction:column;font-family:var(--font-family-02);margin-top:46px;padding:0;position:relative}.ds-input__message{bottom:-20px;display:flex;font-size:var(--font-size-xxs);left:0;line-height:var(--line-height-xs);margin:0;position:absolute}.ds-input__message--description{color:var(--color-neutral-low-medium)}.ds-input__label{color:var(--color-neutral-low-dark);font-size:var(--font-size-xxs);left:0;position:absolute;top:-14px}.ds-input__field{margin-top:2px;position:relative}.ds-input__field>input{border:none;color:var(--color-neutral-low-pure);font-size:var(--font-size-sm);height:38px;margin:0;outline:none;padding:0;width:100%}.ds-input__field>input:disabled{background-color:transparent;color:var(--color-neutral-high-dark)}.ds-input__field:after{background:var(--color-neutral-low-dark);bottom:0;content:\"\";height:1px;left:0;position:absolute;width:100%}.ds-input__icon{position:absolute;top:50%;transform:translateY(-50%)}.ds-input__icon--right{right:0}.ds-input:focus-within .ds-input__label{font-weight:var(--font-weight-xbold)}.ds-input:focus-within .ds-input__field:after{background:var(--color-primary-pure);height:2px}.ds-input:focus-within .ds-input__field>input{color:var(--color-neutral-low-pure)}.ds-input--invalid .ds-input__label{color:var(--color-error-pure);font-weight:var(--font-weight-xbold)}.ds-input--invalid.ds-input .ds-input__field:after,.ds-input--invalid:focus-within .ds-input__field:after{background:var(--color-error-pure);height:2px}.ds-input--disabled .ds-input__label,.ds-input--readOnly .ds-input__label{color:var(--color-neutral-high-dark)}.ds-input--disabled .ds-input__field>input,.ds-input--readOnly .ds-input__field>input{background-color:transparent;color:var(--color-neutral-high-dark)}.ds-input--disabled .ds-input__field>input::placeholder,.ds-input--readOnly .ds-input__field>input::placeholder{color:var(--color-neutral-high-dark)}.ds-input--disabled .ds-input__field:after,.ds-input--readOnly .ds-input__field:after{background:var(--color-neutral-high-dark);height:2px}.ds-input--disabled:focus-within .ds-input__field:after,.ds-input--readOnly:focus-within .ds-input__field:after{background:var(--color-neutral-high-dark)}.ds-email{font-family:var(--font-family-02);position:relative}.ds-email__option-list{background:var(--color-neutral-high-pure);border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-shadow:0 2px 4px rgba(0,0,0,.24);left:0;max-height:300px;overflow-x:hidden;overflow-y:auto;position:absolute;top:100%;transition:all .4s ease;width:100%;z-index:20}.ds-email__option-list--hidden{display:none}.ds-email__option-list::-webkit-scrollbar{width:16px}.ds-email__option-list::-webkit-scrollbar,.ds-email__option-list::-webkit-scrollbar-track{background-color:var(--color-neutral-high-light)}.ds-email__option-list::-webkit-scrollbar-thumb{background-color:var(--color-neutral-low-dark);border:4px solid var(--color-neutral-high-light);border-radius:16px}.ds-email__option-list::-webkit-scrollbar-button{display:none}.ds-email__feedback-msg{clip:rect(0,0,0,0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;top:0;white-space:nowrap;width:1px}.ds-email__result-list{height:100%;list-style:none;margin:0;overflow:auto;padding:0}.ds-email__item{background:var(--color-neutral-high-pure);color:var(--color-neutral-low-pure);cursor:pointer;display:flex;flex-direction:column;font-family:var(--font-family-02);font-size:var(--font-size-xxs);font-weight:var(--font-weight-regular);line-height:var(--line-height-xs);padding:13px 24px}.ds-email__item--active{background:var(--color-neutral-high-light);border-left:4px solid var(--color-primary-pure);padding-left:20px}.ds-email__item:hover{background-color:var(--color-neutral-high-light)}.ds-email__hidden-field{display:none}.ds-currency{font-family:var(--font-family-02);position:relative}.ds-currency__type{align-items:flex-end;background-color:var(--color-neutral-high-pure);color:var(--color-neutral-low-pure);display:flex;font-size:var(--font-size-sm);font-weight:var(--font-weight-light);height:38px;justify-content:center;left:0;line-height:var(--line-height-md);pointer-events:none;position:absolute;top:0;width:36px}.ds-currency__type--disabled{color:var(--color-neutral-high-dark)}.ds-currency .ds-input{margin-top:32px}.ds-currency .ds-input .ds-input__label{position:relative;top:0}.ds-currency .ds-input--currency{position:relative}.ds-currency .ds-input--currency .ds-input__field{margin-top:0;padding-right:var(--spacing-xs)}.ds-currency .ds-input--currency .ds-input__field>input{color:var(--color-neutral-low-pure);font-family:var(--font-family-02);font-size:var(--font-size-xl);font-weight:var(--font-weight-light);line-height:var(--line-height-xxl);margin-bottom:var(--spacing-nano)}.ds-currency .ds-input--currency .ds-input__field>input:disabled{color:var(--color-neutral-high-dark)}.ds-currency .ds-input--currency .ds-input__icon--right{fill:var(--color-primary-pure);pointer-events:none}.ds-currency__icon{top:24px}.ds-currency__icon--disabled{fill:var(--color-neutral-high-dark)}.ds-currency .ds-input__message--description{bottom:0;margin:2px 0 0;position:relative}.ds-cep-loader{fill:var(--color-primary-pure);animation:spinner 1s linear infinite;height:24px;left:-4px;padding:0 var(--spacing-nano);position:relative;width:24px}@keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.ds-quantity{font-family:var(--font-family-02);position:relative}.ds-quantity__btn-wrapper{position:absolute;right:-6px;top:-14px}.ds-quantity__btn{background-color:var(--color-neutral-high-pure);border:var(--border-width-hairline) solid var(--color-neutral-low-light);border-radius:var(--border-radius-sm);cursor:pointer;height:40px;margin-right:var(--spacing-nano);width:40px}.ds-quantity__btn svg{fill:var(--color-neutral-low-pure);stroke:var(--color-neutral-low-pure);cursor:pointer;height:16px;position:relative;top:2px;width:16px}.ds-quantity__btn--disabled{cursor:not-allowed;opacity:.3}.ds-quantity__btn--disabled svg{cursor:not-allowed}.ds-token{margin-bottom:var(--spacing-xxs);position:relative}.ds-token__wrapper{align-items:center;display:flex}.ds-token__label{display:block;font-size:var(--font-size-xxs);line-height:var(--line-height-xs);margin-bottom:var(--spacing-quarck)}.ds-token__digit,.ds-token__digit--large,.ds-token__label{color:var(--color-neutral-low-pure);font-family:var(--font-family-02);font-weight:var(--font-weight-regular)}.ds-token__digit,.ds-token__digit--large{border:none;border-bottom:1px solid var(--color-neutral-low-dark);font-size:var(--font-size-xl);line-height:var(--line-height-xxl);outline:none;text-align:center;width:32px}.ds-token__digit--large:not(:last-child),.ds-token__digit:not(:last-child){margin-right:8px}.ds-token__digit--large{width:52px}.ds-token__hidden-input{display:none}.ds-token--disabled{pointer-events:none}.ds-token--disabled .ds-token__label{color:var(--color-neutral-high-dark)}.ds-token--disabled .ds-token__digit,.ds-token--disabled .ds-token__digit--large{border-color:var(--color-neutral-high-dark);color:var(--color-neutral-high-dark)}.ds-token--error .ds-token__label{color:var(--color-error-pure);font-weight:var(--font-weight-bold)}.ds-token--error .ds-token__digit,.ds-token--error .ds-token__digit--large{border-color:var(--color-error-pure)}.ds-token--focused:not(.ds-token--error) .ds-token__label{font-weight:var(--font-weight-bold)}.ds-token--focused:not(.ds-token--error) .ds-token__digit,.ds-token--focused:not(.ds-token--error) .ds-token__digit--large{border-color:var(--color-primary-pure)}.ds-token--readOnly{pointer-events:none}.ds-token--readOnly .ds-token__label{color:var(--color-neutral-low-medium)}.ds-token--readOnly .ds-token__digit,.ds-token--readOnly .ds-token__digit--large{border-color:var(--color-neutral-high-dark);color:var(--color-neutral-low-medium)}.ds-button{align-items:center;border:none;border-radius:var(--border-radius-sm);cursor:pointer;display:flex;font-family:var(--font-family-02);font-size:var(--font-size-md);font-weight:var(--font-weight-bold);height:48px;justify-content:center;padding:var(--spacing-nano) var(--spacing-xxxs);position:relative;text-decoration:none;transition:background-color .3s ease}@media (max-width:1024px){.ds-button{font-size:var(--font-size-xs)}}.ds-button--disabled{cursor:not-allowed}.ds-button--primary{background-color:var(--color-primary-pure);color:var(--color-neutral-high-pure)}.ds-button--primary:hover{background-color:var(--color-primary-dark)}.ds-button--primary.ds-button--disabled{background-color:var(--color-neutral-high-dark);color:var(--color-neutral-low-light)}.ds-button--high-contrast{background-color:var(--color-neutral-high-pure);color:var(--color-primary-pure)}.ds-button--high-contrast:hover{background-color:var(--color-neutral-high-light)}.ds-button--high-contrast.ds-button--disabled{background-color:var(--color-neutral-high-dark);color:var(--color-neutral-low-light)}.ds-button--secondary{background-color:var(--color-neutral-high-pure);border:1px solid var(--color-support-pure);color:var(--color-support-pure)}.ds-button--secondary:hover{background-color:var(--color-secondary-light)}.ds-button--secondary.ds-button--disabled{background-color:var(--color-neutral-high-light);border:1px solid var(--color-neutral-high-dark);color:var(--color-neutral-high-dark)}.ds-button--action{background-color:transparent;color:var(--color-support-pure)}.ds-button--action:hover{color:var(--color-support-dark)}.ds-button--action.ds-button--disabled{background-color:transparent;color:var(--color-neutral-high-dark)}.ds-button--fluid{width:100%}.ds-button__left-icon{margin-right:12px}.ds-button__right-icon{margin-left:12px}.sender{display:flex;margin-top:80px;row-gap:10px}.sender button{margin-bottom:0;text-transform:lowercase;width:100%}.proposal__container{flex:1 1;min-height:calc(100vh - 72px);padding:16px}@media only screen and (min-width:700px){.proposal__container{padding:40px 50px}}@media only screen and (min-width:1024px){.proposal__container:first-child{padding:80px 120px 20px 100px}}@media only screen and (min-width:1366px){.proposal__container:first-child{padding-left:calc(50vw - 550px)}}@media only screen and (min-width:1024px){.proposal__container:nth-child(2){padding:50px 100px 20px 120px}}@media only screen and (min-width:1366px){.proposal__container:nth-child(2){padding-right:calc(50vw - 550px)}}.proposal{display:flex}html{--color-neutral-dark-pure:#252220;--color-neutral-low-pure:#231d19;--color-neutral-low-dark:#56504c;--color-neutral-low-medium:#706a66;--color-neutral-low-light:#89837f;--color-neutral-high-pure:#fff;--color-neutral-high-dark:#d6d0cc;--color-neutral-high-medium:#efe9e5;--color-neutral-high-light:#faf7f5;--color-error-pure:#781b8e;--color-error-dark:#430064;--color-error-medium:#531e6d;--color-error-light:#a237bb;--color-critical-error-pure:#b71c1c;--color-critical-error-dark:#8c0000;--color-critical-error-medium:#d02b2b;--color-critical-error-light:#f94444;--color-success-pure:#007a47;--color-success-dark:#003c27;--color-success-medium:#005a3c;--color-success-light:#1eb07f;--color-warning-pure:#f1ae2f;--color-warning-dark:#d78d00;--color-warning-medium:#e9a421;--color-warning-light:#ffc861;--color-support-pure:#106eb0;--color-support-dark:#18447c;--color-support-medium:#0d63a0;--color-support-light:#2496e7;--color-primary-pure:#ec7000;--color-primary-dark:#dd6100;--color-primary-medium:#fb871e;--color-primary-light:#fcad66;--color-secondary-pure:#004388;--color-secondary-dark:#093c71;--color-secondary-medium:#4693ca;--color-secondary-light:#ecf4f9;--gradient:linear-gradient(90deg,#ff7500,#fd9d00);--color-header-background:#ec7000;--color-header-text:#fff;--color-header-input-border:transparent;--color-header-button:#fff;--color-header-button-text:#ec7000;--border-radius-none:0;--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--border-radius-pill:500px;--border-radius-circular:50%;--border-width-none:0px;--border-width-hairline:1px;--border-width-thin:2px;--border-width-thick:4px;--border-width-heavy:8px;--shadow-level-1:0px 1px 2px rgba(0,0,0,0.24);--shadow-level-2:0px 2px 8px rgba(0,0,0,0.24);--spacing-quarck:4px;--spacing-nano:8px;--spacing-xxxs:16px;--spacing-xxs:24px;--spacing-xs:32px;--spacing-sm:40px;--spacing-md:48px;--spacing-lg:56px;--spacing-xl:64px;--spacing-xxl:80px;--spacing-xxxl:120px;--spacing-huge:160px;--spacing-giant:200px;--line-height-default:0;--line-height-xxs:18px;--line-height-xs:22px;--line-height-sm:24px;--line-height-md:28px;--line-height-lg:30px;--line-height-xl:32px;--line-height-xxl:40px;--line-height-xxxl:48px;--font-weight-light:300;--font-weight-regular:400;--font-weight-bold:700;--font-weight-xbold:800;--font-weight-black:900;--font-size-xxxs:12px;--font-size-xxs:14px;--font-size-xs:16px;--font-size-sm:18px;--font-size-md:20px;--font-size-lg:24px;--font-size-xl:32px;--font-size-xxl:40px;--font-size-xxxl:48px;--font-size-display:64px;--font-size-giant:80px;--font-family-01:\"ItauDisplay\";--font-family-02:\"ItauText\",\"Myriad Pro\",Arial;--primary-color:#ec7000;--link-color:#007ab7;--form-progress-bar-color:#007a47;--button-border-radius:3px;--header-background-color:#ec7000}`;\n\n//# sourceURL=webpack:///./src/js/core/styled.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/js/core/index.js\");\n\nconst props = {\n  images: [],\n  name: 'Component'\n};\ncustomElements.define('blue-component', Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props));\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/layout/index.js":
/*!********************************!*\
  !*** ./src/js/layout/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Form */ \"./src/js/components/Form/index.js\");\n\n\nconst Layout = props => {\n  return Object(_components_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/js/layout/index.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

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