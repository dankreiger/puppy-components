import { typographyColors } from '../../shared/colors';

const baseStyles = {
  color: typographyColors.darkGray,
  fontFamily: 'Open Sans',
  margin: 0
};

export const textStyles = {
  bodyNormal: {
    ...baseStyles,
    fontSize: '16px',
    lineHeight: '150%'
  },
  bodySmall: {
    ...baseStyles,
    fontSize: '12px',
    lineHeight: '200%'
  },
  topbar: {
    ...baseStyles,
    color: typographyColors.black,
    fontFamily: 'Montserrat',
    fontSize: '15px',
    lineHeight: '240%'
  }
};
