import styled from 'styled-components/macro';
import {colors, device} from '../../../_variables';

export const CustomButton = styled.button`
  background-color: ${({bgColor}) => bgColor || colors.aprofundeSeOrange};
  border: unset;
  padding: .75rem;
  color: white;
  transition: .3s;
  width: ${({width}) => width || null};

  &:hover {
    opacity: .7;
  }
  
  @media ${device.mobileL} {
    width: 100%;
  }
`;
