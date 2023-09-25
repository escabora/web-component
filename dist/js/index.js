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
eval("__webpack_require__.r(__webpack_exports__);\nconst CardPlaceholder = () => {\n  return `<div class=\"card-info proposal__container\"><div class=\"card-info__header\"><h1 class=\"ds-text ds-text__title ds-text__title--xxl card-info__title\">vamos começar?</h1><p class=\"ds-text ds-text__paragraph ds-text__paragraph--md card-info__subtitle\">pedir seu cartão é fácil e demora menos de 5 minutos! complete os dados ao lado para iniciar o pedido</p></div><div class=\"card-info__body\"><div role=\"presentation\" aria-hidden=\"true\" class=\"card-info__image\" alt=\"\"></div><h2 class=\"ds-text ds-text__title ds-text__title--md card-info__name\">Infinite Credit</h2><div class=\"card-info__features\"><div class=\"card-info__feature\"><svg role=\"presentation\" aria-hidden=\"true\" class=\"card-info__icon\" width=\"32\" height=\"32\" viewBox=\"0 0 34 32\" fill=\"none\"><path d=\"M32.018 22.215a16.218 16.218 0 0 1-3.576 5.09c-1.506 1.446-3.274 2.59-5.301 3.432C21.14 31.58 18.99 32 16.687 32s-4.467-.42-6.494-1.263c-2.028-.841-3.795-1.986-5.302-3.432a16.219 16.219 0 0 1-3.576-5.09C.438 20.294 0 18.23 0 16.019c0-2.21.438-4.288 1.315-6.234a16.218 16.218 0 0 1 3.576-5.09c1.507-1.446 3.274-2.59 5.302-3.432C12.22.42 14.386 0 16.687 0c2.3 0 4.453.42 6.454 1.263 2.027.841 3.795 1.986 5.301 3.433a16.218 16.218 0 0 1 3.576 5.089c.877 1.946 1.315 4.025 1.315 6.234 0 2.21-.438 4.275-1.315 6.196Zm-1.685-11.76a15.056 15.056 0 0 0-3.185-4.498c-1.328-1.29-2.897-2.302-4.707-3.04a14.656 14.656 0 0 0-5.754-1.144c-2.056 0-3.986.382-5.796 1.145a14.995 14.995 0 0 0-4.686 3.039 14.253 14.253 0 0 0-3.164 4.498c-.794 1.736-1.193 3.591-1.193 5.564 0 1.947.399 3.788 1.193 5.524a13.945 13.945 0 0 0 3.165 4.519c1.344 1.276 2.905 2.295 4.686 3.057 1.809.738 3.741 1.105 5.797 1.105 2.027 0 3.945-.369 5.754-1.105 1.808-.762 3.377-1.782 4.707-3.057a14.601 14.601 0 0 0 3.184-4.519 13.498 13.498 0 0 0 1.15-5.524c0-1.973-.383-3.828-1.151-5.564Zm-9.002 7.537c.165.474.247 1 .247 1.58 0 .92-.288 1.842-.863 2.762-.575.921-1.562 1.512-2.96 1.777l-.04.038h-.165v1.974c0 .21-.09.4-.267.572a.835.835 0 0 1-.596.254.888.888 0 0 1-.637-.256c-.177-.17-.266-.362-.266-.572v-1.933a8.73 8.73 0 0 1-2.056-.414c-.685-.224-1.247-.493-1.685-.808l-.33-.238.986-1.697.452.356c.41.29.898.525 1.46.71a5.29 5.29 0 0 0 1.664.276c.492 0 .938-.065 1.336-.197a2.591 2.591 0 0 0 1.007-.592 2.484 2.484 0 0 0 .863-1.935c0-.316-.055-.618-.165-.907a2.908 2.908 0 0 0-.493-.829 4.813 4.813 0 0 0-.924-.749 8.252 8.252 0 0 0-1.337-.67c-.74-.316-1.37-.624-1.89-.928-.521-.303-.946-.61-1.275-.927a3.775 3.775 0 0 1-.966-1.302 3.936 3.936 0 0 1-.307-1.579c0-.525.089-1.025.266-1.5.177-.475.446-.907.802-1.301a4.23 4.23 0 0 1 1.15-.908c.438-.237.917-.42 1.438-.552v-1.58c0-.237.09-.434.267-.592a.926.926 0 0 1 .636-.237c.22 0 .418.079.597.237a.76.76 0 0 1 .27.593v1.5c.028 0 .054.007.082.02.028.014.054.02.082.02a6.826 6.826 0 0 1 1.686.276c.52.159 1 .383 1.438.67l.37.238-.986 1.697-.452-.317c-.22-.13-.568-.296-1.049-.493-.48-.197-1.06-.296-1.747-.296-.438 0-.841.065-1.211.197-.37.131-.68.316-.925.552-.19.21-.349.448-.473.71a2 2 0 0 0-.184.87c0 .341.054.644.165.907.11.262.287.5.534.71.248.21.555.428.925.652.37.224.884.466 1.541.73.74.342 1.37.684 1.89 1.026.522.341.96.71 1.316 1.104.356.394.614.827.779 1.302Z\"></path></svg><div class=\"card-info__description\"><p class=\"ds-text ds-text__paragraph ds-text__paragraph--md card-info__description-label\">Renda Mínima:</p><p class=\"ds-text ds-text__paragraph ds-text__paragraph--md card-info__description-value\">R$ 2.000,00</p></div></div><div class=\"card-info__feature\"><svg role=\"presentation\" aria-hidden=\"true\" class=\"card-info__icon\" width=\"32\" height=\"32\" viewBox=\"0 0 34 32\" fill=\"none\"><path d=\"M32.018 22.215a16.218 16.218 0 0 1-3.576 5.09c-1.506 1.446-3.274 2.59-5.301 3.432C21.14 31.58 18.99 32 16.687 32s-4.467-.42-6.494-1.263c-2.028-.841-3.795-1.986-5.302-3.432a16.219 16.219 0 0 1-3.576-5.09C.438 20.294 0 18.23 0 16.019c0-2.21.438-4.288 1.315-6.234a16.218 16.218 0 0 1 3.576-5.09c1.507-1.446 3.274-2.59 5.302-3.432C12.22.42 14.386 0 16.687 0c2.3 0 4.453.42 6.454 1.263 2.027.841 3.795 1.986 5.301 3.433a16.218 16.218 0 0 1 3.576 5.089c.877 1.946 1.315 4.025 1.315 6.234 0 2.21-.438 4.275-1.315 6.196Zm-1.685-11.76a15.056 15.056 0 0 0-3.185-4.498c-1.328-1.29-2.897-2.302-4.707-3.04a14.656 14.656 0 0 0-5.754-1.144c-2.056 0-3.986.382-5.796 1.145a14.995 14.995 0 0 0-4.686 3.039 14.253 14.253 0 0 0-3.164 4.498c-.794 1.736-1.193 3.591-1.193 5.564 0 1.947.399 3.788 1.193 5.524a13.945 13.945 0 0 0 3.165 4.519c1.344 1.276 2.905 2.295 4.686 3.057 1.809.738 3.741 1.105 5.797 1.105 2.027 0 3.945-.369 5.754-1.105 1.808-.762 3.377-1.782 4.707-3.057a14.601 14.601 0 0 0 3.184-4.519 13.498 13.498 0 0 0 1.15-5.524c0-1.973-.383-3.828-1.151-5.564Zm-9.002 7.537c.165.474.247 1 .247 1.58 0 .92-.288 1.842-.863 2.762-.575.921-1.562 1.512-2.96 1.777l-.04.038h-.165v1.974c0 .21-.09.4-.267.572a.835.835 0 0 1-.596.254.888.888 0 0 1-.637-.256c-.177-.17-.266-.362-.266-.572v-1.933a8.73 8.73 0 0 1-2.056-.414c-.685-.224-1.247-.493-1.685-.808l-.33-.238.986-1.697.452.356c.41.29.898.525 1.46.71a5.29 5.29 0 0 0 1.664.276c.492 0 .938-.065 1.336-.197a2.591 2.591 0 0 0 1.007-.592 2.484 2.484 0 0 0 .863-1.935c0-.316-.055-.618-.165-.907a2.908 2.908 0 0 0-.493-.829 4.813 4.813 0 0 0-.924-.749 8.252 8.252 0 0 0-1.337-.67c-.74-.316-1.37-.624-1.89-.928-.521-.303-.946-.61-1.275-.927a3.775 3.775 0 0 1-.966-1.302 3.936 3.936 0 0 1-.307-1.579c0-.525.089-1.025.266-1.5.177-.475.446-.907.802-1.301a4.23 4.23 0 0 1 1.15-.908c.438-.237.917-.42 1.438-.552v-1.58c0-.237.09-.434.267-.592a.926.926 0 0 1 .636-.237c.22 0 .418.079.597.237a.76.76 0 0 1 .27.593v1.5c.028 0 .054.007.082.02.028.014.054.02.082.02a6.826 6.826 0 0 1 1.686.276c.52.159 1 .383 1.438.67l.37.238-.986 1.697-.452-.317c-.22-.13-.568-.296-1.049-.493-.48-.197-1.06-.296-1.747-.296-.438 0-.841.065-1.211.197-.37.131-.68.316-.925.552-.19.21-.349.448-.473.71a2 2 0 0 0-.184.87c0 .341.054.644.165.907.11.262.287.5.534.71.248.21.555.428.925.652.37.224.884.466 1.541.73.74.342 1.37.684 1.89 1.026.522.341.96.71 1.316 1.104.356.394.614.827.779 1.302Z\"></path></svg><div class=\"card-info__description\"><p class=\"ds-text ds-text__paragraph ds-text__paragraph--md card-info__description-label\">Anuidade:</p><p class=\"ds-text ds-text__paragraph ds-text__paragraph--md card-info__description-value\">Grátis gastando R$ 2.000/fatura</p></div></div><div class=\"card-info__feature\"><svg role=\"presentation\" aria-hidden=\"true\" class=\"card-info__icon\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.8058 7.9904C24.5807 7.9904 24.3875 7.90972 24.2251 7.7471C24.0614 7.58447 23.9808 7.40392 23.9808 7.20288V0.787515C23.9808 0.562145 24.0614 0.37519 24.2251 0.22537C24.3875 0.0742697 24.5807 0 24.8058 0C25.0053 0 25.1856 0.0742697 25.3493 0.22537C25.5118 0.37519 25.5923 0.562145 25.5923 0.787515V7.20288C25.5923 7.40392 25.5118 7.58447 25.3493 7.7471C25.1856 7.90972 25.0053 7.9904 24.8058 7.9904ZM26.7357 21.2514C26.4224 20.9389 26.0425 20.7827 25.5923 20.7827H22.4077C21.9575 20.7827 21.5776 20.9389 21.2643 21.2514C20.9522 21.5651 20.7962 21.9454 20.7962 22.3962V25.5846C20.7962 26.0354 20.9522 26.417 21.2643 26.7294C21.5776 27.0419 21.9575 27.1981 22.4077 27.1981H25.5923C26.0425 27.1981 26.4224 27.0419 26.7357 26.7294C27.0478 26.417 27.2038 26.0354 27.2038 25.5846V22.3962C27.2038 21.9454 27.0478 21.5651 26.7357 21.2514ZM27.2038 14.4058C27.2038 13.955 27.0478 13.5747 26.7357 13.261C26.4224 12.9485 26.0425 12.7923 25.5923 12.7923H22.4077C21.9575 12.7923 21.5776 12.9485 21.2643 13.261C20.9522 13.5747 20.7962 13.955 20.7962 14.4058V17.5942C20.7962 18.045 20.9522 18.4253 21.2643 18.739C21.5776 19.0515 21.9575 19.2077 22.4077 19.2077H25.5923C26.0425 19.2077 26.4224 19.0515 26.7357 18.739C27.0478 18.4253 27.2038 18.045 27.2038 17.5942V14.4058ZM18.7166 21.2514C18.4045 20.9389 18.0361 20.7827 17.6115 20.7827H14.3885C13.9639 20.7827 13.5955 20.9389 13.2835 21.2514C12.9714 21.5651 12.8154 21.9454 12.8154 22.3962V25.5846C12.8154 26.0354 12.9714 26.417 13.2835 26.7294C13.5955 27.0419 13.9639 27.1981 14.3885 27.1981H17.6115C18.0361 27.1981 18.4045 27.0419 18.7166 26.7294C19.0286 26.417 19.1847 26.0354 19.1847 25.5846V22.3962C19.1847 21.9454 19.0286 21.5651 18.7166 21.2514ZM19.1847 14.4058C19.1847 13.955 19.0286 13.5747 18.7166 13.261C18.4045 12.9485 18.0361 12.7923 17.6115 12.7923H14.3885C13.9639 12.7923 13.5955 12.9485 13.2835 13.261C12.9714 13.5747 12.8154 13.955 12.8154 14.4058V17.5942C12.8154 18.045 12.9714 18.4253 13.2835 18.739C13.5955 19.0515 13.9639 19.2077 14.3885 19.2077H17.6115C18.0361 19.2077 18.4045 19.0515 18.7166 18.739C19.0286 18.4253 19.1847 18.045 19.1847 17.5942V14.4058ZM9.59232 4.80192H22.4077V3.18848H9.59232V4.80192ZM7.19425 7.9904C6.99473 7.9904 6.81439 7.90972 6.65196 7.7471C6.48825 7.58447 6.40768 7.40392 6.40768 7.20288V0.787515C6.40768 0.562145 6.48825 0.37519 6.65196 0.22537C6.81439 0.0742697 6.99473 0 7.19425 0C7.41935 0 7.61247 0.0742697 7.77618 0.22537C7.93861 0.37519 8.01919 0.562145 8.01919 0.787515V7.20288C8.01919 7.40392 7.93861 7.58447 7.77618 7.7471C7.61247 7.90972 7.41935 7.9904 7.19425 7.9904ZM10.7357 21.2514C10.4224 20.9389 10.0425 20.7827 9.59233 20.7827H6.40767C5.95875 20.7827 5.57762 20.9389 5.26555 21.2514C4.9522 21.5651 4.79616 21.9454 4.79616 22.3962V25.5846C4.79616 26.0354 4.9522 26.417 5.26555 26.7294C5.57762 27.0419 5.95875 27.1981 6.40767 27.1981H9.59233C10.0425 27.1981 10.4224 27.0419 10.7357 26.7294C11.0478 26.417 11.2038 26.0354 11.2038 25.5846V22.3962C11.2038 21.9454 11.0478 21.5651 10.7357 21.2514ZM4.79616 14.4058V17.5942C4.79616 18.045 4.9522 18.4253 5.26555 18.739C5.57762 19.0515 5.95875 19.2077 6.40767 19.2077H9.59233C10.0425 19.2077 10.4224 19.0515 10.7357 18.739C11.0478 18.4253 11.2038 18.045 11.2038 17.5942V14.4058C11.2038 13.955 11.0478 13.5747 10.7357 13.261C10.4224 12.9485 10.0425 12.7923 9.59233 12.7923H6.40767C5.95875 12.7923 5.57762 12.9485 5.26555 13.261C4.9522 13.5747 4.79616 13.955 4.79616 14.4058ZM30.3885 3.18848C30.8387 3.18848 31.2185 3.3447 31.5319 3.65714C31.844 3.97087 32 4.35118 32 4.80192V30.3866C32 30.8373 31.844 31.2189 31.5319 31.5313C31.2185 31.8438 30.8387 32 30.3885 32H1.61151C1.16259 32 0.781455 31.8438 0.469384 31.5313C0.156035 31.2189 0 30.8373 0 30.3866V4.80192C0 4.35118 0.156035 3.97087 0.469384 3.65714C0.781455 3.3447 1.16259 3.18848 1.61151 3.18848H4.79616V4.80192H1.61151V30.3866H30.3885V4.80192H27.2038V3.18848H30.3885Z\"></path></svg><div class=\"card-info__description\"><p class=\"ds-text ds-text__paragraph ds-text__paragraph--md card-info__description-label\">Pontuação:</p><p class=\"ds-text ds-text__paragraph ds-text__paragraph--md card-info__description-value\">U$$ 1 = 1,0 ponto</p></div></div></div></div></div>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPlaceholder);\n\n//# sourceURL=webpack:///./src/js/components/CardPlaceholder/index.js?");

