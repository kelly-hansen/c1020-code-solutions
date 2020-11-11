/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  var str1Array = [];
  var str2Array = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      str1Array.push(firstString[i]);
    }
  }
  for (var x = 0; x < secondString.length; x++) {
    if (secondString[x] !== ' ') {
      str2Array.push(secondString[x]);
    }
  }
  if (str1Array.length !== str2Array.length) {
    return false;
  }
  var compareArray = [];
  for (var y = 0; y < str1Array.length; y++) {
    for (var z = 0; z < str2Array.length; z++) {
      if (str1Array[y] === str2Array[z]) {
        compareArray.push(null);
        str2Array[z] = null;
        break;
      }
    }
  }
  if (str1Array.length === compareArray.length) {
    return true;
  } else {
    return false;
  }
}
