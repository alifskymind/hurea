"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chartOriginalPage",{

/***/ "./components/testSwr.js":
/*!*******************************!*\
  !*** ./components/testSwr.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ \"./node_modules/highcharts/highcharts.js\");\n/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-react-official */ \"./node_modules/highcharts-react-official/dist/highcharts-react.min.js\");\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/boost */ \"./node_modules/highcharts/modules/boost.js\");\n/* harmony import */ var highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n// import highcharts\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction testSwr() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), temperature = ref[0], setTemperature = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), timestamp = ref1[0], setTimestamp = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:8080/api/v1/temperatures\", fetcher), data = ref2.data, error = ref2.error;\n    // setTemperature(data?.map((item) => item.temperatureInC));\n    // setTimestamp(data?.map((item) => item.unixTimestamp));\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\components\\\\testSwr.js\",\n        lineNumber: 30,\n        columnNumber: 20\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\components\\\\testSwr.js\",\n        lineNumber: 31,\n        columnNumber: 20\n    }, this);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: JSON.stringify(data.id)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\components\\\\testSwr.js\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this);\n}\n_s(testSwr, \"++IzAsqQyqTZYvZLQQXjxNwOioI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (testSwr);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rlc3RTd3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDNEI7QUFDN0I7QUFFeEIsb0JBQW9CO0FBQ2U7QUFDb0I7QUFDVjs7QUFFN0MsSUFBTVEsT0FBTyxHQUFHLFNBQUNDLEdBQUc7V0FBS0MsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFNBQUNDLEdBQUc7ZUFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7S0FBQSxDQUFDO0NBQUE7QUFHN0QsU0FBU0MsT0FBTyxHQUFHOztJQUVsQixJQUFzQ1osR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWRuRCxXQWNtQixHQUFvQkEsR0FBWSxHQUFoQyxFQWRuQixjQWNtQyxHQUFJQSxHQUFZLEdBQWhCO0lBQ2hDLElBQWtDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBZmpELFNBZW1CLEdBQWtCQSxJQUFZLEdBQTlCLEVBZm5CLFlBZWlDLEdBQUlBLElBQVksR0FBaEI7SUFFaEMsSUFBd0JFLElBTXZCLEdBTnVCQSwrQ0FBTSxDQUU3QiwyQ0FBMkMsRUFFM0NJLE9BQU8sQ0FFUCxFQU5PVyxJQUFJLEdBQVlmLElBTXZCLENBTk9lLElBQUksRUFBRUMsS0FBSyxHQUFLaEIsSUFNdkIsQ0FOYWdCLEtBQUs7SUFRbkIsNERBQTREO0lBRTVELHlEQUF5RDtJQUV6RCxJQUFJQSxLQUFLLEVBQUUscUJBQU8sOERBQUNDLEtBQUc7a0JBQUMsZ0JBQWM7Ozs7O1lBQU07SUFDM0MsSUFBSSxDQUFDRixJQUFJLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsWUFBVTs7Ozs7WUFBTTtJQUV2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQyxDQUFDO0lBRWxCLHFCQUNDLDhEQUFDRSxLQUFHO2tCQUVGRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sSUFBSSxDQUFDTyxFQUFFLENBQUM7Ozs7O1lBSW5CLENBQ047Q0FDRDtHQS9CUVosT0FBTzs7UUFLU1YsMkNBQU07OztBQTRCL0IsK0RBQWVVLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZXN0U3dyLmpzP2E3Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuXHJcbi8vIGltcG9ydCBoaWdoY2hhcnRzXHJcbmltcG9ydCBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnXHJcbmltcG9ydCBIaWdoY2hhcnRzUmVhY3QgZnJvbSAnaGlnaGNoYXJ0cy1yZWFjdC1vZmZpY2lhbCdcclxuaW1wb3J0IEJvb3N0IGZyb20gJ2hpZ2hjaGFydHMvbW9kdWxlcy9ib29zdCc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRlc3RTd3IoKSB7XHJcblxyXG5cdGNvbnN0IFt0ZW1wZXJhdHVyZSwgc2V0VGVtcGVyYXR1cmVdID0gdXNlU3RhdGUoW10pO1xyXG4gIFx0Y29uc3QgW3RpbWVzdGFtcCwgc2V0VGltZXN0YW1wXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG5cclxuXHRcdFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS90ZW1wZXJhdHVyZXNcIixcclxuXHJcblx0XHRmZXRjaGVyXHJcblxyXG5cdCk7XHJcblxyXG5cdC8vIHNldFRlbXBlcmF0dXJlKGRhdGE/Lm1hcCgoaXRlbSkgPT4gaXRlbS50ZW1wZXJhdHVyZUluQykpO1xyXG5cclxuXHQvLyBzZXRUaW1lc3RhbXAoZGF0YT8ubWFwKChpdGVtKSA9PiBpdGVtLnVuaXhUaW1lc3RhbXApKTtcclxuXHJcblx0aWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PlxyXG5cdGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblxyXG5cdFx0XHR7SlNPTi5zdHJpbmdpZnkoZGF0YS5pZCl9XHJcblxyXG5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RTd3IiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJIaWdoY2hhcnRzIiwiSGlnaGNoYXJ0c1JlYWN0IiwiQm9vc3QiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRlc3RTd3IiLCJ0ZW1wZXJhdHVyZSIsInNldFRlbXBlcmF0dXJlIiwidGltZXN0YW1wIiwic2V0VGltZXN0YW1wIiwiZGF0YSIsImVycm9yIiwiZGl2IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/testSwr.js\n");

/***/ })

});