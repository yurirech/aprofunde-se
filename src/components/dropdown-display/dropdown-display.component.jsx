import React from 'react';
import {DropdownPanel, DropdownDisplayHeader, DropDownItems, BottomButton} from './dropdown-display.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropdownDisplay = ({name, icon, }) => {
  return (
      <DropdownDisplayHeader>
        Relaxe-se
        <FontAwesomeIcon icon='spa' />
        <DropdownPanel column margin='0'>
          <DropDownItems>Sauna/Spa</DropDownItems>
          <DropDownItems>Praias</DropDownItems>
          <DropDownItems>Parques</DropDownItems>
          <DropDownItems>Museus</DropDownItems>
          <DropDownItems>Restaurantes</DropDownItems>
          <DropDownItems>Paisagens</DropDownItems>
          <DropDownItems>Moinhos</DropDownItems>
          <DropDownItems>Compras</DropDownItems>
          <DropDownItems>Castelos</DropDownItems>
          <BottomButton>
            Saiba Mais
          </BottomButton>
        </DropdownPanel>
      </DropdownDisplayHeader>
  );
};

export default DropdownDisplay;