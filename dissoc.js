// RAMDA

/**
 * definition : Returns a new object that does not
 * contain a prop property.
 */

function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
}
