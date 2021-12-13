// RAMDA

/**
 * Definition : Returns true if all elements of the
 * list match the predicate, false if there are any
 * that don't.
 *
 */

function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}
