// RAMDA

/**
 * Applies a function to the value at the given
 * index of an array, returning a new copy of the
 * array with the element at the given index
 * replaced with the result of the function
 * application.
 */

function adjust(idx, fn, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  /**
   * var start = idx < 0 ? list.length : 0;
   * var _idx = start + idx;
   *
   * can also be implemented like:
   *
   * var _idx = (idx+len)%len
   *
   */
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = [...list]; //shallow copy
  _list[_idx] = fn(list[_idx]);
  return _list;
}
