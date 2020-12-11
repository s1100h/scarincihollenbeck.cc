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
/* harmony import */ var components_error_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/error-message */ "./components/error-message.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJyZXN1bHRzIiwicGFnZSIsInBhZ2VzIiwiYXV0aG9yQmlvIiwiZmlybU5ld3MiLCJmaXJtRXZlbnRzIiwiZmlybUluc2lnaHRzIiwiYmlvIiwicHJhY3RpY2VzIiwiY3VycmVudFVzZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVlLFNBQVNBLE1BQVQsT0FRWjtBQUFBLE1BUERDLE9BT0MsUUFQREEsT0FPQztBQUFBLE1BTkRDLElBTUMsUUFOREEsSUFNQztBQUFBLE1BTERDLEtBS0MsUUFMREEsS0FLQztBQUFBLE1BSkRDLFNBSUMsUUFKREEsU0FJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLFlBQ0MsUUFEREEsWUFDQztBQUFBLE1BRU9DLEdBRlAsR0FFdUNKLFNBRnZDLENBRU9JLEdBRlA7QUFBQSxNQUVZQyxTQUZaLEdBRXVDTCxTQUZ2QyxDQUVZSyxTQUZaO0FBQUEsTUFFdUJDLFdBRnZCLEdBRXVDTixTQUZ2QyxDQUV1Qk0sV0FGdkI7O0FBSUQsTUFBR1QsT0FBTyxDQUFDVSxNQUFSLElBQWlCLENBQXBCLEVBQXVCO0FBQ3JCLFdBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREgsQ0FERjtBQUtEOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFTLFlBQVEsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4REFBRDtBQUNFLFVBQU0sRUFBRyxNQUFDLDhEQUFEO0FBQ1AsZ0JBQVUsRUFBRSxDQUFDRCxXQUFELEVBQWNSLElBQWQsQ0FETDtBQUVQLGtCQUFZLEVBQUVRLFdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURYO0FBS0UsUUFBSSxFQUNGLE1BQUMsZ0VBQUQ7QUFDRSxhQUFPLEVBQUVULE9BRFg7QUFFRSxVQUFJLEVBQUVTLFdBRlI7QUFHRSxXQUFLLEVBQUVQLEtBSFQ7QUFJRSxpQkFBVyxFQUFFRCxJQUpmO0FBS0UsVUFBSSxFQUFFRyxRQUxSO0FBTUUsWUFBTSxFQUFFQyxVQU5WO0FBT0UsYUFBTyxFQUFFQyxZQVBYO0FBUUUsY0FBUSxvQkFBYUcsV0FBYixDQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOSjtBQWlCRSxXQUFPLEVBQUcsTUFBQyxpRUFBRDtBQUFTLFNBQUcsRUFBRUYsR0FBZDtBQUFtQixlQUFTLEVBQUVDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFqQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBcUJFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixDQURGO0FBeUJEO0tBN0N1QlQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRob3IvW3NsdWddLmQyMzgzYTkyNzkzNGYzMjY3M2QzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICdjb21wb25lbnRzL2JyZWFkY3J1bWJzJztcclxuaW1wb3J0IEFyY2hpdmVMYXlvdXQgZnJvbSAnbGF5b3V0cy9hcmNoaXZlLWxheW91dCc7XHJcbmltcG9ydCBCb2R5IGZyb20gJ2NvbXBvbmVudHMvYXJjaGl2ZXMvYm9keSc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJ2NvbXBvbmVudHMvYXV0aG9yL3NpZGViYXInO1xyXG5pbXBvcnQgU2l0ZUxvYWRlciBmcm9tICdjb21wb25lbnRzL3NpdGUtbG9hZGVyJztcclxuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gJ3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJ3V0aWxzL2dyYXBocWwtY2xpZW50JztcclxuaW1wb3J0IHsgYmxvZ0FydGljbGVzUXVlcnkgfSBmcm9tICdxdWVyaWVzL2hvbWUnO1xyXG5cclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICdjb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aG9yKHtcclxuICByZXN1bHRzLFxyXG4gIHBhZ2UsXHJcbiAgcGFnZXMsXHJcbiAgYXV0aG9yQmlvLFxyXG4gIGZpcm1OZXdzLFxyXG4gIGZpcm1FdmVudHMsXHJcbiAgZmlybUluc2lnaHRzXHJcbn0pIHtcclxuXHJcbiAgY29uc3QgeyBiaW8sIHByYWN0aWNlcywgY3VycmVudFVzZXIgfSA9IGF1dGhvckJpb1xyXG5cclxuICBpZihyZXN1bHRzLmxlbmd0aCA8PTApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBteS01XCI+XHJcbiAgICAgICAgIDxTaXRlTG9hZGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgIDxOZXh0U2VvIG5vZm9sbG93IC8+XHJcbiAgICAgIDxBcmNoaXZlTGF5b3V0XHJcbiAgICAgICAgaGVhZGVyPXsoPEJyZWFkY3J1bWJzXHJcbiAgICAgICAgICBicmVhZENydW1iPXtbY3VycmVudFVzZXIsIHBhZ2VdfVxyXG4gICAgICAgICAgY2F0ZWdvcnlTbHVnPXtjdXJyZW50VXNlcn1cclxuICAgICAgICAvPil9XHJcbiAgICAgICAgYm9keT17KFxyXG4gICAgICAgICAgPEJvZHlcclxuICAgICAgICAgICAgcmVzdWx0cz17cmVzdWx0c31cclxuICAgICAgICAgICAgdGVybT17Y3VycmVudFVzZXJ9XHJcbiAgICAgICAgICAgIHBhZ2VzPXtwYWdlc31cclxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgIG5ld3M9e2Zpcm1OZXdzfVxyXG4gICAgICAgICAgICBldmVudHM9e2Zpcm1FdmVudHN9XHJcbiAgICAgICAgICAgIGluc2lnaHQ9e2Zpcm1JbnNpZ2h0c30gICAgICAgICAgICBcclxuICAgICAgICAgICAgcGF0aG5hbWU9e2AvYXV0aG9yLyR7Y3VycmVudFVzZXJ9YH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBzaWRlYmFyPXsoPFNpZGViYXIgYmlvPXtiaW99IHByYWN0aWNlcz17cHJhY3RpY2VzfSAvPil9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IFtyZXNwb25zZSwgYXV0aG9yQmlvXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9XUF9CQUNLRU5EfS93cC1qc29uL2F1dGhvci9wb3N0cy8ke3BhcmFtcy5zbHVnfS8ke3F1ZXJ5LnBhZ2UgfHwgMX1gLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vYXV0aG9yL2Jpby8ke3BhcmFtcy5zbHVnfWAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICBdKTtcclxuXHJcbiAgY29uc3QgZmlybU5ld3NDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGJsb2dBcnRpY2xlc1F1ZXJ5KDk4KSwge30pO1xyXG4gIGNvbnN0IGZpcm1FdmVudHNDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGJsb2dBcnRpY2xlc1F1ZXJ5KDk5KSwge30pO1xyXG4gIGNvbnN0IGZpcm1JbnNpZ2h0c0NvbnRlbnQgPSBhd2FpdCBjbGllbnQucXVlcnkoYmxvZ0FydGljbGVzUXVlcnkoNTk5KSwge30pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZmlybU5ld3M6IGZpcm1OZXdzQ29udGVudCB8fCBbXSxcclxuICAgICAgZmlybUV2ZW50czogZmlybUV2ZW50c0NvbnRlbnQgfHwgW10sXHJcbiAgICAgIGZpcm1JbnNpZ2h0czogZmlybUluc2lnaHRzQ29udGVudCB8fCBbXSxcclxuICAgICAgcGFnZTogcXVlcnkucGFnZSB8fCAxLFxyXG4gICAgICBwYWdlczogcmVzcG9uc2UucGFnZXMgfHwgMSxcclxuICAgICAgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cyB8fCBbXSxcclxuICAgICAgYXV0aG9yQmlvXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==