/***/ }),

/***/ "./src/js/components/Form/RenderFields.js":
/*!************************************************!*\
  !*** ./src/js/components/Form/RenderFields.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RenderFields = field => {\n  const fields = {\n    CPF: `<div class=\"col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper\"><div class=\"ds-input\"><label class=\"ds-input__label\" for=\"ds-field-cpf\" id=\"ds-label-cpf\" aria-label=\"CPF\" aria-hidden=\"true\">CPF</label><div class=\"ds-input__field\"><input id=\"ds-field-cpf\" type=\"text\" aria-labelledby=\"ds-label-cpf\" aria-required=\"true\" aria-invalid=\"false\" autocomplete=\"on\" placeholder=\"000.000.000-00\" inputmode=\"numeric\" pattern=\"[0-9.-]*\" name=\"cpf\" value=\"${field.value || ''}\"><div class=\"ds-input__icon ds-input__icon--right\" aria-hidden=\"true\"></div></div></div></div>`,\n    name: `<div class=\"col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper\"><div class=\"ds-input\"><label class=\"ds-input__label\" for=\"ds-field-lead_name\" id=\"ds-label-lead_name\" aria-label=\"Nome completo\" aria-hidden=\"true\">Nome completo</label><div class=\"ds-input__field\"><input id=\"ds-field-lead_name\" type=\"text\" aria-labelledby=\"ds-label-lead_name\" aria-required=\"true\" aria-invalid=\"false\" autocomplete=\"on\" placeholder=\"Antonio Coutinho\" name=\"lead_name\" value=\"${field.value || ''}\"><div class=\"ds-input__icon ds-input__icon--right\" aria-hidden=\"true\"></div></div></div></div>`,\n    email: `<div class=\"col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper\"><div class=\"ds-email\"><div class=\"ds-email__field\"><div class=\"ds-input\"><label class=\"ds-input__label\" for=\"ds-field-email\" id=\"ds-label-email\" aria-label=\"Email\" aria-hidden=\"true\">Email</label><div class=\"ds-input__field\"><input id=\"ds-field-email\" type=\"email\" aria-labelledby=\"ds-label-email\" aria-required=\"true\" aria-invalid=\"false\" autocomplete=\"off\" name=\"email\" control=\"[object Object]\" placeholder=\"Coloque seu email aqui\" validators=\"[object Object]\" spellcheck=\"false\" value=\"${field.value || ''}\"><div class=\"ds-input__icon ds-input__icon--right\" aria-hidden=\"true\"></div></div></div></div></div></div>`,\n    phone: `<div class=\"col-desktop-12 col-tablet-12 col-mobile-12 form-field__wrapper\"><div class=\"ds-input\"><label class=\"ds-input__label\" for=\"ds-field-cellphone_number\" id=\"ds-label-cellphone_number\" aria-label=\"Celular\" aria-hidden=\"true\">Celular</label><div class=\"ds-input__field\"><input id=\"ds-field-cellphone_number\" type=\"tel\" aria-labelledby=\"ds-label-cellphone_number\" aria-required=\"true\" aria-invalid=\"false\" autocomplete=\"mobile tel-national\" name=\"cellphone_number\" placeholder=\"(00) 00000 0000\" value=\"${field.value || ''}\"><div class=\"ds-input__icon ds-input__icon--right\" aria-hidden=\"true\"></div></div></div></div>`\n  };\n  return fields[field.name];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderFields);\n\n//# sourceURL=webpack:///./src/js/components/Form/RenderFields.js?");

/***/ }),

