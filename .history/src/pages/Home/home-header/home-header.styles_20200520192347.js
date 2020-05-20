import styled from 'styled-components';
import headerBackground from  '../../../assets/img/bg-main.jpg';
import headerBackgroundMobile from  '../../../assets/img/bg-main-mobile.jpg';
import { colors, device } from "../../../_variables";

export const Content = styled.div`
  background: url(${headerBackground}) no-repeat top center fixed;
  background-size: cover;
  background-position-y: -4rem;
  height: 100vh;
  text-align: left;
  padding: 15% 13%;
  z-index: 10;


 @media ${device.mobileL} {
  background: url(${headerBackgroundMobile}) no-repeat top center;
  padding: unset;
 }
  
`;

export const Title = styled.h1`
  font-family: var(--font-logo);
  color: ${colors.aprofundeSeOrange};
  font-size: 6.5rem;
  letter-spacing: 0.05em;
  font-weight: bold !important;

  @media ${device.tablet}
   
  @media ${device.mobileL} {
    text-align: center;
    font-size: 4rem;
 }
`;

export const SubTitle = styled.h5`
  color: #844918e0;
  max-width: 46%;
  margin-top: 1.5rem;
  line-height: 1.85rem;
  font-size: 1.25rem;
  margin-top: 1rem;

  @media ${device.mobileL} {
    color: #FFFFFF;
    max-width: unset;
    text-align: center;
    padding: 0 10%;
 }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: #000000a8;
  z-index: -1;
  display: none;

  @media ${device.mobileL} {
  display: unset;
 }
`;
