// RAMDA

/**
 * definition : Returns a new list, composed of n-tuples of consecutive elements.
 * If n is greater than the length of the list, an empty list is returned.
 */
function aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}

function myStupidAperture(arr, ap) {
  let result = [];
  function __aperture(arr) {
    if (arr.length === 0) {
      return;
    }
    if (arr.length >= ap) {
      result[result.length] = arr.slice(0, ap);
      __aperture(arr.slice(ap));
    } else if (arr.length < ap) {
      result[result.length] = arr;
    }
  }

  if (arr.length <= ap || ap === 0) {
    return [...arr];
  } else {
    __aperture(arr);
  }
  return result;
}
