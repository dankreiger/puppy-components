import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ onClick, disabled, className, text, theme, size, type }) => (
  <StyledButton
    type={type}
    className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
    size={size}
    theme={theme}
  >
    {text}
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  /** Disable the button */
  disabled: PropTypes.bool,
  /** Size of the button */
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  /** Text of the button */
  text: PropTypes.string,
  /** Theme of the button */
  theme: PropTypes.oneOf(['light', 'dark']),
  /** Button Type */
  type: PropTypes.oneOf(['submit', 'reset', 'button'])
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  size: 'big',
  theme: 'dark',
  type: 'button'
};

export default Button;
