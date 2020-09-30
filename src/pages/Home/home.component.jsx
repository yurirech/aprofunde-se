import React, {Component} from 'react';
import {Container, Col} from "react-bootstrap";

import {dayTours, headerContent, homeTours, aboutNetherlands, tourOptions} from "./home.data";
import {RowStyled, ExtendedRowStyled} from "./home.styles";
import { colors } from '../../_variables';

import CarouselWithArrows from "../../components/shared-components/CarouselWithArrows/CarouselWithArrows";
import Button from "../../components/shared-components/button/button.component"
import CentralizedSection from "../../components/shared-components/centrilized-section/centrilized-section.component";
import HomeHeader from "./home-header/home-header.component";
import TourCard from './tour-card/tour-card.component';
import TourOption from '../../components/tour-option/tour-option.component';


import NetherlandsMap from '../../assets/img/netherlands-map.png'
import inspireSeCanal from '../../assets/img/canal-landing.jpg'
import AvatarPicture from '../../components/shared-components/AvatarPicture/AvatarPicture'
import {Link} from "react-router-dom";


class Home extends Component {
  render() {

    return (
      <Container className="p-0" fluid="true">
          <RowStyled noGutters={true}>
            <Col lg={12} className='header'>
              <HomeHeader title={ headerContent.title } subTitle={ headerContent.subTitle } />
            </Col>
          </RowStyled> 
          <ExtendedRowStyled style={{minHeight: '600px'}} noGutters={true}>
            <Col className='about-nether' lg={12}>
              <img src={NetherlandsMap} alt=""/>
              <CentralizedSection title='A Holanda'  textColor={colors.aprofundeSeBlackText} mainText={aboutNetherlands.text} />
            </Col>
          </ExtendedRowStyled>
          <ExtendedRowStyled style={{'backgroundColor': '#92929214',  marginBottom: '2rem'}} noGutters={true}>
            <Col lg={12} className='tours'>
              <CentralizedSection title={homeTours.title} mainText={homeTours.mainText} />
              <TourOption tourOptions={tourOptions} />
              <Link to='/day-tours'>
                <Button width='33%' text='Saiba mais' />
              </Link>
            </Col>
          </ExtendedRowStyled>
          <ExtendedRowStyled noGutters={true}>
            <Col lg={12} className='dayTours'>
              <CentralizedSection title={dayTours.title} mainText={dayTours.mainText} />
            </Col>
          </ExtendedRowStyled>
          <ExtendedRowStyled style={{marginBottom: '3rem'}} noGutters={true}>
            <Col lg={12}>
              <CarouselWithArrows />
              <br/><br/><br/>
              <Link to='/packages'>
                <Button width='33%' text='Saiba mais' />
              </Link>
            </Col>
          </ExtendedRowStyled>
          <ExtendedRowStyled style={{'backgroundColor': '#92929214'}} noGutters={true}>
            <Col lg={12} className='inspire-se'>
             <TourCard buttonText={null} title='Inspire-se' mainText='O Aprofunde-se separou algumas ideias pra tornar sua viagem mais especial.
             Não importa que tipo de pessoa você é e qual sua paixão, nós vamos te ajudar a ficar extremamente satisfeito com a sua viagem.
             Cheque nosso Instagram para ainda mais ideias.'>
               <AvatarPicture avatarImg={inspireSeCanal} />
             </TourCard>
              <Link to='/inspire'>
                <Button width='33%' text='Saiba mais' />
              </Link>
            </Col>
          </ExtendedRowStyled>   
      </Container>
    );
  }
}

export default Home;
