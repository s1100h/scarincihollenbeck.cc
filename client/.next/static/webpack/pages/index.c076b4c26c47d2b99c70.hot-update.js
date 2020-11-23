webpackHotUpdate_N_E("pages/index",{

/***/ "./queries/home.js":
/*!*************************!*\
  !*** ./queries/home.js ***!
  \*************************/
/*! exports provided: metaDataQuery, firmNewsQuery, firmEventsQuery, officeLocationsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaDataQuery", function() { return metaDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firmNewsQuery", function() { return firmNewsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firmEventsQuery", function() { return firmEventsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "officeLocationsQuery", function() { return officeLocationsQuery; });
var metaDataQuery = "{\n  page(id: 29494, idType: DATABASE_ID) {\n    seo {\n      title\n      metaDesc\n    }\n  }\n}";
var firmNewsQuery = "{\n  category(id: \"98\", idType: DATABASE_ID) {\n    posts(first: 10) {\n      edges {\n        node {\n          title\n          id\n          link\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          categories(where: {name: \"Firm News\"}) {\n            nodes {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}";
var firmEventsQuery = "{\n  category(id: \"99\", idType: DATABASE_ID) {\n    posts(first: 10) {\n      edges {\n        node {\n          title\n          id\n          link\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          categories(where: {name: \"Firm Events\"}) {\n            nodes {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}";
var officeLocationsQuery = "{\n  officeLocations {\n    nodes {\n      title\n      id\n      officeMainInformation {\n        officeBuildingTitle\n        streetAddress\n        poBox\n        floor\n        addressLocality\n        addressRegion\n        addressCountry\n        phone\n        fax\n      }\n      slug\n      uri\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n    }\n  }\n}"; // export const corePracticesQuery = `{
// }`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcXVlcmllcy9ob21lLmpzIl0sIm5hbWVzIjpbIm1ldGFEYXRhUXVlcnkiLCJmaXJtTmV3c1F1ZXJ5IiwiZmlybUV2ZW50c1F1ZXJ5Iiwib2ZmaWNlTG9jYXRpb25zUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsYUFBYSx1R0FBbkI7QUFVQSxJQUFNQyxhQUFhLDZaQUFuQjtBQXdCQSxJQUFNQyxlQUFlLCtaQUFyQjtBQXdCQSxJQUFNQyxvQkFBb0Isc2FBQTFCLEMsQ0E0QlA7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMDc2YjRjMjZjNDdkMmI5OWM3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1ldGFEYXRhUXVlcnkgPSBge1xyXG4gIHBhZ2UoaWQ6IDI5NDk0LCBpZFR5cGU6IERBVEFCQVNFX0lEKSB7XHJcbiAgICBzZW8ge1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBtZXRhRGVzY1xyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZpcm1OZXdzUXVlcnkgPSBge1xyXG4gIGNhdGVnb3J5KGlkOiBcIjk4XCIsIGlkVHlwZTogREFUQUJBU0VfSUQpIHtcclxuICAgIHBvc3RzKGZpcnN0OiAxMCkge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGxpbmtcclxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0ZWdvcmllcyh3aGVyZToge25hbWU6IFwiRmlybSBOZXdzXCJ9KSB7XHJcbiAgICAgICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcm1FdmVudHNRdWVyeSA9IGB7XHJcbiAgY2F0ZWdvcnkoaWQ6IFwiOTlcIiwgaWRUeXBlOiBEQVRBQkFTRV9JRCkge1xyXG4gICAgcG9zdHMoZmlyc3Q6IDEwKSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbGlua1xyXG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRlZ29yaWVzKHdoZXJlOiB7bmFtZTogXCJGaXJtIEV2ZW50c1wifSkge1xyXG4gICAgICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcbmV4cG9ydCBjb25zdCBvZmZpY2VMb2NhdGlvbnNRdWVyeSA9IGB7XHJcbiAgb2ZmaWNlTG9jYXRpb25zIHtcclxuICAgIG5vZGVzIHtcclxuICAgICAgdGl0bGVcclxuICAgICAgaWRcclxuICAgICAgb2ZmaWNlTWFpbkluZm9ybWF0aW9uIHtcclxuICAgICAgICBvZmZpY2VCdWlsZGluZ1RpdGxlXHJcbiAgICAgICAgc3RyZWV0QWRkcmVzc1xyXG4gICAgICAgIHBvQm94XHJcbiAgICAgICAgZmxvb3JcclxuICAgICAgICBhZGRyZXNzTG9jYWxpdHlcclxuICAgICAgICBhZGRyZXNzUmVnaW9uXHJcbiAgICAgICAgYWRkcmVzc0NvdW50cnlcclxuICAgICAgICBwaG9uZVxyXG4gICAgICAgIGZheFxyXG4gICAgICB9XHJcbiAgICAgIHNsdWdcclxuICAgICAgdXJpXHJcbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb3JlUHJhY3RpY2VzUXVlcnkgPSBge1xyXG4gIFxyXG4vLyB9YDsiXSwic291cmNlUm9vdCI6IiJ9