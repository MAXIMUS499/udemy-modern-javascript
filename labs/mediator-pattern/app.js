const User = function(name) {
	this.name = name;
	this.chatRoom = null;
}

User.prototype = {
	send: function(message,to) {
		this.chatRoom.send(message, this, to)
	},
	receive: function(message, from) {
		console.log(`${from.name} to ${this.name}: ${message}`);
	}
}

const ChatRoom = function () {
	const users = {};

	return {
		register: function(user) {
			users[user.name] = user;
			user.chatRoom = this;
		},
		send: function (message, from, to) {
			if (to) {
				// Single user message
				to.receive(message, from);
			} else {
				// Broadcast message
				for(key in users) {
					if(users[key] !== from) {
						users[key].receive(message, from);
					}
				}
			}
		}
	}
}


const john = new User('John');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new ChatRoom();

chatroom.register(john);
chatroom.register(jeff);
chatroom.register(sara);

john.send('Hello Jeff', jeff);
sara.send('Hi guys');
jeff.send('Hi John', john);
