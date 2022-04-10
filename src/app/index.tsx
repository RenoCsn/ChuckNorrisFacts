import React, { useState } from 'react';

import List from '../components/List';
import Search from '../components/Search';

import useFetch from '../hooks/useFetch';

export function App() {
  const { response, getData } = useFetch();
  const [text, setText] = useState('');
  return (
    <div className="p-5 mx-auto rounded-lg bg-gray-100 max-w-[90%] shadow-md ">
      <div className="">
        <h2 className="">Welcome to Chuck Norris Facts!</h2>
      </div>
      <div className="">
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
    </div>
  );
}
