//Atoms
import { RowElement } from '../atoms/RowElement';
//Molecules
import { CharacterCard } from '../molecules/CharacterCard';

export const CharactersBlock = () => {
  return (
    <RowElement>
      <CharacterCard />
    </RowElement>
  );
};
