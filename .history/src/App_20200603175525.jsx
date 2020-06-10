import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import Home from "./pages/Home/home.component";
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
import MainNavBar from "./components/SharedComponents/main-navbar/main-navbar.component";
import About from "./pages/about/about.component";
import Packages from "./pages/packages/packages.component";
import Tour from "./components/package/package";

library.add(fab, faPlane, faMapMarkedAlt, faHome, faUtensils, faBiking, faBus, faCar, faLanguage);


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     route: 'home'
  //   }
  // }

  // onRouteChange = (route) => {
  //   this.setState({route: route});
  // };


  render() {

    return (
        <div className="App">
          <MainNavBar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/packages' component={Packages} />
          {/* {body} */}
          </Switch>
          <Footer onRouteChange={this.onRouteChange} />
        </div>
    );
  }
}

export default App;