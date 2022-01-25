import { StackDivider, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ToDoItemModel, { UpdatableProps } from '../../models/ToDoItem.model';
import { AddToDo } from '../AddToDo/AddToDo';
import { FilterOption, Filters } from '../Filters/Filters';
import { ToDoList } from '../ToDoList/ToDoList';

import styles from './ToDoContainer.module.scss';

function ToDoContainer() {
  const [todos, setTodos] = useState<ToDoItemModel[]>([]);
  const [filterOption, setFilterOption] = useState<FilterOption>(FilterOption.All);

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

  const updateTodo = (id: string, prop: UpdatableProps) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo[prop] = !todo[prop];
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);
  };

  return (
    <VStack borderColor='blue.500' className={styles.container} divider={<StackDivider borderColor='blue.500' />} spacing={6} align='stretch'>
      <Filters setFilterOption={setFilterOption} />
      <ToDoList todos={todos} updateItem={updateTodo} deleteItem={deleteTodo} filterOption={filterOption} />
      <AddToDo addTodo={addTodo} />
    </VStack>
  );
}

export { ToDoContainer };
