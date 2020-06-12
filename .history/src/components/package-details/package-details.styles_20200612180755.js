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

  h1 {
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
    box-shadow: -14px 14px 4px 3px #6e6e6e3d;
      /* maybe #8364dd3d */
`;