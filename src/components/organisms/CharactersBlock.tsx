import React from 'react';
import { RowElement } from '../atoms/RowElement';
import { CharacterCard } from '../molecules/CharacterCard';

export const CharactersBlock = () => {
  return (
    <RowElement>
      <CharacterCard />
    </RowElement>
  );
};
