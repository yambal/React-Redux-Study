import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPlace, startSearch } from '../actions/';

const SearchForm = props => (
  <form onSubmit={(e) => {
    e.preventDefault();
    props.history.push(`/?place=${props.place}`);
    props.startSearch(props.place);
  }}
  >
    <input
      type="text"
      value={props.place}
      onChange={e => props.setPlace(e.target.value)}
    />
    <input type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  place: PropTypes.string.isRequired,
  startSearch: PropTypes.func.isRequired,
  setPlace: PropTypes.func.isRequired,
};

export default connect(state => ({
  place: state.place,
}), { setPlace, startSearch })(SearchForm);
