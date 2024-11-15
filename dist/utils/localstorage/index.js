export var getLocalItem = function getLocalItem(key) {
  var val = localStorage.getItem(key);
  if (val === null) return null;
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};
export var setLocalItem = function setLocalItem(key, item) {
  if (item === undefined || item === null) {
    return localStorage.removeItem(key);
  }
  return localStorage.setItem(key, JSON.stringify(item));
};