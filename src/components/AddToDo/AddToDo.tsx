import { Button, Flex, Input, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
  addTodo: (value: string) => void;
};

function AddToDo(props: Props) {
  const { addTodo } = props;

  const [inputData, setInputData] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <Flex>
      <Input maxWidth={600} placeholder='Add To-Do' value={inputData} onChange={handleInputChange} />
      <Spacer />
      <Button
        isDisabled={inputData ? false : true}
        width={100}
        size='md'
        colorScheme='green'
        onClick={() => {
          addTodo(inputData);
          setInputData('');
        }}
      >
        Add
      </Button>
    </Flex>
  );
}

export { AddToDo };
