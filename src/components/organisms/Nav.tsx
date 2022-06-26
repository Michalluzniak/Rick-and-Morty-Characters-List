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
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container fluid="xxl" className="d-flex flex-column flex-lg-row">
        <Navbar.Brand className="none">
          <a href="#" className="text-decoration-none text-light">
            <img
              src={logo}
              width="50"
              height="50"
              className="ms-0 ms-lg-5 me-4 my-3 my-lg-0 "
              alt="React Bootstrap logo"
            />
            Rick and Morty Characters List
          </a>
        </Navbar.Brand>
        <SearchbarInput className="col-8 col-md-6 col-lg-3 me-0 me-lg-5 my-4 my-lg-0" />
      </Container>
    </Navbar>
  );
};
