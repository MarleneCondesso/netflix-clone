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
exports.id = "pages/watch/[movieId]";
exports.ids = ["pages/watch/[movieId]"];
exports.modules = {

/***/ "./hooks/useMovie.ts":
/*!***************************!*\
  !*** ./hooks/useMovie.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/fetcher */ \"./lib/fetcher.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__]);\n([swr__WEBPACK_IMPORTED_MODULE_0__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useMovie = (id)=>{\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id ? `/api/movies/${id}` : null, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        revalidateIfStale: false,\n        revalidateOnFocus: false,\n        revalidateOnReconnect: false\n    });\n    return {\n        data,\n        error,\n        isLoading\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMovie);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VNb3ZpZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDVztBQUVwQyxNQUFNRSxXQUFXLENBQUNDLEtBQWdCO0lBQzlCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFVBQVMsRUFBRSxHQUFHTiwrQ0FBTUEsQ0FBQ0csS0FBSyxDQUFDLFlBQVksRUFBRUEsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFRixvREFBT0EsRUFBRTtRQUNoRk0sbUJBQW1CLEtBQUs7UUFDeEJDLG1CQUFtQixLQUFLO1FBQ3hCQyx1QkFBdUIsS0FBSztJQUNoQztJQUVBLE9BQU87UUFDSEw7UUFDQUM7UUFDQUM7SUFDSjtBQUNKO0FBRUEsaUVBQWVKLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRmbGl4LWNsb25lLy4vaG9va3MvdXNlTW92aWUudHM/NzFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0AvbGliL2ZldGNoZXInO1xyXG5cclxuY29uc3QgdXNlTW92aWUgPSAoaWQ/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU1dSKGlkID8gYC9hcGkvbW92aWVzLyR7aWR9YCA6IG51bGwsIGZldGNoZXIsIHtcclxuICAgICAgICByZXZhbGlkYXRlSWZTdGFsZTogZmFsc2UsXHJcbiAgICAgICAgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlLFxyXG4gICAgICAgIHJldmFsaWRhdGVPblJlY29ubmVjdDogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGEsIFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIGlzTG9hZGluZ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VNb3ZpZTsiXSwibmFtZXMiOlsidXNlU1dSIiwiZmV0Y2hlciIsInVzZU1vdmllIiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJyZXZhbGlkYXRlSWZTdGFsZSIsInJldmFsaWRhdGVPbkZvY3VzIiwicmV2YWxpZGF0ZU9uUmVjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useMovie.ts\n");

/***/ }),

/***/ "./lib/fetcher.ts":
/*!************************!*\
  !*** ./lib/fetcher.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((res)=>res.data);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmV0Y2hlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVLENBQUNDLE1BQWdCRixpREFBUyxDQUFDRSxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBT0EsSUFBSUMsSUFBSTtBQUVyRSxpRUFBZUwsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9saWIvZmV0Y2hlci50cz9mYjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpPT4gcmVzLmRhdGEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjsiXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/fetcher.ts\n");

/***/ }),

/***/ "./pages/watch/[movieId].tsx":
/*!***********************************!*\
  !*** ./pages/watch/[movieId].tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useMovie */ \"./hooks/useMovie.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Watch = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { movieId  } = router.query;\n    const { data  } = (0,_hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"   h-screen   w-screen   bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"   fixed   w-full   p-4   z-10   flex   flex-row   items-center   gap-8   bg-black   bg-opacity-70\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineArrowLeft, {\n                        className: \"text-white\",\n                        size: 40\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white text-1xl md:text-3xl font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-light\",\n                                children: \"Watching:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            data?.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                autoPlay: true,\n                controls: true,\n                className: \"h-full w-full\",\n                src: data?.videoUrl\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\watch\\\\[movieId].tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Watch);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bbW92aWVJZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRWM7QUFDQTtBQUNZO0FBQ3BELE1BQU1JLFFBQVEsSUFBTTtJQUNoQixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTSxFQUFFSSxRQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUVoQyxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHUCwyREFBUUEsQ0FBQ0s7SUFFMUIscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVU7OzBCQUlYLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBWVgsOERBQUNQLDhEQUFrQkE7d0JBQUNPLFdBQVU7d0JBQVlFLE1BQU07Ozs7OztrQ0FDaEQsOERBQUNDO3dCQUFFSCxXQUFVOzswQ0FDVCw4REFBQ0k7Z0NBQUtKLFdBQVU7MENBQWE7Ozs7Ozs0QkFDNUJGLE1BQU1POzs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDQztnQkFDREMsUUFBUTtnQkFDUkMsUUFBUTtnQkFDUlIsV0FBVTtnQkFDVlMsS0FBS1gsTUFBTVk7Ozs7Ozs7Ozs7OztBQUl2QjtBQUVBLGlFQUFlaEIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9wYWdlcy93YXRjaC9bbW92aWVJZF0udHN4P2ZlNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB1c2VNb3ZpZSBmcm9tICdAL2hvb2tzL3VzZU1vdmllJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd0xlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmNvbnN0IFdhdGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgbW92aWVJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlTW92aWUobW92aWVJZCBhcyBzdHJpbmcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J1xyXG4gICAgICAgIGgtc2NyZWVuXHJcbiAgICAgICAgdy1zY3JlZW5cclxuICAgICAgICBiZy1ibGFjayc+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdcclxuICAgICAgICAgICAgICAgIGZpeGVkXHJcbiAgICAgICAgICAgICAgICB3LWZ1bGxcclxuICAgICAgICAgICAgICAgIHAtNFxyXG4gICAgICAgICAgICAgICAgei0xMFxyXG4gICAgICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICAgICAgZmxleC1yb3dcclxuICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgICAgICAgICAgZ2FwLThcclxuICAgICAgICAgICAgICAgIGJnLWJsYWNrXHJcbiAgICAgICAgICAgICAgICBiZy1vcGFjaXR5LTcwJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQXJyb3dMZWZ0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSdzaXplPXs0MH0vPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtMXhsIG1kOnRleHQtM3hsIGZvbnQtYm9sZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWxpZ2h0Jz5XYXRjaGluZzo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGE/LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPHZpZGVvIFxyXG4gICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2gtZnVsbCB3LWZ1bGwnXHJcbiAgICAgICAgICAgIHNyYz17ZGF0YT8udmlkZW9Vcmx9PjwvdmlkZW8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhdGNoO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNb3ZpZSIsInVzZVJvdXRlciIsIkFpT3V0bGluZUFycm93TGVmdCIsIldhdGNoIiwicm91dGVyIiwibW92aWVJZCIsInF1ZXJ5IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsInNpemUiLCJwIiwic3BhbiIsInRpdGxlIiwidmlkZW8iLCJhdXRvUGxheSIsImNvbnRyb2xzIiwic3JjIiwidmlkZW9VcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/watch/[movieId].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/ai");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/watch/[movieId].tsx"));
module.exports = __webpack_exports__;

})();