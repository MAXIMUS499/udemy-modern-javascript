/*
	Task list project from Udemy - Modern Javascript
*/

// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Add task
function addTask(e) {
	e.preventDefault();

	if(taskInput.value === '') {
		console.log('Add a task');
	}

	// Create li element
	const li = document.createElement('li');
	// Add class
	li.className = 'collection-item';
	// Create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value));
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
	
	// Clear input
	taskInput.value = '';

}

// Remove task
function removeTask(e) {
	if(e.target.parentElement.classList.contains('delete-item')) {
		if(confirm('Are you sure')) {
			e.target.parentElement.parentElement.remove();
		}
	}
}

// Clear Tasks
function clearTasks() {
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
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
