// 是否为手机号
export var isPhoneNumber = function isPhoneNumber(str) {
  return /^1[3456789]\d{9}$/.test(str);
};

// 是否邮箱
export var isEmail = function isEmail(str) {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
};