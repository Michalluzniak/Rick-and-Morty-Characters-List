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
    <Navbar sticky="top" bg="dark" variant="dark" className="navbar">
      <Container
        fluid="xxl"
        className="d-flex flex-column flex-lg-row navbar__container"
      >
        <Navbar.Brand className="">
          <a
            href="#id"
            className="text-decoration-none text-light d-flex flex-column flex-lg-row align-items-center  navbar__anchor "
          >
            <img
              src={logo}
              className="ms-0  me-0 me-lg-4  mb-3 my-lg-0 w-50 navbar__logo"
              alt="React Bootstrap logo"
            />
            <p className="navbar__paragraph m-0">
              {' '}
              Rick and Morty Characters List
            </p>
          </a>
        </Navbar.Brand>
        <SearchbarInput className="col-10 col-md-6 col-lg-3 me-0  my-4 my-lg-0 navbar__input" />
      </Container>
    </Navbar>
  );
};
