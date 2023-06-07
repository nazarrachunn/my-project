import React, { useEffect, useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  title: string;
}

function App() {
  const [items, setItems] = useState<Todo[]>([]);

  const todos = items.reduce((acc: any[], obj) => {
    const values = Object.values(obj).slice(1, 3);
    return [...acc, values];
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(setItems);
  }, []);

  return (
    <>
      <header className="App-header">
        {todos.map((todo) => {
          return <pre key={todo.id}>{todo}</pre>;
        })}
      </header>
    </>
  );
}

export default App;
