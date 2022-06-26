import React from 'react';
//Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
//Molecules
import { SearchbarInput } from '../molecules/SearchbarInput';
//
import logo from '../../ricklogo.svg';

export const Nav = () => {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      className="row justify-content-md-between"
    >
      <Navbar.Brand className="col-2">
        <a href="#" className="text-decoration-none text-light">
          <img
            src={logo}
            width="50"
            height="50"
            className="ms-5 me-4 "
            alt="React Bootstrap logo"
          />
          Rick and Morty Characters List
        </a>
      </Navbar.Brand>
      <SearchbarInput className="col-2 me-5" />
    </Navbar>
  );
};
