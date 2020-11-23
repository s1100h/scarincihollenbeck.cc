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
/* harmony import */ var queries_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! queries/home */ "./queries/home.js");
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
    description: seo.metaDesc,
    canonical: "https://scarincihollenbeck.com/",
    openGraph: {
      type: 'website',
      url: 'https://scarincihollenbeck.com/',
      title: 'Scarinci Hollenbeck',
      description: seo.metaDesc,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNlbyIsInBvc3RzIiwibG9jYXRpb25zIiwiY29yZVByYWN0aWNlcyIsInRpdGxlIiwibWV0YURlc2MiLCJ0eXBlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsIl9faHRtbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJidWlsZEJ1c2luZXNzU2NoZW1hIiwic29ydEJ5S2V5Iiwib2ZmaWNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTQSxJQUFULE9BS1o7QUFBQSxNQUpEQyxHQUlDLFFBSkRBLEdBSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSxNQUZEQyxTQUVDLFFBRkRBLFNBRUM7QUFBQSxNQUREQyxhQUNDLFFBRERBLGFBQ0M7QUFDRCxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFDRSxTQUFLLEVBQUVILEdBQUcsQ0FBQ0ksS0FEYjtBQUVFLGVBQVcsRUFBRUosR0FBRyxDQUFDSyxRQUZuQjtBQUdFLGFBQVMsRUFBQyxpQ0FIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUUsU0FERztBQUVUQyxTQUFHLEVBQUUsaUNBRkk7QUFHVEgsV0FBSyxFQUFFLHFCQUhFO0FBSVRJLGlCQUFXLEVBQUVSLEdBQUcsQ0FBQ0ssUUFKUjtBQUtUSSxZQUFNLEVBQUUsQ0FDTjtBQUNFRixXQUFHLEVBQUUseUZBRFA7QUFFRUcsYUFBSyxFQUFFLEdBRlQ7QUFHRUMsY0FBTSxFQUFFLEdBSFY7QUFJRUMsV0FBRyxFQUFFO0FBSlAsT0FETSxDQUxDO0FBYVRDLGVBQVMsRUFBRTtBQWJGLEtBSmI7QUFtQkUsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxVQUREO0FBRVBDLFVBQUksRUFBRSxnQ0FGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQW5CWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUEwQkUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsb0JBRE47QUFFRSxRQUFJLEVBQUMscUJBRlA7QUFHRSwyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxpRkFBbUIsRUFBbEM7QUFBVixLQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0ExQkYsRUFpQ0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLEVBa0NFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkVBQUQ7QUFBZSxpQkFBYSxFQUFFQywrREFBUyxDQUFDbEIsYUFBRCxFQUFnQixPQUFoQixDQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLCtFQUFEO0FBQ0UsZUFBVyxFQUFFa0IsK0RBQVMsQ0FBQ3BCLEtBQUQsRUFBUSxNQUFSLENBRHhCO0FBRUUsbUJBQWUsRUFBRW9CLCtEQUFTLENBQUNuQixTQUFTLENBQUNvQixPQUFYLEVBQW9CLElBQXBCLENBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWxDRixFQXlDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6Q0YsQ0FERjtBQTZDRDtLQW5EdUJ2QixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjMGZhNDg5ODU0Mjk5ZGVlMzY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgTmV3RGF3bkhlYWRlciBmcm9tICdjb21wb25lbnRzL2Zyb250cGFnZS9uZXctZGF3bi1oZWFkZXInO1xyXG5pbXBvcnQgQ29sdW1uQ29udGVudCBmcm9tICdjb21wb25lbnRzL2Zyb250cGFnZS9jb2x1bW4tY29udGVudCc7XHJcbmltcG9ydCBGdWxsV2lkdGhDb250ZW50IGZyb20gJ2NvbXBvbmVudHMvZnJvbnRwYWdlL2Z1bGwtd2lkdGgtY29udGVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgeyBoZWFkZXJzLCBzb3J0QnlLZXkgfSBmcm9tICd1dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IHsgYnVpbGRCdXNpbmVzc1NjaGVtYSB9IGZyb20gJ3V0aWxzL2pzb24tbGQtc2NoZW1hcydcclxuaW1wb3J0IGNsaWVudCBmcm9tICd1dGlscy9ncmFwaHFsLWNsaWVudCc7XHJcbmltcG9ydCB7IG1ldGFEYXRhUXVlcnksIGZpcm1OZXdzUXVlcnksIGZpcm1FdmVudHNRdWVyeSwgb2ZmaWNlTG9jYXRpb25zUXVlcnkgfSBmcm9tICdxdWVyaWVzL2hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7XHJcbiAgc2VvLFxyXG4gIHBvc3RzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBjb3JlUHJhY3RpY2VzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5leHRTZW9cclxuICAgICAgICB0aXRsZT17c2VvLnRpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtzZW8ubWV0YURlc2N9XHJcbiAgICAgICAgY2Fub25pY2FsPVwiaHR0cHM6Ly9zY2FyaW5jaWhvbGxlbmJlY2suY29tL1wiXHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICB0eXBlOiAnd2Vic2l0ZScsXHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL3NjYXJpbmNpaG9sbGVuYmVjay5jb20vJyxcclxuICAgICAgICAgIHRpdGxlOiAnU2NhcmluY2kgSG9sbGVuYmVjaycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogc2VvLm1ldGFEZXNjLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NoaGNzZ212c25kbXhtcHEubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLzIwMTgvMDUvbm8taW1hZ2UtZm91bmQtZGlhbW9uZC5wbmcnLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA3NTAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgICAgICAgYWx0OiAnU2NhcmluY2kgSG9sbGVuYmVjaycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgc2l0ZV9uYW1lOiAnU2NhcmluY2kgSG9sbGVuYmVjaycsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6ICdAU19IX0xhdycsXHJcbiAgICAgICAgICBzaXRlOiAnaHR0cHM6Ly9zY2FyaW5jaWhvbGxlbmJlY2suY29tJyxcclxuICAgICAgICAgIGNhcmRUeXBlOiAnV2l0aCBhIGdyb3dpbmcgcHJhY3RpY2Ugb2YgbW9yZSB0aGFuIDcwKyBleHBlcmllbmNlZCBhdHRvcm5leXMsIFNjYXJpbmNpIEhvbGxlbmJlY2sgaXMgYW4gYWx0ZXJuYXRpdmUgdG8gYSBOYXRpb25hbCAyNTAgbGF3IGZpcm0uJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBrZXk9XCJTY2FyaW5jaUhvbGxlbmJlY2tcIlxyXG4gICAgICAgICAgdHlwZT0nYXBwbGljYXRpb24vbGQranNvbidcclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogSlNPTi5zdHJpbmdpZnkoYnVpbGRCdXNpbmVzc1NjaGVtYSgpKSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD4gXHJcbiAgICAgIDxOZXdEYXduSGVhZGVyIC8+XHJcbiAgICAgIDxDb250YWluZXI+ICAgICAgXHJcbiAgICAgICAgPENvbHVtbkNvbnRlbnQgY29yZVByYWN0aWNlcz17c29ydEJ5S2V5KGNvcmVQcmFjdGljZXMsICd0aXRsZScpfSAvPlxyXG4gICAgICAgIDxGdWxsV2lkdGhDb250ZW50XHJcbiAgICAgICAgICBzb3J0ZWRQb3N0cz17c29ydEJ5S2V5KHBvc3RzLCAnZGF0ZScpfVxyXG4gICAgICAgICAgc29ydGVkTG9jYXRpb25zPXtzb3J0QnlLZXkobG9jYXRpb25zLm9mZmljZXMsICdpZCcpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IFtzZW8sIG5ld3MsIGV2ZW50cywgbG9jYXRpb25zLCBjb3JlUHJhY3RpY2VzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9XUF9CQUNLRU5EfS93cC1qc29uL2Zyb250LXBhZ2UvbWV0YWAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSksXHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfV1BfQkFDS0VORH0vd3AtanNvbi9mcm9udC1wYWdlL25ld3NgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vZnJvbnQtcGFnZS9ldmVudHNgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vbG9jYXRpb24tcG9ydGFsL29mZmljZXNgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vY29yZS1wcmFjdGljZXMvbGlzdGAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSkgICAgXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IHBvc3RzID0gWy4uLm5ld3MsIC4uLmV2ZW50c107XHJcblxyXG4gIC8qKiBBZGRpbmcgaW4gZ3JhcGhxbCBxdWVyaWVzICovXHJcbiAgLy8gaW1wb3J0IGNsaWVudCBmcm9tICd1dGlscy9ncmFwaHFsLWNsaWVudCc7XHJcbiAgLy8gaW1wb3J0IHsgbWV0YURhdGFRdWVyeSwgZmlybU5ld3NRdWVyeSwgZmlybUV2ZW50c1F1ZXJ5LCBvZmZpY2VMb2NhdGlvbnNRdWVyeSB9IGZyb20gJ3F1ZXJpZXMvaG9tZSc7XHJcbiAgY29uc3QgbWV0YURhdGFDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KG1ldGFEYXRhUXVlcnksIHt9KTtcclxuXHJcbiAgY29uc29sZS5sb2cobWV0YURhdGFDb250ZW50LmRhdGEucGFnZS5zZW8udGl0bGUpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VvLFxyXG4gICAgICBwb3N0cyxcclxuICAgICAgbG9jYXRpb25zLFxyXG4gICAgICBjb3JlUHJhY3RpY2VzXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==