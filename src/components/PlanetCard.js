import React from 'react';
import PropTypes from 'prop-types';

const PlanetCard = (props) => {
  const { planetImage, planetName } = props;
  return (
    <div data-testid="planet-card">
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      <p data-testid="planet-name ">{planetName}</p>
    </div>
  );
};
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
