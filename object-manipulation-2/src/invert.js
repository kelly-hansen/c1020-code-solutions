/* eslint-disable no-unused-vars */
function invert(src) {
  var result = {};
  for (var key in src) {
    var value = src[key];
    result[value] = key;
  }
  return result;
}
