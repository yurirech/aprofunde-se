import styled from "styled-components";
import { device } from '../../_variables';

export const Content = styled.div`
  padding-top: 3rem;
  
  p {
    padding: 0 15%;
  }
  
  .list {
    margin: 3.5rem;
    
    p {
      margin: 3rem 0;
    }
    li {
      font-size: 1rem;
    }
  }

  @media ${device.mobileL} {
    p {
    padding: 0 15%;
  }
  }
`;
