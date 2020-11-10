/* eslint-disable no-unused-vars */
function chunk(arr, size) {
  var result = [];
  if (size <= arr.length) {
    for (var i = 0; i < arr.length; i += size) {
      var subArray = [];
      for (var x = i; x < i + size && x < arr.length; x++) {
        subArray.push(arr[x]);
      }
      result.push(subArray);
    }
  }
  return result;
}
