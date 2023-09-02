let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? "read" : "not read yet"}`;
    }
}

function addToLibrary(book) {
    myLibrary.push(book);

    let library = document.querySelector('.library');
    let bookAttributeArray = book.info().split(', ')

    let card = document.createElement('div');
    card.classList.add('book');
    card.id = `book-${myLibrary.length - 1}`;

    for(let j = 0; j < bookAttributeArray.length; j++) {
        let attribute = document.createElement('div');
        attribute.classList.add('attribute');
        attribute.textContent = bookAttributeArray[j];
        card.appendChild(attribute);
    }

    let btn = document.createElement('button');
    btn.classList.add(`delete-btn-${myLibrary.length - 1}`); 
    btn.textContent = "Delete";
    card.appendChild(btn);

    library.appendChild(card);
}

function removeFromLibrary(bookID) {
    console.log(`removing book-${bookID} from library`);
    // delete everything library is displaying
    let library = document.querySelector('.library');
    for(let i = 0; i < myLibrary.length; i++) {
        let book = document.querySelector(`#book-${i}`);
        library.removeChild(book);
    }

    // now delete desired book from the database
    let booksAbove = myLibrary.slice(0, bookID);
    let booksBelow = myLibrary.slice(bookID+1);
    let remainingBooks = Array.prototype.concat(booksAbove, booksBelow); // deleted desired book from library 
    myLibrary = []; // delete all books

    // now display entire library again
    for(let j = 0; j < remainingBooks.length; j++) {
        addToLibrary(remainingBooks[j]);
    }
}


theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
goodOmens = new Book("Good Omens", "Neil Gaiman", 400, false);
recursion = new Book("Recursion", "That One Guy", 500, true);

addToLibrary(theHobbit);
addToLibrary(goodOmens);
addToLibrary(recursion);

// New book adding

function toggleForm() { // toggles form
    let form = document.querySelector('.form-container');
    form.classList.toggle('hidden');
}

function btnPushToLibrary() {
    let newBook = new Book();

    let titleInput = document.querySelector('input[for="title"]');
    let authorInput = document.querySelector('input[for="author"]');
    let pagesInput = document.querySelector('input[for="pages"]');
    let readInput = document.querySelector('input[for="read"]');

    newBook.title = titleInput.value;
    newBook.author = authorInput.value;
    newBook.pages = pagesInput.value;
    newBook.read = readInput.checked;

    addToLibrary(newBook);
    // clear inputs
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;

    toggleForm();
}

btn = document.querySelector('.library > button');
btn.addEventListener('click', () => toggleForm());

submitBtn = document.querySelector('.new-book');
submitBtn.addEventListener('click', () => btnPushToLibrary());

