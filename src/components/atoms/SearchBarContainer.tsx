//Bootstrap components
import InputGroup from 'react-bootstrap/InputGroup';
//Helpers
import { atomsProps } from '../helpers/types';

export const SearchBarContainer = ({ className, children }: atomsProps) => (
  <div className={className}>
    <InputGroup>{children}</InputGroup>
  </div>
);
