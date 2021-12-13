// RAMDA

/**
 * definition : Takes a list of predicates and returns a
 * predicate that returns true for a given list of arguments
 * if at least one of the provided predicates is satisfied
 * by those arguments.
 */
function anyPass() {
  return function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  };
}
