webpackHotUpdate_N_E("pages/index",{

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
    description: seo.metaDesc,
    canonical: "https://scarincihollenbeck.com/",
    openGraph: {
      type: 'website',
      url: 'https://scarincihollenbeck.com/',
      title: 'Scarinci Hollenbeck',
      description: seo.metaDesc,
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
    sortedLocations: Object(utils_helpers__WEBPACK_IMPORTED_MODULE_8__["sortByKey"])(locations, 'id'),
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNlbyIsInBvc3RzIiwibG9jYXRpb25zIiwiY29yZVByYWN0aWNlcyIsInRpdGxlIiwibWV0YURlc2MiLCJ0eXBlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsIl9faHRtbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJidWlsZEJ1c2luZXNzU2NoZW1hIiwic29ydEJ5S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNBLElBQVQsT0FLWjtBQUFBLE1BSkRDLEdBSUMsUUFKREEsR0FJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLE1BRkRDLFNBRUMsUUFGREEsU0FFQztBQUFBLE1BRERDLGFBQ0MsUUFEREEsYUFDQztBQUNELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUNFLFNBQUssRUFBRUgsR0FBRyxDQUFDSSxLQURiO0FBRUUsZUFBVyxFQUFFSixHQUFHLENBQUNLLFFBRm5CO0FBR0UsYUFBUyxFQUFDLGlDQUhaO0FBSUUsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRSxTQURHO0FBRVRDLFNBQUcsRUFBRSxpQ0FGSTtBQUdUSCxXQUFLLEVBQUUscUJBSEU7QUFJVEksaUJBQVcsRUFBRVIsR0FBRyxDQUFDSyxRQUpSO0FBS1RJLFlBQU0sRUFBRSxDQUNOO0FBQ0VGLFdBQUcsRUFBRSx5RkFEUDtBQUVFRyxhQUFLLEVBQUUsR0FGVDtBQUdFQyxjQUFNLEVBQUUsR0FIVjtBQUlFQyxXQUFHLEVBQUU7QUFKUCxPQURNLENBTEM7QUFhVEMsZUFBUyxFQUFFO0FBYkYsS0FKYjtBQW1CRSxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLFVBREQ7QUFFUEMsVUFBSSxFQUFFLGdDQUZDO0FBR1BDLGNBQVEsRUFBRTtBQUhILEtBbkJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQTBCRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxvQkFETjtBQUVFLFFBQUksRUFBQyxxQkFGUDtBQUdFLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLGlGQUFtQixFQUFsQztBQUFWLEtBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTFCRixFQWlDRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0YsRUFrQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyRUFBRDtBQUFlLGlCQUFhLEVBQUVDLCtEQUFTLENBQUNsQixhQUFELEVBQWdCLE9BQWhCLENBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsK0VBQUQ7QUFDRSxlQUFXLEVBQUVrQiwrREFBUyxDQUFDcEIsS0FBRCxFQUFRLE1BQVIsQ0FEeEI7QUFFRSxtQkFBZSxFQUFFb0IsK0RBQVMsQ0FBQ25CLFNBQUQsRUFBWSxJQUFaLENBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWxDRixFQXlDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6Q0YsQ0FERjtBQTZDRDtLQW5EdUJILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjNlMDkyYWJhYjE0NzhhZGVhNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBOZXdEYXduSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvZnJvbnRwYWdlL25ldy1kYXduLWhlYWRlcic7XHJcbmltcG9ydCBDb2x1bW5Db250ZW50IGZyb20gJ2NvbXBvbmVudHMvZnJvbnRwYWdlL2NvbHVtbi1jb250ZW50JztcclxuaW1wb3J0IEZ1bGxXaWR0aENvbnRlbnQgZnJvbSAnY29tcG9uZW50cy9mcm9udHBhZ2UvZnVsbC13aWR0aC1jb250ZW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCB7IGhlYWRlcnMsIHNvcnRCeUtleSB9IGZyb20gJ3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBidWlsZEJ1c2luZXNzU2NoZW1hIH0gZnJvbSAndXRpbHMvanNvbi1sZC1zY2hlbWFzJ1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJ3V0aWxzL2dyYXBocWwtY2xpZW50JztcclxuaW1wb3J0IHsgbWV0YURhdGFRdWVyeSwgZmlybU5ld3NRdWVyeSwgZmlybUV2ZW50c1F1ZXJ5LCBvZmZpY2VMb2NhdGlvbnNRdWVyeSB9IGZyb20gJ3F1ZXJpZXMvaG9tZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtcclxuICBzZW8sXHJcbiAgcG9zdHMsXHJcbiAgbG9jYXRpb25zLFxyXG4gIGNvcmVQcmFjdGljZXNcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPXtzZW8udGl0bGV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Nlby5tZXRhRGVzY31cclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL3NjYXJpbmNpaG9sbGVuYmVjay5jb20vXCJcclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHR5cGU6ICd3ZWJzaXRlJyxcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2NhcmluY2lob2xsZW5iZWNrLmNvbS8nLFxyXG4gICAgICAgICAgdGl0bGU6ICdTY2FyaW5jaSBIb2xsZW5iZWNrJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZW8ubWV0YURlc2MsXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2hoY3NnbXZzbmRteG1wcS5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vMjAxOC8wNS9uby1pbWFnZS1mb3VuZC1kaWFtb25kLnBuZycsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDc1MCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgICAgICBhbHQ6ICdTY2FyaW5jaSBIb2xsZW5iZWNrJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBzaXRlX25hbWU6ICdTY2FyaW5jaSBIb2xsZW5iZWNrJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHR3aXR0ZXI9e3tcclxuICAgICAgICAgIGhhbmRsZTogJ0BTX0hfTGF3JyxcclxuICAgICAgICAgIHNpdGU6ICdodHRwczovL3NjYXJpbmNpaG9sbGVuYmVjay5jb20nLFxyXG4gICAgICAgICAgY2FyZFR5cGU6ICdXaXRoIGEgZ3Jvd2luZyBwcmFjdGljZSBvZiBtb3JlIHRoYW4gNzArIGV4cGVyaWVuY2VkIGF0dG9ybmV5cywgU2NhcmluY2kgSG9sbGVuYmVjayBpcyBhbiBhbHRlcm5hdGl2ZSB0byBhIE5hdGlvbmFsIDI1MCBsYXcgZmlybS4nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIGtleT1cIlNjYXJpbmNpSG9sbGVuYmVja1wiXHJcbiAgICAgICAgICB0eXBlPSdhcHBsaWNhdGlvbi9sZCtqc29uJ1xyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBKU09OLnN0cmluZ2lmeShidWlsZEJ1c2luZXNzU2NoZW1hKCkpIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPiBcclxuICAgICAgPE5ld0Rhd25IZWFkZXIgLz5cclxuICAgICAgPENvbnRhaW5lcj4gICAgICBcclxuICAgICAgICA8Q29sdW1uQ29udGVudCBjb3JlUHJhY3RpY2VzPXtzb3J0QnlLZXkoY29yZVByYWN0aWNlcywgJ3RpdGxlJyl9IC8+XHJcbiAgICAgICAgPEZ1bGxXaWR0aENvbnRlbnRcclxuICAgICAgICAgIHNvcnRlZFBvc3RzPXtzb3J0QnlLZXkocG9zdHMsICdkYXRlJyl9XHJcbiAgICAgICAgICBzb3J0ZWRMb2NhdGlvbnM9e3NvcnRCeUtleShsb2NhdGlvbnMsICdpZCcpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IFtjb3JlUHJhY3RpY2VzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9XUF9CQUNLRU5EfS93cC1qc29uL2NvcmUtcHJhY3RpY2VzL2xpc3RgLCB7IGhlYWRlcnMgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpICAgIFxyXG4gIF0pO1xyXG5cclxuICAvKiogQWRkaW5nIGluIGdyYXBocWwgcXVlcmllcyAqL1xyXG4gIC8vIGltcG9ydCBjbGllbnQgZnJvbSAndXRpbHMvZ3JhcGhxbC1jbGllbnQnO1xyXG4gIC8vIGltcG9ydCB7IG1ldGFEYXRhUXVlcnksIGZpcm1OZXdzUXVlcnksIGZpcm1FdmVudHNRdWVyeSwgb2ZmaWNlTG9jYXRpb25zUXVlcnkgfSBmcm9tICdxdWVyaWVzL2hvbWUnO1xyXG4gIGNvbnN0IG1ldGFEYXRhQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShtZXRhRGF0YVF1ZXJ5LCB7fSk7XHJcbiAgY29uc3QgZmlybU5ld3NDb250ZW50ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGZpcm1OZXdzUXVlcnksIHt9KTtcclxuICBjb25zdCBmaXJtRXZlbnRzQ29udGVudCA9IGF3YWl0IGNsaWVudC5xdWVyeShmaXJtRXZlbnRzUXVlcnksIHt9KTtcclxuICBjb25zdCBvZmZpY2VMb2NhdGlvbkNvbnRlbnQgPSBhd2FpdCBjbGllbnQucXVlcnkob2ZmaWNlTG9jYXRpb25zUXVlcnksIHt9KVxyXG4gIGNvbnN0IGZpbHRlcmVkTmV3cyA9IGZpcm1OZXdzQ29udGVudC5kYXRhLmNhdGVnb3J5LnBvc3RzLmVkZ2VzLmZpbHRlcigoXywgaSkgPT4gaSA8PSAyKVxyXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gZmlybUV2ZW50c0NvbnRlbnQuZGF0YS5jYXRlZ29yeS5wb3N0cy5lZGdlcy5maWx0ZXIoKF8sIGkpID0+IGkgPD0gMilcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlbzogbWV0YURhdGFDb250ZW50LmRhdGEucGFnZS5zZW8sXHJcbiAgICAgIHBvc3RzOiBbLi4uZmlsdGVyZWRFdmVudHMsIC4uLmZpbHRlcmVkTmV3c10sXHJcbiAgICAgIGxvY2F0aW9uczogb2ZmaWNlTG9jYXRpb25Db250ZW50LmRhdGEub2ZmaWNlTG9jYXRpb25zLm5vZGVzLFxyXG4gICAgICBjb3JlUHJhY3RpY2VzXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==