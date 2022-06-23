import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import { SearchbarInput } from './components/molecules/SearchbarInput';
import { Nav } from './components/organisms/Nav';
import { ApiAxios } from './components/templates/ApiUpdate';
import { CharacterCard } from './components/molecules/CharacterCard';
import { RowElement } from './components/atoms/RowElement';

function App() {
  return (
    <div className="App">
      <ApiAxios>
        <Nav />
        <Container fluid="xl">
          <RowElement>
            <CharacterCard />
          </RowElement>
        </Container>
      </ApiAxios>
    </div>
  );
}

export default App;
