// RAMDA

/**
 * definition : Accepts a function fn and returns a function that guards
 * invocation of fn such that fn can only ever be called once, no matter
 * how many times the returned function is invoked. The first value
 * calculated is returned in subsequent invocations.
 */

function once(fn) {
  var called = false;
  var result;
  return function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  };
}

// Example
const addOne = once((x) => x + 1);

console.log(addOne(2)); //3
console.log(addOne(3)); //3
console.log(addOne(6)); //3
console.log(addOne(8)); //3
