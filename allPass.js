// RAMDA

/**
 * Definition : Takes a list of predicates and returns a
 * predicate that returns true for a given list of arguments
 * if every one of the provided predicates is satisfied by
 * those arguments.
 *
 */

function allPass(preds) {
  return function () {
    var idx = 0;
    var len = preds.length;
    console.log(arguments);
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  };
}
