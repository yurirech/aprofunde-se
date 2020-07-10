import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {dropdownDisplayContent} from './inspire.data';
import {  DropdownPanel, 
          DropdownDisplayHeader, 
          DropdownItems, 
          BottomButton, 
          ImageWrapper, 
          DropdownItemsWrapper,
          InspireFlexContainer,
          DropdownPanelExpanded, 
        } from './inspire.styles';
import { FlexContainer, Image } from '../../_styles';
import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import inspireSe from '../../assets/img/inspire/inspire.jpeg'

const Inspire = () => {
 
  let [toggle, setToggle] = useState(false);
  let [title, setTitle] = useState();
  
   // Make relevant button expand on click
  const handleCLick = (e) => {
        setToggle(!toggle);
        setTitle(title = e);    
  }

  return (
    <FlexContainer align='center' margin='4rem 6rem' wrap='wrap' justify='center'>
      <InspireFlexContainer column  width='35%' minWidth='286px'>
        <CentralizedSection title='Inspire-se' mainText='
         O Aprofunde-se separou algumas ideias pra tornar sua viagem mais especial. 
         Nao importa que tipo de pessoa voce é e qual sua paixao, nos vamos te ajudar 
         a ficar extremamente satisfeito com a sua viagem.' />
        
        {/* Mapping inspire buttons */}
        { dropdownDisplayContent.map(content => (
              <DropdownDisplayHeader key={uuid()} onClick={() => handleCLick(content.title)}>
                {content.title}
                <FontAwesomeIcon icon={content.icon} />
                <DropdownPanel as={title === content.title && toggle ? DropdownPanelExpanded : null}>
                  <DropdownItemsWrapper>
                    { content.items.map(items => (
                    <DropdownItems key={uuid()}>{items}</DropdownItems>
                    ))}
                  </DropdownItemsWrapper>
                  <BottomButton>
                      Saiba Mais
                  </BottomButton>
                </DropdownPanel>
              </DropdownDisplayHeader>
            )
          )        
        }
        {/* Endo of mapping inspire buttons */}
      </InspireFlexContainer>
      <InspireFlexContainer width='61%' minWidth='509px' margin='0 0 0 1rem'>
        <ImageWrapper>
          <Image bg={inspireSe} ></Image>
        </ImageWrapper>
      </InspireFlexContainer>
    </FlexContainer>
  );
} 

export default Inspire;