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

  console.log('splitString: ', splitString);
  console.log('title: ', title);
  console.log('subTitle: ', subTitle);
}
