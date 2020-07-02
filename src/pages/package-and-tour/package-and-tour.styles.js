import styled from "styled-components";
import { colors, device } from '../../_variables';
import { CustomButton } from '../../components/SharedComponents/button/button.styles'


export const Content = styled.div`
  padding-bottom: 3rem;
  
  h2 {
    font-weight: semi-bold;
    margin-top: 7rem;
    font-size: 2.25rem;
    color: ${colors.aprofundeSeOrange}
  }

  @media ${device.laptop} {

  }
`;

export const LinkDayToursBackButton = styled.a`
  display: ${({display}) => !display ? 'none' : display};
  position: absolute;
  left: 8.5rem;
 
 @media ${device.laptop} {
    left: 0.5rem;
  }
`; 

export const DayToursBackButton = styled(CustomButton)`
  border-radius: .5rem;
  padding: .5rem;
  color: black;
  background: white;
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
    
`;
