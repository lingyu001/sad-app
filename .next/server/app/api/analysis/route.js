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
exports.id = "app/api/analysis/route";
exports.ids = ["app/api/analysis/route"];
exports.modules = {

/***/ "(rsc)/./app/api/analysis/route.ts":
/*!***********************************!*\
  !*** ./app/api/analysis/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/error */ \"(rsc)/./app/lib/error.ts\");\n\n\nasync function GET(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const symbol = searchParams.get('symbol');\n        const types = searchParams.get('types');\n        // Validate the required parameters\n        if (!symbol) {\n            throw new _lib_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('Stock symbol is required', 400);\n        }\n        if (!types) {\n            throw new _lib_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('Analysis types are required', 400);\n        }\n        // Parse the analysis types\n        const analysisTypes = types.split(',');\n        // Generate mock analysis data\n        const analysisResult = {\n            stock: symbol,\n            types: analysisTypes,\n            data: {\n                sentiment: analysisTypes.includes('news') ? 0.75 : null,\n                technicalSignal: analysisTypes.includes('technical') ? 'bullish' : null,\n                marketPosition: analysisTypes.includes('market') ? 'outperforming' : null,\n                economicImpact: analysisTypes.includes('economic') ? 'moderate positive' : null,\n                charts: {\n                    historic: [\n                        65,\n                        59,\n                        80,\n                        81,\n                        56,\n                        55,\n                        40,\n                        60,\n                        70,\n                        45,\n                        55,\n                        72\n                    ],\n                    forecast: [\n                        72,\n                        78,\n                        82,\n                        79,\n                        85,\n                        90,\n                        92\n                    ]\n                },\n                analysis: \"Based on strong quarterly earnings and positive market trends, this stock shows promising growth potential. Technical indicators suggest a bullish trend forming with support at recent price levels.\"\n            }\n        };\n        // Simulate a delay for a more realistic API response\n        await new Promise((resolve)=>setTimeout(resolve, 500));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: analysisResult\n        });\n    } catch (error) {\n        return (0,_lib_error__WEBPACK_IMPORTED_MODULE_1__.createErrorResponse)(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FuYWx5c2lzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUNRO0FBa0J6RCxlQUFlRyxJQUFJQyxPQUFvQjtJQUM1QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO1FBQzVDLE1BQU1DLFNBQVNILGFBQWFJLEdBQUcsQ0FBQztRQUNoQyxNQUFNQyxRQUFRTCxhQUFhSSxHQUFHLENBQUM7UUFFL0IsbUNBQW1DO1FBQ25DLElBQUksQ0FBQ0QsUUFBUTtZQUNYLE1BQU0sSUFBSVAsZ0RBQVFBLENBQUMsNEJBQTRCO1FBQ2pEO1FBRUEsSUFBSSxDQUFDUyxPQUFPO1lBQ1YsTUFBTSxJQUFJVCxnREFBUUEsQ0FBQywrQkFBK0I7UUFDcEQ7UUFFQSwyQkFBMkI7UUFDM0IsTUFBTVUsZ0JBQWdCRCxNQUFNRSxLQUFLLENBQUM7UUFFbEMsOEJBQThCO1FBQzlCLE1BQU1DLGlCQUFpQztZQUNyQ0MsT0FBT047WUFDUEUsT0FBT0M7WUFDUEksTUFBTTtnQkFDSkMsV0FBV0wsY0FBY00sUUFBUSxDQUFDLFVBQVUsT0FBTztnQkFDbkRDLGlCQUFpQlAsY0FBY00sUUFBUSxDQUFDLGVBQWUsWUFBWTtnQkFDbkVFLGdCQUFnQlIsY0FBY00sUUFBUSxDQUFDLFlBQVksa0JBQWtCO2dCQUNyRUcsZ0JBQWdCVCxjQUFjTSxRQUFRLENBQUMsY0FBYyxzQkFBc0I7Z0JBQzNFSSxRQUFRO29CQUNOQyxVQUFVO3dCQUFDO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFJO3FCQUFHO29CQUMxREMsVUFBVTt3QkFBQzt3QkFBSTt3QkFBSTt3QkFBSTt3QkFBSTt3QkFBSTt3QkFBSTtxQkFBRztnQkFDeEM7Z0JBQ0FDLFVBQVU7WUFDWjtRQUNGO1FBRUEscURBQXFEO1FBQ3JELE1BQU0sSUFBSUMsUUFBUUMsQ0FBQUEsVUFBV0MsV0FBV0QsU0FBUztRQUVqRCxPQUFPMUIscURBQVlBLENBQUM0QixJQUFJLENBQUM7WUFDdkJDLFNBQVM7WUFDVGQsTUFBTUY7UUFDUjtJQUNGLEVBQUUsT0FBT2lCLE9BQU87UUFDZCxPQUFPNUIsK0RBQW1CQSxDQUFDNEI7SUFDN0I7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxsaXV4aVxccmVwb1xcc2FkLWFwcFxcYXBwXFxhcGlcXGFuYWx5c2lzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBBcGlFcnJvciwgY3JlYXRlRXJyb3JSZXNwb25zZSB9IGZyb20gJy4uLy4uL2xpYi9lcnJvcic7XHJcblxyXG5pbnRlcmZhY2UgQW5hbHlzaXNSZXN1bHQge1xyXG4gIHN0b2NrOiBzdHJpbmc7XHJcbiAgdHlwZXM6IHN0cmluZ1tdO1xyXG4gIGRhdGE6IHtcclxuICAgIHNlbnRpbWVudDogbnVtYmVyIHwgbnVsbDtcclxuICAgIHRlY2huaWNhbFNpZ25hbDogc3RyaW5nIHwgbnVsbDtcclxuICAgIG1hcmtldFBvc2l0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgZWNvbm9taWNJbXBhY3Q6IHN0cmluZyB8IG51bGw7XHJcbiAgICBjaGFydHM6IHtcclxuICAgICAgaGlzdG9yaWM6IG51bWJlcltdO1xyXG4gICAgICBmb3JlY2FzdDogbnVtYmVyW107XHJcbiAgICB9O1xyXG4gICAgYW5hbHlzaXM6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICAgIGNvbnN0IHN5bWJvbCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3N5bWJvbCcpO1xyXG4gICAgY29uc3QgdHlwZXMgPSBzZWFyY2hQYXJhbXMuZ2V0KCd0eXBlcycpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoZSByZXF1aXJlZCBwYXJhbWV0ZXJzXHJcbiAgICBpZiAoIXN5bWJvbCkge1xyXG4gICAgICB0aHJvdyBuZXcgQXBpRXJyb3IoJ1N0b2NrIHN5bWJvbCBpcyByZXF1aXJlZCcsIDQwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0eXBlcykge1xyXG4gICAgICB0aHJvdyBuZXcgQXBpRXJyb3IoJ0FuYWx5c2lzIHR5cGVzIGFyZSByZXF1aXJlZCcsIDQwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFyc2UgdGhlIGFuYWx5c2lzIHR5cGVzXHJcbiAgICBjb25zdCBhbmFseXNpc1R5cGVzID0gdHlwZXMuc3BsaXQoJywnKTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBtb2NrIGFuYWx5c2lzIGRhdGFcclxuICAgIGNvbnN0IGFuYWx5c2lzUmVzdWx0OiBBbmFseXNpc1Jlc3VsdCA9IHtcclxuICAgICAgc3RvY2s6IHN5bWJvbCxcclxuICAgICAgdHlwZXM6IGFuYWx5c2lzVHlwZXMsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzZW50aW1lbnQ6IGFuYWx5c2lzVHlwZXMuaW5jbHVkZXMoJ25ld3MnKSA/IDAuNzUgOiBudWxsLCAvLyBQb3NpdGl2ZSBzZW50aW1lbnRcclxuICAgICAgICB0ZWNobmljYWxTaWduYWw6IGFuYWx5c2lzVHlwZXMuaW5jbHVkZXMoJ3RlY2huaWNhbCcpID8gJ2J1bGxpc2gnIDogbnVsbCxcclxuICAgICAgICBtYXJrZXRQb3NpdGlvbjogYW5hbHlzaXNUeXBlcy5pbmNsdWRlcygnbWFya2V0JykgPyAnb3V0cGVyZm9ybWluZycgOiBudWxsLFxyXG4gICAgICAgIGVjb25vbWljSW1wYWN0OiBhbmFseXNpc1R5cGVzLmluY2x1ZGVzKCdlY29ub21pYycpID8gJ21vZGVyYXRlIHBvc2l0aXZlJyA6IG51bGwsXHJcbiAgICAgICAgY2hhcnRzOiB7XHJcbiAgICAgICAgICBoaXN0b3JpYzogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwLCA2MCwgNzAsIDQ1LCA1NSwgNzJdLFxyXG4gICAgICAgICAgZm9yZWNhc3Q6IFs3MiwgNzgsIDgyLCA3OSwgODUsIDkwLCA5Ml0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmFseXNpczogXCJCYXNlZCBvbiBzdHJvbmcgcXVhcnRlcmx5IGVhcm5pbmdzIGFuZCBwb3NpdGl2ZSBtYXJrZXQgdHJlbmRzLCB0aGlzIHN0b2NrIHNob3dzIHByb21pc2luZyBncm93dGggcG90ZW50aWFsLiBUZWNobmljYWwgaW5kaWNhdG9ycyBzdWdnZXN0IGEgYnVsbGlzaCB0cmVuZCBmb3JtaW5nIHdpdGggc3VwcG9ydCBhdCByZWNlbnQgcHJpY2UgbGV2ZWxzLlwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgYSBkZWxheSBmb3IgYSBtb3JlIHJlYWxpc3RpYyBBUEkgcmVzcG9uc2VcclxuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBhbmFseXNpc1Jlc3VsdFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBjcmVhdGVFcnJvclJlc3BvbnNlKGVycm9yKTtcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkFwaUVycm9yIiwiY3JlYXRlRXJyb3JSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJzeW1ib2wiLCJnZXQiLCJ0eXBlcyIsImFuYWx5c2lzVHlwZXMiLCJzcGxpdCIsImFuYWx5c2lzUmVzdWx0Iiwic3RvY2siLCJkYXRhIiwic2VudGltZW50IiwiaW5jbHVkZXMiLCJ0ZWNobmljYWxTaWduYWwiLCJtYXJrZXRQb3NpdGlvbiIsImVjb25vbWljSW1wYWN0IiwiY2hhcnRzIiwiaGlzdG9yaWMiLCJmb3JlY2FzdCIsImFuYWx5c2lzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/analysis/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/error.ts":
/*!**************************!*\
  !*** ./app/lib/error.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiError: () => (/* binding */ ApiError),
