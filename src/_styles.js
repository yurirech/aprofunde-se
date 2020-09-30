import styled, { createGlobalStyle } from 'styled-components/macro';
import {paddings, fonts, device} from './_variables';

export const GlobalStyle = createGlobalStyle`
     ${'' /* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
  } */}
  h1 {
    font-family: ${fonts.primaryFont};
  }
  
  .hide-sm-up {
    display: none;
  }
  
  .hide-sm-down {
    display: block;
  }
  
  @media ${device.tablet} {
    .hide-sm-up {
     display: block;
    }
    
    .hide-sm-down {
     display: none;
    }
  }
 
`;

export const FlexContainer = styled.div`
  background-color: ${({color}) => color || null };
  display: ${({display}) => display ||  'flex' };
  flex-direction: ${({column, direction}) => column ? 'column' : direction};
  flex-wrap: ${({wrap}) => wrap || null};
  justify-content: ${({justify}) => justify || null};
  align-items: ${({align}) => align || null };
  margin : ${({margin}) => margin || `4rem ${paddings.paddingWeb}` };
  width:  ${({width}) => width || null };
  min-width:  ${({minWidth}) => minWidth || null };
  

  @media ${device.laptop}  {
    width:  ${({widthLg}) => widthLg || null };
  }

  @media ${device.tablet} {
    flex-direction: ${({columnMd}) => columnMd ? 'column' : null};
    align-items: ${({alignMd}) => alignMd || null };
    margin : ${({margin}) => margin ? `9% 7%` : null };
    width:  ${({widthMd}) => widthMd || null };
  } 
`;

export const Image = styled.div`
     background-image: ${props => `url(${props.bg})`};
     background-position: center;
     background-size: cover;
     background-repeat: no-repeat;
     height: ${({height}) => height || '100%'};
     width: ${({width}) => width || '100%'};
`;

export const Overlay = styled.div`
  height: ${({height}) => height || '52%'};
  width: 100%;
  background-color: ${({color}) => color || '#fff'};
  opacity: ${({opacity}) => opacity || '.5'};
  position: absolute;
  bottom: 0;
  z-index: 1
`;

export const ImageWrapper = styled.div`
  
`;
