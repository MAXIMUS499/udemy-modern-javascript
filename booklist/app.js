// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}
// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.querySelector("#book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
	`;

  list.appendChild(row);
};

// Delete book
UI.prototype.deleteBook = function(target) {
	if(target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
}

// UI clear fields
UI.prototype.clearFields = function() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
};

// Show alert
UI.prototype.showAlert = function(msg, className) {
	// Create div
	const div = document.createElement('div');
	// Add classes
	div.className = `alert ${className}`;
	// Add text node
	div.appendChild(document.createTextNode(msg));
	// Get parent
	const container = document.querySelector('.container');
	const form = document.querySelector('#book-form');

	container.insertBefore(div, form);

	// Remove alert after 3 seconds
	setTimeout(() => {
		document.querySelector('.alert').remove();
	},3000)
}

// Event listener for add book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();

  // Get form values
  const $title = document.querySelector("#title").value;
  const $author = document.querySelector("#author").value;
  const $isbn = document.querySelector("#isbn").value;

  // Instantiate book
  const book = new Book($title, $author, $isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if ($title === '' || $author === '' || $isbn === '') {
		// Error Alert
		ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Clear fields
		ui.clearFields();
		// Show OK message
		ui.showAlert('Book added', 'success');
  }
});

// Event listener for delete - Event delegation
document.querySelector('#book-list').addEventListener('click', (e) => {
	e.preventDefault();
	  // Instantiate UI
		const ui = new UI();
		ui.deleteBook(e.target);
		// Show alert
		ui.showAlert('Book removed!', 'success');
})
