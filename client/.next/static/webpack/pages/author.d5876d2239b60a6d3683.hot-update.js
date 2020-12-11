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
  console.log(router);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkF1dGhvciIsImZpcm1OZXdzIiwiZmlybUV2ZW50cyIsImZpcm1JbnNpZ2h0cyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJmYWxsQmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTWUsU0FBU0EsTUFBVCxPQUlaO0FBQUE7O0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFEREMsWUFDQyxRQUREQSxZQUNDO0FBQ0QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjs7QUFFQSxNQUFHQSxNQUFNLENBQUNJLFFBQVAsSUFBa0IsQ0FBckIsRUFBd0I7QUFDdEIsV0FDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESCxDQURGO0FBS0QsR0FWQSxDQWFEO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FzQkUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLENBREY7QUEwQkQ7O0dBaER1QlIsTTtVQUtQSyxxRDs7O0tBTE9MLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aG9yLmQ1ODc2ZDIyMzliNjBhNmQzNjgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ2NvbXBvbmVudHMvYnJlYWRjcnVtYnMnO1xyXG5pbXBvcnQgQXJjaGl2ZUxheW91dCBmcm9tICdsYXlvdXRzL2FyY2hpdmUtbGF5b3V0JztcclxuaW1wb3J0IEJvZHkgZnJvbSAnY29tcG9uZW50cy9hcmNoaXZlcy9ib2R5JztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnY29tcG9uZW50cy9hdXRob3Ivc2lkZWJhcic7XHJcbmltcG9ydCBTaXRlTG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvc2l0ZS1sb2FkZXInO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJ2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZSc7XHJcbmltcG9ydCB7IGhlYWRlcnMgfSBmcm9tICd1dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICd1dGlscy9ncmFwaHFsLWNsaWVudCc7XHJcbmltcG9ydCB7IGJsb2dBcnRpY2xlc1F1ZXJ5IH0gZnJvbSAncXVlcmllcy9ob21lJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aG9yKHtcclxuICBmaXJtTmV3cyxcclxuICBmaXJtRXZlbnRzLFxyXG4gIGZpcm1JbnNpZ2h0c1xyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcblxyXG4gIGlmKHJvdXRlci5mYWxsQmFjayA8PTApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBteS01XCI+XHJcbiAgICAgICAgIDxTaXRlTG9hZGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy8gcGFnZTogcXVlcnkucGFnZSB8fCAxLFxyXG4gIC8vIHBhZ2VzOiByZXNwb25zZS5wYWdlcyB8fCAxLFxyXG4gIC8vIHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMgfHwgW10sXHJcbiAgLy8gYXV0aG9yQmlvXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICB7LyogPE5leHRTZW8gbm9mb2xsb3cgLz5cclxuICAgICAgPEFyY2hpdmVMYXlvdXRcclxuICAgICAgICBoZWFkZXI9eyg8QnJlYWRjcnVtYnNcclxuICAgICAgICAgIGJyZWFkQ3J1bWI9e1tjdXJyZW50VXNlciwgcGFnZV19XHJcbiAgICAgICAgICBjYXRlZ29yeVNsdWc9e2N1cnJlbnRVc2VyfVxyXG4gICAgICAgIC8+KX1cclxuICAgICAgICBib2R5PXsoXHJcbiAgICAgICAgICA8Qm9keVxyXG4gICAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICAgICAgICB0ZXJtPXtjdXJyZW50VXNlcn1cclxuICAgICAgICAgICAgcGFnZXM9e3BhZ2VzfVxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZX1cclxuICAgICAgICAgICAgbmV3cz17ZmlybU5ld3N9XHJcbiAgICAgICAgICAgIGV2ZW50cz17ZmlybUV2ZW50c31cclxuICAgICAgICAgICAgaW5zaWdodD17ZmlybUluc2lnaHRzfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYXRobmFtZT17YC9hdXRob3IvJHtjdXJyZW50VXNlcn1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHNpZGViYXI9eyg8U2lkZWJhciBiaW89e2Jpb30gcHJhY3RpY2VzPXtwcmFjdGljZXN9IC8+KX1cclxuICAgICAgLz4gKi99XHJcbiAgICAgIFdlbGwgZ2V0IGJhY2sgdG8gdGhpcy4uLlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgZmlybU5ld3NDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGJsb2dBcnRpY2xlc1F1ZXJ5KDk4KSwge30pO1xyXG4gIGNvbnN0IGZpcm1FdmVudHNDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGJsb2dBcnRpY2xlc1F1ZXJ5KDk5KSwge30pO1xyXG4gIGNvbnN0IGZpcm1JbnNpZ2h0c0NvbnRlbnQgPSBhd2FpdCBjbGllbnQucXVlcnkoYmxvZ0FydGljbGVzUXVlcnkoNTk5KSwge30pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZmlybU5ld3M6IGZpcm1OZXdzQ29udGVudCB8fCBbXSxcclxuICAgICAgZmlybUV2ZW50czogZmlybUV2ZW50c0NvbnRlbnQgfHwgW10sXHJcbiAgICAgIGZpcm1JbnNpZ2h0czogZmlybUluc2lnaHRzQ29udGVudCB8fCBbXSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9