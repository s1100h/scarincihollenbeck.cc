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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNlbyIsInBvc3RzIiwibG9jYXRpb25zIiwiY29yZVByYWN0aWNlcyIsInRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwidHlwZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiLCJfX2h0bWwiLCJKU09OIiwic3RyaW5naWZ5IiwiYnVpbGRCdXNpbmVzc1NjaGVtYSIsInNvcnRCeUtleSIsIm9mZmljZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxPQUtaO0FBQUEsTUFKREMsR0FJQyxRQUpEQSxHQUlDO0FBQUEsTUFIREMsS0FHQyxRQUhEQSxLQUdDO0FBQUEsTUFGREMsU0FFQyxRQUZEQSxTQUVDO0FBQUEsTUFEREMsYUFDQyxRQUREQSxhQUNDO0FBQ0QsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQ0UsU0FBSyxFQUFFSCxHQUFHLENBQUNJLEtBRGI7QUFFRSxlQUFXLEVBQUVKLEdBQUcsQ0FBQ0ssZUFGbkI7QUFHRSxhQUFTLEVBQUMsaUNBSFo7QUFJRSxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFLFNBREc7QUFFVEMsU0FBRyxFQUFFLGlDQUZJO0FBR1RILFdBQUssRUFBRSxxQkFIRTtBQUlUSSxpQkFBVyxFQUFFUixHQUFHLENBQUNLLGVBSlI7QUFLVEksWUFBTSxFQUFFLENBQ047QUFDRUYsV0FBRyxFQUFFLHlGQURQO0FBRUVHLGFBQUssRUFBRSxHQUZUO0FBR0VDLGNBQU0sRUFBRSxHQUhWO0FBSUVDLFdBQUcsRUFBRTtBQUpQLE9BRE0sQ0FMQztBQWFUQyxlQUFTLEVBQUU7QUFiRixLQUpiO0FBbUJFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsVUFERDtBQUVQQyxVQUFJLEVBQUUsZ0NBRkM7QUFHUEMsY0FBUSxFQUFFO0FBSEgsS0FuQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBMEJFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLG9CQUROO0FBRUUsUUFBSSxFQUFDLHFCQUZQO0FBR0UsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsaUZBQW1CLEVBQWxDO0FBQVYsS0FIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBMUJGLEVBaUNFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDRixFQWtDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJFQUFEO0FBQWUsaUJBQWEsRUFBRUMsK0RBQVMsQ0FBQ2xCLGFBQUQsRUFBZ0IsT0FBaEIsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywrRUFBRDtBQUNFLGVBQVcsRUFBRWtCLCtEQUFTLENBQUNwQixLQUFELEVBQVEsTUFBUixDQUR4QjtBQUVFLG1CQUFlLEVBQUVvQiwrREFBUyxDQUFDbkIsU0FBUyxDQUFDb0IsT0FBWCxFQUFvQixJQUFwQixDQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FsQ0YsRUF5Q0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNGLENBREY7QUE2Q0Q7S0FuRHVCdkIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZmI1MjRhYmQ4NjVjZTJmMTI5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IE5ld0Rhd25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9mcm9udHBhZ2UvbmV3LWRhd24taGVhZGVyJztcclxuaW1wb3J0IENvbHVtbkNvbnRlbnQgZnJvbSAnY29tcG9uZW50cy9mcm9udHBhZ2UvY29sdW1uLWNvbnRlbnQnO1xyXG5pbXBvcnQgRnVsbFdpZHRoQ29udGVudCBmcm9tICdjb21wb25lbnRzL2Zyb250cGFnZS9mdWxsLXdpZHRoLWNvbnRlbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IHsgaGVhZGVycywgc29ydEJ5S2V5IH0gZnJvbSAndXRpbHMvaGVscGVycyc7XHJcbmltcG9ydCB7IGJ1aWxkQnVzaW5lc3NTY2hlbWEgfSBmcm9tICd1dGlscy9qc29uLWxkLXNjaGVtYXMnXHJcbmltcG9ydCBjbGllbnQgZnJvbSAndXRpbHMvZ3JhcGhxbC1jbGllbnQnO1xyXG5pbXBvcnQgeyBib2R5UXVlcnksIGZpcm1OZXdzUXVlcnkgfSBmcm9tICdxdWVyaWVzL2hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7XHJcbiAgc2VvLFxyXG4gIHBvc3RzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBjb3JlUHJhY3RpY2VzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5leHRTZW9cclxuICAgICAgICB0aXRsZT17c2VvLnRpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtzZW8ubWV0YURlc2NyaXB0aW9ufVxyXG4gICAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vc2NhcmluY2lob2xsZW5iZWNrLmNvbS9cIlxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdHlwZTogJ3dlYnNpdGUnLFxyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zY2FyaW5jaWhvbGxlbmJlY2suY29tLycsXHJcbiAgICAgICAgICB0aXRsZTogJ1NjYXJpbmNpIEhvbGxlbmJlY2snLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHNlby5tZXRhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2hoY3NnbXZzbmRteG1wcS5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vMjAxOC8wNS9uby1pbWFnZS1mb3VuZC1kaWFtb25kLnBuZycsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDc1MCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgICAgICBhbHQ6ICdTY2FyaW5jaSBIb2xsZW5iZWNrJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBzaXRlX25hbWU6ICdTY2FyaW5jaSBIb2xsZW5iZWNrJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHR3aXR0ZXI9e3tcclxuICAgICAgICAgIGhhbmRsZTogJ0BTX0hfTGF3JyxcclxuICAgICAgICAgIHNpdGU6ICdodHRwczovL3NjYXJpbmNpaG9sbGVuYmVjay5jb20nLFxyXG4gICAgICAgICAgY2FyZFR5cGU6ICdXaXRoIGEgZ3Jvd2luZyBwcmFjdGljZSBvZiBtb3JlIHRoYW4gNzArIGV4cGVyaWVuY2VkIGF0dG9ybmV5cywgU2NhcmluY2kgSG9sbGVuYmVjayBpcyBhbiBhbHRlcm5hdGl2ZSB0byBhIE5hdGlvbmFsIDI1MCBsYXcgZmlybS4nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIGtleT1cIlNjYXJpbmNpSG9sbGVuYmVja1wiXHJcbiAgICAgICAgICB0eXBlPSdhcHBsaWNhdGlvbi9sZCtqc29uJ1xyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBKU09OLnN0cmluZ2lmeShidWlsZEJ1c2luZXNzU2NoZW1hKCkpIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPiBcclxuICAgICAgPE5ld0Rhd25IZWFkZXIgLz5cclxuICAgICAgPENvbnRhaW5lcj4gICAgICBcclxuICAgICAgICA8Q29sdW1uQ29udGVudCBjb3JlUHJhY3RpY2VzPXtzb3J0QnlLZXkoY29yZVByYWN0aWNlcywgJ3RpdGxlJyl9IC8+XHJcbiAgICAgICAgPEZ1bGxXaWR0aENvbnRlbnRcclxuICAgICAgICAgIHNvcnRlZFBvc3RzPXtzb3J0QnlLZXkocG9zdHMsICdkYXRlJyl9XHJcbiAgICAgICAgICBzb3J0ZWRMb2NhdGlvbnM9e3NvcnRCeUtleShsb2NhdGlvbnMub2ZmaWNlcywgJ2lkJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgW3NlbywgbmV3cywgZXZlbnRzLCBsb2NhdGlvbnMsIGNvcmVQcmFjdGljZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vZnJvbnQtcGFnZS9tZXRhYCwgeyBoZWFkZXJzIH0pLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKSxcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9XUF9CQUNLRU5EfS93cC1qc29uL2Zyb250LXBhZ2UvbmV3c2AsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSksXHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfV1BfQkFDS0VORH0vd3AtanNvbi9mcm9udC1wYWdlL2V2ZW50c2AsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSksXHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfV1BfQkFDS0VORH0vd3AtanNvbi9sb2NhdGlvbi1wb3J0YWwvb2ZmaWNlc2AsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSksXHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfV1BfQkFDS0VORH0vd3AtanNvbi9jb3JlLXByYWN0aWNlcy9saXN0YCwgeyBoZWFkZXJzIH0pLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKSAgICBcclxuICBdKTtcclxuXHJcbiAgY29uc3QgcG9zdHMgPSBbLi4ubmV3cywgLi4uZXZlbnRzXTtcclxuXHJcbiAgLyoqIEFkZGluZyBpbiBncmFwaHFsIHF1ZXJpZXMgKi9cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlbyxcclxuICAgICAgcG9zdHMsXHJcbiAgICAgIGxvY2F0aW9ucyxcclxuICAgICAgY29yZVByYWN0aWNlc1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=