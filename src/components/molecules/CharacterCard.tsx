import React, { useContext, useRef, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { PropsContext } from '../templates/ApiUpdate';
import Badge from 'react-bootstrap/Badge';
import { statusColor } from '../helpers/statusColor';

export const CharacterCard = () => {
  const { characters, setPage, loading, setIsScrolling, isEnd } =
    useContext<any>(PropsContext);

  const observer: any = useRef();

  const lastElement = useCallback(
    (node: any) => {
      if (loading || isEnd) return;
      // console.log(node);
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsScrolling(true);
            // console.log('visible');

            setPage((prev: any) => prev + 1);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, setPage, setIsScrolling, isEnd]
  );

  return (
    <>
      {characters.map((character: any, i: number) => (
        <Col
          ref={characters.length === i + 1 ? lastElement : null}
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
