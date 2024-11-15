import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import axios from 'axios';
import { API_DEFAULT_CONFIG } from './constant';

var _excluded = ["onRequest", "onResponse", "onError", "withToken"];
export var Api = /*#__PURE__*/function () {
  function Api(config) {
    _classCallCheck(this, Api);
    _defineProperty(this, "kernel", void 0);
    this.config = config;
    var onRequest = config.onRequest,
      onResponse = config.onResponse,
      onError = config.onError,
      withToken = config.withToken,
      omitConfig = _objectWithoutProperties(config, _excluded);
    this.kernel = axios.create(_objectSpread(_objectSpread({}, API_DEFAULT_CONFIG), omitConfig));
    var onRequestFulfilled = function onRequestFulfilled(request) {
      // 填充 token
      var token = withToken && withToken();
      if (token) {
        request.headers.Token = token;
      }
      return Promise.resolve(onRequest ? onRequest(request) : request);
    };
    var onRequestRejected = function onRequestRejected(err) {
      return Promise.reject(onError ? onError({
        error: err
      }) : err);
    };
    this.kernel.interceptors.request.use(onRequestFulfilled, onRequestRejected);
    var onResponseFulfilled = function onResponseFulfilled(response) {
      var status = response.status,
        data = response.data;
      var resp = _objectSpread({
        response: response,
        status: status
      }, data);
      return onResponse ? onResponse(resp) : resp;
    };
    var onResponseRejected = function onResponseRejected(err) {
      if (err.response) {
        var _err$response = err.response,
          status = _err$response.status,
          statusText = _err$response.statusText,
          _err$response$data = _err$response.data,
          code = _err$response$data.code,
          message = _err$response$data.message,
          _data = _err$response$data.data;
        var _response = {
          status: status,
          response: err.response,
          message: message || statusText,
          code: code,
          data: _data || {}
        };
        return onError ? onError(_objectSpread(_objectSpread({}, _response), {}, {
          error: err
        })) : _response;
      } else {
        var _response2 = {
          message: err === null || err === void 0 ? void 0 : err.message,
          code: err === null || err === void 0 ? void 0 : err.code
        };
        return Promise.reject(onError ? onError({
          error: err
        }) : _response2);
      }
    };
    this.kernel.interceptors.response.use(onResponseFulfilled, onResponseRejected);
  }
  _createClass(Api, [{
    key: "request",
    value: function request(config) {
      return this.kernel.request(config);
    }
  }, {
    key: "head",
    value: function head(url, config) {
      return this.kernel.head(url, config);
    }
  }, {
    key: "options",
    value: function options(url, config) {
      return this.kernel.options(url, config);
    }
  }, {
    key: "get",
    value: function get(url, data, config) {
      return this.kernel.get(url, _objectSpread({
        params: data
      }, config));
    }
  }, {
    key: "delete",
    value: function _delete(url, data, config) {
      return this.kernel.delete(url, _objectSpread({
        params: data
      }, config));
    }
  }, {
    key: "post",
    value: function post(url, data, config) {
      return this.kernel.post(url, data, config);
    }
  }, {
    key: "put",
    value: function put(url, data, config) {
      return this.kernel.put(url, data, config);
    }
  }, {
    key: "patch",
    value: function patch(url, data, config) {
      return this.kernel.patch(url, data, config);
    }
  }, {
    key: "postForm",
    value: function postForm(url, data, config) {
      return this.kernel.postForm(url, data, config);
    }
  }, {
    key: "putForm",
    value: function putForm(url, data, config) {
      return this.kernel.putForm(url, data, config);
    }
  }, {
    key: "patchForm",
    value: function patchForm(url, data, config) {
      return this.kernel.patchForm(url, data, config);
    }
  }]);
  return Api;
}();
export var newApi = function newApi(config) {
  var cfg = {};
  if (typeof config === 'string') {
    cfg.baseURL = config;
  } else {
    cfg = config || {};
  }
  var api = new Api(_objectSpread({}, cfg));
  return api;
};
