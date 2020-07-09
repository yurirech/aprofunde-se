import React from 'react';
import {DropdownPanel, DropdownDisplayHeader, DropDownItems, BottomButton} from './dropdown-display.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropdownDisplay = ({name, icon, items }) => {
  return (
      <DropdownDisplayHeader>
        Relaxe-se
        <FontAwesomeIcon icon='spa' />
        <DropdownPanel column margin='0'>
          <DropDownItems>Sauna/Spa</DropDownItems>
          <BottomButton>
            Saiba Mais
          </BottomButton>
        </DropdownPanel>
      </DropdownDisplayHeader>
  );
};

export default DropdownDisplay;