// RAMDA

// Doesnot work

/**
 * Example :
 *
 *      const mapIndexed = addIndex(map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *
 * Return :
 *
 *       ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */

function addIndex(fn) {
  return function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(
        this,
        Array.prototype.concat(arguments, [idx, list])
      );
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  };
}
