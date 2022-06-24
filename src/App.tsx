import './App.css';

import Container from 'react-bootstrap/Container';
import { Nav } from './components/organisms/Nav';
import { ApiAxios } from './components/templates/ApiUpdate';

import { CharactersBlock } from './components/organisms/CharactersBlock';

function App() {
  return (
    <div className="App">
      <ApiAxios>
        <Nav />
        <Container fluid="xl">
          <CharactersBlock />
        </Container>
      </ApiAxios>
    </div>
  );
}

export default App;
