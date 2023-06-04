import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <>
      <header className="App-header">
        {items.map((item, index) => {
          return <p key={index}>{JSON.stringify(item)}</p>;
        })}
      </header>
    </>
  );
}

export default App;
