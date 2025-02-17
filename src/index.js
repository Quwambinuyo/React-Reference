import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";

const firstBook = {
  author: "Mel Robbins",
  title: "The Let Them Theory",
  image: "https://m.media-amazon.com/images/I/91I1KDnK1kL._SY385_.jpg",
};

const secondBook = {
  author: "Jonh C CampBell",
  title: "Ghost Platoon",
  image: "https://m.media-amazon.com/images/I/41Wts36fLcL._AC_UL320_.jpg",
};

const thirdBook = {
  author: "Brenda Davies",
  title: "The Girl Behind the Gates",
  image: "https://m.media-amazon.com/images/I/51nAXgu5H+L._SY445_SX342_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        image={firstBook.image}
      >
        {/* <p>
          This is an amazing book about personal growth and self-improvement.
        </p>

        <button>Click Me</button> */}
      </Book>

      <Book
        author={secondBook.author}
        title={secondBook.title}
        image={secondBook.image}
      />

      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        image={thirdBook.image}
      />
    </section>
  );
};

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
