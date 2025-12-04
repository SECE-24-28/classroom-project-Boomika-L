const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];

// 1. Get all books name with rating greater than 4.5
const arr1 = books.filter(book=> book.rating > 4.5)
.map(book=>book.bookName);
console.log(arr1);

// 2. Get the names of all books published after 2020
const arr2 = books.filter(book=> book.publishedYear > 2020)
.map(book=>book.bookName);
console.log(arr2);

// 3. Calculate the total price of all Programming books
const arr3 = books.filter(book => book.category === "Programming" )
.reduce((total,book)=>total+book.price,0);
console.log(arr3);
const arr4 = books.map(book => book.bookName)
console.log(arr4);


// 4. Find the average number of pages of all books in the Design category

const arr5 = books.filter(book => book.category === "Design")
             .reduce((avg,book)=> (avg+book.pages),0)/books.length;
console.log(arr5);

// 5. Get a list of authors who have written books with a rating less than 4.0
const arr6 = books.filter(book => book.rating < 4.0)
           .map(book => book.author);
console.log(arr6);
// 6. Find the most expensive book in the collection
const arr7 = books.reduce((max,book) => book.price > max.price ? book : max);
console.log (arr7);
// 7. Get all books that have more than 300 pages and are priced below 500
 
 const arr8 = books.filter(book => book.pages>300 && book.price < 500).map(book => book.bookName);
 console.log(arr8);
// 8. Create a new array with book names and their respective authors
const arr9 = books.map(book => (
    {
        name:book.bookName,
       author:book.author}));
console.log(arr9);
