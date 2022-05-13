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

/***/ "./components/testSwrChart.js":
/*!************************************!*\
  !*** ./components/testSwrChart.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ \"./node_modules/highcharts/highcharts.js\");\n/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-react-official */ \"./node_modules/highcharts-react-official/dist/highcharts-react.min.js\");\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/boost */ \"./node_modules/highcharts/modules/boost.js\");\n/* harmony import */ var highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n// import highcharts\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction testSwrChart() {\n    _s();\n    // fetch data from database\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:8080/api/v1/temperatures\", fetcher), data = ref.data, error = ref.error;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\components\\\\testSwrChart.js\",\n        lineNumber: 23,\n        columnNumber: 20\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\components\\\\testSwrChart.js\",\n        lineNumber: 24,\n        columnNumber: 20\n    }, this);\n    // test view data\n    console.log(data);\n    console.log(data[0].deviceUUID);\n    // merge timestamp and temperature into one array\n    var combinedArray = [];\n    var i = 0;\n    for(i = 0; i < data.length; i++){\n        combinedArray.push([\n            data[i].unixTimestamp,\n            data[i].temperatureInC\n        ]);\n    }\n    console.log(combinedArray);\n    // chart options\n    var options = {\n        chart: {\n            zoomType: \"x\"\n        },\n        title: {\n            text: \"Temperature changes over time\"\n        },\n        subtitle: {\n            text: \"Click and drag in the plot area to zoom in\"\n        },\n        xAxis: {\n            type: \"datetime\"\n        },\n        yAxis: {\n            title: {\n                text: \"Temperature in Celcius\"\n            }\n        },\n        legend: {\n            enabled: true\n        },\n        series: [\n            {\n                boostThreshold: 1,\n                type: \"line\",\n                name: \"Temperature changes over time\",\n                data: combinedArray\n            }\n        ],\n        boost: {\n            useGPUTranslations: true,\n            usePreAllocated: true,\n            seriesThreshold: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((highcharts_react_official__WEBPACK_IMPORTED_MODULE_4___default()), {\n            highcharts: (highcharts__WEBPACK_IMPORTED_MODULE_3___default()),\n            options: options\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\components\\\\testSwrChart.js\",\n            lineNumber: 122,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\components\\\\testSwrChart.js\",\n        lineNumber: 112,\n        columnNumber: 3\n    }, this);\n}\n_s(testSwrChart, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (testSwrChart);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rlc3RTd3JDaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUM0QjtBQUM3QjtBQUV4QixvQkFBb0I7QUFDZTtBQUNvQjtBQUNWOztBQUU3QyxJQUFNUSxPQUFPLEdBQUcsU0FBQ0MsR0FBRztXQUFLQyxLQUFLLENBQUNELEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUMsU0FBQ0MsR0FBRztlQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtLQUFBLENBQUM7Q0FBQTtBQUU3RCxTQUFTQyxZQUFZLEdBQUc7O0lBRXZCLDJCQUEyQjtJQUMzQixJQUF3QlYsR0FNdkIsR0FOdUJBLCtDQUFNLENBRTdCLDJDQUEyQyxFQUUzQ0ksT0FBTyxDQUVQLEVBTk9PLElBQUksR0FBWVgsR0FNdkIsQ0FOT1csSUFBSSxFQUFFQyxLQUFLLEdBQUtaLEdBTXZCLENBTmFZLEtBQUs7SUFRbkIsSUFBSUEsS0FBSyxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLGdCQUFjOzs7OztZQUFNO0lBQzNDLElBQUksQ0FBQ0YsSUFBSSxFQUFFLHFCQUFPLDhEQUFDRSxLQUFHO2tCQUFDLFlBQVU7Ozs7O1lBQU07SUFFdkMsaUJBQWlCO0lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7SUFDbEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNLLFVBQVUsQ0FBQyxDQUFDO0lBRWhDLGlEQUFpRDtJQUNqRCxJQUFNQyxhQUFhLEdBQUcsRUFBRTtJQUV4QixJQUFJQyxDQUFDLEdBQUcsQ0FBQztJQUVULElBQUtBLENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR1AsSUFBSSxDQUFDUSxNQUFNLEVBQUdELENBQUMsRUFBRSxDQUFDO1FBRWxDRCxhQUFhLENBQUNHLElBQUksQ0FBQztZQUFDVCxJQUFJLENBQUNPLENBQUMsQ0FBQyxDQUFDRyxhQUFhO1lBQUVWLElBQUksQ0FBQ08sQ0FBQyxDQUFDLENBQUNJLGNBQWM7U0FBQyxDQUFDO0tBRW5FO0lBRURSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxhQUFhLENBQUMsQ0FBQztJQUUzQixnQkFBZ0I7SUFDaEIsSUFBTU0sT0FBTyxHQUFHO1FBRWZDLEtBQUssRUFBRTtZQUVOQyxRQUFRLEVBQUUsR0FBRztTQUViO1FBRURDLEtBQUssRUFBRTtZQUVOQyxJQUFJLEVBQUUsK0JBQStCO1NBRXJDO1FBRURDLFFBQVEsRUFBRTtZQUVURCxJQUFJLEVBQUUsNENBQTRDO1NBRWxEO1FBRURFLEtBQUssRUFBRTtZQUVOQyxJQUFJLEVBQUUsVUFBVTtTQUVoQjtRQUVEQyxLQUFLLEVBQUU7WUFFTkwsS0FBSyxFQUFFO2dCQUVOQyxJQUFJLEVBQUUsd0JBQXdCO2FBRTlCO1NBRUQ7UUFFREssTUFBTSxFQUFFO1lBRVBDLE9BQU8sRUFBRSxJQUFJO1NBRWI7UUFFREMsTUFBTSxFQUFFO1lBQUM7Z0JBRVJDLGNBQWMsRUFBRSxDQUFDO2dCQUVqQkwsSUFBSSxFQUFFLE1BQU07Z0JBRVpNLElBQUksRUFBRSwrQkFBK0I7Z0JBRXJDekIsSUFBSSxFQUFFTSxhQUFhO2FBRW5CO1NBQUM7UUFFRm9CLEtBQUssRUFBRTtZQUVOQyxrQkFBa0IsRUFBRSxJQUFJO1lBRXhCQyxlQUFlLEVBQUUsSUFBSTtZQUVyQkMsZUFBZSxFQUFFLENBQUM7U0FFbEI7S0FFRDtJQUVELHFCQUVDLDhEQUFDM0IsS0FBRztrQkFVSCw0RUFBQ1gsa0VBQWU7WUFFaEJ1QyxVQUFVLEVBQUV4QyxtREFBVTtZQUV0QnNCLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Z0JBRWQ7Ozs7O1lBRUcsQ0FDTjtDQUNEO0dBeEhRYixZQUFZOztRQUdJViwyQ0FBTTs7O0FBdUgvQiwrREFBZVUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rlc3RTd3JDaGFydC5qcz8xZDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG4vLyBpbXBvcnQgaGlnaGNoYXJ0c1xyXG5pbXBvcnQgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzJ1xyXG5pbXBvcnQgSGlnaGNoYXJ0c1JlYWN0IGZyb20gJ2hpZ2hjaGFydHMtcmVhY3Qtb2ZmaWNpYWwnXHJcbmltcG9ydCBCb29zdCBmcm9tICdoaWdoY2hhcnRzL21vZHVsZXMvYm9vc3QnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuXHJcbmZ1bmN0aW9uIHRlc3RTd3JDaGFydCgpIHtcclxuXHJcblx0Ly8gZmV0Y2ggZGF0YSBmcm9tIGRhdGFiYXNlXHJcblx0Y29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG5cclxuXHRcdFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS90ZW1wZXJhdHVyZXNcIixcclxuXHJcblx0XHRmZXRjaGVyXHJcblxyXG5cdCk7XHJcblxyXG5cdGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj5cclxuXHRpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuXHJcblx0Ly8gdGVzdCB2aWV3IGRhdGFcclxuXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRjb25zb2xlLmxvZyhkYXRhWzBdLmRldmljZVVVSUQpO1xyXG5cclxuXHQvLyBtZXJnZSB0aW1lc3RhbXAgYW5kIHRlbXBlcmF0dXJlIGludG8gb25lIGFycmF5XHJcblx0Y29uc3QgY29tYmluZWRBcnJheSA9IFtdO1xyXG5cclxuXHR2YXIgaSA9IDA7XHJcblxyXG5cdGZvciggaSA9IDAgOyBpIDwgZGF0YS5sZW5ndGggOyBpKyspe1xyXG5cclxuXHRcdGNvbWJpbmVkQXJyYXkucHVzaChbZGF0YVtpXS51bml4VGltZXN0YW1wLCBkYXRhW2ldLnRlbXBlcmF0dXJlSW5DXSlcclxuXHJcblx0fVxyXG5cclxuXHRjb25zb2xlLmxvZyhjb21iaW5lZEFycmF5KTtcclxuXHJcblx0Ly8gY2hhcnQgb3B0aW9uc1xyXG5cdGNvbnN0IG9wdGlvbnMgPSB7XHJcblxyXG5cdFx0Y2hhcnQ6IHtcclxuXHJcblx0XHRcdHpvb21UeXBlOiAneCdcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHRpdGxlOiB7XHJcblxyXG5cdFx0XHR0ZXh0OiAnVGVtcGVyYXR1cmUgY2hhbmdlcyBvdmVyIHRpbWUnXHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzdWJ0aXRsZToge1xyXG5cclxuXHRcdFx0dGV4dDogJ0NsaWNrIGFuZCBkcmFnIGluIHRoZSBwbG90IGFyZWEgdG8gem9vbSBpbidcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHhBeGlzOiB7XHJcblxyXG5cdFx0XHR0eXBlOiAnZGF0ZXRpbWUnLFxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0eUF4aXM6IHtcclxuXHJcblx0XHRcdHRpdGxlOiB7XHJcblxyXG5cdFx0XHRcdHRleHQ6ICdUZW1wZXJhdHVyZSBpbiBDZWxjaXVzJ1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0bGVnZW5kOiB7XHJcblxyXG5cdFx0XHRlbmFibGVkOiB0cnVlXHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXJpZXM6IFt7XHJcblxyXG5cdFx0XHRib29zdFRocmVzaG9sZDogMSxcclxuXHJcblx0XHRcdHR5cGU6ICdsaW5lJyxcclxuXHJcblx0XHRcdG5hbWU6ICdUZW1wZXJhdHVyZSBjaGFuZ2VzIG92ZXIgdGltZScsXHJcblxyXG5cdFx0XHRkYXRhOiBjb21iaW5lZEFycmF5XHJcblxyXG5cdFx0fV0sXHJcblxyXG5cdFx0Ym9vc3Q6IHtcclxuXHJcblx0XHRcdHVzZUdQVVRyYW5zbGF0aW9uczogdHJ1ZSxcclxuXHJcblx0XHRcdHVzZVByZUFsbG9jYXRlZDogdHJ1ZSxcclxuXHJcblx0XHRcdHNlcmllc1RocmVzaG9sZDogMVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8ZGl2PlxyXG5cclxuXHRcdFx0ey8qIDxwPlxyXG5cclxuXHRcdFx0XHR7ZGF0YVswXS5kZXZpY2VVVUlEfVxyXG5cclxuXHRcdFx0XHR7Y29tYmluZWRBcnJheX1cclxuXHJcblx0XHRcdDwvcD4gKi99XHJcblxyXG5cdFx0XHQ8SGlnaGNoYXJ0c1JlYWN0XHJcblxyXG5cdFx0XHRoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfVxyXG5cclxuXHRcdFx0b3B0aW9ucz17b3B0aW9uc31cclxuXHJcblx0XHRcdC8+XHJcblxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXN0U3dyQ2hhcnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJIaWdoY2hhcnRzIiwiSGlnaGNoYXJ0c1JlYWN0IiwiQm9vc3QiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRlc3RTd3JDaGFydCIsImRhdGEiLCJlcnJvciIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJkZXZpY2VVVUlEIiwiY29tYmluZWRBcnJheSIsImkiLCJsZW5ndGgiLCJwdXNoIiwidW5peFRpbWVzdGFtcCIsInRlbXBlcmF0dXJlSW5DIiwib3B0aW9ucyIsImNoYXJ0Iiwiem9vbVR5cGUiLCJ0aXRsZSIsInRleHQiLCJzdWJ0aXRsZSIsInhBeGlzIiwidHlwZSIsInlBeGlzIiwibGVnZW5kIiwiZW5hYmxlZCIsInNlcmllcyIsImJvb3N0VGhyZXNob2xkIiwibmFtZSIsImJvb3N0IiwidXNlR1BVVHJhbnNsYXRpb25zIiwidXNlUHJlQWxsb2NhdGVkIiwic2VyaWVzVGhyZXNob2xkIiwiaGlnaGNoYXJ0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/testSwrChart.js\n");

