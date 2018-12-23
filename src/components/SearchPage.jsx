import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import SearchForm from '../containers/SearchForm';
import { geocode } from '../domain/Geocoder';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35,
        lng: 135,
      },
    };
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

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm
          onSubmit={e => this.handlePlaceSubmit(e)}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
};

export default SearchPage;
