import React from 'react';

const Search = ({ onChange, onSubmit, onRandomClick }) => {
  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Buscar por:"
        onChange={event => {
          onChange(event.target.value);
        }}
      />
      <button onClick={onSubmit}>Search</button>
      <button onClick={onRandomClick}>Random</button>
    </div>
  );
};

export default Search;
