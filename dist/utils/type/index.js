import _typeof from '@babel/runtime/helpers/esm/typeof';

export var isObject = function isObject(value) {
  return value !== null && _typeof(value) === 'object';
};
export var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
export var isString = function isString(value) {
  return typeof value === 'string';
};
export var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};
export var isNumber = function isNumber(value) {
  return typeof value === 'number';
};
export var isUndef = function isUndef(value) {
  return typeof value === 'undefined';
};
