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

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2NvbW1vbi5sZXNzP2VkNDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3dlYi9hc3NldHMvY29tbW9uLmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTg5MTg4NzQzMjY1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/assets/common.less\n");

/***/ }),

/***/ "./web/layout/footer.js":
/*!******************************!*\
  !*** ./web/layout/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable */\n\n\nfunction Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '100%',\n      height: '40px'\n    }\n  }, \"Footer\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n/* eslint-enable *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2Zvb3Rlci5qcz9hYTAyIl0sIm5hbWVzIjpbIkZvb3RlciIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsc0JBQU87QUFBSyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QjtBQUFaLGNBQVA7QUFDRDs7QUFDY0YscUVBQWY7QUFDQSIsImZpbGUiOiIuL3dlYi9sYXlvdXQvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNDBweCcgfX0+Rm9vdGVyPC9kaXY+XG59XG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbi8qIGVzbGludC1lbmFibGUgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/layout/footer.js\n");

/***/ }),

/***/ "./web/layout/header.js":
/*!******************************!*\
  !*** ./web/layout/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva */ \"dva\");\n/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable */\n\n\n\n\nfunction Header(props) {\n  var headerNav = props.headerNav;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '100%',\n      height: '40px',\n      background: 'blue'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"\",\n    alt: \"logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    style: {\n      float: 'right',\n      width: '90px',\n      textAlign: 'left'\n    }\n  }, headerNav && headerNav.map(function (link) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: link.path,\n      key: link.path,\n      style: {\n        color: '#fff'\n      }\n    }, link.name);\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(dva__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, null)(Header));\n/* eslint-enable *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2hlYWRlci5qcz8wMDgyIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwiaGVhZGVyTmF2Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZmxvYXQiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJsaW5rIiwicGF0aCIsImNvbG9yIiwibmFtZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQSxNQUNiQyxTQURhLEdBQ0NELEtBREQsQ0FDYkMsU0FEYTtBQUVyQixzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFLE1BQXpCO0FBQWlDQyxnQkFBVSxFQUFFO0FBQTdDO0FBQVosa0JBQ0w7QUFBSyxPQUFHLEVBQUMsRUFBVDtBQUFZLE9BQUcsRUFBQztBQUFoQixJQURLLGVBRUw7QUFBSyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFLE9BQVQ7QUFBa0JILFdBQUssRUFBRSxNQUF6QjtBQUFpQ0ksZUFBUyxFQUFFO0FBQTVDO0FBQVosS0FFSUwsU0FBUyxJQUFJQSxTQUFTLENBQUNNLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsd0JBQUksMkRBQUMscURBQUQ7QUFBTSxRQUFFLEVBQUVBLElBQUksQ0FBQ0MsSUFBZjtBQUFxQixTQUFHLEVBQUVELElBQUksQ0FBQ0MsSUFBL0I7QUFBcUMsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFUO0FBQTVDLE9BQWdFRixJQUFJLENBQUNHLElBQXJFLENBQUo7QUFBQSxHQUFsQixDQUZqQixDQUZLLENBQVA7QUFRRDs7QUFDY0Msa0hBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFQLENBQW9CYixNQUFwQixDQUFmO0FBQ0EiLCJmaWxlIjoiLi93ZWIvbGF5b3V0L2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnZHZhJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgeyBoZWFkZXJOYXYgfSA9IHByb3BzXG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzQwcHgnLCBiYWNrZ3JvdW5kOiAnYmx1ZScgfX0+XG4gICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICA8bmF2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzkwcHgnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cbiAgICAgIHtcbiAgICAgICAgaGVhZGVyTmF2ICYmIGhlYWRlck5hdi5tYXAobGluayA9PiA8TGluayB0bz17bGluay5wYXRofSBrZXk9e2xpbmsucGF0aH0gc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT57bGluay5uYW1lfTwvTGluaz4pXG4gICAgICB9XG4gICAgPC9uYXY+XG4gIDwvZGl2PlxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBudWxsKShIZWFkZXIpXG4vKiBlc2xpbnQtZW5hYmxlICovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/layout/header.js\n");

/***/ }),

