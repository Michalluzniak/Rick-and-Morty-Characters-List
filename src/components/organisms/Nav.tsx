//Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//Molecules
import { SearchbarInput } from '../molecules/SearchbarInput';
//
import logo from '../../ricklogo.svg';

export const Nav = () => {
  return (
    <Navbar
      sticky="top"
      bg="dark"
      variant="dark"
      className="mobile__menu navbar navbar"
      expand="lg"
    >
      <Container
        fluid="xxl"
        className="d-flex flex-row flex-lg-row position-relative "
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="border-0 col-12 col-1-lg"
        >
          <img src={logo} className="" alt="React Bootstrap logo" />
        </Navbar.Toggle>

        <Navbar.Brand className="m-0 me-lg-3 d-none d-lg-block">
          <a href="#idx">
            <img src={logo} alt="React Bootstrap logo" />
          </a>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav d-flex flex-column  flex-lg-row navbar__container navbar-expand-lg">
          <Navbar.Brand className="d-flex flex-column flex-lg-row justify-content-between w-100 m-0 align-items-center">
            <a href="#id" className="text-decoration-none text-light ">
              Rick and Morty Characters List
            </a>
            <SearchbarInput
              placeholder="Search.."
              className="col-10 col-md-6 col-lg-3 me-0  my-4 my-lg-0 navbar__input"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
