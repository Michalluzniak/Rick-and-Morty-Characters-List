import { useContext } from 'react';
//Bootstrap components
import Spinner from 'react-bootstrap/Spinner';
//Context
import { PropsContext } from '../templates/ApiUpdate';
// Helpers
import { IsContextTypes } from '../helpers/interfaces';

export const LoadingCircle = () => {
  const { loading, page } = useContext<IsContextTypes>(PropsContext);

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
