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
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/breadcrumbs */ "./components/breadcrumbs.js");
/* harmony import */ var layouts_archive_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/archive-layout */ "./layouts/archive-layout.js");
/* harmony import */ var components_archives_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/archives/body */ "./components/archives/body.js");
/* harmony import */ var components_author_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/author/sidebar */ "./components/author/sidebar.js");
/* harmony import */ var components_site_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/site-loader */ "./components/site-loader.js");
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
        lineNumber: 30,
        columnNumber: 7
      }
    }, __jsx(components_site_loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 10
      }
    }));
  }

  return __jsx("div", {
    className: "mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    nofollow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(layouts_archive_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    header: __jsx(components_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      breadCrumb: [currentUser, page],
      categorySlug: currentUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 18
      }
    }),
    body: __jsx(components_archives_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 45,
        columnNumber: 11
      }
    }),
    sidebar: __jsx(components_author_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      bio: bio,
      practices: practices,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJyZXN1bHRzIiwicGFnZSIsInBhZ2VzIiwiYXV0aG9yQmlvIiwiZmlybU5ld3MiLCJmaXJtRXZlbnRzIiwiZmlybUluc2lnaHRzIiwiYmlvIiwicHJhY3RpY2VzIiwiY3VycmVudFVzZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9lLFNBQVNBLE1BQVQsT0FRWjtBQUFBLE1BUERDLE9BT0MsUUFQREEsT0FPQztBQUFBLE1BTkRDLElBTUMsUUFOREEsSUFNQztBQUFBLE1BTERDLEtBS0MsUUFMREEsS0FLQztBQUFBLE1BSkRDLFNBSUMsUUFKREEsU0FJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLFlBQ0MsUUFEREEsWUFDQztBQUFBLE1BRU9DLEdBRlAsR0FFdUNKLFNBRnZDLENBRU9JLEdBRlA7QUFBQSxNQUVZQyxTQUZaLEdBRXVDTCxTQUZ2QyxDQUVZSyxTQUZaO0FBQUEsTUFFdUJDLFdBRnZCLEdBRXVDTixTQUZ2QyxDQUV1Qk0sV0FGdkI7O0FBSUQsTUFBR1QsT0FBTyxDQUFDVSxNQUFSLElBQWlCLENBQXBCLEVBQXVCO0FBQ3JCLFdBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREgsQ0FERjtBQUtEOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFTLFlBQVEsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4REFBRDtBQUNFLFVBQU0sRUFBRyxNQUFDLDhEQUFEO0FBQ1AsZ0JBQVUsRUFBRSxDQUFDRCxXQUFELEVBQWNSLElBQWQsQ0FETDtBQUVQLGtCQUFZLEVBQUVRLFdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURYO0FBS0UsUUFBSSxFQUNGLE1BQUMsZ0VBQUQ7QUFDRSxhQUFPLEVBQUVULE9BRFg7QUFFRSxVQUFJLEVBQUVTLFdBRlI7QUFHRSxXQUFLLEVBQUVQLEtBSFQ7QUFJRSxpQkFBVyxFQUFFRCxJQUpmO0FBS0UsVUFBSSxFQUFFRyxRQUxSO0FBTUUsWUFBTSxFQUFFQyxVQU5WO0FBT0UsYUFBTyxFQUFFQyxZQVBYO0FBUUUsY0FBUSxvQkFBYUcsV0FBYixDQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOSjtBQWlCRSxXQUFPLEVBQUcsTUFBQyxpRUFBRDtBQUFTLFNBQUcsRUFBRUYsR0FBZDtBQUFtQixlQUFTLEVBQUVDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFqQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBcUJFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixDQURGO0FBeUJEO0tBN0N1QlQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRob3IvW3NsdWddLjA5MjQyNTRmNDg4Mjg2ZGI0MGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICdjb21wb25lbnRzL2JyZWFkY3J1bWJzJztcclxuaW1wb3J0IEFyY2hpdmVMYXlvdXQgZnJvbSAnbGF5b3V0cy9hcmNoaXZlLWxheW91dCc7XHJcbmltcG9ydCBCb2R5IGZyb20gJ2NvbXBvbmVudHMvYXJjaGl2ZXMvYm9keSc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJ2NvbXBvbmVudHMvYXV0aG9yL3NpZGViYXInO1xyXG5pbXBvcnQgU2l0ZUxvYWRlciBmcm9tICdjb21wb25lbnRzL3NpdGUtbG9hZGVyJztcclxuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gJ3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJ3V0aWxzL2dyYXBocWwtY2xpZW50JztcclxuaW1wb3J0IHsgYmxvZ0FydGljbGVzUXVlcnkgfSBmcm9tICdxdWVyaWVzL2hvbWUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3Ioe1xyXG4gIHJlc3VsdHMsXHJcbiAgcGFnZSxcclxuICBwYWdlcyxcclxuICBhdXRob3JCaW8sXHJcbiAgZmlybU5ld3MsXHJcbiAgZmlybUV2ZW50cyxcclxuICBmaXJtSW5zaWdodHNcclxufSkge1xyXG5cclxuICBjb25zdCB7IGJpbywgcHJhY3RpY2VzLCBjdXJyZW50VXNlciB9ID0gYXV0aG9yQmlvXHJcblxyXG4gIGlmKHJlc3VsdHMubGVuZ3RoIDw9MCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IG15LTVcIj5cclxuICAgICAgICAgPFNpdGVMb2FkZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgPE5leHRTZW8gbm9mb2xsb3cgLz5cclxuICAgICAgPEFyY2hpdmVMYXlvdXRcclxuICAgICAgICBoZWFkZXI9eyg8QnJlYWRjcnVtYnNcclxuICAgICAgICAgIGJyZWFkQ3J1bWI9e1tjdXJyZW50VXNlciwgcGFnZV19XHJcbiAgICAgICAgICBjYXRlZ29yeVNsdWc9e2N1cnJlbnRVc2VyfVxyXG4gICAgICAgIC8+KX1cclxuICAgICAgICBib2R5PXsoXHJcbiAgICAgICAgICA8Qm9keVxyXG4gICAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICAgICAgICB0ZXJtPXtjdXJyZW50VXNlcn1cclxuICAgICAgICAgICAgcGFnZXM9e3BhZ2VzfVxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZX1cclxuICAgICAgICAgICAgbmV3cz17ZmlybU5ld3N9XHJcbiAgICAgICAgICAgIGV2ZW50cz17ZmlybUV2ZW50c31cclxuICAgICAgICAgICAgaW5zaWdodD17ZmlybUluc2lnaHRzfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYXRobmFtZT17YC9hdXRob3IvJHtjdXJyZW50VXNlcn1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHNpZGViYXI9eyg8U2lkZWJhciBiaW89e2Jpb30gcHJhY3RpY2VzPXtwcmFjdGljZXN9IC8+KX1cclxuICAgICAgLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBhdXRob3JCaW9dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vYXV0aG9yL3Bvc3RzLyR7cGFyYW1zLnNsdWd9LyR7cXVlcnkucGFnZSB8fCAxfWAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSksXHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfV1BfQkFDS0VORH0vd3AtanNvbi9hdXRob3IvYmlvLyR7cGFyYW1zLnNsdWd9YCwgeyBoZWFkZXJzIH0pLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBmaXJtTmV3c0NvbnRlbnQgPSBhd2FpdCBjbGllbnQucXVlcnkoYmxvZ0FydGljbGVzUXVlcnkoOTgpLCB7fSk7XHJcbiAgY29uc3QgZmlybUV2ZW50c0NvbnRlbnQgPSBhd2FpdCBjbGllbnQucXVlcnkoYmxvZ0FydGljbGVzUXVlcnkoOTkpLCB7fSk7XHJcbiAgY29uc3QgZmlybUluc2lnaHRzQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShibG9nQXJ0aWNsZXNRdWVyeSg1OTkpLCB7fSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmaXJtTmV3czogZmlybU5ld3NDb250ZW50IHx8IFtdLFxyXG4gICAgICBmaXJtRXZlbnRzOiBmaXJtRXZlbnRzQ29udGVudCB8fCBbXSxcclxuICAgICAgZmlybUluc2lnaHRzOiBmaXJtSW5zaWdodHNDb250ZW50IHx8IFtdLFxyXG4gICAgICBwYWdlOiBxdWVyeS5wYWdlIHx8IDEsXHJcbiAgICAgIHBhZ2VzOiByZXNwb25zZS5wYWdlcyB8fCAxLFxyXG4gICAgICByZXN1bHRzOiByZXNwb25zZS5yZXN1bHRzIHx8IFtdLFxyXG4gICAgICBhdXRob3JCaW9cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9