import styled from "styled-components";
import { colors, device } from '../../_variables';

export const Content = styled.div`
  padding-bottom: 3rem;
  
  h2 {
    font-weight: semi-bold;
    margin-top: 7rem;
    font-size: 2.25rem;
    color: ${colors.aprofundeSeOrange}
  }

`;

export const Spacing = styled.div`
  margin: -1rem;
  height: 0.1rem;
  width: 100%;
`;

export const TourForm = styled.form`
  display: flex;
  justify-content: center;


.react-datepicker-wrapper {
  * {
    width: 100%;
  }
  input {
    padding: .5rem;
    margin-bottom: .5rem;
  }
}

@media ${device.tablet} {
  select, input {
    background: white;
    border: 1px solid rgb(195, 195, 195);
  }
}
    
`;
