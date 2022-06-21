import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { atomsProps } from './types/types';

const statusOptions = ['Any', 'Alive', 'Dead', 'Unknown'];

export const DropdownList = ({ variant }: atomsProps) => {
  const [status, setStatus] = useState<string>('Any');

  function handleOnClick(e: any) {
    setStatus(e.target.textContent);
  }

  return (
    <DropdownButton variant={variant} title={status}>
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
