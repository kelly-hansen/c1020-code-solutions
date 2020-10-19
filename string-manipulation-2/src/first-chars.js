/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  var resultLength;
  if (length < string.length) {
    resultLength = length;
  } else {
    resultLength = string.length;
  }
  var result = '';
  for (var i = 0; i < resultLength; i++) {
    result += string[i];
  }
  return result;
}
