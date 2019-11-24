import React, {Component} from 'react';
import headerBackground from  '../../../assets/img/travel-pin.jpg'

class HomeHeader extends Component {
  render() {
    return (
      <div className='header'>
        <img src={ headerBackground }
             alt="travel-header"/>
      </div>
    );
  }
}

export default HomeHeader;
