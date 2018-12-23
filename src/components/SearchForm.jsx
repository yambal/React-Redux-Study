import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => (
  <form onSubmit={e => props.onSubmit(e)}>
    <input
      type="text"
      value={props.place}
      onChange={e => props.onPlaceChange(e)}
    />
    <input type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
};

export default SearchForm;