/***/ "./src/js/components/Form/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Form/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Progress */ \"./src/js/components/Progress/index.js\");\n/* harmony import */ var _CardPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CardPlaceholder */ \"./src/js/components/CardPlaceholder/index.js\");\n/* harmony import */ var _RenderFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderFields */ \"./src/js/components/Form/RenderFields.js\");\n/* harmony import */ var _useSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSteps */ \"./src/js/components/Form/useSteps.js\");\n\n\n\n\n\nconst Form = async (props, shaddow) => {\n  const {\n    currentStepFields,\n    state\n  } = await Object(_useSteps__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props, shaddow);\n  console.log(currentStepFields);\n  return await `\n  ${Object(_CardPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}\n  <div class='proposal__container'>\n  ${Object(_Progress__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state)}\n  ${currentStepFields.fields && currentStepFields.fields.map(field => Object(_RenderFields__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(field)).join('')}\n  <div class=\"sender\">\n  <button class=\"ds-button custom sender__previous ds-button--secondary js--back\" data-type=\"previous\">Voltar</button>\n  <button class=\"ds-button custom sender__next ds-button--primary js--submit\" type=\"submit\" data-type=\"next\">Próximo</button></div>\n  </div>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./src/js/components/Form/index.js?");

/***/ }),

/***/ "./src/js/components/Form/useSteps.js":
/*!********************************************!*\
  !*** ./src/js/components/Form/useSteps.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api */ \"./src/js/services/api/index.js\");\n/* harmony import */ var _core_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/reducer */ \"./src/js/core/reducer.js\");\n\n\n\nconst useStep = async (state, shaddow) => {\n  const getFieldsCurrentStep = async stepName => {\n    if (state.steps_data.length) {\n      const hasStepInPersiste = state.steps_data.find(item => item == stepName);\n\n      if (hasStepInPersiste) {\n        return hasStepInPersiste;\n      } //get last step\n\n\n      return state.steps_data.pop();\n    } else {\n      const basic = await _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].basic();\n      return basic;\n    }\n  };\n\n  setTimeout(function () {\n    const next = shaddow.querySelector('.js--submit');\n    const prev = shaddow.querySelector('.js--back');\n    next && next.addEventListener('click', ev => {\n      Object(_core_reducer__WEBPACK_IMPORTED_MODULE_1__[\"dispatchevent\"])({\n        steps_data: [getFieldsCurrentStep(state.nextStep)]\n      }, 'UPDATE_STEPS');\n    });\n    prev && prev.addEventListener('click', ev => {\n      // dispatchevent({ steps_data: [{ stepName: 'test' }] }, 'UPDATE_STEPS')\n      getFieldsCurrentStep(state.prevStep);\n    });\n  }, 1000);\n  return {\n    state,\n    currentStepFields: await getFieldsCurrentStep(state.currentStep || 'basic') //  state.steps_data.find(item=> item == state.currentStep)\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStep);\n\n//# sourceURL=webpack:///./src/js/components/Form/useSteps.js?");

