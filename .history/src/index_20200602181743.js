import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
                 <App />
                </Router>, document.getElementById('root'));
