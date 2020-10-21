/* eslint-disable no-unused-vars */
function subtitleFinder(array) {
  for (var x = 0; x < array.length; x++) {
    var lastChar = array[x][array[x].length - 1];
    if (lastChar === ':') {
      return x + 1;
    }
  }
  return false;
}

function capitalizeAfterHyphen(array) {
  for (var h = 0; h < array.length; h++) {
    for (var g = 0; g < array[h].length; g++) {
      if (array[h][g] === '-') {
        var hyphenatedString = array[h].split('');
        hyphenatedString[g + 1] = hyphenatedString[g + 1].toUpperCase();
        hyphenatedString = hyphenatedString.join('');
        array[h] = hyphenatedString;
      }
    }
  }
}

function removeSemicolon(string) {
  var stringWSemicolon = string.split('');
  stringWSemicolon.pop('');
  stringWSemicolon = stringWSemicolon.join('');
  return stringWSemicolon;
}

function specialCases(array) {
  for (var s = 0; s < array.length; s++) {
    if (array[s] === 'javascript') {
      array[s] = 'JavaScript';
    }
    if (array[s] === 'api') {
      array[s] = 'API';
    }
  }
}

function titleAndSub(array) {
  if (array.length > 0) {
    var firstWord = array[0].split('');
    firstWord[0] = firstWord[0].toUpperCase();
    array[0] = firstWord.join('');
  }
}

var minorWordsArr = [
  'and',
  'or',
  'nor',
  'but',
  'a',
  'an',
  'the',
  'as',
  'at',
  'by',
  'for',
  'in',
  'of',
  'on',
  'per',
  'to'
];

function majorWords(array) {
  if (array.length > 0) {
    for (var t = 0; t < array.length; t++) {
      var isMinorWord = false;
      for (var m = 0; m < minorWordsArr.length; m++) {
        if (array[t] === minorWordsArr[m]) {
          isMinorWord = true;
        }
      }
      if (!isMinorWord) {
        var splitWord = array[t].split('');
        splitWord[0] = splitWord[0].toUpperCase();
        array[t] = splitWord.join('');
      }
    }
  }
}

function titleCase(string) {
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i].toLowerCase();
  }
  capitalizeAfterHyphen(splitString);
  var subtitleIndex = subtitleFinder(splitString);
  var title = [];
  var subTitle = [];
  if (subtitleIndex) {
    splitString[subtitleIndex - 1] = removeSemicolon(splitString[subtitleIndex - 1]);
    for (var y = 0; y < subtitleIndex; y++) {
      title.push(splitString[y]);
    }
    for (var z = subtitleIndex; z < splitString.length; z++) {
      subTitle.push(splitString[z]);
    }
  } else {
    for (var q = 0; q < splitString.length; q++) {
      title.push(splitString[q]);
    }
  }
  specialCases(title);
  specialCases(subTitle);
  titleAndSub(title);
  titleAndSub(subTitle);
  majorWords(title);
  majorWords(subTitle);
  var titleString = title.join(' ');
  var result = titleString;
  if (subTitle.length > 0) {
    var subTitleString = ': ' + subTitle.join(' ');
    result += subTitleString;
  }
  return result;
}
