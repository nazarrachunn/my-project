import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Todo, { Todos } from './types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const TodosContext = React.createContext<Todos>([]);

const fetchTodos = (): Promise<Todos> =>
  axios.get('https://jsonplaceholder.typicode.com/todos').then((res) =>
    res.data.reduce((acc: Todos, cur: Todo) => {
      return [...acc, [cur.id, cur.title]];
    }, [])
  );

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Request failed with status code 404</div>;

  const todosData = Array.isArray(data) ? data : [];

  return (
    <>
      <header className="App-header">
        <TodosContext.Provider value={todosData}>
          <TodoList />
        </TodosContext.Provider>
      </header>
    </>
  );
}

export default App;
