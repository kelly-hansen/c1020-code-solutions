/* eslint-disable no-unused-vars */

/* why does this work... */
function omit(src, keys) {
  var result = {};
  for (var key in src) {
    result[key] = src[key];
  }
  for (var i = 0; i < keys.length; i++) {
    delete result[keys[i]];
  }
  return result;
}

/* but this doesn't? */
function omit1(src, keys) {
  var result = src;
  for (var i = 0; i < keys.length; i++) {
    delete result[keys[i]];
  }
  return result;
}

/* alternate solution */
function omitAlt(src, keys) {
  var result = {};
  for (var key in src) {
    var match = false;
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        match = true;
      }
    }
    if (match === false) {
      result[key] = src[key];
    }
  }
  return result;
}
