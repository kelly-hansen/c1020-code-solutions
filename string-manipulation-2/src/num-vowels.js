/* eslint-disable no-unused-vars */
function numVowels(string) {
  var vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  var stringArr = [];
  for (var i = 0; i < string.length; i++) {
    stringArr.push(string[i]);
  }
  var vowelCount = 0;
  for (var y = 0; y < string.length; y++) {
    var currentChar = stringArr[y];
    for (var x = 0; x < vowelsArr.length; x++) {
      if (currentChar.toLowerCase() === vowelsArr[x]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}
