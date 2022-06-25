import { useContext } from 'react';

import { PropsContext } from '../templates/ApiUpdate';
import Spinner from 'react-bootstrap/Spinner';

interface LoadingTypes {
  loading?: boolean | null;
  page?: number;
}

export const LoadingCircle = () => {
  const { loading, page } = useContext<LoadingTypes>(PropsContext);

  return loading ? (
    <div
      className={
        page === 1
          ? 'position-absolute top-50 start-50 translate-middle'
          : 'my-5  d-flex justify-content-center '
      }
    >
      <Spinner
        animation="border"
        variant="primary"
        role="status"
        className="p-5"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : null;
};