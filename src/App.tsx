import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [randomItem, setRandomItem] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setRandomItem(json[Math.floor(Math.random() * json.length)]);
      });
  }, []);

  return (
    <>
      <header className="App-header">
        {<p>{JSON.stringify(randomItem)}</p>}
      </header>
    </>
  );
}

export default App;
