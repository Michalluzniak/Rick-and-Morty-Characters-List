import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { atomsProps } from './types/types';

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
