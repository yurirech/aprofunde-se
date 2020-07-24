import styled from "styled-components";
import { colors } from '../../../_variables';

export const Content = styled.div`
   
   ul {
    list-style-type: none;
    padding: 0;
    
        li {
        font-size: 1.1rem;
        
        svg { 
         color: ${colors.aprofundeSeOrange};      
     } 
    }
   }
`;
