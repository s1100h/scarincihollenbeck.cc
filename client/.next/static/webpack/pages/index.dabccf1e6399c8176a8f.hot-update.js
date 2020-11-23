webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousels/latest-news-articles-carousel.js":
/*!***************************************************************!*\
  !*** ./components/carousels/latest-news-articles-carousel.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LatestNewsArticlesCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\components\\carousels\\latest-news-articles-carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};

function limitTitleLength(title) {
  if (title.length > 200) {
    return "".concat(title.substring(0, 200), " ...");
  }

  return title;
}

function LatestNewsArticlesCarousel(_ref) {
  var _this = this;

  var slides = _ref.slides;
  console.log(slides);
  return slides.length > 0 && __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "carousel",
    responsive: responsive,
    infinite: true,
    arrows: true,
    swipeable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, slides.map(function (post) {
    return __jsx("div", {
      key: parseInt(post.node.id, 10),
      className: "pb-2 px-4 carousel-slide level-".concat(parseInt(post.node.id, 10)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: post.node.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "text-muted small-excerpt text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, limitTitleLength(post.node.title)), " */}"));
  }));
}
_c = LatestNewsArticlesCarousel;

var _c;

$RefreshReg$(_c, "LatestNewsArticlesCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbHMvbGF0ZXN0LW5ld3MtYXJ0aWNsZXMtY2Fyb3VzZWwuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsImxpbWl0VGl0bGVMZW5ndGgiLCJ0aXRsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIkxhdGVzdE5ld3NBcnRpY2xlc0Nhcm91c2VsIiwic2xpZGVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJwYXJzZUludCIsIm5vZGUiLCJpZCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLG1CQUFpQixFQUFFO0FBQ2pCO0FBQ0FDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FGSztBQUdqQkMsU0FBSyxFQUFFO0FBSFUsR0FERjtBQU1qQkMsU0FBTyxFQUFFO0FBQ1BKLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUU7QUFGQSxHQU5RO0FBVWpCRSxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRTtBQUZELEdBVlM7QUFjakJHLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLEdBQVA7QUFBWUMsU0FBRyxFQUFFO0FBQWpCLEtBRE47QUFFTkMsU0FBSyxFQUFFO0FBRkQ7QUFkUyxDQUFuQjs7QUFvQkEsU0FBU0ksZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQy9CLE1BQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLEdBQW5CLEVBQXdCO0FBQ3RCLHFCQUFVRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsQ0FBVjtBQUNEOztBQUVELFNBQU9GLEtBQVA7QUFDRDs7QUFFYyxTQUFTRywwQkFBVCxPQUFnRDtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUU3REMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxTQUFRQSxNQUFNLENBQUNILE1BQVAsR0FBZ0IsQ0FBakIsSUFDTCxNQUFDLDJEQUFEO0FBQVUsa0JBQVcsVUFBckI7QUFBZ0MsY0FBVSxFQUFFWCxVQUE1QztBQUF3RCxZQUFRLE1BQWhFO0FBQWlFLFVBQU0sTUFBdkU7QUFBd0UsYUFBUyxNQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0djLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLElBQUQ7QUFBQSxXQUNWO0FBQUssU0FBRyxFQUFFQyxRQUFRLENBQUNELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxFQUFYLEVBQWUsRUFBZixDQUFsQjtBQUFzQyxlQUFTLDJDQUFvQ0YsUUFBUSxDQUFDRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsRUFBWCxFQUFlLEVBQWYsQ0FBNUMsQ0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFFSCxJQUFJLENBQUNFLElBQUwsQ0FBVUUsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUcsZUFBUyxFQUFDLHNDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcURiLGdCQUFnQixDQUFDUyxJQUFJLENBQUNFLElBQUwsQ0FBVVYsS0FBWCxDQUFyRSxDQUxGLFNBREYsQ0FEVTtBQUFBLEdBQVgsQ0FESCxDQURGO0FBZUQ7S0FsQnVCRywwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYWJjY2YxZTYzOTljODE3NmE4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XHJcbiAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxyXG4gICAgaXRlbXM6IDUsXHJcbiAgfSxcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXHJcbiAgICBpdGVtczogMixcclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGltaXRUaXRsZUxlbmd0aCh0aXRsZSkge1xyXG4gIGlmICh0aXRsZS5sZW5ndGggPiAyMDApIHtcclxuICAgIHJldHVybiBgJHt0aXRsZS5zdWJzdHJpbmcoMCwgMjAwKX0gLi4uYDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF0ZXN0TmV3c0FydGljbGVzQ2Fyb3VzZWwoeyBzbGlkZXMgfSkge1xyXG5cclxuICBjb25zb2xlLmxvZyhzbGlkZXMpXHJcbiAgcmV0dXJuIChzbGlkZXMubGVuZ3RoID4gMCkgJiYgKFxyXG4gICAgPENhcm91c2VsIGFyaWEtbGFiZWw9XCJjYXJvdXNlbFwiIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9IGluZmluaXRlIGFycm93cyBzd2lwZWFibGU+XHJcbiAgICAgIHtzbGlkZXMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3BhcnNlSW50KHBvc3Qubm9kZS5pZCwgMTApfSBjbGFzc05hbWU9e2BwYi0yIHB4LTQgY2Fyb3VzZWwtc2xpZGUgbGV2ZWwtJHtwYXJzZUludChwb3N0Lm5vZGUuaWQsIDEwKX1gfT5cclxuICAgICAgICAgIDxhIGhyZWY9e3Bvc3Qubm9kZS5saW5rfT5cclxuICAgICAgICAgICAgey8qIDxMYXp5TG9hZCBoZWlnaHQ9ezE1MH0+XHJcbiAgICAgICAgICAgICAgPGltZyByZWw9XCJwcmVjb25uZWN0XCIgc3JjPXsocG9zdC5ub2RlLmltYWdlKSA/IHBvc3Qubm9kZS5pbWFnZS5ub2RlLnNvdXJjZVVybCA6IChwb3N0Lm5vZGUuZmVhdHVyZWRJbWcpID8gcG9zdC5ub2RlLmZlYXR1cmVkSW1nLm5vZGUuc291cmNlVXJsIDogJ2h0dHBzOi8vc2hoY3NnbXZzbmRteG1wcS5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vMjAyMC8wNC9uby1pbWFnZS1mb3VuZC1kaWFtb25kLnBuZyd9IGFsdD17cG9zdC5ub2RlLnRpdGxlfSBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsIG14LWF1dG8gZC1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0zIG1iLTIgdGV4dC1jZW50ZXJcIj57cG9zdC5ub2RlLmNhdGVnb3JpZXMubm9kZXNbMF0ubmFtZSB8fCAnJyB9PC9oNT4gKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgc21hbGwtZXhjZXJwdCB0ZXh0LWNlbnRlclwiPntsaW1pdFRpdGxlTGVuZ3RoKHBvc3Qubm9kZS50aXRsZSl9PC9wPiAqL31cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==