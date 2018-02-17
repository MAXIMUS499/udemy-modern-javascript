// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);
console.log(typeof sym1);

console.log(Symbol() === Symbol());

// Unique Object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym3');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);


// Symbols are not enumarable in for...in
for(let i in myObj) {
	console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify(myObj));
