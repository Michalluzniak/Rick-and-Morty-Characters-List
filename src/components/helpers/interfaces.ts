// import React from 'react';

import React from 'react';

export interface IsContextTypes {
  setName?: React.Dispatch<React.SetStateAction<string>>;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
  characters?: IsCharacter[];
  setCharacters?: React.Dispatch<React.SetStateAction<IsCharacter[]>>;
  loading?: boolean;
  isEmpty?: boolean;
  isEnd?: boolean;
  page?: number;
}

export interface IsCharacter {
  id: number;
  name: string;
  image: string;
  status: string;
}
