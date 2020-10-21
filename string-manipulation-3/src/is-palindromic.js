/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var original;
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      original += string[i];
    }
  }
  var palindrome;
  for (var x = string.length - 1; x >= 0; x--) {
    if (string[x] !== ' ') {
      palindrome += string[x];
    }
  }
  if (original === palindrome) {
    return true;
  } else {
    return false;
  }
}

/* can't understand why this won't work */
function isPalindromicAlt(string) {
  var original = [];
  for (var y = 0; y < string.length; y++) {
    if (string[y] !== ' ') {
      original.push(string[y]);
    }
  }
  var palindrome = [];
  for (var z = string.length - 1; z >= 0; z--) {
    if (string[z] !== ' ') {
      palindrome.push(string[z]);
    }
  }
  if (original === palindrome) {
    return true;
  } else {
    return false;
  }
}
