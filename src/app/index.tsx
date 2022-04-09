import React, { useState } from 'react';

import List from '../components/List';
import Search from '../components/Search';

const formatter = data => {
  return data.result.map(item => {
    return { id: item.id, value: item.value };
  });
};

async function getData(setResponse: any, query?: string) {
  const fetchQueryUrl = `https://api.chucknorris.io/jokes/search?query=${query}`;
  const fetchRandomUrl = 'https://api.chucknorris.io/jokes/random';

  const dataFetch = await fetch(query ? fetchQueryUrl : fetchRandomUrl).then(
    response => response.json(),
  );
  const response = query
    ? formatter(dataFetch)
    : [{ id: dataFetch.id, value: dataFetch.value }];
  setResponse(response);
}

export function App() {
  const [response, setResponse] = useState([]);
  const [text, setText] = useState('');
  return (
    <div>
      <Search
        onChange={setText}
        onSubmit={() => getData(setResponse, text)}
        onRandomClick={() => getData(setResponse)}
      />
      <List data={response} />
    </div>
  );
}
