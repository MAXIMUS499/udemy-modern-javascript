class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.querySelector('#book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
	`;

    list.appendChild(row);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  showAlert(msg, className) {
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
    }, 3000);
  }
}

// Local Storage class
class Store {
  static displayBook() {
    const books = Store.getBooks();

    books.forEach(book => {
      const ui = new UI();

      // Add book to the UI
      ui.addBookToList(book);
    });
  }

  static saveBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(
      (book, index) => book.isbn === isbn && books.splice(index, 1)
    );
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event listener for add book
document.querySelector('#book-form').addEventListener('submit', e => {
  e.preventDefault();

  // Get form values
  const $title = document.querySelector('#title').value;
  const $author = document.querySelector('#author').value;
  const $isbn = document.querySelector('#isbn').value;

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
    // Add to local storage
    Store.saveBook(book);
    // Clear fields
    ui.clearFields();
    // Show OK message
    ui.showAlert('Book added', 'success');
  }
});

// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBook);

// Event listener for delete - Event delegation
document.querySelector('#book-list').addEventListener('click', e => {
  e.preventDefault();
  // Instantiate UI
  const ui = new UI();
  ui.deleteBook(e.target);
  // Remove from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // Show alert
  ui.showAlert('Book removed!', 'success');
});
