import React from 'react';
import './App.scss';
import Home from "./components/Home/Home";
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import {  faPlane, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPlane, faMapMarkedAlt);

const App  = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
