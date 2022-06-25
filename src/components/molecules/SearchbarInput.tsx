import React, { useContext } from 'react';
import { SearchBarContainer } from '../atoms/SearchBarContainer';
import FormControl from 'react-bootstrap/FormControl';
import { DropdownList } from '../atoms/DropdownList';
import { PropsContext } from '../templates/ApiUpdate';

export const SearchbarInput = () => {
  const { setName, setPage, setCharacters } = useContext<any>(PropsContext);

  const handleOnchange = (e: any) => {
    console.log(e.target.value);
    setCharacters([]);
    setName(e.target.value);
    setPage(1);
  };

  return (
    <SearchBarContainer className="col-2 me-5">
      <DropdownList />
      <FormControl onChange={handleOnchange} />
    </SearchBarContainer>
  );
};
