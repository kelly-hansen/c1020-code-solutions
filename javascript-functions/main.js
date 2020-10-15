function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(9);

console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Homer');

console.log('greetResult: ', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(8, 13);

console.log('getAreaResult: ', getAreaResult);

function getFirstName(person) {
  var personFirstName = person.firstName;
  return personFirstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Gregory', lastName: 'House' });

console.log('getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResult = getLastElement(['this', 'is', 'correct']);

console.log('getLastElementResult: ', getLastElementResult);
