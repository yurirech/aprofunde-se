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
    font-weight: bold;
  }

  p {
    line-height: 30px;
    font-size: .85rem;
  }
  
`;

export const ImageWrapper = styled.div`
    height: 425px;
    width: 370px;
    box-shadow: -14px 14px 0px 3px rgba(24,24,24,1);  
`;

export const Image = styled.div`
     background-image: ${props => `url(${props.bg})`};
     background-position: center;
     background-size: cover;
     height: 100%;
     width: 100%;
`;