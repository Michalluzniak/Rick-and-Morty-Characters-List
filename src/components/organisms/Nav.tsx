import React from 'react';
//Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//Molecules
import { SearchbarInput } from '../molecules/SearchbarInput';
//
import logo from '../../ricklogo.svg';

export const Nav = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container fluid="xxl" className="d-flex flex-column flex-lg-row">
        <Navbar.Brand className="">
          <a
            href="#id"
            className="text-decoration-none text-light d-flex flex-column flex-lg-row align-items-center "
          >
            <img
              src={logo}
              className="ms-0  me-0 me-lg-4  mb-3 my-lg-0 w-50"
              alt="React Bootstrap logo"
            />
            Rick and Morty Characters List
          </a>
        </Navbar.Brand>
        <SearchbarInput className="col-10 col-md-6 col-lg-3 me-0  my-4 my-lg-0" />
      </Container>
    </Navbar>
  );
};
