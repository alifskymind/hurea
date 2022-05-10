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
exports.id = "pages/testApiBackend2";
exports.ids = ["pages/testApiBackend2"];
exports.modules = {

/***/ "./pages/testApiBackend2.js":
/*!**********************************!*\
  !*** ./pages/testApiBackend2.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TestApiBackend2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction TestApiBackend2() {\n    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        fetch(\"http://localhost:8080/api/v1/users\").then((res)=>res.json()\n        ).then((data)=>{\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend2.js\",\n        lineNumber: 17,\n        columnNumber: 27\n    }, this);\n    if (!data1) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend2.js\",\n        lineNumber: 18,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: data1.firstName\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend2.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend2.js\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0QXBpQmFja2VuZDIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUVwQyxTQUFTRyxlQUFlLEdBQUc7SUFDdEMsTUFBTSxFQUhWLEdBR1dDLEtBQUksR0FIZixHQUdpQkMsT0FBTyxNQUFJSiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUN0QyxNQUFNLEVBSlYsR0FJV0ssU0FBUyxHQUpwQixHQUlzQkMsVUFBVSxNQUFJTiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUUvQ0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RLLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEJDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUN4Q0MsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7UUFBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsQ0FBQ0wsSUFBSSxHQUFLO1lBQ2RDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ2JHLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDbEIsQ0FBQztLQUNMLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBSUQsU0FBUyxFQUFFLHFCQUFPLDhEQUFDTSxHQUFDO2tCQUFDLFlBQVU7Ozs7O1lBQUk7SUFDdkMsSUFBSSxDQUFDUixLQUFJLEVBQUUscUJBQU8sOERBQUNRLEdBQUM7a0JBQUMsaUJBQWU7Ozs7O1lBQUk7SUFFeEMscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNDLElBQUU7c0JBQUVWLEtBQUksQ0FBQ1csU0FBUzs7Ozs7Z0JBQU07Ozs7O1lBRXJCLENBQ1A7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2h1cmVhLXVpLy4vcGFnZXMvdGVzdEFwaUJhY2tlbmQyLmpzPzYzYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RBcGlCYWNrZW5kMigpIHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvdXNlcnMnKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldERhdGEoZGF0YSlcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm8gcHJvZmlsZSBkYXRhPC9wPlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPntkYXRhLmZpcnN0TmFtZX08L2gxPlxyXG4gICAgICAgIHsvKiA8cD57ZGF0YS5sYXN0TmFtZX08L3A+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXN0QXBpQmFja2VuZDIiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicCIsImRpdiIsImgxIiwiZmlyc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/testApiBackend2.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/testApiBackend2.js"));
module.exports = __webpack_exports__;

})();