/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var splitArr = string.split(' ');
  var reverseArr = [];
  for (var i = 0; i < splitArr.length; i++) {
    var revWord = '';
    for (var x = splitArr[i].length - 1; x >= 0; x--) {
      revWord += splitArr[i][x];
    }
    reverseArr.push(revWord);
  }
  var result = reverseArr[0];
  for (var y = 1; y < reverseArr.length; y++) {
    result += ' ' + reverseArr[y];
  }
  return result;
}
