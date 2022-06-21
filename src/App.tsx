import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import { SearchbarInput } from './components/molecules/SearchbarInput';
import { Nav } from './components/molecules/Nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <SearchbarInput />

      <Container
        fluid
        className="d-flex align-items-center flex-column"
      ></Container>
    </div>
  );
}

export default App;
