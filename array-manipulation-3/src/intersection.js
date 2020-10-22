/* eslint-disable no-unused-vars */
function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    var match = false;
    for (var x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        match = true;
      }
    }
    if (match) {
      result.push(first[i]);
    }
  }
  return result;
}
