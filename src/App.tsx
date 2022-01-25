import { Center, Flex } from '@chakra-ui/react';
import styles from './App.module.scss';
import { ToDoContainer } from './components/ToDoContainer/ToDoContainer';

function App() {
  return (
    <Center bg='white' h='100vh'>
      <ToDoContainer />
    </Center>
  );
}

export default App;
