import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const statusOptions = ['Any', 'Alive', 'Dead', 'Unknown'];

export const DropdownList = () => {
  const [status, setStatus] = useState<string>('Any');

  function handleOnClick(e: any) {
    setStatus(e.target.textContent);
  }

  return (
    <DropdownButton
      variant="outline-secondary"
      title={status}
      id="input-group-dropdown-1"
    >
      {statusOptions.map((option, i) => (
        <Dropdown.Item key={i} onClick={(e) => handleOnClick(e)}>
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
