import styled from "styled-components";
import {Row} from "react-bootstrap";
import { paddings, device } from "../../_variables";

export const RowStyled = styled(Row)` 
  
  .header {
    position: relative;
    
    h1 {
    font-weight: unset;
    }
    
    .cards-header {
      justify-content: center;
      position: absolute;
      bottom: -4.5rem;
      z-index: 9999;
      width: 100%;
      
    }
  }

  .about-nether {
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    

    img {
      position: absolute;
      z-index: -1;
      width: 23rem;
      opacity: .2;
      right: 1rem;
      top: -4rem;
    }
    
    h1 {
      margin-bottom: 3rem;
    }
    
    div:first-child {
      padding: ${paddings.paddingWeb} ${paddings.paddingWeb};
    }
    
  }

  .tours {
    margin-top: 5rem;

    button {
      margin: 3rem 0;
    }
  }
  
  .dayTours {
    padding: 3% !important;    
  }

  .inspire-se {
    padding: 5rem 0;
  }
  
  @media ${device.tablet} {
    .about-nether {
      img {
        top: 0;
        right: 0;
      }
    }
  }  
  
  @media ${device.mobileL} {
    .about-nether {
      img {
        top: 20%;
        right: -11%;
        width: unset;
      }
    }
    .dayTours {
    padding: ${paddings.paddingWeb} 0 !important;    
  }
  }
  
`;

export const ExtendedRowStyled = styled(RowStyled)`
  padding: 0 ${paddings.paddingWeb};
`;

