import styled from 'styled-components/macro';
import { Image } from '../../_styles';
import { device } from '../../_variables';

export const Container = styled.div`
  width: 100%;
  margin-bottom: ${({marginBottom}) => marginBottom ? '4rem' : null };

  @media ${device.tablet} {
    width: unset;
  }
`;

export const ImageExtended = styled(Image)`
  position: relative;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

   div:first-of-type {
    z-index: 999;
    padding: ${({contentPadding}) => contentPadding || '60% 0 9% 0'};

    h5 {
      margin-bottom: 10%;
      font-weight: 600;
      line-height: 27px;
      padding: 0 8%;
    }
  }

  @media ${device.tablet} {
    min-width: 320px;
    margin-bottom: 1rem;
  }
  
  @media ${device.mobileL} {
    min-width: ${({mobileMinWidth}) => mobileMinWidth || '200px'};
  }
`;
