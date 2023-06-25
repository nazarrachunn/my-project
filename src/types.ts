type Todo = { id: number; title: string };
export type TodoArray = [number, string];
export type Todos = TodoArray[];

export type newTodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default Todo;
