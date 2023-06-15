import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Todo, { Todos } from './types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const TodosContext = React.createContext<Todos>([]);

const fetchTodos = (): Promise<Todos> =>
  axios.get('https://jsonplaceholder.typicode.com/todos').then((response) =>
    response.data.reduce((acc: Todos, cur: Todo) => {
      return [...acc, [cur.id, cur.title]];
    }, [])
  );

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const [todos, setTodos] = useState<Todos>([]);
  const handleGenerateItem = () => {
    setTodos([...todos, [todos.length + 1, 'random text']]);
  };

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Request failed with status code 404</div>;

  return (
    <>
      <header className="App-header">
        <button className="btn" onClick={handleGenerateItem}>
          Generate item
        </button>
        <TodosContext.Provider value={data || []}>
          <TodoList />
        </TodosContext.Provider>
      </header>
    </>
  );
}

export default App;
