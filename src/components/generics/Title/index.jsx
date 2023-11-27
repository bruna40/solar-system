import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Title = (props) => {
  const { headline } = props;
  return <h2 className="title__container">{headline}</h2>;
};

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
