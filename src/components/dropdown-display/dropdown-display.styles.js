import styled from 'styled-components/macro';
import {CustomButton} from '../shared-components/button/button.styles';
import { FlexContainer } from '../../_styles';
import { colors } from '../../_variables';

export const DropdownPanel = styled(FlexContainer)`
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
      top: 48px;
`;

export const DropdownDisplayHeader = styled(CustomButton)`
  border-radius: .25rem;
  cursor: auto !important;
  position: relative;
  display: inline-block;
  padding: .75rem 1.5rem;

  svg {
    margin-left: .5rem;
  }

  &:hover {
    opacity: 1;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;

  }
  
  &:hover ${DropdownPanel} {
      display: flex;
      animation: load .5s forwards;
  }
`;

export const DropDownItems = styled.label`
  padding: .5rem 0;
`;

export const BottomButton = styled(CustomButton)`
  background-color: white;
  color: ${colors.aprofundeSeOrange};
`;


