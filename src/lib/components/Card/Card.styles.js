import styled from 'styled-components';
import { documentColors } from '../../shared/colors';

export const CardWrapper = styled.div`
  width: ${({ width }) => width};
  background: ${documentColors.white};
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.25);
  }
  /* &:active {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);
  } */
`;
