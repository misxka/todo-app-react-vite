import { Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';

import styles from './Filters.module.scss';

export enum FilterOption {
  All,
  Active,
  Completed
}

type FilterButton = {
  name: string;
  target: FilterOption;
};

const filterButtons: FilterButton[] = [
  {
    name: 'All',
    target: FilterOption.All
  },
  {
    name: 'Active',
    target: FilterOption.Active
  },
  {
    name: 'Completed',
    target: FilterOption.Completed
  }
];

type Props = {
  setFilterOption: (filterOption: FilterOption) => void;
};

function Filters(props: Props) {
  const { setFilterOption } = props;

  const [selected, setSelected] = useState(FilterOption.All);

  const clickHandler = (e: React.MouseEvent, selectOption: FilterOption) => {
    setSelected(selectOption);
    setFilterOption(selectOption);
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