/* harmony export */   createErrorResponse: () => (/* binding */ createErrorResponse)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-server-dom-webpack/server.edge */ "(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-webpack-server-edge.js");
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const ApiError = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call ApiError() from the server but ApiError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"C:\\Users\\liuxi\\repo\\sad-app\\app\\lib\\error.ts",
"ApiError",
);const createErrorResponse = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call createErrorResponse() from the server but createErrorResponse is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"C:\\Users\\liuxi\\repo\\sad-app\\app\\lib\\error.ts",
"createErrorResponse",
);

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fanalysis%2Froute&page=%2Fapi%2Fanalysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalysis%2Froute.ts&appDir=C%3A%5CUsers%5Cliuxi%5Crepo%5Csad-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cliuxi%5Crepo%5Csad-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fanalysis%2Froute&page=%2Fapi%2Fanalysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalysis%2Froute.ts&appDir=C%3A%5CUsers%5Cliuxi%5Crepo%5Csad-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cliuxi%5Crepo%5Csad-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_liuxi_repo_sad_app_app_api_analysis_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/analysis/route.ts */ \"(rsc)/./app/api/analysis/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/analysis/route\",\n        pathname: \"/api/analysis\",\n        filename: \"route\",\n        bundlePath: \"app/api/analysis/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\liuxi\\\\repo\\\\sad-app\\\\app\\\\api\\\\analysis\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_liuxi_repo_sad_app_app_api_analysis_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhbmFseXNpcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYW5hbHlzaXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhbmFseXNpcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNsaXV4aSU1Q3JlcG8lNUNzYWQtYXBwJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNsaXV4aSU1Q3JlcG8lNUNzYWQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNhO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxsaXV4aVxcXFxyZXBvXFxcXHNhZC1hcHBcXFxcYXBwXFxcXGFwaVxcXFxhbmFseXNpc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYW5hbHlzaXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hbmFseXNpc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYW5hbHlzaXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxsaXV4aVxcXFxyZXBvXFxcXHNhZC1hcHBcXFxcYXBwXFxcXGFwaVxcXFxhbmFseXNpc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fanalysis%2Froute&page=%2Fapi%2Fanalysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalysis%2Froute.ts&appDir=C%3A%5CUsers%5Cliuxi%5Crepo%5Csad-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cliuxi%5Crepo%5Csad-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5Cliuxi%5C%5Crepo%5C%5Csad-app%5C%5Capp%5C%5Clib%5C%5Cerror.ts%22%2C%22ids%22%3A%5B%22ApiError%22%2C%22createErrorResponse%22%5D%7D&server=true!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5Cliuxi%5C%5Crepo%5C%5Csad-app%5C%5Capp%5C%5Clib%5C%5Cerror.ts%22%2C%22ids%22%3A%5B%22ApiError%22%2C%22createErrorResponse%22%5D%7D&server=true! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/lib/error.ts */ \"(rsc)/./app/lib/error.ts\"));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMkMlM0ElNUMlNUNVc2VycyU1QyU1Q2xpdXhpJTVDJTVDcmVwbyU1QyU1Q3NhZC1hcHAlNUMlNUNhcHAlNUMlNUNsaWIlNUMlNUNlcnJvci50cyUyMiUyQyUyMmlkcyUyMiUzQSU1QiUyMkFwaUVycm9yJTIyJTJDJTIyY3JlYXRlRXJyb3JSZXNwb25zZSUyMiU1RCU3RCZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsZ0pBQTRJIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIsIHdlYnBhY2tFeHBvcnRzOiBbXCJBcGlFcnJvclwiLFwiY3JlYXRlRXJyb3JSZXNwb25zZVwiXSAqLyBcIkM6XFxcXFVzZXJzXFxcXGxpdXhpXFxcXHJlcG9cXFxcc2FkLWFwcFxcXFxhcHBcXFxcbGliXFxcXGVycm9yLnRzXCIpO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5Cliuxi%5C%5Crepo%5C%5Csad-app%5C%5Capp%5C%5Clib%5C%5Cerror.ts%22%2C%22ids%22%3A%5B%22ApiError%22%2C%22createErrorResponse%22%5D%7D&server=true!\n");

