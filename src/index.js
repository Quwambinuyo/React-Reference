import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91I1KDnK1kL._SY385_.jpg"
    alt="The Let Them Theory"
  />
);
const Title = () => <h2>The Let Them Theory</h2>;
const Author = () => {
  return (
    <h4>
      {" "}
      Mel Robbins <em>(Author)</em>
    </h4>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
