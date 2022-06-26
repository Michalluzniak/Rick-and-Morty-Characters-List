import './App.css';
//Bootstrap components
import Container from 'react-bootstrap/Container';
//Organisms
import { Nav } from './components/organisms/Nav';
import { CharactersBlock } from './components/organisms/CharactersBlock';
//
import { ApiData } from './components/templates/ApiUpdate';

function App() {
  return (
    <div className="App">
      <ApiData>
        <Nav />
        <Container fluid="xxl">
          <CharactersBlock />
        </Container>
      </ApiData>
    </div>
  );
}

export default App;
// className="mt-5"
