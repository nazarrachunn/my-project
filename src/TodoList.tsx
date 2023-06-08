import React from 'react';

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map((item) => {
        return (
          <pre key={item.id}>
            {item.id} {item.title}
          </pre>
        );
      })}
    </>
  );
};

export default TodoList;
