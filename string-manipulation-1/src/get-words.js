/* eslint-disable no-unused-vars */
function getWords(string) {
  var result = [];
  if (string) {
    result = string.split(' ');
  } else {
    return [];
  }
  return result;
}
