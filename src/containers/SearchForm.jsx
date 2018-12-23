import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
});

const SearchForm = props => (
  <form onSubmit={e => props.onSubmit(e)}>
    <input
      type="text"
      value={props.place}
      onChange={e => props.onPlaceChange(e.target.value)}
    />
    <input type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
};

const ConnectedSearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default ConnectedSearchForm;
