import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";

// Array of book objects with details like author, title, image URL, and unique ID
const books = [
  {
    author: "Lisa Wingate",
    title: "Before We Were Yours",
    image: "https://m.media-amazon.com/images/I/81PO2ZUxnTL._AC_UL320_.jpg",
    id: 1,
  },
  {
    author: "Jonh C CampBell",
    title: "Ghost Platoon",
    image: "https://m.media-amazon.com/images/I/41Wts36fLcL._AC_UL320_.jpg",
    id: 2,
  },
  {
    author: "Brenda Davies",
    title: "The Girl Behind the Gates",
    image: "https://m.media-amazon.com/images/I/51nAXgu5H+L._SY445_SX342_.jpg",
    id: 3,
  },
];

// BookList component - renders a list of books
const BookList = () => {
  const someValue = "shakeAndBake"; // A simple string variable
  const displayValue = () => {
    console.log(someValue); // Function to log someValue
  };

  return (
    <>
      <section className="booklist">
        {books.map((book) => {
          console.log(book); // Logs each book object for debugging
          // Passing each book’s properties and displayValue function to Book component
          return <Book {...book} key={book.id} displayValue={displayValue} />;
        })}
      </section>
    </>
  );
};

// Book component - renders individual book details
const Book = (props) => {
  const { image, title, author, children, displayValue } = props; // Destructuring props
  const displayTitle = () => {
    console.log(title); // Function to log the book title
  };

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {/* Button that triggers displayValue function passed from BookList */}
      <button onClick={displayValue}>Click me</button>
      <h4>{author}</h4>
      {children} {/* Allows passing additional content */}
    </article>
  );
};

// Rendering the BookList component inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
