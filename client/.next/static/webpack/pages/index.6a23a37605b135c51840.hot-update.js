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
/* harmony import */ var styles_Fonts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/Fonts.module.css */ "./styles/Fonts.module.css");
/* harmony import */ var styles_Fonts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_Fonts_module_css__WEBPACK_IMPORTED_MODULE_3__);
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
  return slides.length > 0 && __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "carousel",
    responsive: responsive,
    infinite: true,
    arrows: true,
    swipeable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, slides.map(function (post) {
    return __jsx("div", {
      key: parseInt(post.node.id, 10),
      className: "pb-2 px-4 carousel-slide level-".concat(parseInt(post.node.id, 10)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: post.node.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a, {
      height: 150,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx("img", {
      rel: "preconnect",
      src: post.node.image ? post.node.image.node.sourceUrl : post.node.featuredImage ? post.node.featuredImage.node.sourceUrl : 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png',
      alt: post.node.title,
      className: "img-thumbnail mx-auto d-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    })), __jsx("h5", {
      className: "mt-3 mb-2 text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, post.node.categories.nodes[0].name || ''), __jsx("p", {
      className: "".concat(styles_Fonts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.smallExcerpt, "text-muted small-excerpt text-center"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, limitTitleLength(post.node.title))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbHMvbGF0ZXN0LW5ld3MtYXJ0aWNsZXMtY2Fyb3VzZWwuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsImxpbWl0VGl0bGVMZW5ndGgiLCJ0aXRsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIkxhdGVzdE5ld3NBcnRpY2xlc0Nhcm91c2VsIiwic2xpZGVzIiwibWFwIiwicG9zdCIsInBhcnNlSW50Iiwibm9kZSIsImlkIiwibGluayIsImltYWdlIiwic291cmNlVXJsIiwiZmVhdHVyZWRJbWFnZSIsImNhdGVnb3JpZXMiLCJub2RlcyIsIm5hbWUiLCJzdHlsZUZvbnRzIiwic21hbGxFeGNlcnB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsbUJBQWlCLEVBQUU7QUFDakI7QUFDQUMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUZLO0FBR2pCQyxTQUFLLEVBQUU7QUFIVSxHQURGO0FBTWpCQyxTQUFPLEVBQUU7QUFDUEosY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRTtBQUZBLEdBTlE7QUFVakJFLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFO0FBRkQsR0FWUztBQWNqQkcsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUU7QUFGRDtBQWRTLENBQW5COztBQW9CQSxTQUFTSSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsR0FBbkIsRUFBd0I7QUFDdEIscUJBQVVELEtBQUssQ0FBQ0UsU0FBTixDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUFWO0FBQ0Q7O0FBRUQsU0FBT0YsS0FBUDtBQUNEOztBQUVjLFNBQVNHLDBCQUFULE9BQWdEO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzdELFNBQVFBLE1BQU0sQ0FBQ0gsTUFBUCxHQUFnQixDQUFqQixJQUNMLE1BQUMsMkRBQUQ7QUFBVSxrQkFBVyxVQUFyQjtBQUFnQyxjQUFVLEVBQUVYLFVBQTVDO0FBQXdELFlBQVEsTUFBaEU7QUFBaUUsVUFBTSxNQUF2RTtBQUF3RSxhQUFTLE1BQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2MsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsSUFBRDtBQUFBLFdBQ1Y7QUFBSyxTQUFHLEVBQUVDLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEVBQVgsRUFBZSxFQUFmLENBQWxCO0FBQXNDLGVBQVMsMkNBQW9DRixRQUFRLENBQUNELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxFQUFYLEVBQWUsRUFBZixDQUE1QyxDQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUVILElBQUksQ0FBQ0UsSUFBTCxDQUFVRSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxxREFBRDtBQUFVLFlBQU0sRUFBRSxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUMsWUFBVDtBQUFzQixTQUFHLEVBQUdKLElBQUksQ0FBQ0UsSUFBTCxDQUFVRyxLQUFYLEdBQW9CTCxJQUFJLENBQUNFLElBQUwsQ0FBVUcsS0FBVixDQUFnQkgsSUFBaEIsQ0FBcUJJLFNBQXpDLEdBQXNETixJQUFJLENBQUNFLElBQUwsQ0FBVUssYUFBWCxHQUE0QlAsSUFBSSxDQUFDRSxJQUFMLENBQVVLLGFBQVYsQ0FBd0JMLElBQXhCLENBQTZCSSxTQUF6RCxHQUFxRSx5RkFBcko7QUFBZ1AsU0FBRyxFQUFFTixJQUFJLENBQUNFLElBQUwsQ0FBVVIsS0FBL1A7QUFBc1EsZUFBUyxFQUFDLCtCQUFoUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUksZUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUNNLElBQUksQ0FBQ0UsSUFBTCxDQUFVTSxVQUFWLENBQXFCQyxLQUFyQixDQUEyQixDQUEzQixFQUE4QkMsSUFBOUIsSUFBc0MsRUFBN0UsQ0FKRixFQUtFO0FBQUcsZUFBUyxZQUFLQyw4REFBVSxDQUFDQyxZQUFoQix5Q0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlGbkIsZ0JBQWdCLENBQUNPLElBQUksQ0FBQ0UsSUFBTCxDQUFVUixLQUFYLENBQWpHLENBTEYsQ0FERixDQURVO0FBQUEsR0FBWCxDQURILENBREY7QUFlRDtLQWhCdUJHLDBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhMjNhMzc2MDViMTM1YzUxODQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IHN0eWxlRm9udHMgZnJvbSAnc3R5bGVzL0ZvbnRzLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XHJcbiAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxyXG4gICAgaXRlbXM6IDUsXHJcbiAgfSxcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXHJcbiAgICBpdGVtczogMixcclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGltaXRUaXRsZUxlbmd0aCh0aXRsZSkge1xyXG4gIGlmICh0aXRsZS5sZW5ndGggPiAyMDApIHtcclxuICAgIHJldHVybiBgJHt0aXRsZS5zdWJzdHJpbmcoMCwgMjAwKX0gLi4uYDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF0ZXN0TmV3c0FydGljbGVzQ2Fyb3VzZWwoeyBzbGlkZXMgfSkge1xyXG4gIHJldHVybiAoc2xpZGVzLmxlbmd0aCA+IDApICYmIChcclxuICAgIDxDYXJvdXNlbCBhcmlhLWxhYmVsPVwiY2Fyb3VzZWxcIiByZXNwb25zaXZlPXtyZXNwb25zaXZlfSBpbmZpbml0ZSBhcnJvd3Mgc3dpcGVhYmxlPlxyXG4gICAgICB7c2xpZGVzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtwYXJzZUludChwb3N0Lm5vZGUuaWQsIDEwKX0gY2xhc3NOYW1lPXtgcGItMiBweC00IGNhcm91c2VsLXNsaWRlIGxldmVsLSR7cGFyc2VJbnQocG9zdC5ub2RlLmlkLCAxMCl9YH0+XHJcbiAgICAgICAgICA8YSBocmVmPXtwb3N0Lm5vZGUubGlua30+XHJcbiAgICAgICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezE1MH0+XHJcbiAgICAgICAgICAgICAgPGltZyByZWw9XCJwcmVjb25uZWN0XCIgc3JjPXsocG9zdC5ub2RlLmltYWdlKSA/IHBvc3Qubm9kZS5pbWFnZS5ub2RlLnNvdXJjZVVybCA6IChwb3N0Lm5vZGUuZmVhdHVyZWRJbWFnZSkgPyBwb3N0Lm5vZGUuZmVhdHVyZWRJbWFnZS5ub2RlLnNvdXJjZVVybCA6ICdodHRwczovL3NoaGNzZ212c25kbXhtcHEubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLzIwMjAvMDQvbm8taW1hZ2UtZm91bmQtZGlhbW9uZC5wbmcnfSBhbHQ9e3Bvc3Qubm9kZS50aXRsZX0gY2xhc3NOYW1lPVwiaW1nLXRodW1ibmFpbCBteC1hdXRvIGQtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICA8L0xhenlMb2FkPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtMyBtYi0yIHRleHQtY2VudGVyXCI+e3Bvc3Qubm9kZS5jYXRlZ29yaWVzLm5vZGVzWzBdLm5hbWUgfHwgJycgfTwvaDU+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVGb250cy5zbWFsbEV4Y2VycHR9dGV4dC1tdXRlZCBzbWFsbC1leGNlcnB0IHRleHQtY2VudGVyYH0+e2xpbWl0VGl0bGVMZW5ndGgocG9zdC5ub2RlLnRpdGxlKX08L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9DYXJvdXNlbD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=