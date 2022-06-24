import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { atomsProps } from './types/types';
import { PropsContext } from '../templates/ApiUpdate';
import Spinner from 'react-bootstrap/Spinner';
import { ButtonCircle } from '../atoms/Button';
export const RowElement = ({ children }: atomsProps) => {
  const { loading, isEnd } = useContext<any>(PropsContext);

  return (
    <>
      <Row className="mt-5 p-5 justify-content-center  ">{children}</Row>

      {loading && (
        <div className="my-5  d-flex justify-content-center ">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {isEnd && (
        <div className="mt-5 p-5 text-center">
          <h2 className="text-uppercase">You reach the end</h2>{' '}
          <ButtonCircle variant="dark" className="rounded m-3 ">
            <i className="bi bi-caret-up-fill h5" />
          </ButtonCircle>
        </div>
      )}
    </>
  );
};

// isEmpty
// ? 'position-absolute top-50 start-50'
