/* eslint-disable no-unused-vars */
function union(first, second) {
  var result = [];
  if (first.length !== 0) {
    result.push(first[0]);
    for (var i = 1; i < first.length; i++) {
      var match = false;
      for (var x = 0; x < result.length; x++) {
        if (first[i] === result[x]) {
          match = true;
        }
      }
      if (match === false) {
        result.push(first[i]);
      }
    }
  }
  for (var y = 0; y < second.length; y++) {
    var match1 = false;
    for (var z = 0; z < result.length; z++) {
      if (second[y] === result[z]) {
        match1 = true;
      }
    }
    if (!match1) {
      result.push(second[y]);
    }
  }
  return result;
}
