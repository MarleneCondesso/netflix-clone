"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/auth.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Auth = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"login\");\n    const toggleVariant = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        setVariant((currentVariant)=>currentVariant == \"login\" ? \"register\" : \"login\");\n    }, []);\n    const register = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/register\", {\n                email,\n                name,\n                password\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }, [\n        email,\n        name,\n        password\n    ]);\n    const login = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n                email,\n                password,\n                redirect: false,\n                callbackUrl: \"/\"\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }, [\n        email,\n        password\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"   relative    h-full    w-full    bg-[url('/images/hero.jpg')]    bg-no-repeat    bg-center    bg-fixed    bg-cover\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"   bg-black    h-full    w-full    mx-auto    lg:bg-opacity-50\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"px-12 py-s\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo.png\",\n                        alt: \"logo\",\n                        className: \"h-12\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"   bg-black    bg-opacity-70    px-16    py-16    self-center    mt-2    w-2/5    max-w-md    rounded-md    w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"   text-white    text-4xl    mb-8    font-semibold\",\n                                children: variant == \"login\" ? \"Sign in\" : \"Register\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-4\",\n                                children: [\n                                    variant == \"register\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Username\",\n                                        onChange: (ev)=>setName(ev.target.value),\n                                        id: \"name\",\n                                        type: \"\",\n                                        value: name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Email\",\n                                        onChange: (ev)=>setEmail(ev.target.value),\n                                        id: \"email\",\n                                        type: \"email\",\n                                        value: email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Password\",\n                                        onChange: (ev)=>setPassword(ev.target.value),\n                                        id: \"password\",\n                                        type: \"password\",\n                                        value: password\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: variant == \"login\" ? login : register,\n                                className: \"   bg-red-600    py-3    text-white   rounded    w-full    mt-10    hover:bg-red-700    transition\",\n                                children: variant == \"login\" ? \"Login\" : \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"   text-neutral-500   mt-12\",\n                                children: [\n                                    variant == \"login\" ? \"First time using Netflix?\" : \"Already have an account?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"   text-white    ml-1   hover:underline    cursor-pointer\",\n                                        onClick: toggleVariant,\n                                        children: variant == \"login\" ? \"Create an account\" : \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\VSCode\\\\Projects\\\\FullStack-Netflix-Clone\\\\netflix\\\\netflix-clone\\\\pages\\\\auth.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Auth, \"+UtwXGdupOGq7rLMSF3hxC3FwgM=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9hdXRoLnRzeD80MWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5jb25zdCBBdXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZSgnbG9naW4nKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVWYXJpYW50ID0gdXNlQ2FsbGJhY2soKCk9PiB7XHJcbiAgICAgICAgc2V0VmFyaWFudCgoY3VycmVudFZhcmlhbnQpID0+IGN1cnJlbnRWYXJpYW50ID09ICdsb2dpbicgPyAncmVnaXN0ZXInIDogJ2xvZ2luJyk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCByZWdpc3RlciA9IHVzZUNhbGxiYWNrIChhc3luYyAoKT0+IHtcclxuICAgICAgICB0cnkgeyAgIFxyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCdhcGkvcmVnaXN0ZXInLCB7IFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBuYW1lLCBcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Y2F0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbWFpbCwgbmFtZSwgcGFzc3dvcmRdKTtcclxuXHJcblxyXG4gICAgY29uc3QgbG9naW4gPSB1c2VDYWxsYmFjayhhc3luYygpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IHNpZ25JbignY3JlZGVudGlhbHMnLCB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCwgXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrVXJsOicvJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Y2F0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlxyXG4gICAgICAgIHJlbGF0aXZlIFxyXG4gICAgICAgIGgtZnVsbCBcclxuICAgICAgICB3LWZ1bGwgXHJcbiAgICAgICAgYmctW3VybCgnL2ltYWdlcy9oZXJvLmpwZycpXSBcclxuICAgICAgICBiZy1uby1yZXBlYXQgXHJcbiAgICAgICAgYmctY2VudGVyIFxyXG4gICAgICAgIGJnLWZpeGVkIFxyXG4gICAgICAgIGJnLWNvdmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIGJnLWJsYWNrIFxyXG4gICAgICAgICAgICBoLWZ1bGwgXHJcbiAgICAgICAgICAgIHctZnVsbCBcclxuICAgICAgICAgICAgbXgtYXV0byBcclxuICAgICAgICAgICAgbGc6Ymctb3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJweC0xMiBweS1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImgtMTJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmctYmxhY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgYmctb3BhY2l0eS03MCBcclxuICAgICAgICAgICAgICAgICAgICBweC0xNiBcclxuICAgICAgICAgICAgICAgICAgICBweS0xNiBcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLWNlbnRlciBcclxuICAgICAgICAgICAgICAgICAgICBtdC0yIFxyXG4gICAgICAgICAgICAgICAgICAgIHctMi81IFxyXG4gICAgICAgICAgICAgICAgICAgIG1heC13LW1kIFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtbWQgXHJcbiAgICAgICAgICAgICAgICAgICAgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC00eGwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1iLTggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXJpYW50ID09ICdsb2dpbicgPyAnU2lnbiBpbicgOiAnUmVnaXN0ZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXJpYW50ID09ICdyZWdpc3RlcicgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXY6IGFueSk9PnNldE5hbWUoZXYudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXY6IGFueSk9PnNldEVtYWlsKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXY6IGFueSk9PnNldFBhc3N3b3JkKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ZhcmlhbnQgPT0gJ2xvZ2luJyA/IGxvZ2luIDogcmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1yZWQtNjAwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy1mdWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10LTEwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLXJlZC03MDAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXJpYW50ID09ICdsb2dpbicgPyAnTG9naW4nIDogJ1NpZ24gdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtbmV1dHJhbC01MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXJpYW50ID09ICdsb2dpbicgPyAnRmlyc3QgdGltZSB1c2luZyBOZXRmbGl4PycgOiAnQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOnVuZGVybGluZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci1wb2ludGVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVWYXJpYW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWFudCA9PSAnbG9naW4nID8gJ0NyZWF0ZSBhbiBhY2NvdW50JyA6ICdMb2dpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aDsiXSwibmFtZXMiOlsiSW5wdXQiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiYXhpb3MiLCJzaWduSW4iLCJBdXRoIiwiZW1haWwiLCJzZXRFbWFpbCIsIm5hbWUiLCJzZXROYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInZhcmlhbnQiLCJzZXRWYXJpYW50IiwidG9nZ2xlVmFyaWFudCIsImN1cnJlbnRWYXJpYW50IiwicmVnaXN0ZXIiLCJwb3N0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJyZWRpcmVjdCIsImNhbGxiYWNrVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth.tsx\n"));

/***/ })

});