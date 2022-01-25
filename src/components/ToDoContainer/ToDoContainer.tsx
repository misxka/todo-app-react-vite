import { Flex } from '@chakra-ui/react';
import { Filters } from '../Filters/Filters';
import styles from './ToDoContainer.module.scss';

function ToDoContainer() {
  return (
    <Flex bg='white' className={styles.container}>
      <Filters />
    </Flex>
  );
}

export { ToDoContainer };
