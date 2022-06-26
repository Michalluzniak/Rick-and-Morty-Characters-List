import React, { useState, useEffect } from 'react';
//Axios
import axios from 'axios';
//Helpers
import { IsContextTypes } from '../helpers/interfaces';
import { IsCharacter } from '../helpers/interfaces';

interface IsApiData {
  children?: React.ReactNode;
}

export const PropsContext = React.createContext<IsContextTypes>({});

export function ApiData({ children }: IsApiData) {
  //API STATES for every component
  const [characters, setCharacters] = useState<IsCharacter[]>([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  // const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    let cancel: any;
    setLoading(true);

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
        // When scrolling only
        if (page !== 1) {
          setCharacters((prevResult) => [...prevResult, ...res.data.results]);
          setLoading(false);
        } // Default
        else {
          setCharacters(res.data.results);
          setLoading(false);
          //If next page doesn't exist
          setIsEnd(!res.data.info.next);
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) return console.log(err);
      });

    return () => {
      //Cancel multiple requests
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
