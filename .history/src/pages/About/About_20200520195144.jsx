import React, {Component} from 'react';
import CentralizedSection from "../../components/SharedComponents/CentrilizedSection/CentralizedSection";
import { aboutUs } from "./AboutContent";
import { Content } from "./AboutStyled";


class About extends Component {
  render() {
    return (
      <Content>
        <div className='title'>
          <CentralizedSection title={aboutUs.title} mainText={aboutUs.mainText}/>
        </div>
        <CentralizedSection mainText={aboutUs.mainTextTwo}/>
      </Content>
    );
  }
}

export default About;
