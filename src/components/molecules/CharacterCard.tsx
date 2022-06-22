import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { PropsContext } from '../templates/ApiUpdate';

export const CharacterCard = () => {
  const { characters } = useContext<any>(PropsContext);

  console.log(characters);

  return (
    <>
      {characters.map((character: any, i: number) => (
        <Col xxl={3} xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card bg="dark" className="mt-3">
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>{character.status}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};
