import React, { useContext } from 'react';
import { SearchBarContainer } from '../atoms/SearchBarContainer';
import FormControl from 'react-bootstrap/FormControl';
import { ButtonSearch } from '../atoms/Button';
import { DropdownList } from '../atoms/DropdownList';
import { PropsContext } from '../templates/ApiUpdate';
import useCharacterSearch from './components/templates/CharacterSearch';

export const SearchbarInput = () => {
  const { setName } = useContext<any>(PropsContext);

  const handleOnchange = (e: any) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <SearchBarContainer className="col-3 me-5">
      <DropdownList />
      <FormControl onChange={handleOnchange} />
      <ButtonSearch variant="dark" className="border border-white ms-1">
        Search
      </ButtonSearch>
    </SearchBarContainer>
  );
};
