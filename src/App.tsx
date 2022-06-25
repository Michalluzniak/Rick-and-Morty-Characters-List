import './App.css';

import Container from 'react-bootstrap/Container';
import { Nav } from './components/organisms/Nav';
import { ApiData } from './components/templates/ApiUpdate';

import { CharactersBlock } from './components/organisms/CharactersBlock';
import { LoadingCircle } from './components/atoms/LoadingCircle';
import { IsEndMessage } from './components/atoms/IsEndMessage';

function App() {
  return (
    <div className="App">
      <ApiData>
        <Nav />
        <Container fluid="xl">
          <CharactersBlock />
          <LoadingCircle />
          <IsEndMessage />
        </Container>
      </ApiData>
    </div>
  );
}

export default App;
