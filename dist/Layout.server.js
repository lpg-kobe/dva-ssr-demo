module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/layout/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/common.less":
/*!********************************!*\
  !*** ./web/assets/common.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2NvbW1vbi5sZXNzP2VkNDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3dlYi9hc3NldHMvY29tbW9uLmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTg5MTEwNTM1MTg1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/assets/common.less\n");

/***/ }),

/***/ "./web/layout/footer.js":
/*!******************************!*\
  !*** ./web/layout/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '100%',\n      height: '40px'\n    }\n  }, \"Footer\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2Zvb3Rlci5qcz9hYTAyIl0sIm5hbWVzIjpbIkZvb3RlciIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2Qsc0JBQU87QUFBSyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QjtBQUFaLGNBQVA7QUFDSDs7QUFDY0YscUVBQWYiLCJmaWxlIjoiLi93ZWIvbGF5b3V0L2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc0MHB4JyB9fT5Gb290ZXI8L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/layout/footer.js\n");

/***/ }),

/***/ "./web/layout/header.js":
/*!******************************!*\
  !*** ./web/layout/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva */ \"dva\");\n/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Header(props) {\n  var headerNav = props.headerNav;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '100%',\n      height: '40px',\n      background: 'blue'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"\",\n    alt: \"logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    style: {\n      float: 'right',\n      width: '90px',\n      textAlign: 'left'\n    }\n  }, headerNav && headerNav.map(function (link) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: link.path,\n      key: link.path,\n      style: {\n        color: '#fff'\n      }\n    }, link.name);\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(dva__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, null)(Header));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2hlYWRlci5qcz8wMDgyIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwiaGVhZGVyTmF2Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZmxvYXQiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJsaW5rIiwicGF0aCIsImNvbG9yIiwibmFtZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUEsTUFDWEMsU0FEVyxHQUNHRCxLQURILENBQ1hDLFNBRFc7QUFFbkIsc0JBQU87QUFBSyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsZ0JBQVUsRUFBRTtBQUE3QztBQUFaLGtCQUNIO0FBQUssT0FBRyxFQUFDLEVBQVQ7QUFBWSxPQUFHLEVBQUM7QUFBaEIsSUFERyxlQUVIO0FBQUssU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxPQUFUO0FBQWtCSCxXQUFLLEVBQUUsTUFBekI7QUFBaUNJLGVBQVMsRUFBRTtBQUE1QztBQUFaLEtBRVFMLFNBQVMsSUFBSUEsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLHdCQUFJLDJEQUFDLHFEQUFEO0FBQU0sUUFBRSxFQUFFQSxJQUFJLENBQUNDLElBQWY7QUFBcUIsU0FBRyxFQUFFRCxJQUFJLENBQUNDLElBQS9CO0FBQXFDLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVDtBQUE1QyxPQUFnRUYsSUFBSSxDQUFDRyxJQUFyRSxDQUFKO0FBQUEsR0FBbEIsQ0FGckIsQ0FGRyxDQUFQO0FBUUg7O0FBQ2NDLGtIQUFPLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBUCxDQUFvQmIsTUFBcEIsQ0FBZiIsImZpbGUiOiIuL3dlYi9sYXlvdXQvaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ2R2YSdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gICAgY29uc3QgeyBoZWFkZXJOYXYgfSA9IHByb3BzXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNDBweCcsIGJhY2tncm91bmQ6ICdibHVlJyB9fT5cbiAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgPG5hdiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc5MHB4JywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyTmF2ICYmIGhlYWRlck5hdi5tYXAobGluayA9PiA8TGluayB0bz17bGluay5wYXRofSBrZXk9e2xpbmsucGF0aH0gc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT57bGluay5uYW1lfTwvTGluaz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBudWxsKShIZWFkZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./web/layout/header.js\n");

/***/ }),

