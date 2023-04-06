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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./hooks/userCurrentUser.ts":
/*!**********************************!*\
  !*** ./hooks/userCurrentUser.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/fetcher */ \"./lib/fetcher.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__]);\n([swr__WEBPACK_IMPORTED_MODULE_0__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useCurrentUser = ()=>{\n    const { data , error , isLoading , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/current\", _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    return {\n        data,\n        error,\n        isLoading,\n        mutate\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrentUser);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VyQ3VycmVudFVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRVc7QUFFcEMsTUFBTUUsaUJBQWlCLElBQU07SUFDekIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFFQyxPQUFNLEVBQUMsR0FBR04sK0NBQU1BLENBQUMsZ0JBQWdCQyxvREFBT0E7SUFFeEUsT0FBTztRQUNIRTtRQUNBQztRQUNBQztRQUNBQztJQUNKO0FBQ0o7QUFFQSxpRUFBZUosY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9ob29rcy91c2VyQ3VycmVudFVzZXIudHM/NTk1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAL2xpYi9mZXRjaGVyJztcclxuXHJcbmNvbnN0IHVzZUN1cnJlbnRVc2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nLCBtdXRhdGV9ID0gdXNlU1dSKCcvYXBpL2N1cnJlbnQnLCBmZXRjaGVyKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGEsIFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBtdXRhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ3VycmVudFVzZXI7Il0sIm5hbWVzIjpbInVzZVNXUiIsImZldGNoZXIiLCJ1c2VDdXJyZW50VXNlciIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsIm11dGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/userCurrentUser.ts\n");

/***/ }),

/***/ "./lib/fetcher.ts":
/*!************************!*\
  !*** ./lib/fetcher.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((res)=>res.data);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmV0Y2hlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVLENBQUNDLE1BQWdCRixpREFBUyxDQUFDRSxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBT0EsSUFBSUMsSUFBSTtBQUVyRSxpRUFBZUwsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9saWIvZmV0Y2hlci50cz9mYjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpPT4gcmVzLmRhdGEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjsiXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/fetcher.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_userCurrentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/userCurrentUser */ \"./hooks/userCurrentUser.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_userCurrentUser__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_userCurrentUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nfunction Home() {\n    const { data: user  } = (0,_hooks_userCurrentUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2x1 text-green-500\",\n                children: \"Netflix Clone\"\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-white\",\n                children: [\n                    \"Logged in as: \",\n                    user?.email\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                className: \" h-10 w-full bg-white \",\n                children: \"Logout!\"\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFFQztBQUUvQyxlQUFlRyxtQkFBbUJDLE9BQXdCLEVBQUM7SUFDaEUsTUFBTUMsVUFBVSxNQUFNSiwyREFBVUEsQ0FBQ0c7SUFFakMsSUFBRyxDQUFDQyxTQUFRO1FBQ1YsT0FBTztZQUNMQyxVQUFVO2dCQUNSQyxhQUFhO2dCQUNiQyxXQUFXLEtBQUs7WUFDbEI7UUFDRjtJQUNGLENBQUM7SUFDRCxPQUFPO1FBQ0xDLE9BQU8sQ0FBQztJQUNWO0FBQ0YsQ0FBQztBQUdjLFNBQVNDLE9BQU87SUFFN0IsTUFBTSxFQUFFQyxNQUFNQyxLQUFJLEVBQUUsR0FBR1osa0VBQWNBO0lBS3JDLHFCQUNFOzswQkFDRSw4REFBQ2E7Z0JBQUdDLFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQWE7b0JBQWVGLE1BQU1JOzs7Ozs7OzBCQUMvQyw4REFBQ0M7Z0JBQ0RDLFNBQVMsSUFBS2hCLHdEQUFPQTtnQkFDckJZLFdBQVU7MEJBSVI7Ozs7Ozs7O0FBS1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlQ3VycmVudFVzZXIgZnJvbSAnQC9ob29rcy91c2VyQ3VycmVudFVzZXInO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQpe1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBpZighc2Vzc2lvbil7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnL2F1dGgnLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCB7IGRhdGE6IHVzZXIgfSA9IHVzZUN1cnJlbnRVc2VyKCk7XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMngxIHRleHQtZ3JlZW4tNTAwXCI+TmV0ZmxpeCBDbG9uZTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPkxvZ2dlZCBpbiBhczoge3VzZXI/LmVtYWlsfTwvcD5cbiAgICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9eygpPT4gc2lnbk91dCgpfVxuICAgICAgY2xhc3NOYW1lPSdcbiAgICAgICAgaC0xMFxuICAgICAgICB3LWZ1bGxcbiAgICAgICAgYmctd2hpdGVcbiAgICAgICc+XG4gICAgICAgIExvZ291dCFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlQ3VycmVudFVzZXIiLCJnZXRTZXNzaW9uIiwic2lnbk91dCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzZXNzaW9uIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIiwiSG9tZSIsImRhdGEiLCJ1c2VyIiwiaDEiLCJjbGFzc05hbWUiLCJwIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();