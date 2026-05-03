"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksimple_icons_website"] = self["webpackChunksimple_icons_website"] || []).push([["public_scripts_copy_js"],{

/***/ "./public/scripts/copy.js":
/*!********************************!*\
  !*** ./public/scripts/copy.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ copy; }\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./public/scripts/utils.js\");\n\n\nconst COPIED_TIMEOUT = 1000;\n\nconst setCopied = ($element) => {\n  $element.classList.add('copied');\n  setTimeout(() => $element.classList.remove('copied'), COPIED_TIMEOUT);\n};\n\nfunction copy(document, navigator, fetch) {\n  const $copyInput = document.querySelector('#copy-input');\n  const $colorButtons = document.querySelectorAll('.copy-color');\n  const $svgButtons = document.querySelectorAll('.copy-svg');\n  const $slugButtons = document.querySelectorAll('.copy-slug');\n\n  const copyValue = (value) => {\n    if (navigator.clipboard) {\n      navigator.clipboard.writeText(value);\n    } else {\n      $copyInput.value = value;\n      $copyInput.select();\n      document.execCommand('copy');\n    }\n  };\n\n  const onClickColorButton = (event) => {\n    event.preventDefault();\n    copyValue(event.target.innerHTML);\n    setCopied(event.target);\n  };\n\n  const onClickSvgButton = async (event) => {\n    event.preventDefault();\n\n    const $img = event.target.querySelector('img');\n    const iconUrl = $img.getAttribute('src');\n\n    try {\n      const data = await fetch(iconUrl);\n      const svgValue = await data.text();\n      copyValue(svgValue);\n      setCopied(event.target);\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  const onClickSlugButton = (event) => {\n    event.preventDefault();\n    const href = event.target.parentNode.parentNode\n      .querySelector('.icon-preview')\n      .getAttribute('src');\n    const slug = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.iconHrefToSlug)(href);\n    copyValue(slug);\n    setCopied(event.target);\n  };\n\n  for (const $colorButton of $colorButtons) {\n    $colorButton.removeAttribute('disabled');\n    $colorButton.addEventListener('click', onClickColorButton);\n  }\n\n  for (const $svgButton of $svgButtons) {\n    $svgButton.removeAttribute('disabled');\n    $svgButton.addEventListener('click', onClickSvgButton);\n  }\n\n  for (const $slugButton of $slugButtons) {\n    $slugButton.removeAttribute('disabled');\n    $slugButton.addEventListener('click', onClickSlugButton);\n  }\n}\n\n\n//# sourceURL=webpack://simple-icons-website/./public/scripts/copy.js?");

/***/ }),

/***/ "./public/scripts/utils.js":
/*!*********************************!*\
  !*** ./public/scripts/utils.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: function() { return /* binding */ debounce; },\n/* harmony export */   iconHrefToSlug: function() { return /* binding */ iconHrefToSlug; }\n/* harmony export */ });\nconst debounce = (function_, wait, immediate) => {\n  // eslint-disable-next-line one-var\n  let timeout, arguments_, context, timestamp, result;\n\n  const later = () => {\n    const last = Date.now() - timestamp;\n    if (last < wait && last >= 0) {\n      timeout = setTimeout(later, wait - last);\n    } else {\n      timeout = null;\n      if (!immediate) {\n        result = function_.apply(context, arguments_);\n        // eslint-disable-next-line no-multi-assign\n        if (!timeout) context = arguments_ = null;\n      }\n    }\n  };\n\n  return function () {\n    // eslint-disable-next-line unicorn/no-this-assignment\n    context = this;\n    // eslint-disable-next-line prefer-rest-params\n    arguments_ = arguments;\n    timestamp = Date.now();\n    const callNow = immediate && !timeout;\n    timeout ||= setTimeout(later, wait);\n    if (callNow) {\n      result = function_.apply(context, arguments_);\n      // eslint-disable-next-line no-multi-assign\n      context = arguments_ = null;\n    }\n\n    return result;\n  };\n};\n\nconst iconHrefToSlug = (href) => /icons\\/(.+)\\.svg$/.exec(href)[1];\n\n\n//# sourceURL=webpack://simple-icons-website/./public/scripts/utils.js?");

/***/ })

}]);