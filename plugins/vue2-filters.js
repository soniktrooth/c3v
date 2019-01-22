(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/filterBy.js":
/*!*******************************!*\
  !*** ./src/array/filterBy.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n\n/**\n * Filter filter for arrays\n *\n * @param {Array} arr\n * @param {String} prop\n * @param {String|Number} search\n */\n\nfunction filterBy (arr, search) {\n  var arr = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].convertArray(arr)\n  if (search == null) {\n    return arr\n  }\n  if (typeof search === 'function') {\n    return arr.filter(search)\n  }\n  // cast to lowercase string\n  search = ('' + search).toLowerCase()\n  var n = 2\n  // extract and flatten keys\n  var keys = Array.prototype.concat.apply([], _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toArray(arguments, n))\n  var res = []\n  var item, key, val, j\n  for (var i = 0, l = arr.length; i < l; i++) {\n    item = arr[i]\n    val = (item && item.$value) || item\n    j = keys.length\n    if (j) {\n      while (j--) {\n        key = keys[j]\n        if ((key === '$key' && contains(item.$key, search)) ||\n            contains(_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPath(val, key), search)) {\n          res.push(item)\n          break\n        }\n      }\n    } else if (contains(item, search)) {\n      res.push(item)\n    }\n  }\n  return res\n}\n\nfunction contains (val, search) {\n  var i\n  if (_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isPlainObject(val)) {\n    var keys = Object.keys(val)\n    i = keys.length\n    while (i--) {\n      if (contains(val[keys[i]], search)) {\n        return true\n      }\n    }\n  } else if (_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isArray(val)) {\n    i = val.length\n    while (i--) {\n      if (contains(val[i], search)) {\n        return true\n      }\n    }\n  } else if (val != null) {\n    return val.toString().toLowerCase().indexOf(search) > -1\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (filterBy);\n\n//# sourceURL=webpack:///./src/array/filterBy.js?");

/***/ }),

/***/ "./src/array/find.js":
/*!***************************!*\
  !*** ./src/array/find.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filterBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterBy */ \"./src/array/filterBy.js\");\n\n\n/**\n * Get first matching element from a filtered array\n *\n * @param {Array} arr\n * @param {String|Number} search\n * @returns {mixed}\n */\nfunction find(arr, search) \n{\n  var array = _filterBy__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\n  array.splice(1);\n  return array;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (find);\n\n\n//# sourceURL=webpack:///./src/array/find.js?");

/***/ }),

/***/ "./src/array/index.js":
/*!****************************!*\
  !*** ./src/array/index.js ***!
  \****************************/
/*! exports provided: limitBy, filterBy, orderBy, find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _limitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./limitBy */ \"./src/array/limitBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"limitBy\", function() { return _limitBy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _filterBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterBy */ \"./src/array/filterBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterBy\", function() { return _filterBy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _orderBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderBy */ \"./src/array/orderBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"orderBy\", function() { return _orderBy__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find */ \"./src/array/find.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _find__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/array/index.js?");

/***/ }),

/***/ "./src/array/limitBy.js":
/*!******************************!*\
  !*** ./src/array/limitBy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n\n/**\n * Limit filter for arrays\n *\n * @param {Number} n\n * @param {Number} offset (Decimal expected)\n */\n\nfunction limitBy (arr, n, offset) {\n  offset = offset ? parseInt(offset, 10) : 0\n  n = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toNumber(n)\n  return typeof n === 'number'\n    ? arr.slice(offset, offset + n)\n    : arr\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (limitBy);\n\n//# sourceURL=webpack:///./src/array/limitBy.js?");

/***/ }),

