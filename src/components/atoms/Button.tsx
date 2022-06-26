//Bootstrap components
import Button from 'react-bootstrap/Button';
//Helpers
import { atomsProps } from '../helpers/types';

export const ButtonCircle = ({
  className,
  type,
  variant,
  children
}: atomsProps) => {
  return (
    <Button className={className} type={type} variant={variant}>
      {children}
    </Button>
  );
};