/***/ }),

/***/ "./src/js/components/Progress/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/Progress/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Progress = props => {\n  return `<div class=\"ds-stepper\"><div class=\"ds-stepper__content\" role=\"text\" aria-label=\"${props.name}, passo 1 de 4\"><p class=\"ds-stepper__title\" aria-hidden=\"true\">${props.name}</p><p class=\"ds-stepper__state\" aria-hidden=\"true\">1 de 4</p></div><div class=\"ds-stepper__progress\" aria-hidden=\"true\"><div class=\"ds-stepper__bar\" style=\"width: 25%;\"></div></div></div>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Progress);\n\n//# sourceURL=webpack:///./src/js/components/Progress/index.js?");

/***/ }),

/***/ "./src/js/core/configure/fonts.js":
/*!****************************************!*\
  !*** ./src/js/core/configure/fonts.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fontsPath = {\n  ItauDisplay_300: `/assets/fonts/ItauDisplay_300.woff2`,\n  ItauDisplay_700: `/assets/fonts/ItauDisplay_700.woff2`,\n  ItauDisplay_900: `/assets/fonts/ItauDisplay_900.woff2`,\n  ItauText_300: `/assets/fonts/itautext_300_new.woff2`,\n  ItauText_400: `/assets/fonts/itautext_400_new.woff2`,\n  ItauText_700: `/assets/fonts/itautext_700_new.woff2`,\n  ItauText_900: `/assets/fonts/itautext_900_new.woff2`\n};\n\nconst configureFonts = ({\n  fonts,\n  fontDisplay\n}) => {\n  const allFontsPromise = Object.keys(fonts).map(fontName => {\n    const weights = fonts[fontName];\n    const promises = weights.map(weight => {\n      const fontUrl = fontsPath[`${fontName}_${weight}`];\n      const font = new FontFace(fontName, `url(${fontUrl})`, {\n        style: 'normal',\n        weight: weight,\n        display: fontDisplay\n      });\n      return font.load().then(() => {\n        document.fonts.add(font);\n      });\n    });\n    return Promise.all(promises);\n  });\n  return Promise.all(allFontsPromise);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureFonts);\n\n//# sourceURL=webpack:///./src/js/core/configure/fonts.js?");

/***/ }),

