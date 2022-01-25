import { List, ListItem } from '@chakra-ui/react';

import ToDoItemModel from '../../models/ToDoItem.model';
import { ToDoItem } from '../ToDoItem/ToDoItem';

type Props = {
  todos: ToDoItemModel[];
};

function ToDoList(props: Props) {
  const { todos } = props;

  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          <ToDoItem item={todo} />
        </ListItem>
      ))}
    </List>
  );
}

export { ToDoList };
