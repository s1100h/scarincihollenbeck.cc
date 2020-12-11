webpackHotUpdate_N_E("pages/author/[slug]",{

/***/ "./node_modules/graphql-client/index.js":
/*!**********************************************!*\
  !*** ./node_modules/graphql-client/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function highlightQuery (query, errors) {
  var locations = errors.map(function (e) { return e.locations })
    .reduce(function (a, b) {
      return a.concat(b)
    }, [])

  var queryHighlight = ''

  query.split('\n').forEach(function (row, index) {
    var line = index + 1
    var lineErrors = locations.filter(function (loc) { return loc && loc.line === line })

    queryHighlight += row + '\n'

    if (lineErrors.length) {
      var errorHighlight = []

      lineErrors.forEach(function (line) {
        for (var i = 0; i < 8; i++) {
          errorHighlight[line.column + i] = '~'
        }
      })

      for (var i = 0; i < errorHighlight.length; i++) {
        queryHighlight += errorHighlight[i] || ' '
      }
      queryHighlight += '\n'
    }
  })

  return queryHighlight
}

module.exports = function (params) {
  __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js")
  if (!params.url) throw new Error('Missing url parameter')

  var headers = new Headers(params.headers)
  headers.append('Content-Type', 'application/json')

  return {
    query: function (query, variables, onResponse) {

      var req = new Request(params.url, {
        method: 'POST',
        body: JSON.stringify({
          query: query,
          variables: variables
        }),
        headers: headers,
        credentials: params.credentials
      })

      return fetch(req)
      .then(function (res) {
        onResponse && onResponse(req, res)

        return res.json()
      }).then(function (body) {
        if (body.errors && body.errors.length) {
          body.highlightQuery = highlightQuery(query, body.errors)
        }

        return body
      })
    }
  }
}


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;
//# sourceMappingURL=whatwg-fetch.js.map

/***/ }),

/***/ "./pages/author/[slug].js":
/*!********************************!*\
  !*** ./pages/author/[slug].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Author; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/breadcrumbs */ "./components/breadcrumbs.js");
/* harmony import */ var layouts_archive_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/archive-layout */ "./layouts/archive-layout.js");
/* harmony import */ var components_archives_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/archives/body */ "./components/archives/body.js");
/* harmony import */ var components_author_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/author/sidebar */ "./components/author/sidebar.js");
/* harmony import */ var components_site_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/site-loader */ "./components/site-loader.js");
/* harmony import */ var components_error_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/error-message */ "./components/error-message.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");
/* harmony import */ var utils_graphql_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/graphql-client */ "./utils/graphql-client.js");
/* harmony import */ var queries_home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! queries/home */ "./queries/home.js");
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\author\\[slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var __N_SSG = true;
function Author(_ref) {
  var firmNews = _ref.firmNews,
      firmEvents = _ref.firmEvents,
      firmInsights = _ref.firmInsights;

  if (results.length <= 0) {
    return __jsx("div", {
      className: "py-5 my-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(components_site_loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 10
      }
    }));
  } // page: query.page || 1,
  // pages: response.pages || 1,
  // results: response.results || [],
  // authorBio


  return __jsx("div", {
    className: "mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "Well get back to this...", __jsx(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
}
_c = Author;

var _c;

$RefreshReg$(_c, "Author");

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

/***/ }),

/***/ "./utils/graphql-client.js":
/*!*********************************!*\
  !*** ./utils/graphql-client.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {var client = __webpack_require__(/*! graphql-client */ "./node_modules/graphql-client/index.js")({
  url: process.env.GRAPHQLENDPOINT
});

