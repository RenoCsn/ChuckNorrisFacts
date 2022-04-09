import React from 'react';

const List = ({ data }) => {
  return (
    <>
      <h2>Results: </h2>
      <ul>
        {data.map(({ id, value }) => {
          return <li key={id}>{value}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
