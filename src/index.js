import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";

const author = "Mel Robbins";
const title = "The Let Them Theory";
const image = "https://m.media-amazon.com/images/I/91I1KDnK1kL._SY385_.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={image} />
      <Book author={author} title={title} img={image} />
      <Book />
    </section>
  );
};

const Book = (props) => {
  console.log(props);

  return (
    <article className="book">
      <img src={image} alt={title} />

      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
