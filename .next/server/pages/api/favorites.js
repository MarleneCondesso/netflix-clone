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
exports.id = "pages/api/favorites";
exports.ids = ["pages/api/favorites"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].ts\");\n\n\n\nconst serverAuth = async (req, res)=>{\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.email) {\n        throw new Error(\"No signed in\");\n    }\n    const currentUser = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyQXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVzQztBQUNPO0FBRWdCO0FBRTdELE1BQU1HLGFBQWEsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ3BFLE1BQU1DLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDRyxLQUFLQyxLQUFLSCxrRUFBV0E7SUFFNUQsSUFBRyxDQUFDSSxTQUFTQyxNQUFNQyxPQUFNO1FBQ3JCLE1BQU0sSUFBSUMsTUFBTSxnQkFBZ0I7SUFDcEMsQ0FBQztJQUVELE1BQU1DLGNBQWMsTUFBTVYscUVBQXdCLENBQUM7UUFDL0NZLE9BQU87WUFDSEosT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1FBQzdCO0lBQ0o7SUFFQSxJQUFHLENBQUNFLGFBQVk7UUFDWixNQUFNLElBQUlELE1BQU0saUJBQWlCO0lBQ3JDLENBQUM7SUFFRCxPQUFPO1FBQUVDO0lBQVk7QUFDekI7QUFFQSxpRUFBZVAsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9saWIvc2VydmVyQXV0aC50cz9jMGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuaW1wb3J0IHByaXNtYWRiIGZyb20gJ0AvbGliL3ByaXNtYWRiJztcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xyXG5cclxuY29uc3Qgc2VydmVyQXV0aCA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcclxuXHJcbiAgICBpZighc2Vzc2lvbj8udXNlcj8uZW1haWwpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2lnbmVkIGluJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIWN1cnJlbnRVc2VyKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBzaWduZWQgaW4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBjdXJyZW50VXNlciB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmVyQXV0aDsiXSwibmFtZXMiOlsicHJpc21hZGIiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJzZXJ2ZXJBdXRoIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsIkVycm9yIiwiY3VycmVudFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.GITHUB_ID || \"\",\n            clientSecret: process.env.GITHUB_SECRET || \"\"\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email and password required\");\n                }\n                const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.hashedPassword) {\n                    throw new Error(\"Email does not exist\");\n                }\n                const isCorrectPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Incorrer password\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth\"\n    },\n    debug: \"development\" == \"development\",\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_6__.PrismaAdapter)(_lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_JWT_SECRET\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNaO0FBQ29CO0FBQ3pCO0FBQ3VCO0FBQ0E7QUFDRTtBQUVuRCxNQUFNTyxjQUEyQjtJQUNwQ0MsV0FBVztRQUNQSixpRUFBY0EsQ0FBQztZQUNYSyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsSUFBSTtZQUNuQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhLElBQUk7UUFDL0M7UUFDQVQsaUVBQWNBLENBQUM7WUFDWEksVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0IsSUFBSTtZQUMxQ0YsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxvQkFBb0IsSUFBSTtRQUN0RDtRQUNBZCxzRUFBV0EsQ0FBQztZQUNSZSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtnQkFDVEMsT0FBTztvQkFDSEMsT0FBTztvQkFDUEMsTUFBTTtnQkFDVjtnQkFDQUMsVUFBVTtvQkFDTkYsT0FBTztvQkFDUEMsTUFBTTtnQkFDVjtZQUNKO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVyxFQUFDO2dCQUN4QixJQUFHLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBUztvQkFDN0MsTUFBTSxJQUFJRSxNQUFPLCtCQUErQjtnQkFDcEQsQ0FBQztnQkFFRCxNQUFNQyxPQUFPLE1BQU16QixxRUFBd0IsQ0FBQztvQkFDeEMyQixPQUFPO3dCQUNIUixPQUFPRCxZQUFZQyxLQUFLO29CQUM1QjtnQkFDSjtnQkFFQSxJQUFHLENBQUNNLFFBQVEsQ0FBQ0EsS0FBS0csY0FBYyxFQUFDO29CQUM3QixNQUFNLElBQUlKLE1BQU0sd0JBQXdCO2dCQUM1QyxDQUFDO2dCQUVELE1BQU1LLG9CQUFvQixNQUFNM0IsK0NBQU9BLENBQ25DZ0IsWUFBWUksUUFBUSxFQUNwQkcsS0FBS0csY0FBYztnQkFHdkIsSUFBRyxDQUFDQyxtQkFBa0I7b0JBQ2xCLE1BQU0sSUFBSUwsTUFBTSxxQkFBcUI7Z0JBQ3pDLENBQUM7Z0JBRUQsT0FBT0M7WUFDWDtRQUVKO0tBQ0g7SUFDREssT0FBTTtRQUNGQyxRQUFRO0lBQ1o7SUFDQUMsT0FBT3ZCLGlCQUF3QjtJQUMvQndCLFNBQVM1Qix3RUFBYUEsQ0FBQ0wscURBQVFBO0lBQy9Ca0MsU0FBUTtRQUNKQyxVQUFTO0lBQ2I7SUFDQUMsS0FBSztRQUNEQyxRQUFRNUIsUUFBUUMsR0FBRyxDQUFDNEIsbUJBQW1CO0lBQzNDO0lBQ0FELFFBQVE1QixRQUFRQyxHQUFHLENBQUM2QixlQUFlO0FBQ3ZDLEVBQUU7QUFFRixpRUFBZXhDLGdEQUFRQSxDQUFDTyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgQXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWIvcHJpc21hZGInO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnO1xyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgR2l0aHViUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lEIHx8ICcnLFxyXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQgfHwgJycsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCAnJyxcclxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCB8fCAnJyxcclxuICAgICAgICB9KSxcclxuICAgICAgICBDcmVkZW50aWFscyh7XHJcbiAgICAgICAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0VtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdFbWFpbCBhbmQgcGFzc3dvcmQgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighdXNlciB8fCAhdXNlci5oYXNoZWRQYXNzd29yZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBkb2VzIG5vdCBleGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgY29tcGFyZShcclxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5oYXNoZWRQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighaXNDb3JyZWN0UGFzc3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZXIgcGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIHBhZ2VzOntcclxuICAgICAgICBzaWduSW46ICcvYXV0aCcsXHJcbiAgICB9LFxyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcsXHJcbiAgICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYWRiKSxcclxuICAgIHNlc3Npb246e1xyXG4gICAgICAgIHN0cmF0ZWd5Oidqd3QnLFxyXG4gICAgfSxcclxuICAgIGp3dDoge1xyXG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfSldUX1NFQ1JFVCxcclxuICAgIH0sXHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJpc21hZGIiLCJDcmVkZW50aWFscyIsImNvbXBhcmUiLCJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiaXNDb3JyZWN0UGFzc3dvcmQiLCJwYWdlcyIsInNpZ25JbiIsImRlYnVnIiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsImp3dCIsInNlY3JldCIsIk5FWFRBVVRIX0pXVF9TRUNSRVQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./pages/api/favorites.ts":
/*!********************************!*\
  !*** ./pages/api/favorites.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n/* harmony import */ var _lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/serverAuth */ \"(api)/./lib/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method != \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        const { currentUser  } = await (0,_lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        const favoriteMovies = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.findMany({\n            where: {\n                id: {\n                    in: currentUser?.favoriteIds\n                }\n            }\n        });\n        return res.status(200).json(favoriteMovies);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmF2b3JpdGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVzQztBQUNJO0FBRTNCLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUM7SUFDNUUsSUFBR0QsSUFBSUUsTUFBTSxJQUFJLE9BQU07UUFDbkIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDOUIsQ0FBQztJQUVELElBQUk7UUFFQSxNQUFNLEVBQUVDLFlBQVcsRUFBQyxHQUFHLE1BQU1QLDJEQUFVQSxDQUFDRSxLQUFLQztRQUU3QyxNQUFNSyxpQkFBaUIsTUFBTVQsb0VBQXVCLENBQUM7WUFDakRZLE9BQU87Z0JBQ0hDLElBQUk7b0JBQ0FDLElBQUlOLGFBQWFPO2dCQUNyQjtZQUNKO1FBQ0o7UUFFQSxPQUFPWCxJQUFJRSxNQUFNLENBQUMsS0FBS1UsSUFBSSxDQUFDUDtJQUVoQyxFQUFFLE9BQU9RLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9iLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzlCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9wYWdlcy9hcGkvZmF2b3JpdGVzLnRzPzE5YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWIvcHJpc21hZGInO1xyXG5pbXBvcnQgc2VydmVyQXV0aCBmcm9tICdAL2xpYi9zZXJ2ZXJBdXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2Upe1xyXG4gICAgaWYocmVxLm1ldGhvZCAhPSAnR0VUJyl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkgeyBcclxuXHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VXNlcn0gPSBhd2FpdCBzZXJ2ZXJBdXRoKHJlcSwgcmVzKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVNb3ZpZXMgPSBhd2FpdCBwcmlzbWFkYi5tb3ZpZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogeyBcclxuICAgICAgICAgICAgICAgICAgICBpbjogY3VycmVudFVzZXI/LmZhdm9yaXRlSWRzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihmYXZvcml0ZU1vdmllcyk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5lbmQoKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJwcmlzbWFkYiIsInNlcnZlckF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwiY3VycmVudFVzZXIiLCJmYXZvcml0ZU1vdmllcyIsIm1vdmllIiwiZmluZE1hbnkiLCJ3aGVyZSIsImlkIiwiaW4iLCJmYXZvcml0ZUlkcyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/favorites.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/favorites.ts"));
module.exports = __webpack_exports__;

})();