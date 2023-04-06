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
exports.id = "pages/profiles";
exports.ids = ["pages/profiles"];
exports.modules = {

/***/ "./pages/profiles.tsx":
/*!****************************!*\
  !*** ./pages/profiles.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permament: false\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nconst Profiles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-white text-3xl\",\n            children: \"Profiles\"\n        }, void 0, false, {\n            fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profiles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QztBQUV0QyxlQUFlQyxtQkFBbUJDLE9BQXdCLEVBQUM7SUFDOUQsTUFBTUMsVUFBVSxNQUFNSCwyREFBVUEsQ0FBQ0U7SUFFakMsSUFBRyxDQUFDQyxTQUFRO1FBQ1IsT0FBTztZQUNIQyxVQUFVO2dCQUNOQyxhQUFhO2dCQUNiQyxXQUFXLEtBQUs7WUFDcEI7UUFDSjtJQUNKLENBQUM7SUFDRCxPQUFPO1FBQ0hDLE9BQU8sQ0FBQztJQUNaO0FBQ0osQ0FBQztBQUVELE1BQU1DLFdBQVcsSUFBTTtJQUNuQixxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNDO1lBQUVDLFdBQVU7c0JBQXNCOzs7Ozs7Ozs7OztBQUcvQztBQUVBLGlFQUFlSCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL3BhZ2VzL3Byb2ZpbGVzLnRzeD85MGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IE5leHRQYWdlQ29udGV4dCl7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcclxuXHJcbiAgICBpZighc2Vzc2lvbil7XHJcbiAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9hdXRoJyxcclxuICAgICAgICAgICAgICAgIHBlcm1hbWVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7fVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBQcm9maWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsXCI+UHJvZmlsZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZXM7XHJcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFtZW50IiwicHJvcHMiLCJQcm9maWxlcyIsImRpdiIsInAiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profiles.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/profiles.tsx"));
module.exports = __webpack_exports__;

})();