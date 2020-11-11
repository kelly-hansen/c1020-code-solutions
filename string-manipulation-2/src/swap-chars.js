/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var splitString = [];
  for (var i = 0; i < string.length; i++) {
    splitString.push(string[i]);
  }
  var firstChar = splitString[firstIndex];
  var secondChar = splitString[secondIndex];
  splitString[firstIndex] = secondChar;
  splitString[secondIndex] = firstChar;
  var result = '';
  for (var x = 0; x < splitString.length; x++) {
    result += splitString[x];
  }
  return result;
}
