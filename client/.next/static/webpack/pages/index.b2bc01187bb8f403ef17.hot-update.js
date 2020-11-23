webpackHotUpdate_N_E("pages/index",{

/***/ "./components/frontpage/full-width-content.js":
/*!****************************************************!*\
  !*** ./components/frontpage/full-width-content.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FullWidthContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_LineHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/LineHeader.module.css */ "./styles/LineHeader.module.css");
/* harmony import */ var _styles_LineHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_LineHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carousels_latest_news_articles_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousels/latest-news-articles-carousel */ "./components/carousels/latest-news-articles-carousel.js");
/* harmony import */ var _carousels_office_location_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousels/office-location-carousel */ "./components/carousels/office-location-carousel.js");
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\components\\frontpage\\full-width-content.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FullWidthContent(_ref) {
  var sortedPosts = _ref.sortedPosts,
      sortedLocations = _ref.sortedLocations;
  return __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-sm-12 mt-5 px-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_LineHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lineHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 48
    }
  }, "News & Events"))), __jsx("div", {
    className: "col-sm-12 px-0 pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, sortedPosts.length > 0 && __jsx(_carousels_latest_news_articles_carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slides: sortedPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 38
    }
  })), __jsx("div", {
    className: "col-sm-12 mt-5 px-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_LineHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lineHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 48
    }
  }, "OUR OFFICES"))), __jsx("div", {
    className: "col-sm-12 px-0 pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "location-carousel-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, sortedLocations.length > 0 && __jsx(_carousels_office_location_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slides: sortedLocations,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 44
    }
  }))));
}
_c = FullWidthContent;

var _c;

$RefreshReg$(_c, "FullWidthContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcm9udHBhZ2UvZnVsbC13aWR0aC1jb250ZW50LmpzIl0sIm5hbWVzIjpbIkZ1bGxXaWR0aENvbnRlbnQiLCJzb3J0ZWRQb3N0cyIsInNvcnRlZExvY2F0aW9ucyIsImxpbmVTdHlsZXMiLCJsaW5lSGVhZGVyIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxPQUE0RDtBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBQ3pFLFNBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFQyxvRUFBVSxDQUFDQyxVQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXZDLENBREosQ0FEQSxFQUlFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUgsV0FBVyxDQUFDSSxNQUFaLEdBQXFCLENBQXRCLElBQTRCLE1BQUMsZ0ZBQUQ7QUFBNEIsVUFBTSxFQUFFSixXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRC9CLENBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVFLG9FQUFVLENBQUNDLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkMsQ0FERixDQVBGLEVBVUU7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUYsZUFBZSxDQUFDRyxNQUFoQixHQUF5QixDQUExQixJQUFnQyxNQUFDLDJFQUFEO0FBQXdCLFVBQU0sRUFBRUgsZUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURuQyxDQURGLENBVkYsQ0FERjtBQWtCRDtLQW5CdUJGLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyYmMwMTE4N2JiOGY0MDNlZjE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbGluZVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvTGluZUhlYWRlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGF0ZXN0TmV3c0FydGljbGVzQ2Fyb3VzZWwgZnJvbSAnLi4vY2Fyb3VzZWxzL2xhdGVzdC1uZXdzLWFydGljbGVzLWNhcm91c2VsJztcclxuaW1wb3J0IE9mZmljZUxvY2F0aW9uQ2Fyb3VzZWwgZnJvbSAnLi4vY2Fyb3VzZWxzL29mZmljZS1sb2NhdGlvbi1jYXJvdXNlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGdWxsV2lkdGhDb250ZW50KHsgc29ydGVkUG9zdHMsIHNvcnRlZExvY2F0aW9ucyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBtdC01IHB4LTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bGluZVN0eWxlcy5saW5lSGVhZGVyfT48aDM+TmV3cyAmIEV2ZW50czwvaDM+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBweC0wIHB0LTVcIj5cclxuICAgICAgICB7KHNvcnRlZFBvc3RzLmxlbmd0aCA+IDApICYmIDxMYXRlc3ROZXdzQXJ0aWNsZXNDYXJvdXNlbCBzbGlkZXM9e3NvcnRlZFBvc3RzfSAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIG10LTUgcHgtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsaW5lU3R5bGVzLmxpbmVIZWFkZXJ9PjxoMz5PVVIgT0ZGSUNFUzwvaDM+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBweC0wIHB0LTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uLWNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgeyhzb3J0ZWRMb2NhdGlvbnMubGVuZ3RoID4gMCkgJiYgPE9mZmljZUxvY2F0aW9uQ2Fyb3VzZWwgc2xpZGVzPXtzb3J0ZWRMb2NhdGlvbnN9IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==