import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { atomsProps } from './types/types';

export const SearchBarContainer = ({ className, children }: atomsProps) => (
  <div className={className}>
    <InputGroup>{children}</InputGroup>
  </div>
);
