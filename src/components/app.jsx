import axios from 'axios';
import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
const GOOGLE_MAP_APIKEY = 'AIzaSyCINYzcjOFN4ChmBlhWaWOsKwkA4UQeHn4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lat: 0,
      lng: 0,
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      lat: 0,
      lng: 0,
    });
  }

  handlePlaceSubmit(place) {
    axios
      .get(GEOCODE_ENDPOINT, {
        params: {
          key: GOOGLE_MAP_APIKEY,
          address: place,
        },
      })
      .then((results) => {
        const data = results.data;
        const result = data.results[0];
        switch (data.status) {
          case 'OK': {
            const location = result.geometry.location;
            this.setState({
              address: result.formatted_address,
              lat: location.lat,
              lng: location.lng,
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
        // console.log(error);
        this.setErrorMessage('通信に失敗しました');
      });
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
    );
  }
}

export default App;
