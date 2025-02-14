import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
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
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
