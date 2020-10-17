/* eslint-disable no-unused-vars */
function isVowel(char) {
  var vowelArr = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowelArr.length; i++) {
    if (char === vowelArr[i] || char === vowelArr[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}
