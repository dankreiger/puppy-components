import styled from 'styled-components';
import { documentColors } from '../../shared/colors';

const minWidths = {
  small: '90px',
  medium: '160px',
  big: '220px'
};

/**
 * @param {'small'|'medium'|'big'} size
 * @returns button style css
 */
const buttonSizeStyle = size => {
  const { small, medium, big } = minWidths;
  switch (size) {
    case 'small':
      return `
        min-width: ${small};
        font-size: 12px;
        padding: 5px 10px 7px;
      `;
    case 'medium':
      return `
      padding: 12px;
        min-width: ${medium};
        `;
    default:
      return `
        min-width: ${big};
      `;
  }
};

/**
 * @param {'light'|'dark'} theme
 * @returns button style css
 */
const buttonThemeStyle = theme => {
  switch (theme) {
    case 'light':
      return `
        color: ${documentColors.lightRed};
        background-color: ${documentColors.white};
        &:after {
          background: ${documentColors.lightRed};
        }
      `;
    default:
      return `
        color: ${documentColors.white};
        background-color: ${documentColors.lightRed};
        &:after {
          background: ${documentColors.white};
        }
      `;
  }
};

export const StyledButton = styled.button`
  font-family: 'Montserrat';
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  padding: 20px;
  border: none;
  position: relative;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${({ size }) => buttonSizeStyle(size)}
  ${({ theme }) => buttonThemeStyle(theme)}

  &:focus {
    outline: none;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;
