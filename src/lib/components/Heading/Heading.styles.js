import { typographyColors } from '../../shared/colors';

const baseStyles = {
  color: typographyColors.black,
  lineHeight: '150%',
  margin: 0,
  fontWeight: 'inherit'
};

export const headingStyles = {
  h1: {
    ...baseStyles,
    fontFamily: 'Playfair Display',
    fontSize: '48px'
  },
  h2: {
    ...baseStyles,
    fontFamily: 'Montserrat',
    fontSize: '24px'
  },
  h3: {
    ...baseStyles,
    fontFamily: 'Montserrat',
    fontSize: '16px'
  }
};
