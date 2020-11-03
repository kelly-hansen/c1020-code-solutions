function ExampleConstructor() {

}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newObject = new ExampleConstructor();
console.log('newObject:', newObject);
var isInstanceOf = newObject instanceof ExampleConstructor;
console.log('isInstanceOf:', isInstanceOf);
