import styled from "styled-components";
import {Row} from "react-bootstrap";

export const RowStyled = styled(Row)` 
    h1 {
      font-weight: bold;
    }
  
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
  
  .tours {
    padding: 7% 15% !important;
    
  }
  
  .web-body {
    
  }
`;