/***/ "./web/layout/index.js":
/*!*****************************!*\
  !*** ./web/layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_common_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/common.less */ \"./web/assets/common.less\");\n/* harmony import */ var _assets_common_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_common_less__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./web/layout/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layout/header */ \"./web/layout/header.js\");\n/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layout/footer */ \"./web/layout/footer.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/* eslint-disable */\n\n\n\n\n\n\n\n\nvar commonNode = function commonNode(props) {\n  return props.children ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _extends({}, props, {\n    key: 'header'\n  })), props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    key: 'footer'\n  })] : '';\n};\n\nvar Layout = function Layout(props) {\n  if (false) {} else {\n    var serverData = props.layoutData.serverData;\n    var _props$layoutData$app = props.layoutData.app.config,\n        injectCss = _props$layoutData$app.injectCss,\n        injectScript = _props$layoutData$app.injectScript;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n      lang: \"en\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      charSet: \"utf-8\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"theme-color\",\n      content: \"#000000\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"React App\"), injectCss && injectCss.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n        rel: \"stylesheet\",\n        href: item,\n        key: item\n      });\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"app\"\n    }, commonNode(props)), serverData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: \"window.__USE_SSR__=true; window.__INITIAL_DATA__ =\".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(serverData))\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: injectScript && injectScript.join('')\n      }\n    })));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n/* eslint-enable *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2luZGV4LmpzP2JjNGIiXSwibmFtZXMiOlsiY29tbW9uTm9kZSIsInByb3BzIiwiY2hpbGRyZW4iLCJMYXlvdXQiLCJfX2lzQnJvd3Nlcl9fIiwic2VydmVyRGF0YSIsImxheW91dERhdGEiLCJhcHAiLCJjb25maWciLCJpbmplY3RDc3MiLCJpbmplY3RTY3JpcHQiLCJtYXAiLCJpdGVtIiwiX19odG1sIiwic2VyaWFsaXplIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FDdEJBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQixjQUFDLDJEQUFDLHNEQUFELGVBQVlELEtBQVo7QUFBbUIsT0FBRyxFQUFFO0FBQXhCLEtBQUQsRUFBOENBLEtBQUssQ0FBQ0MsUUFBcEQsZUFBOEQsMkRBQUMsc0RBQUQ7QUFBUSxPQUFHLEVBQUU7QUFBYixJQUE5RCxDQUFqQixHQUNJLEVBRmtCO0FBQUEsQ0FBeEI7O0FBS0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0YsS0FBRCxFQUFXO0FBQ3hCLE1BQUlHLEtBQUosRUFBbUIsRUFBbkIsTUFFTztBQUFBLFFBQ0dDLFVBREgsR0FDa0JKLEtBQUssQ0FBQ0ssVUFEeEIsQ0FDR0QsVUFESDtBQUFBLGdDQUUrQkosS0FBSyxDQUFDSyxVQUFOLENBQWlCQyxHQUFqQixDQUFxQkMsTUFGcEQ7QUFBQSxRQUVHQyxTQUZILHlCQUVHQSxTQUZIO0FBQUEsUUFFY0MsWUFGZCx5QkFFY0EsWUFGZDtBQUdMLHdCQUNFO0FBQU0sVUFBSSxFQUFDO0FBQVgsb0JBQ0Usc0ZBQ0U7QUFBTSxhQUFPLEVBQUM7QUFBZCxNQURGLGVBRUU7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUM7QUFBOUIsTUFGRixlQUdFO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFDO0FBQWpDLE1BSEYsZUFJRSxzRkFKRixFQU1JRCxTQUFTLElBQUlBLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSwwQkFBSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBRUEsSUFBN0I7QUFBbUMsV0FBRyxFQUFFQTtBQUF4QyxRQUFKO0FBQUEsS0FBbEIsQ0FOakIsQ0FERixlQVVFLHNGQUNFO0FBQUssUUFBRSxFQUFDO0FBQVIsT0FBZVosVUFBVSxDQUFDQyxLQUFELENBQXpCLENBREYsRUFHSUksVUFBVSxpQkFBSTtBQUFRLDZCQUF1QixFQUFFO0FBQzdDUSxjQUFNLDhEQUF1REMsMkRBQVMsQ0FBQ1QsVUFBRCxDQUFoRTtBQUR1QztBQUFqQyxNQUhsQixlQU9FO0FBQUssNkJBQXVCLEVBQUU7QUFDNUJRLGNBQU0sRUFBRUgsWUFBWSxJQUFJQSxZQUFZLENBQUNLLElBQWIsQ0FBa0IsRUFBbEI7QUFESTtBQUE5QixNQVBGLENBVkYsQ0FERjtBQXdCRDtBQUNGLENBL0JEOztBQWlDZVoscUVBQWY7QUFDQSIsImZpbGUiOiIuL3dlYi9sYXlvdXQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJ0AvYXNzZXRzL2NvbW1vbi5sZXNzJ1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvbGF5b3V0L2hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9sYXlvdXQvZm9vdGVyJ1xuXG5jb25zdCBjb21tb25Ob2RlID0gcHJvcHMgPT4gKFxuICBwcm9wcy5jaGlsZHJlbiA/IFs8SGVhZGVyIHsuLi5wcm9wc30ga2V5PXsnaGVhZGVyJ30+PC9IZWFkZXI+LCBwcm9wcy5jaGlsZHJlbiwgPEZvb3RlciBrZXk9eydmb290ZXInfT48L0Zvb3Rlcj5dXG4gICAgOiAnJ1xuKVxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgaWYgKF9faXNCcm93c2VyX18pIHtcbiAgICByZXR1cm4gY29tbW9uTm9kZShwcm9wcylcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IHNlcnZlckRhdGEgfSA9IHByb3BzLmxheW91dERhdGFcbiAgICBjb25zdCB7IGluamVjdENzcywgaW5qZWN0U2NyaXB0IH0gPSBwcm9wcy5sYXlvdXREYXRhLmFwcC5jb25maWdcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm8nIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyMwMDAwMDAnIC8+XG4gICAgICAgICAgPHRpdGxlPlJlYWN0IEFwcDwvdGl0bGU+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaW5qZWN0Q3NzICYmIGluamVjdENzcy5tYXAoaXRlbSA9PiA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9e2l0ZW19IGtleT17aXRlbX0gLz4pXG4gICAgICAgICAgfVxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxkaXYgaWQ9J2FwcCc+e2NvbW1vbk5vZGUocHJvcHMpfTwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlcnZlckRhdGEgJiYgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGB3aW5kb3cuX19VU0VfU1NSX189dHJ1ZTsgd2luZG93Ll9fSU5JVElBTF9EQVRBX18gPSR7c2VyaWFsaXplKHNlcnZlckRhdGEpfWBcbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogaW5qZWN0U2NyaXB0ICYmIGluamVjdFNjcmlwdC5qb2luKCcnKVxuICAgICAgICAgIH19IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4vKiBlc2xpbnQtZW5hYmxlICovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/layout/index.js\n");

/***/ }),

/***/ "./web/layout/index.less":
/*!*******************************!*\
  !*** ./web/layout/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2luZGV4Lmxlc3M/MWM3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6Ii4vd2ViL2xheW91dC9pbmRleC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU4OTE4ODc0MzI4MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/layout/index.less\n");

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