/* eslint-disable no-unused-vars */
function dropRight(arr, count) {
  var result = [];
  if (count <= arr.length) {
    for (var i = 0; i < arr.length - count; i++) {
      result.push(arr[i]);
    }
  }
  return result;
}
