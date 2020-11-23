webpackHotUpdate_N_E("pages/_error",{

/***/ "./components/simple-search.js":
/*!*************************************!*\
  !*** ./components/simple-search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSearch; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _utils_input_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/input-hook */ "./utils/input-hook.js");


var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\components\\simple-search.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function SimpleSearch(_ref) {
  _s();

  var _ref$searchId = _ref.searchId,
      searchId = _ref$searchId === void 0 ? "simplesearch" : _ref$searchId;

  var _useInput = Object(_utils_input_hook__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      searchInput = _useInput.value,
      bindSearchInput = _useInput.bind,
      resetSearchInput = _useInput.reset;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    var formatUrl = function formatUrl(str) {
      return str.toLowerCase().replace(/\s/g, '+');
    };

    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
      pathname: '/search',
      query: {
        q: formatUrl(searchInput),
        page: 1
      }
    }).then(function () {
      return window.scrollTo(0, 0);
    });
  };

  return __jsx("div", {
    className: "mw-447",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: handleSubmit,
    role: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Group, {
    controlId: searchId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Search Site")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"].Control, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text",
    placeholder: "Keyword.."
  }, bindSearchInput, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    variant: "danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Search")));
}

_s(SimpleSearch, "0DMh1SQXWvX69ZVSnf+MpntMCyE=", false, function () {
  return [_utils_input_hook__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = SimpleSearch;

var _c;

$RefreshReg$(_c, "SimpleSearch");

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

/***/ }),

/***/ "./layouts/full-width.js":
/*!*******************************!*\
  !*** ./layouts/full-width.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\layouts\\full-width.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FullWidth = function FullWidth(_ref) {
  var children = _ref.children;
  return __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, children)));
};

_c = FullWidth;
/* harmony default export */ __webpack_exports__["default"] = (FullWidth);

var _c;

$RefreshReg$(_c, "FullWidth");

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

/***/ }),

/***/ "./layouts/single-sub-header.js":
/*!**************************************!*\
  !*** ./layouts/single-sub-header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleSubHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\layouts\\single-sub-header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var HeaderBckGround = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "single-sub-header__HeaderBckGround",
  componentId: "sc-1b3axuo-0"
})(["background:linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(", ") no-repeat 50%;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;-webkit-clip-path:polygon(50% 0%,100% 0,100% 85%,50% 100%,0 85%,0 0);clip-path:polygon(50% 0%,100% 0,100% 85%,50% 100%,0 85%,0 0);", ""], function (props) {
  return props.image;
}, function (props) {
  return props.height;
});
_c = HeaderBckGround;
function SingleSubHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image = _ref.image,
      height = _ref.height;
  return __jsx(HeaderBckGround, {
    image: image,
    height: height,
    className: "jumbotron jumbotron-fluid d-print-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sm: 12,
    md: {
      span: 7,
      offset: 2
    },
    className: "bg-black-background text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "p-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "red-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), __jsx("h1", {
    className: "text-white proxima-bold border-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, title), __jsx("h2", {
    className: "proxima-regular mt-3 mb-5 h2-italic",
    dangerouslySetInnerHTML: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_5__["createMarkup"])(subtitle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }))))));
}
_c2 = SingleSubHeader;
;

var _c, _c2;

$RefreshReg$(_c, "HeaderBckGround");
$RefreshReg$(_c2, "SingleSubHeader");

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

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cptumulty%5Csites%5Cscarincihollenbeck.frontend.cc%5Cclient%5Cpages%5C_error.js!./":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cptumulty%5Csites%5Cscarincihollenbeck.frontend.cc%5Cclient%5Cpages%5C_error.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomError; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var layouts_single_sub_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/single-sub-header */ "./layouts/single-sub-header.js");
/* harmony import */ var layouts_full_width__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! layouts/full-width */ "./layouts/full-width.js");
/* harmony import */ var _components_simple_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/simple-search */ "./components/simple-search.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");



