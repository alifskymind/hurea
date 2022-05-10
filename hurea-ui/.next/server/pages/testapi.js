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
exports.id = "pages/testApi";
exports.ids = ["pages/testApi"];
exports.modules = {

/***/ "./pages/testApi.js":
/*!**************************!*\
  !*** ./pages/testApi.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TestApi),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// set api path\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await res.json();\n    return {\n        props: {\n            ninjas: data\n        }\n    };\n};\n// use api path\nfunction TestApi({ ninjas  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List ninjas\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApi.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            ninjas.map((ninja)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: ninja.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApi.js\",\n                                lineNumber: 26,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApi.js\",\n                            lineNumber: 25,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: ninja.address.street\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApi.js\",\n                                lineNumber: 30,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApi.js\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, ninja.id, true, {\n                    fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApi.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApi.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0QXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTtBQURBLGVBQWU7QUFDUixNQUFNQSxjQUFjLEdBQUcsVUFBVztJQUVyQyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO0lBQ3JFLE1BQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUU3QixPQUFPO1FBRUhDLEtBQUssRUFBRTtZQUFDQyxNQUFNLEVBQUdILElBQUk7U0FBQztLQUN6QjtDQUNKO0FBRUQsZUFBZTtBQUNBLFNBQVNJLE9BQU8sQ0FBRSxFQUFDRCxNQUFNLEdBQUMsRUFBRztJQUMxQyxxQkFFRSw4REFBQ0UsS0FBRzs7MEJBRUYsOERBQUNDLElBQUU7MEJBQUMsYUFBVzs7Ozs7b0JBQUs7WUFFbkJILE1BQU0sQ0FBQ0ksR0FBRyxDQUFDQyxDQUFBQSxLQUFLLGlCQUVYLDhEQUFDSCxLQUFHOztzQ0FDRiw4REFBQ0ksR0FBQztzQ0FDRSw0RUFBQ0MsSUFBRTswQ0FBRUYsS0FBSyxDQUFDRyxJQUFJOzs7OztvQ0FBTTs7Ozs7Z0NBQ3JCO3NDQUVKLDhEQUFDRixHQUFDO3NDQUNFLDRFQUFDQyxJQUFFOzBDQUFFRixLQUFLLENBQUNJLE9BQU8sQ0FBQ0MsTUFBTTs7Ozs7b0NBQU07Ozs7O2dDQUMvQjs7bUJBUElMLEtBQUssQ0FBQ00sRUFBRTs7Ozt3QkFRWjtZQUNYLENBQUM7Ozs7OztZQUVFLENBRVA7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2h1cmVhLXVpLy4vcGFnZXMvdGVzdEFwaS5qcz83ZDc0Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBzZXQgYXBpIHBhdGhcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgcHJvcHM6IHtuaW5qYXMgOiBkYXRhfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyB1c2UgYXBpIHBhdGhcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEFwaSAoe25pbmphc30pICB7XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2PlxyXG5cclxuICAgICAgPGgxPkxpc3QgbmluamFzPC9oMT5cclxuXHJcbiAgICAgIHtuaW5qYXMubWFwKG5pbmphID0+IChcclxuXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtuaW5qYS5pZH0gPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e25pbmphLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e25pbmphLmFkZHJlc3Muc3RyZWV0fTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsIm5pbmphcyIsIlRlc3RBcGkiLCJkaXYiLCJoMSIsIm1hcCIsIm5pbmphIiwiYSIsImgzIiwibmFtZSIsImFkZHJlc3MiLCJzdHJlZXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/testApi.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/testApi.js"));
module.exports = __webpack_exports__;

})();