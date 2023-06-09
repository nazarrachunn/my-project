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
      .then((data) => {
        const todos = data.reduce((acc: Todo[], obj: Todo) => {
          return [...acc, { id: obj.id, title: obj.title }];
        }, []);
        setItems(todos);
      });
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
          return (
            <pre key={item.id}>
              {item.id} {item.title}
            </pre>
          );
        })}
      </header>
    </>
  );
}

export default App;
