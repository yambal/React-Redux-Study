import queryString from 'query-string';
import { combineReducers } from 'redux';

const getPlaceParam = () => {
  const params = queryString.parse(location.search);
  const place = params.place;
  if (place && place.length > 0) {
    return place;
  }
  return null;
};

const place = (state = getPlaceParam() || '京都タワー', action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return action.place;
    default:
      return state;
  }
};

const geocodeResult = (
  state = {
    address: '日本、〒600-8216 京都府京都市下京区東塩小路町７２１−１',
    location: {
      lat: 34.9875441,
      lng: 135.7592164,
    },
  },
  action,
) => {
  switch (action.type) {
    case 'GEOCODE_FETCHE':
      return {
        address: action.address,
        location: action.location,
      };
    case 'CHANGE_ERROR_MESSAGE':
      return {
        address: action.message,
        location: {
          lat: 0,
          lng: 0,
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  place,
  geocodeResult,
});
