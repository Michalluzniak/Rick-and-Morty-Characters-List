import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { atomsProps } from './types/types';
import { PropsContext } from '../templates/ApiUpdate';
import { statusColor } from '../helpers/statusColor';

type StatusOptionTypes = {
  status: string;
  id: number;
};

const statusOptions: StatusOptionTypes[] = [
  { status: 'Any', id: 1 },
  { status: 'Alive', id: 2 },
  { status: 'Dead', id: 3 },
  { status: 'Unknown', id: 4 }
];

export const DropdownList = ({ variant }: atomsProps) => {
  const [characterStatus, setCharacterStatus] = useState<string>('Any');
  const { setStatus, setPage, setCharacters } = useContext<any>(PropsContext);

  function handleOnClick(e: any) {
    setCharacterStatus(e.target.textContent);
    setCharacters([]);
    setStatus(e.target.textContent === 'Any' ? '' : e.target.textContent);
    setPage(1);
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
