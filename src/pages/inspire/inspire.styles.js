import styled from 'styled-components/macro';
import { CustomButton } from '../../components/SharedComponents/button/button.styles';
import { FlexContainer, Image } from '../../_styles';
import { colors, device } from '../../_variables';

export const InspireFlexContainer = styled(FlexContainer)`
    margin: 0 1rem 0 0;

    @media ${device.laptop} {
      width: 80%;
      margin: 0 0 1rem 0;
    }

    @media ${device.tablet} {
      width: 100%;
      min-width: unset;
    }
`;

export const DropdownPanel = styled.div`
      display: none;
      position: absolute;
      background-color: ${colors.aprofundeSeOrange};
      -webkit-box-shadow: -7px 13px 10px -5px #77777730, 9px 12px 10px -5px #77777730;
      -moz-box-shadow: -7px 13px 10px -5px #77777730, 9px 12px 10px -5px #77777730;
      box-shadow: -7px 13px 10px -5px #77777730, 9px 12px 10px -5px #77777730;
      z-index: 1;
      opacity: 0;
      left: 0;
      width: 100%;
      top: 50px;
`;

export const DropdownDisplayHeader = styled.div`
  border-radius: .25rem;
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: .75rem 1.5rem;
  background-color: ${colors.aprofundeSeOrange};
  color: white;
  margin-top: 1rem;

  svg {
    margin-left: .5rem;
  }

  &:hover {
    opacity: 1;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;

  }
`;

export const DropdownPanelExpanded = styled(DropdownPanel)`
      display: flex;
      flex-direction: column;
      cursor: context-menu;
      animation: load .5s forwards;
`;

export const DropdownItemsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 1rem;

    @media ${device.mobileL} {
      flex-direction: column;
      align-items: center;
      padding: 0;
  }
`;

export const DropdownItems = styled.li`
  padding: .5rem 0;
  width: 32%;
  text-align: left;

  @media ${device.laptopL} {
    width: 43%;
  }
  @media ${device.laptop} {
    width: 29%;
  }
`;

export const BottomButton = styled(CustomButton)`
  background-color: white;
  color: ${colors.aprofundeSeOrange};
`;

export const ImageWrapper = styled.div`
  min-height: 77vh; 
  width: 100%; 
  min-width: 28rem; 

  @media ${device.tablet} {
     min-width: unset; 
    }
`;

// Card Styles 

export const InspireItemHeader = styled.div`
  text-align: left;
`;

export const InspireCard = styled.div`
  width: 32%;
  margin-right: .25rem;
  margin-left: .25rem;
  margin-bottom: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const InspireCardHeader = styled.div`
  
`;

export const InspireImageWrapper = styled.div`
  height: 25rem;
`;


export const InspireImage = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const InspireCardBody = styled.div`
  padding: 4rem;
  line-height: 1.85rem;
  background-color: ${colors.aprofundeSeOrange};
  height: 100%;
`;


