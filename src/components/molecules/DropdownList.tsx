import React, { useState, useContext } from 'react';
//Bootsrap components
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//Context
import { PropsContext } from '../templates/ApiUpdate';
//HELPERS
import { statusColor } from '../helpers/statusColor';
import { IsContextTypes } from '../helpers/interfaces';
import { StatusOptionTypes } from '../helpers/types';

const statusOptions: StatusOptionTypes[] = [
  { status: 'Any', id: 1 },
  { status: 'Alive', id: 2 },
  { status: 'Dead', id: 3 },
  { status: 'Unknown', id: 4 }
];

export const DropdownList = () => {
  const [characterStatus, setCharacterStatus] = useState<string>('Any');
  const { setStatus, setPage, setCharacters } =
    useContext<IsContextTypes>(PropsContext);

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    const input = e.target as HTMLElement;

    if (setCharacters && setStatus && setPage) {
      if (input.textContent !== null) {
        console.log(typeof input.textContent);
        setCharacterStatus(input.textContent);
        setCharacters([]);
        setStatus(input.textContent === 'Any' ? '' : input.textContent);
      }
      setPage(1);
    }
  }
  return (
    <DropdownButton
      variant={statusColor(characterStatus.toLowerCase())}
      title={characterStatus}
    >
      {statusOptions.map((option) => (
        <Dropdown.Item
          key={option.id}
          onClick={(e) => handleOnClick(e)}
          className="dropdown-menu-dark"
        >
          {option.status}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
