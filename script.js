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

for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info());
}