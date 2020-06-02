import styled from 'styled-components';

import { FlexContainer } from '../../_styles';
import { colors } from '../../_variables';

export const FlexContainerExtended = styled(FlexContainer)`
  margin: 0 0 0 2rem;
  text-align: left;
  width: 45%;
  min-width: 25rem;

  * {
    margin-top: .75rem;
    margin-top: .75rem;
  }

  h2 {
    color: ${colors.aprofundeSeOrange};
  }
  
`;

export const ImageWrapper = styled.div`
  width: 45%;
  min-width: 25rem;
   
  img {
     max-width: 100%;
   }
`;