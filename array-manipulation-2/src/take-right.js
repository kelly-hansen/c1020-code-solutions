/* eslint-disable no-unused-vars */
function takeRight(arr, count) {
  var result = [];
  if (count <= arr.length) {
    for (var i = arr.length - count; i < arr.length; i++) {
      result.push(arr[i]);
    }
  }
  return result;
}