var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\_error.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function CustomError(_ref) {
  _s();

  var statusCode = _ref.statusCode;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      errorMessage = _useState[0],
      setErrorMessage = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleErrorMessage = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (statusCode === 404) {
                  setErrorMessage('404: Page Not Found');
                }

                if (statusCode === 500) {
                  setErrorMessage('500: Internal Server Error');
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleErrorMessage() {
        return _ref2.apply(this, arguments);
      };
    }();

    handleErrorMessage();
  }, [statusCode]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    id: "404",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(layouts_single_sub_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: errorMessage,
    subtitle: "Sorry, the page you are looking for cannot be found or there is an internal server issue on our end.",
    image: "https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg",
    height: "325px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(layouts_full_width__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "It's possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for."), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, ' ', "If you are a client, please get in touch with your", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/attorneys",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "blue-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("u", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Scarinci Hollenbeck attorney"))), ' ', "contact directly."), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "If you are looking to get in touch with an attorney under the terms as to becoming a new client please call 201-896-4100.")), __jsx(_components_simple_search__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "w-50 my-3 p-4 border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Or try visiting one of these pages on our site to narrow your search.")), __jsx("ul", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/attorneys",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "Attorneys"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/practice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "Practices"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/locations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, "Locations"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, "Firm News"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-events",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, "Firm Events"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/category/firm-insights",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "u-hover h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, "Firm Insights"))))))), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }));
}

_s(CustomError, "e8i4FkGYX3UA6zyyEkaHUNQN2JI=");

_c = CustomError;

function getInitialProps(_ref3) {
  var res = _ref3.res,
      err = _ref3.err;
  var statusCode; // If the res variable is defined it means nextjs
  // is in server side

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    // Something really bad/weird happen and status code
    // cannot be determined.
    statusCode = null;
  }

  return {
    statusCode: statusCode
  };
}

var _c;

