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
  const [isScrolling, setIsScrolling] = useState(false);
  // const [isEmpty, setIsEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  // https://deelay.me/2000/

  useEffect(() => {
    let cancel: any;
    setLoading(true);
    console.log(characters, 'before call');

    axios
      .get(
        ' https://deelay.me/1000/https://rickandmortyapi.com/api/character/',
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
          console.log(res.data.results);
          setIsEnd(!res.data.info.next);
          console.log(characters, 'after call');

          setLoading(false);
        } else {
          setCharacters(res.data.results);
          // window.scrollTo(0, 0);
          console.log(res.data.results);
          setIsEnd(!res.data.info.next);

          setLoading(false);
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) return console.log(err);
      });

    return () => {
      cancel();
    };
  }, [name, page, status, isScrolling]);
  // console.log(loading);

  return (
    <PropsContext.Provider
      value={{
        setName,
        setPage,
        setStatus,
        characters,
        setCharacters,
        loading,
        setIsScrolling,
        // isEmpty,
        isEnd,
        page
      }}
    >
      {children}
    </PropsContext.Provider>
  );
}
