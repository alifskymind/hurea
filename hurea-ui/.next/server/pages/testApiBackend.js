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
exports.id = "pages/testApiBackend";
exports.ids = ["pages/testApiBackend"];
exports.modules = {

/***/ "./pages/testApiBackend.js":
/*!*********************************!*\
  !*** ./pages/testApiBackend.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TestApiBackend),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// set api path\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"http://localhost:8080/api/v1/users\");\n    const data = await res.json();\n    return {\n        props: {\n            users: data\n        }\n    };\n};\n// use api path\nfunction TestApiBackend({ users  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List ninjas\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: user.firstName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                }, user.id, false, {\n                    fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acynt\\\\Desktop\\\\hurea\\\\hurea-ui\\\\pages\\\\testApiBackend.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0QXBpQmFja2VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFEQSxlQUFlO0FBQ1IsTUFBTUEsY0FBYyxHQUFHLFVBQVc7SUFFckMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQztJQUM3RCxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFFN0IsT0FBTztRQUVIQyxLQUFLLEVBQUU7WUFBQ0MsS0FBSyxFQUFHSCxJQUFJO1NBQUM7S0FDeEI7Q0FDSjtBQUVELGVBQWU7QUFDQSxTQUFTSSxjQUFjLENBQUUsRUFBQ0QsS0FBSyxHQUFDLEVBQUc7SUFDOUMscUJBRUksOERBQUNFLEtBQUc7OzBCQUVKLDhEQUFDQyxJQUFFOzBCQUFDLGFBQVc7Ozs7O29CQUFLO1lBRW5CSCxLQUFLLENBQUNJLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBSSxpQkFFUCw4REFBQ0gsS0FBRzs4QkFDSiw0RUFBQ0ksR0FBQztrQ0FDRSw0RUFBQ0MsSUFBRTtzQ0FBRUYsSUFBSSxDQUFDRyxTQUFTOzs7OztnQ0FBTTs7Ozs7NEJBQ3pCO21CQUhNSCxJQUFJLENBQUNJLEVBQUU7Ozs7d0JBS1g7WUFDYixDQUFDOzs7Ozs7WUFFSSxDQUVUO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odXJlYS11aS8uL3BhZ2VzL3Rlc3RBcGlCYWNrZW5kLmpzP2JiZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHNldCBhcGkgcGF0aFxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYygpID0+IHtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS91c2VycycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgcHJvcHM6IHt1c2VycyA6IGRhdGF9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHVzZSBhcGkgcGF0aFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0QXBpQmFja2VuZCAoe3VzZXJzfSkgIHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxoMT5MaXN0IG5pbmphczwvaDE+XHJcblxyXG4gICAgICAgIHt1c2Vycy5tYXAodXNlciA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9ID5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57dXNlci5maXJzdE5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIiwidXNlcnMiLCJUZXN0QXBpQmFja2VuZCIsImRpdiIsImgxIiwibWFwIiwidXNlciIsImEiLCJoMyIsImZpcnN0TmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/testApiBackend.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/testApiBackend.js"));
module.exports = __webpack_exports__;

})();