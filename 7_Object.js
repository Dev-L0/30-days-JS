//Activity 1:
//Task 1:
let book = ({
    title: "Javascript",
    author: "Brendan Eich",
    year:"1997",

    titleAuthor : function(){
         return `${this.title}, ${this.author}`
    },
    updateYear: function(newYear){
        this.year = newYear;
        return `${this.year}`;
    },

    titleYear: function(){
        return `${this.title}, ${this.year}`;
    }
});

console.log(book);

//Task 2:
console.log("Title of the book is", book.title);
console.log("Author of the book is", book.author);

//Activity 2:
//Task 3:
console.log(book.titleAuthor());
//Task 4:
console.log(book.updateYear("1999"));


//Activity 3:
//Task 5:
let library = ({
    name: "Hello",
    books:[{
        title: "Javascript",
        author: "Brendan Eich",
        year:"1997",
    },
    {
        title: "Java",
        author: "James Gosling",
        year:"1995",
    },
    {
        title: "Python",
        author: "Guido van Rossum",
        year:"1991",
    },

    ]
})

console.log(library);


//Task 6:
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);

//Activity 4:
//Task 7:
console.log(book.titleYear());

//Activity 5:
//Task 8:
for(const property in book){
    console.log(`${property}, ${book[property]}`); 
}


//Task 9:

    console.log(Object.keys(book)); 
    console.log(Object.values(book)); 
