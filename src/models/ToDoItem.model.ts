type ToDoItem = {
  id: string;
  value: string;
  completed: boolean;
  important: boolean;
};

type UpdatableProps = 'important' | 'completed';

export type { UpdatableProps };

export default ToDoItem;
