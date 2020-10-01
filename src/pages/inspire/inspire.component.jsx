import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, withRouter} from 'react-router-dom';

import {dropdownDisplayContent, inspireViews} from './inspire.data';
import {  
        DropdownPanel, 
        DropdownDisplayHeader, 
        DropdownItems, 
        BottomButton, 
        ImageWrapper, 
        DropdownItemsWrapper,
        InspireFlexContainer,
        DropdownPanelExpanded,
        InspireCard,
        InspireCardHeader,
        InspireImageWrapper,
        InspireCardBody,
        InspireItemHeader,
        InspireImage,
        InspireButton
        } from './inspire.styles';
import { FlexContainer, Image, Overlay } from '../../_styles';

import CentralizedSection from '../../components/shared-components/centrilized-section/centrilized-section.component';
import inspireSe from '../../assets/img/inspire/inspire.jpeg'
import Button from '../../components/shared-components/button/button.component';



const Inspire = ({location}) => {
 
  let [toggle, setToggle] = useState(false);
  let [title, setTitle] = useState();

  //Scroll to top every time the location changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]); //only perform useEffect if location changes

  
   // Make relevant button expand on click
  const handleCLick = (e) => {
        setToggle(!toggle);
        setTitle(title = e);
  }

  // Return chosen View
  const getInspireViews = (inspireView) => {
    let currentView = inspireView.split('/')[2];
      if(inspireViews[currentView]) {   
        return  <div>
                  <FlexContainer margin='4rem 20%'>
                    <InspireItemHeader as={CentralizedSection} title={inspireViews[currentView].title} 
                                      mainText={inspireViews[currentView].mainText} />
                  </FlexContainer>
                  <FlexContainer justify='space-between' wrap='wrap' margin='4rem'>
                    {
                      inspireViews[currentView].cards.map(card => 
                      <InspireCard key={uuid()}>
                        <InspireCardHeader>
                          <InspireImageWrapper>
                            <Overlay opacity='.2' color='#000' height='100%' />
                            <InspireImage bg={card.cardImage}>
                              <h5>{card.cardTitle}</h5>
                            </InspireImage>
                          </InspireImageWrapper>
                        </InspireCardHeader>
                        <InspireCardBody>
                          <p>{card.cardDescription}</p>
                        </InspireCardBody>
                      </InspireCard>             
                      )
                    }
                  </FlexContainer>
                  <InspireButton as={Button} text='Contato' />
              </div>
      } 
      return <div>OH NO! DAMN</div>
  }

  

 if(location.pathname === '/inspire') {
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
                    <BottomButton as={Link} to={`${location.pathname}/${content.route}`}>
                      Saiba Mais
                    </BottomButton>
                </DropdownPanel>
              </DropdownDisplayHeader>
            )
          )        
        }
        {/* End of mapping inspire buttons */}
      </InspireFlexContainer>
      <InspireFlexContainer width='61%' minWidth='509px' margin='0 0 0 1rem'>
        <ImageWrapper>
          <Image bg={inspireSe} />
        </ImageWrapper>
      </InspireFlexContainer>
    </FlexContainer>
  );
 }
  return  getInspireViews(location.pathname);
} 

export default withRouter(Inspire);
