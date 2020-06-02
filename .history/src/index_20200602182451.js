import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import { v4 as uuid } from 'uuid';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
                 <App />
                </Router>, document.getElementById('root'));
