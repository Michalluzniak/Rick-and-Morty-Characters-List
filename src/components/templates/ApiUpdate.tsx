import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiObj {
  image: string;
  id: number;
}
interface ApiProps {
  children?: React.ReactNode;
}

interface ContextTypes {
  setName?: any;
  setPage?: any;
  setStatus?: any;
  characters?: any;
  setCharacters?: any;
  loading?: any;
  // isEmpty,
  isEnd?: any;
  page?: any;
}

export const PropsContext = React.createContext<ContextTypes>({});

export function ApiData({ children }: ApiProps) {
  //API STATES for every component

  const [characters, setCharacters] = useState<ApiObj[]>([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  // const [isEmpty, setIsEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

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
        if (page !== 1) {
          setCharacters((prevResult) => [...prevResult, ...res.data.results]);
          console.log(res.data);
          setLoading(false);
        } else {
          setCharacters(res.data.results);
          console.log(res.data);

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
  }, [name, page, status]);

  return (
    <PropsContext.Provider
      value={{
        setName,
        setPage,
        setStatus,
        characters,
        setCharacters,
        loading,
        // isEmpty,
        isEnd,
        page
      }}
    >
      {children}
    </PropsContext.Provider>
  );
}
