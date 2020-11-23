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
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var __N_SSP = true;
function Home(_ref) {
  var seo = _ref.seo,
      posts = _ref.posts,
      locations = _ref.locations,
      corePractices = _ref.corePractices;
  console.log(locations);
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
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 9
    }
  })), __jsx(components_frontpage_new_dawn_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(components_frontpage_column_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    corePractices: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(corePractices, 'title'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(components_frontpage_full_width_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sortedPosts: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(posts, 'date'),
    sortedLocations: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(locations, 'id'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNlbyIsInBvc3RzIiwibG9jYXRpb25zIiwiY29yZVByYWN0aWNlcyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGFEZXNjIiwidHlwZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiLCJfX2h0bWwiLCJKU09OIiwic3RyaW5naWZ5IiwiYnVpbGRCdXNpbmVzc1NjaGVtYSIsInNvcnRCeUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJZSxTQUFTQSxJQUFULE9BS1o7QUFBQSxNQUpEQyxHQUlDLFFBSkRBLEdBSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSxNQUZEQyxTQUVDLFFBRkRBLFNBRUM7QUFBQSxNQUREQyxhQUNDLFFBRERBLGFBQ0M7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFDQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFDRSxTQUFLLEVBQUVGLEdBQUcsQ0FBQ00sS0FEYjtBQUVFLGVBQVcsRUFBRU4sR0FBRyxDQUFDTyxRQUZuQjtBQUdFLGFBQVMsRUFBQyxpQ0FIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUUsU0FERztBQUVUQyxTQUFHLEVBQUUsaUNBRkk7QUFHVEgsV0FBSyxFQUFFLHFCQUhFO0FBSVRJLGlCQUFXLEVBQUVWLEdBQUcsQ0FBQ08sUUFKUjtBQUtUSSxZQUFNLEVBQUUsQ0FDTjtBQUNFRixXQUFHLEVBQUUseUZBRFA7QUFFRUcsYUFBSyxFQUFFLEdBRlQ7QUFHRUMsY0FBTSxFQUFFLEdBSFY7QUFJRUMsV0FBRyxFQUFFO0FBSlAsT0FETSxDQUxDO0FBYVRDLGVBQVMsRUFBRTtBQWJGLEtBSmI7QUFtQkUsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxVQUREO0FBRVBDLFVBQUksRUFBRSxnQ0FGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQW5CWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUEwQkUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsb0JBRE47QUFFRSxRQUFJLEVBQUMscUJBRlA7QUFHRSwyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxpRkFBbUIsRUFBbEM7QUFBVixLQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0ExQkYsRUFpQ0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLEVBa0NFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkVBQUQ7QUFBZSxpQkFBYSxFQUFFQywrREFBUyxDQUFDcEIsYUFBRCxFQUFnQixPQUFoQixDQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLCtFQUFEO0FBQ0UsZUFBVyxFQUFFb0IsK0RBQVMsQ0FBQ3RCLEtBQUQsRUFBUSxNQUFSLENBRHhCO0FBRUUsbUJBQWUsRUFBRXNCLCtEQUFTLENBQUNyQixTQUFELEVBQVksSUFBWixDQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FsQ0YsRUF5Q0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNGLENBREY7QUE2Q0Q7S0FwRHVCSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk5Y2IyYjU3YmU0Y2ViOTAxMmQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgTmV3RGF3bkhlYWRlciBmcm9tICdjb21wb25lbnRzL2Zyb250cGFnZS9uZXctZGF3bi1oZWFkZXInO1xyXG5pbXBvcnQgQ29sdW1uQ29udGVudCBmcm9tICdjb21wb25lbnRzL2Zyb250cGFnZS9jb2x1bW4tY29udGVudCc7XHJcbmltcG9ydCBGdWxsV2lkdGhDb250ZW50IGZyb20gJ2NvbXBvbmVudHMvZnJvbnRwYWdlL2Z1bGwtd2lkdGgtY29udGVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgeyBoZWFkZXJzLCBzb3J0QnlLZXkgfSBmcm9tICd1dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IHsgYnVpbGRCdXNpbmVzc1NjaGVtYSB9IGZyb20gJ3V0aWxzL2pzb24tbGQtc2NoZW1hcydcclxuaW1wb3J0IGNsaWVudCBmcm9tICd1dGlscy9ncmFwaHFsLWNsaWVudCc7XHJcbmltcG9ydCB7IG1ldGFEYXRhUXVlcnksIGZpcm1OZXdzUXVlcnksIGZpcm1FdmVudHNRdWVyeSwgb2ZmaWNlTG9jYXRpb25zUXVlcnkgfSBmcm9tICdxdWVyaWVzL2hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7XHJcbiAgc2VvLFxyXG4gIHBvc3RzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBjb3JlUHJhY3RpY2VzXHJcbn0pIHtcclxuICBjb25zb2xlLmxvZyhsb2NhdGlvbnMpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9e3Nlby50aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17c2VvLm1ldGFEZXNjfVxyXG4gICAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vc2NhcmluY2lob2xsZW5iZWNrLmNvbS9cIlxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdHlwZTogJ3dlYnNpdGUnLFxyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zY2FyaW5jaWhvbGxlbmJlY2suY29tLycsXHJcbiAgICAgICAgICB0aXRsZTogJ1NjYXJpbmNpIEhvbGxlbmJlY2snLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHNlby5tZXRhRGVzYyxcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zaGhjc2dtdnNuZG14bXBxLm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS8yMDE4LzA1L25vLWltYWdlLWZvdW5kLWRpYW1vbmQucG5nJyxcclxuICAgICAgICAgICAgICB3aWR0aDogNzUwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgICAgICAgIGFsdDogJ1NjYXJpbmNpIEhvbGxlbmJlY2snLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHNpdGVfbmFtZTogJ1NjYXJpbmNpIEhvbGxlbmJlY2snLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHdpdHRlcj17e1xyXG4gICAgICAgICAgaGFuZGxlOiAnQFNfSF9MYXcnLFxyXG4gICAgICAgICAgc2l0ZTogJ2h0dHBzOi8vc2NhcmluY2lob2xsZW5iZWNrLmNvbScsXHJcbiAgICAgICAgICBjYXJkVHlwZTogJ1dpdGggYSBncm93aW5nIHByYWN0aWNlIG9mIG1vcmUgdGhhbiA3MCsgZXhwZXJpZW5jZWQgYXR0b3JuZXlzLCBTY2FyaW5jaSBIb2xsZW5iZWNrIGlzIGFuIGFsdGVybmF0aXZlIHRvIGEgTmF0aW9uYWwgMjUwIGxhdyBmaXJtLicsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAga2V5PVwiU2NhcmluY2lIb2xsZW5iZWNrXCJcclxuICAgICAgICAgIHR5cGU9J2FwcGxpY2F0aW9uL2xkK2pzb24nXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KGJ1aWxkQnVzaW5lc3NTY2hlbWEoKSkgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+IFxyXG4gICAgICA8TmV3RGF3bkhlYWRlciAvPlxyXG4gICAgICA8Q29udGFpbmVyPiAgICAgIFxyXG4gICAgICAgIDxDb2x1bW5Db250ZW50IGNvcmVQcmFjdGljZXM9e3NvcnRCeUtleShjb3JlUHJhY3RpY2VzLCAndGl0bGUnKX0gLz5cclxuICAgICAgICA8RnVsbFdpZHRoQ29udGVudFxyXG4gICAgICAgICAgc29ydGVkUG9zdHM9e3NvcnRCeUtleShwb3N0cywgJ2RhdGUnKX1cclxuICAgICAgICAgIHNvcnRlZExvY2F0aW9ucz17c29ydEJ5S2V5KGxvY2F0aW9ucywgJ2lkJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgW2NvcmVQcmFjdGljZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vY29yZS1wcmFjdGljZXMvbGlzdGAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSkgICAgXHJcbiAgXSk7XHJcblxyXG4gIC8qKiBBZGRpbmcgaW4gZ3JhcGhxbCBxdWVyaWVzICovXHJcbiAgLy8gaW1wb3J0IGNsaWVudCBmcm9tICd1dGlscy9ncmFwaHFsLWNsaWVudCc7XHJcbiAgLy8gaW1wb3J0IHsgbWV0YURhdGFRdWVyeSwgZmlybU5ld3NRdWVyeSwgZmlybUV2ZW50c1F1ZXJ5LCBvZmZpY2VMb2NhdGlvbnNRdWVyeSB9IGZyb20gJ3F1ZXJpZXMvaG9tZSc7XHJcbiAgY29uc3QgbWV0YURhdGFDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KG1ldGFEYXRhUXVlcnksIHt9KTtcclxuICBjb25zdCBmaXJtTmV3c0NvbnRlbnQgPSBhd2FpdCBjbGllbnQucXVlcnkoZmlybU5ld3NRdWVyeSwge30pO1xyXG4gIGNvbnN0IGZpcm1FdmVudHNDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGZpcm1FdmVudHNRdWVyeSwge30pO1xyXG4gIGNvbnN0IG9mZmljZUxvY2F0aW9uQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShvZmZpY2VMb2NhdGlvbnNRdWVyeSwge30pXHJcbiAgY29uc3QgZmlsdGVyZWROZXdzID0gZmlybU5ld3NDb250ZW50LmRhdGEuY2F0ZWdvcnkucG9zdHMuZWRnZXMuZmlsdGVyKChfLCBpKSA9PiBpIDw9IDIpXHJcbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBmaXJtRXZlbnRzQ29udGVudC5kYXRhLmNhdGVnb3J5LnBvc3RzLmVkZ2VzLmZpbHRlcigoXywgaSkgPT4gaSA8PSAyKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VvOiBtZXRhRGF0YUNvbnRlbnQuZGF0YS5wYWdlLnNlbyxcclxuICAgICAgcG9zdHM6IFsuLi5maWx0ZXJlZEV2ZW50cywgLi4uZmlsdGVyZWROZXdzXSxcclxuICAgICAgbG9jYXRpb25zOiBvZmZpY2VMb2NhdGlvbkNvbnRlbnQuZGF0YS5vZmZpY2VMb2NhdGlvbnMubm9kZXMsXHJcbiAgICAgIGNvcmVQcmFjdGljZXNcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9