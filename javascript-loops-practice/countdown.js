/* exported countdown */
function countdown(number) {
  var countdownArray = [];
  for (var i = number; i >= 0; i--) {
    countdownArray.push(i);
  }
  return countdownArray;
}
