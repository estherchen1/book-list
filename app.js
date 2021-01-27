class Book {
    //a class to handle a book
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI { // a class to handle changes in the UI
    //this function takes in a book and inserts it into the table by creating a row which contains
    //the book information
    addBookToList(book) {

        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td> ${book.title}</td>
            <td> ${book.author}</td>
            <td> ${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `
        list.appendChild(row);
    }


    //clear the fields after the submit button is successful
    clearFields() {
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    }

}

//A listener which will validate the form, if something is empty
//there will be an error message

//adds book if the book is complete 
document.getElementById('book-form').addEventListener('submit', function(e){
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    

    //Validate data
    // if (title == '' || author == '' || isbn == '') {
    //     showAlert();
    // }
    
    const book = new Book(title, author, isbn);

    const ui = new UI();

    ui.addBookToList(book);

    ui.clearFields();
})

document.getElementById('book-list').addEventListener('click', function(e){
    console.log(e.target);


})