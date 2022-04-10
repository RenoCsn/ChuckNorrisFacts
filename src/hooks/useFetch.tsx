import React, { useState, useEffect } from 'react';

const formatter = data => {
  return data.result.map(item => {
    return { id: item.id, value: item.value };
  });
};

const DEFAULT_RESPONSE = {
  data: [],
  query: '',
  status: '',
};

function useFetch() {
  const [response, setResponse] = useState(DEFAULT_RESPONSE);

  async function getData(query?: string) {
    const fetchQueryUrl = `https://api.chucknorris.io/jokes/search?query=${query}`;
    const fetchRandomUrl = 'https://api.chucknorris.io/jokes/random';

    const dataFetch = await fetch(query ? fetchQueryUrl : fetchRandomUrl).then(
      response => response.json(),
    );
    const data = query
      ? formatter(dataFetch)
      : [{ id: dataFetch.id, value: dataFetch.value }];

    setResponse({
      data,
      query: query || '',
      status: query ? (dataFetch.total === 0 ? 'empty' : 'resolved') : 'random',
    });
  }

  return { response, getData };
}

export default useFetch;
