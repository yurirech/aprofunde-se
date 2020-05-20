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
    padding: ${paddings.paddingWeb} 0;

    img {
      position: absolute;
      z-index: -1;
      width: 23rem;
      opacity: .2;
      right: 1rem;
    }
    
    div:first-child {
      padding: ${paddings.paddingWeb} ${paddings.paddingWeb};
    }
    
  }

  .tours {
    margin-top: 3rem;

    button {
      margin: 3rem 0;
    }
  }
  
  .dayTours {
    padding: 7% 15% !important;    
  }

  .inspire-se {
    padding: 8rem 4rem 1rem;
  }
  
  @media $ {
    
  }
  
`;

export const ExtendedRowStyled = styled(RowStyled)`
  padding: 0 ${paddings.paddingWeb};
`;

