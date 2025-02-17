import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";

const books = [
  {
    author: "Mel Robbins",
    title: "The Let Them Theory",
    image: "https://m.media-amazon.com/images/I/91I1KDnK1kL._SY385_.jpg",
  },

  {
    author: "Jonh C CampBell",
    title: "Ghost Platoon",
    image: "https://m.media-amazon.com/images/I/41Wts36fLcL._AC_UL320_.jpg",
  },

  {
    author: "Brenda Davies",
    title: "The Girl Behind the Gates",
    image: "https://m.media-amazon.com/images/I/51nAXgu5H+L._SY445_SX342_.jpg",
  },
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

console.log(newNames);

const BookList = () => {
  return (
    <section className="booklist">
      {names.map((name) => {
        return <h1>{name}</h1>;
      })}
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
