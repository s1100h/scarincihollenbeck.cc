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
    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a, {
      height: 150,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx("img", {
      rel: "preconnect",
      src: post.node.featuredImg ? post.node.featuredImg.node.sourceUrl : post.node.featuredImg ? post.node.featuredImg.node.sourceUrl : 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png',
      alt: post.node.title,
      className: "img-thumbnail mx-auto d-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    })), JSON.stringify(post.node.featuredImg), __jsx("h5", {
      className: "mt-3 mb-2 text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, post.node.categories.nodes[0].name || ''), __jsx("p", {
      className: "text-muted small-excerpt text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbHMvbGF0ZXN0LW5ld3MtYXJ0aWNsZXMtY2Fyb3VzZWwuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsImxpbWl0VGl0bGVMZW5ndGgiLCJ0aXRsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIkxhdGVzdE5ld3NBcnRpY2xlc0Nhcm91c2VsIiwic2xpZGVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJwYXJzZUludCIsIm5vZGUiLCJpZCIsImxpbmsiLCJmZWF0dXJlZEltZyIsInNvdXJjZVVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxtQkFBaUIsRUFBRTtBQUNqQjtBQUNBQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRks7QUFHakJDLFNBQUssRUFBRTtBQUhVLEdBREY7QUFNakJDLFNBQU8sRUFBRTtBQUNQSixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREw7QUFFUEMsU0FBSyxFQUFFO0FBRkEsR0FOUTtBQVVqQkUsUUFBTSxFQUFFO0FBQ05MLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETjtBQUVOQyxTQUFLLEVBQUU7QUFGRCxHQVZTO0FBY2pCRyxRQUFNLEVBQUU7QUFDTk4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQUROO0FBRU5DLFNBQUssRUFBRTtBQUZEO0FBZFMsQ0FBbkI7O0FBb0JBLFNBQVNJLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUMvQixNQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxHQUFuQixFQUF3QjtBQUN0QixxQkFBVUQsS0FBSyxDQUFDRSxTQUFOLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CLENBQVY7QUFDRDs7QUFFRCxTQUFPRixLQUFQO0FBQ0Q7O0FBRWMsU0FBU0csMEJBQVQsT0FBZ0Q7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFFN0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsU0FBUUEsTUFBTSxDQUFDSCxNQUFQLEdBQWdCLENBQWpCLElBQ0wsTUFBQywyREFBRDtBQUFVLGtCQUFXLFVBQXJCO0FBQWdDLGNBQVUsRUFBRVgsVUFBNUM7QUFBd0QsWUFBUSxNQUFoRTtBQUFpRSxVQUFNLE1BQXZFO0FBQXdFLGFBQVMsTUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYyxNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsV0FDVjtBQUFLLFNBQUcsRUFBRUMsUUFBUSxDQUFDRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsRUFBWCxFQUFlLEVBQWYsQ0FBbEI7QUFBc0MsZUFBUywyQ0FBb0NGLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEVBQVgsRUFBZSxFQUFmLENBQTVDLENBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBRUgsSUFBSSxDQUFDRSxJQUFMLENBQVVFLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFEQUFEO0FBQVUsWUFBTSxFQUFFLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBQyxZQUFUO0FBQXNCLFNBQUcsRUFBR0osSUFBSSxDQUFDRSxJQUFMLENBQVVHLFdBQVgsR0FBMEJMLElBQUksQ0FBQ0UsSUFBTCxDQUFVRyxXQUFWLENBQXNCSCxJQUF0QixDQUEyQkksU0FBckQsR0FBa0VOLElBQUksQ0FBQ0UsSUFBTCxDQUFVRyxXQUFYLEdBQTBCTCxJQUFJLENBQUNFLElBQUwsQ0FBVUcsV0FBVixDQUFzQkgsSUFBdEIsQ0FBMkJJLFNBQXJELEdBQWlFLHlGQUE3SjtBQUF3UCxTQUFHLEVBQUVOLElBQUksQ0FBQ0UsSUFBTCxDQUFVVixLQUF2UTtBQUE4USxlQUFTLEVBQUMsK0JBQXhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUdlLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFJLENBQUNFLElBQUwsQ0FBVUcsV0FBekIsQ0FKSCxFQUtFO0FBQUksZUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUNMLElBQUksQ0FBQ0UsSUFBTCxDQUFVTyxVQUFWLENBQXFCQyxLQUFyQixDQUEyQixDQUEzQixFQUE4QkMsSUFBOUIsSUFBc0MsRUFBN0UsQ0FMRixFQU1FO0FBQUcsZUFBUyxFQUFDLHNDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcURwQixnQkFBZ0IsQ0FBQ1MsSUFBSSxDQUFDRSxJQUFMLENBQVVWLEtBQVgsQ0FBckUsQ0FORixDQURGLENBRFU7QUFBQSxHQUFYLENBREgsQ0FERjtBQWdCRDtLQW5CdUJHLDBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNmMDljYmM4MDU4NDU1NzNmYjNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgc3VwZXJMYXJnZURlc2t0b3A6IHtcclxuICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXHJcbiAgICBpdGVtczogNSxcclxuICB9LFxyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsaW1pdFRpdGxlTGVuZ3RoKHRpdGxlKSB7XHJcbiAgaWYgKHRpdGxlLmxlbmd0aCA+IDIwMCkge1xyXG4gICAgcmV0dXJuIGAke3RpdGxlLnN1YnN0cmluZygwLCAyMDApfSAuLi5gO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRpdGxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXRlc3ROZXdzQXJ0aWNsZXNDYXJvdXNlbCh7IHNsaWRlcyB9KSB7XHJcblxyXG4gIGNvbnNvbGUubG9nKHNsaWRlcylcclxuICByZXR1cm4gKHNsaWRlcy5sZW5ndGggPiAwKSAmJiAoXHJcbiAgICA8Q2Fyb3VzZWwgYXJpYS1sYWJlbD1cImNhcm91c2VsXCIgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX0gaW5maW5pdGUgYXJyb3dzIHN3aXBlYWJsZT5cclxuICAgICAge3NsaWRlcy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cGFyc2VJbnQocG9zdC5ub2RlLmlkLCAxMCl9IGNsYXNzTmFtZT17YHBiLTIgcHgtNCBjYXJvdXNlbC1zbGlkZSBsZXZlbC0ke3BhcnNlSW50KHBvc3Qubm9kZS5pZCwgMTApfWB9PlxyXG4gICAgICAgICAgPGEgaHJlZj17cG9zdC5ub2RlLmxpbmt9PlxyXG4gICAgICAgICAgICA8TGF6eUxvYWQgaGVpZ2h0PXsxNTB9PlxyXG4gICAgICAgICAgICAgIDxpbWcgcmVsPVwicHJlY29ubmVjdFwiIHNyYz17KHBvc3Qubm9kZS5mZWF0dXJlZEltZykgPyBwb3N0Lm5vZGUuZmVhdHVyZWRJbWcubm9kZS5zb3VyY2VVcmwgOiAocG9zdC5ub2RlLmZlYXR1cmVkSW1nKSA/IHBvc3Qubm9kZS5mZWF0dXJlZEltZy5ub2RlLnNvdXJjZVVybCA6ICdodHRwczovL3NoaGNzZ212c25kbXhtcHEubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLzIwMjAvMDQvbm8taW1hZ2UtZm91bmQtZGlhbW9uZC5wbmcnfSBhbHQ9e3Bvc3Qubm9kZS50aXRsZX0gY2xhc3NOYW1lPVwiaW1nLXRodW1ibmFpbCBteC1hdXRvIGQtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICA8L0xhenlMb2FkPlxyXG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocG9zdC5ub2RlLmZlYXR1cmVkSW1nKX1cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTMgbWItMiB0ZXh0LWNlbnRlclwiPntwb3N0Lm5vZGUuY2F0ZWdvcmllcy5ub2Rlc1swXS5uYW1lIHx8ICcnIH08L2g1PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHNtYWxsLWV4Y2VycHQgdGV4dC1jZW50ZXJcIj57bGltaXRUaXRsZUxlbmd0aChwb3N0Lm5vZGUudGl0bGUpfTwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==