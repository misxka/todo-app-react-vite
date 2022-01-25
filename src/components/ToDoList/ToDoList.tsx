import { List } from '@chakra-ui/react';

import ToDoItemModel, { UpdatableProps } from '../../models/ToDoItem.model';
import { ToDoItem } from '../ToDoItem/ToDoItem';

type Props = {
  todos: ToDoItemModel[];
  updateItem: (id: string, prop: UpdatableProps) => void;
  deleteItem: (id: string) => void;
};

function ToDoList(props: Props) {
  const { todos, updateItem, deleteItem } = props;

  return (
    <List>
      {todos.map(todo => (
        <ToDoItem key={todo.id} item={todo} updateItem={updateItem} deleteItem={deleteItem} />
      ))}
    </List>
  );
}

export { ToDoList };
