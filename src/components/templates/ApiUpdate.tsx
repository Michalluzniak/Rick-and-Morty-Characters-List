import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiObj {
  image: string;
  id: number;
}
interface ApiProps {
  children: React.ReactNode;
}

export const PropsContext = React.createContext({});

export function ApiAxios({ children }: ApiProps) {
  //API STATES for every component
  const [characters, setCharacters] = useState<ApiObj[]>([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  // const [isScrolling, setIsScrolling] = useState(false);

  // useCharacterSearch({ page, name, status, setCharacters, setLoading });

  // https://deelay.me/2000/

  useEffect(() => {
    let cancel: any;
    setLoading(true);
    axios
      .get(
        ' https://deelay.me/2000/https://rickandmortyapi.com/api/character/',
        {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
          params: {
            page: page,
            name: name,
            status: status
          }
        }
      )
      .then((res) => {
        if (isScrolling) {
          setCharacters((prevResult) => [...prevResult, ...res.data.results]);
          setLoading(false);
          setIsEmpty(false);
        } else {
          setCharacters(res.data.results);
          window.scrollTo(0, 0);
          setLoading(false);
          // console.log(res.data);
          setIsEmpty(false);
          setIsEnd(false);
        }
      })
      .catch((err) => {
        setIsEnd(true);
        setLoading(false);
        if (axios.isCancel(err)) return console.log(err);
      });

    return () => {
      cancel();
    };
  }, [name, page, status]);

  return (
    <PropsContext.Provider
      value={{
        setName,
        setPage,
        setStatus,
        characters,
        loading,
        setIsScrolling,
        isEmpty,
        isEnd
      }}
    >
      {children}
    </PropsContext.Provider>
  );
}
