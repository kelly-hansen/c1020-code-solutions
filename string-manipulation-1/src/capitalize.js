/* eslint-disable no-unused-vars */
function capitalize(word) {
  var result = word[0].toUpperCase();
  var lowerCase = [];
  for (var i = 1; i < word.length; i++) {
    lowerCase.push(word[i].toLowerCase());
  }
  result += lowerCase.join('');
  return result;
}
