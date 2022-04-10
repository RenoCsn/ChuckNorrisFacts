import React, { useState } from 'react';

import List from '../components/List';
import Search from '../components/Search';

import useFetch from '../hooks/useFetch';

export function App() {
  const { response, getData } = useFetch();
  const [text, setText] = useState('');
  return (
    <div>
      <Search
        onChange={setText}
        onSubmit={() => getData(text)}
        onRandomClick={() => getData()}
        isSubmitDisabled={!text}
      />
      <List
        data={response.data}
        text={response.query}
        status={response.status}
      />
    </div>
  );
}
