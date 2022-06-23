import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { atomsProps } from './types/types';
import { PropsContext } from '../templates/ApiUpdate';
import Spinner from 'react-bootstrap/Spinner';

export const RowElement = ({ children }: atomsProps) => {
  const { loading, characters, isEmpty, isEnd } = useContext<any>(PropsContext);

  return (
    <>
      <Row className="mt-5 p-5 justify-content-center  ">{children}</Row>
      {isEnd && <h2 className="mt-5 p-5 text-center">You reach the end</h2>}

      {loading && (
        <div
          className={
            isEmpty
              ? 'position-absolute top-50 start-50'
              : 'my-5  d-flex justify-content-center '
          }
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};
