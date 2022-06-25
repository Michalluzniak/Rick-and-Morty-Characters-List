import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { PropsContext } from '../templates/ApiUpdate';
import Badge from 'react-bootstrap/Badge';
import { statusColor } from '../helpers/statusColor';
import useInfinityScroll from '../helpers/useInfinityScroll';

export const CharacterCard = () => {
  const { characters } = useContext<any>(PropsContext);

  const [observer] = useInfinityScroll();

  return (
    <>
      {characters.map((character: any, i: number) => (
        <Col
          ref={characters.length === i + 1 ? observer : null}
          key={character.id}
          xxl={3}
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={12}
        >
          <Card bg="dark" text="light" className="mt-3 text-center">
            <Card.Img src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
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
