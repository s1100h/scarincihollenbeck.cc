webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var components_frontpage_new_dawn_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/frontpage/new-dawn-header */ "./components/frontpage/new-dawn-header.js");
/* harmony import */ var components_frontpage_column_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/frontpage/column-content */ "./components/frontpage/column-content.js");
/* harmony import */ var components_frontpage_full_width_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/frontpage/full-width-content */ "./components/frontpage/full-width-content.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");
/* harmony import */ var utils_json_ld_schemas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/json-ld-schemas */ "./utils/json-ld-schemas.js");
/* harmony import */ var utils_graphql_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/graphql-client */ "./utils/graphql-client.js");
/* harmony import */ var queries_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! queries/home */ "./queries/home.js");
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var __N_SSP = true;
function Home(_ref) {
  var seo = _ref.seo,
      posts = _ref.posts,
      locations = _ref.locations,
      corePractices = _ref.corePractices;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: seo.title,
    description: seo.metaDescription,
    canonical: "https://scarincihollenbeck.com/",
    openGraph: {
      type: 'website',
      url: 'https://scarincihollenbeck.com/',
      title: 'Scarinci Hollenbeck',
      description: seo.metaDescription,
      images: [{
        url: 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png',
        width: 750,
        height: 350,
        alt: 'Scarinci Hollenbeck'
      }],
      site_name: 'Scarinci Hollenbeck'
    },
    twitter: {
      handle: '@S_H_Law',
      site: 'https://scarincihollenbeck.com',
      cardType: 'With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm.'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("script", {
    key: "ScarinciHollenbeck",
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(Object(utils_json_ld_schemas__WEBPACK_IMPORTED_MODULE_9__["buildBusinessSchema"])())
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx(components_frontpage_new_dawn_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(components_frontpage_column_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    corePractices: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(corePractices, 'title'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(components_frontpage_full_width_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sortedPosts: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(posts, 'date'),
    sortedLocations: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(locations.offices, 'id'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNlbyIsInBvc3RzIiwibG9jYXRpb25zIiwiY29yZVByYWN0aWNlcyIsInRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwidHlwZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiLCJfX2h0bWwiLCJKU09OIiwic3RyaW5naWZ5IiwiYnVpbGRCdXNpbmVzc1NjaGVtYSIsInNvcnRCeUtleSIsIm9mZmljZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxPQUtaO0FBQUEsTUFKREMsR0FJQyxRQUpEQSxHQUlDO0FBQUEsTUFIREMsS0FHQyxRQUhEQSxLQUdDO0FBQUEsTUFGREMsU0FFQyxRQUZEQSxTQUVDO0FBQUEsTUFEREMsYUFDQyxRQUREQSxhQUNDO0FBQ0QsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQ0UsU0FBSyxFQUFFSCxHQUFHLENBQUNJLEtBRGI7QUFFRSxlQUFXLEVBQUVKLEdBQUcsQ0FBQ0ssZUFGbkI7QUFHRSxhQUFTLEVBQUMsaUNBSFo7QUFJRSxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFLFNBREc7QUFFVEMsU0FBRyxFQUFFLGlDQUZJO0FBR1RILFdBQUssRUFBRSxxQkFIRTtBQUlUSSxpQkFBVyxFQUFFUixHQUFHLENBQUNLLGVBSlI7QUFLVEksWUFBTSxFQUFFLENBQ047QUFDRUYsV0FBRyxFQUFFLHlGQURQO0FBRUVHLGFBQUssRUFBRSxHQUZUO0FBR0VDLGNBQU0sRUFBRSxHQUhWO0FBSUVDLFdBQUcsRUFBRTtBQUpQLE9BRE0sQ0FMQztBQWFUQyxlQUFTLEVBQUU7QUFiRixLQUpiO0FBbUJFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsVUFERDtBQUVQQyxVQUFJLEVBQUUsZ0NBRkM7QUFHUEMsY0FBUSxFQUFFO0FBSEgsS0FuQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBMEJFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLG9CQUROO0FBRUUsUUFBSSxFQUFDLHFCQUZQO0FBR0UsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsaUZBQW1CLEVBQWxDO0FBQVYsS0FIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBMUJGLEVBaUNFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDRixFQWtDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJFQUFEO0FBQWUsaUJBQWEsRUFBRUMsK0RBQVMsQ0FBQ2xCLGFBQUQsRUFBZ0IsT0FBaEIsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywrRUFBRDtBQUNFLGVBQVcsRUFBRWtCLCtEQUFTLENBQUNwQixLQUFELEVBQVEsTUFBUixDQUR4QjtBQUVFLG1CQUFlLEVBQUVvQiwrREFBUyxDQUFDbkIsU0FBUyxDQUFDb0IsT0FBWCxFQUFvQixJQUFwQixDQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FsQ0YsRUF5Q0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNGLENBREY7QUE2Q0Q7S0FuRHVCdkIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZTBhYmJjNjBlY2ExYTJlYmY5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IE5ld0Rhd25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9mcm9udHBhZ2UvbmV3LWRhd24taGVhZGVyJztcclxuaW1wb3J0IENvbHVtbkNvbnRlbnQgZnJvbSAnY29tcG9uZW50cy9mcm9udHBhZ2UvY29sdW1uLWNvbnRlbnQnO1xyXG5pbXBvcnQgRnVsbFdpZHRoQ29udGVudCBmcm9tICdjb21wb25lbnRzL2Zyb250cGFnZS9mdWxsLXdpZHRoLWNvbnRlbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IHsgaGVhZGVycywgc29ydEJ5S2V5IH0gZnJvbSAndXRpbHMvaGVscGVycyc7XHJcbmltcG9ydCB7IGJ1aWxkQnVzaW5lc3NTY2hlbWEgfSBmcm9tICd1dGlscy9qc29uLWxkLXNjaGVtYXMnXHJcbmltcG9ydCBjbGllbnQgZnJvbSAndXRpbHMvZ3JhcGhxbC1jbGllbnQnO1xyXG5pbXBvcnQgeyBtZXRhRGF0YVF1ZXJ5LCBmaXJtTmV3c1F1ZXJ5LCBmaXJtRXZlbnRzUXVlcnksIG9mZmljZUxvY2F0aW9uc1F1ZXJ5IH0gZnJvbSAncXVlcmllcy9ob21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe1xyXG4gIHNlbyxcclxuICBwb3N0cyxcclxuICBsb2NhdGlvbnMsXHJcbiAgY29yZVByYWN0aWNlc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9e3Nlby50aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17c2VvLm1ldGFEZXNjcmlwdGlvbn1cclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL3NjYXJpbmNpaG9sbGVuYmVjay5jb20vXCJcclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHR5cGU6ICd3ZWJzaXRlJyxcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2NhcmluY2lob2xsZW5iZWNrLmNvbS8nLFxyXG4gICAgICAgICAgdGl0bGU6ICdTY2FyaW5jaSBIb2xsZW5iZWNrJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZW8ubWV0YURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NoaGNzZ212c25kbXhtcHEubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLzIwMTgvMDUvbm8taW1hZ2UtZm91bmQtZGlhbW9uZC5wbmcnLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA3NTAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgICAgICAgYWx0OiAnU2NhcmluY2kgSG9sbGVuYmVjaycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgc2l0ZV9uYW1lOiAnU2NhcmluY2kgSG9sbGVuYmVjaycsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6ICdAU19IX0xhdycsXHJcbiAgICAgICAgICBzaXRlOiAnaHR0cHM6Ly9zY2FyaW5jaWhvbGxlbmJlY2suY29tJyxcclxuICAgICAgICAgIGNhcmRUeXBlOiAnV2l0aCBhIGdyb3dpbmcgcHJhY3RpY2Ugb2YgbW9yZSB0aGFuIDcwKyBleHBlcmllbmNlZCBhdHRvcm5leXMsIFNjYXJpbmNpIEhvbGxlbmJlY2sgaXMgYW4gYWx0ZXJuYXRpdmUgdG8gYSBOYXRpb25hbCAyNTAgbGF3IGZpcm0uJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBrZXk9XCJTY2FyaW5jaUhvbGxlbmJlY2tcIlxyXG4gICAgICAgICAgdHlwZT0nYXBwbGljYXRpb24vbGQranNvbidcclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogSlNPTi5zdHJpbmdpZnkoYnVpbGRCdXNpbmVzc1NjaGVtYSgpKSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD4gXHJcbiAgICAgIDxOZXdEYXduSGVhZGVyIC8+XHJcbiAgICAgIDxDb250YWluZXI+ICAgICAgXHJcbiAgICAgICAgPENvbHVtbkNvbnRlbnQgY29yZVByYWN0aWNlcz17c29ydEJ5S2V5KGNvcmVQcmFjdGljZXMsICd0aXRsZScpfSAvPlxyXG4gICAgICAgIDxGdWxsV2lkdGhDb250ZW50XHJcbiAgICAgICAgICBzb3J0ZWRQb3N0cz17c29ydEJ5S2V5KHBvc3RzLCAnZGF0ZScpfVxyXG4gICAgICAgICAgc29ydGVkTG9jYXRpb25zPXtzb3J0QnlLZXkobG9jYXRpb25zLm9mZmljZXMsICdpZCcpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IFtzZW8sIG5ld3MsIGV2ZW50cywgbG9jYXRpb25zLCBjb3JlUHJhY3RpY2VzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9XUF9CQUNLRU5EfS93cC1qc29uL2Zyb250LXBhZ2UvbWV0YWAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSksXHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfV1BfQkFDS0VORH0vd3AtanNvbi9mcm9udC1wYWdlL25ld3NgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vZnJvbnQtcGFnZS9ldmVudHNgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vbG9jYXRpb24tcG9ydGFsL29mZmljZXNgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vY29yZS1wcmFjdGljZXMvbGlzdGAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSkgICAgXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IHBvc3RzID0gWy4uLm5ld3MsIC4uLmV2ZW50c107XHJcblxyXG4gIC8qKiBBZGRpbmcgaW4gZ3JhcGhxbCBxdWVyaWVzICovXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzZW8sXHJcbiAgICAgIHBvc3RzLFxyXG4gICAgICBsb2NhdGlvbnMsXHJcbiAgICAgIGNvcmVQcmFjdGljZXNcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9