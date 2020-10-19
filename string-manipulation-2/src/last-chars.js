/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  var resultLength;
  if (length < string.length) {
    resultLength = length;
  } else {
    resultLength = string.length;
  }
  var result = '';
  for (var i = string.length - resultLength; i < string.length; i++) {
    result += string[i];
  }
  return result;
}