/***/ "./web/layout/index.js":
/*!*****************************!*\
  !*** ./web/layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_common_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/common.less */ \"./web/assets/common.less\");\n/* harmony import */ var _assets_common_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_common_less__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./web/layout/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layout/header */ \"./web/layout/header.js\");\n/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layout/footer */ \"./web/layout/footer.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\nvar commonNode = function commonNode(props) {\n  return props.children ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _extends({}, props, {\n    key: 'header'\n  })), props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    key: 'footer'\n  })] : '';\n};\n\nvar Layout = function Layout(props) {\n  if (false) {} else {\n    var serverData = props.layoutData.serverData;\n    var _props$layoutData$app = props.layoutData.app.config,\n        injectCss = _props$layoutData$app.injectCss,\n        injectScript = _props$layoutData$app.injectScript;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n      lang: \"en\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      charSet: \"utf-8\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"theme-color\",\n      content: \"#000000\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"React App\"), injectCss && injectCss.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n        rel: \"stylesheet\",\n        href: item,\n        key: item\n      });\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"app\"\n    }, commonNode(props)), serverData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: \"window.__USE_SSR__=true; window.__INITIAL_DATA__ =\".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(serverData))\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: injectScript && injectScript.join('')\n      }\n    })));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2luZGV4LmpzP2JjNGIiXSwibmFtZXMiOlsiY29tbW9uTm9kZSIsInByb3BzIiwiY2hpbGRyZW4iLCJMYXlvdXQiLCJfX2lzQnJvd3Nlcl9fIiwic2VydmVyRGF0YSIsImxheW91dERhdGEiLCJhcHAiLCJjb25maWciLCJpbmplY3RDc3MiLCJpbmplY3RTY3JpcHQiLCJtYXAiLCJpdGVtIiwiX19odG1sIiwic2VyaWFsaXplIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQ3RCQSxLQUFLLENBQUNDLFFBQU4sR0FBaUIsY0FBQywyREFBQyxzREFBRCxlQUFZRCxLQUFaO0FBQW1CLE9BQUcsRUFBRTtBQUF4QixLQUFELEVBQThDQSxLQUFLLENBQUNDLFFBQXBELGVBQThELDJEQUFDLHNEQUFEO0FBQVEsT0FBRyxFQUFFO0FBQWIsSUFBOUQsQ0FBakIsR0FDSSxFQUZrQjtBQUFBLENBQXhCOztBQUtBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNGLEtBQUQsRUFBVztBQUN4QixNQUFJRyxLQUFKLEVBQW1CLEVBQW5CLE1BRU87QUFBQSxRQUNHQyxVQURILEdBQ2tCSixLQUFLLENBQUNLLFVBRHhCLENBQ0dELFVBREg7QUFBQSxnQ0FFK0JKLEtBQUssQ0FBQ0ssVUFBTixDQUFpQkMsR0FBakIsQ0FBcUJDLE1BRnBEO0FBQUEsUUFFR0MsU0FGSCx5QkFFR0EsU0FGSDtBQUFBLFFBRWNDLFlBRmQseUJBRWNBLFlBRmQ7QUFHTCx3QkFDRTtBQUFNLFVBQUksRUFBQztBQUFYLG9CQUNFLHNGQUNFO0FBQU0sYUFBTyxFQUFDO0FBQWQsTUFERixlQUVFO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFDO0FBQTlCLE1BRkYsZUFHRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBQztBQUFqQyxNQUhGLGVBSUUsc0ZBSkYsRUFNSUQsU0FBUyxJQUFJQSxTQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsMEJBQUk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUVBLElBQTdCO0FBQW1DLFdBQUcsRUFBRUE7QUFBeEMsUUFBSjtBQUFBLEtBQWxCLENBTmpCLENBREYsZUFVRSxzRkFDRTtBQUFLLFFBQUUsRUFBQztBQUFSLE9BQWVaLFVBQVUsQ0FBQ0MsS0FBRCxDQUF6QixDQURGLEVBR0lJLFVBQVUsaUJBQUk7QUFBUSw2QkFBdUIsRUFBRTtBQUM3Q1EsY0FBTSw4REFBdURDLDJEQUFTLENBQUNULFVBQUQsQ0FBaEU7QUFEdUM7QUFBakMsTUFIbEIsZUFPRTtBQUFLLDZCQUF1QixFQUFFO0FBQzVCUSxjQUFNLEVBQUVILFlBQVksSUFBSUEsWUFBWSxDQUFDSyxJQUFiLENBQWtCLEVBQWxCO0FBREk7QUFBOUIsTUFQRixDQVZGLENBREY7QUF3QkQ7QUFDRixDQS9CRDs7QUFpQ2VaLHFFQUFmIiwiZmlsZSI6Ii4vd2ViL2xheW91dC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdAL2Fzc2V0cy9jb21tb24ubGVzcydcbmltcG9ydCAnLi9pbmRleC5sZXNzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0J1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2xheW91dC9oZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvbGF5b3V0L2Zvb3RlcidcblxuY29uc3QgY29tbW9uTm9kZSA9IHByb3BzID0+IChcbiAgcHJvcHMuY2hpbGRyZW4gPyBbPEhlYWRlciB7Li4ucHJvcHN9IGtleT17J2hlYWRlcid9PjwvSGVhZGVyPiwgcHJvcHMuY2hpbGRyZW4sIDxGb290ZXIga2V5PXsnZm9vdGVyJ30+PC9Gb290ZXI+XVxuICAgIDogJydcbilcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGlmIChfX2lzQnJvd3Nlcl9fKSB7XG4gICAgcmV0dXJuIGNvbW1vbk5vZGUocHJvcHMpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBzZXJ2ZXJEYXRhIH0gPSBwcm9wcy5sYXlvdXREYXRhXG4gICAgY29uc3QgeyBpbmplY3RDc3MsIGluamVjdFNjcmlwdCB9ID0gcHJvcHMubGF5b3V0RGF0YS5hcHAuY29uZmlnXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGxhbmc9J2VuJz5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vJyAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjMDAwMDAwJyAvPlxuICAgICAgICAgIDx0aXRsZT5SZWFjdCBBcHA8L3RpdGxlPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGluamVjdENzcyAmJiBpbmplY3RDc3MubWFwKGl0ZW0gPT4gPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPXtpdGVtfSBrZXk9e2l0ZW19IC8+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8ZGl2IGlkPSdhcHAnPntjb21tb25Ob2RlKHByb3BzKX08L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZXJ2ZXJEYXRhICYmIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgd2luZG93Ll9fVVNFX1NTUl9fPXRydWU7IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0ke3NlcmlhbGl6ZShzZXJ2ZXJEYXRhKX1gXG4gICAgICAgICAgICB9fSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGluamVjdFNjcmlwdCAmJiBpbmplY3RTY3JpcHQuam9pbignJylcbiAgICAgICAgICB9fSAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./web/layout/index.js\n");

/***/ }),

/***/ "./web/layout/index.less":
/*!*******************************!*\
  !*** ./web/layout/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2luZGV4Lmxlc3M/MWM3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6Ii4vd2ViL2xheW91dC9pbmRleC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU4OTExMDUzNTIwM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/layout/index.less\n");

/***/ }),

/***/ "dva":
/*!**********************!*\
  !*** external "dva" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dva\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkdmFcIj9kZWE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImR2YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImR2YVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dva\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiPzE2ZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VyaWFsaXplLWphdmFzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///serialize-javascript\n");

/***/ })

/******/ });