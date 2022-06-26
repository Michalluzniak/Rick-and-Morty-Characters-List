import './App.css';

import Container from 'react-bootstrap/Container';
import { Nav } from './components/organisms/Nav';
import { ApiData } from './components/templates/ApiUpdate';

import { CharactersBlock } from './components/organisms/CharactersBlock';

function App() {
  return (
    <div className="App">
      <ApiData>
        <Nav />
        <Container fluid="xl">
          <CharactersBlock />
        </Container>
      </ApiData>
    </div>
  );
}

export default App;
