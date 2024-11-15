import './index.scss';
import React from 'react';

var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: "custom-button",
    onClick: onClick
  }, label);
};
export default Button;
