import { Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';

import styles from './Filters.module.scss';

enum Selected {
  All,
  Active,
  Completed
}

type FilterButton = {
  name: string;
  target: Selected;
};

const filterButtons: FilterButton[] = [
  {
    name: 'All',
    target: Selected.All
  },
  {
    name: 'Active',
    target: Selected.Active
  },
  {
    name: 'Completed',
    target: Selected.Completed
  }
];

function Filters() {
  const [selected, setSelected] = useState(Selected.All);

  const clickHandler = (e: React.MouseEvent, selectOption: Selected) => {
    setSelected(selectOption);
  };

  return (
    <ButtonGroup className={styles.group} spacing='6' size='md' colorScheme='blue'>
      {filterButtons.map(({ name, target }) => (
        <Button key={name} onClick={e => clickHandler(e, target)} variant={selected === target ? 'solid' : 'ghost'}>
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export { Filters };
