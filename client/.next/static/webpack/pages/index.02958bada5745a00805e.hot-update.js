webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousels/office-location-carousel.js":
/*!**********************************************************!*\
  !*** ./components/carousels/office-location-carousel.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OfficeLocationCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_carousels_OfficeLocation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/carousels/OfficeLocation.module.css */ "./styles/carousels/OfficeLocation.module.css");
/* harmony import */ var _styles_carousels_OfficeLocation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_carousels_OfficeLocation_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\components\\carousels\\office-location-carousel.js";

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
function OfficeLocationCarousel(_ref) {
  var _this = this;

  var slides = _ref.slides;
  return slides.length > 0 && __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    "aria-label": "carousel",
    responsive: responsive,
    infinite: true,
    arrows: true,
    swipeable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, slides.map(function (post) {
    return __jsx("div", {
      key: post.title,
      className: "".concat(_styles_carousels_OfficeLocation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.locationCard, " mx-auto d-block border "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/location/[slug]",
      as: post.uri,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
      height: 150,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, __jsx("img", {
      rel: "preconnect",
      src: post.featuredImage.node.sourceUrl,
      alt: post.title,
      className: "mw-100 mx-auto d-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    })), __jsx("p", {
      className: "red-title m-3 text-uppercase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, post.title)))));
  }));
}
_c = OfficeLocationCarousel;

var _c;

$RefreshReg$(_c, "OfficeLocationCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbHMvb2ZmaWNlLWxvY2F0aW9uLWNhcm91c2VsLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJzdXBlckxhcmdlRGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRlc2t0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJPZmZpY2VMb2NhdGlvbkNhcm91c2VsIiwic2xpZGVzIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsInRpdGxlIiwic3R5bGVzIiwibG9jYXRpb25DYXJkIiwidXJpIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzb3VyY2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsbUJBQWlCLEVBQUU7QUFDakI7QUFDQUMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUZLO0FBR2pCQyxTQUFLLEVBQUU7QUFIVSxHQURGO0FBTWpCQyxTQUFPLEVBQUU7QUFDUEosY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRTtBQUZBLEdBTlE7QUFVakJFLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFO0FBRkQsR0FWUztBQWNqQkcsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUU7QUFGRDtBQWRTLENBQW5CO0FBb0JlLFNBQVNJLHNCQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ3pELFNBQVFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFqQixJQUNMLE1BQUMsMkRBQUQ7QUFBVSxrQkFBVyxVQUFyQjtBQUFnQyxjQUFVLEVBQUVYLFVBQTVDO0FBQXdELFlBQVEsTUFBaEU7QUFBaUUsVUFBTSxNQUF2RTtBQUF3RSxhQUFTLE1BQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1UsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0MsSUFBRDtBQUFBLFdBQ1Y7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FBZjtBQUFzQixlQUFTLFlBQUtDLGtGQUFNLENBQUNDLFlBQVosNkJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGtCQUFYO0FBQThCLFFBQUUsRUFBRUgsSUFBSSxDQUFDSSxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMscURBQUQ7QUFBVSxZQUFNLEVBQUUsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFDLFlBQVQ7QUFBc0IsU0FBRyxFQUFFSixJQUFJLENBQUNLLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCQyxTQUFuRDtBQUE4RCxTQUFHLEVBQUVQLElBQUksQ0FBQ0MsS0FBeEU7QUFBK0UsZUFBUyxFQUFDLHdCQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUcsZUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNELElBQUksQ0FBQ0MsS0FBZCxDQURGLENBSkYsQ0FERixDQURGLENBRFU7QUFBQSxHQUFYLENBREgsQ0FERjtBQWtCRDtLQW5CdUJMLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAyOTU4YmFkYTU3NDVhMDA4MDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY2Fyb3VzZWxzL09mZmljZUxvY2F0aW9uLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XHJcbiAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxyXG4gICAgaXRlbXM6IDUsXHJcbiAgfSxcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXHJcbiAgICBpdGVtczogMixcclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2ZmaWNlTG9jYXRpb25DYXJvdXNlbCh7IHNsaWRlcyB9KSB7XHJcbiAgcmV0dXJuIChzbGlkZXMubGVuZ3RoID4gMCkgJiYgKFxyXG4gICAgPENhcm91c2VsIGFyaWEtbGFiZWw9XCJjYXJvdXNlbFwiIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9IGluZmluaXRlIGFycm93cyBzd2lwZWFibGU+XHJcbiAgICAgIHtzbGlkZXMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3Bvc3QudGl0bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxvY2F0aW9uQ2FyZH0gbXgtYXV0byBkLWJsb2NrIGJvcmRlciBgfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9jYXRpb24vW3NsdWddXCIgYXM9e3Bvc3QudXJpfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPExhenlMb2FkIGhlaWdodD17MTUwfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgcmVsPVwicHJlY29ubmVjdFwiIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLm5vZGUuc291cmNlVXJsfSBhbHQ9e3Bvc3QudGl0bGV9IGNsYXNzTmFtZT1cIm13LTEwMCBteC1hdXRvIGQtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVkLXRpdGxlIG0tMyB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57cG9zdC50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==