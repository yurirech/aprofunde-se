import styled from 'styled-components';
import headerBackground from  '../../../assets/img/bg-main.jpg';
import { colors } from "../../../_variables";

export const Content = styled.div`
  background: url(${headerBackground}) no-repeat top center fixed;
  background-size: cover;
  background-position-y: -4rem;
  height: 100vh;
  text-align: left;
  padding: 15% 13%;
  
 div {
   background-color: #00000045;
   width: 45%;
   padding: 4% 3.5%;
   
   h1 {
   font-weight: bold !important;
   }
   
   h5 {
   font-size: 1.25rem;
   margin-top: 1rem;
   }
   
   h5, h1 {
    color: white;
    text-align: left;
  }
 }
 
 @media $ {
  padding: 10% 0;
  
  .br-1rem {
    border-radius: unset;
   }
  
  div {
    width: 100%;
    
    h5 {
      font-size: 1.1rem;
    }
    
    h1, h5 {
    text-align: center;
    }
  }
 }
  
`;

export const Title = styled.h1`
  font-family: var(--font-logo);
  color: ${colors.aprofundeSeOrange};
  font-size: 6.5rem;
  letter-spacing: 0.05em;
   
  @media(max-width: 768px) {
    font-size: 2.5rem;
 }
`;

export const SubTitle = styled.h5`
  color: #844918e0;
  max-width: 46%;
  margin-top: 1.5rem;
  line-height: 1.85rem;
`;
