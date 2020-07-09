import React from 'react';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {dropdownDisplayContent} from './inspire.data';
import {DropdownPanel, DropdownDisplayHeader, DropdownItems, BottomButton, ImageWrapper} from './inspire.styles';
import { FlexContainer, Image } from '../../_styles';
import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import inspireSe from '../../assets/img/inspire/inspire.jpeg'

const Inspire = () => {
  return (
    <FlexContainer align='center' margin='4rem 6rem' wrap='wrap'>
      <FlexContainer column margin='0 1rem 0 0' width='35%'>
      <CentralizedSection title='Inspire-se' mainText='
        O Aprofunde-se separou algumas ideias pra tornar sua viagem mais especial. 
        Nao importa que tipo de pessoa voce é e qual sua paixao, nos vamos te ajudar 
        a ficar extremamente satisfeito com a sua viagem.' />
        
        {/* Mapping inspire buttons */}
        { dropdownDisplayContent.map(content =>{ 
          return (
                <DropdownDisplayHeader key={uuid()}>
                  {content.title}
                  <FontAwesomeIcon icon={content.icon} />
                  <div>
                  <DropdownPanel  column margin='0'>
                  { content.items.map(items => (
                    <DropdownItems>{items}</DropdownItems>
                    ))}
                    
                  </DropdownPanel>
                  <BottomButton>
                      Saiba Mais
                  </BottomButton>
                  </div>
                </DropdownDisplayHeader>
              )
            }
          )        
        }
        {/* Endo of mapping inspire buttons */}
      </FlexContainer>
      <FlexContainer width='61%' margin='0 0 0 1rem'>
        <ImageWrapper>
          <Image bg={inspireSe} ></Image>
        </ImageWrapper>
      </FlexContainer>
    </FlexContainer>
        );
} 

export default Inspire;