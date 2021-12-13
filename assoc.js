// RAMDA

/**
 * definition : Makes a shallow clone of an object, setting or
 * overriding the specified property with the given value. Note
 * that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied
 * by reference.
 */

function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
}
