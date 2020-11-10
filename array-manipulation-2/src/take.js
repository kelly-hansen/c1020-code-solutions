/* eslint-disable no-unused-vars */
function take(array, count) {
  var resultArr = [];
  if (count <= array.length) {
    for (var i = 0; i < count; i++) {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
}
