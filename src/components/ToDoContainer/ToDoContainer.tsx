import { StackDivider, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ToDoItemModel from '../../models/ToDoItem.model';
import { AddToDo } from '../AddToDo/AddToDo';
import { Filters } from '../Filters/Filters';
import { ToDoList } from '../ToDoList/ToDoList';

import styles from './ToDoContainer.module.scss';

function ToDoContainer() {
  const [todos, setTodos] = useState<ToDoItemModel[]>([]);

  useEffect(() => {
    const todosJson = localStorage.getItem('todos');

    if (todosJson) {
      setTodos(JSON.parse(todosJson));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (value: string) => {
    const todo: ToDoItemModel = {
      id: uuidv4(),
      value,
      completed: false,
      important: false
    };

    setTodos([...todos, todo]);
  };

  return (
    <VStack borderColor='blue.500' className={styles.container} divider={<StackDivider borderColor='blue.500' />} align='stretch'>
      <Filters />
      <ToDoList todos={todos} />
      <AddToDo addTodo={addTodo} />
    </VStack>
  );
}

export { ToDoContainer };
