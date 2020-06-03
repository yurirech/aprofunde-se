import styled from 'styled-components';

import { FlexContainer } from '../../_styles';
import { colors } from '../../_variables';

export const FlexContainerExtended = styled(FlexContainer)`
  margin: 0 0 0 2rem;
  text-align: left;
  width: 45%;
  min-width: 25rem;
  color: ${colors.aprofundeSeBlackText};

  * {
    margin-top: .75rem;
    margin-bottom: .75rem;
  }

  h2 {
    color: ${colors.aprofundeSeOrange};
  }

  p {
    line-height: 30px;
    font-size: .85rem;
  }
  
`;

export const ImageWrapper = styled.div`
    height: 425px;
    width: 370px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    box-shadow: -14px 14px 0px 3px rgba(24,24,24,1);
   
  div {
     background-image: ${props => props.image};
     height: 100%;
   }
`;