import React from 'react';

const List = ({ data = [], text = '', status = '' }) => {
  const isRandom = status === 'random';
  const isEmpty = status === 'empty';

  if (status === '') {
    return null;
  }

  if (isEmpty) {
    return <h2>No Results found for: {text} </h2>;
  }

  return (
    <>
      <h2 className="bg-black">Results for "{isRandom ? 'Random' : text}": </h2>
      <ul>
        {data.map(({ id, value }) => {
          return <li key={id}>{value}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
