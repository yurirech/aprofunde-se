import styled from 'styled-components';
import { Image } from '../../_styles';

export const Container = styled.div`
  width: 100%;
`;

export const ImageExtended = styled(Image)`
  position: relative;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

   div:first-of-type {
    z-index: 999;
    padding-top: 60%;
    padding-bottom: 9%;

    h5 {
      margin-bottom: 10%;
      font-weight: 600;
      line-height: 27px;
    }
  }

  @media
`;
export const Overlay = styled.div`
  height: 52%;
  width: 100%;
  background-color: #fff;
  opacity: .5;
  position: absolute;
  bottom: 0;
  z-index: 1
`;