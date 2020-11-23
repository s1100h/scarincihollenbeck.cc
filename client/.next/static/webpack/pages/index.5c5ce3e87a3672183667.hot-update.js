webpackHotUpdate_N_E("pages/index",{

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var components_frontpage_new_dawn_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/frontpage/new-dawn-header */ "./components/frontpage/new-dawn-header.js");
/* harmony import */ var components_frontpage_column_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/frontpage/column-content */ "./components/frontpage/column-content.js");
/* harmony import */ var components_frontpage_full_width_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/frontpage/full-width-content */ "./components/frontpage/full-width-content.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");
/* harmony import */ var utils_json_ld_schemas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/json-ld-schemas */ "./utils/json-ld-schemas.js");
/* harmony import */ var utils_graphql_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/graphql-client */ "./utils/graphql-client.js");
/* harmony import */ var queries_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! queries/home */ "./queries/home.js");
var _jsxFileName = "C:\\Users\\ptumulty\\sites\\scarincihollenbeck.frontend.cc\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var __N_SSP = true;
function Home(_ref) {
  var seo = _ref.seo,
      posts = _ref.posts,
      locations = _ref.locations,
      corePractices = _ref.corePractices;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: seo.title,
    description: seo.metaDescription,
    canonical: "https://scarincihollenbeck.com/",
    openGraph: {
      type: 'website',
      url: 'https://scarincihollenbeck.com/',
      title: 'Scarinci Hollenbeck',
      description: seo.metaDescription,
      images: [{
        url: 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png',
        width: 750,
        height: 350,
        alt: 'Scarinci Hollenbeck'
      }],
      site_name: 'Scarinci Hollenbeck'
    },
    twitter: {
      handle: '@S_H_Law',
      site: 'https://scarincihollenbeck.com',
      cardType: 'With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm.'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("script", {
    key: "ScarinciHollenbeck",
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(Object(utils_json_ld_schemas__WEBPACK_IMPORTED_MODULE_9__["buildBusinessSchema"])())
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx(components_frontpage_new_dawn_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(components_frontpage_column_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    corePractices: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(corePractices, 'title'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(components_frontpage_full_width_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sortedPosts: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(posts, 'date'),
    sortedLocations: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(locations.offices, 'id'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ "./queries/home.js":
/*!*************************!*\
  !*** ./queries/home.js ***!
  \*************************/
/*! exports provided: metaDataQuery, firmNewsQuery, firmEventsQuery, officeLocationsQuery, corePracticesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaDataQuery", function() { return metaDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firmNewsQuery", function() { return firmNewsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firmEventsQuery", function() { return firmEventsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "officeLocationsQuery", function() { return officeLocationsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corePracticesQuery", function() { return corePracticesQuery; });
var metaDataQuery = "{\n  page(id: 29494, idType: DATABASE_ID) {\n    seo {\n      title\n      metaDesc\n    }\n  }\n}";
var firmNewsQuery = "{\n  category(id: \"98\", idType: DATABASE_ID) {\n    posts(first: 10) {\n      edges {\n        node {\n          title\n          id\n          link\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          categories(where: {name: \"Firm News\"}) {\n            nodes {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}";
var firmEventsQuery = "{\n  category(id: \"99\", idType: DATABASE_ID) {\n    posts(first: 10) {\n      edges {\n        node {\n          title\n          id\n          link\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          categories(where: {name: \"Firm Events\"}) {\n            nodes {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}";
var officeLocationsQuery = "{\n  officeLocations {\n    nodes {\n      title\n      id\n      officeMainInformation {\n        officeBuildingTitle\n        streetAddress\n        poBox\n        floor\n        addressLocality\n        addressRegion\n        addressCountry\n        phone\n        fax\n      }\n      slug\n      uri\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n    }\n  }\n}";
var corePracticesQuery = "{\n  \n}";

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

/***/ "./utils/graphql-client.js":
/*!*********************************!*\
  !*** ./utils/graphql-client.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {console.log('process.env.GRAPHQLENDPOINT', process.env.GRAPHQLENDPOINT);

var client = __webpack_require__(/*! graphql-client */ "./node_modules/graphql-client/index.js")({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwtY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvZmV0Y2gvd2hhdHdnLWZldGNoLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcXVlcmllcy9ob21lLmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy9ncmFwaHFsLWNsaWVudC5qcyJdLCJuYW1lcyI6WyJIb21lIiwic2VvIiwicG9zdHMiLCJsb2NhdGlvbnMiLCJjb3JlUHJhY3RpY2VzIiwidGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJ0eXBlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsIl9faHRtbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJidWlsZEJ1c2luZXNzU2NoZW1hIiwic29ydEJ5S2V5Iiwib2ZmaWNlcyIsIm1ldGFEYXRhUXVlcnkiLCJmaXJtTmV3c1F1ZXJ5IiwiZmlybUV2ZW50c1F1ZXJ5Iiwib2ZmaWNlTG9jYXRpb25zUXVlcnkiLCJjb3JlUHJhY3RpY2VzUXVlcnkiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIkdSQVBIUUxFTkRQT0lOVCIsImNsaWVudCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELGtDQUFrQzs7QUFFeEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1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dUJ2QixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU13QixhQUFhLHVHQUFuQjtBQVVBLElBQU1DLGFBQWEsNlpBQW5CO0FBd0JBLElBQU1DLGVBQWUsK1pBQXJCO0FBd0JBLElBQU1DLG9CQUFvQixzYUFBMUI7QUE0QkEsSUFBTUMsa0JBQWtCLGFBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRlBDO0FBQUFBLDhEQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQXZEOztBQUNBLElBQU1DLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLENBQTBCO0FBQ3ZDM0IsS0FBRyxFQUFFdUIsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRHNCLENBQTFCLENBQWY7O0FBSWVDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVjNWNlM2U4N2EzNjcyMTgzNjY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBoaWdobGlnaHRRdWVyeSAocXVlcnksIGVycm9ycykge1xuICB2YXIgbG9jYXRpb25zID0gZXJyb3JzLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5sb2NhdGlvbnMgfSlcbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5jb25jYXQoYilcbiAgICB9LCBbXSlcblxuICB2YXIgcXVlcnlIaWdobGlnaHQgPSAnJ1xuXG4gIHF1ZXJ5LnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgdmFyIGxpbmUgPSBpbmRleCArIDFcbiAgICB2YXIgbGluZUVycm9ycyA9IGxvY2F0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGxvYykgeyByZXR1cm4gbG9jICYmIGxvYy5saW5lID09PSBsaW5lIH0pXG5cbiAgICBxdWVyeUhpZ2hsaWdodCArPSByb3cgKyAnXFxuJ1xuXG4gICAgaWYgKGxpbmVFcnJvcnMubGVuZ3RoKSB7XG4gICAgICB2YXIgZXJyb3JIaWdobGlnaHQgPSBbXVxuXG4gICAgICBsaW5lRXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICBlcnJvckhpZ2hsaWdodFtsaW5lLmNvbHVtbiArIGldID0gJ34nXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JIaWdobGlnaHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcXVlcnlIaWdobGlnaHQgKz0gZXJyb3JIaWdobGlnaHRbaV0gfHwgJyAnXG4gICAgICB9XG4gICAgICBxdWVyeUhpZ2hsaWdodCArPSAnXFxuJ1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcXVlcnlIaWdobGlnaHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHJlcXVpcmUoJ2lzb21vcnBoaWMtZmV0Y2gnKVxuICBpZiAoIXBhcmFtcy51cmwpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyB1cmwgcGFyYW1ldGVyJylcblxuICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHBhcmFtcy5oZWFkZXJzKVxuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuXG4gIHJldHVybiB7XG4gICAgcXVlcnk6IGZ1bmN0aW9uIChxdWVyeSwgdmFyaWFibGVzLCBvblJlc3BvbnNlKSB7XG5cbiAgICAgIHZhciByZXEgPSBuZXcgUmVxdWVzdChwYXJhbXMudXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBjcmVkZW50aWFsczogcGFyYW1zLmNyZWRlbnRpYWxzXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gZmV0Y2gocmVxKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBvblJlc3BvbnNlICYmIG9uUmVzcG9uc2UocmVxLCByZXMpXG5cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgaWYgKGJvZHkuZXJyb3JzICYmIGJvZHkuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGJvZHkuaGlnaGxpZ2h0UXVlcnkgPSBoaWdobGlnaHRRdWVyeShxdWVyeSwgYm9keS5lcnJvcnMpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9keVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsIi8vIHRoZSB3aGF0d2ctZmV0Y2ggcG9seWZpbGwgaW5zdGFsbHMgdGhlIGZldGNoKCkgZnVuY3Rpb25cbi8vIG9uIHRoZSBnbG9iYWwgb2JqZWN0ICh3aW5kb3cgb3Igc2VsZilcbi8vXG4vLyBSZXR1cm4gdGhhdCBhcyB0aGUgZXhwb3J0IGZvciB1c2UgaW4gV2VicGFjaywgQnJvd3NlcmlmeSBldGMuXG5yZXF1aXJlKCd3aGF0d2ctZmV0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gc2VsZi5mZXRjaC5iaW5kKHNlbGYpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7LyogZ2xvYmFscyBzZWxmICovZXhwb3J0cy5IZWFkZXJzPXNlbGYuSGVhZGVycztleHBvcnRzLlJlcXVlc3Q9c2VsZi5SZXF1ZXN0O2V4cG9ydHMuUmVzcG9uc2U9c2VsZi5SZXNwb25zZTtleHBvcnRzLmZldGNoPXNlbGYuZmV0Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aGF0d2ctZmV0Y2guanMubWFwIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IE5ld0Rhd25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9mcm9udHBhZ2UvbmV3LWRhd24taGVhZGVyJztcclxuaW1wb3J0IENvbHVtbkNvbnRlbnQgZnJvbSAnY29tcG9uZW50cy9mcm9udHBhZ2UvY29sdW1uLWNvbnRlbnQnO1xyXG5pbXBvcnQgRnVsbFdpZHRoQ29udGVudCBmcm9tICdjb21wb25lbnRzL2Zyb250cGFnZS9mdWxsLXdpZHRoLWNvbnRlbnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IHsgaGVhZGVycywgc29ydEJ5S2V5IH0gZnJvbSAndXRpbHMvaGVscGVycyc7XHJcbmltcG9ydCB7IGJ1aWxkQnVzaW5lc3NTY2hlbWEgfSBmcm9tICd1dGlscy9qc29uLWxkLXNjaGVtYXMnXHJcbmltcG9ydCBjbGllbnQgZnJvbSAndXRpbHMvZ3JhcGhxbC1jbGllbnQnO1xyXG5pbXBvcnQgeyBib2R5UXVlcnksIGZvb3RlclF1ZXJ5IH0gZnJvbSAncXVlcmllcy9ob21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe1xyXG4gIHNlbyxcclxuICBwb3N0cyxcclxuICBsb2NhdGlvbnMsXHJcbiAgY29yZVByYWN0aWNlc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9e3Nlby50aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17c2VvLm1ldGFEZXNjcmlwdGlvbn1cclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL3NjYXJpbmNpaG9sbGVuYmVjay5jb20vXCJcclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHR5cGU6ICd3ZWJzaXRlJyxcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2NhcmluY2lob2xsZW5iZWNrLmNvbS8nLFxyXG4gICAgICAgICAgdGl0bGU6ICdTY2FyaW5jaSBIb2xsZW5iZWNrJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZW8ubWV0YURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NoaGNzZ212c25kbXhtcHEubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLzIwMTgvMDUvbm8taW1hZ2UtZm91bmQtZGlhbW9uZC5wbmcnLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA3NTAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgICAgICAgYWx0OiAnU2NhcmluY2kgSG9sbGVuYmVjaycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgc2l0ZV9uYW1lOiAnU2NhcmluY2kgSG9sbGVuYmVjaycsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6ICdAU19IX0xhdycsXHJcbiAgICAgICAgICBzaXRlOiAnaHR0cHM6Ly9zY2FyaW5jaWhvbGxlbmJlY2suY29tJyxcclxuICAgICAgICAgIGNhcmRUeXBlOiAnV2l0aCBhIGdyb3dpbmcgcHJhY3RpY2Ugb2YgbW9yZSB0aGFuIDcwKyBleHBlcmllbmNlZCBhdHRvcm5leXMsIFNjYXJpbmNpIEhvbGxlbmJlY2sgaXMgYW4gYWx0ZXJuYXRpdmUgdG8gYSBOYXRpb25hbCAyNTAgbGF3IGZpcm0uJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBrZXk9XCJTY2FyaW5jaUhvbGxlbmJlY2tcIlxyXG4gICAgICAgICAgdHlwZT0nYXBwbGljYXRpb24vbGQranNvbidcclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogSlNPTi5zdHJpbmdpZnkoYnVpbGRCdXNpbmVzc1NjaGVtYSgpKSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD4gXHJcbiAgICAgIDxOZXdEYXduSGVhZGVyIC8+XHJcbiAgICAgIDxDb250YWluZXI+ICAgICAgXHJcbiAgICAgICAgPENvbHVtbkNvbnRlbnQgY29yZVByYWN0aWNlcz17c29ydEJ5S2V5KGNvcmVQcmFjdGljZXMsICd0aXRsZScpfSAvPlxyXG4gICAgICAgIDxGdWxsV2lkdGhDb250ZW50XHJcbiAgICAgICAgICBzb3J0ZWRQb3N0cz17c29ydEJ5S2V5KHBvc3RzLCAnZGF0ZScpfVxyXG4gICAgICAgICAgc29ydGVkTG9jYXRpb25zPXtzb3J0QnlLZXkobG9jYXRpb25zLm9mZmljZXMsICdpZCcpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IFtzZW8sIG5ld3MsIGV2ZW50cywgbG9jYXRpb25zLCBjb3JlUHJhY3RpY2VzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9XUF9CQUNLRU5EfS93cC1qc29uL2Zyb250LXBhZ2UvbWV0YWAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSksXHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfV1BfQkFDS0VORH0vd3AtanNvbi9mcm9udC1wYWdlL25ld3NgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vZnJvbnQtcGFnZS9ldmVudHNgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vbG9jYXRpb24tcG9ydGFsL29mZmljZXNgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpLFxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1dQX0JBQ0tFTkR9L3dwLWpzb24vY29yZS1wcmFjdGljZXMvbGlzdGAsIHsgaGVhZGVycyB9KS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSkgICAgXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IHBvc3RzID0gWy4uLm5ld3MsIC4uLmV2ZW50c107XHJcblxyXG4gIC8qKiBBZGRpbmcgaW4gZ3JhcGhxbCBxdWVyaWVzICovXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzZW8sXHJcbiAgICAgIHBvc3RzLFxyXG4gICAgICBsb2NhdGlvbnMsXHJcbiAgICAgIGNvcmVQcmFjdGljZXNcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgbWV0YURhdGFRdWVyeSA9IGB7XHJcbiAgcGFnZShpZDogMjk0OTQsIGlkVHlwZTogREFUQUJBU0VfSUQpIHtcclxuICAgIHNlbyB7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIG1ldGFEZXNjXHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmlybU5ld3NRdWVyeSA9IGB7XHJcbiAgY2F0ZWdvcnkoaWQ6IFwiOThcIiwgaWRUeXBlOiBEQVRBQkFTRV9JRCkge1xyXG4gICAgcG9zdHMoZmlyc3Q6IDEwKSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbGlua1xyXG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRlZ29yaWVzKHdoZXJlOiB7bmFtZTogXCJGaXJtIE5ld3NcIn0pIHtcclxuICAgICAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG5leHBvcnQgY29uc3QgZmlybUV2ZW50c1F1ZXJ5ID0gYHtcclxuICBjYXRlZ29yeShpZDogXCI5OVwiLCBpZFR5cGU6IERBVEFCQVNFX0lEKSB7XHJcbiAgICBwb3N0cyhmaXJzdDogMTApIHtcclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGVnb3JpZXMod2hlcmU6IHtuYW1lOiBcIkZpcm0gRXZlbnRzXCJ9KSB7XHJcbiAgICAgICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZmljZUxvY2F0aW9uc1F1ZXJ5ID0gYHtcclxuICBvZmZpY2VMb2NhdGlvbnMge1xyXG4gICAgbm9kZXMge1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBpZFxyXG4gICAgICBvZmZpY2VNYWluSW5mb3JtYXRpb24ge1xyXG4gICAgICAgIG9mZmljZUJ1aWxkaW5nVGl0bGVcclxuICAgICAgICBzdHJlZXRBZGRyZXNzXHJcbiAgICAgICAgcG9Cb3hcclxuICAgICAgICBmbG9vclxyXG4gICAgICAgIGFkZHJlc3NMb2NhbGl0eVxyXG4gICAgICAgIGFkZHJlc3NSZWdpb25cclxuICAgICAgICBhZGRyZXNzQ291bnRyeVxyXG4gICAgICAgIHBob25lXHJcbiAgICAgICAgZmF4XHJcbiAgICAgIH1cclxuICAgICAgc2x1Z1xyXG4gICAgICB1cmlcclxuICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvcmVQcmFjdGljZXNRdWVyeSA9IGB7XHJcbiAgXHJcbn1gOyIsIlxyXG5jb25zb2xlLmxvZygncHJvY2Vzcy5lbnYuR1JBUEhRTEVORFBPSU5UJywgcHJvY2Vzcy5lbnYuR1JBUEhRTEVORFBPSU5UKVxyXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdncmFwaHFsLWNsaWVudCcpKHtcclxuICB1cmw6IHByb2Nlc3MuZW52LkdSQVBIUUxFTkRQT0lOVFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwic291cmNlUm9vdCI6IiJ9