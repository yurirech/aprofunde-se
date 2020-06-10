import React, {Component} from 'react';
import HomeHeader from "./home-header/home-header.component";
import {Container, Col} from "react-bootstrap";
import {dayTours, headerContent, homeTours, aboutNetherlands, tourOptions} from "./home.data";
import CentralizedSection from "../../components/SharedComponents/centrilized-section/centrilized-section.component";
import {RowStyled, ExtendedRowStyled} from "./home.styles";
import CarouselWithArrows from "../../components/SharedComponents/CarouselWithArrows/CarouselWithArrows";
import Button from "../../components/SharedComponents/button/button.component"
import { colors } from '../../_variables';
import TourCard from './TourCard/TourCard'
import NetherlandsMap from '../../assets/img/netherlands-map.png'
import TourOption from '../../components/tour-option/tour-option.component';
import AvatarPicture from '../../components/SharedComponents/AvatarPicture/AvatarPicture'
import inspireSeCanal from '../../assets/img/canal-landing.jpg'

class Home extends Component {
  render() {

    return (
      <Container className="p-0" fluid="true">
          <RowStyled noGutters={true}>
            <Col lg={12} className='header'>
              <HomeHeader title={ headerContent.title } subTitle={ headerContent.subTitle } />
            </Col>
          </RowStyled> 
          <ExtendedRowStyled noGutters={true}>
            <Col className='about-nether' lg={12}>
              <img src={NetherlandsMap} alt=""/>
              <CentralizedSection title='A Holanda'  textColor={colors.aprofundeSeBlackText} mainText={aboutNetherlands.text} />
            </Col>
            <Col lg={12} className='tours'>
              <CentralizedSection title={homeTours.title} mainText={homeTours.mainText} />
              <Button text='Saiba mais' />
              <TourOption tourOptions={tourOptions} />
            </Col>
            <Col lg={12} className='dayTours'>
              <CentralizedSection title={dayTours.title} mainText={dayTours.mainText} />
            </Col>
          <Col lg={12}>
              <CarouselWithArrows />
          </Col>
          <Col lg={12} className='inspire-se'>
           <CustomCard buttonText='Saiba mais' title='Inspire-se' mainText='O Aprofunde-se separou algumas ideias pra tornar sua viagem mais especial. Não importa que tipo de pessoa você é e qual sua paixão, nós vamos te ajudar a ficar extremamente satisfeito com a sua viagem. Cheque nosso Instagram para ainda mais ideias.'>
             <AvatarPicture avatarImg={inspireSeCanal} />
           </CustomCard>
          </Col>
          </ExtendedRowStyled>   
      </Container>
    );
  }
}

export default Home;
