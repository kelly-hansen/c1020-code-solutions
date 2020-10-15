/* exported filterOutStrings */
function filterOutStrings(values) {
  var filteredValues = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filteredValues.push(values[i]);
    }
  }
  return filteredValues;
}
