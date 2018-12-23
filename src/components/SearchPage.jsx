import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import GeocodeResult from '../components/GeocodeResult';
import Map from '../components/Map';

import { startSearch } from '../actions/';

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(startSearch());
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm history={this.props.history} />
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
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  address: state.geocodeResult.address,
  location: state.geocodeResult.location,
});

const ConnectedSearchPage = connect(mapStateToProps)(SearchPage);

export default ConnectedSearchPage;
