import { useContext, useEffect, useState } from 'react';
import { TodosContext } from './App';
import React from 'react';
import { TodoArray } from './types';

function TodoList() {
  const todos = useContext(TodosContext);
  const [state, setState] = useState<TodoArray[]>([]);

  const handleGenerateItem = () => {
    const newItem: TodoArray = [state.length + 1, 'random text'];
    setState([...state, newItem]);
  };

  useEffect(() => {
    setState(todos);
  }, []);

  return (
    <>
      <button className="btn" onClick={handleGenerateItem}>
        Generate item
      </button>
      {state.map((todo) => {
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
