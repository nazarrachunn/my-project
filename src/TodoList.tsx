import { useContext } from 'react';
import { TodosContext } from './App';

function TodoList() {
  const todos = useContext(TodosContext);

  return (
    <>
      {todos.map((todo) => {
        return (
          <p key={todo[0]}>
            {todo[0]} {todo[1]}
          </p>
        );
      })}
    </>
  );
}

export default TodoList;
