import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { atomsProps } from './types/types';

export const SearchBarContainer = (props: atomsProps) => {
  return <InputGroup className="mb-3">{props.children}</InputGroup>;
};
