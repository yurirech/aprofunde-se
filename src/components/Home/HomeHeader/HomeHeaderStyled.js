import styled from 'styled-components';
import headerBackground from  '../../../assets/img/new-header.jpg';

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Content = styled.div`
  background: url(${headerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding: 10%;
  
 div {
   background-color: #00000045;
   width: 45%;
   padding: 4% 3.5%;
   
   h1 {
   font-weight: bold !important;
   }
   
   h4 {
   font-size: 1.25rem;
   margin-top: 1rem;
   }
   
   h4, h1 {
    color: white;
    text-align: left;
  }
 }
  
`;

export const SubTitle = styled.h4`
  font-style: italic;
  font-weight: lighter;
`;
