import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { CloseCircleFilled, FullscreenExitOutlined, FullscreenOutlined, MinusCircleFilled } from '@ant-design/icons';
import classNames from 'classnames';
import React from 'react';
import { Button } from 'antd';
import { doraemonClassName } from '../../utils/internal';
import './index.scss';

var _excluded = ["size", "className", "disabled"],
  _excluded2 = ["size", "className", "disabled"],
  _excluded3 = ["size", "className", "disabled"],
  _excluded4 = ["size", "className", "disabled"];
export var ExitButton = function ExitButton(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'middle' : _ref$size,
    className = _ref.className,
    disabled = _ref.disabled,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Button, _extends({
    disabled: disabled,
    size: size,
    type: 'text',
    className: classNames(doraemonClassName('exit-button'), className),
    icon: /*#__PURE__*/React.createElement(CloseCircleFilled, null)
  }, props));
};
export var FullscreenButton = function FullscreenButton(_ref2) {
  var size = _ref2.size,
    className = _ref2.className,
    disabled = _ref2.disabled,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(Button, _extends({
    disabled: disabled,
    size: size,
    type: 'text',
    className: classNames(doraemonClassName('fullscreen-button'), className),
    icon: /*#__PURE__*/React.createElement(FullscreenOutlined, null)
  }, props));
};
export var FullscreenExitButton = function FullscreenExitButton(_ref3) {
  var size = _ref3.size,
    className = _ref3.className,
    disabled = _ref3.disabled,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement(Button, _extends({
    disabled: disabled,
    size: size,
    type: 'text',
    className: classNames(doraemonClassName('fullscreen-exit-button'), className),
    icon: /*#__PURE__*/React.createElement(FullscreenExitOutlined, null)
  }, props));
};
export var MinimizedButton = function MinimizedButton(_ref4) {
  var size = _ref4.size,
    className = _ref4.className,
    disabled = _ref4.disabled,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/React.createElement(Button, _extends({
    disabled: disabled,
    size: size,
    type: 'text',
    className: classNames(doraemonClassName('minimized-button'), className),
    icon: /*#__PURE__*/React.createElement(MinusCircleFilled, null)
  }, props));
};
