// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	};

	// Data Structure / State
	const data = {
		items: [
			{ id: 0, name: 'Steak Dinner', calories: 1200 },
			{ id: 1, name: 'Cookies', calories: 400 },
			{ id: 2, name: 'Eggs', calories: 300 },
		],
		currentItem: null,
		totalCalories: 0,
	};

	// Public Methods
	return {
		logData: function() {
			return data;
		},
		getItems: function() {
			return data.items;
		}
	}
})();

// UI controller
const UICtrl = (function() {

	const UISelectors = {
		itemList: '#item-list',
	}

	// Public Methods
	return {
		populateItemList: function (items) {
			let html = '';

			items.forEach((item) => {
				html += `
				<li data-id="${item.id}" class="collection-item">
					<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
					<a href="#" class="secondary-content">
						<i class="edit-item fa fa-pencil"></i>
					</a>
				<li>`;
			});

			// Insert list Items
			document.querySelector(UISelectors.itemList).innerHTML = html;
		}
	}
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {

	// Public Methods
	return {
		init: function() {
			// Fetch Items from Data Structure
			const items = ItemCtrl.getItems();
			// Populate list with Items
			UICtrl.populateItemList(items);
		}
	}

})(ItemCtrl, UICtrl);

App.init();
