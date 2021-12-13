// RAMDA

/**
 * definition : Returns a partial copy of an object containing only
 * the keys specified. If the key does not exist, the property
 * is ignored.
 */
function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
}
