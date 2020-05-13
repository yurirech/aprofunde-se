import styled from "styled-components";
import { fonts, colors } from "../../../_variables";


export const Content = styled.div`
  
  h1 {
    font-family: ${fonts.caveat};
    font-size: 4.5rem;
    font-weight: lighter;
    color: ${props => props.h1Color ||`${colors.aprofundeSeOrange}`} ;
    margin-bottom: 1rem; 
  }
  
  p {
    color: ${props => props.textColor || null } ;
    line-height: 2rem;
  }
`;
