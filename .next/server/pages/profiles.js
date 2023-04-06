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

/***/ "./pages/profiles.tsx":
/*!****************************!*\
  !*** ./pages/profiles.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_userCurrentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/userCurrentUser */ \"./hooks/userCurrentUser.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_userCurrentUser__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_userCurrentUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permament: false\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nconst Profiles = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: user  } = (0,_hooks_userCurrentUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"   flex   items-center   h-full   justify-center   \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"   flex   flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"   text-3xl    md:text-6xl    text-white    text-center\",\n                    children: \"Who is whatching?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"   flex   items-center   justify-center   gap-8   mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>router.push(\"/\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"   group    flex-row   w-44   mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"   w-44   h-44   rounded-md   flex   items-center   justify-center   border-2   border-transparent   group-hover:cursor-pointer   group-hover:border-white   overflow-hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/images/default-blue.png\",\n                                        aut: \"profile\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"   mt-4   text-gray-400   text-2xl   text-center   group-hover:text-white   \",\n                                    children: user?.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\profiles.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profiles);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUVSO0FBQ0w7QUFFakMsZUFBZUcsbUJBQW1CQyxPQUF3QixFQUFDO0lBQzlELE1BQU1DLFVBQVUsTUFBTUosMkRBQVVBLENBQUNHO0lBRWpDLElBQUcsQ0FBQ0MsU0FBUTtRQUNSLE9BQU87WUFDSEMsVUFBVTtnQkFDTkMsYUFBYTtnQkFDYkMsV0FBVyxLQUFLO1lBQ3BCO1FBQ0o7SUFDSixDQUFDO0lBQ0QsT0FBTztRQUNIQyxPQUFPLENBQUM7SUFDWjtBQUNKLENBQUM7QUFFRCxNQUFNQyxXQUFXLElBQU07SUFFbkIsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU0sRUFBRVUsTUFBTUMsS0FBSSxFQUFDLEdBQUdiLGtFQUFjQTtJQUVwQyxxQkFDSSw4REFBQ2M7UUFBSUMsV0FBVTtrQkFNWCw0RUFBQ0Q7WUFDREMsV0FBVTs7OEJBR04sOERBQUNDO29CQUFHRCxXQUFVOzhCQUlEOzs7Ozs7OEJBR2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQU1YLDRFQUFDRDt3QkFBSUcsU0FBUyxJQUFLTixPQUFPTyxJQUFJLENBQUM7a0NBRTNCLDRFQUFDSjs0QkFBSUMsV0FBVTs7OENBS1gsOERBQUNEO29DQUFJQyxXQUFVOzhDQVlYLDRFQUFDSTt3Q0FBSUMsS0FBSTt3Q0FBMkJDLEtBQUk7Ozs7Ozs7Ozs7OzhDQUc1Qyw4REFBQ1A7b0NBQUlDLFdBQVU7OENBT1ZGLE1BQU1TOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdkM7QUFFQSxpRUFBZVosUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldGZsaXgtY2xvbmUvLi9wYWdlcy9wcm9maWxlcy50c3g/OTBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlQ3VycmVudFVzZXIgZnJvbSBcIkAvaG9va3MvdXNlckN1cnJlbnRVc2VyXCI7XHJcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQpe1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XHJcblxyXG4gICAgaWYoIXNlc3Npb24pe1xyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvYXV0aCcsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge31cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUHJvZmlsZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiB1c2VyfSA9IHVzZUN1cnJlbnRVc2VyKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIGZsZXhcclxuICAgICAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgICAgIGgtZnVsbFxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgICAgdGV4dC0zeGwgXHJcbiAgICAgICAgICAgICAgICBtZDp0ZXh0LTZ4bCBcclxuICAgICAgICAgICAgICAgIHRleHQtd2hpdGUgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlclwiPiBcclxuICAgICAgICAgICAgICAgICAgICBXaG8gaXMgd2hhdGNoaW5nPyBcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgICAgICAgICAgZ2FwLThcclxuICAgICAgICAgICAgICAgIG10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKCcvJyl9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHctNDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgtNDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtbWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci0yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwLWhvdmVyOmN1cnNvci1wb2ludGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cC1ob3Zlcjpib3JkZXItd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL2RlZmF1bHQtYmx1ZS5wbmcnIGF1dD0ncHJvZmlsZSc+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQtNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1ncmF5LTQwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC0yeGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZXM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDdXJyZW50VXNlciIsImdldFNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW1lbnQiLCJwcm9wcyIsIlByb2ZpbGVzIiwicm91dGVyIiwiZGF0YSIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJwdXNoIiwiaW1nIiwic3JjIiwiYXV0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profiles.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/profiles.tsx"));
module.exports = __webpack_exports__;

})();