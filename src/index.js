import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import { books } from "./data/books";
import Book from "./components/Book";

// BookList component - renders a list of books
const BookList = () => {
  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          console.log(book); // Logs each book object for debugging
          // Passing each book’s properties and displayValue function to Book component
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

// Rendering the BookList component inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