/***/ }),

/***/ "./pages/chartOriginalPage.js":
/*!************************************!*\
  !*** ./pages/chartOriginalPage.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChartOriginalPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_chartOriginal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/chartOriginal */ \"./components/chartOriginal.js\");\n/* harmony import */ var _components_chartOriginalHighChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/chartOriginalHighChart */ \"./components/chartOriginalHighChart.js\");\n/* harmony import */ var _components_testSwrChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/testSwrChart */ \"./components/testSwrChart.js\");\n\n\n\n\n\n// import TestSSR from \"../components/testSSR\"\n\nfunction ChartOriginalPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\chartOriginalPage.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TestSwrChart, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\chartOriginalPage.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\chartOriginalPage.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n_c = ChartOriginalPage;\nvar _c;\n$RefreshReg$(_c, \"ChartOriginalPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFydE9yaWdpbmFsUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNnQjtBQUNjO0FBQ2tCO0FBQ3pFLDhDQUE4QztBQUNFO0FBR2pDLFNBQVNLLGlCQUFpQixHQUFHO0lBRTFDLHFCQUVFLDhEQUFDQyxLQUFHOzswQkFFRiw4REFBQ0wsMERBQU07Ozs7b0JBQUU7MEJBUVQsOERBQUNNLFlBQVk7Ozs7b0JBQUU7Ozs7OztZQUVYLENBRVA7Q0FFRjtBQXBCdUJGLEtBQUFBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFydE9yaWdpbmFsUGFnZS5qcz9hNTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiXHJcbmltcG9ydCBDaGFydE9yaWdpbmFsIGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXJ0T3JpZ2luYWxcIlxyXG5pbXBvcnQgQ2hhcnRPcmlnaW5hbEhpZ2hDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydE9yaWdpbmFsSGlnaENoYXJ0XCJcclxuLy8gaW1wb3J0IFRlc3RTU1IgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdFNTUlwiXHJcbmltcG9ydCBUZXN0U3dyIGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3RTd3JDaGFydFwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnRPcmlnaW5hbFBhZ2UoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDxOYXZiYXIvPlxyXG5cclxuICAgICAgey8qIDxDaGFydE9yaWdpbmFsLz4gKi99XHJcblxyXG4gICAgICB7LyogPENoYXJ0T3JpZ2luYWxIaWdoQ2hhcnQvPiAqL31cclxuXHJcbiAgICAgIHsvKiA8VGVzdFNTUi8+ICovfVxyXG5cclxuICAgICAgPFRlc3RTd3JDaGFydC8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZiYXIiLCJDaGFydE9yaWdpbmFsIiwiQ2hhcnRPcmlnaW5hbEhpZ2hDaGFydCIsIlRlc3RTd3IiLCJDaGFydE9yaWdpbmFsUGFnZSIsImRpdiIsIlRlc3RTd3JDaGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chartOriginalPage.js\n");

/***/ })

});