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
exports.id = "pages/api/random";
exports.ids = ["pages/api/random"];
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

/***/ "(api)/./pages/api/random.ts":
/*!*****************************!*\
  !*** ./pages/api/random.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n/* harmony import */ var _lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/serverAuth */ \"(api)/./lib/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method != \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        await (0,_lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req);\n        const movieCount = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.count();\n        const randomIndex = Math.floor(Math.random() * movieCount);\n        const randomMovies = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.findMany({\n            take: 1,\n            skip: randomIndex\n        });\n        return res.status(200).json(randomMovies[0]);\n    } catch (error) {\n        console.log(error);\n        res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmFuZG9tLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVzQztBQUNJO0FBRTNCLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFFN0UsSUFBR0QsSUFBSUUsTUFBTSxJQUFJLE9BQU07UUFDbkIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDOUIsQ0FBQztJQUVELElBQUk7UUFDQSxNQUFNTiwyREFBVUEsQ0FBQ0U7UUFFakIsTUFBTUssYUFBYSxNQUFNUixpRUFBb0I7UUFDN0MsTUFBTVcsY0FBY0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtOO1FBRS9DLE1BQU1PLGVBQWUsTUFBTWYsb0VBQXVCLENBQUM7WUFDL0NpQixNQUFLO1lBQ0xDLE1BQUtQO1FBQ1Q7UUFFQSxPQUFPUCxJQUFJRSxNQUFNLENBQUMsS0FBS2EsSUFBSSxDQUFDSixZQUFZLENBQUMsRUFBRTtJQUMvQyxFQUFFLE9BQU9LLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaaEIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDdkI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL3BhZ2VzL2FwaS9yYW5kb20udHM/MDg5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVzcG9uc2UsIE5leHRBcGlSZXF1ZXN0IH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmltcG9ydCBwcmlzbWFkYiBmcm9tICdAL2xpYi9wcmlzbWFkYic7XHJcbmltcG9ydCBzZXJ2ZXJBdXRoIGZyb20gJ0AvbGliL3NlcnZlckF1dGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG5cclxuICAgIGlmKHJlcS5tZXRob2QgIT0gJ0dFVCcpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBzZXJ2ZXJBdXRoKHJlcSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdmllQ291bnQgPSBhd2FpdCBwcmlzbWFkYi5tb3ZpZS5jb3VudCgpO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92aWVDb3VudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbU1vdmllcyA9IGF3YWl0IHByaXNtYWRiLm1vdmllLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgdGFrZToxLFxyXG4gICAgICAgICAgICBza2lwOnJhbmRvbUluZGV4XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyYW5kb21Nb3ZpZXNbMF0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYWRiIiwic2VydmVyQXV0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJtb3ZpZUNvdW50IiwibW92aWUiLCJjb3VudCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tTW92aWVzIiwiZmluZE1hbnkiLCJ0YWtlIiwic2tpcCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/random.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/random.ts"));
module.exports = __webpack_exports__;

})();