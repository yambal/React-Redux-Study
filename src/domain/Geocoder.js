import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
const GOOGLE_MAP_APIKEY = 'AIzaSyCINYzcjOFN4ChmBlhWaWOsKwkA4UQeHn4';

export const geocode = place =>
  axios
    .get(GEOCODE_ENDPOINT, {
      params: {
        key: GOOGLE_MAP_APIKEY,
        address: place,
      },
    })
    .then((results) => {
      const data = results.data;
      const status = data.status;
      const result = data.results[0];
      if (typeof result === 'undefined') {
        return { status };
      }

      const address = result.formatted_address;
      const location = result.geometry.location;
      return { status, address, location };
    });

export const staticMap = (location, width, height, zoom) => `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&size=${width}x${height}&zoom=${zoom}&key=${GOOGLE_MAP_APIKEY}`;
