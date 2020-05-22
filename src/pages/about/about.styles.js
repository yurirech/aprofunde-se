import styled from "styled-components";
import { device, margins, colors } from "../../_variables";


export const Content = styled.div`
    border: 9px solid #ce9b55d9;
    margin: ${margins.marginWeb};
    padding-bottom: 1rem;
  
  p {
    padding: 0 8%;
    font-weight: lighter;
    color: ${colors.aprofundeSeBlackText};
  }
 
 .title {
    h1 {
      padding-top: 3rem;
      padding-bottom: 1rem;
      font-weight: bold;
      font-family: var(--font-logo);
      font-size: 3.5rem;
  }
 }

@media ${device.tablet} {
  border: 5px solid #ce9b55d9;
  margin: 0 2%;

  p {
    padding: 0 2%;
    font-size: .9rem;
  }

  .title {
    h1 {
      padding-top: 2rem;
      font-size: 3.25rem;
      line-height: 49px;
    }
  }
}

`;