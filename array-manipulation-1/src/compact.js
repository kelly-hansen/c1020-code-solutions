/* eslint-disable no-unused-vars */
function compact(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
