// RAMDA

/**
 * props Example
 * props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 * props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 */

function props(ps, obj) {
  return ps.map(function (p) {
    return path([p], obj);
  });
}

console.log(props(["x", "y"], { x: 1, y: 2 }));

/**
 * path example
 * path(['a', 'b'], {a: {b: 2}}); //=> 2
 * path(['a', 'b'], {c: {b: 2}}); //=> undefined
 * path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 * path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 *
 */

function path(pathAr, obj) {
  return paths([pathAr], obj)[0];
}

/**
 * paths example
 * paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 * paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */

function paths(pathsArray, obj) {
  return pathsArray.map(function (paths) {
    var val = obj;
    var idx = 0;
    var p;
    while (idx < paths.length) {
      if (val == null) {
        return;
      }
      p = paths[idx];
      val = _isInteger(p) ? nth(p, val) : val[p];
      idx += 1;
    }
    return val;
  });
}

/**
 * const list = ['foo', 'bar', 'baz', 'quux'];
 * nth(1, list); //=> 'bar'
 * nth(-1, list); //=> 'quux' if n is negative it returns the last element
 *
 * Also works with string
 *
 * nth(2, 'abc'); //=> 'c'
 * nth(3, 'abc'); //=> '
 */
function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
}

function _isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}

function _isInteger(n) {
  return n << 0 === n;
}

const __isInteger = Number.isInteger;
