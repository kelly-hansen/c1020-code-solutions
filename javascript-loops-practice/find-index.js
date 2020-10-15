/* exported findIndex */
function findIndex(array, value) {
  var firstIndex;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      firstIndex = i;
      break;
    }
  }
  if (firstIndex) {
    return firstIndex;
  } else {
    return -1;
  }
}
