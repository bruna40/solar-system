import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MissionCard = (props) => {
  const { name, year, country, destination } = props;
  return (
    <div data-testid="mission-card" className="mission__container-card">
      <h3 data-testid="mission-name">{name}</h3>
      <hr />
      <h4 data-testid="mission-year">{year}</h4>
      <h4 data-testid="mission-country">{country}</h4>
      <h4 data-testid="mission-destination">{destination}</h4>
    </div>
  );
};
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
