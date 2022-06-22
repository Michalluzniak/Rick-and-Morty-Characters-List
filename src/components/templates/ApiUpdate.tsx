import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ApiObj {
  image: string;
  id: number;
}

interface ApiChild {
  children: React.ReactNode;
}

export const PropsContext = React.createContext({});

export function ApiAxios({ children }: ApiChild) {
  const [characters, setCharacters] = useState<ApiObj[]>([]);
  const [page, setPage] = useState('1');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function getResults() {
      const request = await axios.get(
        'https://rickandmortyapi.com/api/character/',
        {
          params: {
            page: page,
            name: name,
            status: status
          }
        }
      );
      setCharacters(request.data.results);
    }
    getResults();
  }, [name, page, status]);

  return (
    <PropsContext.Provider value={{ setName, setPage, setStatus, characters }}>
      {children}
    </PropsContext.Provider>
  );
}
