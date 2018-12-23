import React from 'react';
import PropTypes from 'prop-types';

import { staticMap } from '../domain/Geocoder';

const Map = ({ location, width, height, zoom }) => (
  <img
    className="map"
    src={staticMap(location, width, height, zoom)}
    alt="map"
  />
);

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  width: 400,
  height: 400,
  zoom: 18,
};

export default Map;
