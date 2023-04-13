(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 106:
/*!**************************************!*\
  !*** E:/uni-app/恋爱日记/untils/date.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDate = void 0;
var getDate = function getDate(type) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (type === 'start') {
    year = year - 60;
  } else if (type === 'end') {
    year = year + 2;
  }
  month = month > 9 ? month : '0' + month;
  day = day > 9 ? day : '0' + day;
  return "".concat(year, "-").concat(month, "-").concat(day);
};
exports.getDate = getDate;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__901369A",
    appName: "恋爱日记",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.7.9",
    uniRuntimeVersion: "3.7.9",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__901369A",
      appName: "恋爱日记",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"恋爱日记","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
var eventChannelStack = [];
function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };
  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };
  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isArray = Array.isArray;
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 234:
/*!******************************************************************************!*\
  !*** E:/uni-app/恋爱日记/uni_modules/uni-forms/components/uni-forms/validate.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 31));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 32));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 34));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 30));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i')
};
var FORMAT_MAPPING = {
  "int": 'integer',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number',
  "password": 'string'
  // "fileurls": 'array'
};

function formatMessage(args) {
  var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultMessage = ['label'];
  defaultMessage.forEach(function (item) {
    if (args[item] === undefined) {
      args[item] = '';
    }
  });
  var str = resources;
  for (var key in args) {
    var reg = new RegExp('{' + key + '}');
    str = str.replace(reg, args[key]);
  }
  return str;
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === 'string' && !value) {
    return true;
  }
  if (Array.isArray(value) && !value.length) {
    return true;
  }
  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }
  return false;
}
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string: function string(value) {
    return typeof value === 'string';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function boolean(value) {
    return typeof value === 'boolean';
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  date: function date(value) {
    return value instanceof Date;
  },
  timestamp: function timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false;
    }
    return true;
  },
  file: function file(value) {
    return typeof value.url === 'string';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern: function pattern(reg, value) {
    try {
      return new RegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  idcard: function idcard(value) {
    return typeof value === 'string' && !!value.match(pattern.idcard);
  },
  'url-https': function urlHttps(value) {
    return this.url(value) && value.startsWith('https://');
  },
  'url-scheme': function urlScheme(value) {
    return value.startsWith('://');
  },
  'url-web': function urlWeb(value) {
    return false;
  }
};
var RuleValidator = /*#__PURE__*/function () {
  function RuleValidator(message) {
    (0, _classCallCheck2.default)(this, RuleValidator);
    this._message = message;
  }
  (0, _createClass2.default)(RuleValidator, [{
    key: "validateRule",
    value: function () {
      var _validateRule = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fieldKey, fieldValue, value, data, allData) {
        var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = null;
                rules = fieldValue.rules;
                hasRequired = rules.findIndex(function (item) {
                  return item.required;
                });
                if (!(hasRequired < 0)) {
                  _context.next = 8;
                  break;
                }
                if (!(value === null || value === undefined)) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return", result);
              case 6:
                if (!(typeof value === 'string' && !value.length)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return", result);
              case 8:
                message = this._message;
                if (!(rules === undefined)) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return", message['default']);
              case 11:
                i = 0;
              case 12:
                if (!(i < rules.length)) {
                  _context.next = 35;
                  break;
                }
                rule = rules[i];
                vt = this._getValidateType(rule);
                Object.assign(rule, {
                  label: fieldValue.label || "[\"".concat(fieldKey, "\"]")
                });
                if (!RuleValidatorHelper[vt]) {
                  _context.next = 20;
                  break;
                }
                result = RuleValidatorHelper[vt](rule, value, message);
                if (!(result != null)) {
                  _context.next = 20;
                  break;
                }
                return _context.abrupt("break", 35);
              case 20:
                if (!rule.validateExpr) {
                  _context.next = 26;
                  break;
                }
                now = Date.now();
                resultExpr = rule.validateExpr(value, allData, now);
                if (!(resultExpr === false)) {
                  _context.next = 26;
                  break;
                }
                result = this._getMessage(rule, rule.errorMessage || this._message['default']);
                return _context.abrupt("break", 35);
              case 26:
                if (!rule.validateFunction) {
                  _context.next = 32;
                  break;
                }
                _context.next = 29;
                return this.validateFunction(rule, value, data, allData, vt);
              case 29:
                result = _context.sent;
                if (!(result !== null)) {
                  _context.next = 32;
                  break;
                }
                return _context.abrupt("break", 35);
              case 32:
                i++;
                _context.next = 12;
                break;
              case 35:
                if (result !== null) {
                  result = message.TAG + result;
                }
                return _context.abrupt("return", result);
              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function validateRule(_x, _x2, _x3, _x4, _x5) {
        return _validateRule.apply(this, arguments);
      }
      return validateRule;
    }()
  }, {
    key: "validateFunction",
    value: function () {
      var _validateFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(rule, value, data, allData, vt) {
        var result, callbackMessage, res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = null;
                _context2.prev = 1;
                callbackMessage = null;
                _context2.next = 5;
                return rule.validateFunction(rule, value, allData || data, function (message) {
                  callbackMessage = message;
                });
              case 5:
                res = _context2.sent;
                if (callbackMessage || typeof res === 'string' && res || res === false) {
                  result = this._getMessage(rule, callbackMessage || res, vt);
                }
                _context2.next = 12;
                break;
              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                result = this._getMessage(rule, _context2.t0.message, vt);
              case 12:
                return _context2.abrupt("return", result);
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));
      function validateFunction(_x6, _x7, _x8, _x9, _x10) {
        return _validateFunction.apply(this, arguments);
      }
      return validateFunction;
    }()
  }, {
    key: "_getMessage",
    value: function _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);
    }
  }, {
    key: "_getValidateType",
    value: function _getValidateType(rule) {
      var result = '';
      if (rule.required) {
        result = 'required';
      } else if (rule.format) {
        result = 'format';
      } else if (rule.arrayType) {
        result = 'arrayTypeFormat';
      } else if (rule.range) {
        result = 'range';
      } else if (rule.maximum !== undefined || rule.minimum !== undefined) {
        result = 'rangeNumber';
      } else if (rule.maxLength !== undefined || rule.minLength !== undefined) {
        result = 'rangeLength';
      } else if (rule.pattern) {
        result = 'pattern';
      } else if (rule.validateFunction) {
        result = 'validateFunction';
      }
      return result;
    }
  }]);
  return RuleValidator;
}();
var RuleValidatorHelper = {
  required: function required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || (0, _typeof2.default)(value))) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }
    return null;
  },
  range: function range(rule, value, message) {
    var range = rule.range,
      errorMessage = rule.errorMessage;
    var list = new Array(range.length);
    for (var i = 0; i < range.length; i++) {
      var item = range[i];
      if (types.object(item) && item.value !== undefined) {
        list[i] = item.value;
      } else {
        list[i] = item;
      }
    }
    var result = false;
    if (Array.isArray(value)) {
      result = new Set(value.concat(list)).size === list.length;
    } else {
      if (list.indexOf(value) > -1) {
        result = true;
      }
    }
    if (!result) {
      return formatMessage(rule, errorMessage || message['enum']);
    }
    return null;
  },
  rangeNumber: function rangeNumber(rule, value, message) {
    if (!types.number(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var minimum = rule.minimum,
      maximum = rule.maximum,
      exclusiveMinimum = rule.exclusiveMinimum,
      exclusiveMaximum = rule.exclusiveMaximum;
    var min = exclusiveMinimum ? value <= minimum : value < minimum;
    var max = exclusiveMaximum ? value >= maximum : value > maximum;
    if (minimum !== undefined && min) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMinimum ? 'exclusiveMinimum' : 'minimum']);
    } else if (maximum !== undefined && max) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMaximum ? 'exclusiveMaximum' : 'maximum']);
    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range);
    }
    return null;
  },
  rangeLength: function rangeLength(rule, value, message) {
    if (!types.string(value) && !types.array(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var min = rule.minLength;
    var max = rule.maxLength;
    var val = value.length;
    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['length'].minLength);
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['length'].maxLength);
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['length'].range);
    }
    return null;
  },
  pattern: function pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    return null;
  },
  format: function format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
    }
    return null;
  },
  arrayTypeFormat: function arrayTypeFormat(rule, value, message) {
    if (!Array.isArray(value)) {
      return formatMessage(rule, rule.errorMessage || message.typeError);
    }
    for (var i = 0; i < value.length; i++) {
      var element = value[i];
      var formatResult = this.format(rule, element, message);
      if (formatResult !== null) {
        return formatResult;
      }
    }
    return null;
  }
};
var SchemaValidator = /*#__PURE__*/function (_RuleValidator) {
  (0, _inherits2.default)(SchemaValidator, _RuleValidator);
  var _super = _createSuper(SchemaValidator);
  function SchemaValidator(schema, options) {
    var _this;
    (0, _classCallCheck2.default)(this, SchemaValidator);
    _this = _super.call(this, SchemaValidator.message);
    _this._schema = schema;
    _this._options = options || null;
    return _this;
  }
  (0, _createClass2.default)(SchemaValidator, [{
    key: "updateSchema",
    value: function updateSchema(schema) {
      this._schema = schema;
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 4;
                return this.invokeValidate(data, false, allData);
              case 4:
                result = _context3.sent;
              case 5:
                return _context3.abrupt("return", result.length ? result[0] : null);
              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function validate(_x11, _x12) {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
  }, {
    key: "validateAll",
    value: function () {
      var _validateAll = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context4.next = 5;
                  break;
                }
                _context4.next = 4;
                return this.invokeValidate(data, true, allData);
              case 4:
                result = _context4.sent;
              case 5:
                return _context4.abrupt("return", result);
              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function validateAll(_x13, _x14) {
        return _validateAll.apply(this, arguments);
      }
      return validateAll;
    }()
  }, {
    key: "validateUpdate",
    value: function () {
      var _validateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context5.next = 5;
                  break;
                }
                _context5.next = 4;
                return this.invokeValidateUpdate(data, false, allData);
              case 4:
                result = _context5.sent;
              case 5:
                return _context5.abrupt("return", result.length ? result[0] : null);
              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function validateUpdate(_x15, _x16) {
        return _validateUpdate.apply(this, arguments);
      }
      return validateUpdate;
    }()
  }, {
    key: "invokeValidate",
    value: function () {
      var _invokeValidate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(data, all, allData) {
        var result, schema, key, value, errorMessage;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = [];
                schema = this._schema;
                _context6.t0 = _regenerator.default.keys(schema);
              case 3:
                if ((_context6.t1 = _context6.t0()).done) {
                  _context6.next = 15;
                  break;
                }
                key = _context6.t1.value;
                value = schema[key];
                _context6.next = 8;
                return this.validateRule(key, value, data[key], data, allData);
              case 8:
                errorMessage = _context6.sent;
                if (!(errorMessage != null)) {
                  _context6.next = 13;
                  break;
                }
                result.push({
                  key: key,
                  errorMessage: errorMessage
                });
                if (all) {
                  _context6.next = 13;
                  break;
                }
                return _context6.abrupt("break", 15);
              case 13:
                _context6.next = 3;
                break;
              case 15:
                return _context6.abrupt("return", result);
              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function invokeValidate(_x17, _x18, _x19) {
        return _invokeValidate.apply(this, arguments);
      }
      return invokeValidate;
    }()
  }, {
    key: "invokeValidateUpdate",
    value: function () {
      var _invokeValidateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(data, all, allData) {
        var result, key, errorMessage;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = [];
                _context7.t0 = _regenerator.default.keys(data);
              case 2:
                if ((_context7.t1 = _context7.t0()).done) {
                  _context7.next = 13;
                  break;
                }
                key = _context7.t1.value;
                _context7.next = 6;
                return this.validateRule(key, this._schema[key], data[key], data, allData);
              case 6:
                errorMessage = _context7.sent;
                if (!(errorMessage != null)) {
                  _context7.next = 11;
                  break;
                }
                result.push({
                  key: key,
                  errorMessage: errorMessage
                });
                if (all) {
                  _context7.next = 11;
                  break;
                }
                return _context7.abrupt("break", 13);
              case 11:
                _context7.next = 2;
                break;
              case 13:
                return _context7.abrupt("return", result);
              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function invokeValidateUpdate(_x20, _x21, _x22) {
        return _invokeValidateUpdate.apply(this, arguments);
      }
      return invokeValidateUpdate;
    }()
  }, {
    key: "_checkFieldInSchema",
    value: function _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return '';
      }
      var noExistFields = keys.filter(function (key) {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message['defaultInvalid']);
      return [{
        key: 'invalid',
        errorMessage: errorMessage
      }];
    }
  }]);
  return SchemaValidator;
}(RuleValidator);
function Message() {
  return {
    TAG: "",
    default: '验证错误',
    defaultInvalid: '提交的字段{field}在数据库中并不存在',
    validateFunction: '验证无效',
    required: '{label}必填',
    'enum': '{label}超出范围',
    timestamp: '{label}格式无效',
    whitespace: '{label}不能为空',
    typeError: '{label}类型无效',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效'
    },
    length: {
      minLength: '{label}长度不能少于{minLength}',
      maxLength: '{label}长度不能超过{maxLength}',
      range: '{label}必须介于{minLength}和{maxLength}之间'
    },
    number: {
      minimum: '{label}不能小于{minimum}',
      maximum: '{label}不能大于{maximum}',
      exclusiveMinimum: '{label}不能小于等于{minimum}',
      exclusiveMaximum: '{label}不能大于等于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间'
    },
    pattern: {
      mismatch: '{label}格式不匹配'
    }
  };
}
SchemaValidator.message = new Message();
var _default = SchemaValidator;
exports.default = _default;

/***/ }),

/***/ 235:
/*!***************************************************************************!*\
  !*** E:/uni-app/恋爱日记/uni_modules/uni-forms/components/uni-forms/utils.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFilter = exports.type = exports.setDataValue = exports.realName = exports.rawData = exports.objSet = exports.objGet = exports.name2arr = exports.isRequiredField = exports.isRealName = exports.isNumber = exports.isEqual = exports.isBoolean = exports.getValue = exports.getDataValueType = exports.getDataValue = exports.deepCopy = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 简单处理对象拷贝
 * @param {Obejct} 被拷贝对象
 * @@return {Object} 拷贝对象
 */
var deepCopy = function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
};
/**
 * 过滤数字类型
 * @param {String} format 数字类型
 * @@return {Boolean} 返回是否为数字类型
 */
exports.deepCopy = deepCopy;
var typeFilter = function typeFilter(format) {
  return format === 'int' || format === 'double' || format === 'number' || format === 'timestamp';
};

/**
 * 把 value 转换成指定的类型，用于处理初始值，原因是初始值需要入库不能为 undefined
 * @param {String} key 字段名
 * @param {any} value 字段值
 * @param {Object} rules 表单校验规则
 */
exports.typeFilter = typeFilter;
var getValue = function getValue(key, value, rules) {
  var isRuleNumType = rules.find(function (val) {
    return val.format && typeFilter(val.format);
  });
  var isRuleBoolType = rules.find(function (val) {
    return val.format && val.format === 'boolean' || val.format === 'bool';
  });
  // 输入类型为 number
  if (!!isRuleNumType) {
    if (!value && value !== 0) {
      value = null;
    } else {
      value = isNumber(Number(value)) ? Number(value) : value;
    }
  }

  // 输入类型为 boolean
  if (!!isRuleBoolType) {
    value = isBoolean(value) ? value : false;
  }
  return value;
};

/**
 * 获取表单数据
 * @param {String|Array} name 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 * @param {any} value  需要设置的值
 */
exports.getValue = getValue;
var setDataValue = function setDataValue(field, formdata, value) {
  formdata[field] = value;
  return value || '';
};

/**
 * 获取表单数据
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 */
exports.setDataValue = setDataValue;
var getDataValue = function getDataValue(field, data) {
  return objGet(data, field);
};

/**
 * 获取表单类型
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 */
exports.getDataValue = getDataValue;
var getDataValueType = function getDataValueType(field, data) {
  var value = getDataValue(field, data);
  return {
    type: type(value),
    value: value
  };
};

/**
 * 获取表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
exports.getDataValueType = getDataValueType;
var realName = function realName(name) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var base_name = _basePath(name);
  if ((0, _typeof2.default)(base_name) === 'object' && Array.isArray(base_name) && base_name.length > 1) {
    var realname = base_name.reduce(function (a, b) {
      return a += "#".concat(b);
    }, '_formdata_');
    return realname;
  }
  return base_name[0] || name;
};

/**
 * 判断是否表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
exports.realName = realName;
var isRealName = function isRealName(name) {
  var reg = /^_formdata_#*/;
  return reg.test(name);
};

/**
 * 获取表单数据的原始格式
 * @@return {Object|Array} object 需要解析的数据
 */
exports.isRealName = isRealName;
var rawData = function rawData() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var newData = JSON.parse(JSON.stringify(object));
  var formData = {};
  for (var i in newData) {
    var path = name2arr(i);
    objSet(formData, path, newData[i]);
  }
  return formData;
};

/**
 * 真实name还原为 array
 * @param {*} name 
 */
exports.rawData = rawData;
var name2arr = function name2arr(name) {
  var field = name.replace('_formdata_#', '');
  field = field.split('#').map(function (v) {
    return isNumber(v) ? Number(v) : v;
  });
  return field;
};

/**
 * 对象中设置值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} value 需要设置的值
 */
exports.name2arr = name2arr;
var objSet = function objSet(object, path, value) {
  if ((0, _typeof2.default)(object) !== 'object') return object;
  _basePath(path).reduce(function (o, k, i, _) {
    if (i === _.length - 1) {
      // 若遍历结束直接赋值
      o[k] = value;
      return null;
    } else if (k in o) {
      // 若存在对应路径，则返回找到的对象，进行下一次遍历
      return o[k];
    } else {
      // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象
      o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
      return o[k];
    }
  }, object);
  // 返回object
  return object;
};

// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用
exports.objSet = objSet;
function _basePath(path) {
  // 若是数组，则直接返回
  if (Array.isArray(path)) return path;
  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

/**
 * 从对象中获取值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} defaultVal 如果无法从调用链中获取值的默认值
 */
var objGet = function objGet(object, path) {
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';
  // 先将path处理成统一格式
  var newPath = _basePath(path);
  // 递归处理，返回最后结果
  var val = newPath.reduce(function (o, k) {
    return (o || {})[k];
  }, object);
  return !val || val !== undefined ? val : defaultVal;
};

/**
 * 是否为 number 类型 
 * @param {any} num 需要判断的值
 * @return {Boolean} 是否为 number
 */
exports.objGet = objGet;
var isNumber = function isNumber(num) {
  return !isNaN(Number(num));
};

/**
 * 是否为 boolean 类型 
 * @param {any} bool 需要判断的值
 * @return {Boolean} 是否为 boolean
 */
exports.isNumber = isNumber;
var isBoolean = function isBoolean(bool) {
  return typeof bool === 'boolean';
};
/**
 * 是否有必填字段
 * @param {Object} rules 规则
 * @return {Boolean} 是否有必填字段
 */
exports.isBoolean = isBoolean;
var isRequiredField = function isRequiredField(rules) {
  var isNoField = false;
  for (var i = 0; i < rules.length; i++) {
    var ruleData = rules[i];
    if (ruleData.required) {
      isNoField = true;
      break;
    }
  }
  return isNoField;
};

/**
 * 获取数据类型
 * @param {Any} obj 需要获取数据类型的值
 */
exports.isRequiredField = isRequiredField;
var type = function type(obj) {
  var class2type = {};

  // 生成class2type映射
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });
  if (obj == null) {
    return obj + "";
  }
  return (0, _typeof2.default)(obj) === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : (0, _typeof2.default)(obj);
};

/**
 * 判断两个值是否相等
 * @param {any} a 值  
 * @param {any} b 值  
 * @return {Boolean} 是否相等
 */
exports.type = type;
var isEqual = function isEqual(a, b) {
  //如果a和b本来就全等
  if (a === b) {
    //判断是否为0和-0
    return a !== 0 || 1 / a === 1 / b;
  }
  //判断是否为null和undefined
  if (a == null || b == null) {
    return a === b;
  }
  //接下来判断a和b的数据类型
  var classNameA = toString.call(a),
    classNameB = toString.call(b);
  //如果数据类型不相等，则返回false
  if (classNameA !== classNameB) {
    return false;
  }
  //如果数据类型相等，再根据不同数据类型分别判断
  switch (classNameA) {
    case '[object RegExp]':
    case '[object String]':
      //进行字符串转换比较
      return '' + a === '' + b;
    case '[object Number]':
      //进行数字转换比较,判断是否为NaN
      if (+a !== +a) {
        return +b !== +b;
      }
      //判断是否为0或-0
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }
  //如果是对象类型
  if (classNameA == '[object Object]') {
    //获取a和b的属性长度
    var propsA = Object.getOwnPropertyNames(a),
      propsB = Object.getOwnPropertyNames(b);
    if (propsA.length != propsB.length) {
      return false;
    }
    for (var i = 0; i < propsA.length; i++) {
      var propName = propsA[i];
      //如果对应属性对应值不相等，则返回false
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }
  //如果是数组类型
  if (classNameA == '[object Array]') {
    if (a.toString() == b.toString()) {
      return true;
    }
    return false;
  }
};
exports.isEqual = isEqual;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"恋爱日记","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"恋爱日记","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"恋爱日记","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"恋爱日记","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize',
    'onUploadDouyinVideo'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!**********************************!*\
  !*** E:/uni-app/恋爱日记/pages.json ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 27:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 30));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 31));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 32));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 34));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 35));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 37));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e33) { throw _e33; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e34) { didErr = true; err = _e34; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function s(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var r = s(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        l = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        h = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var l = 0; l < c; l += i) {
                this._doProcessBlock(s, l);
              }
              var h = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(h, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = h.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          h.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  i = r,
  o = (s(function (e, t) {
    var n;
    e.exports = (n = i, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            b = e[t + 10],
            S = e[t + 11],
            k = e[t + 12],
            I = e[t + 13],
            T = e[t + 14],
            C = e[t + 15],
            A = i[0],
            P = i[1],
            E = i[2],
            O = i[3];
          A = u(A, P, E, O, o, 7, a[0]), O = u(O, A, P, E, c, 12, a[1]), E = u(E, O, A, P, p, 17, a[2]), P = u(P, E, O, A, f, 22, a[3]), A = u(A, P, E, O, g, 7, a[4]), O = u(O, A, P, E, m, 12, a[5]), E = u(E, O, A, P, y, 17, a[6]), P = u(P, E, O, A, _, 22, a[7]), A = u(A, P, E, O, w, 7, a[8]), O = u(O, A, P, E, v, 12, a[9]), E = u(E, O, A, P, b, 17, a[10]), P = u(P, E, O, A, S, 22, a[11]), A = u(A, P, E, O, k, 7, a[12]), O = u(O, A, P, E, I, 12, a[13]), E = u(E, O, A, P, T, 17, a[14]), A = l(A, P = u(P, E, O, A, C, 22, a[15]), E, O, c, 5, a[16]), O = l(O, A, P, E, y, 9, a[17]), E = l(E, O, A, P, S, 14, a[18]), P = l(P, E, O, A, o, 20, a[19]), A = l(A, P, E, O, m, 5, a[20]), O = l(O, A, P, E, b, 9, a[21]), E = l(E, O, A, P, C, 14, a[22]), P = l(P, E, O, A, g, 20, a[23]), A = l(A, P, E, O, v, 5, a[24]), O = l(O, A, P, E, T, 9, a[25]), E = l(E, O, A, P, f, 14, a[26]), P = l(P, E, O, A, w, 20, a[27]), A = l(A, P, E, O, I, 5, a[28]), O = l(O, A, P, E, p, 9, a[29]), E = l(E, O, A, P, _, 14, a[30]), A = h(A, P = l(P, E, O, A, k, 20, a[31]), E, O, m, 4, a[32]), O = h(O, A, P, E, w, 11, a[33]), E = h(E, O, A, P, S, 16, a[34]), P = h(P, E, O, A, T, 23, a[35]), A = h(A, P, E, O, c, 4, a[36]), O = h(O, A, P, E, g, 11, a[37]), E = h(E, O, A, P, _, 16, a[38]), P = h(P, E, O, A, b, 23, a[39]), A = h(A, P, E, O, I, 4, a[40]), O = h(O, A, P, E, o, 11, a[41]), E = h(E, O, A, P, f, 16, a[42]), P = h(P, E, O, A, y, 23, a[43]), A = h(A, P, E, O, v, 4, a[44]), O = h(O, A, P, E, k, 11, a[45]), E = h(E, O, A, P, C, 16, a[46]), A = d(A, P = h(P, E, O, A, p, 23, a[47]), E, O, o, 6, a[48]), O = d(O, A, P, E, _, 10, a[49]), E = d(E, O, A, P, T, 15, a[50]), P = d(P, E, O, A, m, 21, a[51]), A = d(A, P, E, O, k, 6, a[52]), O = d(O, A, P, E, f, 10, a[53]), E = d(E, O, A, P, b, 15, a[54]), P = d(P, E, O, A, c, 21, a[55]), A = d(A, P, E, O, w, 6, a[56]), O = d(O, A, P, E, C, 10, a[57]), E = d(E, O, A, P, y, 15, a[58]), P = d(P, E, O, A, I, 21, a[59]), A = d(A, P, E, O, g, 6, a[60]), O = d(O, A, P, E, S, 10, a[61]), E = d(E, O, A, P, p, 15, a[62]), P = d(P, E, O, A, v, 21, a[63]), i[0] = i[0] + A | 0, i[1] = i[1] + P | 0, i[2] = i[2] + E | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var l = c[u];
            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), s(function (e, t) {
    var n;
    e.exports = (n = i, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), s(function (e, t) {
    e.exports = i.HmacMD5;
  })),
  a = s(function (e, t) {
    e.exports = i.enc.Utf8;
  }),
  c = s(function (e, t) {
    var n;
    e.exports = (n = i, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var u = "FUNCTION",
  l = "OBJECT",
  h = "CLIENT_DB",
  d = "pending",
  p = "fullfilled",
  f = "rejected";
function g(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function m(e) {
  return "object" === g(e);
}
function y(e) {
  return "function" == typeof e;
}
function _(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var w = "REJECTED",
  v = "NOT_PENDING";
var b = /*#__PURE__*/function () {
  function b() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? w : _ref$retryRule;
    (0, _classCallCheck2.default)(this, b);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(b, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case w:
          return this.status === f;
        case v:
          return this.status !== d;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = d, this.promise = this.createPromise().then(function (e) {
        return _this.status = p, Promise.resolve(e);
      }, function (e) {
        return _this.status = f, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return b;
}();
function S(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var k = "development" === "development",
  I = "mp-weixin",
  T = "true" === undefined || !0 === undefined,
  C = S([]),
  A = "h5" === I ? "web" : "app-plus" === I ? "app" : I,
  P = S({
    "address": [
        "127.0.0.1",
        "192.168.246.1",
        "192.168.137.1",
        "192.168.31.154"
    ],
    "debugPort": 9000,
    "initialLaunchType": "remote",
    "servePort": 7000,
    "skipFiles": [
        "<node_internals>/**",
        "C:/Program Files/HBuilderX/plugins/unicloud/**/*.js"
    ]
}
),
  E = S([{"provider":"aliyun","spaceName":"love","spaceId":"mp-ef64b579-45c7-4be3-847a-226e71feacf0","clientSecret":"TjwGg9Z/DZvWApH5zGg1rg==","endpoint":"https://api.next.bspapp.com"}]) || [],
  O = true;
var x = "";
try {
  x = (__webpack_require__(/*! uni-stat-config */ 38).default || __webpack_require__(/*! uni-stat-config */ 38)).appid;
} catch (e) {}
var R = {};
function U(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = R, s = e, Object.prototype.hasOwnProperty.call(n, s) || (R[e] = t), R[e];
}
"app" === A && (R = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var L = ["invoke", "success", "fail", "complete"],
  N = U("_globalUniCloudInterceptor");
function D(e, t) {
  N[e] || (N[e] = {}), m(t) && Object.keys(t).forEach(function (n) {
    L.indexOf(n) > -1 && function (e, t, n) {
      var s = N[e][t];
      s || (s = N[e][t] = []), -1 === s.indexOf(n) && y(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function F(e, t) {
  N[e] || (N[e] = {}), m(t) ? Object.keys(t).forEach(function (n) {
    L.indexOf(n) > -1 && function (e, t, n) {
      var s = N[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete N[e];
}
function q(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function K(e, t) {
  return N[e] && N[e][t] || [];
}
function M(e) {
  D("callObject", e);
}
var j = U("_globalUniCloudListener"),
  B = "response",
  $ = "needLogin",
  W = "refreshToken",
  z = "clientdb",
  J = "cloudfunction",
  H = "cloudobject";
function G(e) {
  return j[e] || (j[e] = []), j[e];
}
function V(e, t) {
  var n = G(e);
  n.includes(t) || n.push(t);
}
function Y(e, t) {
  var n = G(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Q(e, t) {
  var n = G(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var X,
  Z = !1;
function ee() {
  return X || (X = new Promise(function (e) {
    Z && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (Z = !0, e());
      }
      Z || setTimeout(function () {
        t();
      }, 30);
    }();
  }), X);
}
function te(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    y(_s2) && (t[_n2] = _(_s2));
  }
  return t;
}
var ne = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(ne, _Error);
  var _super = _createSuper(ne);
  function ne(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, ne);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(ne, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return ne;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var se = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function re() {
  return {
    token: se.getStorageSync("uni_id_token") || se.getStorageSync("uniIdToken"),
    tokenExpired: se.getStorageSync("uni_id_token_expired")
  };
}
function ie() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && se.setStorageSync("uni_id_token", e), t && se.setStorageSync("uni_id_token_expired", t);
}
var oe, ae;
function ce() {
  return oe || (oe = uni.getSystemInfoSync()), oe;
}
function ue() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function le() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (ae) return _objectSpread(_objectSpread({}, ae), {}, {
    locale: e,
    LOCALE: e
  });
  var t = ce(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e3 = 0; _e3 < o.length; _e3++) {
    delete t[o[_e3]];
  }
  return ae = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ue()), t), _objectSpread(_objectSpread({}, ae), {}, {
    locale: e,
    LOCALE: e
  });
}
var he = {
    sign: function sign(e, t) {
      var n = "";
      return Object.keys(e).sort().forEach(function (t) {
        e[t] && (n = n + "&" + t + "=" + e[t]);
      }), n = n.slice(1), o(n, t).toString();
    },
    wrappedRequest: function wrappedRequest(e, t) {
      return new Promise(function (n, s) {
        t(Object.assign(e, {
          complete: function complete(e) {
            e || (e = {}), k && "web" === A && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
            var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
            if (!e.statusCode || e.statusCode >= 400) return s(new ne({
              code: "SYS_ERR",
              message: e.errMsg || "request:fail",
              requestId: t
            }));
            var r = e.data;
            if (r.error) return s(new ne({
              code: r.error.code,
              message: r.error.message,
              requestId: t
            }));
            r.result = r.data, r.requestId = t, delete r.data, n(r);
          }
        }));
      });
    },
    toBase64: function toBase64(e) {
      return c.stringify(a.parse(e));
    }
  },
  de = {
    "uniCloud.init.paramRequired": "{param} required",
    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
  };
var _e4 = (0, _uniI18n.initVueI18n)({
    "zh-Hans": {
      "uniCloud.init.paramRequired": "缺少参数：{param}",
      "uniCloud.uploadFile.fileError": "filePath应为File对象"
    },
    "zh-Hant": {
      "uniCloud.init.paramRequired": "缺少参数：{param}",
      "uniCloud.uploadFile.fileError": "filePath应为File对象"
    },
    en: de,
    fr: {
      "uniCloud.init.paramRequired": "{param} required",
      "uniCloud.uploadFile.fileError": "filePath should be instance of File"
    },
    es: {
      "uniCloud.init.paramRequired": "{param} required",
      "uniCloud.uploadFile.fileError": "filePath should be instance of File"
    },
    ja: de
  }, "zh-Hans"),
  pe = _e4.t;
var fe = /*#__PURE__*/function () {
  function fe(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, fe);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(pe("uniCloud.init.paramRequired", {
        param: t
      }));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = se, this._getAccessTokenPromiseHub = new b({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new ne({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: v
    });
  }
  (0, _createClass2.default)(fe, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return he.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = he.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new ne({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new ne({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, s, r, i, o, a, c, u, l, h, d, p, f, m, y, _e5, _;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, s = _ref4.onUploadProgress, r = _ref4.config;
                if (!("string" !== g(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new ne({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new ne({
                  code: "CLOUDPATH_REQUIRED",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new ne({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                i = r && r.envType || this.config.envType;
                _context2.next = 10;
                return this.getOSSUploadOptionsFromPath({
                  env: i,
                  filename: t
                });
              case 10:
                o = _context2.sent.result;
                a = "https://" + o.cdnDomain + "/" + o.ossPath;
                c = o.securityToken;
                u = o.accessKeyId;
                l = o.signature;
                h = o.host;
                d = o.ossPath;
                p = o.id;
                f = o.policy;
                m = o.ossCallbackUrl;
                y = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: u,
                  Signature: l,
                  host: h,
                  id: p,
                  key: d,
                  policy: f,
                  success_action_status: 200
                };
                if (c && (y["x-oss-security-token"] = c), m) {
                  _e5 = JSON.stringify({
                    callbackUrl: m,
                    callbackBody: JSON.stringify({
                      fileId: p,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  y.callback = he.toBase64(_e5);
                }
                _ = {
                  url: "https://" + o.host,
                  formData: y,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 25;
                return this.uploadFileToOSS(Object.assign({}, _, {
                  onUploadProgress: s
                }));
              case 25:
                if (!m) {
                  _context2.next = 27;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: a
                });
              case 27:
                _context2.next = 29;
                return this.reportOSSUpload({
                  id: p
                });
              case 29:
                if (!_context2.sent.success) {
                  _context2.next = 31;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: a
                });
              case 31:
                throw new ne({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new ne({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new ne({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return fe;
}();
var ge = {
  init: function init(e) {
    var t = new fe(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var me = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var ye;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(ye || (ye = {}));
var _e = function _e() {};
var we = function we() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new ne({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e6, s) {
      return _e6 ? n(_e6) : t(s);
    };
  });
  return e.promise = t, e;
};
function ve(e) {
  return void 0 === e;
}
function be(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var Se;
function ke(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e7 = _step.value;
      var _t4 = _e7.isMatch,
        _n4 = _e7.genAdapter,
        _s4 = _e7.runtime;
      if (_t4()) return {
        adapter: _n4(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Se || (Se = {}));
var Ie = {
    adapter: null,
    runtime: void 0
  },
  Te = ["anonymousUuidKey"];
var Ce = /*#__PURE__*/function (_e8) {
  (0, _inherits2.default)(Ce, _e8);
  var _super2 = _createSuper(Ce);
  function Ce() {
    var _this6;
    (0, _classCallCheck2.default)(this, Ce);
    _this6 = _super2.call(this), Ie.adapter.root.tcbObject || (Ie.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(Ce, [{
    key: "setItem",
    value: function setItem(e, t) {
      Ie.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return Ie.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete Ie.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete Ie.adapter.root.tcbObject;
    }
  }]);
  return Ce;
}(_e);
function Ae(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Ce();
    case "none":
      return new Ce();
    default:
      return t.sessionStorage || new Ce();
  }
}
var Pe = /*#__PURE__*/function () {
  function Pe(e) {
    (0, _classCallCheck2.default)(this, Pe);
    if (!this._storage) {
      this._persistence = Ie.adapter.primaryStorage || e.persistence, this._storage = Ae(this._persistence, Ie.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n5 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n5,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(Pe, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Ae(e, Ie.adapter);
      for (var _e9 in this.keys) {
        var _s6 = this.keys[_e9];
        if (t && Te.includes(_e9)) continue;
        var _r2 = this._storage.getItem(_s6);
        ve(_r2) || be(_r2) || (n.setItem(_s6, _r2), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Pe;
}();
var Ee = {},
  Oe = {};
function xe(e) {
  return Ee[e];
}
var Re = /*#__PURE__*/(0, _createClass2.default)(function Re(e, t) {
  (0, _classCallCheck2.default)(this, Re);
  this.data = t || null, this.name = e;
});
var Ue = /*#__PURE__*/function (_Re) {
  (0, _inherits2.default)(Ue, _Re);
  var _super3 = _createSuper(Ue);
  function Ue(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Ue);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Ue);
}(Re);
var Le = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Ue) return console.error(e.error), this;
      var n = "string" == typeof e ? new Re(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e10 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e10),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function Ne(e, t) {
  Le.on(e, t);
}
function De(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Le.fire(e, t);
}
function Fe(e, t) {
  Le.off(e, t);
}
var qe = "loginStateChanged",
  Ke = "loginStateExpire",
  Me = "loginTypeChanged",
  je = "anonymousConverted",
  Be = "refreshAccessToken";
var $e;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}($e || ($e = {}));
var We = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  ze = {
    "X-SDK-Version": "1.3.5"
  };
function Je(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e11 in r) {
        o.append(_e11, r[_e11]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function He() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, ze), {}, {
      "x-seqid": e
    })
  };
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Ge);
    var t;
    this.config = e, this._reqClass = new Ie.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = xe(this.config.env), this._localCache = (t = this.config.env, Oe[t]), Je(this._reqClass, "post", [He]), Je(this._reqClass, "upload", [He]), Je(this._reqClass, "download", [He]);
  }
  (0, _createClass2.default)(Ge, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var e, t;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context7.prev = 1;
                _context7.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context7.sent;
                _context7.next = 10;
                break;
              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                t = _context7.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context7.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context7.abrupt("return", e);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e12, _e13, _t7, _s8;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context8.next = 5;
                  break;
                }
                throw new ne({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context8.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context8.sent;
                if (!a.data.code) {
                  _context8.next = 21;
                  break;
                }
                _e12 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e12 || "REFRESH_TOKEN_EXPIRED" === _e12 || "INVALID_REFRESH_TOKEN" === _e12)) {
                  _context8.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === $e.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e12)) {
                  _context8.next = 19;
                  break;
                }
                _e13 = this._cache.getStore(r);
                _t7 = this._cache.getStore(n);
                _context8.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e13,
                  refresh_token: _t7
                });
              case 17:
                _s8 = _context8.sent;
                return _context8.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
              case 19:
                De(Ke), this._cache.removeStore(n);
              case 20:
                throw new ne({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context8.next = 23;
                  break;
                }
                return _context8.abrupt("return", (De(Be), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context9.next = 3;
                  break;
                }
                throw new ne({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context9.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context9.t0) {
                  _context9.next = 9;
                  break;
                }
                _context9.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context9.t0 = !_context9.sent;
              case 9:
                _context9.t1 = _context9.t0;
                if (!_context9.t1) {
                  _context9.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context9.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(e, t, n) {
        var s, r, i, _e14, o, _e15, _e16, a, c, u, l, h, d, p, f, g;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                if (!(-1 === We.indexOf(e))) {
                  _context10.next = 10;
                  break;
                }
                _e14 = this._cache.keys.refreshTokenKey;
                _context10.t0 = this._cache.getStore(_e14);
                if (!_context10.t0) {
                  _context10.next = 10;
                  break;
                }
                _context10.next = 9;
                return this.getAccessToken();
              case 9:
                i.access_token = _context10.sent.accessToken;
              case 10:
                if ("storage.uploadFile" === e) {
                  o = new FormData();
                  for (_e15 in o) {
                    o.hasOwnProperty(_e15) && void 0 !== o[_e15] && o.append(_e15, i[_e15]);
                  }
                  r = "multipart/form-data";
                } else {
                  r = "application/json", o = {};
                  for (_e16 in i) {
                    void 0 !== i[_e16] && (o[_e16] = i[_e16]);
                  }
                }
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, l = t.inQuery, h = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), l && (d = _objectSpread(_objectSpread({}, l), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e17 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e17, "=").concat(encodeURIComponent(n[_e17]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(me, "//tcb-api.tencentcloudapi.com/web", d);
                h && (p += h);
                _context10.next = 22;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 22:
                f = _context10.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context10.next = 26;
                  break;
                }
                throw new ne({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 26:
                return _context10.abrupt("return", f);
              case 27:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {
        var t,
          n,
          _n6,
          _args11 = arguments;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _context11.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 3:
                n = _context11.sent;
                if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === We.indexOf(e))) {
                  _context11.next = 13;
                  break;
                }
                _context11.next = 7;
                return this.refreshAccessToken();
              case 7:
                _context11.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 9:
                _n6 = _context11.sent;
                if (!_n6.data.code) {
                  _context11.next = 12;
                  break;
                }
                throw new ne({
                  code: _n6.data.code,
                  message: _n6.data.message
                });
              case 12:
                return _context11.abrupt("return", _n6.data);
              case 13:
                if (!n.data.code) {
                  _context11.next = 15;
                  break;
                }
                throw new ne({
                  code: n.data.code,
                  message: n.data.message
                });
              case 15:
                return _context11.abrupt("return", n.data);
              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return Ge;
}();
var Ve = {};
function Ye(e) {
  return Ve[e];
}
var Qe = /*#__PURE__*/function () {
  function Qe(e) {
    (0, _classCallCheck2.default)(this, Qe);
    this.config = e, this._cache = xe(e.env), this._request = Ye(e.env);
  }
  (0, _createClass2.default)(Qe, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context12.sent;
                e = _yield$this$_request$.data;
                return _context12.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return Qe;
}();
var Xe = /*#__PURE__*/function () {
  function Xe(e) {
    (0, _classCallCheck2.default)(this, Xe);
    if (!e) throw new ne({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = xe(this._envId), this._request = Ye(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Xe, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new ne({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new ne({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context13.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context13.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context14.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context14.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _yield$this$_request$4, e;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$4 = _context15.sent;
                e = _yield$this$_request$4.data;
                return _context15.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Xe;
}();
var Ze = /*#__PURE__*/function () {
  function Ze(e) {
    (0, _classCallCheck2.default)(this, Ze);
    if (!e) throw new ne({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = xe(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Xe(e);
  }
  (0, _createClass2.default)(Ze, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === $e.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === $e.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === $e.WECHAT || this.loginType === $e.WECHAT_OPEN || this.loginType === $e.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ze;
}();
var et = /*#__PURE__*/function (_Qe) {
  (0, _inherits2.default)(et, _Qe);
  var _super4 = _createSuper(et);
  function et() {
    (0, _classCallCheck2.default)(this, et);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(et, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var _this$_cache$keys7, e, t, n, s, r, _e18;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._cache.updatePersistence("local");
                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                n = this._cache.getStore(e) || void 0;
                s = this._cache.getStore(t) || void 0;
                _context16.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: n,
                  refresh_token: s
                });
              case 8:
                r = _context16.sent;
                if (!(r.uuid && r.refresh_token)) {
                  _context16.next = 20;
                  break;
                }
                this._setAnonymousUUID(r.uuid);
                this.setRefreshToken(r.refresh_token);
                _context16.next = 14;
                return this._request.refreshAccessToken();
              case 14:
                De(qe);
                De(Me, {
                  env: this.config.env,
                  loginType: $e.ANONYMOUS,
                  persistence: "local"
                });
                _e18 = new Ze(this.config.env);
                _context16.next = 19;
                return _e18.user.refresh();
              case 19:
                return _context16.abrupt("return", _e18);
              case 20:
                throw new ne({
                  message: "匿名登录失败"
                });
              case 21:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                n = _this$_cache$keys8.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context17.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context17.sent;
                if (!i.refresh_token) {
                  _context17.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context17.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                De(je, {
                  env: this.config.env
                });
                De(Me, {
                  loginType: $e.CUSTOM,
                  persistence: "local"
                });
                return _context17.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new ne({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, $e.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return et;
}(Qe);
var tt = /*#__PURE__*/function (_Qe2) {
  (0, _inherits2.default)(tt, _Qe2);
  var _super5 = _createSuper(tt);
  function tt() {
    (0, _classCallCheck2.default)(this, tt);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(tt, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context18.next = 2;
                  break;
                }
                throw new ne({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context18.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context18.sent;
                if (!n.refresh_token) {
                  _context18.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context18.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                De(qe);
                De(Me, {
                  env: this.config.env,
                  loginType: $e.CUSTOM,
                  persistence: this.config.persistence
                });
                _context18.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context18.abrupt("return", new Ze(this.config.env));
              case 15:
                throw new ne({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return tt;
}(Qe);
var nt = /*#__PURE__*/function (_Qe3) {
  (0, _inherits2.default)(nt, _Qe3);
  var _super6 = _createSuper(nt);
  function nt() {
    (0, _classCallCheck2.default)(this, nt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(nt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context19.next = 2;
                  break;
                }
                throw new ne({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context19.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context19.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context19.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context19.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context19.next = 17;
                break;
              case 15:
                _context19.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context19.next = 19;
                return this.refreshUserInfo();
              case 19:
                De(qe);
                De(Me, {
                  env: this.config.env,
                  loginType: $e.EMAIL,
                  persistence: this.config.persistence
                });
                return _context19.abrupt("return", new Ze(this.config.env));
              case 22:
                throw s.code ? new ne({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new ne({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return nt;
}(Qe);
var st = /*#__PURE__*/function (_Qe4) {
  (0, _inherits2.default)(st, _Qe4);
  var _super7 = _createSuper(st);
  function st() {
    (0, _classCallCheck2.default)(this, st);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(st, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context22.next = 2;
                  break;
                }
                throw new ne({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context22.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: $e.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context22.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context22.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context22.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context22.next = 18;
                break;
              case 16:
                _context22.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context22.next = 20;
                return this.refreshUserInfo();
              case 20:
                De(qe);
                De(Me, {
                  env: this.config.env,
                  loginType: $e.USERNAME,
                  persistence: this.config.persistence
                });
                return _context22.abrupt("return", new Ze(this.config.env));
              case 23:
                throw s.code ? new ne({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new ne({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return st;
}(Qe);
var rt = /*#__PURE__*/function () {
  function rt(e) {
    (0, _classCallCheck2.default)(this, rt);
    this.config = e, this._cache = xe(e.env), this._request = Ye(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ne(Me, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(rt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new et(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new tt(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new nt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new st(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23() {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", new et(this.config).signIn());
              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", new nt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new st(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new et(this.config)), Ne(je, this._onAnonymousConverted);
                _context25.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context25.abrupt("return", _context25.sent);
              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
        var _this$_cache$keys10, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(this.loginType === $e.ANONYMOUS)) {
                  _context26.next = 2;
                  break;
                }
                throw new ne({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context26.next = 5;
                  break;
                }
                return _context26.abrupt("return");
              case 5:
                _context26.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context26.sent;
                return _context26.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), De(qe), De(Me, {
                  env: this.config.env,
                  loginType: $e.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e, t) {
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      Ne(qe, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      Ne(Ke, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      Ne(Be, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      Ne(je, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      Ne(Me, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context29.t0 = _context29.sent.accessToken;
                _context29.t1 = this.config.env;
                return _context29.abrupt("return", {
                  accessToken: _context29.t0,
                  env: _context29.t1
                });
              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ze(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {
        var _yield$this$_request$5, t;
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context30.next = 2;
                  break;
                }
                throw new ne({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context30.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$5 = _context30.sent;
                t = _yield$this$_request$5.data;
                return _context30.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e) {
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", new tt(this.config).signIn(e));
              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return rt;
}();
var it = function it(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        l = _e$data2.fileId,
        h = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": h,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: l,
          requestId: d
        }) : t(new ne({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ot = function ot(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  at = function at(_ref7, t) {
    var e = _ref7.fileList;
    if (t = t || we(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Ye(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ct = function ct(_ref8, t) {
    var e = _ref8.fileList;
    t = t || we(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Ye(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ut = /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(_ref9, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              e = _ref9.fileID;
              _context32.next = 3;
              return ct.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context32.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context32.next = 6;
                break;
              }
              return _context32.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = Ye(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context32.next = 10;
                break;
              }
              return _context32.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context32.t0 = t;
              _context32.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context32.t1 = _context32.sent;
              (0, _context32.t0)(_context32.t1);
            case 15:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));
    return function ut(_x27, _x28) {
      return _ref10.apply(this, arguments);
    };
  }(),
  lt = function lt(_ref11, i) {
    var e = _ref11.name,
      t = _ref11.data,
      n = _ref11.query,
      s = _ref11.parse,
      r = _ref11.search;
    var o = i || we();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new ne({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Ye(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new ne({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  ht = {
    timeout: 15e3,
    persistence: "session"
  },
  dt = {};
var pt = /*#__PURE__*/function () {
  function pt(e) {
    (0, _classCallCheck2.default)(this, pt);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(pt, [{
    key: "init",
    value: function init(e) {
      switch (Ie.adapter || (this.requestClient = new Ie.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, ht), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new pt(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref12.persistence;
      if (this.authObj) return this.authObj;
      var t = e || Ie.adapter.primaryStorage || ht.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        Ee[t] = new Pe(e), Oe[t] = new Pe(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, Ve[n.env] = new Ge(n), this.authObj = new rt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return Ne.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Fe.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return lt.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return at.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return ct.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ut.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      dt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                n = dt[e];
                if (n) {
                  _context33.next = 3;
                  break;
                }
                throw new ne({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context33.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context33.abrupt("return", _context33.sent);
              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref13 = ke(e) || {},
        t = _ref13.adapter,
        n = _ref13.runtime;
      t && (Ie.adapter = t), n && (Ie.runtime = n);
    }
  }]);
  return pt;
}();
var ft = new pt();
function gt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var mt = /*#__PURE__*/function () {
  function mt() {
    (0, _classCallCheck2.default)(this, mt);
  }
  (0, _createClass2.default)(mt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        se.request({
          url: gt("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = se.uploadFile({
            url: gt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return mt;
}();
var yt = {
  setItem: function setItem(e, t) {
    se.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return se.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    se.removeStorageSync(e);
  },
  clear: function clear() {
    se.clearStorageSync();
  }
};
var _t = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: mt,
      localStorage: yt,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
ft.useAdapters(_t);
var wt = ft,
  vt = wt.init;
wt.init = function (e) {
  e.env = e.spaceId;
  var t = vt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _te = te(e),
          t = _te.success,
          s = _te.fail,
          r = _te.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var bt = wt;
var St = /*#__PURE__*/function (_fe) {
  (0, _inherits2.default)(St, _fe);
  var _super8 = _createSuper(St);
  function St() {
    (0, _classCallCheck2.default)(this, St);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(St, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret);
      var r = le();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _re = re(),
        i = _re.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref14) {
      var _this12 = this;
      var e = _ref14.url,
        t = _ref14.formData,
        n = _ref14.name,
        s = _ref14.filePath,
        r = _ref14.fileType,
        i = _ref14.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new ne({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new ne({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref15) {
      var _this13 = this;
      var e = _ref15.filePath,
        t = _ref15.cloudPath,
        _ref15$fileType = _ref15.fileType,
        n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,
        s = _ref15.onUploadProgress;
      if (!t) throw new ne({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new ne({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref16) {
      var e = _ref16.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new ne({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref17.fileList;
      if (!Array.isArray(e) || 0 === e.length) throw new ne({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var t = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new ne({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return St;
}(fe);
var kt = {
  init: function init(e) {
    var t = new St(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
function It(_ref18) {
  var e = _ref18.data;
  var t;
  t = le();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _re2 = re(),
      _e19 = _re2.token;
    _e19 && (n.uniIdToken = _e19);
  }
  return n;
}
function Tt() {
  return _Tt.apply(this, arguments);
}
function _Tt() {
  _Tt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
    var _this23 = this;
    var _ref55,
      e,
      t,
      _this$__dev__,
      n,
      s,
      r,
      i,
      o,
      a,
      _args5 = arguments;
    return _regenerator.default.wrap(function _callee53$(_context53) {
      while (1) {
        switch (_context53.prev = _context53.next) {
          case 0:
            _ref55 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, e = _ref55.name, t = _ref55.data;
            _context53.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, n = _this$__dev__.localAddress, s = _this$__dev__.localPort, r = {
              aliyun: "aliyun",
              tencent: "tcb"
            }[this.config.provider], i = this.config.spaceId, o = "http://".concat(n, ":").concat(s, "/system/check-function"), a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
            return _context53.abrupt("return", new Promise(function (t, n) {
              se.request({
                method: "POST",
                url: o,
                data: {
                  name: e,
                  platform: A,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref56 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref56.data;
              var _ref57 = e || {},
                t = _ref57.code,
                n = _ref57.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref58) {
              var n = _ref58.code,
                s = _ref58.message;
              if (0 !== n) {
                switch (n) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    {
                      var _e29 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
                      throw console.error(_e29), new Error(_e29);
                    }
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e30 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e30), new Error(_e30);
                    }
                }
                return _this23._callCloudFunction({
                  name: e,
                  data: t
                });
              }
              return new Promise(function (e, n) {
                var s = It.call(_this23, {
                  data: t
                });
                se.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: A,
                    param: s
                  },
                  success: function success() {
                    var _ref59 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      t = _ref59.statusCode,
                      s = _ref59.data;
                    return !t || t >= 400 ? n(new ne({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : e({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new ne({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context53.stop();
        }
      }
    }, _callee53, this);
  }));
  return _Tt.apply(this, arguments);
}
var Ct = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var At = /[\\^$.*+?()[\]{}|]/g,
  Pt = RegExp(At.source);
function Et(e, t, n) {
  return e.replace(new RegExp((s = t) && Pt.test(s) ? s.replace(At, "\\$&") : s, "g"), n);
  var s;
}
var Ot = "none",
  xt = "request",
  Rt = "response",
  Ut = "both";
var Lt = /*#__PURE__*/function () {
  function Lt() {
    var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref19.secretType,
      t = _ref19.uniCloudIns;
    (0, _classCallCheck2.default)(this, Lt);
    this.clientType = "", this.secretType = e || Ot, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)(Lt, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = ce()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(e) {
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                return _context34.abrupt("return", this.secretType === Ot ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function encryptData(_x31) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35(e) {
        var _ref20, t, n;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (!(this.secretType === Ot)) {
                  _context35.next = 2;
                  break;
                }
                return _context35.abrupt("return", e);
              case 2:
                _ref20 = e || {}, t = _ref20.errCode, n = _ref20.content;
                return _context35.abrupt("return", t || !n ? e : this.secretType === xt ? n : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));
      function decryptResult(_x32) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36() {
        var _ref22,
          n,
          _ref22$data,
          s,
          r,
          _args36 = arguments;
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _ref22 = _args36.length > 0 && _args36[0] !== undefined ? _args36[0] : {}, n = _ref22.name, _ref22$data = _ref22.data, s = _ref22$data === void 0 ? {} : _ref22$data;
                _context36.next = 3;
                return t.prepare();
              case 3:
                _context36.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context36.sent;
                _context36.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context36.sent;
                _context36.t0 = t.isClientKeyNotFound(r);
                if (!_context36.t0) {
                  _context36.next = 19;
                  break;
                }
                _context36.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context36.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context36.sent;
                _context36.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context36.sent;
              case 19:
                return _context36.abrupt("return", r);
              case 20:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37() {
        var _ref24,
          n,
          _ref24$data,
          s,
          r,
          i,
          _r3,
          _args37 = arguments;
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _ref24 = _args37.length > 0 && _args37[0] !== undefined ? _args37[0] : {}, n = _ref24.name, _ref24$data = _ref24.data, s = _ref24$data === void 0 ? {} : _ref24$data;
                _context37.next = 3;
                return t.prepare();
              case 3:
                _context37.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context37.sent;
                _context37.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context37.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context37.next = 21;
                  break;
                }
                _context37.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context37.next = 14;
                return t.encryptData(s);
              case 14:
                _r3 = _context37.sent;
                _context37.next = 17;
                return t.platformGetSignOption();
              case 17:
                s._uniCloudOptions = _context37.sent;
                _context37.next = 20;
                return e({
                  name: n,
                  data: _r3
                });
              case 20:
                i = _context37.sent;
              case 21:
                _context37.next = 23;
                return t.decryptResult(i.result);
              case 23:
                i.result = _context37.sent;
                return _context37.abrupt("return", i);
              case 25:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37);
      }));
    }
  }]);
  return Lt;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function Nt(e) {
  return parseInt(e) === e;
}
function Dt(e) {
  if (!Nt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!Nt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function Ft(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Dt(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (Nt(e.length) && Dt(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function qt(e) {
  return new Uint8Array(e);
}
function Kt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Mt,
  jt = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Ft(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Bt = (Mt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Mt[(240 & s) >> 4] + Mt[15 & s]);
      }
      return t.join("");
    }
  }),
  $t = {
    16: 10,
    24: 12,
    32: 14
  },
  Wt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  zt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  Jt = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  Ht = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  Gt = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  Vt = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  Yt = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  Qt = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  Xt = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  Zt = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  en = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  tn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  nn = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  sn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  rn = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function on(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var an = /*#__PURE__*/function () {
  function an(e) {
    (0, _classCallCheck2.default)(this, an);
    if (!(this instanceof an)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Ft(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(an, [{
    key: "_prepare",
    value: function _prepare() {
      var e = $t[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = on(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= zt[o >> 16 & 255] << 24 ^ zt[o >> 8 & 255] << 16 ^ zt[255 & o] << 8 ^ zt[o >> 24 & 255] ^ Wt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= zt[255 & o] ^ zt[o >> 8 & 255] << 8 ^ zt[o >> 16 & 255] << 16 ^ zt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, l = c % 4, this._Ke[u][l] = i[t], this._Kd[e - u][l] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var l = 0; l < 4; l++) {
          o = this._Kd[u][l], this._Kd[u][l] = tn[o >> 24 & 255] ^ nn[o >> 16 & 255] ^ sn[o >> 8 & 255] ^ rn[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = on(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = Ht[s[r] >> 24 & 255] ^ Gt[s[(r + 1) % 4] >> 16 & 255] ^ Vt[s[(r + 2) % 4] >> 8 & 255] ^ Yt[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = qt(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (zt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (zt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (zt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (zt[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = on(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = Qt[s[r] >> 24 & 255] ^ Xt[s[(r + 3) % 4] >> 16 & 255] ^ Zt[s[(r + 2) % 4] >> 8 & 255] ^ en[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = qt(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (Jt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Jt[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Jt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Jt[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return an;
}();
var cn = /*#__PURE__*/function () {
  function cn(e) {
    (0, _classCallCheck2.default)(this, cn);
    if (!(this instanceof cn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new an(e);
  }
  (0, _createClass2.default)(cn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ft(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = qt(e.length), n = qt(16), s = 0; s < e.length; s += 16) {
        Kt(e, n, 0, s, s + 16), Kt(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ft(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = qt(e.length), n = qt(16), s = 0; s < e.length; s += 16) {
        Kt(e, n, 0, s, s + 16), Kt(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return cn;
}();
var un = /*#__PURE__*/function () {
  function un(e, t) {
    (0, _classCallCheck2.default)(this, un);
    if (!(this instanceof un)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = qt(16);
    this._lastCipherblock = Ft(t, !0), this._aes = new an(e);
  }
  (0, _createClass2.default)(un, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ft(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = qt(e.length), n = qt(16), s = 0; s < e.length; s += 16) {
        Kt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), Kt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ft(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = qt(e.length), n = qt(16), s = 0; s < e.length; s += 16) {
        Kt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        Kt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return un;
}();
var ln = /*#__PURE__*/function () {
  function ln(e, t, n) {
    (0, _classCallCheck2.default)(this, ln);
    if (!(this instanceof ln)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = qt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Ft(t, !0), this._aes = new an(e);
  }
  (0, _createClass2.default)(ln, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Ft(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Kt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Kt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Ft(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Kt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Kt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return ln;
}();
var hn = /*#__PURE__*/function () {
  function hn(e, t) {
    (0, _classCallCheck2.default)(this, hn);
    if (!(this instanceof hn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = qt(16);
    this._lastPrecipher = Ft(t, !0), this._lastPrecipherIndex = 16, this._aes = new an(e);
  }
  (0, _createClass2.default)(hn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ft(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return hn;
}();
var dn = /*#__PURE__*/function () {
  function dn(e) {
    (0, _classCallCheck2.default)(this, dn);
    if (!(this instanceof dn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = qt(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(dn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Ft(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return dn;
}();
var pn = /*#__PURE__*/function () {
  function pn(e, t) {
    (0, _classCallCheck2.default)(this, pn);
    if (!(this instanceof pn)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof dn || (t = new dn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new an(e);
  }
  (0, _createClass2.default)(pn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ft(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return pn;
}();
var fn = {
  AES: an,
  Counter: dn,
  ModeOfOperation: {
    ecb: cn,
    cbc: un,
    cfb: ln,
    ofb: hn,
    ctr: pn
  },
  utils: {
    hex: Bt,
    utf8: jt
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Ft(e, !0)).length % 16,
          n = qt(e.length + t);
        Kt(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = Ft(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = qt(n);
        return Kt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Ft,
    createArray: qt,
    copyArray: Kt
  }
};
function gn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = fn.utils.utf8.toBytes(n),
    i = fn.utils.utf8.toBytes(e),
    o = new fn.ModeOfOperation.cbc(s, r),
    a = fn.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var mn = {
    code: 2e4,
    message: "System error"
  },
  yn = {
    code: 20101,
    message: "Invalid client"
  },
  _n = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  wn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function vn(e) {
  var _ref25 = e || {},
    t = _ref25.errSubject,
    n = _ref25.subject,
    s = _ref25.errCode,
    r = _ref25.errMsg,
    i = _ref25.code,
    o = _ref25.message,
    a = _ref25.cause;
  return new ne({
    subject: t || n || "uni-secure-network",
    code: s || i || mn.code,
    message: r || o,
    cause: a
  });
}
var bn,
  Sn,
  kn = null;
var In = /*#__PURE__*/function (_Lt) {
  (0, _inherits2.default)(In, _Lt);
  var _super9 = _createSuper(In);
  function In(e) {
    var _this14;
    (0, _classCallCheck2.default)(this, In);
    _this14 = _super9.call(this, e), _this14.clientType = "mp-weixin", _this14.userEncryptKey = null;
    return _this14;
  }
  (0, _createClass2.default)(In, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                if (this.isLogin()) {
                  _context38.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context38.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context38.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context38.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
        var _this15 = this;
        var e;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context39.next = 2;
                  break;
                }
                return _context39.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(kn && kn.expireTime)) {
                  _context39.next = 6;
                  break;
                }
                e = Date.now();
                if (!(kn.expireTime - e > 0)) {
                  _context39.next = 6;
                  break;
                }
                return _context39.abrupt("return", (this.userEncryptKey = kn, this.userEncryptKey));
              case 6:
                return _context39.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      kn = t, _this15.userEncryptKey = t, e(_this15.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(vn(_objectSpread(_objectSpread({}, _n), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context40.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context40.abrupt("return", {
                  verifyClientSign: gn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ce().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context41.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context41.abrupt("return", this.secretType === Rt ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: gn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ce().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function platformEncryptData(_x33) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                t = e.content;
                _context42.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context42.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context42.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = fn.utils.utf8.toBytes(n),
                    o = new fn.ModeOfOperation.cbc(r, i),
                    a = fn.padding.pkcs7.strip(o.decrypt(s));
                  return fn.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function platformDecryptResult(_x34) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return In;
}(Lt);
function Tn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s10) {
    var r = t[_s10];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref26.type,
            t = _ref26.data,
            r = _ref26.errCode,
            i = _ref26.errMsg,
            o = _ref26.errSubject,
            a = _ref26.message;
          "success" === e ? n(t) : s(vn({
            errCode: r,
            errMsg: wn[r] || i || a,
            errSubject: o
          }));
        }])) : s(vn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s10 = 0; _s10 < t.length; _s10++) {
    _loop(_s10);
  }
  return n;
}
var Cn = /*#__PURE__*/function (_Lt2) {
  (0, _inherits2.default)(Cn, _Lt2);
  var _super10 = _createSuper(Cn);
  function Cn(e) {
    var _this16;
    (0, _classCallCheck2.default)(this, Cn);
    _this16 = _super10.call(this, e), _this16.clientType = "app", _this16.appUtils = _objectSpread({}, Tn(uni.requireNativePlugin("plus"))), _this16.systemInfo = bn || (bn = ce());
    return _this16;
  }
  (0, _createClass2.default)(Cn, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43() {
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context43.sent;
                return _context43.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                _context44.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context44.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context44.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context44.t0 = _context44.sent.result;
                if (_context44.t0) {
                  _context44.next = 10;
                  break;
                }
                _context44.t0 = {};
              case 10:
                n = _context44.t0;
                if (!(0 !== n.errCode)) {
                  _context44.next = 13;
                  break;
                }
                throw function (e) {
                  return new ne({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || mn.code,
                    message: e.errMsg || e.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context44.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45() {
        var _this17 = this;
        var _ref27,
          _ref27$forceUpdate,
          e,
          _args45 = arguments;
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _ref27 = _args45.length > 0 && _args45[0] !== undefined ? _args45[0] : {}, _ref27$forceUpdate = _ref27.forceUpdate, e = _ref27$forceUpdate === void 0 ? !1 : _ref27$forceUpdate;
                _context45.t1 = !0;
                _context45.next = 4;
                return this.hasClientKey();
              case 4:
                _context45.t2 = _context45.sent;
                _context45.t0 = _context45.t1 !== _context45.t2;
                if (_context45.t0) {
                  _context45.next = 8;
                  break;
                }
                _context45.t0 = e;
              case 8:
                if (!_context45.t0) {
                  _context45.next = 10;
                  break;
                }
                return _context45.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === d || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== f || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this17.scopedGlobalCache.initStatus = p;
                }).catch(function (e) {
                  throw _this17.scopedGlobalCache.initStatus = f, e;
                }), this.scopedGlobalCache.initStatus = d), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46() {
        var _ref28,
          _ref28$forceUpdate,
          e,
          _args46 = arguments;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _ref28 = _args46.length > 0 && _args46[0] !== undefined ? _args46[0] : {}, _ref28$forceUpdate = _ref28.forceUpdate, e = _ref28$forceUpdate === void 0 ? !1 : _ref28$forceUpdate;
                _context46.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _context47.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context47.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context47.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _context48.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context48.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context48.abrupt("return", this.secretType === Rt ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context49.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context49.sent;
                return _context49.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return Cn;
}(Lt);
function An() {
  var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref29.secretType;
  return e === xt || e === Rt || e === Ut;
}
function Pn() {
  var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref30.name,
    _ref30$data = _ref30.data,
    t = _ref30$data === void 0 ? {} : _ref30$data;
  return "app" === A && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function En() {
  var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref31.provider,
    t = _ref31.spaceId,
    n = _ref31.functionName;
  var _ce = ce(),
    s = _ce.appId,
    r = _ce.uniPlatform,
    i = _ce.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref32.provider,
      t = _ref32.spaceId;
    var n = C;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var l = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!l) return !1;
  if ((c[l] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), vn(yn);
}
function On(_ref33) {
  var e = _ref33.functionName,
    t = _ref33.result,
    n = _ref33.logPvd;
  if (k && this.__dev__.debugLog && t && t.requestId) {
    var _s11 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s11, "[/").concat(n, "-request]"));
  }
}
function xn(e) {
  var t = e.callFunction,
    n = function n(_n7) {
      var _this18 = this;
      var s = _n7.name;
      _n7.data = It.call(e, {
        data: _n7.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb"
        }[this.config.provider],
        i = An(_n7),
        o = Pn(_n7),
        a = i || o;
      return t.call(this, _n7).then(function (e) {
        return e.errCode = 0, !a && On.call(_this18, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && On.call(_this18, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref34$message = _ref34.message,
            e = _ref34$message === void 0 ? "" : _ref34$message,
            _ref34$extraInfo = _ref34.extraInfo,
            t = _ref34$extraInfo === void 0 ? {} : _ref34$extraInfo,
            _ref34$formatter = _ref34.formatter,
            n = _ref34$formatter === void 0 ? [] : _ref34$formatter;
          for (var _s12 = 0; _s12 < n.length; _s12++) {
            var _n$_s = n[_s12],
              _r4 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r4);
            if (!_a) continue;
            var _c = _i3;
            for (var _e20 = 1; _e20 < _a.length; _e20++) {
              _c = Et(_c, "{$".concat(_e20, "}"), _a[_e20]);
            }
            for (var _e21 in t) {
              _c = Et(_c, "{".concat(_e21, "}"), t[_e21]);
            }
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n7.name, "]: ").concat(e.message),
          formatter: Ct,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, k && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && E ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = Tt), o = Tt) : o = n, o = o.bind(e), Pn(t)) a = n.call(e, t);else if (function (_ref35) {
      var e = _ref35.name,
        _ref35$data = _ref35.data,
        t = _ref35$data === void 0 ? {} : _ref35$data;
      return "mp-weixin" === A && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (An(t)) {
      a = new Sn({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (En({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new Sn({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a;
  };
}
Sn = "mp-weixin" !== A && "app" !== A ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw vn({
      message: "Platform ".concat(A, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : T ? "mp-weixin" === A ? In : Cn : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw vn({
      message: "Platform ".concat(A, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Rn = Symbol("CLIENT_DB_INTERNAL");
function Un(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Rn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t10 = e[n];
        return "function" == typeof _t10 ? _t10.bind(e) : _t10;
      }
      return t.get(e, n, s);
    }
  });
}
function Ln(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var Nn = ["db.Geo", "db.command", "command.aggregate"];
function Dn(e, t) {
  return Nn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Fn(e) {
  switch (g(e)) {
    case "array":
      return e.map(function (e) {
        return Fn(e);
      });
    case "object":
      return e._internalType === Rn || Object.keys(e).forEach(function (t) {
        e[t] = Fn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function qn(e) {
  return e && e.content && e.content.$method;
}
var Kn = /*#__PURE__*/function () {
  function Kn(e, t, n) {
    (0, _classCallCheck2.default)(this, Kn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(Kn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Fn(e.$param)
          };
        })
      };
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = qn(e),
          _n8 = qn(e.prevStage);
        if ("aggregate" === t && "collection" === _n8 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === qn(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = qn(e),
          _n9 = qn(e.prevStage);
        if ("aggregate" === t && "command" === _n9) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Mn({
          $method: e,
          $param: Fn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Fn(t)
      }), k) {
        var _e22 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t11 = _e22 && _e22.$param;
        _t11 && 1 === _t11.length && "string" == typeof _e22.$param[0] && _e22.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return Kn;
}();
function Mn(e, t, n) {
  return Un(new Kn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Dn(s, t) ? Mn({
        $method: t
      }, e, n) : function () {
        return Mn({
          $method: t,
          $param: Fn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function jn(_ref36) {
  var e = _ref36.path,
    t = _ref36.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }]);
    return _class4;
  }();
}
function Bn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Un(new e(t), {
    get: function get(e, t) {
      return Dn("db", t) ? Mn({
        $method: t
      }, null, e) : function () {
        return Mn({
          $method: t,
          $param: Fn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var $n = /*#__PURE__*/function (_ref37) {
  (0, _inherits2.default)($n, _ref37);
  var _super11 = _createSuper($n);
  function $n() {
    (0, _classCallCheck2.default)(this, $n);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)($n, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref38) {
      var _this19 = this;
      var e = _ref38.action,
        t = _ref38.command,
        n = _ref38.multiCommand,
        s = _ref38.queryList;
      function r(e, t) {
        if (n && s) for (var _n10 = 0; _n10 < s.length; _n10++) {
          var _r5 = s[_n10];
          _r5.udb && "function" == typeof _r5.udb.setResult && (t ? _r5.udb.setResult(t) : _r5.udb.setResult(e.result.dataList[_n10]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), q(K(o, "fail"), e).then(function () {
          return q(K(o, "complete"), e);
        }).then(function () {
          return r(null, e), Q(B, {
            type: z,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = q(K(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e23 = 0; _e23 < u.length; _e23++) {
          var _u$_e = u[_e23],
            _t12 = _u$_e.level,
            _n11 = _u$_e.message,
            _s13 = _u$_e.detail,
            _r6 = console["app" === A && "warn" === _t12 ? "error" : _t12] || console.log;
          var _i4 = "[System Info]" + _n11;
          _s13 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s13)), _r6(_i4);
        }
        if (t) {
          return a(new ne({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (ie({
          token: s,
          tokenExpired: c
        }), _this19._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this19._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Q(W, {
          token: s,
          tokenExpired: c
        }));
        var l = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t13) {
          var _l$_t = l[_t13],
            n = _l$_t.prop,
            s = _l$_t.tips;
          if (n in e.result) {
            var _t14 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t14;
              }
            });
          }
        };
        for (var _t13 = 0; _t13 < l.length; _t13++) {
          _loop2(_t13);
        }
        return function (e) {
          return q(K(o, "success"), e).then(function () {
            return q(K(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Q(B, {
              type: z,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new ne({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return $n;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref39$uniClient = _ref39.uniClient,
      e = _ref39$uniClient === void 0 ? {} : _ref39$uniClient,
      _ref39$isJQL = _ref39.isJQL,
      t = _ref39$isJQL === void 0 ? !1 : _ref39$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t || (this.auth = Ln(this._authCallBacks)), this._isJQL = t, Object.assign(this, Ln(this._dbCallBacks)), this.env = Un({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = Un({}, {
      get: function get(e, t) {
        return jn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = jn({
      path: [],
      method: "serverDate"
    }), this.RegExp = jn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Wn = "token无效，跳转登录页面",
  zn = "token过期，跳转登录页面",
  Jn = {
    TOKEN_INVALID_TOKEN_EXPIRED: zn,
    TOKEN_INVALID_INVALID_CLIENTID: Wn,
    TOKEN_INVALID: Wn,
    TOKEN_INVALID_WRONG_TOKEN: Wn,
    TOKEN_INVALID_ANONYMOUS_USER: Wn
  },
  Hn = {
    "uni-id-token-expired": zn,
    "uni-id-check-token-failed": Wn,
    "uni-id-token-not-exist": Wn,
    "uni-id-check-device-feature-failed": Wn
  };
function Gn(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function Vn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(Gn(t, e.path)) : !1 === e.needLogin && s.push(Gn(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function Yn(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function Qn() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function Xn() {
  return Yn(Qn());
}
function Zn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = Yn(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var es = !!_pages.default.uniIdRouter;
var _ref40 = function () {
    var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref21$pages = _ref21.pages,
      e = _ref21$pages === void 0 ? [] : _ref21$pages,
      _ref21$subPackages = _ref21.subPackages,
      n = _ref21$subPackages === void 0 ? [] : _ref21$subPackages,
      _ref21$uniIdRouter = _ref21.uniIdRouter,
      s = _ref21$uniIdRouter === void 0 ? {} : _ref21$uniIdRouter,
      _ref21$tabBar = _ref21.tabBar,
      r = _ref21$tabBar === void 0 ? {} : _ref21$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _Vn = Vn(e),
      c = _Vn.needLoginPage,
      u = _Vn.notNeedLoginPage,
      _ref23 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _Vn2 = Vn(r, s),
            i = _Vn2.needLoginPage,
            o = _Vn2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      l = _ref23.needLoginPage,
      h = _ref23.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(l)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(h)),
      loginPageInTabBar: Zn(i, r)
    };
  }(),
  ts = _ref40.loginPage,
  ns = _ref40.routerNeedLogin,
  ss = _ref40.resToLogin,
  rs = _ref40.needLoginPage,
  is = _ref40.notNeedLoginPage,
  os = _ref40.loginPageInTabBar;
if (rs.indexOf(ts) > -1) throw new Error("Login page [".concat(ts, "] should not be \"needLogin\", please check your pages.json"));
function as(e) {
  var t = Xn();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e24 = 0; _e24 < r.length; _e24++) {
    var _t15 = r[_e24];
    ".." === _t15 ? i.pop() : "." !== _t15 && i.push(_t15);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function cs(e) {
  var t = Yn(as(e));
  return !(is.indexOf(t) > -1) && (rs.indexOf(t) > -1 || ns.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function us(_ref41) {
  var e = _ref41.redirect;
  var t = Yn(e),
    n = Yn(ts);
  return Xn() !== n && t !== n;
}
function ls() {
  var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref42.api,
    t = _ref42.redirect;
  if (!t || !us({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(ts, t);
  os ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  });
}
function hs() {
  var _ref43 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref43.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _re3 = re(),
        e = _re3.token,
        t = _re3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e25 = "uni-id-token-expired";
          n = {
            errCode: _e25,
            errMsg: Hn[_e25]
          };
        }
      } else {
        var _e26 = "uni-id-check-token-failed";
        n = {
          errCode: _e26,
          errMsg: Hn[_e26]
        };
      }
      return n;
    }();
  if (cs(e) && n) {
    n.uniIdRedirectUrl = e;
    if (G($).length > 0) return setTimeout(function () {
      Q($, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function ds() {
  !function () {
    var e = Qn(),
      _hs = hs({
        url: e
      }),
      t = _hs.abortLoginPageJump,
      n = _hs.autoToLoginPage;
    t || n && ls({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t16) {
    var n = e[_t16];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _hs2 = hs({
            url: e.url
          }),
          t = _hs2.abortLoginPageJump,
          s = _hs2.autoToLoginPage;
        return t ? e : s ? (ls({
          api: n,
          redirect: as(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t16 = 0; _t16 < e.length; _t16++) {
    _loop3(_t16);
  }
}
function ps() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref44 = e || {},
            t = _ref44.errCode;
          return t in Hn;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref45 = e || {},
            t = _ref45.errCode;
          return t in Jn;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = G($);
      ee().then(function () {
        var n = Qn();
        if (n && us({
          redirect: n
        })) return t.length > 0 ? Q($, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (ts && ls({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function fs(e) {
  !function (e) {
    e.onResponse = function (e) {
      V(B, e);
    }, e.offResponse = function (e) {
      Y(B, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      V($, e);
    }, e.offNeedLogin = function (e) {
      Y($, e);
    }, es && (U("_globalUniCloudStatus").needLoginInit || (U("_globalUniCloudStatus").needLoginInit = !0, ee().then(function () {
      ds.call(e);
    }), ss && ps.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      V(W, e);
    }, e.offRefreshToken = function (e) {
      Y(W, e);
    };
  }(e);
}
var gs;
var ms = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  ys = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function _s() {
  var e = re().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(gs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
gs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ys.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) {
    t = ms.indexOf(e.charAt(i++)) << 18 | ms.indexOf(e.charAt(i++)) << 12 | (n = ms.indexOf(e.charAt(i++))) << 6 | (s = ms.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  }
  return r;
} : atob;
var ws = s(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref46) {
      var s = _ref46.onChooseFile,
        r = _ref46.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t17 = s(e);
          if (void 0 !== _t17) return Promise.resolve(_t17).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  vs = n(ws);
var bs = "manual";
function Ss(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {}
      };
    },
    created: function created() {
      var _this20 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this20[t]);
        }), e;
      }, function (e, t) {
        if (_this20.loadtime === bs) return;
        var n = !1;
        var s = [];
        for (var _r7 = 2; _r7 < e.length; _r7++) {
          e[_r7] !== t[_r7] && (s.push(e[_r7]), n = !0);
        }
        e[0] !== t[0] && (_this20.mixinDatacomPage.current = _this20.pageCurrent), _this20.mixinDatacomPage.size = _this20.pageSize, _this20.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this21 = this;
        var _ref47 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref47$getone = _ref47.getone,
          e = _ref47$getone === void 0 ? !1 : _ref47$getone,
          t = _ref47.success,
          n = _ref47.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {
          _this21.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this21.getcount && (_this21.mixinDatacomPage.count = r), _this21.mixinDatacomHasMore = s.length < _this21.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this21.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this21.mixinDatacomLoading = !1, _this21.mixinDatacomErrorMessage = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n12;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n12 = n).collection.apply(_n12, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var l = t.orderby || this.orderby;
        l && (n = n.orderBy(l));
        var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;
      }
    }
  };
}
function ks(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n13 = n,
      s = _n13.customUI,
      r = _n13.loadingOptions,
      i = _n13.errorOptions,
      o = _n13.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        return function () {
          var _ref48 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref48.fn,
            t = _ref48.interceptorName,
            n = _ref48.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee50$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context50.prev = 2;
                    _context50.next = 5;
                    return q(K(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context50.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context50.sent;
                    _context50.next = 10;
                    return q(K(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context50.abrupt("return", i);
                  case 13:
                    _context50.prev = 13;
                    _context50.t0 = _context50["catch"](2);
                    o = _context50.t0;
                    _context50.next = 18;
                    return q(K(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context50.prev = 19;
                    _context50.next = 22;
                    return q(K(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context50.finish(19);
                  case 23:
                  case "end":
                    return _context50.stop();
                }
              }
            }, _callee50, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
              var h,
                _len3,
                u,
                _key3,
                d,
                p,
                _ref50,
                f,
                g,
                m,
                y,
                _e27,
                _yield,
                _t18,
                _n14,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, u = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        u[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: l,
                        data: {
                          method: c,
                          params: u
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context52.prev = 5;
                      _context52.next = 8;
                      return e.callFunction(d);
                    case 8:
                      h = _context52.sent;
                      _context52.next = 14;
                      break;
                    case 11:
                      _context52.prev = 11;
                      _context52.t0 = _context52["catch"](5);
                      p = !0, h = {
                        result: new ne(_context52.t0)
                      };
                    case 14:
                      _ref50 = h.result || {}, f = _ref50.errSubject, g = _ref50.errCode, m = _ref50.errMsg, y = _ref50.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (ie(y), Q(W, _objectSpread({}, y))), g)) {
                        _context52.next = 39;
                        break;
                      }
                      _e27 = m;
                      if (!(p && o)) {
                        _context52.next = 24;
                        break;
                      }
                      _context52.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: u,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context52.t1 = _context52.sent.errMsg;
                      if (_context52.t1) {
                        _context52.next = 23;
                        break;
                      }
                      _context52.t1 = m;
                    case 23:
                      _e27 = _context52.t1;
                    case 24:
                      if (!a) {
                        _context52.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context52.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e27,
                        icon: "none"
                      });
                      _context52.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context52.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context52.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51() {
                        var _ref52,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee51$(_context51) {
                          while (1) {
                            switch (_context51.prev = _context51.next) {
                              case 0:
                                _ref52 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref52.title, t = _ref52.content, n = _ref52.showCancel, s = _ref52.cancelText, r = _ref52.confirmText;
                                return _context51.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context51.stop();
                            }
                          }
                        }, _callee51);
                      }))({
                        title: "提示",
                        content: _e27,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context52.sent;
                      _t18 = _yield.confirm;
                      if (!(i.retry && _t18)) {
                        _context52.next = 37;
                        break;
                      }
                      return _context52.abrupt("return", s.apply(void 0, u));
                    case 37:
                      _n14 = new ne({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: h.requestId
                      });
                      throw _n14.detail = h.result, Q(B, {
                        type: H,
                        content: _n14
                      }), _n14;
                    case 39:
                      return _context52.abrupt("return", (Q(B, {
                        type: H,
                        content: h.result
                      }), h.result));
                    case 40:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, null, [[5, 11]]);
            }));
            function s() {
              return _s14.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref53 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref53.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function Is(e) {
  return U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Ts() {
  return _Ts.apply(this, arguments);
}
function _Ts() {
  _Ts = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
    var _ref60,
      e,
      _ref60$callLoginByWei,
      t,
      n,
      s,
      r,
      _args6 = arguments;
    return _regenerator.default.wrap(function _callee54$(_context54) {
      while (1) {
        switch (_context54.prev = _context54.next) {
          case 0:
            _ref60 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, e = _ref60.openid, _ref60$callLoginByWei = _ref60.callLoginByWeixin, t = _ref60$callLoginByWei === void 0 ? !1 : _ref60$callLoginByWei;
            n = Is(this);
            if (!("mp-weixin" !== A)) {
              _context54.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(A, "`"));
          case 4:
            if (!(e && t)) {
              _context54.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context54.next = 8;
              break;
            }
            return _context54.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context54.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context54.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context54.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context54.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context54.stop();
        }
      }
    }, _callee54, this);
  }));
  return _Ts.apply(this, arguments);
}
function Cs(_x37) {
  return _Cs.apply(this, arguments);
}
function _Cs() {
  _Cs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55(e) {
    var t;
    return _regenerator.default.wrap(function _callee55$(_context55) {
      while (1) {
        switch (_context55.prev = _context55.next) {
          case 0:
            t = Is(this);
            return _context55.abrupt("return", (t.initPromise || (t.initPromise = Ts.call(this, e)), t.initPromise));
          case 2:
          case "end":
            return _context55.stop();
        }
      }
    }, _callee55, this);
  }));
  return _Cs.apply(this, arguments);
}
function As(e) {
  return function () {
    var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref54.openid,
      _ref54$callLoginByWei = _ref54.callLoginByWeixin,
      n = _ref54$callLoginByWei === void 0 ? !1 : _ref54$callLoginByWei;
    return Cs.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function Ps(_x38, _x39) {
  return _Ps.apply(this, arguments);
}
function _Ps() {
  _Ps = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56(e, t) {
    var n, _e31, s;
    return _regenerator.default.wrap(function _callee56$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context56.prev = 1;
            _context56.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              se.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e31 = _context56.sent;
            return _context56.abrupt("return", !(!_e31.data || 0 !== _e31.data.code));
          case 8:
            _context56.prev = 8;
            _context56.t0 = _context56["catch"](1);
            return _context56.abrupt("return", !1);
          case 11:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee56, null, [[1, 8]]);
  }));
  return _Ps.apply(this, arguments);
}
function Es(_x40) {
  return _Es.apply(this, arguments);
}
function _Es() {
  _Es = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58(e) {
    var _ce2, _e32, _t20, t, _t$debugInfo, n, s, _yield2, r, i, o;
    return _regenerator.default.wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            if (k) {
              _context58.next = 2;
              break;
            }
            return _context58.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === A) {
              _ce2 = ce(), _e32 = _ce2.osName, _t20 = _ce2.osVersion;
              "ios" === _e32 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t20) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context58.next = 6;
              break;
            }
            return _context58.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context58.next = 11;
            return function () {
              var _ref61 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57(e, t) {
                var n, _s15, _r8;
                return _regenerator.default.wrap(function _callee57$(_context57) {
                  while (1) {
                    switch (_context57.prev = _context57.next) {
                      case 0:
                        _s15 = 0;
                      case 1:
                        if (!(_s15 < e.length)) {
                          _context57.next = 11;
                          break;
                        }
                        _r8 = e[_s15];
                        _context57.next = 5;
                        return Ps(_r8, t);
                      case 5:
                        if (!_context57.sent) {
                          _context57.next = 8;
                          break;
                        }
                        n = _r8;
                        return _context57.abrupt("break", 11);
                      case 8:
                        _s15++;
                        _context57.next = 1;
                        break;
                      case 11:
                        return _context57.abrupt("return", {
                          address: n,
                          port: t
                        });
                      case 12:
                      case "end":
                        return _context57.stop();
                    }
                  }
                }, _callee57);
              }));
              return function (_x41, _x42) {
                return _ref61.apply(this, arguments);
              };
            }()(n, s);
          case 11:
            _yield2 = _context58.sent;
            r = _yield2.address;
            if (!r) {
              _context58.next = 15;
              break;
            }
            return _context58.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === A ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === A && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === A.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context58.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58);
  }));
  return _Es.apply(this, arguments);
}
function Os(e) {
  e._initPromiseHub || (e._initPromiseHub = new b({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var xs = {
  tcb: bt,
  tencent: bt,
  aliyun: ge,
  private: kt
};
var Rs = new ( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
  }
  (0, _createClass2.default)(_class6, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = xs[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), k && function (e) {
        if (!k) return;
        var t = {};
        e.__dev__ = t, t.debugLog = k && ("web" === A && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === A);
        var n = P;
        n && !n.code && (t.debugInfo = n);
        var s = new b({
          createPromise: function createPromise() {
            return Es(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), Os(t), xn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = Bn($n, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = Bn($n, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = _s, e.chooseAndUploadFile = vs.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return Ss(e);
          }
        }), e.importObject = ks(e), e.initSecureNetworkByWeixin = As(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this22 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e28 = n && n.type || u;
              s = _e28 !== u;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _te2 = te(n),
              o = _te2.success,
              a = _te2.fail,
              c = _te2.complete,
              l = i.then(function () {
                return s ? Promise.resolve() : q(K(t, "invoke"), n);
              }).then(function () {
                return e.call(_this22, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : q(K(t, "success"), e).then(function () {
                  return q(K(t, "complete"), e);
                }).then(function () {
                  return r && Q(B, {
                    type: J,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : q(K(t, "fail"), e).then(function () {
                  return q(K(t, "complete"), e);
                }).then(function () {
                  return Q(B, {
                    type: J,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || c)) return l;
            l.then(function (e) {
              o && o(e), c && c(e), r && Q(B, {
                type: J,
                content: e
              });
            }, function (e) {
              a && a(e), c && c(e), r && Q(B, {
                type: J,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class6;
}())();
(function () {
  var e = E;
  var t = {};
  if (e && 1 === e.length) t = e[0], Rs = Rs.init(t), Rs._isDefault = !0;else {
    var _t19 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n15;
    _n15 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : O ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t19.forEach(function (e) {
      Rs[e] = function () {
        return console.error(_n15), Promise.reject(new ne({
          code: "SYS_ERR",
          message: _n15
        }));
      };
    });
  }
  Object.assign(Rs, {
    get mixinDatacom() {
      return Ss(Rs);
    }
  }), fs(Rs), Rs.addInterceptor = D, Rs.removeInterceptor = F, Rs.interceptObject = M, k && "web" === A && (window.uniCloud = Rs);
})();
var Us = Rs;
exports.default = Us;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 271:
/*!********************************************************************************************************!*\
  !*** E:/uni-app/恋爱日记/uni_modules/uni-file-picker/components/uni-file-picker/choose-and-upload-file.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx, uniCloud) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseAndUploadFile = chooseAndUploadFile;
exports.uploadCloudFiles = uploadCloudFiles;
var ERR_MSG_OK = 'chooseAndUploadFile:ok';
var ERR_MSG_FAIL = 'chooseAndUploadFile:fail';
function chooseImage(opts) {
  var count = opts.count,
    _opts$sizeType = opts.sizeType,
    sizeType = _opts$sizeType === void 0 ? ['original', 'compressed'] : _opts$sizeType,
    _opts$sourceType = opts.sourceType,
    sourceType = _opts$sourceType === void 0 ? ['album', 'camera'] : _opts$sourceType,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    uni.chooseImage({
      count: count,
      sizeType: sizeType,
      sourceType: sourceType,
      extension: extension,
      success: function success(res) {
        resolve(normalizeChooseAndUploadFileRes(res, 'image'));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseImage:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function chooseVideo(opts) {
  var camera = opts.camera,
    compressed = opts.compressed,
    maxDuration = opts.maxDuration,
    _opts$sourceType2 = opts.sourceType,
    sourceType = _opts$sourceType2 === void 0 ? ['album', 'camera'] : _opts$sourceType2,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    uni.chooseVideo({
      camera: camera,
      compressed: compressed,
      maxDuration: maxDuration,
      sourceType: sourceType,
      extension: extension,
      success: function success(res) {
        var tempFilePath = res.tempFilePath,
          duration = res.duration,
          size = res.size,
          height = res.height,
          width = res.width;
        resolve(normalizeChooseAndUploadFileRes({
          errMsg: 'chooseVideo:ok',
          tempFilePaths: [tempFilePath],
          tempFiles: [{
            name: res.tempFile && res.tempFile.name || '',
            path: tempFilePath,
            size: size,
            type: res.tempFile && res.tempFile.type || '',
            width: width,
            height: height,
            duration: duration,
            fileType: 'video',
            cloudPath: ''
          }]
        }, 'video'));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseVideo:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function chooseAll(opts) {
  var count = opts.count,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    var chooseFile = uni.chooseFile;
    if (typeof wx !== 'undefined' && typeof wx.chooseMessageFile === 'function') {
      chooseFile = wx.chooseMessageFile;
    }
    if (typeof chooseFile !== 'function') {
      return reject({
        errMsg: ERR_MSG_FAIL + ' 请指定 type 类型，该平台仅支持选择 image 或 video。'
      });
    }
    chooseFile({
      type: 'all',
      count: count,
      extension: extension,
      success: function success(res) {
        resolve(normalizeChooseAndUploadFileRes(res));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseFile:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function normalizeChooseAndUploadFileRes(res, fileType) {
  res.tempFiles.forEach(function (item, index) {
    if (!item.name) {
      item.name = item.path.substring(item.path.lastIndexOf('/') + 1);
    }
    if (fileType) {
      item.fileType = fileType;
    }
    item.cloudPath = Date.now() + '_' + index + item.name.substring(item.name.lastIndexOf('.'));
  });
  if (!res.tempFilePaths) {
    res.tempFilePaths = res.tempFiles.map(function (file) {
      return file.path;
    });
  }
  return res;
}
function uploadCloudFiles(files) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var _onUploadProgress = arguments.length > 2 ? arguments[2] : undefined;
  files = JSON.parse(JSON.stringify(files));
  var len = files.length;
  var count = 0;
  var self = this;
  return new Promise(function (resolve) {
    while (count < max) {
      next();
    }
    function next() {
      var cur = count++;
      if (cur >= len) {
        !files.find(function (item) {
          return !item.url && !item.errMsg;
        }) && resolve(files);
        return;
      }
      var fileItem = files[cur];
      var index = self.files.findIndex(function (v) {
        return v.uuid === fileItem.uuid;
      });
      fileItem.url = '';
      delete fileItem.errMsg;
      uniCloud.uploadFile({
        filePath: fileItem.path,
        cloudPath: fileItem.cloudPath,
        fileType: fileItem.fileType,
        onUploadProgress: function onUploadProgress(res) {
          res.index = index;
          _onUploadProgress && _onUploadProgress(res);
        }
      }).then(function (res) {
        fileItem.url = res.fileID;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      }).catch(function (res) {
        fileItem.errMsg = res.errMsg || res.message;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      });
    }
  });
}
function uploadFiles(choosePromise, _ref) {
  var onChooseFile = _ref.onChooseFile,
    onUploadProgress = _ref.onUploadProgress;
  return choosePromise.then(function (res) {
    if (onChooseFile) {
      var customChooseRes = onChooseFile(res);
      if (typeof customChooseRes !== 'undefined') {
        return Promise.resolve(customChooseRes).then(function (chooseRes) {
          return typeof chooseRes === 'undefined' ? res : chooseRes;
        });
      }
    }
    return res;
  }).then(function (res) {
    if (res === false) {
      return {
        errMsg: ERR_MSG_OK,
        tempFilePaths: [],
        tempFiles: []
      };
    }
    return res;
  });
}
function chooseAndUploadFile() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    type: 'all'
  };
  if (opts.type === 'image') {
    return uploadFiles(chooseImage(opts), opts);
  } else if (opts.type === 'video') {
    return uploadFiles(chooseVideo(opts), opts);
  }
  return uploadFiles(chooseAll(opts), opts);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27)["default"]))

/***/ }),

/***/ 272:
/*!***************************************************************************************!*\
  !*** E:/uni-app/恋爱日记/uni_modules/uni-file-picker/components/uni-file-picker/utils.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_files_and_is_max = exports.get_file_info = exports.get_file_ext = exports.get_file_data = exports.get_extname = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 30));
/**
 * 获取文件名和后缀
 * @param {String} name
 */
var get_file_ext = function get_file_ext(name) {
  var last_len = name.lastIndexOf('.');
  var len = name.length;
  return {
    name: name.substring(0, last_len),
    ext: name.substring(last_len + 1, len)
  };
};

/**
 * 获取扩展名
 * @param {Array} fileExtname
 */
exports.get_file_ext = get_file_ext;
var get_extname = function get_extname(fileExtname) {
  if (!Array.isArray(fileExtname)) {
    var extname = fileExtname.replace(/(\[|\])/g, '');
    return extname.split(',');
  } else {
    return fileExtname;
  }
  return [];
};

/**
 * 获取文件和检测是否可选
 */
exports.get_extname = get_extname;
var get_files_and_is_max = function get_files_and_is_max(res, _extname) {
  var filePaths = [];
  var files = [];
  if (!_extname || _extname.length === 0) {
    return {
      filePaths: filePaths,
      files: files
    };
  }
  res.tempFiles.forEach(function (v) {
    var fileFullName = get_file_ext(v.name);
    var extname = fileFullName.ext.toLowerCase();
    if (_extname.indexOf(extname) !== -1) {
      files.push(v);
      filePaths.push(v.path);
    }
  });
  if (files.length !== res.tempFiles.length) {
    uni.showToast({
      title: "\u5F53\u524D\u9009\u62E9\u4E86".concat(res.tempFiles.length, "\u4E2A\u6587\u4EF6 \uFF0C").concat(res.tempFiles.length - files.length, " \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E"),
      icon: 'none',
      duration: 5000
    });
  }
  return {
    filePaths: filePaths,
    files: files
  };
};

/**
 * 获取图片信息
 * @param {Object} filepath
 */
exports.get_files_and_is_max = get_files_and_is_max;
var get_file_info = function get_file_info(filepath) {
  return new Promise(function (resolve, reject) {
    uni.getImageInfo({
      src: filepath,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};
/**
 * 获取封装数据
 */
exports.get_file_info = get_file_info;
var get_file_data = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(files) {
    var type,
      fileFullName,
      extname,
      filedata,
      imageinfo,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'image';
            // 最终需要上传数据库的数据
            fileFullName = get_file_ext(files.name);
            extname = fileFullName.ext.toLowerCase();
            filedata = {
              name: files.name,
              uuid: files.uuid,
              extname: extname || '',
              cloudPath: files.cloudPath,
              fileType: files.fileType,
              url: files.path || files.path,
              size: files.size,
              //单位是字节
              image: {},
              path: files.path,
              video: {}
            };
            if (!(type === 'image')) {
              _context.next = 14;
              break;
            }
            _context.next = 7;
            return get_file_info(files.path);
          case 7:
            imageinfo = _context.sent;
            delete filedata.video;
            filedata.image.width = imageinfo.width;
            filedata.image.height = imageinfo.height;
            filedata.image.location = imageinfo.path;
            _context.next = 15;
            break;
          case 14:
            delete filedata.image;
          case 15:
            return _context.abrupt("return", filedata);
          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function get_file_data(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.get_file_data = get_file_data;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 28:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 29)();
module.exports = runtime;

/***/ }),

/***/ 29:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 294:
/*!***************************************************************************!*\
  !*** E:/uni-app/恋爱日记/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "id": "2852637",
  "name": "uniui图标库",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [{
    "icon_id": "25027049",
    "name": "yanse",
    "font_class": "color",
    "unicode": "e6cf",
    "unicode_decimal": 59087
  }, {
    "icon_id": "25027048",
    "name": "wallet",
    "font_class": "wallet",
    "unicode": "e6b1",
    "unicode_decimal": 59057
  }, {
    "icon_id": "25015720",
    "name": "settings-filled",
    "font_class": "settings-filled",
    "unicode": "e6ce",
    "unicode_decimal": 59086
  }, {
    "icon_id": "25015434",
    "name": "shimingrenzheng-filled",
    "font_class": "auth-filled",
    "unicode": "e6cc",
    "unicode_decimal": 59084
  }, {
    "icon_id": "24934246",
    "name": "shop-filled",
    "font_class": "shop-filled",
    "unicode": "e6cd",
    "unicode_decimal": 59085
  }, {
    "icon_id": "24934159",
    "name": "staff-filled-01",
    "font_class": "staff-filled",
    "unicode": "e6cb",
    "unicode_decimal": 59083
  }, {
    "icon_id": "24932461",
    "name": "VIP-filled",
    "font_class": "vip-filled",
    "unicode": "e6c6",
    "unicode_decimal": 59078
  }, {
    "icon_id": "24932462",
    "name": "plus_circle_fill",
    "font_class": "plus-filled",
    "unicode": "e6c7",
    "unicode_decimal": 59079
  }, {
    "icon_id": "24932463",
    "name": "folder_add-filled",
    "font_class": "folder-add-filled",
    "unicode": "e6c8",
    "unicode_decimal": 59080
  }, {
    "icon_id": "24932464",
    "name": "yanse-filled",
    "font_class": "color-filled",
    "unicode": "e6c9",
    "unicode_decimal": 59081
  }, {
    "icon_id": "24932465",
    "name": "tune-filled",
    "font_class": "tune-filled",
    "unicode": "e6ca",
    "unicode_decimal": 59082
  }, {
    "icon_id": "24932455",
    "name": "a-rilidaka-filled",
    "font_class": "calendar-filled",
    "unicode": "e6c0",
    "unicode_decimal": 59072
  }, {
    "icon_id": "24932456",
    "name": "notification-filled",
    "font_class": "notification-filled",
    "unicode": "e6c1",
    "unicode_decimal": 59073
  }, {
    "icon_id": "24932457",
    "name": "wallet-filled",
    "font_class": "wallet-filled",
    "unicode": "e6c2",
    "unicode_decimal": 59074
  }, {
    "icon_id": "24932458",
    "name": "paihangbang-filled",
    "font_class": "medal-filled",
    "unicode": "e6c3",
    "unicode_decimal": 59075
  }, {
    "icon_id": "24932459",
    "name": "gift-filled",
    "font_class": "gift-filled",
    "unicode": "e6c4",
    "unicode_decimal": 59076
  }, {
    "icon_id": "24932460",
    "name": "fire-filled",
    "font_class": "fire-filled",
    "unicode": "e6c5",
    "unicode_decimal": 59077
  }, {
    "icon_id": "24928001",
    "name": "refreshempty",
    "font_class": "refreshempty",
    "unicode": "e6bf",
    "unicode_decimal": 59071
  }, {
    "icon_id": "24926853",
    "name": "location-ellipse",
    "font_class": "location-filled",
    "unicode": "e6af",
    "unicode_decimal": 59055
  }, {
    "icon_id": "24926735",
    "name": "person-filled",
    "font_class": "person-filled",
    "unicode": "e69d",
    "unicode_decimal": 59037
  }, {
    "icon_id": "24926703",
    "name": "personadd-filled",
    "font_class": "personadd-filled",
    "unicode": "e698",
    "unicode_decimal": 59032
  }, {
    "icon_id": "24923351",
    "name": "back",
    "font_class": "back",
    "unicode": "e6b9",
    "unicode_decimal": 59065
  }, {
    "icon_id": "24923352",
    "name": "forward",
    "font_class": "forward",
    "unicode": "e6ba",
    "unicode_decimal": 59066
  }, {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrow-right",
    "unicode": "e6bb",
    "unicode_decimal": 59067
  }, {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrowthinright",
    "unicode": "e6bb",
    "unicode_decimal": 59067
  }, {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrow-left",
    "unicode": "e6bc",
    "unicode_decimal": 59068
  }, {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrowthinleft",
    "unicode": "e6bc",
    "unicode_decimal": 59068
  }, {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrow-up",
    "unicode": "e6bd",
    "unicode_decimal": 59069
  }, {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrowthinup",
    "unicode": "e6bd",
    "unicode_decimal": 59069
  }, {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrow-down",
    "unicode": "e6be",
    "unicode_decimal": 59070
  }, {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrowthindown",
    "unicode": "e6be",
    "unicode_decimal": 59070
  }, {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "bottom",
    "unicode": "e6b8",
    "unicode_decimal": 59064
  }, {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "arrowdown",
    "unicode": "e6b8",
    "unicode_decimal": 59064
  }, {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "right",
    "unicode": "e6b5",
    "unicode_decimal": 59061
  }, {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "arrowright",
    "unicode": "e6b5",
    "unicode_decimal": 59061
  }, {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "top",
    "unicode": "e6b6",
    "unicode_decimal": 59062
  }, {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "arrowup",
    "unicode": "e6b6",
    "unicode_decimal": 59062
  }, {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "left",
    "unicode": "e6b7",
    "unicode_decimal": 59063
  }, {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "arrowleft",
    "unicode": "e6b7",
    "unicode_decimal": 59063
  }, {
    "icon_id": "24923334",
    "name": "eye",
    "font_class": "eye",
    "unicode": "e651",
    "unicode_decimal": 58961
  }, {
    "icon_id": "24923335",
    "name": "eye-filled",
    "font_class": "eye-filled",
    "unicode": "e66a",
    "unicode_decimal": 58986
  }, {
    "icon_id": "24923336",
    "name": "eye-slash",
    "font_class": "eye-slash",
    "unicode": "e6b3",
    "unicode_decimal": 59059
  }, {
    "icon_id": "24923337",
    "name": "eye-slash-filled",
    "font_class": "eye-slash-filled",
    "unicode": "e6b4",
    "unicode_decimal": 59060
  }, {
    "icon_id": "24923305",
    "name": "info-filled",
    "font_class": "info-filled",
    "unicode": "e649",
    "unicode_decimal": 58953
  }, {
    "icon_id": "24923299",
    "name": "reload-01",
    "font_class": "reload",
    "unicode": "e6b2",
    "unicode_decimal": 59058
  }, {
    "icon_id": "24923195",
    "name": "mic_slash_fill",
    "font_class": "micoff-filled",
    "unicode": "e6b0",
    "unicode_decimal": 59056
  }, {
    "icon_id": "24923165",
    "name": "map-pin-ellipse",
    "font_class": "map-pin-ellipse",
    "unicode": "e6ac",
    "unicode_decimal": 59052
  }, {
    "icon_id": "24923166",
    "name": "map-pin",
    "font_class": "map-pin",
    "unicode": "e6ad",
    "unicode_decimal": 59053
  }, {
    "icon_id": "24923167",
    "name": "location",
    "font_class": "location",
    "unicode": "e6ae",
    "unicode_decimal": 59054
  }, {
    "icon_id": "24923064",
    "name": "starhalf",
    "font_class": "starhalf",
    "unicode": "e683",
    "unicode_decimal": 59011
  }, {
    "icon_id": "24923065",
    "name": "star",
    "font_class": "star",
    "unicode": "e688",
    "unicode_decimal": 59016
  }, {
    "icon_id": "24923066",
    "name": "star-filled",
    "font_class": "star-filled",
    "unicode": "e68f",
    "unicode_decimal": 59023
  }, {
    "icon_id": "24899646",
    "name": "a-rilidaka",
    "font_class": "calendar",
    "unicode": "e6a0",
    "unicode_decimal": 59040
  }, {
    "icon_id": "24899647",
    "name": "fire",
    "font_class": "fire",
    "unicode": "e6a1",
    "unicode_decimal": 59041
  }, {
    "icon_id": "24899648",
    "name": "paihangbang",
    "font_class": "medal",
    "unicode": "e6a2",
    "unicode_decimal": 59042
  }, {
    "icon_id": "24899649",
    "name": "font",
    "font_class": "font",
    "unicode": "e6a3",
    "unicode_decimal": 59043
  }, {
    "icon_id": "24899650",
    "name": "gift",
    "font_class": "gift",
    "unicode": "e6a4",
    "unicode_decimal": 59044
  }, {
    "icon_id": "24899651",
    "name": "link",
    "font_class": "link",
    "unicode": "e6a5",
    "unicode_decimal": 59045
  }, {
    "icon_id": "24899652",
    "name": "notification",
    "font_class": "notification",
    "unicode": "e6a6",
    "unicode_decimal": 59046
  }, {
    "icon_id": "24899653",
    "name": "staff",
    "font_class": "staff",
    "unicode": "e6a7",
    "unicode_decimal": 59047
  }, {
    "icon_id": "24899654",
    "name": "VIP",
    "font_class": "vip",
    "unicode": "e6a8",
    "unicode_decimal": 59048
  }, {
    "icon_id": "24899655",
    "name": "folder_add",
    "font_class": "folder-add",
    "unicode": "e6a9",
    "unicode_decimal": 59049
  }, {
    "icon_id": "24899656",
    "name": "tune",
    "font_class": "tune",
    "unicode": "e6aa",
    "unicode_decimal": 59050
  }, {
    "icon_id": "24899657",
    "name": "shimingrenzheng",
    "font_class": "auth",
    "unicode": "e6ab",
    "unicode_decimal": 59051
  }, {
    "icon_id": "24899565",
    "name": "person",
    "font_class": "person",
    "unicode": "e699",
    "unicode_decimal": 59033
  }, {
    "icon_id": "24899566",
    "name": "email-filled",
    "font_class": "email-filled",
    "unicode": "e69a",
    "unicode_decimal": 59034
  }, {
    "icon_id": "24899567",
    "name": "phone-filled",
    "font_class": "phone-filled",
    "unicode": "e69b",
    "unicode_decimal": 59035
  }, {
    "icon_id": "24899568",
    "name": "phone",
    "font_class": "phone",
    "unicode": "e69c",
    "unicode_decimal": 59036
  }, {
    "icon_id": "24899570",
    "name": "email",
    "font_class": "email",
    "unicode": "e69e",
    "unicode_decimal": 59038
  }, {
    "icon_id": "24899571",
    "name": "personadd",
    "font_class": "personadd",
    "unicode": "e69f",
    "unicode_decimal": 59039
  }, {
    "icon_id": "24899558",
    "name": "chatboxes-filled",
    "font_class": "chatboxes-filled",
    "unicode": "e692",
    "unicode_decimal": 59026
  }, {
    "icon_id": "24899559",
    "name": "contact",
    "font_class": "contact",
    "unicode": "e693",
    "unicode_decimal": 59027
  }, {
    "icon_id": "24899560",
    "name": "chatbubble-filled",
    "font_class": "chatbubble-filled",
    "unicode": "e694",
    "unicode_decimal": 59028
  }, {
    "icon_id": "24899561",
    "name": "contact-filled",
    "font_class": "contact-filled",
    "unicode": "e695",
    "unicode_decimal": 59029
  }, {
    "icon_id": "24899562",
    "name": "chatboxes",
    "font_class": "chatboxes",
    "unicode": "e696",
    "unicode_decimal": 59030
  }, {
    "icon_id": "24899563",
    "name": "chatbubble",
    "font_class": "chatbubble",
    "unicode": "e697",
    "unicode_decimal": 59031
  }, {
    "icon_id": "24881290",
    "name": "upload-filled",
    "font_class": "upload-filled",
    "unicode": "e68e",
    "unicode_decimal": 59022
  }, {
    "icon_id": "24881292",
    "name": "upload",
    "font_class": "upload",
    "unicode": "e690",
    "unicode_decimal": 59024
  }, {
    "icon_id": "24881293",
    "name": "weixin",
    "font_class": "weixin",
    "unicode": "e691",
    "unicode_decimal": 59025
  }, {
    "icon_id": "24881274",
    "name": "compose",
    "font_class": "compose",
    "unicode": "e67f",
    "unicode_decimal": 59007
  }, {
    "icon_id": "24881275",
    "name": "qq",
    "font_class": "qq",
    "unicode": "e680",
    "unicode_decimal": 59008
  }, {
    "icon_id": "24881276",
    "name": "download-filled",
    "font_class": "download-filled",
    "unicode": "e681",
    "unicode_decimal": 59009
  }, {
    "icon_id": "24881277",
    "name": "pengyouquan",
    "font_class": "pyq",
    "unicode": "e682",
    "unicode_decimal": 59010
  }, {
    "icon_id": "24881279",
    "name": "sound",
    "font_class": "sound",
    "unicode": "e684",
    "unicode_decimal": 59012
  }, {
    "icon_id": "24881280",
    "name": "trash-filled",
    "font_class": "trash-filled",
    "unicode": "e685",
    "unicode_decimal": 59013
  }, {
    "icon_id": "24881281",
    "name": "sound-filled",
    "font_class": "sound-filled",
    "unicode": "e686",
    "unicode_decimal": 59014
  }, {
    "icon_id": "24881282",
    "name": "trash",
    "font_class": "trash",
    "unicode": "e687",
    "unicode_decimal": 59015
  }, {
    "icon_id": "24881284",
    "name": "videocam-filled",
    "font_class": "videocam-filled",
    "unicode": "e689",
    "unicode_decimal": 59017
  }, {
    "icon_id": "24881285",
    "name": "spinner-cycle",
    "font_class": "spinner-cycle",
    "unicode": "e68a",
    "unicode_decimal": 59018
  }, {
    "icon_id": "24881286",
    "name": "weibo",
    "font_class": "weibo",
    "unicode": "e68b",
    "unicode_decimal": 59019
  }, {
    "icon_id": "24881288",
    "name": "videocam",
    "font_class": "videocam",
    "unicode": "e68c",
    "unicode_decimal": 59020
  }, {
    "icon_id": "24881289",
    "name": "download",
    "font_class": "download",
    "unicode": "e68d",
    "unicode_decimal": 59021
  }, {
    "icon_id": "24879601",
    "name": "help",
    "font_class": "help",
    "unicode": "e679",
    "unicode_decimal": 59001
  }, {
    "icon_id": "24879602",
    "name": "navigate-filled",
    "font_class": "navigate-filled",
    "unicode": "e67a",
    "unicode_decimal": 59002
  }, {
    "icon_id": "24879603",
    "name": "plusempty",
    "font_class": "plusempty",
    "unicode": "e67b",
    "unicode_decimal": 59003
  }, {
    "icon_id": "24879604",
    "name": "smallcircle",
    "font_class": "smallcircle",
    "unicode": "e67c",
    "unicode_decimal": 59004
  }, {
    "icon_id": "24879605",
    "name": "minus-filled",
    "font_class": "minus-filled",
    "unicode": "e67d",
    "unicode_decimal": 59005
  }, {
    "icon_id": "24879606",
    "name": "micoff",
    "font_class": "micoff",
    "unicode": "e67e",
    "unicode_decimal": 59006
  }, {
    "icon_id": "24879588",
    "name": "closeempty",
    "font_class": "closeempty",
    "unicode": "e66c",
    "unicode_decimal": 58988
  }, {
    "icon_id": "24879589",
    "name": "clear",
    "font_class": "clear",
    "unicode": "e66d",
    "unicode_decimal": 58989
  }, {
    "icon_id": "24879590",
    "name": "navigate",
    "font_class": "navigate",
    "unicode": "e66e",
    "unicode_decimal": 58990
  }, {
    "icon_id": "24879591",
    "name": "minus",
    "font_class": "minus",
    "unicode": "e66f",
    "unicode_decimal": 58991
  }, {
    "icon_id": "24879592",
    "name": "image",
    "font_class": "image",
    "unicode": "e670",
    "unicode_decimal": 58992
  }, {
    "icon_id": "24879593",
    "name": "mic",
    "font_class": "mic",
    "unicode": "e671",
    "unicode_decimal": 58993
  }, {
    "icon_id": "24879594",
    "name": "paperplane",
    "font_class": "paperplane",
    "unicode": "e672",
    "unicode_decimal": 58994
  }, {
    "icon_id": "24879595",
    "name": "close",
    "font_class": "close",
    "unicode": "e673",
    "unicode_decimal": 58995
  }, {
    "icon_id": "24879596",
    "name": "help-filled",
    "font_class": "help-filled",
    "unicode": "e674",
    "unicode_decimal": 58996
  }, {
    "icon_id": "24879597",
    "name": "plus-filled",
    "font_class": "paperplane-filled",
    "unicode": "e675",
    "unicode_decimal": 58997
  }, {
    "icon_id": "24879598",
    "name": "plus",
    "font_class": "plus",
    "unicode": "e676",
    "unicode_decimal": 58998
  }, {
    "icon_id": "24879599",
    "name": "mic-filled",
    "font_class": "mic-filled",
    "unicode": "e677",
    "unicode_decimal": 58999
  }, {
    "icon_id": "24879600",
    "name": "image-filled",
    "font_class": "image-filled",
    "unicode": "e678",
    "unicode_decimal": 59000
  }, {
    "icon_id": "24855900",
    "name": "locked-filled",
    "font_class": "locked-filled",
    "unicode": "e668",
    "unicode_decimal": 58984
  }, {
    "icon_id": "24855901",
    "name": "info",
    "font_class": "info",
    "unicode": "e669",
    "unicode_decimal": 58985
  }, {
    "icon_id": "24855903",
    "name": "locked",
    "font_class": "locked",
    "unicode": "e66b",
    "unicode_decimal": 58987
  }, {
    "icon_id": "24855884",
    "name": "camera-filled",
    "font_class": "camera-filled",
    "unicode": "e658",
    "unicode_decimal": 58968
  }, {
    "icon_id": "24855885",
    "name": "chat-filled",
    "font_class": "chat-filled",
    "unicode": "e659",
    "unicode_decimal": 58969
  }, {
    "icon_id": "24855886",
    "name": "camera",
    "font_class": "camera",
    "unicode": "e65a",
    "unicode_decimal": 58970
  }, {
    "icon_id": "24855887",
    "name": "circle",
    "font_class": "circle",
    "unicode": "e65b",
    "unicode_decimal": 58971
  }, {
    "icon_id": "24855888",
    "name": "checkmarkempty",
    "font_class": "checkmarkempty",
    "unicode": "e65c",
    "unicode_decimal": 58972
  }, {
    "icon_id": "24855889",
    "name": "chat",
    "font_class": "chat",
    "unicode": "e65d",
    "unicode_decimal": 58973
  }, {
    "icon_id": "24855890",
    "name": "circle-filled",
    "font_class": "circle-filled",
    "unicode": "e65e",
    "unicode_decimal": 58974
  }, {
    "icon_id": "24855891",
    "name": "flag",
    "font_class": "flag",
    "unicode": "e65f",
    "unicode_decimal": 58975
  }, {
    "icon_id": "24855892",
    "name": "flag-filled",
    "font_class": "flag-filled",
    "unicode": "e660",
    "unicode_decimal": 58976
  }, {
    "icon_id": "24855893",
    "name": "gear-filled",
    "font_class": "gear-filled",
    "unicode": "e661",
    "unicode_decimal": 58977
  }, {
    "icon_id": "24855894",
    "name": "home",
    "font_class": "home",
    "unicode": "e662",
    "unicode_decimal": 58978
  }, {
    "icon_id": "24855895",
    "name": "home-filled",
    "font_class": "home-filled",
    "unicode": "e663",
    "unicode_decimal": 58979
  }, {
    "icon_id": "24855896",
    "name": "gear",
    "font_class": "gear",
    "unicode": "e664",
    "unicode_decimal": 58980
  }, {
    "icon_id": "24855897",
    "name": "smallcircle-filled",
    "font_class": "smallcircle-filled",
    "unicode": "e665",
    "unicode_decimal": 58981
  }, {
    "icon_id": "24855898",
    "name": "map-filled",
    "font_class": "map-filled",
    "unicode": "e666",
    "unicode_decimal": 58982
  }, {
    "icon_id": "24855899",
    "name": "map",
    "font_class": "map",
    "unicode": "e667",
    "unicode_decimal": 58983
  }, {
    "icon_id": "24855825",
    "name": "refresh-filled",
    "font_class": "refresh-filled",
    "unicode": "e656",
    "unicode_decimal": 58966
  }, {
    "icon_id": "24855826",
    "name": "refresh",
    "font_class": "refresh",
    "unicode": "e657",
    "unicode_decimal": 58967
  }, {
    "icon_id": "24855808",
    "name": "cloud-upload",
    "font_class": "cloud-upload",
    "unicode": "e645",
    "unicode_decimal": 58949
  }, {
    "icon_id": "24855809",
    "name": "cloud-download-filled",
    "font_class": "cloud-download-filled",
    "unicode": "e646",
    "unicode_decimal": 58950
  }, {
    "icon_id": "24855810",
    "name": "cloud-download",
    "font_class": "cloud-download",
    "unicode": "e647",
    "unicode_decimal": 58951
  }, {
    "icon_id": "24855811",
    "name": "cloud-upload-filled",
    "font_class": "cloud-upload-filled",
    "unicode": "e648",
    "unicode_decimal": 58952
  }, {
    "icon_id": "24855813",
    "name": "redo",
    "font_class": "redo",
    "unicode": "e64a",
    "unicode_decimal": 58954
  }, {
    "icon_id": "24855814",
    "name": "images-filled",
    "font_class": "images-filled",
    "unicode": "e64b",
    "unicode_decimal": 58955
  }, {
    "icon_id": "24855815",
    "name": "undo-filled",
    "font_class": "undo-filled",
    "unicode": "e64c",
    "unicode_decimal": 58956
  }, {
    "icon_id": "24855816",
    "name": "more",
    "font_class": "more",
    "unicode": "e64d",
    "unicode_decimal": 58957
  }, {
    "icon_id": "24855817",
    "name": "more-filled",
    "font_class": "more-filled",
    "unicode": "e64e",
    "unicode_decimal": 58958
  }, {
    "icon_id": "24855818",
    "name": "undo",
    "font_class": "undo",
    "unicode": "e64f",
    "unicode_decimal": 58959
  }, {
    "icon_id": "24855819",
    "name": "images",
    "font_class": "images",
    "unicode": "e650",
    "unicode_decimal": 58960
  }, {
    "icon_id": "24855821",
    "name": "paperclip",
    "font_class": "paperclip",
    "unicode": "e652",
    "unicode_decimal": 58962
  }, {
    "icon_id": "24855822",
    "name": "settings",
    "font_class": "settings",
    "unicode": "e653",
    "unicode_decimal": 58963
  }, {
    "icon_id": "24855823",
    "name": "search",
    "font_class": "search",
    "unicode": "e654",
    "unicode_decimal": 58964
  }, {
    "icon_id": "24855824",
    "name": "redo-filled",
    "font_class": "redo-filled",
    "unicode": "e655",
    "unicode_decimal": 58965
  }, {
    "icon_id": "24841702",
    "name": "list",
    "font_class": "list",
    "unicode": "e644",
    "unicode_decimal": 58948
  }, {
    "icon_id": "24841489",
    "name": "mail-open-filled",
    "font_class": "mail-open-filled",
    "unicode": "e63a",
    "unicode_decimal": 58938
  }, {
    "icon_id": "24841491",
    "name": "hand-thumbsdown-filled",
    "font_class": "hand-down-filled",
    "unicode": "e63c",
    "unicode_decimal": 58940
  }, {
    "icon_id": "24841492",
    "name": "hand-thumbsdown",
    "font_class": "hand-down",
    "unicode": "e63d",
    "unicode_decimal": 58941
  }, {
    "icon_id": "24841493",
    "name": "hand-thumbsup-filled",
    "font_class": "hand-up-filled",
    "unicode": "e63e",
    "unicode_decimal": 58942
  }, {
    "icon_id": "24841494",
    "name": "hand-thumbsup",
    "font_class": "hand-up",
    "unicode": "e63f",
    "unicode_decimal": 58943
  }, {
    "icon_id": "24841496",
    "name": "heart-filled",
    "font_class": "heart-filled",
    "unicode": "e641",
    "unicode_decimal": 58945
  }, {
    "icon_id": "24841498",
    "name": "mail-open",
    "font_class": "mail-open",
    "unicode": "e643",
    "unicode_decimal": 58947
  }, {
    "icon_id": "24841488",
    "name": "heart",
    "font_class": "heart",
    "unicode": "e639",
    "unicode_decimal": 58937
  }, {
    "icon_id": "24839963",
    "name": "loop",
    "font_class": "loop",
    "unicode": "e633",
    "unicode_decimal": 58931
  }, {
    "icon_id": "24839866",
    "name": "pulldown",
    "font_class": "pulldown",
    "unicode": "e632",
    "unicode_decimal": 58930
  }, {
    "icon_id": "24813798",
    "name": "scan",
    "font_class": "scan",
    "unicode": "e62a",
    "unicode_decimal": 58922
  }, {
    "icon_id": "24813786",
    "name": "bars",
    "font_class": "bars",
    "unicode": "e627",
    "unicode_decimal": 58919
  }, {
    "icon_id": "24813788",
    "name": "cart-filled",
    "font_class": "cart-filled",
    "unicode": "e629",
    "unicode_decimal": 58921
  }, {
    "icon_id": "24813790",
    "name": "checkbox",
    "font_class": "checkbox",
    "unicode": "e62b",
    "unicode_decimal": 58923
  }, {
    "icon_id": "24813791",
    "name": "checkbox-filled",
    "font_class": "checkbox-filled",
    "unicode": "e62c",
    "unicode_decimal": 58924
  }, {
    "icon_id": "24813794",
    "name": "shop",
    "font_class": "shop",
    "unicode": "e62f",
    "unicode_decimal": 58927
  }, {
    "icon_id": "24813795",
    "name": "headphones",
    "font_class": "headphones",
    "unicode": "e630",
    "unicode_decimal": 58928
  }, {
    "icon_id": "24813796",
    "name": "cart",
    "font_class": "cart",
    "unicode": "e631",
    "unicode_decimal": 58929
  }]
};
exports.default = _default;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 31:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 32:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 33);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 33:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 34:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 35:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 34);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 36);
var construct = __webpack_require__(/*! ./construct.js */ 15);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 36:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 37:
/*!***************************************************************!*\
  !*** E:/uni-app/恋爱日记/pages.json?{"type":"origin-pages-json"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/Login/Login",
    "style": {
      "navigationBarTitleText": "登入",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/Home/Home",
    "style": {
      "navigationBarTitleText": "恋爱日",
      "enablePullDownRefresh": true,
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/Convenience/Convenience",
    "style": {
      "navigationBarTitleText": "便利贴",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/HeardEvent/HeardEvent",
    "style": {
      "navigationBarTitleText": "心事",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/Find/Find",
    "style": {
      "navigationBarTitleText": "发现",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/My/My",
    "style": {
      "navigationBarTitleText": "我的",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/addDay/addDay",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/commemorationDay/commemorationDay",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/updateDay/updateDay",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/millionStuff/millionStuff",
    "style": {
      "navigationBarTitleText": "情侣必做100件事",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/stuffItem/stuffItem",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/addEvent/addEvent",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/eventItem/eventItem",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/updateEvent/updateEvent",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/detail/detail",
    "style": {
      "navigationBarTitleText": "听歌",
      "enablePullDownRefresh": true,
      "navigationBarBackgroundColor": "#000000",
      "navigationBarTextStyle": "white"
    }
  }, {
    "path": "pages/addLikeSong/addLikeSong",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/addSongList/addSongList",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/Convenience/CardOne/CardOne",
    "style": {
      "navigationBarTitleText": "经期记录",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/Convenience/CardTow/CardTow",
    "style": {
      "navigationBarTitleText": "Ta的生日",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/Convenience/CardThree/CardThree",
    "style": {
      "navigationBarTitleText": "备忘录",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/Convenience/CardFour/CardFour",
    "style": {
      "navigationBarTitleText": "倒数日",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/Convenience/CardFour/setCountDownDay/setCountDownDay",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8",
    "app-plus": {
      "background": "#efeff4"
    },
    "backgroundTextStyle": "dark"
  },
  "tabBar": {
    "selectedColor": "#6466b8",
    "list": [{
      "text": "首页",
      "pagePath": "pages/Home/Home",
      "iconPath": "static/icon/首页.png",
      "selectedIconPath": "static/icon/首页(1).png"
    }, {
      "text": "便利贴",
      "pagePath": "pages/Convenience/Convenience",
      "iconPath": "static/icon/记录.png",
      "selectedIconPath": "static/icon/记录(1).png"
    }, {
      "text": "心事",
      "pagePath": "pages/HeardEvent/HeardEvent",
      "iconPath": "static/icon/喜欢.png",
      "selectedIconPath": "static/icon/喜欢(1).png"
    }, {
      "text": "发现",
      "pagePath": "pages/Find/Find",
      "iconPath": "static/icon/搜索.png",
      "selectedIconPath": "static/icon/搜索(1).png"
    }, {
      "text": "我的",
      "pagePath": "pages/My/My",
      "iconPath": "static/icon/我的.png",
      "selectedIconPath": "static/icon/我的(1).png"
    }]
  }
};
exports.default = _default;

/***/ }),

/***/ 38:
/*!**************************************************!*\
  !*** E:/uni-app/恋爱日记/pages.json?{"type":"stat"} ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__901369A"
};
exports.default = _default;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 44:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 45:
/*!**************************************!*\
  !*** E:/uni-app/恋爱日记/store/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 46));
var _NowStuff = _interopRequireDefault(__webpack_require__(/*! ./NowStuff */ 47));
_vue.default.use(_vuex.default);
var _default = new _vuex.default.Store({
  modules: {
    NowStuff: _NowStuff.default
  }
});
exports.default = _default;

/***/ }),

/***/ 46:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 47:
/*!***********************************************!*\
  !*** E:/uni-app/恋爱日记/store/NowStuff/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var state = {
  nowStuff: []
};
var mutations = {
  GETNOWSTUFF: function GETNOWSTUFF(state, nowStuff) {
    state.nowStuff = nowStuff;
  }
};
var actions = {
  getNowStuff: function getNowStuff(_ref, id) {
    var commit = _ref.commit;
    var db = uniCloud.database();
    db.collection("Stuff").where({
      id: id
    }).get().then(function (res) {
      commit("GETNOWSTUFF", res.result.data);
    });
  }
};
var getters = {};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27)["default"]))

/***/ }),

/***/ 48:
/*!*****************************************!*\
  !*** E:/uni-app/恋爱日记/mock/mockServe.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _mockjs = _interopRequireDefault(__webpack_require__(/*! mockjs */ 49));
var _test = _interopRequireDefault(__webpack_require__(/*! ./test.json */ 51));
_mockjs.default.mock('/mock/test', {
  code: 200,
  data: _test.default
});

/***/ }),

/***/ 49:
/*!********************************************************!*\
  !*** E:/uni-app/恋爱日记/node_modules/mockjs/dist/mock.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};

      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) /******/return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/exports: {},
          /******/id: moduleId,
          /******/loaded: false
          /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }

      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;

      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;

      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "";

      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(0);
      /******/
    }
    /************************************************************************/
    /******/([/* 0 */
    /***/function (module, exports, __webpack_require__) {
      /* global require, module, window */
      var Handler = __webpack_require__(1);
      var Util = __webpack_require__(3);
      var Random = __webpack_require__(5);
      var RE = __webpack_require__(20);
      var toJSONSchema = __webpack_require__(23);
      var valid = __webpack_require__(25);
      var XHR;
      if (typeof window !== 'undefined') XHR = __webpack_require__(27);

      /*!
          Mock - 模拟请求 & 模拟数据
          https://github.com/nuysoft/Mock
          墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
      */
      var Mock = {
        Handler: Handler,
        Random: Random,
        Util: Util,
        XHR: XHR,
        RE: RE,
        toJSONSchema: toJSONSchema,
        valid: valid,
        heredoc: Util.heredoc,
        setup: function setup(settings) {
          return XHR.setup(settings);
        },
        _mocked: {}
      };
      Mock.version = '1.0.1-beta3';

      // 避免循环依赖
      if (XHR) XHR.Mock = Mock;

      /*
          * Mock.mock( template )
          * Mock.mock( function() )
          * Mock.mock( rurl, template )
          * Mock.mock( rurl, function(options) )
          * Mock.mock( rurl, rtype, template )
          * Mock.mock( rurl, rtype, function(options) )
      
          根据数据模板生成模拟数据。
      */
      Mock.mock = function (rurl, rtype, template) {
        // Mock.mock(template)
        if (arguments.length === 1) {
          return Handler.gen(rurl);
        }
        // Mock.mock(rurl, template)
        if (arguments.length === 2) {
          template = rtype;
          rtype = undefined;
        }
        // 拦截 XHR
        if (XHR) window.XMLHttpRequest = XHR;
        Mock._mocked[rurl + (rtype || '')] = {
          rurl: rurl,
          rtype: rtype,
          template: template
        };
        return Mock;
      };
      module.exports = Mock;

      /***/
    }, /* 1 */
    /***/function (module, exports, __webpack_require__) {
      /* 
          ## Handler
      
          处理数据模板。
          
          * Handler.gen( template, name?, context? )
      
              入口方法。
      
          * Data Template Definition, DTD
              
              处理数据模板定义。
      
              * Handler.array( options )
              * Handler.object( options )
              * Handler.number( options )
              * Handler.boolean( options )
              * Handler.string( options )
              * Handler.function( options )
              * Handler.regexp( options )
              
              处理路径（相对和绝对）。
      
              * Handler.getValueByKeyPath( key, options )
      
          * Data Placeholder Definition, DPD
      
              处理数据占位符定义
      
              * Handler.placeholder( placeholder, context, templateContext, options )
      
      */

      var Constant = __webpack_require__(2);
      var Util = __webpack_require__(3);
      var Parser = __webpack_require__(4);
      var Random = __webpack_require__(5);
      var RE = __webpack_require__(20);
      var Handler = {
        extend: Util.extend
      };

      /*
          template        属性值（即数据模板）
          name            属性名
          context         数据上下文，生成后的数据
          templateContext 模板上下文，
      
          Handle.gen(template, name, options)
          context
              currentContext, templateCurrentContext, 
              path, templatePath
              root, templateRoot
      */
      Handler.gen = function (template, name, context) {
        /* jshint -W041 */
        name = name == undefined ? '' : name + '';
        context = context || {};
        context = {
          // 当前访问路径，只有属性名，不包括生成规则
          path: context.path || [Constant.GUID],
          templatePath: context.templatePath || [Constant.GUID++],
          // 最终属性值的上下文
          currentContext: context.currentContext,
          // 属性值模板的上下文
          templateCurrentContext: context.templateCurrentContext || template,
          // 最终值的根
          root: context.root || context.currentContext,
          // 模板的根
          templateRoot: context.templateRoot || context.templateCurrentContext || template
        };
        // console.log('path:', context.path.join('.'), template)

        var rule = Parser.parse(name);
        var type = Util.type(template);
        var data;
        if (Handler[type]) {
          data = Handler[type]({
            // 属性值类型
            type: type,
            // 属性值模板
            template: template,
            // 属性名 + 生成规则
            name: name,
            // 属性名
            parsedName: name ? name.replace(Constant.RE_KEY, '$1') : name,
            // 解析后的生成规则
            rule: rule,
            // 相关上下文
            context: context
          });
          if (!context.root) context.root = data;
          return data;
        }
        return template;
      };
      Handler.extend({
        array: function array(options) {
          var result = [],
            i,
            ii;

          // 'name|1': []
          // 'name|count': []
          // 'name|min-max': []
          if (options.template.length === 0) return result;

          // 'arr': [{ 'email': '@EMAIL' }, { 'email': '@EMAIL' }]
          if (!options.rule.parameters) {
            for (i = 0; i < options.template.length; i++) {
              options.context.path.push(i);
              options.context.templatePath.push(i);
              result.push(Handler.gen(options.template[i], i, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
              }));
              options.context.path.pop();
              options.context.templatePath.pop();
            }
          } else {
            // 'method|1': ['GET', 'POST', 'HEAD', 'DELETE']
            if (options.rule.min === 1 && options.rule.max === undefined) {
              // fix #17
              options.context.path.push(options.name);
              options.context.templatePath.push(options.name);
              result = Random.pick(Handler.gen(options.template, undefined, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
              }));
              options.context.path.pop();
              options.context.templatePath.pop();
            } else {
              // 'data|+1': [{}, {}]
              if (options.rule.parameters[2]) {
                options.template.__order_index = options.template.__order_index || 0;
                options.context.path.push(options.name);
                options.context.templatePath.push(options.name);
                result = Handler.gen(options.template, undefined, {
                  path: options.context.path,
                  templatePath: options.context.templatePath,
                  currentContext: result,
                  templateCurrentContext: options.template,
                  root: options.context.root || result,
                  templateRoot: options.context.templateRoot || options.template
                })[options.template.__order_index % options.template.length];
                options.template.__order_index += +options.rule.parameters[2];
                options.context.path.pop();
                options.context.templatePath.pop();
              } else {
                // 'data|1-10': [{}]
                for (i = 0; i < options.rule.count; i++) {
                  // 'data|1-10': [{}, {}]
                  for (ii = 0; ii < options.template.length; ii++) {
                    options.context.path.push(result.length);
                    options.context.templatePath.push(ii);
                    result.push(Handler.gen(options.template[ii], result.length, {
                      path: options.context.path,
                      templatePath: options.context.templatePath,
                      currentContext: result,
                      templateCurrentContext: options.template,
                      root: options.context.root || result,
                      templateRoot: options.context.templateRoot || options.template
                    }));
                    options.context.path.pop();
                    options.context.templatePath.pop();
                  }
                }
              }
            }
          }
          return result;
        },
        object: function object(options) {
          var result = {},
            keys,
            fnKeys,
            key,
            parsedKey,
            inc,
            i;

          // 'obj|min-max': {}
          /* jshint -W041 */
          if (options.rule.min != undefined) {
            keys = Util.keys(options.template);
            keys = Random.shuffle(keys);
            keys = keys.slice(0, options.rule.count);
            for (i = 0; i < keys.length; i++) {
              key = keys[i];
              parsedKey = key.replace(Constant.RE_KEY, '$1');
              options.context.path.push(parsedKey);
              options.context.templatePath.push(key);
              result[parsedKey] = Handler.gen(options.template[key], key, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
              });
              options.context.path.pop();
              options.context.templatePath.pop();
            }
          } else {
            // 'obj': {}
            keys = [];
            fnKeys = []; // #25 改变了非函数属性的顺序，查找起来不方便
            for (key in options.template) {
              (typeof options.template[key] === 'function' ? fnKeys : keys).push(key);
            }
            keys = keys.concat(fnKeys);

            /*
                会改变非函数属性的顺序
                keys = Util.keys(options.template)
                keys.sort(function(a, b) {
                    var afn = typeof options.template[a] === 'function'
                    var bfn = typeof options.template[b] === 'function'
                    if (afn === bfn) return 0
                    if (afn && !bfn) return 1
                    if (!afn && bfn) return -1
                })
            */

            for (i = 0; i < keys.length; i++) {
              key = keys[i];
              parsedKey = key.replace(Constant.RE_KEY, '$1');
              options.context.path.push(parsedKey);
              options.context.templatePath.push(key);
              result[parsedKey] = Handler.gen(options.template[key], key, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
              });
              options.context.path.pop();
              options.context.templatePath.pop();
              // 'id|+1': 1
              inc = key.match(Constant.RE_KEY);
              if (inc && inc[2] && Util.type(options.template[key]) === 'number') {
                options.template[key] += parseInt(inc[2], 10);
              }
            }
          }
          return result;
        },
        number: function number(options) {
          var result, parts;
          if (options.rule.decimal) {
            // float
            options.template += '';
            parts = options.template.split('.');
            // 'float1|.1-10': 10,
            // 'float2|1-100.1-10': 1,
            // 'float3|999.1-10': 1,
            // 'float4|.3-10': 123.123,
            parts[0] = options.rule.range ? options.rule.count : parts[0];
            parts[1] = (parts[1] || '').slice(0, options.rule.dcount);
            while (parts[1].length < options.rule.dcount) {
              parts[1] +=
              // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
              parts[1].length < options.rule.dcount - 1 ? Random.character('number') : Random.character('123456789');
            }
            result = parseFloat(parts.join('.'), 10);
          } else {
            // integer
            // 'grade1|1-100': 1,
            result = options.rule.range && !options.rule.parameters[2] ? options.rule.count : options.template;
          }
          return result;
        },
        boolean: function boolean(options) {
          var result;
          // 'prop|multiple': false, 当前值是相反值的概率倍数
          // 'prop|probability-probability': false, 当前值与相反值的概率
          result = options.rule.parameters ? Random.bool(options.rule.min, options.rule.max, options.template) : options.template;
          return result;
        },
        string: function string(options) {
          var result = '',
            i,
            placeholders,
            ph,
            phed;
          if (options.template.length) {
            //  'foo': '★',
            /* jshint -W041 */
            if (options.rule.count == undefined) {
              result += options.template;
            }

            // 'star|1-5': '★',
            for (i = 0; i < options.rule.count; i++) {
              result += options.template;
            }
            // 'email|1-10': '@EMAIL, ',
            placeholders = result.match(Constant.RE_PLACEHOLDER) || []; // A-Z_0-9 > \w_
            for (i = 0; i < placeholders.length; i++) {
              ph = placeholders[i];

              // 遇到转义斜杠，不需要解析占位符
              if (/^\\/.test(ph)) {
                placeholders.splice(i--, 1);
                continue;
              }
              phed = Handler.placeholder(ph, options.context.currentContext, options.context.templateCurrentContext, options);

              // 只有一个占位符，并且没有其他字符
              if (placeholders.length === 1 && ph === result && _typeof(phed) !== _typeof(result)) {
                // 
                result = phed;
                break;
                if (Util.isNumeric(phed)) {
                  result = parseFloat(phed, 10);
                  break;
                }
                if (/^(true|false)$/.test(phed)) {
                  result = phed === 'true' ? true : phed === 'false' ? false : phed; // 已经是布尔值
                  break;
                }
              }
              result = result.replace(ph, phed);
            }
          } else {
            // 'ASCII|1-10': '',
            // 'ASCII': '',
            result = options.rule.range ? Random.string(options.rule.count) : options.template;
          }
          return result;
        },
        'function': function _function(options) {
          // ( context, options )
          return options.template.call(options.context.currentContext, options);
        },
        'regexp': function regexp(options) {
          var source = '';

          // 'name': /regexp/,
          /* jshint -W041 */
          if (options.rule.count == undefined) {
            source += options.template.source; // regexp.source
          }

          // 'name|1-5': /regexp/,
          for (var i = 0; i < options.rule.count; i++) {
            source += options.template.source;
          }
          return RE.Handler.gen(RE.Parser.parse(source));
        }
      });
      Handler.extend({
        _all: function _all() {
          var re = {};
          for (var key in Random) {
            re[key.toLowerCase()] = key;
          }
          return re;
        },
        // 处理占位符，转换为最终值
        placeholder: function placeholder(_placeholder, obj, templateContext, options) {
          // console.log(options.context.path)
          // 1 key, 2 params
          Constant.RE_PLACEHOLDER.exec('');
          var parts = Constant.RE_PLACEHOLDER.exec(_placeholder),
            key = parts && parts[1],
            lkey = key && key.toLowerCase(),
            okey = this._all()[lkey],
            params = parts && parts[2] || '';
          var pathParts = this.splitPathToArray(key);

          // 解析占位符的参数
          try {
            // 1. 尝试保持参数的类型
            /*
                #24 [Window Firefox 30.0 引用 占位符 抛错](https://github.com/nuysoft/Mock/issues/24)
                [BX9056: 各浏览器下 window.eval 方法的执行上下文存在差异](http://www.w3help.org/zh-cn/causes/BX9056)
                应该属于 Window Firefox 30.0 的 BUG
            */
            /* jshint -W061 */
            params = eval('(function(){ return [].splice.call(arguments, 0 ) })(' + params + ')');
          } catch (error) {
            // 2. 如果失败，只能解析为字符串
            // console.error(error)
            // if (error instanceof ReferenceError) params = parts[2].split(/,\s*/);
            // else throw error
            params = parts[2].split(/,\s*/);
          }

          // 占位符优先引用数据模板中的属性
          if (obj && key in obj) return obj[key];

          // @index @key
          // if (Constant.RE_INDEX.test(key)) return +options.name
          // if (Constant.RE_KEY.test(key)) return options.name

          // 绝对路径 or 相对路径
          if (key.charAt(0) === '/' || pathParts.length > 1) return this.getValueByKeyPath(key, options);

          // 递归引用数据模板中的属性
          if (templateContext && _typeof(templateContext) === 'object' && key in templateContext && _placeholder !== templateContext[key] // fix #15 避免自己依赖自己
          ) {
            // 先计算被引用的属性值
            templateContext[key] = Handler.gen(templateContext[key], key, {
              currentContext: obj,
              templateCurrentContext: templateContext
            });
            return templateContext[key];
          }

          // 如果未找到，则原样返回
          if (!(key in Random) && !(lkey in Random) && !(okey in Random)) return _placeholder;

          // 递归解析参数中的占位符
          for (var i = 0; i < params.length; i++) {
            Constant.RE_PLACEHOLDER.exec('');
            if (Constant.RE_PLACEHOLDER.test(params[i])) {
              params[i] = Handler.placeholder(params[i], obj, templateContext, options);
            }
          }
          var handle = Random[key] || Random[lkey] || Random[okey];
          switch (Util.type(handle)) {
            case 'array':
              // 自动从数组中取一个，例如 @areas
              return Random.pick(handle);
            case 'function':
              // 执行占位符方法（大多数情况）
              handle.options = options;
              var re = handle.apply(Random, params);
              if (re === undefined) re = ''; // 因为是在字符串中，所以默认为空字符串。
              delete handle.options;
              return re;
          }
        },
        getValueByKeyPath: function getValueByKeyPath(key, options) {
          var originalKey = key;
          var keyPathParts = this.splitPathToArray(key);
          var absolutePathParts = [];

          // 绝对路径
          if (key.charAt(0) === '/') {
            absolutePathParts = [options.context.path[0]].concat(this.normalizePath(keyPathParts));
          } else {
            // 相对路径
            if (keyPathParts.length > 1) {
              absolutePathParts = options.context.path.slice(0);
              absolutePathParts.pop();
              absolutePathParts = this.normalizePath(absolutePathParts.concat(keyPathParts));
            }
          }
          try {
            key = keyPathParts[keyPathParts.length - 1];
            var currentContext = options.context.root;
            var templateCurrentContext = options.context.templateRoot;
            for (var i = 1; i < absolutePathParts.length - 1; i++) {
              currentContext = currentContext[absolutePathParts[i]];
              templateCurrentContext = templateCurrentContext[absolutePathParts[i]];
            }
            // 引用的值已经计算好
            if (currentContext && key in currentContext) return currentContext[key];

            // 尚未计算，递归引用数据模板中的属性
            if (templateCurrentContext && _typeof(templateCurrentContext) === 'object' && key in templateCurrentContext && originalKey !== templateCurrentContext[key] // fix #15 避免自己依赖自己
            ) {
              // 先计算被引用的属性值
              templateCurrentContext[key] = Handler.gen(templateCurrentContext[key], key, {
                currentContext: currentContext,
                templateCurrentContext: templateCurrentContext
              });
              return templateCurrentContext[key];
            }
          } catch (err) {}
          return '@' + keyPathParts.join('/');
        },
        // https://github.com/kissyteam/kissy/blob/master/src/path/src/path.js
        normalizePath: function normalizePath(pathParts) {
          var newPathParts = [];
          for (var i = 0; i < pathParts.length; i++) {
            switch (pathParts[i]) {
              case '..':
                newPathParts.pop();
                break;
              case '.':
                break;
              default:
                newPathParts.push(pathParts[i]);
            }
          }
          return newPathParts;
        },
        splitPathToArray: function splitPathToArray(path) {
          var parts = path.split(/\/+/);
          if (!parts[parts.length - 1]) parts = parts.slice(0, -1);
          if (!parts[0]) parts = parts.slice(1);
          return parts;
        }
      });
      module.exports = Handler;

      /***/
    }, /* 2 */
    /***/function (module, exports) {
      /*
          ## Constant
      
          常量集合。
       */
      /*
          RE_KEY
              'name|min-max': value
              'name|count': value
              'name|min-max.dmin-dmax': value
              'name|min-max.dcount': value
              'name|count.dmin-dmax': value
              'name|count.dcount': value
              'name|+step': value
      
              1 name, 2 step, 3 range [ min, max ], 4 drange [ dmin, dmax ]
      
          RE_PLACEHOLDER
              placeholder(*)
      
          [正则查看工具](http://www.regexper.com/)
      
          #26 生成规则 支持 负数，例如 number|-100-100
      */
      module.exports = {
        GUID: 1,
        RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
        RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
        RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g
        // /\\*@([^@#%&()\?\s\/\.]+)(?:\((.*?)\))?/g
        // RE_INDEX: /^index$/,
        // RE_KEY: /^key$/
      };

      /***/
    }, /* 3 */
    /***/function (module, exports) {
      /*
          ## Utilities
      */
      var Util = {};
      Util.extend = function extend() {
        var target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          options,
          name,
          src,
          copy,
          clone;
        if (length === 1) {
          target = this;
          i = 0;
        }
        for (; i < length; i++) {
          options = arguments[i];
          if (!options) continue;
          for (name in options) {
            src = target[name];
            copy = options[name];
            if (target === copy) continue;
            if (copy === undefined) continue;
            if (Util.isArray(copy) || Util.isObject(copy)) {
              if (Util.isArray(copy)) clone = src && Util.isArray(src) ? src : [];
              if (Util.isObject(copy)) clone = src && Util.isObject(src) ? src : {};
              target[name] = Util.extend(clone, copy);
            } else {
              target[name] = copy;
            }
          }
        }
        return target;
      };
      Util.each = function each(obj, iterator, context) {
        var i, key;
        if (this.type(obj) === 'number') {
          for (i = 0; i < obj; i++) {
            iterator(i, i);
          }
        } else if (obj.length === +obj.length) {
          for (i = 0; i < obj.length; i++) {
            if (iterator.call(context, obj[i], i, obj) === false) break;
          }
        } else {
          for (key in obj) {
            if (iterator.call(context, obj[key], key, obj) === false) break;
          }
        }
      };
      Util.type = function type(obj) {
        return obj === null || obj === undefined ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase();
      };
      Util.each('String Object Array RegExp Function'.split(' '), function (value) {
        Util['is' + value] = function (obj) {
          return Util.type(obj) === value.toLowerCase();
        };
      });
      Util.isObjectOrArray = function (value) {
        return Util.isObject(value) || Util.isArray(value);
      };
      Util.isNumeric = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
      };
      Util.keys = function (obj) {
        var keys = [];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) keys.push(key);
        }
        return keys;
      };
      Util.values = function (obj) {
        var values = [];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) values.push(obj[key]);
        }
        return values;
      };

      /*
          ### Mock.heredoc(fn)
      
          * Mock.heredoc(fn)
      
          以直观、安全的方式书写（多行）HTML 模板。
      
          **使用示例**如下所示：
      
              var tpl = Mock.heredoc(function() {
                  /*!
              {{email}}{{age}}
              <!-- Mock { 
                  email: '@EMAIL',
                  age: '@INT(1,100)'
              } -->
                  *\/
              })
          
          **相关阅读**
          * [Creating multiline strings in JavaScript](http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript)、
      */
      Util.heredoc = function heredoc(fn) {
        // 1. 移除起始的 function(){ /*!
        // 2. 移除末尾的 */ }
        // 3. 移除起始和末尾的空格
        return fn.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '').replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, ''); // .trim()
      };

      Util.noop = function () {};
      module.exports = Util;

      /***/
    }, /* 4 */
    /***/function (module, exports, __webpack_require__) {
      /*
      	## Parser
      
      	解析数据模板（属性名部分）。
      
      	* Parser.parse( name )
      		
      		```json
      		{
      			parameters: [ name, inc, range, decimal ],
      			rnage: [ min , max ],
      
      			min: min,
      			max: max,
      			count : count,
      
      			decimal: decimal,
      			dmin: dmin,
      			dmax: dmax,
      			dcount: dcount
      		}
      		```
       */

      var Constant = __webpack_require__(2);
      var Random = __webpack_require__(5);

      /* jshint -W041 */
      module.exports = {
        parse: function parse(name) {
          name = name == undefined ? '' : name + '';
          var parameters = (name || '').match(Constant.RE_KEY);
          var range = parameters && parameters[3] && parameters[3].match(Constant.RE_RANGE);
          var min = range && range[1] && parseInt(range[1], 10); // || 1
          var max = range && range[2] && parseInt(range[2], 10); // || 1
          // repeat || min-max || 1
          // var count = range ? !range[2] && parseInt(range[1], 10) || Random.integer(min, max) : 1
          var count = range ? !range[2] ? parseInt(range[1], 10) : Random.integer(min, max) : undefined;
          var decimal = parameters && parameters[4] && parameters[4].match(Constant.RE_RANGE);
          var dmin = decimal && decimal[1] && parseInt(decimal[1], 10); // || 0,
          var dmax = decimal && decimal[2] && parseInt(decimal[2], 10); // || 0,
          // int || dmin-dmax || 0
          var dcount = decimal ? !decimal[2] && parseInt(decimal[1], 10) || Random.integer(dmin, dmax) : undefined;
          var result = {
            // 1 name, 2 inc, 3 range, 4 decimal
            parameters: parameters,
            // 1 min, 2 max
            range: range,
            min: min,
            max: max,
            // min-max
            count: count,
            // 是否有 decimal
            decimal: decimal,
            dmin: dmin,
            dmax: dmax,
            // dmin-dimax
            dcount: dcount
          };
          for (var r in result) {
            if (result[r] != undefined) return result;
          }
          return {};
        }
      };

      /***/
    }, /* 5 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## Mock.Random
          
          工具类，用于生成各种随机数据。
      */

      var Util = __webpack_require__(3);
      var Random = {
        extend: Util.extend
      };
      Random.extend(__webpack_require__(6));
      Random.extend(__webpack_require__(7));
      Random.extend(__webpack_require__(8));
      Random.extend(__webpack_require__(10));
      Random.extend(__webpack_require__(13));
      Random.extend(__webpack_require__(15));
      Random.extend(__webpack_require__(16));
      Random.extend(__webpack_require__(17));
      Random.extend(__webpack_require__(14));
      Random.extend(__webpack_require__(19));
      module.exports = Random;

      /***/
    }, /* 6 */
    /***/function (module, exports) {
      /*
          ## Basics
      */
      module.exports = {
        // 返回一个随机的布尔值。
        boolean: function boolean(min, max, cur) {
          if (cur !== undefined) {
            min = typeof min !== 'undefined' && !isNaN(min) ? parseInt(min, 10) : 1;
            max = typeof max !== 'undefined' && !isNaN(max) ? parseInt(max, 10) : 1;
            return Math.random() > 1.0 / (min + max) * min ? !cur : cur;
          }
          return Math.random() >= 0.5;
        },
        bool: function bool(min, max, cur) {
          return this.boolean(min, max, cur);
        },
        // 返回一个随机的自然数（大于等于 0 的整数）。
        natural: function natural(min, max) {
          min = typeof min !== 'undefined' ? parseInt(min, 10) : 0;
          max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992; // 2^53
          return Math.round(Math.random() * (max - min)) + min;
        },
        // 返回一个随机的整数。
        integer: function integer(min, max) {
          min = typeof min !== 'undefined' ? parseInt(min, 10) : -9007199254740992;
          max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992; // 2^53
          return Math.round(Math.random() * (max - min)) + min;
        },
        int: function int(min, max) {
          return this.integer(min, max);
        },
        // 返回一个随机的浮点数。
        float: function float(min, max, dmin, dmax) {
          dmin = dmin === undefined ? 0 : dmin;
          dmin = Math.max(Math.min(dmin, 17), 0);
          dmax = dmax === undefined ? 17 : dmax;
          dmax = Math.max(Math.min(dmax, 17), 0);
          var ret = this.integer(min, max) + '.';
          for (var i = 0, dcount = this.natural(dmin, dmax); i < dcount; i++) {
            ret +=
            // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
            i < dcount - 1 ? this.character('number') : this.character('123456789');
          }
          return parseFloat(ret, 10);
        },
        // 返回一个随机字符。
        character: function character(pool) {
          var pools = {
            lower: 'abcdefghijklmnopqrstuvwxyz',
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            number: '0123456789',
            symbol: '!@#$%^&*()[]'
          };
          pools.alpha = pools.lower + pools.upper;
          pools['undefined'] = pools.lower + pools.upper + pools.number + pools.symbol;
          pool = pools[('' + pool).toLowerCase()] || pool;
          return pool.charAt(this.natural(0, pool.length - 1));
        },
        char: function char(pool) {
          return this.character(pool);
        },
        // 返回一个随机字符串。
        string: function string(pool, min, max) {
          var len;
          switch (arguments.length) {
            case 0:
              // ()
              len = this.natural(3, 7);
              break;
            case 1:
              // ( length )
              len = pool;
              pool = undefined;
              break;
            case 2:
              // ( pool, length )
              if (typeof arguments[0] === 'string') {
                len = min;
              } else {
                // ( min, max )
                len = this.natural(pool, min);
                pool = undefined;
              }
              break;
            case 3:
              len = this.natural(min, max);
              break;
          }
          var text = '';
          for (var i = 0; i < len; i++) {
            text += this.character(pool);
          }
          return text;
        },
        str: function str( /*pool, min, max*/
        ) {
          return this.string.apply(this, arguments);
        },
        // 返回一个整型数组。
        range: function range(start, stop, step) {
          // range( stop )
          if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
          }
          // range( start, stop )
          step = arguments[2] || 1;
          start = +start;
          stop = +stop;
          step = +step;
          var len = Math.max(Math.ceil((stop - start) / step), 0);
          var idx = 0;
          var range = new Array(len);
          while (idx < len) {
            range[idx++] = start;
            start += step;
          }
          return range;
        }
      };

      /***/
    }, /* 7 */
    /***/function (module, exports) {
      /*
          ## Date
      */
      var patternLetters = {
        yyyy: 'getFullYear',
        yy: function yy(date) {
          return ('' + date.getFullYear()).slice(2);
        },
        y: 'yy',
        MM: function MM(date) {
          var m = date.getMonth() + 1;
          return m < 10 ? '0' + m : m;
        },
        M: function M(date) {
          return date.getMonth() + 1;
        },
        dd: function dd(date) {
          var d = date.getDate();
          return d < 10 ? '0' + d : d;
        },
        d: 'getDate',
        HH: function HH(date) {
          var h = date.getHours();
          return h < 10 ? '0' + h : h;
        },
        H: 'getHours',
        hh: function hh(date) {
          var h = date.getHours() % 12;
          return h < 10 ? '0' + h : h;
        },
        h: function h(date) {
          return date.getHours() % 12;
        },
        mm: function mm(date) {
          var m = date.getMinutes();
          return m < 10 ? '0' + m : m;
        },
        m: 'getMinutes',
        ss: function ss(date) {
          var s = date.getSeconds();
          return s < 10 ? '0' + s : s;
        },
        s: 'getSeconds',
        SS: function SS(date) {
          var ms = date.getMilliseconds();
          return ms < 10 && '00' + ms || ms < 100 && '0' + ms || ms;
        },
        S: 'getMilliseconds',
        A: function A(date) {
          return date.getHours() < 12 ? 'AM' : 'PM';
        },
        a: function a(date) {
          return date.getHours() < 12 ? 'am' : 'pm';
        },
        T: 'getTime'
      };
      module.exports = {
        // 日期占位符集合。
        _patternLetters: patternLetters,
        // 日期占位符正则。
        _rformat: new RegExp(function () {
          var re = [];
          for (var i in patternLetters) {
            re.push(i);
          }
          return '(' + re.join('|') + ')';
        }(), 'g'),
        // 格式化日期。
        _formatDate: function _formatDate(date, format) {
          return format.replace(this._rformat, function creatNewSubString($0, flag) {
            return typeof patternLetters[flag] === 'function' ? patternLetters[flag](date) : patternLetters[flag] in patternLetters ? creatNewSubString($0, patternLetters[flag]) : date[patternLetters[flag]]();
          });
        },
        // 生成一个随机的 Date 对象。
        _randomDate: function _randomDate(min, max) {
          // min, max
          min = min === undefined ? new Date(0) : min;
          max = max === undefined ? new Date() : max;
          return new Date(Math.random() * (max.getTime() - min.getTime()));
        },
        // 返回一个随机的日期字符串。
        date: function date(format) {
          format = format || 'yyyy-MM-dd';
          return this._formatDate(this._randomDate(), format);
        },
        // 返回一个随机的时间字符串。
        time: function time(format) {
          format = format || 'HH:mm:ss';
          return this._formatDate(this._randomDate(), format);
        },
        // 返回一个随机的日期和时间字符串。
        datetime: function datetime(format) {
          format = format || 'yyyy-MM-dd HH:mm:ss';
          return this._formatDate(this._randomDate(), format);
        },
        // 返回当前的日期和时间字符串。
        now: function now(unit, format) {
          // now(unit) now(format)
          if (arguments.length === 1) {
            // now(format)
            if (!/year|month|day|hour|minute|second|week/.test(unit)) {
              format = unit;
              unit = '';
            }
          }
          unit = (unit || '').toLowerCase();
          format = format || 'yyyy-MM-dd HH:mm:ss';
          var date = new Date();

          /* jshint -W086 */
          // 参考自 http://momentjs.cn/docs/#/manipulating/start-of/
          switch (unit) {
            case 'year':
              date.setMonth(0);
            case 'month':
              date.setDate(1);
            case 'week':
            case 'day':
              date.setHours(0);
            case 'hour':
              date.setMinutes(0);
            case 'minute':
              date.setSeconds(0);
            case 'second':
              date.setMilliseconds(0);
          }
          switch (unit) {
            case 'week':
              date.setDate(date.getDate() - date.getDay());
          }
          return this._formatDate(date, format);
        }
      };

      /***/
    }, /* 8 */
    /***/function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (module) {
        /* global document  */
        /*
            ## Image
        */
        module.exports = {
          // 常见的广告宽高
          _adSize: ['300x250', '250x250', '240x400', '336x280', '180x150', '720x300', '468x60', '234x60', '88x31', '120x90', '120x60', '120x240', '125x125', '728x90', '160x600', '120x600', '300x600'],
          // 常见的屏幕宽高
          _screenSize: ['320x200', '320x240', '640x480', '800x480', '800x480', '1024x600', '1024x768', '1280x800', '1440x900', '1920x1200', '2560x1600'],
          // 常见的视频宽高
          _videoSize: ['720x480', '768x576', '1280x720', '1920x1080'],
          /*
              生成一个随机的图片地址。
                替代图片源
                  http://fpoimg.com/
              参考自 
                  http://rensanning.iteye.com/blog/1933310
                  http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
          */
          image: function image(size, background, foreground, format, text) {
            // Random.image( size, background, foreground, text )
            if (arguments.length === 4) {
              text = format;
              format = undefined;
            }
            // Random.image( size, background, text )
            if (arguments.length === 3) {
              text = foreground;
              foreground = undefined;
            }
            // Random.image()
            if (!size) size = this.pick(this._adSize);
            if (background && ~background.indexOf('#')) background = background.slice(1);
            if (foreground && ~foreground.indexOf('#')) foreground = foreground.slice(1);

            // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
            return 'http://dummyimage.com/' + size + (background ? '/' + background : '') + (foreground ? '/' + foreground : '') + (format ? '.' + format : '') + (text ? '&text=' + text : '');
          },
          img: function img() {
            return this.image.apply(this, arguments);
          },
          /*
              BrandColors
              http://brandcolors.net/
              A collection of major brand color codes curated by Galen Gidman.
              大牌公司的颜色集合
                // 获取品牌和颜色
              $('h2').each(function(index, item){
                  item = $(item)
                  console.log('\'' + item.text() + '\'', ':', '\'' + item.next().text() + '\'', ',')
              })
          */
          _brandColors: {
            '4ormat': '#fb0a2a',
            '500px': '#02adea',
            'About.me (blue)': '#00405d',
            'About.me (yellow)': '#ffcc33',
            'Addvocate': '#ff6138',
            'Adobe': '#ff0000',
            'Aim': '#fcd20b',
            'Amazon': '#e47911',
            'Android': '#a4c639',
            'Angie\'s List': '#7fbb00',
            'AOL': '#0060a3',
            'Atlassian': '#003366',
            'Behance': '#053eff',
            'Big Cartel': '#97b538',
            'bitly': '#ee6123',
            'Blogger': '#fc4f08',
            'Boeing': '#0039a6',
            'Booking.com': '#003580',
            'Carbonmade': '#613854',
            'Cheddar': '#ff7243',
            'Code School': '#3d4944',
            'Delicious': '#205cc0',
            'Dell': '#3287c1',
            'Designmoo': '#e54a4f',
            'Deviantart': '#4e6252',
            'Designer News': '#2d72da',
            'Devour': '#fd0001',
            'DEWALT': '#febd17',
            'Disqus (blue)': '#59a3fc',
            'Disqus (orange)': '#db7132',
            'Dribbble': '#ea4c89',
            'Dropbox': '#3d9ae8',
            'Drupal': '#0c76ab',
            'Dunked': '#2a323a',
            'eBay': '#89c507',
            'Ember': '#f05e1b',
            'Engadget': '#00bdf6',
            'Envato': '#528036',
            'Etsy': '#eb6d20',
            'Evernote': '#5ba525',
            'Fab.com': '#dd0017',
            'Facebook': '#3b5998',
            'Firefox': '#e66000',
            'Flickr (blue)': '#0063dc',
            'Flickr (pink)': '#ff0084',
            'Forrst': '#5b9a68',
            'Foursquare': '#25a0ca',
            'Garmin': '#007cc3',
            'GetGlue': '#2d75a2',
            'Gimmebar': '#f70078',
            'GitHub': '#171515',
            'Google Blue': '#0140ca',
            'Google Green': '#16a61e',
            'Google Red': '#dd1812',
            'Google Yellow': '#fcca03',
            'Google+': '#dd4b39',
            'Grooveshark': '#f77f00',
            'Groupon': '#82b548',
            'Hacker News': '#ff6600',
            'HelloWallet': '#0085ca',
            'Heroku (light)': '#c7c5e6',
            'Heroku (dark)': '#6567a5',
            'HootSuite': '#003366',
            'Houzz': '#73ba37',
            'HTML5': '#ec6231',
            'IKEA': '#ffcc33',
            'IMDb': '#f3ce13',
            'Instagram': '#3f729b',
            'Intel': '#0071c5',
            'Intuit': '#365ebf',
            'Kickstarter': '#76cc1e',
            'kippt': '#e03500',
            'Kodery': '#00af81',
            'LastFM': '#c3000d',
            'LinkedIn': '#0e76a8',
            'Livestream': '#cf0005',
            'Lumo': '#576396',
            'Mixpanel': '#a086d3',
            'Meetup': '#e51937',
            'Nokia': '#183693',
            'NVIDIA': '#76b900',
            'Opera': '#cc0f16',
            'Path': '#e41f11',
            'PayPal (dark)': '#1e477a',
            'PayPal (light)': '#3b7bbf',
            'Pinboard': '#0000e6',
            'Pinterest': '#c8232c',
            'PlayStation': '#665cbe',
            'Pocket': '#ee4056',
            'Prezi': '#318bff',
            'Pusha': '#0f71b4',
            'Quora': '#a82400',
            'QUOTE.fm': '#66ceff',
            'Rdio': '#008fd5',
            'Readability': '#9c0000',
            'Red Hat': '#cc0000',
            'Resource': '#7eb400',
            'Rockpack': '#0ba6ab',
            'Roon': '#62b0d9',
            'RSS': '#ee802f',
            'Salesforce': '#1798c1',
            'Samsung': '#0c4da2',
            'Shopify': '#96bf48',
            'Skype': '#00aff0',
            'Snagajob': '#f47a20',
            'Softonic': '#008ace',
            'SoundCloud': '#ff7700',
            'Space Box': '#f86960',
            'Spotify': '#81b71a',
            'Sprint': '#fee100',
            'Squarespace': '#121212',
            'StackOverflow': '#ef8236',
            'Staples': '#cc0000',
            'Status Chart': '#d7584f',
            'Stripe': '#008cdd',
            'StudyBlue': '#00afe1',
            'StumbleUpon': '#f74425',
            'T-Mobile': '#ea0a8e',
            'Technorati': '#40a800',
            'The Next Web': '#ef4423',
            'Treehouse': '#5cb868',
            'Trulia': '#5eab1f',
            'Tumblr': '#34526f',
            'Twitch.tv': '#6441a5',
            'Twitter': '#00acee',
            'TYPO3': '#ff8700',
            'Ubuntu': '#dd4814',
            'Ustream': '#3388ff',
            'Verizon': '#ef1d1d',
            'Vimeo': '#86c9ef',
            'Vine': '#00a478',
            'Virb': '#06afd8',
            'Virgin Media': '#cc0000',
            'Wooga': '#5b009c',
            'WordPress (blue)': '#21759b',
            'WordPress (orange)': '#d54e21',
            'WordPress (grey)': '#464646',
            'Wunderlist': '#2b88d9',
            'XBOX': '#9bc848',
            'XING': '#126567',
            'Yahoo!': '#720e9e',
            'Yandex': '#ffcc00',
            'Yelp': '#c41200',
            'YouTube': '#c4302b',
            'Zalongo': '#5498dc',
            'Zendesk': '#78a300',
            'Zerply': '#9dcc7a',
            'Zootool': '#5e8b1d'
          },
          _brandNames: function _brandNames() {
            var brands = [];
            for (var b in this._brandColors) {
              brands.push(b);
            }
            return brands;
          },
          /*
              生成一段随机的 Base64 图片编码。
                https://github.com/imsky/holder
              Holder renders image placeholders entirely on the client side.
                dataImageHolder: function(size) {
                  return 'holder.js/' + size
              },
          */
          dataImage: function dataImage(size, text) {
            var canvas;
            if (typeof document !== 'undefined') {
              canvas = document.createElement('canvas');
            } else {
              /*
                  https://github.com/Automattic/node-canvas
                      npm install canvas --save
                  安装问题：
                  * http://stackoverflow.com/questions/22953206/gulp-issues-with-cario-install-command-not-found-when-trying-to-installing-canva
                  * https://github.com/Automattic/node-canvas/issues/415
                  * https://github.com/Automattic/node-canvas/wiki/_pages
                    PS：node-canvas 的安装过程实在是太繁琐了，所以不放入 package.json 的 dependencies。
               */
              var Canvas = module.require('canvas');
              canvas = new Canvas();
            }
            var ctx = canvas && canvas.getContext && canvas.getContext("2d");
            if (!canvas || !ctx) return '';
            if (!size) size = this.pick(this._adSize);
            text = text !== undefined ? text : size;
            size = size.split('x');
            var width = parseInt(size[0], 10),
              height = parseInt(size[1], 10),
              background = this._brandColors[this.pick(this._brandNames())],
              foreground = '#FFF',
              text_height = 14,
              font = 'sans-serif';
            canvas.width = width;
            canvas.height = height;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = foreground;
            ctx.font = 'bold ' + text_height + 'px ' + font;
            ctx.fillText(text, width / 2, height / 2, width);
            return canvas.toDataURL('image/png');
          }
        };
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(9)(module));

      /***/
    }, /* 9 */
    /***/function (module, exports) {
      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};
          module.paths = [];
          // module.parent = undefined by default
          module.children = [];
          module.webpackPolyfill = 1;
        }
        return module;
      };

      /***/
    }, /* 10 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## Color
      
          http://llllll.li/randomColor/
              A color generator for JavaScript.
              randomColor generates attractive colors by default. More specifically, randomColor produces bright colors with a reasonably high saturation. This makes randomColor particularly useful for data visualizations and generative art.
      
          http://randomcolour.com/
              var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
              bg_colour = "#" + ("000000" + bg_colour).slice(-6);
              document.bgColor = bg_colour;
          
          http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
              Creating random colors is actually more difficult than it seems. The randomness itself is easy, but aesthetically pleasing randomness is more difficult.
              https://github.com/devongovett/color-generator
      
          http://www.paulirish.com/2009/random-hex-color-code-snippets/
              Random Hex Color Code Generator in JavaScript
      
          http://chancejs.com/#color
              chance.color()
              // => '#79c157'
              chance.color({format: 'hex'})
              // => '#d67118'
              chance.color({format: 'shorthex'})
              // => '#60f'
              chance.color({format: 'rgb'})
              // => 'rgb(110,52,164)'
      
          http://tool.c7sky.com/webcolor
              网页设计常用色彩搭配表
          
          https://github.com/One-com/one-color
              An OO-based JavaScript color parser/computation toolkit with support for RGB, HSV, HSL, CMYK, and alpha channels.
              API 很赞
      
          https://github.com/harthur/color
              JavaScript color conversion and manipulation library
      
          https://github.com/leaverou/css-colors
              Share & convert CSS colors
          http://leaverou.github.io/css-colors/#slategray
              Type a CSS color keyword, #hex, hsl(), rgba(), whatever:
      
          色调 hue
              http://baike.baidu.com/view/23368.htm
              色调指的是一幅画中画面色彩的总体倾向，是大的色彩效果。
          饱和度 saturation
              http://baike.baidu.com/view/189644.htm
              饱和度是指色彩的鲜艳程度，也称色彩的纯度。饱和度取决于该色中含色成分和消色成分（灰色）的比例。含色成分越大，饱和度越大；消色成分越大，饱和度越小。
          亮度 brightness
              http://baike.baidu.com/view/34773.htm
              亮度是指发光体（反光体）表面发光（反光）强弱的物理量。
          照度 luminosity
              物体被照亮的程度,采用单位面积所接受的光通量来表示,表示单位为勒[克斯](Lux,lx) ,即 1m / m2 。
      
          http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
              var letters = '0123456789ABCDEF'.split('')
              var color = '#'
              for (var i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)]
              }
              return color
          
              // 随机生成一个无脑的颜色，格式为 '#RRGGBB'。
              // _brainlessColor()
              var color = Math.floor(
                  Math.random() *
                  (16 * 16 * 16 * 16 * 16 * 16 - 1)
              ).toString(16)
              color = "#" + ("000000" + color).slice(-6)
              return color.toUpperCase()
      */

      var Convert = __webpack_require__(11);
      var DICT = __webpack_require__(12);
      module.exports = {
        // 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
        color: function color(name) {
          if (name || DICT[name]) return DICT[name].nicer;
          return this.hex();
        },
        // #DAC0DE
        hex: function hex() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          var hex = Convert.rgb2hex(rgb[0], rgb[1], rgb[2]);
          return hex;
        },
        // rgb(128,255,255)
        rgb: function rgb() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          return 'rgb(' + parseInt(rgb[0], 10) + ', ' + parseInt(rgb[1], 10) + ', ' + parseInt(rgb[2], 10) + ')';
        },
        // rgba(128,255,255,0.3)
        rgba: function rgba() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          return 'rgba(' + parseInt(rgb[0], 10) + ', ' + parseInt(rgb[1], 10) + ', ' + parseInt(rgb[2], 10) + ', ' + Math.random().toFixed(2) + ')';
        },
        // hsl(300,80%,90%)
        hsl: function hsl() {
          var hsv = this._goldenRatioColor();
          var hsl = Convert.hsv2hsl(hsv);
          return 'hsl(' + parseInt(hsl[0], 10) + ', ' + parseInt(hsl[1], 10) + ', ' + parseInt(hsl[2], 10) + ')';
        },
        // http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
        // https://github.com/devongovett/color-generator/blob/master/index.js
        // 随机生成一个有吸引力的颜色。
        _goldenRatioColor: function _goldenRatioColor(saturation, value) {
          this._goldenRatio = 0.618033988749895;
          this._hue = this._hue || Math.random();
          this._hue += this._goldenRatio;
          this._hue %= 1;
          if (typeof saturation !== "number") saturation = 0.5;
          if (typeof value !== "number") value = 0.95;
          return [this._hue * 360, saturation * 100, value * 100];
        }
      };

      /***/
    }, /* 11 */
    /***/function (module, exports) {
      /*
          ## Color Convert
      
          http://blog.csdn.net/idfaya/article/details/6770414
              颜色空间RGB与HSV(HSL)的转换
      */
      // https://github.com/harthur/color-convert/blob/master/conversions.js
      module.exports = {
        rgb2hsl: function rgb2hsl(rgb) {
          var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h,
            s,
            l;
          if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;
          h = Math.min(h * 60, 360);
          if (h < 0) h += 360;
          l = (min + max) / 2;
          if (max == min) s = 0;else if (l <= 0.5) s = delta / (max + min);else s = delta / (2 - max - min);
          return [h, s * 100, l * 100];
        },
        rgb2hsv: function rgb2hsv(rgb) {
          var r = rgb[0],
            g = rgb[1],
            b = rgb[2],
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h,
            s,
            v;
          if (max === 0) s = 0;else s = delta / max * 1000 / 10;
          if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;
          h = Math.min(h * 60, 360);
          if (h < 0) h += 360;
          v = max / 255 * 1000 / 10;
          return [h, s, v];
        },
        hsl2rgb: function hsl2rgb(hsl) {
          var h = hsl[0] / 360,
            s = hsl[1] / 100,
            l = hsl[2] / 100,
            t1,
            t2,
            t3,
            rgb,
            val;
          if (s === 0) {
            val = l * 255;
            return [val, val, val];
          }
          if (l < 0.5) t2 = l * (1 + s);else t2 = l + s - l * s;
          t1 = 2 * l - t2;
          rgb = [0, 0, 0];
          for (var i = 0; i < 3; i++) {
            t3 = h + 1 / 3 * -(i - 1);
            if (t3 < 0) t3++;
            if (t3 > 1) t3--;
            if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;else if (2 * t3 < 1) val = t2;else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;else val = t1;
            rgb[i] = val * 255;
          }
          return rgb;
        },
        hsl2hsv: function hsl2hsv(hsl) {
          var h = hsl[0],
            s = hsl[1] / 100,
            l = hsl[2] / 100,
            sv,
            v;
          l *= 2;
          s *= l <= 1 ? l : 2 - l;
          v = (l + s) / 2;
          sv = 2 * s / (l + s);
          return [h, sv * 100, v * 100];
        },
        hsv2rgb: function hsv2rgb(hsv) {
          var h = hsv[0] / 60;
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var hi = Math.floor(h) % 6;
          var f = h - Math.floor(h);
          var p = 255 * v * (1 - s);
          var q = 255 * v * (1 - s * f);
          var t = 255 * v * (1 - s * (1 - f));
          v = 255 * v;
          switch (hi) {
            case 0:
              return [v, t, p];
            case 1:
              return [q, v, p];
            case 2:
              return [p, v, t];
            case 3:
              return [p, q, v];
            case 4:
              return [t, p, v];
            case 5:
              return [v, p, q];
          }
        },
        hsv2hsl: function hsv2hsl(hsv) {
          var h = hsv[0],
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            sl,
            l;
          l = (2 - s) * v;
          sl = s * v;
          sl /= l <= 1 ? l : 2 - l;
          l /= 2;
          return [h, sl * 100, l * 100];
        },
        // http://www.140byt.es/keywords/color
        rgb2hex: function rgb2hex(a,
        // red, as a number from 0 to 255
        b,
        // green, as a number from 0 to 255
        c // blue, as a number from 0 to 255
        ) {
          return "#" + ((256 + a << 8 | b) << 8 | c).toString(16).slice(1);
        },
        hex2rgb: function hex2rgb(a // take a "#xxxxxx" hex string,
        ) {
          a = '0x' + a.slice(1).replace(a.length > 4 ? a : /./g, '$&$&') | 0;
          return [a >> 16, a >> 8 & 255, a & 255];
        }
      };

      /***/
    }, /* 12 */
    /***/function (module, exports) {
      /*
          ## Color 字典数据
      
          字典数据来源 [A nicer color palette for the web](http://clrs.cc/)
      */
      module.exports = {
        // name value nicer
        navy: {
          value: '#000080',
          nicer: '#001F3F'
        },
        blue: {
          value: '#0000ff',
          nicer: '#0074D9'
        },
        aqua: {
          value: '#00ffff',
          nicer: '#7FDBFF'
        },
        teal: {
          value: '#008080',
          nicer: '#39CCCC'
        },
        olive: {
          value: '#008000',
          nicer: '#3D9970'
        },
        green: {
          value: '#008000',
          nicer: '#2ECC40'
        },
        lime: {
          value: '#00ff00',
          nicer: '#01FF70'
        },
        yellow: {
          value: '#ffff00',
          nicer: '#FFDC00'
        },
        orange: {
          value: '#ffa500',
          nicer: '#FF851B'
        },
        red: {
          value: '#ff0000',
          nicer: '#FF4136'
        },
        maroon: {
          value: '#800000',
          nicer: '#85144B'
        },
        fuchsia: {
          value: '#ff00ff',
          nicer: '#F012BE'
        },
        purple: {
          value: '#800080',
          nicer: '#B10DC9'
        },
        silver: {
          value: '#c0c0c0',
          nicer: '#DDDDDD'
        },
        gray: {
          value: '#808080',
          nicer: '#AAAAAA'
        },
        black: {
          value: '#000000',
          nicer: '#111111'
        },
        white: {
          value: '#FFFFFF',
          nicer: '#FFFFFF'
        }
      };

      /***/
    }, /* 13 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## Text
      
          http://www.lipsum.com/
      */
      var Basic = __webpack_require__(6);
      var Helper = __webpack_require__(14);
      function range(defaultMin, defaultMax, min, max) {
        return min === undefined ? Basic.natural(defaultMin, defaultMax) :
        // ()
        max === undefined ? min :
        // ( len )
        Basic.natural(parseInt(min, 10), parseInt(max, 10)); // ( min, max )
      }

      module.exports = {
        // 随机生成一段文本。
        paragraph: function paragraph(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.sentence());
          }
          return result.join(' ');
        },
        // 
        cparagraph: function cparagraph(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.csentence());
          }
          return result.join('');
        },
        // 随机生成一个句子，第一个单词的首字母大写。
        sentence: function sentence(min, max) {
          var len = range(12, 18, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.word());
          }
          return Helper.capitalize(result.join(' ')) + '.';
        },
        // 随机生成一个中文句子。
        csentence: function csentence(min, max) {
          var len = range(12, 18, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.cword());
          }
          return result.join('') + '。';
        },
        // 随机生成一个单词。
        word: function word(min, max) {
          var len = range(3, 10, min, max);
          var result = '';
          for (var i = 0; i < len; i++) {
            result += Basic.character('lower');
          }
          return result;
        },
        // 随机生成一个或多个汉字。
        cword: function cword(pool, min, max) {
          // 最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
          var DICT_KANZI = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞';
          var len;
          switch (arguments.length) {
            case 0:
              // ()
              pool = DICT_KANZI;
              len = 1;
              break;
            case 1:
              // ( pool )
              if (typeof arguments[0] === 'string') {
                len = 1;
              } else {
                // ( length )
                len = pool;
                pool = DICT_KANZI;
              }
              break;
            case 2:
              // ( pool, length )
              if (typeof arguments[0] === 'string') {
                len = min;
              } else {
                // ( min, max )
                len = this.natural(pool, min);
                pool = DICT_KANZI;
              }
              break;
            case 3:
              len = this.natural(min, max);
              break;
          }
          var result = '';
          for (var i = 0; i < len; i++) {
            result += pool.charAt(this.natural(0, pool.length - 1));
          }
          return result;
        },
        // 随机生成一句标题，其中每个单词的首字母大写。
        title: function title(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.capitalize(this.word()));
          }
          return result.join(' ');
        },
        // 随机生成一句中文标题。
        ctitle: function ctitle(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.cword());
          }
          return result.join('');
        }
      };

      /***/
    }, /* 14 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## Helpers
      */

      var Util = __webpack_require__(3);
      module.exports = {
        // 把字符串的第一个字母转换为大写。
        capitalize: function capitalize(word) {
          return (word + '').charAt(0).toUpperCase() + (word + '').substr(1);
        },
        // 把字符串转换为大写。
        upper: function upper(str) {
          return (str + '').toUpperCase();
        },
        // 把字符串转换为小写。
        lower: function lower(str) {
          return (str + '').toLowerCase();
        },
        // 从数组中随机选取一个元素，并返回。
        pick: function pick(arr, min, max) {
          // pick( item1, item2 ... )
          if (!Util.isArray(arr)) {
            arr = [].slice.call(arguments);
            min = 1;
            max = 1;
          } else {
            // pick( [ item1, item2 ... ] )
            if (min === undefined) min = 1;

            // pick( [ item1, item2 ... ], count )
            if (max === undefined) max = min;
          }
          if (min === 1 && max === 1) return arr[this.natural(0, arr.length - 1)];

          // pick( [ item1, item2 ... ], min, max )
          return this.shuffle(arr, min, max);

          // 通过参数个数判断方法签名，扩展性太差！#90
          // switch (arguments.length) {
          // 	case 1:
          // 		// pick( [ item1, item2 ... ] )
          // 		return arr[this.natural(0, arr.length - 1)]
          // 	case 2:
          // 		// pick( [ item1, item2 ... ], count )
          // 		max = min
          // 			/* falls through */
          // 	case 3:
          // 		// pick( [ item1, item2 ... ], min, max )
          // 		return this.shuffle(arr, min, max)
          // }
        },

        /*
            打乱数组中元素的顺序，并返回。
            Given an array, scramble the order and return it.
        		    其他的实现思路：
                // https://code.google.com/p/jslibs/wiki/JavascriptTips
                result = result.sort(function() {
                    return Math.random() - 0.5
                })
        */
        shuffle: function shuffle(arr, min, max) {
          arr = arr || [];
          var old = arr.slice(0),
            result = [],
            index = 0,
            length = old.length;
          for (var i = 0; i < length; i++) {
            index = this.natural(0, old.length - 1);
            result.push(old[index]);
            old.splice(index, 1);
          }
          switch (arguments.length) {
            case 0:
            case 1:
              return result;
            case 2:
              max = min;
            /* falls through */
            case 3:
              min = parseInt(min, 10);
              max = parseInt(max, 10);
              return result.slice(0, this.natural(min, max));
          }
        },
        /*
            * Random.order(item, item)
            * Random.order([item, item ...])
        		    顺序获取数组中的元素
        		    [JSON导入数组支持数组数据录入](https://github.com/thx/RAP/issues/22)
        		    不支持单独调用！
        */
        order: function order(array) {
          order.cache = order.cache || {};
          if (arguments.length > 1) array = [].slice.call(arguments, 0);

          // options.context.path/templatePath
          var options = order.options;
          var templatePath = options.context.templatePath.join('.');
          var cache = order.cache[templatePath] = order.cache[templatePath] || {
            index: 0,
            array: array
          };
          return cache.array[cache.index++ % cache.array.length];
        }
      };

      /***/
    }, /* 15 */
    /***/function (module, exports) {
      /*
          ## Name
      
          [Beyond the Top 1000 Names](http://www.ssa.gov/oact/babynames/limits.html)
      */
      module.exports = {
        // 随机生成一个常见的英文名。
        first: function first() {
          var names = [
          // male
          "James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward", "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Matthew", "Gary", "Timothy", "Jose", "Larry", "Jeffrey", "Frank", "Scott", "Eric"].concat([
          // female
          "Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura", "Sarah", "Kimberly", "Deborah", "Jessica", "Shirley", "Cynthia", "Angela", "Melissa", "Brenda", "Amy", "Anna"]);
          return this.pick(names);
          // or this.capitalize(this.word())
        },

        // 随机生成一个常见的英文姓。
        last: function last() {
          var names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen"];
          return this.pick(names);
          // or this.capitalize(this.word())
        },

        // 随机生成一个常见的英文姓名。
        name: function name(middle) {
          return this.first() + ' ' + (middle ? this.first() + ' ' : '') + this.last();
        },
        /*
            随机生成一个常见的中文姓。
            [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
            [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
         */
        cfirst: function cfirst() {
          var names = ('王 李 张 刘 陈 杨 赵 黄 周 吴 ' + '徐 孙 胡 朱 高 林 何 郭 马 罗 ' + '梁 宋 郑 谢 韩 唐 冯 于 董 萧 ' + '程 曹 袁 邓 许 傅 沈 曾 彭 吕 ' + '苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 ' + '余 潘 杜 戴 夏 锺 汪 田 任 姜 ' + '范 方 石 姚 谭 廖 邹 熊 金 陆 ' + '郝 孔 白 崔 康 毛 邱 秦 江 史 ' + '顾 侯 邵 孟 龙 万 段 雷 钱 汤 ' + '尹 黎 易 常 武 乔 贺 赖 龚 文').split(' ');
          return this.pick(names);
        },
        /*
            随机生成一个常见的中文名。
            [中国最常见名字前50名_三九算命网](http://www.name999.net/xingming/xingshi/20131004/48.html)
         */
        clast: function clast() {
          var names = ('伟 芳 娜 秀英 敏 静 丽 强 磊 军 ' + '洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 ' + '平 刚 桂英').split(' ');
          return this.pick(names);
        },
        // 随机生成一个常见的中文姓名。
        cname: function cname() {
          return this.cfirst() + this.clast();
        }
      };

      /***/
    }, /* 16 */
    /***/function (module, exports) {
      /*
          ## Web
      */
      module.exports = {
        /*
            随机生成一个 URL。
              [URL 规范](http://www.w3.org/Addressing/URL/url-spec.txt)
                http                    Hypertext Transfer Protocol 
                ftp                     File Transfer protocol 
                gopher                  The Gopher protocol 
                mailto                  Electronic mail address 
                mid                     Message identifiers for electronic mail 
                cid                     Content identifiers for MIME body part 
                news                    Usenet news 
                nntp                    Usenet news for local NNTP access only 
                prospero                Access using the prospero protocols 
                telnet rlogin tn3270    Reference to interactive sessions
                wais                    Wide Area Information Servers 
        */
        url: function url(protocol, host) {
          return (protocol || this.protocol()) + '://' + (
          // protocol?
          host || this.domain()) +
          // host?
          '/' + this.word();
        },
        // 随机生成一个 URL 协议。
        protocol: function protocol() {
          return this.pick(
          // 协议簇
          'http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais'.split(' '));
        },
        // 随机生成一个域名。
        domain: function domain(tld) {
          return this.word() + '.' + (tld || this.tld());
        },
        /*
            随机生成一个顶级域名。
            国际顶级域名 international top-level domain-names, iTLDs
            国家顶级域名 national top-level domainnames, nTLDs
            [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
        */
        tld: function tld() {
          // Top Level Domain
          return this.pick((
          // 域名后缀
          'com net org edu gov int mil cn ' +
          // 国内域名
          'com.cn net.cn gov.cn org.cn ' +
          // 中文国内域名
          '中国 中国互联.公司 中国互联.网络 ' +
          // 新国际域名
          'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' +
          // 世界各国域名后缀
          'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw').split(' '));
        },
        // 随机生成一个邮件地址。
        email: function email(domain) {
          return this.character('lower') + '.' + this.word() + '@' + (domain || this.word() + '.' + this.tld());
          // return this.character('lower') + '.' + this.last().toLowerCase() + '@' + this.last().toLowerCase() + '.' + this.tld()
          // return this.word() + '@' + (domain || this.domain())
        },

        // 随机生成一个 IP 地址。
        ip: function ip() {
          return this.natural(0, 255) + '.' + this.natural(0, 255) + '.' + this.natural(0, 255) + '.' + this.natural(0, 255);
        }
      };

      /***/
    }, /* 17 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## Address
      */

      var DICT = __webpack_require__(18);
      var REGION = ['东北', '华北', '华东', '华中', '华南', '西南', '西北'];
      module.exports = {
        // 随机生成一个大区。
        region: function region() {
          return this.pick(REGION);
        },
        // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
        province: function province() {
          return this.pick(DICT).name;
        },
        // 随机生成一个（中国）市。
        city: function city(prefix) {
          var province = this.pick(DICT);
          var city = this.pick(province.children);
          return prefix ? [province.name, city.name].join(' ') : city.name;
        },
        // 随机生成一个（中国）县。
        county: function county(prefix) {
          var province = this.pick(DICT);
          var city = this.pick(province.children);
          var county = this.pick(city.children) || {
            name: '-'
          };
          return prefix ? [province.name, city.name, county.name].join(' ') : county.name;
        },
        // 随机生成一个邮政编码（六位数字）。
        zip: function zip(len) {
          var zip = '';
          for (var i = 0; i < (len || 6); i++) {
            zip += this.natural(0, 9);
          }
          return zip;
        }

        // address: function() {},
        // phone: function() {},
        // areacode: function() {},
        // street: function() {},
        // street_suffixes: function() {},
        // street_suffix: function() {},
        // states: function() {},
        // state: function() {},
      };

      /***/
    }, /* 18 */
    /***/function (module, exports) {
      /*
          ## Address 字典数据
      
          字典数据来源 http://www.atatech.org/articles/30028?rnd=254259856
      
          国标 省（市）级行政区划码表
      
          华北   北京市 天津市 河北省 山西省 内蒙古自治区
          东北   辽宁省 吉林省 黑龙江省
          华东   上海市 江苏省 浙江省 安徽省 福建省 江西省 山东省
          华南   广东省 广西壮族自治区 海南省
          华中   河南省 湖北省 湖南省
          西南   重庆市 四川省 贵州省 云南省 西藏自治区
          西北   陕西省 甘肃省 青海省 宁夏回族自治区 新疆维吾尔自治区
          港澳台 香港特别行政区 澳门特别行政区 台湾省
          
          **排序**
          
          ```js
          var map = {}
          _.each(_.keys(REGIONS),function(id){
            map[id] = REGIONS[ID]
          })
          JSON.stringify(map)
          ```
      */
      var DICT = {
        "110000": "北京",
        "110100": "北京市",
        "110101": "东城区",
        "110102": "西城区",
        "110105": "朝阳区",
        "110106": "丰台区",
        "110107": "石景山区",
        "110108": "海淀区",
        "110109": "门头沟区",
        "110111": "房山区",
        "110112": "通州区",
        "110113": "顺义区",
        "110114": "昌平区",
        "110115": "大兴区",
        "110116": "怀柔区",
        "110117": "平谷区",
        "110228": "密云县",
        "110229": "延庆县",
        "110230": "其它区",
        "120000": "天津",
        "120100": "天津市",
        "120101": "和平区",
        "120102": "河东区",
        "120103": "河西区",
        "120104": "南开区",
        "120105": "河北区",
        "120106": "红桥区",
        "120110": "东丽区",
        "120111": "西青区",
        "120112": "津南区",
        "120113": "北辰区",
        "120114": "武清区",
        "120115": "宝坻区",
        "120116": "滨海新区",
        "120221": "宁河县",
        "120223": "静海县",
        "120225": "蓟县",
        "120226": "其它区",
        "130000": "河北省",
        "130100": "石家庄市",
        "130102": "长安区",
        "130103": "桥东区",
        "130104": "桥西区",
        "130105": "新华区",
        "130107": "井陉矿区",
        "130108": "裕华区",
        "130121": "井陉县",
        "130123": "正定县",
        "130124": "栾城县",
        "130125": "行唐县",
        "130126": "灵寿县",
        "130127": "高邑县",
        "130128": "深泽县",
        "130129": "赞皇县",
        "130130": "无极县",
        "130131": "平山县",
        "130132": "元氏县",
        "130133": "赵县",
        "130181": "辛集市",
        "130182": "藁城市",
        "130183": "晋州市",
        "130184": "新乐市",
        "130185": "鹿泉市",
        "130186": "其它区",
        "130200": "唐山市",
        "130202": "路南区",
        "130203": "路北区",
        "130204": "古冶区",
        "130205": "开平区",
        "130207": "丰南区",
        "130208": "丰润区",
        "130223": "滦县",
        "130224": "滦南县",
        "130225": "乐亭县",
        "130227": "迁西县",
        "130229": "玉田县",
        "130230": "曹妃甸区",
        "130281": "遵化市",
        "130283": "迁安市",
        "130284": "其它区",
        "130300": "秦皇岛市",
        "130302": "海港区",
        "130303": "山海关区",
        "130304": "北戴河区",
        "130321": "青龙满族自治县",
        "130322": "昌黎县",
        "130323": "抚宁县",
        "130324": "卢龙县",
        "130398": "其它区",
        "130400": "邯郸市",
        "130402": "邯山区",
        "130403": "丛台区",
        "130404": "复兴区",
        "130406": "峰峰矿区",
        "130421": "邯郸县",
        "130423": "临漳县",
        "130424": "成安县",
        "130425": "大名县",
        "130426": "涉县",
        "130427": "磁县",
        "130428": "肥乡县",
        "130429": "永年县",
        "130430": "邱县",
        "130431": "鸡泽县",
        "130432": "广平县",
        "130433": "馆陶县",
        "130434": "魏县",
        "130435": "曲周县",
        "130481": "武安市",
        "130482": "其它区",
        "130500": "邢台市",
        "130502": "桥东区",
        "130503": "桥西区",
        "130521": "邢台县",
        "130522": "临城县",
        "130523": "内丘县",
        "130524": "柏乡县",
        "130525": "隆尧县",
        "130526": "任县",
        "130527": "南和县",
        "130528": "宁晋县",
        "130529": "巨鹿县",
        "130530": "新河县",
        "130531": "广宗县",
        "130532": "平乡县",
        "130533": "威县",
        "130534": "清河县",
        "130535": "临西县",
        "130581": "南宫市",
        "130582": "沙河市",
        "130583": "其它区",
        "130600": "保定市",
        "130602": "新市区",
        "130603": "北市区",
        "130604": "南市区",
        "130621": "满城县",
        "130622": "清苑县",
        "130623": "涞水县",
        "130624": "阜平县",
        "130625": "徐水县",
        "130626": "定兴县",
        "130627": "唐县",
        "130628": "高阳县",
        "130629": "容城县",
        "130630": "涞源县",
        "130631": "望都县",
        "130632": "安新县",
        "130633": "易县",
        "130634": "曲阳县",
        "130635": "蠡县",
        "130636": "顺平县",
        "130637": "博野县",
        "130638": "雄县",
        "130681": "涿州市",
        "130682": "定州市",
        "130683": "安国市",
        "130684": "高碑店市",
        "130699": "其它区",
        "130700": "张家口市",
        "130702": "桥东区",
        "130703": "桥西区",
        "130705": "宣化区",
        "130706": "下花园区",
        "130721": "宣化县",
        "130722": "张北县",
        "130723": "康保县",
        "130724": "沽源县",
        "130725": "尚义县",
        "130726": "蔚县",
        "130727": "阳原县",
        "130728": "怀安县",
        "130729": "万全县",
        "130730": "怀来县",
        "130731": "涿鹿县",
        "130732": "赤城县",
        "130733": "崇礼县",
        "130734": "其它区",
        "130800": "承德市",
        "130802": "双桥区",
        "130803": "双滦区",
        "130804": "鹰手营子矿区",
        "130821": "承德县",
        "130822": "兴隆县",
        "130823": "平泉县",
        "130824": "滦平县",
        "130825": "隆化县",
        "130826": "丰宁满族自治县",
        "130827": "宽城满族自治县",
        "130828": "围场满族蒙古族自治县",
        "130829": "其它区",
        "130900": "沧州市",
        "130902": "新华区",
        "130903": "运河区",
        "130921": "沧县",
        "130922": "青县",
        "130923": "东光县",
        "130924": "海兴县",
        "130925": "盐山县",
        "130926": "肃宁县",
        "130927": "南皮县",
        "130928": "吴桥县",
        "130929": "献县",
        "130930": "孟村回族自治县",
        "130981": "泊头市",
        "130982": "任丘市",
        "130983": "黄骅市",
        "130984": "河间市",
        "130985": "其它区",
        "131000": "廊坊市",
        "131002": "安次区",
        "131003": "广阳区",
        "131022": "固安县",
        "131023": "永清县",
        "131024": "香河县",
        "131025": "大城县",
        "131026": "文安县",
        "131028": "大厂回族自治县",
        "131081": "霸州市",
        "131082": "三河市",
        "131083": "其它区",
        "131100": "衡水市",
        "131102": "桃城区",
        "131121": "枣强县",
        "131122": "武邑县",
        "131123": "武强县",
        "131124": "饶阳县",
        "131125": "安平县",
        "131126": "故城县",
        "131127": "景县",
        "131128": "阜城县",
        "131181": "冀州市",
        "131182": "深州市",
        "131183": "其它区",
        "140000": "山西省",
        "140100": "太原市",
        "140105": "小店区",
        "140106": "迎泽区",
        "140107": "杏花岭区",
        "140108": "尖草坪区",
        "140109": "万柏林区",
        "140110": "晋源区",
        "140121": "清徐县",
        "140122": "阳曲县",
        "140123": "娄烦县",
        "140181": "古交市",
        "140182": "其它区",
        "140200": "大同市",
        "140202": "城区",
        "140203": "矿区",
        "140211": "南郊区",
        "140212": "新荣区",
        "140221": "阳高县",
        "140222": "天镇县",
        "140223": "广灵县",
        "140224": "灵丘县",
        "140225": "浑源县",
        "140226": "左云县",
        "140227": "大同县",
        "140228": "其它区",
        "140300": "阳泉市",
        "140302": "城区",
        "140303": "矿区",
        "140311": "郊区",
        "140321": "平定县",
        "140322": "盂县",
        "140323": "其它区",
        "140400": "长治市",
        "140421": "长治县",
        "140423": "襄垣县",
        "140424": "屯留县",
        "140425": "平顺县",
        "140426": "黎城县",
        "140427": "壶关县",
        "140428": "长子县",
        "140429": "武乡县",
        "140430": "沁县",
        "140431": "沁源县",
        "140481": "潞城市",
        "140482": "城区",
        "140483": "郊区",
        "140485": "其它区",
        "140500": "晋城市",
        "140502": "城区",
        "140521": "沁水县",
        "140522": "阳城县",
        "140524": "陵川县",
        "140525": "泽州县",
        "140581": "高平市",
        "140582": "其它区",
        "140600": "朔州市",
        "140602": "朔城区",
        "140603": "平鲁区",
        "140621": "山阴县",
        "140622": "应县",
        "140623": "右玉县",
        "140624": "怀仁县",
        "140625": "其它区",
        "140700": "晋中市",
        "140702": "榆次区",
        "140721": "榆社县",
        "140722": "左权县",
        "140723": "和顺县",
        "140724": "昔阳县",
        "140725": "寿阳县",
        "140726": "太谷县",
        "140727": "祁县",
        "140728": "平遥县",
        "140729": "灵石县",
        "140781": "介休市",
        "140782": "其它区",
        "140800": "运城市",
        "140802": "盐湖区",
        "140821": "临猗县",
        "140822": "万荣县",
        "140823": "闻喜县",
        "140824": "稷山县",
        "140825": "新绛县",
        "140826": "绛县",
        "140827": "垣曲县",
        "140828": "夏县",
        "140829": "平陆县",
        "140830": "芮城县",
        "140881": "永济市",
        "140882": "河津市",
        "140883": "其它区",
        "140900": "忻州市",
        "140902": "忻府区",
        "140921": "定襄县",
        "140922": "五台县",
        "140923": "代县",
        "140924": "繁峙县",
        "140925": "宁武县",
        "140926": "静乐县",
        "140927": "神池县",
        "140928": "五寨县",
        "140929": "岢岚县",
        "140930": "河曲县",
        "140931": "保德县",
        "140932": "偏关县",
        "140981": "原平市",
        "140982": "其它区",
        "141000": "临汾市",
        "141002": "尧都区",
        "141021": "曲沃县",
        "141022": "翼城县",
        "141023": "襄汾县",
        "141024": "洪洞县",
        "141025": "古县",
        "141026": "安泽县",
        "141027": "浮山县",
        "141028": "吉县",
        "141029": "乡宁县",
        "141030": "大宁县",
        "141031": "隰县",
        "141032": "永和县",
        "141033": "蒲县",
        "141034": "汾西县",
        "141081": "侯马市",
        "141082": "霍州市",
        "141083": "其它区",
        "141100": "吕梁市",
        "141102": "离石区",
        "141121": "文水县",
        "141122": "交城县",
        "141123": "兴县",
        "141124": "临县",
        "141125": "柳林县",
        "141126": "石楼县",
        "141127": "岚县",
        "141128": "方山县",
        "141129": "中阳县",
        "141130": "交口县",
        "141181": "孝义市",
        "141182": "汾阳市",
        "141183": "其它区",
        "150000": "内蒙古自治区",
        "150100": "呼和浩特市",
        "150102": "新城区",
        "150103": "回民区",
        "150104": "玉泉区",
        "150105": "赛罕区",
        "150121": "土默特左旗",
        "150122": "托克托县",
        "150123": "和林格尔县",
        "150124": "清水河县",
        "150125": "武川县",
        "150126": "其它区",
        "150200": "包头市",
        "150202": "东河区",
        "150203": "昆都仑区",
        "150204": "青山区",
        "150205": "石拐区",
        "150206": "白云鄂博矿区",
        "150207": "九原区",
        "150221": "土默特右旗",
        "150222": "固阳县",
        "150223": "达尔罕茂明安联合旗",
        "150224": "其它区",
        "150300": "乌海市",
        "150302": "海勃湾区",
        "150303": "海南区",
        "150304": "乌达区",
        "150305": "其它区",
        "150400": "赤峰市",
        "150402": "红山区",
        "150403": "元宝山区",
        "150404": "松山区",
        "150421": "阿鲁科尔沁旗",
        "150422": "巴林左旗",
        "150423": "巴林右旗",
        "150424": "林西县",
        "150425": "克什克腾旗",
        "150426": "翁牛特旗",
        "150428": "喀喇沁旗",
        "150429": "宁城县",
        "150430": "敖汉旗",
        "150431": "其它区",
        "150500": "通辽市",
        "150502": "科尔沁区",
        "150521": "科尔沁左翼中旗",
        "150522": "科尔沁左翼后旗",
        "150523": "开鲁县",
        "150524": "库伦旗",
        "150525": "奈曼旗",
        "150526": "扎鲁特旗",
        "150581": "霍林郭勒市",
        "150582": "其它区",
        "150600": "鄂尔多斯市",
        "150602": "东胜区",
        "150621": "达拉特旗",
        "150622": "准格尔旗",
        "150623": "鄂托克前旗",
        "150624": "鄂托克旗",
        "150625": "杭锦旗",
        "150626": "乌审旗",
        "150627": "伊金霍洛旗",
        "150628": "其它区",
        "150700": "呼伦贝尔市",
        "150702": "海拉尔区",
        "150703": "扎赉诺尔区",
        "150721": "阿荣旗",
        "150722": "莫力达瓦达斡尔族自治旗",
        "150723": "鄂伦春自治旗",
        "150724": "鄂温克族自治旗",
        "150725": "陈巴尔虎旗",
        "150726": "新巴尔虎左旗",
        "150727": "新巴尔虎右旗",
        "150781": "满洲里市",
        "150782": "牙克石市",
        "150783": "扎兰屯市",
        "150784": "额尔古纳市",
        "150785": "根河市",
        "150786": "其它区",
        "150800": "巴彦淖尔市",
        "150802": "临河区",
        "150821": "五原县",
        "150822": "磴口县",
        "150823": "乌拉特前旗",
        "150824": "乌拉特中旗",
        "150825": "乌拉特后旗",
        "150826": "杭锦后旗",
        "150827": "其它区",
        "150900": "乌兰察布市",
        "150902": "集宁区",
        "150921": "卓资县",
        "150922": "化德县",
        "150923": "商都县",
        "150924": "兴和县",
        "150925": "凉城县",
        "150926": "察哈尔右翼前旗",
        "150927": "察哈尔右翼中旗",
        "150928": "察哈尔右翼后旗",
        "150929": "四子王旗",
        "150981": "丰镇市",
        "150982": "其它区",
        "152200": "兴安盟",
        "152201": "乌兰浩特市",
        "152202": "阿尔山市",
        "152221": "科尔沁右翼前旗",
        "152222": "科尔沁右翼中旗",
        "152223": "扎赉特旗",
        "152224": "突泉县",
        "152225": "其它区",
        "152500": "锡林郭勒盟",
        "152501": "二连浩特市",
        "152502": "锡林浩特市",
        "152522": "阿巴嘎旗",
        "152523": "苏尼特左旗",
        "152524": "苏尼特右旗",
        "152525": "东乌珠穆沁旗",
        "152526": "西乌珠穆沁旗",
        "152527": "太仆寺旗",
        "152528": "镶黄旗",
        "152529": "正镶白旗",
        "152530": "正蓝旗",
        "152531": "多伦县",
        "152532": "其它区",
        "152900": "阿拉善盟",
        "152921": "阿拉善左旗",
        "152922": "阿拉善右旗",
        "152923": "额济纳旗",
        "152924": "其它区",
        "210000": "辽宁省",
        "210100": "沈阳市",
        "210102": "和平区",
        "210103": "沈河区",
        "210104": "大东区",
        "210105": "皇姑区",
        "210106": "铁西区",
        "210111": "苏家屯区",
        "210112": "东陵区",
        "210113": "新城子区",
        "210114": "于洪区",
        "210122": "辽中县",
        "210123": "康平县",
        "210124": "法库县",
        "210181": "新民市",
        "210184": "沈北新区",
        "210185": "其它区",
        "210200": "大连市",
        "210202": "中山区",
        "210203": "西岗区",
        "210204": "沙河口区",
        "210211": "甘井子区",
        "210212": "旅顺口区",
        "210213": "金州区",
        "210224": "长海县",
        "210281": "瓦房店市",
        "210282": "普兰店市",
        "210283": "庄河市",
        "210298": "其它区",
        "210300": "鞍山市",
        "210302": "铁东区",
        "210303": "铁西区",
        "210304": "立山区",
        "210311": "千山区",
        "210321": "台安县",
        "210323": "岫岩满族自治县",
        "210381": "海城市",
        "210382": "其它区",
        "210400": "抚顺市",
        "210402": "新抚区",
        "210403": "东洲区",
        "210404": "望花区",
        "210411": "顺城区",
        "210421": "抚顺县",
        "210422": "新宾满族自治县",
        "210423": "清原满族自治县",
        "210424": "其它区",
        "210500": "本溪市",
        "210502": "平山区",
        "210503": "溪湖区",
        "210504": "明山区",
        "210505": "南芬区",
        "210521": "本溪满族自治县",
        "210522": "桓仁满族自治县",
        "210523": "其它区",
        "210600": "丹东市",
        "210602": "元宝区",
        "210603": "振兴区",
        "210604": "振安区",
        "210624": "宽甸满族自治县",
        "210681": "东港市",
        "210682": "凤城市",
        "210683": "其它区",
        "210700": "锦州市",
        "210702": "古塔区",
        "210703": "凌河区",
        "210711": "太和区",
        "210726": "黑山县",
        "210727": "义县",
        "210781": "凌海市",
        "210782": "北镇市",
        "210783": "其它区",
        "210800": "营口市",
        "210802": "站前区",
        "210803": "西市区",
        "210804": "鲅鱼圈区",
        "210811": "老边区",
        "210881": "盖州市",
        "210882": "大石桥市",
        "210883": "其它区",
        "210900": "阜新市",
        "210902": "海州区",
        "210903": "新邱区",
        "210904": "太平区",
        "210905": "清河门区",
        "210911": "细河区",
        "210921": "阜新蒙古族自治县",
        "210922": "彰武县",
        "210923": "其它区",
        "211000": "辽阳市",
        "211002": "白塔区",
        "211003": "文圣区",
        "211004": "宏伟区",
        "211005": "弓长岭区",
        "211011": "太子河区",
        "211021": "辽阳县",
        "211081": "灯塔市",
        "211082": "其它区",
        "211100": "盘锦市",
        "211102": "双台子区",
        "211103": "兴隆台区",
        "211121": "大洼县",
        "211122": "盘山县",
        "211123": "其它区",
        "211200": "铁岭市",
        "211202": "银州区",
        "211204": "清河区",
        "211221": "铁岭县",
        "211223": "西丰县",
        "211224": "昌图县",
        "211281": "调兵山市",
        "211282": "开原市",
        "211283": "其它区",
        "211300": "朝阳市",
        "211302": "双塔区",
        "211303": "龙城区",
        "211321": "朝阳县",
        "211322": "建平县",
        "211324": "喀喇沁左翼蒙古族自治县",
        "211381": "北票市",
        "211382": "凌源市",
        "211383": "其它区",
        "211400": "葫芦岛市",
        "211402": "连山区",
        "211403": "龙港区",
        "211404": "南票区",
        "211421": "绥中县",
        "211422": "建昌县",
        "211481": "兴城市",
        "211482": "其它区",
        "220000": "吉林省",
        "220100": "长春市",
        "220102": "南关区",
        "220103": "宽城区",
        "220104": "朝阳区",
        "220105": "二道区",
        "220106": "绿园区",
        "220112": "双阳区",
        "220122": "农安县",
        "220181": "九台市",
        "220182": "榆树市",
        "220183": "德惠市",
        "220188": "其它区",
        "220200": "吉林市",
        "220202": "昌邑区",
        "220203": "龙潭区",
        "220204": "船营区",
        "220211": "丰满区",
        "220221": "永吉县",
        "220281": "蛟河市",
        "220282": "桦甸市",
        "220283": "舒兰市",
        "220284": "磐石市",
        "220285": "其它区",
        "220300": "四平市",
        "220302": "铁西区",
        "220303": "铁东区",
        "220322": "梨树县",
        "220323": "伊通满族自治县",
        "220381": "公主岭市",
        "220382": "双辽市",
        "220383": "其它区",
        "220400": "辽源市",
        "220402": "龙山区",
        "220403": "西安区",
        "220421": "东丰县",
        "220422": "东辽县",
        "220423": "其它区",
        "220500": "通化市",
        "220502": "东昌区",
        "220503": "二道江区",
        "220521": "通化县",
        "220523": "辉南县",
        "220524": "柳河县",
        "220581": "梅河口市",
        "220582": "集安市",
        "220583": "其它区",
        "220600": "白山市",
        "220602": "浑江区",
        "220621": "抚松县",
        "220622": "靖宇县",
        "220623": "长白朝鲜族自治县",
        "220625": "江源区",
        "220681": "临江市",
        "220682": "其它区",
        "220700": "松原市",
        "220702": "宁江区",
        "220721": "前郭尔罗斯蒙古族自治县",
        "220722": "长岭县",
        "220723": "乾安县",
        "220724": "扶余市",
        "220725": "其它区",
        "220800": "白城市",
        "220802": "洮北区",
        "220821": "镇赉县",
        "220822": "通榆县",
        "220881": "洮南市",
        "220882": "大安市",
        "220883": "其它区",
        "222400": "延边朝鲜族自治州",
        "222401": "延吉市",
        "222402": "图们市",
        "222403": "敦化市",
        "222404": "珲春市",
        "222405": "龙井市",
        "222406": "和龙市",
        "222424": "汪清县",
        "222426": "安图县",
        "222427": "其它区",
        "230000": "黑龙江省",
        "230100": "哈尔滨市",
        "230102": "道里区",
        "230103": "南岗区",
        "230104": "道外区",
        "230106": "香坊区",
        "230108": "平房区",
        "230109": "松北区",
        "230111": "呼兰区",
        "230123": "依兰县",
        "230124": "方正县",
        "230125": "宾县",
        "230126": "巴彦县",
        "230127": "木兰县",
        "230128": "通河县",
        "230129": "延寿县",
        "230181": "阿城区",
        "230182": "双城市",
        "230183": "尚志市",
        "230184": "五常市",
        "230186": "其它区",
        "230200": "齐齐哈尔市",
        "230202": "龙沙区",
        "230203": "建华区",
        "230204": "铁锋区",
        "230205": "昂昂溪区",
        "230206": "富拉尔基区",
        "230207": "碾子山区",
        "230208": "梅里斯达斡尔族区",
        "230221": "龙江县",
        "230223": "依安县",
        "230224": "泰来县",
        "230225": "甘南县",
        "230227": "富裕县",
        "230229": "克山县",
        "230230": "克东县",
        "230231": "拜泉县",
        "230281": "讷河市",
        "230282": "其它区",
        "230300": "鸡西市",
        "230302": "鸡冠区",
        "230303": "恒山区",
        "230304": "滴道区",
        "230305": "梨树区",
        "230306": "城子河区",
        "230307": "麻山区",
        "230321": "鸡东县",
        "230381": "虎林市",
        "230382": "密山市",
        "230383": "其它区",
        "230400": "鹤岗市",
        "230402": "向阳区",
        "230403": "工农区",
        "230404": "南山区",
        "230405": "兴安区",
        "230406": "东山区",
        "230407": "兴山区",
        "230421": "萝北县",
        "230422": "绥滨县",
        "230423": "其它区",
        "230500": "双鸭山市",
        "230502": "尖山区",
        "230503": "岭东区",
        "230505": "四方台区",
        "230506": "宝山区",
        "230521": "集贤县",
        "230522": "友谊县",
        "230523": "宝清县",
        "230524": "饶河县",
        "230525": "其它区",
        "230600": "大庆市",
        "230602": "萨尔图区",
        "230603": "龙凤区",
        "230604": "让胡路区",
        "230605": "红岗区",
        "230606": "大同区",
        "230621": "肇州县",
        "230622": "肇源县",
        "230623": "林甸县",
        "230624": "杜尔伯特蒙古族自治县",
        "230625": "其它区",
        "230700": "伊春市",
        "230702": "伊春区",
        "230703": "南岔区",
        "230704": "友好区",
        "230705": "西林区",
        "230706": "翠峦区",
        "230707": "新青区",
        "230708": "美溪区",
        "230709": "金山屯区",
        "230710": "五营区",
        "230711": "乌马河区",
        "230712": "汤旺河区",
        "230713": "带岭区",
        "230714": "乌伊岭区",
        "230715": "红星区",
        "230716": "上甘岭区",
        "230722": "嘉荫县",
        "230781": "铁力市",
        "230782": "其它区",
        "230800": "佳木斯市",
        "230803": "向阳区",
        "230804": "前进区",
        "230805": "东风区",
        "230811": "郊区",
        "230822": "桦南县",
        "230826": "桦川县",
        "230828": "汤原县",
        "230833": "抚远县",
        "230881": "同江市",
        "230882": "富锦市",
        "230883": "其它区",
        "230900": "七台河市",
        "230902": "新兴区",
        "230903": "桃山区",
        "230904": "茄子河区",
        "230921": "勃利县",
        "230922": "其它区",
        "231000": "牡丹江市",
        "231002": "东安区",
        "231003": "阳明区",
        "231004": "爱民区",
        "231005": "西安区",
        "231024": "东宁县",
        "231025": "林口县",
        "231081": "绥芬河市",
        "231083": "海林市",
        "231084": "宁安市",
        "231085": "穆棱市",
        "231086": "其它区",
        "231100": "黑河市",
        "231102": "爱辉区",
        "231121": "嫩江县",
        "231123": "逊克县",
        "231124": "孙吴县",
        "231181": "北安市",
        "231182": "五大连池市",
        "231183": "其它区",
        "231200": "绥化市",
        "231202": "北林区",
        "231221": "望奎县",
        "231222": "兰西县",
        "231223": "青冈县",
        "231224": "庆安县",
        "231225": "明水县",
        "231226": "绥棱县",
        "231281": "安达市",
        "231282": "肇东市",
        "231283": "海伦市",
        "231284": "其它区",
        "232700": "大兴安岭地区",
        "232702": "松岭区",
        "232703": "新林区",
        "232704": "呼中区",
        "232721": "呼玛县",
        "232722": "塔河县",
        "232723": "漠河县",
        "232724": "加格达奇区",
        "232725": "其它区",
        "310000": "上海",
        "310100": "上海市",
        "310101": "黄浦区",
        "310104": "徐汇区",
        "310105": "长宁区",
        "310106": "静安区",
        "310107": "普陀区",
        "310108": "闸北区",
        "310109": "虹口区",
        "310110": "杨浦区",
        "310112": "闵行区",
        "310113": "宝山区",
        "310114": "嘉定区",
        "310115": "浦东新区",
        "310116": "金山区",
        "310117": "松江区",
        "310118": "青浦区",
        "310120": "奉贤区",
        "310230": "崇明县",
        "310231": "其它区",
        "320000": "江苏省",
        "320100": "南京市",
        "320102": "玄武区",
        "320104": "秦淮区",
        "320105": "建邺区",
        "320106": "鼓楼区",
        "320111": "浦口区",
        "320113": "栖霞区",
        "320114": "雨花台区",
        "320115": "江宁区",
        "320116": "六合区",
        "320124": "溧水区",
        "320125": "高淳区",
        "320126": "其它区",
        "320200": "无锡市",
        "320202": "崇安区",
        "320203": "南长区",
        "320204": "北塘区",
        "320205": "锡山区",
        "320206": "惠山区",
        "320211": "滨湖区",
        "320281": "江阴市",
        "320282": "宜兴市",
        "320297": "其它区",
        "320300": "徐州市",
        "320302": "鼓楼区",
        "320303": "云龙区",
        "320305": "贾汪区",
        "320311": "泉山区",
        "320321": "丰县",
        "320322": "沛县",
        "320323": "铜山区",
        "320324": "睢宁县",
        "320381": "新沂市",
        "320382": "邳州市",
        "320383": "其它区",
        "320400": "常州市",
        "320402": "天宁区",
        "320404": "钟楼区",
        "320405": "戚墅堰区",
        "320411": "新北区",
        "320412": "武进区",
        "320481": "溧阳市",
        "320482": "金坛市",
        "320483": "其它区",
        "320500": "苏州市",
        "320505": "虎丘区",
        "320506": "吴中区",
        "320507": "相城区",
        "320508": "姑苏区",
        "320581": "常熟市",
        "320582": "张家港市",
        "320583": "昆山市",
        "320584": "吴江区",
        "320585": "太仓市",
        "320596": "其它区",
        "320600": "南通市",
        "320602": "崇川区",
        "320611": "港闸区",
        "320612": "通州区",
        "320621": "海安县",
        "320623": "如东县",
        "320681": "启东市",
        "320682": "如皋市",
        "320684": "海门市",
        "320694": "其它区",
        "320700": "连云港市",
        "320703": "连云区",
        "320705": "新浦区",
        "320706": "海州区",
        "320721": "赣榆县",
        "320722": "东海县",
        "320723": "灌云县",
        "320724": "灌南县",
        "320725": "其它区",
        "320800": "淮安市",
        "320802": "清河区",
        "320803": "淮安区",
        "320804": "淮阴区",
        "320811": "清浦区",
        "320826": "涟水县",
        "320829": "洪泽县",
        "320830": "盱眙县",
        "320831": "金湖县",
        "320832": "其它区",
        "320900": "盐城市",
        "320902": "亭湖区",
        "320903": "盐都区",
        "320921": "响水县",
        "320922": "滨海县",
        "320923": "阜宁县",
        "320924": "射阳县",
        "320925": "建湖县",
        "320981": "东台市",
        "320982": "大丰市",
        "320983": "其它区",
        "321000": "扬州市",
        "321002": "广陵区",
        "321003": "邗江区",
        "321023": "宝应县",
        "321081": "仪征市",
        "321084": "高邮市",
        "321088": "江都区",
        "321093": "其它区",
        "321100": "镇江市",
        "321102": "京口区",
        "321111": "润州区",
        "321112": "丹徒区",
        "321181": "丹阳市",
        "321182": "扬中市",
        "321183": "句容市",
        "321184": "其它区",
        "321200": "泰州市",
        "321202": "海陵区",
        "321203": "高港区",
        "321281": "兴化市",
        "321282": "靖江市",
        "321283": "泰兴市",
        "321284": "姜堰区",
        "321285": "其它区",
        "321300": "宿迁市",
        "321302": "宿城区",
        "321311": "宿豫区",
        "321322": "沭阳县",
        "321323": "泗阳县",
        "321324": "泗洪县",
        "321325": "其它区",
        "330000": "浙江省",
        "330100": "杭州市",
        "330102": "上城区",
        "330103": "下城区",
        "330104": "江干区",
        "330105": "拱墅区",
        "330106": "西湖区",
        "330108": "滨江区",
        "330109": "萧山区",
        "330110": "余杭区",
        "330122": "桐庐县",
        "330127": "淳安县",
        "330182": "建德市",
        "330183": "富阳市",
        "330185": "临安市",
        "330186": "其它区",
        "330200": "宁波市",
        "330203": "海曙区",
        "330204": "江东区",
        "330205": "江北区",
        "330206": "北仑区",
        "330211": "镇海区",
        "330212": "鄞州区",
        "330225": "象山县",
        "330226": "宁海县",
        "330281": "余姚市",
        "330282": "慈溪市",
        "330283": "奉化市",
        "330284": "其它区",
        "330300": "温州市",
        "330302": "鹿城区",
        "330303": "龙湾区",
        "330304": "瓯海区",
        "330322": "洞头县",
        "330324": "永嘉县",
        "330326": "平阳县",
        "330327": "苍南县",
        "330328": "文成县",
        "330329": "泰顺县",
        "330381": "瑞安市",
        "330382": "乐清市",
        "330383": "其它区",
        "330400": "嘉兴市",
        "330402": "南湖区",
        "330411": "秀洲区",
        "330421": "嘉善县",
        "330424": "海盐县",
        "330481": "海宁市",
        "330482": "平湖市",
        "330483": "桐乡市",
        "330484": "其它区",
        "330500": "湖州市",
        "330502": "吴兴区",
        "330503": "南浔区",
        "330521": "德清县",
        "330522": "长兴县",
        "330523": "安吉县",
        "330524": "其它区",
        "330600": "绍兴市",
        "330602": "越城区",
        "330621": "绍兴县",
        "330624": "新昌县",
        "330681": "诸暨市",
        "330682": "上虞市",
        "330683": "嵊州市",
        "330684": "其它区",
        "330700": "金华市",
        "330702": "婺城区",
        "330703": "金东区",
        "330723": "武义县",
        "330726": "浦江县",
        "330727": "磐安县",
        "330781": "兰溪市",
        "330782": "义乌市",
        "330783": "东阳市",
        "330784": "永康市",
        "330785": "其它区",
        "330800": "衢州市",
        "330802": "柯城区",
        "330803": "衢江区",
        "330822": "常山县",
        "330824": "开化县",
        "330825": "龙游县",
        "330881": "江山市",
        "330882": "其它区",
        "330900": "舟山市",
        "330902": "定海区",
        "330903": "普陀区",
        "330921": "岱山县",
        "330922": "嵊泗县",
        "330923": "其它区",
        "331000": "台州市",
        "331002": "椒江区",
        "331003": "黄岩区",
        "331004": "路桥区",
        "331021": "玉环县",
        "331022": "三门县",
        "331023": "天台县",
        "331024": "仙居县",
        "331081": "温岭市",
        "331082": "临海市",
        "331083": "其它区",
        "331100": "丽水市",
        "331102": "莲都区",
        "331121": "青田县",
        "331122": "缙云县",
        "331123": "遂昌县",
        "331124": "松阳县",
        "331125": "云和县",
        "331126": "庆元县",
        "331127": "景宁畲族自治县",
        "331181": "龙泉市",
        "331182": "其它区",
        "340000": "安徽省",
        "340100": "合肥市",
        "340102": "瑶海区",
        "340103": "庐阳区",
        "340104": "蜀山区",
        "340111": "包河区",
        "340121": "长丰县",
        "340122": "肥东县",
        "340123": "肥西县",
        "340192": "其它区",
        "340200": "芜湖市",
        "340202": "镜湖区",
        "340203": "弋江区",
        "340207": "鸠江区",
        "340208": "三山区",
        "340221": "芜湖县",
        "340222": "繁昌县",
        "340223": "南陵县",
        "340224": "其它区",
        "340300": "蚌埠市",
        "340302": "龙子湖区",
        "340303": "蚌山区",
        "340304": "禹会区",
        "340311": "淮上区",
        "340321": "怀远县",
        "340322": "五河县",
        "340323": "固镇县",
        "340324": "其它区",
        "340400": "淮南市",
        "340402": "大通区",
        "340403": "田家庵区",
        "340404": "谢家集区",
        "340405": "八公山区",
        "340406": "潘集区",
        "340421": "凤台县",
        "340422": "其它区",
        "340500": "马鞍山市",
        "340503": "花山区",
        "340504": "雨山区",
        "340506": "博望区",
        "340521": "当涂县",
        "340522": "其它区",
        "340600": "淮北市",
        "340602": "杜集区",
        "340603": "相山区",
        "340604": "烈山区",
        "340621": "濉溪县",
        "340622": "其它区",
        "340700": "铜陵市",
        "340702": "铜官山区",
        "340703": "狮子山区",
        "340711": "郊区",
        "340721": "铜陵县",
        "340722": "其它区",
        "340800": "安庆市",
        "340802": "迎江区",
        "340803": "大观区",
        "340811": "宜秀区",
        "340822": "怀宁县",
        "340823": "枞阳县",
        "340824": "潜山县",
        "340825": "太湖县",
        "340826": "宿松县",
        "340827": "望江县",
        "340828": "岳西县",
        "340881": "桐城市",
        "340882": "其它区",
        "341000": "黄山市",
        "341002": "屯溪区",
        "341003": "黄山区",
        "341004": "徽州区",
        "341021": "歙县",
        "341022": "休宁县",
        "341023": "黟县",
        "341024": "祁门县",
        "341025": "其它区",
        "341100": "滁州市",
        "341102": "琅琊区",
        "341103": "南谯区",
        "341122": "来安县",
        "341124": "全椒县",
        "341125": "定远县",
        "341126": "凤阳县",
        "341181": "天长市",
        "341182": "明光市",
        "341183": "其它区",
        "341200": "阜阳市",
        "341202": "颍州区",
        "341203": "颍东区",
        "341204": "颍泉区",
        "341221": "临泉县",
        "341222": "太和县",
        "341225": "阜南县",
        "341226": "颍上县",
        "341282": "界首市",
        "341283": "其它区",
        "341300": "宿州市",
        "341302": "埇桥区",
        "341321": "砀山县",
        "341322": "萧县",
        "341323": "灵璧县",
        "341324": "泗县",
        "341325": "其它区",
        "341400": "巢湖市",
        "341421": "庐江县",
        "341422": "无为县",
        "341423": "含山县",
        "341424": "和县",
        "341500": "六安市",
        "341502": "金安区",
        "341503": "裕安区",
        "341521": "寿县",
        "341522": "霍邱县",
        "341523": "舒城县",
        "341524": "金寨县",
        "341525": "霍山县",
        "341526": "其它区",
        "341600": "亳州市",
        "341602": "谯城区",
        "341621": "涡阳县",
        "341622": "蒙城县",
        "341623": "利辛县",
        "341624": "其它区",
        "341700": "池州市",
        "341702": "贵池区",
        "341721": "东至县",
        "341722": "石台县",
        "341723": "青阳县",
        "341724": "其它区",
        "341800": "宣城市",
        "341802": "宣州区",
        "341821": "郎溪县",
        "341822": "广德县",
        "341823": "泾县",
        "341824": "绩溪县",
        "341825": "旌德县",
        "341881": "宁国市",
        "341882": "其它区",
        "350000": "福建省",
        "350100": "福州市",
        "350102": "鼓楼区",
        "350103": "台江区",
        "350104": "仓山区",
        "350105": "马尾区",
        "350111": "晋安区",
        "350121": "闽侯县",
        "350122": "连江县",
        "350123": "罗源县",
        "350124": "闽清县",
        "350125": "永泰县",
        "350128": "平潭县",
        "350181": "福清市",
        "350182": "长乐市",
        "350183": "其它区",
        "350200": "厦门市",
        "350203": "思明区",
        "350205": "海沧区",
        "350206": "湖里区",
        "350211": "集美区",
        "350212": "同安区",
        "350213": "翔安区",
        "350214": "其它区",
        "350300": "莆田市",
        "350302": "城厢区",
        "350303": "涵江区",
        "350304": "荔城区",
        "350305": "秀屿区",
        "350322": "仙游县",
        "350323": "其它区",
        "350400": "三明市",
        "350402": "梅列区",
        "350403": "三元区",
        "350421": "明溪县",
        "350423": "清流县",
        "350424": "宁化县",
        "350425": "大田县",
        "350426": "尤溪县",
        "350427": "沙县",
        "350428": "将乐县",
        "350429": "泰宁县",
        "350430": "建宁县",
        "350481": "永安市",
        "350482": "其它区",
        "350500": "泉州市",
        "350502": "鲤城区",
        "350503": "丰泽区",
        "350504": "洛江区",
        "350505": "泉港区",
        "350521": "惠安县",
        "350524": "安溪县",
        "350525": "永春县",
        "350526": "德化县",
        "350527": "金门县",
        "350581": "石狮市",
        "350582": "晋江市",
        "350583": "南安市",
        "350584": "其它区",
        "350600": "漳州市",
        "350602": "芗城区",
        "350603": "龙文区",
        "350622": "云霄县",
        "350623": "漳浦县",
        "350624": "诏安县",
        "350625": "长泰县",
        "350626": "东山县",
        "350627": "南靖县",
        "350628": "平和县",
        "350629": "华安县",
        "350681": "龙海市",
        "350682": "其它区",
        "350700": "南平市",
        "350702": "延平区",
        "350721": "顺昌县",
        "350722": "浦城县",
        "350723": "光泽县",
        "350724": "松溪县",
        "350725": "政和县",
        "350781": "邵武市",
        "350782": "武夷山市",
        "350783": "建瓯市",
        "350784": "建阳市",
        "350785": "其它区",
        "350800": "龙岩市",
        "350802": "新罗区",
        "350821": "长汀县",
        "350822": "永定县",
        "350823": "上杭县",
        "350824": "武平县",
        "350825": "连城县",
        "350881": "漳平市",
        "350882": "其它区",
        "350900": "宁德市",
        "350902": "蕉城区",
        "350921": "霞浦县",
        "350922": "古田县",
        "350923": "屏南县",
        "350924": "寿宁县",
        "350925": "周宁县",
        "350926": "柘荣县",
        "350981": "福安市",
        "350982": "福鼎市",
        "350983": "其它区",
        "360000": "江西省",
        "360100": "南昌市",
        "360102": "东湖区",
        "360103": "西湖区",
        "360104": "青云谱区",
        "360105": "湾里区",
        "360111": "青山湖区",
        "360121": "南昌县",
        "360122": "新建县",
        "360123": "安义县",
        "360124": "进贤县",
        "360128": "其它区",
        "360200": "景德镇市",
        "360202": "昌江区",
        "360203": "珠山区",
        "360222": "浮梁县",
        "360281": "乐平市",
        "360282": "其它区",
        "360300": "萍乡市",
        "360302": "安源区",
        "360313": "湘东区",
        "360321": "莲花县",
        "360322": "上栗县",
        "360323": "芦溪县",
        "360324": "其它区",
        "360400": "九江市",
        "360402": "庐山区",
        "360403": "浔阳区",
        "360421": "九江县",
        "360423": "武宁县",
        "360424": "修水县",
        "360425": "永修县",
        "360426": "德安县",
        "360427": "星子县",
        "360428": "都昌县",
        "360429": "湖口县",
        "360430": "彭泽县",
        "360481": "瑞昌市",
        "360482": "其它区",
        "360483": "共青城市",
        "360500": "新余市",
        "360502": "渝水区",
        "360521": "分宜县",
        "360522": "其它区",
        "360600": "鹰潭市",
        "360602": "月湖区",
        "360622": "余江县",
        "360681": "贵溪市",
        "360682": "其它区",
        "360700": "赣州市",
        "360702": "章贡区",
        "360721": "赣县",
        "360722": "信丰县",
        "360723": "大余县",
        "360724": "上犹县",
        "360725": "崇义县",
        "360726": "安远县",
        "360727": "龙南县",
        "360728": "定南县",
        "360729": "全南县",
        "360730": "宁都县",
        "360731": "于都县",
        "360732": "兴国县",
        "360733": "会昌县",
        "360734": "寻乌县",
        "360735": "石城县",
        "360781": "瑞金市",
        "360782": "南康市",
        "360783": "其它区",
        "360800": "吉安市",
        "360802": "吉州区",
        "360803": "青原区",
        "360821": "吉安县",
        "360822": "吉水县",
        "360823": "峡江县",
        "360824": "新干县",
        "360825": "永丰县",
        "360826": "泰和县",
        "360827": "遂川县",
        "360828": "万安县",
        "360829": "安福县",
        "360830": "永新县",
        "360881": "井冈山市",
        "360882": "其它区",
        "360900": "宜春市",
        "360902": "袁州区",
        "360921": "奉新县",
        "360922": "万载县",
        "360923": "上高县",
        "360924": "宜丰县",
        "360925": "靖安县",
        "360926": "铜鼓县",
        "360981": "丰城市",
        "360982": "樟树市",
        "360983": "高安市",
        "360984": "其它区",
        "361000": "抚州市",
        "361002": "临川区",
        "361021": "南城县",
        "361022": "黎川县",
        "361023": "南丰县",
        "361024": "崇仁县",
        "361025": "乐安县",
        "361026": "宜黄县",
        "361027": "金溪县",
        "361028": "资溪县",
        "361029": "东乡县",
        "361030": "广昌县",
        "361031": "其它区",
        "361100": "上饶市",
        "361102": "信州区",
        "361121": "上饶县",
        "361122": "广丰县",
        "361123": "玉山县",
        "361124": "铅山县",
        "361125": "横峰县",
        "361126": "弋阳县",
        "361127": "余干县",
        "361128": "鄱阳县",
        "361129": "万年县",
        "361130": "婺源县",
        "361181": "德兴市",
        "361182": "其它区",
        "370000": "山东省",
        "370100": "济南市",
        "370102": "历下区",
        "370103": "市中区",
        "370104": "槐荫区",
        "370105": "天桥区",
        "370112": "历城区",
        "370113": "长清区",
        "370124": "平阴县",
        "370125": "济阳县",
        "370126": "商河县",
        "370181": "章丘市",
        "370182": "其它区",
        "370200": "青岛市",
        "370202": "市南区",
        "370203": "市北区",
        "370211": "黄岛区",
        "370212": "崂山区",
        "370213": "李沧区",
        "370214": "城阳区",
        "370281": "胶州市",
        "370282": "即墨市",
        "370283": "平度市",
        "370285": "莱西市",
        "370286": "其它区",
        "370300": "淄博市",
        "370302": "淄川区",
        "370303": "张店区",
        "370304": "博山区",
        "370305": "临淄区",
        "370306": "周村区",
        "370321": "桓台县",
        "370322": "高青县",
        "370323": "沂源县",
        "370324": "其它区",
        "370400": "枣庄市",
        "370402": "市中区",
        "370403": "薛城区",
        "370404": "峄城区",
        "370405": "台儿庄区",
        "370406": "山亭区",
        "370481": "滕州市",
        "370482": "其它区",
        "370500": "东营市",
        "370502": "东营区",
        "370503": "河口区",
        "370521": "垦利县",
        "370522": "利津县",
        "370523": "广饶县",
        "370591": "其它区",
        "370600": "烟台市",
        "370602": "芝罘区",
        "370611": "福山区",
        "370612": "牟平区",
        "370613": "莱山区",
        "370634": "长岛县",
        "370681": "龙口市",
        "370682": "莱阳市",
        "370683": "莱州市",
        "370684": "蓬莱市",
        "370685": "招远市",
        "370686": "栖霞市",
        "370687": "海阳市",
        "370688": "其它区",
        "370700": "潍坊市",
        "370702": "潍城区",
        "370703": "寒亭区",
        "370704": "坊子区",
        "370705": "奎文区",
        "370724": "临朐县",
        "370725": "昌乐县",
        "370781": "青州市",
        "370782": "诸城市",
        "370783": "寿光市",
        "370784": "安丘市",
        "370785": "高密市",
        "370786": "昌邑市",
        "370787": "其它区",
        "370800": "济宁市",
        "370802": "市中区",
        "370811": "任城区",
        "370826": "微山县",
        "370827": "鱼台县",
        "370828": "金乡县",
        "370829": "嘉祥县",
        "370830": "汶上县",
        "370831": "泗水县",
        "370832": "梁山县",
        "370881": "曲阜市",
        "370882": "兖州市",
        "370883": "邹城市",
        "370884": "其它区",
        "370900": "泰安市",
        "370902": "泰山区",
        "370903": "岱岳区",
        "370921": "宁阳县",
        "370923": "东平县",
        "370982": "新泰市",
        "370983": "肥城市",
        "370984": "其它区",
        "371000": "威海市",
        "371002": "环翠区",
        "371081": "文登市",
        "371082": "荣成市",
        "371083": "乳山市",
        "371084": "其它区",
        "371100": "日照市",
        "371102": "东港区",
        "371103": "岚山区",
        "371121": "五莲县",
        "371122": "莒县",
        "371123": "其它区",
        "371200": "莱芜市",
        "371202": "莱城区",
        "371203": "钢城区",
        "371204": "其它区",
        "371300": "临沂市",
        "371302": "兰山区",
        "371311": "罗庄区",
        "371312": "河东区",
        "371321": "沂南县",
        "371322": "郯城县",
        "371323": "沂水县",
        "371324": "苍山县",
        "371325": "费县",
        "371326": "平邑县",
        "371327": "莒南县",
        "371328": "蒙阴县",
        "371329": "临沭县",
        "371330": "其它区",
        "371400": "德州市",
        "371402": "德城区",
        "371421": "陵县",
        "371422": "宁津县",
        "371423": "庆云县",
        "371424": "临邑县",
        "371425": "齐河县",
        "371426": "平原县",
        "371427": "夏津县",
        "371428": "武城县",
        "371481": "乐陵市",
        "371482": "禹城市",
        "371483": "其它区",
        "371500": "聊城市",
        "371502": "东昌府区",
        "371521": "阳谷县",
        "371522": "莘县",
        "371523": "茌平县",
        "371524": "东阿县",
        "371525": "冠县",
        "371526": "高唐县",
        "371581": "临清市",
        "371582": "其它区",
        "371600": "滨州市",
        "371602": "滨城区",
        "371621": "惠民县",
        "371622": "阳信县",
        "371623": "无棣县",
        "371624": "沾化县",
        "371625": "博兴县",
        "371626": "邹平县",
        "371627": "其它区",
        "371700": "菏泽市",
        "371702": "牡丹区",
        "371721": "曹县",
        "371722": "单县",
        "371723": "成武县",
        "371724": "巨野县",
        "371725": "郓城县",
        "371726": "鄄城县",
        "371727": "定陶县",
        "371728": "东明县",
        "371729": "其它区",
        "410000": "河南省",
        "410100": "郑州市",
        "410102": "中原区",
        "410103": "二七区",
        "410104": "管城回族区",
        "410105": "金水区",
        "410106": "上街区",
        "410108": "惠济区",
        "410122": "中牟县",
        "410181": "巩义市",
        "410182": "荥阳市",
        "410183": "新密市",
        "410184": "新郑市",
        "410185": "登封市",
        "410188": "其它区",
        "410200": "开封市",
        "410202": "龙亭区",
        "410203": "顺河回族区",
        "410204": "鼓楼区",
        "410205": "禹王台区",
        "410211": "金明区",
        "410221": "杞县",
        "410222": "通许县",
        "410223": "尉氏县",
        "410224": "开封县",
        "410225": "兰考县",
        "410226": "其它区",
        "410300": "洛阳市",
        "410302": "老城区",
        "410303": "西工区",
        "410304": "瀍河回族区",
        "410305": "涧西区",
        "410306": "吉利区",
        "410307": "洛龙区",
        "410322": "孟津县",
        "410323": "新安县",
        "410324": "栾川县",
        "410325": "嵩县",
        "410326": "汝阳县",
        "410327": "宜阳县",
        "410328": "洛宁县",
        "410329": "伊川县",
        "410381": "偃师市",
        "410400": "平顶山市",
        "410402": "新华区",
        "410403": "卫东区",
        "410404": "石龙区",
        "410411": "湛河区",
        "410421": "宝丰县",
        "410422": "叶县",
        "410423": "鲁山县",
        "410425": "郏县",
        "410481": "舞钢市",
        "410482": "汝州市",
        "410483": "其它区",
        "410500": "安阳市",
        "410502": "文峰区",
        "410503": "北关区",
        "410505": "殷都区",
        "410506": "龙安区",
        "410522": "安阳县",
        "410523": "汤阴县",
        "410526": "滑县",
        "410527": "内黄县",
        "410581": "林州市",
        "410582": "其它区",
        "410600": "鹤壁市",
        "410602": "鹤山区",
        "410603": "山城区",
        "410611": "淇滨区",
        "410621": "浚县",
        "410622": "淇县",
        "410623": "其它区",
        "410700": "新乡市",
        "410702": "红旗区",
        "410703": "卫滨区",
        "410704": "凤泉区",
        "410711": "牧野区",
        "410721": "新乡县",
        "410724": "获嘉县",
        "410725": "原阳县",
        "410726": "延津县",
        "410727": "封丘县",
        "410728": "长垣县",
        "410781": "卫辉市",
        "410782": "辉县市",
        "410783": "其它区",
        "410800": "焦作市",
        "410802": "解放区",
        "410803": "中站区",
        "410804": "马村区",
        "410811": "山阳区",
        "410821": "修武县",
        "410822": "博爱县",
        "410823": "武陟县",
        "410825": "温县",
        "410881": "济源市",
        "410882": "沁阳市",
        "410883": "孟州市",
        "410884": "其它区",
        "410900": "濮阳市",
        "410902": "华龙区",
        "410922": "清丰县",
        "410923": "南乐县",
        "410926": "范县",
        "410927": "台前县",
        "410928": "濮阳县",
        "410929": "其它区",
        "411000": "许昌市",
        "411002": "魏都区",
        "411023": "许昌县",
        "411024": "鄢陵县",
        "411025": "襄城县",
        "411081": "禹州市",
        "411082": "长葛市",
        "411083": "其它区",
        "411100": "漯河市",
        "411102": "源汇区",
        "411103": "郾城区",
        "411104": "召陵区",
        "411121": "舞阳县",
        "411122": "临颍县",
        "411123": "其它区",
        "411200": "三门峡市",
        "411202": "湖滨区",
        "411221": "渑池县",
        "411222": "陕县",
        "411224": "卢氏县",
        "411281": "义马市",
        "411282": "灵宝市",
        "411283": "其它区",
        "411300": "南阳市",
        "411302": "宛城区",
        "411303": "卧龙区",
        "411321": "南召县",
        "411322": "方城县",
        "411323": "西峡县",
        "411324": "镇平县",
        "411325": "内乡县",
        "411326": "淅川县",
        "411327": "社旗县",
        "411328": "唐河县",
        "411329": "新野县",
        "411330": "桐柏县",
        "411381": "邓州市",
        "411382": "其它区",
        "411400": "商丘市",
        "411402": "梁园区",
        "411403": "睢阳区",
        "411421": "民权县",
        "411422": "睢县",
        "411423": "宁陵县",
        "411424": "柘城县",
        "411425": "虞城县",
        "411426": "夏邑县",
        "411481": "永城市",
        "411482": "其它区",
        "411500": "信阳市",
        "411502": "浉河区",
        "411503": "平桥区",
        "411521": "罗山县",
        "411522": "光山县",
        "411523": "新县",
        "411524": "商城县",
        "411525": "固始县",
        "411526": "潢川县",
        "411527": "淮滨县",
        "411528": "息县",
        "411529": "其它区",
        "411600": "周口市",
        "411602": "川汇区",
        "411621": "扶沟县",
        "411622": "西华县",
        "411623": "商水县",
        "411624": "沈丘县",
        "411625": "郸城县",
        "411626": "淮阳县",
        "411627": "太康县",
        "411628": "鹿邑县",
        "411681": "项城市",
        "411682": "其它区",
        "411700": "驻马店市",
        "411702": "驿城区",
        "411721": "西平县",
        "411722": "上蔡县",
        "411723": "平舆县",
        "411724": "正阳县",
        "411725": "确山县",
        "411726": "泌阳县",
        "411727": "汝南县",
        "411728": "遂平县",
        "411729": "新蔡县",
        "411730": "其它区",
        "420000": "湖北省",
        "420100": "武汉市",
        "420102": "江岸区",
        "420103": "江汉区",
        "420104": "硚口区",
        "420105": "汉阳区",
        "420106": "武昌区",
        "420107": "青山区",
        "420111": "洪山区",
        "420112": "东西湖区",
        "420113": "汉南区",
        "420114": "蔡甸区",
        "420115": "江夏区",
        "420116": "黄陂区",
        "420117": "新洲区",
        "420118": "其它区",
        "420200": "黄石市",
        "420202": "黄石港区",
        "420203": "西塞山区",
        "420204": "下陆区",
        "420205": "铁山区",
        "420222": "阳新县",
        "420281": "大冶市",
        "420282": "其它区",
        "420300": "十堰市",
        "420302": "茅箭区",
        "420303": "张湾区",
        "420321": "郧县",
        "420322": "郧西县",
        "420323": "竹山县",
        "420324": "竹溪县",
        "420325": "房县",
        "420381": "丹江口市",
        "420383": "其它区",
        "420500": "宜昌市",
        "420502": "西陵区",
        "420503": "伍家岗区",
        "420504": "点军区",
        "420505": "猇亭区",
        "420506": "夷陵区",
        "420525": "远安县",
        "420526": "兴山县",
        "420527": "秭归县",
        "420528": "长阳土家族自治县",
        "420529": "五峰土家族自治县",
        "420581": "宜都市",
        "420582": "当阳市",
        "420583": "枝江市",
        "420584": "其它区",
        "420600": "襄阳市",
        "420602": "襄城区",
        "420606": "樊城区",
        "420607": "襄州区",
        "420624": "南漳县",
        "420625": "谷城县",
        "420626": "保康县",
        "420682": "老河口市",
        "420683": "枣阳市",
        "420684": "宜城市",
        "420685": "其它区",
        "420700": "鄂州市",
        "420702": "梁子湖区",
        "420703": "华容区",
        "420704": "鄂城区",
        "420705": "其它区",
        "420800": "荆门市",
        "420802": "东宝区",
        "420804": "掇刀区",
        "420821": "京山县",
        "420822": "沙洋县",
        "420881": "钟祥市",
        "420882": "其它区",
        "420900": "孝感市",
        "420902": "孝南区",
        "420921": "孝昌县",
        "420922": "大悟县",
        "420923": "云梦县",
        "420981": "应城市",
        "420982": "安陆市",
        "420984": "汉川市",
        "420985": "其它区",
        "421000": "荆州市",
        "421002": "沙市区",
        "421003": "荆州区",
        "421022": "公安县",
        "421023": "监利县",
        "421024": "江陵县",
        "421081": "石首市",
        "421083": "洪湖市",
        "421087": "松滋市",
        "421088": "其它区",
        "421100": "黄冈市",
        "421102": "黄州区",
        "421121": "团风县",
        "421122": "红安县",
        "421123": "罗田县",
        "421124": "英山县",
        "421125": "浠水县",
        "421126": "蕲春县",
        "421127": "黄梅县",
        "421181": "麻城市",
        "421182": "武穴市",
        "421183": "其它区",
        "421200": "咸宁市",
        "421202": "咸安区",
        "421221": "嘉鱼县",
        "421222": "通城县",
        "421223": "崇阳县",
        "421224": "通山县",
        "421281": "赤壁市",
        "421283": "其它区",
        "421300": "随州市",
        "421302": "曾都区",
        "421321": "随县",
        "421381": "广水市",
        "421382": "其它区",
        "422800": "恩施土家族苗族自治州",
        "422801": "恩施市",
        "422802": "利川市",
        "422822": "建始县",
        "422823": "巴东县",
        "422825": "宣恩县",
        "422826": "咸丰县",
        "422827": "来凤县",
        "422828": "鹤峰县",
        "422829": "其它区",
        "429004": "仙桃市",
        "429005": "潜江市",
        "429006": "天门市",
        "429021": "神农架林区",
        "430000": "湖南省",
        "430100": "长沙市",
        "430102": "芙蓉区",
        "430103": "天心区",
        "430104": "岳麓区",
        "430105": "开福区",
        "430111": "雨花区",
        "430121": "长沙县",
        "430122": "望城区",
        "430124": "宁乡县",
        "430181": "浏阳市",
        "430182": "其它区",
        "430200": "株洲市",
        "430202": "荷塘区",
        "430203": "芦淞区",
        "430204": "石峰区",
        "430211": "天元区",
        "430221": "株洲县",
        "430223": "攸县",
        "430224": "茶陵县",
        "430225": "炎陵县",
        "430281": "醴陵市",
        "430282": "其它区",
        "430300": "湘潭市",
        "430302": "雨湖区",
        "430304": "岳塘区",
        "430321": "湘潭县",
        "430381": "湘乡市",
        "430382": "韶山市",
        "430383": "其它区",
        "430400": "衡阳市",
        "430405": "珠晖区",
        "430406": "雁峰区",
        "430407": "石鼓区",
        "430408": "蒸湘区",
        "430412": "南岳区",
        "430421": "衡阳县",
        "430422": "衡南县",
        "430423": "衡山县",
        "430424": "衡东县",
        "430426": "祁东县",
        "430481": "耒阳市",
        "430482": "常宁市",
        "430483": "其它区",
        "430500": "邵阳市",
        "430502": "双清区",
        "430503": "大祥区",
        "430511": "北塔区",
        "430521": "邵东县",
        "430522": "新邵县",
        "430523": "邵阳县",
        "430524": "隆回县",
        "430525": "洞口县",
        "430527": "绥宁县",
        "430528": "新宁县",
        "430529": "城步苗族自治县",
        "430581": "武冈市",
        "430582": "其它区",
        "430600": "岳阳市",
        "430602": "岳阳楼区",
        "430603": "云溪区",
        "430611": "君山区",
        "430621": "岳阳县",
        "430623": "华容县",
        "430624": "湘阴县",
        "430626": "平江县",
        "430681": "汨罗市",
        "430682": "临湘市",
        "430683": "其它区",
        "430700": "常德市",
        "430702": "武陵区",
        "430703": "鼎城区",
        "430721": "安乡县",
        "430722": "汉寿县",
        "430723": "澧县",
        "430724": "临澧县",
        "430725": "桃源县",
        "430726": "石门县",
        "430781": "津市市",
        "430782": "其它区",
        "430800": "张家界市",
        "430802": "永定区",
        "430811": "武陵源区",
        "430821": "慈利县",
        "430822": "桑植县",
        "430823": "其它区",
        "430900": "益阳市",
        "430902": "资阳区",
        "430903": "赫山区",
        "430921": "南县",
        "430922": "桃江县",
        "430923": "安化县",
        "430981": "沅江市",
        "430982": "其它区",
        "431000": "郴州市",
        "431002": "北湖区",
        "431003": "苏仙区",
        "431021": "桂阳县",
        "431022": "宜章县",
        "431023": "永兴县",
        "431024": "嘉禾县",
        "431025": "临武县",
        "431026": "汝城县",
        "431027": "桂东县",
        "431028": "安仁县",
        "431081": "资兴市",
        "431082": "其它区",
        "431100": "永州市",
        "431102": "零陵区",
        "431103": "冷水滩区",
        "431121": "祁阳县",
        "431122": "东安县",
        "431123": "双牌县",
        "431124": "道县",
        "431125": "江永县",
        "431126": "宁远县",
        "431127": "蓝山县",
        "431128": "新田县",
        "431129": "江华瑶族自治县",
        "431130": "其它区",
        "431200": "怀化市",
        "431202": "鹤城区",
        "431221": "中方县",
        "431222": "沅陵县",
        "431223": "辰溪县",
        "431224": "溆浦县",
        "431225": "会同县",
        "431226": "麻阳苗族自治县",
        "431227": "新晃侗族自治县",
        "431228": "芷江侗族自治县",
        "431229": "靖州苗族侗族自治县",
        "431230": "通道侗族自治县",
        "431281": "洪江市",
        "431282": "其它区",
        "431300": "娄底市",
        "431302": "娄星区",
        "431321": "双峰县",
        "431322": "新化县",
        "431381": "冷水江市",
        "431382": "涟源市",
        "431383": "其它区",
        "433100": "湘西土家族苗族自治州",
        "433101": "吉首市",
        "433122": "泸溪县",
        "433123": "凤凰县",
        "433124": "花垣县",
        "433125": "保靖县",
        "433126": "古丈县",
        "433127": "永顺县",
        "433130": "龙山县",
        "433131": "其它区",
        "440000": "广东省",
        "440100": "广州市",
        "440103": "荔湾区",
        "440104": "越秀区",
        "440105": "海珠区",
        "440106": "天河区",
        "440111": "白云区",
        "440112": "黄埔区",
        "440113": "番禺区",
        "440114": "花都区",
        "440115": "南沙区",
        "440116": "萝岗区",
        "440183": "增城市",
        "440184": "从化市",
        "440189": "其它区",
        "440200": "韶关市",
        "440203": "武江区",
        "440204": "浈江区",
        "440205": "曲江区",
        "440222": "始兴县",
        "440224": "仁化县",
        "440229": "翁源县",
        "440232": "乳源瑶族自治县",
        "440233": "新丰县",
        "440281": "乐昌市",
        "440282": "南雄市",
        "440283": "其它区",
        "440300": "深圳市",
        "440303": "罗湖区",
        "440304": "福田区",
        "440305": "南山区",
        "440306": "宝安区",
        "440307": "龙岗区",
        "440308": "盐田区",
        "440309": "其它区",
        "440320": "光明新区",
        "440321": "坪山新区",
        "440322": "大鹏新区",
        "440323": "龙华新区",
        "440400": "珠海市",
        "440402": "香洲区",
        "440403": "斗门区",
        "440404": "金湾区",
        "440488": "其它区",
        "440500": "汕头市",
        "440507": "龙湖区",
        "440511": "金平区",
        "440512": "濠江区",
        "440513": "潮阳区",
        "440514": "潮南区",
        "440515": "澄海区",
        "440523": "南澳县",
        "440524": "其它区",
        "440600": "佛山市",
        "440604": "禅城区",
        "440605": "南海区",
        "440606": "顺德区",
        "440607": "三水区",
        "440608": "高明区",
        "440609": "其它区",
        "440700": "江门市",
        "440703": "蓬江区",
        "440704": "江海区",
        "440705": "新会区",
        "440781": "台山市",
        "440783": "开平市",
        "440784": "鹤山市",
        "440785": "恩平市",
        "440786": "其它区",
        "440800": "湛江市",
        "440802": "赤坎区",
        "440803": "霞山区",
        "440804": "坡头区",
        "440811": "麻章区",
        "440823": "遂溪县",
        "440825": "徐闻县",
        "440881": "廉江市",
        "440882": "雷州市",
        "440883": "吴川市",
        "440884": "其它区",
        "440900": "茂名市",
        "440902": "茂南区",
        "440903": "茂港区",
        "440923": "电白县",
        "440981": "高州市",
        "440982": "化州市",
        "440983": "信宜市",
        "440984": "其它区",
        "441200": "肇庆市",
        "441202": "端州区",
        "441203": "鼎湖区",
        "441223": "广宁县",
        "441224": "怀集县",
        "441225": "封开县",
        "441226": "德庆县",
        "441283": "高要市",
        "441284": "四会市",
        "441285": "其它区",
        "441300": "惠州市",
        "441302": "惠城区",
        "441303": "惠阳区",
        "441322": "博罗县",
        "441323": "惠东县",
        "441324": "龙门县",
        "441325": "其它区",
        "441400": "梅州市",
        "441402": "梅江区",
        "441421": "梅县",
        "441422": "大埔县",
        "441423": "丰顺县",
        "441424": "五华县",
        "441426": "平远县",
        "441427": "蕉岭县",
        "441481": "兴宁市",
        "441482": "其它区",
        "441500": "汕尾市",
        "441502": "城区",
        "441521": "海丰县",
        "441523": "陆河县",
        "441581": "陆丰市",
        "441582": "其它区",
        "441600": "河源市",
        "441602": "源城区",
        "441621": "紫金县",
        "441622": "龙川县",
        "441623": "连平县",
        "441624": "和平县",
        "441625": "东源县",
        "441626": "其它区",
        "441700": "阳江市",
        "441702": "江城区",
        "441721": "阳西县",
        "441723": "阳东县",
        "441781": "阳春市",
        "441782": "其它区",
        "441800": "清远市",
        "441802": "清城区",
        "441821": "佛冈县",
        "441823": "阳山县",
        "441825": "连山壮族瑶族自治县",
        "441826": "连南瑶族自治县",
        "441827": "清新区",
        "441881": "英德市",
        "441882": "连州市",
        "441883": "其它区",
        "441900": "东莞市",
        "442000": "中山市",
        "442101": "东沙群岛",
        "445100": "潮州市",
        "445102": "湘桥区",
        "445121": "潮安区",
        "445122": "饶平县",
        "445186": "其它区",
        "445200": "揭阳市",
        "445202": "榕城区",
        "445221": "揭东区",
        "445222": "揭西县",
        "445224": "惠来县",
        "445281": "普宁市",
        "445285": "其它区",
        "445300": "云浮市",
        "445302": "云城区",
        "445321": "新兴县",
        "445322": "郁南县",
        "445323": "云安县",
        "445381": "罗定市",
        "445382": "其它区",
        "450000": "广西壮族自治区",
        "450100": "南宁市",
        "450102": "兴宁区",
        "450103": "青秀区",
        "450105": "江南区",
        "450107": "西乡塘区",
        "450108": "良庆区",
        "450109": "邕宁区",
        "450122": "武鸣县",
        "450123": "隆安县",
        "450124": "马山县",
        "450125": "上林县",
        "450126": "宾阳县",
        "450127": "横县",
        "450128": "其它区",
        "450200": "柳州市",
        "450202": "城中区",
        "450203": "鱼峰区",
        "450204": "柳南区",
        "450205": "柳北区",
        "450221": "柳江县",
        "450222": "柳城县",
        "450223": "鹿寨县",
        "450224": "融安县",
        "450225": "融水苗族自治县",
        "450226": "三江侗族自治县",
        "450227": "其它区",
        "450300": "桂林市",
        "450302": "秀峰区",
        "450303": "叠彩区",
        "450304": "象山区",
        "450305": "七星区",
        "450311": "雁山区",
        "450321": "阳朔县",
        "450322": "临桂区",
        "450323": "灵川县",
        "450324": "全州县",
        "450325": "兴安县",
        "450326": "永福县",
        "450327": "灌阳县",
        "450328": "龙胜各族自治县",
        "450329": "资源县",
        "450330": "平乐县",
        "450331": "荔浦县",
        "450332": "恭城瑶族自治县",
        "450333": "其它区",
        "450400": "梧州市",
        "450403": "万秀区",
        "450405": "长洲区",
        "450406": "龙圩区",
        "450421": "苍梧县",
        "450422": "藤县",
        "450423": "蒙山县",
        "450481": "岑溪市",
        "450482": "其它区",
        "450500": "北海市",
        "450502": "海城区",
        "450503": "银海区",
        "450512": "铁山港区",
        "450521": "合浦县",
        "450522": "其它区",
        "450600": "防城港市",
        "450602": "港口区",
        "450603": "防城区",
        "450621": "上思县",
        "450681": "东兴市",
        "450682": "其它区",
        "450700": "钦州市",
        "450702": "钦南区",
        "450703": "钦北区",
        "450721": "灵山县",
        "450722": "浦北县",
        "450723": "其它区",
        "450800": "贵港市",
        "450802": "港北区",
        "450803": "港南区",
        "450804": "覃塘区",
        "450821": "平南县",
        "450881": "桂平市",
        "450882": "其它区",
        "450900": "玉林市",
        "450902": "玉州区",
        "450903": "福绵区",
        "450921": "容县",
        "450922": "陆川县",
        "450923": "博白县",
        "450924": "兴业县",
        "450981": "北流市",
        "450982": "其它区",
        "451000": "百色市",
        "451002": "右江区",
        "451021": "田阳县",
        "451022": "田东县",
        "451023": "平果县",
        "451024": "德保县",
        "451025": "靖西县",
        "451026": "那坡县",
        "451027": "凌云县",
        "451028": "乐业县",
        "451029": "田林县",
        "451030": "西林县",
        "451031": "隆林各族自治县",
        "451032": "其它区",
        "451100": "贺州市",
        "451102": "八步区",
        "451119": "平桂管理区",
        "451121": "昭平县",
        "451122": "钟山县",
        "451123": "富川瑶族自治县",
        "451124": "其它区",
        "451200": "河池市",
        "451202": "金城江区",
        "451221": "南丹县",
        "451222": "天峨县",
        "451223": "凤山县",
        "451224": "东兰县",
        "451225": "罗城仫佬族自治县",
        "451226": "环江毛南族自治县",
        "451227": "巴马瑶族自治县",
        "451228": "都安瑶族自治县",
        "451229": "大化瑶族自治县",
        "451281": "宜州市",
        "451282": "其它区",
        "451300": "来宾市",
        "451302": "兴宾区",
        "451321": "忻城县",
        "451322": "象州县",
        "451323": "武宣县",
        "451324": "金秀瑶族自治县",
        "451381": "合山市",
        "451382": "其它区",
        "451400": "崇左市",
        "451402": "江州区",
        "451421": "扶绥县",
        "451422": "宁明县",
        "451423": "龙州县",
        "451424": "大新县",
        "451425": "天等县",
        "451481": "凭祥市",
        "451482": "其它区",
        "460000": "海南省",
        "460100": "海口市",
        "460105": "秀英区",
        "460106": "龙华区",
        "460107": "琼山区",
        "460108": "美兰区",
        "460109": "其它区",
        "460200": "三亚市",
        "460300": "三沙市",
        "460321": "西沙群岛",
        "460322": "南沙群岛",
        "460323": "中沙群岛的岛礁及其海域",
        "469001": "五指山市",
        "469002": "琼海市",
        "469003": "儋州市",
        "469005": "文昌市",
        "469006": "万宁市",
        "469007": "东方市",
        "469025": "定安县",
        "469026": "屯昌县",
        "469027": "澄迈县",
        "469028": "临高县",
        "469030": "白沙黎族自治县",
        "469031": "昌江黎族自治县",
        "469033": "乐东黎族自治县",
        "469034": "陵水黎族自治县",
        "469035": "保亭黎族苗族自治县",
        "469036": "琼中黎族苗族自治县",
        "471005": "其它区",
        "500000": "重庆",
        "500100": "重庆市",
        "500101": "万州区",
        "500102": "涪陵区",
        "500103": "渝中区",
        "500104": "大渡口区",
        "500105": "江北区",
        "500106": "沙坪坝区",
        "500107": "九龙坡区",
        "500108": "南岸区",
        "500109": "北碚区",
        "500110": "万盛区",
        "500111": "双桥区",
        "500112": "渝北区",
        "500113": "巴南区",
        "500114": "黔江区",
        "500115": "长寿区",
        "500222": "綦江区",
        "500223": "潼南县",
        "500224": "铜梁县",
        "500225": "大足区",
        "500226": "荣昌县",
        "500227": "璧山县",
        "500228": "梁平县",
        "500229": "城口县",
        "500230": "丰都县",
        "500231": "垫江县",
        "500232": "武隆县",
        "500233": "忠县",
        "500234": "开县",
        "500235": "云阳县",
        "500236": "奉节县",
        "500237": "巫山县",
        "500238": "巫溪县",
        "500240": "石柱土家族自治县",
        "500241": "秀山土家族苗族自治县",
        "500242": "酉阳土家族苗族自治县",
        "500243": "彭水苗族土家族自治县",
        "500381": "江津区",
        "500382": "合川区",
        "500383": "永川区",
        "500384": "南川区",
        "500385": "其它区",
        "510000": "四川省",
        "510100": "成都市",
        "510104": "锦江区",
        "510105": "青羊区",
        "510106": "金牛区",
        "510107": "武侯区",
        "510108": "成华区",
        "510112": "龙泉驿区",
        "510113": "青白江区",
        "510114": "新都区",
        "510115": "温江区",
        "510121": "金堂县",
        "510122": "双流县",
        "510124": "郫县",
        "510129": "大邑县",
        "510131": "蒲江县",
        "510132": "新津县",
        "510181": "都江堰市",
        "510182": "彭州市",
        "510183": "邛崃市",
        "510184": "崇州市",
        "510185": "其它区",
        "510300": "自贡市",
        "510302": "自流井区",
        "510303": "贡井区",
        "510304": "大安区",
        "510311": "沿滩区",
        "510321": "荣县",
        "510322": "富顺县",
        "510323": "其它区",
        "510400": "攀枝花市",
        "510402": "东区",
        "510403": "西区",
        "510411": "仁和区",
        "510421": "米易县",
        "510422": "盐边县",
        "510423": "其它区",
        "510500": "泸州市",
        "510502": "江阳区",
        "510503": "纳溪区",
        "510504": "龙马潭区",
        "510521": "泸县",
        "510522": "合江县",
        "510524": "叙永县",
        "510525": "古蔺县",
        "510526": "其它区",
        "510600": "德阳市",
        "510603": "旌阳区",
        "510623": "中江县",
        "510626": "罗江县",
        "510681": "广汉市",
        "510682": "什邡市",
        "510683": "绵竹市",
        "510684": "其它区",
        "510700": "绵阳市",
        "510703": "涪城区",
        "510704": "游仙区",
        "510722": "三台县",
        "510723": "盐亭县",
        "510724": "安县",
        "510725": "梓潼县",
        "510726": "北川羌族自治县",
        "510727": "平武县",
        "510781": "江油市",
        "510782": "其它区",
        "510800": "广元市",
        "510802": "利州区",
        "510811": "昭化区",
        "510812": "朝天区",
        "510821": "旺苍县",
        "510822": "青川县",
        "510823": "剑阁县",
        "510824": "苍溪县",
        "510825": "其它区",
        "510900": "遂宁市",
        "510903": "船山区",
        "510904": "安居区",
        "510921": "蓬溪县",
        "510922": "射洪县",
        "510923": "大英县",
        "510924": "其它区",
        "511000": "内江市",
        "511002": "市中区",
        "511011": "东兴区",
        "511024": "威远县",
        "511025": "资中县",
        "511028": "隆昌县",
        "511029": "其它区",
        "511100": "乐山市",
        "511102": "市中区",
        "511111": "沙湾区",
        "511112": "五通桥区",
        "511113": "金口河区",
        "511123": "犍为县",
        "511124": "井研县",
        "511126": "夹江县",
        "511129": "沐川县",
        "511132": "峨边彝族自治县",
        "511133": "马边彝族自治县",
        "511181": "峨眉山市",
        "511182": "其它区",
        "511300": "南充市",
        "511302": "顺庆区",
        "511303": "高坪区",
        "511304": "嘉陵区",
        "511321": "南部县",
        "511322": "营山县",
        "511323": "蓬安县",
        "511324": "仪陇县",
        "511325": "西充县",
        "511381": "阆中市",
        "511382": "其它区",
        "511400": "眉山市",
        "511402": "东坡区",
        "511421": "仁寿县",
        "511422": "彭山县",
        "511423": "洪雅县",
        "511424": "丹棱县",
        "511425": "青神县",
        "511426": "其它区",
        "511500": "宜宾市",
        "511502": "翠屏区",
        "511521": "宜宾县",
        "511522": "南溪区",
        "511523": "江安县",
        "511524": "长宁县",
        "511525": "高县",
        "511526": "珙县",
        "511527": "筠连县",
        "511528": "兴文县",
        "511529": "屏山县",
        "511530": "其它区",
        "511600": "广安市",
        "511602": "广安区",
        "511603": "前锋区",
        "511621": "岳池县",
        "511622": "武胜县",
        "511623": "邻水县",
        "511681": "华蓥市",
        "511683": "其它区",
        "511700": "达州市",
        "511702": "通川区",
        "511721": "达川区",
        "511722": "宣汉县",
        "511723": "开江县",
        "511724": "大竹县",
        "511725": "渠县",
        "511781": "万源市",
        "511782": "其它区",
        "511800": "雅安市",
        "511802": "雨城区",
        "511821": "名山区",
        "511822": "荥经县",
        "511823": "汉源县",
        "511824": "石棉县",
        "511825": "天全县",
        "511826": "芦山县",
        "511827": "宝兴县",
        "511828": "其它区",
        "511900": "巴中市",
        "511902": "巴州区",
        "511903": "恩阳区",
        "511921": "通江县",
        "511922": "南江县",
        "511923": "平昌县",
        "511924": "其它区",
        "512000": "资阳市",
        "512002": "雁江区",
        "512021": "安岳县",
        "512022": "乐至县",
        "512081": "简阳市",
        "512082": "其它区",
        "513200": "阿坝藏族羌族自治州",
        "513221": "汶川县",
        "513222": "理县",
        "513223": "茂县",
        "513224": "松潘县",
        "513225": "九寨沟县",
        "513226": "金川县",
        "513227": "小金县",
        "513228": "黑水县",
        "513229": "马尔康县",
        "513230": "壤塘县",
        "513231": "阿坝县",
        "513232": "若尔盖县",
        "513233": "红原县",
        "513234": "其它区",
        "513300": "甘孜藏族自治州",
        "513321": "康定县",
        "513322": "泸定县",
        "513323": "丹巴县",
        "513324": "九龙县",
        "513325": "雅江县",
        "513326": "道孚县",
        "513327": "炉霍县",
        "513328": "甘孜县",
        "513329": "新龙县",
        "513330": "德格县",
        "513331": "白玉县",
        "513332": "石渠县",
        "513333": "色达县",
        "513334": "理塘县",
        "513335": "巴塘县",
        "513336": "乡城县",
        "513337": "稻城县",
        "513338": "得荣县",
        "513339": "其它区",
        "513400": "凉山彝族自治州",
        "513401": "西昌市",
        "513422": "木里藏族自治县",
        "513423": "盐源县",
        "513424": "德昌县",
        "513425": "会理县",
        "513426": "会东县",
        "513427": "宁南县",
        "513428": "普格县",
        "513429": "布拖县",
        "513430": "金阳县",
        "513431": "昭觉县",
        "513432": "喜德县",
        "513433": "冕宁县",
        "513434": "越西县",
        "513435": "甘洛县",
        "513436": "美姑县",
        "513437": "雷波县",
        "513438": "其它区",
        "520000": "贵州省",
        "520100": "贵阳市",
        "520102": "南明区",
        "520103": "云岩区",
        "520111": "花溪区",
        "520112": "乌当区",
        "520113": "白云区",
        "520121": "开阳县",
        "520122": "息烽县",
        "520123": "修文县",
        "520151": "观山湖区",
        "520181": "清镇市",
        "520182": "其它区",
        "520200": "六盘水市",
        "520201": "钟山区",
        "520203": "六枝特区",
        "520221": "水城县",
        "520222": "盘县",
        "520223": "其它区",
        "520300": "遵义市",
        "520302": "红花岗区",
        "520303": "汇川区",
        "520321": "遵义县",
        "520322": "桐梓县",
        "520323": "绥阳县",
        "520324": "正安县",
        "520325": "道真仡佬族苗族自治县",
        "520326": "务川仡佬族苗族自治县",
        "520327": "凤冈县",
        "520328": "湄潭县",
        "520329": "余庆县",
        "520330": "习水县",
        "520381": "赤水市",
        "520382": "仁怀市",
        "520383": "其它区",
        "520400": "安顺市",
        "520402": "西秀区",
        "520421": "平坝县",
        "520422": "普定县",
        "520423": "镇宁布依族苗族自治县",
        "520424": "关岭布依族苗族自治县",
        "520425": "紫云苗族布依族自治县",
        "520426": "其它区",
        "522200": "铜仁市",
        "522201": "碧江区",
        "522222": "江口县",
        "522223": "玉屏侗族自治县",
        "522224": "石阡县",
        "522225": "思南县",
        "522226": "印江土家族苗族自治县",
        "522227": "德江县",
        "522228": "沿河土家族自治县",
        "522229": "松桃苗族自治县",
        "522230": "万山区",
        "522231": "其它区",
        "522300": "黔西南布依族苗族自治州",
        "522301": "兴义市",
        "522322": "兴仁县",
        "522323": "普安县",
        "522324": "晴隆县",
        "522325": "贞丰县",
        "522326": "望谟县",
        "522327": "册亨县",
        "522328": "安龙县",
        "522329": "其它区",
        "522400": "毕节市",
        "522401": "七星关区",
        "522422": "大方县",
        "522423": "黔西县",
        "522424": "金沙县",
        "522425": "织金县",
        "522426": "纳雍县",
        "522427": "威宁彝族回族苗族自治县",
        "522428": "赫章县",
        "522429": "其它区",
        "522600": "黔东南苗族侗族自治州",
        "522601": "凯里市",
        "522622": "黄平县",
        "522623": "施秉县",
        "522624": "三穗县",
        "522625": "镇远县",
        "522626": "岑巩县",
        "522627": "天柱县",
        "522628": "锦屏县",
        "522629": "剑河县",
        "522630": "台江县",
        "522631": "黎平县",
        "522632": "榕江县",
        "522633": "从江县",
        "522634": "雷山县",
        "522635": "麻江县",
        "522636": "丹寨县",
        "522637": "其它区",
        "522700": "黔南布依族苗族自治州",
        "522701": "都匀市",
        "522702": "福泉市",
        "522722": "荔波县",
        "522723": "贵定县",
        "522725": "瓮安县",
        "522726": "独山县",
        "522727": "平塘县",
        "522728": "罗甸县",
        "522729": "长顺县",
        "522730": "龙里县",
        "522731": "惠水县",
        "522732": "三都水族自治县",
        "522733": "其它区",
        "530000": "云南省",
        "530100": "昆明市",
        "530102": "五华区",
        "530103": "盘龙区",
        "530111": "官渡区",
        "530112": "西山区",
        "530113": "东川区",
        "530121": "呈贡区",
        "530122": "晋宁县",
        "530124": "富民县",
        "530125": "宜良县",
        "530126": "石林彝族自治县",
        "530127": "嵩明县",
        "530128": "禄劝彝族苗族自治县",
        "530129": "寻甸回族彝族自治县",
        "530181": "安宁市",
        "530182": "其它区",
        "530300": "曲靖市",
        "530302": "麒麟区",
        "530321": "马龙县",
        "530322": "陆良县",
        "530323": "师宗县",
        "530324": "罗平县",
        "530325": "富源县",
        "530326": "会泽县",
        "530328": "沾益县",
        "530381": "宣威市",
        "530382": "其它区",
        "530400": "玉溪市",
        "530402": "红塔区",
        "530421": "江川县",
        "530422": "澄江县",
        "530423": "通海县",
        "530424": "华宁县",
        "530425": "易门县",
        "530426": "峨山彝族自治县",
        "530427": "新平彝族傣族自治县",
        "530428": "元江哈尼族彝族傣族自治县",
        "530429": "其它区",
        "530500": "保山市",
        "530502": "隆阳区",
        "530521": "施甸县",
        "530522": "腾冲县",
        "530523": "龙陵县",
        "530524": "昌宁县",
        "530525": "其它区",
        "530600": "昭通市",
        "530602": "昭阳区",
        "530621": "鲁甸县",
        "530622": "巧家县",
        "530623": "盐津县",
        "530624": "大关县",
        "530625": "永善县",
        "530626": "绥江县",
        "530627": "镇雄县",
        "530628": "彝良县",
        "530629": "威信县",
        "530630": "水富县",
        "530631": "其它区",
        "530700": "丽江市",
        "530702": "古城区",
        "530721": "玉龙纳西族自治县",
        "530722": "永胜县",
        "530723": "华坪县",
        "530724": "宁蒗彝族自治县",
        "530725": "其它区",
        "530800": "普洱市",
        "530802": "思茅区",
        "530821": "宁洱哈尼族彝族自治县",
        "530822": "墨江哈尼族自治县",
        "530823": "景东彝族自治县",
        "530824": "景谷傣族彝族自治县",
        "530825": "镇沅彝族哈尼族拉祜族自治县",
        "530826": "江城哈尼族彝族自治县",
        "530827": "孟连傣族拉祜族佤族自治县",
        "530828": "澜沧拉祜族自治县",
        "530829": "西盟佤族自治县",
        "530830": "其它区",
        "530900": "临沧市",
        "530902": "临翔区",
        "530921": "凤庆县",
        "530922": "云县",
        "530923": "永德县",
        "530924": "镇康县",
        "530925": "双江拉祜族佤族布朗族傣族自治县",
        "530926": "耿马傣族佤族自治县",
        "530927": "沧源佤族自治县",
        "530928": "其它区",
        "532300": "楚雄彝族自治州",
        "532301": "楚雄市",
        "532322": "双柏县",
        "532323": "牟定县",
        "532324": "南华县",
        "532325": "姚安县",
        "532326": "大姚县",
        "532327": "永仁县",
        "532328": "元谋县",
        "532329": "武定县",
        "532331": "禄丰县",
        "532332": "其它区",
        "532500": "红河哈尼族彝族自治州",
        "532501": "个旧市",
        "532502": "开远市",
        "532522": "蒙自市",
        "532523": "屏边苗族自治县",
        "532524": "建水县",
        "532525": "石屏县",
        "532526": "弥勒市",
        "532527": "泸西县",
        "532528": "元阳县",
        "532529": "红河县",
        "532530": "金平苗族瑶族傣族自治县",
        "532531": "绿春县",
        "532532": "河口瑶族自治县",
        "532533": "其它区",
        "532600": "文山壮族苗族自治州",
        "532621": "文山市",
        "532622": "砚山县",
        "532623": "西畴县",
        "532624": "麻栗坡县",
        "532625": "马关县",
        "532626": "丘北县",
        "532627": "广南县",
        "532628": "富宁县",
        "532629": "其它区",
        "532800": "西双版纳傣族自治州",
        "532801": "景洪市",
        "532822": "勐海县",
        "532823": "勐腊县",
        "532824": "其它区",
        "532900": "大理白族自治州",
        "532901": "大理市",
        "532922": "漾濞彝族自治县",
        "532923": "祥云县",
        "532924": "宾川县",
        "532925": "弥渡县",
        "532926": "南涧彝族自治县",
        "532927": "巍山彝族回族自治县",
        "532928": "永平县",
        "532929": "云龙县",
        "532930": "洱源县",
        "532931": "剑川县",
        "532932": "鹤庆县",
        "532933": "其它区",
        "533100": "德宏傣族景颇族自治州",
        "533102": "瑞丽市",
        "533103": "芒市",
        "533122": "梁河县",
        "533123": "盈江县",
        "533124": "陇川县",
        "533125": "其它区",
        "533300": "怒江傈僳族自治州",
        "533321": "泸水县",
        "533323": "福贡县",
        "533324": "贡山独龙族怒族自治县",
        "533325": "兰坪白族普米族自治县",
        "533326": "其它区",
        "533400": "迪庆藏族自治州",
        "533421": "香格里拉县",
        "533422": "德钦县",
        "533423": "维西傈僳族自治县",
        "533424": "其它区",
        "540000": "西藏自治区",
        "540100": "拉萨市",
        "540102": "城关区",
        "540121": "林周县",
        "540122": "当雄县",
        "540123": "尼木县",
        "540124": "曲水县",
        "540125": "堆龙德庆县",
        "540126": "达孜县",
        "540127": "墨竹工卡县",
        "540128": "其它区",
        "542100": "昌都地区",
        "542121": "昌都县",
        "542122": "江达县",
        "542123": "贡觉县",
        "542124": "类乌齐县",
        "542125": "丁青县",
        "542126": "察雅县",
        "542127": "八宿县",
        "542128": "左贡县",
        "542129": "芒康县",
        "542132": "洛隆县",
        "542133": "边坝县",
        "542134": "其它区",
        "542200": "山南地区",
        "542221": "乃东县",
        "542222": "扎囊县",
        "542223": "贡嘎县",
        "542224": "桑日县",
        "542225": "琼结县",
        "542226": "曲松县",
        "542227": "措美县",
        "542228": "洛扎县",
        "542229": "加查县",
        "542231": "隆子县",
        "542232": "错那县",
        "542233": "浪卡子县",
        "542234": "其它区",
        "542300": "日喀则地区",
        "542301": "日喀则市",
        "542322": "南木林县",
        "542323": "江孜县",
        "542324": "定日县",
        "542325": "萨迦县",
        "542326": "拉孜县",
        "542327": "昂仁县",
        "542328": "谢通门县",
        "542329": "白朗县",
        "542330": "仁布县",
        "542331": "康马县",
        "542332": "定结县",
        "542333": "仲巴县",
        "542334": "亚东县",
        "542335": "吉隆县",
        "542336": "聂拉木县",
        "542337": "萨嘎县",
        "542338": "岗巴县",
        "542339": "其它区",
        "542400": "那曲地区",
        "542421": "那曲县",
        "542422": "嘉黎县",
        "542423": "比如县",
        "542424": "聂荣县",
        "542425": "安多县",
        "542426": "申扎县",
        "542427": "索县",
        "542428": "班戈县",
        "542429": "巴青县",
        "542430": "尼玛县",
        "542431": "其它区",
        "542432": "双湖县",
        "542500": "阿里地区",
        "542521": "普兰县",
        "542522": "札达县",
        "542523": "噶尔县",
        "542524": "日土县",
        "542525": "革吉县",
        "542526": "改则县",
        "542527": "措勤县",
        "542528": "其它区",
        "542600": "林芝地区",
        "542621": "林芝县",
        "542622": "工布江达县",
        "542623": "米林县",
        "542624": "墨脱县",
        "542625": "波密县",
        "542626": "察隅县",
        "542627": "朗县",
        "542628": "其它区",
        "610000": "陕西省",
        "610100": "西安市",
        "610102": "新城区",
        "610103": "碑林区",
        "610104": "莲湖区",
        "610111": "灞桥区",
        "610112": "未央区",
        "610113": "雁塔区",
        "610114": "阎良区",
        "610115": "临潼区",
        "610116": "长安区",
        "610122": "蓝田县",
        "610124": "周至县",
        "610125": "户县",
        "610126": "高陵县",
        "610127": "其它区",
        "610200": "铜川市",
        "610202": "王益区",
        "610203": "印台区",
        "610204": "耀州区",
        "610222": "宜君县",
        "610223": "其它区",
        "610300": "宝鸡市",
        "610302": "渭滨区",
        "610303": "金台区",
        "610304": "陈仓区",
        "610322": "凤翔县",
        "610323": "岐山县",
        "610324": "扶风县",
        "610326": "眉县",
        "610327": "陇县",
        "610328": "千阳县",
        "610329": "麟游县",
        "610330": "凤县",
        "610331": "太白县",
        "610332": "其它区",
        "610400": "咸阳市",
        "610402": "秦都区",
        "610403": "杨陵区",
        "610404": "渭城区",
        "610422": "三原县",
        "610423": "泾阳县",
        "610424": "乾县",
        "610425": "礼泉县",
        "610426": "永寿县",
        "610427": "彬县",
        "610428": "长武县",
        "610429": "旬邑县",
        "610430": "淳化县",
        "610431": "武功县",
        "610481": "兴平市",
        "610482": "其它区",
        "610500": "渭南市",
        "610502": "临渭区",
        "610521": "华县",
        "610522": "潼关县",
        "610523": "大荔县",
        "610524": "合阳县",
        "610525": "澄城县",
        "610526": "蒲城县",
        "610527": "白水县",
        "610528": "富平县",
        "610581": "韩城市",
        "610582": "华阴市",
        "610583": "其它区",
        "610600": "延安市",
        "610602": "宝塔区",
        "610621": "延长县",
        "610622": "延川县",
        "610623": "子长县",
        "610624": "安塞县",
        "610625": "志丹县",
        "610626": "吴起县",
        "610627": "甘泉县",
        "610628": "富县",
        "610629": "洛川县",
        "610630": "宜川县",
        "610631": "黄龙县",
        "610632": "黄陵县",
        "610633": "其它区",
        "610700": "汉中市",
        "610702": "汉台区",
        "610721": "南郑县",
        "610722": "城固县",
        "610723": "洋县",
        "610724": "西乡县",
        "610725": "勉县",
        "610726": "宁强县",
        "610727": "略阳县",
        "610728": "镇巴县",
        "610729": "留坝县",
        "610730": "佛坪县",
        "610731": "其它区",
        "610800": "榆林市",
        "610802": "榆阳区",
        "610821": "神木县",
        "610822": "府谷县",
        "610823": "横山县",
        "610824": "靖边县",
        "610825": "定边县",
        "610826": "绥德县",
        "610827": "米脂县",
        "610828": "佳县",
        "610829": "吴堡县",
        "610830": "清涧县",
        "610831": "子洲县",
        "610832": "其它区",
        "610900": "安康市",
        "610902": "汉滨区",
        "610921": "汉阴县",
        "610922": "石泉县",
        "610923": "宁陕县",
        "610924": "紫阳县",
        "610925": "岚皋县",
        "610926": "平利县",
        "610927": "镇坪县",
        "610928": "旬阳县",
        "610929": "白河县",
        "610930": "其它区",
        "611000": "商洛市",
        "611002": "商州区",
        "611021": "洛南县",
        "611022": "丹凤县",
        "611023": "商南县",
        "611024": "山阳县",
        "611025": "镇安县",
        "611026": "柞水县",
        "611027": "其它区",
        "620000": "甘肃省",
        "620100": "兰州市",
        "620102": "城关区",
        "620103": "七里河区",
        "620104": "西固区",
        "620105": "安宁区",
        "620111": "红古区",
        "620121": "永登县",
        "620122": "皋兰县",
        "620123": "榆中县",
        "620124": "其它区",
        "620200": "嘉峪关市",
        "620300": "金昌市",
        "620302": "金川区",
        "620321": "永昌县",
        "620322": "其它区",
        "620400": "白银市",
        "620402": "白银区",
        "620403": "平川区",
        "620421": "靖远县",
        "620422": "会宁县",
        "620423": "景泰县",
        "620424": "其它区",
        "620500": "天水市",
        "620502": "秦州区",
        "620503": "麦积区",
        "620521": "清水县",
        "620522": "秦安县",
        "620523": "甘谷县",
        "620524": "武山县",
        "620525": "张家川回族自治县",
        "620526": "其它区",
        "620600": "武威市",
        "620602": "凉州区",
        "620621": "民勤县",
        "620622": "古浪县",
        "620623": "天祝藏族自治县",
        "620624": "其它区",
        "620700": "张掖市",
        "620702": "甘州区",
        "620721": "肃南裕固族自治县",
        "620722": "民乐县",
        "620723": "临泽县",
        "620724": "高台县",
        "620725": "山丹县",
        "620726": "其它区",
        "620800": "平凉市",
        "620802": "崆峒区",
        "620821": "泾川县",
        "620822": "灵台县",
        "620823": "崇信县",
        "620824": "华亭县",
        "620825": "庄浪县",
        "620826": "静宁县",
        "620827": "其它区",
        "620900": "酒泉市",
        "620902": "肃州区",
        "620921": "金塔县",
        "620922": "瓜州县",
        "620923": "肃北蒙古族自治县",
        "620924": "阿克塞哈萨克族自治县",
        "620981": "玉门市",
        "620982": "敦煌市",
        "620983": "其它区",
        "621000": "庆阳市",
        "621002": "西峰区",
        "621021": "庆城县",
        "621022": "环县",
        "621023": "华池县",
        "621024": "合水县",
        "621025": "正宁县",
        "621026": "宁县",
        "621027": "镇原县",
        "621028": "其它区",
        "621100": "定西市",
        "621102": "安定区",
        "621121": "通渭县",
        "621122": "陇西县",
        "621123": "渭源县",
        "621124": "临洮县",
        "621125": "漳县",
        "621126": "岷县",
        "621127": "其它区",
        "621200": "陇南市",
        "621202": "武都区",
        "621221": "成县",
        "621222": "文县",
        "621223": "宕昌县",
        "621224": "康县",
        "621225": "西和县",
        "621226": "礼县",
        "621227": "徽县",
        "621228": "两当县",
        "621229": "其它区",
        "622900": "临夏回族自治州",
        "622901": "临夏市",
        "622921": "临夏县",
        "622922": "康乐县",
        "622923": "永靖县",
        "622924": "广河县",
        "622925": "和政县",
        "622926": "东乡族自治县",
        "622927": "积石山保安族东乡族撒拉族自治县",
        "622928": "其它区",
        "623000": "甘南藏族自治州",
        "623001": "合作市",
        "623021": "临潭县",
        "623022": "卓尼县",
        "623023": "舟曲县",
        "623024": "迭部县",
        "623025": "玛曲县",
        "623026": "碌曲县",
        "623027": "夏河县",
        "623028": "其它区",
        "630000": "青海省",
        "630100": "西宁市",
        "630102": "城东区",
        "630103": "城中区",
        "630104": "城西区",
        "630105": "城北区",
        "630121": "大通回族土族自治县",
        "630122": "湟中县",
        "630123": "湟源县",
        "630124": "其它区",
        "632100": "海东市",
        "632121": "平安县",
        "632122": "民和回族土族自治县",
        "632123": "乐都区",
        "632126": "互助土族自治县",
        "632127": "化隆回族自治县",
        "632128": "循化撒拉族自治县",
        "632129": "其它区",
        "632200": "海北藏族自治州",
        "632221": "门源回族自治县",
        "632222": "祁连县",
        "632223": "海晏县",
        "632224": "刚察县",
        "632225": "其它区",
        "632300": "黄南藏族自治州",
        "632321": "同仁县",
        "632322": "尖扎县",
        "632323": "泽库县",
        "632324": "河南蒙古族自治县",
        "632325": "其它区",
        "632500": "海南藏族自治州",
        "632521": "共和县",
        "632522": "同德县",
        "632523": "贵德县",
        "632524": "兴海县",
        "632525": "贵南县",
        "632526": "其它区",
        "632600": "果洛藏族自治州",
        "632621": "玛沁县",
        "632622": "班玛县",
        "632623": "甘德县",
        "632624": "达日县",
        "632625": "久治县",
        "632626": "玛多县",
        "632627": "其它区",
        "632700": "玉树藏族自治州",
        "632721": "玉树市",
        "632722": "杂多县",
        "632723": "称多县",
        "632724": "治多县",
        "632725": "囊谦县",
        "632726": "曲麻莱县",
        "632727": "其它区",
        "632800": "海西蒙古族藏族自治州",
        "632801": "格尔木市",
        "632802": "德令哈市",
        "632821": "乌兰县",
        "632822": "都兰县",
        "632823": "天峻县",
        "632824": "其它区",
        "640000": "宁夏回族自治区",
        "640100": "银川市",
        "640104": "兴庆区",
        "640105": "西夏区",
        "640106": "金凤区",
        "640121": "永宁县",
        "640122": "贺兰县",
        "640181": "灵武市",
        "640182": "其它区",
        "640200": "石嘴山市",
        "640202": "大武口区",
        "640205": "惠农区",
        "640221": "平罗县",
        "640222": "其它区",
        "640300": "吴忠市",
        "640302": "利通区",
        "640303": "红寺堡区",
        "640323": "盐池县",
        "640324": "同心县",
        "640381": "青铜峡市",
        "640382": "其它区",
        "640400": "固原市",
        "640402": "原州区",
        "640422": "西吉县",
        "640423": "隆德县",
        "640424": "泾源县",
        "640425": "彭阳县",
        "640426": "其它区",
        "640500": "中卫市",
        "640502": "沙坡头区",
        "640521": "中宁县",
        "640522": "海原县",
        "640523": "其它区",
        "650000": "新疆维吾尔自治区",
        "650100": "乌鲁木齐市",
        "650102": "天山区",
        "650103": "沙依巴克区",
        "650104": "新市区",
        "650105": "水磨沟区",
        "650106": "头屯河区",
        "650107": "达坂城区",
        "650109": "米东区",
        "650121": "乌鲁木齐县",
        "650122": "其它区",
        "650200": "克拉玛依市",
        "650202": "独山子区",
        "650203": "克拉玛依区",
        "650204": "白碱滩区",
        "650205": "乌尔禾区",
        "650206": "其它区",
        "652100": "吐鲁番地区",
        "652101": "吐鲁番市",
        "652122": "鄯善县",
        "652123": "托克逊县",
        "652124": "其它区",
        "652200": "哈密地区",
        "652201": "哈密市",
        "652222": "巴里坤哈萨克自治县",
        "652223": "伊吾县",
        "652224": "其它区",
        "652300": "昌吉回族自治州",
        "652301": "昌吉市",
        "652302": "阜康市",
        "652323": "呼图壁县",
        "652324": "玛纳斯县",
        "652325": "奇台县",
        "652327": "吉木萨尔县",
        "652328": "木垒哈萨克自治县",
        "652329": "其它区",
        "652700": "博尔塔拉蒙古自治州",
        "652701": "博乐市",
        "652702": "阿拉山口市",
        "652722": "精河县",
        "652723": "温泉县",
        "652724": "其它区",
        "652800": "巴音郭楞蒙古自治州",
        "652801": "库尔勒市",
        "652822": "轮台县",
        "652823": "尉犁县",
        "652824": "若羌县",
        "652825": "且末县",
        "652826": "焉耆回族自治县",
        "652827": "和静县",
        "652828": "和硕县",
        "652829": "博湖县",
        "652830": "其它区",
        "652900": "阿克苏地区",
        "652901": "阿克苏市",
        "652922": "温宿县",
        "652923": "库车县",
        "652924": "沙雅县",
        "652925": "新和县",
        "652926": "拜城县",
        "652927": "乌什县",
        "652928": "阿瓦提县",
        "652929": "柯坪县",
        "652930": "其它区",
        "653000": "克孜勒苏柯尔克孜自治州",
        "653001": "阿图什市",
        "653022": "阿克陶县",
        "653023": "阿合奇县",
        "653024": "乌恰县",
        "653025": "其它区",
        "653100": "喀什地区",
        "653101": "喀什市",
        "653121": "疏附县",
        "653122": "疏勒县",
        "653123": "英吉沙县",
        "653124": "泽普县",
        "653125": "莎车县",
        "653126": "叶城县",
        "653127": "麦盖提县",
        "653128": "岳普湖县",
        "653129": "伽师县",
        "653130": "巴楚县",
        "653131": "塔什库尔干塔吉克自治县",
        "653132": "其它区",
        "653200": "和田地区",
        "653201": "和田市",
        "653221": "和田县",
        "653222": "墨玉县",
        "653223": "皮山县",
        "653224": "洛浦县",
        "653225": "策勒县",
        "653226": "于田县",
        "653227": "民丰县",
        "653228": "其它区",
        "654000": "伊犁哈萨克自治州",
        "654002": "伊宁市",
        "654003": "奎屯市",
        "654021": "伊宁县",
        "654022": "察布查尔锡伯自治县",
        "654023": "霍城县",
        "654024": "巩留县",
        "654025": "新源县",
        "654026": "昭苏县",
        "654027": "特克斯县",
        "654028": "尼勒克县",
        "654029": "其它区",
        "654200": "塔城地区",
        "654201": "塔城市",
        "654202": "乌苏市",
        "654221": "额敏县",
        "654223": "沙湾县",
        "654224": "托里县",
        "654225": "裕民县",
        "654226": "和布克赛尔蒙古自治县",
        "654227": "其它区",
        "654300": "阿勒泰地区",
        "654301": "阿勒泰市",
        "654321": "布尔津县",
        "654322": "富蕴县",
        "654323": "福海县",
        "654324": "哈巴河县",
        "654325": "青河县",
        "654326": "吉木乃县",
        "654327": "其它区",
        "659001": "石河子市",
        "659002": "阿拉尔市",
        "659003": "图木舒克市",
        "659004": "五家渠市",
        "710000": "台湾",
        "710100": "台北市",
        "710101": "中正区",
        "710102": "大同区",
        "710103": "中山区",
        "710104": "松山区",
        "710105": "大安区",
        "710106": "万华区",
        "710107": "信义区",
        "710108": "士林区",
        "710109": "北投区",
        "710110": "内湖区",
        "710111": "南港区",
        "710112": "文山区",
        "710113": "其它区",
        "710200": "高雄市",
        "710201": "新兴区",
        "710202": "前金区",
        "710203": "芩雅区",
        "710204": "盐埕区",
        "710205": "鼓山区",
        "710206": "旗津区",
        "710207": "前镇区",
        "710208": "三民区",
        "710209": "左营区",
        "710210": "楠梓区",
        "710211": "小港区",
        "710212": "其它区",
        "710241": "苓雅区",
        "710242": "仁武区",
        "710243": "大社区",
        "710244": "冈山区",
        "710245": "路竹区",
        "710246": "阿莲区",
        "710247": "田寮区",
        "710248": "燕巢区",
        "710249": "桥头区",
        "710250": "梓官区",
        "710251": "弥陀区",
        "710252": "永安区",
        "710253": "湖内区",
        "710254": "凤山区",
        "710255": "大寮区",
        "710256": "林园区",
        "710257": "鸟松区",
        "710258": "大树区",
        "710259": "旗山区",
        "710260": "美浓区",
        "710261": "六龟区",
        "710262": "内门区",
        "710263": "杉林区",
        "710264": "甲仙区",
        "710265": "桃源区",
        "710266": "那玛夏区",
        "710267": "茂林区",
        "710268": "茄萣区",
        "710300": "台南市",
        "710301": "中西区",
        "710302": "东区",
        "710303": "南区",
        "710304": "北区",
        "710305": "安平区",
        "710306": "安南区",
        "710307": "其它区",
        "710339": "永康区",
        "710340": "归仁区",
        "710341": "新化区",
        "710342": "左镇区",
        "710343": "玉井区",
        "710344": "楠西区",
        "710345": "南化区",
        "710346": "仁德区",
        "710347": "关庙区",
        "710348": "龙崎区",
        "710349": "官田区",
        "710350": "麻豆区",
        "710351": "佳里区",
        "710352": "西港区",
        "710353": "七股区",
        "710354": "将军区",
        "710355": "学甲区",
        "710356": "北门区",
        "710357": "新营区",
        "710358": "后壁区",
        "710359": "白河区",
        "710360": "东山区",
        "710361": "六甲区",
        "710362": "下营区",
        "710363": "柳营区",
        "710364": "盐水区",
        "710365": "善化区",
        "710366": "大内区",
        "710367": "山上区",
        "710368": "新市区",
        "710369": "安定区",
        "710400": "台中市",
        "710401": "中区",
        "710402": "东区",
        "710403": "南区",
        "710404": "西区",
        "710405": "北区",
        "710406": "北屯区",
        "710407": "西屯区",
        "710408": "南屯区",
        "710409": "其它区",
        "710431": "太平区",
        "710432": "大里区",
        "710433": "雾峰区",
        "710434": "乌日区",
        "710435": "丰原区",
        "710436": "后里区",
        "710437": "石冈区",
        "710438": "东势区",
        "710439": "和平区",
        "710440": "新社区",
        "710441": "潭子区",
        "710442": "大雅区",
        "710443": "神冈区",
        "710444": "大肚区",
        "710445": "沙鹿区",
        "710446": "龙井区",
        "710447": "梧栖区",
        "710448": "清水区",
        "710449": "大甲区",
        "710450": "外埔区",
        "710451": "大安区",
        "710500": "金门县",
        "710507": "金沙镇",
        "710508": "金湖镇",
        "710509": "金宁乡",
        "710510": "金城镇",
        "710511": "烈屿乡",
        "710512": "乌坵乡",
        "710600": "南投县",
        "710614": "南投市",
        "710615": "中寮乡",
        "710616": "草屯镇",
        "710617": "国姓乡",
        "710618": "埔里镇",
        "710619": "仁爱乡",
        "710620": "名间乡",
        "710621": "集集镇",
        "710622": "水里乡",
        "710623": "鱼池乡",
        "710624": "信义乡",
        "710625": "竹山镇",
        "710626": "鹿谷乡",
        "710700": "基隆市",
        "710701": "仁爱区",
        "710702": "信义区",
        "710703": "中正区",
        "710704": "中山区",
        "710705": "安乐区",
        "710706": "暖暖区",
        "710707": "七堵区",
        "710708": "其它区",
        "710800": "新竹市",
        "710801": "东区",
        "710802": "北区",
        "710803": "香山区",
        "710804": "其它区",
        "710900": "嘉义市",
        "710901": "东区",
        "710902": "西区",
        "710903": "其它区",
        "711100": "新北市",
        "711130": "万里区",
        "711131": "金山区",
        "711132": "板桥区",
        "711133": "汐止区",
        "711134": "深坑区",
        "711135": "石碇区",
        "711136": "瑞芳区",
        "711137": "平溪区",
        "711138": "双溪区",
        "711139": "贡寮区",
        "711140": "新店区",
        "711141": "坪林区",
        "711142": "乌来区",
        "711143": "永和区",
        "711144": "中和区",
        "711145": "土城区",
        "711146": "三峡区",
        "711147": "树林区",
        "711148": "莺歌区",
        "711149": "三重区",
        "711150": "新庄区",
        "711151": "泰山区",
        "711152": "林口区",
        "711153": "芦洲区",
        "711154": "五股区",
        "711155": "八里区",
        "711156": "淡水区",
        "711157": "三芝区",
        "711158": "石门区",
        "711200": "宜兰县",
        "711214": "宜兰市",
        "711215": "头城镇",
        "711216": "礁溪乡",
        "711217": "壮围乡",
        "711218": "员山乡",
        "711219": "罗东镇",
        "711220": "三星乡",
        "711221": "大同乡",
        "711222": "五结乡",
        "711223": "冬山乡",
        "711224": "苏澳镇",
        "711225": "南澳乡",
        "711226": "钓鱼台",
        "711300": "新竹县",
        "711314": "竹北市",
        "711315": "湖口乡",
        "711316": "新丰乡",
        "711317": "新埔镇",
        "711318": "关西镇",
        "711319": "芎林乡",
        "711320": "宝山乡",
        "711321": "竹东镇",
        "711322": "五峰乡",
        "711323": "横山乡",
        "711324": "尖石乡",
        "711325": "北埔乡",
        "711326": "峨眉乡",
        "711400": "桃园县",
        "711414": "中坜市",
        "711415": "平镇市",
        "711416": "龙潭乡",
        "711417": "杨梅市",
        "711418": "新屋乡",
        "711419": "观音乡",
        "711420": "桃园市",
        "711421": "龟山乡",
        "711422": "八德市",
        "711423": "大溪镇",
        "711424": "复兴乡",
        "711425": "大园乡",
        "711426": "芦竹乡",
        "711500": "苗栗县",
        "711519": "竹南镇",
        "711520": "头份镇",
        "711521": "三湾乡",
        "711522": "南庄乡",
        "711523": "狮潭乡",
        "711524": "后龙镇",
        "711525": "通霄镇",
        "711526": "苑里镇",
        "711527": "苗栗市",
        "711528": "造桥乡",
        "711529": "头屋乡",
        "711530": "公馆乡",
        "711531": "大湖乡",
        "711532": "泰安乡",
        "711533": "铜锣乡",
        "711534": "三义乡",
        "711535": "西湖乡",
        "711536": "卓兰镇",
        "711700": "彰化县",
        "711727": "彰化市",
        "711728": "芬园乡",
        "711729": "花坛乡",
        "711730": "秀水乡",
        "711731": "鹿港镇",
        "711732": "福兴乡",
        "711733": "线西乡",
        "711734": "和美镇",
        "711735": "伸港乡",
        "711736": "员林镇",
        "711737": "社头乡",
        "711738": "永靖乡",
        "711739": "埔心乡",
        "711740": "溪湖镇",
        "711741": "大村乡",
        "711742": "埔盐乡",
        "711743": "田中镇",
        "711744": "北斗镇",
        "711745": "田尾乡",
        "711746": "埤头乡",
        "711747": "溪州乡",
        "711748": "竹塘乡",
        "711749": "二林镇",
        "711750": "大城乡",
        "711751": "芳苑乡",
        "711752": "二水乡",
        "711900": "嘉义县",
        "711919": "番路乡",
        "711920": "梅山乡",
        "711921": "竹崎乡",
        "711922": "阿里山乡",
        "711923": "中埔乡",
        "711924": "大埔乡",
        "711925": "水上乡",
        "711926": "鹿草乡",
        "711927": "太保市",
        "711928": "朴子市",
        "711929": "东石乡",
        "711930": "六脚乡",
        "711931": "新港乡",
        "711932": "民雄乡",
        "711933": "大林镇",
        "711934": "溪口乡",
        "711935": "义竹乡",
        "711936": "布袋镇",
        "712100": "云林县",
        "712121": "斗南镇",
        "712122": "大埤乡",
        "712123": "虎尾镇",
        "712124": "土库镇",
        "712125": "褒忠乡",
        "712126": "东势乡",
        "712127": "台西乡",
        "712128": "仑背乡",
        "712129": "麦寮乡",
        "712130": "斗六市",
        "712131": "林内乡",
        "712132": "古坑乡",
        "712133": "莿桐乡",
        "712134": "西螺镇",
        "712135": "二仑乡",
        "712136": "北港镇",
        "712137": "水林乡",
        "712138": "口湖乡",
        "712139": "四湖乡",
        "712140": "元长乡",
        "712400": "屏东县",
        "712434": "屏东市",
        "712435": "三地门乡",
        "712436": "雾台乡",
        "712437": "玛家乡",
        "712438": "九如乡",
        "712439": "里港乡",
        "712440": "高树乡",
        "712441": "盐埔乡",
        "712442": "长治乡",
        "712443": "麟洛乡",
        "712444": "竹田乡",
        "712445": "内埔乡",
        "712446": "万丹乡",
        "712447": "潮州镇",
        "712448": "泰武乡",
        "712449": "来义乡",
        "712450": "万峦乡",
        "712451": "崁顶乡",
        "712452": "新埤乡",
        "712453": "南州乡",
        "712454": "林边乡",
        "712455": "东港镇",
        "712456": "琉球乡",
        "712457": "佳冬乡",
        "712458": "新园乡",
        "712459": "枋寮乡",
        "712460": "枋山乡",
        "712461": "春日乡",
        "712462": "狮子乡",
        "712463": "车城乡",
        "712464": "牡丹乡",
        "712465": "恒春镇",
        "712466": "满州乡",
        "712500": "台东县",
        "712517": "台东市",
        "712518": "绿岛乡",
        "712519": "兰屿乡",
        "712520": "延平乡",
        "712521": "卑南乡",
        "712522": "鹿野乡",
        "712523": "关山镇",
        "712524": "海端乡",
        "712525": "池上乡",
        "712526": "东河乡",
        "712527": "成功镇",
        "712528": "长滨乡",
        "712529": "金峰乡",
        "712530": "大武乡",
        "712531": "达仁乡",
        "712532": "太麻里乡",
        "712600": "花莲县",
        "712615": "花莲市",
        "712616": "新城乡",
        "712617": "太鲁阁",
        "712618": "秀林乡",
        "712619": "吉安乡",
        "712620": "寿丰乡",
        "712621": "凤林镇",
        "712622": "光复乡",
        "712623": "丰滨乡",
        "712624": "瑞穗乡",
        "712625": "万荣乡",
        "712626": "玉里镇",
        "712627": "卓溪乡",
        "712628": "富里乡",
        "712700": "澎湖县",
        "712707": "马公市",
        "712708": "西屿乡",
        "712709": "望安乡",
        "712710": "七美乡",
        "712711": "白沙乡",
        "712712": "湖西乡",
        "712800": "连江县",
        "712805": "南竿乡",
        "712806": "北竿乡",
        "712807": "莒光乡",
        "712808": "东引乡",
        "810000": "香港特别行政区",
        "810100": "香港岛",
        "810101": "中西区",
        "810102": "湾仔",
        "810103": "东区",
        "810104": "南区",
        "810200": "九龙",
        "810201": "九龙城区",
        "810202": "油尖旺区",
        "810203": "深水埗区",
        "810204": "黄大仙区",
        "810205": "观塘区",
        "810300": "新界",
        "810301": "北区",
        "810302": "大埔区",
        "810303": "沙田区",
        "810304": "西贡区",
        "810305": "元朗区",
        "810306": "屯门区",
        "810307": "荃湾区",
        "810308": "葵青区",
        "810309": "离岛区",
        "820000": "澳门特别行政区",
        "820100": "澳门半岛",
        "820200": "离岛",
        "990000": "海外",
        "990100": "海外"
      };

      // id pid/parentId name children
      function tree(list) {
        var mapped = {};
        for (var i = 0, item; i < list.length; i++) {
          item = list[i];
          if (!item || !item.id) continue;
          mapped[item.id] = item;
        }
        var result = [];
        for (var ii = 0; ii < list.length; ii++) {
          item = list[ii];
          if (!item) continue;
          /* jshint -W041 */
          if (item.pid == undefined && item.parentId == undefined) {
            result.push(item);
            continue;
          }
          var parent = mapped[item.pid] || mapped[item.parentId];
          if (!parent) continue;
          if (!parent.children) parent.children = [];
          parent.children.push(item);
        }
        return result;
      }
      var DICT_FIXED = function () {
        var fixed = [];
        for (var id in DICT) {
          var pid = id.slice(2, 6) === '0000' ? undefined : id.slice(4, 6) == '00' ? id.slice(0, 2) + '0000' : id.slice(0, 4) + '00';
          fixed.push({
            id: id,
            pid: pid,
            name: DICT[id]
          });
        }
        return tree(fixed);
      }();
      module.exports = DICT_FIXED;

      /***/
    }, /* 19 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## Miscellaneous
      */
      var DICT = __webpack_require__(18);
      module.exports = {
        // Dice
        d4: function d4() {
          return this.natural(1, 4);
        },
        d6: function d6() {
          return this.natural(1, 6);
        },
        d8: function d8() {
          return this.natural(1, 8);
        },
        d12: function d12() {
          return this.natural(1, 12);
        },
        d20: function d20() {
          return this.natural(1, 20);
        },
        d100: function d100() {
          return this.natural(1, 100);
        },
        /*
            随机生成一个 GUID。
        		    http://www.broofa.com/2008/09/javascript-uuid-function/
            [UUID 规范](http://www.ietf.org/rfc/rfc4122.txt)
                UUIDs (Universally Unique IDentifier)
                GUIDs (Globally Unique IDentifier)
                The formal definition of the UUID string representation is provided by the following ABNF [7]:
                    UUID                   = time-low "-" time-mid "-"
                                           time-high-and-version "-"
                                           clock-seq-and-reserved
                                           clock-seq-low "-" node
                    time-low               = 4hexOctet
                    time-mid               = 2hexOctet
                    time-high-and-version  = 2hexOctet
                    clock-seq-and-reserved = hexOctet
                    clock-seq-low          = hexOctet
                    node                   = 6hexOctet
                    hexOctet               = hexDigit hexDigit
                    hexDigit =
                        "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
                        "a" / "b" / "c" / "d" / "e" / "f" /
                        "A" / "B" / "C" / "D" / "E" / "F"
            
            https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
        */
        guid: function guid() {
          var pool = "abcdefABCDEF1234567890",
            guid = this.string(pool, 8) + '-' + this.string(pool, 4) + '-' + this.string(pool, 4) + '-' + this.string(pool, 4) + '-' + this.string(pool, 12);
          return guid;
        },
        uuid: function uuid() {
          return this.guid();
        },
        /*
            随机生成一个 18 位身份证。
        		    [身份证](http://baike.baidu.com/view/1697.htm#4)
                地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
            [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
        */
        id: function id() {
          var id,
            sum = 0,
            rank = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],
            last = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
          id = this.pick(DICT).id + this.date('yyyyMMdd') + this.string('number', 3);
          for (var i = 0; i < id.length; i++) {
            sum += id[i] * rank[i];
          }
          id += last[sum % 11];
          return id;
        },
        /*
            生成一个全局的自增整数。
            类似自增主键（auto increment primary key）。
        */
        increment: function () {
          var key = 0;
          return function (step) {
            return key += +step || 1; // step?
          };
        }(),

        inc: function inc(step) {
          return this.increment(step);
        }
      };

      /***/
    }, /* 20 */
    /***/function (module, exports, __webpack_require__) {
      var Parser = __webpack_require__(21);
      var Handler = __webpack_require__(22);
      module.exports = {
        Parser: Parser,
        Handler: Handler
      };

      /***/
    }, /* 21 */
    /***/function (module, exports) {
      // https://github.com/nuysoft/regexp
      // forked from https://github.com/ForbesLindesay/regexp

      function parse(n) {
        if ("string" != typeof n) {
          var l = new TypeError("The regexp to parse must be represented as a string.");
          throw l;
        }
        return index = 1, cgs = {}, parser.parse(n);
      }
      function Token(n) {
        this.type = n, this.offset = Token.offset(), this.text = Token.text();
      }
      function Alternate(n, l) {
        Token.call(this, "alternate"), this.left = n, this.right = l;
      }
      function Match(n) {
        Token.call(this, "match"), this.body = n.filter(Boolean);
      }
      function Group(n, l) {
        Token.call(this, n), this.body = l;
      }
      function CaptureGroup(n) {
        Group.call(this, "capture-group"), this.index = cgs[this.offset] || (cgs[this.offset] = index++), this.body = n;
      }
      function Quantified(n, l) {
        Token.call(this, "quantified"), this.body = n, this.quantifier = l;
      }
      function Quantifier(n, l) {
        Token.call(this, "quantifier"), this.min = n, this.max = l, this.greedy = !0;
      }
      function CharSet(n, l) {
        Token.call(this, "charset"), this.invert = n, this.body = l;
      }
      function CharacterRange(n, l) {
        Token.call(this, "range"), this.start = n, this.end = l;
      }
      function Literal(n) {
        Token.call(this, "literal"), this.body = n, this.escaped = this.body != this.text;
      }
      function Unicode(n) {
        Token.call(this, "unicode"), this.code = n.toUpperCase();
      }
      function Hex(n) {
        Token.call(this, "hex"), this.code = n.toUpperCase();
      }
      function Octal(n) {
        Token.call(this, "octal"), this.code = n.toUpperCase();
      }
      function BackReference(n) {
        Token.call(this, "back-reference"), this.code = n.toUpperCase();
      }
      function ControlCharacter(n) {
        Token.call(this, "control-character"), this.code = n.toUpperCase();
      }
      var parser = function () {
          function n(n, l) {
            function u() {
              this.constructor = n;
            }
            u.prototype = l.prototype, n.prototype = new u();
          }
          function l(n, l, u, t, r) {
            function e(n, l) {
              function u(n) {
                function l(n) {
                  return n.charCodeAt(0).toString(16).toUpperCase();
                }
                return n.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (n) {
                  return "\\x0" + l(n);
                }).replace(/[\x10-\x1F\x80-\xFF]/g, function (n) {
                  return "\\x" + l(n);
                }).replace(/[\u0180-\u0FFF]/g, function (n) {
                  return "\\u0" + l(n);
                }).replace(/[\u1080-\uFFFF]/g, function (n) {
                  return "\\u" + l(n);
                });
              }
              var t, r;
              switch (n.length) {
                case 0:
                  t = "end of input";
                  break;
                case 1:
                  t = n[0];
                  break;
                default:
                  t = n.slice(0, -1).join(", ") + " or " + n[n.length - 1];
              }
              return r = l ? '"' + u(l) + '"' : "end of input", "Expected " + t + " but " + r + " found.";
            }
            this.expected = n, this.found = l, this.offset = u, this.line = t, this.column = r, this.name = "SyntaxError", this.message = e(n, l);
          }
          function u(n) {
            function u() {
              return n.substring(Lt, qt);
            }
            function t() {
              return Lt;
            }
            function r(l) {
              function u(l, u, t) {
                var r, e;
                for (r = u; t > r; r++) {
                  e = n.charAt(r), "\n" === e ? (l.seenCR || l.line++, l.column = 1, l.seenCR = !1) : "\r" === e || "\u2028" === e || "\u2029" === e ? (l.line++, l.column = 1, l.seenCR = !0) : (l.column++, l.seenCR = !1);
                }
              }
              return Mt !== l && (Mt > l && (Mt = 0, Dt = {
                line: 1,
                column: 1,
                seenCR: !1
              }), u(Dt, Mt, l), Mt = l), Dt;
            }
            function e(n) {
              Ht > qt || (qt > Ht && (Ht = qt, Ot = []), Ot.push(n));
            }
            function o(n) {
              var l = 0;
              for (n.sort(); l < n.length;) {
                n[l - 1] === n[l] ? n.splice(l, 1) : l++;
              }
            }
            function c() {
              var l, u, t, r, o;
              return l = qt, u = i(), null !== u ? (t = qt, 124 === n.charCodeAt(qt) ? (r = fl, qt++) : (r = null, 0 === Wt && e(sl)), null !== r ? (o = c(), null !== o ? (r = [r, o], t = r) : (qt = t, t = il)) : (qt = t, t = il), null === t && (t = al), null !== t ? (Lt = l, u = hl(u, t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function i() {
              var n, l, u, t, r;
              if (n = qt, l = f(), null === l && (l = al), null !== l) {
                if (u = qt, Wt++, t = d(), Wt--, null === t ? u = al : (qt = u, u = il), null !== u) {
                  for (t = [], r = h(), null === r && (r = a()); null !== r;) {
                    t.push(r), r = h(), null === r && (r = a());
                  }
                  null !== t ? (r = s(), null === r && (r = al), null !== r ? (Lt = n, l = dl(l, t, r), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il);
                } else qt = n, n = il;
              } else qt = n, n = il;
              return n;
            }
            function a() {
              var n;
              return n = x(), null === n && (n = Q(), null === n && (n = B())), n;
            }
            function f() {
              var l, u;
              return l = qt, 94 === n.charCodeAt(qt) ? (u = pl, qt++) : (u = null, 0 === Wt && e(vl)), null !== u && (Lt = l, u = wl()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function s() {
              var l, u;
              return l = qt, 36 === n.charCodeAt(qt) ? (u = Al, qt++) : (u = null, 0 === Wt && e(Cl)), null !== u && (Lt = l, u = gl()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function h() {
              var n, l, u;
              return n = qt, l = a(), null !== l ? (u = d(), null !== u ? (Lt = n, l = bl(l, u), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il), n;
            }
            function d() {
              var n, l, u;
              return Wt++, n = qt, l = p(), null !== l ? (u = k(), null === u && (u = al), null !== u ? (Lt = n, l = Tl(l, u), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il), Wt--, null === n && (l = null, 0 === Wt && e(kl)), n;
            }
            function p() {
              var n;
              return n = v(), null === n && (n = w(), null === n && (n = A(), null === n && (n = C(), null === n && (n = g(), null === n && (n = b()))))), n;
            }
            function v() {
              var l, u, t, r, o, c;
              return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), null !== u ? (t = T(), null !== t ? (44 === n.charCodeAt(qt) ? (r = ml, qt++) : (r = null, 0 === Wt && e(Rl)), null !== r ? (o = T(), null !== o ? (125 === n.charCodeAt(qt) ? (c = Fl, qt++) : (c = null, 0 === Wt && e(Ql)), null !== c ? (Lt = l, u = Sl(t, o), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function w() {
              var l, u, t, r;
              return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), null !== u ? (t = T(), null !== t ? (n.substr(qt, 2) === Ul ? (r = Ul, qt += 2) : (r = null, 0 === Wt && e(El)), null !== r ? (Lt = l, u = Gl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function A() {
              var l, u, t, r;
              return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), null !== u ? (t = T(), null !== t ? (125 === n.charCodeAt(qt) ? (r = Fl, qt++) : (r = null, 0 === Wt && e(Ql)), null !== r ? (Lt = l, u = Bl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function C() {
              var l, u;
              return l = qt, 43 === n.charCodeAt(qt) ? (u = jl, qt++) : (u = null, 0 === Wt && e($l)), null !== u && (Lt = l, u = ql()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function g() {
              var l, u;
              return l = qt, 42 === n.charCodeAt(qt) ? (u = Ll, qt++) : (u = null, 0 === Wt && e(Ml)), null !== u && (Lt = l, u = Dl()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function b() {
              var l, u;
              return l = qt, 63 === n.charCodeAt(qt) ? (u = Hl, qt++) : (u = null, 0 === Wt && e(Ol)), null !== u && (Lt = l, u = Wl()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function k() {
              var l;
              return 63 === n.charCodeAt(qt) ? (l = Hl, qt++) : (l = null, 0 === Wt && e(Ol)), l;
            }
            function T() {
              var l, u, t;
              if (l = qt, u = [], zl.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(Il)), null !== t) for (; null !== t;) {
                u.push(t), zl.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(Il));
              } else u = il;
              return null !== u && (Lt = l, u = Jl(u)), null === u ? (qt = l, l = u) : l = u, l;
            }
            function x() {
              var l, u, t, r;
              return l = qt, 40 === n.charCodeAt(qt) ? (u = Kl, qt++) : (u = null, 0 === Wt && e(Nl)), null !== u ? (t = R(), null === t && (t = F(), null === t && (t = m(), null === t && (t = y()))), null !== t ? (41 === n.charCodeAt(qt) ? (r = Pl, qt++) : (r = null, 0 === Wt && e(Vl)), null !== r ? (Lt = l, u = Xl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function y() {
              var n, l;
              return n = qt, l = c(), null !== l && (Lt = n, l = Yl(l)), null === l ? (qt = n, n = l) : n = l, n;
            }
            function m() {
              var l, u, t;
              return l = qt, n.substr(qt, 2) === Zl ? (u = Zl, qt += 2) : (u = null, 0 === Wt && e(_l)), null !== u ? (t = c(), null !== t ? (Lt = l, u = nu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function R() {
              var l, u, t;
              return l = qt, n.substr(qt, 2) === lu ? (u = lu, qt += 2) : (u = null, 0 === Wt && e(uu)), null !== u ? (t = c(), null !== t ? (Lt = l, u = tu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function F() {
              var l, u, t;
              return l = qt, n.substr(qt, 2) === ru ? (u = ru, qt += 2) : (u = null, 0 === Wt && e(eu)), null !== u ? (t = c(), null !== t ? (Lt = l, u = ou(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function Q() {
              var l, u, t, r, o;
              if (Wt++, l = qt, 91 === n.charCodeAt(qt) ? (u = iu, qt++) : (u = null, 0 === Wt && e(au)), null !== u) {
                if (94 === n.charCodeAt(qt) ? (t = pl, qt++) : (t = null, 0 === Wt && e(vl)), null === t && (t = al), null !== t) {
                  for (r = [], o = S(), null === o && (o = U()); null !== o;) {
                    r.push(o), o = S(), null === o && (o = U());
                  }
                  null !== r ? (93 === n.charCodeAt(qt) ? (o = fu, qt++) : (o = null, 0 === Wt && e(su)), null !== o ? (Lt = l, u = hu(t, r), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il);
                } else qt = l, l = il;
              } else qt = l, l = il;
              return Wt--, null === l && (u = null, 0 === Wt && e(cu)), l;
            }
            function S() {
              var l, u, t, r;
              return Wt++, l = qt, u = U(), null !== u ? (45 === n.charCodeAt(qt) ? (t = pu, qt++) : (t = null, 0 === Wt && e(vu)), null !== t ? (r = U(), null !== r ? (Lt = l, u = wu(u, r), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), Wt--, null === l && (u = null, 0 === Wt && e(du)), l;
            }
            function U() {
              var n, l;
              return Wt++, n = G(), null === n && (n = E()), Wt--, null === n && (l = null, 0 === Wt && e(Au)), n;
            }
            function E() {
              var l, u;
              return l = qt, Cu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 0 === Wt && e(gu)), null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, l;
            }
            function G() {
              var n;
              return n = L(), null === n && (n = Y(), null === n && (n = H(), null === n && (n = O(), null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), null === n && (n = J(), null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), null === n && (n = V(), null === n && (n = X(), null === n && (n = _(), null === n && (n = nl(), null === n && (n = ll(), null === n && (n = ul(), null === n && (n = tl()))))))))))))))))), n;
            }
            function B() {
              var n;
              return n = j(), null === n && (n = q(), null === n && (n = $())), n;
            }
            function j() {
              var l, u;
              return l = qt, 46 === n.charCodeAt(qt) ? (u = ku, qt++) : (u = null, 0 === Wt && e(Tu)), null !== u && (Lt = l, u = xu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function $() {
              var l, u;
              return Wt++, l = qt, mu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 0 === Wt && e(Ru)), null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, Wt--, null === l && (u = null, 0 === Wt && e(yu)), l;
            }
            function q() {
              var n;
              return n = M(), null === n && (n = D(), null === n && (n = Y(), null === n && (n = H(), null === n && (n = O(), null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), null === n && (n = J(), null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), null === n && (n = V(), null === n && (n = X(), null === n && (n = Z(), null === n && (n = _(), null === n && (n = nl(), null === n && (n = ll(), null === n && (n = ul(), null === n && (n = tl()))))))))))))))))))), n;
            }
            function L() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)), null !== u && (Lt = l, u = Su()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function M() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)), null !== u && (Lt = l, u = Uu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function D() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Eu ? (u = Eu, qt += 2) : (u = null, 0 === Wt && e(Gu)), null !== u && (Lt = l, u = Bu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function H() {
              var l, u;
              return l = qt, n.substr(qt, 2) === ju ? (u = ju, qt += 2) : (u = null, 0 === Wt && e($u)), null !== u && (Lt = l, u = qu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function O() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Lu ? (u = Lu, qt += 2) : (u = null, 0 === Wt && e(Mu)), null !== u && (Lt = l, u = Du()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function W() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Hu ? (u = Hu, qt += 2) : (u = null, 0 === Wt && e(Ou)), null !== u && (Lt = l, u = Wu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function z() {
              var l, u;
              return l = qt, n.substr(qt, 2) === zu ? (u = zu, qt += 2) : (u = null, 0 === Wt && e(Iu)), null !== u && (Lt = l, u = Ju()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function I() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Ku ? (u = Ku, qt += 2) : (u = null, 0 === Wt && e(Nu)), null !== u && (Lt = l, u = Pu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function J() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Vu ? (u = Vu, qt += 2) : (u = null, 0 === Wt && e(Xu)), null !== u && (Lt = l, u = Yu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function K() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Zu ? (u = Zu, qt += 2) : (u = null, 0 === Wt && e(_u)), null !== u && (Lt = l, u = nt()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function N() {
              var l, u;
              return l = qt, n.substr(qt, 2) === lt ? (u = lt, qt += 2) : (u = null, 0 === Wt && e(ut)), null !== u && (Lt = l, u = tt()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function P() {
              var l, u;
              return l = qt, n.substr(qt, 2) === rt ? (u = rt, qt += 2) : (u = null, 0 === Wt && e(et)), null !== u && (Lt = l, u = ot()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function V() {
              var l, u;
              return l = qt, n.substr(qt, 2) === ct ? (u = ct, qt += 2) : (u = null, 0 === Wt && e(it)), null !== u && (Lt = l, u = at()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function X() {
              var l, u;
              return l = qt, n.substr(qt, 2) === ft ? (u = ft, qt += 2) : (u = null, 0 === Wt && e(st)), null !== u && (Lt = l, u = ht()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function Y() {
              var l, u, t;
              return l = qt, n.substr(qt, 2) === dt ? (u = dt, qt += 2) : (u = null, 0 === Wt && e(pt)), null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)), null !== t ? (Lt = l, u = wt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function Z() {
              var l, u, t;
              return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)), null !== u ? (gt.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(bt)), null !== t ? (Lt = l, u = kt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function _() {
              var l, u, t, r;
              if (l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)), null !== u) {
                if (t = [], yt.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(mt)), null !== r) for (; null !== r;) {
                  t.push(r), yt.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(mt));
                } else t = il;
                null !== t ? (Lt = l, u = Rt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il);
              } else qt = l, l = il;
              return l;
            }
            function nl() {
              var l, u, t, r;
              if (l = qt, n.substr(qt, 2) === Ft ? (u = Ft, qt += 2) : (u = null, 0 === Wt && e(Qt)), null !== u) {
                if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)), null !== r) for (; null !== r;) {
                  t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut));
                } else t = il;
                null !== t ? (Lt = l, u = Et(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il);
              } else qt = l, l = il;
              return l;
            }
            function ll() {
              var l, u, t, r;
              if (l = qt, n.substr(qt, 2) === Gt ? (u = Gt, qt += 2) : (u = null, 0 === Wt && e(Bt)), null !== u) {
                if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)), null !== r) for (; null !== r;) {
                  t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut));
                } else t = il;
                null !== t ? (Lt = l, u = jt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il);
              } else qt = l, l = il;
              return l;
            }
            function ul() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)), null !== u && (Lt = l, u = $t()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function tl() {
              var l, u, t;
              return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)), null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)), null !== t ? (Lt = l, u = bu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            var rl,
              el = arguments.length > 1 ? arguments[1] : {},
              ol = {
                regexp: c
              },
              cl = c,
              il = null,
              al = "",
              fl = "|",
              sl = '"|"',
              hl = function hl(n, l) {
                return l ? new Alternate(n, l[1]) : n;
              },
              dl = function dl(n, l, u) {
                return new Match([n].concat(l).concat([u]));
              },
              pl = "^",
              vl = '"^"',
              wl = function wl() {
                return new Token("start");
              },
              Al = "$",
              Cl = '"$"',
              gl = function gl() {
                return new Token("end");
              },
              bl = function bl(n, l) {
                return new Quantified(n, l);
              },
              kl = "Quantifier",
              Tl = function Tl(n, l) {
                return l && (n.greedy = !1), n;
              },
              xl = "{",
              yl = '"{"',
              ml = ",",
              Rl = '","',
              Fl = "}",
              Ql = '"}"',
              Sl = function Sl(n, l) {
                return new Quantifier(n, l);
              },
              Ul = ",}",
              El = '",}"',
              Gl = function Gl(n) {
                return new Quantifier(n, 1 / 0);
              },
              Bl = function Bl(n) {
                return new Quantifier(n, n);
              },
              jl = "+",
              $l = '"+"',
              ql = function ql() {
                return new Quantifier(1, 1 / 0);
              },
              Ll = "*",
              Ml = '"*"',
              Dl = function Dl() {
                return new Quantifier(0, 1 / 0);
              },
              Hl = "?",
              Ol = '"?"',
              Wl = function Wl() {
                return new Quantifier(0, 1);
              },
              zl = /^[0-9]/,
              Il = "[0-9]",
              Jl = function Jl(n) {
                return +n.join("");
              },
              Kl = "(",
              Nl = '"("',
              Pl = ")",
              Vl = '")"',
              Xl = function Xl(n) {
                return n;
              },
              Yl = function Yl(n) {
                return new CaptureGroup(n);
              },
              Zl = "?:",
              _l = '"?:"',
              nu = function nu(n) {
                return new Group("non-capture-group", n);
              },
              lu = "?=",
              uu = '"?="',
              tu = function tu(n) {
                return new Group("positive-lookahead", n);
              },
              ru = "?!",
              eu = '"?!"',
              ou = function ou(n) {
                return new Group("negative-lookahead", n);
              },
              cu = "CharacterSet",
              iu = "[",
              au = '"["',
              fu = "]",
              su = '"]"',
              hu = function hu(n, l) {
                return new CharSet(!!n, l);
              },
              du = "CharacterRange",
              pu = "-",
              vu = '"-"',
              wu = function wu(n, l) {
                return new CharacterRange(n, l);
              },
              Au = "Character",
              Cu = /^[^\\\]]/,
              gu = "[^\\\\\\]]",
              bu = function bu(n) {
                return new Literal(n);
              },
              ku = ".",
              Tu = '"."',
              xu = function xu() {
                return new Token("any-character");
              },
              yu = "Literal",
              mu = /^[^|\\\/.[()?+*$\^]/,
              Ru = "[^|\\\\\\/.[()?+*$\\^]",
              Fu = "\\b",
              Qu = '"\\\\b"',
              Su = function Su() {
                return new Token("backspace");
              },
              Uu = function Uu() {
                return new Token("word-boundary");
              },
              Eu = "\\B",
              Gu = '"\\\\B"',
              Bu = function Bu() {
                return new Token("non-word-boundary");
              },
              ju = "\\d",
              $u = '"\\\\d"',
              qu = function qu() {
                return new Token("digit");
              },
              Lu = "\\D",
              Mu = '"\\\\D"',
              Du = function Du() {
                return new Token("non-digit");
              },
              Hu = "\\f",
              Ou = '"\\\\f"',
              Wu = function Wu() {
                return new Token("form-feed");
              },
              zu = "\\n",
              Iu = '"\\\\n"',
              Ju = function Ju() {
                return new Token("line-feed");
              },
              Ku = "\\r",
              Nu = '"\\\\r"',
              Pu = function Pu() {
                return new Token("carriage-return");
              },
              Vu = "\\s",
              Xu = '"\\\\s"',
              Yu = function Yu() {
                return new Token("white-space");
              },
              Zu = "\\S",
              _u = '"\\\\S"',
              nt = function nt() {
                return new Token("non-white-space");
              },
              lt = "\\t",
              ut = '"\\\\t"',
              tt = function tt() {
                return new Token("tab");
              },
              rt = "\\v",
              et = '"\\\\v"',
              ot = function ot() {
                return new Token("vertical-tab");
              },
              ct = "\\w",
              it = '"\\\\w"',
              at = function at() {
                return new Token("word");
              },
              ft = "\\W",
              st = '"\\\\W"',
              ht = function ht() {
                return new Token("non-word");
              },
              dt = "\\c",
              pt = '"\\\\c"',
              vt = "any character",
              wt = function wt(n) {
                return new ControlCharacter(n);
              },
              At = "\\",
              Ct = '"\\\\"',
              gt = /^[1-9]/,
              bt = "[1-9]",
              kt = function kt(n) {
                return new BackReference(n);
              },
              Tt = "\\0",
              xt = '"\\\\0"',
              yt = /^[0-7]/,
              mt = "[0-7]",
              Rt = function Rt(n) {
                return new Octal(n.join(""));
              },
              Ft = "\\x",
              Qt = '"\\\\x"',
              St = /^[0-9a-fA-F]/,
              Ut = "[0-9a-fA-F]",
              Et = function Et(n) {
                return new Hex(n.join(""));
              },
              Gt = "\\u",
              Bt = "\"\\\\u\"",
              jt = function jt(n) {
                return new Unicode(n.join(""));
              },
              $t = function $t() {
                return new Token("null-character");
              },
              qt = 0,
              Lt = 0,
              Mt = 0,
              Dt = {
                line: 1,
                column: 1,
                seenCR: !1
              },
              Ht = 0,
              Ot = [],
              Wt = 0;
            if ("startRule" in el) {
              if (!(el.startRule in ol)) throw new Error("Can't start parsing from rule \"" + el.startRule + '".');
              cl = ol[el.startRule];
            }
            if (Token.offset = t, Token.text = u, rl = cl(), null !== rl && qt === n.length) return rl;
            throw o(Ot), Lt = Math.max(qt, Ht), new l(Ot, Lt < n.length ? n.charAt(Lt) : null, Lt, r(Lt).line, r(Lt).column);
          }
          return n(l, Error), {
            SyntaxError: l,
            parse: u
          };
        }(),
        index = 1,
        cgs = {};
      module.exports = parser;

      /***/
    }, /* 22 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## RegExp Handler
      
          https://github.com/ForbesLindesay/regexp
          https://github.com/dmajda/pegjs
          http://www.regexper.com/
      
          每个节点的结构
              {
                  type: '',
                  offset: number,
                  text: '',
                  body: {},
                  escaped: true/false
              }
      
          type 可选值
              alternate             |         选择
              match                 匹配
              capture-group         ()        捕获组
              non-capture-group     (?:...)   非捕获组
              positive-lookahead    (?=p)     零宽正向先行断言
              negative-lookahead    (?!p)     零宽负向先行断言
              quantified            a*        重复节点
              quantifier            *         量词
              charset               []        字符集
              range                 {m, n}    范围
              literal               a         直接量字符
              unicode               \uxxxx    Unicode
              hex                   \x        十六进制
              octal                 八进制
              back-reference        \n        反向引用
              control-character     \cX       控制字符
      
              // Token
              start               ^       开头
              end                 $       结尾
              any-character       .       任意字符
              backspace           [\b]    退格直接量
              word-boundary       \b      单词边界
              non-word-boundary   \B      非单词边界
              digit               \d      ASCII 数字，[0-9]
              non-digit           \D      非 ASCII 数字，[^0-9]
              form-feed           \f      换页符
              line-feed           \n      换行符
              carriage-return     \r      回车符
              white-space         \s      空白符
              non-white-space     \S      非空白符
              tab                 \t      制表符
              vertical-tab        \v      垂直制表符
              word                \w      ASCII 字符，[a-zA-Z0-9]
              non-word            \W      非 ASCII 字符，[^a-zA-Z0-9]
              null-character      \o      NUL 字符
       */

      var Util = __webpack_require__(3);
      var Random = __webpack_require__(5);
      /*
          
      */
      var Handler = {
        extend: Util.extend
      };

      // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart
      /*var ASCII_CONTROL_CODE_CHART = {
          '@': ['\u0000'],
          A: ['\u0001'],
          B: ['\u0002'],
          C: ['\u0003'],
          D: ['\u0004'],
          E: ['\u0005'],
          F: ['\u0006'],
          G: ['\u0007', '\a'],
          H: ['\u0008', '\b'],
          I: ['\u0009', '\t'],
          J: ['\u000A', '\n'],
          K: ['\u000B', '\v'],
          L: ['\u000C', '\f'],
          M: ['\u000D', '\r'],
          N: ['\u000E'],
          O: ['\u000F'],
          P: ['\u0010'],
          Q: ['\u0011'],
          R: ['\u0012'],
          S: ['\u0013'],
          T: ['\u0014'],
          U: ['\u0015'],
          V: ['\u0016'],
          W: ['\u0017'],
          X: ['\u0018'],
          Y: ['\u0019'],
          Z: ['\u001A'],
          '[': ['\u001B', '\e'],
          '\\': ['\u001C'],
          ']': ['\u001D'],
          '^': ['\u001E'],
          '_': ['\u001F']
      }*/

      // ASCII printable code chart
      // var LOWER = 'abcdefghijklmnopqrstuvwxyz'
      // var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      // var NUMBER = '0123456789'
      // var SYMBOL = ' !"#$%&\'()*+,-./' + ':;<=>?@' + '[\\]^_`' + '{|}~'
      var LOWER = ascii(97, 122);
      var UPPER = ascii(65, 90);
      var NUMBER = ascii(48, 57);
      var OTHER = ascii(32, 47) + ascii(58, 64) + ascii(91, 96) + ascii(123, 126); // 排除 95 _ ascii(91, 94) + ascii(96, 96)
      var PRINTABLE = ascii(32, 126);
      var SPACE = " \f\n\r\t\x0B\xA0\u2028\u2029";
      var CHARACTER_CLASSES = {
        '\\w': LOWER + UPPER + NUMBER + '_',
        // ascii(95, 95)
        '\\W': OTHER.replace('_', ''),
        '\\s': SPACE,
        '\\S': function () {
          var result = PRINTABLE;
          for (var i = 0; i < SPACE.length; i++) {
            result = result.replace(SPACE[i], '');
          }
          return result;
        }(),
        '\\d': NUMBER,
        '\\D': LOWER + UPPER + OTHER
      };
      function ascii(from, to) {
        var result = '';
        for (var i = from; i <= to; i++) {
          result += String.fromCharCode(i);
        }
        return result;
      }

      // var ast = RegExpParser.parse(regexp.source)
      Handler.gen = function (node, result, cache) {
        cache = cache || {
          guid: 1
        };
        return Handler[node.type] ? Handler[node.type](node, result, cache) : Handler.token(node, result, cache);
      };
      Handler.extend({
        /* jshint unused:false */
        token: function token(node, result, cache) {
          switch (node.type) {
            case 'start':
            case 'end':
              return '';
            case 'any-character':
              return Random.character();
            case 'backspace':
              return '';
            case 'word-boundary':
              // TODO
              return '';
            case 'non-word-boundary':
              // TODO
              break;
            case 'digit':
              return Random.pick(NUMBER.split(''));
            case 'non-digit':
              return Random.pick((LOWER + UPPER + OTHER).split(''));
            case 'form-feed':
              break;
            case 'line-feed':
              return node.body || node.text;
            case 'carriage-return':
              break;
            case 'white-space':
              return Random.pick(SPACE.split(''));
            case 'non-white-space':
              return Random.pick((LOWER + UPPER + NUMBER).split(''));
            case 'tab':
              break;
            case 'vertical-tab':
              break;
            case 'word':
              // \w [a-zA-Z0-9]
              return Random.pick((LOWER + UPPER + NUMBER).split(''));
            case 'non-word':
              // \W [^a-zA-Z0-9]
              return Random.pick(OTHER.replace('_', '').split(''));
            case 'null-character':
              break;
          }
          return node.body || node.text;
        },
        /*
            {
                type: 'alternate',
                offset: 0,
                text: '',
                left: {
                    boyd: []
                },
                right: {
                    boyd: []
                }
            }
        */
        alternate: function alternate(node, result, cache) {
          // node.left/right {}
          return this.gen(Random.boolean() ? node.left : node.right, result, cache);
        },
        /*
            {
                type: 'match',
                offset: 0,
                text: '',
                body: []
            }
        */
        match: function match(node, result, cache) {
          result = '';
          // node.body []
          for (var i = 0; i < node.body.length; i++) {
            result += this.gen(node.body[i], result, cache);
          }
          return result;
        },
        // ()
        'capture-group': function captureGroup(node, result, cache) {
          // node.body {}
          result = this.gen(node.body, result, cache);
          cache[cache.guid++] = result;
          return result;
        },
        // (?:...)
        'non-capture-group': function nonCaptureGroup(node, result, cache) {
          // node.body {}
          return this.gen(node.body, result, cache);
        },
        // (?=p)
        'positive-lookahead': function positiveLookahead(node, result, cache) {
          // node.body
          return this.gen(node.body, result, cache);
        },
        // (?!p)
        'negative-lookahead': function negativeLookahead(node, result, cache) {
          // node.body
          return '';
        },
        /*
            {
                type: 'quantified',
                offset: 3,
                text: 'c*',
                body: {
                    type: 'literal',
                    offset: 3,
                    text: 'c',
                    body: 'c',
                    escaped: false
                },
                quantifier: {
                    type: 'quantifier',
                    offset: 4,
                    text: '*',
                    min: 0,
                    max: Infinity,
                    greedy: true
                }
            }
        */
        quantified: function quantified(node, result, cache) {
          result = '';
          // node.quantifier {}
          var count = this.quantifier(node.quantifier);
          // node.body {}
          for (var i = 0; i < count; i++) {
            result += this.gen(node.body, result, cache);
          }
          return result;
        },
        /*
            quantifier: {
                type: 'quantifier',
                offset: 4,
                text: '*',
                min: 0,
                max: Infinity,
                greedy: true
            }
        */
        quantifier: function quantifier(node, result, cache) {
          var min = Math.max(node.min, 0);
          var max = isFinite(node.max) ? node.max : min + Random.integer(3, 7);
          return Random.integer(min, max);
        },
        /*
            
        */
        charset: function charset(node, result, cache) {
          // node.invert
          if (node.invert) return this['invert-charset'](node, result, cache);

          // node.body []
          var literal = Random.pick(node.body);
          return this.gen(literal, result, cache);
        },
        'invert-charset': function invertCharset(node, result, cache) {
          var pool = PRINTABLE;
          for (var i = 0, item; i < node.body.length; i++) {
            item = node.body[i];
            switch (item.type) {
              case 'literal':
                pool = pool.replace(item.body, '');
                break;
              case 'range':
                var min = this.gen(item.start, result, cache).charCodeAt();
                var max = this.gen(item.end, result, cache).charCodeAt();
                for (var ii = min; ii <= max; ii++) {
                  pool = pool.replace(String.fromCharCode(ii), '');
                }
              /* falls through */
              default:
                var characters = CHARACTER_CLASSES[item.text];
                if (characters) {
                  for (var iii = 0; iii <= characters.length; iii++) {
                    pool = pool.replace(characters[iii], '');
                  }
                }
            }
          }
          return Random.pick(pool.split(''));
        },
        range: function range(node, result, cache) {
          // node.start, node.end
          var min = this.gen(node.start, result, cache).charCodeAt();
          var max = this.gen(node.end, result, cache).charCodeAt();
          return String.fromCharCode(Random.integer(min, max));
        },
        literal: function literal(node, result, cache) {
          return node.escaped ? node.body : node.text;
        },
        // Unicode \u
        unicode: function unicode(node, result, cache) {
          return String.fromCharCode(parseInt(node.code, 16));
        },
        // 十六进制 \xFF
        hex: function hex(node, result, cache) {
          return String.fromCharCode(parseInt(node.code, 16));
        },
        // 八进制 \0
        octal: function octal(node, result, cache) {
          return String.fromCharCode(parseInt(node.code, 8));
        },
        // 反向引用
        'back-reference': function backReference(node, result, cache) {
          return cache[node.code] || '';
        },
        /*
            http://en.wikipedia.org/wiki/C0_and_C1_control_codes
        */
        CONTROL_CHARACTER_MAP: function () {
          var CONTROL_CHARACTER = '@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _'.split(' ');
          var CONTROL_CHARACTER_UNICODE = "\0 \x01 \x02 \x03 \x04 \x05 \x06 \x07 \b \t \n \x0B \f \r \x0E \x0F \x10 \x11 \x12 \x13 \x14 \x15 \x16 \x17 \x18 \x19 \x1A \x1B \x1C \x1D \x1E \x1F".split(' ');
          var map = {};
          for (var i = 0; i < CONTROL_CHARACTER.length; i++) {
            map[CONTROL_CHARACTER[i]] = CONTROL_CHARACTER_UNICODE[i];
          }
          return map;
        }(),
        'control-character': function controlCharacter(node, result, cache) {
          return this.CONTROL_CHARACTER_MAP[node.code];
        }
      });
      module.exports = Handler;

      /***/
    }, /* 23 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(24);

      /***/
    }, /* 24 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## toJSONSchema
      
          把 Mock.js 风格的数据模板转换成 JSON Schema。
      
          > [JSON Schema](http://json-schema.org/)
       */
      var Constant = __webpack_require__(2);
      var Util = __webpack_require__(3);
      var Parser = __webpack_require__(4);
      function toJSONSchema(template, name, path /* Internal Use Only */) {
        // type rule properties items
        path = path || [];
        var result = {
          name: typeof name === 'string' ? name.replace(Constant.RE_KEY, '$1') : name,
          template: template,
          type: Util.type(template),
          // 可能不准确，例如 { 'name|1': [{}, {} ...] }
          rule: Parser.parse(name)
        };
        result.path = path.slice(0);
        result.path.push(name === undefined ? 'ROOT' : result.name);
        switch (result.type) {
          case 'array':
            result.items = [];
            Util.each(template, function (value, index) {
              result.items.push(toJSONSchema(value, index, result.path));
            });
            break;
          case 'object':
            result.properties = [];
            Util.each(template, function (value, name) {
              result.properties.push(toJSONSchema(value, name, result.path));
            });
            break;
        }
        return result;
      }
      module.exports = toJSONSchema;

      /***/
    }, /* 25 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(26);

      /***/
    }, /* 26 */
    /***/function (module, exports, __webpack_require__) {
      /*
          ## valid(template, data)
      
          校验真实数据 data 是否与数据模板 template 匹配。
          
          实现思路：
          1. 解析规则。
              先把数据模板 template 解析为更方便机器解析的 JSON-Schame
              name               属性名 
              type               属性值类型
              template           属性值模板
              properties         对象属性数组
              items              数组元素数组
              rule               属性值生成规则
          2. 递归验证规则。
              然后用 JSON-Schema 校验真实数据，校验项包括属性名、值类型、值、值生成规则。
      
          提示信息 
          https://github.com/fge/json-schema-validator/blob/master/src/main/resources/com/github/fge/jsonschema/validator/validation.properties
          [JSON-Schama validator](http://json-schema-validator.herokuapp.com/)
          [Regexp Demo](http://demos.forbeslindesay.co.uk/regexp/)
      */
      var Constant = __webpack_require__(2);
      var Util = __webpack_require__(3);
      var toJSONSchema = __webpack_require__(23);
      function valid(template, data) {
        var schema = toJSONSchema(template);
        var result = Diff.diff(schema, data);
        for (var i = 0; i < result.length; i++) {
          // console.log(template, data)
          // console.warn(Assert.message(result[i]))
        }
        return result;
      }

      /*
          ## name
              有生成规则：比较解析后的 name
              无生成规则：直接比较
          ## type
              无类型转换：直接比较
              有类型转换：先试着解析 template，然后再检查？
          ## value vs. template
              基本类型
                  无生成规则：直接比较
                  有生成规则：
                      number
                          min-max.dmin-dmax
                          min-max.dcount
                          count.dmin-dmax
                          count.dcount
                          +step
                          整数部分
                          小数部分
                      boolean 
                      string  
                          min-max
                          count
          ## properties
              对象
                  有生成规则：检测期望的属性个数，继续递归
                  无生成规则：检测全部的属性个数，继续递归
          ## items
              数组
                  有生成规则：
                      `'name|1': [{}, {} ...]`            其中之一，继续递归
                      `'name|+1': [{}, {} ...]`           顺序检测，继续递归
                      `'name|min-max': [{}, {} ...]`      检测个数，继续递归
                      `'name|count': [{}, {} ...]`        检测个数，继续递归
                  无生成规则：检测全部的元素个数，继续递归
      */
      var Diff = {
        diff: function diff(schema, data, name /* Internal Use Only */) {
          var result = [];

          // 先检测名称 name 和类型 type，如果匹配，才有必要继续检测
          if (this.name(schema, data, name, result) && this.type(schema, data, name, result)) {
            this.value(schema, data, name, result);
            this.properties(schema, data, name, result);
            this.items(schema, data, name, result);
          }
          return result;
        },
        /* jshint unused:false */
        name: function name(schema, data, _name, result) {
          var length = result.length;
          Assert.equal('name', schema.path, _name + '', schema.name + '', result);
          return result.length === length;
        },
        type: function type(schema, data, name, result) {
          var length = result.length;
          switch (schema.type) {
            case 'string':
              // 跳过含有『占位符』的属性值，因为『占位符』返回值的类型可能和模板不一致，例如 '@int' 会返回一个整形值
              if (schema.template.match(Constant.RE_PLACEHOLDER)) return true;
              break;
            case 'array':
              if (schema.rule.parameters) {
                // name|count: array
                if (schema.rule.min !== undefined && schema.rule.max === undefined) {
                  // 跳过 name|1: array，因为最终值的类型（很可能）不是数组，也不一定与 `array` 中的类型一致
                  if (schema.rule.count === 1) return true;
                }
                // 跳过 name|+inc: array
                if (schema.rule.parameters[2]) return true;
              }
              break;
            case 'function':
              // 跳过 `'name': function`，因为函数可以返回任何类型的值。
              return true;
          }
          Assert.equal('type', schema.path, Util.type(data), schema.type, result);
          return result.length === length;
        },
        value: function value(schema, data, name, result) {
          var length = result.length;
          var rule = schema.rule;
          var templateType = schema.type;
          if (templateType === 'object' || templateType === 'array' || templateType === 'function') return true;

          // 无生成规则
          if (!rule.parameters) {
            switch (templateType) {
              case 'regexp':
                Assert.match('value', schema.path, data, schema.template, result);
                return result.length === length;
              case 'string':
                // 同样跳过含有『占位符』的属性值，因为『占位符』的返回值会通常会与模板不一致
                if (schema.template.match(Constant.RE_PLACEHOLDER)) return result.length === length;
                break;
            }
            Assert.equal('value', schema.path, data, schema.template, result);
            return result.length === length;
          }

          // 有生成规则
          var actualRepeatCount;
          switch (templateType) {
            case 'number':
              var parts = (data + '').split('.');
              parts[0] = +parts[0];

              // 整数部分
              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('value', schema.path, parts[0], Math.min(rule.min, rule.max), result);
                // , 'numeric instance is lower than the required minimum (minimum: {expected}, found: {actual})')
                Assert.lessThanOrEqualTo('value', schema.path, parts[0], Math.max(rule.min, rule.max), result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('value', schema.path, parts[0], rule.min, result, '[value] ' + name);
              }

              // 小数部分
              if (rule.decimal) {
                // |dmin-dmax
                if (rule.dmin !== undefined && rule.dmax !== undefined) {
                  Assert.greaterThanOrEqualTo('value', schema.path, parts[1].length, rule.dmin, result);
                  Assert.lessThanOrEqualTo('value', schema.path, parts[1].length, rule.dmax, result);
                }
                // |dcount
                if (rule.dmin !== undefined && rule.dmax === undefined) {
                  Assert.equal('value', schema.path, parts[1].length, rule.dmin, result);
                }
              }
              break;
            case 'boolean':
              break;
            case 'string':
              // 'aaa'.match(/a/g)
              actualRepeatCount = data.match(new RegExp(schema.template, 'g'));
              actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0;

              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result);
                Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result);
              }
              break;
            case 'regexp':
              actualRepeatCount = data.match(new RegExp(schema.template.source.replace(/^\^|\$$/g, ''), 'g'));
              actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0;

              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result);
                Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result);
              }
              break;
          }
          return result.length === length;
        },
        properties: function properties(schema, data, name, result) {
          var length = result.length;
          var rule = schema.rule;
          var keys = Util.keys(data);
          if (!schema.properties) return;

          // 无生成规则
          if (!schema.rule.parameters) {
            Assert.equal('properties length', schema.path, keys.length, schema.properties.length, result);
          } else {
            // 有生成规则
            // |min-max
            if (rule.min !== undefined && rule.max !== undefined) {
              Assert.greaterThanOrEqualTo('properties length', schema.path, keys.length, Math.min(rule.min, rule.max), result);
              Assert.lessThanOrEqualTo('properties length', schema.path, keys.length, Math.max(rule.min, rule.max), result);
            }
            // |count
            if (rule.min !== undefined && rule.max === undefined) {
              // |1, |>1
              if (rule.count !== 1) Assert.equal('properties length', schema.path, keys.length, rule.min, result);
            }
          }
          if (result.length !== length) return false;
          for (var i = 0; i < keys.length; i++) {
            result.push.apply(result, this.diff(function () {
              var property;
              Util.each(schema.properties, function (item /*, index*/) {
                if (item.name === keys[i]) property = item;
              });
              return property || schema.properties[i];
            }(), data[keys[i]], keys[i]));
          }
          return result.length === length;
        },
        items: function items(schema, data, name, result) {
          var length = result.length;
          if (!schema.items) return;
          var rule = schema.rule;

          // 无生成规则
          if (!schema.rule.parameters) {
            Assert.equal('items length', schema.path, data.length, schema.items.length, result);
          } else {
            // 有生成规则
            // |min-max
            if (rule.min !== undefined && rule.max !== undefined) {
              Assert.greaterThanOrEqualTo('items', schema.path, data.length, Math.min(rule.min, rule.max) * schema.items.length, result, '[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements');
              Assert.lessThanOrEqualTo('items', schema.path, data.length, Math.max(rule.min, rule.max) * schema.items.length, result, '[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements');
            }
            // |count
            if (rule.min !== undefined && rule.max === undefined) {
              // |1, |>1
              if (rule.count === 1) return result.length === length;else Assert.equal('items length', schema.path, data.length, rule.min * schema.items.length, result);
            }
            // |+inc
            if (rule.parameters[2]) return result.length === length;
          }
          if (result.length !== length) return false;
          for (var i = 0; i < data.length; i++) {
            result.push.apply(result, this.diff(schema.items[i % schema.items.length], data[i], i % schema.items.length));
          }
          return result.length === length;
        }
      };

      /*
          完善、友好的提示信息
          
          Equal, not equal to, greater than, less than, greater than or equal to, less than or equal to
          路径 验证类型 描述 
      
          Expect path.name is less than or equal to expected, but path.name is actual.
      
          Expect path.name is less than or equal to expected, but path.name is actual.
          Expect path.name is greater than or equal to expected, but path.name is actual.
      
      */
      var Assert = {
        message: function message(item) {
          return (item.message || '[{utype}] Expect {path}\'{ltype} {action} {expected}, but is {actual}').replace('{utype}', item.type.toUpperCase()).replace('{ltype}', item.type.toLowerCase()).replace('{path}', Util.isArray(item.path) && item.path.join('.') || item.path).replace('{action}', item.action).replace('{expected}', item.expected).replace('{actual}', item.actual);
        },
        equal: function equal(type, path, actual, expected, result, message) {
          if (actual === expected) return true;
          switch (type) {
            case 'type':
              // 正则模板 === 字符串最终值
              if (expected === 'regexp' && actual === 'string') return true;
              break;
          }
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is equal to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        // actual matches expected
        match: function match(type, path, actual, expected, result, message) {
          if (expected.test(actual)) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'matches',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        notEqual: function notEqual(type, path, actual, expected, result, message) {
          if (actual !== expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is not equal to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        greaterThan: function greaterThan(type, path, actual, expected, result, message) {
          if (actual > expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is greater than',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        lessThan: function lessThan(type, path, actual, expected, result, message) {
          if (actual < expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is less to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        greaterThanOrEqualTo: function greaterThanOrEqualTo(type, path, actual, expected, result, message) {
          if (actual >= expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is greater than or equal to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        lessThanOrEqualTo: function lessThanOrEqualTo(type, path, actual, expected, result, message) {
          if (actual <= expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is less than or equal to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        }
      };
      valid.Diff = Diff;
      valid.Assert = Assert;
      module.exports = valid;

      /***/
    }, /* 27 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(28);

      /***/
    }, /* 28 */
    /***/function (module, exports, __webpack_require__) {
      /* global window, document, location, Event, setTimeout */
      /*
          ## MockXMLHttpRequest
      
          期望的功能：
          1. 完整地覆盖原生 XHR 的行为
          2. 完整地模拟原生 XHR 的行为
          3. 在发起请求时，自动检测是否需要拦截
          4. 如果不必拦截，则执行原生 XHR 的行为
          5. 如果需要拦截，则执行虚拟 XHR 的行为
          6. 兼容 XMLHttpRequest 和 ActiveXObject
              new window.XMLHttpRequest()
              new window.ActiveXObject("Microsoft.XMLHTTP")
      
          关键方法的逻辑：
          * new   此时尚无法确定是否需要拦截，所以创建原生 XHR 对象是必须的。
          * open  此时可以取到 URL，可以决定是否进行拦截。
          * send  此时已经确定了请求方式。
      
          规范：
          http://xhr.spec.whatwg.org/
          http://www.w3.org/TR/XMLHttpRequest2/
      
          参考实现：
          https://github.com/philikon/MockHttpRequest/blob/master/lib/mock.js
          https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js
          https://github.com/ilinsky/xmlhttprequest/blob/master/XMLHttpRequest.js
          https://github.com/firebug/firebug-lite/blob/master/content/lite/xhr.js
          https://github.com/thx/RAP/blob/master/lab/rap.plugin.xinglie.js
      
          **需不需要全面重写 XMLHttpRequest？**
              http://xhr.spec.whatwg.org/#interface-xmlhttprequest
              关键属性 readyState、status、statusText、response、responseText、responseXML 是 readonly，所以，试图通过修改这些状态，来模拟响应是不可行的。
              因此，唯一的办法是模拟整个 XMLHttpRequest，就像 jQuery 对事件模型的封装。
      
          // Event handlers
          onloadstart         loadstart
          onprogress          progress
          onabort             abort
          onerror             error
          onload              load
          ontimeout           timeout
          onloadend           loadend
          onreadystatechange  readystatechange
       */

      var Util = __webpack_require__(3);

      // 备份原生 XMLHttpRequest
      window._XMLHttpRequest = window.XMLHttpRequest;
      window._ActiveXObject = window.ActiveXObject;

      /*
          PhantomJS
          TypeError: '[object EventConstructor]' is not a constructor (evaluating 'new Event("readystatechange")')
      
          https://github.com/bluerail/twitter-bootstrap-rails-confirm/issues/18
          https://github.com/ariya/phantomjs/issues/11289
      */
      try {
        new window.Event('custom');
      } catch (exception) {
        window.Event = function (type, bubbles, cancelable, detail) {
          var event = document.createEvent('CustomEvent'); // MUST be 'CustomEvent'
          event.initCustomEvent(type, bubbles, cancelable, detail);
          return event;
        };
      }
      var XHR_STATES = {
        // The object has been constructed.
        UNSENT: 0,
        // The open() method has been successfully invoked.
        OPENED: 1,
        // All redirects (if any) have been followed and all HTTP headers of the response have been received.
        HEADERS_RECEIVED: 2,
        // The response's body is being received.
        LOADING: 3,
        // The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).
        DONE: 4
      };
      var XHR_EVENTS = 'readystatechange loadstart progress abort error load timeout loadend'.split(' ');
      var XHR_REQUEST_PROPERTIES = 'timeout withCredentials'.split(' ');
      var XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ');

      // https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js#L32
      var HTTP_STATUS_CODES = {
        100: "Continue",
        101: "Switching Protocols",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        300: "Multiple Choice",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        422: "Unprocessable Entity",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported"
      };

      /*
          MockXMLHttpRequest
      */

      function MockXMLHttpRequest() {
        // 初始化 custom 对象，用于存储自定义属性
        this.custom = {
          events: {},
          requestHeaders: {},
          responseHeaders: {}
        };
      }
      MockXMLHttpRequest._settings = {
        timeout: '10-100'
        /*
            timeout: 50,
            timeout: '10-100',
         */
      };

      MockXMLHttpRequest.setup = function (settings) {
        Util.extend(MockXMLHttpRequest._settings, settings);
        return MockXMLHttpRequest._settings;
      };
      Util.extend(MockXMLHttpRequest, XHR_STATES);
      Util.extend(MockXMLHttpRequest.prototype, XHR_STATES);

      // 标记当前对象为 MockXMLHttpRequest
      MockXMLHttpRequest.prototype.mock = true;

      // 是否拦截 Ajax 请求
      MockXMLHttpRequest.prototype.match = false;

      // 初始化 Request 相关的属性和方法
      Util.extend(MockXMLHttpRequest.prototype, {
        // https://xhr.spec.whatwg.org/#the-open()-method
        // Sets the request method, request URL, and synchronous flag.
        open: function open(method, url, async, username, password) {
          var that = this;
          Util.extend(this.custom, {
            method: method,
            url: url,
            async: typeof async === 'boolean' ? async : true,
            username: username,
            password: password,
            options: {
              url: url,
              type: method
            }
          });
          this.custom.timeout = function (timeout) {
            if (typeof timeout === 'number') return timeout;
            if (typeof timeout === 'string' && !~timeout.indexOf('-')) return parseInt(timeout, 10);
            if (typeof timeout === 'string' && ~timeout.indexOf('-')) {
              var tmp = timeout.split('-');
              var min = parseInt(tmp[0], 10);
              var max = parseInt(tmp[1], 10);
              return Math.round(Math.random() * (max - min)) + min;
            }
          }(MockXMLHttpRequest._settings.timeout);

          // 查找与请求参数匹配的数据模板
          var item = find(this.custom.options);
          function handle(event) {
            // 同步属性 NativeXMLHttpRequest => MockXMLHttpRequest
            for (var i = 0; i < XHR_RESPONSE_PROPERTIES.length; i++) {
              try {
                that[XHR_RESPONSE_PROPERTIES[i]] = xhr[XHR_RESPONSE_PROPERTIES[i]];
              } catch (e) {}
            }
            // 触发 MockXMLHttpRequest 上的同名事件
            that.dispatchEvent(new Event(event.type /*, false, false, that*/));
          }

          // 如果未找到匹配的数据模板，则采用原生 XHR 发送请求。
          if (!item) {
            // 创建原生 XHR 对象，调用原生 open()，监听所有原生事件
            var xhr = createNativeXMLHttpRequest();
            this.custom.xhr = xhr;

            // 初始化所有事件，用于监听原生 XHR 对象的事件
            for (var i = 0; i < XHR_EVENTS.length; i++) {
              xhr.addEventListener(XHR_EVENTS[i], handle);
            }

            // xhr.open()
            if (username) xhr.open(method, url, async, username, password);else xhr.open(method, url, async);

            // 同步属性 MockXMLHttpRequest => NativeXMLHttpRequest
            for (var j = 0; j < XHR_REQUEST_PROPERTIES.length; j++) {
              try {
                xhr[XHR_REQUEST_PROPERTIES[j]] = that[XHR_REQUEST_PROPERTIES[j]];
              } catch (e) {}
            }
            return;
          }

          // 找到了匹配的数据模板，开始拦截 XHR 请求
          this.match = true;
          this.custom.template = item;
          this.readyState = MockXMLHttpRequest.OPENED;
          this.dispatchEvent(new Event('readystatechange' /*, false, false, this*/));
        },

        // https://xhr.spec.whatwg.org/#the-setrequestheader()-method
        // Combines a header in author request headers.
        setRequestHeader: function setRequestHeader(name, value) {
          // 原生 XHR
          if (!this.match) {
            this.custom.xhr.setRequestHeader(name, value);
            return;
          }

          // 拦截 XHR
          var requestHeaders = this.custom.requestHeaders;
          if (requestHeaders[name]) requestHeaders[name] += ',' + value;else requestHeaders[name] = value;
        },
        timeout: 0,
        withCredentials: false,
        upload: {},
        // https://xhr.spec.whatwg.org/#the-send()-method
        // Initiates the request.
        send: function send(data) {
          var that = this;
          this.custom.options.body = data;

          // 原生 XHR
          if (!this.match) {
            this.custom.xhr.send(data);
            return;
          }

          // 拦截 XHR

          // X-Requested-With header
          this.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest');

          // loadstart The fetch initiates.
          this.dispatchEvent(new Event('loadstart' /*, false, false, this*/));

          if (this.custom.async) setTimeout(done, this.custom.timeout); // 异步
          else done(); // 同步

          function done() {
            that.readyState = MockXMLHttpRequest.HEADERS_RECEIVED;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));
            that.readyState = MockXMLHttpRequest.LOADING;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));

            that.status = 200;
            that.statusText = HTTP_STATUS_CODES[200];

            // fix #92 #93 by @qddegtya
            that.response = that.responseText = JSON.stringify(convert(that.custom.template, that.custom.options), null, 4);
            that.readyState = MockXMLHttpRequest.DONE;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));
            that.dispatchEvent(new Event('load' /*, false, false, that*/));
            that.dispatchEvent(new Event('loadend' /*, false, false, that*/));
          }
        },

        // https://xhr.spec.whatwg.org/#the-abort()-method
        // Cancels any network activity.
        abort: function abort() {
          // 原生 XHR
          if (!this.match) {
            this.custom.xhr.abort();
            return;
          }

          // 拦截 XHR
          this.readyState = MockXMLHttpRequest.UNSENT;
          this.dispatchEvent(new Event('abort', false, false, this));
          this.dispatchEvent(new Event('error', false, false, this));
        }
      });

      // 初始化 Response 相关的属性和方法
      Util.extend(MockXMLHttpRequest.prototype, {
        responseURL: '',
        status: MockXMLHttpRequest.UNSENT,
        statusText: '',
        // https://xhr.spec.whatwg.org/#the-getresponseheader()-method
        getResponseHeader: function getResponseHeader(name) {
          // 原生 XHR
          if (!this.match) {
            return this.custom.xhr.getResponseHeader(name);
          }

          // 拦截 XHR
          return this.custom.responseHeaders[name.toLowerCase()];
        },
        // https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method
        // http://www.utf8-chartable.de/
        getAllResponseHeaders: function getAllResponseHeaders() {
          // 原生 XHR
          if (!this.match) {
            return this.custom.xhr.getAllResponseHeaders();
          }

          // 拦截 XHR
          var responseHeaders = this.custom.responseHeaders;
          var headers = '';
          for (var h in responseHeaders) {
            if (!responseHeaders.hasOwnProperty(h)) continue;
            headers += h + ': ' + responseHeaders[h] + '\r\n';
          }
          return headers;
        },
        overrideMimeType: function overrideMimeType( /*mime*/) {},
        responseType: '',
        // '', 'text', 'arraybuffer', 'blob', 'document', 'json'
        response: null,
        responseText: '',
        responseXML: null
      });

      // EventTarget
      Util.extend(MockXMLHttpRequest.prototype, {
        addEventListener: function addEventListener(type, handle) {
          var events = this.custom.events;
          if (!events[type]) events[type] = [];
          events[type].push(handle);
        },
        removeEventListener: function removeEventListener(type, handle) {
          var handles = this.custom.events[type] || [];
          for (var i = 0; i < handles.length; i++) {
            if (handles[i] === handle) {
              handles.splice(i--, 1);
            }
          }
        },
        dispatchEvent: function dispatchEvent(event) {
          var handles = this.custom.events[event.type] || [];
          for (var i = 0; i < handles.length; i++) {
            handles[i].call(this, event);
          }
          var ontype = 'on' + event.type;
          if (this[ontype]) this[ontype](event);
        }
      });

      // Inspired by jQuery
      function createNativeXMLHttpRequest() {
        var isLocal = function () {
          var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
          var rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/;
          var ajaxLocation = location.href;
          var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
          return rlocalProtocol.test(ajaxLocParts[1]);
        }();
        return window.ActiveXObject ? !isLocal && createStandardXHR() || createActiveXHR() : createStandardXHR();
        function createStandardXHR() {
          try {
            return new window._XMLHttpRequest();
          } catch (e) {}
        }
        function createActiveXHR() {
          try {
            return new window._ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {}
        }
      }

      // 查找与请求参数匹配的数据模板：URL，Type
      function find(options) {
        for (var sUrlType in MockXMLHttpRequest.Mock._mocked) {
          var item = MockXMLHttpRequest.Mock._mocked[sUrlType];
          if ((!item.rurl || match(item.rurl, options.url)) && (!item.rtype || match(item.rtype, options.type.toLowerCase()))) {
            // console.log('[mock]', options.url, '>', item.rurl)
            return item;
          }
        }
        function match(expected, actual) {
          if (Util.type(expected) === 'string') {
            return expected === actual;
          }
          if (Util.type(expected) === 'regexp') {
            return expected.test(actual);
          }
        }
      }

      // 数据模板 ＝> 响应数据
      function convert(item, options) {
        return Util.isFunction(item.template) ? item.template(options) : MockXMLHttpRequest.Mock.mock(item.template);
      }
      module.exports = MockXMLHttpRequest;

      /***/
    }
    /******/])
  );
});

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/module.js */ 50)(module)))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 51:
/*!**************************************!*\
  !*** E:/uni-app/恋爱日记/mock/test.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"icon\":\"../../static/icon/捧花.png\",\"text\":\"心里话\",\"path\":\"\"},{\"icon\":\"../../static/icon/信件.png\",\"text\":\"未来信件\",\"path\":\"\"},{\"icon\":\"../../static/icon/铃铛.png\",\"text\":\"宠物公寓\",\"path\":\"\"},{\"icon\":\"../../static/icon/誓言.png\",\"text\":\"恋爱答案书\",\"path\":\"\"},{\"icon\":\"../../static/icon/礼盒.png\",\"text\":\"情侣礼物\",\"path\":\"\"}]");

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map