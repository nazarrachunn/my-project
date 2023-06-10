import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Todo from './types';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        const array = data.reduce((acc: Todo[], cur: Todo) => {
          return [...acc, [cur.id, cur.title]];
        }, []);
        setItems(array);
      });
  }, []);

  const handleGenerateItem = () => {
    const randInd = Math.floor(Math.random() * items.length);
    setItems([...items, items[randInd]]);
  };

  return (
    <>
      <header className="App-header">
        <button className="btn" onClick={handleGenerateItem}>
          Generate item
        </button>
        <TodoList todos={items} />
      </header>
    </>
  );
}

export default App;