/* harmony default export */ __webpack_exports__["default"] = (client);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwtY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvZmV0Y2gvd2hhdHdnLWZldGNoLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRob3IvW3NsdWddLmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy9ncmFwaHFsLWNsaWVudC5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJmaXJtTmV3cyIsImZpcm1FdmVudHMiLCJmaXJtSW5zaWdodHMiLCJyZXN1bHRzIiwibGVuZ3RoIiwiY2xpZW50IiwicmVxdWlyZSIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJHUkFQSFFMRU5EUE9JTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELGtDQUFrQzs7QUFFeEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1CQUFPLENBQUMsaUZBQWtCO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBTyxDQUFDLG9GQUFjO0FBQ3RCOzs7Ozs7Ozs7Ozs7O0FDTGEsK0NBQStDLDZCQUE2QiwrQkFBK0I7QUFDeEgsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0EsTUFBVCxPQUlaO0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFEREMsWUFDQyxRQUREQSxZQUNDOztBQUVELE1BQUdDLE9BQU8sQ0FBQ0MsTUFBUixJQUFpQixDQUFwQixFQUF1QjtBQUNyQixXQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURILENBREY7QUFLRCxHQVJBLENBV0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXNCRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsQ0FERjtBQTBCRDtLQTlDdUJMLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnhCO0FBQUEsMkRBQU1NLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLENBQTBCO0FBQ3ZDQyxLQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQURzQixDQUExQixDQUFmOztBQUllTCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRob3IvW3NsdWddLjlmOWRiN2FjM2RjZDgzODgxZDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBoaWdobGlnaHRRdWVyeSAocXVlcnksIGVycm9ycykge1xuICB2YXIgbG9jYXRpb25zID0gZXJyb3JzLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5sb2NhdGlvbnMgfSlcbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5jb25jYXQoYilcbiAgICB9LCBbXSlcblxuICB2YXIgcXVlcnlIaWdobGlnaHQgPSAnJ1xuXG4gIHF1ZXJ5LnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgdmFyIGxpbmUgPSBpbmRleCArIDFcbiAgICB2YXIgbGluZUVycm9ycyA9IGxvY2F0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGxvYykgeyByZXR1cm4gbG9jICYmIGxvYy5saW5lID09PSBsaW5lIH0pXG5cbiAgICBxdWVyeUhpZ2hsaWdodCArPSByb3cgKyAnXFxuJ1xuXG4gICAgaWYgKGxpbmVFcnJvcnMubGVuZ3RoKSB7XG4gICAgICB2YXIgZXJyb3JIaWdobGlnaHQgPSBbXVxuXG4gICAgICBsaW5lRXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICBlcnJvckhpZ2hsaWdodFtsaW5lLmNvbHVtbiArIGldID0gJ34nXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JIaWdobGlnaHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcXVlcnlIaWdobGlnaHQgKz0gZXJyb3JIaWdobGlnaHRbaV0gfHwgJyAnXG4gICAgICB9XG4gICAgICBxdWVyeUhpZ2hsaWdodCArPSAnXFxuJ1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcXVlcnlIaWdobGlnaHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHJlcXVpcmUoJ2lzb21vcnBoaWMtZmV0Y2gnKVxuICBpZiAoIXBhcmFtcy51cmwpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyB1cmwgcGFyYW1ldGVyJylcblxuICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHBhcmFtcy5oZWFkZXJzKVxuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuXG4gIHJldHVybiB7XG4gICAgcXVlcnk6IGZ1bmN0aW9uIChxdWVyeSwgdmFyaWFibGVzLCBvblJlc3BvbnNlKSB7XG5cbiAgICAgIHZhciByZXEgPSBuZXcgUmVxdWVzdChwYXJhbXMudXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBjcmVkZW50aWFsczogcGFyYW1zLmNyZWRlbnRpYWxzXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gZmV0Y2gocmVxKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBvblJlc3BvbnNlICYmIG9uUmVzcG9uc2UocmVxLCByZXMpXG5cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgaWYgKGJvZHkuZXJyb3JzICYmIGJvZHkuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGJvZHkuaGlnaGxpZ2h0UXVlcnkgPSBoaWdobGlnaHRRdWVyeShxdWVyeSwgYm9keS5lcnJvcnMpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9keVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsIi8vIHRoZSB3aGF0d2ctZmV0Y2ggcG9seWZpbGwgaW5zdGFsbHMgdGhlIGZldGNoKCkgZnVuY3Rpb25cbi8vIG9uIHRoZSBnbG9iYWwgb2JqZWN0ICh3aW5kb3cgb3Igc2VsZilcbi8vXG4vLyBSZXR1cm4gdGhhdCBhcyB0aGUgZXhwb3J0IGZvciB1c2UgaW4gV2VicGFjaywgQnJvd3NlcmlmeSBldGMuXG5yZXF1aXJlKCd3aGF0d2ctZmV0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gc2VsZi5mZXRjaC5iaW5kKHNlbGYpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7LyogZ2xvYmFscyBzZWxmICovZXhwb3J0cy5IZWFkZXJzPXNlbGYuSGVhZGVycztleHBvcnRzLlJlcXVlc3Q9c2VsZi5SZXF1ZXN0O2V4cG9ydHMuUmVzcG9uc2U9c2VsZi5SZXNwb25zZTtleHBvcnRzLmZldGNoPXNlbGYuZmV0Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aGF0d2ctZmV0Y2guanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnY29tcG9uZW50cy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBBcmNoaXZlTGF5b3V0IGZyb20gJ2xheW91dHMvYXJjaGl2ZS1sYXlvdXQnO1xyXG5pbXBvcnQgQm9keSBmcm9tICdjb21wb25lbnRzL2FyY2hpdmVzL2JvZHknO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICdjb21wb25lbnRzL2F1dGhvci9zaWRlYmFyJztcclxuaW1wb3J0IFNpdGVMb2FkZXIgZnJvbSAnY29tcG9uZW50cy9zaXRlLWxvYWRlcic7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnY29tcG9uZW50cy9lcnJvci1tZXNzYWdlJztcclxuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gJ3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJ3V0aWxzL2dyYXBocWwtY2xpZW50JztcclxuaW1wb3J0IHsgYmxvZ0FydGljbGVzUXVlcnkgfSBmcm9tICdxdWVyaWVzL2hvbWUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3Ioe1xyXG4gIGZpcm1OZXdzLFxyXG4gIGZpcm1FdmVudHMsXHJcbiAgZmlybUluc2lnaHRzXHJcbn0pIHtcclxuXHJcbiAgaWYocmVzdWx0cy5sZW5ndGggPD0wKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgbXktNVwiPlxyXG4gICAgICAgICA8U2l0ZUxvYWRlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIFxyXG4gIC8vIHBhZ2U6IHF1ZXJ5LnBhZ2UgfHwgMSxcclxuICAvLyBwYWdlczogcmVzcG9uc2UucGFnZXMgfHwgMSxcclxuICAvLyByZXN1bHRzOiByZXNwb25zZS5yZXN1bHRzIHx8IFtdLFxyXG4gIC8vIGF1dGhvckJpb1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgey8qIDxOZXh0U2VvIG5vZm9sbG93IC8+XHJcbiAgICAgIDxBcmNoaXZlTGF5b3V0XHJcbiAgICAgICAgaGVhZGVyPXsoPEJyZWFkY3J1bWJzXHJcbiAgICAgICAgICBicmVhZENydW1iPXtbY3VycmVudFVzZXIsIHBhZ2VdfVxyXG4gICAgICAgICAgY2F0ZWdvcnlTbHVnPXtjdXJyZW50VXNlcn1cclxuICAgICAgICAvPil9XHJcbiAgICAgICAgYm9keT17KFxyXG4gICAgICAgICAgPEJvZHlcclxuICAgICAgICAgICAgcmVzdWx0cz17cmVzdWx0c31cclxuICAgICAgICAgICAgdGVybT17Y3VycmVudFVzZXJ9XHJcbiAgICAgICAgICAgIHBhZ2VzPXtwYWdlc31cclxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgIG5ld3M9e2Zpcm1OZXdzfVxyXG4gICAgICAgICAgICBldmVudHM9e2Zpcm1FdmVudHN9XHJcbiAgICAgICAgICAgIGluc2lnaHQ9e2Zpcm1JbnNpZ2h0c30gICAgICAgICAgICBcclxuICAgICAgICAgICAgcGF0aG5hbWU9e2AvYXV0aG9yLyR7Y3VycmVudFVzZXJ9YH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBzaWRlYmFyPXsoPFNpZGViYXIgYmlvPXtiaW99IHByYWN0aWNlcz17cHJhY3RpY2VzfSAvPil9XHJcbiAgICAgIC8+ICovfVxyXG4gICAgICBXZWxsIGdldCBiYWNrIHRvIHRoaXMuLi5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZpcm1OZXdzOiBmaXJtTmV3c0NvbnRlbnQgfHwgW10sXHJcbiAgICAgIGZpcm1FdmVudHM6IGZpcm1FdmVudHNDb250ZW50IHx8IFtdLFxyXG4gICAgICBmaXJtSW5zaWdodHM6IGZpcm1JbnNpZ2h0c0NvbnRlbnQgfHwgW10sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnZ3JhcGhxbC1jbGllbnQnKSh7XHJcbiAgdXJsOiBwcm9jZXNzLmVudi5HUkFQSFFMRU5EUE9JTlRcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==