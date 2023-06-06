import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [randomItem, setRandomItem] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setRandomItem(
          JSON.stringify(json[Math.floor(Math.random() * json.length)])
        );
      });
  }, []);

  return (
    <>
      <header className="App-header">
        <p>{randomItem}</p>
      </header>
    </>
  );
}

export default App;
