/* eslint-disable no-unused-vars */
function pick(src, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    if (src[keys[i]] !== undefined) {
      result[keys[i]] = src[keys[i]];
    }
  }
  return result;
}
