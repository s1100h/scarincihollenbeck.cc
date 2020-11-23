webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cptumulty%5Csites%5Cscarincihollenbeck.frontend.cc%5Cclient%5Cpages%5C_error.js!./":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cptumulty%5Csites%5Cscarincihollenbeck.frontend.cc%5Cclient%5Cpages%5C_error.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomError; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var layouts_single_sub_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/single-sub-header */ "./layouts/single-sub-header.js");
/* harmony import */ var layouts_full_width__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! layouts/full-width */ "./layouts/full-width.js");
/* harmony import */ var _components_simple_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/simple-search */ "./components/simple-search.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");



var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\_error.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function CustomError(_ref) {
  _s();

  var statusCode = _ref.statusCode;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      errorMessage = _useState[0],
      setErrorMessage = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleErrorMessage = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (statusCode === 404) {
                  setErrorMessage('404: Page Not Found');
                }

                if (statusCode === 500) {
                  setErrorMessage('500: Internal Server Error');
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleErrorMessage() {
        return _ref2.apply(this, arguments);
      };
    }();

    handleErrorMessage();
  }, [statusCode]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    id: "404",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(layouts_single_sub_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: errorMessage,
    subtitle: "Sorry, the page you are looking for cannot be found or there is an internal server issue on our end.",
    image: "https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg",
    height: "325px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(layouts_full_width__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "It's possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for."), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, ' ', "If you are a client, please get in touch with your", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/attorneys",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "blue-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("u", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Scarinci Hollenbeck attorney"))), ' ', "contact directly."), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "If you are looking to get in touch with an attorney under the terms as to becoming a new client please call 201-896-4100.")), __jsx(_components_simple_search__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "w-50 my-3 p-4 border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Or try visiting one of these pages on our site to narrow your search.")), __jsx("ul", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/attorneys",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "Attorneys"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/practice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "Practices"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/locations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, "Locations"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, "Firm News"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-events",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, "Firm Events"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-insights",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, "Firm Insights"))))))), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }));
}

_s(CustomError, "e8i4FkGYX3UA6zyyEkaHUNQN2JI=");

_c = CustomError;

function getInitialProps(_ref3) {
  var res = _ref3.res,
      err = _ref3.err;
  var statusCode; // If the res variable is defined it means nextjs
  // is in server side

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    // Something really bad/weird happen and status code
    // cannot be determined.
    statusCode = null;
  }

  return {
    statusCode: statusCode
  };
}

var _c;

