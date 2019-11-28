import styled from "styled-components";
import {Row} from "react-bootstrap";

export const RowStyled = styled(Row)`
  
  .header {
    position: relative;
    
    .cards-header {
      justify-content: center;
      position: absolute;
      bottom: -5rem;
      z-index: 9999;
      
    }
  }
`;
