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

library.add(fab, faPlane, faMapMarkedAlt, faHome, faUtensils, faBiking, faBus, faCar, faLanguage);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    console.log(this.state);
    this.setState({route: route});
  };


  render() {
    let body;

    if(this.state.route === 'home') {
      body = <Home/>
    } else {
      body = <About/>
    }

    return (
      <div className="App">
        <MainNavBar onRouteChange={this.onRouteChange}/>
        {body}
        <Footer onRouteChange={this.onRouteChange} />
      </div>
    );
  }
}

export default App;
