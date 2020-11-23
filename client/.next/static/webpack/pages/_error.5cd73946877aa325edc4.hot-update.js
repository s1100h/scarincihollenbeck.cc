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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW1wbGUtc2VhcmNoLmpzIiwid2VicGFjazovL19OX0UvLi9sYXlvdXRzL2Z1bGwtd2lkdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvc2luZ2xlLXN1Yi1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2Vycm9yLmpzIl0sIm5hbWVzIjpbIlNpbXBsZVNlYXJjaCIsInNlYXJjaElkIiwidXNlSW5wdXQiLCJzZWFyY2hJbnB1dCIsInZhbHVlIiwiYmluZFNlYXJjaElucHV0IiwiYmluZCIsInJlc2V0U2VhcmNoSW5wdXQiLCJyZXNldCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdFVybCIsInN0ciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicSIsInBhZ2UiLCJ0aGVuIiwid2luZG93Iiwic2Nyb2xsVG8iLCJGdWxsV2lkdGgiLCJjaGlsZHJlbiIsIkhlYWRlckJja0dyb3VuZCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaW1hZ2UiLCJoZWlnaHQiLCJTaW5nbGVTdWJIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwic3BhbiIsIm9mZnNldCIsImNyZWF0ZU1hcmt1cCIsIkN1c3RvbUVycm9yIiwic3RhdHVzQ29kZSIsInVzZVN0YXRlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwidXNlRWZmZWN0IiwiaGFuZGxlRXJyb3JNZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsT0FBbUQ7QUFBQTs7QUFBQSwyQkFBM0JDLFFBQTJCO0FBQUEsTUFBM0JBLFFBQTJCLDhCQUFsQixjQUFrQjs7QUFBQSxrQkFDZUMsaUVBQVEsQ0FBQyxFQUFELENBRHZCO0FBQUEsTUFDakRDLFdBRGlELGFBQ3hEQyxLQUR3RDtBQUFBLE1BQzlCQyxlQUQ4QixhQUNwQ0MsSUFEb0M7QUFBQSxNQUNOQyxnQkFETSxhQUNiQyxLQURhOztBQUdoRSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxXQUFKLEdBQWtCQyxPQUFsQixDQUEwQixLQUExQixFQUFpQyxHQUFqQyxDQUFUO0FBQUEsS0FBbEI7O0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNWQyxjQUFRLEVBQUUsU0FEQTtBQUVWQyxXQUFLLEVBQUU7QUFBRUMsU0FBQyxFQUFFUixTQUFTLENBQUNULFdBQUQsQ0FBZDtBQUE2QmtCLFlBQUksRUFBRTtBQUFuQztBQUZHLEtBQVosRUFJQ0MsSUFKRCxDQUlNO0FBQUEsYUFBTUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQU47QUFBQSxLQUpOO0FBS0QsR0FSRDs7QUFVQSxTQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBTSxZQUFRLEVBQUVmLFlBQWhCO0FBQThCLFFBQUksRUFBQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRCxDQUFNLEtBQU47QUFBWSxhQUFTLEVBQUVSLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLEVBTUUsTUFBQyw0REFBRCxDQUFNLE9BQU47QUFBYyxRQUFJLEVBQUMsTUFBbkI7QUFBMEIsZUFBVyxFQUFDO0FBQXRDLEtBQXNESSxlQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkYsQ0FERixFQVNFLE1BQUMsOERBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLENBREYsQ0FERjtBQWlCRDs7R0E5QnVCTCxZO1VBQ3lERSx5RDs7O0tBRHpERixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSeEI7QUFDQTtBQUNBOztBQUVBLElBQU15QixTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNsQyxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQURILENBREYsQ0FERixDQURGO0FBU0QsQ0FWRDs7S0FBTUQsUztBQVlTQSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUUsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJVQUNpRCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FEdEQsRUFRakIsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsTUFBVjtBQUFBLENBUlksQ0FBckI7S0FBTUwsZTtBQVdTLFNBQVNNLGVBQVQsT0FBNkQ7QUFBQSxNQUFsQ0MsS0FBa0MsUUFBbENBLEtBQWtDO0FBQUEsTUFBM0JDLFFBQTJCLFFBQTNCQSxRQUEyQjtBQUFBLE1BQWpCSixLQUFpQixRQUFqQkEsS0FBaUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFFMUUsU0FDRSxNQUFDLGVBQUQ7QUFBaUIsU0FBSyxFQUFFRCxLQUF4QjtBQUErQixVQUFNLEVBQUVDLE1BQXZDO0FBQStDLGFBQVMsRUFBQyx3Q0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRTtBQUFFSSxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFNLEVBQUU7QUFBbkIsS0FBakI7QUFBeUMsYUFBUyxFQUFDLGdDQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxNQUFFLEVBQUMsV0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyx1Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVESCxLQUF2RCxDQUZGLEVBR0U7QUFBSSxhQUFTLEVBQUMscUNBQWQ7QUFBb0QsMkJBQXVCLEVBQUVJLGtFQUFZLENBQUNILFFBQUQsQ0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQWVEO01BakJ1QkYsZTtBQWlCdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBc0Y7QUFDN0c7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU00sV0FBVCxPQUFxQztBQUFBOztBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxFQUFELENBREM7QUFBQSxNQUMzQ0MsWUFEMkM7QUFBQSxNQUM3QkMsZUFENkI7O0FBR2xEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxrQkFBa0I7QUFBQSxtTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCLG9CQUFHTCxVQUFVLEtBQUssR0FBbEIsRUFBdUI7QUFDckJHLGlDQUFlLENBQUMscUJBQUQsQ0FBZjtBQUNEOztBQUVELG9CQUFHSCxVQUFVLEtBQUssR0FBbEIsRUFBdUI7QUFDckJHLGlDQUFlLENBQUMsNEJBQUQsQ0FBZjtBQUNEOztBQVB3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFsQkUsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLE9BQXhCOztBQVVBQSxzQkFBa0I7QUFDbkIsR0FaUSxFQVlOLENBQUNMLFVBQUQsQ0FaTSxDQUFUO0FBY0EsU0FDRSxtRUFDRTtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQ0UsU0FBSyxFQUFFRSxZQURUO0FBRUUsWUFBUSxFQUFDLHNHQUZYO0FBR0UsU0FBSyxFQUFDLDhGQUhSO0FBSUUsVUFBTSxFQUFDLE9BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdKQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCx3REFHRyxHQUhILEVBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLENBREYsQ0FKRixFQVNHLEdBVEgsc0JBSkYsRUFnQkU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlJQWhCRixDQURGLEVBcUJFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixFQXNCRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkVBREYsQ0FERixFQU1FO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBREYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERixDQVJGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0FmRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0F0QkYsRUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsdUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLENBN0JGLEVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLHlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FERixDQXBDRixDQU5GLENBdEJGLENBUEYsQ0FERixFQW1GRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuRkYsQ0FERjtBQXVGRDs7R0F4R3VCSCxXOztLQUFBQSxXOztBQTBHeEIsU0FBU08sZUFBVCxRQUF1QztBQUFBLE1BQVpDLEdBQVksU0FBWkEsR0FBWTtBQUFBLE1BQVBDLEdBQU8sU0FBUEEsR0FBTztBQUNyQyxNQUFJUixVQUFKLENBRHFDLENBRXJDO0FBQ0E7O0FBQ0EsTUFBSU8sR0FBSixFQUFTO0FBQ1BQLGNBQVUsR0FBR08sR0FBRyxDQUFDUCxVQUFqQjtBQUNELEdBRkQsTUFFTyxJQUFJUSxHQUFKLEVBQVM7QUFDZDtBQUNBO0FBQ0FSLGNBQVUsR0FBR1EsR0FBRyxDQUFDUixVQUFqQjtBQUNELEdBSk0sTUFJQTtBQUNMO0FBQ0E7QUFDQUEsY0FBVSxHQUFHLElBQWI7QUFDRDs7QUFDRCxTQUFPO0FBQUVBLGNBQVUsRUFBVkE7QUFBRixHQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLjVjZDczOTQ2ODc3YWEzMjVlZGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgeyBhZGRSYW5kb21LZXkgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL3V0aWxzL2lucHV0LWhvb2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlU2VhcmNoKHsgc2VhcmNoSWQ9XCJzaW1wbGVzZWFyY2hcIiB9KSB7XHJcbiAgY29uc3QgeyB2YWx1ZTogc2VhcmNoSW5wdXQsIGJpbmQ6IGJpbmRTZWFyY2hJbnB1dCwgcmVzZXQ6IHJlc2V0U2VhcmNoSW5wdXQgfSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1hdFVybCA9IChzdHIpID0+IHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnKycpO1xyXG4gICAgUm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogJy9zZWFyY2gnLFxyXG4gICAgICBxdWVyeTogeyBxOiBmb3JtYXRVcmwoc2VhcmNoSW5wdXQpLCBwYWdlOiAxIH0gICAgIFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdy00NDdcIj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gcm9sZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD17c2VhcmNoSWR9PlxyXG4gICAgICAgICAgPEZvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICBTZWFyY2ggU2l0ZVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJLZXl3b3JkLi5cIiB7Li4uYmluZFNlYXJjaElucHV0fSAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICBTZWFyY2hcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5cclxuY29uc3QgRnVsbFdpZHRoID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bGxXaWR0aDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCB7IGNyZWF0ZU1hcmt1cCB9IGZyb20gJ3V0aWxzL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgSGVhZGVyQmNrR3JvdW5kID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNDUpLHJnYmEoMCwwLDAsLjQ1KSksIHVybCgke3Byb3BzID0+IHByb3BzLmltYWdlfSkgbm8tcmVwZWF0IDUwJTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA4NSUsIDUwJSAxMDAlLCAwIDg1JSwgMCAwKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgODUlLCA1MCUgMTAwJSwgMCA4NSUsIDAgMCk7XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVTdWJIZWFkZXIoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlLCBoZWlnaHQgfSkge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyQmNrR3JvdW5kIGltYWdlPXtpbWFnZX0gaGVpZ2h0PXtoZWlnaHR9IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb24tZmx1aWQgZC1wcmludC1ub25lXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc209ezEyfSBtZD17eyBzcGFuOiA3LCBvZmZzZXQ6IDIgfX0gY2xhc3NOYW1lPVwiYmctYmxhY2stYmFja2dyb3VuZCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJyZWQtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHByb3hpbWEtYm9sZCBib3JkZXItYm90dG9tXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb3hpbWEtcmVndWxhciBtdC0zIG1iLTUgaDItaXRhbGljXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2NyZWF0ZU1hcmt1cChzdWJ0aXRsZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9IZWFkZXJCY2tHcm91bmQ+XHJcbiAgKTtcclxufTsiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHB0dW11bHR5XFxcXHNpdGVzXFxcXHNjYXJpbmNpaG9sbGVuYmVjay5mcm9udGVuZC5jY1xcXFxjbGllbnRcXFxccGFnZXNcXFxcX2Vycm9yLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBTaW5nbGVTdWJIZWFkZXIgZnJvbSAnbGF5b3V0cy9zaW5nbGUtc3ViLWhlYWRlcic7XHJcbmltcG9ydCBGdWxsV2lkdGggZnJvbSAnbGF5b3V0cy9mdWxsLXdpZHRoJztcclxuaW1wb3J0IFNpbXBsZVNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL3NpbXBsZS1zZWFyY2gnO1xyXG5pbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSAndXRpbHMvaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21FcnJvcih7IHN0YXR1c0NvZGUgfSkge1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZSBdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRXJyb3JNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihzdGF0dXNDb2RlID09PSA0MDQpIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJzQwNDogUGFnZSBOb3QgRm91bmQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoc3RhdHVzQ29kZSA9PT0gNTAwKSB7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCc1MDA6IEludGVybmFsIFNlcnZlciBFcnJvcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JNZXNzYWdlKCk7XHJcbiAgfSwgW3N0YXR1c0NvZGVdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cIjQwNFwiPlxyXG4gICAgICAgIDxTaW5nbGVTdWJIZWFkZXJcclxuICAgICAgICAgIHRpdGxlPXtlcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICBzdWJ0aXRsZT1cIlNvcnJ5LCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGNhbm5vdCBiZSBmb3VuZCBvciB0aGVyZSBpcyBhbiBpbnRlcm5hbCBzZXJ2ZXIgaXNzdWUgb24gb3VyIGVuZC5cIlxyXG4gICAgICAgICAgaW1hZ2U9XCJodHRwczovL3NoaGNzZ212c25kbXhtcHEubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLzIwMjAvMDUvU2t5c2NyYXBlcnMtdXAtMTgwMHg0MDAtSlBHLmpwZ1wiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMjVweFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RnVsbFdpZHRoPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgSXQmYXBvcztzIHBvc3NpYmxlIHlvdSBlbnRlcmVkIHRoZSBhZGRyZXNzIGluY29ycmVjdGx5IG9yIHdlIG1vdmVkIHRoZSBkZXNpcmVkIHBhZ2UuIFRyeSBzZWFyY2hpbmcgb3VyIHNpdGUgdG8gZmluZCB3aGF0IHlvdSBhcmUgbG9va2luZyBmb3IuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgSWYgeW91IGFyZSBhIGNsaWVudCwgcGxlYXNlIGdldCBpbiB0b3VjaCB3aXRoIHlvdXJcclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXR0b3JuZXlzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibHVlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1PlNjYXJpbmNpIEhvbGxlbmJlY2sgYXR0b3JuZXk8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgY29udGFjdCBkaXJlY3RseS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgSWYgeW91IGFyZSBsb29raW5nIHRvIGdldCBpbiB0b3VjaCB3aXRoIGFuIGF0dG9ybmV5IHVuZGVyIHRoZSB0ZXJtcyBhcyB0byBiZWNvbWluZyBhIG5ldyBjbGllbnQgcGxlYXNlIGNhbGwgMjAxLTg5Ni00MTAwLlxyXG4gICAgICAgICAgICA8L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTaW1wbGVTZWFyY2ggLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01MCBteS0zIHAtNCBib3JkZXJcIj5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICBPciB0cnkgdmlzaXRpbmcgb25lIG9mIHRoZXNlIHBhZ2VzIG9uIG91ciBzaXRlIHRvIG5hcnJvdyB5b3VyIHNlYXJjaC5cclxuICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oNT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F0dG9ybmV5c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQXR0b3JuZXlzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJhY3RpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidS1ob3ZlciBoNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByYWN0aWNlc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2F0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcnkvZmlybS1uZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInUtaG92ZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBGaXJtIE5ld3NcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yeS9maXJtLWV2ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1LWhvdmVyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRmlybSBFdmVudHNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yeS9maXJtLWluc2lnaHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInUtaG92ZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBGaXJtIEluc2lnaHRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgPC9GdWxsV2lkdGg+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoeyByZXMsIGVyciB9KSB7XHJcbiAgbGV0IHN0YXR1c0NvZGU7XHJcbiAgLy8gSWYgdGhlIHJlcyB2YXJpYWJsZSBpcyBkZWZpbmVkIGl0IG1lYW5zIG5leHRqc1xyXG4gIC8vIGlzIGluIHNlcnZlciBzaWRlXHJcbiAgaWYgKHJlcykge1xyXG4gICAgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xyXG4gIH0gZWxzZSBpZiAoZXJyKSB7XHJcbiAgICAvLyBpZiB0aGVyZSBpcyBhbnkgZXJyb3IgaW4gdGhlIGFwcCBpdCBzaG91bGRcclxuICAgIC8vIHJldHVybiB0aGUgc3RhdHVzIGNvZGUgZnJvbSBoZXJlXHJcbiAgICBzdGF0dXNDb2RlID0gZXJyLnN0YXR1c0NvZGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFNvbWV0aGluZyByZWFsbHkgYmFkL3dlaXJkIGhhcHBlbiBhbmQgc3RhdHVzIGNvZGVcclxuICAgIC8vIGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxyXG4gICAgc3RhdHVzQ29kZSA9IG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN0YXR1c0NvZGUgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=