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
        {/* Iterating through the books array using map() */}
        {books.map((book) => {
          console.log(book); // Logs each book object to the console for debugging

          // Spreading book properties into the Book component and using id as a unique key
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};

const EventExample = (e) => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = (e) => {
    console.log("handle click");
  };

  return (
    <section>
      <form>
        <h2>typical form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem" }}
          onChange={handleFormInput}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

// Book component - renders individual book details
const Book = (props) => {
  // Destructuring props for cleaner code
  const { image, title, author, children } = props;

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* children prop allows additional content to be passed dynamically */}
      {children}
    </article>
  );
};

// Rendering the BookList component inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
