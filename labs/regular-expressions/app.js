// let re;

// /*
// 	i = case insensitive
// 	g = global
// */
// re = /hello/i;

// console.log(re);
// console.log(re.source);

// // exec() => Return result in an array or null
// const result = re.exec('hello world');
// console.log(result);
// console.log(result.index);
// console.log(result.input);

// // test() => Returns true of false if there is a match
// const result1 = re.test('Hello'); 
// console.log(result1);

// // match() => Return result array or null
// const str = 'Hello There';
// const result2 = str.match(re);
// console.log(result2);

// // search() => Returns index of the first match, if not found returns -1
// const str2 = 'HI there, Hello there';
// const result3 = str2.search(re);
// console.log(result3);

// // replace() => Return new string with some or all matches of a pattern
// const str3 = 'Hello there';
// const newStr = str3.replace(re, 'Hi');
// console.log(newStr);


let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /world$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /^h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches ANY character 0 or more times
re = /gre?a?y/i; // Matches an optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter of any case
re = /[0-9]ray/; // Match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exatcly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exatcly {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} amount of times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand character classes
re = /\w/; // Word Character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-word Character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Non-digit
re = /\s/; // Match white space
re = /\S/; // Non-white space
re = /Hell\b/i; // Word boudary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to Match
const str = 'asdadxyasd';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
	if(re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does NOT match ${re.source}`);
	}
}

reTest(re, str);
