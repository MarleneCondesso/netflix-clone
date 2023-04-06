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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

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

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLFNBQVNDLE9BQU9DLFFBQVEsSUFBSSxJQUFJSCx3REFBWUE7QUFDbEQsSUFBR0ksS0FBd0IsRUFBY0YsRUFBeUJEO0FBRWxFLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0ZmxpeC1jbG9uZS8uL2xpYi9wcmlzbWFkYi50cz8wZTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IGNsaWVudCA9IGdsb2JhbC5wcmlzbWFkYiB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYWRiID0gY2xpZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWwiLCJwcmlzbWFkYiIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method != \"POST\") {\n        return res.status(405).end();\n    }\n    try {\n        const { email , name , password  } = req.body;\n        const existingUser = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existingUser) {\n            return res.status(422).json({\n                error: \"Email taken\"\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 12);\n        const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n            data: {\n                email,\n                name,\n                hashedPassword,\n                image: \"\",\n                emailVerified: new Date()\n            }\n        });\n        return res.status(200).json(user);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUVVO0FBRXZCLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUM7SUFDNUUsSUFBR0QsSUFBSUUsTUFBTSxJQUFJLFFBQU87UUFDcEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDOUIsQ0FBQztJQUVELElBQUc7UUFDQyxNQUFNLEVBQUNDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUMsR0FBR1AsSUFBSVEsSUFBSTtRQUN4QyxNQUFNQyxlQUFlLE1BQU1YLHFFQUF3QixDQUFDO1lBQ2hEYyxPQUFPO2dCQUNIUDtZQUNKO1FBQ0o7UUFFQSxJQUFHSSxjQUFhO1lBQ1osT0FBT1IsSUFBSUUsTUFBTSxDQUFDLEtBQUtVLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFhO1FBQ3RELENBQUM7UUFFRCxNQUFNQyxpQkFBaUIsTUFBTWxCLGtEQUFXLENBQUNVLFVBQVU7UUFFbkQsTUFBTUcsT0FBTyxNQUFNWixpRUFBb0IsQ0FBQztZQUNwQ29CLE1BQU07Z0JBQ0ZiO2dCQUNBQztnQkFDQVM7Z0JBQ0FJLE9BQU87Z0JBQ1BDLGVBQWUsSUFBSUM7WUFDdkI7UUFDSjtRQUVBLE9BQU9wQixJQUFJRSxNQUFNLENBQUMsS0FBS1UsSUFBSSxDQUFDSDtJQUNoQyxFQUFDLE9BQU1JLE9BQU07UUFDVFEsUUFBUUMsR0FBRyxDQUFDVDtRQUNaLE9BQU9iLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzlCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHM/N2RhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmltcG9ydCB7IE5leHRBcGlSZXNwb25zZSwgTmV4dEFwaVJlcXVlc3QgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHByaXNtYWRiIGZyb20gJ0AvbGliL3ByaXNtYWRiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2Upe1xyXG4gICAgaWYocmVxLm1ldGhvZCAhPSAnUE9TVCcpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHtlbWFpbCwgbmFtZSwgcGFzc3dvcmR9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgcHJpc21hZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGV4aXN0aW5nVXNlcil7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7IGVycm9yOiAnRW1haWwgdGFrZW4nfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsLCBcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBoYXNoZWRQYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImJjcnlwdCIsInByaXNtYWRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImVtYWlsIiwibmFtZSIsInBhc3N3b3JkIiwiYm9keSIsImV4aXN0aW5nVXNlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJqc29uIiwiZXJyb3IiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJjcmVhdGUiLCJkYXRhIiwiaW1hZ2UiLCJlbWFpbFZlcmlmaWVkIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();