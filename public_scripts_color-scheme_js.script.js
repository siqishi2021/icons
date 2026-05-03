"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksimple_icons_website"] = self["webpackChunksimple_icons_website"] || []).push([["public_scripts_color-scheme_js"],{

/***/ "./public/scripts/color-scheme.js":
/*!****************************************!*\
  !*** ./public/scripts/color-scheme.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COLOR_SCHEME_DARK: function() { return /* binding */ COLOR_SCHEME_DARK; },\n/* harmony export */   COLOR_SCHEME_LIGHT: function() { return /* binding */ COLOR_SCHEME_LIGHT; },\n/* harmony export */   COLOR_SCHEME_SYSTEM: function() { return /* binding */ COLOR_SCHEME_SYSTEM; },\n/* harmony export */   \"default\": function() { return /* binding */ colorScheme; }\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./public/scripts/storage.js\");\n/* harmony import */ var _url_parameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-parameters.js */ \"./public/scripts/url-parameters.js\");\n\n\n\nconst COLOR_SCHEME_DARK = 'dark';\nconst COLOR_SCHEME_LIGHT = 'light';\nconst COLOR_SCHEME_SYSTEM = 'system';\n\nconst DEFAULT_COLOR_SCHEME = COLOR_SCHEME_SYSTEM;\n\nconst CLASS_DARK_MODE = 'dark';\nconst CLASS_LIGHT_MODE = 'light';\n\nfunction colorScheme(document, storage) {\n  let activeColorScheme = DEFAULT_COLOR_SCHEME;\n\n  const $body = document.querySelector('body');\n  const $colorSchemeDark = document.querySelector('#color-scheme-dark');\n  const $colorSchemeLight = document.querySelector('#color-scheme-light');\n  const $colorSchemeSystem = document.querySelector('#color-scheme-system');\n\n  $colorSchemeDark.disabled = false;\n  $colorSchemeLight.disabled = false;\n  $colorSchemeSystem.disabled = false;\n\n  const selectColorScheme = (selected) => {\n    if (selected === activeColorScheme) {\n      return;\n    }\n\n    if (selected === COLOR_SCHEME_DARK) {\n      $body.classList.add(CLASS_DARK_MODE);\n      $body.classList.remove(CLASS_LIGHT_MODE);\n    } else if (selected === COLOR_SCHEME_LIGHT) {\n      $body.classList.add(CLASS_LIGHT_MODE);\n      $body.classList.remove(CLASS_DARK_MODE);\n    } else {\n      $body.classList.remove(CLASS_DARK_MODE, CLASS_LIGHT_MODE);\n    }\n\n    storage.setItem(_storage_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY_COLOR_SCHEME, selected);\n    activeColorScheme = selected;\n  };\n\n  const urlColorScheme = (0,_url_parameters_js__WEBPACK_IMPORTED_MODULE_1__.getUrlParameterValue)(document, 'color-scheme', [\n    COLOR_SCHEME_DARK,\n    COLOR_SCHEME_LIGHT,\n    COLOR_SCHEME_SYSTEM,\n  ]);\n\n  if (urlColorScheme) {\n    selectColorScheme(urlColorScheme);\n  } else if (storage.hasItem(_storage_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY_COLOR_SCHEME)) {\n    const storedColorScheme = storage.getItem(_storage_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY_COLOR_SCHEME);\n    selectColorScheme(storedColorScheme);\n  }\n\n  $colorSchemeDark.addEventListener('click', () => {\n    selectColorScheme(COLOR_SCHEME_DARK);\n  });\n  $colorSchemeLight.addEventListener('click', () => {\n    selectColorScheme(COLOR_SCHEME_LIGHT);\n  });\n  $colorSchemeSystem.addEventListener('click', () => {\n    selectColorScheme(COLOR_SCHEME_SYSTEM);\n  });\n}\n\n\n//# sourceURL=webpack://simple-icons-website/./public/scripts/color-scheme.js?");

/***/ })

}]);