$RefreshReg$(_c, "CustomError");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiQ3VzdG9tRXJyb3IiLCJzdGF0dXNDb2RlIiwidXNlU3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQXNGO0FBQzdHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsRUFBRCxDQURDO0FBQUEsTUFDM0NDLFlBRDJDO0FBQUEsTUFDN0JDLGVBRDZCOztBQUdsREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsa0JBQWtCO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QixvQkFBR0wsVUFBVSxLQUFLLEdBQWxCLEVBQXVCO0FBQ3JCRyxpQ0FBZSxDQUFDLHFCQUFELENBQWY7QUFDRDs7QUFFRCxvQkFBR0gsVUFBVSxLQUFLLEdBQWxCLEVBQXVCO0FBQ3JCRyxpQ0FBZSxDQUFDLDRCQUFELENBQWY7QUFDRDs7QUFQd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBbEJFLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxP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ZTkzZjJmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fZXJyb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxwdHVtdWx0eVxcXFxzaXRlc1xcXFxzY2FyaW5jaWhvbGxlbmJlY2suZnJvbnRlbmQuY2NcXFxcY2xpZW50XFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgU2luZ2xlU3ViSGVhZGVyIGZyb20gJ2xheW91dHMvc2luZ2xlLXN1Yi1oZWFkZXInO1xyXG5pbXBvcnQgRnVsbFdpZHRoIGZyb20gJ2xheW91dHMvZnVsbC13aWR0aCc7XHJcbmltcG9ydCBTaW1wbGVTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9zaW1wbGUtc2VhcmNoJztcclxuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gJ3V0aWxzL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tRXJyb3IoeyBzdGF0dXNDb2RlIH0pIHtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2UgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUVycm9yTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYoc3RhdHVzQ29kZSA9PT0gNDA0KSB7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCc0MDQ6IFBhZ2UgTm90IEZvdW5kJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHN0YXR1c0NvZGUgPT09IDUwMCkge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnNTAwOiBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9yTWVzc2FnZSgpO1xyXG4gIH0sIFtzdGF0dXNDb2RlXSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCI0MDRcIj5cclxuICAgICAgICA8U2luZ2xlU3ViSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT17ZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgc3VidGl0bGU9XCJTb3JyeSwgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBjYW5ub3QgYmUgZm91bmQgb3IgdGhlcmUgaXMgYW4gaW50ZXJuYWwgc2VydmVyIGlzc3VlIG9uIG91ciBlbmQuXCJcclxuICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9zaGhjc2dtdnNuZG14bXBxLm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS8yMDIwLzA1L1NreXNjcmFwZXJzLXVwLTE4MDB4NDAwLUpQRy5qcGdcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzI1cHhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZ1bGxXaWR0aD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgIEl0JmFwb3M7cyBwb3NzaWJsZSB5b3UgZW50ZXJlZCB0aGUgYWRkcmVzcyBpbmNvcnJlY3RseSBvciB3ZSBtb3ZlZCB0aGUgZGVzaXJlZCBwYWdlLiBUcnkgc2VhcmNoaW5nIG91ciBzaXRlIHRvIGZpbmQgd2hhdCB5b3UgYXJlIGxvb2tpbmcgZm9yLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIElmIHlvdSBhcmUgYSBjbGllbnQsIHBsZWFzZSBnZXQgaW4gdG91Y2ggd2l0aCB5b3VyXHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F0dG9ybmV5c1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmx1ZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dT5TY2FyaW5jaSBIb2xsZW5iZWNrIGF0dG9ybmV5PC91PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIGNvbnRhY3QgZGlyZWN0bHkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgIElmIHlvdSBhcmUgbG9va2luZyB0byBnZXQgaW4gdG91Y2ggd2l0aCBhbiBhdHRvcm5leSB1bmRlciB0aGUgdGVybXMgYXMgdG8gYmVjb21pbmcgYSBuZXcgY2xpZW50IHBsZWFzZSBjYWxsIDIwMS04OTYtNDEwMC5cclxuICAgICAgICAgICAgPC9wPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2ltcGxlU2VhcmNoIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTAgbXktMyBwLTQgYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgT3IgdHJ5IHZpc2l0aW5nIG9uZSBvZiB0aGVzZSBwYWdlcyBvbiBvdXIgc2l0ZSB0byBuYXJyb3cgeW91ciBzZWFyY2guXHJcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDU+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdHRvcm5leXNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidS1ob3ZlciBoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEF0dG9ybmV5c1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByYWN0aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInUtaG92ZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcmFjdGljZXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2NhdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidS1ob3ZlciBoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5L2Zpcm0tbmV3c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRmlybSBOZXdzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcnkvZmlybS1ldmVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidS1ob3ZlciBoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEZpcm0gRXZlbnRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcnkvZmlybS1pbnNpZ2h0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRmlybSBJbnNpZ2h0c1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgIDwvRnVsbFdpZHRoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKHsgcmVzLCBlcnIgfSkge1xyXG4gIGxldCBzdGF0dXNDb2RlO1xyXG4gIC8vIElmIHRoZSByZXMgdmFyaWFibGUgaXMgZGVmaW5lZCBpdCBtZWFucyBuZXh0anNcclxuICAvLyBpcyBpbiBzZXJ2ZXIgc2lkZVxyXG4gIGlmIChyZXMpIHtcclxuICAgIHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcclxuICB9IGVsc2UgaWYgKGVycikge1xyXG4gICAgLy8gaWYgdGhlcmUgaXMgYW55IGVycm9yIGluIHRoZSBhcHAgaXQgc2hvdWxkXHJcbiAgICAvLyByZXR1cm4gdGhlIHN0YXR1cyBjb2RlIGZyb20gaGVyZVxyXG4gICAgc3RhdHVzQ29kZSA9IGVyci5zdGF0dXNDb2RlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBTb21ldGhpbmcgcmVhbGx5IGJhZC93ZWlyZCBoYXBwZW4gYW5kIHN0YXR1cyBjb2RlXHJcbiAgICAvLyBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cclxuICAgIHN0YXR1c0NvZGUgPSBudWxsO1xyXG4gIH1cclxuICByZXR1cm4geyBzdGF0dXNDb2RlIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9