import React from 'react';

const Search = ({ onChange, onSubmit, onRandomClick, isSubmitDisabled }) => {
  return (
    <div>
      <div className="rounded-md shadow-sm max-w-[20%]">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for:"
          onChange={event => {
            onChange(event.target.value);
          }}
          className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 
          rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <button
        //{!isSubmitDisabled ? 'className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-offset focus:ring-opacity-20"' : }
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:focus:outline-none focus:ring focus:ring-offset focus:ring-opacity-20"
        onClick={onSubmit}
        disabled={isSubmitDisabled}
      >
        Search
      </button>
      <button
        className="ml-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none 
        focus:ring focus:ring-offset focus:ring-opacity-20"
        onClick={onRandomClick}
      >
        Random
      </button>
    </div>
  );
};

export default Search;
