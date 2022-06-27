import { useContext } from 'react';
//Bootstrap components
import FormControl from 'react-bootstrap/FormControl';
//Atoms
import { SearchBarContainer } from '../atoms/SearchBarContainer';
import { DropdownList } from './DropdownList';
//Context
import { PropsContext } from '../templates/ApiUpdate';

export const SearchbarInput = (props: {
  className: string;
  placeholder: string;
}) => {
  const { setName, setPage, setCharacters } = useContext<any>(PropsContext);

  const handleOnchange = (e: any) => {
    console.log(e.target.value);
    setCharacters([]);
    setName(e.target.value);
    setPage(1);
  };

  return (
    <SearchBarContainer className={props.className}>
      <DropdownList />
      <FormControl placeholder={props.placeholder} onChange={handleOnchange} />
    </SearchBarContainer>
  );
};
