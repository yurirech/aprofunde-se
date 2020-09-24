import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HomeFooter} from "./footer.styles";

class FooterComponent extends Component {
  render() {

    return (
      <HomeFooter>
        <h3 onClick={() => this.props.onRouteChange('worked!')}>Aprofunde-se</h3>
        <a href='https://www.facebook.com/aprofundeseholanda' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon  icon={['fab', 'facebook-f']} />
        </a>
        <a href='https://www.instagram.com/aprofunde_se_holanda/' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon style={{fontSize: '1.1rem', marginLeft: '.5rem'}} icon={['fab', 'instagram']} />
        </a>
      </HomeFooter>
    );
  }
}

export default FooterComponent;
