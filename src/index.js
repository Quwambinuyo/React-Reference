import React from "react";
import ReactDOM from "react-dom/client";

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

function Greeting() {
  return (
    <>
      <div>
        <Person />
        <Message />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
