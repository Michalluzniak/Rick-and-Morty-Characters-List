import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Api {
  image: string;
  id: number;
}

type Params = {
  page: string;
  name: string;
  status: string;
};

export const PropsContext = React.createContext({});

export function ApiAxios({ children }: any) {
  const [characters, setCharacters] = useState<Api[]>([]);
  const [page, setPage] = useState('1');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function getResults() {
      const request = await axios.get(
        'https://rickandmortyapi.com/api/character/',
        {
          params: {
            page: '1',
            name: '',
            status: ''
          }
        }
      );
      setCharacters(request.data.results);
    }
    getResults();
  }, [page, name, status]);

  return (
    <PropsContext.Provider value={{ setPage, setName, setStatus, characters }}>
      {children}
    </PropsContext.Provider>
  );
}
