import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

type ButtonProps = {
  color: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: string | React.ReactNode;
};

export const ButtonSearch = (props: ButtonProps) => {
  return (
    <Button type={props.type} variant={props.color}>
      {props.children}
    </Button>
  );
};
