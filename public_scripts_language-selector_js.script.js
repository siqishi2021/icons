"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksimple_icons_website"] = self["webpackChunksimple_icons_website"] || []).push([["public_scripts_language-selector_js"],{

/***/ "./public/scripts/language-selector.js":
/*!*********************************************!*\
  !*** ./public/scripts/language-selector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _url_parameters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-parameters.js */ \"./public/scripts/url-parameters.js\");\n\n\nconst initLanguageSelector = (document, domUtils) => {\n  const $languageSelector = document.querySelector('#language-selector');\n  const $languageSelectorList = $languageSelector.querySelector('ul');\n\n  $languageSelector.addEventListener('click', (event) => {\n    domUtils.toggleVisibleElement($languageSelectorList);\n    event.stopPropagation();\n  });\n\n  document.addEventListener('click', (event) => {\n    const composedPath = event.composedPath();\n    if (!composedPath.includes($languageSelector)) {\n      domUtils.hideElement($languageSelectorList);\n    }\n  });\n\n  if ((0,_url_parameters_js__WEBPACK_IMPORTED_MODULE_0__.getUrlParameter)(document, 'modal') === 'languages') {\n    domUtils.showElement($languageSelectorList);\n  }\n\n  const languageParameter = (0,_url_parameters_js__WEBPACK_IMPORTED_MODULE_0__.getUrlParameter)(document, 'lang');\n  const $languageLink = languageParameter\n    ? $languageSelectorList.querySelector(\n        `a[data-language=\"${languageParameter}\"]`,\n      )\n    : null;\n\n  $languageLink?.click();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initLanguageSelector);\n\n\n//# sourceURL=webpack://simple-icons-website/./public/scripts/language-selector.js?");

/***/ })

}]);