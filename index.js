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
// function to add book and display
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const obj = { title, author };
  addBookToList(obj);
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
});
