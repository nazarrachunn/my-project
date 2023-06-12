import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Todo, { TodoArray, Todos } from './types';

function App() {
  const [items, setItems] = useState<Todos>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        const array = data.reduce((acc: Todos, cur: Todo) => {
          return [...acc, [cur.id, cur.title]];
        }, []);
        setItems(array);
      });
  }, []);

  const handleGenerateItem = () => {
    setItems([...items, [items.length + 1, 'random text']]);
  };
  console.log(items);
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
