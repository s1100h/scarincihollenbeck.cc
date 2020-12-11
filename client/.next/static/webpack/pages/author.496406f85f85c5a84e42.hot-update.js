webpackHotUpdate_N_E("pages/author",{

/***/ "./pages/author/index.js":
/*!*******************************!*\
  !*** ./pages/author/index.js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Author; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/breadcrumbs */ "./components/breadcrumbs.js");
/* harmony import */ var layouts_archive_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! layouts/archive-layout */ "./layouts/archive-layout.js");
/* harmony import */ var components_archives_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/archives/body */ "./components/archives/body.js");
/* harmony import */ var components_author_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/author/sidebar */ "./components/author/sidebar.js");
/* harmony import */ var components_site_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/site-loader */ "./components/site-loader.js");
/* harmony import */ var components_error_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/error-message */ "./components/error-message.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\author\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var __N_SSG = true;
function Author(_ref) {
  _s();

  var firmNews = _ref.firmNews,
      firmEvents = _ref.firmEvents,
      firmInsights = _ref.firmInsights;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  console.log(router.query);

  if (router.fallBack <= 0) {
    return __jsx("div", {
      className: "py-5 my-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(components_site_loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 10
      }
    }));
  } // page: query.page || 1,
  // pages: response.pages || 1,
  // results: response.results || [],
  // authorBio


  return __jsx("div", {
    className: "mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "Well get back to this...", __jsx(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
}

_s(Author, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Author;

var _c;

$RefreshReg$(_c, "Author");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkF1dGhvciIsImZpcm1OZXdzIiwiZmlybUV2ZW50cyIsImZpcm1JbnNpZ2h0cyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImZhbGxCYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNZSxTQUFTQSxNQUFULE9BSVo7QUFBQTs7QUFBQSxNQUhEQyxRQUdDLFFBSERBLFFBR0M7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQUREQyxZQUNDLFFBRERBLFlBQ0M7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLEtBQW5COztBQUVBLE1BQUdKLE1BQU0sQ0FBQ0ssUUFBUCxJQUFrQixDQUFyQixFQUF3QjtBQUN0QixXQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURILENBREY7QUFLRCxHQVZBLENBYUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXNCRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsQ0FERjtBQTBCRDs7R0FoRHVCVCxNO1VBS1BLLHFEOzs7S0FMT0wsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRob3IuNDk2NDA2Zjg1Zjg1YzVhODRlNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnY29tcG9uZW50cy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBBcmNoaXZlTGF5b3V0IGZyb20gJ2xheW91dHMvYXJjaGl2ZS1sYXlvdXQnO1xyXG5pbXBvcnQgQm9keSBmcm9tICdjb21wb25lbnRzL2FyY2hpdmVzL2JvZHknO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICdjb21wb25lbnRzL2F1dGhvci9zaWRlYmFyJztcclxuaW1wb3J0IFNpdGVMb2FkZXIgZnJvbSAnY29tcG9uZW50cy9zaXRlLWxvYWRlcic7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnY29tcG9uZW50cy9lcnJvci1tZXNzYWdlJztcclxuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gJ3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJ3V0aWxzL2dyYXBocWwtY2xpZW50JztcclxuaW1wb3J0IHsgYmxvZ0FydGljbGVzUXVlcnkgfSBmcm9tICdxdWVyaWVzL2hvbWUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3Ioe1xyXG4gIGZpcm1OZXdzLFxyXG4gIGZpcm1FdmVudHMsXHJcbiAgZmlybUluc2lnaHRzXHJcbn0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSlcclxuXHJcbiAgaWYocm91dGVyLmZhbGxCYWNrIDw9MCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IG15LTVcIj5cclxuICAgICAgICAgPFNpdGVMb2FkZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBcclxuICAvLyBwYWdlOiBxdWVyeS5wYWdlIHx8IDEsXHJcbiAgLy8gcGFnZXM6IHJlc3BvbnNlLnBhZ2VzIHx8IDEsXHJcbiAgLy8gcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cyB8fCBbXSxcclxuICAvLyBhdXRob3JCaW9cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgIHsvKiA8TmV4dFNlbyBub2ZvbGxvdyAvPlxyXG4gICAgICA8QXJjaGl2ZUxheW91dFxyXG4gICAgICAgIGhlYWRlcj17KDxCcmVhZGNydW1ic1xyXG4gICAgICAgICAgYnJlYWRDcnVtYj17W2N1cnJlbnRVc2VyLCBwYWdlXX1cclxuICAgICAgICAgIGNhdGVnb3J5U2x1Zz17Y3VycmVudFVzZXJ9XHJcbiAgICAgICAgLz4pfVxyXG4gICAgICAgIGJvZHk9eyhcclxuICAgICAgICAgIDxCb2R5XHJcbiAgICAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XHJcbiAgICAgICAgICAgIHRlcm09e2N1cnJlbnRVc2VyfVxyXG4gICAgICAgICAgICBwYWdlcz17cGFnZXN9XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICBuZXdzPXtmaXJtTmV3c31cclxuICAgICAgICAgICAgZXZlbnRzPXtmaXJtRXZlbnRzfVxyXG4gICAgICAgICAgICBpbnNpZ2h0PXtmaXJtSW5zaWdodHN9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhdGhuYW1lPXtgL2F1dGhvci8ke2N1cnJlbnRVc2VyfWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgc2lkZWJhcj17KDxTaWRlYmFyIGJpbz17YmlvfSBwcmFjdGljZXM9e3ByYWN0aWNlc30gLz4pfVxyXG4gICAgICAvPiAqL31cclxuICAgICAgV2VsbCBnZXQgYmFjayB0byB0aGlzLi4uXHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBmaXJtTmV3c0NvbnRlbnQgPSBhd2FpdCBjbGllbnQucXVlcnkoYmxvZ0FydGljbGVzUXVlcnkoOTgpLCB7fSk7XHJcbiAgY29uc3QgZmlybUV2ZW50c0NvbnRlbnQgPSBhd2FpdCBjbGllbnQucXVlcnkoYmxvZ0FydGljbGVzUXVlcnkoOTkpLCB7fSk7XHJcbiAgY29uc3QgZmlybUluc2lnaHRzQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShibG9nQXJ0aWNsZXNRdWVyeSg1OTkpLCB7fSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmaXJtTmV3czogZmlybU5ld3NDb250ZW50IHx8IFtdLFxyXG4gICAgICBmaXJtRXZlbnRzOiBmaXJtRXZlbnRzQ29udGVudCB8fCBbXSxcclxuICAgICAgZmlybUluc2lnaHRzOiBmaXJtSW5zaWdodHNDb250ZW50IHx8IFtdLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=