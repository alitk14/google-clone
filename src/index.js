import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./global.css"
import {ResultContextProvider} from './contexts/ResultContextProvider';
import {BrowserRouter as Router} from "react-router-dom";
ReactDOM.render(
  <ResultContextProvider> 

  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  </ResultContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
