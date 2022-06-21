import React from 'react';
import { SearchBarContainer } from '../atoms/SearchBarContainer';
import FormControl from 'react-bootstrap/FormControl';
import { ButtonSearch } from '../atoms/Button';
import { DropdownList } from '../atoms/DropdownList';

export const SearchbarInput = () => {
  return (
    <SearchBarContainer>
      <DropdownList />
      <FormControl aria-label="Text input with dropdown button" />
      <ButtonSearch>Search</ButtonSearch>
    </SearchBarContainer>
  );
};
