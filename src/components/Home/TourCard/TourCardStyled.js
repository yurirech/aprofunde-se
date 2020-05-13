import styled from "styled-components";
import { colors } from "../../../_variables";

export const Content = styled.div`
 color: ${colors.aprofundeSeOrange};
  
  .btn-outline-primary {
    color: ${colors.aprofundeSeOrange};
    border-color: ${colors.aprofundeSeOrange};
    
    &:hover {
      color: white;
      border-color: white;
      background: ${colors.aprofundeSeOrange};
    }
  }
  
  h1, label, p, button {
    margin: 1.25rem 0;
  }
  
  label {
   font-size: 1.15rem;
  }
  
  p {
  font-size: 1.1vw;
  line-height: 2rem;
  padding: 0 15%;
  max-height: 252px;
  }
  
  h1 {
    font-size: 1.5rem;
    line-height: 2.2rem;
    font-weight: bold;
  }
  
  @media(max-width: 768px) {
    p {
      font-size: 1rem;
      max-height: unset;
      padding: unset;
    }
  }
`;

