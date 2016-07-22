module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';var _express = __webpack_require__(13);var _express2 = _interopRequireDefault(_express);
  var _bodyParser = __webpack_require__(37);var _bodyParser2 = _interopRequireDefault(_bodyParser);
  var _compression = __webpack_require__(38);var _compression2 = _interopRequireDefault(_compression);
  var _morgan = __webpack_require__(42);var _morgan2 = _interopRequireDefault(_morgan);
  var _cors = __webpack_require__(40);var _cors2 = _interopRequireDefault(_cors);
  var _connectBusboy = __webpack_require__(39);var _connectBusboy2 = _interopRequireDefault(_connectBusboy);
  var _msUtils = __webpack_require__(15);var _msUtils2 = _interopRequireDefault(_msUtils);
  
  var _error = __webpack_require__(20);var _error2 = _interopRequireDefault(_error);
  var _config = __webpack_require__(7);var _config2 = _interopRequireDefault(_config);
  var _router = __webpack_require__(25);var _router2 = _interopRequireDefault(_router);
  var _router_setup = __webpack_require__(9);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  global.logger = _msUtils2.default.logger(_config2.default.logger.category, _config2.default.logger.level);
  
  var app = (0, _express2.default)();
  _morgan2.default.token('params', function (req) {return JSON.stringify((0, _router_setup.morganParams)(req, req.method));});
  app.use((0, _morgan2.default)('[:date[iso]] [:method :url] [:status] [:response-time ms] [:params]'));
  app.use((0, _cors2.default)());
  app.use(_bodyParser2.default.json({ limit: '64mb' }));
  app.use(_bodyParser2.default.urlencoded({ limit: '64mb', extended: true }));
  app.use((0, _compression2.default)());
  app.use((0, _connectBusboy2.default)({ limits: { fileSize: 1024 * 1024 * 1024 } })); // 1G
  
  app.use('/', _router2.default.apiRouter);
  
  app.use(_error2.default.notFoundHandler);
  app.use(_error2.default.errorLog);
  app.use(_error2.default.clientErrorHandler);
  app.use(_error2.default.errorHandler);
  
  var server = app.listen(_config2.default.serverPort, function () {
    console.log('Http listen at port:', _config2.default.serverPort);
  });
  
  process.on('SIGINT', function () {
    console.log('http exiting...');
    server.close(function () {
      console.log('http exited.');
      process.exit(0);
    });
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.material = exports.message = exports.menu = undefined;var _menu = __webpack_require__(17);var _menu2 = _interopRequireDefault(_menu);
  var _message = __webpack_require__(18);var _message2 = _interopRequireDefault(_message);
  var _material = __webpack_require__(16);var _material2 = _interopRequireDefault(_material);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.
  
  menu = _menu2.default;exports.message = _message2.default;exports.material = _material2.default;

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.Api = undefined;var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(10);var _createClass3 = _interopRequireDefault(_createClass2);var _wechatApi = __webpack_require__(45);var _wechatApi2 = _interopRequireDefault(_wechatApi);
  var _config = __webpack_require__(7);var _config2 = _interopRequireDefault(_config);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var 
  
  WechatApi = function () {
    function WechatApi(appid, appsecret, getToken, saveToken) {(0, _classCallCheck3.default)(this, WechatApi);
      this.api = new _wechatApi2.default(appid, appsecret, getToken, saveToken);
    }(0, _createClass3.default)(WechatApi, [{ key: 'getApi', value: function getApi() 
  
      {
        return this.api;
      } }]);return WechatApi;}();
  
  
  var Api = exports.Api = new WechatApi(_config2.default.appid, _config2.default.appsecret);

/***/ },
/* 7 */
/***/ function(module, exports) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var config = { 
    serverPort: 8080, 
    appid: 'wx2bcd6dcb9db380c3', 
    appsecret: '2ae0ef2f63291a089c1767d442cced37', 
    grant_type: 'client_credential', 
    logger: { 
      category: 'wechat-api', 
      level: 'DEBUG' } };exports.default = 
  
  
  config;module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _typeof2 = __webpack_require__(5);var _typeof3 = _interopRequireDefault(_typeof2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  
  var _msUtils = __webpack_require__(15);var _msUtils2 = _interopRequireDefault(_msUtils);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  var error = _msUtils2.default.error; /**
                                        * Created on 5/6/16.
                                        */var _class = function _class() {(0, _classCallCheck3.default)(this, _class);this.
    ok = function (res, data, wrap) {
      if (wrap) {
        return res.json({ code: 1, result: { data: data } });
      }
      return res.json({ code: 1, result: data });
    };this.
  
    fail = function (res) {
      var result = function result(e) {
        // let message = 'unknown';
        var code = -1;
        if (typeof e === 'string') {
          code = e;
        } else if ((typeof e === 'undefined' ? 'undefined' : (0, _typeof3.default)(e)) === 'object') {
          //        message = e.toString();
          code = e.message;
        }
        var ret = error(code);
        logger.error('fail error = ', e, e.stack || '', ret);
        res.json(ret);
      };
      return result;
    };};exports.default = _class;module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.morganParams = exports.default = undefined;var _slicedToArray2 = __webpack_require__(36);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  
  
  var _validator = __webpack_require__(34);var _validator2 = _interopRequireDefault(_validator);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  
  function parseParams(req, method) {
    var params = {};var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
      for (var _iterator = Object.keys(req.params)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var _key = _step.value;
        params[_key] = req.params[_key];
      }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
      for (var _iterator2 = Object.keys(req.query)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _key2 = _step2.value;
        params[_key2] = req.query[_key2];
      }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {
      for (var _iterator3 = Object.keys(req.body)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var _key3 = _step3.value;
        params[_key3] = req.body[_key3];
      }} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3.return) {_iterator3.return();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}
    if (req.xfiles) {var _iteratorNormalCompletion4 = true;var _didIteratorError4 = false;var _iteratorError4 = undefined;try {
        for (var _iterator4 = req.xfiles.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {var _step4$value = (0, _slicedToArray3.default)(_step4.value, 2);var key = _step4$value[0];var value = _step4$value[1];
          params[key] = value;
        }} catch (err) {_didIteratorError4 = true;_iteratorError4 = err;} finally {try {if (!_iteratorNormalCompletion4 && _iterator4.return) {_iterator4.return();}} finally {if (_didIteratorError4) {throw _iteratorError4;}}}
    }
    if (req.xmljson) {
      var xmljson = req.xmljson;var _iteratorNormalCompletion5 = true;var _didIteratorError5 = false;var _iteratorError5 = undefined;try {
        for (var _iterator5 = Object.keys(xmljson)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {var key = _step5.value;
          params[key] = xmljson[key];
        }} catch (err) {_didIteratorError5 = true;_iteratorError5 = err;} finally {try {if (!_iteratorNormalCompletion5 && _iterator5.return) {_iterator5.return();}} finally {if (_didIteratorError5) {throw _iteratorError5;}}}
    }
    return params;
  } /**
     * Created on 5/6/16.
     */function handler(route) {
    return function (req, res, next) {
      var params = parseParams(req, route[0]);
      var error = _validator2.default.checkParamType(params, route[4], route[5], route[6]);
  
      var x_app_id = req.headers['x-app-id'];
      if (params.app_id) {
        if (x_app_id) {
          params.x_app_id = x_app_id;
        }
        // x_app_id && (params.x_app_id = x_app_id);
      } else {
        if (x_app_id) {
          params.app_id = x_app_id;
        }
        // x_app_id && (params.app_id = x_app_id);
      }
  
      if (error.length) {
        return res.send({ code: 0, message: error.join(',') });
      }
      return route[3](req, res, params);
    };
  }
  
  /**
  routes = {
    passport: [
      [method, route, [middlewares], handler, [params], [params_options], [params_types]]
    ]
  }
   */
  function Router(router, routes) {var _iteratorNormalCompletion6 = true;var _didIteratorError6 = false;var _iteratorError6 = undefined;try {
      for (var _iterator6 = Object.keys(routes)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {var key = _step6.value;
        var elements = routes[key];var _iteratorNormalCompletion7 = true;var _didIteratorError7 = false;var _iteratorError7 = undefined;try {
          for (var _iterator7 = elements[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {var element = _step7.value;
            var method = element[0].toLowerCase();
            router[method]('/' + key + element[1], element[2], handler(element));
          }} catch (err) {_didIteratorError7 = true;_iteratorError7 = err;} finally {try {if (!_iteratorNormalCompletion7 && _iterator7.return) {_iterator7.return();}} finally {if (_didIteratorError7) {throw _iteratorError7;}}}
      }} catch (err) {_didIteratorError6 = true;_iteratorError6 = err;} finally {try {if (!_iteratorNormalCompletion6 && _iterator6.return) {_iterator6.return();}} finally {if (_didIteratorError6) {throw _iteratorError6;}}}
  }
  
  function morganParams(req, method) {
    var params = {};
    Object.keys(req.params).forEach(function (v) {
      params[v] = req.params[v];
    });var _iteratorNormalCompletion8 = true;var _didIteratorError8 = false;var _iteratorError8 = undefined;try {
      for (var _iterator8 = Object.keys(req.query)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {var key = _step8.value;
        params[key] = req.query[key];
      }} catch (err) {_didIteratorError8 = true;_iteratorError8 = err;} finally {try {if (!_iteratorNormalCompletion8 && _iterator8.return) {_iterator8.return();}} finally {if (_didIteratorError8) {throw _iteratorError8;}}}var _iteratorNormalCompletion9 = true;var _didIteratorError9 = false;var _iteratorError9 = undefined;try {
      for (var _iterator9 = Object.keys(req.body)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {var _key4 = _step9.value;
        params[_key4] = req.body[_key4];
      }} catch (err) {_didIteratorError9 = true;_iteratorError9 = err;} finally {try {if (!_iteratorNormalCompletion9 && _iterator9.return) {_iterator9.return();}} finally {if (_didIteratorError9) {throw _iteratorError9;}}}
    params['x-app-id'] = req.headers['x-app-id'];
    params['x-access-token'] = req.headers['x-access-token'];
    return params;
  }exports.
  
  default = Router;exports.morganParams = morganParams;

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("google-libphonenumber");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("ms-utils");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _wchatApi = __webpack_require__(6);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  
  var wcApi = _wchatApi.Api.getApi();exports.default = 
  
  new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      uploadMaterial = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(params) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt('return', new Promise(function (resolve, reject) {
                    params.filepath = __dirname.substring(0, __dirname.indexOf('/src')) + '/test/file/haitan.jpg';
                    wcApi.uploadMaterial(params.filepath, params.type, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x) {return _ref.apply(this, arguments);};}();this.
  
      uploadNewsMaterial = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(params) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt('return', new Promise(function (resolve, reject) {
                    params.news = { 
                      articles: [{ 
                        title: 'test', 
                        thumb_media_id: 'T8GD0S-0UmutnjdW_gTJHv5vYBcA27-y0b7Q1DRIEPY', 
                        author: 'Jim', 
                        digest: '', 
                        show_cover_pic: 1, 
                        content: '<p><span style=\"font-size: 12pt;\">任何一条信息都是有价格的。价格高低自然是可以量化衡量。</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">浏览信息占用你多少时间？你的单位时间收入是多少？算一下，这就是你浏览的信息价格。</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">浏览信息占用带宽和大脑的记忆空间吗？如果这些带宽、记忆空间用来创作，做有价值的输出，又会有多少收益？这也是信息的价格。</span></p><p><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">进一步想，一条信息，如果能够影响我们当下的心情变化、给我们的未来生活带来积极的影响，从而提高了我们生活质量，那这个高质量的生活不同样是信息的价格吗？</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">例如：我们浏览到新生大学的文章，学习了知识，掌握了技能，丰富了经验，改善了我们的生活。这个价格又改怎么衡量呢？</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">反之，如果浏览信息对自己产生负面影响，让我们心生抱怨、变得消极，为这些负面影响所干扰，这是不是信息的价格呢？</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">想一想，最近在关注哪些信息，今天都接触到了哪些信息，对自己最近一段时间影响较大的信息有哪些，你能够从这些方面衡量出信息背后的价格吗？你是否能从中体会到信息带给自己的切身改变？</span><span style=\"font-size: 12pt;\"><br></span><br></p>', 
                        content_source_url: 'www.qq.com' }] };
  
  
                    wcApi.uploadNewsMaterial(params.news, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context2.stop();}}}, _callee2, _this);}));return function (_x2) {return _ref2.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(10);var _createClass3 = _interopRequireDefault(_createClass2);var _wchatApi = __webpack_require__(6);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  
  var wcApi = _wchatApi.Api.getApi();exports.default = 
  
  new (function () {function _class() {(0, _classCallCheck3.default)(this, _class);}(0, _createClass3.default)(_class, [{ key: 'createMenu', value: function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(
  
        menu) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt('return', 
                  new Promise(function (resolve, reject) {
                    wcApi.createMenu(menu, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context.stop();}}}, _callee, this);}));function createMenu(_x) {return _ref.apply(this, arguments);}return createMenu;}() }]);return _class;}())();module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _wchatApi = __webpack_require__(6);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  
  var wcApi = _wchatApi.Api.getApi();exports.default = 
  
  new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      sendText = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(params) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt('return', new Promise(function (resolve, reject) {
                    wcApi.sendText(params.openid, params.Content || 'Hello world', function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x) {return _ref.apply(this, arguments);};}();this.
  
      sendImage = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(params) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt('return', new Promise(function (resolve, reject) {
                    wcApi.sendImage(params.openid, params.MediaId, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context2.stop();}}}, _callee2, _this);}));return function (_x2) {return _ref2.apply(this, arguments);};}();this.
  
      sendVoice = function () {var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(params) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:return _context3.abrupt('return', new Promise(function (resolve, reject) {
                    wcApi.sendVoice(params.openid, params.MediaId, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context3.stop();}}}, _callee3, _this);}));return function (_x3) {return _ref3.apply(this, arguments);};}();this.
  
      sendVideo = function () {var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(params) {return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:return _context4.abrupt('return', new Promise(function (resolve, reject) {
                    wcApi.sendVideo(params.openid, params.MediaId, params.ThumbMediaId, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context4.stop();}}}, _callee4, _this);}));return function (_x4) {return _ref4.apply(this, arguments);};}();this.
  
      sendMusic = function () {var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(params) {return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:return _context5.abrupt('return', new Promise(function (resolve, reject) {
                    wcApi.sendMusic(params.openid, params.music, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context5.stop();}}}, _callee5, _this);}));return function (_x5) {return _ref5.apply(this, arguments);};}();this.
  
      sendNews = function () {var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(params) {return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:return _context6.abrupt('return', new Promise(function (resolve, reject) {
                    wcApi.sendNews(params.openid, params.articles, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context6.stop();}}}, _callee6, _this);}));return function (_x6) {return _ref6.apply(this, arguments);};}();this.
  
      sendMpNews = function () {var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(params) {return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:return _context7.abrupt('return', new Promise(function (resolve, reject) {
                    wcApi.sendMpNews(params.openid, params.MediaId, function (err, result) {
                      if (err) {
                        reject(err);
                      }
                      resolve(result);
                    });
                  }));case 1:case 'end':return _context7.stop();}}}, _callee7, _this);}));return function (_x7) {return _ref7.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _typeof2 = __webpack_require__(5);var _typeof3 = _interopRequireDefault(_typeof2);var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _parse_params = __webpack_require__(33);
  var _utility = __webpack_require__(43);var _utility2 = _interopRequireDefault(_utility);
  var _xmlutil = __webpack_require__(35);var _xmlutil2 = _interopRequireDefault(_xmlutil);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = 
  
  new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      validateSign = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res, next) {var _ret;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;return _context3.delegateYield(_regenerator2.default.mark(function _callee2() {var 
  
                    params, 
  
  
  
                    signature, 
                    obj, 
  
  
  
  
  
  
                    arr, 
  
  
  
                    sign, 
  
  
  
  
  
  
                    postdata;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (0, _parse_params.parseParams)(req);case 2:params = _context2.sent;if (params.signature) {_context2.next = 5;break;}return _context2.abrupt('return', { v: res.end('error') });case 5:signature = params.signature;obj = Object.assign({}, params);if (obj.signature) {delete obj.signature;}if (obj.echostr) {delete obj.echostr;}arr = [];arr.push('weixin'); // 'weixin'为自己设置的token
                            arr.push(obj.timestamp);arr.push(obj.nonce);sign = _utility2.default.sha1(arr.sort().join(''));if (!(sign !== signature)) {_context2.next = 16;break;}return _context2.abrupt('return', { v: res.end('error') });case 16:if (!(req.method === 'GET')) {_context2.next = 18;break;}return _context2.abrupt('return', { v: res.end(params.echostr) });case 18:postdata = '';req.setEncoding('utf8');
                            req.on('data', function (chunk) {
                              postdata += chunk;
                            });
                            req.on('end', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
                              data;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return _xmlutil2.default.parseString(postdata);case 2:data = _context.sent;
                                      req.xmljson = data;
                                      // return res.end('ok');
                                      return _context.abrupt('return', next());case 5:case 'end':return _context.stop();}}}, _callee, _this);})));case 22:case 'end':return _context2.stop();}}}, _callee2, _this);})(), 't0', 2);case 2:_ret = _context3.t0;if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {_context3.next = 5;break;}return _context3.abrupt('return', _ret.v);case 5:_context3.next = 10;break;case 7:_context3.prev = 7;_context3.t1 = _context3['catch'](0);return _context3.abrupt('return', 
  
  
                  next(_context3.t1));case 10:case 'end':return _context3.stop();}}}, _callee3, _this, [[0, 7]]);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = new (function () {function _class2() {(0, _classCallCheck3.default)(this, _class2);this.
      errorLog = function (e, req, res, next) {
        logger.error(req.path, 'error = ', e, e.stack);
        next(e);
      };this.
  
      clientErrorHandler = function (e, req, res, next) {
        if (req.xhr) {
          return res.send({ code: 0, message: '请求异常' });
        }
        return next(e);
      };this.
  
      errorHandler = function (e, req, res, next) {
        logger.error(e, e.stack);
        res.statusCode = 500;
        res.send({ code: 500 });
      };this.
  
      notFoundHandler = function (req, res) {
        logger.info('notFound', req.path, req.url, req._remoteAddress);
        res.statusCode = 404;
        res.end();
      };}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _typeof2 = __webpack_require__(5);var _typeof3 = _interopRequireDefault(_typeof2);var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  
  
  
  
  
  
  
  
  
  var _wchatApi = __webpack_require__(27);var _wchatApi2 = _interopRequireDefault(_wchatApi);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = 
  
  new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      dispatchEvent = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                  logger.info('dispatchEventParams = ', params);_context.prev = 1;_context.next = 4;return (
  
                    _this.autoJudge(req, res, params));case 4:return _context.abrupt('return', _context.sent);case 7:_context.prev = 7;_context.t0 = _context['catch'](1);
  
                  logger.error('dispatchEvent发生错误', _context.t0.message, _context.t0);return _context.abrupt('return', 
                  res.end(''));case 11:case 'end':return _context.stop();}}}, _callee, _this, [[1, 7]]);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();this.
  
  
  
      autoJudge = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, params) {var 
          MsgType, Event, EventKey, 
  
          method;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:MsgType = params.MsgType;Event = params.Event;EventKey = params.EventKey;logger.info('MsgType | Event | EventKey', MsgType, Event, EventKey);method = _wchatApi2.default[MsgType.toLowerCase()];
                  if (Event) {
                    method = method[Event.toLowerCase()];
                    if (Event.toLowerCase() !== 'view' && EventKey && (typeof method === 'undefined' ? 'undefined' : (0, _typeof3.default)(method)) === 'object' && method[EventKey.toLowerCase()]) {
                      method = method[EventKey.toLowerCase()];
                    }
                  }_context2.next = 8;return (
                    method(req, res, params));case 8:return _context2.abrupt('return', _context2.sent);case 9:case 'end':return _context2.stop();}}}, _callee2, _this);}));return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}();}return _class2;}())(); /**
                                                                                                                                                                                                                                                                               * 获取微信post过来的消息例如：
                                                                                                                                                                                                                                                                               * { ToUserName: 'gh_c1339db8f486',
                                                                                                                                                                                                                                                                               *   FromUserName: 'o3yxQwOuVYyT5td8CJb-WxNTRr0o',
                                                                                                                                                                                                                                                                               *   CreateTime: '1468378927',
                                                                                                                                                                                                                                                                               *   MsgType: 'event',
                                                                                                                                                                                                                                                                               *   Event: 'CLICK',
                                                                                                                                                                                                                                                                               *   EventKey: 'test'
                                                                                                                                                                                                                                                                               *  }
                                                                                                                                                                                                                                                                               * 根据MsgType,Event,EventKey来分发调用那个controller来处理消息
                                                                                                                                                                                                                                                                               */module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _menu = __webpack_require__(24);var _menu2 = _interopRequireDefault(_menu);
  var _auth = __webpack_require__(19);var _auth2 = _interopRequireDefault(_auth);
  var _dispatch = __webpack_require__(21);var _dispatch2 = _interopRequireDefault(_dispatch);
  var _material = __webpack_require__(23);var _material2 = _interopRequireDefault(_material);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  
  var api = Object.assign({}, _menu2.default, _dispatch2.default, _material2.default);
  
  /**
   * routes = {
   *  passport: [
   *   [method, route, [middlewares], handler, [params], [params_options], [params_types]]
   *  ]
   * }
   */exports.default = 
  { 
    menu: [
    ['GET', '/createMenu', [], api.createMenu, [], [], []]], 
  
    '': [
    ['GET', '/', [_auth2.default.validateSign], [], [], [], []], 
    ['POST', '/', [_auth2.default.validateSign], api.dispatchEvent, [], [], []]], 
  
    material: [
    ['GET', '/uploadMaterial/:filepath/:type', [], api.uploadMaterial, ['filepath', 'type'], [1, 1], ['string', 'string']], 
    ['GET', '/uploadNewsMaterial', [], api.uploadNewsMaterial, [], [], []]] };module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(11);var _inherits3 = _interopRequireDefault(_inherits2);var _controller = __webpack_require__(4);
  var _base = __webpack_require__(8);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = 
  
  new (function (_Base) {(0, _inherits3.default)(_class2, _Base);function _class2() {var _Object$getPrototypeO, _this2 = this;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, _class2);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class2)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.
      uploadMaterial = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {var 
  
          result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return _controller.material.uploadMaterial(params);case 3:result = _context.sent;
                  _this.ok(res, result);_context.next = 11;break;case 7:_context.prev = 7;_context.t0 = _context['catch'](0);
  
                  logger.error('material.uploadMaterial,error', _context.t0);
                  _this.fail(res)(_context.t0);case 11:case 'end':return _context.stop();}}}, _callee, _this2, [[0, 7]]);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}(), _this.
  
  
  
      uploadNewsMaterial = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, params) {var 
  
          result;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;_context2.next = 3;return _controller.material.uploadNewsMaterial(params);case 3:result = _context2.sent;
                  _this.ok(res, result);_context2.next = 11;break;case 7:_context2.prev = 7;_context2.t0 = _context2['catch'](0);
  
                  logger.error('material.uploadNewsMaterial,error', _context2.t0);
                  _this.fail(res)(_context2.t0);case 11:case 'end':return _context2.stop();}}}, _callee2, _this2, [[0, 7]]);}));return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}return _class2;}(_base2.default))();module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(12);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(11);var _inherits3 = _interopRequireDefault(_inherits2);var _controller = __webpack_require__(4);
  var _base = __webpack_require__(8);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = 
  
  new (function (_Base) {(0, _inherits3.default)(_class2, _Base);function _class2() {var _Object$getPrototypeO, _this2 = this;var _temp, _this, _ret;(0, _classCallCheck3.default)(this, _class2);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class2)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.
  
      createMenu = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {var 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
          me, 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
          result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0: // const me = {
                  //   button: [
                  //     {
                  //       type: 'click',
                  //       name: '测试',
                  //       key: 'test'
                  //     },
                  //     {
                  //       name: '菜单',
                  //       sub_button: [
                  //         {
                  //           type: 'view',
                  //           name: '搜索',
                  //           url: 'http://www.baidu.com'
                  //         },
                  //         {
                  //           type: 'view',
                  //           name: '视频',
                  //           url: 'http://v.qq.com/'
                  //         }
                  //       ]
                  //     }
                  //   ]
                  // };
                  me = { button: [{ name: '扫码', sub_button: [{ type: 'scancode_waitmsg', name: '扫码带提示', key: 'scancode_wait' }, { type: 'scancode_push', name: '扫码推事件', key: 'scancode_push' }] }, { name: '发图', sub_button: [{ type: 'pic_sysphoto', name: '系统拍照发图', key: 'pic_sysphoto' }, { type: 'pic_photo_or_album', name: '拍照或者相册发图', key: 'pic_photo_or_album' }, { type: 'pic_weixin', name: '微信相册发图', key: 'pic_weixin' }] }, { name: '发送位置', type: 'location_select', key: 'location_select' }] };_context.prev = 1;_context.next = 4;return _controller.menu.createMenu(me);case 4:result = _context.sent;return _context.abrupt('return', _this.ok(res, result));case 8:_context.prev = 8;_context.t0 = _context['catch'](1);return _context.abrupt('return', _this.fail(res)(_context.t0));case 11:case 'end':return _context.stop();}}}, _callee, _this2, [[1, 8]]);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}return _class2;}(_base2.default))();module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = __webpack_require__(13);var _express2 = _interopRequireDefault(_express);
  var _api = __webpack_require__(22);var _api2 = _interopRequireDefault(_api);
  var _router_setup = __webpack_require__(9);var _router_setup2 = _interopRequireDefault(_router_setup);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  
  var apiRouter = _express2.default.Router();
  (0, _router_setup2.default)(apiRouter, _api2.default);exports.default = 
  
  { 
    apiRouter: apiRouter };module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      letGo = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                  logger.info('view.url = ', params.EventKey);return _context.abrupt('return', 
                  res.end('success'));case 2:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _message = __webpack_require__(29);var _message2 = _interopRequireDefault(_message);
  var _eventView = __webpack_require__(26);var _eventView2 = _interopRequireDefault(_eventView);
  var _subscribe = __webpack_require__(32);var _subscribe2 = _interopRequireDefault(_subscribe);
  var _scancode = __webpack_require__(31);var _scancode2 = _interopRequireDefault(_scancode);
  var _photo = __webpack_require__(30);var _photo2 = _interopRequireDefault(_photo);
  var _location = __webpack_require__(28);var _location2 = _interopRequireDefault(_location);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
  
  var wchatApi = Object.assign({}, _message2.default, _eventView2.default);
  /**
   * {
   *  'msgtype': [
   *  []
   * ]
   * }
   */exports.default = 
  { 
    event: { 
      click: { 
        test: wchatApi.sendMsg }, 
  
      view: wchatApi.letGo, 
      subscribe: _subscribe2.default.subscribe, 
      unsubscribe: _subscribe2.default.unsubscribe, 
      scancode_waitmsg: { 
        scancode_wait: _scancode2.default.scancode_waitmsg }, 
  
      scancode_push: { 
        scancode_push: _scancode2.default.scancode_push }, 
  
      pic_sysphoto: { 
        pic_sysphoto: _photo2.default.pic_photo }, 
  
      pic_photo_or_album: { 
        pic_photo_or_album: _photo2.default.pic_photo }, 
  
      pic_weixin: { 
        pic_weixin: _photo2.default.pic_photo }, 
  
      location_select: { 
        location_select: _location2.default.location_select } }, 
  
  
    location: _message2.default.location, 
    image: _message2.default.image, 
    text: _message2.default.text, 
    voice: _message2.default.voice, 
    video: _message2.default.video, 
    shortvideo: _message2.default.shortvideo, 
    link: _message2.default.link };module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      location_select = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                  logger.info('收到用户位置', params.SendLocationInfo);return _context.abrupt('return', 
                  res.end('success'));case 2:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _controller = __webpack_require__(4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = 
  
  new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      sendText = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {var 
          result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return _controller.message.sendText(params);case 2:result = _context.sent;
                  logger.info('wechatApi.sendMsg.result', result);return _context.abrupt('return', 
                  res.end('success'));case 5:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();this.
  
      image = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, params) {var 
  
          result;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:logger.info('收到图片消息', params.MsgId, params.PicUrl);_context2.next = 3;return _controller.message.sendImage(params);case 3:result = _context2.sent;
                  logger.info('wechatApi.image.result', result);return _context2.abrupt('return', 
                  res.end('success'));case 6:case 'end':return _context2.stop();}}}, _callee2, _this);}));return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}();this.
  
  
      location = function () {var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res, params) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                  logger.info('收到位置消息', params.Label);
                  params.Content = params.Label;_context3.next = 4;return (
                    _this.sendText(req, res, params));case 4:return _context3.abrupt('return', _context3.sent);case 5:case 'end':return _context3.stop();}}}, _callee3, _this);}));return function (_x7, _x8, _x9) {return _ref3.apply(this, arguments);};}();this.
  
  
      text = function () {var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res, params) {return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                  logger.info('收到文字消息', params.Content);_context4.next = 3;return (
                    _this.sendText(req, res, params));case 3:return _context4.abrupt('return', _context4.sent);case 4:case 'end':return _context4.stop();}}}, _callee4, _this);}));return function (_x10, _x11, _x12) {return _ref4.apply(this, arguments);};}();this.
  
  
      voice = function () {var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(req, res, params) {var 
  
          result;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:logger.info('收到语音消息', params.MediaId, params.Format);_context5.next = 3;return _controller.message.sendVoice(params);case 3:result = _context5.sent;
                  logger.info('wechatApi.voice.result', result);return _context5.abrupt('return', 
                  res.end('success'));case 6:case 'end':return _context5.stop();}}}, _callee5, _this);}));return function (_x13, _x14, _x15) {return _ref5.apply(this, arguments);};}();this.
  
  
      video = function () {var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(req, res, params) {var 
  
  
          result;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:logger.info('收到视频消息', params.MediaId, params.ThumbMediaId);params.Content = '收到视频消息';_context6.next = 4;return _controller.message.sendText(params);case 4:result = _context6.sent;
                  logger.info('wechatApi.video.result', result);return _context6.abrupt('return', 
                  res.end('success'));case 7:case 'end':return _context6.stop();}}}, _callee6, _this);}));return function (_x16, _x17, _x18) {return _ref6.apply(this, arguments);};}();this.
  
  
      shortvideo = function () {var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(req, res, params) {var 
  
  
          result;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:logger.info('收到小视频消息', params.MediaId, params.ThumbMediaId);params.Content = '收到小视频消息';_context7.next = 4;return _controller.message.sendText(params);case 4:result = _context7.sent;
                  logger.info('wechatApi.shortvideo.result', result);return _context7.abrupt('return', 
                  res.end('success'));case 7:case 'end':return _context7.stop();}}}, _callee7, _this);}));return function (_x19, _x20, _x21) {return _ref7.apply(this, arguments);};}();this.
  
  
      link = function () {var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(req, res, params) {return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                  logger.info('收到链接消息', params.Title, params.Description, params.Url);_context8.next = 3;return (
                    _this.sendText(req, res, params));case 3:return _context8.abrupt('return', _context8.sent);case 4:case 'end':return _context8.stop();}}}, _callee8, _this);}));return function (_x22, _x23, _x24) {return _ref8.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      pic_photo = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                  logger.info('收到图片', params.SendPicsInfo);return _context.abrupt('return', 
                  res.end('success'));case 2:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      scancode_waitmsg = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                  logger.info('scancode_waitmsg收到二维码信息', params.ScanCodeInfo);return _context.abrupt('return', 
                  res.end('success'));case 2:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();this.
  
  
      scancode_push = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, params) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                  logger.info('scancode_push收到二维码信息', params.ScanCodeInfo);return _context2.abrupt('return', 
                  res.end('success'));case 2:case 'end':return _context2.stop();}}}, _callee2, _this);}));return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _controller = __webpack_require__(4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = 
  
  new (function () {function _class2() {var _this = this;(0, _classCallCheck3.default)(this, _class2);this.
      subscribe = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, params) {var 
  
  
          result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:logger.info('subscribe ===>', params);params.MediaId = 'T8GD0S-0UmutnjdW_gTJHnmupkGaTljPq3T_9wtRGhM';_context.next = 4;return _controller.message.sendMpNews(params);case 4:result = _context.sent;
                  logger.info('subscribe.sendMpNews', result);return _context.abrupt('return', 
                  res.end('success'));case 7:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();this.
  
  
      unsubscribe = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, params) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                  logger.info('unsubscribe ===>', params);return _context2.abrupt('return', 
                  res.end('success'));case 2:case 'end':return _context2.stop();}}}, _callee2, _this);}));return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}();}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.parseParams = undefined;var _regenerator = __webpack_require__(3);var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = __webpack_require__(2);var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var parseParams = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req) {var 
      params, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, 
      key, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, 
  
  
      _key;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:params = {};_iteratorNormalCompletion = true;_didIteratorError = false;_iteratorError = undefined;_context.prev = 4;for (_iterator = Object.keys(req.params)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {key = _step.value;params[key] = req.params[key];}_context.next = 12;break;case 8:_context.prev = 8;_context.t0 = _context["catch"](4);_didIteratorError = true;_iteratorError = _context.t0;case 12:_context.prev = 12;_context.prev = 13;if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}case 15:_context.prev = 15;if (!_didIteratorError) {_context.next = 18;break;}throw _iteratorError;case 18:return _context.finish(15);case 19:return _context.finish(12);case 20:_iteratorNormalCompletion2 = true;_didIteratorError2 = false;_iteratorError2 = undefined;_context.prev = 23;for (_iterator2 = Object.keys(req.query)[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {_key = _step2.value;
                params[_key] = req.query[_key];
              }_context.next = 31;break;case 27:_context.prev = 27;_context.t1 = _context["catch"](23);_didIteratorError2 = true;_iteratorError2 = _context.t1;case 31:_context.prev = 31;_context.prev = 32;if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}case 34:_context.prev = 34;if (!_didIteratorError2) {_context.next = 37;break;}throw _iteratorError2;case 37:return _context.finish(34);case 38:return _context.finish(31);case 39:return _context.abrupt("return", 
              params);case 40:case "end":return _context.stop();}}}, _callee, this, [[4, 8, 12, 20], [13,, 15, 19], [23, 27, 31, 39], [32,, 34, 38]]);}));return function parseParams(_x) {return _ref.apply(this, arguments);};}();function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.
  
  
  parseParams = parseParams;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';var _typeof2 = __webpack_require__(5);var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _ = __webpack_require__(41);
  var validator = __webpack_require__(44);
  var PNF = __webpack_require__(14).PhoneNumberFormat;
  var phoneUtil = __webpack_require__(14).PhoneNumberUtil.getInstance();
  
  exports.checkParamType = function (obj, attrs, musts, types) {
    var err = [];
  
    // 校验参数必须是不为空的数组
    if (!attrs || !musts || !types) {
      return err;
    }
  
    // 校验参数数组必须长度保持一致
    if (!(attrs.length == musts.length && attrs.length == types.length)) {
      err.push('attrs, musts and types length must be equivalent.');
      return err;
    }
  
    for (var i = 0; i < attrs.length; i++) {
      var _attr = attrs[i];
      var must = musts[i];
      var type = types[i];
  
      if (!mustExists(must, obj[_attr])) {
        err.push(_attr + ' is necessary');
      }
  
      if (!isValidType(obj, _attr, type)) {
        err.push(_attr + ' should be ' + type);
      }
    }
  
    // 检查必须的参数是否存在
    function mustExists(must, vaule) {
      if (must && (vaule == undefined || vaule == null)) {
        return false;
      }
      return true;
    }
  
    // 检查参数类型是否正确，escapse字符串，将json转成对象
    function isValidType(obj, attr, type) {
      var value = obj[attr];
      if (!value) {
        return true;
      }
      var trim = function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
      };
      var types = type.split(',');
      for (var i in types) {
        var _type = trim(types[i]).toLowerCase();
        switch (_type) {
          case 'array':
            {
              if (Array.isArray(value)) {
                return true;
              }
              break;
            }
          case 'mongoid':
            {
              if (validator.isMongoId(value)) {
                return true;
              }
              break;
            }
          case 'date':
            {
              if (validator.isDate(value)) {
                return true;
              }
              break;
            }
          case 'phone':
            {
              if (validator.isMobilePhone(value, 'zh-CN')) {
                return true;
              }
              break;
            }
          case 'number':
            {
              if (validator.isNumeric(value)) {
                return true;
              }
              break;
            }
          case 'float':
            {
              if (validator.isFloat(value)) {
                return true;
              }
              break;
            }
          case 'decimal':
            {
              if (validator.isDecimal(value)) {
                return true;
              }
              break;
            }
          case 'email':
            {
              if (validator.isEmail(value)) {
                return true;
              }
              break;
            }
          case 'file':
            {
              if (value) {
                return true;
              }
              break;
            }
          case 'json':
            {
              if (typeof value === 'string' && validator.isJSON(value)) {
                obj[attr] = JSON.parse(value);
                return true;
              }
              break;
            }
          default:
            {
              if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) == _type) {
                return true;
              }
              break;
            }}
  
      }
      return false;
    }
  
    return err;
  };
  
  exports.e164 = function (phone, country_code) {
    try {
      var phoneNumber = phoneUtil.parse(String(phone), country_code || 'CN');
      var phoneNumberE164 = phoneUtil.format(phoneNumber, PNF.E164);
      console.log('phone.e164 =', phone + ' ---> ' + phoneNumberE164);
      return phoneNumberE164;
    } catch (e) {
      console.log('e164 error =', e, e.stack);
      return '';
    }
  };
  
  exports.unescapse = function (str) {
    return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, '\'').replace(/&#x2F;/g, '\/');
  };
  
  /**
   * 检查字符串长度
   * @param text
   * @param min
   * @param max
   * @param cb
   */
  exports.textLengthCheck = function (text, min, max) {
    var err;
  
    if (!text) {
      err = null;
    } else {
      if (text.length < min) {
        err = text + ' minimum length is ' + min;
      } else if (text.length > max) {
        err = text + ' maximum length is ' + max;
      } else {
        err = null;
      }
    }
  
    return err;
  };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(1);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _xml2js = __webpack_require__(46);var _xml2js2 = _interopRequireDefault(_xml2js);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = 
  
  new (function () {function _class2() {(0, _classCallCheck3.default)(this, _class2);this.
      buildXml = function (obj) {
        var builder = new _xml2js2.default.Builder();
        return builder.buildObject({ xml: obj });
      };this.
      parseString = function (body) {return new Promise(function (resolve, reject) {
          _xml2js2.default.parseString(body, { 
            trim: true, 
            explicitArray: false }, 
          function (err, json) {
            if (err) {
              err.name = 'XMLParseError';
              reject(err);
            }
            var data = json ? json.xml : {};
            resolve(data);
          });
        });};}return _class2;}())();module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("compression");

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("connect-busboy");

/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = require("cors");

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("morgan");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("utility");

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = require("validator");

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("wechat-api");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("xml2js");

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map