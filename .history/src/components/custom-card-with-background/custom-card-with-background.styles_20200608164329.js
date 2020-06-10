import styled from 'styled-components';
import entranheSe from '../../assets/img/entranhe-se.jpg'
export const Container = styled.div``;
export const BackgroundImage = styled.div`
  background-image: url(${entranheSe});
  background-repeat: no-repeat;
  position: relative;
  width: 500px;
  height: 500px;

`;
export const Overlay = styled.div`
  height: 50%;
  width: 100%;
  background-color: black;
  opacity: .1;
  position: absolute;
  bottom: 0;
`;