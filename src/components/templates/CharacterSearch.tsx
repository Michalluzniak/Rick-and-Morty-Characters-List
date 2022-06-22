import React, { useContext, useEffect, useState } from 'react';

export default function useCharacterSearch() {
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
}
