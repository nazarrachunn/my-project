import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Todo from './types';

function App() {
  const [items, setItems] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        const newArray = data.reduce((acc: Todo[], cur: Todo) => {
          return [...acc, [cur.id, cur.title]];
        }, []);
        setItems(newArray);
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
        <TodoList todos={items} />
      </header>
    </>
  );
}

export default App;
