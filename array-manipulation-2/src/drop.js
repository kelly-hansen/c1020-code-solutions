/* eslint-disable no-unused-vars */
function drop(arr, count) {
  var result = [];
  if (count <= arr.length) {
    for (var i = count; i < arr.length; i++) {
      result.push(arr[i]);
    }
  }
  return result;
}
