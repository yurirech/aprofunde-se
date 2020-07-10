import styled from 'styled-components/macro';

import {FlexContainer} from '../../_styles';

import {colors, device} from '../../_variables'

export const Content = styled.div`
  
  h3 {
    margin-bottom: 2rem;
  }

  p {
    color: ${colors.aprofundeSeBlackText};
  }

  label {
    margin: 0rem 0 3rem 0;
    color: ${colors.aprofundeSePurple};
    font-weight: 600;
  }

  .right-column {
    margin-top: 10rem;
  }

  @media ${device.laptop} {
    .right-column {
    margin: 0rem 0 3rem 0;
   
  } }
`;

export const FlexContainerExtended = styled(FlexContainer) `
  color: white;
  /* min-width: 50%; */
`