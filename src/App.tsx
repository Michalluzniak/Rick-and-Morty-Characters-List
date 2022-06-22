import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import { SearchbarInput } from './components/molecules/SearchbarInput';
import { Nav } from './components/molecules/Nav';
import Row from 'react-bootstrap/Row';
import { ApiAxios } from './components/templates/ApiUpdate';
import { CharacterCard } from './components/molecules/CharacterCard';

function App() {
  return (
    <div className="App">
      <ApiAxios>
        <Nav>
          <SearchbarInput />
        </Nav>

        <Container fluid="xl">
          <Row className="mt-5 p-5 justify-content-center">
            <CharacterCard />
          </Row>
        </Container>
      </ApiAxios>
    </div>
  );
}

export default App;
