import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {Container, Col} from "react-bootstrap";
import {dayTours, headerContent, homeTours, aboutNetherlands, tourOptions} from "./HomeContent";
import CentralizedSection from "../shared-components/CentrilizedSection/CentralizedSection";
import {RowStyled, ExtendedRowStyled} from "./HomeStyled";
import CarouselWithArrows from "../shared-components/CarouselWithArrows/CarouselWithArrows";
import Button from "../shared-components/button/button.component"
import { colors } from '../../_variables';
import TourCard from './TourCard/TourCard'
import NetherlandsMap from '../../assets/img/netherlands-map.png'
import TourOption from '../../components/tour-option/tour-option.component';
import AvatarPicture from '../shared-components/AvatarPicture/AvatarPicture'
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
          <ExtendedRowStyled noGutters={true} className='justify-content-center' >
            <Col lg={12} className='dayTours'>
              <CentralizedSection title={dayTours.title} mainText={dayTours.mainText} />
            </Col>
            <Col lg={11}>
              <CarouselWithArrows />
            </Col>
          </ExtendedRowStyled>
          <Col lg={12} className='inspire-se'>
           <TourCard buttonText='Saiba mais' title='Inspire-se' mainText='O Aprofunde-se separou algumas ideias pra tornar sua viagem mais especial. Não importa que tipo de pessoa você é e qual sua paixão, nós vamos te ajudar a ficar extremamente satisfeito com a sua viagem. Cheque nosso Instagram para ainda mais ideias.'>
             <AvatarPicture avatarImg={inspireSeCanal} />
           </TourCard>
          </Col>
          </ExtendedRowStyled>   
      </Container>
    );
  }
}

export default Home;
