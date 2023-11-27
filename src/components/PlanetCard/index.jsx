import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PlanetCard = (props) => {
  const { planetImage, planetName } = props;
  return (

    <figure className="planet__card">
      <img
        src={ planetImage }
        alt={ `Planeta ${planetName}` }
        className="planet__card-img"
      />
      <figcaption className="planet__card-text">{planetName}</figcaption>
    </figure>

  );
};
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
