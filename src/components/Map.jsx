import React, { PropTypes } from 'react';

const GOOGLE_MAP_APIKEY = 'AIzaSyCINYzcjOFN4ChmBlhWaWOsKwkA4UQeHn4';

const Map = ({ lat, lng, width, height, zoom }) => (
  <img
    className="map"
    src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&size=${width}x${height}&zoom=${zoom}&key=${GOOGLE_MAP_APIKEY}`}
    alt="map"
  />
);

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  lat: 0,
  lng: 0,
  width: 400,
  height: 400,
  zoom: 18,
};

export default Map;
