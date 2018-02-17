// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// Rest operator
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(a, b);
console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a, b);
console.log(rest);

// Array Destructuring

const people = [ 'John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
	return [ 'John', 'Beth', 'Mike'];
}

const [name1, name2, name3 ] = getPeople();

console.log(name1, name2, name3);

// Object destructuring
const person = {
	name: 'John Doe',
	age: 32,
	city: 'Miami',
	gender: 'Male'
};

// ES5
// const name = person.name,
// 	age = person.age,
// 	city = person.city;

// ES6
const {name, age, city, gender } = person;

console.log(name, age, city, gender);
