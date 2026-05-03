"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksimple_icons_website"] = self["webpackChunksimple_icons_website"] || []).push([["public_scripts_layout_js"],{

/***/ "./public/scripts/layout.js":
/*!**********************************!*\
  !*** ./public/scripts/layout.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LAYOUT_COMFORTABLE: function() { return /* binding */ LAYOUT_COMFORTABLE; },\n/* harmony export */   LAYOUT_COMPACT: function() { return /* binding */ LAYOUT_COMPACT; }\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./public/scripts/storage.js\");\n/* harmony import */ var _url_parameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-parameters.js */ \"./public/scripts/url-parameters.js\");\n\n\n\nconst LAYOUT_COMPACT = 'layout-compact';\nconst LAYOUT_COMFORTABLE = 'layout-comfortable';\n\nconst DEFAULT_LAYOUT = LAYOUT_COMFORTABLE;\n\nconst initLayout = (document, storage) => {\n  let activelayout = DEFAULT_LAYOUT;\n\n  const $body = document.querySelector('body');\n  const $layoutComfortable = document.querySelector('#layout-comfortable');\n  const $layoutCompact = document.querySelector('#layout-compact');\n\n  function selectlayout(selected) {\n    if (selected === activelayout) {\n      return;\n    }\n\n    if (selected === LAYOUT_COMFORTABLE) {\n      $body.classList.replace(LAYOUT_COMPACT, LAYOUT_COMFORTABLE);\n    } else if (selected === LAYOUT_COMPACT) {\n      $body.classList.replace(LAYOUT_COMFORTABLE, LAYOUT_COMPACT);\n    } else {\n      selected = DEFAULT_LAYOUT;\n      $body.classList.remove(LAYOUT_COMFORTABLE, LAYOUT_COMPACT);\n      $body.classList.add(DEFAULT_LAYOUT);\n    }\n\n    storage.setItem(_storage_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY_LAYOUT, selected);\n    activelayout = selected;\n  }\n\n  const urlLayout = (0,_url_parameters_js__WEBPACK_IMPORTED_MODULE_1__.getUrlParameterValue)(document, 'layout', [\n    'compact',\n    'comfortable',\n  ]);\n  const selectedLayout = urlLayout\n    ? `layout-${urlLayout}`\n    : storage.getItem(_storage_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY_LAYOUT);\n  selectlayout(selectedLayout);\n\n  $layoutComfortable.addEventListener('click', (event) => {\n    event.preventDefault();\n    selectlayout(LAYOUT_COMFORTABLE);\n  });\n  $layoutCompact.addEventListener('click', (event) => {\n    event.preventDefault();\n    selectlayout(LAYOUT_COMPACT);\n  });\n\n  $layoutComfortable.disabled = false;\n  $layoutCompact.disabled = false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initLayout);\n\n\n//# sourceURL=webpack://simple-icons-website/./public/scripts/layout.js?");

/***/ })

}]);