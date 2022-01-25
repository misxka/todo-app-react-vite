import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';

import ToDoItemModel from '../../models/ToDoItem.model';

import styles from './ToDoItem.module.scss';

type Props = {
  item: ToDoItemModel;
};

function ToDoItem(props: Props) {
  const { value, important, completed } = props.item;

  return (
    <Editable value={value}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
}

export { ToDoItem };
