/* exported calculator */
var calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  square: function (num) {
    return num * num;
  },
  sumAll: function (numArray) {
    return numArray.reduce(function (a, b) {
      return a + b;
    });
  },
  getAverage: function (numArray) {
    var sum = numArray.reduce(function (a, b) {
      return a + b;
    });
    return sum / numArray.length;
  }
};
