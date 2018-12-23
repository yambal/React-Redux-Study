import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import SearchForm from './SearchForm';
// import GeocodeResult from './GeocodeResult';
// import Map from './Map';

import { geocode } from '../domain/Geocoder';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: this.getPlaceParam(),
      location: {
        lat: 35,
        lng: 135,
      },
    };
  }

  componentDidMount() {
    const place = this.getPlaceParam();
    if (place && place.length > 0) {
      this.startSearch();
    }
  }

  getPlaceParam() {
    const params = queryString.parse(this.props.location.search);
    const place = params.place;
    if (place && place.length > 0) {
      return place;
    }
    return null;
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 35,
        lng: 135,
      },
    });
  }

  handlePlaceSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/?place=${this.state.place}`);
    this.startSearch();
  }

  startSearch() {
    geocode(this.state.place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({
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
            this.setErrorMessage('結果が見つかりませんでした');
          }
        }
      })
      .catch((error) => {
        this.setErrorMessage(`通信に失敗しました：${JSON.stringify(error)}`);
      });
  }

  handlePlaceChange(e) {
    e.preventDefault();
    this.props.onPlaceChange(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm
          place={this.props.place}
          onSubmit={e => this.handlePlaceSubmit(e)}
          onPlaceChange={e => this.handlePlaceChange(e)}
        />
        {/*
        <GeocodeResult
          address={this.state.address}
          location={this.state.location}
        />
        <Map location={this.state.location} />
        */}
      </div>
    );
  }
}

SearchPage.propTypes = {
  place: PropTypes.string.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  onPlaceChange: PropTypes.func.isRequired,
};

export default SearchPage;
