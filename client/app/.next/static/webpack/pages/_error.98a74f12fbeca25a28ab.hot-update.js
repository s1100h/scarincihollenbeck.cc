webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cptumulty%5Csites%5Cscarincihollenbeck.frontend.cc%5Cclient%5Capp%5Cpages%5C_error.js!./":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cptumulty%5Csites%5Cscarincihollenbeck.frontend.cc%5Cclient%5Capp%5Cpages%5C_error.js ***!
  \**********************************************************************************************************************************************************************************************************************/
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



var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\app\\pages\\_error.js",
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
    id: "404"
  }, __jsx(layouts_single_sub_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: errorMessage,
    subtitle: "Sorry, the page you are looking for cannot be found or there is an internal server issue on our end.",
    image: "https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg",
    height: "325px"
  }), __jsx(layouts_full_width__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx("div", {
    className: "w-100"
  }, __jsx("p", {
    className: "lead"
  }, "It's possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for."), __jsx("p", {
    className: "lead"
  }, ' ', "If you are a client, please get in touch with your", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/attorneys"
  }, __jsx("a", {
    className: "blue-title"
  }, __jsx("u", null, "Scarinci Hollenbeck attorney"))), ' ', "contact directly."), __jsx("p", {
    className: "lead"
  }, "If you are looking to get in touch with an attorney under the terms as to becoming a new client please call 201-896-4100.")), __jsx(_components_simple_search__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx("div", {
    className: "w-50 my-3 p-4 border"
  }, __jsx("h5", null, __jsx("strong", null, "Or try visiting one of these pages on our site to narrow your search.")), __jsx("ul", {
    className: "mb-0"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/attorneys"
  }, __jsx("a", {
    className: "u-hover h5"
  }, "Attorneys"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/practice"
  }, __jsx("a", {
    className: "u-hover h5"
  }, "Practices"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/locations"
  }, __jsx("a", {
    className: "u-hover h5"
  }, "Locations"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-news"
  }, __jsx("a", {
    className: "u-hover h5"
  }, "Firm News"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-events"
  }, __jsx("a", {
    className: "u-hover h5"
  }, "Firm Events"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-insights"
  }, __jsx("a", {
    className: "u-hover h5"
  }, "Firm Insights"))))))), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiQ3VzdG9tRXJyb3IiLCJzdGF0dXNDb2RlIiwidXNlU3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQTJGO0FBQ2xIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsRUFBRCxDQURDO0FBQUEsTUFDM0NDLFlBRDJDO0FBQUEsTUFDN0JDLGVBRDZCOztBQUdsREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsa0JBQWtCO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QixvQkFBR0wsVUFBVSxLQUFLLEdBQWxCLEVBQXVCO0FBQ3JCRyxpQ0FBZSxDQUFDLHFCQUFELENBQWY7QUFDRDs7QUFFRCxvQkFBR0gsVUFBVSxLQUFLLEdBQWxCLEVBQXVCO0FBQ3JCRyxpQ0FBZSxDQUFDLDRCQUFELENBQWY7QUFDRDs7QUFQd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBbEJFLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxPQUF4Qjs7QUFVQUEsc0JBQWtCO0FBQ25CLEdBWlEsRUFZTixDQUFDTCxVQUFELENBWk0sQ0FBVDtBQWNBLFNBQ0UsbUVBQ0U7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNFLE1BQUMsaUVBQUQ7QUFDRSxTQUFLLEVBQUVFLFlBRFQ7QUFFRSxZQUFRLEVBQUMsc0dBRlg7QUFHRSxTQUFLLEVBQUMsOEZBSFI7QUFJRSxVQUFNLEVBQUM7QUFKVCxJQURGLEVBT0UsTUFBQywwREFBRCxRQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLGdKQURGLEVBSUU7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUNHLEdBREgsd0RBR0csR0FISCxFQUlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FDRSxnREFERixDQURGLENBSkYsRUFTRyxHQVRILHNCQUpGLEVBZ0JFO0FBQUcsYUFBUyxFQUFDO0FBQWIsaUlBaEJGLENBREYsRUFxQkUsTUFBQyxpRUFBRCxPQXJCRixFQXNCRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usa0JBQ0UsOEZBREYsQ0FERixFQU1FO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDRSxrQkFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLGlCQURGLENBREYsQ0FERixFQVFFLGtCQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsaUJBREYsQ0FERixDQVJGLEVBZUUsa0JBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0U7QUFBRyxhQUFTLEVBQUM7QUFBYixpQkFERixDQURGLENBZkYsRUFzQkUsa0JBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0U7QUFBRyxhQUFTLEVBQUM7QUFBYixpQkFERixDQURGLENBdEJGLEVBNkJFLGtCQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsbUJBREYsQ0FERixDQTdCRixFQW9DRSxrQkFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLHFCQURGLENBREYsQ0FwQ0YsQ0FORixDQXRCRixDQVBGLENBREYsRUFtRkUsTUFBQyx5REFBRCxPQW5GRixDQURGO0FBdUZEOztHQXhHdUJILFc7O0tBQUFBLFc7O0FBMEd4QixTQUFTTyxlQUFULFFBQXVDO0FBQUEsTUFBWkMsR0FBWSxTQUFaQSxHQUFZO0FBQUEsTUFBUEMsR0FBTyxTQUFQQSxHQUFPO0FBQ3JDLE1BQUlSLFVBQUosQ0FEcUMsQ0FFckM7QUFDQTs7QUFDQSxNQUFJTyxHQUFKLEVBQVM7QUFDUFAsY0FBVSxHQUFHTyxHQUFHLENBQUNQLFVBQWpCO0FBQ0QsR0FGRCxNQUVPLElBQUlRLEdBQUosRUFBUztBQUNkO0FBQ0E7QUFDQVIsY0FBVSxHQUFHUSxHQUFHLENBQUNSLFVBQWpCO0FBQ0QsR0FKTSxNQUlBO0FBQ0w7QUFDQTtBQUNBQSxjQUFVLEdBQUcsSUFBYjtBQUNEOztBQUNELFNBQU87QUFBRUEsY0FBVSxFQUFWQTtBQUFGLEdBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fZXJyb3IuOThhNzRmMTJmYmVjYTI1YTI4YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccHR1bXVsdHlcXFxcc2l0ZXNcXFxcc2NhcmluY2lob2xsZW5iZWNrLmZyb250ZW5kLmNjXFxcXGNsaWVudFxcXFxhcHBcXFxccGFnZXNcXFxcX2Vycm9yLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBTaW5nbGVTdWJIZWFkZXIgZnJvbSAnbGF5b3V0cy9zaW5nbGUtc3ViLWhlYWRlcic7XHJcbmltcG9ydCBGdWxsV2lkdGggZnJvbSAnbGF5b3V0cy9mdWxsLXdpZHRoJztcclxuaW1wb3J0IFNpbXBsZVNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL3NpbXBsZS1zZWFyY2gnO1xyXG5pbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSAndXRpbHMvaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21FcnJvcih7IHN0YXR1c0NvZGUgfSkge1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZSBdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRXJyb3JNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihzdGF0dXNDb2RlID09PSA0MDQpIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJzQwNDogUGFnZSBOb3QgRm91bmQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoc3RhdHVzQ29kZSA9PT0gNTAwKSB7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCc1MDA6IEludGVybmFsIFNlcnZlciBFcnJvcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JNZXNzYWdlKCk7XHJcbiAgfSwgW3N0YXR1c0NvZGVdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cIjQwNFwiPlxyXG4gICAgICAgIDxTaW5nbGVTdWJIZWFkZXJcclxuICAgICAgICAgIHRpdGxlPXtlcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICBzdWJ0aXRsZT1cIlNvcnJ5LCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGNhbm5vdCBiZSBmb3VuZCBvciB0aGVyZSBpcyBhbiBpbnRlcm5hbCBzZXJ2ZXIgaXNzdWUgb24gb3VyIGVuZC5cIlxyXG4gICAgICAgICAgaW1hZ2U9XCJodHRwczovL3NoaGNzZ212c25kbXhtcHEubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLzIwMjAvMDUvU2t5c2NyYXBlcnMtdXAtMTgwMHg0MDAtSlBHLmpwZ1wiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMjVweFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RnVsbFdpZHRoPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgSXQmYXBvcztzIHBvc3NpYmxlIHlvdSBlbnRlcmVkIHRoZSBhZGRyZXNzIGluY29ycmVjdGx5IG9yIHdlIG1vdmVkIHRoZSBkZXNpcmVkIHBhZ2UuIFRyeSBzZWFyY2hpbmcgb3VyIHNpdGUgdG8gZmluZCB3aGF0IHlvdSBhcmUgbG9va2luZyBmb3IuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgSWYgeW91IGFyZSBhIGNsaWVudCwgcGxlYXNlIGdldCBpbiB0b3VjaCB3aXRoIHlvdXJcclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXR0b3JuZXlzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibHVlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1PlNjYXJpbmNpIEhvbGxlbmJlY2sgYXR0b3JuZXk8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgY29udGFjdCBkaXJlY3RseS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgSWYgeW91IGFyZSBsb29raW5nIHRvIGdldCBpbiB0b3VjaCB3aXRoIGFuIGF0dG9ybmV5IHVuZGVyIHRoZSB0ZXJtcyBhcyB0byBiZWNvbWluZyBhIG5ldyBjbGllbnQgcGxlYXNlIGNhbGwgMjAxLTg5Ni00MTAwLlxyXG4gICAgICAgICAgICA8L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTaW1wbGVTZWFyY2ggLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01MCBteS0zIHAtNCBib3JkZXJcIj5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICBPciB0cnkgdmlzaXRpbmcgb25lIG9mIHRoZXNlIHBhZ2VzIG9uIG91ciBzaXRlIHRvIG5hcnJvdyB5b3VyIHNlYXJjaC5cclxuICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oNT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F0dG9ybmV5c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQXR0b3JuZXlzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJhY3RpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidS1ob3ZlciBoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByYWN0aWNlc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2F0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcnkvZmlybS1uZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInUtaG92ZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBGaXJtIE5ld3NcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yeS9maXJtLWV2ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRmlybSBFdmVudHNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yeS9maXJtLWluc2lnaHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInUtaG92ZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBGaXJtIEluc2lnaHRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgPC9GdWxsV2lkdGg+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoeyByZXMsIGVyciB9KSB7XHJcbiAgbGV0IHN0YXR1c0NvZGU7XHJcbiAgLy8gSWYgdGhlIHJlcyB2YXJpYWJsZSBpcyBkZWZpbmVkIGl0IG1lYW5zIG5leHRqc1xyXG4gIC8vIGlzIGluIHNlcnZlciBzaWRlXHJcbiAgaWYgKHJlcykge1xyXG4gICAgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xyXG4gIH0gZWxzZSBpZiAoZXJyKSB7XHJcbiAgICAvLyBpZiB0aGVyZSBpcyBhbnkgZXJyb3IgaW4gdGhlIGFwcCBpdCBzaG91bGRcclxuICAgIC8vIHJldHVybiB0aGUgc3RhdHVzIGNvZGUgZnJvbSBoZXJlXHJcbiAgICBzdGF0dXNDb2RlID0gZXJyLnN0YXR1c0NvZGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFNvbWV0aGluZyByZWFsbHkgYmFkL3dlaXJkIGhhcHBlbiBhbmQgc3RhdHVzIGNvZGVcclxuICAgIC8vIGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxyXG4gICAgc3RhdHVzQ29kZSA9IG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN0YXR1c0NvZGUgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=