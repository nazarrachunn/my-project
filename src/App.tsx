import React, { useEffect, useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  title: string;
}

function App() {
  const [items, setItems] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(setItems);
  }, []);

  const handleGenerateItem = () => {
    setItems([...items, { id: 4, title: 'et porro tempora' }]);
  };

  return (
    <>
      <header className="App-header">
        <button className="btn" onClick={handleGenerateItem}>
          Generate item
        </button>
        {items.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </header>
    </>
  );
}

export default App;
