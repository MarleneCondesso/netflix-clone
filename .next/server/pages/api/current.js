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
exports.id = "pages/api/current";
exports.ids = ["pages/api/current"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLFNBQVNDLE9BQU9DLFFBQVEsSUFBSSxJQUFJSCx3REFBWUE7QUFDbEQsSUFBR0ksS0FBd0IsRUFBY0YsRUFBeUJEO0FBRWxFLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL2xpYi9wcmlzbWFkYi50cz8wZTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbC5wcmlzbWFkYiB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYWRiID0gY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWwiLCJwcmlzbWFkYiIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./lib/serverAuth.ts":
/*!***************************!*\
  !*** ./lib/serverAuth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n\n\nconst serverAuth = async (req)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session?.user?.email) {\n        throw new Error(\"No signed in\");\n    }\n    const currentUser = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyQXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzZDO0FBRVA7QUFFdEMsTUFBTUUsYUFBYSxPQUFPQyxNQUF3QjtJQUM5QyxNQUFNQyxVQUFVLE1BQU1KLDJEQUFVQSxDQUFDO1FBQUVHO0lBQUk7SUFFdkMsSUFBRyxDQUFDQyxTQUFTQyxNQUFNQyxPQUFNO1FBQ3JCLE1BQU0sSUFBSUMsTUFBTSxnQkFBZ0I7SUFDcEMsQ0FBQztJQUVELE1BQU1DLGNBQWMsTUFBTVAscUVBQXdCLENBQUM7UUFDL0NTLE9BQU87WUFDSEosT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1FBQzdCO0lBQ0o7SUFFQSxJQUFHLENBQUNFLGFBQVk7UUFDWixNQUFNLElBQUlELE1BQU0saUJBQWlCO0lBQ3JDLENBQUM7SUFFRCxPQUFPO1FBQUVDO0lBQVk7QUFDekI7QUFFQSxpRUFBZU4sVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9saWIvc2VydmVyQXV0aC50cz9jMGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0IH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcblxyXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWIvcHJpc21hZGInO1xyXG5cclxuY29uc3Qgc2VydmVyQXV0aCA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0KSA9PiB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgICBpZighc2Vzc2lvbj8udXNlcj8uZW1haWwpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2lnbmVkIGluJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIWN1cnJlbnRVc2VyKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBzaWduZWQgaW4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBjdXJyZW50VXNlciB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmVyQXV0aDsiXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInByaXNtYWRiIiwic2VydmVyQXV0aCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJFcnJvciIsImN1cnJlbnRVc2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/current.ts":
/*!******************************!*\
  !*** ./pages/api/current.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_serverAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/serverAuth */ \"(api)/./lib/serverAuth.ts\");\n\nasync function handler(req, res) {\n    if (req.method != \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        const { currentUser  } = await (0,_lib_serverAuth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\n        return res.status(200).json(currentUser);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3VycmVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUMwQztBQUUzQixlQUFlQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFDO0lBRXhFLElBQUdELElBQUlFLE1BQU0sSUFBSSxPQUFNO1FBQ25CLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzlCLENBQUM7SUFFRCxJQUFHO1FBQ0MsTUFBTSxFQUFFQyxZQUFXLEVBQUMsR0FBRyxNQUFNUCwyREFBVUEsQ0FBQ0U7UUFFeEMsT0FBT0MsSUFBSUUsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQ0Q7SUFFaEMsRUFBQyxPQUFNRSxPQUFNO1FBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPTixJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM5QjtBQUNSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRmbGl4LWNsb25lLy4vcGFnZXMvYXBpL2N1cnJlbnQudHM/ZDAxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHNlcnZlckF1dGggZnJvbSAnQC9saWIvc2VydmVyQXV0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKXtcclxuXHJcbiAgICAgICAgaWYocmVxLm1ldGhvZCAhPSAnR0VUJyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudFVzZXJ9ID0gYXdhaXQgc2VydmVyQXV0aChyZXEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xyXG4gICAgICAgIH1cclxufSJdLCJuYW1lcyI6WyJzZXJ2ZXJBdXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImN1cnJlbnRVc2VyIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/current.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/current.ts"));
module.exports = __webpack_exports__;

})();