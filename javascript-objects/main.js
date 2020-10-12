/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Kelly',
  lastName: 'Hansen',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Real Estate';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Tacoma',
  year: 2020
};

vehicle.color = 'gray';
vehicle.isConvertible = false;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Jaws',
  type: 'fish'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
