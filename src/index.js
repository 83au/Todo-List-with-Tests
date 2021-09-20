import React from 'react';
import ReactDOM from 'react-dom';
import Services from './components/Services';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <Services>
    <App />
  </Services>,
  document.getElementById('root')
);

