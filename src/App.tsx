import { Center, Flex } from '@chakra-ui/react';
import { ToDoContainer } from './components/ToDoContainer/ToDoContainer';

import styles from './App.module.scss';

function App() {
  return (
    <Center bg='white' h='100vh'>
      <ToDoContainer />
    </Center>
  );
}

export default App;
