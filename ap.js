// RAMDA

/**
 * definition : ap applies a list of functions
 * to a list of values.
 *
 * Abstract Example
 *
 * ap([multiply(2), add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 * ap([concat('tasty '), toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 */

function ap(listOfFunctions, arr) {
  let _arr = [],
    idx = 0;
  const len = listOfFunctions.length;
  while (idx < len) {
    _arr = Array.prototype.concat(_arr, arr.map(listOfFunctions[idx]));
    idx += 1;
  }
  return _arr;
}
