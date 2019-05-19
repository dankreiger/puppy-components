import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper } from './Card.styles';

const Card = ({ children, width }) => {
  return <CardWrapper width={width}>{children}</CardWrapper>;
};

Card.propTypes = {
  children: PropTypes.children,
  width: PropTypes.string
};

export default Card;
