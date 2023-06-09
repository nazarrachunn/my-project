import Todo from './types';

type TodoListProps = {
  todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <p>
            {todo.id} {todo.title}
          </p>
        );
      })}
    </>
  );
};

export default TodoList;
