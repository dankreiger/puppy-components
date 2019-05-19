import React from 'react';
import PropTypes from 'prop-types';
import { headingStyles } from './Heading.styles';

const Heading = ({ tag, text }) => {
  /* html tag defined dynamically for SEO */
  const HeadingTag = `${tag}`;

  return <HeadingTag style={headingStyles[tag]}>{text}</HeadingTag>;
};

Heading.propTypes = {
  /** HTML heading tag for Heading */
  tag: PropTypes.string,
  /** Text for Heading */
  text: PropTypes.string
};

Heading.defaultProps = {
  tag: 'h1'
};

export default Heading;