/***/ "./src/js/core/configure/styled.js":
/*!*****************************************!*\
  !*** ./src/js/core/configure/styled.js ***!
  \*****************************************/
/*! exports provided: slylePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slylePage\", function() { return slylePage; });\nconst slylePage = `body,html{margin:0;font-family:var(--font-family-02,\"ItauDisplay\"),sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-family:sans-serif}.ds-text-message{color:var(--color-error-pure);display:flex;font-family:var(--font-family-02);font-size:var(--font-size-xxs);left:0;line-height:var(--line-height-xs);margin:0;margin-top:var(--spacing-nano);position:relative}.ds-text-message>svg{fill:var(--color-error-pure);flex-shrink:0;margin-right:8px;position:relative;top:2px}.ds-input{display:flex;flex-direction:column;font-family:var(--font-family-02);margin-top:46px;padding:0;position:relative}.ds-input__message{bottom:-20px;display:flex;font-size:var(--font-size-xxs);left:0;line-height:var(--line-height-xs);margin:0;position:absolute}.ds-input__message--description{color:var(--color-neutral-low-medium)}.ds-input__label{color:var(--color-neutral-low-dark);font-size:var(--font-size-xxs);left:0;position:absolute;top:-14px}.ds-input__field{margin-top:2px;position:relative}.ds-input__field>input{border:none;color:var(--color-neutral-low-pure);font-size:var(--font-size-sm);height:38px;margin:0;outline:none;padding:0;width:100%}.ds-input__field>input:disabled{background-color:transparent;color:var(--color-neutral-high-dark)}.ds-input__field:after{background:var(--color-neutral-low-dark);bottom:0;content:\"\";height:1px;left:0;position:absolute;width:100%}.ds-input__icon{position:absolute;top:50%;transform:translateY(-50%)}.ds-input__icon--right{right:0}.ds-input:focus-within .ds-input__label{font-weight:var(--font-weight-xbold)}.ds-input:focus-within .ds-input__field:after{background:var(--color-primary-pure);height:2px}.ds-input:focus-within .ds-input__field>input{color:var(--color-neutral-low-pure)}.ds-input--invalid .ds-input__label{color:var(--color-error-pure);font-weight:var(--font-weight-xbold)}.ds-input--invalid.ds-input .ds-input__field:after,.ds-input--invalid:focus-within .ds-input__field:after{background:var(--color-error-pure);height:2px}.ds-input--disabled .ds-input__label,.ds-input--readOnly .ds-input__label{color:var(--color-neutral-high-dark)}.ds-input--disabled .ds-input__field>input,.ds-input--readOnly .ds-input__field>input{background-color:transparent;color:var(--color-neutral-high-dark)}.ds-input--disabled .ds-input__field>input::placeholder,.ds-input--readOnly .ds-input__field>input::placeholder{color:var(--color-neutral-high-dark)}.ds-input--disabled .ds-input__field:after,.ds-input--readOnly .ds-input__field:after{background:var(--color-neutral-high-dark);height:2px}.ds-input--disabled:focus-within .ds-input__field:after,.ds-input--readOnly:focus-within .ds-input__field:after{background:var(--color-neutral-high-dark)}.ds-email{font-family:var(--font-family-02);position:relative}.ds-email__option-list{background:var(--color-neutral-high-pure);border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-shadow:0 2px 4px rgba(0,0,0,.24);left:0;max-height:300px;overflow-x:hidden;overflow-y:auto;position:absolute;top:100%;transition:all .4s ease;width:100%;z-index:20}.ds-email__option-list--hidden{display:none}.ds-email__option-list::-webkit-scrollbar{width:16px}.ds-email__option-list::-webkit-scrollbar,.ds-email__option-list::-webkit-scrollbar-track{background-color:var(--color-neutral-high-light)}.ds-email__option-list::-webkit-scrollbar-thumb{background-color:var(--color-neutral-low-dark);border:4px solid var(--color-neutral-high-light);border-radius:16px}.ds-email__option-list::-webkit-scrollbar-button{display:none}.ds-email__feedback-msg{clip:rect(0,0,0,0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;top:0;white-space:nowrap;width:1px}.ds-email__result-list{height:100%;list-style:none;margin:0;overflow:auto;padding:0}.ds-email__item{background:var(--color-neutral-high-pure);color:var(--color-neutral-low-pure);cursor:pointer;display:flex;flex-direction:column;font-family:var(--font-family-02);font-size:var(--font-size-xxs);font-weight:var(--font-weight-regular);line-height:var(--line-height-xs);padding:13px 24px}.ds-email__item--active{background:var(--color-neutral-high-light);border-left:4px solid var(--color-primary-pure);padding-left:20px}.ds-email__item:hover{background-color:var(--color-neutral-high-light)}.ds-email__hidden-field{display:none}.ds-currency{font-family:var(--font-family-02);position:relative}.ds-currency__type{align-items:flex-end;background-color:var(--color-neutral-high-pure);color:var(--color-neutral-low-pure);display:flex;font-size:var(--font-size-sm);font-weight:var(--font-weight-light);height:38px;justify-content:center;left:0;line-height:var(--line-height-md);pointer-events:none;position:absolute;top:0;width:36px}.ds-currency__type--disabled{color:var(--color-neutral-high-dark)}.ds-currency .ds-input{margin-top:32px}.ds-currency .ds-input .ds-input__label{position:relative;top:0}.ds-currency .ds-input--currency{position:relative}.ds-currency .ds-input--currency .ds-input__field{margin-top:0;padding-right:var(--spacing-xs)}.ds-currency .ds-input--currency .ds-input__field>input{color:var(--color-neutral-low-pure);font-family:var(--font-family-02);font-size:var(--font-size-xl);font-weight:var(--font-weight-light);line-height:var(--line-height-xxl);margin-bottom:var(--spacing-nano)}.ds-currency .ds-input--currency .ds-input__field>input:disabled{color:var(--color-neutral-high-dark)}.ds-currency .ds-input--currency .ds-input__icon--right{fill:var(--color-primary-pure);pointer-events:none}.ds-currency__icon{top:24px}.ds-currency__icon--disabled{fill:var(--color-neutral-high-dark)}.ds-currency .ds-input__message--description{bottom:0;margin:2px 0 0;position:relative}.ds-cep-loader{fill:var(--color-primary-pure);animation:spinner 1s linear infinite;height:24px;left:-4px;padding:0 var(--spacing-nano);position:relative;width:24px}@keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.ds-quantity{font-family:var(--font-family-02);position:relative}.ds-quantity__btn-wrapper{position:absolute;right:-6px;top:-14px}.ds-quantity__btn{background-color:var(--color-neutral-high-pure);border:var(--border-width-hairline) solid var(--color-neutral-low-light);border-radius:var(--border-radius-sm);cursor:pointer;height:40px;margin-right:var(--spacing-nano);width:40px}.ds-quantity__btn svg{fill:var(--color-neutral-low-pure);stroke:var(--color-neutral-low-pure);cursor:pointer;height:16px;position:relative;top:2px;width:16px}.ds-quantity__btn--disabled{cursor:not-allowed;opacity:.3}.ds-quantity__btn--disabled svg{cursor:not-allowed}.ds-token{margin-bottom:var(--spacing-xxs);position:relative}.ds-token__wrapper{align-items:center;display:flex}.ds-token__label{display:block;font-size:var(--font-size-xxs);line-height:var(--line-height-xs);margin-bottom:var(--spacing-quarck)}.ds-token__digit,.ds-token__digit--large,.ds-token__label{color:var(--color-neutral-low-pure);font-family:var(--font-family-02);font-weight:var(--font-weight-regular)}.ds-token__digit,.ds-token__digit--large{border:none;border-bottom:1px solid var(--color-neutral-low-dark);font-size:var(--font-size-xl);line-height:var(--line-height-xxl);outline:none;text-align:center;width:32px}.ds-token__digit--large:not(:last-child),.ds-token__digit:not(:last-child){margin-right:8px}.ds-token__digit--large{width:52px}.ds-token__hidden-input{display:none}.ds-token--disabled{pointer-events:none}.ds-token--disabled .ds-token__label{color:var(--color-neutral-high-dark)}.ds-token--disabled .ds-token__digit,.ds-token--disabled .ds-token__digit--large{border-color:var(--color-neutral-high-dark);color:var(--color-neutral-high-dark)}.ds-token--error .ds-token__label{color:var(--color-error-pure);font-weight:var(--font-weight-bold)}.ds-token--error .ds-token__digit,.ds-token--error .ds-token__digit--large{border-color:var(--color-error-pure)}.ds-token--focused:not(.ds-token--error) .ds-token__label{font-weight:var(--font-weight-bold)}.ds-token--focused:not(.ds-token--error) .ds-token__digit,.ds-token--focused:not(.ds-token--error) .ds-token__digit--large{border-color:var(--color-primary-pure)}.ds-token--readOnly{pointer-events:none}.ds-token--readOnly .ds-token__label{color:var(--color-neutral-low-medium)}.ds-token--readOnly .ds-token__digit,.ds-token--readOnly .ds-token__digit--large{border-color:var(--color-neutral-high-dark);color:var(--color-neutral-low-medium)}.ds-button{align-items:center;border:none;border-radius:var(--border-radius-sm);cursor:pointer;display:flex;font-family:var(--font-family-02);font-size:var(--font-size-md);font-weight:var(--font-weight-bold);height:48px;justify-content:center;padding:var(--spacing-nano) var(--spacing-xxxs);position:relative;text-decoration:none;transition:background-color .3s ease}@media (max-width:1024px){.ds-button{font-size:var(--font-size-xs)}}.ds-button--disabled{cursor:not-allowed}.ds-button--primary{background-color:var(--color-primary-pure);color:var(--color-neutral-high-pure)}.ds-button--primary:hover{background-color:var(--color-primary-dark)}.ds-button--primary.ds-button--disabled{background-color:var(--color-neutral-high-dark);color:var(--color-neutral-low-light)}.ds-button--high-contrast{background-color:var(--color-neutral-high-pure);color:var(--color-primary-pure)}.ds-button--high-contrast:hover{background-color:var(--color-neutral-high-light)}.ds-button--high-contrast.ds-button--disabled{background-color:var(--color-neutral-high-dark);color:var(--color-neutral-low-light)}.ds-button--secondary:hover{background-color:var(--color-secondary-light)}.ds-button--secondary.ds-button--disabled{background-color:var(--color-neutral-high-light);border:1px solid var(--color-neutral-high-dark);color:var(--color-neutral-high-dark)}.ds-button--action{background-color:transparent;color:var(--color-support-pure)}.ds-button--action:hover{color:var(--color-support-dark)}.ds-button--action.ds-button--disabled{background-color:transparent;color:var(--color-neutral-high-dark)}.ds-button--fluid{width:100%}.ds-button__left-icon{margin-right:12px}.ds-button__right-icon{margin-left:12px}.sender{display:flex;margin-top:80px;row-gap:10px;flex-direction:column}.sender button{margin-bottom:0;text-transform:lowercase;width:100%}.proposal__container{flex:1 1;min-height:calc(100vh - 72px);padding:16px}@media only screen and (min-width:700px){.proposal__container{padding:40px 50px}}@media only screen and (min-width:1024px){.proposal__container:first-child{padding:80px 120px 20px 100px}}.proposal__container:first-child{background-color:var(--card-info-background-color,var(--color-neutral-high-light))}@media only screen and (min-width:1366px){.proposal__container:first-child{padding-left:calc(50vw - 550px)}}@media only screen and (min-width:1024px){.proposal__container:nth-child(2){padding:50px 100px 20px 120px}}@media only screen and (min-width:1366px){.proposal__container:nth-child(2){padding-right:calc(50vw - 550px)}}.proposal{display:flex}.ds-stepper{font-family:var(--font-family-02)}.ds-stepper__content{display:flex;justify-content:space-between;margin:var(--spacing-xxxs) 0}.ds-stepper__state{color:var(--color-neutral-low-dark);font-size:var(--font-size-xxs);line-height:var(--line-height-xs);margin:0}.ds-stepper__title{color:var(--color-neutral-low-pure);font-size:var(--font-size-xs);line-height:var(--line-height-sm);margin:0}.ds-stepper__bar,.ds-stepper__progress{border-radius:var(--border-radius-sm);height:4px}.ds-stepper__progress{background:var(--color-neutral-high-dark)}.ds-stepper__bar{background:var(--color-success-pure);transition:width .3s;width:10%}.ds-stepper__navigation{display:flex;flex-direction:row}.card-info__header{margin-bottom:50px}.card-info__title.ds-text{font-weight:800;margin:0 0 8px}.card-info__subtitle.ds-text{margin:0}.card-info__image{height:300px;width:210px;background:#ccc;border-radius:8px;transform:perspective(970px) rotateY(24deg) scale(.9) rotateX(15deg);transition:all .6s ease}.card-info__name.ds-text{font-weight:800;margin:24px 0 20px}.card-info__feature{display:flex;margin-bottom:16px}.card-info__icon{fill:#231d19;min-width:32px}.card-info__description{margin-left:15px}.card-info__description-label.ds-text,.card-info__description-value.ds-text{line-height:1;margin:0 0 7px}.card-info__description-value.ds-text{font-weight:800}.ds-text{color:var(--color-neutral-low-pure)}.ds-text__title{font-family:var(--font-family-01);font-weight:var(--font-weight-bold)}.ds-text__title--sm{font-size:var(--font-size-sm);line-height:var(--line-height-md)}@media (max-width:768px){.ds-text__title--sm{font-size:var(--font-size-xs);line-height:var(--line-height-sm)}}.ds-text__title--md{font-size:var(--font-size-md);line-height:var(--line-height-lg)}@media (max-width:768px){.ds-text__title--md{font-size:var(--font-size-xs);line-height:var(--line-height-sm)}}.ds-text__title--lg{font-size:var(--font-size-lg);line-height:var(--line-height-xl)}@media (max-width:768px){.ds-text__title--lg{font-size:var(--font-size-sm);line-height:var(--line-height-md)}}.ds-text__title--xl{font-size:var(--font-size-xl);line-height:var(--line-height-xxl)}@media (max-width:768px){.ds-text__title--xl{font-size:var(--font-size-md);line-height:var(--line-height-lg)}}.ds-text__title--xxl{font-size:var(--font-size-xxl);line-height:var(--line-height-xxxl)}@media (max-width:768px){.ds-text__title--xxl{font-size:var(--font-size-lg);line-height:var(--line-height-xl)}}.ds-text__paragraph{font-family:var(--font-family-02)}.ds-text__paragraph--xs{font-size:var(--font-size-xxxs);line-height:var(--line-height-xxs)}.ds-text__paragraph--sm{font-size:var(--font-size-xxs);line-height:var(--line-height-xs)}.ds-text__paragraph--md{font-size:var(--font-size-xs);line-height:var(--line-height-sm)}.ds-text__paragraph--lg{font-size:var(--font-size-sm);line-height:var(--line-height-md)}.ds-text__paragraph--xl{font-size:var(--font-size-md);line-height:var(--line-height-lg)}.ds-button--secondary{background-color:var(--color-neutral-high-pure);border:1px solid var(--color-support-pure);color:var(--color-support-pure);outline:1px solid var(--link-color)}html{--color-neutral-dark-pure:#252220;--color-neutral-low-pure:#231d19;--color-neutral-low-dark:#56504c;--color-neutral-low-medium:#706a66;--color-neutral-low-light:#89837f;--color-neutral-high-pure:#fff;--color-neutral-high-dark:#d6d0cc;--color-neutral-high-medium:#efe9e5;--color-neutral-high-light:#faf7f5;--color-error-pure:#781b8e;--color-error-dark:#430064;--color-error-medium:#531e6d;--color-error-light:#a237bb;--color-critical-error-pure:#b71c1c;--color-critical-error-dark:#8c0000;--color-critical-error-medium:#d02b2b;--color-critical-error-light:#f94444;--color-success-pure:#007a47;--color-success-dark:#003c27;--color-success-medium:#005a3c;--color-success-light:#1eb07f;--color-warning-pure:#f1ae2f;--color-warning-dark:#d78d00;--color-warning-medium:#e9a421;--color-warning-light:#ffc861;--color-support-pure:#106eb0;--color-support-dark:#18447c;--color-support-medium:#0d63a0;--color-support-light:#2496e7;--color-primary-pure:#ec7000;--color-primary-dark:#dd6100;--color-primary-medium:#fb871e;--color-primary-light:#fcad66;--color-secondary-pure:#004388;--color-secondary-dark:#093c71;--color-secondary-medium:#4693ca;--color-secondary-light:#ecf4f9;--gradient:linear-gradient(90deg,#ff7500,#fd9d00);--color-header-background:#ec7000;--color-header-text:#fff;--color-header-input-border:transparent;--color-header-button:#fff;--color-header-button-text:#ec7000;--border-radius-none:0;--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--border-radius-pill:500px;--border-radius-circular:50%;--border-width-none:0px;--border-width-hairline:1px;--border-width-thin:2px;--border-width-thick:4px;--border-width-heavy:8px;--shadow-level-1:0px 1px 2px rgba(0,0,0,0.24);--shadow-level-2:0px 2px 8px rgba(0,0,0,0.24);--spacing-quarck:4px;--spacing-nano:8px;--spacing-xxxs:16px;--spacing-xxs:24px;--spacing-xs:32px;--spacing-sm:40px;--spacing-md:48px;--spacing-lg:56px;--spacing-xl:64px;--spacing-xxl:80px;--spacing-xxxl:120px;--spacing-huge:160px;--spacing-giant:200px;--line-height-default:0;--line-height-xxs:18px;--line-height-xs:22px;--line-height-sm:24px;--line-height-md:28px;--line-height-lg:30px;--line-height-xl:32px;--line-height-xxl:40px;--line-height-xxxl:48px;--font-weight-light:300;--font-weight-regular:400;--font-weight-bold:700;--font-weight-xbold:800;--font-weight-black:900;--font-size-xxxs:12px;--font-size-xxs:14px;--font-size-xs:16px;--font-size-sm:18px;--font-size-md:20px;--font-size-lg:24px;--font-size-xl:32px;--font-size-xxl:40px;--font-size-xxxl:48px;--font-size-display:64px;--font-size-giant:80px;--font-family-01:\"ItauDisplay\";--font-family-02:\"ItauText\",\"Myriad Pro\",Arial;--primary-color:#ec7000;--link-color:#007ab7;--form-progress-bar-color:#007a47;--button-border-radius:3px;--header-background-color:#ec7000}`;\n\n//# sourceURL=webpack:///./src/js/core/configure/styled.js?");

/***/ }),

