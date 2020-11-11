/* eslint-disable no-unused-vars */
function truncate(length, string) {
  var truncateLength;
  if (length < string.length) {
    truncateLength = length;
  } else {
    truncateLength = string.length;
  }
  var result = '';
  for (var i = 0; i < truncateLength; i++) {
    result += string[i];
  }
  result += '...';
  return result;
}
