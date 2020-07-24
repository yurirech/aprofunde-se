import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
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
  faLanguage,
  faGift,
  faArrowLeft,
  faSpa,
  faLightbulb,
  faMapSigns
} from '@fortawesome/free-solid-svg-icons';

import './App.scss';

import { GlobalStyle } from "./_styles";

import Home from "./pages/Home/home.component";
import Footer from "./components/shared-components/Footer/Footer";
import MainNavBar from "./components/shared-components/main-navbar/main-navbar.component";
import About from "./pages/about/about.component";
import Packages from "./pages/packages/packages.component";
import DayTours from './pages/day-tours/day-tours.component';
import Inspire from './pages/inspire/inspire.component';
import Instagram from "./pages/instagram/instagram.component";
import ContactUs from "./pages/contac-us/contact-us.component";

library.add(fab, faPlane, faMapMarkedAlt, faHome, faUtensils, faBiking, 
            faBus, faCar, faLanguage, faGift, faArrowLeft, faSpa, faLightbulb, faMapSigns);


class App extends Component {
  render() {

    return (
        <div className="App">
          <GlobalStyle />
          <MainNavBar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/packages' component={Packages} />
          <Route path='/day-tours' component={DayTours} />
          <Route path='/inspire' component={Inspire} />
          <Route path='/instagram' component={Instagram} />
          <Route path='/contact-us' component={ContactUs} />
          </Switch>
          <Footer onRouteChange={this.onRouteChange} />
        </div>
    );
  }
}

export default App;
