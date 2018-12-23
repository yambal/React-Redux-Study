import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import GeocodeResult from '../components/GeocodeResult';
import Map from '../components/Map';

class SearchPage extends Component {
  getPlaceParam() {
    const params = queryString.parse(this.props.location.search);
    const place = params.place;
    if (place && place.length > 0) {
      return place;
    }
    return null;
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm />
        <GeocodeResult
          address={this.props.address}
          location={this.props.location}
        />
        <Map
          location={this.props.location}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  address: PropTypes.string.isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
};

const mapStateToProps = state => ({
  address: state.geocodeResult.address,
  location: state.geocodeResult.location,
});

const ConnectedSearchPage = connect(mapStateToProps)(SearchPage);

export default ConnectedSearchPage;

// props.history.push(`/?place=${this.state.place}`);
