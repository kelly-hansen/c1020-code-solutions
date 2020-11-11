/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  var result = '';
  var stringWords = string.split(' ');
  for (var i = 0; i < stringWords.length; i++) {
    var wordLength = stringWords[i].length;
    var word = stringWords[i][0].toUpperCase();
    for (var x = 1; x < wordLength; x++) {
      word += stringWords[i][x].toLowerCase();
    }
    stringWords[i] = word;
    result += word;
    if (i !== stringWords.length - 1) {
      result += ' ';
    }
  }
  return result;
}
