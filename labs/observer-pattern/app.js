// ES6
class EventObserver {
	constructor() {
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
		console.log(`You are now subscribed to ${fn.name}`)
	}

	unsubscribe(fn) {
		this.observers = this.observers.filter((func) => fn !== func);
		console.log(`You are now unsubscribed to ${fn.name}`);
	}

	fire() {
		this.observers.forEach(func => {
			func.call();
		});
	}

}


// ES5
// function EventObserver() {
// 	this.observers = [];
// }

// EventObserver.prototype = {
// 	subscribe: function (fn) {
// 		this.observers.push(fn);
// 		console.log(`You are now subscribed to ${fn.name}`)
// 	},

// 	unsubscribe: function (fn) {
// 		this.observers = this.observers.filter((func) => fn !== func);
// 		console.log(`You are now unsubscribed to ${fn.name}`);
// 	},

// 	fire: function () {
// 		this.observers.forEach(func => {
// 			func.call();
// 		});
// 	}
// }


const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', () => {
	click.subscribe(getCurMilliseconds);
});


document.querySelector('.unsub-ms').addEventListener('click', () => {
	click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', () => {
	click.subscribe(getCurSeconds);
});


document.querySelector('.unsub-s').addEventListener('click', () => {
	click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', () => {
	click.fire();
});



// Click Handler
const getCurMilliseconds = function () {
	console.log(`Current Milliseconds: ${new Date().getMilliseconds() }`);
}

const getCurSeconds = function () {
	console.log(`Current Seconds: ${new Date().getSeconds() }`);
}
