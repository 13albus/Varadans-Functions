function bind(fn, thisObj) {
  return function () {
    return fn.apply(thisObj, arguments);
  };
}
