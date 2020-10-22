/* eslint-disable no-unused-vars */
function zip(first, second) {
  var arrLength;
  if (first.length < second.length) {
    arrLength = first.length;
  } else {
    arrLength = second.length;
  }
  var result = [];
  for (var i = 0; i < arrLength; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    result.push(subArray);
  }
  return result;
}
