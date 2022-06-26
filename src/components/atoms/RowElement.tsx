//Bootstrap components
import Row from 'react-bootstrap/Row';
//Helpers
import { atomsProps } from '../helpers/types';

export const RowElement = ({ children }: atomsProps) => {
  return <Row className="mt-5 p-5 justify-content-center">{children}</Row>;
};
