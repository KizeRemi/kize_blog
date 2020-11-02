webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Remi/Desktop/blog-mavillaz/components/Menu.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Menu = function Menu(_ref) {\n  _s();\n\n  var items = _ref.items;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      toggleMenu = _useState[1];\n\n  return __jsx(\"div\", {\n    \"class\": \"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-14 xl:pb-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    \"class\": \"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2\",\n    fill: \"currentColor\",\n    viewBox: \"0 0 100 100\",\n    preserveAspectRatio: \"none\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"polygon\", {\n    points: \"50,0 100,0 50,100 0,100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    \"class\": \"relative pt-6 px-4 sm:px-6 lg:px-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"nav\", {\n    \"class\": \"relative flex items-center justify-between sm:h-10 lg:justify-start\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"flex items-center justify-between w-full md:w-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"-mr-2 flex items-center md:hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return toggleMenu(true);\n    },\n    type: \"button\",\n    \"class\": \"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out\",\n    id: \"main-menu\",\n    \"aria-label\": \"Main menu\",\n    \"aria-haspopup\": \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }, __jsx(\"svg\", {\n    \"class\": \"h-6 w-6\",\n    stroke: \"currentColor\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 19\n    }\n  }, __jsx(\"path\", {\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    \"stroke-width\": \"2\",\n    d: \"M4 6h16M4 12h16M4 18h16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  })))))), __jsx(\"div\", {\n    \"class\": \"hidden md:block md:ml-10 md:pr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, items.map(function (item) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: item.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      className: \"\".concat(item.important && 'border-2 border-gray-600 rounded', \" mx-4 px-3 py-1 font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }\n    }, item.label));\n  })))), isOpen && __jsx(\"div\", {\n    \"class\": \"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"rounded-lg shadow-md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"rounded-lg bg-white shadow-xs overflow-hidden\",\n    role: \"menu\",\n    \"aria-orientation\": \"vertical\",\n    \"aria-labelledby\": \"main-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"px-5 pt-4 flex items-center justify-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    \"class\": \"h-8 w-auto\",\n    src: \"https://tailwindui.com/img/logos/workflow-mark-on-white.svg\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 19\n    }\n  })), __jsx(\"div\", {\n    \"class\": \"-mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return toggleMenu(false);\n    },\n    type: \"button\",\n    \"class\": \"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out\",\n    \"aria-label\": \"Close menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 19\n    }\n  }, __jsx(\"svg\", {\n    \"class\": \"h-6 w-6\",\n    stroke: \"currentColor\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, __jsx(\"path\", {\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    \"stroke-width\": \"2\",\n    d: \"M6 18L18 6M6 6l12 12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 23\n    }\n  }))))), __jsx(\"div\", {\n    \"class\": \"px-2 pt-2 pb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }, items.map(function (item) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: item.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      className: \"\".concat(item.important && 'border border-gray-300 rounded', \"\\xA0my-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out\"),\n      role: \"menuitem\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 19\n      }\n    }, item.label));\n  }))))));\n};\n\n_s(Menu, \"pW0uGzMoQpmk+T51GG14xg4zTjM=\");\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzPzExMGQiXSwibmFtZXMiOlsiTWVudSIsIml0ZW1zIiwidXNlU3RhdGUiLCJpc09wZW4iLCJ0b2dnbGVNZW51IiwibWFwIiwiaXRlbSIsImhyZWYiLCJpbXBvcnRhbnQiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxVQURXOztBQUcxQixTQUNFO0FBQUssYUFBTSx1RkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLDZGQUFYO0FBQXlHLFFBQUksRUFBQyxjQUE5RztBQUE2SCxXQUFPLEVBQUMsYUFBckk7QUFBbUosdUJBQW1CLEVBQUMsTUFBdks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsVUFBTSxFQUFDLHlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBTSxvQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLHFFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0sMERBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSxvREFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLG1DQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRTtBQUFB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ZixNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFJLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsWUFBS0QsSUFBSSxDQUFDRSxTQUFMLElBQWtCLGdDQUF2Qiw2TUFBWjtBQUE0USxVQUFJLEVBQUMsVUFBalI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2UkYsSUFBSSxDQUFDRyxLQUFsUyxDQURGLENBRGU7QUFBQSxHQUFkLENBREgsQ0FiRixDQURGLENBREYsQ0EzQkosQ0FERjtBQXdERCxDQTNERDs7R0FBTVQsSTs7S0FBQUEsSTtBQTZEU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE1lbnUgPSAoe8KgaXRlbXMgfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCB0b2dnbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIHBiLTggYmctd2hpdGUgc206cGItMTYgbWQ6cGItMjAgbGc6bWF4LXctMnhsIGxnOnctZnVsbCBsZzpwYi0xNCB4bDpwYi04XCI+XG4gICAgICA8c3ZnIGNsYXNzPVwiaGlkZGVuIGxnOmJsb2NrIGFic29sdXRlIHJpZ2h0LTAgaW5zZXQteS0wIGgtZnVsbCB3LTQ4IHRleHQtd2hpdGUgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LTEvMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI1MCwwIDEwMCwwIDUwLDEwMCAwLDEwMFwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBwdC02IHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc206aC0xMCBsZzpqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtZ3JvdyBmbGV4LXNocmluay0wIGxnOmZsZXgtZ3Jvdy0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtZDp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIi1tci0yIGZsZXggaXRlbXMtY2VudGVyIG1kOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlTWVudSh0cnVlKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS0xMDAgZm9jdXM6dGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dFwiIGlkPVwibWFpbi1tZW51XCIgYXJpYS1sYWJlbD1cIk1haW4gbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaC02IHctNlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gbWQ6YmxvY2sgbWQ6bWwtMTAgbWQ6cHItNFwiPlxuICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake2l0ZW0uaW1wb3J0YW50ICYmICdib3JkZXItMiBib3JkZXItZ3JheS02MDAgcm91bmRlZCd9IG14LTQgcHgtMyBweS0xIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dGB9PntpdGVtLmxhYmVsfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIHRvcC0wIGluc2V0LXgtMCBwLTIgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gb3JpZ2luLXRvcC1yaWdodCBtZDpoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy14cyBvdmVyZmxvdy1oaWRkZW5cIiByb2xlPVwibWVudVwiIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGFyaWEtbGFiZWxsZWRieT1cIm1haW4tbWVudVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNSBwdC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaC04IHctYXV0b1wiIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstb24td2hpdGUuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiLW1yLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlTWVudShmYWxzZSl9IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktMTAwIGZvY3VzOnRleHQtZ3JheS01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaC02IHctNlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTIgcHQtMiBwYi0zXCI+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtpdGVtLmltcG9ydGFudCAmJiAnYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkJ33CoG15LTEgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LWdyYXktOTAwIGZvY3VzOmJnLWdyYXktNTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRgfSByb2xlPVwibWVudWl0ZW1cIj57aXRlbS5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.js\n");

/***/ })

})