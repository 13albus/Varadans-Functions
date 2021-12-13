// RAMDA

/**
 * definition : Returns true if at least one of the elements
 * of the list match the predicate, false otherwise.
 */
function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
