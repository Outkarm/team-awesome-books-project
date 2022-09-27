const container = document.querySelector('.container');
const bookList = [];
// Add book to list
function addBookToList(book) {
  const div = document.createElement('div');
  div.setAttribute('class', 'min-container');
  div.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class= "remove-btn">Remove</button>
    <hr>
    `;
  container.append(div);
}

// get book from local storage
function displayBooks() {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((book) => addBookToList(book));
}

// function to add book to local storage
function addBook(books) {
  localStorage.setItem('books', JSON.stringify(books));
}

// Delete book from local storage
function deleteBook() {
  const books = bookList;
  books.forEach((book, index) => {
    books.splice(index, 1);
  });
  localStorage.setItem('books', JSON.stringify(books));
}

// Clear form input's values
function clearFields() {
  document.querySelector('.title').value = '';
  document.querySelector('.author').value = '';
}

// function to add book and display
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const obj = { title, author };
  // Add book to the collection
  addBookToList(obj);
  bookList.push(obj);
  addBook(bookList);
  clearFields();
});

// function to remove book
function removeBook(el) {
  if (el.classList.contains('remove-btn')) {
    el.parentElement.remove();
  }
}

// Remove book
document.querySelector('.container').addEventListener('click', (e) => {
  // delete elements from screen
  removeBook(e.target);
  // remove book from local storage
  deleteBook(e.target);
});

// Display book
document.addEventListener('DOMContentLoaded', displayBooks());