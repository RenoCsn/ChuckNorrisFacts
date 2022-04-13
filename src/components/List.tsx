import React from 'react';

const List = ({ data = [], text = '', status = '' }) => {
  const isRandom = status === 'random';
  const isEmpty = status === 'empty';

  if (status === '') {
    return null;
  }

  if (isEmpty) {
    return (
      <h2 className="my-5 text-xl font-semibold ">
        No Results found for: {text}{' '}
      </h2>
    );
  }

  return (
    <>
      <h2 className="my-5 text-xl font-semibold">
        Results for "{isRandom ? 'Random' : text}":{' '}
      </h2>
      <ul className="max-w-[80%] justify-items-center">
        {data.map(({ id, value }) => {
          return (
            <li
              className="my-2 py-2 px-5 border-gray-300 border-b rounded-md text-lg text-center  shadow "
              key={id}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
