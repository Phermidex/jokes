import React from "react";

const SearchForm = props => {
  const onSubmit = event => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <select onChange={props.onlmChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="100">All</option>
      </select>
      <input
        type="text"
        placeholder="Enter search term..."
        onChange={event => props.onscChange(event.target.value)}
      />
      <button disabled={props.disabled}>
        <i className="fa fa-search" aria-hidden="true" />
      </button>

      <button onClick={props.onTelljoke} disabled={props.disabled}>
        Tell me a joke
      </button>
    </form>
  );
};

export default SearchForm;
