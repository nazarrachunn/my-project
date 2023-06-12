import { Props } from './types';

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
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
