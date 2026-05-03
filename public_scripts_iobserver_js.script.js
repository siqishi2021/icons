"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksimple_icons_website"] = self["webpackChunksimple_icons_website"] || []).push([["public_scripts_iobserver_js"],{

/***/ "./public/scripts/iobserver.js":
/*!*************************************!*\
  !*** ./public/scripts/iobserver.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ intersectionObserver; }\n/* harmony export */ });\n/**\n * @fileoverview\n * Lazy loading of images using an intersection observer.\n */\n\nfunction intersectionObserver(document) {\n  const images = document.querySelectorAll('img[d-src]');\n\n  if ('IntersectionObserver' in window) {\n    const lazyLoad = (target) => {\n      const io = new IntersectionObserver(\n        (entries, observer) => {\n          for (const entry of entries) {\n            if (entry.isIntersecting) {\n              const img = entry.target;\n              const source = img.getAttribute('d-src');\n              img.addEventListener('load', () => {\n                img.classList.add('ld');\n              });\n\n              img.setAttribute('src', source);\n              img.removeAttribute('d-src');\n              observer.disconnect();\n            }\n          }\n        },\n        {threshold: [0], rootMargin: '80px'},\n      );\n\n      io.observe(target);\n    };\n\n    for (const image of images) {\n      lazyLoad(image);\n    }\n  } else {\n    // Browser does not support IntersectionObserver,\n    // so we load using the loading=lazy attribute\n    for (const img of images) {\n      const source = img.getAttribute('d-src');\n      img.removeAttribute('d-src');\n      img.addEventListener('load', () => {\n        img.classList.add('ld');\n      });\n\n      img.setAttribute('loading', 'lazy');\n      img.setAttribute('src', source);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://simple-icons-website/./public/scripts/iobserver.js?");

/***/ })

}]);