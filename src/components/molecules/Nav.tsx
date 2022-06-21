import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../ricklogo.svg';

export const Nav = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="50"
          height="50"
          className="ms-5"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      Rick and Morty
    </Navbar>
  );
};
