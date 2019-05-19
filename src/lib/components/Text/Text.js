import React from 'react';
import PropTypes from 'prop-types';
import { textStyles } from './Text.styles';

const Text = ({ customColor, tag, text, theme }) => {
  /* html tag defined dynamically */
  const Tag = `${tag}`;

  let styles = textStyles[theme];
  if (customColor) {
    styles = { ...styles, color: customColor };
  }

  return <Tag style={styles}>{text}</Tag>;
};

Text.propTypes = {
  /** Custom color for Text */
  customColor: PropTypes.string,
  /** HTML tag for Text */
  tag: PropTypes.string,
  /** Text content for Text */
  text: PropTypes.string,
  /** Theme for Text */
  theme: PropTypes.oneOf(['bodyNormal', 'bodySmall', 'topbar'])
};

Text.defaultProps = {
  tag: 'p',
  theme: 'bodyNormal'
};

export default Text;
