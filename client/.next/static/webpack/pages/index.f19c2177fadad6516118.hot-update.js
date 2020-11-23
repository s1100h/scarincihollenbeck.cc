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
      src: post.featuredImg.node.sourceUrl,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbHMvb2ZmaWNlLWxvY2F0aW9uLWNhcm91c2VsLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJzdXBlckxhcmdlRGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRlc2t0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJPZmZpY2VMb2NhdGlvbkNhcm91c2VsIiwic2xpZGVzIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsInRpdGxlIiwic3R5bGVzIiwibG9jYXRpb25DYXJkIiwidXJpIiwiZmVhdHVyZWRJbWciLCJub2RlIiwic291cmNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLG1CQUFpQixFQUFFO0FBQ2pCO0FBQ0FDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FGSztBQUdqQkMsU0FBSyxFQUFFO0FBSFUsR0FERjtBQU1qQkMsU0FBTyxFQUFFO0FBQ1BKLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUU7QUFGQSxHQU5RO0FBVWpCRSxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRTtBQUZELEdBVlM7QUFjakJHLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLEdBQVA7QUFBWUMsU0FBRyxFQUFFO0FBQWpCLEtBRE47QUFFTkMsU0FBSyxFQUFFO0FBRkQ7QUFkUyxDQUFuQjtBQW9CZSxTQUFTSSxzQkFBVCxPQUE0QztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN6RCxTQUFRQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBakIsSUFDTCxNQUFDLDJEQUFEO0FBQVUsa0JBQVcsVUFBckI7QUFBZ0MsY0FBVSxFQUFFWCxVQUE1QztBQUF3RCxZQUFRLE1BQWhFO0FBQWlFLFVBQU0sTUFBdkU7QUFBd0UsYUFBUyxNQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dVLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLElBQUQ7QUFBQSxXQUNWO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNDLEtBQWY7QUFBc0IsZUFBUyxZQUFLQyxrRkFBTSxDQUFDQyxZQUFaLDZCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxrQkFBWDtBQUE4QixRQUFFLEVBQUVILElBQUksQ0FBQ0ksR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFEQUFEO0FBQVUsWUFBTSxFQUFFLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBQyxZQUFUO0FBQXNCLFNBQUcsRUFBRUosSUFBSSxDQUFDSyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQkMsU0FBakQ7QUFBNEQsU0FBRyxFQUFFUCxJQUFJLENBQUNDLEtBQXRFO0FBQTZFLGVBQVMsRUFBQyx3QkFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFHLGVBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTRCxJQUFJLENBQUNDLEtBQWQsQ0FERixDQUpGLENBREYsQ0FERixDQURVO0FBQUEsR0FBWCxDQURILENBREY7QUFrQkQ7S0FuQnVCTCxzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMTljMjE3N2ZhZGFkNjUxNjExOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2Nhcm91c2Vscy9PZmZpY2VMb2NhdGlvbi5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBzdXBlckxhcmdlRGVza3RvcDoge1xyXG4gICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcclxuICAgIGl0ZW1zOiA1LFxyXG4gIH0sXHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9mZmljZUxvY2F0aW9uQ2Fyb3VzZWwoeyBzbGlkZXMgfSkge1xyXG4gIHJldHVybiAoc2xpZGVzLmxlbmd0aCA+IDApICYmIChcclxuICAgIDxDYXJvdXNlbCBhcmlhLWxhYmVsPVwiY2Fyb3VzZWxcIiByZXNwb25zaXZlPXtyZXNwb25zaXZlfSBpbmZpbml0ZSBhcnJvd3Mgc3dpcGVhYmxlPlxyXG4gICAgICB7c2xpZGVzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtwb3N0LnRpdGxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5sb2NhdGlvbkNhcmR9IG14LWF1dG8gZC1ibG9jayBib3JkZXIgYH0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2F0aW9uL1tzbHVnXVwiIGFzPXtwb3N0LnVyaX0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezE1MH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJlbD1cInByZWNvbm5lY3RcIiBzcmM9e3Bvc3QuZmVhdHVyZWRJbWcubm9kZS5zb3VyY2VVcmx9IGFsdD17cG9zdC50aXRsZX0gY2xhc3NOYW1lPVwibXctMTAwIG14LWF1dG8gZC1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWQtdGl0bGUgbS0zIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntwb3N0LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9