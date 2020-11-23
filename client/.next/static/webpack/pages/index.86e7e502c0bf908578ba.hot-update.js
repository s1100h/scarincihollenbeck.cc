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
  return slides.length > 0 && __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "carousel",
    responsive: responsive,
    infinite: true,
    arrows: true,
    swipeable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, slides.map(function (post) {
    return __jsx("div", {
      key: parseInt(post.node.id, 10),
      className: "pb-2 px-4 carousel-slide level-".concat(parseInt(post.node.id, 10)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: post.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a, {
      height: 150,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx("img", {
      rel: "preconnect",
      src: post.image ? post.image : post.node.featuredImg ? post.featuredImg : 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png',
      alt: post.title,
      className: "img-thumbnail mx-auto d-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    })), __jsx("h5", {
      className: "mt-3 mb-2 text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, post.category || ''), __jsx("p", {
      className: "text-muted small-excerpt text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, limitTitleLength(post.title))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbHMvbGF0ZXN0LW5ld3MtYXJ0aWNsZXMtY2Fyb3VzZWwuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsImxpbWl0VGl0bGVMZW5ndGgiLCJ0aXRsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIkxhdGVzdE5ld3NBcnRpY2xlc0Nhcm91c2VsIiwic2xpZGVzIiwibWFwIiwicG9zdCIsInBhcnNlSW50Iiwibm9kZSIsImlkIiwibGluayIsImltYWdlIiwiZmVhdHVyZWRJbWciLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsbUJBQWlCLEVBQUU7QUFDakI7QUFDQUMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUZLO0FBR2pCQyxTQUFLLEVBQUU7QUFIVSxHQURGO0FBTWpCQyxTQUFPLEVBQUU7QUFDUEosY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRTtBQUZBLEdBTlE7QUFVakJFLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFO0FBRkQsR0FWUztBQWNqQkcsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUU7QUFGRDtBQWRTLENBQW5COztBQW9CQSxTQUFTSSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsR0FBbkIsRUFBd0I7QUFDdEIscUJBQVVELEtBQUssQ0FBQ0UsU0FBTixDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUFWO0FBQ0Q7O0FBRUQsU0FBT0YsS0FBUDtBQUNEOztBQUVjLFNBQVNHLDBCQUFULE9BQWdEO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzdELFNBQVFBLE1BQU0sQ0FBQ0gsTUFBUCxHQUFnQixDQUFqQixJQUNMLE1BQUMsMkRBQUQ7QUFBVSxrQkFBVyxVQUFyQjtBQUFnQyxjQUFVLEVBQUVYLFVBQTVDO0FBQXdELFlBQVEsTUFBaEU7QUFBaUUsVUFBTSxNQUF2RTtBQUF3RSxhQUFTLE1BQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2MsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsSUFBRDtBQUFBLFdBQ1Y7QUFBSyxTQUFHLEVBQUVDLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEVBQVgsRUFBZSxFQUFmLENBQWxCO0FBQXNDLGVBQVMsMkNBQW9DRixRQUFRLENBQUNELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxFQUFYLEVBQWUsRUFBZixDQUE1QyxDQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxxREFBRDtBQUFVLFlBQU0sRUFBRSxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUMsWUFBVDtBQUFzQixTQUFHLEVBQUdKLElBQUksQ0FBQ0ssS0FBTixHQUFlTCxJQUFJLENBQUNLLEtBQXBCLEdBQTZCTCxJQUFJLENBQUNFLElBQUwsQ0FBVUksV0FBWCxHQUEwQk4sSUFBSSxDQUFDTSxXQUEvQixHQUE2Qyx5RkFBcEc7QUFBK0wsU0FBRyxFQUFFTixJQUFJLENBQUNOLEtBQXpNO0FBQWdOLGVBQVMsRUFBQywrQkFBMU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFJLGVBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVDTSxJQUFJLENBQUNPLFFBQUwsSUFBaUIsRUFBeEQsQ0FKRixFQUtFO0FBQUcsZUFBUyxFQUFDLHNDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcURkLGdCQUFnQixDQUFDTyxJQUFJLENBQUNOLEtBQU4sQ0FBckUsQ0FMRixDQURGLENBRFU7QUFBQSxHQUFYLENBREgsQ0FERjtBQWVEO0tBaEJ1QkcsMEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODZlN2U1MDJjMGJmOTA4NTc4YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBzdXBlckxhcmdlRGVza3RvcDoge1xyXG4gICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcclxuICAgIGl0ZW1zOiA1LFxyXG4gIH0sXHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxpbWl0VGl0bGVMZW5ndGgodGl0bGUpIHtcclxuICBpZiAodGl0bGUubGVuZ3RoID4gMjAwKSB7XHJcbiAgICByZXR1cm4gYCR7dGl0bGUuc3Vic3RyaW5nKDAsIDIwMCl9IC4uLmA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGl0bGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhdGVzdE5ld3NBcnRpY2xlc0Nhcm91c2VsKHsgc2xpZGVzIH0pIHtcclxuICByZXR1cm4gKHNsaWRlcy5sZW5ndGggPiAwKSAmJiAoXHJcbiAgICA8Q2Fyb3VzZWwgYXJpYS1sYWJlbD1cImNhcm91c2VsXCIgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX0gaW5maW5pdGUgYXJyb3dzIHN3aXBlYWJsZT5cclxuICAgICAge3NsaWRlcy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cGFyc2VJbnQocG9zdC5ub2RlLmlkLCAxMCl9IGNsYXNzTmFtZT17YHBiLTIgcHgtNCBjYXJvdXNlbC1zbGlkZSBsZXZlbC0ke3BhcnNlSW50KHBvc3Qubm9kZS5pZCwgMTApfWB9PlxyXG4gICAgICAgICAgPGEgaHJlZj17cG9zdC5saW5rfT5cclxuICAgICAgICAgICAgPExhenlMb2FkIGhlaWdodD17MTUwfT5cclxuICAgICAgICAgICAgICA8aW1nIHJlbD1cInByZWNvbm5lY3RcIiBzcmM9eyhwb3N0LmltYWdlKSA/IHBvc3QuaW1hZ2UgOiAocG9zdC5ub2RlLmZlYXR1cmVkSW1nKSA/IHBvc3QuZmVhdHVyZWRJbWcgOiAnaHR0cHM6Ly9zaGhjc2dtdnNuZG14bXBxLm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS8yMDIwLzA0L25vLWltYWdlLWZvdW5kLWRpYW1vbmQucG5nJ30gYWx0PXtwb3N0LnRpdGxlfSBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsIG14LWF1dG8gZC1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0zIG1iLTIgdGV4dC1jZW50ZXJcIj57cG9zdC5jYXRlZ29yeSB8fCAnJyB9PC9oNT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBzbWFsbC1leGNlcnB0IHRleHQtY2VudGVyXCI+e2xpbWl0VGl0bGVMZW5ndGgocG9zdC50aXRsZSl9PC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9