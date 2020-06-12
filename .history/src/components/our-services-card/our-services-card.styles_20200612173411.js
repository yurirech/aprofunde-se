import styled from 'styled-components';
import { FlexContainer } from '../../_styles';
import {devices} from '../../_variables';

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

  @media screen {
    
  }
`;

export const FlexContainerExtended = styled(FlexContainer)`
  /* min-width: 19rem; */
`;

