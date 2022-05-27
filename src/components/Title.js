import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  const { headline } = props;
  return <h2>{headline}</h2>;
};

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
