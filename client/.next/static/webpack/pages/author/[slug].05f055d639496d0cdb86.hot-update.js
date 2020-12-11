webpackHotUpdate_N_E("pages/author/[slug]",{

/***/ "./pages/author/[slug].js":
/*!********************************!*\
  !*** ./pages/author/[slug].js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Author; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/breadcrumbs */ "./components/breadcrumbs.js");
/* harmony import */ var layouts_archive_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts/archive-layout */ "./layouts/archive-layout.js");
/* harmony import */ var components_archives_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/archives/body */ "./components/archives/body.js");
/* harmony import */ var components_author_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/author/sidebar */ "./components/author/sidebar.js");
/* harmony import */ var components_site_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/site-loader */ "./components/site-loader.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\author\\[slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var __N_SSP = true;
function Author(_ref) {
  var results = _ref.results,
      page = _ref.page,
      pages = _ref.pages,
      authorBio = _ref.authorBio,
      firmNews = _ref.firmNews,
      firmEvents = _ref.firmEvents,
      firmInsights = _ref.firmInsights;
  var bio = authorBio.bio,
      practices = authorBio.practices,
      currentUser = authorBio.currentUser;

  if (results.length <= 0) {
    return __jsx("div", {
      className: "py-5 my-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(components_site_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 10
      }
    }));
  }

  return __jsx("div", {
    className: "mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    nofollow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(layouts_archive_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: __jsx(components_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      breadCrumb: [currentUser, page],
      categorySlug: currentUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 18
      }
    }),
    body: __jsx(components_archives_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
      results: results,
      term: currentUser,
      pages: pages,
      currentPage: page,
      news: firmNews,
      events: firmEvents,
      insight: firmInsights,
      pathname: "/author/".concat(currentUser),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }),
    sidebar: __jsx(components_author_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      bio: bio,
      practices: practices,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }));
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJyZXN1bHRzIiwicGFnZSIsInBhZ2VzIiwiYXV0aG9yQmlvIiwiZmlybU5ld3MiLCJmaXJtRXZlbnRzIiwiZmlybUluc2lnaHRzIiwiYmlvIiwicHJhY3RpY2VzIiwiY3VycmVudFVzZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0EsTUFBVCxPQVFaO0FBQUEsTUFQREMsT0FPQyxRQVBEQSxPQU9DO0FBQUEsTUFOREMsSUFNQyxRQU5EQSxJQU1DO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsU0FJQyxRQUpEQSxTQUlDO0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFEREMsWUFDQyxRQUREQSxZQUNDO0FBQUEsTUFFT0MsR0FGUCxHQUV1Q0osU0FGdkMsQ0FFT0ksR0FGUDtBQUFBLE1BRVlDLFNBRlosR0FFdUNMLFNBRnZDLENBRVlLLFNBRlo7QUFBQSxNQUV1QkMsV0FGdkIsR0FFdUNOLFNBRnZDLENBRXVCTSxXQUZ2Qjs7QUFJRCxNQUFHVCxPQUFPLENBQUNVLE1BQVIsSUFBaUIsQ0FBcEIsRUFBdUI7QUFDckIsV0FDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESCxDQURGO0FBS0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVMsWUFBUSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQ0UsVUFBTSxFQUFHLE1BQUMsOERBQUQ7QUFDUCxnQkFBVSxFQUFFLENBQUNELFdBQUQsRUFBY1IsSUFBZCxDQURMO0FBRVAsa0JBQVksRUFBRVEsV0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFg7QUFLRSxRQUFJLEVBQ0YsTUFBQyxnRUFBRDtBQUNFLGFBQU8sRUFBRVQsT0FEWDtBQUVFLFVBQUksRUFBRVMsV0FGUjtBQUdFLFdBQUssRUFBRVAsS0FIVDtBQUlFLGlCQUFXLEVBQUVELElBSmY7QUFLRSxVQUFJLEVBQUVHLFFBTFI7QUFNRSxZQUFNLEVBQUVDLFVBTlY7QUFPRSxhQUFPLEVBQUVDLFlBUFg7QUFRRSxjQUFRLG9CQUFhRyxXQUFiLENBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5KO0FBaUJFLFdBQU8sRUFBRyxNQUFDLGlFQUFEO0FBQVMsU0FBRyxFQUFFRixHQUFkO0FBQW1CLGVBQVMsRUFBRUMsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWpCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFxQkUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLENBREY7QUF5QkQ7S0E3Q3VCVCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGhvci9bc2x1Z10uMDVmMDU1ZDYzOTQ5NmQwY2RiODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnY29tcG9uZW50cy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBBcmNoaXZlTGF5b3V0IGZyb20gJ2xheW91dHMvYXJjaGl2ZS1sYXlvdXQnO1xyXG5pbXBvcnQgQm9keSBmcm9tICdjb21wb25lbnRzL2FyY2hpdmVzL2JvZHknO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICdjb21wb25lbnRzL2F1dGhvci9zaWRlYmFyJztcclxuaW1wb3J0IFNpdGVMb2FkZXIgZnJvbSAnY29tcG9uZW50cy9zaXRlLWxvYWRlcic7XHJcbmltcG9ydCB7IGhlYWRlcnMgfSBmcm9tICd1dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICd1dGlscy9ncmFwaHFsLWNsaWVudCc7XHJcbmltcG9ydCB7IGJsb2dBcnRpY2xlc1F1ZXJ5IH0gZnJvbSAncXVlcmllcy9ob21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvcih7XHJcbiAgcmVzdWx0cyxcclxuICBwYWdlLFxyXG4gIHBhZ2VzLFxyXG4gIGF1dGhvckJpbyxcclxuICBmaXJtTmV3cyxcclxuICBmaXJtRXZlbnRzLFxyXG4gIGZpcm1JbnNpZ2h0c1xyXG59KSB7XHJcblxyXG4gIGNvbnN0IHsgYmlvLCBwcmFjdGljZXMsIGN1cnJlbnRVc2VyIH0gPSBhdXRob3JCaW9cclxuXHJcbiAgaWYocmVzdWx0cy5sZW5ndGggPD0wKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgbXktNVwiPlxyXG4gICAgICAgICA8U2l0ZUxvYWRlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICA8TmV4dFNlbyBub2ZvbGxvdyAvPlxyXG4gICAgICA8QXJjaGl2ZUxheW91dFxyXG4gICAgICAgIGhlYWRlcj17KDxCcmVhZGNydW1ic1xyXG4gICAgICAgICAgYnJlYWRDcnVtYj17W2N1cnJlbnRVc2VyLCBwYWdlXX1cclxuICAgICAgICAgIGNhdGVnb3J5U2x1Zz17Y3VycmVudFVzZXJ9XHJcbiAgICAgICAgLz4pfVxyXG4gICAgICAgIGJvZHk9eyhcclxuICAgICAgICAgIDxCb2R5XHJcbiAgICAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XHJcbiAgICAgICAgICAgIHRlcm09e2N1cnJlbnRVc2VyfVxyXG4gICAgICAgICAgICBwYWdlcz17cGFnZXN9XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICBuZXdzPXtmaXJtTmV3c31cclxuICAgICAgICAgICAgZXZlbnRzPXtmaXJtRXZlbnRzfVxyXG4gICAgICAgICAgICBpbnNpZ2h0PXtmaXJtSW5zaWdodHN9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhdGhuYW1lPXtgL2F1dGhvci8ke2N1cnJlbnRVc2VyfWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgc2lkZWJhcj17KDxTaWRlYmFyIGJpbz17YmlvfSBwcmFjdGljZXM9e3ByYWN0aWNlc30gLz4pfVxyXG4gICAgICAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zLCBxdWVyeSB9KSB7XHJcblxyXG4gIGNvbnN0IGZpcm1OZXdzQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShibG9nQXJ0aWNsZXNRdWVyeSg5OCksIHt9KTtcclxuICBjb25zdCBmaXJtRXZlbnRzQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShibG9nQXJ0aWNsZXNRdWVyeSg5OSksIHt9KTtcclxuICBjb25zdCBmaXJtSW5zaWdodHNDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGJsb2dBcnRpY2xlc1F1ZXJ5KDU5OSksIHt9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZpcm1OZXdzOiBmaXJtTmV3c0NvbnRlbnQgfHwgW10sXHJcbiAgICAgIGZpcm1FdmVudHM6IGZpcm1FdmVudHNDb250ZW50IHx8IFtdLFxyXG4gICAgICBmaXJtSW5zaWdodHM6IGZpcm1JbnNpZ2h0c0NvbnRlbnQgfHwgW10sXHJcbiAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UgfHwgMSxcclxuICAgICAgcGFnZXM6IHJlc3BvbnNlLnBhZ2VzIHx8IDEsXHJcbiAgICAgIHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMgfHwgW10sXHJcbiAgICAgIGF1dGhvckJpb1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=