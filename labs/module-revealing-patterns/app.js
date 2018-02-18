// Basic structure

// (function () {
// 	// Declare private variables and functions

// 	return {
// 		// Declare public variables and functions
// 	}
// })();

// Standard Module Pattern
const UICtrl = (function() {
  let text = 'Javascript engineer';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
	};
	
	return {
		callChangeText: function () {
			changeText();
			console.log(text);
		}
	}
})();

UICtrl.callChangeText();

// Revealing Module Pattern
const ItemCtrl = (function () {
	let data = [];

	function add(item) {
		data.push(item);
		console.log('Item added.');
	}

	function get(id) {
		return data.find(item => item.id === id);
	}

	return {
		add,
		get
	}
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});

console.log(ItemCtrl.get(1));
