import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { geocode } from '../domain/Geocoder';

const SearchForm = props => (
  <form onSubmit={(e) => {
    e.preventDefault();
    props.onSubmit(props.place);
  }}
  >
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

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
  onSubmit: (place) => {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            dispatch({
              type: 'GEOCODE_FETCHE',
              address,
              location,
            });
            break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりませんでした');
            break;
          }
          default: {
            // this.setErrorMessage('結果が見つかりませんでした');
          }
        }
      })
      .catch((error) => {
        this.setErrorMessage(`通信に失敗しました：${JSON.stringify(error)}`);
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
