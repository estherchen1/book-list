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

    showAlert(message, className){
        //create a block at the top that will display the message
        const container = document.getElementById('book-form').parentNode;

        const alertBox = document.createElement('div');

        alertBox.className = `alert ${className}`;
        
        const alertMessage = document.createTextNode(message);

        alertBox.appendChild(alertMessage);

        document.body.insertBefore(alertBox, container);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);

    }

    //a function to remove book
    removeBook(ele){
        ele.parentNode.parentNode.remove();
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
    
    const ui = new UI();

    //Validate data
    //If any fields are empty, show a error message
    if (title == '' || author == '' || isbn == '') {
         ui.showAlert("Please enter something in all fields.", 'error');
    } else { //otherwise, add the book
    const book = new Book(title, author, isbn);

    ui.addBookToList(book);

    ui.clearFields();

    ui.showAlert("Book was added successfully.", 'success')
    }
})

document.getElementById('book-list').addEventListener('click', function(e){
    e.preventDefault();

    const ui = new UI();

    const row = e.target;

    if (row.className == 'delete') {
        ui.removeBook(row);
    }
})