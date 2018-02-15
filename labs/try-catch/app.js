const user = { email: 'jdoe@fake.com' };

try {
	// Produce a ReferenceError
	//myFunc();

	// Produce TypeError
	// null.myFunc();

	// SyntaxError
	// eval('hello world');

	// URIError
	//decodeURIComponent('%');

	if(!user.name) {
		// throw 'User has no name';
		throw new SyntaxError('User has no name');
	}

} catch (e) {
	console.log(e);
	console.log(e.message);
	console.log(e.name);
	console.log(e instanceof ReferenceError);
	console.log(e instanceof TypeError);
} finally {
	console.log('Finally runs regardless of result');
}

console.log('Program continues');
