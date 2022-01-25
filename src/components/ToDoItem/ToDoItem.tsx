import { Checkbox, Editable, EditableInput, EditablePreview, Icon, IconButton, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { FaTrashAlt, FaExclamation } from 'react-icons/fa';

import ToDoItemModel, { UpdatableProps } from '../../models/ToDoItem.model';

import styles from './ToDoItem.module.scss';

type Props = {
  item: ToDoItemModel;
  updateItem: (id: string, prop: UpdatableProps) => void;
  updateItemValue: (id: string, value: string) => void;
  deleteItem: (id: string) => void;
};

function ToDoItem(props: Props) {
  const { updateItem, deleteItem, updateItemValue } = props;
  const { value, important, completed, id } = props.item;

  const [inputData, setInputData] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
    updateItemValue(id, e.target.value);
  };

  return (
    <ListItem className={styles.itemContainer}>
      <Checkbox isChecked={completed ? true : false} size='lg' onChange={() => updateItem(id, 'completed')} />
      <Editable className={styles.editable} borderColor='blue.500' value={inputData} width='70%'>
        <EditablePreview className={`${completed ? styles.completed : ''}`} fontWeight={important ? 700 : 400} />
        <EditableInput onChange={handleInputChange} />
      </Editable>
      <IconButton onClick={() => updateItem(id, 'important')} size='sm' variant={important ? 'solid' : 'ghost'} aria-label='Mark important' colorScheme='cyan' icon={<Icon as={FaExclamation} />} />
      <IconButton onClick={() => deleteItem(id)} size='sm' aria-label='Delete item' colorScheme='red' icon={<Icon as={FaTrashAlt} />} />
    </ListItem>
  );
}

export { ToDoItem };