$RefreshReg$(_c, "CustomError");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW1wbGUtc2VhcmNoLmpzIiwid2VicGFjazovL19OX0UvLi9sYXlvdXRzL2Z1bGwtd2lkdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvc2luZ2xlLXN1Yi1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcz9lNTZkIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiU2ltcGxlU2VhcmNoIiwic2VhcmNoSWQiLCJ1c2VJbnB1dCIsInNlYXJjaElucHV0IiwidmFsdWUiLCJiaW5kU2VhcmNoSW5wdXQiLCJiaW5kIiwicmVzZXRTZWFyY2hJbnB1dCIsInJlc2V0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWF0VXJsIiwic3RyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJxIiwicGFnZSIsInRoZW4iLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIkZ1bGxXaWR0aCIsImNoaWxkcmVuIiwiSGVhZGVyQmNrR3JvdW5kIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJpbWFnZSIsImhlaWdodCIsIlNpbmdsZVN1YkhlYWRlciIsInRpdGxlIiwic3VidGl0bGUiLCJzcGFuIiwib2Zmc2V0IiwiY3JlYXRlTWFya3VwIiwiQ3VzdG9tRXJyb3IiLCJzdGF0dXNDb2RlIiwidXNlU3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7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LFFBQUksRUFBQyx1QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsQ0E3QkYsRUFvQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMseUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURGLENBcENGLENBTkYsQ0F0QkYsQ0FQRixDQURGLEVBbUZFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5GRixDQURGO0FBdUZEOztHQXhHdUJILFc7O0tBQUFBLFc7O0FBMEd4QixTQUFTTyxlQUFULFFBQXVDO0FBQUEsTUFBWkMsR0FBWSxTQUFaQSxHQUFZO0FBQUEsTUFBUEMsR0FBTyxTQUFQQSxHQUFPO0FBQ3JDLE1BQUlSLFVBQUosQ0FEcUMsQ0FFckM7QUFDQTs7QUFDQSxNQUFJTyxHQUFKLEVBQVM7QUFDUFAsY0FBVSxHQUFHTyxHQUFHLENBQUNQLFVBQWpCO0FBQ0QsR0FGRCxNQUVPLElBQUlRLEdBQUosRUFBUztBQUNkO0FBQ0E7QUFDQVIsY0FBVSxHQUFHUSxHQUFHLENBQUNSLFVBQWpCO0FBQ0QsR0FKTSxNQUlBO0FBQ0w7QUFDQTtBQUNBQSxjQUFVLEdBQUcsSUFBYjtBQUNEOztBQUNELFNBQU87QUFBRUEsY0FBVSxFQUFWQTtBQUFGLEdBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fZXJyb3IuNDUyYmZmMjhhMGVmNmQ1MDBkZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7IGFkZFJhbmRvbUtleSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vdXRpbHMvaW5wdXQtaG9vayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVTZWFyY2goeyBzZWFyY2hJZD1cInNpbXBsZXNlYXJjaFwiIH0pIHtcclxuICBjb25zdCB7IHZhbHVlOiBzZWFyY2hJbnB1dCwgYmluZDogYmluZFNlYXJjaElucHV0LCByZXNldDogcmVzZXRTZWFyY2hJbnB1dCB9ID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybWF0VXJsID0gKHN0cikgPT4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcrJyk7XHJcbiAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiAnL3NlYXJjaCcsXHJcbiAgICAgIHF1ZXJ5OiB7IHE6IGZvcm1hdFVybChzZWFyY2hJbnB1dCksIHBhZ2U6IDEgfSAgICAgXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm13LTQ0N1wiPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSByb2xlPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPXtzZWFyY2hJZH0+XHJcbiAgICAgICAgICA8Rm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgIFNlYXJjaCBTaXRlXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIktleXdvcmQuLlwiIHsuLi5iaW5kU2VhcmNoSW5wdXR9IC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJkYW5nZXJcIj5cclxuICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcblxyXG5jb25zdCBGdWxsV2lkdGggPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVsbFdpZHRoO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IHsgY3JlYXRlTWFya3VwIH0gZnJvbSAndXRpbHMvaGVscGVycyc7XHJcblxyXG5jb25zdCBIZWFkZXJCY2tHcm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC40NSkscmdiYSgwLDAsMCwuNDUpKSwgdXJsKCR7cHJvcHMgPT4gcHJvcHMuaW1hZ2V9KSBuby1yZXBlYXQgNTAlO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDg1JSwgNTAlIDEwMCUsIDAgODUlLCAwIDApO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA4NSUsIDUwJSAxMDAlLCAwIDg1JSwgMCAwKTtcclxuICAke3Byb3BzID0+IHByb3BzLmhlaWdodH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVN1YkhlYWRlcih7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2UsIGhlaWdodCB9KSB7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXJCY2tHcm91bmQgaW1hZ2U9e2ltYWdlfSBoZWlnaHQ9e2hlaWdodH0gY2xhc3NOYW1lPVwianVtYm90cm9uIGp1bWJvdHJvbi1mbHVpZCBkLXByaW50LW5vbmVcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBzbT17MTJ9IG1kPXt7IHNwYW46IDcsIG9mZnNldDogMiB9fSBjbGFzc05hbWU9XCJiZy1ibGFjay1iYWNrZ3JvdW5kIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBpZD1cInJlZC1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcHJveGltYS1ib2xkIGJvcmRlci1ib3R0b21cIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJveGltYS1yZWd1bGFyIG10LTMgbWItNSBoMi1pdGFsaWNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17Y3JlYXRlTWFya3VwKHN1YnRpdGxlKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0hlYWRlckJja0dyb3VuZD5cclxuICApO1xyXG59OyIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccHR1bXVsdHlcXFxcc2l0ZXNcXFxcc2NhcmluY2lob2xsZW5iZWNrLmZyb250ZW5kLmNjXFxcXGNsaWVudFxcXFxwYWdlc1xcXFxfZXJyb3IuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IFNpbmdsZVN1YkhlYWRlciBmcm9tICdsYXlvdXRzL3NpbmdsZS1zdWItaGVhZGVyJztcclxuaW1wb3J0IEZ1bGxXaWR0aCBmcm9tICdsYXlvdXRzL2Z1bGwtd2lkdGgnO1xyXG5pbXBvcnQgU2ltcGxlU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvc2ltcGxlLXNlYXJjaCc7XHJcbmltcG9ydCB7IGhlYWRlcnMgfSBmcm9tICd1dGlscy9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUVycm9yKHsgc3RhdHVzQ29kZSB9KSB7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVFcnJvck1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmKHN0YXR1c0NvZGUgPT09IDQwNCkge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnNDA0OiBQYWdlIE5vdCBGb3VuZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihzdGF0dXNDb2RlID09PSA1MDApIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJzUwMDogSW50ZXJuYWwgU2VydmVyIEVycm9yJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvck1lc3NhZ2UoKTtcclxuICB9LCBbc3RhdHVzQ29kZV0pO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGlkPVwiNDA0XCI+XHJcbiAgICAgICAgPFNpbmdsZVN1YkhlYWRlclxyXG4gICAgICAgICAgdGl0bGU9e2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgIHN1YnRpdGxlPVwiU29ycnksIHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgY2Fubm90IGJlIGZvdW5kIG9yIHRoZXJlIGlzIGFuIGludGVybmFsIHNlcnZlciBpc3N1ZSBvbiBvdXIgZW5kLlwiXHJcbiAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vc2hoY3NnbXZzbmRteG1wcS5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vMjAyMC8wNS9Ta3lzY3JhcGVycy11cC0xODAweDQwMC1KUEcuanBnXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMyNXB4XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGdWxsV2lkdGg+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgICAgICBJdCZhcG9zO3MgcG9zc2libGUgeW91IGVudGVyZWQgdGhlIGFkZHJlc3MgaW5jb3JyZWN0bHkgb3Igd2UgbW92ZWQgdGhlIGRlc2lyZWQgcGFnZS4gVHJ5IHNlYXJjaGluZyBvdXIgc2l0ZSB0byBmaW5kIHdoYXQgeW91IGFyZSBsb29raW5nIGZvci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICBJZiB5b3UgYXJlIGEgY2xpZW50LCBwbGVhc2UgZ2V0IGluIHRvdWNoIHdpdGggeW91clxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdHRvcm5leXNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsdWUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHU+U2NhcmluY2kgSG9sbGVuYmVjayBhdHRvcm5leTwvdT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICBjb250YWN0IGRpcmVjdGx5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgICAgICBJZiB5b3UgYXJlIGxvb2tpbmcgdG8gZ2V0IGluIHRvdWNoIHdpdGggYW4gYXR0b3JuZXkgdW5kZXIgdGhlIHRlcm1zIGFzIHRvIGJlY29taW5nIGEgbmV3IGNsaWVudCBwbGVhc2UgY2FsbCAyMDEtODk2LTQxMDAuXHJcbiAgICAgICAgICAgIDwvcD4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNpbXBsZVNlYXJjaCAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUwIG15LTMgcC00IGJvcmRlclwiPlxyXG4gICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgIE9yIHRyeSB2aXNpdGluZyBvbmUgb2YgdGhlc2UgcGFnZXMgb24gb3VyIHNpdGUgdG8gbmFycm93IHlvdXIgc2VhcmNoLlxyXG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2g1PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXR0b3JuZXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInUtaG92ZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBBdHRvcm5leXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmFjdGljZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJhY3RpY2VzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9jYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInUtaG92ZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yeS9maXJtLW5ld3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidS1ob3ZlciBoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEZpcm0gTmV3c1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5L2Zpcm0tZXZlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInUtaG92ZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBGaXJtIEV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5L2Zpcm0taW5zaWdodHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidS1ob3ZlciBoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEZpcm0gSW5zaWdodHNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICA8L0Z1bGxXaWR0aD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcclxuICBsZXQgc3RhdHVzQ29kZTtcclxuICAvLyBJZiB0aGUgcmVzIHZhcmlhYmxlIGlzIGRlZmluZWQgaXQgbWVhbnMgbmV4dGpzXHJcbiAgLy8gaXMgaW4gc2VydmVyIHNpZGVcclxuICBpZiAocmVzKSB7XHJcbiAgICBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGU7XHJcbiAgfSBlbHNlIGlmIChlcnIpIHtcclxuICAgIC8vIGlmIHRoZXJlIGlzIGFueSBlcnJvciBpbiB0aGUgYXBwIGl0IHNob3VsZFxyXG4gICAgLy8gcmV0dXJuIHRoZSBzdGF0dXMgY29kZSBmcm9tIGhlcmVcclxuICAgIHN0YXR1c0NvZGUgPSBlcnIuc3RhdHVzQ29kZTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gU29tZXRoaW5nIHJlYWxseSBiYWQvd2VpcmQgaGFwcGVuIGFuZCBzdGF0dXMgY29kZVxyXG4gICAgLy8gY2Fubm90IGJlIGRldGVybWluZWQuXHJcbiAgICBzdGF0dXNDb2RlID0gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==