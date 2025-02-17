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
  return (
    <>
      <EventExample />
      <section className="booklist">
        {books.map((book) => {
          console.log(book); // Logs each book object to the console for debugging
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};

// EventExample component - Handles form events
const EventExample = () => {
  const handleFormInput = (e) => {
    console.log("handle form input");
    console.log("Target:", e.target);
    console.log("Value:", e.target.value);
  };

  const handleButtonClick = () => {
    console.log("handle click");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem" }}
          onChange={handleFormInput}
        />
        <button type="submit">Submit Form</button>
      </form>
      {/* Ensure this button doesn't submit the form */}
    </section>
  );
};

// Book component - renders individual book details
const Book = (props) => {
  const { image, title, author, children } = props;

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

// Rendering the BookList component inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
