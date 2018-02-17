// Maps = key-value pairs - can use ANY type as key or value

const map1 = new Map();
// Set Keys
const key1 = 'some string';
const key2 = {};
const key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of Key1');
map1.set(key2, 'Value of Key2');
map1.set(key3, 'Value of Key3');

// Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count
console.log(map1.size);

// Iterating MAPS
// Loop using for...of
for(let [key, value] of map1) {
	console.log(`${key} = ${value}`);
}

// Iterate keys only
for(let key of map1.keys()) {
	console.log(key);
}

// Iterate values only
for(let value of map1.values()) {
	console.log(value);
}

// Loop with forEach
map1.forEach((value, key) => {
	console.log(`${key} = ${value}`);
})

// Convert to Arrays

// Create an array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of value
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
