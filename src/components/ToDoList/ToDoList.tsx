import { filter, List } from '@chakra-ui/react';

import ToDoItemModel, { UpdatableProps } from '../../models/ToDoItem.model';
import { FilterOption } from '../Filters/Filters';
import { ToDoItem } from '../ToDoItem/ToDoItem';

type Props = {
  todos: ToDoItemModel[];
  updateItem: (id: string, prop: UpdatableProps) => void;
  updateItemValue: (id: string, value: string) => void;
  deleteItem: (id: string) => void;
  filterOption: FilterOption;
};

function ToDoList(props: Props) {
  const { todos, updateItem, deleteItem, updateItemValue, filterOption } = props;

  const filterTodos = (filterOption: FilterOption): ToDoItemModel[] => {
    if (filterOption === FilterOption.Active) return todos.filter(todo => todo.completed === false);
    if (filterOption === FilterOption.Completed) return todos.filter(todo => todo.completed === true);
    return todos;
  };

  return (
    <List>
      {filterTodos(filterOption).map(todo => (
        <ToDoItem key={todo.id} item={todo} updateItem={updateItem} deleteItem={deleteItem} updateItemValue={updateItemValue} />
      ))}
    </List>
  );
}

export { ToDoList };
