/* eslint-disable no-unused-vars */
function defaults(target, src) {
  for (var key in src) {
    if (target[key] === undefined) {
      target[key] = src[key];
    }
  }
  return target;
}
