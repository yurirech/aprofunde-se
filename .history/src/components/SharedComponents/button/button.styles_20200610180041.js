import styled from 'styled-components';
import { colors } from '../../../_variables';

export const CustomButton = styled.button`
  background-color: ${({bgColor}) => bgColor || colors.aprofundeSeOrange};
  border: unset;
  padding: .75rem;
  color: white;
  transition: .3s;

  &:hover {
    opacity: .7;
    transition: ''
  }
`;