/***/ "./src/array/orderBy.js":
/*!******************************!*\
  !*** ./src/array/orderBy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n\n/**\n * Filter filter for arrays\n *\n * @param {String|Array<String>|Function} ...sortKeys\n * @param {Number} [order]\n */\n\nfunction orderBy (arr) {\n  var comparator = null\n  var sortKeys\n  arr = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].convertArray(arr)\n\n  // determine order (last argument)\n  var args = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toArray(arguments, 1)\n  var order = args[args.length - 1]\n  if (typeof order === 'number') {\n    order = order < 0 ? -1 : 1\n    args = args.length > 1 ? args.slice(0, -1) : args\n  } else {\n    order = 1\n  }\n\n  // determine sortKeys & comparator\n  var firstArg = args[0]\n  if (!firstArg) {\n    return arr\n  } else if (typeof firstArg === 'function') {\n    // custom comparator\n    comparator = function (a, b) {\n      return firstArg(a, b) * order\n    }\n  } else {\n    // string keys. flatten first\n    sortKeys = Array.prototype.concat.apply([], args)\n    comparator = function (a, b, i) {\n      i = i || 0\n      return i >= sortKeys.length - 1\n        ? baseCompare(a, b, i)\n        : baseCompare(a, b, i) || comparator(a, b, i + 1)\n    }\n  }\n\n  function baseCompare (a, b, sortKeyIndex) {\n    var sortKey = sortKeys[sortKeyIndex]\n    if (sortKey) {\n      if (sortKey !== '$key') {\n        if (_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isObject(a) && '$value' in a) a = a.$value\n        if (_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isObject(b) && '$value' in b) b = b.$value\n      }\n      a = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isObject(a) ? _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPath(a, sortKey) : a\n      b = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isObject(b) ? _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPath(b, sortKey) : b\n    }\n    return a === b ? 0 : a > b ? order : -order\n  }\n\n  // sort on a copy to avoid mutating original array\n  return arr.slice().sort(comparator)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (orderBy);\n\n//# sourceURL=webpack:///./src/array/orderBy.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/index */ \"./src/util/index.js\");\n/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string/index */ \"./src/string/index.js\");\n/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/index */ \"./src/array/index.js\");\n/* harmony import */ var _other_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other/index */ \"./src/other/index.js\");\n\n\n\n\n\nvar Vue2Filters = {\n  install: function(Vue) {\n    _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].each(_string_index__WEBPACK_IMPORTED_MODULE_1__, function(value, key) {\n        Vue.filter(key, value)\n    })\n\n    _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].each(_other_index__WEBPACK_IMPORTED_MODULE_3__, function(value, key) {\n        Vue.filter(key, value)\n    })\n  },\n  mixin: {\n    methods: {\n        limitBy: _array_index__WEBPACK_IMPORTED_MODULE_2__[\"limitBy\"],\n        filterBy: _array_index__WEBPACK_IMPORTED_MODULE_2__[\"filterBy\"],\n        orderBy: _array_index__WEBPACK_IMPORTED_MODULE_2__[\"orderBy\"],\n        find: _array_index__WEBPACK_IMPORTED_MODULE_2__[\"find\"]\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vue2Filters);\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.Vue.use(Vue2Filters);\n  window.Vue2Filters = Vue2Filters;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/other/currency.js":
/*!*******************************!*\
  !*** ./src/other/currency.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * \n * 12345 => $12,345.00\n *\n * @param {String} symbol\n * @param {Number} decimals Decimal places\n * @param {Object} options\n */\n\nfunction currency (value, symbol, decimals, options) {\n  var thousandsSeparator, symbolOnLeft, spaceBetweenAmountAndSymbol\n  var digitsRE = /(\\d{3})(?=\\d)/g\n  options = options || {}\n  value = parseFloat(value)\n  if (!isFinite(value) || (!value && value !== 0)) return ''\n  symbol = symbol != null ? symbol : '$'\n  decimals = decimals != null ? decimals : 2\n  thousandsSeparator = options.thousandsSeparator != null ? options.thousandsSeparator : ','\n  symbolOnLeft = options.symbolOnLeft != null ? options.symbolOnLeft : true\n  spaceBetweenAmountAndSymbol = options.spaceBetweenAmountAndSymbol != null ? options.spaceBetweenAmountAndSymbol : false\n  var stringified = Math.abs(value).toFixed(decimals)\n  stringified = options.decimalSeparator\n    ? stringified.replace('.', options.decimalSeparator)\n    : stringified\n  var _int = decimals\n    ? stringified.slice(0, -1 - decimals)\n    : stringified\n  var i = _int.length % 3\n  var head = i > 0\n    ? (_int.slice(0, i) + (_int.length > 3 ? thousandsSeparator : ''))\n    : ''\n  var _float = decimals\n    ? stringified.slice(-1 - decimals)\n    : ''\n  symbol = spaceBetweenAmountAndSymbol\n    ? (symbolOnLeft ? symbol + ' ' : ' ' + symbol)\n    : symbol\n  symbol = symbolOnLeft\n    ? symbol + head +\n      _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float\n    : head +\n      _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float + symbol\n  var sign = value < 0 ? '-' : ''\n  return sign + symbol\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (currency);\n\n//# sourceURL=webpack:///./src/other/currency.js?");

/***/ }),

