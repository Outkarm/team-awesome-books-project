/* eslint-disable */

// BookListApp class: class to hold books
class BookListApp {
  constructor() {
    this.bookList = [];
    this.container = document.querySelector('.book-container');
  }

  addBookToList(book) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>"${book.title}" by ${book.author}</td>
      <td><button class= "remove-btn">Remove</button></td>
      `;
    this.container.append(row);
  }

  // Function to perform the following action:
  /*
1: Add book to the dynamic elements
2: Add book to the array of book
3: Add book to the local storage
*/
  AppendBook() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.querySelector('.title').value;
      const author = document.querySelector('.author').value;
      this.addBookToList({ title, author });
      this.bookList.push({ title, author });
      localStorage.setItem('books', JSON.stringify(this.bookList));
      this.clearFields();
    });
  }

  // function to remove book
  removeBook(el) {
    if (el.classList.contains('remove-btn')) {
      el.parentElement.parentElement.remove();
    }
  }

  // Function to perform the following actions:
  /*
  1: Delete book to the dynamic elements
  2: Delete book to the array of book
  3: Delete book to the local storage
  */

  deleteBook() {
    const books = this.bookList;
    books.forEach((book, index) => {
      books.splice(index, 1);
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  // Function to remove books when 'remove" button clicked
  removeButton() {
    this.container.addEventListener('click', (e) => {
      // delete elements from screen
      this.removeBook(e.target);
      // remove book from local storage
      this.deleteBook(e.target);
    });
  }

  // get book from local storage
  displayBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach((book) => this.addBookToList(book));
  }

  // Clear form input's values
  clearFields() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }

  callingAllFn() {
    this.AppendBook();
    this.removeButton();
    this.displayBooks();
  }
}
// instantiate class
const books = new BookListApp();
document.addEventListener('DOMContentLoaded', books.callingAllFn());
// Switching Through Sections
const allSections = document.querySelectorAll(".sections")
const listCont = document.querySelector(".nav-items")

function clickedBtn(){
    listCont.addEventListener("click", function(e){
      e.preventDefault()
      const id = e.target.dataset.id

      if(id){
        // Switching Between the List, Add-Book and Contact navigations
        let currenBtn = document.querySelectorAll(".active-btn")
        currenBtn[0].className = currenBtn[0].className.replace("active-btn", "")
        e.target.className += " active-btn"
        //  Removing the active section
        allSections.forEach((section)=>{
        section.classList.remove("activesec")
        })
         //  Adding the active section
        const targetedSec = document.getElementById(id)
        targetedSec.classList.add("activesec")
      }
    })
  

}

clickedBtn()

