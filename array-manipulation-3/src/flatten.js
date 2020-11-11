/* eslint-disable no-unused-vars */
function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var x = 0; x < array[i].length; x++) {
        result.push(array[i][x]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