/***/ "./src/js/core/index.js":
/*!******************************!*\
  !*** ./src/js/core/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blue; });\n/* harmony import */ var _layout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/index */ \"./src/js/layout/index.js\");\n/* harmony import */ var _configure_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configure/styled */ \"./src/js/core/configure/styled.js\");\n/* harmony import */ var _configure_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configure/fonts */ \"./src/js/core/configure/fonts.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/js/core/reducer.js\");\n\n\n\n\nfunction Blue(props) {\n  return class extends HTMLElement {\n    constructor() {\n      super();\n      const shaddow = this.attachShadow({\n        mode: 'open'\n      });\n      const styleHead = document.createElement('style');\n      styleHead.textContent = _configure_styled__WEBPACK_IMPORTED_MODULE_1__[\"slylePage\"];\n      shaddow.appendChild(styleHead);\n      Object(_configure_fonts__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fonts: {\n          ItauText: [300, 400, 700, 900],\n          ItauDisplay: [300, 700, 900]\n        },\n        fontDisplay: 'auto'\n      });\n      this.initialState = JSON.parse(sessionStorage.getItem('persiste_store')) || {\n        steps_data: [],\n        info_page: '',\n        ...props\n      };\n      document.addEventListener('UPDATE_STATE', ({\n        detail\n      }) => {\n        const newState = Object(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(detail.action, this.initialState, detail.state, props);\n        console.log('newState', newState);\n        window.removeEventListener(\"UPDATE_STATE\", window);\n        this.render(shaddow, newState);\n      });\n      this.render(shaddow, this.initialState);\n    }\n\n    async render(shaddow, state) {\n      console.log('render', state);\n      if (shaddow.querySelector('.proposal')) shaddow.querySelector('.proposal').remove();\n      const section = document.createElement('section');\n      section.setAttribute('class', 'proposal');\n      section.innerHTML = await Object(_layout_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state, shaddow);\n      shaddow.appendChild(section);\n    }\n\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/index.js?");