/***/ "./src/other/index.js":
/*!****************************!*\
  !*** ./src/other/index.js ***!
  \****************************/
/*! exports provided: currency, pluralize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency */ \"./src/other/currency.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"currency\", function() { return _currency__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluralize */ \"./src/other/pluralize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pluralize\", function() { return _pluralize__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/other/index.js?");

/***/ }),

/***/ "./src/other/pluralize.js":
/*!********************************!*\
  !*** ./src/other/pluralize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\n\n/**\n * 'item' => 'items'\n *\n * @params\n *  an array of strings corresponding to\n *  the single, double, triple ... forms of the word to\n *  be pluralized. When the number to be pluralized\n *  exceeds the length of the args, it will use the last\n *  entry in the array.\n *\n *  e.g. ['single', 'double', 'triple', 'multiple']\n */\n\nfunction pluralize (value) {\n  var args = _util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toArray(arguments, 1)\n  return args.length > 1\n    ? (args[value % 10 - 1] || args[args.length - 1])\n    : (args[0] + (value === 1 ? '' : 's'))\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pluralize);\n\n//# sourceURL=webpack:///./src/other/pluralize.js?");

/***/ }),

/***/ "./src/string/capitalize.js":
/*!**********************************!*\
  !*** ./src/string/capitalize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *  Converts a string into Capitalize\n * \n * 'abc' => 'Abc'\n */\n\nfunction capitalize (value) {\n  if (!value && value !== 0) return ''\n  value = value.toString()\n  return value.charAt(0).toUpperCase() + value.slice(1)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (capitalize);\n\n\n//# sourceURL=webpack:///./src/string/capitalize.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: capitalize, uppercase, lowercase, placeholder, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ \"./src/string/capitalize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"capitalize\", function() { return _capitalize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _uppercase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uppercase */ \"./src/string/uppercase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uppercase\", function() { return _uppercase__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _lowercase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lowercase */ \"./src/string/lowercase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lowercase\", function() { return _lowercase__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder */ \"./src/string/placeholder.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"placeholder\", function() { return _placeholder__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncate */ \"./src/string/truncate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _truncate__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/string/index.js?");

/***/ }),

/***/ "./src/string/lowercase.js":
/*!*********************************!*\
  !*** ./src/string/lowercase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Converts a string to lowercase\n * \n * 'AbC' => 'abc'\n */\n\nfunction lowercase (value) {\n  return (value || value === 0)\n    ? value.toString().toLowerCase()\n    : ''\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lowercase);\n\n//# sourceURL=webpack:///./src/string/lowercase.js?");

/***/ }),

/***/ "./src/string/placeholder.js":
/*!***********************************!*\
  !*** ./src/string/placeholder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *  If the value is missing outputs the placeholder text\n * \n * '' => {placeholder}\n * 'foo' => 'foo'\n */\n\nfunction placeholder (input, property) {\n  return ( input === undefined || input === '' || input === null ) ? property : input;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (placeholder);\n\n\n//# sourceURL=webpack:///./src/string/placeholder.js?");

/***/ }),

