import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { atomsProps } from './types/types';

export const ButtonSearch = (props: atomsProps) => {
  return (
    <Button type={props.type} variant={props.variant}>
      {props.children}
    </Button>
  );
};
