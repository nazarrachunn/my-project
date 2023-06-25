import React from 'react';
import './App.css';
import Todo, { Todos, newTodoType } from './types';
import { useQuery, useMutation, QueryClient } from 'react-query';
import axios from 'axios';

const fetchTodos = (): Promise<Todos> =>
  axios.get('https://jsonplaceholder.typicode.com/todos').then((res) =>
    res.data.reduce((acc: Todos, cur: Todo) => {
      return [...acc, [cur.id, cur.title]];
    }, [])
  );

function App() {
  const queryClient = new QueryClient();

  const { data = [] } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const mutation = useMutation({
    mutationFn: (newTodoItem: newTodoType) => {
      return axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        newTodoItem
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <>
      <header className="App-header">
        <button
          className="btn"
          onClick={() =>
            mutation.mutate({
              userId: 1,
              id: 201,
              title: 'delectus aut autem',
              completed: true,
            })
          }
        >
          Create Todo
        </button>
        {data.map((todo) => {
          return (
            <p key={todo[0]}>
              {todo[0]} {todo[1]}
            </p>
          );
        })}
      </header>
    </>
  );
}

export default App;