/***/ "./src/string/truncate.js":
/*!********************************!*\
  !*** ./src/string/truncate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *  Truncate at the given || default length\n *\n * 'lorem ipsum dolor' => 'lorem ipsum dol...'\n */\n\nfunction truncate (value, length) {\n  length = length || 15\n  if( !value || typeof value !== 'string' ) return ''\n  if( value.length <= length) return value\n  return value.substring(0, length) + '...'\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (truncate);\n\n\n//# sourceURL=webpack:///./src/string/truncate.js?");

/***/ }),

/***/ "./src/string/uppercase.js":
/*!*********************************!*\
  !*** ./src/string/uppercase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Converts a string to UPPERCASE\n * \n * 'abc' => 'ABC'\n */\n\nfunction uppercase (value) {\n  return (value || value === 0)\n    ? value.toString().toUpperCase()\n    : ''\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uppercase);\n\n//# sourceURL=webpack:///./src/string/uppercase.js?");

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar\n    ArrayProto = Array.prototype,\n    ObjProto = Object.prototype;\n\nvar\n    slice = ArrayProto.slice,\n    toString = ObjProto.toString;\n\nvar util = {};\n\nutil.isArray = function(obj) {\n    return Array.isArray(obj);\n};\n\nvar MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;\nutil.isArrayLike = function(obj) {\n    if(typeof obj !== 'object' || !obj){\n        return false;\n    }\n    var length = obj.length;\n    return typeof length === 'number'\n        && length % 1 === 0 && length >= 0 && length <= MAX_ARRAY_INDEX;\n};\n\nutil.isObject = function(obj) {\n    var type = typeof obj;\n    return type === 'function' || type === 'object' && !!obj;\n};\n\n\nutil.each = function(obj, callback) {\n    var i,\n        len;\n    if (util.isArray(obj)) {\n        for (i = 0, len = obj.length; i < len; i++) {\n            if (callback(obj[i], i, obj) === false) {\n                break;\n            }\n        }\n    } else {\n        for (i in obj) {\n            if (callback(obj[i], i, obj) === false) {\n                break;\n            }\n        }\n    }\n    return obj;\n};\n\nutil.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {\n    util['is' + name] = function(obj) {\n        return toString.call(obj) === '[object ' + name + ']';\n    };\n});\n\nutil.toArray = function(list, start) {\n  start = start || 0\n  var i = list.length - start\n  var ret = new Array(i)\n  while (i--) {\n    ret[i] = list[i + start]\n  }\n  return ret\n}\n\nutil.toNumber = function(value) {\n  if (typeof value !== 'string') {\n    return value\n  } else {\n    var parsed = Number(value)\n    return isNaN(parsed)\n      ? value\n      : parsed\n  }\n};\n\nutil.convertArray = function (value) {\n    if (util.isArray(value)) {\n      return value\n    } else if (util.isPlainObject(value)) {\n      // convert plain object to array.\n      var keys = Object.keys(value)\n      var i = keys.length\n      var res = new Array(i)\n      var key\n      while (i--) {\n        key = keys[i]\n        res[i] = {\n          $key: key,\n          $value: value[key]\n        }\n      }\n      return res\n    } else {\n      return value || []\n    }\n}\n\nfunction multiIndex(obj,is) {  // obj,['1','2','3'] -> ((obj['1'])['2'])['3']\n    return is.length ? multiIndex(obj[is[0]],is.slice(1)) : obj\n}\n\nutil.getPath = function(obj,is) {   // obj,'1.2.3' -> multiIndex(obj,['1','2','3'])\n    return multiIndex(obj,is.split('.'))\n}\n\n/**\n * Strict object type check. Only returns true\n * for plain JavaScript objects.\n *\n * @param {*} obj\n * @return {Boolean}\n */\n\nvar toString = Object.prototype.toString\nvar OBJECT_STRING = '[object Object]'\nutil.isPlainObject = function (obj) {\n  return toString.call(obj) === OBJECT_STRING\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (util);\n\n//# sourceURL=webpack:///./src/util/index.js?");

/***/ })

/******/ });
});