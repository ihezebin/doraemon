import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import { useCallback, useState } from 'react';
import { isFunction } from '../../utils';

export var useObjState = function useObjState(initialState) {
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var setObjState = useCallback(function (partState) {
    setState(function (prevState) {
      var newState = isFunction(partState) ? partState(prevState) : partState;
      return newState ? _objectSpread(_objectSpread({}, prevState), newState) : _objectSpread({}, prevState);
    });
  }, []);
  return [state, setObjState];
};
