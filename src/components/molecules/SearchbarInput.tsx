import React from 'react';
import { SearchBarContainer } from '../atoms/SearchBarContainer';
import FormControl from 'react-bootstrap/FormControl';
import { ButtonSearch } from '../atoms/Button';
import { DropdownList } from '../atoms/DropdownList';

export const SearchbarInput = () => {
  return (
    <SearchBarContainer className="col-3 me-5">
      <DropdownList variant="primary" />
      <FormControl aria-label="Text input with dropdown button" />
      <ButtonSearch variant="dark" className="border border-white ms-1">
        Search
      </ButtonSearch>
    </SearchBarContainer>
  );
};
