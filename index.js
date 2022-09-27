const container = document.querySelector('.container');

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
function getBook() {
  let book;
  if (localStorage.getItem('books') === null) {
    book = [];
  } else {
    book = JSON.parse(localStorage.getItem('books'));
  }
  return book;
}

// function to add book to local storage
function addBook(book) {
  const books = getBook();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

// Delete book from local storage
function deleteBook() {
  const books = getBook();
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
  addBookToList(obj);
  addBook(obj);
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