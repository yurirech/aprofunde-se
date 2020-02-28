import React, {Component} from 'react';
import CentralizedSection from "../SharedComponents/CentrilizedSection/CentralizedSection";
import {aboutUs} from "./AboutContent";
import styled from "styled-components";
import CarouselWithoutArrows from "../SharedComponents/CarouselWithoutArrows/CarouselWithoutArrows";

const Content = styled.div`
  background-color: #E8E8E8;
  
  p {
    padding: 0 15%;
  }
 
 .title {
    h1 {
      padding-top: 5rem;
      padding-bottom: 1rem;
      color: #000;
  }
 }
`;


class About extends Component {
  render() {
    return (
      <Content>
        <div className='title'>
          <CentralizedSection title={aboutUs.title} mainText={aboutUs.mainText}/>
        </div>
        <CentralizedSection mainText={aboutUs.mainTextTwo}/>
        <CarouselWithoutArrows />
      </Content>
    );
  }
}

export default About;
