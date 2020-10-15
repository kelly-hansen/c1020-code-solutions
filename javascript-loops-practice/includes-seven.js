/* exported includesSeven */
function includesSeven(array) {
  var testArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      testArray.push(array[i]);
    }
  }
  if (testArray.length >= 1) {
    return true;
  } else {
    return false;
  }
}
