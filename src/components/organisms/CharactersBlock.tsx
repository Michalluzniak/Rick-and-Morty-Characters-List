//Atoms
import { RowElement } from '../atoms/RowElement';
import { LoadingCircle } from '../atoms/LoadingCircle';
import { IsEndMessage } from '../atoms/IsEndMessage';
//Molecules
import { CharacterCard } from '../molecules/CharacterCard';

export const CharactersBlock = () => {
  return (
    <>
      <RowElement>
        <CharacterCard />
      </RowElement>
      <LoadingCircle />
      <IsEndMessage />
    </>
  );
};
