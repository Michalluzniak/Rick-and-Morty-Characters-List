import Row from 'react-bootstrap/Row';
import { atomsProps } from './types/types';

export const RowElement = ({ children }: atomsProps) => {
  return <Row className="mt-5 p-5 justify-content-center">{children}</Row>;
};
