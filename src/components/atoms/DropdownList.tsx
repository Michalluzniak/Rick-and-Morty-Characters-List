import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { atomsProps } from './types/types';
import { PropsContext } from '../templates/ApiUpdate';

const statusOptions = ['Any', 'Alive', 'Dead', 'Unknown'];

export const DropdownList = ({ variant }: atomsProps) => {
  const [characterStatus, setCharacterStatus] = useState<string>('Any');
  const { setStatus } = useContext<any>(PropsContext);

  function handleOnClick(e: any) {
    setCharacterStatus(e.target.textContent);
    setStatus(e.target.textContent === 'Any' ? '' : e.target.textContent);
  }

  return (
    <DropdownButton variant={variant} title={characterStatus}>
      {statusOptions.map((option, i) => (
        <Dropdown.Item
          key={i}
          onClick={(e) => handleOnClick(e)}
          className="dropdown-menu-dark"
        >
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
