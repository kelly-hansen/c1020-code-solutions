/* eslint-disable no-unused-vars */
function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    var match = false;
    for (var x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        match = true;
      }
    }
    if (!match) {
      result.push(first[i]);
    }
  }
  for (var y = 0; y < second.length; y++) {
    var match1 = false;
    for (var z = 0; z < first.length; z++) {
      if (second[y] === first[z]) {
        match1 = true;
      }
    }
    if (!match1) {
      result.push(second[y]);
    }
  }
  return result;
}
