// Book Constructor
function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
}

// UI Constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    // Creat tr element
    const row = document.createElement('tr');
    // Insert columns
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.rating}</td>
    <td><a href="#" class = "delete">x</a></td>
    `;

    list.appendChild(row)
}

UI.prototype.showAlert = function (message, className) {
    // Create Div
    const div = document.createElement('div')
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000)
}

// Clear Fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('rating').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            rating = document.getElementById('rating').value

        // Instantiate book
        const book = new Book(title, author, rating);

        // Instantiate UI
        const ui = new UI();

        // Validate
        if (title === '' || author === '' || rating === '') {
            ui.showAlert('Please fill out all fields')
        } else {
            // Add book to list
            ui.addBookToList(book)

            // Show success
            ui.showAlert('Book Added!', 'success');

            // Clear Fields
            ui.clearFields();
        }




        e.preventDefault()
    })