import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { PropsContext } from '../../ApiUpdate';

export const CharacterCard = () => {
  const { setPage, setName, setStatus, characters } =
    useContext<any>(PropsContext);

  console.log(characters);

  return (
    <>
      {characters.map((character: any, i: number) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <Card.Title>{character.name} la la</Card.Title>
            <Card.Text>{character.status}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
