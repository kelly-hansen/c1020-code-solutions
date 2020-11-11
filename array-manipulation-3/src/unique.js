/* eslint-disable no-unused-vars */
function unique(array) {
  var result = [];
  if (array.length !== 0) {
    result.push(array[0]);
    for (var i = 1; i < array.length; i++) {
      var match = false;
      for (var x = 0; x < result.length; x++) {
        if (array[i] === result[x]) {
          match = true;
        }
      }
      if (match === false) {
        result.push(array[i]);
      }
    }
  }
  return result;
}
