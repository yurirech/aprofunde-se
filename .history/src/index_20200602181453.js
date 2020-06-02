import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
                 <App />
                </Router>, document.getElementById('root'));