/***/ }),

/***/ "(ssr)/./app/lib/error.ts":
/*!**************************!*\
  !*** ./app/lib/error.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApiError: () => (/* binding */ ApiError),\n/* harmony export */   createErrorResponse: () => (/* binding */ createErrorResponse)\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ ApiError,createErrorResponse auto */ // Custom API error class\nclass ApiError extends Error {\n    constructor(message, status = 500){\n        super(message);\n        this.name = 'ApiError';\n        this.status = status;\n    }\n}\n// Error response function\nfunction createErrorResponse(error) {\n    console.error('API error:', error);\n    const status = error instanceof ApiError ? error.status : 500;\n    const message = error instanceof Error ? error.message : 'Unknown error occurred';\n    return Response.json({\n        success: false,\n        error: message\n    }, {\n        status\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9hcHAvbGliL2Vycm9yLnRzIiwibWFwcGluZ3MiOiI7Ozs7O2tGQUVBLHlCQUF5QjtBQUNsQixNQUFNQSxpQkFBaUJDO0lBRzVCQyxZQUFZQyxPQUFlLEVBQUVDLFNBQWlCLEdBQUcsQ0FBRTtRQUNqRCxLQUFLLENBQUNEO1FBQ04sSUFBSSxDQUFDRSxJQUFJLEdBQUc7UUFDWixJQUFJLENBQUNELE1BQU0sR0FBR0E7SUFDaEI7QUFDRjtBQUVBLDBCQUEwQjtBQUNuQixTQUFTRSxvQkFBb0JDLEtBQWM7SUFDaERDLFFBQVFELEtBQUssQ0FBQyxjQUFjQTtJQUU1QixNQUFNSCxTQUFTRyxpQkFBaUJQLFdBQVdPLE1BQU1ILE1BQU0sR0FBRztJQUMxRCxNQUFNRCxVQUFVSSxpQkFBaUJOLFFBQVFNLE1BQU1KLE9BQU8sR0FBRztJQUV6RCxPQUFPTSxTQUFTQyxJQUFJLENBQ2xCO1FBQUVDLFNBQVM7UUFBT0osT0FBT0o7SUFBUSxHQUNqQztRQUFFQztJQUFPO0FBRWIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGl1eGlcXHJlcG9cXHNhZC1hcHBcXGFwcFxcbGliXFxlcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG4vLyBDdXN0b20gQVBJIGVycm9yIGNsYXNzXHJcbmV4cG9ydCBjbGFzcyBBcGlFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyID0gNTAwKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9ICdBcGlFcnJvcic7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICB9XHJcbn1cclxuXHJcbi8vIEVycm9yIHJlc3BvbnNlIGZ1bmN0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFcnJvclJlc3BvbnNlKGVycm9yOiB1bmtub3duKSB7XHJcbiAgY29uc29sZS5lcnJvcignQVBJIGVycm9yOicsIGVycm9yKTtcclxuICBcclxuICBjb25zdCBzdGF0dXMgPSBlcnJvciBpbnN0YW5jZW9mIEFwaUVycm9yID8gZXJyb3Iuc3RhdHVzIDogNTAwO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdVbmtub3duIGVycm9yIG9jY3VycmVkJztcclxuICBcclxuICByZXR1cm4gUmVzcG9uc2UuanNvbihcclxuICAgIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0sXHJcbiAgICB7IHN0YXR1cyB9XHJcbiAgKTtcclxufSAiXSwibmFtZXMiOlsiQXBpRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsInN0YXR1cyIsIm5hbWUiLCJjcmVhdGVFcnJvclJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiUmVzcG9uc2UiLCJqc29uIiwic3VjY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./app/lib/error.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5Cliuxi%5C%5Crepo%5C%5Csad-app%5C%5Capp%5C%5Clib%5C%5Cerror.ts%22%2C%22ids%22%3A%5B%22ApiError%22%2C%22createErrorResponse%22%5D%7D&server=true!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5Cliuxi%5C%5Crepo%5C%5Csad-app%5C%5Capp%5C%5Clib%5C%5Cerror.ts%22%2C%22ids%22%3A%5B%22ApiError%22%2C%22createErrorResponse%22%5D%7D&server=true! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/lib/error.ts */ \"(ssr)/./app/lib/error.ts\"));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMkMlM0ElNUMlNUNVc2VycyU1QyU1Q2xpdXhpJTVDJTVDcmVwbyU1QyU1Q3NhZC1hcHAlNUMlNUNhcHAlNUMlNUNsaWIlNUMlNUNlcnJvci50cyUyMiUyQyUyMmlkcyUyMiUzQSU1QiUyMkFwaUVycm9yJTIyJTJDJTIyY3JlYXRlRXJyb3JSZXNwb25zZSUyMiU1RCU3RCZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsZ0pBQTRJIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIsIHdlYnBhY2tFeHBvcnRzOiBbXCJBcGlFcnJvclwiLFwiY3JlYXRlRXJyb3JSZXNwb25zZVwiXSAqLyBcIkM6XFxcXFVzZXJzXFxcXGxpdXhpXFxcXHJlcG9cXFxcc2FkLWFwcFxcXFxhcHBcXFxcbGliXFxcXGVycm9yLnRzXCIpO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5Cliuxi%5C%5Crepo%5C%5Csad-app%5C%5Capp%5C%5Clib%5C%5Cerror.ts%22%2C%22ids%22%3A%5B%22ApiError%22%2C%22createErrorResponse%22%5D%7D&server=true!\n");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fanalysis%2Froute&page=%2Fapi%2Fanalysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalysis%2Froute.ts&appDir=C%3A%5CUsers%5Cliuxi%5Crepo%5Csad-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cliuxi%5Crepo%5Csad-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();