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
      src: post.featuredImg,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbHMvb2ZmaWNlLWxvY2F0aW9uLWNhcm91c2VsLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJzdXBlckxhcmdlRGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRlc2t0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJPZmZpY2VMb2NhdGlvbkNhcm91c2VsIiwic2xpZGVzIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsInRpdGxlIiwic3R5bGVzIiwibG9jYXRpb25DYXJkIiwidXJpIiwiZmVhdHVyZWRJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsbUJBQWlCLEVBQUU7QUFDakI7QUFDQUMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUZLO0FBR2pCQyxTQUFLLEVBQUU7QUFIVSxHQURGO0FBTWpCQyxTQUFPLEVBQUU7QUFDUEosY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRTtBQUZBLEdBTlE7QUFVakJFLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFO0FBRkQsR0FWUztBQWNqQkcsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUU7QUFGRDtBQWRTLENBQW5CO0FBb0JlLFNBQVNJLHNCQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ3pELFNBQVFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFqQixJQUNMLE1BQUMsMkRBQUQ7QUFBVSxrQkFBVyxVQUFyQjtBQUFnQyxjQUFVLEVBQUVYLFVBQTVDO0FBQXdELFlBQVEsTUFBaEU7QUFBaUUsVUFBTSxNQUF2RTtBQUF3RSxhQUFTLE1BQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1UsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0MsSUFBRDtBQUFBLFdBQ1Y7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FBZjtBQUFzQixlQUFTLFlBQUtDLGtGQUFNLENBQUNDLFlBQVosNkJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGtCQUFYO0FBQThCLFFBQUUsRUFBRUgsSUFBSSxDQUFDSSxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMscURBQUQ7QUFBVSxZQUFNLEVBQUUsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFDLFlBQVQ7QUFBc0IsU0FBRyxFQUFFSixJQUFJLENBQUNLLFdBQWhDO0FBQTZDLFNBQUcsRUFBRUwsSUFBSSxDQUFDQyxLQUF2RDtBQUE4RCxlQUFTLEVBQUMsd0JBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBRyxlQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU0QsSUFBSSxDQUFDQyxLQUFkLENBREYsQ0FKRixDQURGLENBREYsQ0FEVTtBQUFBLEdBQVgsQ0FESCxDQURGO0FBa0JEO0tBbkJ1Qkwsc0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWE4YzIyY2MxYjMzZmJjM2M1MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jYXJvdXNlbHMvT2ZmaWNlTG9jYXRpb24ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgc3VwZXJMYXJnZURlc2t0b3A6IHtcclxuICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXHJcbiAgICBpdGVtczogNSxcclxuICB9LFxyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZmZpY2VMb2NhdGlvbkNhcm91c2VsKHsgc2xpZGVzIH0pIHtcclxuICByZXR1cm4gKHNsaWRlcy5sZW5ndGggPiAwKSAmJiAoXHJcbiAgICA8Q2Fyb3VzZWwgYXJpYS1sYWJlbD1cImNhcm91c2VsXCIgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX0gaW5maW5pdGUgYXJyb3dzIHN3aXBlYWJsZT5cclxuICAgICAge3NsaWRlcy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cG9zdC50aXRsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubG9jYXRpb25DYXJkfSBteC1hdXRvIGQtYmxvY2sgYm9yZGVyIGB9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2NhdGlvbi9bc2x1Z11cIiBhcz17cG9zdC51cml9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8TGF6eUxvYWQgaGVpZ2h0PXsxNTB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyByZWw9XCJwcmVjb25uZWN0XCIgc3JjPXtwb3N0LmZlYXR1cmVkSW1nfSBhbHQ9e3Bvc3QudGl0bGV9IGNsYXNzTmFtZT1cIm13LTEwMCBteC1hdXRvIGQtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVkLXRpdGxlIG0tMyB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57cG9zdC50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==