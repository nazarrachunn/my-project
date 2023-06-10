import { Props, TodoArray } from './types';

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo: TodoArray) => {
        return (
          <p>
            {todo[0]} {todo[1]}
          </p>
        );
      })}
    </>
  );
};

export default TodoList;
