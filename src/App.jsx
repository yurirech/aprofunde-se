import React, {Component} from 'react';
import './App.scss';
import Home from "./components/Home/Home";
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPlane,
  faMapMarkedAlt,
  faHome,
  faUtensils,
  faBiking,
  faBus,
  faCar,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import Footer from "./components/SharedComponents/Footer/Footer";
import MainNavBar from "./components/SharedComponents/MainNavBar/MainNavBar";
import About from "./components/About/About";
import Tours from "./components/Tours/Tours";
import Tour from "./components/Tour/Tour";

library.add(fab, faPlane, faMapMarkedAlt, faHome, faUtensils, faBiking, faBus, faCar, faLanguage);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  };


  render() {
    let body;
    const { route } = this.state

    if(route === 'home') {
      body = <Home />
    } else if (route === 'about') {
      body = <About />
    } else if (route === 'embrenhe-se' || route === 'entranhe-se' || route === 'entregue-se') {
      body = <Tour route={ route } />
    } else {
      body = <Tours />
    }

    return (
        <div className="App">
          <MainNavBar route={route} onRouteChange={this.onRouteChange}/>
          {body}
          <Footer onRouteChange={this.onRouteChange} />
        </div>
    );
  }
}

export default App;
