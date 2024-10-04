const books = [
   {
    title : "War and Peace",
    author : "Tolstoy",
    year : 1863,
    pages : 5202
   },
   {
    title : "Harry Potter",
    author : "Rowling",
    year : 1997,
    pages : 3633
   },
   {
    title : "Pride and Predujice",
    author : "Ostin",
    year : 1813,
    pages : 336
   }
];
console.log(books);

prompt("Какую книгу добавить в список?");

const book = {
    title : "Autumn",
    author : "null",
    year : 0,
    pages: 0
};

books.push(book);

console.log(books [books.length - 1])