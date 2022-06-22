import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ApiObj {
  image: string;
  id: number;
}

interface ApiProps {
  children: React.ReactNode;
}

export const PropsContext = React.createContext({});

export function ApiAxios({ children }: ApiProps) {
  const [characters, setCharacters] = useState<ApiObj[]>([]);
  const [page, setPage] = useState('1');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  // useEffect(() => {
  //   let cancel: any;
  //   async function getResults() {
  //     // const { signal } = cancel;
  //     try {
  //       const request = await axios.get(
  //         'https://rickandmortyapi.com/api/character/',
  //         {
  //           cancelToken: new axios.CancelToken((c) => (cancel = c)),
  //           params: {
  //             page: page,
  //             name: name,
  //             status: status
  //           }
  //         }
  //       );
  //       console.log(request.data);
  //     } catch (err) {
  //       return err === 'AbortError' ? 'dupa' : err;
  //     }

  //     // console.log(request.data.results);
  //     // setCharacters(request.data.results);
  //   }
  //   getResults();
  //   return () => {
  //     cancel();
  //   };
  // }, [name, page, status]);

  const useCharacterSearch = () => {
    useEffect(() => {
      let cancel: any;
      axios
        .get('https://rickandmortyapi.com/api/character/', {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
          params: {
            page: page,
            name: name,
            status: status
          }
        })
        .then((res) => {
          console.log(res.data);
        });
      // cancel();
    }, [name, page, status]);
  };

  return (
    <PropsContext.Provider value={{ setName, setPage, setStatus, characters }}>
      {children}
    </PropsContext.Provider>
  );
}
