"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/testTable3";
exports.ids = ["pages/testTable3"];
exports.modules = {

/***/ "./pages/testTable3.js":
/*!*****************************!*\
  !*** ./pages/testTable3.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ \"react-table\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction testTable3() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: keyword , 1: setKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchData = ()=>{\n        const url = `https://api.github.com/search/repositories?q=${keyword}`;\n        fetch(url).then((response)=>response.json()\n        ).then((responseData)=>{\n            setData(responseData.items);\n        });\n    };\n    const handleChange = (e)=>{\n        setKeyword(e.target.value);\n    };\n    const columns = [\n        {\n            Header: \"Name\",\n            accessor: \"full_name\" // Value accessor\n        },\n        {\n            Header: \"URL\",\n            accessor: \"html_url\"\n        },\n        {\n            Header: \"Owner\",\n            accessor: \"owner.login\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testTable3.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: fetchData,\n                    value: keyword,\n                    children: \"fetch\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testTable3.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_table__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    data: data,\n                    columns: columns\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testTable3.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testTable3.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testTable3.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testTable3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0VGFibGUzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNJO0FBRXJDLFNBQVNFLFVBQVUsR0FBRztJQUVsQixNQUFNLEVBTFYsR0FLV0MsSUFBSSxHQUxmLEdBS2lCQyxPQUFPLE1BQUlKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sRUFOVixHQU1XSyxPQUFPLEdBTmxCLEdBTW9CQyxVQUFVLE1BQUlOLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzFDLE1BQU1PLFNBQVMsR0FBRyxJQUFNO1FBQ3BCLE1BQU1DLEdBQUcsR0FBRyxDQUFDLDZDQUE2QyxFQUFFSCxPQUFPLENBQUMsQ0FBQztRQUNyRUksS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FDTEUsSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1FBQUEsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDRyxDQUFBQSxZQUFZLEdBQUk7WUFDbEJULE9BQU8sQ0FBQ1MsWUFBWSxDQUFDQyxLQUFLLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQUM7S0FDVjtJQUVELE1BQU1DLFlBQVksR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDeEJWLFVBQVUsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzlCO0lBRUQsTUFBTUMsT0FBTyxHQUFHO1FBQUM7WUFDYkMsTUFBTSxFQUFFLE1BQU07WUFDZEMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxpQkFBaUI7U0FDdEM7UUFBRTtZQUNIRCxNQUFNLEVBQUUsS0FBSztZQUNiQyxRQUFRLEVBQUUsVUFBVTtTQUNuQjtRQUFFO1lBQ0hELE1BQU0sRUFBRSxPQUFPO1lBQ2ZDLFFBQVEsRUFBRSxhQUFhO1NBQ3RCO0tBQUM7SUFFTixxQkFDSSw4REFBQ0MsS0FBRztrQkFFQSw0RUFBQ0EsS0FBRztZQUFDQyxTQUFTLEVBQUMsS0FBSzs7OEJBQ2hCLDhEQUFDQyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsUUFBUSxFQUFFWCxZQUFZOzs7Ozt3QkFBSTs4QkFDN0MsOERBQUNZLFFBQU07b0JBQUNDLE9BQU8sRUFBRXJCLFNBQVM7b0JBQUVXLEtBQUssRUFBRWIsT0FBTzs4QkFBRSxPQUFLOzs7Ozt3QkFBUzs4QkFDMUQsOERBQUNKLG9EQUFVO29CQUFDRSxJQUFJLEVBQUVBLElBQUk7b0JBQUVnQixPQUFPLEVBQUVBLE9BQU87Ozs7O3dCQUFJOzs7Ozs7Z0JBQzFDOzs7OztZQUtKLENBQ1Q7Q0FDSjtBQUVELGlFQUFlakIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2h1cmVhLXVpLy4vcGFnZXMvdGVzdFRhYmxlMy5qcz8xNTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RUYWJsZSBmcm9tIFwicmVhY3QtdGFibGVcIjtcclxuXHJcbmZ1bmN0aW9uIHRlc3RUYWJsZTMoKSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2tleXdvcmQsIHNldEtleXdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT0ke2tleXdvcmR9YDtcclxuICAgICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2VEYXRhLml0ZW1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2x1bW5zID0gW3tcclxuICAgICAgICBIZWFkZXI6ICdOYW1lJywgLy8gSGVhZGVyIG9mIHRoZSBjb2x1bW5cclxuICAgICAgICBhY2Nlc3NvcjogJ2Z1bGxfbmFtZScgLy8gVmFsdWUgYWNjZXNzb3JcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgSGVhZGVyOiAnVVJMJyxcclxuICAgICAgICBhY2Nlc3NvcjogJ2h0bWxfdXJsJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgSGVhZGVyOiAnT3duZXInLFxyXG4gICAgICAgIGFjY2Vzc29yOiAnb3duZXIubG9naW4nLFxyXG4gICAgICAgIH1dXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoRGF0YX0gdmFsdWU9e2tleXdvcmR9PmZldGNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RUYWJsZSBkYXRhPXtkYXRhfSBjb2x1bW5zPXtjb2x1bW5zfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RUYWJsZTNcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVhY3RUYWJsZSIsInRlc3RUYWJsZTMiLCJkYXRhIiwic2V0RGF0YSIsImtleXdvcmQiLCJzZXRLZXl3b3JkIiwiZmV0Y2hEYXRhIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VEYXRhIiwiaXRlbXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb2x1bW5zIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/testTable3.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-table");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/testTable3.js"));
module.exports = __webpack_exports__;

})();