import React, {Component} from 'react';
import './Home.scss'
import HomeHeader from "./HomeHeader/HomeHeader";

class Home extends Component {
  render() {
    return (
      <div className='home'>
      <HomeHeader />
      </div>
    );
  }
}

export default Home;
