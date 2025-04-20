/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./contexts/StockContext.tsx":
/*!***********************************!*\
  !*** ./contexts/StockContext.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StockProvider: () => (/* binding */ StockProvider),\n/* harmony export */   useStockContext: () => (/* binding */ useStockContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StockContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction StockProvider({ children }) {\n    const [selectedStock, setSelectedStock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [watchlist, setWatchlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recentSearches, setRecentSearches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToWatchlist = (stock)=>{\n        // Don't add if already in watchlist\n        if (watchlist.some((item)=>item.symbol === stock.symbol)) {\n            return;\n        }\n        const watchlistItem = {\n            ...stock,\n            addedAt: new Date()\n        };\n        setWatchlist((prev)=>[\n                watchlistItem,\n                ...prev\n            ]);\n    };\n    const removeFromWatchlist = (symbol)=>{\n        setWatchlist((prev)=>prev.filter((item)=>item.symbol !== symbol));\n    };\n    const addToRecentSearches = (symbol)=>{\n        // Remove if already exists (to move to the top)\n        setRecentSearches((prev)=>{\n            const filtered = prev.filter((s)=>s !== symbol);\n            // Add to beginning and limit to 10 items\n            return [\n                symbol,\n                ...filtered\n            ].slice(0, 10);\n        });\n    };\n    const clearRecentSearches = ()=>{\n        setRecentSearches([]);\n    };\n    const value = {\n        selectedStock,\n        watchlist,\n        recentSearches,\n        setSelectedStock,\n        addToWatchlist,\n        removeFromWatchlist,\n        addToRecentSearches,\n        clearRecentSearches\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StockContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\liuxi\\\\repo\\\\sad-app\\\\contexts\\\\StockContext.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\nfunction useStockContext() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StockContext);\n    if (context === undefined) {\n        throw new Error('useStockContext must be used within a StockProvider');\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHRzL1N0b2NrQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQXlCdkUsTUFBTUcsNkJBQWVILG9EQUFhQSxDQUErQkk7QUFNMUQsU0FBU0MsY0FBYyxFQUFFQyxRQUFRLEVBQXNCO0lBQzVELE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFlO0lBQ2pFLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUM5RCxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFXLEVBQUU7SUFFakUsTUFBTVcsaUJBQWlCLENBQUNDO1FBQ3RCLG9DQUFvQztRQUNwQyxJQUFJTCxVQUFVTSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLE1BQU0sS0FBS0gsTUFBTUcsTUFBTSxHQUFHO1lBQ3hEO1FBQ0Y7UUFFQSxNQUFNQyxnQkFBK0I7WUFDbkMsR0FBR0osS0FBSztZQUNSSyxTQUFTLElBQUlDO1FBQ2Y7UUFFQVYsYUFBYVcsQ0FBQUEsT0FBUTtnQkFBQ0g7bUJBQWtCRzthQUFLO0lBQy9DO0lBRUEsTUFBTUMsc0JBQXNCLENBQUNMO1FBQzNCUCxhQUFhVyxDQUFBQSxPQUFRQSxLQUFLRSxNQUFNLENBQUNQLENBQUFBLE9BQVFBLEtBQUtDLE1BQU0sS0FBS0E7SUFDM0Q7SUFFQSxNQUFNTyxzQkFBc0IsQ0FBQ1A7UUFDM0IsZ0RBQWdEO1FBQ2hETCxrQkFBa0JTLENBQUFBO1lBQ2hCLE1BQU1JLFdBQVdKLEtBQUtFLE1BQU0sQ0FBQ0csQ0FBQUEsSUFBS0EsTUFBTVQ7WUFDeEMseUNBQXlDO1lBQ3pDLE9BQU87Z0JBQUNBO21CQUFXUTthQUFTLENBQUNFLEtBQUssQ0FBQyxHQUFHO1FBQ3hDO0lBQ0Y7SUFFQSxNQUFNQyxzQkFBc0I7UUFDMUJoQixrQkFBa0IsRUFBRTtJQUN0QjtJQUVBLE1BQU1pQixRQUFRO1FBQ1p0QjtRQUNBRTtRQUNBRTtRQUNBSDtRQUNBSztRQUNBUztRQUNBRTtRQUNBSTtJQUNGO0lBRUEscUJBQ0UsOERBQUN6QixhQUFhMkIsUUFBUTtRQUFDRCxPQUFPQTtrQkFDM0J2Qjs7Ozs7O0FBR1A7QUFFTyxTQUFTeUI7SUFDZCxNQUFNQyxVQUFVL0IsaURBQVVBLENBQUNFO0lBQzNCLElBQUk2QixZQUFZNUIsV0FBVztRQUN6QixNQUFNLElBQUk2QixNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxsaXV4aVxccmVwb1xcc2FkLWFwcFxcY29udGV4dHNcXFN0b2NrQ29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBTdG9jayB7XHJcbiAgc3ltYm9sOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbiAgY2hhbmdlOiBudW1iZXI7XHJcbiAgY2hhbmdlUGVyY2VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2F0Y2hsaXN0SXRlbSBleHRlbmRzIFN0b2NrIHtcclxuICBhZGRlZEF0OiBEYXRlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tDb250ZXh0VHlwZSB7XHJcbiAgc2VsZWN0ZWRTdG9jazogU3RvY2sgfCBudWxsO1xyXG4gIHdhdGNobGlzdDogV2F0Y2hsaXN0SXRlbVtdO1xyXG4gIHJlY2VudFNlYXJjaGVzOiBzdHJpbmdbXTtcclxuICBzZXRTZWxlY3RlZFN0b2NrOiAoc3RvY2s6IFN0b2NrIHwgbnVsbCkgPT4gdm9pZDtcclxuICBhZGRUb1dhdGNobGlzdDogKHN0b2NrOiBTdG9jaykgPT4gdm9pZDtcclxuICByZW1vdmVGcm9tV2F0Y2hsaXN0OiAoc3ltYm9sOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgYWRkVG9SZWNlbnRTZWFyY2hlczogKHN5bWJvbDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGNsZWFyUmVjZW50U2VhcmNoZXM6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IFN0b2NrQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RvY2tDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbmludGVyZmFjZSBTdG9ja1Byb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdG9ja1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogU3RvY2tQcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkU3RvY2ssIHNldFNlbGVjdGVkU3RvY2tdID0gdXNlU3RhdGU8U3RvY2sgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbd2F0Y2hsaXN0LCBzZXRXYXRjaGxpc3RdID0gdXNlU3RhdGU8V2F0Y2hsaXN0SXRlbVtdPihbXSk7XHJcbiAgY29uc3QgW3JlY2VudFNlYXJjaGVzLCBzZXRSZWNlbnRTZWFyY2hlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG5cclxuICBjb25zdCBhZGRUb1dhdGNobGlzdCA9IChzdG9jazogU3RvY2spID0+IHtcclxuICAgIC8vIERvbid0IGFkZCBpZiBhbHJlYWR5IGluIHdhdGNobGlzdFxyXG4gICAgaWYgKHdhdGNobGlzdC5zb21lKGl0ZW0gPT4gaXRlbS5zeW1ib2wgPT09IHN0b2NrLnN5bWJvbCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCB3YXRjaGxpc3RJdGVtOiBXYXRjaGxpc3RJdGVtID0ge1xyXG4gICAgICAuLi5zdG9jayxcclxuICAgICAgYWRkZWRBdDogbmV3IERhdGUoKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc2V0V2F0Y2hsaXN0KHByZXYgPT4gW3dhdGNobGlzdEl0ZW0sIC4uLnByZXZdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVGcm9tV2F0Y2hsaXN0ID0gKHN5bWJvbDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRXYXRjaGxpc3QocHJldiA9PiBwcmV2LmZpbHRlcihpdGVtID0+IGl0ZW0uc3ltYm9sICE9PSBzeW1ib2wpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUb1JlY2VudFNlYXJjaGVzID0gKHN5bWJvbDogc3RyaW5nKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgaWYgYWxyZWFkeSBleGlzdHMgKHRvIG1vdmUgdG8gdGhlIHRvcClcclxuICAgIHNldFJlY2VudFNlYXJjaGVzKHByZXYgPT4ge1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHByZXYuZmlsdGVyKHMgPT4gcyAhPT0gc3ltYm9sKTtcclxuICAgICAgLy8gQWRkIHRvIGJlZ2lubmluZyBhbmQgbGltaXQgdG8gMTAgaXRlbXNcclxuICAgICAgcmV0dXJuIFtzeW1ib2wsIC4uLmZpbHRlcmVkXS5zbGljZSgwLCAxMCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhclJlY2VudFNlYXJjaGVzID0gKCkgPT4ge1xyXG4gICAgc2V0UmVjZW50U2VhcmNoZXMoW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgc2VsZWN0ZWRTdG9jayxcclxuICAgIHdhdGNobGlzdCxcclxuICAgIHJlY2VudFNlYXJjaGVzLFxyXG4gICAgc2V0U2VsZWN0ZWRTdG9jayxcclxuICAgIGFkZFRvV2F0Y2hsaXN0LFxyXG4gICAgcmVtb3ZlRnJvbVdhdGNobGlzdCxcclxuICAgIGFkZFRvUmVjZW50U2VhcmNoZXMsXHJcbiAgICBjbGVhclJlY2VudFNlYXJjaGVzXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9ja0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdG9ja0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b2NrQ29udGV4dCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChTdG9ja0NvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlU3RvY2tDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBTdG9ja1Byb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59ICJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiU3RvY2tDb250ZXh0IiwidW5kZWZpbmVkIiwiU3RvY2tQcm92aWRlciIsImNoaWxkcmVuIiwic2VsZWN0ZWRTdG9jayIsInNldFNlbGVjdGVkU3RvY2siLCJ3YXRjaGxpc3QiLCJzZXRXYXRjaGxpc3QiLCJyZWNlbnRTZWFyY2hlcyIsInNldFJlY2VudFNlYXJjaGVzIiwiYWRkVG9XYXRjaGxpc3QiLCJzdG9jayIsInNvbWUiLCJpdGVtIiwic3ltYm9sIiwid2F0Y2hsaXN0SXRlbSIsImFkZGVkQXQiLCJEYXRlIiwicHJldiIsInJlbW92ZUZyb21XYXRjaGxpc3QiLCJmaWx0ZXIiLCJhZGRUb1JlY2VudFNlYXJjaGVzIiwiZmlsdGVyZWQiLCJzIiwic2xpY2UiLCJjbGVhclJlY2VudFNlYXJjaGVzIiwidmFsdWUiLCJQcm92aWRlciIsInVzZVN0b2NrQ29udGV4dCIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./contexts/StockContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_StockContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/StockContext */ \"(pages-dir-node)/./contexts/StockContext.tsx\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_StockContext__WEBPACK_IMPORTED_MODULE_2__.StockProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\liuxi\\\\repo\\\\sad-app\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\liuxi\\\\repo\\\\sad-app\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFFMEI7QUFFekQsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxxQkFDRSw4REFBQ0gsaUVBQWFBO2tCQUNaLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGl1eGlcXHJlcG9cXHNhZC1hcHBcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFN0b2NrUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9TdG9ja0NvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvY2tQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9TdG9ja1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyAiXSwibmFtZXMiOlsiU3RvY2tQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();