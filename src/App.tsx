import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [randomItem, setRandomItem] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        JSON.stringify(
          setRandomItem(json[Math.floor(Math.random() * json.length)])
        );
      });
  }, [randomItem]);

  const handleGenerateItem = () => {
    randomItem && setItems([randomItem, ...items]);
  };

  return (
    <>
      <header className="App-header">
        <button className="btn" onClick={handleGenerateItem}>
          Generate item
        </button>
        {items.map((item, index) => {
          return <p key={index}>{JSON.stringify(item)}</p>;
        })}
      </header>
    </>
  );
}

export default App;
