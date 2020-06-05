import styled, { createGlobalStyle } from 'styled-components';
import {paddings, fonts} from './_variables';

export const GlobalStyle = createGlobalStyle`
     ${'' /* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
  } */}

  h1, h2, h3, h4 {
    font-family: ${fonts.caveat};
  }

  h1 {
    font-size: 6.5rem;
  }

  h2 {
    font-size: 4.5rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    
  }
`;

export const FlexContainer = styled.div`
  background-color: ${({color}) => color || null };
  display: flex;
  flex-direction: ${({column}) => column ? 'column' : null};
  flex-wrap: ${({wrap}) => wrap || null};
  justify-content: ${({justify}) => justify || null};
  align-items: ${({align}) => align || null };
  margin : 5rem ${paddings.paddingWeb};
  
`;