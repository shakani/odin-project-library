const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? "read" : "not read yet"}`;
    }
}

function addToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
goodOmens = new Book("Good Omens", "Neil Gaiman", 400, false);
recursion = new Book("Recursion", "That One Guy", 500, true);

addToLibrary(theHobbit);
addToLibrary(goodOmens);
addToLibrary(recursion);

// Displaying library 

let library = document.querySelector('.library');

for(let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookAttributeArray = book.info().split(', ')

    let card = document.createElement('div');
    card.classList.add('book');

    for(let j = 0; j < bookAttributeArray.length; j++) {
        let attribute = document.createElement('div');
        attribute.classList.add('attribute');
        attribute.textContent = bookAttributeArray[j];
        card.appendChild(attribute);
    }

    library.appendChild(card);
}