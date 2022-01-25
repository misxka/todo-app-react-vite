import { Checkbox, Editable, EditableInput, EditablePreview, Icon, IconButton, ListItem } from '@chakra-ui/react';
import { FaTrashAlt, FaExclamation } from 'react-icons/fa';

import ToDoItemModel, { UpdatableProps } from '../../models/ToDoItem.model';

import styles from './ToDoItem.module.scss';

type Props = {
  item: ToDoItemModel;
  updateItem: (id: string, prop: UpdatableProps) => void;
  deleteItem: (id: string) => void;
};

function ToDoItem(props: Props) {
  const { updateItem, deleteItem } = props;
  const { value, important, completed, id } = props.item;

  return (
    <ListItem className={styles.itemContainer}>
      <Checkbox isChecked={completed ? true : false} size='lg' onChange={() => updateItem(id, 'completed')} />
      <Editable className={styles.editable} borderColor='blue.500' value={value} width='70%'>
        <EditablePreview className={`${completed ? styles.completed : ''}`} fontWeight={important ? 700 : 400} />
        <EditableInput />
      </Editable>
      <IconButton onClick={() => updateItem(id, 'important')} size='sm' variant={important ? 'solid' : 'ghost'} aria-label='Mark important' colorScheme='cyan' icon={<Icon as={FaExclamation} />} />
      <IconButton onClick={() => deleteItem(id)} size='sm' aria-label='Delete item' colorScheme='red' icon={<Icon as={FaTrashAlt} />} />
    </ListItem>
  );
}

export { ToDoItem };
