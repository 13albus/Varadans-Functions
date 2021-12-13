// RAMDA

function curry2(fn) {
  return function () {
    switch (arguments.length) {
      case 0:
        return curry2(fn);
      case 1:
        return curry1(function (b) {
          return fn(arguments[0], b);
        });
      default:
        return fn(...arguments);
    }
  };
}

function curry1(fn) {
  return function () {
    switch (arguments.length) {
      case 0:
        return curry1(fn);
      default:
        return fn(...arguments);
    }
  };
}
