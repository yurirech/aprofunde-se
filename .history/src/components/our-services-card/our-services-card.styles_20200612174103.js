import styled from 'styled-components';
import { FlexContainer } from '../../_styles';
import {device} from '../../_variables';

export const Content = styled.div`
  padding: 5%;
  text-align: left;
  width: 30%;
  min-width: 18rem;

  h6 {
    color: #666666;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  @media ${device.laptop} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 75%;
  }
`;

export const FlexContainerExtended = styled(FlexContainer)`
   @media ${device.tablet} {
    padding: 
  }
`;