/***/ }),

/***/ "./src/js/core/reducer.js":
/*!********************************!*\
  !*** ./src/js/core/reducer.js ***!
  \********************************/
/*! exports provided: dispatchevent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchevent\", function() { return dispatchevent; });\nfunction useReducer(action, initialState, state, props) {\n  switch (action) {\n    case 'UPDATE_STEPS':\n      const newState = { ...initialState,\n        ...props,\n        ...state\n      };\n      sessionStorage.setItem('persiste_store', JSON.stringify(newState));\n      return newState;\n\n    default:\n      throw new Error();\n  }\n}\n\nconst dispatchevent = (state, action) => {\n  const newEvent = new CustomEvent('UPDATE_STATE', {\n    detail: {\n      state,\n      action\n    }\n  });\n  document.dispatchEvent(newEvent);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useReducer);\n\n//# sourceURL=webpack:///./src/js/core/reducer.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Form */ \"./src/js/components/Form/index.js\");\n\n\nconst Layout = async (props, shaddow) => {\n  return await Object(_components_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props, shaddow);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/js/layout/index.js?");

/***/ }),

/***/ "./src/js/services/api/index.js":
/*!**************************************!*\
  !*** ./src/js/services/api/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst delay = data => new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(data);\n  }, 300);\n});\n\nconst basic = async () => {\n  return await delay({\n    fields: [{\n      name: 'CPF',\n      value: ''\n    }, {\n      name: 'name',\n      value: ''\n    }, {\n      name: 'email',\n      value: ''\n    }, {\n      name: 'phone',\n      value: ''\n    }],\n    titlePage: 'Vamos lá?',\n    nextStep: 'person',\n    prevStep: 'basic',\n    currentStep: 'basic'\n  });\n};\n\nconst person = async () => {\n  return await delay({\n    fields: [{\n      name: 'CPF',\n      value: ''\n    }, {\n      name: 'name',\n      value: ''\n    }, {\n      name: 'email',\n      value: ''\n    }, {\n      name: 'phone',\n      value: ''\n    }],\n    titlePage: [],\n    nextStep: 'adress',\n    prevStep: 'basic',\n    currentStep: 'person'\n  });\n};\n\nconst adress = async () => {\n  return await delay({\n    fields: [{\n      name: 'CPF',\n      value: ''\n    }, {\n      name: 'name',\n      value: ''\n    }, {\n      name: 'email',\n      value: ''\n    }, {\n      name: 'phone',\n      value: ''\n    }],\n    titlePage: [],\n    nextStep: 'profession',\n    prevStep: 'person',\n    currentStep: 'adress'\n  });\n};\n\nconst customization = async () => {\n  return await delay({\n    fields: [{\n      name: 'CPF',\n      value: ''\n    }, {\n      name: 'name',\n      value: ''\n    }, {\n      name: 'email',\n      value: ''\n    }, {\n      name: 'phone',\n      value: ''\n    }],\n    titlePage: [],\n    nextStep: 'finished',\n    prevStep: 'profession',\n    currentStep: 'customization'\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  basic,\n  person,\n  adress,\n  customization\n});\n\n//# sourceURL=webpack:///./src/js/services/api/index.js?");

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