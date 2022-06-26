import { useContext } from 'react';
//Context
import { PropsContext } from '../templates/ApiUpdate';

export const IsEndMessage = () => {
  const { isEnd } = useContext<any>(PropsContext);

  return (
    isEnd && (
      <div className="mt-5 p-5 text-center">
        <h2 className="text-uppercase">You reach the end</h2>{' '}
      </div>
    )
  );
};
