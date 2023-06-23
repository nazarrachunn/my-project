import React from 'react';
import './App.css';
import Todo, { Todos, newTodoType } from './types';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useMutation } from 'react-query';

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

  const mutation = useMutation({
    mutationFn: (newTodoItem: newTodoType) => {
      return axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        newTodoItem
      );
    },
    onSuccess: (data, variables, context: any) => {
      console.log('New Todo:', data);
      console.log('Status Code:', context?.response?.status);
    },
  });

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Request failed with status code 404</div>;

  const todosData = Array.isArray(data) ? data : [];

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
        {todosData.map((todo) => {
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
