/*
	Task list project from Udemy - Modern Javascript
*/

// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Store task
function storeTaskInLocalStorage(task) {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasks() {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach((task) => {
		addTasktoUI(task);
	});

}

// Remove task from LocalStorage
function removeTaskFromLocalStorage(taskItem) {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach((task, index) => {
		if(taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add task
function addTask(e) {
	e.preventDefault();

	if(taskInput.value === '') {
		console.log('Add a task');
	}

	addTasktoUI(taskInput.value);

	// Store in localStorage
	storeTaskInLocalStorage(taskInput.value);
	
	// Clear input
	taskInput.value = '';

}

function addTasktoUI(item) {
	// Create li element
	const li = document.createElement('li');
	// Add class
	li.className = 'collection-item';
	// Create text node and append to li
	li.appendChild(document.createTextNode(item));
	// Create new link element
	const link = document.createElement('a');
	// Add class
	link.className = 'delete-item secondary-content';
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append the link to li
	li.appendChild(link);
	// Append li to ul
	taskList.appendChild(li);
}

// Remove task
function removeTask(e) {
	if(e.target.parentElement.classList.contains('delete-item')) {
		if(confirm('Are you sure')) {
			const el = e.target.parentElement.parentElement;
			el.remove();
			// Remove from LocalStorage
			removeTaskFromLocalStorage(el)
		}
	}
}

// Clear Tasks
function clearTasks() {
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
	localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	
	document.querySelectorAll('.collection-item')
		.forEach((task) => {
			const item = task.firstChild.textContent;
			if(item.toLowerCase().indexOf(text) != -1) {
				task.style.display = 'block'
			} else {
				task.style.display = 'none';
			}
	});
}

// Load all event listeners
function loadEventListeners() {
	// DOM load event
	document.addEventListener('DOMContentLoaded', getTasks);
	// Add task event
	form.addEventListener('submit', addTask);
	// Remove task event
	taskList.addEventListener('click', removeTask);
	// Clear tasks
	clearBtn.addEventListener('click', clearTasks);
	// Filter tasks
	filter.addEventListener('keyup', filterTasks);
}



loadEventListeners();
