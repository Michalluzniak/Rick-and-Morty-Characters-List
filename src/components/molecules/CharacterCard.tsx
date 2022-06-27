import { useContext } from 'react';
//Bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
//Helpers
import { statusColor } from '../helpers/statusColor';
import useInfinityScroll from '../helpers/useInfinityScroll';
import { IsContextTypes } from '../helpers/interfaces';
//Context
import { PropsContext } from '../templates/ApiUpdate';

export const CharacterCard = () => {
  const { characters } = useContext<IsContextTypes>(PropsContext);
  const [observer] = useInfinityScroll();

  return (
    <>
      {characters?.map((character, i: number) => (
        <Col
          ref={characters.length === i + 1 ? observer : null}
          key={character.id}
          xxl={3}
          xl={3}
          lg={4}
          md={4}
          sm={6}
          xs={window.innerWidth > window.innerHeight ? 6 : 12}
          className="p-3 col__element"
        >
          <Card bg="dark" text="light" className="text-center character__card">
            <Card.Img src={character.image} />
            <Card.Body>
              <Card.Title className="responsive-text">
                {character.name}
              </Card.Title>
              <Badge bg={statusColor(character.status)} pill>
                {character.status}
              </Badge>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};
